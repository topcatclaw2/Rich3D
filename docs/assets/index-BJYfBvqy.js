(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function TM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Zd={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function AM(){if(J_)return pt;J_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,T={};function x(z,J,Re){this.props=z,this.context=J,this.refs=T,this.updater=Re||R}x.prototype.isReactComponent={},x.prototype.setState=function(z,J){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,J,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=x.prototype;function L(z,J,Re){this.props=z,this.context=J,this.refs=T,this.updater=Re||R}var M=L.prototype=new U;M.constructor=L,N(M,x.prototype),M.isPureReactComponent=!0;var I=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function O(z,J,Re){var Oe=Re.ref;return{$$typeof:a,type:z,key:J,ref:Oe!==void 0?Oe:null,props:Re}}function q(z,J){return O(z.type,J,z.props)}function k(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function j(z){var J={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Re){return J[Re]})}var pe=/\/+/g;function he(z,J){return typeof z=="object"&&z!==null&&z.key!=null?j(""+z.key):J.toString(36)}function ie(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(J){z.status==="pending"&&(z.status="fulfilled",z.value=J)},function(J){z.status==="pending"&&(z.status="rejected",z.reason=J)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function H(z,J,Re,Oe,Fe){var se=typeof z;(se==="undefined"||se==="boolean")&&(z=null);var Te=!1;if(z===null)Te=!0;else switch(se){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(z.$$typeof){case a:case e:Te=!0;break;case g:return Te=z._init,H(Te(z._payload),J,Re,Oe,Fe)}}if(Te)return Fe=Fe(z),Te=Oe===""?"."+he(z,0):Oe,I(Fe)?(Re="",Te!=null&&(Re=Te.replace(pe,"$&/")+"/"),H(Fe,J,Re,"",function(st){return st})):Fe!=null&&(k(Fe)&&(Fe=q(Fe,Re+(Fe.key==null||z&&z.key===Fe.key?"":(""+Fe.key).replace(pe,"$&/")+"/")+Te)),J.push(Fe)),1;Te=0;var Ce=Oe===""?".":Oe+":";if(I(z))for(var Ge=0;Ge<z.length;Ge++)Oe=z[Ge],se=Ce+he(Oe,Ge),Te+=H(Oe,J,Re,se,Fe);else if(Ge=b(z),typeof Ge=="function")for(z=Ge.call(z),Ge=0;!(Oe=z.next()).done;)Oe=Oe.value,se=Ce+he(Oe,Ge++),Te+=H(Oe,J,Re,se,Fe);else if(se==="object"){if(typeof z.then=="function")return H(ie(z),J,Re,Oe,Fe);throw J=String(z),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Te}function W(z,J,Re){if(z==null)return z;var Oe=[],Fe=0;return H(z,Oe,"","",function(se){return J.call(Re,se,Fe++)}),Oe}function re(z){if(z._status===-1){var J=z._result;J=J(),J.then(function(Re){(z._status===0||z._status===-1)&&(z._status=1,z._result=Re)},function(Re){(z._status===0||z._status===-1)&&(z._status=2,z._result=Re)}),z._status===-1&&(z._status=0,z._result=J)}if(z._status===1)return z._result.default;throw z._result}var Se=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Ee={map:W,forEach:function(z,J,Re){W(z,function(){J.apply(this,arguments)},Re)},count:function(z){var J=0;return W(z,function(){J++}),J},toArray:function(z){return W(z,function(J){return J})||[]},only:function(z){if(!k(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return pt.Activity=S,pt.Children=Ee,pt.Component=x,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=L,pt.StrictMode=r,pt.Suspense=p,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,pt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},pt.cache=function(z){return function(){return z.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(z,J,Re){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Oe=N({},z.props),Fe=z.key;if(J!=null)for(se in J.key!==void 0&&(Fe=""+J.key),J)!A.call(J,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&J.ref===void 0||(Oe[se]=J[se]);var se=arguments.length-2;if(se===1)Oe.children=Re;else if(1<se){for(var Te=Array(se),Ce=0;Ce<se;Ce++)Te[Ce]=arguments[Ce+2];Oe.children=Te}return O(z.type,Fe,Oe)},pt.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},pt.createElement=function(z,J,Re){var Oe,Fe={},se=null;if(J!=null)for(Oe in J.key!==void 0&&(se=""+J.key),J)A.call(J,Oe)&&Oe!=="key"&&Oe!=="__self"&&Oe!=="__source"&&(Fe[Oe]=J[Oe]);var Te=arguments.length-2;if(Te===1)Fe.children=Re;else if(1<Te){for(var Ce=Array(Te),Ge=0;Ge<Te;Ge++)Ce[Ge]=arguments[Ge+2];Fe.children=Ce}if(z&&z.defaultProps)for(Oe in Te=z.defaultProps,Te)Fe[Oe]===void 0&&(Fe[Oe]=Te[Oe]);return O(z,se,Fe)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(z){return{$$typeof:m,render:z}},pt.isValidElement=k,pt.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:re}},pt.memo=function(z,J){return{$$typeof:h,type:z,compare:J===void 0?null:J}},pt.startTransition=function(z){var J=F.T,Re={};F.T=Re;try{var Oe=z(),Fe=F.S;Fe!==null&&Fe(Re,Oe),typeof Oe=="object"&&Oe!==null&&typeof Oe.then=="function"&&Oe.then(P,Se)}catch(se){Se(se)}finally{J!==null&&Re.types!==null&&(J.types=Re.types),F.T=J}},pt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},pt.use=function(z){return F.H.use(z)},pt.useActionState=function(z,J,Re){return F.H.useActionState(z,J,Re)},pt.useCallback=function(z,J){return F.H.useCallback(z,J)},pt.useContext=function(z){return F.H.useContext(z)},pt.useDebugValue=function(){},pt.useDeferredValue=function(z,J){return F.H.useDeferredValue(z,J)},pt.useEffect=function(z,J){return F.H.useEffect(z,J)},pt.useEffectEvent=function(z){return F.H.useEffectEvent(z)},pt.useId=function(){return F.H.useId()},pt.useImperativeHandle=function(z,J,Re){return F.H.useImperativeHandle(z,J,Re)},pt.useInsertionEffect=function(z,J){return F.H.useInsertionEffect(z,J)},pt.useLayoutEffect=function(z,J){return F.H.useLayoutEffect(z,J)},pt.useMemo=function(z,J){return F.H.useMemo(z,J)},pt.useOptimistic=function(z,J){return F.H.useOptimistic(z,J)},pt.useReducer=function(z,J,Re){return F.H.useReducer(z,J,Re)},pt.useRef=function(z){return F.H.useRef(z)},pt.useState=function(z){return F.H.useState(z)},pt.useSyncExternalStore=function(z,J,Re){return F.H.useSyncExternalStore(z,J,Re)},pt.useTransition=function(){return F.H.useTransition()},pt.version="19.2.8",pt}var $_;function kp(){return $_||($_=1,Zd.exports=AM()),Zd.exports}var Ye=kp();const E=TM(Ye);var Kd={exports:{}},ho={},Qd={exports:{}},jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function RM(){return ev||(ev=1,(function(a){function e(H,W){var re=H.length;H.push(W);e:for(;0<re;){var Se=re-1>>>1,Ee=H[Se];if(0<o(Ee,W))H[Se]=W,H[re]=Ee,re=Se;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var W=H[0],re=H.pop();if(re!==W){H[0]=re;e:for(var Se=0,Ee=H.length,z=Ee>>>1;Se<z;){var J=2*(Se+1)-1,Re=H[J],Oe=J+1,Fe=H[Oe];if(0>o(Re,re))Oe<Ee&&0>o(Fe,Re)?(H[Se]=Fe,H[Oe]=re,Se=Oe):(H[Se]=Re,H[J]=re,Se=J);else if(Oe<Ee&&0>o(Fe,re))H[Se]=Fe,H[Oe]=re,Se=Oe;else break e}}return W}function o(H,W){var re=H.sortIndex-W.sortIndex;return re!==0?re:H.id-W.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();a.unstable_now=function(){return f.now()-m}}var p=[],h=[],g=1,S=null,_=3,b=!1,R=!1,N=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function M(H){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=H)r(h),W.sortIndex=W.expirationTime,e(p,W);else break;W=n(h)}}function I(H){if(N=!1,M(H),!R)if(n(p)!==null)R=!0,P||(P=!0,j());else{var W=n(h);W!==null&&ie(I,W.startTime-H)}}var P=!1,F=-1,A=5,O=-1;function q(){return T?!0:!(a.unstable_now()-O<A)}function k(){if(T=!1,P){var H=a.unstable_now();O=H;var W=!0;try{e:{R=!1,N&&(N=!1,U(F),F=-1),b=!0;var re=_;try{t:{for(M(H),S=n(p);S!==null&&!(S.expirationTime>H&&q());){var Se=S.callback;if(typeof Se=="function"){S.callback=null,_=S.priorityLevel;var Ee=Se(S.expirationTime<=H);if(H=a.unstable_now(),typeof Ee=="function"){S.callback=Ee,M(H),W=!0;break t}S===n(p)&&r(p),M(H)}else r(p);S=n(p)}if(S!==null)W=!0;else{var z=n(h);z!==null&&ie(I,z.startTime-H),W=!1}}break e}finally{S=null,_=re,b=!1}W=void 0}}finally{W?j():P=!1}}}var j;if(typeof L=="function")j=function(){L(k)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,he=pe.port2;pe.port1.onmessage=k,j=function(){he.postMessage(null)}}else j=function(){x(k,0)};function ie(H,W){F=x(function(){H(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(H){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var re=_;_=W;try{return H()}finally{_=re}},a.unstable_requestPaint=function(){T=!0},a.unstable_runWithPriority=function(H,W){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var re=_;_=H;try{return W()}finally{_=re}},a.unstable_scheduleCallback=function(H,W,re){var Se=a.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Se+re:Se):re=Se,H){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=re+Ee,H={id:g++,callback:W,priorityLevel:H,startTime:re,expirationTime:Ee,sortIndex:-1},re>Se?(H.sortIndex=re,e(h,H),n(p)===null&&H===n(h)&&(N?(U(F),F=-1):N=!0,ie(I,re-Se))):(H.sortIndex=Ee,e(p,H),R||b||(R=!0,P||(P=!0,j()))),H},a.unstable_shouldYield=q,a.unstable_wrapCallback=function(H){var W=_;return function(){var re=_;_=W;try{return H.apply(this,arguments)}finally{_=re}}}})(jd)),jd}var tv;function CM(){return tv||(tv=1,Qd.exports=RM()),Qd.exports}var Jd={exports:{}},Qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function wM(){if(nv)return Qn;nv=1;var a=kp();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,h,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:p,containerInfo:h,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Qn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(p,h,null,g)},Qn.flushSync=function(p){var h=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=h,r.p=g,r.d.f()}},Qn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Qn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Qn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,S=m(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:b}):g==="script"&&r.d.X(p,{crossOrigin:S,integrity:_,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Qn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=m(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Qn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,S=m(g,h.crossOrigin);r.d.L(p,g,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Qn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=m(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Qn.requestFormReset=function(p){r.d.r(p)},Qn.unstable_batchedUpdates=function(p,h){return p(h)},Qn.useFormState=function(p,h,g){return f.H.useFormState(p,h,g)},Qn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qn.version="19.2.8",Qn}var iv;function DM(){if(iv)return Jd.exports;iv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Jd.exports=wM(),Jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function NM(){if(av)return ho;av=1;var a=CM(),e=kp(),n=DM();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function h(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return p(u),t;if(d===l)return p(u),i;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=u,l=d;else{for(var y=!1,D=u.child;D;){if(D===s){y=!0,s=u,l=d;break}if(D===l){y=!0,l=u,s=d;break}D=D.sibling}if(!y){for(D=d.child;D;){if(D===s){y=!0,s=d,l=u;break}if(D===l){y=!0,l=d,s=u;break}D=D.sibling}if(!y)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case x:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case P:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case L:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case M:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}var ie=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},Se=[],Ee=-1;function z(t){return{current:t}}function J(t){0>Ee||(t.current=Se[Ee],Se[Ee]=null,Ee--)}function Re(t,i){Ee++,Se[Ee]=t.current,t.current=i}var Oe=z(null),Fe=z(null),se=z(null),Te=z(null);function Ce(t,i){switch(Re(se,i),Re(Fe,t),Re(Oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?S_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=S_(i),t=M_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Oe),Re(Oe,t)}function Ge(){J(Oe),J(Fe),J(se)}function st(t){t.memoizedState!==null&&Re(Te,t);var i=Oe.current,s=M_(i,t.type);i!==s&&(Re(Fe,t),Re(Oe,s))}function je(t){Fe.current===t&&(J(Oe),J(Fe)),Te.current===t&&(J(Te),oo._currentValue=re)}var Ot,ht;function dt(t){if(Ot===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ot=i&&i[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+t+ht}var ct=!1;function Be(t,i){if(!t||ct)return"";ct=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(_e){var de=_e}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(_e){de=_e}t.call(Ae.prototype)}}else{try{throw Error()}catch(_e){de=_e}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(_e){if(_e&&de&&typeof _e.stack=="string")return[_e.stack,de.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],D=d[1];if(y&&D){var V=y.split(`
`),oe=D.split(`
`);for(u=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;u<oe.length&&!oe[u].includes("DetermineComponentFrameRoot");)u++;if(l===V.length||u===oe.length)for(l=V.length-1,u=oe.length-1;1<=l&&0<=u&&V[l]!==oe[u];)u--;for(;1<=l&&0<=u;l--,u--)if(V[l]!==oe[u]){if(l!==1||u!==1)do if(l--,u--,0>u||V[l]!==oe[u]){var Me=`
`+V[l].replace(" at new "," at ");return t.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",t.displayName)),Me}while(1<=l&&0<=u);break}}}finally{ct=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?dt(s):""}function vt(t,i){switch(t.tag){case 26:case 27:case 5:return dt(t.type);case 16:return dt("Lazy");case 13:return t.child!==i&&i!==null?dt("Suspense Fallback"):dt("Suspense");case 19:return dt("SuspenseList");case 0:case 15:return Be(t.type,!1);case 11:return Be(t.type.render,!1);case 1:return Be(t.type,!0);case 31:return dt("Activity");default:return""}}function Jt(t){try{var i="",s=null;do i+=vt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Vt=Object.prototype.hasOwnProperty,on=a.unstable_scheduleCallback,Bt=a.unstable_cancelCallback,an=a.unstable_shouldYield,Q=a.unstable_requestPaint,Dt=a.unstable_now,ve=a.unstable_getCurrentPriorityLevel,C=a.unstable_ImmediatePriority,v=a.unstable_UserBlockingPriority,X=a.unstable_NormalPriority,G=a.unstable_LowPriority,K=a.unstable_IdlePriority,me=a.log,ye=a.unstable_setDisableYieldValue,ee=null,ae=null;function ge(t){if(typeof me=="function"&&ye(t),ae&&typeof ae.setStrictMode=="function")try{ae.setStrictMode(ee,t)}catch{}}var Ue=Math.clz32?Math.clz32:ze,Le=Math.log,Ne=Math.LN2;function ze(t){return t>>>=0,t===0?32:31-(Le(t)/Ne|0)|0}var Ve=256,nt=262144,Y=4194304;function Ie(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var u=0,d=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var D=l&134217727;return D!==0?(l=D&~d,l!==0?u=Ie(l):(y&=D,y!==0?u=Ie(y):s||(s=D&~t,s!==0&&(u=Ie(s))))):(D=l&~d,D!==0?u=Ie(D):y!==0?u=Ie(y):s||(s=l&~t,s!==0&&(u=Ie(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Pe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function He(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function we(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function $e(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ze(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function cn(t,i,s,l,u,d){var y=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var D=t.entanglements,V=t.expirationTimes,oe=t.hiddenUpdates;for(s=y&~s;0<s;){var Me=31-Ue(s),Ae=1<<Me;D[Me]=0,V[Me]=-1;var de=oe[Me];if(de!==null)for(oe[Me]=null,Me=0;Me<de.length;Me++){var _e=de[Me];_e!==null&&(_e.lane&=-536870913)}s&=~Ae}l!==0&&Ft(t,l,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(y&~i))}function Ft(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ue(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ei(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ue(s),u=1<<l;u&i|t[l]&i&&(t[l]|=i),s&=~u}}function Zn(t,i){var s=i&-i;return s=(s&42)!==0?1:qa(s),(s&(t.suspendedLanes|i))!==0?0:s}function qa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Za(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ka(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:W_(t.type))}function pa(t,i){var s=W.p;try{return W.p=t,i()}finally{W.p=s}}var mi=Math.random().toString(36).slice(2),B="__reactFiber$"+mi,De="__reactProps$"+mi,Ke="__reactContainer$"+mi,Rt="__reactEvents$"+mi,sn="__reactListeners$"+mi,Dn="__reactHandles$"+mi,un="__reactResources$"+mi,si="__reactMarker$"+mi;function ki(t){delete t[B],delete t[De],delete t[Rt],delete t[sn],delete t[Dn]}function ma(t){var i=t[B];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ke]||s[B]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=w_(t);t!==null;){if(s=t[B])return s;t=w_(t)}return i}t=s,s=t.parentNode}return null}function ga(t){if(t=t[B]||t[Ke]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function zs(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Qa(t){var i=t[un];return i||(i=t[un]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function En(t){t[si]=!0}var Bo=new Set,w={};function $(t,i){fe(t,i),fe(t+"Capture",i)}function fe(t,i){for(w[t]=i,t=0;t<i.length;t++)Bo.add(i[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},Xe={};function Qe(t){return Vt.call(Xe,t)?!0:Vt.call(ue,t)?!1:ce.test(t)?Xe[t]=!0:(ue[t]=!0,!1)}function ke(t,i,s){if(Qe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function et(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Je(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function at(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(y){s=""+y,d.call(this,y)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function It(t){if(!t._valueTracker){var i=gt(t)?"checked":"value";t._valueTracker=at(t,i,""+t[i])}}function pn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=gt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function rn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wt=/[\n"\\]/g;function Yt(t){return t.replace(Wt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function qe(t,i,s,l,u,d,y,D){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),i!=null?y==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+rt(i)):t.value!==""+rt(i)&&(t.value=""+rt(i)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),i!=null?Et(t,y,rt(i)):s!=null?Et(t,y,rt(s)):l!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+rt(D):t.removeAttribute("name")}function Kn(t,i,s,l,u,d,y,D){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){It(t);return}s=s!=null?""+rt(s):"",i=i!=null?""+rt(i):s,D||i===t.value||(t.value=i),t.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=D?t.checked:!!l,t.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),It(t)}function Et(t,i,s){i==="number"&&rn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Nn(t,i,s,l){if(t=t.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<t.length;s++)u=i.hasOwnProperty("$"+t[s].value),t[s].selected!==u&&(t[s].selected=u),u&&l&&(t[s].defaultSelected=!0)}else{for(s=""+rt(s),i=null,u=0;u<t.length;u++){if(t[u].value===s){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function gi(t,i,s){if(i!=null&&(i=""+rt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+rt(s):""}function Gi(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ie(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=rt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),It(t)}function _i(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var qt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||qt.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Vi(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&s[u]!==l&&mn(t,u,l)}else for(var d in i)i.hasOwnProperty(d)&&mn(t,d,i[d])}function Xt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ja=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bs(t){return ja.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function _a(){}var Xu=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pr=null,mr=null;function xm(t){var i=ga(t);if(i&&(t=i.stateNode)){var s=t[De]||null;e:switch(t=i.stateNode,i.type){case"input":if(qe(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Yt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var u=l[De]||null;if(!u)throw Error(r(90));qe(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&pn(l)}break e;case"textarea":gi(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Nn(t,!!s.multiple,i,!1)}}}var Yu=!1;function Sm(t,i,s){if(Yu)return t(i,s);Yu=!0;try{var l=t(i);return l}finally{if(Yu=!1,(pr!==null||mr!==null)&&(Tc(),pr&&(i=pr,t=mr,mr=pr=null,xm(i),t)))for(i=0;i<t.length;i++)xm(t[i])}}function Tl(t,i){var s=t.stateNode;if(s===null)return null;var l=s[De]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(va)try{var Al={};Object.defineProperty(Al,"passive",{get:function(){qu=!0}}),window.addEventListener("test",Al,Al),window.removeEventListener("test",Al,Al)}catch{qu=!1}var Ja=null,Zu=null,Fo=null;function Mm(){if(Fo)return Fo;var t,i=Zu,s=i.length,l,u="value"in Ja?Ja.value:Ja.textContent,d=u.length;for(t=0;t<s&&i[t]===u[t];t++);var y=s-t;for(l=1;l<=y&&i[s-l]===u[d-l];l++);return Fo=u.slice(t,1<l?1-l:void 0)}function Ho(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function Em(){return!1}function ri(t){function i(s,l,u,d,y){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(d):d[D]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ko:Em,this.isPropagationStopped=Em,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),i}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=ri(Fs),Rl=S({},Fs,{view:0,detail:0}),Ex=ri(Rl),Ku,Qu,Cl,Vo=S({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cl&&(Cl&&t.type==="mousemove"?(Ku=t.screenX-Cl.screenX,Qu=t.screenY-Cl.screenY):Qu=Ku=0,Cl=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),bm=ri(Vo),bx=S({},Vo,{dataTransfer:0}),Tx=ri(bx),Ax=S({},Rl,{relatedTarget:0}),ju=ri(Ax),Rx=S({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=ri(Rx),wx=S({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dx=ri(wx),Nx=S({},Fs,{data:0}),Tm=ri(Nx),Ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ox[t])?!!i[t]:!1}function Ju(){return Ix}var Px=S({},Rl,{key:function(t){if(t.key){var i=Ux[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zx=ri(Px),Bx=S({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=ri(Bx),Fx=S({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),Hx=ri(Fx),kx=S({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=ri(kx),Vx=S({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xx=ri(Vx),Wx=S({},Fs,{newState:0,oldState:0}),Yx=ri(Wx),qx=[9,13,27,32],$u=va&&"CompositionEvent"in window,wl=null;va&&"documentMode"in document&&(wl=document.documentMode);var Zx=va&&"TextEvent"in window&&!wl,Rm=va&&(!$u||wl&&8<wl&&11>=wl),Cm=" ",wm=!1;function Dm(t,i){switch(t){case"keyup":return qx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gr=!1;function Kx(t,i){switch(t){case"compositionend":return Nm(i);case"keypress":return i.which!==32?null:(wm=!0,Cm);case"textInput":return t=i.data,t===Cm&&wm?null:t;default:return null}}function Qx(t,i){if(gr)return t==="compositionend"||!$u&&Dm(t,i)?(t=Mm(),Fo=Zu=Ja=null,gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rm&&i.locale!=="ko"?null:i.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!jx[t.type]:i==="textarea"}function Lm(t,i,s,l){pr?mr?mr.push(l):mr=[l]:pr=l,i=Uc(i,"onChange"),0<i.length&&(s=new Go("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Dl=null,Nl=null;function Jx(t){m_(t,0)}function Xo(t){var i=zs(t);if(pn(i))return t}function Om(t,i){if(t==="change")return i}var Im=!1;if(va){var ef;if(va){var tf="oninput"in document;if(!tf){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),tf=typeof Pm.oninput=="function"}ef=tf}else ef=!1;Im=ef&&(!document.documentMode||9<document.documentMode)}function zm(){Dl&&(Dl.detachEvent("onpropertychange",Bm),Nl=Dl=null)}function Bm(t){if(t.propertyName==="value"&&Xo(Nl)){var i=[];Lm(i,Nl,t,Wu(t)),Sm(Jx,i)}}function $x(t,i,s){t==="focusin"?(zm(),Dl=i,Nl=s,Dl.attachEvent("onpropertychange",Bm)):t==="focusout"&&zm()}function eS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Nl)}function tS(t,i){if(t==="click")return Xo(i)}function nS(t,i){if(t==="input"||t==="change")return Xo(i)}function iS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var vi=typeof Object.is=="function"?Object.is:iS;function Ul(t,i){if(vi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!Vt.call(i,u)||!vi(t[u],i[u]))return!1}return!0}function Fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hm(t,i){var s=Fm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Fm(s)}}function km(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?km(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Gm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=rn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=rn(t.document)}return i}function nf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var aS=va&&"documentMode"in document&&11>=document.documentMode,_r=null,af=null,Ll=null,sf=!1;function Vm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;sf||_r==null||_r!==rn(l)||(l=_r,"selectionStart"in l&&nf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ll&&Ul(Ll,l)||(Ll=l,l=Uc(af,"onSelect"),0<l.length&&(i=new Go("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=_r)))}function Hs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var vr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},rf={},Xm={};va&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function ks(t){if(rf[t])return rf[t];if(!vr[t])return t;var i=vr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Xm)return rf[t]=i[s];return t}var Wm=ks("animationend"),Ym=ks("animationiteration"),qm=ks("animationstart"),sS=ks("transitionrun"),rS=ks("transitionstart"),lS=ks("transitioncancel"),Zm=ks("transitionend"),Km=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function Xi(t,i){Km.set(t,i),$(i,[t])}var Wo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},wi=[],yr=0,of=0;function Yo(){for(var t=yr,i=of=yr=0;i<t;){var s=wi[i];wi[i++]=null;var l=wi[i];wi[i++]=null;var u=wi[i];wi[i++]=null;var d=wi[i];if(wi[i++]=null,l!==null&&u!==null){var y=l.pending;y===null?u.next=u:(u.next=y.next,y.next=u),l.pending=u}d!==0&&Qm(s,u,d)}}function qo(t,i,s,l){wi[yr++]=t,wi[yr++]=i,wi[yr++]=s,wi[yr++]=l,of|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function cf(t,i,s,l){return qo(t,i,s,l),Zo(t)}function Gs(t,i){return qo(t,null,null,i),Zo(t)}function Qm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var u=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&i!==null&&(u=31-Ue(s),t=d.hiddenUpdates,l=t[u],l===null?t[u]=[i]:l.push(i),i.lane=s|536870912),d):null}function Zo(t){if(50<to)throw to=0,vd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var xr={};function oS(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(t,i,s,l){return new oS(t,i,s,l)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ya(t,i){var s=t.alternate;return s===null?(s=yi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function jm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ko(t,i,s,l,u,d){var y=0;if(l=t,typeof t=="function")uf(t)&&(y=1);else if(typeof t=="string")y=hM(t,s,Oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=yi(31,s,i,u),t.elementType=O,t.lanes=d,t;case N:return Vs(s.children,u,d,i);case T:y=8,u|=24;break;case x:return t=yi(12,s,i,u|2),t.elementType=x,t.lanes=d,t;case I:return t=yi(13,s,i,u),t.elementType=I,t.lanes=d,t;case P:return t=yi(19,s,i,u),t.elementType=P,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:y=10;break e;case U:y=9;break e;case M:y=11;break e;case F:y=14;break e;case A:y=16,l=null;break e}y=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=yi(y,s,i,u),i.elementType=t,i.type=l,i.lanes=d,i}function Vs(t,i,s,l){return t=yi(7,t,l,i),t.lanes=s,t}function ff(t,i,s){return t=yi(6,t,null,i),t.lanes=s,t}function Jm(t){var i=yi(18,null,null,0);return i.stateNode=t,i}function df(t,i,s){return i=yi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var $m=new WeakMap;function Di(t,i){if(typeof t=="object"&&t!==null){var s=$m.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Jt(i)},$m.set(t,i),i)}return{value:t,source:i,stack:Jt(i)}}var Sr=[],Mr=0,Qo=null,Ol=0,Ni=[],Ui=0,$a=null,ea=1,ta="";function xa(t,i){Sr[Mr++]=Ol,Sr[Mr++]=Qo,Qo=t,Ol=i}function e0(t,i,s){Ni[Ui++]=ea,Ni[Ui++]=ta,Ni[Ui++]=$a,$a=t;var l=ea;t=ta;var u=32-Ue(l)-1;l&=~(1<<u),s+=1;var d=32-Ue(i)+u;if(30<d){var y=u-u%5;d=(l&(1<<y)-1).toString(32),l>>=y,u-=y,ea=1<<32-Ue(i)+u|s<<u|l,ta=d+t}else ea=1<<d|s<<u|l,ta=t}function hf(t){t.return!==null&&(xa(t,1),e0(t,1,0))}function pf(t){for(;t===Qo;)Qo=Sr[--Mr],Sr[Mr]=null,Ol=Sr[--Mr],Sr[Mr]=null;for(;t===$a;)$a=Ni[--Ui],Ni[Ui]=null,ta=Ni[--Ui],Ni[Ui]=null,ea=Ni[--Ui],Ni[Ui]=null}function t0(t,i){Ni[Ui++]=ea,Ni[Ui++]=ta,Ni[Ui++]=$a,ea=i.id,ta=i.overflow,$a=t}var kn=null,fn=null,Nt=!1,es=null,Li=!1,mf=Error(r(519));function ts(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Il(Di(i,t)),mf}function n0(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[B]=t,i[De]=l,s){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(s=0;s<io.length;s++)Tt(io[s],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":Tt("invalid",i),Kn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Tt("invalid",i);break;case"textarea":Tt("invalid",i),Gi(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||y_(i.textContent,s)?(l.popover!=null&&(Tt("beforetoggle",i),Tt("toggle",i)),l.onScroll!=null&&Tt("scroll",i),l.onScrollEnd!=null&&Tt("scrollend",i),l.onClick!=null&&(i.onclick=_a),i=!0):i=!1,i||ts(t,!0)}function i0(t){for(kn=t.return;kn;)switch(kn.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:kn=kn.return}}function Er(t){if(t!==kn)return!1;if(!Nt)return i0(t),Nt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Ld(t.type,t.memoizedProps)),s=!s),s&&fn&&ts(t),i0(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));fn=C_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));fn=C_(t)}else i===27?(i=fn,ms(t.type)?(t=Bd,Bd=null,fn=t):fn=i):fn=kn?Ii(t.stateNode.nextSibling):null;return!0}function Xs(){fn=kn=null,Nt=!1}function gf(){var t=es;return t!==null&&(ui===null?ui=t:ui.push.apply(ui,t),es=null),t}function Il(t){es===null?es=[t]:es.push(t)}var _f=z(null),Ws=null,Sa=null;function ns(t,i,s){Re(_f,i._currentValue),i._currentValue=s}function Ma(t){t._currentValue=_f.current,J(_f)}function vf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function yf(t,i,s,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var D=d;d=u;for(var V=0;V<i.length;V++)if(D.context===i[V]){d.lanes|=s,D=d.alternate,D!==null&&(D.lanes|=s),vf(d.return,s,t),l||(y=null);break e}d=D.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=s,d=y.alternate,d!==null&&(d.lanes|=s),vf(y,s,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function br(t,i,s,l){t=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var D=u.type;vi(u.pendingProps.value,y.value)||(t!==null?t.push(D):t=[D])}}else if(u===Te.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(oo):t=[oo])}u=u.return}t!==null&&yf(i,t,s,l),i.flags|=262144}function jo(t){for(t=t.firstContext;t!==null;){if(!vi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ys(t){Ws=t,Sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gn(t){return a0(Ws,t)}function Jo(t,i){return Ws===null&&Ys(t),a0(t,i)}function a0(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Sa===null){if(t===null)throw Error(r(308));Sa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Sa=Sa.next=i;return s}var cS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},uS=a.unstable_scheduleCallback,fS=a.unstable_NormalPriority,bn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xf(){return{controller:new cS,data:new Map,refCount:0}}function Pl(t){t.refCount--,t.refCount===0&&uS(fS,function(){t.controller.abort()})}var zl=null,Sf=0,Tr=0,Ar=null;function dS(t,i){if(zl===null){var s=zl=[];Sf=0,Tr=bd(),Ar={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Sf++,i.then(s0,s0),i}function s0(){if(--Sf===0&&zl!==null){Ar!==null&&(Ar.status="fulfilled");var t=zl;zl=null,Tr=0,Ar=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function hS(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),l}var r0=H.S;H.S=function(t,i){Vg=Dt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&dS(t,i),r0!==null&&r0(t,i)};var qs=z(null);function Mf(){var t=qs.current;return t!==null?t:ln.pooledCache}function $o(t,i){i===null?Re(qs,qs.current):Re(qs,i.pool)}function l0(){var t=Mf();return t===null?null:{parent:bn._currentValue,pool:t}}var Rr=Error(r(460)),Ef=Error(r(474)),ec=Error(r(542)),tc={then:function(){}};function o0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function c0(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(_a,_a),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,f0(t),t;default:if(typeof i.status=="string")i.then(_a,_a);else{if(t=ln,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,f0(t),t}throw Ks=i,Rr}}function Zs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ks=s,Rr):s}}var Ks=null;function u0(){if(Ks===null)throw Error(r(459));var t=Ks;return Ks=null,t}function f0(t){if(t===Rr||t===ec)throw Error(r(483))}var Cr=null,Bl=0;function nc(t){var i=Bl;return Bl+=1,Cr===null&&(Cr=[]),c0(Cr,t,i)}function Fl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ic(t,i){throw i.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function d0(t){function i(ne,Z){if(t){var le=ne.deletions;le===null?(ne.deletions=[Z],ne.flags|=16):le.push(Z)}}function s(ne,Z){if(!t)return null;for(;Z!==null;)i(ne,Z),Z=Z.sibling;return null}function l(ne){for(var Z=new Map;ne!==null;)ne.key!==null?Z.set(ne.key,ne):Z.set(ne.index,ne),ne=ne.sibling;return Z}function u(ne,Z){return ne=ya(ne,Z),ne.index=0,ne.sibling=null,ne}function d(ne,Z,le){return ne.index=le,t?(le=ne.alternate,le!==null?(le=le.index,le<Z?(ne.flags|=67108866,Z):le):(ne.flags|=67108866,Z)):(ne.flags|=1048576,Z)}function y(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function D(ne,Z,le,be){return Z===null||Z.tag!==6?(Z=ff(le,ne.mode,be),Z.return=ne,Z):(Z=u(Z,le),Z.return=ne,Z)}function V(ne,Z,le,be){var lt=le.type;return lt===N?Me(ne,Z,le.props.children,be,le.key):Z!==null&&(Z.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===A&&Zs(lt)===Z.type)?(Z=u(Z,le.props),Fl(Z,le),Z.return=ne,Z):(Z=Ko(le.type,le.key,le.props,null,ne.mode,be),Fl(Z,le),Z.return=ne,Z)}function oe(ne,Z,le,be){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==le.containerInfo||Z.stateNode.implementation!==le.implementation?(Z=df(le,ne.mode,be),Z.return=ne,Z):(Z=u(Z,le.children||[]),Z.return=ne,Z)}function Me(ne,Z,le,be,lt){return Z===null||Z.tag!==7?(Z=Vs(le,ne.mode,be,lt),Z.return=ne,Z):(Z=u(Z,le),Z.return=ne,Z)}function Ae(ne,Z,le){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=ff(""+Z,ne.mode,le),Z.return=ne,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return le=Ko(Z.type,Z.key,Z.props,null,ne.mode,le),Fl(le,Z),le.return=ne,le;case R:return Z=df(Z,ne.mode,le),Z.return=ne,Z;case A:return Z=Zs(Z),Ae(ne,Z,le)}if(ie(Z)||j(Z))return Z=Vs(Z,ne.mode,le,null),Z.return=ne,Z;if(typeof Z.then=="function")return Ae(ne,nc(Z),le);if(Z.$$typeof===L)return Ae(ne,Jo(ne,Z),le);ic(ne,Z)}return null}function de(ne,Z,le,be){var lt=Z!==null?Z.key:null;if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return lt!==null?null:D(ne,Z,""+le,be);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case b:return le.key===lt?V(ne,Z,le,be):null;case R:return le.key===lt?oe(ne,Z,le,be):null;case A:return le=Zs(le),de(ne,Z,le,be)}if(ie(le)||j(le))return lt!==null?null:Me(ne,Z,le,be,null);if(typeof le.then=="function")return de(ne,Z,nc(le),be);if(le.$$typeof===L)return de(ne,Z,Jo(ne,le),be);ic(ne,le)}return null}function _e(ne,Z,le,be,lt){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return ne=ne.get(le)||null,D(Z,ne,""+be,lt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case b:return ne=ne.get(be.key===null?le:be.key)||null,V(Z,ne,be,lt);case R:return ne=ne.get(be.key===null?le:be.key)||null,oe(Z,ne,be,lt);case A:return be=Zs(be),_e(ne,Z,le,be,lt)}if(ie(be)||j(be))return ne=ne.get(le)||null,Me(Z,ne,be,lt,null);if(typeof be.then=="function")return _e(ne,Z,le,nc(be),lt);if(be.$$typeof===L)return _e(ne,Z,le,Jo(Z,be),lt);ic(Z,be)}return null}function tt(ne,Z,le,be){for(var lt=null,Pt=null,it=Z,yt=Z=0,wt=null;it!==null&&yt<le.length;yt++){it.index>yt?(wt=it,it=null):wt=it.sibling;var zt=de(ne,it,le[yt],be);if(zt===null){it===null&&(it=wt);break}t&&it&&zt.alternate===null&&i(ne,it),Z=d(zt,Z,yt),Pt===null?lt=zt:Pt.sibling=zt,Pt=zt,it=wt}if(yt===le.length)return s(ne,it),Nt&&xa(ne,yt),lt;if(it===null){for(;yt<le.length;yt++)it=Ae(ne,le[yt],be),it!==null&&(Z=d(it,Z,yt),Pt===null?lt=it:Pt.sibling=it,Pt=it);return Nt&&xa(ne,yt),lt}for(it=l(it);yt<le.length;yt++)wt=_e(it,ne,yt,le[yt],be),wt!==null&&(t&&wt.alternate!==null&&it.delete(wt.key===null?yt:wt.key),Z=d(wt,Z,yt),Pt===null?lt=wt:Pt.sibling=wt,Pt=wt);return t&&it.forEach(function(xs){return i(ne,xs)}),Nt&&xa(ne,yt),lt}function ut(ne,Z,le,be){if(le==null)throw Error(r(151));for(var lt=null,Pt=null,it=Z,yt=Z=0,wt=null,zt=le.next();it!==null&&!zt.done;yt++,zt=le.next()){it.index>yt?(wt=it,it=null):wt=it.sibling;var xs=de(ne,it,zt.value,be);if(xs===null){it===null&&(it=wt);break}t&&it&&xs.alternate===null&&i(ne,it),Z=d(xs,Z,yt),Pt===null?lt=xs:Pt.sibling=xs,Pt=xs,it=wt}if(zt.done)return s(ne,it),Nt&&xa(ne,yt),lt;if(it===null){for(;!zt.done;yt++,zt=le.next())zt=Ae(ne,zt.value,be),zt!==null&&(Z=d(zt,Z,yt),Pt===null?lt=zt:Pt.sibling=zt,Pt=zt);return Nt&&xa(ne,yt),lt}for(it=l(it);!zt.done;yt++,zt=le.next())zt=_e(it,ne,yt,zt.value,be),zt!==null&&(t&&zt.alternate!==null&&it.delete(zt.key===null?yt:zt.key),Z=d(zt,Z,yt),Pt===null?lt=zt:Pt.sibling=zt,Pt=zt);return t&&it.forEach(function(bM){return i(ne,bM)}),Nt&&xa(ne,yt),lt}function tn(ne,Z,le,be){if(typeof le=="object"&&le!==null&&le.type===N&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case b:e:{for(var lt=le.key;Z!==null;){if(Z.key===lt){if(lt=le.type,lt===N){if(Z.tag===7){s(ne,Z.sibling),be=u(Z,le.props.children),be.return=ne,ne=be;break e}}else if(Z.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===A&&Zs(lt)===Z.type){s(ne,Z.sibling),be=u(Z,le.props),Fl(be,le),be.return=ne,ne=be;break e}s(ne,Z);break}else i(ne,Z);Z=Z.sibling}le.type===N?(be=Vs(le.props.children,ne.mode,be,le.key),be.return=ne,ne=be):(be=Ko(le.type,le.key,le.props,null,ne.mode,be),Fl(be,le),be.return=ne,ne=be)}return y(ne);case R:e:{for(lt=le.key;Z!==null;){if(Z.key===lt)if(Z.tag===4&&Z.stateNode.containerInfo===le.containerInfo&&Z.stateNode.implementation===le.implementation){s(ne,Z.sibling),be=u(Z,le.children||[]),be.return=ne,ne=be;break e}else{s(ne,Z);break}else i(ne,Z);Z=Z.sibling}be=df(le,ne.mode,be),be.return=ne,ne=be}return y(ne);case A:return le=Zs(le),tn(ne,Z,le,be)}if(ie(le))return tt(ne,Z,le,be);if(j(le)){if(lt=j(le),typeof lt!="function")throw Error(r(150));return le=lt.call(le),ut(ne,Z,le,be)}if(typeof le.then=="function")return tn(ne,Z,nc(le),be);if(le.$$typeof===L)return tn(ne,Z,Jo(ne,le),be);ic(ne,le)}return typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint"?(le=""+le,Z!==null&&Z.tag===6?(s(ne,Z.sibling),be=u(Z,le),be.return=ne,ne=be):(s(ne,Z),be=ff(le,ne.mode,be),be.return=ne,ne=be),y(ne)):s(ne,Z)}return function(ne,Z,le,be){try{Bl=0;var lt=tn(ne,Z,le,be);return Cr=null,lt}catch(it){if(it===Rr||it===ec)throw it;var Pt=yi(29,it,null,ne.mode);return Pt.lanes=be,Pt.return=ne,Pt}finally{}}}var Qs=d0(!0),h0=d0(!1),is=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function as(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ss(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=Zo(t),Qm(t,null,s),i}return qo(t,l,i,s),Zo(t)}function Hl(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ei(t,s)}}function Af(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Rf=!1;function kl(){if(Rf){var t=Ar;if(t!==null)throw t}}function Gl(t,i,s,l){Rf=!1;var u=t.updateQueue;is=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var V=D,oe=V.next;V.next=null,y===null?d=oe:y.next=oe,y=V;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,D=Me.lastBaseUpdate,D!==y&&(D===null?Me.firstBaseUpdate=oe:D.next=oe,Me.lastBaseUpdate=V))}if(d!==null){var Ae=u.baseState;y=0,Me=oe=V=null,D=d;do{var de=D.lane&-536870913,_e=de!==D.lane;if(_e?(Ct&de)===de:(l&de)===de){de!==0&&de===Tr&&(Rf=!0),Me!==null&&(Me=Me.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var tt=t,ut=D;de=i;var tn=s;switch(ut.tag){case 1:if(tt=ut.payload,typeof tt=="function"){Ae=tt.call(tn,Ae,de);break e}Ae=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=ut.payload,de=typeof tt=="function"?tt.call(tn,Ae,de):tt,de==null)break e;Ae=S({},Ae,de);break e;case 2:is=!0}}de=D.callback,de!==null&&(t.flags|=64,_e&&(t.flags|=8192),_e=u.callbacks,_e===null?u.callbacks=[de]:_e.push(de))}else _e={lane:de,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Me===null?(oe=Me=_e,V=Ae):Me=Me.next=_e,y|=de;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;_e=D,D=_e.next,_e.next=null,u.lastBaseUpdate=_e,u.shared.pending=null}}while(!0);Me===null&&(V=Ae),u.baseState=V,u.firstBaseUpdate=oe,u.lastBaseUpdate=Me,d===null&&(u.shared.lanes=0),us|=y,t.lanes=y,t.memoizedState=Ae}}function p0(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function m0(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)p0(s[t],i)}var wr=z(null),ac=z(0);function g0(t,i){t=Na,Re(ac,t),Re(wr,i),Na=t|i.baseLanes}function Cf(){Re(ac,Na),Re(wr,wr.current)}function wf(){Na=ac.current,J(wr),J(ac)}var xi=z(null),Oi=null;function rs(t){var i=t.alternate;Re(Sn,Sn.current&1),Re(xi,t),Oi===null&&(i===null||wr.current!==null||i.memoizedState!==null)&&(Oi=t)}function Df(t){Re(Sn,Sn.current),Re(xi,t),Oi===null&&(Oi=t)}function _0(t){t.tag===22?(Re(Sn,Sn.current),Re(xi,t),Oi===null&&(Oi=t)):ls()}function ls(){Re(Sn,Sn.current),Re(xi,xi.current)}function Si(t){J(xi),Oi===t&&(Oi=null),J(Sn)}var Sn=z(0);function sc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Pd(s)||zd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ea=0,_t=null,$t=null,Tn=null,rc=!1,Dr=!1,js=!1,lc=0,Vl=0,Nr=null,pS=0;function yn(){throw Error(r(321))}function Nf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!vi(t[s],i[s]))return!1;return!0}function Uf(t,i,s,l,u,d){return Ea=d,_t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=t===null||t.memoizedState===null?eg:qf,js=!1,d=s(l,u),js=!1,Dr&&(d=y0(i,s,l,u)),v0(t),d}function v0(t){H.H=Yl;var i=$t!==null&&$t.next!==null;if(Ea=0,Tn=$t=_t=null,rc=!1,Vl=0,Nr=null,i)throw Error(r(300));t===null||An||(t=t.dependencies,t!==null&&jo(t)&&(An=!0))}function y0(t,i,s,l){_t=t;var u=0;do{if(Dr&&(Nr=null),Vl=0,Dr=!1,25<=u)throw Error(r(301));if(u+=1,Tn=$t=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=tg,d=i(s,l)}while(Dr);return d}function mS(){var t=H.H,i=t.useState()[0];return i=typeof i.then=="function"?Xl(i):i,t=t.useState()[0],($t!==null?$t.memoizedState:null)!==t&&(_t.flags|=1024),i}function Lf(){var t=lc!==0;return lc=0,t}function Of(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function If(t){if(rc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}rc=!1}Ea=0,Tn=$t=_t=null,Dr=!1,Vl=lc=0,Nr=null}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?_t.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function Mn(){if($t===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=Tn===null?_t.memoizedState:Tn.next;if(i!==null)Tn=i,$t=t;else{if(t===null)throw _t.alternate===null?Error(r(467)):Error(r(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Tn===null?_t.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(t){var i=Vl;return Vl+=1,Nr===null&&(Nr=[]),t=c0(Nr,t,i),i=_t,(Tn===null?i.memoizedState:Tn.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?eg:qf),t}function cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xl(t);if(t.$$typeof===L)return Gn(t)}throw Error(r(438,String(t)))}function Pf(t){var i=null,s=_t.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=_t.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=oc(),_t.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=q;return i.index++,s}function ba(t,i){return typeof i=="function"?i(t):i}function uc(t){var i=Mn();return zf(i,$t,t)}function zf(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var u=t.baseQueue,d=l.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}i.baseQueue=u=d,l.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{i=u.next;var D=y=null,V=null,oe=i,Me=!1;do{var Ae=oe.lane&-536870913;if(Ae!==oe.lane?(Ct&Ae)===Ae:(Ea&Ae)===Ae){var de=oe.revertLane;if(de===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Ae===Tr&&(Me=!0);else if((Ea&de)===de){oe=oe.next,de===Tr&&(Me=!0);continue}else Ae={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(D=V=Ae,y=d):V=V.next=Ae,_t.lanes|=de,us|=de;Ae=oe.action,js&&s(d,Ae),d=oe.hasEagerState?oe.eagerState:s(d,Ae)}else de={lane:Ae,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(D=V=de,y=d):V=V.next=de,_t.lanes|=Ae,us|=Ae;oe=oe.next}while(oe!==null&&oe!==i);if(V===null?y=d:V.next=D,!vi(d,t.memoizedState)&&(An=!0,Me&&(s=Ar,s!==null)))throw s;t.memoizedState=d,t.baseState=y,t.baseQueue=V,l.lastRenderedState=d}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Bf(t){var i=Mn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var y=u=u.next;do d=t(d,y.action),y=y.next;while(y!==u);vi(d,i.memoizedState)||(An=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function x0(t,i,s){var l=_t,u=Mn(),d=Nt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var y=!vi(($t||u).memoizedState,s);if(y&&(u.memoizedState=s,An=!0),u=u.queue,kf(E0.bind(null,l,u,t),[t]),u.getSnapshot!==i||y||Tn!==null&&Tn.memoizedState.tag&1){if(l.flags|=2048,Ur(9,{destroy:void 0},M0.bind(null,l,u,s,i),null),ln===null)throw Error(r(349));d||(Ea&127)!==0||S0(l,i,s)}return s}function S0(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=_t.updateQueue,i===null?(i=oc(),_t.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function M0(t,i,s,l){i.value=s,i.getSnapshot=l,b0(i)&&T0(t)}function E0(t,i,s){return s(function(){b0(i)&&T0(t)})}function b0(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!vi(t,s)}catch{return!0}}function T0(t){var i=Gs(t,2);i!==null&&fi(i,t,2)}function Ff(t){var i=ti();if(typeof t=="function"){var s=t;if(t=s(),js){ge(!0);try{s()}finally{ge(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},i}function A0(t,i,s,l){return t.baseState=s,zf(t,$t,typeof l=="function"?l:ba)}function gS(t,i,s,l,u){if(hc(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};H.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,R0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function R0(t,i){var s=i.action,l=i.payload,u=t.state;if(i.isTransition){var d=H.T,y={};H.T=y;try{var D=s(u,l),V=H.S;V!==null&&V(y,D),C0(t,i,D)}catch(oe){Hf(t,i,oe)}finally{d!==null&&y.types!==null&&(d.types=y.types),H.T=d}}else try{d=s(u,l),C0(t,i,d)}catch(oe){Hf(t,i,oe)}}function C0(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){w0(t,i,l)},function(l){return Hf(t,i,l)}):w0(t,i,s)}function w0(t,i,s){i.status="fulfilled",i.value=s,D0(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,R0(t,s)))}function Hf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,D0(i),i=i.next;while(i!==l)}t.action=null}function D0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function N0(t,i){return i}function U0(t,i){if(Nt){var s=ln.formState;if(s!==null){e:{var l=_t;if(Nt){if(fn){t:{for(var u=fn,d=Li;u.nodeType!==8;){if(!d){u=null;break t}if(u=Ii(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){fn=Ii(u.nextSibling),l=u.data==="F!";break e}}ts(l)}l=!1}l&&(i=s[0])}}return s=ti(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N0,lastRenderedState:i},s.queue=l,s=j0.bind(null,_t,l),l.dispatch=s,l=Ff(!1),d=Yf.bind(null,_t,!1,l.queue),l=ti(),u={state:i,dispatch:null,action:t,pending:null},l.queue=u,s=gS.bind(null,_t,u,d,s),u.dispatch=s,l.memoizedState=t,[i,s,!1]}function L0(t){var i=Mn();return O0(i,$t,t)}function O0(t,i,s){if(i=zf(t,i,N0)[0],t=uc(ba)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Xl(i)}catch(y){throw y===Rr?ec:y}else l=i;i=Mn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(_t.flags|=2048,Ur(9,{destroy:void 0},_S.bind(null,u,s),null)),[l,d,t]}function _S(t,i){t.action=i}function I0(t){var i=Mn(),s=$t;if(s!==null)return O0(i,s,t);Mn(),i=i.memoizedState,s=Mn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Ur(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=_t.updateQueue,i===null&&(i=oc(),_t.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function P0(){return Mn().memoizedState}function fc(t,i,s,l){var u=ti();_t.flags|=t,u.memoizedState=Ur(1|i,{destroy:void 0},s,l===void 0?null:l)}function dc(t,i,s,l){var u=Mn();l=l===void 0?null:l;var d=u.memoizedState.inst;$t!==null&&l!==null&&Nf(l,$t.memoizedState.deps)?u.memoizedState=Ur(i,d,s,l):(_t.flags|=t,u.memoizedState=Ur(1|i,d,s,l))}function z0(t,i){fc(8390656,8,t,i)}function kf(t,i){dc(2048,8,t,i)}function vS(t){_t.flags|=4;var i=_t.updateQueue;if(i===null)i=oc(),_t.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function B0(t){var i=Mn().memoizedState;return vS({ref:i,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function F0(t,i){return dc(4,2,t,i)}function H0(t,i){return dc(4,4,t,i)}function k0(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function G0(t,i,s){s=s!=null?s.concat([t]):null,dc(4,4,k0.bind(null,i,t),s)}function Gf(){}function V0(t,i){var s=Mn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Nf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function X0(t,i){var s=Mn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Nf(i,l[1]))return l[0];if(l=t(),js){ge(!0);try{t()}finally{ge(!1)}}return s.memoizedState=[l,i],l}function Vf(t,i,s){return s===void 0||(Ea&1073741824)!==0&&(Ct&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=Wg(),_t.lanes|=t,us|=t,s)}function W0(t,i,s,l){return vi(s,i)?s:wr.current!==null?(t=Vf(t,s,l),vi(t,i)||(An=!0),t):(Ea&42)===0||(Ea&1073741824)!==0&&(Ct&261930)===0?(An=!0,t.memoizedState=s):(t=Wg(),_t.lanes|=t,us|=t,i)}function Y0(t,i,s,l,u){var d=W.p;W.p=d!==0&&8>d?d:8;var y=H.T,D={};H.T=D,Yf(t,!1,i,s);try{var V=u(),oe=H.S;if(oe!==null&&oe(D,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Me=hS(V,l);Wl(t,i,Me,bi(t))}else Wl(t,i,l,bi(t))}catch(Ae){Wl(t,i,{then:function(){},status:"rejected",reason:Ae},bi())}finally{W.p=d,y!==null&&D.types!==null&&(y.types=D.types),H.T=y}}function yS(){}function Xf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var u=q0(t).queue;Y0(t,u,i,re,s===null?yS:function(){return Z0(t),s(l)})}function q0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:re},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Z0(t){var i=q0(t);i.next===null&&(i=t.alternate.memoizedState),Wl(t,i.next.queue,{},bi())}function Wf(){return Gn(oo)}function K0(){return Mn().memoizedState}function Q0(){return Mn().memoizedState}function xS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=bi();t=as(s);var l=ss(i,t,s);l!==null&&(fi(l,i,s),Hl(l,i,s)),i={cache:xf()},t.payload=i;return}i=i.return}}function SS(t,i,s){var l=bi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hc(t)?J0(i,s):(s=cf(t,i,s,l),s!==null&&(fi(s,t,l),$0(s,i,l)))}function j0(t,i,s){var l=bi();Wl(t,i,s,l)}function Wl(t,i,s,l){var u={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(hc(t))J0(i,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,D=d(y,s);if(u.hasEagerState=!0,u.eagerState=D,vi(D,y))return qo(t,i,u,0),ln===null&&Yo(),!1}catch{}finally{}if(s=cf(t,i,u,l),s!==null)return fi(s,t,l),$0(s,i,l),!0}return!1}function Yf(t,i,s,l){if(l={lane:2,revertLane:bd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},hc(t)){if(i)throw Error(r(479))}else i=cf(t,s,l,2),i!==null&&fi(i,t,2)}function hc(t){var i=t.alternate;return t===_t||i!==null&&i===_t}function J0(t,i){Dr=rc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function $0(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ei(t,s)}}var Yl={readContext:Gn,use:cc,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useLayoutEffect:yn,useInsertionEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useSyncExternalStore:yn,useId:yn,useHostTransitionStatus:yn,useFormState:yn,useActionState:yn,useOptimistic:yn,useMemoCache:yn,useCacheRefresh:yn};Yl.useEffectEvent=yn;var eg={readContext:Gn,use:cc,useCallback:function(t,i){return ti().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:z0,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,fc(4194308,4,k0.bind(null,i,t),s)},useLayoutEffect:function(t,i){return fc(4194308,4,t,i)},useInsertionEffect:function(t,i){fc(4,2,t,i)},useMemo:function(t,i){var s=ti();i=i===void 0?null:i;var l=t();if(js){ge(!0);try{t()}finally{ge(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=ti();if(s!==void 0){var u=s(i);if(js){ge(!0);try{s(i)}finally{ge(!1)}}}else u=i;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=SS.bind(null,_t,t),[l.memoizedState,t]},useRef:function(t){var i=ti();return t={current:t},i.memoizedState=t},useState:function(t){t=Ff(t);var i=t.queue,s=j0.bind(null,_t,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Gf,useDeferredValue:function(t,i){var s=ti();return Vf(s,t,i)},useTransition:function(){var t=Ff(!1);return t=Y0.bind(null,_t,t.queue,!0,!1),ti().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=_t,u=ti();if(Nt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),ln===null)throw Error(r(349));(Ct&127)!==0||S0(l,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,z0(E0.bind(null,l,d,t),[t]),l.flags|=2048,Ur(9,{destroy:void 0},M0.bind(null,l,d,s,i),null),s},useId:function(){var t=ti(),i=ln.identifierPrefix;if(Nt){var s=ta,l=ea;s=(l&~(1<<32-Ue(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=lc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=pS++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Wf,useFormState:U0,useActionState:U0,useOptimistic:function(t){var i=ti();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Yf.bind(null,_t,!0,s),s.dispatch=i,[t,i]},useMemoCache:Pf,useCacheRefresh:function(){return ti().memoizedState=xS.bind(null,_t)},useEffectEvent:function(t){var i=ti(),s={impl:t};return i.memoizedState=s,function(){if((Ht&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},qf={readContext:Gn,use:cc,useCallback:V0,useContext:Gn,useEffect:kf,useImperativeHandle:G0,useInsertionEffect:F0,useLayoutEffect:H0,useMemo:X0,useReducer:uc,useRef:P0,useState:function(){return uc(ba)},useDebugValue:Gf,useDeferredValue:function(t,i){var s=Mn();return W0(s,$t.memoizedState,t,i)},useTransition:function(){var t=uc(ba)[0],i=Mn().memoizedState;return[typeof t=="boolean"?t:Xl(t),i]},useSyncExternalStore:x0,useId:K0,useHostTransitionStatus:Wf,useFormState:L0,useActionState:L0,useOptimistic:function(t,i){var s=Mn();return A0(s,$t,t,i)},useMemoCache:Pf,useCacheRefresh:Q0};qf.useEffectEvent=B0;var tg={readContext:Gn,use:cc,useCallback:V0,useContext:Gn,useEffect:kf,useImperativeHandle:G0,useInsertionEffect:F0,useLayoutEffect:H0,useMemo:X0,useReducer:Bf,useRef:P0,useState:function(){return Bf(ba)},useDebugValue:Gf,useDeferredValue:function(t,i){var s=Mn();return $t===null?Vf(s,t,i):W0(s,$t.memoizedState,t,i)},useTransition:function(){var t=Bf(ba)[0],i=Mn().memoizedState;return[typeof t=="boolean"?t:Xl(t),i]},useSyncExternalStore:x0,useId:K0,useHostTransitionStatus:Wf,useFormState:I0,useActionState:I0,useOptimistic:function(t,i){var s=Mn();return $t!==null?A0(s,$t,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:Q0};tg.useEffectEvent=B0;function Zf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:S({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Kf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=bi(),u=as(l);u.payload=i,s!=null&&(u.callback=s),i=ss(t,u,l),i!==null&&(fi(i,t,l),Hl(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=bi(),u=as(l);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=ss(t,u,l),i!==null&&(fi(i,t,l),Hl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=bi(),l=as(s);l.tag=2,i!=null&&(l.callback=i),i=ss(t,l,s),i!==null&&(fi(i,t,s),Hl(i,t,s))}};function ng(t,i,s,l,u,d,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!Ul(s,l)||!Ul(u,d):!0}function ig(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Kf.enqueueReplaceState(i,i.state,null)}function Js(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=S({},s));for(var u in t)s[u]===void 0&&(s[u]=t[u])}return s}function ag(t){Wo(t)}function sg(t){console.error(t)}function rg(t){Wo(t)}function pc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function lg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qf(t,i,s){return s=as(s),s.tag=3,s.payload={element:null},s.callback=function(){pc(t,i)},s}function og(t){return t=as(t),t.tag=3,t}function cg(t,i,s,l){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;t.payload=function(){return u(d)},t.callback=function(){lg(i,s,l)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){lg(i,s,l),typeof u!="function"&&(fs===null?fs=new Set([this]):fs.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function MS(t,i,s,l,u){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&br(i,s,u,!0),s=xi.current,s!==null){switch(s.tag){case 31:case 13:return Oi===null?Ac():s.alternate===null&&xn===0&&(xn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,l===tc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),Sd(t,l,u)),!1;case 22:return s.flags|=65536,l===tc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),Sd(t,l,u)),!1}throw Error(r(435,s.tag))}return Sd(t,l,u),Ac(),!1}if(Nt)return i=xi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==mf&&(t=Error(r(422),{cause:l}),Il(Di(t,s)))):(l!==mf&&(i=Error(r(423),{cause:l}),Il(Di(i,s))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=Di(l,s),u=Qf(t.stateNode,l,u),Af(t,u),xn!==4&&(xn=2)),!1;var d=Error(r(520),{cause:l});if(d=Di(d,s),eo===null?eo=[d]:eo.push(d),xn!==4&&(xn=2),i===null)return!0;l=Di(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=u&-u,s.lanes|=t,t=Qf(s.stateNode,l,t),Af(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(fs===null||!fs.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=og(u),cg(u,t,s,l),Af(s,u),!1}s=s.return}while(s!==null);return!1}var jf=Error(r(461)),An=!1;function Vn(t,i,s,l){i.child=t===null?h0(i,null,s,l):Qs(i,t.child,s,l)}function ug(t,i,s,l,u){s=s.render;var d=i.ref;if("ref"in l){var y={};for(var D in l)D!=="ref"&&(y[D]=l[D])}else y=l;return Ys(i),l=Uf(t,i,s,y,d,u),D=Lf(),t!==null&&!An?(Of(t,i,u),Ta(t,i,u)):(Nt&&D&&hf(i),i.flags|=1,Vn(t,i,l,u),i.child)}function fg(t,i,s,l,u){if(t===null){var d=s.type;return typeof d=="function"&&!uf(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,dg(t,i,d,l,u)):(t=Ko(s.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!sd(t,u)){var y=d.memoizedProps;if(s=s.compare,s=s!==null?s:Ul,s(y,l)&&t.ref===i.ref)return Ta(t,i,u)}return i.flags|=1,t=ya(d,l),t.ref=i.ref,t.return=i,i.child=t}function dg(t,i,s,l,u){if(t!==null){var d=t.memoizedProps;if(Ul(d,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=d,sd(t,u))(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Ta(t,i,u)}return Jf(t,i,s,l,u)}function hg(t,i,s,l){var u=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=i.child=t.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,i.child=null;return pg(t,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&$o(i,d!==null?d.cachePool:null),d!==null?g0(i,d):Cf(),_0(i);else return l=i.lanes=536870912,pg(t,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?($o(i,d.cachePool),g0(i,d),ls(),i.memoizedState=null):(t!==null&&$o(i,null),Cf(),ls());return Vn(t,i,u,s),i.child}function ql(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function pg(t,i,s,l,u){var d=Mf();return d=d===null?null:{parent:bn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},t!==null&&$o(i,null),Cf(),_0(i),t!==null&&br(t,i,l,!0),i.childLanes=u,null}function mc(t,i){return i=_c({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function mg(t,i,s){return Qs(i,t.child,null,s),t=mc(i,i.pendingProps),t.flags|=2,Si(i),i.memoizedState=null,t}function ES(t,i,s){var l=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Nt){if(l.mode==="hidden")return t=mc(i,l),i.lanes=536870912,ql(null,t);if(Df(i),(t=fn)?(t=R_(t,Li),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:$a!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=Jm(t),s.return=i,i.child=s,kn=i,fn=null)):t=null,t===null)throw ts(i);return i.lanes=536870912,null}return mc(i,l)}var d=t.memoizedState;if(d!==null){var y=d.dehydrated;if(Df(i),u)if(i.flags&256)i.flags&=-257,i=mg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(An||br(t,i,s,!1),u=(s&t.childLanes)!==0,An||u){if(l=ln,l!==null&&(y=Zn(l,s),y!==0&&y!==d.retryLane))throw d.retryLane=y,Gs(t,y),fi(l,t,y),jf;Ac(),i=mg(t,i,s)}else t=d.treeContext,fn=Ii(y.nextSibling),kn=i,Nt=!0,es=null,Li=!1,t!==null&&t0(i,t),i=mc(i,l),i.flags|=4096;return i}return t=ya(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function gc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Jf(t,i,s,l,u){return Ys(i),s=Uf(t,i,s,l,void 0,u),l=Lf(),t!==null&&!An?(Of(t,i,u),Ta(t,i,u)):(Nt&&l&&hf(i),i.flags|=1,Vn(t,i,s,u),i.child)}function gg(t,i,s,l,u,d){return Ys(i),i.updateQueue=null,s=y0(i,l,s,u),v0(t),l=Lf(),t!==null&&!An?(Of(t,i,d),Ta(t,i,d)):(Nt&&l&&hf(i),i.flags|=1,Vn(t,i,s,d),i.child)}function _g(t,i,s,l,u){if(Ys(i),i.stateNode===null){var d=xr,y=s.contextType;typeof y=="object"&&y!==null&&(d=Gn(y)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Kf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},bf(i),y=s.contextType,d.context=typeof y=="object"&&y!==null?Gn(y):xr,d.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Zf(i,s,y,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Kf.enqueueReplaceState(d,d.state,null),Gl(i,l,d,u),kl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var D=i.memoizedProps,V=Js(s,D);d.props=V;var oe=d.context,Me=s.contextType;y=xr,typeof Me=="object"&&Me!==null&&(y=Gn(Me));var Ae=s.getDerivedStateFromProps;Me=typeof Ae=="function"||typeof d.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,Me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(D||oe!==y)&&ig(i,d,l,y),is=!1;var de=i.memoizedState;d.state=de,Gl(i,l,d,u),kl(),oe=i.memoizedState,D||de!==oe||is?(typeof Ae=="function"&&(Zf(i,s,Ae,l),oe=i.memoizedState),(V=is||ng(i,s,V,l,de,oe,y))?(Me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=oe),d.props=l,d.state=oe,d.context=y,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Tf(t,i),y=i.memoizedProps,Me=Js(s,y),d.props=Me,Ae=i.pendingProps,de=d.context,oe=s.contextType,V=xr,typeof oe=="object"&&oe!==null&&(V=Gn(oe)),D=s.getDerivedStateFromProps,(oe=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==Ae||de!==V)&&ig(i,d,l,V),is=!1,de=i.memoizedState,d.state=de,Gl(i,l,d,u),kl();var _e=i.memoizedState;y!==Ae||de!==_e||is||t!==null&&t.dependencies!==null&&jo(t.dependencies)?(typeof D=="function"&&(Zf(i,s,D,l),_e=i.memoizedState),(Me=is||ng(i,s,Me,l,de,_e,V)||t!==null&&t.dependencies!==null&&jo(t.dependencies))?(oe||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,_e,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,_e,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=_e),d.props=l,d.state=_e,d.context=V,l=Me):(typeof d.componentDidUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&de===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,gc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Qs(i,t.child,null,u),i.child=Qs(i,null,s,u)):Vn(t,i,s,u),i.memoizedState=d.state,t=i.child):t=Ta(t,i,u),t}function vg(t,i,s,l){return Xs(),i.flags|=256,Vn(t,i,s,l),i.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ed(t){return{baseLanes:t,cachePool:l0()}}function td(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Ei),t}function yg(t,i,s){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=t!==null&&t.memoizedState===null?!1:(Sn.current&2)!==0),y&&(u=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,t===null){if(Nt){if(u?rs(i):ls(),(t=fn)?(t=R_(t,Li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:$a!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=Jm(t),s.return=i,i.child=s,kn=i,fn=null)):t=null,t===null)throw ts(i);return zd(t)?i.lanes=32:i.lanes=536870912,null}var D=l.children;return l=l.fallback,u?(ls(),u=i.mode,D=_c({mode:"hidden",children:D},u),l=Vs(l,u,s,null),D.return=i,l.return=i,D.sibling=l,i.child=D,l=i.child,l.memoizedState=ed(s),l.childLanes=td(t,y,s),i.memoizedState=$f,ql(null,l)):(rs(i),nd(i,D))}var V=t.memoizedState;if(V!==null&&(D=V.dehydrated,D!==null)){if(d)i.flags&256?(rs(i),i.flags&=-257,i=id(t,i,s)):i.memoizedState!==null?(ls(),i.child=t.child,i.flags|=128,i=null):(ls(),D=l.fallback,u=i.mode,l=_c({mode:"visible",children:l.children},u),D=Vs(D,u,s,null),D.flags|=2,l.return=i,D.return=i,l.sibling=D,i.child=l,Qs(i,t.child,null,s),l=i.child,l.memoizedState=ed(s),l.childLanes=td(t,y,s),i.memoizedState=$f,i=ql(null,l));else if(rs(i),zd(D)){if(y=D.nextSibling&&D.nextSibling.dataset,y)var oe=y.dgst;y=oe,l=Error(r(419)),l.stack="",l.digest=y,Il({value:l,source:null,stack:null}),i=id(t,i,s)}else if(An||br(t,i,s,!1),y=(s&t.childLanes)!==0,An||y){if(y=ln,y!==null&&(l=Zn(y,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Gs(t,l),fi(y,t,l),jf;Pd(D)||Ac(),i=id(t,i,s)}else Pd(D)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,fn=Ii(D.nextSibling),kn=i,Nt=!0,es=null,Li=!1,t!==null&&t0(i,t),i=nd(i,l.children),i.flags|=4096);return i}return u?(ls(),D=l.fallback,u=i.mode,V=t.child,oe=V.sibling,l=ya(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,oe!==null?D=ya(oe,D):(D=Vs(D,u,s,null),D.flags|=2),D.return=i,l.return=i,l.sibling=D,i.child=l,ql(null,l),l=i.child,D=t.child.memoizedState,D===null?D=ed(s):(u=D.cachePool,u!==null?(V=bn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=l0(),D={baseLanes:D.baseLanes|s,cachePool:u}),l.memoizedState=D,l.childLanes=td(t,y,s),i.memoizedState=$f,ql(t.child,l)):(rs(i),s=t.child,t=s.sibling,s=ya(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(y=i.deletions,y===null?(i.deletions=[t],i.flags|=16):y.push(t)),i.child=s,i.memoizedState=null,s)}function nd(t,i){return i=_c({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function _c(t,i){return t=yi(22,t,null,i),t.lanes=0,t}function id(t,i,s){return Qs(i,t.child,null,s),t=nd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function xg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),vf(t.return,i,s)}function ad(t,i,s,l,u,d){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=s,y.tailMode=u,y.treeForkCount=d)}function Sg(t,i,s){var l=i.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var y=Sn.current,D=(y&2)!==0;if(D?(y=y&1|2,i.flags|=128):y&=1,Re(Sn,y),Vn(t,i,l,s),l=Nt?Ol:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,s,i);else if(t.tag===19)xg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)t=s.alternate,t!==null&&sc(t)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),ad(i,!1,u,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&sc(t)===null){i.child=u;break}t=u.sibling,u.sibling=s,s=u,u=t}ad(i,!0,s,null,d,l);break;case"together":ad(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ta(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),us|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(br(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ya(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ya(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function sd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&jo(t)))}function bS(t,i,s){switch(i.tag){case 3:Ce(i,i.stateNode.containerInfo),ns(i,bn,t.memoizedState.cache),Xs();break;case 27:case 5:st(i);break;case 4:Ce(i,i.stateNode.containerInfo);break;case 10:ns(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Df(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(rs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?yg(t,i,s):(rs(i),t=Ta(t,i,s),t!==null?t.sibling:null);rs(i);break;case 19:var u=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(br(t,i,s,!1),l=(s&i.childLanes)!==0),u){if(l)return Sg(t,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Re(Sn,Sn.current),l)break;return null;case 22:return i.lanes=0,hg(t,i,s,i.pendingProps);case 24:ns(i,bn,t.memoizedState.cache)}return Ta(t,i,s)}function Mg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)An=!0;else{if(!sd(t,s)&&(i.flags&128)===0)return An=!1,bS(t,i,s);An=(t.flags&131072)!==0}else An=!1,Nt&&(i.flags&1048576)!==0&&e0(i,Ol,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Zs(i.elementType),i.type=t,typeof t=="function")uf(t)?(l=Js(t,l),i.tag=1,i=_g(null,i,t,l,s)):(i.tag=0,i=Jf(null,i,t,l,s));else{if(t!=null){var u=t.$$typeof;if(u===M){i.tag=11,i=ug(null,i,t,l,s);break e}else if(u===F){i.tag=14,i=fg(null,i,t,l,s);break e}}throw i=he(t)||t,Error(r(306,i,""))}}return i;case 0:return Jf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,u=Js(l,i.pendingProps),_g(t,i,l,u,s);case 3:e:{if(Ce(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,Tf(t,i),Gl(i,l,null,s);var y=i.memoizedState;if(l=y.cache,ns(i,bn,l),l!==d.cache&&yf(i,[bn],s,!0),kl(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=vg(t,i,l,s);break e}else if(l!==u){u=Di(Error(r(424)),i),Il(u),i=vg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(fn=Ii(t.firstChild),kn=i,Nt=!0,es=null,Li=!0,s=h0(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Xs(),l===u){i=Ta(t,i,s);break e}Vn(t,i,l,s)}i=i.child}return i;case 26:return gc(t,i),t===null?(s=L_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Nt||(s=i.type,t=i.pendingProps,l=Lc(se.current).createElement(s),l[B]=i,l[De]=t,Xn(l,s,t),En(l),i.stateNode=l):i.memoizedState=L_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return st(i),t===null&&Nt&&(l=i.stateNode=D_(i.type,i.pendingProps,se.current),kn=i,Li=!0,u=fn,ms(i.type)?(Bd=u,fn=Ii(l.firstChild)):fn=u),Vn(t,i,i.pendingProps.children,s),gc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Nt&&((u=l=fn)&&(l=eM(l,i.type,i.pendingProps,Li),l!==null?(i.stateNode=l,kn=i,fn=Ii(l.firstChild),Li=!1,u=!0):u=!1),u||ts(i)),st(i),u=i.type,d=i.pendingProps,y=t!==null?t.memoizedProps:null,l=d.children,Ld(u,d)?l=null:y!==null&&Ld(u,y)&&(i.flags|=32),i.memoizedState!==null&&(u=Uf(t,i,mS,null,null,s),oo._currentValue=u),gc(t,i),Vn(t,i,l,s),i.child;case 6:return t===null&&Nt&&((t=s=fn)&&(s=tM(s,i.pendingProps,Li),s!==null?(i.stateNode=s,kn=i,fn=null,t=!0):t=!1),t||ts(i)),null;case 13:return yg(t,i,s);case 4:return Ce(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Qs(i,null,l,s):Vn(t,i,l,s),i.child;case 11:return ug(t,i,i.type,i.pendingProps,s);case 7:return Vn(t,i,i.pendingProps,s),i.child;case 8:return Vn(t,i,i.pendingProps.children,s),i.child;case 12:return Vn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ns(i,i.type,l.value),Vn(t,i,l.children,s),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,Ys(i),u=Gn(u),l=l(u),i.flags|=1,Vn(t,i,l,s),i.child;case 14:return fg(t,i,i.type,i.pendingProps,s);case 15:return dg(t,i,i.type,i.pendingProps,s);case 19:return Sg(t,i,s);case 31:return ES(t,i,s);case 22:return hg(t,i,s,i.pendingProps);case 24:return Ys(i),l=Gn(bn),t===null?(u=Mf(),u===null&&(u=ln,d=xf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:l,cache:u},bf(i),ns(i,bn,u)):((t.lanes&s)!==0&&(Tf(t,i),Gl(i,null,null,s),kl()),u=t.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),ns(i,bn,l)):(l=d.cache,ns(i,bn,l),l!==u.cache&&yf(i,[bn],s,!0))),Vn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Aa(t){t.flags|=4}function rd(t,i,s,l,u){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Kg())t.flags|=8192;else throw Ks=tc,Ef}else t.flags&=-16777217}function Eg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!B_(i))if(Kg())t.flags|=8192;else throw Ks=tc,Ef}function vc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?we():536870912,t.lanes|=i,Pr|=i)}function Zl(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function TS(t,i,s){var l=i.pendingProps;switch(pf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return dn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ma(bn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Er(i)?Aa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gf())),dn(i),null;case 26:var u=i.type,d=i.memoizedState;return t===null?(Aa(i),d!==null?(dn(i),Eg(i,d)):(dn(i),rd(i,u,null,l,s))):d?d!==t.memoizedState?(Aa(i),dn(i),Eg(i,d)):(dn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Aa(i),dn(i),rd(i,u,t,l,s)),null;case 27:if(je(i),s=se.current,u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Aa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return dn(i),null}t=Oe.current,Er(i)?n0(i):(t=D_(u,l,s),i.stateNode=t,Aa(i))}return dn(i),null;case 5:if(je(i),u=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Aa(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return dn(i),null}if(d=Oe.current,Er(i))n0(i);else{var y=Lc(se.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(u,{is:l.is}):y.createElement(u)}}d[B]=i,d[De]=l;e:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break e;for(;y.sibling===null;){if(y.return===null||y.return===i)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;e:switch(Xn(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Aa(i)}}return dn(i),rd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Aa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=se.current,Er(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,u=kn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[B]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||y_(t.nodeValue,s)),t||ts(i,!0)}else t=Lc(t).createTextNode(l),t[B]=i,i.stateNode=t}return dn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Er(i),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[B]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),t=!1}else s=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Si(i),i):(Si(i),null);if((i.flags&128)!==0)throw Error(r(558))}return dn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Er(i),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[B]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),u=!1}else u=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(Si(i),i):(Si(i),null)}return Si(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),vc(i,i.updateQueue),dn(i),null);case 4:return Ge(),t===null&&Cd(i.stateNode.containerInfo),dn(i),null;case 10:return Ma(i.type),dn(i),null;case 19:if(J(Sn),l=i.memoizedState,l===null)return dn(i),null;if(u=(i.flags&128)!==0,d=l.rendering,d===null)if(u)Zl(l,!1);else{if(xn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=sc(t),d!==null){for(i.flags|=128,Zl(l,!1),t=d.updateQueue,i.updateQueue=t,vc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)jm(s,t),s=s.sibling;return Re(Sn,Sn.current&1|2),Nt&&xa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&Dt()>Ec&&(i.flags|=128,u=!0,Zl(l,!1),i.lanes=4194304)}else{if(!u)if(t=sc(d),t!==null){if(i.flags|=128,u=!0,t=t.updateQueue,i.updateQueue=t,vc(i,t),Zl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Nt)return dn(i),null}else 2*Dt()-l.renderingStartTime>Ec&&s!==536870912&&(i.flags|=128,u=!0,Zl(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Dt(),t.sibling=null,s=Sn.current,Re(Sn,u?s&1|2:s&1),Nt&&xa(i,l.treeForkCount),t):(dn(i),null);case 22:case 23:return Si(i),wf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),s=i.updateQueue,s!==null&&vc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&J(qs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ma(bn),dn(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function AS(t,i){switch(pf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ma(bn),Ge(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return je(i),null;case 31:if(i.memoizedState!==null){if(Si(i),i.alternate===null)throw Error(r(340));Xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Si(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return J(Sn),null;case 4:return Ge(),null;case 10:return Ma(i.type),null;case 22:case 23:return Si(i),wf(),t!==null&&J(qs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ma(bn),null;case 25:return null;default:return null}}function bg(t,i){switch(pf(i),i.tag){case 3:Ma(bn),Ge();break;case 26:case 27:case 5:je(i);break;case 4:Ge();break;case 31:i.memoizedState!==null&&Si(i);break;case 13:Si(i);break;case 19:J(Sn);break;case 10:Ma(i.type);break;case 22:case 23:Si(i),wf(),t!==null&&J(qs);break;case 24:Ma(bn)}}function Kl(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var u=l.next;s=u;do{if((s.tag&t)===t){l=void 0;var d=s.create,y=s.inst;l=d(),y.destroy=l}s=s.next}while(s!==u)}}catch(D){Kt(i,i.return,D)}}function os(t,i,s){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&t)===t){var y=l.inst,D=y.destroy;if(D!==void 0){y.destroy=void 0,u=i;var V=s,oe=D;try{oe()}catch(Me){Kt(u,V,Me)}}}l=l.next}while(l!==d)}}catch(Me){Kt(i,i.return,Me)}}function Tg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{m0(i,s)}catch(l){Kt(t,t.return,l)}}}function Ag(t,i,s){s.props=Js(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Kt(t,i,l)}}function Ql(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(u){Kt(t,i,u)}}function na(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(u){Kt(t,i,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Kt(t,i,u)}else s.current=null}function Rg(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(u){Kt(t,t.return,u)}}function ld(t,i,s){try{var l=t.stateNode;ZS(l,t.type,s,i),l[De]=i}catch(u){Kt(t,t.return,u)}}function Cg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ms(t.type)||t.tag===4}function od(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ms(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=_a));else if(l!==4&&(l===27&&ms(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(cd(t,i,s),t=t.sibling;t!==null;)cd(t,i,s),t=t.sibling}function yc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ms(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(yc(t,i,s),t=t.sibling;t!==null;)yc(t,i,s),t=t.sibling}function wg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Xn(i,l,s),i[B]=t,i[De]=s}catch(d){Kt(t,t.return,d)}}var Ra=!1,Rn=!1,ud=!1,Dg=typeof WeakSet=="function"?WeakSet:Set,Pn=null;function RS(t,i){if(t=t.containerInfo,Nd=Hc,t=Gm(t),nf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var y=0,D=-1,V=-1,oe=0,Me=0,Ae=t,de=null;t:for(;;){for(var _e;Ae!==s||u!==0&&Ae.nodeType!==3||(D=y+u),Ae!==d||l!==0&&Ae.nodeType!==3||(V=y+l),Ae.nodeType===3&&(y+=Ae.nodeValue.length),(_e=Ae.firstChild)!==null;)de=Ae,Ae=_e;for(;;){if(Ae===t)break t;if(de===s&&++oe===u&&(D=y),de===d&&++Me===l&&(V=y),(_e=Ae.nextSibling)!==null)break;Ae=de,de=Ae.parentNode}Ae=_e}s=D===-1||V===-1?null:{start:D,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ud={focusedElem:t,selectionRange:s},Hc=!1,Pn=i;Pn!==null;)if(i=Pn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Pn=t;else for(;Pn!==null;){switch(i=Pn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)u=t[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var tt=Js(s.type,u);t=l.getSnapshotBeforeUpdate(tt,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ut){Kt(s,s.return,ut)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Id(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Id(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Pn=t;break}Pn=i.return}}function Ng(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:wa(t,s),l&4&&Kl(5,s);break;case 1:if(wa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(y){Kt(s,s.return,y)}else{var u=Js(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(u,i,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Kt(s,s.return,y)}}l&64&&Tg(s),l&512&&Ql(s,s.return);break;case 3:if(wa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{m0(t,i)}catch(y){Kt(s,s.return,y)}}break;case 27:i===null&&l&4&&wg(s);case 26:case 5:wa(t,s),i===null&&l&4&&Rg(s),l&512&&Ql(s,s.return);break;case 12:wa(t,s);break;case 31:wa(t,s),l&4&&Og(t,s);break;case 13:wa(t,s),l&4&&Ig(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=PS.bind(null,s),nM(t,s))));break;case 22:if(l=s.memoizedState!==null||Ra,!l){i=i!==null&&i.memoizedState!==null||Rn,u=Ra;var d=Rn;Ra=l,(Rn=i)&&!d?Da(t,s,(s.subtreeFlags&8772)!==0):wa(t,s),Ra=u,Rn=d}break;case 30:break;default:wa(t,s)}}function Ug(t){var i=t.alternate;i!==null&&(t.alternate=null,Ug(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ki(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gn=null,li=!1;function Ca(t,i,s){for(s=s.child;s!==null;)Lg(t,i,s),s=s.sibling}function Lg(t,i,s){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(ee,s)}catch{}switch(s.tag){case 26:Rn||na(s,i),Ca(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Rn||na(s,i);var l=gn,u=li;ms(s.type)&&(gn=s.stateNode,li=!1),Ca(t,i,s),so(s.stateNode),gn=l,li=u;break;case 5:Rn||na(s,i);case 6:if(l=gn,u=li,gn=null,Ca(t,i,s),gn=l,li=u,gn!==null)if(li)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(s.stateNode)}catch(d){Kt(s,i,d)}else try{gn.removeChild(s.stateNode)}catch(d){Kt(s,i,d)}break;case 18:gn!==null&&(li?(t=gn,T_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xr(t)):T_(gn,s.stateNode));break;case 4:l=gn,u=li,gn=s.stateNode.containerInfo,li=!0,Ca(t,i,s),gn=l,li=u;break;case 0:case 11:case 14:case 15:os(2,s,i),Rn||os(4,s,i),Ca(t,i,s);break;case 1:Rn||(na(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Ag(s,i,l)),Ca(t,i,s);break;case 21:Ca(t,i,s);break;case 22:Rn=(l=Rn)||s.memoizedState!==null,Ca(t,i,s),Rn=l;break;default:Ca(t,i,s)}}function Og(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xr(t)}catch(s){Kt(i,i.return,s)}}}function Ig(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xr(t)}catch(s){Kt(i,i.return,s)}}function CS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Dg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Dg),i;default:throw Error(r(435,t.tag))}}function xc(t,i){var s=CS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var u=zS.bind(null,t,l);l.then(u,u)}})}function oi(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l],d=t,y=i,D=y;e:for(;D!==null;){switch(D.tag){case 27:if(ms(D.type)){gn=D.stateNode,li=!1;break e}break;case 5:gn=D.stateNode,li=!1;break e;case 3:case 4:gn=D.stateNode.containerInfo,li=!0;break e}D=D.return}if(gn===null)throw Error(r(160));Lg(d,y,u),gn=null,li=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Pg(i,t),i=i.sibling}var Wi=null;function Pg(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oi(i,t),ci(t),l&4&&(os(3,t,t.return),Kl(3,t),os(5,t,t.return));break;case 1:oi(i,t),ci(t),l&512&&(Rn||s===null||na(s,s.return)),l&64&&Ra&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var u=Wi;if(oi(i,t),ci(t),l&512&&(Rn||s===null||na(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[si]||d[B]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),Xn(d,l,s),d[B]=t,En(d),l=d;break e;case"link":var y=P_("link","href",u).get(l+(s.href||""));if(y){for(var D=0;D<y.length;D++)if(d=y[D],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(D,1);break t}}d=u.createElement(l),Xn(d,l,s),u.head.appendChild(d);break;case"meta":if(y=P_("meta","content",u).get(l+(s.content||""))){for(D=0;D<y.length;D++)if(d=y[D],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(D,1);break t}}d=u.createElement(l),Xn(d,l,s),u.head.appendChild(d);break;default:throw Error(r(468,l))}d[B]=t,En(d),l=d}t.stateNode=l}else z_(u,t.type,t.stateNode);else t.stateNode=I_(u,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?z_(u,t.type,t.stateNode):I_(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&ld(t,t.memoizedProps,s.memoizedProps)}break;case 27:oi(i,t),ci(t),l&512&&(Rn||s===null||na(s,s.return)),s!==null&&l&4&&ld(t,t.memoizedProps,s.memoizedProps);break;case 5:if(oi(i,t),ci(t),l&512&&(Rn||s===null||na(s,s.return)),t.flags&32){u=t.stateNode;try{_i(u,"")}catch(tt){Kt(t,t.return,tt)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,ld(t,u,s!==null?s.memoizedProps:u)),l&1024&&(ud=!0);break;case 6:if(oi(i,t),ci(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(tt){Kt(t,t.return,tt)}}break;case 3:if(Pc=null,u=Wi,Wi=Oc(i.containerInfo),oi(i,t),Wi=u,ci(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Xr(i.containerInfo)}catch(tt){Kt(t,t.return,tt)}ud&&(ud=!1,zg(t));break;case 4:l=Wi,Wi=Oc(t.stateNode.containerInfo),oi(i,t),ci(t),Wi=l;break;case 12:oi(i,t),ci(t);break;case 31:oi(i,t),ci(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xc(t,l)));break;case 13:oi(i,t),ci(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Mc=Dt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xc(t,l)));break;case 22:u=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,oe=Ra,Me=Rn;if(Ra=oe||u,Rn=Me||V,oi(i,t),Rn=Me,Ra=oe,ci(t),l&8192)e:for(i=t.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||V||Ra||Rn||$s(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(d=V.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{D=V.stateNode;var Ae=V.memoizedProps.style,de=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;D.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(tt){Kt(V,V.return,tt)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(tt){Kt(V,V.return,tt)}}}else if(i.tag===18){if(s===null){V=i;try{var _e=V.stateNode;u?A_(_e,!0):A_(V.stateNode,!1)}catch(tt){Kt(V,V.return,tt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,xc(t,s))));break;case 19:oi(i,t),ci(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xc(t,l)));break;case 30:break;case 21:break;default:oi(i,t),ci(t)}}function ci(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(Cg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,d=od(t);yc(t,d,u);break;case 5:var y=s.stateNode;s.flags&32&&(_i(y,""),s.flags&=-33);var D=od(t);yc(t,D,y);break;case 3:case 4:var V=s.stateNode.containerInfo,oe=od(t);cd(t,oe,V);break;default:throw Error(r(161))}}catch(Me){Kt(t,t.return,Me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function zg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;zg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function wa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ng(t,i.alternate,i),i=i.sibling}function $s(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:os(4,i,i.return),$s(i);break;case 1:na(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Ag(i,i.return,s),$s(i);break;case 27:so(i.stateNode);case 26:case 5:na(i,i.return),$s(i);break;case 22:i.memoizedState===null&&$s(i);break;case 30:$s(i);break;default:$s(i)}t=t.sibling}}function Da(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=t,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:Da(u,d,s),Kl(4,d);break;case 1:if(Da(u,d,s),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(oe){Kt(l,l.return,oe)}if(l=d,u=l.updateQueue,u!==null){var D=l.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)p0(V[u],D)}catch(oe){Kt(l,l.return,oe)}}s&&y&64&&Tg(d),Ql(d,d.return);break;case 27:wg(d);case 26:case 5:Da(u,d,s),s&&l===null&&y&4&&Rg(d),Ql(d,d.return);break;case 12:Da(u,d,s);break;case 31:Da(u,d,s),s&&y&4&&Og(u,d);break;case 13:Da(u,d,s),s&&y&4&&Ig(u,d);break;case 22:d.memoizedState===null&&Da(u,d,s),Ql(d,d.return);break;case 30:break;default:Da(u,d,s)}i=i.sibling}}function fd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Pl(s))}function dd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Pl(t))}function Yi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Bg(t,i,s,l),i=i.sibling}function Bg(t,i,s,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Yi(t,i,s,l),u&2048&&Kl(9,i);break;case 1:Yi(t,i,s,l);break;case 3:Yi(t,i,s,l),u&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Pl(t)));break;case 12:if(u&2048){Yi(t,i,s,l),t=i.stateNode;try{var d=i.memoizedProps,y=d.id,D=d.onPostCommit;typeof D=="function"&&D(y,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Kt(i,i.return,V)}}else Yi(t,i,s,l);break;case 31:Yi(t,i,s,l);break;case 13:Yi(t,i,s,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Yi(t,i,s,l):jl(t,i):d._visibility&2?Yi(t,i,s,l):(d._visibility|=2,Lr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),u&2048&&fd(y,i);break;case 24:Yi(t,i,s,l),u&2048&&dd(i.alternate,i);break;default:Yi(t,i,s,l)}}function Lr(t,i,s,l,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,y=i,D=s,V=l,oe=y.flags;switch(y.tag){case 0:case 11:case 15:Lr(d,y,D,V,u),Kl(8,y);break;case 23:break;case 22:var Me=y.stateNode;y.memoizedState!==null?Me._visibility&2?Lr(d,y,D,V,u):jl(d,y):(Me._visibility|=2,Lr(d,y,D,V,u)),u&&oe&2048&&fd(y.alternate,y);break;case 24:Lr(d,y,D,V,u),u&&oe&2048&&dd(y.alternate,y);break;default:Lr(d,y,D,V,u)}i=i.sibling}}function jl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,u=l.flags;switch(l.tag){case 22:jl(s,l),u&2048&&fd(l.alternate,l);break;case 24:jl(s,l),u&2048&&dd(l.alternate,l);break;default:jl(s,l)}i=i.sibling}}var Jl=8192;function Or(t,i,s){if(t.subtreeFlags&Jl)for(t=t.child;t!==null;)Fg(t,i,s),t=t.sibling}function Fg(t,i,s){switch(t.tag){case 26:Or(t,i,s),t.flags&Jl&&t.memoizedState!==null&&pM(s,Wi,t.memoizedState,t.memoizedProps);break;case 5:Or(t,i,s);break;case 3:case 4:var l=Wi;Wi=Oc(t.stateNode.containerInfo),Or(t,i,s),Wi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Jl,Jl=16777216,Or(t,i,s),Jl=l):Or(t,i,s));break;default:Or(t,i,s)}}function Hg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function $l(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Pn=l,Gg(l,t)}Hg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kg(t),t=t.sibling}function kg(t){switch(t.tag){case 0:case 11:case 15:$l(t),t.flags&2048&&os(9,t,t.return);break;case 3:$l(t);break;case 12:$l(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Sc(t)):$l(t);break;default:$l(t)}}function Sc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Pn=l,Gg(l,t)}Hg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:os(8,i,i.return),Sc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Sc(i));break;default:Sc(i)}t=t.sibling}}function Gg(t,i){for(;Pn!==null;){var s=Pn;switch(s.tag){case 0:case 11:case 15:os(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Pl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Pn=l;else e:for(s=t;Pn!==null;){l=Pn;var u=l.sibling,d=l.return;if(Ug(l),l===s){Pn=null;break e}if(u!==null){u.return=d,Pn=u;break e}Pn=d}}}var wS={getCacheForType:function(t){var i=Gn(bn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Gn(bn).controller.signal}},DS=typeof WeakMap=="function"?WeakMap:Map,Ht=0,ln=null,bt=null,Ct=0,Zt=0,Mi=null,cs=!1,Ir=!1,hd=!1,Na=0,xn=0,us=0,er=0,pd=0,Ei=0,Pr=0,eo=null,ui=null,md=!1,Mc=0,Vg=0,Ec=1/0,bc=null,fs=null,Un=0,ds=null,zr=null,Ua=0,gd=0,_d=null,Xg=null,to=0,vd=null;function bi(){return(Ht&2)!==0&&Ct!==0?Ct&-Ct:H.T!==null?bd():Ka()}function Wg(){if(Ei===0)if((Ct&536870912)===0||Nt){var t=nt;nt<<=1,(nt&3932160)===0&&(nt=262144),Ei=t}else Ei=536870912;return t=xi.current,t!==null&&(t.flags|=32),Ei}function fi(t,i,s){(t===ln&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)&&(Br(t,0),hs(t,Ct,Ei,!1)),Ze(t,s),((Ht&2)===0||t!==ln)&&(t===ln&&((Ht&2)===0&&(er|=s),xn===4&&hs(t,Ct,Ei,!1)),ia(t))}function Yg(t,i,s){if((Ht&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Pe(t,i),u=l?LS(t,i):xd(t,i,!0),d=l;do{if(u===0){Ir&&!l&&hs(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!NS(s)){u=xd(t,i,!1),d=!1;continue}if(u===2){if(d=i,t.errorRecoveryDisabledLanes&d)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;e:{var D=t;u=eo;var V=D.current.memoizedState.isDehydrated;if(V&&(Br(D,y).flags|=256),y=xd(D,y,!1),y!==2){if(hd&&!V){D.errorRecoveryDisabledLanes|=d,er|=d,u=4;break e}d=ui,ui=u,d!==null&&(ui===null?ui=d:ui.push.apply(ui,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){Br(t,0),hs(t,i,0,!0);break}e:{switch(l=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:hs(l,i,Ei,!cs);break e;case 2:ui=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=Mc+300-Dt(),10<u)){if(hs(l,i,Ei,!cs),xe(l,0,!0)!==0)break e;Ua=i,l.timeoutHandle=E_(qg.bind(null,l,s,ui,bc,md,i,Ei,er,Pr,cs,d,"Throttled",-0,0),u);break e}qg(l,s,ui,bc,md,i,Ei,er,Pr,cs,d,null,-0,0)}}break}while(!0);ia(t)}function qg(t,i,s,l,u,d,y,D,V,oe,Me,Ae,de,_e){if(t.timeoutHandle=-1,Ae=i.subtreeFlags,Ae&8192||(Ae&16785408)===16785408){Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:_a},Fg(i,d,Ae);var tt=(d&62914560)===d?Mc-Dt():(d&4194048)===d?Vg-Dt():0;if(tt=mM(Ae,tt),tt!==null){Ua=d,t.cancelPendingCommit=tt(t_.bind(null,t,i,d,s,l,u,y,D,V,Me,Ae,null,de,_e)),hs(t,d,y,!oe);return}}t_(t,i,d,s,l,u,y,D,V)}function NS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var u=s[l],d=u.getSnapshot;u=u.value;try{if(!vi(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hs(t,i,s,l){i&=~pd,i&=~er,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var u=i;0<u;){var d=31-Ue(u),y=1<<d;l[d]=-1,u&=~y}s!==0&&Ft(t,s,i)}function Tc(){return(Ht&6)===0?(no(0),!1):!0}function yd(){if(bt!==null){if(Zt===0)var t=bt.return;else t=bt,Sa=Ws=null,If(t),Cr=null,Bl=0,t=bt;for(;t!==null;)bg(t.alternate,t),t=t.return;bt=null}}function Br(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,jS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ua=0,yd(),ln=t,bt=s=ya(t.current,null),Ct=i,Zt=0,Mi=null,cs=!1,Ir=Pe(t,i),hd=!1,Pr=Ei=pd=er=us=xn=0,ui=eo=null,md=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var u=31-Ue(l),d=1<<u;i|=t[u],l&=~d}return Na=i,Yo(),s}function Zg(t,i){_t=null,H.H=Yl,i===Rr||i===ec?(i=u0(),Zt=3):i===Ef?(i=u0(),Zt=4):Zt=i===jf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Mi=i,bt===null&&(xn=1,pc(t,Di(i,t.current)))}function Kg(){var t=xi.current;return t===null?!0:(Ct&4194048)===Ct?Oi===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?t===Oi:!1}function Qg(){var t=H.H;return H.H=Yl,t===null?Yl:t}function jg(){var t=H.A;return H.A=wS,t}function Ac(){xn=4,cs||(Ct&4194048)!==Ct&&xi.current!==null||(Ir=!0),(us&134217727)===0&&(er&134217727)===0||ln===null||hs(ln,Ct,Ei,!1)}function xd(t,i,s){var l=Ht;Ht|=2;var u=Qg(),d=jg();(ln!==t||Ct!==i)&&(bc=null,Br(t,i)),i=!1;var y=xn;e:do try{if(Zt!==0&&bt!==null){var D=bt,V=Mi;switch(Zt){case 8:yd(),y=6;break e;case 3:case 2:case 9:case 6:xi.current===null&&(i=!0);var oe=Zt;if(Zt=0,Mi=null,Fr(t,D,V,oe),s&&Ir){y=0;break e}break;default:oe=Zt,Zt=0,Mi=null,Fr(t,D,V,oe)}}US(),y=xn;break}catch(Me){Zg(t,Me)}while(!0);return i&&t.shellSuspendCounter++,Sa=Ws=null,Ht=l,H.H=u,H.A=d,bt===null&&(ln=null,Ct=0,Yo()),y}function US(){for(;bt!==null;)Jg(bt)}function LS(t,i){var s=Ht;Ht|=2;var l=Qg(),u=jg();ln!==t||Ct!==i?(bc=null,Ec=Dt()+500,Br(t,i)):Ir=Pe(t,i);e:do try{if(Zt!==0&&bt!==null){i=bt;var d=Mi;t:switch(Zt){case 1:Zt=0,Mi=null,Fr(t,i,d,1);break;case 2:case 9:if(o0(d)){Zt=0,Mi=null,$g(i);break}i=function(){Zt!==2&&Zt!==9||ln!==t||(Zt=7),ia(t)},d.then(i,i);break e;case 3:Zt=7;break e;case 4:Zt=5;break e;case 7:o0(d)?(Zt=0,Mi=null,$g(i)):(Zt=0,Mi=null,Fr(t,i,d,7));break;case 5:var y=null;switch(bt.tag){case 26:y=bt.memoizedState;case 5:case 27:var D=bt;if(y?B_(y):D.stateNode.complete){Zt=0,Mi=null;var V=D.sibling;if(V!==null)bt=V;else{var oe=D.return;oe!==null?(bt=oe,Rc(oe)):bt=null}break t}}Zt=0,Mi=null,Fr(t,i,d,5);break;case 6:Zt=0,Mi=null,Fr(t,i,d,6);break;case 8:yd(),xn=6;break e;default:throw Error(r(462))}}OS();break}catch(Me){Zg(t,Me)}while(!0);return Sa=Ws=null,H.H=l,H.A=u,Ht=s,bt!==null?0:(ln=null,Ct=0,Yo(),xn)}function OS(){for(;bt!==null&&!an();)Jg(bt)}function Jg(t){var i=Mg(t.alternate,t,Na);t.memoizedProps=t.pendingProps,i===null?Rc(t):bt=i}function $g(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=gg(s,i,i.pendingProps,i.type,void 0,Ct);break;case 11:i=gg(s,i,i.pendingProps,i.type.render,i.ref,Ct);break;case 5:If(i);default:bg(s,i),i=bt=jm(i,Na),i=Mg(s,i,Na)}t.memoizedProps=t.pendingProps,i===null?Rc(t):bt=i}function Fr(t,i,s,l){Sa=Ws=null,If(i),Cr=null,Bl=0;var u=i.return;try{if(MS(t,u,i,s,Ct)){xn=1,pc(t,Di(s,t.current)),bt=null;return}}catch(d){if(u!==null)throw bt=u,d;xn=1,pc(t,Di(s,t.current)),bt=null;return}i.flags&32768?(Nt||l===1?t=!0:Ir||(Ct&536870912)!==0?t=!1:(cs=t=!0,(l===2||l===9||l===3||l===6)&&(l=xi.current,l!==null&&l.tag===13&&(l.flags|=16384))),e_(i,t)):Rc(i)}function Rc(t){var i=t;do{if((i.flags&32768)!==0){e_(i,cs);return}t=i.return;var s=TS(i.alternate,i,Na);if(s!==null){bt=s;return}if(i=i.sibling,i!==null){bt=i;return}bt=i=t}while(i!==null);xn===0&&(xn=5)}function e_(t,i){do{var s=AS(t.alternate,t);if(s!==null){s.flags&=32767,bt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){bt=t;return}bt=t=s}while(t!==null);xn=6,bt=null}function t_(t,i,s,l,u,d,y,D,V){t.cancelPendingCommit=null;do Cc();while(Un!==0);if((Ht&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=of,cn(t,s,d,y,D,V),t===ln&&(bt=ln=null,Ct=0),zr=i,ds=t,Ua=s,gd=d,_d=u,Xg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,BS(X,function(){return r_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,u=W.p,W.p=2,y=Ht,Ht|=4;try{RS(t,i,s)}finally{Ht=y,W.p=u,H.T=l}}Un=1,n_(),i_(),a_()}}function n_(){if(Un===1){Un=0;var t=ds,i=zr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var l=W.p;W.p=2;var u=Ht;Ht|=4;try{Pg(i,t);var d=Ud,y=Gm(t.containerInfo),D=d.focusedElem,V=d.selectionRange;if(y!==D&&D&&D.ownerDocument&&km(D.ownerDocument.documentElement,D)){if(V!==null&&nf(D)){var oe=V.start,Me=V.end;if(Me===void 0&&(Me=oe),"selectionStart"in D)D.selectionStart=oe,D.selectionEnd=Math.min(Me,D.value.length);else{var Ae=D.ownerDocument||document,de=Ae&&Ae.defaultView||window;if(de.getSelection){var _e=de.getSelection(),tt=D.textContent.length,ut=Math.min(V.start,tt),tn=V.end===void 0?ut:Math.min(V.end,tt);!_e.extend&&ut>tn&&(y=tn,tn=ut,ut=y);var ne=Hm(D,ut),Z=Hm(D,tn);if(ne&&Z&&(_e.rangeCount!==1||_e.anchorNode!==ne.node||_e.anchorOffset!==ne.offset||_e.focusNode!==Z.node||_e.focusOffset!==Z.offset)){var le=Ae.createRange();le.setStart(ne.node,ne.offset),_e.removeAllRanges(),ut>tn?(_e.addRange(le),_e.extend(Z.node,Z.offset)):(le.setEnd(Z.node,Z.offset),_e.addRange(le))}}}}for(Ae=[],_e=D;_e=_e.parentNode;)_e.nodeType===1&&Ae.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Ae.length;D++){var be=Ae[D];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}Hc=!!Nd,Ud=Nd=null}finally{Ht=u,W.p=l,H.T=s}}t.current=i,Un=2}}function i_(){if(Un===2){Un=0;var t=ds,i=zr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var l=W.p;W.p=2;var u=Ht;Ht|=4;try{Ng(t,i.alternate,i)}finally{Ht=u,W.p=l,H.T=s}}Un=3}}function a_(){if(Un===4||Un===3){Un=0,Q();var t=ds,i=zr,s=Ua,l=Xg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Un=5:(Un=0,zr=ds=null,s_(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(fs=null),Za(s),i=i.stateNode,ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,u=W.p,W.p=2,H.T=null;try{for(var d=t.onRecoverableError,y=0;y<l.length;y++){var D=l[y];d(D.value,{componentStack:D.stack})}}finally{H.T=i,W.p=u}}(Ua&3)!==0&&Cc(),ia(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===vd?to++:(to=0,vd=t):to=0,no(0)}}function s_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Pl(i)))}function Cc(){return n_(),i_(),a_(),r_()}function r_(){if(Un!==5)return!1;var t=ds,i=gd;gd=0;var s=Za(Ua),l=H.T,u=W.p;try{W.p=32>s?32:s,H.T=null,s=_d,_d=null;var d=ds,y=Ua;if(Un=0,zr=ds=null,Ua=0,(Ht&6)!==0)throw Error(r(331));var D=Ht;if(Ht|=4,kg(d.current),Bg(d,d.current,y,s),Ht=D,no(0,!1),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(ee,d)}catch{}return!0}finally{W.p=u,H.T=l,s_(t,i)}}function l_(t,i,s){i=Di(s,i),i=Qf(t.stateNode,i,2),t=ss(t,i,2),t!==null&&(Ze(t,2),ia(t))}function Kt(t,i,s){if(t.tag===3)l_(t,t,s);else for(;i!==null;){if(i.tag===3){l_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fs===null||!fs.has(l))){t=Di(s,t),s=og(2),l=ss(i,s,2),l!==null&&(cg(s,l,i,t),Ze(l,2),ia(l));break}}i=i.return}}function Sd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new DS;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(s)||(hd=!0,u.add(s),t=IS.bind(null,t,i,s),i.then(t,t))}function IS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,ln===t&&(Ct&s)===s&&(xn===4||xn===3&&(Ct&62914560)===Ct&&300>Dt()-Mc?(Ht&2)===0&&Br(t,0):pd|=s,Pr===Ct&&(Pr=0)),ia(t)}function o_(t,i){i===0&&(i=we()),t=Gs(t,i),t!==null&&(Ze(t,i),ia(t))}function PS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),o_(t,s)}function zS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),o_(t,s)}function BS(t,i){return on(t,i)}var wc=null,Hr=null,Md=!1,Dc=!1,Ed=!1,ps=0;function ia(t){t!==Hr&&t.next===null&&(Hr===null?wc=Hr=t:Hr=Hr.next=t),Dc=!0,Md||(Md=!0,HS())}function no(t,i){if(!Ed&&Dc){Ed=!0;do for(var s=!1,l=wc;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var y=l.suspendedLanes,D=l.pingedLanes;d=(1<<31-Ue(42|t)+1)-1,d&=u&~(y&~D),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,d_(l,d))}else d=Ct,d=xe(l,l===ln?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Pe(l,d)||(s=!0,d_(l,d));l=l.next}while(s);Ed=!1}}function FS(){c_()}function c_(){Dc=Md=!1;var t=0;ps!==0&&QS()&&(t=ps);for(var i=Dt(),s=null,l=wc;l!==null;){var u=l.next,d=u_(l,i);d===0?(l.next=null,s===null?wc=u:s.next=u,u===null&&(Hr=s)):(s=l,(t!==0||(d&3)!==0)&&(Dc=!0)),l=u}Un!==0&&Un!==5||no(t),ps!==0&&(ps=0)}function u_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var y=31-Ue(d),D=1<<y,V=u[y];V===-1?((D&s)===0||(D&l)!==0)&&(u[y]=He(D,i)):V<=i&&(t.expiredLanes|=D),d&=~D}if(i=ln,s=Ct,s=xe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Bt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Pe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Bt(l),Za(s)){case 2:case 8:s=v;break;case 32:s=X;break;case 268435456:s=K;break;default:s=X}return l=f_.bind(null,t),s=on(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Bt(l),t.callbackPriority=2,t.callbackNode=null,2}function f_(t,i){if(Un!==0&&Un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Cc()&&t.callbackNode!==s)return null;var l=Ct;return l=xe(t,t===ln?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Yg(t,l,i),u_(t,Dt()),t.callbackNode!=null&&t.callbackNode===s?f_.bind(null,t):null)}function d_(t,i){if(Cc())return null;Yg(t,i,!0)}function HS(){JS(function(){(Ht&6)!==0?on(C,FS):c_()})}function bd(){if(ps===0){var t=Tr;t===0&&(t=Ve,Ve<<=1,(Ve&261888)===0&&(Ve=256)),ps=t}return ps}function h_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bs(""+t)}function p_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function kS(t,i,s,l,u){if(i==="submit"&&s&&s.stateNode===u){var d=h_((u[De]||null).action),y=l.submitter;y&&(i=(i=y[De]||null)?h_(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var D=new Go("action","action",null,l,u);t.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ps!==0){var V=y?p_(u,y):new FormData(u);Xf(s,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(D.preventDefault(),V=y?p_(u,y):new FormData(u),Xf(s,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Td=0;Td<lf.length;Td++){var Ad=lf[Td],GS=Ad.toLowerCase(),VS=Ad[0].toUpperCase()+Ad.slice(1);Xi(GS,"on"+VS)}Xi(Wm,"onAnimationEnd"),Xi(Ym,"onAnimationIteration"),Xi(qm,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(sS,"onTransitionRun"),Xi(rS,"onTransitionStart"),Xi(lS,"onTransitionCancel"),Xi(Zm,"onTransitionEnd"),fe("onMouseEnter",["mouseout","mouseover"]),fe("onMouseLeave",["mouseout","mouseover"]),fe("onPointerEnter",["pointerout","pointerover"]),fe("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(io));function m_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],u=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var D=l[y],V=D.instance,oe=D.currentTarget;if(D=D.listener,V!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=oe;try{d(u)}catch(Me){Wo(Me)}u.currentTarget=null,d=V}else for(y=0;y<l.length;y++){if(D=l[y],V=D.instance,oe=D.currentTarget,D=D.listener,V!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=oe;try{d(u)}catch(Me){Wo(Me)}u.currentTarget=null,d=V}}}}function Tt(t,i){var s=i[Rt];s===void 0&&(s=i[Rt]=new Set);var l=t+"__bubble";s.has(l)||(g_(i,t,2,!1),s.add(l))}function Rd(t,i,s){var l=0;i&&(l|=4),g_(s,t,l,i)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Cd(t){if(!t[Nc]){t[Nc]=!0,Bo.forEach(function(s){s!=="selectionchange"&&(XS.has(s)||Rd(s,!1,t),Rd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Nc]||(i[Nc]=!0,Rd("selectionchange",!1,i))}}function g_(t,i,s,l){switch(W_(i)){case 2:var u=vM;break;case 8:u=yM;break;default:u=Vd}s=u.bind(null,i,s,t),u=void 0,!qu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,s,{capture:!0,passive:u}):t.addEventListener(i,s,!0):u!==void 0?t.addEventListener(i,s,{passive:u}):t.addEventListener(i,s,!1)}function wd(t,i,s,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var D=l.stateNode.containerInfo;if(D===u)break;if(y===4)for(y=l.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;D!==null;){if(y=ma(D),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){l=d=y;continue e}D=D.parentNode}}l=l.return}Sm(function(){var oe=d,Me=Wu(s),Ae=[];e:{var de=Km.get(t);if(de!==void 0){var _e=Go,tt=t;switch(t){case"keypress":if(Ho(s)===0)break e;case"keydown":case"keyup":_e=zx;break;case"focusin":tt="focus",_e=ju;break;case"focusout":tt="blur",_e=ju;break;case"beforeblur":case"afterblur":_e=ju;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=Hx;break;case Wm:case Ym:case qm:_e=Cx;break;case Zm:_e=Gx;break;case"scroll":case"scrollend":_e=Ex;break;case"wheel":_e=Xx;break;case"copy":case"cut":case"paste":_e=Dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=Am;break;case"toggle":case"beforetoggle":_e=Yx}var ut=(i&4)!==0,tn=!ut&&(t==="scroll"||t==="scrollend"),ne=ut?de!==null?de+"Capture":null:de;ut=[];for(var Z=oe,le;Z!==null;){var be=Z;if(le=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||le===null||ne===null||(be=Tl(Z,ne),be!=null&&ut.push(ao(Z,be,le))),tn)break;Z=Z.return}0<ut.length&&(de=new _e(de,tt,null,s,Me),Ae.push({event:de,listeners:ut}))}}if((i&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",_e=t==="mouseout"||t==="pointerout",de&&s!==Xu&&(tt=s.relatedTarget||s.fromElement)&&(ma(tt)||tt[Ke]))break e;if((_e||de)&&(de=Me.window===Me?Me:(de=Me.ownerDocument)?de.defaultView||de.parentWindow:window,_e?(tt=s.relatedTarget||s.toElement,_e=oe,tt=tt?ma(tt):null,tt!==null&&(tn=c(tt),ut=tt.tag,tt!==tn||ut!==5&&ut!==27&&ut!==6)&&(tt=null)):(_e=null,tt=oe),_e!==tt)){if(ut=bm,be="onMouseLeave",ne="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(ut=Am,be="onPointerLeave",ne="onPointerEnter",Z="pointer"),tn=_e==null?de:zs(_e),le=tt==null?de:zs(tt),de=new ut(be,Z+"leave",_e,s,Me),de.target=tn,de.relatedTarget=le,be=null,ma(Me)===oe&&(ut=new ut(ne,Z+"enter",tt,s,Me),ut.target=le,ut.relatedTarget=tn,be=ut),tn=be,_e&&tt)t:{for(ut=WS,ne=_e,Z=tt,le=0,be=ne;be;be=ut(be))le++;be=0;for(var lt=Z;lt;lt=ut(lt))be++;for(;0<le-be;)ne=ut(ne),le--;for(;0<be-le;)Z=ut(Z),be--;for(;le--;){if(ne===Z||Z!==null&&ne===Z.alternate){ut=ne;break t}ne=ut(ne),Z=ut(Z)}ut=null}else ut=null;_e!==null&&__(Ae,de,_e,ut,!1),tt!==null&&tn!==null&&__(Ae,tn,tt,ut,!0)}}e:{if(de=oe?zs(oe):window,_e=de.nodeName&&de.nodeName.toLowerCase(),_e==="select"||_e==="input"&&de.type==="file")var Pt=Om;else if(Um(de))if(Im)Pt=nS;else{Pt=eS;var it=$x}else _e=de.nodeName,!_e||_e.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?oe&&Xt(oe.elementType)&&(Pt=Om):Pt=tS;if(Pt&&(Pt=Pt(t,oe))){Lm(Ae,Pt,s,Me);break e}it&&it(t,de,oe),t==="focusout"&&oe&&de.type==="number"&&oe.memoizedProps.value!=null&&Et(de,"number",de.value)}switch(it=oe?zs(oe):window,t){case"focusin":(Um(it)||it.contentEditable==="true")&&(_r=it,af=oe,Ll=null);break;case"focusout":Ll=af=_r=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Vm(Ae,s,Me);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":Vm(Ae,s,Me)}var yt;if($u)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else gr?Dm(t,s)&&(wt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(wt="onCompositionStart");wt&&(Rm&&s.locale!=="ko"&&(gr||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&gr&&(yt=Mm()):(Ja=Me,Zu="value"in Ja?Ja.value:Ja.textContent,gr=!0)),it=Uc(oe,wt),0<it.length&&(wt=new Tm(wt,t,null,s,Me),Ae.push({event:wt,listeners:it}),yt?wt.data=yt:(yt=Nm(s),yt!==null&&(wt.data=yt)))),(yt=Zx?Kx(t,s):Qx(t,s))&&(wt=Uc(oe,"onBeforeInput"),0<wt.length&&(it=new Tm("onBeforeInput","beforeinput",null,s,Me),Ae.push({event:it,listeners:wt}),it.data=yt)),kS(Ae,t,oe,s,Me)}m_(Ae,i)})}function ao(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Uc(t,i){for(var s=i+"Capture",l=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Tl(t,s),u!=null&&l.unshift(ao(t,u,d)),u=Tl(t,i),u!=null&&l.push(ao(t,u,d))),t.tag===3)return l;t=t.return}return[]}function WS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function __(t,i,s,l,u){for(var d=i._reactName,y=[];s!==null&&s!==l;){var D=s,V=D.alternate,oe=D.stateNode;if(D=D.tag,V!==null&&V===l)break;D!==5&&D!==26&&D!==27||oe===null||(V=oe,u?(oe=Tl(s,d),oe!=null&&y.unshift(ao(s,oe,V))):u||(oe=Tl(s,d),oe!=null&&y.push(ao(s,oe,V)))),s=s.return}y.length!==0&&t.push({event:i,listeners:y})}var YS=/\r\n?/g,qS=/\u0000|\uFFFD/g;function v_(t){return(typeof t=="string"?t:""+t).replace(YS,`
`).replace(qS,"")}function y_(t,i){return i=v_(i),v_(t)===i}function en(t,i,s,l,u,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||_i(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&_i(t,""+l);break;case"className":et(t,"class",l);break;case"tabIndex":et(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":et(t,s,l);break;case"style":Vi(t,l,d);break;case"data":if(i!=="object"){et(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Bs(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&en(t,i,"name",u.name,u,null),en(t,i,"formEncType",u.formEncType,u,null),en(t,i,"formMethod",u.formMethod,u,null),en(t,i,"formTarget",u.formTarget,u,null)):(en(t,i,"encType",u.encType,u,null),en(t,i,"method",u.method,u,null),en(t,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Bs(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=_a);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Bs(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),ke(t,"popover",l);break;case"xlinkActuate":Je(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Je(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Je(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Je(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Je(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Je(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Je(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ke(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=$i.get(s)||s,ke(t,s,l))}}function Dd(t,i,s,l,u,d){switch(s){case"style":Vi(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?_i(t,l):(typeof l=="number"||typeof l=="bigint")&&_i(t,""+l);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=_a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!w.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=t[De]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,u);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):ke(t,s,l)}}}function Xn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var l=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var y=s[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:en(t,i,d,y,s,null)}}u&&en(t,i,"srcSet",s.srcSet,s,null),l&&en(t,i,"src",s.src,s,null);return;case"input":Tt("invalid",t);var D=d=y=u=null,V=null,oe=null;for(l in s)if(s.hasOwnProperty(l)){var Me=s[l];if(Me!=null)switch(l){case"name":u=Me;break;case"type":y=Me;break;case"checked":V=Me;break;case"defaultChecked":oe=Me;break;case"value":d=Me;break;case"defaultValue":D=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(r(137,i));break;default:en(t,i,l,Me,s,null)}}Kn(t,d,D,V,oe,y,u,!1);return;case"select":Tt("invalid",t),l=y=d=null;for(u in s)if(s.hasOwnProperty(u)&&(D=s[u],D!=null))switch(u){case"value":d=D;break;case"defaultValue":y=D;break;case"multiple":l=D;default:en(t,i,u,D,s,null)}i=d,s=y,t.multiple=!!l,i!=null?Nn(t,!!l,i,!1):s!=null&&Nn(t,!!l,s,!0);return;case"textarea":Tt("invalid",t),d=u=l=null;for(y in s)if(s.hasOwnProperty(y)&&(D=s[y],D!=null))switch(y){case"value":l=D;break;case"defaultValue":u=D;break;case"children":d=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:en(t,i,y,D,s,null)}Gi(t,l,u,d);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:en(t,i,V,l,s,null)}return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(l=0;l<io.length;l++)Tt(io[l],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in s)if(s.hasOwnProperty(oe)&&(l=s[oe],l!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:en(t,i,oe,l,s,null)}return;default:if(Xt(i)){for(Me in s)s.hasOwnProperty(Me)&&(l=s[Me],l!==void 0&&Dd(t,i,Me,l,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(l=s[D],l!=null&&en(t,i,D,l,s,null))}function ZS(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,D=null,V=null,oe=null,Me=null;for(_e in s){var Ae=s[_e];if(s.hasOwnProperty(_e)&&Ae!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":V=Ae;default:l.hasOwnProperty(_e)||en(t,i,_e,null,l,Ae)}}for(var de in l){var _e=l[de];if(Ae=s[de],l.hasOwnProperty(de)&&(_e!=null||Ae!=null))switch(de){case"type":d=_e;break;case"name":u=_e;break;case"checked":oe=_e;break;case"defaultChecked":Me=_e;break;case"value":y=_e;break;case"defaultValue":D=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,i));break;default:_e!==Ae&&en(t,i,de,_e,l,Ae)}}qe(t,y,D,V,oe,Me,d,u);return;case"select":_e=y=D=de=null;for(d in s)if(V=s[d],s.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":_e=V;default:l.hasOwnProperty(d)||en(t,i,d,null,l,V)}for(u in l)if(d=l[u],V=s[u],l.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":de=d;break;case"defaultValue":D=d;break;case"multiple":y=d;default:d!==V&&en(t,i,u,d,l,V)}i=D,s=y,l=_e,de!=null?Nn(t,!!s,de,!1):!!l!=!!s&&(i!=null?Nn(t,!!s,i,!0):Nn(t,!!s,s?[]:"",!1));return;case"textarea":_e=de=null;for(D in s)if(u=s[D],s.hasOwnProperty(D)&&u!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:en(t,i,D,null,l,u)}for(y in l)if(u=l[y],d=s[y],l.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":de=u;break;case"defaultValue":_e=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&en(t,i,y,u,l,d)}gi(t,de,_e);return;case"option":for(var tt in s)if(de=s[tt],s.hasOwnProperty(tt)&&de!=null&&!l.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:en(t,i,tt,null,l,de)}for(V in l)if(de=l[V],_e=s[V],l.hasOwnProperty(V)&&de!==_e&&(de!=null||_e!=null))switch(V){case"selected":t.selected=de&&typeof de!="function"&&typeof de!="symbol";break;default:en(t,i,V,de,l,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ut in s)de=s[ut],s.hasOwnProperty(ut)&&de!=null&&!l.hasOwnProperty(ut)&&en(t,i,ut,null,l,de);for(oe in l)if(de=l[oe],_e=s[oe],l.hasOwnProperty(oe)&&de!==_e&&(de!=null||_e!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,i));break;default:en(t,i,oe,de,l,_e)}return;default:if(Xt(i)){for(var tn in s)de=s[tn],s.hasOwnProperty(tn)&&de!==void 0&&!l.hasOwnProperty(tn)&&Dd(t,i,tn,void 0,l,de);for(Me in l)de=l[Me],_e=s[Me],!l.hasOwnProperty(Me)||de===_e||de===void 0&&_e===void 0||Dd(t,i,Me,de,l,_e);return}}for(var ne in s)de=s[ne],s.hasOwnProperty(ne)&&de!=null&&!l.hasOwnProperty(ne)&&en(t,i,ne,null,l,de);for(Ae in l)de=l[Ae],_e=s[Ae],!l.hasOwnProperty(Ae)||de===_e||de==null&&_e==null||en(t,i,Ae,de,l,_e)}function x_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function KS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var u=s[l],d=u.transferSize,y=u.initiatorType,D=u.duration;if(d&&D&&x_(y)){for(y=0,D=u.responseEnd,l+=1;l<s.length;l++){var V=s[l],oe=V.startTime;if(oe>D)break;var Me=V.transferSize,Ae=V.initiatorType;Me&&x_(Ae)&&(V=V.responseEnd,y+=Me*(V<D?1:(D-oe)/(V-oe)))}if(--l,i+=8*(d+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nd=null,Ud=null;function Lc(t){return t.nodeType===9?t:t.ownerDocument}function S_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Ld(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Od=null;function QS(){var t=window.event;return t&&t.type==="popstate"?t===Od?!1:(Od=t,!0):(Od=null,!1)}var E_=typeof setTimeout=="function"?setTimeout:void 0,jS=typeof clearTimeout=="function"?clearTimeout:void 0,b_=typeof Promise=="function"?Promise:void 0,JS=typeof queueMicrotask=="function"?queueMicrotask:typeof b_<"u"?function(t){return b_.resolve(null).then(t).catch($S)}:E_;function $S(t){setTimeout(function(){throw t})}function ms(t){return t==="head"}function T_(t,i){var s=i,l=0;do{var u=s.nextSibling;if(t.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(u),Xr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")so(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,so(s);for(var d=s.firstChild;d;){var y=d.nextSibling,D=d.nodeName;d[si]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=y}}else s==="body"&&so(t.ownerDocument.body);s=u}while(s);Xr(i)}function A_(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Id(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Id(s),ki(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function eM(t,i,s,l){for(;t.nodeType===1;){var u=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[si])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ii(t.nextSibling),t===null)break}return null}function tM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ii(t.nextSibling),t===null))return null;return t}function R_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ii(t.nextSibling),t===null))return null;return t}function Pd(t){return t.data==="$?"||t.data==="$~"}function zd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function nM(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ii(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Bd=null;function C_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ii(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function w_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function D_(t,i,s){switch(i=Lc(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function so(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ki(t)}var Pi=new Map,N_=new Set;function Oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var La=W.d;W.d={f:iM,r:aM,D:sM,C:rM,L:lM,m:oM,X:uM,S:cM,M:fM};function iM(){var t=La.f(),i=Tc();return t||i}function aM(t){var i=ga(t);i!==null&&i.tag===5&&i.type==="form"?Z0(i):La.r(t)}var kr=typeof document>"u"?null:document;function U_(t,i,s){var l=kr;if(l&&typeof i=="string"&&i){var u=Yt(i);u='link[rel="'+t+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),N_.has(u)||(N_.add(u),t={rel:t,crossOrigin:s,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Xn(i,"link",t),En(i),l.head.appendChild(i)))}}function sM(t){La.D(t),U_("dns-prefetch",t,null)}function rM(t,i){La.C(t,i),U_("preconnect",t,i)}function lM(t,i,s){La.L(t,i,s);var l=kr;if(l&&t&&i){var u='link[rel="preload"][as="'+Yt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Yt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Yt(s.imageSizes)+'"]')):u+='[href="'+Yt(t)+'"]';var d=u;switch(i){case"style":d=Gr(t);break;case"script":d=Vr(t)}Pi.has(d)||(t=S({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Pi.set(d,t),l.querySelector(u)!==null||i==="style"&&l.querySelector(ro(d))||i==="script"&&l.querySelector(lo(d))||(i=l.createElement("link"),Xn(i,"link",t),En(i),l.head.appendChild(i)))}}function oM(t,i){La.m(t,i);var s=kr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Yt(l)+'"][href="'+Yt(t)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Vr(t)}if(!Pi.has(d)&&(t=S({rel:"modulepreload",href:t},i),Pi.set(d,t),s.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(lo(d)))return}l=s.createElement("link"),Xn(l,"link",t),En(l),s.head.appendChild(l)}}}function cM(t,i,s){La.S(t,i,s);var l=kr;if(l&&t){var u=Qa(l).hoistableStyles,d=Gr(t);i=i||"default";var y=u.get(d);if(!y){var D={loading:0,preload:null};if(y=l.querySelector(ro(d)))D.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Pi.get(d))&&Fd(t,s);var V=y=l.createElement("link");En(V),Xn(V,"link",t),V._p=new Promise(function(oe,Me){V.onload=oe,V.onerror=Me}),V.addEventListener("load",function(){D.loading|=1}),V.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Ic(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:D},u.set(d,y)}}}function uM(t,i){La.X(t,i);var s=kr;if(s&&t){var l=Qa(s).hoistableScripts,u=Vr(t),d=l.get(u);d||(d=s.querySelector(lo(u)),d||(t=S({src:t,async:!0},i),(i=Pi.get(u))&&Hd(t,i),d=s.createElement("script"),En(d),Xn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function fM(t,i){La.M(t,i);var s=kr;if(s&&t){var l=Qa(s).hoistableScripts,u=Vr(t),d=l.get(u);d||(d=s.querySelector(lo(u)),d||(t=S({src:t,async:!0,type:"module"},i),(i=Pi.get(u))&&Hd(t,i),d=s.createElement("script"),En(d),Xn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function L_(t,i,s,l){var u=(u=se.current)?Oc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Gr(s.href),s=Qa(u).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Gr(s.href);var d=Qa(u).hoistableStyles,y=d.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,y),(d=u.querySelector(ro(t)))&&!d._p&&(y.instance=d,y.state.loading=5),Pi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Pi.set(t,s),d||dM(u,t,s,y.state))),i&&l===null)throw Error(r(528,""));return y}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Vr(s),s=Qa(u).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Gr(t){return'href="'+Yt(t)+'"'}function ro(t){return'link[rel="stylesheet"]['+t+"]"}function O_(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function dM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Xn(i,"link",s),En(i),t.head.appendChild(i))}function Vr(t){return'[src="'+Yt(t)+'"]'}function lo(t){return"script[async]"+t}function I_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Yt(s.href)+'"]');if(l)return i.instance=l,En(l),l;var u=S({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),En(l),Xn(l,"style",u),Ic(l,s.precedence,t),i.instance=l;case"stylesheet":u=Gr(s.href);var d=t.querySelector(ro(u));if(d)return i.state.loading|=4,i.instance=d,En(d),d;l=O_(s),(u=Pi.get(u))&&Fd(l,u),d=(t.ownerDocument||t).createElement("link"),En(d);var y=d;return y._p=new Promise(function(D,V){y.onload=D,y.onerror=V}),Xn(d,"link",l),i.state.loading|=4,Ic(d,s.precedence,t),i.instance=d;case"script":return d=Vr(s.src),(u=t.querySelector(lo(d)))?(i.instance=u,En(u),u):(l=s,(u=Pi.get(d))&&(l=S({},s),Hd(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),En(u),Xn(u,"link",l),t.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ic(l,s.precedence,t));return i.instance}function Ic(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,y=0;y<l.length;y++){var D=l[y];if(D.dataset.precedence===i)d=D;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Fd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Hd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Pc=null;function P_(t,i,s){if(Pc===null){var l=new Map,u=Pc=new Map;u.set(s,l)}else u=Pc,l=u.get(s),l||(l=new Map,u.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),u=0;u<s.length;u++){var d=s[u];if(!(d[si]||d[B]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=t+y;var D=l.get(y);D?D.push(d):l.set(y,[d])}}return l}function z_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function hM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function B_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function pM(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Gr(l.href),d=i.querySelector(ro(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=zc.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=d,En(d);return}d=i.ownerDocument||i,l=O_(l),(u=Pi.get(u))&&Fd(l,u),d=d.createElement("link"),En(d);var y=d;y._p=new Promise(function(D,V){y.onload=D,y.onerror=V}),Xn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=zc.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var kd=0;function mM(t,i){return t.stylesheets&&t.count===0&&Fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&Fc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&kd===0&&(kd=62500*KS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>kd?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bc=null;function Fc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bc=new Map,i.forEach(gM,t),Bc=null,zc.call(t))}function gM(t,i){if(!(i.state.loading&4)){var s=Bc.get(t);if(s)var l=s.get(null);else{s=new Map,Bc.set(t,s);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),l=y)}l&&s.set(null,l)}u=i.instance,y=u.getAttribute("data-precedence"),d=s.get(y)||l,d===l&&s.set(null,u),s.set(y,u),this.count++,l=zc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),i.state.loading|=4}}var oo={$$typeof:L,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function _M(t,i,s,l,u,d,y,D,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function F_(t,i,s,l,u,d,y,D,V,oe,Me,Ae){return t=new _M(t,i,s,y,V,oe,Me,Ae,D),i=1,d===!0&&(i|=24),d=yi(3,null,null,i),t.current=d,d.stateNode=t,i=xf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},bf(d),t}function H_(t){return t?(t=xr,t):xr}function k_(t,i,s,l,u,d){u=H_(u),l.context===null?l.context=u:l.pendingContext=u,l=as(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=ss(t,l,i),s!==null&&(fi(s,t,i),Hl(s,t,i))}function G_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Gd(t,i){G_(t,i),(t=t.alternate)&&G_(t,i)}function V_(t){if(t.tag===13||t.tag===31){var i=Gs(t,67108864);i!==null&&fi(i,t,67108864),Gd(t,67108864)}}function X_(t){if(t.tag===13||t.tag===31){var i=bi();i=qa(i);var s=Gs(t,i);s!==null&&fi(s,t,i),Gd(t,i)}}var Hc=!0;function vM(t,i,s,l){var u=H.T;H.T=null;var d=W.p;try{W.p=2,Vd(t,i,s,l)}finally{W.p=d,H.T=u}}function yM(t,i,s,l){var u=H.T;H.T=null;var d=W.p;try{W.p=8,Vd(t,i,s,l)}finally{W.p=d,H.T=u}}function Vd(t,i,s,l){if(Hc){var u=Xd(l);if(u===null)wd(t,i,l,kc,s),Y_(t,l);else if(SM(u,t,i,s,l))l.stopPropagation();else if(Y_(t,l),i&4&&-1<xM.indexOf(t)){for(;u!==null;){var d=ga(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Ie(d.pendingLanes);if(y!==0){var D=d;for(D.pendingLanes|=2,D.entangledLanes|=2;y;){var V=1<<31-Ue(y);D.entanglements[1]|=V,y&=~V}ia(d),(Ht&6)===0&&(Ec=Dt()+500,no(0))}}break;case 31:case 13:D=Gs(d,2),D!==null&&fi(D,d,2),Tc(),Gd(d,2)}if(d=Xd(l),d===null&&wd(t,i,l,kc,s),d===u)break;u=d}u!==null&&l.stopPropagation()}else wd(t,i,l,null,s)}}function Xd(t){return t=Wu(t),Wd(t)}var kc=null;function Wd(t){if(kc=null,t=ma(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===31){if(t=m(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return kc=t,null}function W_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case C:return 2;case v:return 8;case X:case G:return 32;case K:return 268435456;default:return 32}default:return 32}}var Yd=!1,gs=null,_s=null,vs=null,co=new Map,uo=new Map,ys=[],xM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y_(t,i){switch(t){case"focusin":case"focusout":gs=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":vs=null;break;case"pointerover":case"pointerout":co.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(i.pointerId)}}function fo(t,i,s,l,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=ga(i),i!==null&&V_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function SM(t,i,s,l,u){switch(i){case"focusin":return gs=fo(gs,t,i,s,l,u),!0;case"dragenter":return _s=fo(_s,t,i,s,l,u),!0;case"mouseover":return vs=fo(vs,t,i,s,l,u),!0;case"pointerover":var d=u.pointerId;return co.set(d,fo(co.get(d)||null,t,i,s,l,u)),!0;case"gotpointercapture":return d=u.pointerId,uo.set(d,fo(uo.get(d)||null,t,i,s,l,u)),!0}return!1}function q_(t){var i=ma(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,pa(t.priority,function(){X_(s)});return}}else if(i===31){if(i=m(s),i!==null){t.blockedOn=i,pa(t.priority,function(){X_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Xd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Xu=l,s.target.dispatchEvent(l),Xu=null}else return i=ga(s),i!==null&&V_(i),t.blockedOn=s,!1;i.shift()}return!0}function Z_(t,i,s){Gc(t)&&s.delete(i)}function MM(){Yd=!1,gs!==null&&Gc(gs)&&(gs=null),_s!==null&&Gc(_s)&&(_s=null),vs!==null&&Gc(vs)&&(vs=null),co.forEach(Z_),uo.forEach(Z_)}function Vc(t,i){t.blockedOn===i&&(t.blockedOn=null,Yd||(Yd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,MM)))}var Xc=null;function K_(t){Xc!==t&&(Xc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Xc===t&&(Xc=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],u=t[i+2];if(typeof l!="function"){if(Wd(l||s)===null)continue;break}var d=ga(s);d!==null&&(t.splice(i,3),i-=3,Xf(d,{pending:!0,data:u,method:s.method,action:l},l,u))}}))}function Xr(t){function i(V){return Vc(V,t)}gs!==null&&Vc(gs,t),_s!==null&&Vc(_s,t),vs!==null&&Vc(vs,t),co.forEach(i),uo.forEach(i);for(var s=0;s<ys.length;s++){var l=ys[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ys.length&&(s=ys[0],s.blockedOn===null);)q_(s),s.blockedOn===null&&ys.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var u=s[l],d=s[l+1],y=u[De]||null;if(typeof d=="function")y||K_(s);else if(y){var D=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[De]||null)D=y.formAction;else if(Wd(u)!==null)continue}else D=y.action;typeof D=="function"?s[l+1]=D:(s.splice(l,3),l-=3),K_(s)}}}function Q_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function qd(t){this._internalRoot=t}Wc.prototype.render=qd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=bi();k_(s,l,t,i,null,null)},Wc.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;k_(t.current,2,null,t,null,null),Tc(),i[Ke]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ka();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ys.length&&i!==0&&i<ys[s].priority;s++);ys.splice(s,0,t),s===0&&q_(t)}};var j_=e.version;if(j_!=="19.2.8")throw Error(r(527,j_,"19.2.8"));W.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var EM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{ee=Yc.inject(EM),ae=Yc}catch{}}return ho.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",u=ag,d=sg,y=rg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=F_(t,1,!1,null,null,s,l,null,u,d,y,Q_),t[Ke]=i.current,Cd(t),new qd(i)},ho.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,u="",d=ag,y=sg,D=rg,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=F_(t,1,!0,i,s??null,l,u,V,d,y,D,Q_),i.context=H_(null),s=i.current,l=bi(),l=qa(l),u=as(l),u.callback=null,ss(s,u,l),s=l,i.current.lanes=s,Ze(i,s),ia(i),t[Ke]=i.current,Cd(t),new Wc(i)},ho.version="19.2.8",ho}var sv;function UM(){if(sv)return Kd.exports;sv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Kd.exports=NM(),Kd.exports}var LM=UM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sy=(...a)=>a.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Ye.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:f,...m},p)=>Ye.createElement("svg",{ref:p,...IM,width:e,height:e,stroke:a,strokeWidth:r?Number(n)*24/Number(e):n,className:Sy("lucide",o),...m},[...f.map(([h,g])=>Ye.createElement(h,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=(a,e)=>{const n=Ye.forwardRef(({className:r,...o},c)=>Ye.createElement(PM,{ref:c,iconNode:e,className:Sy(`lucide-${OM(a)}`,r),...o}));return n.displayName=`${a}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=hn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=hn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=hn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=hn("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=hn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=hn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=hn("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=hn("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=hn("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=hn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=hn("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=hn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=hn("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=hn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=hn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=hn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=hn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=hn("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=hn("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=hn("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=hn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=hn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=hn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=hn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=hn("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xp="185",hl={ROTATE:0,DOLLY:1,PAN:2},fl={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},JM=0,ov=1,$M=2,Ao=1,eE=2,bo=3,Ns=0,pi=1,la=2,Ga=0,pl=1,cv=2,uv=3,fv=4,tE=5,rr=100,nE=101,iE=102,aE=103,sE=104,rE=200,lE=201,oE=202,cE=203,Bh=204,Fh=205,uE=206,fE=207,dE=208,hE=209,pE=210,mE=211,gE=212,_E=213,vE=214,Hh=0,kh=1,Gh=2,vl=3,Vh=4,Xh=5,Wh=6,Yh=7,by=0,yE=1,xE=2,ua=0,Ty=1,Ay=2,Ry=3,Wp=4,Cy=5,wy=6,Dy=7,Ny=300,dr=301,yl=302,$d=303,eh=304,Bu=306,qh=1e3,ka=1001,Zh=1002,qn=1003,SE=1004,qc=1005,Bn=1006,th=1007,cr=1008,Ri=1009,Uy=1010,Ly=1011,No=1012,Yp=1013,da=1014,oa=1015,Wa=1016,qp=1017,Zp=1018,Uo=1020,Oy=35902,Iy=35899,Py=1021,zy=1022,ji=1023,Ya=1026,ur=1027,By=1028,Kp=1029,hr=1030,Qp=1031,jp=1033,Su=33776,Mu=33777,Eu=33778,bu=33779,Kh=35840,Qh=35841,jh=35842,Jh=35843,$h=36196,ep=37492,tp=37496,np=37488,ip=37489,Ru=37490,ap=37491,sp=37808,rp=37809,lp=37810,op=37811,cp=37812,up=37813,fp=37814,dp=37815,hp=37816,pp=37817,mp=37818,gp=37819,_p=37820,vp=37821,yp=36492,xp=36494,Sp=36495,Mp=36283,Ep=36284,Cu=36285,bp=36286,ME=3200,Tp=0,EE=1,Cs="",hi="srgb",wu="srgb-linear",Du="linear",Qt="srgb",Wr=7680,dv=519,bE=512,TE=513,AE=514,Jp=515,RE=516,CE=517,$p=518,wE=519,Ap=35044,hv="300 es",ca=2e3,Lo=2001;function DE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Nu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function NE(){const a=Nu("canvas");return a.style.display="block",a}const pv={};function Uu(...a){const e="THREE."+a.shift();console.log(e,...a)}function Fy(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=a[1];n&&n.isStackTrace?a[0]+=" "+n.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ft(...a){a=Fy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...a)}}function Ut(...a){a=Fy(a);const e="THREE."+a.shift();{const n=a[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...a)}}function ml(...a){const e=a.join(" ");e in pv||(pv[e]=!0,ft(...a))}function UE(a,e,n){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const LE={[Hh]:kh,[Gh]:Wh,[Vh]:Yh,[vl]:Xh,[kh]:Hh,[Wh]:Gh,[Yh]:Vh,[Xh]:vl};class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mv=1234567;const Ro=Math.PI/180,Oo=180/Math.PI;function Va(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[a&255]+jn[a>>8&255]+jn[a>>16&255]+jn[a>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[n&63|128]+jn[n>>8&255]+"-"+jn[n>>16&255]+jn[n>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function Mt(a,e,n){return Math.max(e,Math.min(n,a))}function em(a,e){return(a%e+e)%e}function OE(a,e,n,r,o){return r+(a-e)*(o-r)/(n-e)}function IE(a,e,n){return a!==e?(n-a)/(e-a):0}function Co(a,e,n){return(1-n)*a+n*e}function PE(a,e,n,r){return Co(a,e,1-Math.exp(-n*r))}function zE(a,e=1){return e-Math.abs(em(a,e*2)-e)}function BE(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*(3-2*a))}function FE(a,e,n){return a<=e?0:a>=n?1:(a=(a-e)/(n-e),a*a*a*(a*(a*6-15)+10))}function HE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function kE(a,e){return a+Math.random()*(e-a)}function GE(a){return a*(.5-Math.random())}function VE(a){a!==void 0&&(mv=a);let e=mv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function XE(a){return a*Ro}function WE(a){return a*Oo}function YE(a){return(a&a-1)===0&&a!==0}function qE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ZE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function KE(a,e,n,r,o){const c=Math.cos,f=Math.sin,m=c(n/2),p=f(n/2),h=c((e+r)/2),g=f((e+r)/2),S=c((e-r)/2),_=f((e-r)/2),b=c((r-e)/2),R=f((r-e)/2);switch(o){case"XYX":a.set(m*g,p*S,p*_,m*h);break;case"YZY":a.set(p*_,m*g,p*S,m*h);break;case"ZXZ":a.set(p*S,p*_,m*g,m*h);break;case"XZX":a.set(m*g,p*R,p*b,m*h);break;case"YXY":a.set(p*b,m*g,p*R,m*h);break;case"ZYZ":a.set(p*R,p*b,m*g,m*h);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Qi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Rp={DEG2RAD:Ro,RAD2DEG:Oo,generateUUID:Va,clamp:Mt,euclideanModulo:em,mapLinear:OE,inverseLerp:IE,lerp:Co,damp:PE,pingpong:zE,smoothstep:BE,smootherstep:FE,randInt:HE,randFloat:kE,randFloatSpread:GE,seededRandom:VE,degToRad:XE,radToDeg:WE,isPowerOfTwo:YE,ceilPowerOfTwo:qE,floorPowerOfTwo:ZE,setQuaternionFromProperEuler:KE,normalize:jt,denormalize:Qi},mm=class mm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mm.prototype.isVector2=!0;let ot=mm;class Us{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,m){let p=r[o+0],h=r[o+1],g=r[o+2],S=r[o+3],_=c[f+0],b=c[f+1],R=c[f+2],N=c[f+3];if(S!==N||p!==_||h!==b||g!==R){let T=p*_+h*b+g*R+S*N;T<0&&(_=-_,b=-b,R=-R,N=-N,T=-T);let x=1-m;if(T<.9995){const U=Math.acos(T),L=Math.sin(U);x=Math.sin(x*U)/L,m=Math.sin(m*U)/L,p=p*x+_*m,h=h*x+b*m,g=g*x+R*m,S=S*x+N*m}else{p=p*x+_*m,h=h*x+b*m,g=g*x+R*m,S=S*x+N*m;const U=1/Math.sqrt(p*p+h*h+g*g+S*S);p*=U,h*=U,g*=U,S*=U}}e[n]=p,e[n+1]=h,e[n+2]=g,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,c,f){const m=r[o],p=r[o+1],h=r[o+2],g=r[o+3],S=c[f],_=c[f+1],b=c[f+2],R=c[f+3];return e[n]=m*R+g*S+p*b-h*_,e[n+1]=p*R+g*_+h*S-m*b,e[n+2]=h*R+g*b+m*_-p*S,e[n+3]=g*R-m*S-p*_-h*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,m=Math.cos,p=Math.sin,h=m(r/2),g=m(o/2),S=m(c/2),_=p(r/2),b=p(o/2),R=p(c/2);switch(f){case"XYZ":this._x=_*g*S+h*b*R,this._y=h*b*S-_*g*R,this._z=h*g*R+_*b*S,this._w=h*g*S-_*b*R;break;case"YXZ":this._x=_*g*S+h*b*R,this._y=h*b*S-_*g*R,this._z=h*g*R-_*b*S,this._w=h*g*S+_*b*R;break;case"ZXY":this._x=_*g*S-h*b*R,this._y=h*b*S+_*g*R,this._z=h*g*R+_*b*S,this._w=h*g*S-_*b*R;break;case"ZYX":this._x=_*g*S-h*b*R,this._y=h*b*S+_*g*R,this._z=h*g*R-_*b*S,this._w=h*g*S+_*b*R;break;case"YZX":this._x=_*g*S+h*b*R,this._y=h*b*S+_*g*R,this._z=h*g*R-_*b*S,this._w=h*g*S-_*b*R;break;case"XZY":this._x=_*g*S-h*b*R,this._y=h*b*S-_*g*R,this._z=h*g*R+_*b*S,this._w=h*g*S+_*b*R;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],m=n[5],p=n[9],h=n[2],g=n[6],S=n[10],_=r+m+S;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(g-p)*b,this._y=(c-h)*b,this._z=(f-o)*b}else if(r>m&&r>S){const b=2*Math.sqrt(1+r-m-S);this._w=(g-p)/b,this._x=.25*b,this._y=(o+f)/b,this._z=(c+h)/b}else if(m>S){const b=2*Math.sqrt(1+m-r-S);this._w=(c-h)/b,this._x=(o+f)/b,this._y=.25*b,this._z=(p+g)/b}else{const b=2*Math.sqrt(1+S-r-m);this._w=(f-o)/b,this._x=(c+h)/b,this._y=(p+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,m=n._x,p=n._y,h=n._z,g=n._w;return this._x=r*g+f*m+o*h-c*p,this._y=o*g+f*p+c*m-r*h,this._z=c*g+f*h+r*p-o*m,this._w=f*g-r*m-o*p-c*h,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,f=e._w,m=this.dot(e);m<0&&(r=-r,o=-o,c=-c,f=-f,m=-m);let p=1-n;if(m<.9995){const h=Math.acos(m),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gm=class gm{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,m=e.z,p=e.w,h=2*(f*o-m*r),g=2*(m*n-c*o),S=2*(c*r-f*n);return this.x=n+p*h+f*S-m*g,this.y=r+p*g+m*h-c*S,this.z=o+p*S+c*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,m=n.y,p=n.z;return this.x=o*p-c*m,this.y=c*f-r*p,this.z=r*m-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gm.prototype.isVector3=!0;let te=gm;const nh=new te,gv=new Us,_m=class _m{constructor(e,n,r,o,c,f,m,p,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,m,p,h)}set(e,n,r,o,c,f,m,p,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=m,g[3]=n,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],m=r[3],p=r[6],h=r[1],g=r[4],S=r[7],_=r[2],b=r[5],R=r[8],N=o[0],T=o[3],x=o[6],U=o[1],L=o[4],M=o[7],I=o[2],P=o[5],F=o[8];return c[0]=f*N+m*U+p*I,c[3]=f*T+m*L+p*P,c[6]=f*x+m*M+p*F,c[1]=h*N+g*U+S*I,c[4]=h*T+g*L+S*P,c[7]=h*x+g*M+S*F,c[2]=_*N+b*U+R*I,c[5]=_*T+b*L+R*P,c[8]=_*x+b*M+R*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],g=e[8];return n*f*g-n*m*h-r*c*g+r*m*p+o*c*h-o*f*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],g=e[8],S=g*f-m*h,_=m*p-g*c,b=h*c-f*p,R=n*S+r*_+o*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=S*N,e[1]=(o*h-g*r)*N,e[2]=(m*r-o*f)*N,e[3]=_*N,e[4]=(g*n-o*p)*N,e[5]=(o*c-m*n)*N,e[6]=b*N,e[7]=(r*p-h*n)*N,e[8]=(f*n-r*c)*N,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,m){const p=Math.cos(c),h=Math.sin(c);return this.set(r*p,r*h,-r*(p*f+h*m)+f+e,-o*h,o*p,-o*(-h*f+p*m)+m+n,0,0,1),this}scale(e,n){return ml("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(e,n)),this}rotate(e){return ml("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-e)),this}translate(e,n){return ml("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_m.prototype.isMatrix3=!0;let mt=_m;const ih=new mt,_v=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vv=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QE(){const a={enabled:!0,workingColorSpace:wu,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Qt&&(o.r=Xa(o.r),o.g=Xa(o.g),o.b=Xa(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Qt&&(o.r=gl(o.r),o.g=gl(o.g),o.b=gl(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cs?Du:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ml("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ml("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[wu]:{primaries:e,whitePoint:r,transfer:Du,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Qt,toXYZ:_v,fromXYZ:vv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),a}const Lt=QE();function Xa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function gl(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Yr;class jE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Yr===void 0&&(Yr=Nu("canvas")),Yr.width=e.width,Yr.height=e.height;const o=Yr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Yr}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nu("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Xa(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xa(n[r]/255)*255):n[r]=Xa(n[r]);return{data:n,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JE=0;class tm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,m=o.length;f<m;f++)o[f].isDataTexture?c.push(ah(o[f].image)):c.push(ah(o[f]))}else c=ah(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function ah(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?jE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let $E=0;const sh=new te;class $n extends Ps{constructor(e=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,r=ka,o=ka,c=Bn,f=cr,m=ji,p=Ri,h=$n.DEFAULT_ANISOTROPY,g=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=Va(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=p,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ny)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case ka:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case ka:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Ny;$n.DEFAULT_ANISOTROPY=1;const vm=class vm{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,h=p[0],g=p[4],S=p[8],_=p[1],b=p[5],R=p[9],N=p[2],T=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(S-N)<.01&&Math.abs(R-T)<.01){if(Math.abs(g+_)<.1&&Math.abs(S+N)<.1&&Math.abs(R+T)<.1&&Math.abs(h+b+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(h+1)/2,M=(b+1)/2,I=(x+1)/2,P=(g+_)/4,F=(S+N)/4,A=(R+T)/4;return L>M&&L>I?L<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(L),o=P/r,c=F/r):M>I?M<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(M),r=P/o,c=A/o):I<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),r=F/c,o=A/c),this.set(r,o,c,n),this}let U=Math.sqrt((T-R)*(T-R)+(S-N)*(S-N)+(_-g)*(_-g));return Math.abs(U)<.001&&(U=1),this.x=(T-R)/U,this.y=(S-N)/U,this.z=(_-g)/U,this.w=Math.acos((h+b+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vm.prototype.isVector4=!0;let vn=vm;class eb extends Ps{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new vn(0,0,e,n),this.scissorTest=!1,this.viewport=new vn(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new $n(o),f=r.count;for(let m=0;m<f;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new tm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fa extends eb{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Hy extends $n{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tb extends $n{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=qn,this.minFilter=qn,this.wrapR=ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zu=class zu{constructor(e,n,r,o,c,f,m,p,h,g,S,_,b,R,N,T){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,m,p,h,g,S,_,b,R,N,T)}set(e,n,r,o,c,f,m,p,h,g,S,_,b,R,N,T){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=f,x[9]=m,x[13]=p,x[2]=h,x[6]=g,x[10]=S,x[14]=_,x[3]=b,x[7]=R,x[11]=N,x[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zu().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/qr.setFromMatrixColumn(e,0).length(),c=1/qr.setFromMatrixColumn(e,1).length(),f=1/qr.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),m=Math.sin(r),p=Math.cos(o),h=Math.sin(o),g=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const _=f*g,b=f*S,R=m*g,N=m*S;n[0]=p*g,n[4]=-p*S,n[8]=h,n[1]=b+R*h,n[5]=_-N*h,n[9]=-m*p,n[2]=N-_*h,n[6]=R+b*h,n[10]=f*p}else if(e.order==="YXZ"){const _=p*g,b=p*S,R=h*g,N=h*S;n[0]=_+N*m,n[4]=R*m-b,n[8]=f*h,n[1]=f*S,n[5]=f*g,n[9]=-m,n[2]=b*m-R,n[6]=N+_*m,n[10]=f*p}else if(e.order==="ZXY"){const _=p*g,b=p*S,R=h*g,N=h*S;n[0]=_-N*m,n[4]=-f*S,n[8]=R+b*m,n[1]=b+R*m,n[5]=f*g,n[9]=N-_*m,n[2]=-f*h,n[6]=m,n[10]=f*p}else if(e.order==="ZYX"){const _=f*g,b=f*S,R=m*g,N=m*S;n[0]=p*g,n[4]=R*h-b,n[8]=_*h+N,n[1]=p*S,n[5]=N*h+_,n[9]=b*h-R,n[2]=-h,n[6]=m*p,n[10]=f*p}else if(e.order==="YZX"){const _=f*p,b=f*h,R=m*p,N=m*h;n[0]=p*g,n[4]=N-_*S,n[8]=R*S+b,n[1]=S,n[5]=f*g,n[9]=-m*g,n[2]=-h*g,n[6]=b*S+R,n[10]=_-N*S}else if(e.order==="XZY"){const _=f*p,b=f*h,R=m*p,N=m*h;n[0]=p*g,n[4]=-S,n[8]=h*g,n[1]=_*S+N,n[5]=f*g,n[9]=b*S-R,n[2]=R*S-b,n[6]=m*g,n[10]=N*S+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nb,e,ib)}lookAt(e,n,r){const o=this.elements;return Ti.subVectors(e,n),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ss.crossVectors(r,Ti),Ss.lengthSq()===0&&(Math.abs(r.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ss.crossVectors(r,Ti)),Ss.normalize(),Zc.crossVectors(Ti,Ss),o[0]=Ss.x,o[4]=Zc.x,o[8]=Ti.x,o[1]=Ss.y,o[5]=Zc.y,o[9]=Ti.y,o[2]=Ss.z,o[6]=Zc.z,o[10]=Ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],m=r[4],p=r[8],h=r[12],g=r[1],S=r[5],_=r[9],b=r[13],R=r[2],N=r[6],T=r[10],x=r[14],U=r[3],L=r[7],M=r[11],I=r[15],P=o[0],F=o[4],A=o[8],O=o[12],q=o[1],k=o[5],j=o[9],pe=o[13],he=o[2],ie=o[6],H=o[10],W=o[14],re=o[3],Se=o[7],Ee=o[11],z=o[15];return c[0]=f*P+m*q+p*he+h*re,c[4]=f*F+m*k+p*ie+h*Se,c[8]=f*A+m*j+p*H+h*Ee,c[12]=f*O+m*pe+p*W+h*z,c[1]=g*P+S*q+_*he+b*re,c[5]=g*F+S*k+_*ie+b*Se,c[9]=g*A+S*j+_*H+b*Ee,c[13]=g*O+S*pe+_*W+b*z,c[2]=R*P+N*q+T*he+x*re,c[6]=R*F+N*k+T*ie+x*Se,c[10]=R*A+N*j+T*H+x*Ee,c[14]=R*O+N*pe+T*W+x*z,c[3]=U*P+L*q+M*he+I*re,c[7]=U*F+L*k+M*ie+I*Se,c[11]=U*A+L*j+M*H+I*Ee,c[15]=U*O+L*pe+M*W+I*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],m=e[5],p=e[9],h=e[13],g=e[2],S=e[6],_=e[10],b=e[14],R=e[3],N=e[7],T=e[11],x=e[15],U=p*b-h*_,L=m*b-h*S,M=m*_-p*S,I=f*b-h*g,P=f*_-p*g,F=f*S-m*g;return n*(N*U-T*L+x*M)-r*(R*U-T*I+x*P)+o*(R*L-N*I+x*F)-c*(R*M-N*P+T*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],f=e[5],m=e[9],p=e[2],h=e[6],g=e[10];return n*(f*g-m*h)-r*(c*g-m*p)+o*(c*h-f*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],m=e[5],p=e[6],h=e[7],g=e[8],S=e[9],_=e[10],b=e[11],R=e[12],N=e[13],T=e[14],x=e[15],U=n*m-r*f,L=n*p-o*f,M=n*h-c*f,I=r*p-o*m,P=r*h-c*m,F=o*h-c*p,A=g*N-S*R,O=g*T-_*R,q=g*x-b*R,k=S*T-_*N,j=S*x-b*N,pe=_*x-b*T,he=U*pe-L*j+M*k+I*q-P*O+F*A;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/he;return e[0]=(m*pe-p*j+h*k)*ie,e[1]=(o*j-r*pe-c*k)*ie,e[2]=(N*F-T*P+x*I)*ie,e[3]=(_*P-S*F-b*I)*ie,e[4]=(p*q-f*pe-h*O)*ie,e[5]=(n*pe-o*q+c*O)*ie,e[6]=(T*M-R*F-x*L)*ie,e[7]=(g*F-_*M+b*L)*ie,e[8]=(f*j-m*q+h*A)*ie,e[9]=(r*q-n*j-c*A)*ie,e[10]=(R*P-N*M+x*U)*ie,e[11]=(S*M-g*P-b*U)*ie,e[12]=(m*O-f*k-p*A)*ie,e[13]=(n*k-r*O+o*A)*ie,e[14]=(N*L-R*I-T*U)*ie,e[15]=(g*I-S*L+_*U)*ie,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,m=e.y,p=e.z,h=c*f,g=c*m;return this.set(h*f+r,h*m-o*p,h*p+o*m,0,h*m+o*p,g*m+r,g*p-o*f,0,h*p-o*m,g*p+o*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,m=n._z,p=n._w,h=c+c,g=f+f,S=m+m,_=c*h,b=c*g,R=c*S,N=f*g,T=f*S,x=m*S,U=p*h,L=p*g,M=p*S,I=r.x,P=r.y,F=r.z;return o[0]=(1-(N+x))*I,o[1]=(b+M)*I,o[2]=(R-L)*I,o[3]=0,o[4]=(b-M)*P,o[5]=(1-(_+x))*P,o[6]=(T+U)*P,o[7]=0,o[8]=(R+L)*F,o[9]=(T-U)*F,o[10]=(1-(_+N))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let f=qr.set(o[0],o[1],o[2]).length();const m=qr.set(o[4],o[5],o[6]).length(),p=qr.set(o[8],o[9],o[10]).length();c<0&&(f=-f),qi.copy(this);const h=1/f,g=1/m,S=1/p;return qi.elements[0]*=h,qi.elements[1]*=h,qi.elements[2]*=h,qi.elements[4]*=g,qi.elements[5]*=g,qi.elements[6]*=g,qi.elements[8]*=S,qi.elements[9]*=S,qi.elements[10]*=S,n.setFromRotationMatrix(qi),r.x=f,r.y=m,r.z=p,this}makePerspective(e,n,r,o,c,f,m=ca,p=!1){const h=this.elements,g=2*c/(n-e),S=2*c/(r-o),_=(n+e)/(n-e),b=(r+o)/(r-o);let R,N;if(p)R=c/(f-c),N=f*c/(f-c);else if(m===ca)R=-(f+c)/(f-c),N=-2*f*c/(f-c);else if(m===Lo)R=-f/(f-c),N=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return h[0]=g,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=S,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=R,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,f,m=ca,p=!1){const h=this.elements,g=2/(n-e),S=2/(r-o),_=-(n+e)/(n-e),b=-(r+o)/(r-o);let R,N;if(p)R=1/(f-c),N=f/(f-c);else if(m===ca)R=-2/(f-c),N=-(f+c)/(f-c);else if(m===Lo)R=-1/(f-c),N=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return h[0]=g,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=S,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=R,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};zu.prototype.isMatrix4=!0;let _n=zu;const qr=new te,qi=new _n,nb=new te(0,0,0),ib=new te(1,1,1),Ss=new te,Zc=new te,Ti=new te,yv=new _n,xv=new Us;class Ls{constructor(e=0,n=0,r=0,o=Ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],m=o[8],p=o[1],h=o[5],g=o[9],S=o[2],_=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(m,b),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Mt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(m,b));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return yv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xv.setFromEuler(this),this.setFromQuaternion(xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ls.DEFAULT_ORDER="XYZ";class nm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ab=0;const Sv=new te,Zr=new Us,Oa=new _n,Kc=new te,po=new te,sb=new te,rb=new Us,Mv=new te(1,0,0),Ev=new te(0,1,0),bv=new te(0,0,1),Tv={type:"added"},lb={type:"removed"},Kr={type:"childadded",child:null},rh={type:"childremoved",child:null};class Fn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new te,n=new Ls,r=new Us,o=new te(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _n},normalMatrix:{value:new mt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Mv,e)}rotateY(e){return this.rotateOnAxis(Ev,e)}rotateZ(e){return this.rotateOnAxis(bv,e)}translateOnAxis(e,n){return Sv.copy(e).applyQuaternion(this.quaternion),this.position.add(Sv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mv,e)}translateY(e){return this.translateOnAxis(Ev,e)}translateZ(e){return this.translateOnAxis(bv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Kc.copy(e):Kc.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(po,Kc,this.up):Oa.lookAt(Kc,po,this.up),this.quaternion.setFromRotationMatrix(Oa),o&&(Oa.extractRotation(o.matrixWorld),Zr.setFromRotationMatrix(Oa),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tv),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(lb),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tv),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,sb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,rb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let f=0,m=c.length;f<m;f++)c[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(m=>({...m})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(m,p){return m[p.uuid]===void 0&&(m[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const p=m.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const S=p[h];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let p=0,h=this.material.length;p<h;p++)m.push(c(e.materials,this.material[p]));o.material=m}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let m=0;m<this.children.length;m++)o.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let m=0;m<this.animations.length;m++){const p=this.animations[m];o.animations.push(c(e.animations,p))}}if(n){const m=f(e.geometries),p=f(e.materials),h=f(e.textures),g=f(e.images),S=f(e.shapes),_=f(e.skeletons),b=f(e.animations),R=f(e.nodes);m.length>0&&(r.geometries=m),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),b.length>0&&(r.animations=b),R.length>0&&(r.nodes=R)}return r.object=o,r;function f(m){const p=[];for(const h in m){const g=m[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new te(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ha extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ob={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const m=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const N of e.hand.values()){const T=n.getJointPose(N,r),x=this._getHandJoint(h,N);T!==null&&(x.matrix.fromArray(T.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=T.radius),x.visible=T!==null}const g=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],_=g.position.distanceTo(S.position),b=.02,R=.005;h.inputState.pinching&&_>b+R?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=b-R&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(m.matrix.fromArray(o.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,o.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(o.linearVelocity)):m.hasLinearVelocity=!1,o.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(o.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(ob)))}return m!==null&&(m.visible=o!==null),p!==null&&(p.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ha;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},Qc={h:0,s:0,l:0};function oh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class At{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Lt.workingColorSpace){if(e=em(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=oh(f,c,e+1/3),this.g=oh(f,c,e),this.b=oh(f,c,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,n=hi){function r(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],m=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hi){const r=ky[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}copyLinearToSRGB(e){return this.r=gl(e.r),this.g=gl(e.g),this.b=gl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Lt.workingToColorSpace(Jn.copy(this),e),Math.round(Mt(Jn.r*255,0,255))*65536+Math.round(Mt(Jn.g*255,0,255))*256+Math.round(Mt(Jn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.workingToColorSpace(Jn.copy(this),n);const r=Jn.r,o=Jn.g,c=Jn.b,f=Math.max(r,o,c),m=Math.min(r,o,c);let p,h;const g=(m+f)/2;if(m===f)p=0,h=0;else{const S=f-m;switch(h=g<=.5?S/(f+m):S/(2-f-m),f){case r:p=(o-c)/S+(o<c?6:0);break;case o:p=(c-r)/S+2;break;case c:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,n=Lt.workingColorSpace){return Lt.workingToColorSpace(Jn.copy(this),n),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=hi){Lt.workingToColorSpace(Jn.copy(this),e);const n=Jn.r,r=Jn.g,o=Jn.b;return e!==hi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+n,Ms.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Ms),e.getHSL(Qc);const r=Co(Ms.h,Qc.h,n),o=Co(Ms.s,Qc.s,n),c=Co(Ms.l,Qc.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new At;At.NAMES=ky;class im{constructor(e,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new At(e),this.near=n,this.far=r}clone(){return new im(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cb extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ls,this.environmentIntensity=1,this.environmentRotation=new Ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zi=new te,Ia=new te,ch=new te,Pa=new te,Qr=new te,jr=new te,Av=new te,uh=new te,fh=new te,dh=new te,hh=new vn,ph=new vn,mh=new vn;class Hi{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Zi.subVectors(e,n),o.cross(Zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){Zi.subVectors(o,n),Ia.subVectors(r,n),ch.subVectors(e,n);const f=Zi.dot(Zi),m=Zi.dot(Ia),p=Zi.dot(ch),h=Ia.dot(Ia),g=Ia.dot(ch),S=f*h-m*m;if(S===0)return c.set(0,0,0),null;const _=1/S,b=(h*p-m*g)*_,R=(f*g-m*p)*_;return c.set(1-b-R,R,b)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Pa)===null?!1:Pa.x>=0&&Pa.y>=0&&Pa.x+Pa.y<=1}static getInterpolation(e,n,r,o,c,f,m,p){return this.getBarycoord(e,n,r,o,Pa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Pa.x),p.addScaledVector(f,Pa.y),p.addScaledVector(m,Pa.z),p)}static getInterpolatedAttribute(e,n,r,o,c,f){return hh.setScalar(0),ph.setScalar(0),mh.setScalar(0),hh.fromBufferAttribute(e,n),ph.fromBufferAttribute(e,r),mh.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(hh,c.x),f.addScaledVector(ph,c.y),f.addScaledVector(mh,c.z),f}static isFrontFacing(e,n,r,o){return Zi.subVectors(r,n),Ia.subVectors(e,n),Zi.cross(Ia).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Zi.cross(Ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Hi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,m;Qr.subVectors(o,r),jr.subVectors(c,r),uh.subVectors(e,r);const p=Qr.dot(uh),h=jr.dot(uh);if(p<=0&&h<=0)return n.copy(r);fh.subVectors(e,o);const g=Qr.dot(fh),S=jr.dot(fh);if(g>=0&&S<=g)return n.copy(o);const _=p*S-g*h;if(_<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(r).addScaledVector(Qr,f);dh.subVectors(e,c);const b=Qr.dot(dh),R=jr.dot(dh);if(R>=0&&b<=R)return n.copy(c);const N=b*h-p*R;if(N<=0&&h>=0&&R<=0)return m=h/(h-R),n.copy(r).addScaledVector(jr,m);const T=g*R-b*S;if(T<=0&&S-g>=0&&b-R>=0)return Av.subVectors(c,o),m=(S-g)/(S-g+(b-R)),n.copy(o).addScaledVector(Av,m);const x=1/(T+N+_);return f=N*x,m=_*x,n.copy(r).addScaledVector(Qr,f).addScaledVector(jr,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zo{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ki.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ki.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ki.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,m=c.count;f<m;f++)e.isMesh===!0?e.getVertexPosition(f,Ki):Ki.fromBufferAttribute(c,f),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jc.copy(r.boundingBox)),jc.applyMatrix4(e.matrixWorld),this.union(jc)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mo),Jc.subVectors(this.max,mo),Jr.subVectors(e.a,mo),$r.subVectors(e.b,mo),el.subVectors(e.c,mo),Es.subVectors($r,Jr),bs.subVectors(el,$r),tr.subVectors(Jr,el);let n=[0,-Es.z,Es.y,0,-bs.z,bs.y,0,-tr.z,tr.y,Es.z,0,-Es.x,bs.z,0,-bs.x,tr.z,0,-tr.x,-Es.y,Es.x,0,-bs.y,bs.x,0,-tr.y,tr.x,0];return!gh(n,Jr,$r,el,Jc)||(n=[1,0,0,0,1,0,0,0,1],!gh(n,Jr,$r,el,Jc))?!1:($c.crossVectors(Es,bs),n=[$c.x,$c.y,$c.z],gh(n,Jr,$r,el,Jc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const za=[new te,new te,new te,new te,new te,new te,new te,new te],Ki=new te,jc=new zo,Jr=new te,$r=new te,el=new te,Es=new te,bs=new te,tr=new te,mo=new te,Jc=new te,$c=new te,nr=new te;function gh(a,e,n,r,o){for(let c=0,f=a.length-3;c<=f;c+=3){nr.fromArray(a,c);const m=o.x*Math.abs(nr.x)+o.y*Math.abs(nr.y)+o.z*Math.abs(nr.z),p=e.dot(nr),h=n.dot(nr),g=r.dot(nr);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>m)return!1}return!0}const Cn=new te,eu=new ot;let ub=0;class Ji extends Ps{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ub++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Ap,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)eu.fromBufferAttribute(this,n),eu.applyMatrix3(e),this.setXY(n,eu.x,eu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix3(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix4(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Cn.fromBufferAttribute(this,n),Cn.applyNormalMatrix(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Cn.fromBufferAttribute(this,n),Cn.transformDirection(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Qi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=jt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qi(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qi(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qi(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),r=jt(r,this.array),o=jt(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),r=jt(r,this.array),o=jt(o,this.array),c=jt(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gy extends Ji{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Vy extends Ji{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Hn extends Ji{constructor(e,n,r){super(new Float32Array(e),n,r)}}const fb=new zo,go=new te,_h=new te;class am{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):fb.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;go.subVectors(e,this.center);const n=go.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(go,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(go.copy(e.center).add(_h)),this.expandByPoint(go.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let db=0;const zi=new _n,vh=new Fn,tl=new te,Ai=new zo,_o=new zo,zn=new te;class Ci extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DE(e)?Vy:Gy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,n,r){return zi.makeTranslation(e,n,r),this.applyMatrix4(zi),this}scale(e,n,r){return zi.makeScale(e,n,r),this.applyMatrix4(zi),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tl).negate(),this.translate(tl.x,tl.y,tl.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Ai.setFromBufferAttribute(c),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new am);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const m=n[c];_o.setFromBufferAttribute(m),this.morphTargetsRelative?(zn.addVectors(Ai.min,_o.min),Ai.expandByPoint(zn),zn.addVectors(Ai.max,_o.max),Ai.expandByPoint(zn)):(Ai.expandByPoint(_o.min),Ai.expandByPoint(_o.max))}Ai.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)zn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(zn));if(n)for(let c=0,f=n.length;c<f;c++){const m=n[c],p=this.morphTargetsRelative;for(let h=0,g=m.count;h<g;h++)zn.fromBufferAttribute(m,h),p&&(tl.fromBufferAttribute(e,h),zn.add(tl)),o=Math.max(o,r.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new Ji(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const m=[],p=[];for(let A=0;A<r.count;A++)m[A]=new te,p[A]=new te;const h=new te,g=new te,S=new te,_=new ot,b=new ot,R=new ot,N=new te,T=new te;function x(A,O,q){h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,O),S.fromBufferAttribute(r,q),_.fromBufferAttribute(c,A),b.fromBufferAttribute(c,O),R.fromBufferAttribute(c,q),g.sub(h),S.sub(h),b.sub(_),R.sub(_);const k=1/(b.x*R.y-R.x*b.y);isFinite(k)&&(N.copy(g).multiplyScalar(R.y).addScaledVector(S,-b.y).multiplyScalar(k),T.copy(S).multiplyScalar(b.x).addScaledVector(g,-R.x).multiplyScalar(k),m[A].add(N),m[O].add(N),m[q].add(N),p[A].add(T),p[O].add(T),p[q].add(T))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let A=0,O=U.length;A<O;++A){const q=U[A],k=q.start,j=q.count;for(let pe=k,he=k+j;pe<he;pe+=3)x(e.getX(pe+0),e.getX(pe+1),e.getX(pe+2))}const L=new te,M=new te,I=new te,P=new te;function F(A){I.fromBufferAttribute(o,A),P.copy(I);const O=m[A];L.copy(O),L.sub(I.multiplyScalar(I.dot(O))).normalize(),M.crossVectors(P,O);const k=M.dot(p[A])<0?-1:1;f.setXYZW(A,L.x,L.y,L.z,k)}for(let A=0,O=U.length;A<O;++A){const q=U[A],k=q.start,j=q.count;for(let pe=k,he=k+j;pe<he;pe+=3)F(e.getX(pe+0)),F(e.getX(pe+1)),F(e.getX(pe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Ji(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,b=r.count;_<b;_++)r.setXYZ(_,0,0,0);const o=new te,c=new te,f=new te,m=new te,p=new te,h=new te,g=new te,S=new te;if(e)for(let _=0,b=e.count;_<b;_+=3){const R=e.getX(_+0),N=e.getX(_+1),T=e.getX(_+2);o.fromBufferAttribute(n,R),c.fromBufferAttribute(n,N),f.fromBufferAttribute(n,T),g.subVectors(f,c),S.subVectors(o,c),g.cross(S),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,N),h.fromBufferAttribute(r,T),m.add(g),p.add(g),h.add(g),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(N,p.x,p.y,p.z),r.setXYZ(T,h.x,h.y,h.z)}else for(let _=0,b=n.count;_<b;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),f.fromBufferAttribute(n,_+2),g.subVectors(f,c),S.subVectors(o,c),g.cross(S),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)zn.fromBufferAttribute(e,n),zn.normalize(),e.setXYZ(n,zn.x,zn.y,zn.z)}toNonIndexed(){function e(m,p){const h=m.array,g=m.itemSize,S=m.normalized,_=new h.constructor(p.length*g);let b=0,R=0;for(let N=0,T=p.length;N<T;N++){m.isInterleavedBufferAttribute?b=p[N]*m.data.stride+m.offset:b=p[N]*g;for(let x=0;x<g;x++)_[R++]=h[b++]}return new Ji(_,g,S)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ci,r=this.index.array,o=this.attributes;for(const m in o){const p=o[m],h=e(p,r);n.setAttribute(m,h)}const c=this.morphAttributes;for(const m in c){const p=[],h=c[m];for(let g=0,S=h.length;g<S;g++){const _=h[g],b=e(_,r);p.push(b)}n.morphAttributes[m]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let m=0,p=f.length;m<p;m++){const h=f[m];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let S=0,_=h.length;S<_;S++){const b=h[S];g.push(b.toJSON(e.data))}g.length>0&&(o[p]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const c=e.morphAttributes;for(const h in c){const g=[],S=c[h];for(let _=0,b=S.length;_<b;_++)g.push(S[_].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const S=f[h];this.addGroup(S.start,S.count,S.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ap,this.updateRanges=[],this.version=0,this.uuid=Va()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,r){e*=this.stride,r*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=n.array[r+o];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Va()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ni=new te;class Lu{constructor(e,n,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,r=this.data.count;n<r;n++)ni.fromBufferAttribute(this,n),ni.applyMatrix4(e),this.setXYZ(n,ni.x,ni.y,ni.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)ni.fromBufferAttribute(this,n),ni.applyNormalMatrix(e),this.setXYZ(n,ni.x,ni.y,ni.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)ni.fromBufferAttribute(this,n),ni.transformDirection(e),this.setXYZ(n,ni.x,ni.y,ni.z);return this}getComponent(e,n){let r=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(r=Qi(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=jt(r,this.array)),this.data.array[e*this.data.stride+this.offset+n]=r,this}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Qi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Qi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Qi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Qi(n,this.array)),n}setXY(e,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=jt(n,this.array),r=jt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this}setXYZ(e,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=jt(n,this.array),r=jt(r,this.array),o=jt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(n=jt(n,this.array),r=jt(r,this.array),o=jt(o,this.array),c=jt(c,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Uu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new Ji(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Uu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let pb=0;class El extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=pl,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Fh,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ft(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==pl&&(r.blending=this.blending),this.side!==Ns&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bh&&(r.blendSrc=this.blendSrc),this.blendDst!==Fh&&(r.blendDst=this.blendDst),this.blendEquation!==rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const m in c){const p=c[m];delete p.metadata,f.push(p)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new ot().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xy extends El{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let nl;const vo=new te,il=new te,al=new te,sl=new ot,yo=new ot,Wy=new _n,tu=new te,xo=new te,nu=new te,Rv=new ot,yh=new ot,Cv=new ot;class mb extends Fn{constructor(e=new Xy){if(super(),this.isSprite=!0,this.type="Sprite",nl===void 0){nl=new Ci;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new hb(n,5);nl.setIndex([0,1,2,0,2,3]),nl.setAttribute("position",new Lu(r,3,0,!1)),nl.setAttribute("uv",new Lu(r,2,3,!1))}this.geometry=nl,this.material=e,this.center=new ot(.5,.5),this.count=1}raycast(e,n){e.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),il.setFromMatrixScale(this.matrixWorld),Wy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),al.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&il.multiplyScalar(-al.z);const r=this.material.rotation;let o,c;r!==0&&(c=Math.cos(r),o=Math.sin(r));const f=this.center;iu(tu.set(-.5,-.5,0),al,f,il,o,c),iu(xo.set(.5,-.5,0),al,f,il,o,c),iu(nu.set(.5,.5,0),al,f,il,o,c),Rv.set(0,0),yh.set(1,0),Cv.set(1,1);let m=e.ray.intersectTriangle(tu,xo,nu,!1,vo);if(m===null&&(iu(xo.set(-.5,.5,0),al,f,il,o,c),yh.set(0,1),m=e.ray.intersectTriangle(tu,nu,xo,!1,vo),m===null))return;const p=e.ray.origin.distanceTo(vo);p<e.near||p>e.far||n.push({distance:p,point:vo.clone(),uv:Hi.getInterpolation(vo,tu,xo,nu,Rv,yh,Cv,new ot),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function iu(a,e,n,r,o,c){sl.subVectors(a,n).addScalar(.5).multiply(r),o!==void 0?(yo.x=c*sl.x-o*sl.y,yo.y=o*sl.x+c*sl.y):yo.copy(sl),a.copy(e),a.x+=yo.x,a.y+=yo.y,a.applyMatrix4(Wy)}const Ba=new te,xh=new te,au=new te,Ts=new te,Sh=new te,su=new te,Mh=new te;class sm{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ba)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ba.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ba.copy(this.origin).addScaledVector(this.direction,n),Ba.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){xh.copy(e).add(n).multiplyScalar(.5),au.copy(n).sub(e).normalize(),Ts.copy(this.origin).sub(xh);const c=e.distanceTo(n)*.5,f=-this.direction.dot(au),m=Ts.dot(this.direction),p=-Ts.dot(au),h=Ts.lengthSq(),g=Math.abs(1-f*f);let S,_,b,R;if(g>0)if(S=f*p-m,_=f*m-p,R=c*g,S>=0)if(_>=-R)if(_<=R){const N=1/g;S*=N,_*=N,b=S*(S+f*_+2*m)+_*(f*S+_+2*p)+h}else _=c,S=Math.max(0,-(f*_+m)),b=-S*S+_*(_+2*p)+h;else _=-c,S=Math.max(0,-(f*_+m)),b=-S*S+_*(_+2*p)+h;else _<=-R?(S=Math.max(0,-(-f*c+m)),_=S>0?-c:Math.min(Math.max(-c,-p),c),b=-S*S+_*(_+2*p)+h):_<=R?(S=0,_=Math.min(Math.max(-c,-p),c),b=_*(_+2*p)+h):(S=Math.max(0,-(f*c+m)),_=S>0?c:Math.min(Math.max(-c,-p),c),b=-S*S+_*(_+2*p)+h);else _=f>0?-c:c,S=Math.max(0,-(f*_+m)),b=-S*S+_*(_+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(xh).addScaledVector(au,_),b}intersectSphere(e,n){Ba.subVectors(e.center,this.origin);const r=Ba.dot(this.direction),o=Ba.dot(Ba)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),m=r-f,p=r+f;return p<0?null:m<0?this.at(p,n):this.at(m,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,m,p;const h=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),g>=0?(c=(e.min.y-_.y)*g,f=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,f=(e.min.y-_.y)*g),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),S>=0?(m=(e.min.z-_.z)*S,p=(e.max.z-_.z)*S):(m=(e.max.z-_.z)*S,p=(e.min.z-_.z)*S),r>p||m>o)||((m>r||r!==r)&&(r=m),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ba)!==null}intersectTriangle(e,n,r,o,c){Sh.subVectors(n,e),su.subVectors(r,e),Mh.crossVectors(Sh,su);let f=this.direction.dot(Mh),m;if(f>0){if(o)return null;m=1}else if(f<0)m=-1,f=-f;else return null;Ts.subVectors(this.origin,e);const p=m*this.direction.dot(su.crossVectors(Ts,su));if(p<0)return null;const h=m*this.direction.dot(Sh.cross(Ts));if(h<0||p+h>f)return null;const g=-m*Ts.dot(Mh);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wo extends El{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ls,this.combine=by,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wv=new _n,ir=new sm,ru=new am,Dv=new te,lu=new te,ou=new te,cu=new te,Eh=new te,uu=new te,Nv=new te,fu=new te;class wn extends Fn{constructor(e=new Ci,n=new wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const m=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const m=this.morphTargetInfluences;if(c&&m){uu.set(0,0,0);for(let p=0,h=c.length;p<h;p++){const g=m[p],S=c[p];g!==0&&(Eh.fromBufferAttribute(S,e),f?uu.addScaledVector(Eh,g):uu.addScaledVector(Eh.sub(n),g))}n.add(uu)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(c),ir.copy(e.ray).recast(e.near),!(ru.containsPoint(ir.origin)===!1&&(ir.intersectSphere(ru,Dv)===null||ir.origin.distanceToSquared(Dv)>(e.far-e.near)**2))&&(wv.copy(c).invert(),ir.copy(e.ray).applyMatrix4(wv),!(r.boundingBox!==null&&ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,m=c.index,p=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,S=c.attributes.normal,_=c.groups,b=c.drawRange;if(m!==null)if(Array.isArray(f))for(let R=0,N=_.length;R<N;R++){const T=_[R],x=f[T.materialIndex],U=Math.max(T.start,b.start),L=Math.min(m.count,Math.min(T.start+T.count,b.start+b.count));for(let M=U,I=L;M<I;M+=3){const P=m.getX(M),F=m.getX(M+1),A=m.getX(M+2);o=du(this,x,e,r,h,g,S,P,F,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=T.materialIndex,n.push(o))}}else{const R=Math.max(0,b.start),N=Math.min(m.count,b.start+b.count);for(let T=R,x=N;T<x;T+=3){const U=m.getX(T),L=m.getX(T+1),M=m.getX(T+2);o=du(this,f,e,r,h,g,S,U,L,M),o&&(o.faceIndex=Math.floor(T/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let R=0,N=_.length;R<N;R++){const T=_[R],x=f[T.materialIndex],U=Math.max(T.start,b.start),L=Math.min(p.count,Math.min(T.start+T.count,b.start+b.count));for(let M=U,I=L;M<I;M+=3){const P=M,F=M+1,A=M+2;o=du(this,x,e,r,h,g,S,P,F,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=T.materialIndex,n.push(o))}}else{const R=Math.max(0,b.start),N=Math.min(p.count,b.start+b.count);for(let T=R,x=N;T<x;T+=3){const U=T,L=T+1,M=T+2;o=du(this,f,e,r,h,g,S,U,L,M),o&&(o.faceIndex=Math.floor(T/3),n.push(o))}}}}function gb(a,e,n,r,o,c,f,m){let p;if(e.side===pi?p=r.intersectTriangle(f,c,o,!0,m):p=r.intersectTriangle(o,c,f,e.side===Ns,m),p===null)return null;fu.copy(m),fu.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo(fu);return h<n.near||h>n.far?null:{distance:h,point:fu.clone(),object:a}}function du(a,e,n,r,o,c,f,m,p,h){a.getVertexPosition(m,lu),a.getVertexPosition(p,ou),a.getVertexPosition(h,cu);const g=gb(a,e,n,r,lu,ou,cu,Nv);if(g){const S=new te;Hi.getBarycoord(Nv,lu,ou,cu,S),o&&(g.uv=Hi.getInterpolatedAttribute(o,m,p,h,S,new ot)),c&&(g.uv1=Hi.getInterpolatedAttribute(c,m,p,h,S,new ot)),f&&(g.normal=Hi.getInterpolatedAttribute(f,m,p,h,S,new te),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:m,b:p,c:h,normal:new te,materialIndex:0};Hi.getNormal(lu,ou,cu,_.normal),g.face=_,g.barycoord=S}return g}class _b extends $n{constructor(e=null,n=1,r=1,o,c,f,m,p,h=qn,g=qn,S,_){super(null,f,m,p,h,g,o,c,S,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new te,vb=new te,yb=new mt;class Rs{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=bh.subVectors(r,n).cross(vb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(bh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:n.copy(e.start).addScaledVector(o,f)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||yb.getNormalMatrix(e),o=this.coplanarPoint(bh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new am,xb=new ot(.5,.5),hu=new te;class rm{constructor(e=new Rs,n=new Rs,r=new Rs,o=new Rs,c=new Rs,f=new Rs){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const m=this.planes;return m[0].copy(e),m[1].copy(n),m[2].copy(r),m[3].copy(o),m[4].copy(c),m[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=ca,r=!1){const o=this.planes,c=e.elements,f=c[0],m=c[1],p=c[2],h=c[3],g=c[4],S=c[5],_=c[6],b=c[7],R=c[8],N=c[9],T=c[10],x=c[11],U=c[12],L=c[13],M=c[14],I=c[15];if(o[0].setComponents(h-f,b-g,x-R,I-U).normalize(),o[1].setComponents(h+f,b+g,x+R,I+U).normalize(),o[2].setComponents(h+m,b+S,x+N,I+L).normalize(),o[3].setComponents(h-m,b-S,x-N,I-L).normalize(),r)o[4].setComponents(p,_,T,M).normalize(),o[5].setComponents(h-p,b-_,x-T,I-M).normalize();else if(o[4].setComponents(h-p,b-_,x-T,I-M).normalize(),n===ca)o[5].setComponents(h+p,b+_,x+T,I+M).normalize();else if(n===Lo)o[5].setComponents(p,_,T,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);const n=xb.distanceTo(e.center);return ar.radius=.7071067811865476+n,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(hu.x=o.normal.x>0?e.max.x:e.min.x,hu.y=o.normal.y>0?e.max.y:e.min.y,hu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yy extends $n{constructor(e=[],n=dr,r,o,c,f,m,p,h,g){super(e,n,r,o,c,f,m,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sb extends $n{constructor(e,n,r,o,c,f,m,p,h){super(e,n,r,o,c,f,m,p,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xl extends $n{constructor(e,n,r=da,o,c,f,m=qn,p=qn,h,g=Ya,S=1){if(g!==Ya&&g!==ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:S};super(_,o,c,f,m,p,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Mb extends xl{constructor(e,n=da,r=dr,o,c,f=qn,m=qn,p,h=Ya){const g={width:e,height:e,depth:1},S=[g,g,g,g,g,g];super(e,e,n,r,o,c,f,m,p,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qy extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Os extends Ci{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const m=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],h=[],g=[],S=[];let _=0,b=0;R("z","y","x",-1,-1,r,n,e,f,c,0),R("z","y","x",1,-1,r,n,-e,f,c,1),R("x","z","y",1,1,e,r,n,o,f,2),R("x","z","y",1,-1,e,r,-n,o,f,3),R("x","y","z",1,-1,e,n,r,o,c,4),R("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Hn(h,3)),this.setAttribute("normal",new Hn(g,3)),this.setAttribute("uv",new Hn(S,2));function R(N,T,x,U,L,M,I,P,F,A,O){const q=M/F,k=I/A,j=M/2,pe=I/2,he=P/2,ie=F+1,H=A+1;let W=0,re=0;const Se=new te;for(let Ee=0;Ee<H;Ee++){const z=Ee*k-pe;for(let J=0;J<ie;J++){const Re=J*q-j;Se[N]=Re*U,Se[T]=z*L,Se[x]=he,h.push(Se.x,Se.y,Se.z),Se[N]=0,Se[T]=0,Se[x]=P>0?1:-1,g.push(Se.x,Se.y,Se.z),S.push(J/F),S.push(1-Ee/A),W+=1}}for(let Ee=0;Ee<A;Ee++)for(let z=0;z<F;z++){const J=_+z+ie*Ee,Re=_+z+ie*(Ee+1),Oe=_+(z+1)+ie*(Ee+1),Fe=_+(z+1)+ie*Ee;p.push(J,Re,Fe),p.push(Re,Oe,Fe),re+=6}m.addGroup(b,re,O),b+=re,_+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Fu extends Ci{constructor(e=1,n=1,r=1,o=32,c=1,f=!1,m=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:m,thetaLength:p};const h=this;o=Math.floor(o),c=Math.floor(c);const g=[],S=[],_=[],b=[];let R=0;const N=[],T=r/2;let x=0;U(),f===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Hn(S,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(b,2));function U(){const M=new te,I=new te;let P=0;const F=(n-e)/r;for(let A=0;A<=c;A++){const O=[],q=A/c,k=q*(n-e)+e;for(let j=0;j<=o;j++){const pe=j/o,he=pe*p+m,ie=Math.sin(he),H=Math.cos(he);I.x=k*ie,I.y=-q*r+T,I.z=k*H,S.push(I.x,I.y,I.z),M.set(ie,F,H).normalize(),_.push(M.x,M.y,M.z),b.push(pe,1-q),O.push(R++)}N.push(O)}for(let A=0;A<o;A++)for(let O=0;O<c;O++){const q=N[O][A],k=N[O+1][A],j=N[O+1][A+1],pe=N[O][A+1];(e>0||O!==0)&&(g.push(q,k,pe),P+=3),(n>0||O!==c-1)&&(g.push(k,j,pe),P+=3)}h.addGroup(x,P,0),x+=P}function L(M){const I=R,P=new ot,F=new te;let A=0;const O=M===!0?e:n,q=M===!0?1:-1;for(let j=1;j<=o;j++)S.push(0,T*q,0),_.push(0,q,0),b.push(.5,.5),R++;const k=R;for(let j=0;j<=o;j++){const he=j/o*p+m,ie=Math.cos(he),H=Math.sin(he);F.x=O*H,F.y=T*q,F.z=O*ie,S.push(F.x,F.y,F.z),_.push(0,q,0),P.x=ie*.5+.5,P.y=H*.5*q+.5,b.push(P.x,P.y),R++}for(let j=0;j<o;j++){const pe=I+j,he=k+j;M===!0?g.push(he,he+1,pe):g.push(he+1,he,pe),A+=3}h.addGroup(x,A,M===!0?1:2),x+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Do extends Fu{constructor(e=1,n=1,r=32,o=1,c=!1,f=0,m=Math.PI*2){super(0,e,n,r,o,c,f,m),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:m}}static fromJSON(e){return new Do(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fr extends Ci{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,m=Math.floor(r),p=Math.floor(o),h=m+1,g=p+1,S=e/m,_=n/p,b=[],R=[],N=[],T=[];for(let x=0;x<g;x++){const U=x*_-f;for(let L=0;L<h;L++){const M=L*S-c;R.push(M,-U,0),N.push(0,0,1),T.push(L/m),T.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<m;U++){const L=U+h*x,M=U+h*(x+1),I=U+1+h*(x+1),P=U+1+h*x;b.push(L,M,P),b.push(M,I,P)}this.setIndex(b),this.setAttribute("position",new Hn(R,3)),this.setAttribute("normal",new Hn(N,3)),this.setAttribute("uv",new Hn(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}class lm extends Ci{constructor(e=.5,n=1,r=32,o=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:f},r=Math.max(3,r),o=Math.max(1,o);const m=[],p=[],h=[],g=[];let S=e;const _=(n-e)/o,b=new te,R=new ot;for(let N=0;N<=o;N++){for(let T=0;T<=r;T++){const x=c+T/r*f;b.x=S*Math.cos(x),b.y=S*Math.sin(x),p.push(b.x,b.y,b.z),h.push(0,0,1),R.x=(b.x/n+1)/2,R.y=(b.y/n+1)/2,g.push(R.x,R.y)}S+=_}for(let N=0;N<o;N++){const T=N*(r+1);for(let x=0;x<r;x++){const U=x+T,L=U,M=U+r+1,I=U+r+2,P=U+1;m.push(L,M,P),m.push(M,I,P)}}this.setIndex(m),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(h,3)),this.setAttribute("uv",new Hn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class om extends Ci{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,f=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:f,thetaLength:m},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(f+m,Math.PI);let h=0;const g=[],S=new te,_=new te,b=[],R=[],N=[],T=[];for(let x=0;x<=r;x++){const U=[],L=x/r,M=f+L*m,I=e*Math.cos(M),P=Math.sqrt(e*e-I*I);let F=0;x===0&&f===0?F=.5/n:x===r&&p===Math.PI&&(F=-.5/n);for(let A=0;A<=n;A++){const O=A/n,q=o+O*c;S.x=-P*Math.cos(q),S.y=I,S.z=P*Math.sin(q),R.push(S.x,S.y,S.z),_.copy(S).normalize(),N.push(_.x,_.y,_.z),T.push(O+F,1-L),U.push(h++)}g.push(U)}for(let x=0;x<r;x++)for(let U=0;U<n;U++){const L=g[x][U+1],M=g[x][U],I=g[x+1][U],P=g[x+1][U+1];(x!==0||f>0)&&b.push(L,M,P),(x!==r-1||p<Math.PI)&&b.push(M,I,P)}this.setIndex(b),this.setAttribute("position",new Hn(R,3)),this.setAttribute("normal",new Hn(N,3)),this.setAttribute("uv",new Hn(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new om(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Sl(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];if(Uv(o))o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Uv(o[0])){const c=[];for(let f=0,m=o.length;f<m;f++)c[f]=o[f].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function ii(a){const e={};for(let n=0;n<a.length;n++){const r=Sl(a[n]);for(const o in r)e[o]=r[o]}return e}function Uv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function Eb(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function Zy(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const bb={clone:Sl,merge:ii};var Tb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ab=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends El{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tb,this.fragmentShader=Ab,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sl(e.uniforms),this.uniformsGroups=Eb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new At().setHex(o.value);break;case"v2":this.uniforms[r].value=new ot().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new vn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new _n().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Rb extends ha{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lv extends El{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ls,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cb extends El{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ME,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wb extends El{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ky extends Fn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Db extends Ky{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Th=new _n,Ov=new te,Iv=new te;class Nb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rm,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Ov.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ov),Iv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Iv),n.updateMatrixWorld(),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Lo||n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pu=new te,mu=new Us,aa=new te;class Qy extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pu,mu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,aa.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(pu,mu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const As=new te,Pv=new ot,zv=new ot;class Fi extends Qy{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Oo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,n){return this.getViewBounds(e,Pv,zv),n.subVectors(zv,Pv)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ro*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,h=f.fullHeight;c+=f.offsetX*o/p,n-=f.offsetY*r/h,o*=f.width/p,r*=f.height/h}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cm extends Qy{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,m=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,m-=g*this.view.offsetY,p=m-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,m,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ub extends Nb{constructor(){super(new cm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lb extends Ky{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new Ub}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const rl=-90,ll=1;class Ob extends Fn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Fi(rl,ll,e,n);o.layers=this.layers,this.add(o);const c=new Fi(rl,ll,e,n);c.layers=this.layers,this.add(c);const f=new Fi(rl,ll,e,n);f.layers=this.layers,this.add(f);const m=new Fi(rl,ll,e,n);m.layers=this.layers,this.add(m);const p=new Fi(rl,ll,e,n);p.layers=this.layers,this.add(p);const h=new Fi(rl,ll,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,m,p]=n;for(const h of n)this.remove(h);if(e===ca)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Lo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,m,p,h,g]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let T=!1;e.isWebGLRenderer===!0?T=e.state.buffers.depth.getReversed():T=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,2,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(r,3,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,o),T&&e.autoClear===!1&&e.clearDepth(),e.render(n,g),e.setRenderTarget(S,_,b),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class Ib extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Bv=new _n;class Pb{constructor(e,n,r=0,o=1/0){this.ray=new sm(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new nm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ut("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Bv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bv),this}intersectObject(e,n=!0,r=[]){return Cp(e,this,r,n),r.sort(Fv),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)Cp(e[o],this,r,n);return r.sort(Fv),r}}function Fv(a,e){return a.distance-e.distance}function Cp(a,e,n,r){let o=!0;if(a.layers.test(e.layers)&&a.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=a.children;for(let f=0,m=c.length;f<m;f++)Cp(c[f],e,n,!0)}}class Hv{constructor(e=1,n=0,r=0){this.radius=e,this.phi=n,this.theta=r}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Mt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ym=class ym{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};ym.prototype.isMatrix2=!0;let kv=ym;class zb extends Ps{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Gv(a,e,n,r){const o=Bb(r);switch(n){case Py:return a*e;case By:return a*e/o.components*o.byteLength;case Kp:return a*e/o.components*o.byteLength;case hr:return a*e*2/o.components*o.byteLength;case Qp:return a*e*2/o.components*o.byteLength;case zy:return a*e*3/o.components*o.byteLength;case ji:return a*e*4/o.components*o.byteLength;case jp:return a*e*4/o.components*o.byteLength;case Su:case Mu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Eu:case bu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Qh:case Jh:return Math.max(a,16)*Math.max(e,8)/4;case Kh:case jh:return Math.max(a,8)*Math.max(e,8)/2;case $h:case ep:case np:case ip:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case tp:case Ru:case ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case op:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case up:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case fp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case dp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case hp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case gp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case yp:case xp:case Sp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Mp:case Ep:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Cu:case bp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Bb(a){switch(a){case Ri:case Uy:return{byteLength:1,components:1};case No:case Ly:case Wa:return{byteLength:2,components:1};case qp:case Zp:return{byteLength:2,components:4};case da:case Yp:case oa:return{byteLength:4,components:1};case Oy:case Iy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jy(){let a=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function Fb(a){const e=new WeakMap;function n(m,p){const h=m.array,g=m.usage,S=h.byteLength,_=a.createBuffer();a.bindBuffer(p,_),a.bufferData(p,h,g),m.onUploadCallback();let b;if(h instanceof Float32Array)b=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=a.HALF_FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?b=a.HALF_FLOAT:b=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=a.SHORT;else if(h instanceof Uint32Array)b=a.UNSIGNED_INT;else if(h instanceof Int32Array)b=a.INT;else if(h instanceof Int8Array)b=a.BYTE;else if(h instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:S}}function r(m,p,h){const g=p.array,S=p.updateRanges;if(a.bindBuffer(h,m),S.length===0)a.bufferSubData(h,0,g);else{S.sort((b,R)=>b.start-R.start);let _=0;for(let b=1;b<S.length;b++){const R=S[_],N=S[b];N.start<=R.start+R.count+1?R.count=Math.max(R.count,N.start+N.count-R.start):(++_,S[_]=N)}S.length=_+1;for(let b=0,R=S.length;b<R;b++){const N=S[b];a.bufferSubData(h,N.start*g.BYTES_PER_ELEMENT,g,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const p=e.get(m);p&&(a.deleteBuffer(p.buffer),e.delete(m))}function f(m,p){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const g=e.get(m);(!g||g.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=e.get(m);if(h===void 0)e.set(m,n(m,p));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,m,p),h.version=m.version}}return{get:o,remove:c,update:f}}var Hb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kb=`#ifdef USE_ALPHAHASH
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
#endif`,Gb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yb=`#ifdef USE_AOMAP
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
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zb=`#ifdef USE_BATCHING
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
#endif`,Kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$b=`#ifdef USE_IRIDESCENCE
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
#endif`,e1=`#ifdef USE_BUMPMAP
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
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c1=`#define PI 3.141592653589793
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
} // validated`,u1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f1=`vec3 transformedNormal = objectNormal;
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
#endif`,d1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g1="gl_FragColor = linearToOutputTexel( gl_FragColor );",_1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R1=`#ifdef USE_GRADIENTMAP
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
}`,C1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,U1=`#ifdef USE_ENVMAP
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
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z1=`PhysicalMaterial material;
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
#endif`,B1=`uniform sampler2D dfgLUT;
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
}`,F1=`
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
#endif`,H1=`#if defined( RE_IndirectDiffuse )
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
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q1=`#if defined( USE_POINTS_UV )
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
#endif`,j1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nT=`#ifdef USE_MORPHTARGETS
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
#endif`,iT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cT=`#ifdef USE_NORMALMAP
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
#endif`,uT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_T=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ST=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ET=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TT=`float getShadowMask() {
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
}`,AT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RT=`#ifdef USE_SKINNING
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
#endif`,CT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wT=`#ifdef USE_SKINNING
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
#endif`,DT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OT=`#ifdef USE_TRANSMISSION
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
#endif`,IT=`#ifdef USE_TRANSMISSION
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kT=`uniform sampler2D t2D;
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
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`#include <common>
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
}`,qT=`#if DEPTH_PACKING == 3200
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
}`,ZT=`#define DISTANCE
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
}`,KT=`#define DISTANCE
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
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`uniform float scale;
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
}`,$T=`uniform vec3 diffuse;
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
}`,eA=`#include <common>
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
}`,tA=`uniform vec3 diffuse;
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
}`,nA=`#define LAMBERT
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
}`,iA=`#define LAMBERT
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
}`,aA=`#define MATCAP
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
}`,sA=`#define MATCAP
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
}`,rA=`#define NORMAL
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
}`,lA=`#define NORMAL
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
}`,oA=`#define PHONG
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
}`,cA=`#define PHONG
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
}`,uA=`#define STANDARD
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
}`,fA=`#define STANDARD
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
}`,dA=`#define TOON
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
}`,hA=`#define TOON
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
}`,pA=`uniform float size;
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#include <common>
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
}`,_A=`uniform vec3 color;
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
}`,vA=`uniform float rotation;
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
}`,yA=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:Hb,alphahash_pars_fragment:kb,alphamap_fragment:Gb,alphamap_pars_fragment:Vb,alphatest_fragment:Xb,alphatest_pars_fragment:Wb,aomap_fragment:Yb,aomap_pars_fragment:qb,batching_pars_vertex:Zb,batching_vertex:Kb,begin_vertex:Qb,beginnormal_vertex:jb,bsdfs:Jb,iridescence_fragment:$b,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:a1,color_fragment:s1,color_pars_fragment:r1,color_pars_vertex:l1,color_vertex:o1,common:c1,cube_uv_reflection_fragment:u1,defaultnormal_vertex:f1,displacementmap_pars_vertex:d1,displacementmap_vertex:h1,emissivemap_fragment:p1,emissivemap_pars_fragment:m1,colorspace_fragment:g1,colorspace_pars_fragment:_1,envmap_fragment:v1,envmap_common_pars_fragment:y1,envmap_pars_fragment:x1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:U1,envmap_vertex:M1,fog_vertex:E1,fog_pars_vertex:b1,fog_fragment:T1,fog_pars_fragment:A1,gradientmap_pars_fragment:R1,lightmap_pars_fragment:C1,lights_lambert_fragment:w1,lights_lambert_pars_fragment:D1,lights_pars_begin:N1,lights_toon_fragment:L1,lights_toon_pars_fragment:O1,lights_phong_fragment:I1,lights_phong_pars_fragment:P1,lights_physical_fragment:z1,lights_physical_pars_fragment:B1,lights_fragment_begin:F1,lights_fragment_maps:H1,lights_fragment_end:k1,lightprobes_pars_fragment:G1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:X1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:Y1,map_fragment:q1,map_pars_fragment:Z1,map_particle_fragment:K1,map_particle_pars_fragment:Q1,metalnessmap_fragment:j1,metalnessmap_pars_fragment:J1,morphinstance_vertex:$1,morphcolor_vertex:eT,morphnormal_vertex:tT,morphtarget_pars_vertex:nT,morphtarget_vertex:iT,normal_fragment_begin:aT,normal_fragment_maps:sT,normal_pars_fragment:rT,normal_pars_vertex:lT,normal_vertex:oT,normalmap_pars_fragment:cT,clearcoat_normal_fragment_begin:uT,clearcoat_normal_fragment_maps:fT,clearcoat_pars_fragment:dT,iridescence_pars_fragment:hT,opaque_fragment:pT,packing:mT,premultiplied_alpha_fragment:gT,project_vertex:_T,dithering_fragment:vT,dithering_pars_fragment:yT,roughnessmap_fragment:xT,roughnessmap_pars_fragment:ST,shadowmap_pars_fragment:MT,shadowmap_pars_vertex:ET,shadowmap_vertex:bT,shadowmask_pars_fragment:TT,skinbase_vertex:AT,skinning_pars_vertex:RT,skinning_vertex:CT,skinnormal_vertex:wT,specularmap_fragment:DT,specularmap_pars_fragment:NT,tonemapping_fragment:UT,tonemapping_pars_fragment:LT,transmission_fragment:OT,transmission_pars_fragment:IT,uv_pars_fragment:PT,uv_pars_vertex:zT,uv_vertex:BT,worldpos_vertex:FT,background_vert:HT,background_frag:kT,backgroundCube_vert:GT,backgroundCube_frag:VT,cube_vert:XT,cube_frag:WT,depth_vert:YT,depth_frag:qT,distance_vert:ZT,distance_frag:KT,equirect_vert:QT,equirect_frag:jT,linedashed_vert:JT,linedashed_frag:$T,meshbasic_vert:eA,meshbasic_frag:tA,meshlambert_vert:nA,meshlambert_frag:iA,meshmatcap_vert:aA,meshmatcap_frag:sA,meshnormal_vert:rA,meshnormal_frag:lA,meshphong_vert:oA,meshphong_frag:cA,meshphysical_vert:uA,meshphysical_frag:fA,meshtoon_vert:dA,meshtoon_frag:hA,points_vert:pA,points_frag:mA,shadow_vert:gA,shadow_frag:_A,sprite_vert:vA,sprite_frag:yA},We={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ra={basic:{uniforms:ii([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:ii([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:ii([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:ii([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:ii([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new At(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:ii([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:ii([We.points,We.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:ii([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:ii([We.common,We.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:ii([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:ii([We.sprite,We.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:ii([We.common,We.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:ii([We.lights,We.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ra.physical={uniforms:ii([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const gu={r:0,b:0,g:0},xA=new _n,Jy=new mt;Jy.set(-1,0,0,0,1,0,0,0,1);function SA(a,e,n,r,o,c){const f=new At(0);let m=o===!0?0:1,p,h,g=null,S=0,_=null;function b(U){let L=U.isScene===!0?U.background:null;if(L&&L.isTexture){const M=U.backgroundBlurriness>0;L=e.get(L,M)}return L}function R(U){let L=!1;const M=b(U);M===null?T(f,m):M&&M.isColor&&(T(M,1),L=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(a.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function N(U,L){const M=b(L);M&&(M.isCubeTexture||M.mapping===Bu)?(h===void 0&&(h=new wn(new Os(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:Sl(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xA.makeRotationFromEuler(L.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Jy),h.material.toneMapped=Lt.getTransfer(M.colorSpace)!==Qt,(g!==M||S!==M.version||_!==a.toneMapping)&&(h.material.needsUpdate=!0,g=M,S=M.version,_=a.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(p===void 0&&(p=new wn(new fr(2,2),new ha({name:"BackgroundMaterial",uniforms:Sl(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=M,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(M.colorSpace)!==Qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),p.material.uniforms.uvTransform.value.copy(M.matrix),(g!==M||S!==M.version||_!==a.toneMapping)&&(p.material.needsUpdate=!0,g=M,S=M.version,_=a.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function T(U,L){U.getRGB(gu,Zy(a)),n.buffers.color.setClear(gu.r,gu.g,gu.b,L,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,L=1){f.set(U),m=L,T(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,T(f,m)},render:R,addToRenderList:N,dispose:x}}function MA(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,f=!1;function m(k,j,pe,he,ie){let H=!1;const W=S(k,he,pe,j);c!==W&&(c=W,h(c.object)),H=b(k,he,pe,ie),H&&R(k,he,pe,ie),ie!==null&&e.update(ie,a.ELEMENT_ARRAY_BUFFER),(H||f)&&(f=!1,M(k,j,pe,he),ie!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function p(){return a.createVertexArray()}function h(k){return a.bindVertexArray(k)}function g(k){return a.deleteVertexArray(k)}function S(k,j,pe,he){const ie=he.wireframe===!0;let H=r[j.id];H===void 0&&(H={},r[j.id]=H);const W=k.isInstancedMesh===!0?k.id:0;let re=H[W];re===void 0&&(re={},H[W]=re);let Se=re[pe.id];Se===void 0&&(Se={},re[pe.id]=Se);let Ee=Se[ie];return Ee===void 0&&(Ee=_(p()),Se[ie]=Ee),Ee}function _(k){const j=[],pe=[],he=[];for(let ie=0;ie<n;ie++)j[ie]=0,pe[ie]=0,he[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:pe,attributeDivisors:he,object:k,attributes:{},index:null}}function b(k,j,pe,he){const ie=c.attributes,H=j.attributes;let W=0;const re=pe.getAttributes();for(const Se in re)if(re[Se].location>=0){const z=ie[Se];let J=H[Se];if(J===void 0&&(Se==="instanceMatrix"&&k.instanceMatrix&&(J=k.instanceMatrix),Se==="instanceColor"&&k.instanceColor&&(J=k.instanceColor)),z===void 0||z.attribute!==J||J&&z.data!==J.data)return!0;W++}return c.attributesNum!==W||c.index!==he}function R(k,j,pe,he){const ie={},H=j.attributes;let W=0;const re=pe.getAttributes();for(const Se in re)if(re[Se].location>=0){let z=H[Se];z===void 0&&(Se==="instanceMatrix"&&k.instanceMatrix&&(z=k.instanceMatrix),Se==="instanceColor"&&k.instanceColor&&(z=k.instanceColor));const J={};J.attribute=z,z&&z.data&&(J.data=z.data),ie[Se]=J,W++}c.attributes=ie,c.attributesNum=W,c.index=he}function N(){const k=c.newAttributes;for(let j=0,pe=k.length;j<pe;j++)k[j]=0}function T(k){x(k,0)}function x(k,j){const pe=c.newAttributes,he=c.enabledAttributes,ie=c.attributeDivisors;pe[k]=1,he[k]===0&&(a.enableVertexAttribArray(k),he[k]=1),ie[k]!==j&&(a.vertexAttribDivisor(k,j),ie[k]=j)}function U(){const k=c.newAttributes,j=c.enabledAttributes;for(let pe=0,he=j.length;pe<he;pe++)j[pe]!==k[pe]&&(a.disableVertexAttribArray(pe),j[pe]=0)}function L(k,j,pe,he,ie,H,W){W===!0?a.vertexAttribIPointer(k,j,pe,ie,H):a.vertexAttribPointer(k,j,pe,he,ie,H)}function M(k,j,pe,he){N();const ie=he.attributes,H=pe.getAttributes(),W=j.defaultAttributeValues;for(const re in H){const Se=H[re];if(Se.location>=0){let Ee=ie[re];if(Ee===void 0&&(re==="instanceMatrix"&&k.instanceMatrix&&(Ee=k.instanceMatrix),re==="instanceColor"&&k.instanceColor&&(Ee=k.instanceColor)),Ee!==void 0){const z=Ee.normalized,J=Ee.itemSize,Re=e.get(Ee);if(Re===void 0)continue;const Oe=Re.buffer,Fe=Re.type,se=Re.bytesPerElement,Te=Fe===a.INT||Fe===a.UNSIGNED_INT||Ee.gpuType===Yp;if(Ee.isInterleavedBufferAttribute){const Ce=Ee.data,Ge=Ce.stride,st=Ee.offset;if(Ce.isInstancedInterleavedBuffer){for(let je=0;je<Se.locationSize;je++)x(Se.location+je,Ce.meshPerAttribute);k.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let je=0;je<Se.locationSize;je++)T(Se.location+je);a.bindBuffer(a.ARRAY_BUFFER,Oe);for(let je=0;je<Se.locationSize;je++)L(Se.location+je,J/Se.locationSize,Fe,z,Ge*se,(st+J/Se.locationSize*je)*se,Te)}else{if(Ee.isInstancedBufferAttribute){for(let Ce=0;Ce<Se.locationSize;Ce++)x(Se.location+Ce,Ee.meshPerAttribute);k.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ce=0;Ce<Se.locationSize;Ce++)T(Se.location+Ce);a.bindBuffer(a.ARRAY_BUFFER,Oe);for(let Ce=0;Ce<Se.locationSize;Ce++)L(Se.location+Ce,J/Se.locationSize,Fe,z,J*se,J/Se.locationSize*Ce*se,Te)}}else if(W!==void 0){const z=W[re];if(z!==void 0)switch(z.length){case 2:a.vertexAttrib2fv(Se.location,z);break;case 3:a.vertexAttrib3fv(Se.location,z);break;case 4:a.vertexAttrib4fv(Se.location,z);break;default:a.vertexAttrib1fv(Se.location,z)}}}}U()}function I(){O();for(const k in r){const j=r[k];for(const pe in j){const he=j[pe];for(const ie in he){const H=he[ie];for(const W in H)g(H[W].object),delete H[W];delete he[ie]}}delete r[k]}}function P(k){if(r[k.id]===void 0)return;const j=r[k.id];for(const pe in j){const he=j[pe];for(const ie in he){const H=he[ie];for(const W in H)g(H[W].object),delete H[W];delete he[ie]}}delete r[k.id]}function F(k){for(const j in r){const pe=r[j];for(const he in pe){const ie=pe[he];if(ie[k.id]===void 0)continue;const H=ie[k.id];for(const W in H)g(H[W].object),delete H[W];delete ie[k.id]}}}function A(k){for(const j in r){const pe=r[j],he=k.isInstancedMesh===!0?k.id:0,ie=pe[he];if(ie!==void 0){for(const H in ie){const W=ie[H];for(const re in W)g(W[re].object),delete W[re];delete ie[H]}delete pe[he],Object.keys(pe).length===0&&delete r[j]}}}function O(){q(),f=!0,c!==o&&(c=o,h(c.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:m,reset:O,resetDefaultState:q,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:F,initAttributes:N,enableAttribute:T,disableUnusedAttributes:U}}function EA(a,e,n){let r;function o(p){r=p}function c(p,h){a.drawArrays(r,p,h),n.update(h,r,1)}function f(p,h,g){g!==0&&(a.drawArraysInstanced(r,p,h,g),n.update(h,r,g))}function m(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,h,0,g);let _=0;for(let b=0;b<g;b++)_+=h[b];n.update(_,r,1)}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=m}function bA(a,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(F){return!(F!==ji&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(F){const A=F===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ri&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==oa&&!A)}function p(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(ft("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const S=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&_===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),R=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=a.getParameter(a.MAX_TEXTURE_SIZE),T=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=a.getParameter(a.MAX_SAMPLES),P=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:R,maxTextureSize:N,maxCubemapSize:T,maxAttributes:x,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:M,maxSamples:I,samples:P}}function TA(a){const e=this;let n=null,r=0,o=!1,c=!1;const f=new Rs,m=new mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const b=S.length!==0||_||r!==0||o;return o=_,r=S.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){n=g(S,_,0)},this.setState=function(S,_,b){const R=S.clippingPlanes,N=S.clipIntersection,T=S.clipShadows,x=a.get(S);if(!o||R===null||R.length===0||c&&!T)c?g(null):h();else{const U=c?0:r,L=U*4;let M=x.clippingState||null;p.value=M,M=g(R,_,L,b);for(let I=0;I!==L;++I)M[I]=n[I];x.clippingState=M,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=U}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(S,_,b,R){const N=S!==null?S.length:0;let T=null;if(N!==0){if(T=p.value,R!==!0||T===null){const x=b+N*4,U=_.matrixWorldInverse;m.getNormalMatrix(U),(T===null||T.length<x)&&(T=new Float32Array(x));for(let L=0,M=b;L!==N;++L,M+=4)f.copy(S[L]).applyMatrix4(U,m),f.normal.toArray(T,M),T[M+3]=f.constant}p.value=T,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,T}}const ws=4,Vv=[.125,.215,.35,.446,.526,.582],lr=20,AA=256,So=new cm,Xv=new At;let Ah=null,Rh=0,Ch=0,wh=!1;const RA=new te;class Wv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:f=256,position:m=RA}=c;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,m),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=wh,e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===dr||e.mapping===yl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Wa,format:ji,colorSpace:wu,depthBuffer:!1},o=Yv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CA(c)),this._blurMaterial=DA(c,e,n),this._ggxMaterial=wA(c,e,n)}return o}_compileMaterial(e){const n=new wn(new Ci,e);this._renderer.compile(n,So)}_sceneToCubeUV(e,n,r,o,c){const p=new Fi(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,b=S.toneMapping;S.getClearColor(Xv),S.toneMapping=ua,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new Os,new wo({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,T=N.material;let x=!1;const U=e.background;U?U.isColor&&(T.color.copy(U),e.background=null,x=!0):(T.color.copy(Xv),x=!0);for(let L=0;L<6;L++){const M=L%3;M===0?(p.up.set(0,h[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[L],c.y,c.z)):M===1?(p.up.set(0,0,h[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[L],c.z)):(p.up.set(0,h[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[L]));const I=this._cubeSize;ol(o,M*I,L>2?I:0,I,I),S.setRenderTarget(o),x&&S.render(N,p),S.render(e,p)}S.toneMapping=b,S.autoClear=_,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===dr||e.mapping===yl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qv());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const m=c.uniforms;m.envMap.value=e;const p=this._cubeSize;ol(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,So)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,m=this._lodMeshes[r];m.material=f;const p=f.uniforms,h=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),S=Math.sqrt(h*h-g*g),_=0+h*1.25,b=S*_,{_lodMax:R}=this,N=this._sizeLods[r],T=3*N*(r>R-ws?r-R+ws:0),x=4*(this._cubeSize-N);p.envMap.value=e.texture,p.roughness.value=b,p.mipInt.value=R-n,ol(c,T,x,3*N,2*N),o.setRenderTarget(c),o.render(m,So),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=R-r,ol(e,T,x,3*N,2*N),o.setRenderTarget(e),o.render(m,So)}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,m){const p=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const g=3,S=this._lodMeshes[o];S.material=h;const _=h.uniforms,b=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*lr-1),N=c/R,T=isFinite(c)?1+Math.floor(g*N):lr;T>lr&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${lr}`);const x=[];let U=0;for(let F=0;F<lr;++F){const A=F/N,O=Math.exp(-A*A/2);x.push(O),F===0?U+=O:F<T&&(U+=2*O)}for(let F=0;F<x.length;F++)x[F]=x[F]/U;_.envMap.value=e.texture,_.samples.value=T,_.weights.value=x,_.latitudinal.value=f==="latitudinal",m&&(_.poleAxis.value=m);const{_lodMax:L}=this;_.dTheta.value=R,_.mipInt.value=L-r;const M=this._sizeLods[o],I=3*M*(o>L-ws?o-L+ws:0),P=4*(this._cubeSize-M);ol(n,I,P,3*M,2*M),p.setRenderTarget(n),p.render(S,So)}}function CA(a){const e=[],n=[],r=[];let o=a;const c=a-ws+1+Vv.length;for(let f=0;f<c;f++){const m=Math.pow(2,o);e.push(m);let p=1/m;f>a-ws?p=Vv[f-a+ws-1]:f===0&&(p=0),n.push(p);const h=1/(m-2),g=-h,S=1+h,_=[g,g,S,g,S,S,g,g,S,S,g,S],b=6,R=6,N=3,T=2,x=1,U=new Float32Array(N*R*b),L=new Float32Array(T*R*b),M=new Float32Array(x*R*b);for(let P=0;P<b;P++){const F=P%3*2/3-1,A=P>2?0:-1,O=[F,A,0,F+2/3,A,0,F+2/3,A+1,0,F,A,0,F+2/3,A+1,0,F,A+1,0];U.set(O,N*R*P),L.set(_,T*R*P);const q=[P,P,P,P,P,P];M.set(q,x*R*P)}const I=new Ci;I.setAttribute("position",new Ji(U,N)),I.setAttribute("uv",new Ji(L,T)),I.setAttribute("faceIndex",new Ji(M,x)),r.push(new wn(I,null)),o>ws&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Yv(a,e,n){const r=new fa(a,e,n);return r.texture.mapping=Bu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ol(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function wA(a,e,n){return new ha({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function DA(a,e,n){const r=new Float32Array(lr),o=new te(0,1,0);return new ha({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function qv(){return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Zv(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}class $y extends fa{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Yy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Os(5,5,5),c=new ha({name:"CubemapFromEquirect",uniforms:Sl(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:pi,blending:Ga});c.uniforms.tEquirect.value=n;const f=new wn(o,c),m=n.minFilter;return n.minFilter===cr&&(n.minFilter=Bn),new Ob(1,10,this).update(e,f),n.minFilter=m,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}function NA(a){let e=new WeakMap,n=new WeakMap,r=null;function o(_,b=!1){return _==null?null:b?f(_):c(_)}function c(_){if(_&&_.isTexture){const b=_.mapping;if(b===$d||b===eh)if(e.has(_)){const R=e.get(_).texture;return m(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const N=new $y(R.height);return N.fromEquirectangularTexture(a,_),e.set(_,N),_.addEventListener("dispose",h),m(N.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const b=_.mapping,R=b===$d||b===eh,N=b===dr||b===yl;if(R||N){let T=n.get(_);const x=T!==void 0?T.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return r===null&&(r=new Wv(a)),T=R?r.fromEquirectangular(_,T):r.fromCubemap(_,T),T.texture.pmremVersion=_.pmremVersion,n.set(_,T),T.texture;if(T!==void 0)return T.texture;{const U=_.image;return R&&U&&U.height>0||N&&U&&p(U)?(r===null&&(r=new Wv(a)),T=R?r.fromEquirectangular(_):r.fromCubemap(_),T.texture.pmremVersion=_.pmremVersion,n.set(_,T),_.addEventListener("dispose",g),T.texture):null}}}return _}function m(_,b){return b===$d?_.mapping=dr:b===eh&&(_.mapping=yl),_}function p(_){let b=0;const R=6;for(let N=0;N<R;N++)_[N]!==void 0&&b++;return b===R}function h(_){const b=_.target;b.removeEventListener("dispose",h);const R=e.get(b);R!==void 0&&(e.delete(b),R.dispose())}function g(_){const b=_.target;b.removeEventListener("dispose",g);const R=n.get(b);R!==void 0&&(n.delete(b),R.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function UA(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ml("WebGLRenderer: "+r+" extension not supported."),o}}}function LA(a,e,n,r){const o={},c=new WeakMap;function f(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",f),delete o[_.id];const b=c.get(_);b&&(e.remove(b),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function m(S,_){return o[_.id]===!0||(_.addEventListener("dispose",f),o[_.id]=!0,n.memory.geometries++),_}function p(S){const _=S.attributes;for(const b in _)e.update(_[b],a.ARRAY_BUFFER)}function h(S){const _=[],b=S.index,R=S.attributes.position;let N=0;if(R===void 0)return;if(b!==null){const U=b.array;N=b.version;for(let L=0,M=U.length;L<M;L+=3){const I=U[L+0],P=U[L+1],F=U[L+2];_.push(I,P,P,F,F,I)}}else{const U=R.array;N=R.version;for(let L=0,M=U.length/3-1;L<M;L+=3){const I=L+0,P=L+1,F=L+2;_.push(I,P,P,F,F,I)}}const T=new(R.count>=65535?Vy:Gy)(_,1);T.version=N;const x=c.get(S);x&&e.remove(x),c.set(S,T)}function g(S){const _=c.get(S);if(_){const b=S.index;b!==null&&_.version<b.version&&h(S)}else h(S);return c.get(S)}return{get:m,update:p,getWireframeAttribute:g}}function OA(a,e,n){let r;function o(S){r=S}let c,f;function m(S){c=S.type,f=S.bytesPerElement}function p(S,_){a.drawElements(r,_,c,S*f),n.update(_,r,1)}function h(S,_,b){b!==0&&(a.drawElementsInstanced(r,_,c,S*f,b),n.update(_,r,b))}function g(S,_,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,S,0,b);let N=0;for(let T=0;T<b;T++)N+=_[T];n.update(N,r,1)}this.setMode=o,this.setIndex=m,this.render=p,this.renderInstances=h,this.renderMultiDraw=g}function IA(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,m){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=m*(c/3);break;case a.LINES:n.lines+=m*(c/2);break;case a.LINE_STRIP:n.lines+=m*(c-1);break;case a.LINE_LOOP:n.lines+=m*c;break;case a.POINTS:n.points+=m*c;break;default:Ut("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function PA(a,e,n){const r=new WeakMap,o=new vn;function c(f,m,p){const h=f.morphTargetInfluences,g=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,S=g!==void 0?g.length:0;let _=r.get(m);if(_===void 0||_.count!==S){let O=function(){F.dispose(),r.delete(m),m.removeEventListener("dispose",O)};_!==void 0&&_.texture.dispose();const b=m.morphAttributes.position!==void 0,R=m.morphAttributes.normal!==void 0,N=m.morphAttributes.color!==void 0,T=m.morphAttributes.position||[],x=m.morphAttributes.normal||[],U=m.morphAttributes.color||[];let L=0;b===!0&&(L=1),R===!0&&(L=2),N===!0&&(L=3);let M=m.attributes.position.count*L,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*I*4*S),F=new Hy(P,M,I,S);F.type=oa,F.needsUpdate=!0;const A=L*4;for(let q=0;q<S;q++){const k=T[q],j=x[q],pe=U[q],he=M*I*4*q;for(let ie=0;ie<k.count;ie++){const H=ie*A;b===!0&&(o.fromBufferAttribute(k,ie),P[he+H+0]=o.x,P[he+H+1]=o.y,P[he+H+2]=o.z,P[he+H+3]=0),R===!0&&(o.fromBufferAttribute(j,ie),P[he+H+4]=o.x,P[he+H+5]=o.y,P[he+H+6]=o.z,P[he+H+7]=0),N===!0&&(o.fromBufferAttribute(pe,ie),P[he+H+8]=o.x,P[he+H+9]=o.y,P[he+H+10]=o.z,P[he+H+11]=pe.itemSize===4?o.w:1)}}_={count:S,texture:F,size:new ot(M,I)},r.set(m,_),m.addEventListener("dispose",O)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let b=0;for(let N=0;N<h.length;N++)b+=h[N];const R=m.morphTargetsRelative?1:1-b;p.getUniforms().setValue(a,"morphTargetBaseInfluence",R),p.getUniforms().setValue(a,"morphTargetInfluences",h)}p.getUniforms().setValue(a,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function zA(a,e,n,r,o){let c=new WeakMap;function f(h){const g=o.render.frame,S=h.geometry,_=e.get(h,S);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),c.get(h)!==g&&(n.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const b=h.skeleton;c.get(b)!==g&&(b.update(),c.set(b,g))}return _}function m(){c=new WeakMap}function p(h){const g=h.target;g.removeEventListener("dispose",p),r.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:f,dispose:m}}const BA={[Ty]:"LINEAR_TONE_MAPPING",[Ay]:"REINHARD_TONE_MAPPING",[Ry]:"CINEON_TONE_MAPPING",[Wp]:"ACES_FILMIC_TONE_MAPPING",[wy]:"AGX_TONE_MAPPING",[Dy]:"NEUTRAL_TONE_MAPPING",[Cy]:"CUSTOM_TONE_MAPPING"};function FA(a,e,n,r,o,c){const f=new fa(e,n,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new xl(e,n):void 0}),m=new fa(e,n,{type:Wa,depthBuffer:!1,stencilBuffer:!1}),p=new Ci;p.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const h=new Rb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new wn(p,h),S=new cm(-1,1,1,-1,0,1);let _=null,b=null,R=!1,N,T=null,x=[],U=!1;this.setSize=function(L,M){f.setSize(L,M),m.setSize(L,M);for(let I=0;I<x.length;I++){const P=x[I];P.setSize&&P.setSize(L,M)}},this.setEffects=function(L){x=L,U=x.length>0&&x[0].isRenderPass===!0;const M=f.width,I=f.height;for(let P=0;P<x.length;P++){const F=x[P];F.setSize&&F.setSize(M,I)}},this.begin=function(L,M){if(R||L.toneMapping===ua&&x.length===0)return!1;if(T=M,M!==null){const I=M.width,P=M.height;(f.width!==I||f.height!==P)&&this.setSize(I,P)}return U===!1&&L.setRenderTarget(f),N=L.toneMapping,L.toneMapping=ua,!0},this.hasRenderPass=function(){return U},this.end=function(L,M){L.toneMapping=N,R=!0;let I=f,P=m;for(let F=0;F<x.length;F++){const A=x[F];if(A.enabled!==!1&&(A.render(L,P,I,M),A.needsSwap!==!1)){const O=I;I=P,P=O}}if(_!==L.outputColorSpace||b!==L.toneMapping){_=L.outputColorSpace,b=L.toneMapping,h.defines={},Lt.getTransfer(_)===Qt&&(h.defines.SRGB_TRANSFER="");const F=BA[b];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(T),L.render(g,S),T=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),m.dispose(),p.dispose(),h.dispose()}}const ex=new $n,wp=new xl(1,1),tx=new Hy,nx=new tb,ix=new Yy,Kv=[],Qv=[],jv=new Float32Array(16),Jv=new Float32Array(9),$v=new Float32Array(4);function bl(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let c=Kv[o];if(c===void 0&&(c=new Float32Array(o),Kv[o]=c),e!==0){r.toArray(c,0);for(let f=1,m=0;f!==e;++f)m+=n,a[f].toArray(c,m)}return c}function On(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function In(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function ku(a,e){let n=Qv[e];n===void 0&&(n=new Int32Array(e),Qv[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function HA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function kA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(On(n,e))return;a.uniform2fv(this.addr,e),In(n,e)}}function GA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(On(n,e))return;a.uniform3fv(this.addr,e),In(n,e)}}function VA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(On(n,e))return;a.uniform4fv(this.addr,e),In(n,e)}}function XA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(On(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),In(n,e)}else{if(On(n,r))return;$v.set(r),a.uniformMatrix2fv(this.addr,!1,$v),In(n,r)}}function WA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(On(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),In(n,e)}else{if(On(n,r))return;Jv.set(r),a.uniformMatrix3fv(this.addr,!1,Jv),In(n,r)}}function YA(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(On(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),In(n,e)}else{if(On(n,r))return;jv.set(r),a.uniformMatrix4fv(this.addr,!1,jv),In(n,r)}}function qA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function ZA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(On(n,e))return;a.uniform2iv(this.addr,e),In(n,e)}}function KA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(On(n,e))return;a.uniform3iv(this.addr,e),In(n,e)}}function QA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(On(n,e))return;a.uniform4iv(this.addr,e),In(n,e)}}function jA(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function JA(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(On(n,e))return;a.uniform2uiv(this.addr,e),In(n,e)}}function $A(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(On(n,e))return;a.uniform3uiv(this.addr,e),In(n,e)}}function e2(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(On(n,e))return;a.uniform4uiv(this.addr,e),In(n,e)}}function t2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(wp.compareFunction=n.isReversedDepthBuffer()?$p:Jp,c=wp):c=ex,n.setTexture2D(e||c,o)}function n2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||nx,o)}function i2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||ix,o)}function a2(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||tx,o)}function s2(a){switch(a){case 5126:return HA;case 35664:return kA;case 35665:return GA;case 35666:return VA;case 35674:return XA;case 35675:return WA;case 35676:return YA;case 5124:case 35670:return qA;case 35667:case 35671:return ZA;case 35668:case 35672:return KA;case 35669:case 35673:return QA;case 5125:return jA;case 36294:return JA;case 36295:return $A;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return a2}}function r2(a,e){a.uniform1fv(this.addr,e)}function l2(a,e){const n=bl(e,this.size,2);a.uniform2fv(this.addr,n)}function o2(a,e){const n=bl(e,this.size,3);a.uniform3fv(this.addr,n)}function c2(a,e){const n=bl(e,this.size,4);a.uniform4fv(this.addr,n)}function u2(a,e){const n=bl(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function f2(a,e){const n=bl(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function d2(a,e){const n=bl(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function h2(a,e){a.uniform1iv(this.addr,e)}function p2(a,e){a.uniform2iv(this.addr,e)}function m2(a,e){a.uniform3iv(this.addr,e)}function g2(a,e){a.uniform4iv(this.addr,e)}function _2(a,e){a.uniform1uiv(this.addr,e)}function v2(a,e){a.uniform2uiv(this.addr,e)}function y2(a,e){a.uniform3uiv(this.addr,e)}function x2(a,e){a.uniform4uiv(this.addr,e)}function S2(a,e,n){const r=this.cache,o=e.length,c=ku(n,o);On(r,c)||(a.uniform1iv(this.addr,c),In(r,c));let f;this.type===a.SAMPLER_2D_SHADOW?f=wp:f=ex;for(let m=0;m!==o;++m)n.setTexture2D(e[m]||f,c[m])}function M2(a,e,n){const r=this.cache,o=e.length,c=ku(n,o);On(r,c)||(a.uniform1iv(this.addr,c),In(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||nx,c[f])}function E2(a,e,n){const r=this.cache,o=e.length,c=ku(n,o);On(r,c)||(a.uniform1iv(this.addr,c),In(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||ix,c[f])}function b2(a,e,n){const r=this.cache,o=e.length,c=ku(n,o);On(r,c)||(a.uniform1iv(this.addr,c),In(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||tx,c[f])}function T2(a){switch(a){case 5126:return r2;case 35664:return l2;case 35665:return o2;case 35666:return c2;case 35674:return u2;case 35675:return f2;case 35676:return d2;case 5124:case 35670:return h2;case 35667:case 35671:return p2;case 35668:case 35672:return m2;case 35669:case 35673:return g2;case 5125:return _2;case 36294:return v2;case 36295:return y2;case 36296:return x2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return M2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return b2}}class A2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=s2(n.type)}}class R2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=T2(n.type)}}class C2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const m=o[c];m.setValue(e,n[m.id],r)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function ey(a,e){a.seq.push(e),a.map[e.id]=e}function w2(a,e,n){const r=a.name,o=r.length;for(Dh.lastIndex=0;;){const c=Dh.exec(r),f=Dh.lastIndex;let m=c[1];const p=c[2]==="]",h=c[3];if(p&&(m=m|0),h===void 0||h==="["&&f+2===o){ey(n,h===void 0?new A2(m,a,e):new R2(m,a,e));break}else{let S=n.map[m];S===void 0&&(S=new C2(m),ey(n,S)),n=S}}}class Tu{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const m=e.getActiveUniform(n,f),p=e.getUniformLocation(n,m.name);w2(m,p,this)}const o=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):c.push(f);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const m=n[c],p=r[m.id];p.needsUpdate!==!1&&m.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function ty(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const D2=37297;let N2=0;function U2(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const m=f+1;r.push(`${m===e?">":" "} ${m}: ${n[f]}`)}return r.join(`
`)}const ny=new mt;function L2(a){Lt._getMatrix(ny,Lt.workingColorSpace,a);const e=`mat3( ${ny.elements.map(n=>n.toFixed(4))} )`;switch(Lt.getTransfer(a)){case Du:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function iy(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const m=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+U2(a.getShaderSource(e),m)}else return c}function O2(a,e){const n=L2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const I2={[Ty]:"Linear",[Ay]:"Reinhard",[Ry]:"Cineon",[Wp]:"ACESFilmic",[wy]:"AgX",[Dy]:"Neutral",[Cy]:"Custom"};function P2(a,e){const n=I2[e];return n===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _u=new te;function z2(){Lt.getLuminanceCoefficients(_u);const a=_u.x.toFixed(4),e=_u.y.toFixed(4),n=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function F2(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function H2(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),f=c.name;let m=1;c.type===a.FLOAT_MAT2&&(m=2),c.type===a.FLOAT_MAT3&&(m=3),c.type===a.FLOAT_MAT4&&(m=4),n[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:m}}return n}function To(a){return a!==""}function ay(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sy(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(a){return a.replace(k2,V2)}const G2=new Map;function V2(a,e){let n=xt[e];if(n===void 0){const r=G2.get(e);if(r!==void 0)n=xt[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dp(n)}const X2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ry(a){return a.replace(X2,W2)}function W2(a,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ly(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const Y2={[Ao]:"SHADOWMAP_TYPE_PCF",[bo]:"SHADOWMAP_TYPE_VSM"};function q2(a){return Y2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Z2={[dr]:"ENVMAP_TYPE_CUBE",[yl]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function K2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Z2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Q2={[yl]:"ENVMAP_MODE_REFRACTION"};function j2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Q2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J2={[by]:"ENVMAP_BLENDING_MULTIPLY",[yE]:"ENVMAP_BLENDING_MIX",[xE]:"ENVMAP_BLENDING_ADD"};function $2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":J2[a.combine]||"ENVMAP_BLENDING_NONE"}function eR(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function tR(a,e,n,r){const o=a.getContext(),c=n.defines;let f=n.vertexShader,m=n.fragmentShader;const p=q2(n),h=K2(n),g=j2(n),S=$2(n),_=eR(n),b=B2(n),R=F2(c),N=o.createProgram();let T,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(T=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(To).join(`
`),T.length>0&&(T+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R].filter(To).join(`
`),x.length>0&&(x+=`
`)):(T=[ly(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),x=[ly(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,R,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ua?"#define TONE_MAPPING":"",n.toneMapping!==ua?xt.tonemapping_pars_fragment:"",n.toneMapping!==ua?P2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,O2("linearToOutputTexel",n.outputColorSpace),z2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(To).join(`
`)),f=Dp(f),f=ay(f,n),f=sy(f,n),m=Dp(m),m=ay(m,n),m=sy(m,n),f=ry(f),m=ry(m),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,T=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,x=["#define varying in",n.glslVersion===hv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=U+T+f,M=U+x+m,I=ty(o,o.VERTEX_SHADER,L),P=ty(o,o.FRAGMENT_SHADER,M);o.attachShader(N,I),o.attachShader(N,P),n.index0AttributeName!==void 0?o.bindAttribLocation(N,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function F(k){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(N)||"",pe=o.getShaderInfoLog(I)||"",he=o.getShaderInfoLog(P)||"",ie=j.trim(),H=pe.trim(),W=he.trim();let re=!0,Se=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(re=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,N,I,P);else{const Ee=iy(o,I,"vertex"),z=iy(o,P,"fragment");Ut("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+Ee+`
`+z)}else ie!==""?ft("WebGLProgram: Program Info Log:",ie):(H===""||W==="")&&(Se=!1);Se&&(k.diagnostics={runnable:re,programLog:ie,vertexShader:{log:H,prefix:T},fragmentShader:{log:W,prefix:x}})}o.deleteShader(I),o.deleteShader(P),A=new Tu(o,N),O=H2(o,N)}let A;this.getUniforms=function(){return A===void 0&&F(this),A};let O;this.getAttributes=function(){return O===void 0&&F(this),O};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(N,D2)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=N2++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=I,this.fragmentShader=P,this}let nR=0;class iR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new aR(e),n.set(e,r)),r}}class aR{constructor(e){this.id=nR++,this.code=e,this.usedTimes=0}}function sR(a){return a===hr||a===Ru||a===Cu}function rR(a,e,n,r,o,c){const f=new nm,m=new iR,p=new Set,h=[],g=new Map,S=r.logarithmicDepthBuffer;let _=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(A){return p.add(A),A===0?"uv":`uv${A}`}function N(A,O,q,k,j,pe){const he=k.fog,ie=j.geometry,H=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,W=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,re=e.get(A.envMap||H,W),Se=re&&re.mapping===Bu?re.image.height:null,Ee=b[A.type];A.precision!==null&&(_=r.getMaxPrecision(A.precision),_!==A.precision&&ft("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const z=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,J=z!==void 0?z.length:0;let Re=0;ie.morphAttributes.position!==void 0&&(Re=1),ie.morphAttributes.normal!==void 0&&(Re=2),ie.morphAttributes.color!==void 0&&(Re=3);let Oe,Fe,se,Te;if(Ee){const Ze=ra[Ee];Oe=Ze.vertexShader,Fe=Ze.fragmentShader}else{Oe=A.vertexShader,Fe=A.fragmentShader;const Ze=m.getVertexShaderStage(A),cn=m.getFragmentShaderStage(A);m.update(A,Ze,cn),se=Ze.id,Te=cn.id}const Ce=a.getRenderTarget(),Ge=a.state.buffers.depth.getReversed(),st=j.isInstancedMesh===!0,je=j.isBatchedMesh===!0,Ot=!!A.map,ht=!!A.matcap,dt=!!re,ct=!!A.aoMap,Be=!!A.lightMap,vt=!!A.bumpMap&&A.wireframe===!1,Jt=!!A.normalMap,Vt=!!A.displacementMap,on=!!A.emissiveMap,Bt=!!A.metalnessMap,an=!!A.roughnessMap,Q=A.anisotropy>0,Dt=A.clearcoat>0,ve=A.dispersion>0,C=A.iridescence>0,v=A.sheen>0,X=A.transmission>0,G=Q&&!!A.anisotropyMap,K=Dt&&!!A.clearcoatMap,me=Dt&&!!A.clearcoatNormalMap,ye=Dt&&!!A.clearcoatRoughnessMap,ee=C&&!!A.iridescenceMap,ae=C&&!!A.iridescenceThicknessMap,ge=v&&!!A.sheenColorMap,Ue=v&&!!A.sheenRoughnessMap,Le=!!A.specularMap,Ne=!!A.specularColorMap,ze=!!A.specularIntensityMap,Ve=X&&!!A.transmissionMap,nt=X&&!!A.thicknessMap,Y=!!A.gradientMap,Ie=!!A.alphaMap,xe=A.alphaTest>0,Pe=!!A.alphaHash,He=!!A.extensions;let we=ua;A.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(we=a.toneMapping);const $e={shaderID:Ee,shaderType:A.type,shaderName:A.name,vertexShader:Oe,fragmentShader:Fe,defines:A.defines,customVertexShaderID:se,customFragmentShaderID:Te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:je,batchingColor:je&&j._colorsTexture!==null,instancing:st,instancingColor:st&&j.instanceColor!==null,instancingMorph:st&&j.morphTexture!==null,outputColorSpace:Ce===null?a.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Ot,matcap:ht,envMap:dt,envMapMode:dt&&re.mapping,envMapCubeUVHeight:Se,aoMap:ct,lightMap:Be,bumpMap:vt,normalMap:Jt,displacementMap:Vt,emissiveMap:on,normalMapObjectSpace:Jt&&A.normalMapType===EE,normalMapTangentSpace:Jt&&A.normalMapType===Tp,packedNormalMap:Jt&&A.normalMapType===Tp&&sR(A.normalMap.format),metalnessMap:Bt,roughnessMap:an,anisotropy:Q,anisotropyMap:G,clearcoat:Dt,clearcoatMap:K,clearcoatNormalMap:me,clearcoatRoughnessMap:ye,dispersion:ve,iridescence:C,iridescenceMap:ee,iridescenceThicknessMap:ae,sheen:v,sheenColorMap:ge,sheenRoughnessMap:Ue,specularMap:Le,specularColorMap:Ne,specularIntensityMap:ze,transmission:X,transmissionMap:Ve,thicknessMap:nt,gradientMap:Y,opaque:A.transparent===!1&&A.blending===pl&&A.alphaToCoverage===!1,alphaMap:Ie,alphaTest:xe,alphaHash:Pe,combine:A.combine,mapUv:Ot&&R(A.map.channel),aoMapUv:ct&&R(A.aoMap.channel),lightMapUv:Be&&R(A.lightMap.channel),bumpMapUv:vt&&R(A.bumpMap.channel),normalMapUv:Jt&&R(A.normalMap.channel),displacementMapUv:Vt&&R(A.displacementMap.channel),emissiveMapUv:on&&R(A.emissiveMap.channel),metalnessMapUv:Bt&&R(A.metalnessMap.channel),roughnessMapUv:an&&R(A.roughnessMap.channel),anisotropyMapUv:G&&R(A.anisotropyMap.channel),clearcoatMapUv:K&&R(A.clearcoatMap.channel),clearcoatNormalMapUv:me&&R(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&R(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&R(A.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&R(A.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&R(A.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&R(A.sheenRoughnessMap.channel),specularMapUv:Le&&R(A.specularMap.channel),specularColorMapUv:Ne&&R(A.specularColorMap.channel),specularIntensityMapUv:ze&&R(A.specularIntensityMap.channel),transmissionMapUv:Ve&&R(A.transmissionMap.channel),thicknessMapUv:nt&&R(A.thicknessMap.channel),alphaMapUv:Ie&&R(A.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Jt||Q),vertexNormals:!!ie.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ie.attributes.uv&&(Ot||Ie),fog:!!he,useFog:A.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ie.attributes.normal===void 0&&Jt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ge,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:ie.attributes.position!==void 0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Re,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:pe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&q.length>0,shadowMapType:a.shadowMap.type,toneMapping:we,decodeVideoTexture:Ot&&A.map.isVideoTexture===!0&&Lt.getTransfer(A.map.colorSpace)===Qt,decodeVideoTextureEmissive:on&&A.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(A.emissiveMap.colorSpace)===Qt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===la,flipSided:A.side===pi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:He&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&A.extensions.multiDraw===!0||je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return $e.vertexUv1s=p.has(1),$e.vertexUv2s=p.has(2),$e.vertexUv3s=p.has(3),p.clear(),$e}function T(A){const O=[];if(A.shaderID?O.push(A.shaderID):(O.push(A.customVertexShaderID),O.push(A.customFragmentShaderID)),A.defines!==void 0)for(const q in A.defines)O.push(q),O.push(A.defines[q]);return A.isRawShaderMaterial===!1&&(x(O,A),U(O,A),O.push(a.outputColorSpace)),O.push(A.customProgramCacheKey),O.join()}function x(A,O){A.push(O.precision),A.push(O.outputColorSpace),A.push(O.envMapMode),A.push(O.envMapCubeUVHeight),A.push(O.mapUv),A.push(O.alphaMapUv),A.push(O.lightMapUv),A.push(O.aoMapUv),A.push(O.bumpMapUv),A.push(O.normalMapUv),A.push(O.displacementMapUv),A.push(O.emissiveMapUv),A.push(O.metalnessMapUv),A.push(O.roughnessMapUv),A.push(O.anisotropyMapUv),A.push(O.clearcoatMapUv),A.push(O.clearcoatNormalMapUv),A.push(O.clearcoatRoughnessMapUv),A.push(O.iridescenceMapUv),A.push(O.iridescenceThicknessMapUv),A.push(O.sheenColorMapUv),A.push(O.sheenRoughnessMapUv),A.push(O.specularMapUv),A.push(O.specularColorMapUv),A.push(O.specularIntensityMapUv),A.push(O.transmissionMapUv),A.push(O.thicknessMapUv),A.push(O.combine),A.push(O.fogExp2),A.push(O.sizeAttenuation),A.push(O.morphTargetsCount),A.push(O.morphAttributeCount),A.push(O.numDirLights),A.push(O.numPointLights),A.push(O.numSpotLights),A.push(O.numSpotLightMaps),A.push(O.numHemiLights),A.push(O.numRectAreaLights),A.push(O.numDirLightShadows),A.push(O.numPointLightShadows),A.push(O.numSpotLightShadows),A.push(O.numSpotLightShadowsWithMaps),A.push(O.numLightProbes),A.push(O.shadowMapType),A.push(O.toneMapping),A.push(O.numClippingPlanes),A.push(O.numClipIntersection),A.push(O.depthPacking)}function U(A,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),A.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),A.push(f.mask)}function L(A){const O=b[A.type];let q;if(O){const k=ra[O];q=bb.clone(k.uniforms)}else q=A.uniforms;return q}function M(A,O){let q=g.get(O);return q!==void 0?++q.usedTimes:(q=new tR(a,O,A,o),h.push(q),g.set(O,q)),q}function I(A){if(--A.usedTimes===0){const O=h.indexOf(A);h[O]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function F(){m.dispose()}return{getParameters:N,getProgramCacheKey:T,getUniforms:L,acquireProgram:M,releaseProgram:I,releaseShaderCache:P,programs:h,dispose:F}}function lR(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let m=a.get(f);return m===void 0&&(m={},a.set(f,m)),m}function r(f){a.delete(f)}function o(f,m,p){a.get(f)[m]=p}function c(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function oR(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function oy(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function cy(){const a=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function m(_,b,R,N,T,x){let U=a[e];return U===void 0?(U={id:_.id,object:_,geometry:b,material:R,materialVariant:f(_),groupOrder:N,renderOrder:_.renderOrder,z:T,group:x},a[e]=U):(U.id=_.id,U.object=_,U.geometry=b,U.material=R,U.materialVariant=f(_),U.groupOrder=N,U.renderOrder=_.renderOrder,U.z=T,U.group=x),e++,U}function p(_,b,R,N,T,x){const U=m(_,b,R,N,T,x);R.transmission>0?r.push(U):R.transparent===!0?o.push(U):n.push(U)}function h(_,b,R,N,T,x){const U=m(_,b,R,N,T,x);R.transmission>0?r.unshift(U):R.transparent===!0?o.unshift(U):n.unshift(U)}function g(_,b,R){n.length>1&&n.sort(_||oR),r.length>1&&r.sort(b||oy),o.length>1&&o.sort(b||oy),R&&(n.reverse(),r.reverse(),o.reverse())}function S(){for(let _=e,b=a.length;_<b;_++){const R=a[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:p,unshift:h,finish:S,sort:g}}function cR(){let a=new WeakMap;function e(r,o){const c=a.get(r);let f;return c===void 0?(f=new cy,a.set(r,[f])):o>=c.length?(f=new cy,c.push(f)):f=c[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function uR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new te,color:new At};break;case"SpotLight":n={position:new te,direction:new te,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=n,n}}}function fR(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let dR=0;function hR(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function pR(a){const e=new uR,n=fR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new te);const o=new te,c=new _n,f=new _n;function m(h){let g=0,S=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let b=0,R=0,N=0,T=0,x=0,U=0,L=0,M=0,I=0,P=0,F=0;h.sort(hR);for(let O=0,q=h.length;O<q;O++){const k=h[O],j=k.color,pe=k.intensity,he=k.distance;let ie=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===hr?ie=k.shadow.map.texture:ie=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=j.r*pe,S+=j.g*pe,_+=j.b*pe;else if(k.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(k.sh.coefficients[H],pe);F++}else if(k.isDirectionalLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,re=n.get(k);re.shadowIntensity=W.intensity,re.shadowBias=W.bias,re.shadowNormalBias=W.normalBias,re.shadowRadius=W.radius,re.shadowMapSize=W.mapSize,r.directionalShadow[b]=re,r.directionalShadowMap[b]=ie,r.directionalShadowMatrix[b]=k.shadow.matrix,U++}r.directional[b]=H,b++}else if(k.isSpotLight){const H=e.get(k);H.position.setFromMatrixPosition(k.matrixWorld),H.color.copy(j).multiplyScalar(pe),H.distance=he,H.coneCos=Math.cos(k.angle),H.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),H.decay=k.decay,r.spot[N]=H;const W=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,W.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[N]=W.matrix,k.castShadow){const re=n.get(k);re.shadowIntensity=W.intensity,re.shadowBias=W.bias,re.shadowNormalBias=W.normalBias,re.shadowRadius=W.radius,re.shadowMapSize=W.mapSize,r.spotShadow[N]=re,r.spotShadowMap[N]=ie,M++}N++}else if(k.isRectAreaLight){const H=e.get(k);H.color.copy(j).multiplyScalar(pe),H.halfWidth.set(k.width*.5,0,0),H.halfHeight.set(0,k.height*.5,0),r.rectArea[T]=H,T++}else if(k.isPointLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),H.distance=k.distance,H.decay=k.decay,k.castShadow){const W=k.shadow,re=n.get(k);re.shadowIntensity=W.intensity,re.shadowBias=W.bias,re.shadowNormalBias=W.normalBias,re.shadowRadius=W.radius,re.shadowMapSize=W.mapSize,re.shadowCameraNear=W.camera.near,re.shadowCameraFar=W.camera.far,r.pointShadow[R]=re,r.pointShadowMap[R]=ie,r.pointShadowMatrix[R]=k.shadow.matrix,L++}r.point[R]=H,R++}else if(k.isHemisphereLight){const H=e.get(k);H.skyColor.copy(k.color).multiplyScalar(pe),H.groundColor.copy(k.groundColor).multiplyScalar(pe),r.hemi[x]=H,x++}}T>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=S,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==b||A.pointLength!==R||A.spotLength!==N||A.rectAreaLength!==T||A.hemiLength!==x||A.numDirectionalShadows!==U||A.numPointShadows!==L||A.numSpotShadows!==M||A.numSpotMaps!==I||A.numLightProbes!==F)&&(r.directional.length=b,r.spot.length=N,r.rectArea.length=T,r.point.length=R,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=M+I-P,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,A.directionalLength=b,A.pointLength=R,A.spotLength=N,A.rectAreaLength=T,A.hemiLength=x,A.numDirectionalShadows=U,A.numPointShadows=L,A.numSpotShadows=M,A.numSpotMaps=I,A.numLightProbes=F,r.version=dR++)}function p(h,g){let S=0,_=0,b=0,R=0,N=0;const T=g.matrixWorldInverse;for(let x=0,U=h.length;x<U;x++){const L=h[x];if(L.isDirectionalLight){const M=r.directional[S];M.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(T),S++}else if(L.isSpotLight){const M=r.spot[b];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(T),M.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(T),b++}else if(L.isRectAreaLight){const M=r.rectArea[R];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(T),f.identity(),c.copy(L.matrixWorld),c.premultiply(T),f.extractRotation(c),M.halfWidth.set(L.width*.5,0,0),M.halfHeight.set(0,L.height*.5,0),M.halfWidth.applyMatrix4(f),M.halfHeight.applyMatrix4(f),R++}else if(L.isPointLight){const M=r.point[_];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(T),_++}else if(L.isHemisphereLight){const M=r.hemi[N];M.direction.setFromMatrixPosition(L.matrixWorld),M.direction.transformDirection(T),N++}}}return{setup:m,setupView:p,state:r}}function uy(a){const e=new pR(a),n=[],r=[],o=[];function c(_){S.camera=_,n.length=0,r.length=0,o.length=0}function f(_){n.push(_)}function m(_){r.push(_)}function p(_){o.push(_)}function h(){e.setup(n)}function g(_){e.setupView(n,_)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:h,setupLightsView:g,pushLight:f,pushShadow:m,pushLightProbeGrid:p}}function mR(a){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let m;return f===void 0?(m=new uy(a),e.set(o,[m])):c>=f.length?(m=new uy(a),f.push(m)):m=f[c],m}function r(){e=new WeakMap}return{get:n,dispose:r}}const gR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_R=`uniform sampler2D shadow_pass;
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
}`,vR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],yR=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],fy=new _n,Mo=new te,Nh=new te;function xR(a,e,n){let r=new rm;const o=new ot,c=new ot,f=new vn,m=new Cb,p=new wb,h={},g=n.maxTextureSize,S={[Ns]:pi,[pi]:Ns,[la]:la},_=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:gR,fragmentShader:_R}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const R=new Ci;R.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new wn(R,_),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let x=this.type;this.render=function(P,F,A){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||P.length===0)return;this.type===eE&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ao);const O=a.getRenderTarget(),q=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),j=a.state;j.setBlending(Ga),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const pe=x!==this.type;pe&&F.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(ie=>ie.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,ie=P.length;he<ie;he++){const H=P[he],W=H.shadow;if(W===void 0){ft("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const re=W.getFrameExtents();o.multiply(re),c.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/re.x),o.x=c.x*re.x,W.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/re.y),o.y=c.y*re.y,W.mapSize.y=c.y));const Se=a.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Se,W.map===null||pe===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===bo){if(H.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new fa(o.x,o.y,{format:hr,type:Wa,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new xl(o.x,o.y,oa),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=Ya,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=qn,W.map.depthTexture.magFilter=qn}else H.isPointLight?(W.map=new $y(o.x),W.map.depthTexture=new Mb(o.x,da)):(W.map=new fa(o.x,o.y),W.map.depthTexture=new xl(o.x,o.y,da)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=Ya,this.type===Ao?(W.map.depthTexture.compareFunction=Se?$p:Jp,W.map.depthTexture.minFilter=Bn,W.map.depthTexture.magFilter=Bn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=qn,W.map.depthTexture.magFilter=qn);W.camera.updateProjectionMatrix()}const Ee=W.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<Ee;z++){if(W.map.isWebGLCubeRenderTarget)a.setRenderTarget(W.map,z),a.clear();else{z===0&&(a.setRenderTarget(W.map),a.clear());const J=W.getViewport(z);f.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),j.viewport(f)}if(H.isPointLight){const J=W.camera,Re=W.matrix,Oe=H.distance||J.far;Oe!==J.far&&(J.far=Oe,J.updateProjectionMatrix()),Mo.setFromMatrixPosition(H.matrixWorld),J.position.copy(Mo),Nh.copy(J.position),Nh.add(vR[z]),J.up.copy(yR[z]),J.lookAt(Nh),J.updateMatrixWorld(),Re.makeTranslation(-Mo.x,-Mo.y,-Mo.z),fy.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),W._frustum.setFromProjectionMatrix(fy,J.coordinateSystem,J.reversedDepth)}else W.updateMatrices(H);r=W.getFrustum(),M(F,A,W.camera,H,this.type)}W.isPointLightShadow!==!0&&this.type===bo&&U(W,A),W.needsUpdate=!1}x=this.type,T.needsUpdate=!1,a.setRenderTarget(O,q,k)};function U(P,F){const A=e.update(N);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new fa(o.x,o.y,{format:hr,type:Wa})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,a.setRenderTarget(P.mapPass),a.clear(),a.renderBufferDirect(F,null,A,_,N,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,a.setRenderTarget(P.map),a.clear(),a.renderBufferDirect(F,null,A,b,N,null)}function L(P,F,A,O){let q=null;const k=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)q=k;else if(q=A.isPointLight===!0?p:m,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=q.uuid,pe=F.uuid;let he=h[j];he===void 0&&(he={},h[j]=he);let ie=he[pe];ie===void 0&&(ie=q.clone(),he[pe]=ie,F.addEventListener("dispose",I)),q=ie}if(q.visible=F.visible,q.wireframe=F.wireframe,O===bo?q.side=F.shadowSide!==null?F.shadowSide:F.side:q.side=F.shadowSide!==null?F.shadowSide:S[F.side],q.alphaMap=F.alphaMap,q.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,q.map=F.map,q.clipShadows=F.clipShadows,q.clippingPlanes=F.clippingPlanes,q.clipIntersection=F.clipIntersection,q.displacementMap=F.displacementMap,q.displacementScale=F.displacementScale,q.displacementBias=F.displacementBias,q.wireframeLinewidth=F.wireframeLinewidth,q.linewidth=F.linewidth,A.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const j=a.properties.get(q);j.light=A}return q}function M(P,F,A,O,q){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&q===bo)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const pe=e.update(P),he=P.material;if(Array.isArray(he)){const ie=pe.groups;for(let H=0,W=ie.length;H<W;H++){const re=ie[H],Se=he[re.materialIndex];if(Se&&Se.visible){const Ee=L(P,Se,O,q);P.onBeforeShadow(a,P,F,A,pe,Ee,re),a.renderBufferDirect(A,null,pe,Ee,P,re),P.onAfterShadow(a,P,F,A,pe,Ee,re)}}}else if(he.visible){const ie=L(P,he,O,q);P.onBeforeShadow(a,P,F,A,pe,ie,null),a.renderBufferDirect(A,null,pe,ie,P,null),P.onAfterShadow(a,P,F,A,pe,ie,null)}}const j=P.children;for(let pe=0,he=j.length;pe<he;pe++)M(j[pe],F,A,O,q)}function I(P){P.target.removeEventListener("dispose",I);for(const A in h){const O=h[A],q=P.target.uuid;q in O&&(O[q].dispose(),delete O[q])}}}function SR(a,e){function n(){let Y=!1;const Ie=new vn;let xe=null;const Pe=new vn(0,0,0,0);return{setMask:function(He){xe!==He&&!Y&&(a.colorMask(He,He,He,He),xe=He)},setLocked:function(He){Y=He},setClear:function(He,we,$e,Ze,cn){cn===!0&&(He*=Ze,we*=Ze,$e*=Ze),Ie.set(He,we,$e,Ze),Pe.equals(Ie)===!1&&(a.clearColor(He,we,$e,Ze),Pe.copy(Ie))},reset:function(){Y=!1,xe=null,Pe.set(-1,0,0,0)}}}function r(){let Y=!1,Ie=!1,xe=null,Pe=null,He=null;return{setReversed:function(we){if(Ie!==we){const $e=e.get("EXT_clip_control");we?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ie=we;const Ze=He;He=null,this.setClear(Ze)}},getReversed:function(){return Ie},setTest:function(we){we?Ce(a.DEPTH_TEST):Ge(a.DEPTH_TEST)},setMask:function(we){xe!==we&&!Y&&(a.depthMask(we),xe=we)},setFunc:function(we){if(Ie&&(we=LE[we]),Pe!==we){switch(we){case Hh:a.depthFunc(a.NEVER);break;case kh:a.depthFunc(a.ALWAYS);break;case Gh:a.depthFunc(a.LESS);break;case vl:a.depthFunc(a.LEQUAL);break;case Vh:a.depthFunc(a.EQUAL);break;case Xh:a.depthFunc(a.GEQUAL);break;case Wh:a.depthFunc(a.GREATER);break;case Yh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Pe=we}},setLocked:function(we){Y=we},setClear:function(we){He!==we&&(He=we,Ie&&(we=1-we),a.clearDepth(we))},reset:function(){Y=!1,xe=null,Pe=null,He=null,Ie=!1}}}function o(){let Y=!1,Ie=null,xe=null,Pe=null,He=null,we=null,$e=null,Ze=null,cn=null;return{setTest:function(Ft){Y||(Ft?Ce(a.STENCIL_TEST):Ge(a.STENCIL_TEST))},setMask:function(Ft){Ie!==Ft&&!Y&&(a.stencilMask(Ft),Ie=Ft)},setFunc:function(Ft,ei,Zn){(xe!==Ft||Pe!==ei||He!==Zn)&&(a.stencilFunc(Ft,ei,Zn),xe=Ft,Pe=ei,He=Zn)},setOp:function(Ft,ei,Zn){(we!==Ft||$e!==ei||Ze!==Zn)&&(a.stencilOp(Ft,ei,Zn),we=Ft,$e=ei,Ze=Zn)},setLocked:function(Ft){Y=Ft},setClear:function(Ft){cn!==Ft&&(a.clearStencil(Ft),cn=Ft)},reset:function(){Y=!1,Ie=null,xe=null,Pe=null,He=null,we=null,$e=null,Ze=null,cn=null}}}const c=new n,f=new r,m=new o,p=new WeakMap,h=new WeakMap;let g={},S={},_={},b=new WeakMap,R=[],N=null,T=!1,x=null,U=null,L=null,M=null,I=null,P=null,F=null,A=new At(0,0,0),O=0,q=!1,k=null,j=null,pe=null,he=null,ie=null;const H=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,re=0;const Se=a.getParameter(a.VERSION);Se.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Se)[1]),W=re>=1):Se.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),W=re>=2);let Ee=null,z={};const J=a.getParameter(a.SCISSOR_BOX),Re=a.getParameter(a.VIEWPORT),Oe=new vn().fromArray(J),Fe=new vn().fromArray(Re);function se(Y,Ie,xe,Pe){const He=new Uint8Array(4),we=a.createTexture();a.bindTexture(Y,we),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let $e=0;$e<xe;$e++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Ie,0,a.RGBA,1,1,Pe,0,a.RGBA,a.UNSIGNED_BYTE,He):a.texImage2D(Ie+$e,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,He);return we}const Te={};Te[a.TEXTURE_2D]=se(a.TEXTURE_2D,a.TEXTURE_2D,1),Te[a.TEXTURE_CUBE_MAP]=se(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[a.TEXTURE_2D_ARRAY]=se(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Te[a.TEXTURE_3D]=se(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),m.setClear(0),Ce(a.DEPTH_TEST),f.setFunc(vl),vt(!1),Jt(ov),Ce(a.CULL_FACE),ct(Ga);function Ce(Y){g[Y]!==!0&&(a.enable(Y),g[Y]=!0)}function Ge(Y){g[Y]!==!1&&(a.disable(Y),g[Y]=!1)}function st(Y,Ie){return _[Y]!==Ie?(a.bindFramebuffer(Y,Ie),_[Y]=Ie,Y===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ie),Y===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ie),!0):!1}function je(Y,Ie){let xe=R,Pe=!1;if(Y){xe=b.get(Ie),xe===void 0&&(xe=[],b.set(Ie,xe));const He=Y.textures;if(xe.length!==He.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let we=0,$e=He.length;we<$e;we++)xe[we]=a.COLOR_ATTACHMENT0+we;xe.length=He.length,Pe=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,Pe=!0);Pe&&a.drawBuffers(xe)}function Ot(Y){return N!==Y?(a.useProgram(Y),N=Y,!0):!1}const ht={[rr]:a.FUNC_ADD,[nE]:a.FUNC_SUBTRACT,[iE]:a.FUNC_REVERSE_SUBTRACT};ht[aE]=a.MIN,ht[sE]=a.MAX;const dt={[rE]:a.ZERO,[lE]:a.ONE,[oE]:a.SRC_COLOR,[Bh]:a.SRC_ALPHA,[pE]:a.SRC_ALPHA_SATURATE,[dE]:a.DST_COLOR,[uE]:a.DST_ALPHA,[cE]:a.ONE_MINUS_SRC_COLOR,[Fh]:a.ONE_MINUS_SRC_ALPHA,[hE]:a.ONE_MINUS_DST_COLOR,[fE]:a.ONE_MINUS_DST_ALPHA,[mE]:a.CONSTANT_COLOR,[gE]:a.ONE_MINUS_CONSTANT_COLOR,[_E]:a.CONSTANT_ALPHA,[vE]:a.ONE_MINUS_CONSTANT_ALPHA};function ct(Y,Ie,xe,Pe,He,we,$e,Ze,cn,Ft){if(Y===Ga){T===!0&&(Ge(a.BLEND),T=!1);return}if(T===!1&&(Ce(a.BLEND),T=!0),Y!==tE){if(Y!==x||Ft!==q){if((U!==rr||I!==rr)&&(a.blendEquation(a.FUNC_ADD),U=rr,I=rr),Ft)switch(Y){case pl:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case cv:a.blendFunc(a.ONE,a.ONE);break;case uv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case fv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ut("WebGLState: Invalid blending: ",Y);break}else switch(Y){case pl:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case cv:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case uv:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fv:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Y);break}L=null,M=null,P=null,F=null,A.set(0,0,0),O=0,x=Y,q=Ft}return}He=He||Ie,we=we||xe,$e=$e||Pe,(Ie!==U||He!==I)&&(a.blendEquationSeparate(ht[Ie],ht[He]),U=Ie,I=He),(xe!==L||Pe!==M||we!==P||$e!==F)&&(a.blendFuncSeparate(dt[xe],dt[Pe],dt[we],dt[$e]),L=xe,M=Pe,P=we,F=$e),(Ze.equals(A)===!1||cn!==O)&&(a.blendColor(Ze.r,Ze.g,Ze.b,cn),A.copy(Ze),O=cn),x=Y,q=!1}function Be(Y,Ie){Y.side===la?Ge(a.CULL_FACE):Ce(a.CULL_FACE);let xe=Y.side===pi;Ie&&(xe=!xe),vt(xe),Y.blending===pl&&Y.transparent===!1?ct(Ga):ct(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Pe=Y.stencilWrite;m.setTest(Pe),Pe&&(m.setMask(Y.stencilWriteMask),m.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),m.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),on(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ce(a.SAMPLE_ALPHA_TO_COVERAGE):Ge(a.SAMPLE_ALPHA_TO_COVERAGE)}function vt(Y){k!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),k=Y)}function Jt(Y){Y!==JM?(Ce(a.CULL_FACE),Y!==j&&(Y===ov?a.cullFace(a.BACK):Y===$M?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ge(a.CULL_FACE),j=Y}function Vt(Y){Y!==pe&&(W&&a.lineWidth(Y),pe=Y)}function on(Y,Ie,xe){Y?(Ce(a.POLYGON_OFFSET_FILL),(he!==Ie||ie!==xe)&&(he=Ie,ie=xe,f.getReversed()&&(Ie=-Ie),a.polygonOffset(Ie,xe))):Ge(a.POLYGON_OFFSET_FILL)}function Bt(Y){Y?Ce(a.SCISSOR_TEST):Ge(a.SCISSOR_TEST)}function an(Y){Y===void 0&&(Y=a.TEXTURE0+H-1),Ee!==Y&&(a.activeTexture(Y),Ee=Y)}function Q(Y,Ie,xe){xe===void 0&&(Ee===null?xe=a.TEXTURE0+H-1:xe=Ee);let Pe=z[xe];Pe===void 0&&(Pe={type:void 0,texture:void 0},z[xe]=Pe),(Pe.type!==Y||Pe.texture!==Ie)&&(Ee!==xe&&(a.activeTexture(xe),Ee=xe),a.bindTexture(Y,Ie||Te[Y]),Pe.type=Y,Pe.texture=Ie)}function Dt(){const Y=z[Ee];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ve(){try{a.compressedTexImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function C(){try{a.compressedTexImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function v(){try{a.texSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function X(){try{a.texSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function G(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function K(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function me(){try{a.texStorage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ye(){try{a.texStorage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ee(){try{a.texImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ae(){try{a.texImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ge(Y){return S[Y]!==void 0?S[Y]:a.getParameter(Y)}function Ue(Y,Ie){S[Y]!==Ie&&(a.pixelStorei(Y,Ie),S[Y]=Ie)}function Le(Y){Oe.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),Oe.copy(Y))}function Ne(Y){Fe.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Fe.copy(Y))}function ze(Y,Ie){let xe=h.get(Ie);xe===void 0&&(xe=new WeakMap,h.set(Ie,xe));let Pe=xe.get(Y);Pe===void 0&&(Pe=a.getUniformBlockIndex(Ie,Y.name),xe.set(Y,Pe))}function Ve(Y,Ie){const Pe=h.get(Ie).get(Y);p.get(Ie)!==Pe&&(a.uniformBlockBinding(Ie,Pe,Y.__bindingPointIndex),p.set(Ie,Pe))}function nt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},S={},Ee=null,z={},_={},b=new WeakMap,R=[],N=null,T=!1,x=null,U=null,L=null,M=null,I=null,P=null,F=null,A=new At(0,0,0),O=0,q=!1,k=null,j=null,pe=null,he=null,ie=null,Oe.set(0,0,a.canvas.width,a.canvas.height),Fe.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),m.reset()}return{buffers:{color:c,depth:f,stencil:m},enable:Ce,disable:Ge,bindFramebuffer:st,drawBuffers:je,useProgram:Ot,setBlending:ct,setMaterial:Be,setFlipSided:vt,setCullFace:Jt,setLineWidth:Vt,setPolygonOffset:on,setScissorTest:Bt,activeTexture:an,bindTexture:Q,unbindTexture:Dt,compressedTexImage2D:ve,compressedTexImage3D:C,texImage2D:ee,texImage3D:ae,pixelStorei:Ue,getParameter:ge,updateUBOMapping:ze,uniformBlockBinding:Ve,texStorage2D:me,texStorage3D:ye,texSubImage2D:v,texSubImage3D:X,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:Le,viewport:Ne,reset:nt}}function MR(a,e,n,r,o,c,f){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ot,g=new WeakMap,S=new Set;let _;const b=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(C,v){return R?new OffscreenCanvas(C,v):Nu("canvas")}function T(C,v,X){let G=1;const K=ve(C);if((K.width>X||K.height>X)&&(G=X/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const me=Math.floor(G*K.width),ye=Math.floor(G*K.height);_===void 0&&(_=N(me,ye));const ee=v?N(me,ye):_;return ee.width=me,ee.height=ye,ee.getContext("2d").drawImage(C,0,0,me,ye),ft("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+me+"x"+ye+")."),ee}else return"data"in C&&ft("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function x(C){return C.generateMipmaps}function U(C){a.generateMipmap(C)}function L(C){return C.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?a.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function M(C,v,X,G,K,me=!1){if(C!==null){if(a[C]!==void 0)return a[C];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ye;G&&(ye=e.get("EXT_texture_norm16"),ye||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=v;if(v===a.RED&&(X===a.FLOAT&&(ee=a.R32F),X===a.HALF_FLOAT&&(ee=a.R16F),X===a.UNSIGNED_BYTE&&(ee=a.R8),X===a.UNSIGNED_SHORT&&ye&&(ee=ye.R16_EXT),X===a.SHORT&&ye&&(ee=ye.R16_SNORM_EXT)),v===a.RED_INTEGER&&(X===a.UNSIGNED_BYTE&&(ee=a.R8UI),X===a.UNSIGNED_SHORT&&(ee=a.R16UI),X===a.UNSIGNED_INT&&(ee=a.R32UI),X===a.BYTE&&(ee=a.R8I),X===a.SHORT&&(ee=a.R16I),X===a.INT&&(ee=a.R32I)),v===a.RG&&(X===a.FLOAT&&(ee=a.RG32F),X===a.HALF_FLOAT&&(ee=a.RG16F),X===a.UNSIGNED_BYTE&&(ee=a.RG8),X===a.UNSIGNED_SHORT&&ye&&(ee=ye.RG16_EXT),X===a.SHORT&&ye&&(ee=ye.RG16_SNORM_EXT)),v===a.RG_INTEGER&&(X===a.UNSIGNED_BYTE&&(ee=a.RG8UI),X===a.UNSIGNED_SHORT&&(ee=a.RG16UI),X===a.UNSIGNED_INT&&(ee=a.RG32UI),X===a.BYTE&&(ee=a.RG8I),X===a.SHORT&&(ee=a.RG16I),X===a.INT&&(ee=a.RG32I)),v===a.RGB_INTEGER&&(X===a.UNSIGNED_BYTE&&(ee=a.RGB8UI),X===a.UNSIGNED_SHORT&&(ee=a.RGB16UI),X===a.UNSIGNED_INT&&(ee=a.RGB32UI),X===a.BYTE&&(ee=a.RGB8I),X===a.SHORT&&(ee=a.RGB16I),X===a.INT&&(ee=a.RGB32I)),v===a.RGBA_INTEGER&&(X===a.UNSIGNED_BYTE&&(ee=a.RGBA8UI),X===a.UNSIGNED_SHORT&&(ee=a.RGBA16UI),X===a.UNSIGNED_INT&&(ee=a.RGBA32UI),X===a.BYTE&&(ee=a.RGBA8I),X===a.SHORT&&(ee=a.RGBA16I),X===a.INT&&(ee=a.RGBA32I)),v===a.RGB&&(X===a.UNSIGNED_SHORT&&ye&&(ee=ye.RGB16_EXT),X===a.SHORT&&ye&&(ee=ye.RGB16_SNORM_EXT),X===a.UNSIGNED_INT_5_9_9_9_REV&&(ee=a.RGB9_E5),X===a.UNSIGNED_INT_10F_11F_11F_REV&&(ee=a.R11F_G11F_B10F)),v===a.RGBA){const ae=me?Du:Lt.getTransfer(K);X===a.FLOAT&&(ee=a.RGBA32F),X===a.HALF_FLOAT&&(ee=a.RGBA16F),X===a.UNSIGNED_BYTE&&(ee=ae===Qt?a.SRGB8_ALPHA8:a.RGBA8),X===a.UNSIGNED_SHORT&&ye&&(ee=ye.RGBA16_EXT),X===a.SHORT&&ye&&(ee=ye.RGBA16_SNORM_EXT),X===a.UNSIGNED_SHORT_4_4_4_4&&(ee=a.RGBA4),X===a.UNSIGNED_SHORT_5_5_5_1&&(ee=a.RGB5_A1)}return(ee===a.R16F||ee===a.R32F||ee===a.RG16F||ee===a.RG32F||ee===a.RGBA16F||ee===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function I(C,v){let X;return C?v===null||v===da||v===Uo?X=a.DEPTH24_STENCIL8:v===oa?X=a.DEPTH32F_STENCIL8:v===No&&(X=a.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===da||v===Uo?X=a.DEPTH_COMPONENT24:v===oa?X=a.DEPTH_COMPONENT32F:v===No&&(X=a.DEPTH_COMPONENT16),X}function P(C,v){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==qn&&C.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function F(C){const v=C.target;v.removeEventListener("dispose",F),O(v),v.isVideoTexture&&g.delete(v),v.isHTMLTexture&&S.delete(v)}function A(C){const v=C.target;v.removeEventListener("dispose",A),k(v)}function O(C){const v=r.get(C);if(v.__webglInit===void 0)return;const X=C.source,G=b.get(X);if(G){const K=G[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&q(C),Object.keys(G).length===0&&b.delete(X)}r.remove(C)}function q(C){const v=r.get(C);a.deleteTexture(v.__webglTexture);const X=C.source,G=b.get(X);delete G[v.__cacheKey],f.memory.textures--}function k(C){const v=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let K=0;K<v.__webglFramebuffer[G].length;K++)a.deleteFramebuffer(v.__webglFramebuffer[G][K]);else a.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&a.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)a.deleteFramebuffer(v.__webglFramebuffer[G]);else a.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&a.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&a.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&a.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&a.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const X=C.textures;for(let G=0,K=X.length;G<K;G++){const me=r.get(X[G]);me.__webglTexture&&(a.deleteTexture(me.__webglTexture),f.memory.textures--),r.remove(X[G])}r.remove(C)}let j=0;function pe(){j=0}function he(){return j}function ie(C){j=C}function H(){const C=j;return C>=o.maxTextures&&ft("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),j+=1,C}function W(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function re(C,v){const X=r.get(C);if(C.isVideoTexture&&Q(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){const G=C.image;if(G===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(X,C,v);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,X.__webglTexture,a.TEXTURE0+v)}function Se(C,v){const X=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Ge(X,C,v);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,X.__webglTexture,a.TEXTURE0+v)}function Ee(C,v){const X=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Ge(X,C,v);return}n.bindTexture(a.TEXTURE_3D,X.__webglTexture,a.TEXTURE0+v)}function z(C,v){const X=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&X.__version!==C.version){st(X,C,v);return}n.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture,a.TEXTURE0+v)}const J={[qh]:a.REPEAT,[ka]:a.CLAMP_TO_EDGE,[Zh]:a.MIRRORED_REPEAT},Re={[qn]:a.NEAREST,[SE]:a.NEAREST_MIPMAP_NEAREST,[qc]:a.NEAREST_MIPMAP_LINEAR,[Bn]:a.LINEAR,[th]:a.LINEAR_MIPMAP_NEAREST,[cr]:a.LINEAR_MIPMAP_LINEAR},Oe={[bE]:a.NEVER,[wE]:a.ALWAYS,[TE]:a.LESS,[Jp]:a.LEQUAL,[AE]:a.EQUAL,[$p]:a.GEQUAL,[RE]:a.GREATER,[CE]:a.NOTEQUAL};function Fe(C,v){if(v.type===oa&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bn||v.magFilter===th||v.magFilter===qc||v.magFilter===cr||v.minFilter===Bn||v.minFilter===th||v.minFilter===qc||v.minFilter===cr)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(C,a.TEXTURE_WRAP_S,J[v.wrapS]),a.texParameteri(C,a.TEXTURE_WRAP_T,J[v.wrapT]),(C===a.TEXTURE_3D||C===a.TEXTURE_2D_ARRAY)&&a.texParameteri(C,a.TEXTURE_WRAP_R,J[v.wrapR]),a.texParameteri(C,a.TEXTURE_MAG_FILTER,Re[v.magFilter]),a.texParameteri(C,a.TEXTURE_MIN_FILTER,Re[v.minFilter]),v.compareFunction&&(a.texParameteri(C,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(C,a.TEXTURE_COMPARE_FUNC,Oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qn||v.minFilter!==qc&&v.minFilter!==cr||v.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");a.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,o.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function se(C,v){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",F));const G=v.source;let K=b.get(G);K===void 0&&(K={},b.set(G,K));const me=W(v);if(me!==C.__cacheKey){K[me]===void 0&&(K[me]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,X=!0),K[me].usedTimes++;const ye=K[C.__cacheKey];ye!==void 0&&(K[C.__cacheKey].usedTimes--,ye.usedTimes===0&&q(v)),C.__cacheKey=me,C.__webglTexture=K[me].texture}return X}function Te(C,v,X){return Math.floor(Math.floor(C/X)/v)}function Ce(C,v,X,G){const me=C.updateRanges;if(me.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,v.width,v.height,X,G,v.data);else{me.sort((Ue,Le)=>Ue.start-Le.start);let ye=0;for(let Ue=1;Ue<me.length;Ue++){const Le=me[ye],Ne=me[Ue],ze=Le.start+Le.count,Ve=Te(Ne.start,v.width,4),nt=Te(Le.start,v.width,4);Ne.start<=ze+1&&Ve===nt&&Te(Ne.start+Ne.count-1,v.width,4)===Ve?Le.count=Math.max(Le.count,Ne.start+Ne.count-Le.start):(++ye,me[ye]=Ne)}me.length=ye+1;const ee=n.getParameter(a.UNPACK_ROW_LENGTH),ae=n.getParameter(a.UNPACK_SKIP_PIXELS),ge=n.getParameter(a.UNPACK_SKIP_ROWS);n.pixelStorei(a.UNPACK_ROW_LENGTH,v.width);for(let Ue=0,Le=me.length;Ue<Le;Ue++){const Ne=me[Ue],ze=Math.floor(Ne.start/4),Ve=Math.ceil(Ne.count/4),nt=ze%v.width,Y=Math.floor(ze/v.width),Ie=Ve,xe=1;n.pixelStorei(a.UNPACK_SKIP_PIXELS,nt),n.pixelStorei(a.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(a.TEXTURE_2D,0,nt,Y,Ie,xe,X,G,v.data)}C.clearUpdateRanges(),n.pixelStorei(a.UNPACK_ROW_LENGTH,ee),n.pixelStorei(a.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(a.UNPACK_SKIP_ROWS,ge)}}function Ge(C,v,X){let G=a.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=a.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=a.TEXTURE_3D);const K=se(C,v),me=v.source;n.bindTexture(G,C.__webglTexture,a.TEXTURE0+X);const ye=r.get(me);if(me.version!==ye.__version||K===!0){if(n.activeTexture(a.TEXTURE0+X),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const xe=Lt.getPrimaries(Lt.workingColorSpace),Pe=v.colorSpace===Cs?null:Lt.getPrimaries(v.colorSpace),He=v.colorSpace===Cs||xe===Pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}n.pixelStorei(a.UNPACK_ALIGNMENT,v.unpackAlignment);let ae=T(v.image,!1,o.maxTextureSize);ae=Dt(v,ae);const ge=c.convert(v.format,v.colorSpace),Ue=c.convert(v.type);let Le=M(v.internalFormat,ge,Ue,v.normalized,v.colorSpace,v.isVideoTexture);Fe(G,v);let Ne;const ze=v.mipmaps,Ve=v.isVideoTexture!==!0,nt=ye.__version===void 0||K===!0,Y=me.dataReady,Ie=P(v,ae);if(v.isDepthTexture)Le=I(v.format===ur,v.type),nt&&(Ve?n.texStorage2D(a.TEXTURE_2D,1,Le,ae.width,ae.height):n.texImage2D(a.TEXTURE_2D,0,Le,ae.width,ae.height,0,ge,Ue,null));else if(v.isDataTexture)if(ze.length>0){Ve&&nt&&n.texStorage2D(a.TEXTURE_2D,Ie,Le,ze[0].width,ze[0].height);for(let xe=0,Pe=ze.length;xe<Pe;xe++)Ne=ze[xe],Ve?Y&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,ge,Ue,Ne.data):n.texImage2D(a.TEXTURE_2D,xe,Le,Ne.width,Ne.height,0,ge,Ue,Ne.data);v.generateMipmaps=!1}else Ve?(nt&&n.texStorage2D(a.TEXTURE_2D,Ie,Le,ae.width,ae.height),Y&&Ce(v,ae,ge,Ue)):n.texImage2D(a.TEXTURE_2D,0,Le,ae.width,ae.height,0,ge,Ue,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&nt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,Le,ze[0].width,ze[0].height,ae.depth);for(let xe=0,Pe=ze.length;xe<Pe;xe++)if(Ne=ze[xe],v.format!==ji)if(ge!==null)if(Ve){if(Y)if(v.layerUpdates.size>0){const He=Gv(Ne.width,Ne.height,v.format,v.type);for(const we of v.layerUpdates){const $e=Ne.data.subarray(we*He/Ne.data.BYTES_PER_ELEMENT,(we+1)*He/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,we,Ne.width,Ne.height,1,ge,$e)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,ae.depth,ge,Ne.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,Le,Ne.width,Ne.height,ae.depth,0,Ne.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?Y&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,ae.depth,ge,Ue,Ne.data):n.texImage3D(a.TEXTURE_2D_ARRAY,xe,Le,Ne.width,Ne.height,ae.depth,0,ge,Ue,Ne.data)}else{Ve&&nt&&n.texStorage2D(a.TEXTURE_2D,Ie,Le,ze[0].width,ze[0].height);for(let xe=0,Pe=ze.length;xe<Pe;xe++)Ne=ze[xe],v.format!==ji?ge!==null?Ve?Y&&n.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,ge,Ne.data):n.compressedTexImage2D(a.TEXTURE_2D,xe,Le,Ne.width,Ne.height,0,Ne.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?Y&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,ge,Ue,Ne.data):n.texImage2D(a.TEXTURE_2D,xe,Le,Ne.width,Ne.height,0,ge,Ue,Ne.data)}else if(v.isDataArrayTexture)if(Ve){if(nt&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,Le,ae.width,ae.height,ae.depth),Y)if(v.layerUpdates.size>0){const xe=Gv(ae.width,ae.height,v.format,v.type);for(const Pe of v.layerUpdates){const He=ae.data.subarray(Pe*xe/ae.data.BYTES_PER_ELEMENT,(Pe+1)*xe/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Pe,ae.width,ae.height,1,ge,Ue,He)}v.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,Ue,ae.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,ge,Ue,ae.data);else if(v.isData3DTexture)Ve?(nt&&n.texStorage3D(a.TEXTURE_3D,Ie,Le,ae.width,ae.height,ae.depth),Y&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,Ue,ae.data)):n.texImage3D(a.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,ge,Ue,ae.data);else if(v.isFramebufferTexture){if(nt)if(Ve)n.texStorage2D(a.TEXTURE_2D,Ie,Le,ae.width,ae.height);else{let xe=ae.width,Pe=ae.height;for(let He=0;He<Ie;He++)n.texImage2D(a.TEXTURE_2D,He,Le,xe,Pe,0,ge,Ue,null),xe>>=1,Pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in a){const xe=a.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ae.parentNode!==xe){xe.appendChild(ae),S.add(v),xe.onpaint=Pe=>{const He=Pe.changedElements;for(const we of S)He.includes(we.image)&&(we.needsUpdate=!0)},xe.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,ae);else{const He=a.RGBA,we=a.RGBA,$e=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,He,we,$e,ae)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ve&&nt){const xe=ve(ze[0]);n.texStorage2D(a.TEXTURE_2D,Ie,Le,xe.width,xe.height)}for(let xe=0,Pe=ze.length;xe<Pe;xe++)Ne=ze[xe],Ve?Y&&n.texSubImage2D(a.TEXTURE_2D,xe,0,0,ge,Ue,Ne):n.texImage2D(a.TEXTURE_2D,xe,Le,ge,Ue,Ne);v.generateMipmaps=!1}else if(Ve){if(nt){const xe=ve(ae);n.texStorage2D(a.TEXTURE_2D,Ie,Le,xe.width,xe.height)}Y&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,ge,Ue,ae)}else n.texImage2D(a.TEXTURE_2D,0,Le,ge,Ue,ae);x(v)&&U(G),ye.__version=me.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function st(C,v,X){if(v.image.length!==6)return;const G=se(C,v),K=v.source;n.bindTexture(a.TEXTURE_CUBE_MAP,C.__webglTexture,a.TEXTURE0+X);const me=r.get(K);if(K.version!==me.__version||G===!0){n.activeTexture(a.TEXTURE0+X);const ye=Lt.getPrimaries(Lt.workingColorSpace),ee=v.colorSpace===Cs?null:Lt.getPrimaries(v.colorSpace),ae=v.colorSpace===Cs||ye===ee?a.NONE:a.BROWSER_DEFAULT_WEBGL;n.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(a.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ge=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,Le=[];for(let we=0;we<6;we++)!ge&&!Ue?Le[we]=T(v.image[we],!0,o.maxCubemapSize):Le[we]=Ue?v.image[we].image:v.image[we],Le[we]=Dt(v,Le[we]);const Ne=Le[0],ze=c.convert(v.format,v.colorSpace),Ve=c.convert(v.type),nt=M(v.internalFormat,ze,Ve,v.normalized,v.colorSpace),Y=v.isVideoTexture!==!0,Ie=me.__version===void 0||G===!0,xe=K.dataReady;let Pe=P(v,Ne);Fe(a.TEXTURE_CUBE_MAP,v);let He;if(ge){Y&&Ie&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,nt,Ne.width,Ne.height);for(let we=0;we<6;we++){He=Le[we].mipmaps;for(let $e=0;$e<He.length;$e++){const Ze=He[$e];v.format!==ji?ze!==null?Y?xe&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,0,0,Ze.width,Ze.height,ze,Ze.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,nt,Ze.width,Ze.height,0,Ze.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,0,0,Ze.width,Ze.height,ze,Ve,Ze.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e,nt,Ze.width,Ze.height,0,ze,Ve,Ze.data)}}}else{if(He=v.mipmaps,Y&&Ie){He.length>0&&Pe++;const we=ve(Le[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,nt,we.width,we.height)}for(let we=0;we<6;we++)if(Ue){Y?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Le[we].width,Le[we].height,ze,Ve,Le[we].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,nt,Le[we].width,Le[we].height,0,ze,Ve,Le[we].data);for(let $e=0;$e<He.length;$e++){const cn=He[$e].image[we].image;Y?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,0,0,cn.width,cn.height,ze,Ve,cn.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,nt,cn.width,cn.height,0,ze,Ve,cn.data)}}else{Y?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ze,Ve,Le[we]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,nt,ze,Ve,Le[we]);for(let $e=0;$e<He.length;$e++){const Ze=He[$e];Y?xe&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,0,0,ze,Ve,Ze.image[we]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,$e+1,nt,ze,Ve,Ze.image[we])}}}x(v)&&U(a.TEXTURE_CUBE_MAP),me.__version=K.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function je(C,v,X,G,K,me){const ye=c.convert(X.format,X.colorSpace),ee=c.convert(X.type),ae=M(X.internalFormat,ye,ee,X.normalized,X.colorSpace),ge=r.get(v),Ue=r.get(X);if(Ue.__renderTarget=v,!ge.__hasExternalTextures){const Le=Math.max(1,v.width>>me),Ne=Math.max(1,v.height>>me);K===a.TEXTURE_3D||K===a.TEXTURE_2D_ARRAY?n.texImage3D(K,me,ae,Le,Ne,v.depth,0,ye,ee,null):n.texImage2D(K,me,ae,Le,Ne,0,ye,ee,null)}n.bindFramebuffer(a.FRAMEBUFFER,C),an(v)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,G,K,Ue.__webglTexture,0,Bt(v)):(K===a.TEXTURE_2D||K>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,G,K,Ue.__webglTexture,me),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ot(C,v,X){if(a.bindRenderbuffer(a.RENDERBUFFER,C),v.depthBuffer){const G=v.depthTexture,K=G&&G.isDepthTexture?G.type:null,me=I(v.stencilBuffer,K),ye=v.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;an(v)?m.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Bt(v),me,v.width,v.height):X?a.renderbufferStorageMultisample(a.RENDERBUFFER,Bt(v),me,v.width,v.height):a.renderbufferStorage(a.RENDERBUFFER,me,v.width,v.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,C)}else{const G=v.textures;for(let K=0;K<G.length;K++){const me=G[K],ye=c.convert(me.format,me.colorSpace),ee=c.convert(me.type),ae=M(me.internalFormat,ye,ee,me.normalized,me.colorSpace);an(v)?m.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Bt(v),ae,v.width,v.height):X?a.renderbufferStorageMultisample(a.RENDERBUFFER,Bt(v),ae,v.width,v.height):a.renderbufferStorage(a.RENDERBUFFER,ae,v.width,v.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ht(C,v,X){const G=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=r.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",F)),K.__webglTexture===void 0){K.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture),Fe(a.TEXTURE_CUBE_MAP,v.depthTexture);const ge=c.convert(v.depthTexture.format),Ue=c.convert(v.depthTexture.type);let Le;v.depthTexture.format===Ya?Le=a.DEPTH_COMPONENT24:v.depthTexture.format===ur&&(Le=a.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Le,v.width,v.height,0,ge,Ue,null)}}else re(v.depthTexture,0);const me=K.__webglTexture,ye=Bt(v),ee=G?a.TEXTURE_CUBE_MAP_POSITIVE_X+X:a.TEXTURE_2D,ae=v.depthTexture.format===ur?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ya)an(v)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,ee,me,0,ye):a.framebufferTexture2D(a.FRAMEBUFFER,ae,ee,me,0);else if(v.depthTexture.format===ur)an(v)?m.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,ee,me,0,ye):a.framebufferTexture2D(a.FRAMEBUFFER,ae,ee,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(C){const v=r.get(C),X=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const G=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=G}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(X)for(let G=0;G<6;G++)ht(v.__webglFramebuffer[G],C,G);else{const G=C.texture.mipmaps;G&&G.length>0?ht(v.__webglFramebuffer[0],C,0):ht(v.__webglFramebuffer,C,0)}else if(X){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=a.createRenderbuffer(),Ot(v.__webglDepthbuffer[G],C,!1);else{const K=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer[G];a.bindRenderbuffer(a.RENDERBUFFER,me),a.framebufferRenderbuffer(a.FRAMEBUFFER,K,a.RENDERBUFFER,me)}}else{const G=C.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=a.createRenderbuffer(),Ot(v.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=v.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,me),a.framebufferRenderbuffer(a.FRAMEBUFFER,K,a.RENDERBUFFER,me)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function ct(C,v,X){const G=r.get(C);v!==void 0&&je(G.__webglFramebuffer,C,C.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),X!==void 0&&dt(C)}function Be(C){const v=C.texture,X=r.get(C),G=r.get(v);C.addEventListener("dispose",A);const K=C.textures,me=C.isWebGLCubeRenderTarget===!0,ye=K.length>1;if(ye||(G.__webglTexture===void 0&&(G.__webglTexture=a.createTexture()),G.__version=v.version,f.memory.textures++),me){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let ae=0;ae<v.mipmaps.length;ae++)X.__webglFramebuffer[ee][ae]=a.createFramebuffer()}else X.__webglFramebuffer[ee]=a.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<v.mipmaps.length;ee++)X.__webglFramebuffer[ee]=a.createFramebuffer()}else X.__webglFramebuffer=a.createFramebuffer();if(ye)for(let ee=0,ae=K.length;ee<ae;ee++){const ge=r.get(K[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=a.createTexture(),f.memory.textures++)}if(C.samples>0&&an(C)===!1){X.__webglMultisampledFramebuffer=a.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<K.length;ee++){const ae=K[ee];X.__webglColorRenderbuffer[ee]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);const ge=c.convert(ae.format,ae.colorSpace),Ue=c.convert(ae.type),Le=M(ae.internalFormat,ge,Ue,ae.normalized,ae.colorSpace,C.isXRRenderTarget===!0),Ne=Bt(C);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ne,Le,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ee,a.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}a.bindRenderbuffer(a.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=a.createRenderbuffer(),Ot(X.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(me){n.bindTexture(a.TEXTURE_CUBE_MAP,G.__webglTexture),Fe(a.TEXTURE_CUBE_MAP,v);for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)je(X.__webglFramebuffer[ee][ae],C,v,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae);else je(X.__webglFramebuffer[ee],C,v,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);x(v)&&U(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let ee=0,ae=K.length;ee<ae;ee++){const ge=K[ee],Ue=r.get(ge);let Le=a.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Le=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Le,Ue.__webglTexture),Fe(Le,ge),je(X.__webglFramebuffer,C,ge,a.COLOR_ATTACHMENT0+ee,Le,0),x(ge)&&U(Le)}n.unbindTexture()}else{let ee=a.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(ee,G.__webglTexture),Fe(ee,v),v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)je(X.__webglFramebuffer[ae],C,v,a.COLOR_ATTACHMENT0,ee,ae);else je(X.__webglFramebuffer,C,v,a.COLOR_ATTACHMENT0,ee,0);x(v)&&U(ee),n.unbindTexture()}C.depthBuffer&&dt(C)}function vt(C){const v=C.textures;for(let X=0,G=v.length;X<G;X++){const K=v[X];if(x(K)){const me=L(C),ye=r.get(K).__webglTexture;n.bindTexture(me,ye),U(me),n.unbindTexture()}}}const Jt=[],Vt=[];function on(C){if(C.samples>0){if(an(C)===!1){const v=C.textures,X=C.width,G=C.height;let K=a.COLOR_BUFFER_BIT;const me=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ye=r.get(C),ee=v.length>1;if(ee)for(let ge=0;ge<v.length;ge++)n.bindFramebuffer(a.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,ye.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const ae=C.texture.mipmaps;ae&&ae.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=a.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=a.STENCIL_BUFFER_BIT)),ee){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ye.__webglColorRenderbuffer[ge]);const Ue=r.get(v[ge]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ue,0)}a.blitFramebuffer(0,0,X,G,0,0,X,G,K,a.NEAREST),p===!0&&(Jt.length=0,Vt.length=0,Jt.push(a.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Jt.push(me),Vt.push(me),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Vt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Jt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<v.length;ge++){n.bindFramebuffer(a.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,ye.__webglColorRenderbuffer[ge]);const Ue=r.get(v[ge]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,ye.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.TEXTURE_2D,Ue,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const v=C.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[v])}}}function Bt(C){return Math.min(o.maxSamples,C.samples)}function an(C){const v=r.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Q(C){const v=f.render.frame;g.get(C)!==v&&(g.set(C,v),C.update())}function Dt(C,v){const X=C.colorSpace,G=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==wu&&X!==Cs&&(Lt.getTransfer(X)===Qt?(G!==ji||K!==Ri)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",X)),v}function ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=pe,this.getTextureUnits=he,this.setTextureUnits=ie,this.setTexture2D=re,this.setTexture2DArray=Se,this.setTexture3D=Ee,this.setTextureCube=z,this.rebindTextures=ct,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=je,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ER(a,e){function n(r,o=Cs){let c;const f=Lt.getTransfer(o);if(r===Ri)return a.UNSIGNED_BYTE;if(r===qp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Zp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Oy)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Iy)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Uy)return a.BYTE;if(r===Ly)return a.SHORT;if(r===No)return a.UNSIGNED_SHORT;if(r===Yp)return a.INT;if(r===da)return a.UNSIGNED_INT;if(r===oa)return a.FLOAT;if(r===Wa)return a.HALF_FLOAT;if(r===Py)return a.ALPHA;if(r===zy)return a.RGB;if(r===ji)return a.RGBA;if(r===Ya)return a.DEPTH_COMPONENT;if(r===ur)return a.DEPTH_STENCIL;if(r===By)return a.RED;if(r===Kp)return a.RED_INTEGER;if(r===hr)return a.RG;if(r===Qp)return a.RG_INTEGER;if(r===jp)return a.RGBA_INTEGER;if(r===Su||r===Mu||r===Eu||r===bu)if(f===Qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Su)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Su)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kh||r===Qh||r===jh||r===Jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Kh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$h||r===ep||r===tp||r===np||r===ip||r===Ru||r===ap)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===$h||r===ep)return f===Qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===tp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===np)return c.COMPRESSED_R11_EAC;if(r===ip)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Ru)return c.COMPRESSED_RG11_EAC;if(r===ap)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===sp||r===rp||r===lp||r===op||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===sp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===op)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===up)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_p)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vp)return f===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yp||r===xp||r===Sp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===yp)return f===Qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mp||r===Ep||r===Cu||r===bp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Mp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Uo?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const bR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TR=`
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

}`;class AR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new qy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ha({vertexShader:bR,fragmentShader:TR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wn(new fr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RR extends Ps{constructor(e,n){super();const r=this;let o=null,c=1,f=null,m="local-floor",p=1,h=null,g=null,S=null,_=null,b=null,R=null;const N=typeof XRWebGLBinding<"u",T=new AR,x={},U=n.getContextAttributes();let L=null,M=null;const I=[],P=[],F=new ot;let A=null;const O=new Fi;O.viewport=new vn;const q=new Fi;q.viewport=new vn;const k=[O,q],j=new Ib;let pe=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Te=I[se];return Te===void 0&&(Te=new lh,I[se]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(se){let Te=I[se];return Te===void 0&&(Te=new lh,I[se]=Te),Te.getGripSpace()},this.getHand=function(se){let Te=I[se];return Te===void 0&&(Te=new lh,I[se]=Te),Te.getHandSpace()};function ie(se){const Te=P.indexOf(se.inputSource);if(Te===-1)return;const Ce=I[Te];Ce!==void 0&&(Ce.update(se.inputSource,se.frame,h||f),Ce.dispatchEvent({type:se.type,data:se.inputSource}))}function H(){o.removeEventListener("select",ie),o.removeEventListener("selectstart",ie),o.removeEventListener("selectend",ie),o.removeEventListener("squeeze",ie),o.removeEventListener("squeezestart",ie),o.removeEventListener("squeezeend",ie),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",W);for(let se=0;se<I.length;se++){const Te=P[se];Te!==null&&(P[se]=null,I[se].disconnect(Te))}pe=null,he=null,T.reset();for(const se in x)delete x[se];e.setRenderTarget(L),b=null,_=null,S=null,o=null,M=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){m=se,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return S===null&&N&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return R},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",ie),o.addEventListener("selectstart",ie),o.addEventListener("selectend",ie),o.addEventListener("squeeze",ie),o.addEventListener("squeezestart",ie),o.addEventListener("squeezeend",ie),o.addEventListener("end",H),o.addEventListener("inputsourceschange",W),U.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(F),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ge=null,st=null;U.depth&&(st=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=U.stencil?ur:Ya,Ge=U.stencil?Uo:da);const je={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:c};S=this.getBinding(),_=S.createProjectionLayer(je),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),M=new fa(_.textureWidth,_.textureHeight,{format:ji,type:Ri,depthTexture:new xl(_.textureWidth,_.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ce={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,Ce),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),M=new fa(b.framebufferWidth,b.framebufferHeight,{format:ji,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(p),h=null,f=await o.requestReferenceSpace(m),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function W(se){for(let Te=0;Te<se.removed.length;Te++){const Ce=se.removed[Te],Ge=P.indexOf(Ce);Ge>=0&&(P[Ge]=null,I[Ge].disconnect(Ce))}for(let Te=0;Te<se.added.length;Te++){const Ce=se.added[Te];let Ge=P.indexOf(Ce);if(Ge===-1){for(let je=0;je<I.length;je++)if(je>=P.length){P.push(Ce),Ge=je;break}else if(P[je]===null){P[je]=Ce,Ge=je;break}if(Ge===-1)break}const st=I[Ge];st&&st.connect(Ce)}}const re=new te,Se=new te;function Ee(se,Te,Ce){re.setFromMatrixPosition(Te.matrixWorld),Se.setFromMatrixPosition(Ce.matrixWorld);const Ge=re.distanceTo(Se),st=Te.projectionMatrix.elements,je=Ce.projectionMatrix.elements,Ot=st[14]/(st[10]-1),ht=st[14]/(st[10]+1),dt=(st[9]+1)/st[5],ct=(st[9]-1)/st[5],Be=(st[8]-1)/st[0],vt=(je[8]+1)/je[0],Jt=Ot*Be,Vt=Ot*vt,on=Ge/(-Be+vt),Bt=on*-Be;if(Te.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Bt),se.translateZ(on),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),st[10]===-1)se.projectionMatrix.copy(Te.projectionMatrix),se.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const an=Ot+on,Q=ht+on,Dt=Jt-Bt,ve=Vt+(Ge-Bt),C=dt*ht/Q*an,v=ct*ht/Q*an;se.projectionMatrix.makePerspective(Dt,ve,C,v,an,Q),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function z(se,Te){Te===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Te.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let Te=se.near,Ce=se.far;T.texture!==null&&(T.depthNear>0&&(Te=T.depthNear),T.depthFar>0&&(Ce=T.depthFar)),j.near=q.near=O.near=Te,j.far=q.far=O.far=Ce,(pe!==j.near||he!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),pe=j.near,he=j.far),j.layers.mask=se.layers.mask|6,O.layers.mask=j.layers.mask&-5,q.layers.mask=j.layers.mask&-3;const Ge=se.parent,st=j.cameras;z(j,Ge);for(let je=0;je<st.length;je++)z(st[je],Ge);st.length===2?Ee(j,O,q):j.projectionMatrix.copy(O.projectionMatrix),J(se,j,Ge)};function J(se,Te,Ce){Ce===null?se.matrix.copy(Te.matrixWorld):(se.matrix.copy(Ce.matrixWorld),se.matrix.invert(),se.matrix.multiply(Te.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Te.projectionMatrix),se.projectionMatrixInverse.copy(Te.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Oo*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(_===null&&b===null))return p},this.setFoveation=function(se){p=se,_!==null&&(_.fixedFoveation=se),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=se)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(j)},this.getCameraTexture=function(se){return x[se]};let Re=null;function Oe(se,Te){if(g=Te.getViewerPose(h||f),R=Te,g!==null){const Ce=g.views;b!==null&&(e.setRenderTargetFramebuffer(M,b.framebuffer),e.setRenderTarget(M));let Ge=!1;Ce.length!==j.cameras.length&&(j.cameras.length=0,Ge=!0);for(let ht=0;ht<Ce.length;ht++){const dt=Ce[ht];let ct=null;if(b!==null)ct=b.getViewport(dt);else{const vt=S.getViewSubImage(_,dt);ct=vt.viewport,ht===0&&(e.setRenderTargetTextures(M,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(M))}let Be=k[ht];Be===void 0&&(Be=new Fi,Be.layers.enable(ht),Be.viewport=new vn,k[ht]=Be),Be.matrix.fromArray(dt.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(dt.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(ct.x,ct.y,ct.width,ct.height),ht===0&&(j.matrix.copy(Be.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ge===!0&&j.cameras.push(Be)}const st=o.enabledFeatures;if(st&&st.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){S=r.getBinding();const ht=S.getDepthInformation(Ce[0]);ht&&ht.isValid&&ht.texture&&T.init(ht,o.renderState)}if(st&&st.includes("camera-access")&&N){e.state.unbindTexture(),S=r.getBinding();for(let ht=0;ht<Ce.length;ht++){const dt=Ce[ht].camera;if(dt){let ct=x[dt];ct||(ct=new qy,x[dt]=ct);const Be=S.getCameraImage(dt);ct.sourceTexture=Be}}}}for(let Ce=0;Ce<I.length;Ce++){const Ge=P[Ce],st=I[Ce];Ge!==null&&st!==void 0&&st.update(Ge,Te,h||f)}Re&&Re(se,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),R=null}const Fe=new jy;Fe.setAnimationLoop(Oe),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const CR=new _n,ax=new mt;ax.set(-1,0,0,0,1,0,0,0,1);function wR(a,e){function n(T,x){T.matrixAutoUpdate===!0&&T.updateMatrix(),x.value.copy(T.matrix)}function r(T,x){x.color.getRGB(T.fogColor.value,Zy(a)),x.isFog?(T.fogNear.value=x.near,T.fogFar.value=x.far):x.isFogExp2&&(T.fogDensity.value=x.density)}function o(T,x,U,L,M){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(T,x):x.isMeshLambertMaterial?(c(T,x),x.envMap&&(T.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(T,x),S(T,x)):x.isMeshPhongMaterial?(c(T,x),g(T,x),x.envMap&&(T.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(T,x),_(T,x),x.isMeshPhysicalMaterial&&b(T,x,M)):x.isMeshMatcapMaterial?(c(T,x),R(T,x)):x.isMeshDepthMaterial?c(T,x):x.isMeshDistanceMaterial?(c(T,x),N(T,x)):x.isMeshNormalMaterial?c(T,x):x.isLineBasicMaterial?(f(T,x),x.isLineDashedMaterial&&m(T,x)):x.isPointsMaterial?p(T,x,U,L):x.isSpriteMaterial?h(T,x):x.isShadowMaterial?(T.color.value.copy(x.color),T.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(T,x){T.opacity.value=x.opacity,x.color&&T.diffuse.value.copy(x.color),x.emissive&&T.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(T.map.value=x.map,n(x.map,T.mapTransform)),x.alphaMap&&(T.alphaMap.value=x.alphaMap,n(x.alphaMap,T.alphaMapTransform)),x.bumpMap&&(T.bumpMap.value=x.bumpMap,n(x.bumpMap,T.bumpMapTransform),T.bumpScale.value=x.bumpScale,x.side===pi&&(T.bumpScale.value*=-1)),x.normalMap&&(T.normalMap.value=x.normalMap,n(x.normalMap,T.normalMapTransform),T.normalScale.value.copy(x.normalScale),x.side===pi&&T.normalScale.value.negate()),x.displacementMap&&(T.displacementMap.value=x.displacementMap,n(x.displacementMap,T.displacementMapTransform),T.displacementScale.value=x.displacementScale,T.displacementBias.value=x.displacementBias),x.emissiveMap&&(T.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,T.emissiveMapTransform)),x.specularMap&&(T.specularMap.value=x.specularMap,n(x.specularMap,T.specularMapTransform)),x.alphaTest>0&&(T.alphaTest.value=x.alphaTest);const U=e.get(x),L=U.envMap,M=U.envMapRotation;L&&(T.envMap.value=L,T.envMapRotation.value.setFromMatrix4(CR.makeRotationFromEuler(M)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&T.envMapRotation.value.premultiply(ax),T.reflectivity.value=x.reflectivity,T.ior.value=x.ior,T.refractionRatio.value=x.refractionRatio),x.lightMap&&(T.lightMap.value=x.lightMap,T.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,T.lightMapTransform)),x.aoMap&&(T.aoMap.value=x.aoMap,T.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,T.aoMapTransform))}function f(T,x){T.diffuse.value.copy(x.color),T.opacity.value=x.opacity,x.map&&(T.map.value=x.map,n(x.map,T.mapTransform))}function m(T,x){T.dashSize.value=x.dashSize,T.totalSize.value=x.dashSize+x.gapSize,T.scale.value=x.scale}function p(T,x,U,L){T.diffuse.value.copy(x.color),T.opacity.value=x.opacity,T.size.value=x.size*U,T.scale.value=L*.5,x.map&&(T.map.value=x.map,n(x.map,T.uvTransform)),x.alphaMap&&(T.alphaMap.value=x.alphaMap,n(x.alphaMap,T.alphaMapTransform)),x.alphaTest>0&&(T.alphaTest.value=x.alphaTest)}function h(T,x){T.diffuse.value.copy(x.color),T.opacity.value=x.opacity,T.rotation.value=x.rotation,x.map&&(T.map.value=x.map,n(x.map,T.mapTransform)),x.alphaMap&&(T.alphaMap.value=x.alphaMap,n(x.alphaMap,T.alphaMapTransform)),x.alphaTest>0&&(T.alphaTest.value=x.alphaTest)}function g(T,x){T.specular.value.copy(x.specular),T.shininess.value=Math.max(x.shininess,1e-4)}function S(T,x){x.gradientMap&&(T.gradientMap.value=x.gradientMap)}function _(T,x){T.metalness.value=x.metalness,x.metalnessMap&&(T.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,T.metalnessMapTransform)),T.roughness.value=x.roughness,x.roughnessMap&&(T.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,T.roughnessMapTransform)),x.envMap&&(T.envMapIntensity.value=x.envMapIntensity)}function b(T,x,U){T.ior.value=x.ior,x.sheen>0&&(T.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),T.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(T.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,T.sheenColorMapTransform)),x.sheenRoughnessMap&&(T.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,T.sheenRoughnessMapTransform))),x.clearcoat>0&&(T.clearcoat.value=x.clearcoat,T.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(T.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,T.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(T.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===pi&&T.clearcoatNormalScale.value.negate())),x.dispersion>0&&(T.dispersion.value=x.dispersion),x.iridescence>0&&(T.iridescence.value=x.iridescence,T.iridescenceIOR.value=x.iridescenceIOR,T.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(T.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,T.iridescenceMapTransform)),x.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),x.transmission>0&&(T.transmission.value=x.transmission,T.transmissionSamplerMap.value=U.texture,T.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(T.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,T.transmissionMapTransform)),T.thickness.value=x.thickness,x.thicknessMap&&(T.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=x.attenuationDistance,T.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(T.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(T.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=x.specularIntensity,T.specularColor.value.copy(x.specularColor),x.specularColorMap&&(T.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,T.specularColorMapTransform)),x.specularIntensityMap&&(T.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,T.specularIntensityMapTransform))}function R(T,x){x.matcap&&(T.matcap.value=x.matcap)}function N(T,x){const U=e.get(x).light;T.referencePosition.value.setFromMatrixPosition(U.matrixWorld),T.nearDistance.value=U.shadow.camera.near,T.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function DR(a,e,n,r){let o={},c={},f=[];const m=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(M,I){const P=I.program;r.uniformBlockBinding(M,P)}function h(M,I){let P=o[M.id];P===void 0&&(T(M),P=g(M),o[M.id]=P,M.addEventListener("dispose",U));const F=I.program;r.updateUBOMapping(M,F);const A=e.render.frame;c[M.id]!==A&&(_(M),c[M.id]=A)}function g(M){const I=S();M.__bindingPointIndex=I;const P=a.createBuffer(),F=M.__size,A=M.usage;return a.bindBuffer(a.UNIFORM_BUFFER,P),a.bufferData(a.UNIFORM_BUFFER,F,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,I,P),P}function S(){for(let M=0;M<m;M++)if(f.indexOf(M)===-1)return f.push(M),M;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(M){const I=o[M.id],P=M.uniforms,F=M.__cache;a.bindBuffer(a.UNIFORM_BUFFER,I);for(let A=0,O=P.length;A<O;A++){const q=P[A];if(Array.isArray(q))for(let k=0,j=q.length;k<j;k++)b(q[k],A,k,F);else b(q,A,0,F)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function b(M,I,P,F){if(N(M,I,P,F)===!0){const A=M.__offset,O=M.value;if(Array.isArray(O)){let q=0;for(let k=0;k<O.length;k++){const j=O[k],pe=x(j);R(j,M.__data,q),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(q+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(O,M.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,A,M.__data)}}function R(M,I,P){typeof M=="number"||typeof M=="boolean"?I[0]=M:M.isMatrix3?(I[0]=M.elements[0],I[1]=M.elements[1],I[2]=M.elements[2],I[3]=0,I[4]=M.elements[3],I[5]=M.elements[4],I[6]=M.elements[5],I[7]=0,I[8]=M.elements[6],I[9]=M.elements[7],I[10]=M.elements[8],I[11]=0):ArrayBuffer.isView(M)?I.set(new M.constructor(M.buffer,M.byteOffset,I.length)):M.toArray(I,P)}function N(M,I,P,F){const A=M.value,O=I+"_"+P;if(F[O]===void 0)return typeof A=="number"||typeof A=="boolean"?F[O]=A:ArrayBuffer.isView(A)?F[O]=A.slice():F[O]=A.clone(),!0;{const q=F[O];if(typeof A=="number"||typeof A=="boolean"){if(q!==A)return F[O]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(q.equals(A)===!1)return q.copy(A),!0}}return!1}function T(M){const I=M.uniforms;let P=0;const F=16;for(let O=0,q=I.length;O<q;O++){const k=Array.isArray(I[O])?I[O]:[I[O]];for(let j=0,pe=k.length;j<pe;j++){const he=k[j],ie=Array.isArray(he.value)?he.value:[he.value];for(let H=0,W=ie.length;H<W;H++){const re=ie[H],Se=x(re),Ee=P%F,z=Ee%Se.boundary,J=Ee+z;P+=z,J!==0&&F-J<Se.storage&&(P+=F-J),he.__data=new Float32Array(Se.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=P,P+=Se.storage}}}const A=P%F;return A>0&&(P+=F-A),M.__size=P,M.__cache={},this}function x(M){const I={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(I.boundary=4,I.storage=4):M.isVector2?(I.boundary=8,I.storage=8):M.isVector3||M.isColor?(I.boundary=16,I.storage=12):M.isVector4?(I.boundary=16,I.storage=16):M.isMatrix3?(I.boundary=48,I.storage=48):M.isMatrix4?(I.boundary=64,I.storage=64):M.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(I.boundary=16,I.storage=M.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",M),I}function U(M){const I=M.target;I.removeEventListener("dispose",U);const P=f.indexOf(I.__bindingPointIndex);f.splice(P,1),a.deleteBuffer(o[I.id]),delete o[I.id],delete c[I.id]}function L(){for(const M in o)a.deleteBuffer(o[M]);f=[],o={},c={}}return{bind:p,update:h,dispose:L}}const NR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sa=null;function UR(){return sa===null&&(sa=new _b(NR,16,16,hr,Wa),sa.name="DFG_LUT",sa.minFilter=Bn,sa.magFilter=Bn,sa.wrapS=ka,sa.wrapT=ka,sa.generateMipmaps=!1,sa.needsUpdate=!0),sa}class LR{constructor(e={}){const{canvas:n=NE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:m=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:b=Ri}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=f;const N=b,T=new Set([jp,Qp,Kp]),x=new Set([Ri,da,No,Uo,qp,Zp]),U=new Uint32Array(4),L=new Int32Array(4),M=new te;let I=null,P=null;const F=[],A=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let k=!1,j=null,pe=null,he=null,ie=null;this._outputColorSpace=hi;let H=0,W=0,re=null,Se=-1,Ee=null;const z=new vn,J=new vn;let Re=null;const Oe=new At(0);let Fe=0,se=n.width,Te=n.height,Ce=1,Ge=null,st=null;const je=new vn(0,0,se,Te),Ot=new vn(0,0,se,Te);let ht=!1;const dt=new rm;let ct=!1,Be=!1;const vt=new _n,Jt=new te,Vt=new vn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function an(){return re===null?Ce:1}let Q=r;function Dt(w,$){return n.getContext(w,$)}try{const w={alpha:!0,depth:o,stencil:c,antialias:m,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xp}`),n.addEventListener("webglcontextlost",cn,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",ei,!1),Q===null){const $="webgl2";if(Q=Dt($,w),Q===null)throw Dt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Ut("WebGLRenderer: "+w.message),w}let ve,C,v,X,G,K,me,ye,ee,ae,ge,Ue,Le,Ne,ze,Ve,nt,Y,Ie,xe,Pe,He,we;function $e(){ve=new UA(Q),ve.init(),Pe=new ER(Q,ve),C=new bA(Q,ve,e,Pe),v=new SR(Q,ve),C.reversedDepthBuffer&&_&&v.buffers.depth.setReversed(!0),pe=Q.createFramebuffer(),he=Q.createFramebuffer(),ie=Q.createFramebuffer(),X=new IA(Q),G=new lR,K=new MR(Q,ve,v,G,C,Pe,X),me=new NA(q),ye=new Fb(Q),He=new MA(Q,ye),ee=new LA(Q,ye,X,He),ae=new zA(Q,ee,ye,He,X),Y=new PA(Q,C,K),ze=new TA(G),ge=new rR(q,me,ve,C,He,ze),Ue=new wR(q,G),Le=new cR,Ne=new mR(ve),nt=new SA(q,me,v,ae,R,p),Ve=new xR(q,ae,C),we=new DR(Q,X,C,v),Ie=new EA(Q,ve,X),xe=new OA(Q,ve,X),X.programs=ge.programs,q.capabilities=C,q.extensions=ve,q.properties=G,q.renderLists=Le,q.shadowMap=Ve,q.state=v,q.info=X}$e(),N!==Ri&&(O=new FA(N,n.width,n.height,m,o,c));const Ze=new RR(q,Q);this.xr=Ze,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const w=ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(w){w!==void 0&&(Ce=w,this.setSize(se,Te,!1))},this.getSize=function(w){return w.set(se,Te)},this.setSize=function(w,$,fe=!0){if(Ze.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,Te=$,n.width=Math.floor(w*Ce),n.height=Math.floor($*Ce),fe===!0&&(n.style.width=w+"px",n.style.height=$+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(se*Ce,Te*Ce).floor()},this.setDrawingBufferSize=function(w,$,fe){se=w,Te=$,Ce=fe,n.width=Math.floor(w*fe),n.height=Math.floor($*fe),this.setViewport(0,0,w,$)},this.setEffects=function(w){if(N===Ri){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let $=0;$<w.length;$++)if(w[$].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(je)},this.setViewport=function(w,$,fe,ce){w.isVector4?je.set(w.x,w.y,w.z,w.w):je.set(w,$,fe,ce),v.viewport(z.copy(je).multiplyScalar(Ce).round())},this.getScissor=function(w){return w.copy(Ot)},this.setScissor=function(w,$,fe,ce){w.isVector4?Ot.set(w.x,w.y,w.z,w.w):Ot.set(w,$,fe,ce),v.scissor(J.copy(Ot).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){v.setScissorTest(ht=w)},this.setOpaqueSort=function(w){Ge=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(w=!0,$=!0,fe=!0){let ce=0;if(w){let ue=!1;if(re!==null){const Xe=re.texture.format;ue=T.has(Xe)}if(ue){const Xe=re.texture.type,Qe=x.has(Xe),ke=nt.getClearColor(),et=nt.getClearAlpha(),Je=ke.r,rt=ke.g,gt=ke.b;Qe?(U[0]=Je,U[1]=rt,U[2]=gt,U[3]=et,Q.clearBufferuiv(Q.COLOR,0,U)):(L[0]=Je,L[1]=rt,L[2]=gt,L[3]=et,Q.clearBufferiv(Q.COLOR,0,L))}else ce|=Q.COLOR_BUFFER_BIT}$&&(ce|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&Q.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),j=w},this.dispose=function(){n.removeEventListener("webglcontextlost",cn,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",ei,!1),nt.dispose(),Le.dispose(),Ne.dispose(),G.dispose(),me.dispose(),ae.dispose(),He.dispose(),we.dispose(),ge.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",B),Ze.removeEventListener("sessionend",De),Ke.stop()};function cn(w){w.preventDefault(),Uu("WebGLRenderer: Context Lost."),k=!0}function Ft(){Uu("WebGLRenderer: Context Restored."),k=!1;const w=X.autoReset,$=Ve.enabled,fe=Ve.autoUpdate,ce=Ve.needsUpdate,ue=Ve.type;$e(),X.autoReset=w,Ve.enabled=$,Ve.autoUpdate=fe,Ve.needsUpdate=ce,Ve.type=ue}function ei(w){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Zn(w){const $=w.target;$.removeEventListener("dispose",Zn),qa($)}function qa(w){Za(w),G.remove(w)}function Za(w){const $=G.get(w).programs;$!==void 0&&($.forEach(function(fe){ge.releaseProgram(fe)}),w.isShaderMaterial&&ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,fe,ce,ue,Xe){$===null&&($=on);const Qe=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,ke=Qa(w,$,fe,ce,ue);v.setMaterial(ce,Qe);let et=fe.index,Je=1;if(ce.wireframe===!0){if(et=ee.getWireframeAttribute(fe),et===void 0)return;Je=2}const rt=fe.drawRange,gt=fe.attributes.position;let at=rt.start*Je,It=(rt.start+rt.count)*Je;Xe!==null&&(at=Math.max(at,Xe.start*Je),It=Math.min(It,(Xe.start+Xe.count)*Je)),et!==null?(at=Math.max(at,0),It=Math.min(It,et.count)):gt!=null&&(at=Math.max(at,0),It=Math.min(It,gt.count));const pn=It-at;if(pn<0||pn===1/0)return;He.setup(ue,ce,ke,fe,et);let rn,Wt=Ie;if(et!==null&&(rn=ye.get(et),Wt=xe,Wt.setIndex(rn)),ue.isMesh)ce.wireframe===!0?(v.setLineWidth(ce.wireframeLinewidth*an()),Wt.setMode(Q.LINES)):Wt.setMode(Q.TRIANGLES);else if(ue.isLine){let Yt=ce.linewidth;Yt===void 0&&(Yt=1),v.setLineWidth(Yt*an()),ue.isLineSegments?Wt.setMode(Q.LINES):ue.isLineLoop?Wt.setMode(Q.LINE_LOOP):Wt.setMode(Q.LINE_STRIP)}else ue.isPoints?Wt.setMode(Q.POINTS):ue.isSprite&&Wt.setMode(Q.TRIANGLES);if(ue.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Wt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const Yt=ue._multiDrawStarts,qe=ue._multiDrawCounts,Kn=ue._multiDrawCount,Et=et?ye.get(et).bytesPerElement:1,Nn=G.get(ce).currentProgram.getUniforms();for(let gi=0;gi<Kn;gi++)Nn.setValue(Q,"_gl_DrawID",gi),Wt.render(Yt[gi]/Et,qe[gi])}else if(ue.isInstancedMesh)Wt.renderInstances(at,pn,ue.count);else if(fe.isInstancedBufferGeometry){const Yt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,qe=Math.min(fe.instanceCount,Yt);Wt.renderInstances(at,pn,qe)}else Wt.render(at,pn)};function Ka(w,$,fe){w.transparent===!0&&w.side===la&&w.forceSinglePass===!1?(w.side=pi,w.needsUpdate=!0,ki(w,$,fe),w.side=Ns,w.needsUpdate=!0,ki(w,$,fe),w.side=la):ki(w,$,fe)}this.compile=function(w,$,fe=null){fe===null&&(fe=w),P=Ne.get(fe),P.init($),A.push(P),fe.traverseVisible(function(ue){ue.isLight&&ue.layers.test($.layers)&&(P.pushLight(ue),ue.castShadow&&P.pushShadow(ue))}),w!==fe&&w.traverseVisible(function(ue){ue.isLight&&ue.layers.test($.layers)&&(P.pushLight(ue),ue.castShadow&&P.pushShadow(ue))}),P.setupLights();const ce=new Set;return w.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const Xe=ue.material;if(Xe)if(Array.isArray(Xe))for(let Qe=0;Qe<Xe.length;Qe++){const ke=Xe[Qe];Ka(ke,fe,ue),ce.add(ke)}else Ka(Xe,fe,ue),ce.add(Xe)}),P=A.pop(),ce},this.compileAsync=function(w,$,fe=null){const ce=this.compile(w,$,fe);return new Promise(ue=>{function Xe(){if(ce.forEach(function(Qe){G.get(Qe).currentProgram.isReady()&&ce.delete(Qe)}),ce.size===0){ue(w);return}setTimeout(Xe,10)}ve.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let pa=null;function mi(w){pa&&pa(w)}function B(){Ke.stop()}function De(){Ke.start()}const Ke=new jy;Ke.setAnimationLoop(mi),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(w){pa=w,Ze.setAnimationLoop(w),w===null?Ke.stop():Ke.start()},Ze.addEventListener("sessionstart",B),Ze.addEventListener("sessionend",De),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;j!==null&&j.renderStart(w,$);const fe=Ze.enabled===!0&&Ze.isPresenting===!0,ce=O!==null&&(re===null||fe)&&O.begin(q,re);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera($),$=Ze.getCamera()),w.isScene===!0&&w.onBeforeRender(q,w,$,re),P=Ne.get(w,A.length),P.init($),P.state.textureUnits=K.getTextureUnits(),A.push(P),vt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),dt.setFromProjectionMatrix(vt,ca,$.reversedDepth),Be=this.localClippingEnabled,ct=ze.init(this.clippingPlanes,Be),I=Le.get(w,F.length),I.init(),F.push(I),Ze.enabled===!0&&Ze.isPresenting===!0){const Qe=q.xr.getDepthSensingMesh();Qe!==null&&Rt(Qe,$,-1/0,q.sortObjects)}Rt(w,$,0,q.sortObjects),I.finish(),q.sortObjects===!0&&I.sort(Ge,st,$.reversedDepth),Bt=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Bt&&nt.addToRenderList(I,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&ze.beginShadows();const ue=P.state.shadowsArray;if(Ve.render(ue,w,$),ct===!0&&ze.endShadows(),(ce&&O.hasRenderPass())===!1){const Qe=I.opaque,ke=I.transmissive;if(P.setupLights(),$.isArrayCamera){const et=$.cameras;if(ke.length>0)for(let Je=0,rt=et.length;Je<rt;Je++){const gt=et[Je];Dn(Qe,ke,w,gt)}Bt&&nt.render(w);for(let Je=0,rt=et.length;Je<rt;Je++){const gt=et[Je];sn(I,w,gt,gt.viewport)}}else ke.length>0&&Dn(Qe,ke,w,$),Bt&&nt.render(w),sn(I,w,$)}re!==null&&W===0&&(K.updateMultisampleRenderTarget(re),K.updateRenderTargetMipmap(re)),ce&&O.end(q),w.isScene===!0&&w.onAfterRender(q,w,$),He.resetDefaultState(),Se=-1,Ee=null,A.pop(),A.length>0?(P=A[A.length-1],K.setTextureUnits(P.state.textureUnits),ct===!0&&ze.setGlobalState(q.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,j!==null&&j.renderEnd()};function Rt(w,$,fe,ce){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)fe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLightProbeGrid)P.pushLightProbeGrid(w);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||dt.intersectsSprite(w)){ce&&Vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(vt);const Qe=ae.update(w),ke=w.material;ke.visible&&I.push(w,Qe,ke,fe,Vt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||dt.intersectsObject(w))){const Qe=ae.update(w),ke=w.material;if(ce&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Vt.copy(w.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),Vt.copy(Qe.boundingSphere.center)),Vt.applyMatrix4(w.matrixWorld).applyMatrix4(vt)),Array.isArray(ke)){const et=Qe.groups;for(let Je=0,rt=et.length;Je<rt;Je++){const gt=et[Je],at=ke[gt.materialIndex];at&&at.visible&&I.push(w,Qe,at,fe,Vt.z,gt)}}else ke.visible&&I.push(w,Qe,ke,fe,Vt.z,null)}}const Xe=w.children;for(let Qe=0,ke=Xe.length;Qe<ke;Qe++)Rt(Xe[Qe],$,fe,ce)}function sn(w,$,fe,ce){const{opaque:ue,transmissive:Xe,transparent:Qe}=w;P.setupLightsView(fe),ct===!0&&ze.setGlobalState(q.clippingPlanes,fe),ce&&v.viewport(z.copy(ce)),ue.length>0&&un(ue,$,fe),Xe.length>0&&un(Xe,$,fe),Qe.length>0&&un(Qe,$,fe),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Dn(w,$,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ce.id]===void 0){const at=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ce.id]=new fa(1,1,{generateMipmaps:!0,type:at?Wa:Ri,minFilter:cr,samples:Math.max(4,C.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Xe=P.state.transmissionRenderTarget[ce.id],Qe=ce.viewport||z;Xe.setSize(Qe.z*q.transmissionResolutionScale,Qe.w*q.transmissionResolutionScale);const ke=q.getRenderTarget(),et=q.getActiveCubeFace(),Je=q.getActiveMipmapLevel();q.setRenderTarget(Xe),q.getClearColor(Oe),Fe=q.getClearAlpha(),Fe<1&&q.setClearColor(16777215,.5),q.clear(),Bt&&nt.render(fe);const rt=q.toneMapping;q.toneMapping=ua;const gt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),P.setupLightsView(ce),ct===!0&&ze.setGlobalState(q.clippingPlanes,ce),un(w,fe,ce),K.updateMultisampleRenderTarget(Xe),K.updateRenderTargetMipmap(Xe),ve.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let It=0,pn=$.length;It<pn;It++){const rn=$[It],{object:Wt,geometry:Yt,material:qe,group:Kn}=rn;if(qe.side===la&&Wt.layers.test(ce.layers)){const Et=qe.side;qe.side=pi,qe.needsUpdate=!0,si(Wt,fe,ce,Yt,qe,Kn),qe.side=Et,qe.needsUpdate=!0,at=!0}}at===!0&&(K.updateMultisampleRenderTarget(Xe),K.updateRenderTargetMipmap(Xe))}q.setRenderTarget(ke,et,Je),q.setClearColor(Oe,Fe),gt!==void 0&&(ce.viewport=gt),q.toneMapping=rt}function un(w,$,fe){const ce=$.isScene===!0?$.overrideMaterial:null;for(let ue=0,Xe=w.length;ue<Xe;ue++){const Qe=w[ue],{object:ke,geometry:et,group:Je}=Qe;let rt=Qe.material;rt.allowOverride===!0&&ce!==null&&(rt=ce),ke.layers.test(fe.layers)&&si(ke,$,fe,et,rt,Je)}}function si(w,$,fe,ce,ue,Xe){w.onBeforeRender(q,$,fe,ce,ue,Xe),w.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ue.onBeforeRender(q,$,fe,ce,w,Xe),ue.transparent===!0&&ue.side===la&&ue.forceSinglePass===!1?(ue.side=pi,ue.needsUpdate=!0,q.renderBufferDirect(fe,$,ce,ue,w,Xe),ue.side=Ns,ue.needsUpdate=!0,q.renderBufferDirect(fe,$,ce,ue,w,Xe),ue.side=la):q.renderBufferDirect(fe,$,ce,ue,w,Xe),w.onAfterRender(q,$,fe,ce,ue,Xe)}function ki(w,$,fe){$.isScene!==!0&&($=on);const ce=G.get(w),ue=P.state.lights,Xe=P.state.shadowsArray,Qe=ue.state.version,ke=ge.getParameters(w,ue.state,Xe,$,fe,P.state.lightProbeGridArray),et=ge.getProgramCacheKey(ke);let Je=ce.programs;ce.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?$.environment:null,ce.fog=$.fog;const rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ce.envMap=me.get(w.envMap||ce.environment,rt),ce.envMapRotation=ce.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",Zn),Je=new Map,ce.programs=Je);let gt=Je.get(et);if(gt!==void 0){if(ce.currentProgram===gt&&ce.lightsStateVersion===Qe)return ga(w,ke),gt}else ke.uniforms=ge.getUniforms(w),j!==null&&w.isNodeMaterial&&j.build(w,fe,ke),w.onBeforeCompile(ke,q),gt=ge.acquireProgram(ke,et),Je.set(et,gt),ce.uniforms=ke.uniforms;const at=ce.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(at.clippingPlanes=ze.uniform),ga(w,ke),ce.needsLights=Bo(w),ce.lightsStateVersion=Qe,ce.needsLights&&(at.ambientLightColor.value=ue.state.ambient,at.lightProbe.value=ue.state.probe,at.directionalLights.value=ue.state.directional,at.directionalLightShadows.value=ue.state.directionalShadow,at.spotLights.value=ue.state.spot,at.spotLightShadows.value=ue.state.spotShadow,at.rectAreaLights.value=ue.state.rectArea,at.ltc_1.value=ue.state.rectAreaLTC1,at.ltc_2.value=ue.state.rectAreaLTC2,at.pointLights.value=ue.state.point,at.pointLightShadows.value=ue.state.pointShadow,at.hemisphereLights.value=ue.state.hemi,at.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,at.spotLightMatrix.value=ue.state.spotLightMatrix,at.spotLightMap.value=ue.state.spotLightMap,at.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=P.state.lightProbeGridArray.length>0,ce.currentProgram=gt,ce.uniformsList=null,gt}function ma(w){if(w.uniformsList===null){const $=w.currentProgram.getUniforms();w.uniformsList=Tu.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function ga(w,$){const fe=G.get(w);fe.outputColorSpace=$.outputColorSpace,fe.batching=$.batching,fe.batchingColor=$.batchingColor,fe.instancing=$.instancing,fe.instancingColor=$.instancingColor,fe.instancingMorph=$.instancingMorph,fe.skinning=$.skinning,fe.morphTargets=$.morphTargets,fe.morphNormals=$.morphNormals,fe.morphColors=$.morphColors,fe.morphTargetsCount=$.morphTargetsCount,fe.numClippingPlanes=$.numClippingPlanes,fe.numIntersection=$.numClipIntersection,fe.vertexAlphas=$.vertexAlphas,fe.vertexTangents=$.vertexTangents,fe.toneMapping=$.toneMapping}function zs(w,$){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;M.setFromMatrixPosition($.matrixWorld);for(let fe=0,ce=w.length;fe<ce;fe++){const ue=w[fe];if(ue.texture!==null&&ue.boundingBox.containsPoint(M))return ue}return null}function Qa(w,$,fe,ce,ue){$.isScene!==!0&&($=on),K.resetTextureUnits();const Xe=$.fog,Qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?$.environment:null,ke=re===null?q.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Lt.workingColorSpace,et=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,Je=me.get(ce.envMap||Qe,et),rt=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,gt=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),at=!!fe.morphAttributes.position,It=!!fe.morphAttributes.normal,pn=!!fe.morphAttributes.color;let rn=ua;ce.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(rn=q.toneMapping);const Wt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Yt=Wt!==void 0?Wt.length:0,qe=G.get(ce),Kn=P.state.lights;if(ct===!0&&(Be===!0||w!==Ee)){const Xt=w===Ee&&ce.id===Se;ze.setState(ce,w,Xt)}let Et=!1;ce.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Kn.state.version||qe.outputColorSpace!==ke||ue.isBatchedMesh&&qe.batching===!1||!ue.isBatchedMesh&&qe.batching===!0||ue.isBatchedMesh&&qe.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&qe.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&qe.instancing===!1||!ue.isInstancedMesh&&qe.instancing===!0||ue.isSkinnedMesh&&qe.skinning===!1||!ue.isSkinnedMesh&&qe.skinning===!0||ue.isInstancedMesh&&qe.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&qe.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&qe.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&qe.instancingMorph===!1&&ue.morphTexture!==null||qe.envMap!==Je||ce.fog===!0&&qe.fog!==Xe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ze.numPlanes||qe.numIntersection!==ze.numIntersection)||qe.vertexAlphas!==rt||qe.vertexTangents!==gt||qe.morphTargets!==at||qe.morphNormals!==It||qe.morphColors!==pn||qe.toneMapping!==rn||qe.morphTargetsCount!==Yt||!!qe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,qe.__version=ce.version);let Nn=qe.currentProgram;Et===!0&&(Nn=ki(ce,$,ue),j&&ce.isNodeMaterial&&j.onUpdateProgram(ce,Nn,qe));let gi=!1,Gi=!1,_i=!1;const qt=Nn.getUniforms(),mn=qe.uniforms;if(v.useProgram(Nn.program)&&(gi=!0,Gi=!0,_i=!0),ce.id!==Se&&(Se=ce.id,Gi=!0),qe.needsLights){const Xt=zs(P.state.lightProbeGridArray,ue);qe.lightProbeGrid!==Xt&&(qe.lightProbeGrid=Xt,Gi=!0)}if(gi||Ee!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),qt.setValue(Q,"projectionMatrix",w.projectionMatrix),qt.setValue(Q,"viewMatrix",w.matrixWorldInverse);const $i=qt.map.cameraPosition;$i!==void 0&&$i.setValue(Q,Jt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&qt.setValue(Q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&qt.setValue(Q,"isOrthographic",w.isOrthographicCamera===!0),Ee!==w&&(Ee=w,Gi=!0,_i=!0)}if(qe.needsLights&&(Kn.state.directionalShadowMap.length>0&&qt.setValue(Q,"directionalShadowMap",Kn.state.directionalShadowMap,K),Kn.state.spotShadowMap.length>0&&qt.setValue(Q,"spotShadowMap",Kn.state.spotShadowMap,K),Kn.state.pointShadowMap.length>0&&qt.setValue(Q,"pointShadowMap",Kn.state.pointShadowMap,K)),ue.isSkinnedMesh){qt.setOptional(Q,ue,"bindMatrix"),qt.setOptional(Q,ue,"bindMatrixInverse");const Xt=ue.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),qt.setValue(Q,"boneTexture",Xt.boneTexture,K))}ue.isBatchedMesh&&(qt.setOptional(Q,ue,"batchingTexture"),qt.setValue(Q,"batchingTexture",ue._matricesTexture,K),qt.setOptional(Q,ue,"batchingIdTexture"),qt.setValue(Q,"batchingIdTexture",ue._indirectTexture,K),qt.setOptional(Q,ue,"batchingColorTexture"),ue._colorsTexture!==null&&qt.setValue(Q,"batchingColorTexture",ue._colorsTexture,K));const Vi=fe.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&Y.update(ue,fe,Nn),(Gi||qe.receiveShadow!==ue.receiveShadow)&&(qe.receiveShadow=ue.receiveShadow,qt.setValue(Q,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&$.environment!==null&&(mn.envMapIntensity.value=$.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=UR()),Gi){if(qt.setValue(Q,"toneMappingExposure",q.toneMappingExposure),qe.needsLights&&En(mn,_i),Xe&&ce.fog===!0&&Ue.refreshFogUniforms(mn,Xe),Ue.refreshMaterialUniforms(mn,ce,Ce,Te,P.state.transmissionRenderTarget[w.id]),qe.needsLights&&qe.lightProbeGrid){const Xt=qe.lightProbeGrid;mn.probesSH.value=Xt.texture,mn.probesMin.value.copy(Xt.boundingBox.min),mn.probesMax.value.copy(Xt.boundingBox.max),mn.probesResolution.value.copy(Xt.resolution)}Tu.upload(Q,ma(qe),mn,K)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Tu.upload(Q,ma(qe),mn,K),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&qt.setValue(Q,"center",ue.center),qt.setValue(Q,"modelViewMatrix",ue.modelViewMatrix),qt.setValue(Q,"normalMatrix",ue.normalMatrix),qt.setValue(Q,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const Xt=ce.uniformsGroups;for(let $i=0,ja=Xt.length;$i<ja;$i++){const Bs=Xt[$i];we.update(Bs,Nn),we.bind(Bs,Nn)}}return Nn}function En(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function Bo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(w,$,fe){const ce=G.get(w);ce.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=$,G.get(w.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,$){const fe=G.get(w);fe.__webglFramebuffer=$,fe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(w,$=0,fe=0){re=w,H=$,W=fe;let ce=null,ue=!1,Xe=!1;if(w){const ke=G.get(w);if(ke.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(Q.FRAMEBUFFER,ke.__webglFramebuffer),z.copy(w.viewport),J.copy(w.scissor),Re=w.scissorTest,v.viewport(z),v.scissor(J),v.setScissorTest(Re),Se=-1;return}else if(ke.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(ke.__hasExternalTextures)K.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const rt=w.depthTexture;if(ke.__boundDepthTexture!==rt){if(rt!==null&&G.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Xe=!0);const Je=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Je[$])?ce=Je[$][fe]:ce=Je[$],ue=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?ce=G.get(w).__webglMultisampledFramebuffer:Array.isArray(Je)?ce=Je[fe]:ce=Je,z.copy(w.viewport),J.copy(w.scissor),Re=w.scissorTest}else z.copy(je).multiplyScalar(Ce).floor(),J.copy(Ot).multiplyScalar(Ce).floor(),Re=ht;if(fe!==0&&(ce=pe),v.bindFramebuffer(Q.FRAMEBUFFER,ce)&&v.drawBuffers(w,ce),v.viewport(z),v.scissor(J),v.setScissorTest(Re),ue){const ke=G.get(w.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,fe)}else if(Xe){const ke=$;for(let et=0;et<w.textures.length;et++){const Je=G.get(w.textures[et]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+et,Je.__webglTexture,fe,ke)}}else if(w!==null&&fe!==0){const ke=G.get(w.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ke.__webglTexture,fe)}Se=-1},this.readRenderTargetPixels=function(w,$,fe,ce,ue,Xe,Qe,ke=0){if(!(w&&w.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Qe!==void 0&&(et=et[Qe]),et){v.bindFramebuffer(Q.FRAMEBUFFER,et);try{const Je=w.textures[ke],rt=Je.format,gt=Je.type;if(w.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+ke),!C.textureFormatReadable(rt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(gt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-ce&&fe>=0&&fe<=w.height-ue&&Q.readPixels($,fe,ce,ue,Pe.convert(rt),Pe.convert(gt),Xe)}finally{const Je=re!==null?G.get(re).__webglFramebuffer:null;v.bindFramebuffer(Q.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(w,$,fe,ce,ue,Xe,Qe,ke=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Qe!==void 0&&(et=et[Qe]),et)if($>=0&&$<=w.width-ce&&fe>=0&&fe<=w.height-ue){v.bindFramebuffer(Q.FRAMEBUFFER,et);const Je=w.textures[ke],rt=Je.format,gt=Je.type;if(w.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+ke),!C.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,at),Q.bufferData(Q.PIXEL_PACK_BUFFER,Xe.byteLength,Q.STREAM_READ),Q.readPixels($,fe,ce,ue,Pe.convert(rt),Pe.convert(gt),0);const It=re!==null?G.get(re).__webglFramebuffer:null;v.bindFramebuffer(Q.FRAMEBUFFER,It);const pn=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await UE(Q,pn,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,at),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Xe),Q.deleteBuffer(at),Q.deleteSync(pn),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,$=null,fe=0){const ce=Math.pow(2,-fe),ue=Math.floor(w.image.width*ce),Xe=Math.floor(w.image.height*ce),Qe=$!==null?$.x:0,ke=$!==null?$.y:0;K.setTexture2D(w,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,fe,0,0,Qe,ke,ue,Xe),v.unbindTexture()},this.copyTextureToTexture=function(w,$,fe=null,ce=null,ue=0,Xe=0){let Qe,ke,et,Je,rt,gt,at,It,pn;const rn=w.isCompressedTexture?w.mipmaps[Xe]:w.image;if(fe!==null)Qe=fe.max.x-fe.min.x,ke=fe.max.y-fe.min.y,et=fe.isBox3?fe.max.z-fe.min.z:1,Je=fe.min.x,rt=fe.min.y,gt=fe.isBox3?fe.min.z:0;else{const mn=Math.pow(2,-ue);Qe=Math.floor(rn.width*mn),ke=Math.floor(rn.height*mn),w.isDataArrayTexture?et=rn.depth:w.isData3DTexture?et=Math.floor(rn.depth*mn):et=1,Je=0,rt=0,gt=0}ce!==null?(at=ce.x,It=ce.y,pn=ce.z):(at=0,It=0,pn=0);const Wt=Pe.convert($.format),Yt=Pe.convert($.type);let qe;$.isData3DTexture?(K.setTexture3D($,0),qe=Q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(K.setTexture2DArray($,0),qe=Q.TEXTURE_2D_ARRAY):(K.setTexture2D($,0),qe=Q.TEXTURE_2D),v.activeTexture(Q.TEXTURE0),v.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,$.flipY),v.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),v.pixelStorei(Q.UNPACK_ALIGNMENT,$.unpackAlignment);const Kn=v.getParameter(Q.UNPACK_ROW_LENGTH),Et=v.getParameter(Q.UNPACK_IMAGE_HEIGHT),Nn=v.getParameter(Q.UNPACK_SKIP_PIXELS),gi=v.getParameter(Q.UNPACK_SKIP_ROWS),Gi=v.getParameter(Q.UNPACK_SKIP_IMAGES);v.pixelStorei(Q.UNPACK_ROW_LENGTH,rn.width),v.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,rn.height),v.pixelStorei(Q.UNPACK_SKIP_PIXELS,Je),v.pixelStorei(Q.UNPACK_SKIP_ROWS,rt),v.pixelStorei(Q.UNPACK_SKIP_IMAGES,gt);const _i=w.isDataArrayTexture||w.isData3DTexture,qt=$.isDataArrayTexture||$.isData3DTexture;if(w.isDepthTexture){const mn=G.get(w),Vi=G.get($),Xt=G.get(mn.__renderTarget),$i=G.get(Vi.__renderTarget);v.bindFramebuffer(Q.READ_FRAMEBUFFER,Xt.__webglFramebuffer),v.bindFramebuffer(Q.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let ja=0;ja<et;ja++)_i&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,G.get(w).__webglTexture,ue,gt+ja),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,G.get($).__webglTexture,Xe,pn+ja)),Q.blitFramebuffer(Je,rt,Qe,ke,at,It,Qe,ke,Q.DEPTH_BUFFER_BIT,Q.NEAREST);v.bindFramebuffer(Q.READ_FRAMEBUFFER,null),v.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ue!==0||w.isRenderTargetTexture||G.has(w)){const mn=G.get(w),Vi=G.get($);v.bindFramebuffer(Q.READ_FRAMEBUFFER,he),v.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ie);for(let Xt=0;Xt<et;Xt++)_i?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,mn.__webglTexture,ue,gt+Xt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,mn.__webglTexture,ue),qt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Vi.__webglTexture,Xe,pn+Xt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Vi.__webglTexture,Xe),ue!==0?Q.blitFramebuffer(Je,rt,Qe,ke,at,It,Qe,ke,Q.COLOR_BUFFER_BIT,Q.NEAREST):qt?Q.copyTexSubImage3D(qe,Xe,at,It,pn+Xt,Je,rt,Qe,ke):Q.copyTexSubImage2D(qe,Xe,at,It,Je,rt,Qe,ke);v.bindFramebuffer(Q.READ_FRAMEBUFFER,null),v.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else qt?w.isDataTexture||w.isData3DTexture?Q.texSubImage3D(qe,Xe,at,It,pn,Qe,ke,et,Wt,Yt,rn.data):$.isCompressedArrayTexture?Q.compressedTexSubImage3D(qe,Xe,at,It,pn,Qe,ke,et,Wt,rn.data):Q.texSubImage3D(qe,Xe,at,It,pn,Qe,ke,et,Wt,Yt,rn):w.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Xe,at,It,Qe,ke,Wt,Yt,rn.data):w.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Xe,at,It,rn.width,rn.height,Wt,rn.data):Q.texSubImage2D(Q.TEXTURE_2D,Xe,at,It,Qe,ke,Wt,Yt,rn);v.pixelStorei(Q.UNPACK_ROW_LENGTH,Kn),v.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Et),v.pixelStorei(Q.UNPACK_SKIP_PIXELS,Nn),v.pixelStorei(Q.UNPACK_SKIP_ROWS,gi),v.pixelStorei(Q.UNPACK_SKIP_IMAGES,Gi),Xe===0&&$.generateMipmaps&&Q.generateMipmap(qe),v.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){H=0,W=0,re=null,v.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Lt._getUnpackColorSpace()}}const dy={type:"change"},um={type:"start"},sx={type:"end"},vu=new sm,hy=new Rs,OR=Math.cos(70*Rp.DEG2RAD),Ln=new te,di=2*Math.PI,nn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uh=1e-6;class IR extends zb{constructor(e,n=null){super(e,n),this.state=nn.NONE,this.target=new te,this.cursor=new te,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hl.ROTATE,MIDDLE:hl.DOLLY,RIGHT:hl.PAN},this.touches={ONE:fl.ROTATE,TWO:fl.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new te,this._lastQuaternion=new Us,this._lastTargetPosition=new te,this._quat=new Us().setFromUnitVectors(e.up,new te(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hv,this._sphericalDelta=new Hv,this._scale=1,this._panOffset=new te,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new te,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zR.bind(this),this._onPointerDown=PR.bind(this),this._onPointerUp=BR.bind(this),this._onContextMenu=WR.bind(this),this._onMouseWheel=kR.bind(this),this._onKeyDown=GR.bind(this),this._onTouchStart=VR.bind(this),this._onTouchMove=XR.bind(this),this._onMouseDown=FR.bind(this),this._onMouseMove=HR.bind(this),this._interceptControlDown=YR.bind(this),this._interceptControlUp=qR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dy),this.update(),this.state=nn.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Ln.copy(n).sub(this.target),Ln.applyQuaternion(this._quat),this._spherical.setFromVector3(Ln),this.autoRotate&&this.state===nn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=di:r>Math.PI&&(r-=di),o<-Math.PI?o+=di:o>Math.PI&&(o-=di),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Ln.setFromSpherical(this._spherical),Ln.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const m=Ln.length();f=this._clampDistance(m*this._scale);const p=m-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const m=new te(this._mouse.x,this._mouse.y,0);m.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const h=new te(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(m),this.object.updateMatrixWorld(),f=Ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(vu.origin.copy(this.object.position),vu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vu.direction))<OR?this.object.lookAt(this.target):(hy.setFromNormalAndCoplanarPoint(this.object.up,this.target),vu.intersectPlane(hy,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uh||this._lastTargetPosition.distanceToSquared(this.target)>Uh?(this.dispatchEvent(dy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?di/60*this.autoRotateSpeed*e:di/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ln.setFromMatrixColumn(n,0),Ln.multiplyScalar(-e),this._panOffset.add(Ln)}_panUp(e,n){this.screenSpacePanning===!0?Ln.setFromMatrixColumn(n,1):(Ln.setFromMatrixColumn(n,0),Ln.crossVectors(this.object.up,Ln)),Ln.multiplyScalar(e),this._panOffset.add(Ln)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Ln.copy(o).sub(this.target);let c=Ln.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/r.clientHeight,this.object.matrix),this._panUp(2*n*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,c=n-r.top,f=r.width,m=r.height;this._mouse.x=o/f*2-1,this._mouse.y=-(c/m)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(di*this._rotateDelta.x/n.clientHeight),this._rotateUp(di*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-di*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),c=.5*(e.pageY+r.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(di*this._rotateDelta.x/n.clientHeight),this._rotateUp(di*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+n.x)*.5,m=(e.pageY+n.y)*.5;this._updateZoomParameters(f,m)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ot,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function PR(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zR(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function BR(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sx),this.state=nn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function FR(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case hl.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=nn.DOLLY;break;case hl.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=nn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=nn.ROTATE}break;case hl.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=nn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=nn.PAN}break;default:this.state=nn.NONE}this.state!==nn.NONE&&this.dispatchEvent(um)}function HR(a){switch(this.state){case nn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case nn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case nn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function kR(a){this.enabled===!1||this.enableZoom===!1||this.state!==nn.NONE||(a.preventDefault(),this.dispatchEvent(um),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(sx))}function GR(a){this.enabled!==!1&&this._handleKeyDown(a)}function VR(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case fl.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=nn.TOUCH_ROTATE;break;case fl.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=nn.TOUCH_PAN;break;default:this.state=nn.NONE}break;case 2:switch(this.touches.TWO){case fl.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=nn.TOUCH_DOLLY_PAN;break;case fl.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=nn.TOUCH_DOLLY_ROTATE;break;default:this.state=nn.NONE}break;default:this.state=nn.NONE}this.state!==nn.NONE&&this.dispatchEvent(um)}function XR(a){switch(this._trackPointer(a),this.state){case nn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case nn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case nn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case nn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=nn.NONE}}function WR(a){this.enabled!==!1&&a.preventDefault()}function YR(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qR(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Eo=new te;function Bi(a,e,n,r,o,c){const f=2*Math.PI*o/4,m=Math.max(c-2*o,0),p=Math.PI/4;Eo.copy(e),Eo[r]=0,Eo.normalize();const h=.5*f/(f+m),g=1-Eo.angleTo(a)/p;return Math.sign(Eo[n])===1?g*h:m/(f+m)+h+h*(1-g)}class fm extends Os{constructor(e=1,n=1,r=1,o=2,c=.1){const f=o*2+1;if(c=Math.min(e/2,n/2,r/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:r,segments:o,radius:c},f===1)return;const m=this.toNonIndexed();this.index=null,this.attributes.position=m.attributes.position,this.attributes.normal=m.attributes.normal,this.attributes.uv=m.attributes.uv;const p=new te,h=new te,g=new te(e,n,r).divideScalar(2).subScalar(c),S=this.attributes.position.array,_=this.attributes.normal.array,b=this.attributes.uv.array,R=S.length/6,N=new te,T=.5/f;for(let x=0,U=0;x<S.length;x+=3,U+=2)switch(p.fromArray(S,x),h.copy(p),h.x-=Math.sign(h.x)*T,h.y-=Math.sign(h.y)*T,h.z-=Math.sign(h.z)*T,h.normalize(),S[x+0]=g.x*Math.sign(p.x)+h.x*c,S[x+1]=g.y*Math.sign(p.y)+h.y*c,S[x+2]=g.z*Math.sign(p.z)+h.z*c,_[x+0]=h.x,_[x+1]=h.y,_[x+2]=h.z,Math.floor(x/R)){case 0:N.set(1,0,0),b[U+0]=Bi(N,h,"z","y",c,r),b[U+1]=1-Bi(N,h,"y","z",c,n);break;case 1:N.set(-1,0,0),b[U+0]=1-Bi(N,h,"z","y",c,r),b[U+1]=1-Bi(N,h,"y","z",c,n);break;case 2:N.set(0,1,0),b[U+0]=1-Bi(N,h,"x","z",c,e),b[U+1]=Bi(N,h,"z","x",c,r);break;case 3:N.set(0,-1,0),b[U+0]=1-Bi(N,h,"x","z",c,e),b[U+1]=1-Bi(N,h,"z","x",c,r);break;case 4:N.set(0,0,1),b[U+0]=1-Bi(N,h,"x","y",c,e),b[U+1]=1-Bi(N,h,"y","x",c,n);break;case 5:N.set(0,0,-1),b[U+0]=Bi(N,h,"x","y",c,e),b[U+1]=1-Bi(N,h,"y","x",c,n);break}}static fromJSON(e){return new fm(e.width,e.height,e.depth,e.segments,e.radius)}}const Io="city-tycoon-v1",Np="city-tycoon-manual-v1",rx=720*60*60*1e3,ZR=a=>a===void 0||Array.isArray(a)&&a.length<=13&&a.every(e=>typeof e=="string"),KR=(a,e)=>a==null||a&&Number.isInteger(a.sourceId)&&a.sourceId>=0&&a.sourceId<e&&Number.isInteger(a.targetId)&&a.targetId>=0&&a.targetId<e&&typeof a.cardId=="string"&&(a.targetPosition===null||a.targetPosition===void 0||Number.isInteger(a.targetPosition)),QR=(a,e,n)=>a&&a.id===e&&typeof a.name=="string"&&Number.isFinite(a.cash)&&a.cash>=0&&Number.isInteger(a.pos)&&a.pos>=0&&a.pos<32&&[0,1].includes(a.jail)&&typeof a.bankrupt=="boolean"&&(a.diceCount===void 0||[1,2].includes(a.diceCount))&&ZR(a.skillHand)&&(a.skillUsedThisTurn===void 0||typeof a.skillUsedThisTurn=="boolean")&&(a.slowTurns===void 0||Number.isInteger(a.slowTurns)&&a.slowTurns>=0)&&(a.rentShield===void 0||a.rentShield===0||a.rentShield===1)&&(a.rentMultiplier===void 0||a.rentMultiplier===1||a.rentMultiplier===2),jR=(a,e)=>a&&typeof a=="object"&&!Array.isArray(a)&&Object.entries(a).every(([n,r])=>Number.isInteger(+n)&&+n>0&&+n<32&&![3,6,8,11,14,16,19,22,24,27,30].includes(+n)&&r&&Number.isInteger(r.owner)&&r.owner>=0&&r.owner<e&&Number.isInteger(r.level)&&r.level>=0&&r.level<=5);function Gu(a){var e;return!((a==null?void 0:a.version)===1&&Array.isArray(a.players)&&a.players.length>=2&&a.players.length<=4&&a.players.every((n,r)=>QR(n,r,a.players.length)))||!jR(a.lots,a.players.length)||!Number.isInteger(a.turn)||a.turn<0||a.turn>=a.players.length||!Number.isInteger(a.round)||a.round<1||!(a.maxRounds===void 0||a.maxRounds===null||Number.isInteger(a.maxRounds)&&a.maxRounds>=1)||!(a.maxRounds===void 0||a.maxRounds===null||a.round<=a.maxRounds+1)||!(a.inflationRate===void 0||Number.isInteger(a.inflationRate)&&a.inflationRate>=0&&a.inflationRate<=10)||!(a.priceIndex===void 0||Number.isFinite(a.priceIndex)&&a.priceIndex>=1&&a.priceIndex<=10)||!["ready","moving","decision","end","finished"].includes(a.stage)||!Array.isArray(a.dice)||![1,2].includes(a.dice.length)||!a.dice.every(n=>Number.isInteger(n)&&n>=1&&n<=6)||!Number.isInteger(a.remaining)||a.remaining<0||a.remaining>12||a.stage==="moving"&&!(a.remaining>0&&Number.isInteger(a.eventIndex)&&a.eventIndex>=0&&a.eventIndex<8)||!Array.isArray(a.log)||!a.log.every(n=>n&&typeof n.text=="string"&&typeof n.kind=="string")||typeof a.notice!="string"||!(a.event===null||a.event&&typeof a.event.title=="string"&&(a.event.amount===void 0||Number.isFinite(a.event.amount)))||!(a.skillDeck===void 0||Array.isArray(a.skillDeck)&&a.skillDeck.every(n=>typeof n=="string"))||!(a.skillDiscard===void 0||Array.isArray(a.skillDiscard)&&a.skillDiscard.every(n=>typeof n=="string"))||a.skillOverflow!==void 0&&!(a.skillOverflow===null||Number.isInteger((e=a.skillOverflow)==null?void 0:e.playerId)&&a.skillOverflow.playerId>=0&&a.skillOverflow.playerId<a.players.length)||!KR(a.pendingSkill,a.players.length)||a.limitBuildings!==void 0&&typeof a.limitBuildings!="boolean"||a.stage==="finished"&&!(Number.isInteger(a.winner)&&a.winner>=0&&a.winner<a.players.length)||a.bank!==void 0&&!(Number.isInteger(a.bank.houses)&&a.bank.houses>=0&&Number.isInteger(a.bank.hotels)&&a.bank.hotels>=0)?!1:(a.buildAvailable===void 0||typeof a.buildAvailable=="boolean")&&(a.buildUsed===void 0||typeof a.buildUsed=="boolean")}const Up=(a,e)=>a&&Number.isFinite(a.savedAt)&&a.savedAt<=e&&e-a.savedAt<rx&&Gu(a.game);function Po(a=localStorage,e=Date.now()){const n=a.getItem(Np),r=n?JSON.parse(n):[];if(!Array.isArray(r))throw new Error("存檔清單格式損壞。");const o=r.filter(f=>Up(f,e)&&typeof f.id=="string"&&typeof f.name=="string").sort((f,m)=>m.savedAt-f.savedAt).slice(0,10);JSON.stringify(o)!==n&&a.setItem(Np,JSON.stringify(o));const c=a.getItem(Io);if(c){let f;try{f=JSON.parse(c)}catch{}(!f||f.savedAt!==void 0&&!Up(f,e))&&a.removeItem(Io)}return o}function JR(a,e,n=!1,r=localStorage,o=Date.now()){if(!Gu(a))throw new Error("遊戲狀態無法儲存。");const c=Po(r,o);if(c.length>=10&&!n)throw new Error("已達 10 個存檔，請確認取代最舊版本。");const m=[{id:crypto.randomUUID(),name:e.trim().slice(0,60)||`回合 ${a.round}`,savedAt:o,game:structuredClone(a)},...c].slice(0,10);return r.setItem(Np,JSON.stringify(m)),m}function $R(a,e=localStorage,n=Date.now()){const r=Po(e,n).find(o=>o.id===a);if(!r)throw new Error("存檔已過期或不存在。");return structuredClone(r.game)}function Lp(a,e=localStorage,n=Date.now()){e.setItem(Io,JSON.stringify({savedAt:n,game:a}))}function py(a=localStorage,e=Date.now()){const n=a.getItem(Io);if(!n)return null;const r=JSON.parse(n);return Gu(r)?(Lp(r,a,e),r):Up(r,e)?r.game:(a.removeItem(Io),null)}const Lh={rentReceived:{mood:"happy",label:"開心",emoji:"😊",priority:90,messages:["謝謝老闆，歡迎再來～","生意上門啦！","今天的租金真香～","城市建設靠大家！","又是一筆漂亮的收入！"]},rentPaid:{mood:"sad",label:"傷心",emoji:"😢",priority:90,messages:["賠大了～","我的錢包在哭泣……","早知道就繞路了！","這租金也太痛了吧！","下次換我收租！"]},purchase:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["這塊地歸我了！","投資城市，從今天開始！","先買先贏！","我的地產版圖又擴大了！","希望它很快替我賺錢！"]},propertyUnaffordable:{mood:"anxious",label:"無奈",emoji:"😣",priority:45,messages:["這塊地好喜歡，可是現金不夠……","差一點就能買下了！","先存錢，下次再來。","地產很香，荷包不允許。","只能先放棄這次機會。"]},salary:{mood:"happy",label:"開心",emoji:"😊",priority:35,messages:["薪水準時入帳！","繞一圈又有獎金，太棒了！","城市歡迎我回來～","這筆錢來得正是時候！","繼續出發，資金滿滿！"]},windfall:{mood:"surprised",label:"驚喜",emoji:"😲",priority:45,messages:["今天的運氣也太好了吧！","意外之財，收下啦！","謝謝城市的禮物！","這張卡抽得漂亮！","資金補充完畢，再戰一局！"]},chanceExpense:{mood:"surprised",label:"無奈",emoji:"😣",priority:45,messages:["這張卡是不是拿錯了？","錢才剛進來就出去了……","城市的驚喜有點貴！","我的現金又變薄了！","下次抽卡前可以先深呼吸嗎？"]},tax:{mood:"anxious",label:"焦急",emoji:"😣",priority:55,messages:["納稅是義務，但真的好痛！","城市維護費又來了！","這筆支出超出預算啦！","荷包需要緊急救援！","我要努力賺回來！"]},construction:{mood:"proud",label:"得意",emoji:"😎",priority:45,messages:["讓這條街變得更熱鬧！","升級完成，租金準備起飛！","好房子值得好投資！","我的城市越來越有模樣了！","下一位租客，歡迎光臨！"]},sale:{mood:"relieved",label:"鬆一口氣",emoji:"😮‍💨",priority:60,messages:["先變現，活下來比較重要……","忍痛割愛，之後一定買回來！","現金回來了，但心也碎了！","這是戰略撤退，不是失敗！","留得青山在，繼續拚！"]},bankruptcy:{mood:"bankrupt",label:"沮喪",emoji:"😵",priority:100,messages:["我的城市夢，先暫停一下……","這局真的撐不住了！","下次我會管理好現金流！","所有投資都化成回憶了……","恭喜對手，我會捲土重來！"]},skillUse:{mood:"proud",label:"出牌",emoji:"✨",priority:50,messages:["技能卡啟動！","這張牌用得正是時候！","城市局勢，照我的計畫走！","效果準備生效！","漂亮的一手牌！"]},skillTarget:{mood:"surprised",label:"中招",emoji:"⚡",priority:55,messages:["等等，這張牌是對我的？","局勢突然變了！","這招來得太快了吧！","我的計畫被打亂了！","需要想辦法應對！"]},skillLandSwapTarget:{mood:"surprised",label:"錯愕",emoji:"🏠",priority:55,messages:["等等，我的地產被換走了？！","這筆換地交易，我怎麼沒同意！","我的街區突然易主了！","房契被調包了嗎？","這張換地卡太突然了吧！"]},skillCounter:{mood:"proud",label:"反制",emoji:"🛡️",priority:65,messages:["擋下來了！","這張反制卡沒有浪費！","想算計我，還早得很！","護盾成功！","漂亮化解危機！"]},skillReflect:{mood:"proud",label:"反彈",emoji:"↩️",priority:70,messages:["原路奉還！","這招現在回到你身上！","反彈成功！","攻擊者變成自己了！","這就是出牌時機！"]}};function ai(a,{category:e,summary:n,participants:r}){const o=Lh[e];if(!o||!(r!=null&&r.length))return;a.emotionSequence=(a.emotionSequence||0)+1;const c=a.emotionSequence,f=r.map(({playerId:p,amountDelta:h,category:g})=>{const S=Lh[g]||o;return{playerId:p,mood:S.mood,moodLabel:S.label,emoji:S.emoji,amountDelta:h,message:S.messages[(c+p)%S.messages.length]}}),m={id:c,category:e,summary:n,priority:Math.max(o.priority,...r.map(({category:p})=>{var h;return((h=Lh[p])==null?void 0:h.priority)||0})),players:f};a.emotionEvents||(a.emotionEvents=[]),a.emotionEvents.push(m),a.emotionHistory||(a.emotionHistory=[]),a.emotionHistory.push(m),a.emotionHistory.length>32&&(a.emotionHistory=a.emotionHistory.slice(-32))}const Wn=["#61ac78","#62a6da","#e7b942","#de809a"],e3=["#e997aa","#9ecb91","#e6af66","#e5c963","#ae99d0","#79b6d4","#72bfb1","#b5a38b"],t3=["起點","中山路","南京東路","機會","敦化南路","民生東路","所得稅","松江路","探訪監獄","永康街","師大路","機會","大安路","青田街","城市基金","溫州街","免費停車","天母西路","士林夜市","機會","大直街","內湖路","城市基金","南港路","前往監獄","忠孝東路","信義路","機會","仁愛路","和平東路","奢侈稅","松仁路"],Gt=t3.map((a,e)=>{const n={0:"start",3:"chance",6:"tax",8:"jail",11:"chance",14:"fund",16:"park",19:"chance",22:"fund",24:"gojail",27:"chance",30:"tax"},r=Math.floor(e/4);return{id:e,name:a,type:n[e]||"property",group:r,color:e3[r],price:1e3+r*300+e%4*100}}),St=a=>"$"+a.toLocaleString("en-US"),dm=1,lx=5,n3=10,ox=10,Yn=(a,e,n=Math.round)=>n(e*((a==null?void 0:a.priceIndex)??1)),dl=(a,e)=>Yn(a,e.price),Ml=(a,e)=>Yn(e,a.price*.6),i3=40,Ou=3,or=[{id:"trap",name:"陷害卡",type:"control",timing:"active",icon:"⛓️",summary:"指定玩家進入監獄",target:"player"},{id:"slow",name:"龜速卡",type:"control",timing:"active",icon:"🐌",summary:"目標 3 回合最多走 1 格",target:"player"},{id:"teleport",name:"傳送卡",type:"movement",timing:"active",icon:"✦",summary:"將玩家移到合法位置",target:"player"},{id:"get-out",name:"出獄卡",type:"utility",timing:"active",icon:"🔓",summary:"解除自己的監獄狀態"},{id:"rent-shield",name:"免租卡",type:"defense",timing:"active",icon:"🛡️",summary:"下一次租金免除"},{id:"rent-double",name:"租金加倍卡",type:"money",timing:"active",icon:"×2",summary:"下一次收租提高為 2 倍"},{id:"position-swap",name:"位置交換卡",type:"movement",timing:"active",icon:"⇄",summary:"交換兩名玩家位置",target:"player"},{id:"birthday",name:"生日派對卡",type:"money",timing:"active",icon:"🎂",summary:"其他玩家各支付一筆錢"},{id:"subsidy",name:"城市補助卡",type:"money",timing:"active",icon:"🪙",summary:"從銀行獲得小額補助"},{id:"counter",name:"反制卡",type:"defense",timing:"reaction",icon:"✋",summary:"取消作用在自己的技能"},{id:"reflect",name:"反彈卡",type:"defense",timing:"reaction",icon:"↩",summary:"將單一指定技能反彈"},{id:"redraw",name:"幸運重抽卡",type:"utility",timing:"active",icon:"⟳",summary:"放棄手牌並重新抽卡"},{id:"land-swap",name:"換地卡",type:"control",timing:"active",icon:"🏠",summary:"交換兩塊地產所有權",target:"land"}],Ds=or.map(a=>a.id),Vu=a=>or.find(e=>e.id===a)||null,Oh=Gt.filter(a=>a.type!=="gojail").map(a=>a.id),cx=a=>a===null?null:Number.isInteger(Number(a))&&Number(a)>=1?Number(a):i3,hm=a=>Math.max(0,Math.min(n3,Number.isFinite(Number(a))?Math.round(Number(a)):dm)),a3=a=>Math.min(lx,hm(a)),ux=a=>a!==!1,Iu={houses:32,hotels:12},pm=a=>{const e=[...a];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e},s3=a=>{let e=0,n=0;for(const r of Object.values(a.lots||{}))r.level===5?n++:e+=Math.max(0,Math.min(4,r.level||0));return{houses:Math.max(0,Iu.houses-e),hotels:Math.max(0,Iu.hotels-n)}},Is=a=>a.bank&&Number.isInteger(a.bank.houses)&&Number.isInteger(a.bank.hotels)?a.bank:s3(a),r3=a=>Array.isArray(a)?a.filter(e=>Ds.includes(e)).slice(0,Ds.length):[],l3=a=>a&&Number.isInteger(a.sourceId)&&Number.isInteger(a.targetId)&&Ds.includes(a.cardId)?{sourceId:a.sourceId,targetId:a.targetId,cardId:a.cardId,targetPosition:Number.isInteger(a.targetPosition)?a.targetPosition:null}:null,o3=a=>{var e;return{...a,limitBuildings:ux(a.limitBuildings),maxRounds:cx(a.maxRounds),inflationRate:hm(a.inflationRate??0),priceIndex:Math.max(1,Math.min(ox,Number.isFinite(a.priceIndex)?a.priceIndex:1)),players:a.players.map((n,r)=>({...n,diceCount:n.diceCount??2,color:n.color||Wn[r],human:n.human===void 0?r===0:!!n.human,skillHand:r3(n.skillHand),skillUsedThisTurn:n.skillUsedThisTurn===!0,slowTurns:Number.isInteger(n.slowTurns)&&n.slowTurns>0?n.slowTurns:0,rentShield:n.rentShield===1?1:0,rentMultiplier:n.rentMultiplier===2?2:1})),skillDeck:Array.isArray(a.skillDeck)?a.skillDeck.filter(n=>Ds.includes(n)):pm(Ds),skillDiscard:Array.isArray(a.skillDiscard)?a.skillDiscard.filter(n=>Ds.includes(n)):[],skillOverflow:Number.isInteger((e=a.skillOverflow)==null?void 0:e.playerId)?{playerId:a.skillOverflow.playerId}:null,pendingSkill:l3(a.pendingSkill),bank:{...Is(a)},buildAvailable:a.buildAvailable===!0,buildUsed:a.buildUsed===!0,emotionEvents:[],emotionHistory:[],emotionSequence:Number.isInteger(a.emotionSequence)?a.emotionSequence:0}},c3=[["你",Wn[0],!0],["艾米",Wn[1],!1],["小傑",Wn[2],!1],["喵喵",Wn[3],!1]];function fx(a={}){const e=Math.min(4,Math.max(2,Number(a.count)||4)),n=c3.slice(0,e).map(([o,c,f],m)=>{var h;const p=((h=a.players)==null?void 0:h[m])||{};return{id:m,diceCount:2,name:typeof p.name=="string"&&p.name.trim()?p.name.trim():o,color:p.color||c,human:p.human===void 0?f:!!p.human,cash:15e3,pos:0,jail:0,bankrupt:!1,skillHand:[],skillUsedThisTurn:!1,slowTurns:0,rentShield:0,rentMultiplier:1}}),r=a3(a.inflationRate??dm);return{version:1,players:n,lots:{},skillDeck:pm(Ds),skillDiscard:[],skillOverflow:null,pendingSkill:null,bank:{...Iu},limitBuildings:ux(a.limitBuildings),turn:0,round:1,maxRounds:cx(a.maxRounds),inflationRate:r,priceIndex:1,stage:"ready",dice:[1,1],remaining:0,selected:null,buildAvailable:!1,buildUsed:!1,event:null,winner:null,emotionEvents:[],emotionHistory:[],emotionSequence:0,log:[{text:`歡迎來到城市大亨！${e} 位玩家各獲得 $15,000，初始通膨率 ${r}%。`,kind:"welcome"}],notice:"擲出骰子，開始你的城市冒險。"}}const kt=(a,e,n="info")=>{a.notice=e,a.log.unshift({text:e,kind:n}),a.log=a.log.slice(0,40)},Fa=(a,e)=>Gt.filter(n=>{var r;return((r=a.lots[n.id])==null?void 0:r.owner)===e}),u3=(a,e,n)=>Gt.filter(r=>r.type==="property"&&r.group===e.group).every(r=>{var o;return((o=a.lots[r.id])==null?void 0:o.owner)===n}),Op=(a,e)=>{let n=a.lots[e.id];return n?Yn(a,Math.round(e.price*.18)*(n.level?[1,3,6,10,15,22][n.level]:u3(a,e,n.owner)?2:1)):0},_l=(a,e)=>a.players[e].cash+Fa(a,e).reduce((n,r)=>n+Yn(a,r.price+(a.lots[r.id].level||0)*Math.round(r.price*.6)),0),Ip=(a,e,n=a.turn)=>{const r=Gt[e],o=a.lots[e],c=Is(a);return!r||r.type!=="property"||!o||o.owner!==n||a.turn!==n||a.stage!=="end"||a.selected!==e||!a.buildAvailable||a.buildUsed||o.level>=5||a.players[n].cash<Ml(r,a)?!1:a.limitBuildings===!1||(o.level<4?c.houses>0:c.hotels>0)};function dx(a,e){const n=a.bank||Is(a);e.level===5?n.hotels++:n.houses+=Math.max(0,Math.min(4,e.level||0)),a.bank=n}function hx(a){const e=a.players.filter(n=>!n.bankrupt);e.length===1&&(a.winner=e[0].id,a.stage="finished",kt(a,`${e[0].name}成為城市大亨！`))}const Pp=new Set(["trap","slow","teleport","get-out","rent-shield","rent-double","position-swap","birthday","subsidy","redraw","land-swap"]);function px(a,e,n="事件中，"){const r=a.players[e];if(!r||r.skillHand.length>=Ds.length)return null;!a.skillDeck.length&&a.skillDiscard.length&&(a.skillDeck=pm(a.skillDiscard),a.skillDiscard=[]);const o=a.skillDeck.shift();if(!o)return null;r.skillHand.push(o);const c=Vu(o);return r.skillHand.length>Ou&&(a.skillOverflow={playerId:e}),kt(a,`${r.name}${n}獲得技能卡「${c.name}」。`,"skill"),c}function Pu(a,e,n){const r=e.skillHand.indexOf(n);return r<0?!1:(e.skillHand.splice(r,1),a.skillDiscard.push(n),!0)}function zp(a,e){return Number.isInteger(e)&&e>=0&&e<a.players.length&&!a.players[e].bankrupt}function f3(a,e){return{counter:e.skillHand.includes("counter"),reflect:e.skillHand.includes("reflect")}}function Bp(a,e,n,r,o,{reflected:c=!1}={}){if(e.id==="trap"&&(r.pos=8,r.jail=1),e.id==="slow"&&(r.slowTurns=3),e.id==="teleport"){const p=r.pos;r.pos=o.targetPosition,mx(a,r.pos,{playerId:r.id,flow:!1,drawSkill:!1}),kt(a,`${r.name}由${n.name}使用傳送卡，從${Gt[p].name}移動至${Gt[r.pos].name}。`,"skill")}if(e.id==="get-out"&&(n.jail=0),e.id==="rent-shield"&&(n.rentShield=1),e.id==="rent-double"&&(n.rentMultiplier=2),e.id==="position-swap"&&([n.pos,r.pos]=[r.pos,n.pos]),e.id==="birthday"){const p=Yn(a,300);for(const h of a.players)h.id!==n.id&&!h.bankrupt&&Au(a,h.id,p,n.id,"skill")}if(e.id==="subsidy"){const p=Yn(a,800);n.cash+=p,ai(a,{category:"windfall",summary:`${n.name}使用城市補助卡，獲得 ${St(p)}。`,participants:[{playerId:n.id,amountDelta:p}]})}const f=e.target==="player"?`，目標為${r.name}`:e.target==="land"?`，交換${Gt[o.ownLotId].name}與${Gt[o.targetLotId].name}`:"",m=`${c?"反彈後，":""}${n.name}使用${e.name}${f}。`;if(kt(a,m,"skill"),!c){const p=[{playerId:n.id,category:"skillUse"}];if((e.target==="player"||e.target==="land")&&(r==null?void 0:r.id)!==n.id&&p.push({playerId:r.id,category:e.id==="land-swap"?"skillLandSwapTarget":"skillTarget"}),e.id==="birthday")for(const h of a.players)h.id!==n.id&&!h.bankrupt&&p.push({playerId:h.id,category:"skillTarget"});ai(a,{category:"skillUse",summary:m,participants:p})}e.id==="land-swap"&&kt(a,`${Gt[o.ownLotId].name}與${Gt[o.targetLotId].name}的所有權已交換。`,"skill")}function d3(a,e="pass"){const n=a.pendingSkill;if(!n)return!1;const r=a.players[n.sourceId],o=a.players[n.targetId],c=Vu(n.cardId);if(!r||!o||!c)return a.pendingSkill=null,!1;if(e==="counter"&&Pu(a,o,"counter")){a.pendingSkill=null;const f=`${o.name}使用反制卡，取消${r.name}的${c.name}。`;return kt(a,f,"skill"),ai(a,{category:"skillCounter",summary:f,participants:[{playerId:o.id,category:"skillCounter"},{playerId:r.id,category:"skillTarget"}]}),!0}if(e==="reflect"&&c.target==="player"&&Pu(a,o,"reflect")&&zp(a,r.id)){a.pendingSkill=null,Bp(a,c,r,r,{targetPosition:n.targetPosition,ownLotId:n.ownLotId,targetLotId:n.targetLotId},{reflected:!0});const f=`${o.name}使用反彈卡，將${c.name}反彈給${r.name}。`;return kt(a,f,"skill"),ai(a,{category:"skillReflect",summary:f,participants:[{playerId:o.id,category:"skillReflect"},{playerId:r.id,category:"skillTarget"}]}),!0}return e!=="pass"?!1:(a.pendingSkill=null,Bp(a,c,r,o,{targetPosition:n.targetPosition,ownLotId:n.ownLotId,targetLotId:n.targetLotId}),!0)}function h3(a,e){var h,g;const n=a.players[a.turn],r=e.overflowUse===!0&&((h=a.skillOverflow)==null?void 0:h.playerId)===a.turn&&a.stage!=="finished";if(!(a.stage==="ready"&&!a.skillOverflow||r)||!(n!=null&&n.human)&&!n||n.bankrupt||n.skillUsedThisTurn||a.pendingSkill)return!1;const c=Vu(e.cardId);if(!c||c.timing!=="active"||!Pp.has(c.id)||!n.skillHand.includes(c.id))return!1;const f=zp(a,e.targetId)?a.players[e.targetId]:null,m=c.id==="slow";if(c.target==="player"&&(!f||f.id===n.id&&!m)||c.id==="slow"&&f.slowTurns>0||c.id==="get-out"&&n.jail===0)return!1;let p=null;if(c.id==="land-swap"){const S=a.lots[e.ownLotId],_=a.lots[e.targetLotId];if(!S||!_||S.owner!==n.id||_.owner===n.id||!Gt[e.ownLotId]||!Gt[e.targetLotId]||Gt[e.ownLotId].type!=="property"||Gt[e.targetLotId].type!=="property"||!zp(a,_.owner))return!1;p=a.players[_.owner],[S.owner,_.owner]=[_.owner,S.owner]}if(Pu(a,n,c.id),n.skillUsedThisTurn=!0,((g=a.skillOverflow)==null?void 0:g.playerId)===n.id&&n.skillHand.length<=Ou&&(a.skillOverflow=null),c.target==="player"&&f.id!==n.id){const S=f3(a,f);if(S.counter||S.reflect){a.pendingSkill={sourceId:n.id,targetId:f.id,cardId:c.id,targetPosition:Number.isInteger(e.targetPosition)?e.targetPosition:null,ownLotId:e.ownLotId,targetLotId:e.targetLotId};const _=`${n.name}使用${c.name}，指定${f.name}，等待回應。`;return kt(a,_,"skill"),ai(a,{category:"skillUse",summary:_,participants:[{playerId:n.id,category:"skillUse"},{playerId:f.id,category:"skillTarget"}]}),!0}}return Bp(a,c,n,f||p||n,e),!0}function p3(a,e){var o,c;const n=(o=a.skillOverflow)==null?void 0:o.playerId;if(!Number.isInteger(n)||n<0||n>=a.players.length)return!1;const r=a.players[n];return r.skillHand.length<=Ou||!Pu(a,r,e.cardId)?!1:(r.skillHand.length<=Ou&&(a.skillOverflow=null),kt(a,`${r.name}放棄技能卡「${((c=Vu(e.cardId))==null?void 0:c.name)||e.cardId}」。`,"skill"),!0)}function Au(a,e,n,r=null,o="tax"){let c=a.players[e],f=0;for(const p of Fa(a,e).sort((h,g)=>h.price-g.price)){if(c.cash>=n)break;const h=Yn(a,p.price+a.lots[p.id].level*Math.round(p.price*.6),g=>Math.floor(g*.5));c.cash+=h,f+=h,dx(a,a.lots[p.id]),delete a.lots[p.id],kt(a,`${c.name}變賣${p.name}，回收 ${St(h)}。`,"sell")}f>0&&ai(a,{category:"sale",summary:`${c.name}自動變賣地產，回收 ${St(f)}。`,participants:[{playerId:e,amountDelta:f}]});const m=Math.min(c.cash,n);if(c.cash-=m,r!==null&&(a.players[r].cash+=m),m>0)if(r!==null){const p=a.players[r];ai(a,{category:"rentPaid",summary:`${c.name}支付 ${St(m)} 給${p.name}。`,participants:[{playerId:e,category:"rentPaid",amountDelta:-m},{playerId:r,category:"rentReceived",amountDelta:m}]})}else ai(a,{category:o==="chance"?"chanceExpense":"tax",summary:`${c.name}支付 ${St(m)}。`,participants:[{playerId:e,amountDelta:-m}]});if(m<n){c.bankrupt=!0;const p=n-m;kt(a,`${c.name}資金不足，宣告破產。`,"bankrupt"),ai(a,{category:"bankruptcy",summary:`${c.name}無法支付 ${St(p)}，宣告破產。`,participants:[{playerId:e,amountDelta:-p}]}),hx(a)}}function mx(a,e,n={}){const r=n.playerId??a.turn,o=n.flow!==!1,c=a.players[r],f=Gt[c.pos];if(o&&(a.selected=f.id,a.stage="end",a.buildAvailable=!1,a.buildUsed=!1),f.type==="property"){const m=a.lots[f.id];if(m)if(m.owner!==c.id){let p=Op(a,f);const h=a.players[m.owner];h.rentMultiplier===2&&(p*=2,h.rentMultiplier=1),c.rentShield===1?(c.rentShield=0,kt(a,`${c.name}使用免租卡，免除${f.name}的 ${St(p)} 租金。`,"skill")):(kt(a,`${c.name}在${f.name}支付 ${St(p)} 租金給${h.name}。`,"rent"),Au(a,c.id,p,m.owner,"rent"))}else{a.buildAvailable=!0;const p=m.level===5?"已有旅館。":m.level===4?Is(a).hotels?"可以升級為旅館。":"銀行旅館已用完。":Is(a).houses?"可以加蓋一間房屋。":"銀行房屋已用完。";kt(a,`${c.name}回到自己的${f.name}，${p}`)}else{const p=dl(a,f),h=c.cash>=p;o&&(a.stage=h?"decision":"end"),kt(a,o?`${c.name}抵達${f.name}，${h?"可以購買這塊地產。":"現金不足以購買。"}`:`${c.name}抵達${f.name}，未進行購買。`),o&&!h&&ai(a,{category:"propertyUnaffordable",summary:`${c.name}抵達${f.name}，但現金不足以購買。`,participants:[{playerId:c.id}]})}}else if(f.type==="tax"){const m=Yn(a,f.id===6?1200:1800);kt(a,`${c.name}支付${f.name} ${St(m)}。`,"tax"),Au(a,c.id,m,null,"tax")}else if(f.type==="gojail")c.pos=8,c.jail=1,kt(a,`${c.name}前往監獄，下次回合暫停一次。`,"jail");else if(f.type==="chance"||f.type==="fund"){const m=[["城市更新獎勵","你的街區煥然一新，獲得市府獎勵。",1500],["房屋修繕","城市的美好，需要一點維護費。",-900],["投資分紅","好眼光！你的投資帶來額外收益。",1e3],["社區公益","支持在地社區，支付公益基金。",-600],["創業獎金","你的創意獲得肯定，領取創業獎金。",2e3],["幸運退稅","收到一筆意外的退稅！",800],["通膨升溫","通膨率提高 1 個百分點，新通膨率於下一輪影響物價。",0,1],["通膨降溫","通膨率降低 1 個百分點；降低通膨率不會讓物價倒退。",0,-1]],[p,h,g,S]=m[Math.abs(e||0)%m.length];if(S){const b=a.inflationRate;a.inflationRate=hm(b+S);const R=a.inflationRate-b,N=R===0?`通膨率維持 ${a.inflationRate}%（已達上限或下限）`:`通膨率${R>0?"提高":"降低"}至 ${a.inflationRate}%`;a.event={title:p,body:h,amount:0,kind:"inflation",inflationDelta:R,inflationRate:a.inflationRate},kt(a,`${c.name}抽到「${p}」：${N}，新通膨率於下一輪影響物價。`,"inflation")}else{const b=Yn(a,g);a.event={title:p,body:h,amount:b},kt(a,`${c.name}抽到「${p}」：${b>0?"獲得":"支付"} ${St(Math.abs(b))}。`,"chance"),b>0?(c.cash+=b,ai(a,{category:"windfall",summary:`${c.name}獲得 ${St(b)}。`,participants:[{playerId:c.id,amountDelta:b}]})):Au(a,c.id,-b,null,"chance")}const _=n.drawSkill===!1?null:f.type==="chance"?px(a,c.id,"機會事件中，"):null;_&&(a.event={...a.event,skillCardId:_.id,skillCardName:_.name})}else kt(a,f.type==="start"?`${c.name}抵達起點。`:f.type==="park"?`${c.name}在城市公園休息，享受片刻悠閒。`:`${c.name}只是探訪監獄，自由通行。`);hx(a)}function m3(a,e){var o;if(e.type==="NEW")return fx(e.config);if(e.type==="LOAD")return Gu(e.game)?o3(structuredClone(e.game)):a;const n=structuredClone(a),r=n.players[n.turn];switch(n.emotionEvents=[],e.type){case"SET_DICE_COUNT":if(n.stage!=="ready"||!r.human||r.bankrupt||r.jail||![1,2].includes(e.count))return a;r.diceCount=e.count;break;case"ROLL":if(n.stage!=="ready"||r.bankrupt||n.pendingSkill)return a;if(r.jail){r.jail--,n.stage="end",kt(n,`${r.name}在監獄休息一回合，下回合恢復行動。`);break}if(!Array.isArray(e.dice)||e.dice.length!==(r.diceCount??2)||!e.dice.every(p=>Number.isInteger(p)&&p>=1&&p<=6))return a;n.dice=[...e.dice];const c=e.dice.reduce((p,h)=>p+h,0),f=r.slowTurns>0;r.slowTurns=Math.max(0,r.slowTurns-(f?1:0)),n.remaining=f?Math.min(1,c):c,n.event=null,n.stage="moving",n.eventIndex=e.eventIndex,kt(n,`${r.name}擲出 ${e.dice.join(" + ")}，前進 ${n.remaining} 格。${f?"龜速效果生效，本回合最多前進 1 格。":""}`,"dice");break;case"STEP":if(n.stage!=="moving")return a;if(r.pos=(r.pos+1)%32,r.pos===0){const p=Yn(n,2e3);r.cash+=p,kt(n,`${r.name}通過起點，領取 ${St(p)}。`,"salary"),ai(n,{category:"salary",summary:`${r.name}經過起點，獲得 ${St(p)}。`,participants:[{playerId:r.id,amountDelta:p}]})}n.remaining--;const m=Gt[r.pos].type==="fund"?px(n,r.id,n.remaining===0?"抵達城市基金格，":"經過城市基金格，"):null;n.remaining===0&&(mx(n,n.eventIndex),m&&n.event&&(n.event={...n.event,skillCardId:m.id,skillCardName:m.name}));break;case"BUY":{if(n.stage!=="decision")return a;const p=Gt[r.pos],h=dl(n,p);if(n.lots[p.id]||r.cash<h)return a;r.cash-=h,n.lots[p.id]={owner:r.id,level:0},n.stage="end",kt(n,`${r.name}購買了${p.name}，支付 ${St(h)}。`,"buy"),ai(n,{category:"purchase",summary:`${r.name}購買${p.name}，支付 ${St(h)}。`,participants:[{playerId:r.id,amountDelta:-h}]});break}case"SKIP":if(n.stage!=="decision")return a;n.stage="end",kt(n,`${r.name}暫不購買${Gt[r.pos].name}。`);break;case"BUILD":{if(!Ip(n,e.id))return a;const p=Gt[e.id],h=n.lots[e.id],g=Ml(p,n);n.bank=n.bank||Is(n),r.cash-=g,h.level<4?(n.bank.houses--,h.level++,kt(n,`${r.name}在${p.name}加蓋第 ${h.level} 間房屋，支付 ${St(g)}。`,"build")):(n.bank.houses+=4,n.bank.hotels--,h.level=5,kt(n,`${r.name}將${p.name}的 4 間房屋升級為旅館，支付 ${St(g)}。`,"build")),ai(n,{category:"construction",summary:`${r.name}支付 ${St(g)} 建設地產。`,participants:[{playerId:r.id,amountDelta:-g}]}),n.buildAvailable=!1,n.buildUsed=!0;break}case"SELL":{if(!["ready","end"].includes(n.stage)||((o=n.lots[e.id])==null?void 0:o.owner)!==r.id)return a;const p=Gt[e.id],h=n.lots[e.id],g=Yn(n,p.price+h.level*Math.round(p.price*.6),S=>Math.floor(S*.5));dx(n,h),r.cash+=g,delete n.lots[e.id],n.buildAvailable=!1,kt(n,`${r.name}變賣${p.name}，回收 ${St(g)}。`,"sell"),ai(n,{category:"sale",summary:`${r.name}變賣${p.name}，回收 ${St(g)}。`,participants:[{playerId:r.id,amountDelta:g}]});break}case"USE_SKILL_CARD":if(!h3(n,e))return a;break;case"RESPOND_SKILL":if(!n.pendingSkill||e.playerId!==n.pendingSkill.targetId||!["counter","reflect","pass"].includes(e.response)||!d3(n,e.response))return a;break;case"RESOLVE_SKILL_OVERFLOW":if(!p3(n,e))return a;break;case"NEXT":if(n.stage!=="end"||n.skillOverflow||n.pendingSkill)return a;{let p=n.turn;do if(p=(p+1)%n.players.length,p===0){n.round++;const h=n.priceIndex;n.priceIndex=Math.min(ox,n.priceIndex*(1+n.inflationRate/100)),n.priceIndex>h&&kt(n,`新的一輪開始，物價指數升至 ${n.priceIndex.toFixed(2)}×。`,"inflation")}while(n.players[p].bankrupt);n.turn=p,n.players[p].skillUsedThisTurn=!1,n.event=null,n.stage="ready",n.selected=null,n.buildAvailable=!1,n.buildUsed=!1,n.maxRounds!==null&&n.round>n.maxRounds?(n.winner=n.players.filter(h=>!h.bankrupt).sort((h,g)=>_l(n,g.id)-_l(n,h.id))[0].id,n.stage="finished",kt(n,`${n.maxRounds} 回合結束！${n.players[n.winner].name}以最高總資產獲勝。`)):kt(n,`輪到${n.players[p].name}，準備擲骰子。`);break}default:return a}return n.limitBuildings===!1&&(n.bank={...Iu}),n}function yu(a){return a<=8?[-8+a*2,8]:a<=16?[8,8-(a-8)*2]:a<=24?[8-(a-16)*2,-8]:[-8,-8+(a-24)*2]}const g3=Ye.forwardRef(function({game:e,onSelect:n,onError:r,emotionAnchorRefs:o,emotionMoods:c,children:f},m){const p=Ye.useRef(),h=Ye.useRef(),g=Ye.useRef(e),S=Ye.useRef(n),_=Ye.useRef({});return g.current=e,S.current=n,_.current=c||{},Ye.useImperativeHandle(m,()=>({reset(){var b;(b=h.current)==null||b.reset()},zoom(b){const R=h.current;R&&(R.camera.position.sub(R.controls.target).multiplyScalar(b).clampLength(13,80).add(R.controls.target),R.controls.update())},rotate(){h.current&&(h.current.controls.autoRotate=!h.current.controls.autoRotate)},top(){const b=h.current;b&&(b.camera.position.set(0,29,.01),b.controls.update())}}),[]),Ye.useEffect(()=>{let b=!1,R=()=>{};return(async()=>{var Dt;try{await Promise.race([((Dt=document.fonts)==null?void 0:Dt.ready)||Promise.resolve(),new Promise(ve=>setTimeout(ve,2e3))])}catch{}if(b)return;const T='"Noto Sans TC", "Microsoft JhengHei", sans-serif',x=p.current;let U;try{U=new LR({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{r==null||r("瀏覽器無法啟用 WebGL，請開啟硬體加速後重新整理。");return}U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.shadowMap.enabled=!0,U.shadowMap.type=Ao,U.outputColorSpace=hi,U.toneMapping=Wp,U.toneMappingExposure=.9,x.appendChild(U.domElement),U.domElement.setAttribute("aria-label","3D 城市棋盤，拖曳旋轉，滾輪縮放，點擊地產查看詳情");const L=new cb;L.background=new At("#eaf0e5"),L.fog=new im("#eaf0e5",48,90);const M=new Fi(39,1,.1,120),I=new IR(M,U.domElement);I.enableDamping=!0,I.dampingFactor=.07,I.minDistance=13,I.maxDistance=80,I.maxPolarAngle=Math.PI*.485,I.minPolarAngle=.01,I.target.set(0,0,0),I.autoRotateSpeed=.65,I.enablePan=!0;const P=()=>{M.position.set(4.5,28,22).multiplyScalar(Math.max(1,1.12/M.aspect)),I.target.set(0,0,0),I.autoRotate=!1,I.update()};P(),h.current={camera:M,controls:I,reset:P},L.add(new Db("#fff9e9","#86967e",2.4));const F=new Lb("#fff5df",3.2);F.position.set(-12,25,8),F.castShadow=!0,F.shadow.mapSize.set(2048,2048),Object.assign(F.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65}),F.shadow.normalBias=.04,F.shadow.bias=-2e-4,F.shadow.radius=4,L.add(F);const A=new Map,O=ve=>(A.has(ve)||A.set(ve,new Lv({color:ve,roughness:.82})),A.get(ve)),q=new Map,k=(ve,C,v,X,G,K=0,me=0,ye=0,ee=0)=>{const ae=[C,v,X,ee].join(",");q.has(ae)||q.set(ae,ee?new fm(C,v,X,2,ee):new Os(C,v,X));const ge=new wn(q.get(ae),O(G));return ge.position.set(K,me,ye),ge.castShadow=!0,ge.receiveShadow=!0,ve.add(ge),ge},j=new om(1,14,10),pe=(ve,C,v,X,G,K,me=K,ye=K)=>{const ee=new wn(j,O(C));return ee.position.set(v,X,G),ee.scale.set(K,me,ye),ee.castShadow=!0,ee.receiveShadow=!0,ve.add(ee),ee},he=(ve,C,v,X,G,K,me,ye,ee=24)=>{const ae=new wn(new Fu(C,v,X,ee),O(G));return ae.position.set(K,me,ye),ae.castShadow=!0,ae.receiveShadow=!0,ve.add(ae),ae},ie=new wn(new fr(200,200),O("#eaf0e5"));ie.rotation.x=-Math.PI/2,ie.position.y=-.67,ie.receiveShadow=!0,L.add(ie),he(L,14.3,14.5,.22,"#d2dfc8",0,-.51,0,100),he(L,13.8,13.8,.035,"#dce7d4",0,-.38,0,100),k(L,18.55,.65,18.55,"#405d50",0,-.03,0,.2),k(L,18.35,.13,18.35,"#f8f4e9",0,.35,0,.1),k(L,14.05,.08,14.05,"#b8d0a2",0,.46,0,.1);const H=[];function W(ve,C=512,v=512){const X=document.createElement("canvas");X.width=C,X.height=v;const G=X.getContext("2d");ve(G,C,v);const K=new Sb(X);return K.colorSpace=hi,K.minFilter=Bn,K.magFilter=Bn,K.anisotropy=U.capabilities.getMaxAnisotropy(),H.push(K),K}const re={start:"➜",chance:"?",fund:"✦",tax:"$",jail:"▥",gojail:"▥",park:"P"},Se=[],Ee=[],z=[],J=[],Re=new Map;function Oe(ve,C){const v=`${ve}:${C}`;if(!Re.has(v)){const X=W((G,K,me)=>{G.clearRect(0,0,K,me),G.fillStyle=C,G.beginPath(),G.roundRect(8,8,K-16,me-16,24),G.fill(),G.strokeStyle="#fffaf0",G.lineWidth=8,G.stroke(),G.fillStyle="#fffaf0",G.beginPath(),G.arc(K/2,me/2,43,0,Math.PI*2),G.fill(),G.fillStyle="#294237",G.textAlign="center",G.textBaseline="middle",G.font="bold 72px Arial",G.fillText(String(ve+1),K/2,me/2+3)},192,144);Re.set(v,new Xy({map:X,toneMapped:!1,depthTest:!1,depthWrite:!1}))}return Re.get(v)}for(const ve of Gt){const[C,v]=yu(ve.id),X=new Ha;X.position.set(C,.44,v),L.add(X);const G=k(X,1.94,.14,1.94,"#fffaf0",0,0,0,.035);G.userData.tile=ve.id,Se.push(G),Ee[ve.id]=G;const K=g.current.priceIndex||1,me=(ge,Ue,Le,Ne)=>{ge.fillStyle="#fcf9f0",ge.fillRect(0,0,Ue,Le),ve.type==="property"&&(ge.fillStyle=ve.color,ge.fillRect(0,0,Ue,82)),ge.fillStyle="#294237",ge.textAlign="center",ge.font=`bold 76px ${T}`,ge.fillText(ve.name,Ue/2,ve.type==="property"?180:140),ve.type==="property"?(ge.font="60px Arial",ge.fillText(St(Math.round(ve.price*Ne)),Ue/2,290),ge.fillStyle="#8c998e",ge.font="26px sans-serif",ge.fillText("CITY PROPERTY",Ue/2,410)):(ge.font="bold 135px Arial",ge.fillStyle=ve.type==="chance"?"#ba9270":"#648473",ge.fillText(re[ve.type],Ue/2,320),ge.fillStyle="#728375",ge.font=`30px ${T}`,ge.fillText(ve.type==="start"?`+ ${St(Math.round(2e3*Ne))}`:ve.type==="tax"?"城市稅收":ve.type==="park"?"歇一會兒":ve.type==="chance"?"好運降臨":ve.type==="fund"?"城市生活":"JUST VISITING",Ue/2,420))},ye=W((ge,Ue,Le)=>me(ge,Ue,Le,K));(ve.type==="property"||ve.type==="start")&&J.push(ge=>{const Ue=ye.image.getContext("2d");me(Ue,ye.image.width,ye.image.height,ge),ye.needsUpdate=!0});const ee=new wn(new fr(1.89,1.89),new wo({map:ye,toneMapped:!1}));ee.rotation.x=-Math.PI/2,ee.rotation.z=ve.id<8?0:ve.id<16?Math.PI/2:ve.id<24?Math.PI:-Math.PI/2,ee.position.y=.076,X.add(ee);const ae=new Ha;ae.position.set(C,.58,v),ae.rotation.y=ve.id<8?0:ve.id<16?Math.PI/2:ve.id<24?Math.PI:-Math.PI/2,L.add(ae),z[ve.id]=ae}for(const ve of[-4.4,4.4]){k(L,.8,.025,13,"#d3d2bb",ve,.525,0),k(L,1.15,.018,13,"#f6f1df",ve,.513,0);for(let C=-6;C<=6;C+=.75)k(L,.035,.008,.29,"#faf6e8",ve,.543,C)}for(const ve of[-3.2,3.2]){k(L,13,.025,.8,"#d3d2bb",0,.525,ve),k(L,13,.018,1.15,"#f6f1df",0,.513,ve);for(let C=-6;C<=6;C+=.75)k(L,.29,.008,.035,"#faf6e8",C,.543,ve)}function Fe(ve,C,v=1){const X=new Ha;X.position.set(ve,.52,C),X.scale.setScalar(v),L.add(X),he(X,.045,.075,.55,"#94785c",0,.28,0,7),pe(X,"#8db578",0,.83,0,.29,.44,.29),pe(X,"#a2c28a",-.14,.69,.02,.22,.29,.22)}function se(ve,C,v,X,G,K,me=!1){const ye=new Ha;ye.position.set(ve,.53,C),L.add(ye),k(ye,v+.18,.12,X+.18,"#ede9d5",0,.06,0,.04),k(ye,v,G,X,K,0,G/2+.1,0,.035),k(ye,v+.1,.1,X+.1,"#fff4df",0,G+.12,0,.02);for(let ee=.45;ee<G-.1;ee+=.42){for(let ae=-v/2+.22;ae<v/2-.08;ae+=.32)k(ye,.17,.23,.018,"#6d9097",ae,ee,X/2+.01),k(ye,.17,.23,.018,"#6d9097",ae,ee,-X/2-.01);for(let ae=-X/2+.22;ae<X/2-.08;ae+=.32)k(ye,.018,.23,.17,"#6d9097",v/2+.01,ee,ae);k(ye,v+.025,.045,X+.025,"#ede9d8",0,ee+.17,0)}if(k(ye,.24,.36,.024,"#496d68",0,.28,X/2+.02),me){const ee=new wn(new Do(v*.81,.55,4),O("#c98468"));ee.rotation.y=Math.PI/4,ee.scale.z=X/v,ee.position.y=G+.42,ee.castShadow=!0,ye.add(ee)}else k(ye,v*.7,.08,X*.7,"#a5b7ae",0,G+.21,0),k(ye,.23,.2,.25,"#e9e4d2",v*.18,G+.34,0)}se(-5.6,-5.2,1.1,1.3,1.2,"#dbc39f",!0),se(-2.6,-5.15,1.15,1.05,2.2,"#b4cbd3"),se(-.55,-5.2,1.25,1.25,3.15,"#93b4c4"),se(1.55,-5.2,1.3,1.3,1.7,"#e3c7a5"),se(5.6,-5,1.1,1.5,2.3,"#aac5bc"),se(-5.7,-.9,1.05,1.35,1.7,"#b3c7ce"),se(5.7,-1.1,1.1,1.25,1.3,"#e4c2a4",!0),se(-5.7,4.95,1.15,1.25,1.2,"#e0bf9d",!0),se(-2.6,5.25,1.25,1.1,1.35,"#c1d1c7",!0),se(2.15,5.25,1.15,1.2,2.15,"#b7cad2"),se(5.55,5.3,1.1,1.15,1.7,"#d4c7b2");for(const[ve,C]of[[-6.4,-6.3],[-3.6,-6.1],[3.2,-5.8],[6.2,-3.8],[-6.3,1.8],[-5.4,2],[-3.3,-1.9],[3.4,-1.9],[-3.3,1.9],[3.3,1.9],[-.5,5.2],[.4,6.2],[6.1,2.2],[-3.5,6.3],[3.8,6.2],[-6.3,6.4]])Fe(ve,C,1.05);for(let ve=0;ve<24;ve++){const C=ve*Math.PI*2/24;ve%3!==0&&Fe(Math.cos(C)*12.5,Math.sin(C)*12.5,.85+ve%3*.12)}k(L,7.1,.055,4.3,"#dce0b9",0,.545,0,.3);const Te=W((ve,C,v)=>{ve.clearRect(0,0,C,v),ve.textAlign="center",ve.fillStyle="#3d6850",ve.font="900 152px Arial",ve.fillText("CITY",C/2,148),ve.fillText("TYCOON",C/2,265),ve.font=`25px ${T}`,ve.fillStyle="#6d8468",ve.fillText("每一步，都是新可能。",C/2,338)},1024,420),Ce=new wn(new fr(6.2,2.54),new Lv({map:Te,transparent:!0,depthWrite:!1}));Ce.rotation.x=-Math.PI/2,Ce.position.set(0,.58,0),L.add(Ce),he(L,.75,.82,.12,"#ede7cf",0,.59,4.3),he(L,.62,.62,.05,"#91c8ce",0,.675,4.3),he(L,.18,.28,.5,"#dfebdf",0,.95,4.3),pe(L,"#9fcfd2",0,1.3,4.3,.14),he(L,.36,.26,.08,"#e8eedc",0,1.16,4.3);const Ge=[];for(let ve=0;ve<4;ve++){const C=new Ha;L.add(C),he(C,.26,.3,.12,Wn[ve],0,.08,0),pe(C,Wn[ve],0,.53,0,.23,.32,.18),pe(C,"#f1d5b0",0,1,0,.225),pe(C,Wn[ve],0,1.12,-.015,.24,.14,.235),k(C,.44,.05,.15,Wn[ve],0,1.1,.16,.025);for(const G of[-.09,.09])pe(C,"#273e34",G,1.015,.198,.025),k(C,.13,.2,.19,"#3c5349",G,.22,.025,.035),pe(C,"#f1d5b0",G*2.8,.51,0,.075,.15,.075);k(C,.29,.3,.15,"#edcf8a",0,.56,-.19,.04),C.scale.setScalar(.95);const[v,X]=yu(0);C.position.set(v+(ve%2-.5)*.62,.59,X+(Math.floor(ve/2)-.5)*.62),C.traverse(G=>{G.material===O(Wn[ve])&&(G.userData.playerTint=!0)}),Ge.push(C)}const st=new wn(new lm(.42,.5,40),new wo({color:"#f4c65b",side:la}));st.rotation.x=-Math.PI/2,L.add(st);const je=new wn(new Os(1.98,.045,1.98),new wo({color:"#edc768",transparent:!0,opacity:.6}));L.add(je),je.visible=!1;let Ot="",ht=Number.NaN,dt,ct=0,Be=performance.now();const vt=()=>{const ve=x.clientWidth,C=x.clientHeight;U.setSize(ve,C),M.aspect=ve/C,M.updateProjectionMatrix(),P()},Jt=new ResizeObserver(vt);Jt.observe(x),vt();let Vt;const on=ve=>{Vt=[ve.clientX,ve.clientY]},Bt=ve=>{if(!Vt||Math.hypot(ve.clientX-Vt[0],ve.clientY-Vt[1])>6)return;const C=x.getBoundingClientRect(),v=new Pb;v.setFromCamera(new ot((ve.clientX-C.left)/C.width*2-1,-(ve.clientY-C.top)/C.height*2+1),M);const X=v.intersectObjects(Se)[0];X&&S.current(X.object.userData.tile)};x.addEventListener("pointerdown",on),x.addEventListener("pointerup",Bt);function an(){const ve=o==null?void 0:o.current;if(!(ve!=null&&ve.size))return;const C=x.getBoundingClientRect(),v={left:12,top:72,right:C.width-12,bottom:C.height-82},X=[...x.parentElement.querySelectorAll(".glass-activity:not([hidden]),.world-heading,.world-top-right,.board-foot")].map(K=>{const me=K.getBoundingClientRect();return{left:me.left-C.left,top:me.top-C.top,right:me.right-C.left,bottom:me.bottom-C.top}}),G=[];for(const[K,me]of[...ve.entries()].sort(([ye],[ee])=>ye-ee)){const ye=Ge[K];if(!(me!=null&&me.isConnected)||!ye||!me.offsetWidth||!me.offsetHeight)continue;const ee=ye.position.clone().add(new te(0,1.45,0)).project(M),ae=(ee.x*.5+.5)*C.width,ge=(-ee.y*.5+.5)*C.height,Ue=me.offsetWidth,Le=me.offsetHeight,Ne={left:ae-Ue/2,top:ge-Le-20},ze=[Ne,{left:Ne.left-Ue*.62-18,top:Ne.top},{left:Ne.left+Ue*.62+18,top:Ne.top},{left:Ne.left-Ue*.42-14,top:Ne.top-42},{left:Ne.left+Ue*.42+14,top:Ne.top-42},{left:Ne.left,top:Ne.top-58}].map(Y=>({left:Math.max(v.left,Math.min(v.right-Ue,Y.left)),top:Math.max(v.top,Math.min(v.bottom-Le,Y.top))}));let Ve=ze[0],nt=1/0;for(const Y of ze){const Ie={...Y,right:Y.left+Ue,bottom:Y.top+Le};let xe=Math.hypot(Y.left-Ne.left,Y.top-Ne.top);for(const Pe of[...G,...X]){const He=Math.max(0,Math.min(Ie.right,Pe.right)-Math.max(Ie.left,Pe.left)),we=Math.max(0,Math.min(Ie.bottom,Pe.bottom)-Math.max(Ie.top,Pe.top));xe+=He*we*100}xe<nt&&(nt=xe,Ve=Y)}me.style.left=`${Ve.left}px`,me.style.top=`${Ve.top}px`,me.style.setProperty("--tail-x",`${Math.max(18,Math.min(Ue-18,ae-Ve.left))}px`),G.push({...Ve,right:Ve.left+Ue,bottom:Ve.top+Le})}}function Q(){var G;dt=requestAnimationFrame(Q);const ve=performance.now(),C=Math.min((ve-Be)/1e3,.05);Be=ve,ct+=C;const v=g.current;for(let K=0;K<Ge.length;K++)Ge[K].visible=!!v.players[K]&&!v.players[K].bankrupt;for(let K=0;K<v.players.length;K++){const me=v.players[K],ye=Ge[K],[ee,ae]=yu(me.pos),ge=_.current[K];ye.traverse(nt=>{nt.userData.playerTint&&(nt.material=O(me.color||Wn[K]))});const Ue=ee+(K%2-.5)*.62,Le=ae+(Math.floor(K/2)-.5)*.62,Ne=Math.hypot(Ue-ye.position.x,Le-ye.position.z);ye.userData.baseRotationY=Math.atan2(Ue-ye.position.x,Le-ye.position.z),Ne>.04&&(ye.position.x=Rp.damp(ye.position.x,Ue,13,C),ye.position.z=Rp.damp(ye.position.z,Le,13,C));const ze=Ne>.04?Math.abs(Math.sin(ct*17))*.18:0,Ve=ge==="happy"?Math.abs(Math.sin(ct*10))*.1:ge==="sad"?-.1:ge==="surprised"?Math.sin(ct*12)*.045:ge==="relieved"?Math.sin(ct*5)*.025:0;ye.position.y=.59+ze+Ve,ye.rotation.y=(ye.userData.baseRotationY||0)+(ge==="proud"?Math.sin(ct*8)*.12:0),ye.rotation.z=ge==="anxious"?Math.sin(ct*32)*.045:0,ye.position.x+=ge==="anxious"?Math.sin(ct*34)*.035:0,ye.scale.setScalar(.95*(ge==="surprised"?1+Math.max(0,Math.sin(ct*12))*.09:1)),ye.visible=!me.bankrupt}if(v.priceIndex!==ht&&(ht=v.priceIndex,J.forEach(K=>K(ht))),st.position.copy(Ge[v.turn].position),st.position.y=.595,st.scale.setScalar(1+Math.sin(ct*3)*.06),v.selected!==null){const[K,me]=yu(v.selected);je.position.set(K,.536,me),je.visible=!0}else je.visible=!1;const X=JSON.stringify([v.lots,v.players.map(K=>K.color)]);if(Ot!==X){Ot=X;for(const K of Gt){const me=z[K.id];for(;me.children.length;){const ae=me.children[0];ae.userData.disposableGeometry&&ae.geometry.dispose(),me.remove(ae)}const ye=v.lots[K.id],ee=ye?((G=v.players[ye.owner])==null?void 0:G.color)||Wn[ye.owner]:null;if(Ee[K.id].material=O(ee||"#fffaf0"),ye){k(me,.045,.72,.045,"#647568",.67,.36,.7,.01);const ae=new mb(Oe(ye.owner,ee));if(ae.position.set(.67,.86,.7),ae.scale.set(.62,.465,1),ae.renderOrder=5,me.add(ae),k(me,1.75,.055,.13,ee,0,0,.84,.015),ye.level===5){k(me,.62,.72,.58,ee,0,.36,-.18,.04),k(me,.72,.08,.68,"#f8f0d8",0,.76,-.18,.02);const ge=new wn(new Do(.43,.28,4),O("#d2a451"));ge.position.set(0,.96,-.18),ge.userData.disposableGeometry=!0,ge.rotation.y=Math.PI/4,ge.castShadow=!0,me.add(ge),k(me,.18,.18,.03,"#e7b64d",0,.42,-.49,.01)}else{const ge=[[-.3,-.35],[.3,-.35],[-.3,.05],[.3,.05]];for(let Ue=0;Ue<ye.level;Ue++){const[Le,Ne]=ge[Ue];k(me,.33,.32,.34,ee,Le,.2,Ne,.02);const ze=new wn(new Do(.3,.19,4),O("#faf0d7"));ze.position.set(Le,.45,Ne),ze.userData.disposableGeometry=!0,ze.rotation.y=Math.PI/4,ze.castShadow=!0,me.add(ze)}}}}}I.update(),an(),U.render(L,M)}Q(),R=()=>{cancelAnimationFrame(dt),Jt.disconnect(),x.removeEventListener("pointerdown",on),x.removeEventListener("pointerup",Bt),I.dispose();const ve=new Set,C=new Set;L.traverse(v=>{v.geometry&&ve.add(v.geometry),v.material&&C.add(v.material)}),ve.forEach(v=>v.dispose()),q.forEach(v=>v.dispose()),C.forEach(v=>v.dispose()),A.forEach(v=>v.dispose()),Re.forEach(v=>v.dispose()),H.forEach(v=>v.dispose()),U.dispose(),U.domElement.parentNode===x&&x.removeChild(U.domElement),h.current=null}})(),()=>{b=!0,R()}},[]),E.createElement("div",{className:"board-canvas",ref:p},f)});function _3({game:a,onLoad:e}){const[n,r]=Ye.useState([]),[o,c]=Ye.useState(""),[f,m]=Ye.useState(""),[p,h]=Ye.useState(null),g=()=>{try{r(Po())}catch{m("無法讀取瀏覽器存檔，請檢查儲存權限或資料格式。")}};Ye.useEffect(()=>{g();const b=setInterval(g,6e4);return window.addEventListener("storage",g),()=>{clearInterval(b),window.removeEventListener("storage",g)}},[]);function S(b=!1){try{const R=Po();if(r(R),R.length===10&&!b){h({type:"replace"});return}r(JR(a,o,b)),c(""),h(null),m("已儲存，可保留 30 天。")}catch(R){h(null),m(`儲存失敗：${R.message} 請確認瀏覽器允許儲存且空間足夠。`)}}function _(){try{const b=$R(p.id);e(b)}catch(b){h(null),m(b.message),g()}}return E.createElement("div",{className:"save-manager"},E.createElement("p",{className:"modal-lead"},"遊戲已暫停。手動存檔 ",n.length," / 10，每份保留 30 天；僅此瀏覽器與網站可用。自動存檔另計。"),E.createElement("label",{htmlFor:"save-name"},"存檔名稱（選填）"),E.createElement("input",{id:"save-name",maxLength:60,value:o,onChange:b=>c(b.target.value),placeholder:`回合 ${a.round}`}),E.createElement("button",{className:"primary",onClick:()=>S()},"儲存目前進度"),E.createElement("p",{role:"status"},f),p?E.createElement("section",{className:"save-confirm"},E.createElement("p",null,p.type==="replace"?"已有 10 個版本，確定移除最舊版本並儲存目前進度？":"確定讀取此版本？目前未手動儲存的進度將被取代。"),E.createElement("button",{className:"primary",onClick:()=>p.type==="replace"?S(!0):_()},"確認",p.type==="replace"?"取代並儲存":"讀取"),E.createElement("button",{className:"secondary full",onClick:()=>h(null)},"取消")):null,!n.length&&E.createElement("p",null,"尚無手動存檔。"),n.map(b=>E.createElement("article",{className:"save-entry",key:b.id},E.createElement("div",null,E.createElement("strong",null,b.name),E.createElement("small",null,new Date(b.savedAt).toLocaleString("zh-TW")),E.createElement("small",null,"回合 ",b.game.round," · 你的總資產 ",St(_l(b.game,0))),E.createElement("small",null,"到期：",new Date(b.savedAt+rx).toLocaleString("zh-TW"))),E.createElement("button",{className:"secondary",onClick:()=>h({type:"load",id:b.id})},"讀取"))))}const v3=""+new URL("Velvet_Afternoon-Bmw7r07b.mp3",import.meta.url).href,gx="city-tycoon:background-music:v1";function y3(){try{const a=JSON.parse(localStorage.getItem(gx));return{enabled:(a==null?void 0:a.enabled)===!0,volume:typeof(a==null?void 0:a.volume)=="number"&&Number.isFinite(a.volume)?Math.max(0,Math.min(100,a.volume)):50}}catch{return{enabled:!1,volume:50}}}function x3(){const[a,e]=Ye.useState(y3),[n,r]=Ye.useState(!1),[o,c]=Ye.useState(""),f=Ye.useRef(null),m=Ye.useRef(0);function p(){const g=++m.current;c(""),f.current.play().catch(S=>{g===m.current&&c(S.name==="NotAllowedError"?"點一下播放背景音樂":"音樂無法播放，請重試")})}Ye.useEffect(()=>{const g=f.current;return g.volume=a.volume/100,a.enabled&&p(),()=>{m.current++,g.pause()}},[]),Ye.useEffect(()=>{f.current.volume=a.volume/100;try{localStorage.setItem(gx,JSON.stringify(a))}catch{}},[a]);function h(){f.current.paused?(e(g=>({...g,enabled:!0})),p()):(m.current++,f.current.pause(),c(""),e(g=>({...g,enabled:!1})))}return E.createElement("div",{className:"background-music"},E.createElement("audio",{ref:f,src:v3,loop:!0,preload:"none",onPlaying:()=>r(!0),onPause:()=>r(!1),onError:()=>{r(!1),c("音樂無法載入，請重新整理")}}),E.createElement("button",{className:"music-toggle","aria-label":n?"關閉背景音樂":"開啟背景音樂","aria-pressed":n,onClick:h,title:o||"Velvet Afternoon"},E.createElement(GM,{size:16}),E.createElement("span",null,"背景音樂"),n?E.createElement(VM,{size:14}):E.createElement(XM,{size:14})),E.createElement("label",{className:"music-volume"},E.createElement("span",{className:"music-volume-label"},"音量"),E.createElement("input",{type:"range",min:"0",max:"100",step:"1","aria-label":"背景音樂音量",value:a.volume,onChange:g=>e(S=>({...S,volume:Number(g.target.value)}))}),E.createElement("output",null,a.volume,"%")),o&&E.createElement("span",{className:"music-message",role:"status"},o))}function _x(a){return Number.isFinite(a)?`${a>0?"+":"−"}${St(Math.abs(a))}`:""}const S3={happy:"🙌",sad:"💧",surprised:"❗",proud:"⭐",anxious:"🔥",relieved:"☁️",bankrupt:"💔"};function vx({message:a,player:e,anchorRefs:n,mobile:r=!1,animated:o=!0,paused:c=!1}){if(!e)return null;const f=_x(a.amountDelta),m=`emotion-${a.mood}`,p=e.color||"#61ac78";return E.createElement("div",{ref:r?void 0:h=>{n&&(h?n.current.set(e.id,h):n.current.delete(e.id))},className:`emotion-bubble ${m}${o?"":" motion-off"}${c?" is-paused":""}${r?" emotion-mobile-entry":""}`,style:{"--player":p},"aria-hidden":"true"},E.createElement("div",{className:"emotion-card"},E.createElement("div",{className:"emotion-bubble-heading"},E.createElement("span",{className:"emotion-player-dot"}),E.createElement("strong",null,e.name),E.createElement("span",{className:"emotion-mood-icon","aria-hidden":"true"},a.emoji),E.createElement("span",{className:"emotion-mood-label"},a.moodLabel),E.createElement("span",{className:"emotion-gesture","aria-hidden":"true"},S3[a.mood]),E.createElement("b",{className:"emotion-amount"},f)),E.createElement("p",null,a.message)))}function M3({event:a,players:e,anchorRefs:n,animated:r,paused:o=!1}){if(!a)return null;const c=new Map(e.map(m=>[m.id,m])),f=`${a.summary} ${a.players.map(m=>{const p=c.get(m.playerId);return`${(p==null?void 0:p.name)||"玩家"}，${m.moodLabel}，${_x(m.amountDelta)}，${m.message}`}).join(" ")}`;return E.createElement(E.Fragment,null,E.createElement("div",{className:"emotion-layer","aria-hidden":"true"},a.players.map(m=>E.createElement(vx,{key:`${a.id}-${m.playerId}`,message:m,player:c.get(m.playerId),anchorRefs:n,animated:r,paused:o}))),E.createElement("span",{className:"visually-hidden",role:"status","aria-live":"polite"},f))}function E3({event:a,players:e,animated:n,paused:r=!1}){if(!a)return null;const o=new Map(e.map(c=>[c.id,c]));return E.createElement("div",{className:"emotion-mobile-feed","aria-hidden":"true"},a.players.map(c=>E.createElement(vx,{key:`${a.id}-${c.playerId}`,message:c,player:o.get(c.playerId),mobile:!0,animated:n,paused:r})))}const sr={enter:180,fly:620,flip:720,exit:360},b3=9e3,T3=6e3,my={proud:{label:"得意",emoji:"😎",message:"這張牌用得正是時候！"},surprised:{label:"驚訝",emoji:"😲",message:"等等，這張牌是對我的？"},happy:{label:"開心",emoji:"😊",message:"漂亮的一手牌！"},anxious:{label:"焦急",emoji:"😣",message:"局勢突然變了！"},relieved:{label:"鬆一口氣",emoji:"😮‍💨",message:"總算化解危機了。"}},A3={trap:{source:["proud","先請你進監獄休息一下。"],target:["surprised","等等，我被送進監獄了？"]},slow:{source:["proud","接下來慢慢走吧。"],target:["surprised","我的步伐被限制了！"]},teleport:{source:["proud","城市位置，照我的計畫走。"],target:["surprised","我被傳送到哪裡了？"]},"position-swap":{source:["proud","位置交換，局勢改寫！"],target:["surprised","我的位置被換走了！"]},"land-swap":{source:["proud","這筆換地交易成立。"],target:["surprised","我的街區突然易主了？！"]},birthday:{source:["happy","今天的派對由我做東！"],target:["surprised","怎麼每個人都要付錢？"]},subsidy:{source:["happy","城市補助到手！"],target:["happy","銀行送來一筆補助。"]},"rent-shield":{source:["relieved","這次租金，安全下莊。"],target:["surprised","這筆租金被護盾擋下了。"]},"rent-double":{source:["proud","這次收租翻倍！"],target:["surprised","租金怎麼變高了？"]},"get-out":{source:["relieved","終於可以離開監獄了。"],target:["happy","自由回來了！"]},redraw:{source:["proud","換一張更好的牌。"],target:["surprised","牌堆又有新變化。"]}};function gy({player:a,role:e,preview:n}){if(!a||!n)return null;const[r,o]=n,c=my[r]||my.surprised;return E.createElement("article",{className:`skill-sequence-emotion ${e}`,style:{"--player":a.color}},E.createElement("div",{className:"skill-sequence-emotion-heading"},E.createElement("span",{className:"skill-sequence-emotion-dot"}),E.createElement("strong",null,a.name),E.createElement("span",null,c.emoji),E.createElement("small",null,c.label)),E.createElement("p",null,o))}function _y({player:a,role:e,label:n}){return a?E.createElement("div",{className:`skill-sequence-player ${e}`,style:{"--player":a.color}},E.createElement("div",{className:"skill-sequence-avatar"},E.createElement("span",null),E.createElement("i",null)),E.createElement("strong",null,a.name),E.createElement("small",null,n)):E.createElement("div",{className:`skill-sequence-player ${e} is-bank`},E.createElement("span",{className:"skill-sequence-player-icon"},"✦"),E.createElement("small",null,n))}function R3({sequence:a,players:e,animated:n=!0,onComplete:r}){const[o,c]=Ye.useState("enter"),f=Ye.useRef(r);f.current=r;const p=(a==null?void 0:a.sourceId)===0||(a==null?void 0:a.targetId)===0?b3:T3;if(Ye.useEffect(()=>{var x;if(!a)return;if(!n){(x=f.current)==null||x.call(f);return}c("enter");const R=sr.enter+sr.fly+sr.flip,T=[["fly",sr.enter],["flip",sr.enter+sr.fly],["emotion",R],["exit",R+p]].map(([U,L])=>setTimeout(()=>c(U),L));return T.push(setTimeout(()=>{var U;return(U=f.current)==null?void 0:U.call(f)},R+p+sr.exit)),()=>T.forEach(clearTimeout)},[a==null?void 0:a.id,n,p]),!a)return null;const h=e.find(R=>R.id===a.sourceId),g=e.find(R=>R.id===a.targetId)||null,S=A3[a.card.id]||{source:["proud","技能卡啟動！"],target:["surprised","局勢突然變了！"]},_=a.card.id==="birthday"?"其他玩家":(g==null?void 0:g.name)||"城市銀行",b=g||{id:"bank",name:_,color:"#c49b42"};return E.createElement("section",{className:`skill-sequence-layer skill-${a.card.type}`,"data-phase":o,role:"dialog","aria-modal":"true","aria-label":`${a.card.name}動畫`},E.createElement("div",{className:"skill-sequence-backdrop"}),E.createElement("div",{className:"skill-sequence-canvas"},E.createElement("button",{type:"button",className:"skill-sequence-close","aria-label":"關閉技能動畫",title:"關閉並立即執行技能",onClick:()=>{var R;return(R=f.current)==null?void 0:R.call(f)}},E.createElement(Vp,{size:18})),E.createElement("div",{className:"skill-sequence-kicker"},E.createElement("span",null),"技能卡啟動 ",E.createElement("small",null,a.card.name)),E.createElement("div",{className:"skill-sequence-stage"},E.createElement(_y,{player:h,role:"source",label:"使用者"}),E.createElement("div",{className:"skill-sequence-route"},E.createElement("i",null),E.createElement("i",null),E.createElement("i",null)),E.createElement("div",{className:"skill-sequence-card-stage"},E.createElement("div",{className:"skill-sequence-card card-back"},E.createElement("span",null,"城市大亨"),E.createElement("small",null,"SKILL CARD")),E.createElement("div",{className:"skill-sequence-card card-front"},E.createElement("span",{className:"skill-sequence-card-icon"},a.card.icon),E.createElement("strong",null,a.card.name),E.createElement("p",null,a.card.summary),E.createElement("small",null,o==="emotion"?"效果準備生效":"技能卡"))),E.createElement(_y,{player:b.id==="bank"?null:b,role:"target",label:_})),E.createElement("div",{className:"skill-sequence-caption"},E.createElement("strong",null,a.card.name),E.createElement("span",null,o==="emotion"?"情緒回應中":o==="exit"?"準備套用效果":"卡片正在傳遞")),E.createElement("div",{className:"skill-sequence-emotions"},E.createElement(gy,{player:h,role:"source",preview:S.source}),E.createElement(gy,{player:b.id==="bank"?null:b,role:"target",preview:S.target}))))}function C3({value:a,rolling:e}){const n={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};return E.createElement("div",{className:"die "+(e?"rolling":""),"aria-label":`${a} 點`},Array.from({length:9},(r,o)=>E.createElement("i",{key:o,className:n[a].includes(o+1)?"pip":""})))}function Fp(a){return(a==null?void 0:a.color)||Wn[(a==null?void 0:a.id)||0]}function vy({id:a,small:e=!1,player:n}){return E.createElement("span",{className:"avatar "+(e?"small":""),style:{"--player":Fp(n||{id:a})}},E.createElement("span",{className:"avatar-head"}),E.createElement("span",{className:"avatar-body"}),E.createElement("span",{className:"avatar-cap"}),E.createElement("span",{className:"owner-number"},a+1))}function w3({player:a}){const e=[];return a.jail&&e.push(E.createElement("span",{key:"jail",className:"status-badge jail"},"監獄")),a.slowTurns&&e.push(E.createElement("span",{key:"slow",className:"status-badge slow"},"龜速 ",a.slowTurns)),a.rentShield&&e.push(E.createElement("span",{key:"shield",className:"status-badge shield"},"免租")),a.rentMultiplier===2&&e.push(E.createElement("span",{key:"double",className:"status-badge double"},"收租×2")),e.length?E.createElement("div",{className:"player-status-badges"},e):null}function D3({game:a}){const e=Is(a);return E.createElement("section",{className:"building-inventory","aria-label":"建築物剩餘數量"},E.createElement("div",{className:"building-inventory-heading"},E.createElement("strong",null,"建築物庫存"),E.createElement("span",null,a.limitBuildings?"有限量":"不限量")),a.limitBuildings?E.createElement("div",{className:"building-inventory-values"},E.createElement("span",null,E.createElement("b",null,e.houses),E.createElement("small",null,"房屋可購買")),E.createElement("span",null,E.createElement("b",null,e.hotels),E.createElement("small",null,"旅館可購買"))):E.createElement("p",null,"房屋與旅館皆不受銀行數量限制。"))}function N3({card:a,count:e,disabled:n,selected:r,onClick:o}){return E.createElement("button",{type:"button",className:`skill-card-tile skill-${a.type}${r?" selected":""}`,onClick:o,"aria-disabled":n,"aria-pressed":r,"aria-label":`${a.name}：${a.summary}`},E.createElement("span",{className:"skill-card-icon","aria-hidden":"true"},a.icon),E.createElement("span",{className:"skill-card-copy"},E.createElement("strong",null,a.name),E.createElement("small",null,a.summary)),e>1&&E.createElement("b",{className:"skill-card-count"},e))}function U3(a){return a===5?"旅館":a?`${a} 間房屋`:"未開發地產"}function L3(a){return a===5?"旅館":"房屋 "+(a||0)+" / 4"}function O3(a,e,n){if(a.limitBuildings===!1)return n.level===5?"這塊土地已有旅館。":n.level===4?"你剛走到這塊土地，可以升級為旅館。":"你剛走到這塊土地，可以加蓋一間房屋。";if(a.selected!==e.id||a.stage!=="end")return"走到自己的土地時，才能在當下建造。";if(a.buildUsed)return"本次落地已完成建造。";if(n.level===5)return"這塊土地已有旅館。";const r=Is(a);return n.level===4?r.hotels?"你剛走到這塊土地，可以升級為旅館。":"銀行旅館已用完。":r.houses?"你剛走到自己的土地，可以加蓋一間房屋。":"銀行房屋已用完。"}function I3(a,e,n){return n.level===5?"已達最高等級":a.buildUsed&&a.selected===e.id?"本次落地已建造":n.level===4?`升級旅館 · ${St(Ml(e,a))}`:`建造房屋 · ${St(Ml(e,a))}`}function cl({title:a,onClose:e,children:n,wide:r=!1}){const o=Ye.useRef();return Ye.useEffect(()=>{var m;const c=document.activeElement;(m=o.current)==null||m.focus();function f(p){if(p.key==="Escape"&&(e==null||e()),p.key==="Tab"){const h=[...o.current.querySelectorAll('button:not(:disabled),a,input,[tabindex="0"]')];if(!h.length){p.preventDefault();return}p.shiftKey&&document.activeElement===h[0]?(p.preventDefault(),h.at(-1).focus()):!p.shiftKey&&document.activeElement===h.at(-1)&&(p.preventDefault(),h[0].focus())}}return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f),c==null||c.focus()}},[]),E.createElement("div",{className:"modal-backdrop",onMouseDown:c=>{c.target===c.currentTarget&&(e==null||e())}},E.createElement("section",{ref:o,tabIndex:-1,className:"modal "+(r?"wide":""),role:"dialog","aria-modal":"true","aria-label":a},E.createElement("div",{className:"modal-heading"},E.createElement("h2",null,a),e&&E.createElement("button",{className:"icon-button","aria-label":"關閉",onClick:e},E.createElement(Vp,{size:20}))),n))}function P3({setup:a,setSetup:e,newGameMaxRounds:n,onStart:r,onClose:o}){return E.createElement(cl,{title:"開啟一段全新的城市故事",onClose:o},E.createElement("img",{className:"modal-art",src:"./chance.png",alt:"微縮城市與機會信封"}),E.createElement("p",{className:"modal-lead"},"設定參與玩家、遊戲長度與初始通膨率。每位玩家各帶著 $15,000 出發。"),E.createElement("label",{className:"setup-count"},"玩家人數 ",E.createElement("select",{value:a.count,onChange:c=>e(f=>({...f,count:Number(c.target.value)}))},[2,3,4].map(c=>E.createElement("option",{key:c,value:c},c," 人")))),E.createElement("label",{className:"setup-count"},"最多回合 ",E.createElement("select",{"aria-label":"最多回合",value:a.roundOption,onChange:c=>e(f=>({...f,roundOption:c.target.value}))},E.createElement("option",{value:"40"},"40 回合"),E.createElement("option",{value:"80"},"80 回合"),E.createElement("option",{value:"custom"},"自訂"),E.createElement("option",{value:"unlimited"},"無限制"))),E.createElement("label",{className:"setup-count"},"初始通膨率 ",E.createElement("select",{"aria-label":"初始通膨率",value:a.inflationRate,onChange:c=>e(f=>({...f,inflationRate:Number(c.target.value)}))},Array.from({length:lx+1},(c,f)=>E.createElement("option",{key:f,value:f},f,"%")))),E.createElement("label",{className:"setup-count"},"建築數量限制 ",E.createElement("select",{"aria-label":"建築數量限制",value:a.limitBuildings?"limited":"unlimited",onChange:c=>e(f=>({...f,limitBuildings:c.target.value==="limited"}))},E.createElement("option",{value:"limited"},"限制（房屋 32、旅館 12）"),E.createElement("option",{value:"unlimited"},"不限數量"))),a.roundOption==="custom"&&E.createElement("label",{className:"round-limit-custom"},"自訂回合數",E.createElement("input",{"aria-label":"自訂回合數",type:"number",min:"1",step:"1",value:a.customRounds,onChange:c=>e(f=>({...f,customRounds:c.target.value}))})),E.createElement("div",{className:"player-setup"},a.players.slice(0,a.count).map((c,f)=>E.createElement("div",{className:"player-setup-row",key:f},E.createElement("input",{"aria-label":`玩家 ${f+1} 名稱`,value:c.name,onChange:m=>e(p=>({...p,players:p.players.map((h,g)=>g===f?{...h,name:m.target.value}:h)}))}),E.createElement("input",{"aria-label":`玩家 ${f+1} 顏色`,type:"color",value:c.color,onChange:m=>e(p=>({...p,players:p.players.map((h,g)=>g===f?{...h,color:m.target.value}:h)}))}),E.createElement("select",{value:c.human?"human":"ai",onChange:m=>e(p=>({...p,players:p.players.map((h,g)=>g===f?{...h,human:m.target.value==="human"}:h)}))},E.createElement("option",{value:"human"},"真人"),E.createElement("option",{value:"ai"},"電腦"))))),E.createElement("button",{className:"primary",disabled:a.roundOption==="custom"&&!n,onClick:r},E.createElement(Gp,{size:18}),"開始新遊戲"),E.createElement("button",{className:"secondary full",onClick:o},"返回"))}function z3({hasContinue:a,onNewGame:e,onContinue:n}){return E.createElement("main",{className:"home-screen"},E.createElement("div",{className:"home-topline"},E.createElement("span",{className:"live-dot"}),"城市大亨 ",E.createElement("span",null,"/")," 一座城市，從第一步開始"),E.createElement("section",{className:"home-content"},E.createElement("div",{className:"home-copy"},E.createElement("div",{className:"home-brand-mark"},E.createElement(zh,{size:29,strokeWidth:1.7}),E.createElement("span",null,"CITY TYCOON")),E.createElement("h1",null,"城市大亨"),E.createElement("p",null,"玩一場，擁有一座城。"),E.createElement("div",{className:"home-rule"}),E.createElement("small",null,"買下街區、管理資產，讓每一次擲骰都成為城市故事。")),E.createElement("div",{className:"home-city-scene","aria-label":"微縮城市棋盤意象"},E.createElement("img",{className:"home-city-board-image",src:"./home-city-board.png",alt:"立體微縮城市棋盤與彩色棋子"})),E.createElement("aside",{className:"home-actions"},E.createElement("div",{className:"home-actions-heading"},E.createElement("span",null,"準備好出發了嗎？"),E.createElement("small",null,"你的城市，等你來決定下一步。")),E.createElement("button",{className:"home-action primary",onClick:e},E.createElement(Gp,{size:20}),"開始新遊戲",E.createElement(ul,{size:17})),E.createElement("button",{className:"home-action secondary",disabled:!a,onClick:n},E.createElement(Ey,{size:19}),"繼續進度",E.createElement(ul,{size:17})),E.createElement("p",{className:"home-save-status"},E.createElement("span",{className:a?"is-ready":""}),a?"已找到這個瀏覽器的自動存檔":"目前沒有可繼續的進度"))),E.createElement("footer",{className:"home-footer"},E.createElement("span",null,"自動儲存 · 僅此瀏覽器可用"),E.createElement("span",null,"一起，把城市變成你的故事。")))}const Hp=[["擲骰與移動","你與 3 位電腦輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點領取 $2,000；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按標價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。"],["房屋與旅館","只要走到自己的土地，就能在該次落地決定是否建造；不需要集齊同色地產，每次落地最多建造 1 次。每次建造費為地價的 60%；最多 4 間房屋，已有 4 間房屋時再次走到該地可升級為旅館。租金倍率依序為 3、6、10、15，旅館為 22。"],["城市中的驚喜","機會與城市基金帶來獎勵或支出。所得稅 $1,200，奢侈稅 $1,800。前往監獄會移到探訪監獄格並暫停下一回合；免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以地價和升級成本合計的 50% 自動變賣；仍不足就破產。最後存活者獲勝；若設定回合上限，達到上限後以現金＋地產原價＋升級成本最高者獲勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]];Hp.splice(0,Hp.length,["擲骰與移動","你與對手輪流擲骰子，每次擲骰前可選擇 1 顆或 2 顆，3D 棋子按點數總和前進。通過起點可領取依物價指數調整的獎勵；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按當前物價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。地價與租金隨物價指數調整。"],["房屋與旅館","走到自己的土地時可決定是否建造，每次落地最多建造 1 次。建造費按當前土地價格計算；最多 4 間房屋，之後再次落地可升級為旅館。"],["通膨機制","每完成一輪，物價指數依當前通膨率複利上升。機會或城市基金可能令通膨率升降 1 個百分點；通膨率最低為 0%、最高為 10%，物價指數最高為 10×。降低通膨率不會令物價倒退。地價、租金、建造費、稅金、起點獎勵、事件金額、變賣收入及終局地產估值均按當前物價指數調整。"],["城市中的驚喜","機會與城市基金帶來獎勵、支出或通膨變化。稅金也依物價指數調整；前往監獄會暫停下一回合，免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以當前地價及升級成本合計的 50% 自動變賣；仍無力償還即破產。若設定回合上限，最後以現金及按當前物價估算的地產資產決勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]);function B3(a){if(a.roundOption==="unlimited")return null;if(a.roundOption==="custom"){const e=Number(a.customRounds);return Number.isInteger(e)&&e>=1?e:null}return Number(a.roundOption)}const yy="city-tycoon:activity-visible:v1",yx="city-tycoon:glass-opacity:v1",xx="city-tycoon:emotion-animation:v1",Sx="city-tycoon:skill-animation:v1",Ih=72,Mx=a=>Math.min(95,Math.max(5,Number(a)));function F3(){try{const a=localStorage.getItem(yx);if(a===null)return Ih;const e=Number(a);return Number.isFinite(e)?Mx(e):Ih}catch{return Ih}}function H3(){try{return localStorage.getItem(xx)!=="false"}catch{return!0}}function k3(){try{return localStorage.getItem(Sx)!=="false"}catch{return!0}}function xy({entries:a}){return a.map((e,n)=>E.createElement("div",{className:"activity-item",key:n},E.createElement("span",{className:"event-icon "+e.kind},e.kind==="buy"?E.createElement(xu,{size:16}):e.kind==="dice"?E.createElement(My,{size:16}):e.kind==="tax"?E.createElement(HM,{size:16}):E.createElement(Ph,{size:16})),E.createElement("p",null,e.text,E.createElement("small",null,n===0?"剛剛":"本局紀錄"))))}function G3(){var Zn,qa,Za,Ka,pa,mi;const[a,e]=Ye.useState("home"),[n,r]=Ye.useState(()=>{try{return py()}catch{return null}}),[o,c]=Ye.useState(()=>{try{return localStorage.getItem(yy)!=="false"}catch{return!0}}),[f,m]=Ye.useState(F3),[p,h]=Ye.useState(H3),[g,S]=Ye.useState(k3),[_,b]=Ye.useState(!1),[R,N]=Ye.useState(()=>{var B;return typeof window<"u"&&((B=window.matchMedia)==null?void 0:B.call(window,"(prefers-reduced-motion: reduce)").matches)===!0}),[T,x]=Ye.useState([]),[U,L]=Ye.useState(null),[M,I]=Ye.useReducer(m3,void 0,fx),P=Ye.useRef(new Map),F=Ye.useRef(0),A=Ye.useRef(""),O=Ye.useRef(!1),q=T[0]||null,k=q&&p&&!R?Object.fromEntries(q.players.map(B=>[B.playerId,B.mood])):{},j=Ye.useRef();Ye.useEffect(()=>{try{localStorage.setItem(yy,String(o))}catch{}},[o]),Ye.useEffect(()=>{try{localStorage.setItem(xx,String(p))}catch{}},[p]),Ye.useEffect(()=>{try{localStorage.setItem(Sx,String(g))}catch{}},[g]),Ye.useEffect(()=>{var Ke,Rt;const B=(Ke=window.matchMedia)==null?void 0:Ke.call(window,"(prefers-reduced-motion: reduce)");if(!B)return;const De=sn=>N(sn.matches);return(Rt=B.addEventListener)==null||Rt.call(B,"change",De),()=>{var sn;return(sn=B.removeEventListener)==null?void 0:sn.call(B,"change",De)}},[]),Ye.useEffect(()=>{const B=(M.emotionHistory||M.emotionEvents||[]).filter(Ke=>Ke.id>F.current);if(!B.length){O.current=!1;return}F.current=Math.max(F.current,...B.map(Ke=>Ke.id));const De=B.filter(Ke=>{var Rt;return!(O.current&&((Rt=Ke.category)!=null&&Rt.startsWith("skill")))});De.length&&x(Ke=>[...Ke,...De].sort((Rt,sn)=>sn.priority-Rt.priority||Rt.id-sn.id).slice(0,3)),O.current=!1},[M.emotionEvents]),Ye.useEffect(()=>{if(!q||U||M.stage==="moving"&&q.priority<90)return;const B=q.id,De=setTimeout(()=>x(Ke=>{var Rt;return((Rt=Ke[0])==null?void 0:Rt.id)===B?Ke.slice(1):Ke.filter(sn=>sn.id!==B)}),2400);return()=>clearTimeout(De)},[q==null?void 0:q.id,M.stage,U]),Ye.useEffect(()=>{const B=M.log[0];if((B==null?void 0:B.kind)!=="skill"){A.current=(B==null?void 0:B.text)||"";return}if(B.text===A.current||(A.current=B.text,!g||R))return;b(!0);const De=setTimeout(()=>b(!1),720);return()=>clearTimeout(De)},[M.log,g,R]);const pe=B=>{const De=Mx(Number(B.currentTarget.value));m(De);try{localStorage.setItem(yx,String(De))}catch{}},[he,ie]=Ye.useState(null),[H,W]=Ye.useState("players"),[re,Se]=Ye.useState(null),[Ee,z]=Ye.useState(null),[J,Re]=Ye.useState(null),[Oe,Fe]=Ye.useState(!1),[se,Te]=Ye.useState(!1),[Ce,Ge]=Ye.useState(""),[st,je]=Ye.useState(!1),[Ot,ht]=Ye.useState({count:4,roundOption:"40",customRounds:"100",inflationRate:dm,limitBuildings:!0,players:[{name:"你",color:Wn[0],human:!0},{name:"艾米",color:Wn[1],human:!1},{name:"小傑",color:Wn[2],human:!1},{name:"喵喵",color:Wn[3],human:!1}]}),dt=Ye.useRef(),ct=Ye.useRef(),Be=M.players[M.turn],vt=!!(Be!=null&&Be.human)&&!(Be!=null&&Be.bankrupt),Jt=vt&&["ready","end"].includes(M.stage),Vt=()=>{I({type:"ROLL",dice:Array.from({length:Be.diceCount??2},()=>1+Math.floor(Math.random()*6)),eventIndex:Math.floor(Math.random()*8)})},on=()=>{if(!Be||Be.skillUsedThisTurn||M.pendingSkill||M.skillOverflow)return null;const B=M.players.filter(un=>un.id!==Be.id&&!un.bankrupt),De=B[0],Ke=Fa(M,Be.id),Rt=Gt.find(un=>{var si,ki;return un.type==="property"&&((si=M.lots[un.id])==null?void 0:si.owner)!==void 0&&M.lots[un.id].owner!==Be.id&&!((ki=M.players[M.lots[un.id].owner])!=null&&ki.bankrupt)}),sn=Be.skillHand,Dn=un=>sn.includes(un);if(Be.cash<7e3&&Dn("subsidy"))return{type:"USE_SKILL_CARD",cardId:"subsidy"};if(Be.cash<9e3&&Dn("rent-shield"))return{type:"USE_SKILL_CARD",cardId:"rent-shield"};if(Be.jail&&Dn("get-out"))return{type:"USE_SKILL_CARD",cardId:"get-out"};if(B.length&&Dn("slow"))return{type:"USE_SKILL_CARD",cardId:"slow",targetId:De.id};if(B.length&&Dn("trap"))return{type:"USE_SKILL_CARD",cardId:"trap",targetId:De.id};if(B.length&&Dn("teleport")){const un=Oh.find(si=>si!==De.pos&&Gt[si].type==="property")??0;return{type:"USE_SKILL_CARD",cardId:"teleport",targetId:De.id,targetPosition:un}}return B.length&&Dn("position-swap")?{type:"USE_SKILL_CARD",cardId:"position-swap",targetId:De.id}:Ke.length&&Dn("rent-double")?{type:"USE_SKILL_CARD",cardId:"rent-double"}:Ke.length&&Rt&&Dn("land-swap")?{type:"USE_SKILL_CARD",cardId:"land-swap",ownLotId:Ke[0].id,targetLotId:Rt.id}:Dn("birthday")&&B.length?{type:"USE_SKILL_CARD",cardId:"birthday"}:null};Ye.useEffect(()=>{try{Po()}catch{je(!0)}},[]),Ye.useEffect(()=>{if(!(a!=="game"||M.stage==="moving"))try{Lp(M),je(!1)}catch{je(!0)}},[M,a]),Ye.useEffect(()=>{if(M.stage==="moving"&&U!=="saves"){const B=setTimeout(()=>I({type:"STEP"}),330);return()=>clearTimeout(B)}},[M,U]),Ye.useEffect(()=>{const B=M.selected,De=B===null?null:Gt[B],Ke=B===null?null:M.lots[B],Rt=vt&&M.stage==="decision"&&(De==null?void 0:De.type)==="property"&&!Ke,sn=vt&&M.stage==="end"&&M.buildAvailable&&(Ke==null?void 0:Ke.owner)===M.turn;(Rt||sn)&&(ie(B),L("property"))},[M,vt]),Ye.useEffect(()=>{if(a!=="game"||vt||M.stage==="finished"||M.pendingSkill||J||U==="new"||U==="rules"||U==="saves")return;const B=setTimeout(()=>{if(M.stage==="ready"){const De=on();De?$e(De):Vt()}else if(M.stage==="decision")I({type:Be.cash>dl(M,Gt[Be.pos])+Yn(M,1800)?"BUY":"SKIP"});else if(M.stage==="end"){const De=Fa(M,M.turn).find(Ke=>Ip(M,Ke.id)&&Be.cash>Ml(Ke,M)+Yn(M,2500));I(De?{type:"BUILD",id:De.id}:{type:"NEXT"})}},M.stage==="decision"?1300:1100);return()=>clearTimeout(B)},[M,vt,U,a,J]),Ye.useEffect(()=>{var sn;const B=M.skillOverflow;if(!B)return;const De=M.players[B.playerId];if(De!=null&&De.human||!((sn=De==null?void 0:De.skillHand)!=null&&sn.length))return;const Ke=De.skillHand.at(-1),Rt=setTimeout(()=>I({type:"RESOLVE_SKILL_OVERFLOW",cardId:Ke}),350);return()=>clearTimeout(Rt)},[(Zn=M.skillOverflow)==null?void 0:Zn.playerId,M.players,M.skillOverflow]),Ye.useEffect(()=>{const B=M.pendingSkill;if(!B)return;const De=M.players[B.targetId];if(De!=null&&De.human)return;const Ke=De!=null&&De.skillHand.includes("counter")?"counter":De!=null&&De.skillHand.includes("reflect")?"reflect":"pass",Rt=setTimeout(()=>I({type:"RESPOND_SKILL",playerId:B.targetId,response:Ke}),520);return()=>clearTimeout(Rt)},[(qa=M.pendingSkill)==null?void 0:qa.sourceId,(Za=M.pendingSkill)==null?void 0:Za.targetId,(Ka=M.pendingSkill)==null?void 0:Ka.cardId,M.players]),Ye.useEffect(()=>{if(!(!Oe||!ct.current))try{const B=ct.current,De=B.createOscillator(),Ke=B.createGain();De.connect(Ke),Ke.connect(B.destination),De.type="sine",De.frequency.setValueAtTime(M.stage==="moving"?380:620,B.currentTime),Ke.gain.setValueAtTime(.035,B.currentTime),Ke.gain.exponentialRampToValueAtTime(.001,B.currentTime+.13),De.start(),De.stop(B.currentTime+.15)}catch{}},[M.remaining,M.stage,Oe]);const Bt=()=>{if(!Oe){const B=window.AudioContext||window.webkitAudioContext;B&&(ct.current||(ct.current=new B),ct.current.resume())}Fe(!Oe)},an=B=>{ie(B),L("property")},Q=B3(Ot),Dt=()=>L("new"),ve=()=>{L(null);try{r(py())}catch{r(null)}e("home")},C=()=>{var B;Ot.roundOption==="custom"&&!Q||(x([]),F.current=0,I({type:"NEW",config:{...Ot,maxRounds:Q,inflationRate:Number(Ot.inflationRate)}}),e("game"),L(null),W("players"),(B=dt.current)==null||B.reset(),Te(!1))},v=()=>{n&&(x([]),F.current=0,I({type:"LOAD",game:n}),e("game"),L(null),ie(null),W("players"))},X=U==="new"?E.createElement(P3,{setup:Ot,setSetup:ht,newGameMaxRounds:Q,onStart:C,onClose:()=>L(null)}):null;if(a==="home")return E.createElement("div",{className:"app-shell home-shell"},E.createElement(z3,{hasContinue:!!n,onNewGame:Dt,onContinue:v}),X);const G=he!==null?Gt[he]:null,K=G?M.lots[G.id]:null,me=Gt[Be.pos],ye=!!G&&G.type==="property"&&!K&&M.stage==="decision"&&vt&&me.id===G.id,ee=((Be==null?void 0:Be.skillHand)||[]).map(B=>or.find(De=>De.id===B)).filter(Boolean),ae=ee.reduce((B,De)=>({...B,[De.id]:(B[De.id]||0)+1}),{}),ge=M.players.filter(B=>B.id!==(Be==null?void 0:Be.id)&&!B.bankrupt),Ue=Be&&!Be.bankrupt?[Be,...ge]:ge,Le=Fa(M,M.turn),Ne=Gt.filter(B=>{var De;return B.type==="property"&&M.lots[B.id]&&M.lots[B.id].owner!==M.turn&&!((De=M.players[M.lots[B.id].owner])!=null&&De.bankrupt)}),ze=or.find(B=>B.id===re)||null,Ve=M.skillOverflow?M.players[M.skillOverflow.playerId]:null,nt=M.pendingSkill?M.players[M.pendingSkill.targetId]:null,Y=M.pendingSkill?M.players[M.pendingSkill.sourceId]:null,Ie=vt&&M.stage==="ready"&&!M.skillOverflow&&!M.pendingSkill&&!M.skillUsedThisTurn&&!J,xe=B=>!Ie||B.timing!=="active"||!Pp.has(B.id)||B.id==="get-out"&&!Be.jail,Pe=B=>{var De;return!(Ve!=null&&Ve.human)||((De=M.skillOverflow)==null?void 0:De.playerId)!==M.turn||M.pendingSkill||J||Be.skillUsedThisTurn||B.timing!=="active"||!Pp.has(B.id)||B.id==="get-out"&&!Be.jail||B.target==="player"&&B.id!=="slow"&&!ge.length||B.target==="land"&&(!Le.length||!Ne.length)},He=B=>(B==null?void 0:B.id)==="slow"?Ue:ge,we=B=>{O.current=!0,I({type:"USE_SKILL_CARD",...B}),Re(null)},$e=B=>{var Rt,sn;const De=or.find(Dn=>Dn.id===B.cardId);if(!De)return;if(!g||R){we(B);return}let Ke=B.targetId;Ke===void 0&&B.targetLotId!==void 0&&(Ke=(Rt=M.lots[B.targetLotId])==null?void 0:Rt.owner),Ke===void 0&&De.target==="player"&&(Ke=(sn=ge[0])==null?void 0:sn.id),Re({id:`${Date.now()}-${B.cardId}`,action:B,card:De,sourceId:M.turn,targetId:Ke??null})},Ze=(B,De=!1)=>{var Rt,sn;if(De?Pe(B):xe(B))return;const Ke=De?{overflowUse:!0}:{};if(Se(B.id),B.target==="player"){const Dn=He(B),un=Dn[0];z({cardId:B.id,targetId:(un==null?void 0:un.id)??"",...B.id==="teleport"?{targetPosition:(un==null?void 0:un.pos)??0}:{},...Ke});return}if(B.target==="land"){z({cardId:B.id,ownLotId:((Rt=Le[0])==null?void 0:Rt.id)??"",targetLotId:((sn=Ne[0])==null?void 0:sn.id)??"",...Ke});return}$e({cardId:B.id,...Ke}),Se(null)},cn=B=>{Se(B.id),z(null)},Ft=()=>{ze&&Ze(ze)},ei=()=>{if(!Ee)return;const B={...Ee};z(null),Se(null),$e(B)};return E.createElement("div",{className:"app-shell"},E.createElement("header",{className:"header"},E.createElement("button",{className:"brand",onClick:ve,"aria-label":"城市大亨首頁"},E.createElement("span",{className:"brand-icon"},E.createElement(zh,{size:33,strokeWidth:1.8})),E.createElement("span",null,E.createElement("strong",null,"城市大亨"),E.createElement("small",null,"CITY TYCOON"))),E.createElement("p",{className:"tagline"},"玩一場，擁有一座城。"),E.createElement("nav",null,E.createElement("button",{className:"text-button","aria-label":"遊戲規則",onClick:()=>L("rules")},E.createElement(rv,{size:18}),E.createElement("span",null,"遊戲規則")),E.createElement("span",{className:"nav-divider"}),E.createElement("button",{className:"outline-button",onClick:Dt},E.createElement(Gp,{size:18}),E.createElement("span",null,"新遊戲")))),E.createElement("button",{className:"save-launch secondary",onClick:()=>L("saves")},"儲存／讀取"),U==="saves"&&E.createElement(cl,{title:"存檔管理",wide:!0,onClose:()=>L(null)},E.createElement(_3,{game:M,onLoad:B=>{x([]),F.current=0,I({type:"LOAD",game:B});try{Lp(B),je(!1)}catch{je(!0)}ie(null),W("players"),L(null)}})),E.createElement("main",{className:"game-layout"},E.createElement("section",{className:"world","aria-label":"遊戲棋盤"},E.createElement(g3,{game:M,emotionAnchorRefs:P,emotionMoods:k,onSelect:an,onError:Ge,ref:dt},E.createElement(M3,{event:q,players:M.players,anchorRefs:P,animated:p&&!R,paused:M.stage==="moving"||U!==null}),E.createElement(R3,{sequence:J,players:M.players,animated:g&&!R,onComplete:()=>J&&we(J.action)})),E.createElement("div",{className:"world-heading"},E.createElement("span",{className:"live-dot"}),"經典城市 ",E.createElement("span",{className:"world-heading-divider"},"/"),E.createElement("span",null,M.players.length," 人對局"),E.createElement("button",{ref:j,className:"activity-toggle","aria-expanded":o,"aria-controls":"glass-city-activity",onClick:()=>c(B=>!B)},E.createElement(rv,{size:16}),"城市動態",E.createElement("span",null,o?"收起":"展開"))),E.createElement("section",{id:"glass-city-activity",className:"glass-activity",style:{"--glass-alpha":1-f/100},"aria-labelledby":"glass-activity-title",hidden:!o},E.createElement("div",{className:"glass-activity-heading"},E.createElement("h2",{id:"glass-activity-title"},"城市動態"),E.createElement("label",{className:"glass-opacity-control"},E.createElement("span",null,"透明度"),E.createElement("input",{className:"glass-opacity-range",type:"range",min:"5",max:"95",step:"1",value:f,"aria-label":"玻璃面板透明度",onChange:B=>m(Number(B.target.value)),onPointerUp:pe,onBlur:pe}),E.createElement("output",null,f,"%")),E.createElement("button",{className:"icon-button","aria-label":"關閉左側城市動態",onClick:()=>{var B;c(!1),(B=j.current)==null||B.focus()}},E.createElement(Vp,{size:20}))),E.createElement("div",{className:"glass-activity-list",tabIndex:0,role:"region","aria-label":"城市動態紀錄"},E.createElement(xy,{entries:M.log})),E.createElement("button",{className:"glass-activity-all",onClick:()=>L("log")},"全部紀錄 ",E.createElement(Ph,{size:16}))),E.createElement("div",{className:"world-top-right"},E.createElement("span",{className:"saved"},E.createElement(zM,{size:13}),st?"此瀏覽器無法存檔":"自動儲存"),E.createElement(x3,null),E.createElement("button",{className:"emotion-animation-toggle",type:"button","aria-pressed":p,onClick:()=>h(B=>!B)},E.createElement("span",{className:"emotion-toggle-indicator"}),p?"情緒動畫 開":"情緒動畫 關"),E.createElement("button",{className:"emotion-animation-toggle skill-animation-toggle",type:"button","aria-pressed":g,onClick:()=>S(B=>!B)},E.createElement("span",{className:"emotion-toggle-indicator"}),g?"技能動畫 開":"技能動畫 關"),E.createElement("button",{className:"icon-button sound","aria-label":Oe?"關閉音效":"開啟音效",onClick:Bt},Oe?E.createElement(ZM,{size:18}):E.createElement(KM,{size:18}))),Ce&&E.createElement("div",{className:"webgl-error"},Ce),E.createElement("div",{className:"board-foot"},E.createElement("div",{className:"camera-toolbar"},E.createElement("button",{title:"自動旋轉視角","aria-label":"自動旋轉視角",className:se?"selected":"",onClick:()=>{var B;(B=dt.current)==null||B.rotate(),Te(!se)}},E.createElement(WM,{size:20}),E.createElement("span",null,"旋轉視角")),E.createElement("button",{title:"重置視角","aria-label":"重置視角",onClick:()=>{var B;(B=dt.current)==null||B.reset(),Te(!1)}},E.createElement(Ey,{size:18})),E.createElement("button",{title:"俯視棋盤","aria-label":"俯視棋盤",onClick:()=>{var B;return(B=dt.current)==null?void 0:B.top()}},E.createElement(YM,{size:18})),E.createElement("i",null),E.createElement("button",{title:"縮小","aria-label":"縮小",onClick:()=>{var B;return(B=dt.current)==null?void 0:B.zoom(1.15)}},E.createElement(jM,{size:20})),E.createElement("button",{title:"放大","aria-label":"放大",onClick:()=>{var B;return(B=dt.current)==null?void 0:B.zoom(.87)}},E.createElement(QM,{size:20}))),E.createElement("span",{className:"gesture-hint"},"拖曳旋轉 · 滾輪縮放 · 點選地產"))),E.createElement(E3,{event:q,players:M.players,animated:p&&!R,paused:M.stage==="moving"||U!==null}),E.createElement("aside",{className:"sidebar"},E.createElement("div",{className:"round-heading"},E.createElement("div",null,E.createElement("span",{className:"round-caption"},"城市的每一步，由你決定"),E.createElement("h1",null,"回合 ",E.createElement("b",null,String(M.round).padStart(2,"0")),E.createElement("span",null,"/ ",M.maxRounds===null?"∞":M.maxRounds)),E.createElement("div",{className:"inflation-status",role:"group","aria-label":`目前通膨率 ${M.inflationRate}%，物價指數 ${M.priceIndex.toFixed(2)} 倍`},E.createElement("span",{className:"inflation-rate-badge"},E.createElement(qM,{size:14,"aria-hidden":"true"}),"通膨率 ",E.createElement("b",null,M.inflationRate,"%")),E.createElement("span",{className:"inflation-index"},"物價指數 ",E.createElement("b",null,M.priceIndex.toFixed(2),"×")))),E.createElement("span",{className:"round-icon"},E.createElement(FM,{size:21}))),E.createElement("div",{className:"tabs"},E.createElement("button",{className:H==="players"?"active":"",onClick:()=>W("players")},"玩家概況"),E.createElement("button",{className:H==="properties"?"active":"",onClick:()=>W("properties")},"我的地產 ",E.createElement("span",null,Fa(M,0).length))),E.createElement(D3,{game:M}),E.createElement("div",{className:"overview"},H==="players"?M.players.map(B=>E.createElement("div",{key:B.id,className:"player-row "+(M.turn===B.id?"current ":"")+(B.bankrupt?"bankrupt":""),style:{"--player":Fp(B)}},E.createElement(vy,{id:B.id,player:B}),E.createElement("div",{className:"player-info"},E.createElement("strong",null,B.name,B.id===0?E.createElement("em",null,"玩家"):E.createElement("span",{className:"ai"},"電腦")),E.createElement("small",null,B.bankrupt?"已破產":`${Fa(M,B.id).length} 塊地產${B.jail?" · 監獄中":""}`),E.createElement(w3,{player:B})),E.createElement("div",{className:"player-cash"},E.createElement("b",null,St(B.cash)),M.turn===B.id&&E.createElement("small",null,E.createElement("span",null)," 目前回合")))):E.createElement("div",{className:"property-list"},Fa(M,0).length?Fa(M,0).map(B=>E.createElement("button",{key:B.id,onClick:()=>an(B.id)},E.createElement("i",{style:{background:B.color}}),E.createElement("span",null,E.createElement("strong",null,B.name),E.createElement("small",null,U3(M.lots[B.id].level)," · 租金 ",St(Op(M,B)))),E.createElement(BM,{size:16}))):E.createElement("div",{className:"empty-properties"},E.createElement(xu,{size:28}),E.createElement("strong",null,"你的第一塊地產，正在等你"),E.createElement("p",null,"擲骰探索城市，停在無主街區即可購買。")))),E.createElement("section",{className:"turn-panel","aria-live":"polite"},E.createElement("div",{className:"turn-title"},E.createElement("span",{className:"live-dot",style:{background:Fp(Be)}}),E.createElement("h2",null,M.stage==="finished"?"本局已結束":vt?"你的回合":`${Be.name}的回合`),E.createElement("span",null,M.stage==="moving"?"移動中":M.stage==="decision"?"購地時刻":vt?"準備出發":"電腦玩家")),E.createElement("div",{className:"dice-count-picker",role:"group","aria-label":"骰子數量"},[1,2].map(B=>E.createElement("button",{key:B,"aria-pressed":(Be.diceCount??2)===B,disabled:!vt||M.stage!=="ready"||!!Be.jail||!!M.pendingSkill||!!J,onClick:()=>I({type:"SET_DICE_COUNT",count:B})},B," 顆骰子"))),E.createElement("div",{className:"dice-row"},(M.stage==="ready"?Array.from({length:Be.diceCount??2},()=>1):M.dice).map((B,De)=>E.createElement(C3,{key:De,value:B,rolling:M.stage==="moving"}))),E.createElement("section",{className:`skill-panel${_?" skill-pulse":""}`,"aria-label":"技能卡手牌"},E.createElement("div",{className:"skill-panel-heading"},E.createElement("h3",null,E.createElement("span",{className:"skill-heading-mark"},"✦"),"技能卡"),E.createElement("span",null,Be.human?`${ee.length} / 3`:`${ee.length} 張`)),Be.human?ee.length?E.createElement("div",{className:"skill-card-list"},ee.map(B=>E.createElement(N3,{key:B.id,card:B,count:ae[B.id],disabled:xe(B),selected:(ze==null?void 0:ze.id)===B.id,onClick:()=>cn(B)}))):E.createElement("p",{className:"skill-empty"},"抵達機會格，或經過／抵達城市基金格，有機會取得技能卡。"):E.createElement("p",{className:"skill-ai-count"},"電腦玩家持有 ",ee.length," 張技能卡"),ze&&!Ee&&E.createElement("div",{className:"skill-detail"},E.createElement("div",{className:"skill-detail-heading"},E.createElement("span",{className:"skill-detail-icon"},ze.icon),E.createElement("div",null,E.createElement("strong",null,ze.name),E.createElement("span",null,ze.summary),E.createElement("small",null,ze.timing==="active"?"主動卡 · 可在自己回合使用":"反應卡 · 需等待符合條件的事件"))),E.createElement("div",{className:"skill-detail-actions"},E.createElement("button",{type:"button",className:"secondary",onClick:()=>Se(null)},"關閉說明"),E.createElement("button",{type:"button",className:"primary",disabled:xe(ze),onClick:Ft},"使用"))),ze&&Ee&&E.createElement("div",{className:"skill-target-picker"},E.createElement("div",null,E.createElement("strong",null,ze.name),E.createElement("span",null,ze.summary)),ze.target==="player"&&E.createElement("label",null,"選擇目標",E.createElement("select",{value:Ee.targetId,onChange:B=>z(De=>({...De,targetId:Number(B.target.value)}))},He(ze).map(B=>E.createElement("option",{key:B.id,value:B.id},B.name,B.id===Be.id?" · 自己":"",B.jail?" · 監獄中":"")))),ze.id==="teleport"&&E.createElement("label",null,"選擇合法位置",E.createElement("select",{value:Ee.targetPosition,onChange:B=>z(De=>({...De,targetPosition:Number(B.target.value)}))},Oh.map(B=>E.createElement("option",{key:B,value:B},Gt[B].name,Gt[B].type==="property"?" · 地產":"")))),ze.target==="land"&&E.createElement("div",{className:"skill-land-pickers"},E.createElement("label",null,"你的土地",E.createElement("select",{value:Ee.ownLotId,onChange:B=>z(De=>({...De,ownLotId:Number(B.target.value)}))},Le.map(B=>E.createElement("option",{key:B.id,value:B.id},B.name)))),E.createElement("label",null,"交換土地",E.createElement("select",{value:Ee.targetLotId,onChange:B=>z(De=>({...De,targetLotId:Number(B.target.value)}))},Ne.map(B=>{var De;return E.createElement("option",{key:B.id,value:B.id},B.name," · ",(De=M.players[M.lots[B.id].owner])==null?void 0:De.name)})))),E.createElement("div",{className:"skill-target-actions"},E.createElement("button",{type:"button",className:"secondary",onClick:()=>{z(null),Se(null)}},"取消"),E.createElement("button",{type:"button",className:"primary",disabled:ze.id==="teleport"?!Ee.targetId&&Ee.targetId!==0||!Oh.includes(Ee.targetPosition):ze.target==="player"?!Ee.targetId&&Ee.targetId!==0:!Ee.ownLotId||!Ee.targetLotId,onClick:ei},"確認使用")))),(nt==null?void 0:nt.human)&&E.createElement("section",{className:"skill-reaction-prompt","aria-live":"assertive"},E.createElement("strong",null,Y==null?void 0:Y.name,"正在對你使用",((pa=or.find(B=>B.id===M.pendingSkill.cardId))==null?void 0:pa.name)||"技能卡"),E.createElement("span",null,"效果尚未結算，請選擇是否回應。"),E.createElement("div",null,E.createElement("button",{type:"button",disabled:!nt.skillHand.includes("counter"),onClick:()=>I({type:"RESPOND_SKILL",playerId:nt.id,response:"counter"})},"使用反制卡"),E.createElement("button",{type:"button",disabled:!nt.skillHand.includes("reflect"),onClick:()=>I({type:"RESPOND_SKILL",playerId:nt.id,response:"reflect"})},"使用反彈卡"),E.createElement("button",{type:"button",className:"secondary",onClick:()=>I({type:"RESPOND_SKILL",playerId:nt.id,response:"pass"})},"不回應"))),(Ve==null?void 0:Ve.human)&&E.createElement("section",{className:"skill-overflow","aria-live":"polite"},E.createElement("strong",null,"手牌已達上限"),E.createElement("span",null,"剛抽到第 4 張技能卡，請選擇立即使用或放棄其中一張。"),E.createElement("div",{className:"skill-overflow-list"},(Ve.skillHand||[]).map((B,De)=>{const Ke=or.find(Rt=>Rt.id===B);return Ke?E.createElement("div",{className:"skill-overflow-card",key:`${B}-${De}`},E.createElement("span",{className:"skill-overflow-card-icon"},Ke.icon),E.createElement("strong",null,Ke.name),E.createElement("button",{type:"button",disabled:Pe(Ke),onClick:()=>Ze(Ke,!0)},"使用"),E.createElement("button",{type:"button",onClick:()=>I({type:"RESOLVE_SKILL_OVERFLOW",cardId:B})},"放棄")):null}))),M.stage==="finished"?E.createElement("button",{className:"primary",onClick:()=>L("result")},E.createElement(lv,{size:19}),"查看結算"):vt&&M.stage==="decision"?E.createElement("div",{className:"buy-actions"},E.createElement("div",{className:"buy-summary"},E.createElement("strong",null,me.name),E.createElement("b",null,St(dl(M,me)))),E.createElement("button",{className:"primary",disabled:!!Ve||!!M.pendingSkill||!!J,onClick:()=>I({type:"BUY"})},E.createElement(xu,{size:18}),"購買地產"),E.createElement("button",{className:"skip-button",disabled:!!Ve||!!M.pendingSkill||!!J,onClick:()=>I({type:"SKIP"})},"暫不購買，保留現金 ",E.createElement(ul,{size:14}))):E.createElement("button",{className:"primary",disabled:!vt||M.stage==="moving"||!!Ee||!!Ve||!!M.pendingSkill||!!J,onClick:()=>M.stage==="end"?I({type:"NEXT"}):Vt()},M.stage==="moving"?E.createElement(E.Fragment,null,"前進中 · 還有 ",M.remaining," 格"):vt?M.stage==="end"?E.createElement(E.Fragment,null,"結束回合 ",E.createElement(ul,{size:19})):E.createElement(E.Fragment,null,E.createElement(My,{size:21}),"擲骰子"):E.createElement(E.Fragment,null,"電腦思考中",E.createElement("span",{className:"thinking"},"…"))),E.createElement("p",{className:"turn-hint"},M.stage==="ready"?vt?"好運從這一步開始。":"下一段城市冒險，即將展開。":M.notice),M.event&&E.createElement("div",{className:"event-note"},E.createElement("img",{src:"./chance.png",alt:"城市機會卡"}),E.createElement("div",null,E.createElement("strong",null,M.event.title),E.createElement("span",null,M.event.kind==="inflation"?M.event.inflationDelta===0?`通膨率維持 ${M.inflationRate}%（已達上下限）`:`通膨率 ${M.event.inflationDelta>0?"+":""}${M.event.inflationDelta}% · 目前 ${M.inflationRate}%`:`${M.event.amount>0?"+":"−"} ${St(Math.abs(M.event.amount))}`),M.event.skillCardName&&E.createElement("em",null,"獲得技能卡 · ",M.event.skillCardName)))),E.createElement("section",{className:"activity"},E.createElement("div",{className:"activity-heading"},E.createElement("h2",null,"城市動態"),E.createElement("button",{onClick:()=>L("log")},"全部紀錄 ",E.createElement(Ph,{size:14}))),E.createElement("div",{className:"activity-list"},E.createElement(xy,{entries:M.log.slice(0,3)}))),E.createElement("footer",{className:"sidebar-footer"},E.createElement("span",{className:"mini-dot"}),"一起，把城市變成你的故事。"))),U==="rules"&&E.createElement(cl,{title:"城市大亨 · 遊戲規則",wide:!0,onClose:()=>L(null)},E.createElement("p",{className:"modal-lead"},"買下喜歡的街區，把小小投資變成一座城市。"),E.createElement("div",{className:"rules-list"},Hp.map(([B,De],Ke)=>E.createElement("div",{key:B},E.createElement("span",null,String(Ke+1).padStart(2,"0")),E.createElement("section",null,E.createElement("h3",null,B),E.createElement("p",null,De))))),E.createElement("button",{className:"primary",onClick:()=>L(null)},"知道了，回到城市 ",E.createElement(ul,{size:18}))),X,U==="property"&&G&&E.createElement(cl,{title:"地產手冊",onClose:()=>L(null)},E.createElement("div",{className:"property-card",style:{"--lot":G.color}},E.createElement("div",{className:"property-banner"},G.type==="property"?"CITY PROPERTY":"CITY DESTINATION"),E.createElement(kM,{size:24}),E.createElement("h3",null,G.name),E.createElement("p",null,G.type==="property"?`街區 ${G.group+1} · ${K?`${M.players[K.owner].name}的地產`:"尚未出售"}`:"城市公共空間")),G.type==="property"?E.createElement(E.Fragment,null,E.createElement("div",{className:"property-stats"},E.createElement("div",null,E.createElement("span",null,"地產價格"),E.createElement("b",null,St(dl(M,G)))),E.createElement("div",null,E.createElement("span",null,"目前租金"),E.createElement("b",null,St(K?Op(M,G):Yn(M,Math.round(G.price*.18))))),E.createElement("div",null,E.createElement("span",null,"建築等級"),E.createElement("b",null,L3(K==null?void 0:K.level))),E.createElement("div",null,E.createElement("span",null,"建造費"),E.createElement("b",null,St(Ml(G,M))))),(K==null?void 0:K.owner)===Be.id?E.createElement(E.Fragment,null,E.createElement("p",{className:"property-help"},O3(M,G,K)),E.createElement("button",{className:"primary",disabled:!Jt||!Ip(M,G.id,Be.id),onClick:()=>I({type:"BUILD",id:G.id})},E.createElement(zh,{size:18}),I3(M,G,K)),E.createElement("button",{className:"secondary full",disabled:!Jt,onClick:()=>{I({type:"SELL",id:G.id}),L(null)}},"變賣地產 · ",St(Yn(M,G.price+K.level*Math.round(G.price*.6),B=>Math.floor(B*.5))))):ye?E.createElement(E.Fragment,null,E.createElement("p",{className:"property-help"},"本次落地可以購買這塊地產。"),E.createElement("button",{className:"primary",onClick:()=>I({type:"BUY"})},E.createElement(xu,{size:18}),"購買地產 · ",St(dl(M,G))),E.createElement("button",{className:"secondary full",onClick:()=>{I({type:"SKIP"}),L(null)}},"暫不購買，保留現金")):E.createElement("p",{className:"property-help"},K?"停留在此需向擁有者支付租金。":"擲骰移動到此，即可購買這塊地產。")):E.createElement("p",{className:"property-help"},G.type==="start"?`每次經過起點，領取 ${St(Yn(M,2e3))}。`:G.type==="chance"||G.type==="fund"?"抽一張城市事件卡，看看今天有什麼驚喜。":G.type==="gojail"?"前往監獄並暫停下一回合。":G.type==="tax"?`停在這裡支付 ${St(Yn(M,G.id===6?1200:1800))} 稅金。`:G.type==="jail"?"路過僅探訪；由前往監獄格送入才需暫停。":"免費休息，不支付任何費用。")),U==="log"&&E.createElement(cl,{title:"本局城市紀錄",onClose:()=>L(null)},E.createElement("div",{className:"full-log"},M.log.map((B,De)=>E.createElement("p",{key:De},E.createElement("span",null,String(M.log.length-De).padStart(2,"0")),B.text)))),(U==="result"||M.stage==="finished"&&U===null)&&E.createElement(cl,{title:"這座城市，有了新的大亨",onClose:()=>L("closedResult")},E.createElement("div",{className:"winner"},E.createElement(lv,{size:42}),E.createElement("h3",null,(mi=M.players[M.winner])==null?void 0:mi.name,"獲勝！"),E.createElement("p",null,"城市的每一步，成就你的不凡眼光。")),E.createElement("div",{className:"rankings"},[...M.players].sort((B,De)=>_l(M,De.id)-_l(M,B.id)).map((B,De)=>E.createElement("div",{key:B.id},E.createElement("b",null,De+1),E.createElement(vy,{id:B.id,player:B,small:!0}),E.createElement("strong",null,B.name),E.createElement("span",null,B.bankrupt?"已破產":St(_l(M,B.id)))))),E.createElement("p",{className:"property-help"},"總資產＝現金＋地產原價＋房屋建造成本"),E.createElement("button",{className:"primary",onClick:Dt},"再玩一場 ",E.createElement(ul,{size:18}))))}LM.createRoot(document.getElementById("root")).render(E.createElement(G3,null));
