(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ZS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zh={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function KS(){if(N_)return dt;N_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,E={};function v(O,j,W){this.props=O,this.context=j,this.refs=E,this.updater=W||T}v.prototype.isReactComponent={},v.prototype.setState=function(O,j){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,j,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function z(){}z.prototype=v.prototype;function F(O,j,W){this.props=O,this.context=j,this.refs=E,this.updater=W||T}var D=F.prototype=new z;D.constructor=F,C(D,v.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function N(){}var U={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function L(O,j,W){var _e=W.ref;return{$$typeof:r,type:O,key:j,ref:_e!==void 0?_e:null,props:W}}function X(O,j){return L(O.type,j,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function Q(O){var j={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(W){return j[W]})}var ue=/\/+/g;function ge(O,j){return typeof O=="object"&&O!==null&&O.key!=null?Q(""+O.key):j.toString(36)}function te(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(j){O.status==="pending"&&(O.status="fulfilled",O.value=j)},function(j){O.status==="pending"&&(O.status="rejected",O.reason=j)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,j,W,_e,Re){var ne=typeof O;(ne==="undefined"||ne==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(ne){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case r:case e:ye=!0;break;case y:return ye=O._init,B(ye(O._payload),j,W,_e,Re)}}if(ye)return Re=Re(O),ye=_e===""?"."+ge(O,0):_e,I(Re)?(W="",ye!=null&&(W=ye.replace(ue,"$&/")+"/"),B(Re,j,W,"",function(lt){return lt})):Re!=null&&(k(Re)&&(Re=X(Re,W+(Re.key==null||O&&O.key===Re.key?"":(""+Re.key).replace(ue,"$&/")+"/")+ye)),j.push(Re)),1;ye=0;var Ee=_e===""?".":_e+":";if(I(O))for(var ke=0;ke<O.length;ke++)_e=O[ke],ne=Ee+ge(_e,ke),ye+=B(_e,j,W,ne,Re);else if(ke=M(O),typeof ke=="function")for(O=ke.call(O),ke=0;!(_e=O.next()).done;)_e=_e.value,ne=Ee+ge(_e,ke++),ye+=B(_e,j,W,ne,Re);else if(ne==="object"){if(typeof O.then=="function")return B(te(O),j,W,_e,Re);throw j=String(O),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(O,j,W){if(O==null)return O;var _e=[],Re=0;return B(O,_e,"","",function(ne){return j.call(W,ne,Re++)}),_e}function Z(O){if(O._status===-1){var j=O._result;j=j(),j.then(function(W){(O._status===0||O._status===-1)&&(O._status=1,O._result=W)},function(W){(O._status===0||O._status===-1)&&(O._status=2,O._result=W)}),O._status===-1&&(O._status=0,O._result=j)}if(O._status===1)return O._result.default;throw O._result}var he=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Te={map:G,forEach:function(O,j,W){G(O,function(){j.apply(this,arguments)},W)},count:function(O){var j=0;return G(O,function(){j++}),j},toArray:function(O){return G(O,function(j){return j})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return dt.Activity=x,dt.Children=Te,dt.Component=v,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=F,dt.StrictMode=s,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,dt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return U.H.useMemoCache(O)}},dt.cache=function(O){return function(){return O.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(O,j,W){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var _e=C({},O.props),Re=O.key;if(j!=null)for(ne in j.key!==void 0&&(Re=""+j.key),j)!b.call(j,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&j.ref===void 0||(_e[ne]=j[ne]);var ne=arguments.length-2;if(ne===1)_e.children=W;else if(1<ne){for(var ye=Array(ne),Ee=0;Ee<ne;Ee++)ye[Ee]=arguments[Ee+2];_e.children=ye}return L(O.type,Re,_e)},dt.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},dt.createElement=function(O,j,W){var _e,Re={},ne=null;if(j!=null)for(_e in j.key!==void 0&&(ne=""+j.key),j)b.call(j,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Re[_e]=j[_e]);var ye=arguments.length-2;if(ye===1)Re.children=W;else if(1<ye){for(var Ee=Array(ye),ke=0;ke<ye;ke++)Ee[ke]=arguments[ke+2];Re.children=Ee}if(O&&O.defaultProps)for(_e in ye=O.defaultProps,ye)Re[_e]===void 0&&(Re[_e]=ye[_e]);return L(O,ne,Re)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(O){return{$$typeof:p,render:O}},dt.isValidElement=k,dt.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:Z}},dt.memo=function(O,j){return{$$typeof:d,type:O,compare:j===void 0?null:j}},dt.startTransition=function(O){var j=U.T,W={};U.T=W;try{var _e=O(),Re=U.S;Re!==null&&Re(W,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(N,he)}catch(ne){he(ne)}finally{j!==null&&W.types!==null&&(j.types=W.types),U.T=j}},dt.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},dt.use=function(O){return U.H.use(O)},dt.useActionState=function(O,j,W){return U.H.useActionState(O,j,W)},dt.useCallback=function(O,j){return U.H.useCallback(O,j)},dt.useContext=function(O){return U.H.useContext(O)},dt.useDebugValue=function(){},dt.useDeferredValue=function(O,j){return U.H.useDeferredValue(O,j)},dt.useEffect=function(O,j){return U.H.useEffect(O,j)},dt.useEffectEvent=function(O){return U.H.useEffectEvent(O)},dt.useId=function(){return U.H.useId()},dt.useImperativeHandle=function(O,j,W){return U.H.useImperativeHandle(O,j,W)},dt.useInsertionEffect=function(O,j){return U.H.useInsertionEffect(O,j)},dt.useLayoutEffect=function(O,j){return U.H.useLayoutEffect(O,j)},dt.useMemo=function(O,j){return U.H.useMemo(O,j)},dt.useOptimistic=function(O,j){return U.H.useOptimistic(O,j)},dt.useReducer=function(O,j,W){return U.H.useReducer(O,j,W)},dt.useRef=function(O){return U.H.useRef(O)},dt.useState=function(O){return U.H.useState(O)},dt.useSyncExternalStore=function(O,j,W){return U.H.useSyncExternalStore(O,j,W)},dt.useTransition=function(){return U.H.useTransition()},dt.version="19.2.8",dt}var L_;function Ap(){return L_||(L_=1,zh.exports=KS()),zh.exports}var vt=Ap();const P=ZS(vt);var Bh={exports:{}},al={},Fh={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function QS(){return O_||(O_=1,(function(r){function e(B,G){var Z=B.length;B.push(G);e:for(;0<Z;){var he=Z-1>>>1,Te=B[he];if(0<l(Te,G))B[he]=G,B[Z]=Te,Z=he;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var G=B[0],Z=B.pop();if(Z!==G){B[0]=Z;e:for(var he=0,Te=B.length,O=Te>>>1;he<O;){var j=2*(he+1)-1,W=B[j],_e=j+1,Re=B[_e];if(0>l(W,Z))_e<Te&&0>l(Re,W)?(B[he]=Re,B[_e]=Z,he=_e):(B[he]=W,B[j]=Z,he=j);else if(_e<Te&&0>l(Re,Z))B[he]=Re,B[_e]=Z,he=_e;else break e}}return G}function l(B,G){var Z=B.sortIndex-G.sortIndex;return Z!==0?Z:B.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],d=[],y=1,x=null,g=3,M=!1,T=!1,C=!1,E=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var G=i(d);G!==null;){if(G.callback===null)s(d);else if(G.startTime<=B)s(d),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(d)}}function I(B){if(C=!1,D(B),!T)if(i(m)!==null)T=!0,N||(N=!0,Q());else{var G=i(d);G!==null&&te(I,G.startTime-B)}}var N=!1,U=-1,b=5,L=-1;function X(){return E?!0:!(r.unstable_now()-L<b)}function k(){if(E=!1,N){var B=r.unstable_now();L=B;var G=!0;try{e:{T=!1,C&&(C=!1,z(U),U=-1),M=!0;var Z=g;try{t:{for(D(B),x=i(m);x!==null&&!(x.expirationTime>B&&X());){var he=x.callback;if(typeof he=="function"){x.callback=null,g=x.priorityLevel;var Te=he(x.expirationTime<=B);if(B=r.unstable_now(),typeof Te=="function"){x.callback=Te,D(B),G=!0;break t}x===i(m)&&s(m),D(B)}else s(m);x=i(m)}if(x!==null)G=!0;else{var O=i(d);O!==null&&te(I,O.startTime-B),G=!1}}break e}finally{x=null,g=Z,M=!1}G=void 0}}finally{G?Q():N=!1}}}var Q;if(typeof F=="function")Q=function(){F(k)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,ge=ue.port2;ue.port1.onmessage=k,Q=function(){ge.postMessage(null)}}else Q=function(){v(k,0)};function te(B,G){U=v(function(){B(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Z=g;g=G;try{return B()}finally{g=Z}},r.unstable_requestPaint=function(){E=!0},r.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=g;g=B;try{return G()}finally{g=Z}},r.unstable_scheduleCallback=function(B,G,Z){var he=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?he+Z:he):Z=he,B){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=Z+Te,B={id:y++,callback:G,priorityLevel:B,startTime:Z,expirationTime:Te,sortIndex:-1},Z>he?(B.sortIndex=Z,e(d,B),i(m)===null&&B===i(d)&&(C?(z(U),U=-1):C=!0,te(I,Z-he))):(B.sortIndex=Te,e(m,B),T||M||(T=!0,N||(N=!0,Q()))),B},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(B){var G=g;return function(){var Z=g;g=G;try{return B.apply(this,arguments)}finally{g=Z}}}})(Hh)),Hh}var P_;function JS(){return P_||(P_=1,Fh.exports=QS()),Fh.exports}var Gh={exports:{}},Vn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function jS(){if(I_)return Vn;I_=1;var r=Ap();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)d+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:y}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Vn.createPortal=function(m,d){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,y)},Vn.flushSync=function(m){var d=f.T,y=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=d,s.p=y,s.d.f()}},Vn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Vn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Vn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var y=d.as,x=p(y,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;y==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:M}):y==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Vn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var y=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Vn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var y=d.as,x=p(y,d.crossOrigin);s.d.L(m,y,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Vn.preloadModule=function(m,d){if(typeof m=="string")if(d){var y=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Vn.requestFormReset=function(m){s.d.r(m)},Vn.unstable_batchedUpdates=function(m,d){return m(d)},Vn.useFormState=function(m,d,y){return f.H.useFormState(m,d,y)},Vn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Vn.version="19.2.8",Vn}var z_;function $S(){if(z_)return Gh.exports;z_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gh.exports=jS(),Gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function eM(){if(B_)return al;B_=1;var r=JS(),e=Ap(),i=$S();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,o=h;break}if(R===o){_=!0,o=u,a=h;break}R=R.sibling}if(!_){for(R=h.child;R;){if(R===a){_=!0,a=h,o=u;break}if(R===o){_=!0,o=h,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),F=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case E:return"StrictMode";case I:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case F:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}var te=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},he=[],Te=-1;function O(t){return{current:t}}function j(t){0>Te||(t.current=he[Te],he[Te]=null,Te--)}function W(t,n){Te++,he[Te]=t.current,t.current=n}var _e=O(null),Re=O(null),ne=O(null),ye=O(null);function Ee(t,n){switch(W(ne,n),W(Re,t),W(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?t_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=t_(n),t=n_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(_e),W(_e,t)}function ke(){j(_e),j(Re),j(ne)}function lt(t){t.memoizedState!==null&&W(ye,t);var n=_e.current,a=n_(n,t.type);n!==a&&(W(Re,t),W(_e,a))}function tt(t){Re.current===t&&(j(_e),j(Re)),ye.current===t&&(j(ye),el._currentValue=Z)}var Yt,ht;function St(t){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+ht}var Mt=!1;function yt(t,n){if(!t||Mt)return"";Mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(fe){var ce=fe}Reflect.construct(t,[],be)}else{try{be.call()}catch(fe){ce=fe}t.call(be.prototype)}}else{try{throw Error()}catch(fe){ce=fe}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(fe){if(fe&&ce&&typeof fe.stack=="string")return[fe.stack,ce.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),_=h[0],R=h[1];if(_&&R){var V=_.split(`
`),se=R.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<se.length&&!se[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===se.length)for(o=V.length-1,u=se.length-1;1<=o&&0<=u&&V[o]!==se[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==se[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==se[u]){var ve=`
`+V[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{Mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?St(a):""}function $t(t,n){switch(t.tag){case 26:case 27:case 5:return St(t.type);case 16:return St("Lazy");case 13:return t.child!==n&&n!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return yt(t.type,!1);case 11:return yt(t.type.render,!1);case 1:return yt(t.type,!0);case 31:return St("Activity");default:return""}}function Se(t){try{var n="",a=null;do n+=$t(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var we=Object.prototype.hasOwnProperty,De=r.unstable_scheduleCallback,Ve=r.unstable_cancelCallback,Ye=r.unstable_shouldYield,H=r.unstable_requestPaint,Qe=r.unstable_now,ze=r.unstable_getCurrentPriorityLevel,w=r.unstable_ImmediatePriority,S=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,ie=r.unstable_LowPriority,de=r.unstable_IdlePriority,Ce=r.log,Ne=r.unstable_setDisableYieldValue,pe=null,me=null;function Le(t){if(typeof Ce=="function"&&Ne(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(pe,t)}catch{}}var Xe=Math.clz32?Math.clz32:it,Be=Math.log,Pe=Math.LN2;function it(t){return t>>>=0,t===0?32:31-(Be(t)/Pe|0)|0}var at=256,ft=262144,q=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Ue(o):(_&=R,_!==0?u=Ue(_):a||(a=R&~t,a!==0&&(u=Ue(a))))):(R=o&~h,R!==0?u=Ue(R):_!==0?u=Ue(_):a||(a=o&~t,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ge(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=q;return q<<=1,(q&62914560)===0&&(q=4194304),t}function $e(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ze(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,n,a,o,u,h){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,V=t.expirationTimes,se=t.hiddenUpdates;for(a=_&~a;0<a;){var ve=31-Xe(a),be=1<<ve;R[ve]=0,V[ve]=-1;var ce=se[ve];if(ce!==null)for(se[ve]=null,ve=0;ve<ce.length;ve++){var fe=ce[ve];fe!==null&&(fe.lane&=-536870913)}a&=~be}o!==0&&Bt(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(_&~n))}function Bt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ri(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function oi(t,n){var a=n&-n;return a=(a&42)!==0?1:po(a),(a&(t.suspendedLanes|n))!==0?0:a}function po(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function go(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:T_(t.type))}function ir(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Xi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Xi,On="__reactProps$"+Xi,Kn="__reactContainer$"+Xi,bs="__reactEvents$"+Xi,wl="__reactListeners$"+Xi,Dl="__reactHandles$"+Xi,Ts="__reactResources$"+Xi,za="__reactMarker$"+Xi;function Ba(t){delete t[mn],delete t[On],delete t[bs],delete t[wl],delete t[Dl]}function ra(t){var n=t[mn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Kn]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=c_(t);t!==null;){if(a=t[mn])return a;t=c_(t)}return n}t=a,a=t.parentNode}return null}function oa(t){if(t=t[mn]||t[Kn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function As(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Fa(t){var n=t[Ts];return n||(n=t[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[za]=!0}var Ul=new Set,A={};function J(t,n){le(t,n),le(t+"Capture",n)}function le(t,n){for(A[t]=n,t=0;t<n.length;t++)Ul.add(n[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oe={},Fe={};function qe(t){return we.call(Fe,t)?!0:we.call(oe,t)?!1:re.test(t)?Fe[t]=!0:(oe[t]=!0,!1)}function Ie(t,n,a){if(qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Je(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,h.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Lt(t){if(!t._valueTracker){var n=mt(t)?"checked":"value";t._valueTracker=nt(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=mt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function Ht(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function We(t,n,a,o,u,h,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+st(n)):t.value!==""+st(n)&&(t.value=""+st(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?bt(t,_,st(n)):a!=null?bt(t,_,st(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+st(R):t.removeAttribute("name")}function Gn(t,n,a,o,u,h,_,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Lt(t);return}a=a!=null?""+st(a):"",n=n!=null?""+st(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Lt(t)}function bt(t,n,a){n==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+st(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function li(t,n,a){if(n!=null&&(n=""+st(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+st(a):""}function Li(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(te(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=st(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Lt(t)}function ci(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Gt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Oi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&sn(t,h,n[h])}function zt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ha=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rs(t){return Ha.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function la(){}var Lu=null;function Ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ar=null,sr=null;function em(t){var n=oa(t);if(n&&(t=n.stateNode)){var a=t[On]||null;e:switch(t=n.stateNode,n.type){case"input":if(We(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[On]||null;if(!u)throw Error(s(90));We(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&an(o)}break e;case"textarea":li(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&bn(t,!!a.multiple,n,!1)}}}var Pu=!1;function tm(t,n,a){if(Pu)return t(n,a);Pu=!0;try{var o=t(n);return o}finally{if(Pu=!1,(ar!==null||sr!==null)&&(vc(),ar&&(n=ar,t=sr,sr=ar=null,em(n),t)))for(n=0;n<t.length;n++)em(t[n])}}function _o(t,n){var a=t.stateNode;if(a===null)return null;var o=a[On]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if(ca)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Iu=!1}var Ga=null,zu=null,Nl=null;function nm(){if(Nl)return Nl;var t,n=zu,a=n.length,o,u="value"in Ga?Ga.value:Ga.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[h-o];o++);return Nl=u.slice(t,1<o?1-o:void 0)}function Ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function im(){return!1}function Qn(t){function n(a,o,u,h,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ol:im,this.isPropagationStopped=im,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Qn(Cs),yo=x({},Cs,{view:0,detail:0}),Yy=Qn(yo),Bu,Fu,xo,Il=x({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(Bu=t.screenX-xo.screenX,Fu=t.screenY-xo.screenY):Fu=Bu=0,xo=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),am=Qn(Il),qy=x({},Il,{dataTransfer:0}),Zy=Qn(qy),Ky=x({},yo,{relatedTarget:0}),Hu=Qn(Ky),Qy=x({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Jy=Qn(Qy),jy=x({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$y=Qn(jy),ex=x({},Cs,{data:0}),sm=Qn(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ix[t])?!!n[t]:!1}function Gu(){return ax}var sx=x({},yo,{key:function(t){if(t.key){var n=tx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rx=Qn(sx),ox=x({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=Qn(ox),lx=x({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),cx=Qn(lx),ux=x({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=Qn(ux),hx=x({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=Qn(hx),px=x({},Cs,{newState:0,oldState:0}),mx=Qn(px),gx=[9,13,27,32],Vu=ca&&"CompositionEvent"in window,So=null;ca&&"documentMode"in document&&(So=document.documentMode);var _x=ca&&"TextEvent"in window&&!So,om=ca&&(!Vu||So&&8<So&&11>=So),lm=" ",cm=!1;function um(t,n){switch(t){case"keyup":return gx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function vx(t,n){switch(t){case"compositionend":return fm(n);case"keypress":return n.which!==32?null:(cm=!0,lm);case"textInput":return t=n.data,t===lm&&cm?null:t;default:return null}}function yx(t,n){if(rr)return t==="compositionend"||!Vu&&um(t,n)?(t=nm(),Nl=zu=Ga=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return om&&n.locale!=="ko"?null:n.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!xx[t.type]:n==="textarea"}function dm(t,n,a,o){ar?sr?sr.push(o):sr=[o]:ar=o,n=Tc(n,"onChange"),0<n.length&&(a=new Pl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Mo=null,Eo=null;function Sx(t){Kg(t,0)}function zl(t){var n=As(t);if(an(n))return t}function pm(t,n){if(t==="change")return n}var mm=!1;if(ca){var ku;if(ca){var Xu="oninput"in document;if(!Xu){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),Xu=typeof gm.oninput=="function"}ku=Xu}else ku=!1;mm=ku&&(!document.documentMode||9<document.documentMode)}function _m(){Mo&&(Mo.detachEvent("onpropertychange",vm),Eo=Mo=null)}function vm(t){if(t.propertyName==="value"&&zl(Eo)){var n=[];dm(n,Eo,t,Ou(t)),tm(Sx,n)}}function Mx(t,n,a){t==="focusin"?(_m(),Mo=n,Eo=a,Mo.attachEvent("onpropertychange",vm)):t==="focusout"&&_m()}function Ex(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Eo)}function bx(t,n){if(t==="click")return zl(n)}function Tx(t,n){if(t==="input"||t==="change")return zl(n)}function Ax(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ui=typeof Object.is=="function"?Object.is:Ax;function bo(t,n){if(ui(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!we.call(n,u)||!ui(t[u],n[u]))return!1}return!0}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xm(t,n){var a=ym(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ym(a)}}function Sm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Sm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jt(t.document)}return n}function Wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Rx=ca&&"documentMode"in document&&11>=document.documentMode,or=null,Yu=null,To=null,qu=!1;function Em(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||or==null||or!==Jt(o)||(o=or,"selectionStart"in o&&Wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),To&&bo(To,o)||(To=o,o=Tc(Yu,"onSelect"),0<o.length&&(n=new Pl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=or)))}function ws(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var lr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},Zu={},bm={};ca&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function Ds(t){if(Zu[t])return Zu[t];if(!lr[t])return t;var n=lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in bm)return Zu[t]=n[a];return t}var Tm=Ds("animationend"),Am=Ds("animationiteration"),Rm=Ds("animationstart"),Cx=Ds("transitionrun"),wx=Ds("transitionstart"),Dx=Ds("transitioncancel"),Cm=Ds("transitionend"),wm=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function Pi(t,n){wm.set(t,n),J(n,[t])}var Bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],cr=0,Qu=0;function Fl(){for(var t=cr,n=Qu=cr=0;n<t;){var a=Si[n];Si[n++]=null;var o=Si[n];Si[n++]=null;var u=Si[n];Si[n++]=null;var h=Si[n];if(Si[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}h!==0&&Dm(a,u,h)}}function Hl(t,n,a,o){Si[cr++]=t,Si[cr++]=n,Si[cr++]=a,Si[cr++]=o,Qu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ju(t,n,a,o){return Hl(t,n,a,o),Gl(t)}function Us(t,n){return Hl(t,null,null,n),Gl(t)}function Dm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Xe(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Gl(t){if(50<qo)throw qo=0,oh=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ur={};function Ux(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(t,n,a,o){return new Ux(t,n,a,o)}function ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,n){var a=t.alternate;return a===null?(a=fi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Um(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,a,o,u,h){var _=0;if(o=t,typeof t=="function")ju(t)&&(_=1);else if(typeof t=="string")_=IS(t,a,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=fi(31,a,n,u),t.elementType=L,t.lanes=h,t;case C:return Ns(a.children,u,h,n);case E:_=8,u|=24;break;case v:return t=fi(12,a,n,u|2),t.elementType=v,t.lanes=h,t;case I:return t=fi(13,a,n,u),t.elementType=I,t.lanes=h,t;case N:return t=fi(19,a,n,u),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:_=10;break e;case z:_=9;break e;case D:_=11;break e;case U:_=14;break e;case b:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=fi(_,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function Ns(t,n,a,o){return t=fi(7,t,o,n),t.lanes=a,t}function $u(t,n,a){return t=fi(6,t,null,n),t.lanes=a,t}function Nm(t){var n=fi(18,null,null,0);return n.stateNode=t,n}function ef(t,n,a){return n=fi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Lm=new WeakMap;function Mi(t,n){if(typeof t=="object"&&t!==null){var a=Lm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Se(n)},Lm.set(t,n),n)}return{value:t,source:n,stack:Se(n)}}var fr=[],hr=0,kl=null,Ao=0,Ei=[],bi=0,Va=null,Yi=1,qi="";function fa(t,n){fr[hr++]=Ao,fr[hr++]=kl,kl=t,Ao=n}function Om(t,n,a){Ei[bi++]=Yi,Ei[bi++]=qi,Ei[bi++]=Va,Va=t;var o=Yi;t=qi;var u=32-Xe(o)-1;o&=~(1<<u),a+=1;var h=32-Xe(n)+u;if(30<h){var _=u-u%5;h=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Yi=1<<32-Xe(n)+u|a<<u|o,qi=h+t}else Yi=1<<h|a<<u|o,qi=t}function tf(t){t.return!==null&&(fa(t,1),Om(t,1,0))}function nf(t){for(;t===kl;)kl=fr[--hr],fr[hr]=null,Ao=fr[--hr],fr[hr]=null;for(;t===Va;)Va=Ei[--bi],Ei[bi]=null,qi=Ei[--bi],Ei[bi]=null,Yi=Ei[--bi],Ei[bi]=null}function Pm(t,n){Ei[bi++]=Yi,Ei[bi++]=qi,Ei[bi++]=Va,Yi=n.id,qi=n.overflow,Va=t}var Pn=null,en=null,Dt=!1,ka=null,Ti=!1,af=Error(s(519));function Xa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ro(Mi(n,t)),af}function Im(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[mn]=t,n[On]=o,a){case"dialog":At("cancel",n),At("close",n);break;case"iframe":case"object":case"embed":At("load",n);break;case"video":case"audio":for(a=0;a<Ko.length;a++)At(Ko[a],n);break;case"source":At("error",n);break;case"img":case"image":case"link":At("error",n),At("load",n);break;case"details":At("toggle",n);break;case"input":At("invalid",n),Gn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":At("invalid",n);break;case"textarea":At("invalid",n),Li(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||$g(n.textContent,a)?(o.popover!=null&&(At("beforetoggle",n),At("toggle",n)),o.onScroll!=null&&At("scroll",n),o.onScrollEnd!=null&&At("scrollend",n),o.onClick!=null&&(n.onclick=la),n=!0):n=!1,n||Xa(t,!0)}function zm(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Pn=Pn.return}}function dr(t){if(t!==Pn)return!1;if(!Dt)return zm(t),Dt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Mh(t.type,t.memoizedProps)),a=!a),a&&en&&Xa(t),zm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=l_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=l_(t)}else n===27?(n=en,as(t.type)?(t=Rh,Rh=null,en=t):en=n):en=Pn?Ri(t.stateNode.nextSibling):null;return!0}function Ls(){en=Pn=null,Dt=!1}function sf(){var t=ka;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),ka=null),t}function Ro(t){ka===null?ka=[t]:ka.push(t)}var rf=O(null),Os=null,ha=null;function Wa(t,n,a){W(rf,n._currentValue),n._currentValue=a}function da(t){t._currentValue=rf.current,j(rf)}function of(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function lf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var _=u.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),of(h.return,a,t),o||(_=null);break e}h=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,h=_.alternate,h!==null&&(h.lanes|=a),of(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function pr(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;ui(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===ye.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(el):t=[el])}u=u.return}t!==null&&lf(n,t,a,o),n.flags|=262144}function Xl(t){for(t=t.firstContext;t!==null;){if(!ui(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ps(t){Os=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return Bm(Os,t)}function Wl(t,n){return Os===null&&Ps(t),Bm(t,n)}function Bm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ha===null){if(t===null)throw Error(s(308));ha=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ha=ha.next=n;return a}var Nx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Lx=r.unstable_scheduleCallback,Ox=r.unstable_NormalPriority,_n={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new Nx,data:new Map,refCount:0}}function Co(t){t.refCount--,t.refCount===0&&Lx(Ox,function(){t.controller.abort()})}var wo=null,uf=0,mr=0,gr=null;function Px(t,n){if(wo===null){var a=wo=[];uf=0,mr=dh(),gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return uf++,n.then(Fm,Fm),n}function Fm(){if(--uf===0&&wo!==null){gr!==null&&(gr.status="fulfilled");var t=wo;wo=null,mr=0,gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ix(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Hm=B.S;B.S=function(t,n){Eg=Qe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Px(t,n),Hm!==null&&Hm(t,n)};var Is=O(null);function ff(){var t=Is.current;return t!==null?t:jt.pooledCache}function Yl(t,n){n===null?W(Is,Is.current):W(Is,n.pool)}function Gm(){var t=ff();return t===null?null:{parent:_n._currentValue,pool:t}}var _r=Error(s(460)),hf=Error(s(474)),ql=Error(s(542)),Zl={then:function(){}};function Vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function km(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(la,la),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wm(t),t;default:if(typeof n.status=="string")n.then(la,la);else{if(t=jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wm(t),t}throw Bs=n,_r}}function zs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Bs=a,_r):a}}var Bs=null;function Xm(){if(Bs===null)throw Error(s(459));var t=Bs;return Bs=null,t}function Wm(t){if(t===_r||t===ql)throw Error(s(483))}var vr=null,Do=0;function Kl(t){var n=Do;return Do+=1,vr===null&&(vr=[]),km(vr,t,n)}function Uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ql(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ym(t){function n(ee,Y){if(t){var ae=ee.deletions;ae===null?(ee.deletions=[Y],ee.flags|=16):ae.push(Y)}}function a(ee,Y){if(!t)return null;for(;Y!==null;)n(ee,Y),Y=Y.sibling;return null}function o(ee){for(var Y=new Map;ee!==null;)ee.key!==null?Y.set(ee.key,ee):Y.set(ee.index,ee),ee=ee.sibling;return Y}function u(ee,Y){return ee=ua(ee,Y),ee.index=0,ee.sibling=null,ee}function h(ee,Y,ae){return ee.index=ae,t?(ae=ee.alternate,ae!==null?(ae=ae.index,ae<Y?(ee.flags|=67108866,Y):ae):(ee.flags|=67108866,Y)):(ee.flags|=1048576,Y)}function _(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function R(ee,Y,ae,Me){return Y===null||Y.tag!==6?(Y=$u(ae,ee.mode,Me),Y.return=ee,Y):(Y=u(Y,ae),Y.return=ee,Y)}function V(ee,Y,ae,Me){var rt=ae.type;return rt===C?ve(ee,Y,ae.props.children,Me,ae.key):Y!==null&&(Y.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===b&&zs(rt)===Y.type)?(Y=u(Y,ae.props),Uo(Y,ae),Y.return=ee,Y):(Y=Vl(ae.type,ae.key,ae.props,null,ee.mode,Me),Uo(Y,ae),Y.return=ee,Y)}function se(ee,Y,ae,Me){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ae.containerInfo||Y.stateNode.implementation!==ae.implementation?(Y=ef(ae,ee.mode,Me),Y.return=ee,Y):(Y=u(Y,ae.children||[]),Y.return=ee,Y)}function ve(ee,Y,ae,Me,rt){return Y===null||Y.tag!==7?(Y=Ns(ae,ee.mode,Me,rt),Y.return=ee,Y):(Y=u(Y,ae),Y.return=ee,Y)}function be(ee,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=$u(""+Y,ee.mode,ae),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return ae=Vl(Y.type,Y.key,Y.props,null,ee.mode,ae),Uo(ae,Y),ae.return=ee,ae;case T:return Y=ef(Y,ee.mode,ae),Y.return=ee,Y;case b:return Y=zs(Y),be(ee,Y,ae)}if(te(Y)||Q(Y))return Y=Ns(Y,ee.mode,ae,null),Y.return=ee,Y;if(typeof Y.then=="function")return be(ee,Kl(Y),ae);if(Y.$$typeof===F)return be(ee,Wl(ee,Y),ae);Ql(ee,Y)}return null}function ce(ee,Y,ae,Me){var rt=Y!==null?Y.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return rt!==null?null:R(ee,Y,""+ae,Me);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case M:return ae.key===rt?V(ee,Y,ae,Me):null;case T:return ae.key===rt?se(ee,Y,ae,Me):null;case b:return ae=zs(ae),ce(ee,Y,ae,Me)}if(te(ae)||Q(ae))return rt!==null?null:ve(ee,Y,ae,Me,null);if(typeof ae.then=="function")return ce(ee,Y,Kl(ae),Me);if(ae.$$typeof===F)return ce(ee,Y,Wl(ee,ae),Me);Ql(ee,ae)}return null}function fe(ee,Y,ae,Me,rt){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return ee=ee.get(ae)||null,R(Y,ee,""+Me,rt);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case M:return ee=ee.get(Me.key===null?ae:Me.key)||null,V(Y,ee,Me,rt);case T:return ee=ee.get(Me.key===null?ae:Me.key)||null,se(Y,ee,Me,rt);case b:return Me=zs(Me),fe(ee,Y,ae,Me,rt)}if(te(Me)||Q(Me))return ee=ee.get(ae)||null,ve(Y,ee,Me,rt,null);if(typeof Me.then=="function")return fe(ee,Y,ae,Kl(Me),rt);if(Me.$$typeof===F)return fe(ee,Y,ae,Wl(Y,Me),rt);Ql(Y,Me)}return null}function je(ee,Y,ae,Me){for(var rt=null,Ot=null,et=Y,_t=Y=0,wt=null;et!==null&&_t<ae.length;_t++){et.index>_t?(wt=et,et=null):wt=et.sibling;var Pt=ce(ee,et,ae[_t],Me);if(Pt===null){et===null&&(et=wt);break}t&&et&&Pt.alternate===null&&n(ee,et),Y=h(Pt,Y,_t),Ot===null?rt=Pt:Ot.sibling=Pt,Ot=Pt,et=wt}if(_t===ae.length)return a(ee,et),Dt&&fa(ee,_t),rt;if(et===null){for(;_t<ae.length;_t++)et=be(ee,ae[_t],Me),et!==null&&(Y=h(et,Y,_t),Ot===null?rt=et:Ot.sibling=et,Ot=et);return Dt&&fa(ee,_t),rt}for(et=o(et);_t<ae.length;_t++)wt=fe(et,ee,_t,ae[_t],Me),wt!==null&&(t&&wt.alternate!==null&&et.delete(wt.key===null?_t:wt.key),Y=h(wt,Y,_t),Ot===null?rt=wt:Ot.sibling=wt,Ot=wt);return t&&et.forEach(function(cs){return n(ee,cs)}),Dt&&fa(ee,_t),rt}function ct(ee,Y,ae,Me){if(ae==null)throw Error(s(151));for(var rt=null,Ot=null,et=Y,_t=Y=0,wt=null,Pt=ae.next();et!==null&&!Pt.done;_t++,Pt=ae.next()){et.index>_t?(wt=et,et=null):wt=et.sibling;var cs=ce(ee,et,Pt.value,Me);if(cs===null){et===null&&(et=wt);break}t&&et&&cs.alternate===null&&n(ee,et),Y=h(cs,Y,_t),Ot===null?rt=cs:Ot.sibling=cs,Ot=cs,et=wt}if(Pt.done)return a(ee,et),Dt&&fa(ee,_t),rt;if(et===null){for(;!Pt.done;_t++,Pt=ae.next())Pt=be(ee,Pt.value,Me),Pt!==null&&(Y=h(Pt,Y,_t),Ot===null?rt=Pt:Ot.sibling=Pt,Ot=Pt);return Dt&&fa(ee,_t),rt}for(et=o(et);!Pt.done;_t++,Pt=ae.next())Pt=fe(et,ee,_t,Pt.value,Me),Pt!==null&&(t&&Pt.alternate!==null&&et.delete(Pt.key===null?_t:Pt.key),Y=h(Pt,Y,_t),Ot===null?rt=Pt:Ot.sibling=Pt,Ot=Pt);return t&&et.forEach(function(qS){return n(ee,qS)}),Dt&&fa(ee,_t),rt}function Kt(ee,Y,ae,Me){if(typeof ae=="object"&&ae!==null&&ae.type===C&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case M:e:{for(var rt=ae.key;Y!==null;){if(Y.key===rt){if(rt=ae.type,rt===C){if(Y.tag===7){a(ee,Y.sibling),Me=u(Y,ae.props.children),Me.return=ee,ee=Me;break e}}else if(Y.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===b&&zs(rt)===Y.type){a(ee,Y.sibling),Me=u(Y,ae.props),Uo(Me,ae),Me.return=ee,ee=Me;break e}a(ee,Y);break}else n(ee,Y);Y=Y.sibling}ae.type===C?(Me=Ns(ae.props.children,ee.mode,Me,ae.key),Me.return=ee,ee=Me):(Me=Vl(ae.type,ae.key,ae.props,null,ee.mode,Me),Uo(Me,ae),Me.return=ee,ee=Me)}return _(ee);case T:e:{for(rt=ae.key;Y!==null;){if(Y.key===rt)if(Y.tag===4&&Y.stateNode.containerInfo===ae.containerInfo&&Y.stateNode.implementation===ae.implementation){a(ee,Y.sibling),Me=u(Y,ae.children||[]),Me.return=ee,ee=Me;break e}else{a(ee,Y);break}else n(ee,Y);Y=Y.sibling}Me=ef(ae,ee.mode,Me),Me.return=ee,ee=Me}return _(ee);case b:return ae=zs(ae),Kt(ee,Y,ae,Me)}if(te(ae))return je(ee,Y,ae,Me);if(Q(ae)){if(rt=Q(ae),typeof rt!="function")throw Error(s(150));return ae=rt.call(ae),ct(ee,Y,ae,Me)}if(typeof ae.then=="function")return Kt(ee,Y,Kl(ae),Me);if(ae.$$typeof===F)return Kt(ee,Y,Wl(ee,ae),Me);Ql(ee,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,Y!==null&&Y.tag===6?(a(ee,Y.sibling),Me=u(Y,ae),Me.return=ee,ee=Me):(a(ee,Y),Me=$u(ae,ee.mode,Me),Me.return=ee,ee=Me),_(ee)):a(ee,Y)}return function(ee,Y,ae,Me){try{Do=0;var rt=Kt(ee,Y,ae,Me);return vr=null,rt}catch(et){if(et===_r||et===ql)throw et;var Ot=fi(29,et,null,ee.mode);return Ot.lanes=Me,Ot.return=ee,Ot}finally{}}}var Fs=Ym(!0),qm=Ym(!1),Ya=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Gl(t),Dm(t,null,a),n}return Hl(t,o,n,a),Gl(t)}function No(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ri(t,a)}}function mf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=_:h=h.next=_,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var gf=!1;function Lo(){if(gf){var t=gr;if(t!==null)throw t}}function Oo(t,n,a,o){gf=!1;var u=t.updateQueue;Ya=!1;var h=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,se=V.next;V.next=null,_===null?h=se:_.next=se,_=V;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,R=ve.lastBaseUpdate,R!==_&&(R===null?ve.firstBaseUpdate=se:R.next=se,ve.lastBaseUpdate=V))}if(h!==null){var be=u.baseState;_=0,ve=se=V=null,R=h;do{var ce=R.lane&-536870913,fe=ce!==R.lane;if(fe?(Ct&ce)===ce:(o&ce)===ce){ce!==0&&ce===mr&&(gf=!0),ve!==null&&(ve=ve.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var je=t,ct=R;ce=n;var Kt=a;switch(ct.tag){case 1:if(je=ct.payload,typeof je=="function"){be=je.call(Kt,be,ce);break e}be=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=ct.payload,ce=typeof je=="function"?je.call(Kt,be,ce):je,ce==null)break e;be=x({},be,ce);break e;case 2:Ya=!0}}ce=R.callback,ce!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[ce]:fe.push(ce))}else fe={lane:ce,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ve===null?(se=ve=fe,V=be):ve=ve.next=fe,_|=ce;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;fe=R,R=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);ve===null&&(V=be),u.baseState=V,u.firstBaseUpdate=se,u.lastBaseUpdate=ve,h===null&&(u.shared.lanes=0),$a|=_,t.lanes=_,t.memoizedState=be}}function Zm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Km(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Zm(a[t],n)}var yr=O(null),Jl=O(0);function Qm(t,n){t=Ma,W(Jl,t),W(yr,n),Ma=t|n.baseLanes}function _f(){W(Jl,Ma),W(yr,yr.current)}function vf(){Ma=Jl.current,j(yr),j(Jl)}var hi=O(null),Ai=null;function Ka(t){var n=t.alternate;W(hn,hn.current&1),W(hi,t),Ai===null&&(n===null||yr.current!==null||n.memoizedState!==null)&&(Ai=t)}function yf(t){W(hn,hn.current),W(hi,t),Ai===null&&(Ai=t)}function Jm(t){t.tag===22?(W(hn,hn.current),W(hi,t),Ai===null&&(Ai=t)):Qa()}function Qa(){W(hn,hn.current),W(hi,hi.current)}function di(t){j(hi),Ai===t&&(Ai=null),j(hn)}var hn=O(0);function jl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Th(a)||Ah(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=0,gt=null,qt=null,vn=null,$l=!1,xr=!1,Hs=!1,ec=0,Po=0,Sr=null,zx=0;function cn(){throw Error(s(321))}function xf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ui(t[a],n[a]))return!1;return!0}function Sf(t,n,a,o,u,h){return pa=h,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?O0:If,Hs=!1,h=a(o,u),Hs=!1,xr&&(h=$m(n,a,o,u)),jm(t),h}function jm(t){B.H=Bo;var n=qt!==null&&qt.next!==null;if(pa=0,vn=qt=gt=null,$l=!1,Po=0,Sr=null,n)throw Error(s(300));t===null||yn||(t=t.dependencies,t!==null&&Xl(t)&&(yn=!0))}function $m(t,n,a,o){gt=t;var u=0;do{if(xr&&(Sr=null),Po=0,xr=!1,25<=u)throw Error(s(301));if(u+=1,vn=qt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=P0,h=n(a,o)}while(xr);return h}function Bx(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?Io(n):n,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(gt.flags|=1024),n}function Mf(){var t=ec!==0;return ec=0,t}function Ef(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function bf(t){if($l){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}$l=!1}pa=0,vn=qt=gt=null,xr=!1,Po=ec=0,Sr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?gt.memoizedState=vn=t:vn=vn.next=t,vn}function dn(){if(qt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var n=vn===null?gt.memoizedState:vn.next;if(n!==null)vn=n,qt=t;else{if(t===null)throw gt.alternate===null?Error(s(467)):Error(s(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},vn===null?gt.memoizedState=vn=t:vn=vn.next=t}return vn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(t){var n=Po;return Po+=1,Sr===null&&(Sr=[]),t=km(Sr,t,n),n=gt,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?O0:If),t}function nc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Io(t);if(t.$$typeof===F)return In(t)}throw Error(s(438,String(t)))}function Tf(t){var n=null,a=gt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tc(),gt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=X;return n.index++,a}function ma(t,n){return typeof n=="function"?n(t):n}function ic(t){var n=dn();return Af(n,qt,t)}function Af(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var _=u.next;u.next=h.next,h.next=_}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var R=_=null,V=null,se=n,ve=!1;do{var be=se.lane&-536870913;if(be!==se.lane?(Ct&be)===be:(pa&be)===be){var ce=se.revertLane;if(ce===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),be===mr&&(ve=!0);else if((pa&ce)===ce){se=se.next,ce===mr&&(ve=!0);continue}else be={lane:0,revertLane:se.revertLane,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(R=V=be,_=h):V=V.next=be,gt.lanes|=ce,$a|=ce;be=se.action,Hs&&a(h,be),h=se.hasEagerState?se.eagerState:a(h,be)}else ce={lane:be,revertLane:se.revertLane,gesture:se.gesture,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(R=V=ce,_=h):V=V.next=ce,gt.lanes|=be,$a|=be;se=se.next}while(se!==null&&se!==n);if(V===null?_=h:V.next=R,!ui(h,t.memoizedState)&&(yn=!0,ve&&(a=gr,a!==null)))throw a;t.memoizedState=h,t.baseState=_,t.baseQueue=V,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Rf(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do h=t(h,_.action),_=_.next;while(_!==u);ui(h,n.memoizedState)||(yn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function e0(t,n,a){var o=gt,u=dn(),h=Dt;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ui((qt||u).memoizedState,a);if(_&&(u.memoizedState=a,yn=!0),u=u.queue,Df(i0.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,Mr(9,{destroy:void 0},n0.bind(null,o,u,a,n),null),jt===null)throw Error(s(349));h||(pa&127)!==0||t0(o,n,a)}return a}function t0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=gt.updateQueue,n===null?(n=tc(),gt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function n0(t,n,a,o){n.value=a,n.getSnapshot=o,a0(n)&&s0(t)}function i0(t,n,a){return a(function(){a0(n)&&s0(t)})}function a0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ui(t,a)}catch{return!0}}function s0(t){var n=Us(t,2);n!==null&&ti(n,t,2)}function Cf(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Hs){Le(!0);try{a()}finally{Le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},n}function r0(t,n,a,o){return t.baseState=a,Af(t,qt,typeof o=="function"?o:ma)}function Fx(t,n,a,o,u){if(rc(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){h.listeners.push(_)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,o0(n,h)):(h.next=a.next,n.pending=a.next=h)}}function o0(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=B.T,_={};B.T=_;try{var R=a(u,o),V=B.S;V!==null&&V(_,R),l0(t,n,R)}catch(se){wf(t,n,se)}finally{h!==null&&_.types!==null&&(h.types=_.types),B.T=h}}else try{h=a(u,o),l0(t,n,h)}catch(se){wf(t,n,se)}}function l0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){c0(t,n,o)},function(o){return wf(t,n,o)}):c0(t,n,a)}function c0(t,n,a){n.status="fulfilled",n.value=a,u0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,o0(t,a)))}function wf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,u0(n),n=n.next;while(n!==o)}t.action=null}function u0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function f0(t,n){return n}function h0(t,n){if(Dt){var a=jt.formState;if(a!==null){e:{var o=gt;if(Dt){if(en){t:{for(var u=en,h=Ti;u.nodeType!==8;){if(!h){u=null;break t}if(u=Ri(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){en=Ri(u.nextSibling),o=u.data==="F!";break e}}Xa(o)}o=!1}o&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:f0,lastRenderedState:n},a.queue=o,a=U0.bind(null,gt,o),o.dispatch=a,o=Cf(!1),h=Pf.bind(null,gt,!1,o.queue),o=Yn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Fx.bind(null,gt,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function d0(t){var n=dn();return p0(n,qt,t)}function p0(t,n,a){if(n=Af(t,n,f0)[0],t=ic(ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Io(n)}catch(_){throw _===_r?ql:_}else o=n;n=dn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(gt.flags|=2048,Mr(9,{destroy:void 0},Hx.bind(null,u,a),null)),[o,h,t]}function Hx(t,n){t.action=n}function m0(t){var n=dn(),a=qt;if(a!==null)return p0(n,a,t);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Mr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=gt.updateQueue,n===null&&(n=tc(),gt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function g0(){return dn().memoizedState}function ac(t,n,a,o){var u=Yn();gt.flags|=t,u.memoizedState=Mr(1|n,{destroy:void 0},a,o===void 0?null:o)}function sc(t,n,a,o){var u=dn();o=o===void 0?null:o;var h=u.memoizedState.inst;qt!==null&&o!==null&&xf(o,qt.memoizedState.deps)?u.memoizedState=Mr(n,h,a,o):(gt.flags|=t,u.memoizedState=Mr(1|n,h,a,o))}function _0(t,n){ac(8390656,8,t,n)}function Df(t,n){sc(2048,8,t,n)}function Gx(t){gt.flags|=4;var n=gt.updateQueue;if(n===null)n=tc(),gt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function v0(t){var n=dn().memoizedState;return Gx({ref:n,nextImpl:t}),function(){if((It&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function y0(t,n){return sc(4,2,t,n)}function x0(t,n){return sc(4,4,t,n)}function S0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function M0(t,n,a){a=a!=null?a.concat([t]):null,sc(4,4,S0.bind(null,n,t),a)}function Uf(){}function E0(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&xf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function b0(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&xf(n,o[1]))return o[0];if(o=t(),Hs){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[o,n],o}function Nf(t,n,a){return a===void 0||(pa&1073741824)!==0&&(Ct&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Tg(),gt.lanes|=t,$a|=t,a)}function T0(t,n,a,o){return ui(a,n)?a:yr.current!==null?(t=Nf(t,a,o),ui(t,n)||(yn=!0),t):(pa&42)===0||(pa&1073741824)!==0&&(Ct&261930)===0?(yn=!0,t.memoizedState=a):(t=Tg(),gt.lanes|=t,$a|=t,n)}function A0(t,n,a,o,u){var h=G.p;G.p=h!==0&&8>h?h:8;var _=B.T,R={};B.T=R,Pf(t,!1,n,a);try{var V=u(),se=B.S;if(se!==null&&se(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ve=Ix(V,o);zo(t,n,ve,gi(t))}else zo(t,n,o,gi(t))}catch(be){zo(t,n,{then:function(){},status:"rejected",reason:be},gi())}finally{G.p=h,_!==null&&R.types!==null&&(_.types=R.types),B.T=_}}function Vx(){}function Lf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=R0(t).queue;A0(t,u,n,Z,a===null?Vx:function(){return C0(t),a(o)})}function R0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function C0(t){var n=R0(t);n.next===null&&(n=t.alternate.memoizedState),zo(t,n.next.queue,{},gi())}function Of(){return In(el)}function w0(){return dn().memoizedState}function D0(){return dn().memoizedState}function kx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=gi();t=qa(a);var o=Za(n,t,a);o!==null&&(ti(o,n,a),No(o,n,a)),n={cache:cf()},t.payload=n;return}n=n.return}}function Xx(t,n,a){var o=gi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},rc(t)?N0(n,a):(a=Ju(t,n,a,o),a!==null&&(ti(a,t,o),L0(a,n,o)))}function U0(t,n,a){var o=gi();zo(t,n,a,o)}function zo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(rc(t))N0(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var _=n.lastRenderedState,R=h(_,a);if(u.hasEagerState=!0,u.eagerState=R,ui(R,_))return Hl(t,n,u,0),jt===null&&Fl(),!1}catch{}finally{}if(a=Ju(t,n,u,o),a!==null)return ti(a,t,o),L0(a,n,o),!0}return!1}function Pf(t,n,a,o){if(o={lane:2,revertLane:dh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},rc(t)){if(n)throw Error(s(479))}else n=Ju(t,a,o,2),n!==null&&ti(n,t,2)}function rc(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function N0(t,n){xr=$l=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function L0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ri(t,a)}}var Bo={readContext:In,use:nc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Bo.useEffectEvent=cn;var O0={readContext:In,use:nc,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:In,useEffect:_0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ac(4194308,4,S0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ac(4194308,4,t,n)},useInsertionEffect:function(t,n){ac(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var o=t();if(Hs){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Yn();if(a!==void 0){var u=a(n);if(Hs){Le(!0);try{a(n)}finally{Le(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Xx.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=Cf(t);var n=t.queue,a=U0.bind(null,gt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Uf,useDeferredValue:function(t,n){var a=Yn();return Nf(a,t,n)},useTransition:function(){var t=Cf(!1);return t=A0.bind(null,gt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=gt,u=Yn();if(Dt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(Ct&127)!==0||t0(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,_0(i0.bind(null,o,h,t),[t]),o.flags|=2048,Mr(9,{destroy:void 0},n0.bind(null,o,h,a,n),null),a},useId:function(){var t=Yn(),n=jt.identifierPrefix;if(Dt){var a=qi,o=Yi;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ec++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=zx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Of,useFormState:h0,useActionState:h0,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pf.bind(null,gt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Tf,useCacheRefresh:function(){return Yn().memoizedState=kx.bind(null,gt)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},If={readContext:In,use:nc,useCallback:E0,useContext:In,useEffect:Df,useImperativeHandle:M0,useInsertionEffect:y0,useLayoutEffect:x0,useMemo:b0,useReducer:ic,useRef:g0,useState:function(){return ic(ma)},useDebugValue:Uf,useDeferredValue:function(t,n){var a=dn();return T0(a,qt.memoizedState,t,n)},useTransition:function(){var t=ic(ma)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:e0,useId:w0,useHostTransitionStatus:Of,useFormState:d0,useActionState:d0,useOptimistic:function(t,n){var a=dn();return r0(a,qt,t,n)},useMemoCache:Tf,useCacheRefresh:D0};If.useEffectEvent=v0;var P0={readContext:In,use:nc,useCallback:E0,useContext:In,useEffect:Df,useImperativeHandle:M0,useInsertionEffect:y0,useLayoutEffect:x0,useMemo:b0,useReducer:Rf,useRef:g0,useState:function(){return Rf(ma)},useDebugValue:Uf,useDeferredValue:function(t,n){var a=dn();return qt===null?Nf(a,t,n):T0(a,qt.memoizedState,t,n)},useTransition:function(){var t=Rf(ma)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:e0,useId:w0,useHostTransitionStatus:Of,useFormState:m0,useActionState:m0,useOptimistic:function(t,n){var a=dn();return qt!==null?r0(a,qt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:D0};P0.useEffectEvent=v0;function zf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=gi(),u=qa(o);u.payload=n,a!=null&&(u.callback=a),n=Za(t,u,o),n!==null&&(ti(n,t,o),No(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=gi(),u=qa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Za(t,u,o),n!==null&&(ti(n,t,o),No(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=gi(),o=qa(a);o.tag=2,n!=null&&(o.callback=n),n=Za(t,o,a),n!==null&&(ti(n,t,a),No(n,t,a))}};function I0(t,n,a,o,u,h,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,_):n.prototype&&n.prototype.isPureReactComponent?!bo(a,o)||!bo(u,h):!0}function z0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Bf.enqueueReplaceState(n,n.state,null)}function Gs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function B0(t){Bl(t)}function F0(t){console.error(t)}function H0(t){Bl(t)}function oc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function G0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ff(t,n,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){oc(t,n)},a}function V0(t){return t=qa(t),t.tag=3,t}function k0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){G0(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){G0(n,a,o),typeof u!="function"&&(es===null?es=new Set([this]):es.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Wx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&pr(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 31:case 13:return Ai===null?yc():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Zl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),uh(t,o,u)),!1;case 22:return a.flags|=65536,o===Zl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),uh(t,o,u)),!1}throw Error(s(435,a.tag))}return uh(t,o,u),yc(),!1}if(Dt)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==af&&(t=Error(s(422),{cause:o}),Ro(Mi(t,a)))):(o!==af&&(n=Error(s(423),{cause:o}),Ro(Mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Mi(o,a),u=Ff(t.stateNode,o,u),mf(t,u),un!==4&&(un=2)),!1;var h=Error(s(520),{cause:o});if(h=Mi(h,a),Yo===null?Yo=[h]:Yo.push(h),un!==4&&(un=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ff(a.stateNode,o,t),mf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(es===null||!es.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=V0(u),k0(u,t,a,o),mf(a,u),!1}a=a.return}while(a!==null);return!1}var Hf=Error(s(461)),yn=!1;function zn(t,n,a,o){n.child=t===null?qm(n,null,a,o):Fs(n,t.child,a,o)}function X0(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Ps(n),o=Sf(t,n,a,_,h,u),R=Mf(),t!==null&&!yn?(Ef(t,n,u),ga(t,n,u)):(Dt&&R&&tf(n),n.flags|=1,zn(t,n,o,u),n.child)}function W0(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!ju(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Y0(t,n,h,o,u)):(t=Vl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Zf(t,u)){var _=h.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(_,o)&&t.ref===n.ref)return ga(t,n,u)}return n.flags|=1,t=ua(h,o),t.ref=n.ref,t.return=n,n.child=t}function Y0(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(bo(h,o)&&t.ref===n.ref)if(yn=!1,n.pendingProps=o=h,Zf(t,u))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,ga(t,n,u)}return Gf(t,n,a,o,u)}function q0(t,n,a,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Z0(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yl(n,h!==null?h.cachePool:null),h!==null?Qm(n,h):_f(),Jm(n);else return o=n.lanes=536870912,Z0(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Yl(n,h.cachePool),Qm(n,h),Qa(),n.memoizedState=null):(t!==null&&Yl(n,null),_f(),Qa());return zn(t,n,u,a),n.child}function Fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Z0(t,n,a,o,u){var h=ff();return h=h===null?null:{parent:_n._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Yl(n,null),_f(),Jm(n),t!==null&&pr(t,n,o,!0),n.childLanes=u,null}function lc(t,n){return n=uc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function K0(t,n,a){return Fs(n,t.child,null,a),t=lc(n,n.pendingProps),t.flags|=2,di(n),n.memoizedState=null,t}function Yx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Dt){if(o.mode==="hidden")return t=lc(n,o),n.lanes=536870912,Fo(null,t);if(yf(n),(t=en)?(t=o_(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Nm(t),a.return=n,n.child=a,Pn=n,en=null)):t=null,t===null)throw Xa(n);return n.lanes=536870912,null}return lc(n,o)}var h=t.memoizedState;if(h!==null){var _=h.dehydrated;if(yf(n),u)if(n.flags&256)n.flags&=-257,n=K0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(yn||pr(t,n,a,!1),u=(a&t.childLanes)!==0,yn||u){if(o=jt,o!==null&&(_=oi(o,a),_!==0&&_!==h.retryLane))throw h.retryLane=_,Us(t,_),ti(o,t,_),Hf;yc(),n=K0(t,n,a)}else t=h.treeContext,en=Ri(_.nextSibling),Pn=n,Dt=!0,ka=null,Ti=!1,t!==null&&Pm(n,t),n=lc(n,o),n.flags|=4096;return n}return t=ua(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function cc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Gf(t,n,a,o,u){return Ps(n),a=Sf(t,n,a,o,void 0,u),o=Mf(),t!==null&&!yn?(Ef(t,n,u),ga(t,n,u)):(Dt&&o&&tf(n),n.flags|=1,zn(t,n,a,u),n.child)}function Q0(t,n,a,o,u,h){return Ps(n),n.updateQueue=null,a=$m(n,o,a,u),jm(t),o=Mf(),t!==null&&!yn?(Ef(t,n,h),ga(t,n,h)):(Dt&&o&&tf(n),n.flags|=1,zn(t,n,a,h),n.child)}function J0(t,n,a,o,u){if(Ps(n),n.stateNode===null){var h=ur,_=a.contextType;typeof _=="object"&&_!==null&&(h=In(_)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Bf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},df(n),_=a.contextType,h.context=typeof _=="object"&&_!==null?In(_):ur,h.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(zf(n,a,_,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(_=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),_!==h.state&&Bf.enqueueReplaceState(h,h.state,null),Oo(n,o,h,u),Lo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,V=Gs(a,R);h.props=V;var se=h.context,ve=a.contextType;_=ur,typeof ve=="object"&&ve!==null&&(_=In(ve));var be=a.getDerivedStateFromProps;ve=typeof be=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ve||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||se!==_)&&z0(n,h,o,_),Ya=!1;var ce=n.memoizedState;h.state=ce,Oo(n,o,h,u),Lo(),se=n.memoizedState,R||ce!==se||Ya?(typeof be=="function"&&(zf(n,a,be,o),se=n.memoizedState),(V=Ya||I0(n,a,V,o,ce,se,_))?(ve||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=se),h.props=o,h.state=se,h.context=_,o=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,pf(t,n),_=n.memoizedProps,ve=Gs(a,_),h.props=ve,be=n.pendingProps,ce=h.context,se=a.contextType,V=ur,typeof se=="object"&&se!==null&&(V=In(se)),R=a.getDerivedStateFromProps,(se=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(_!==be||ce!==V)&&z0(n,h,o,V),Ya=!1,ce=n.memoizedState,h.state=ce,Oo(n,o,h,u),Lo();var fe=n.memoizedState;_!==be||ce!==fe||Ya||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof R=="function"&&(zf(n,a,R,o),fe=n.memoizedState),(ve=Ya||I0(n,a,ve,o,ce,fe,V)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?(se||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,fe,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,fe,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),h.props=o,h.state=fe,h.context=V,o=ve):(typeof h.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,cc(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Fs(n,t.child,null,u),n.child=Fs(n,null,a,u)):zn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=ga(t,n,u),t}function j0(t,n,a,o){return Ls(),n.flags|=256,zn(t,n,a,o),n.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(t){return{baseLanes:t,cachePool:Gm()}}function Xf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=mi),t}function $0(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,_;if((_=h)||(_=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(u?Ka(n):Qa(),(t=en)?(t=o_(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Nm(t),a.return=n,n.child=a,Pn=n,en=null)):t=null,t===null)throw Xa(n);return Ah(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Qa(),u=n.mode,R=uc({mode:"hidden",children:R},u),o=Ns(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=kf(a),o.childLanes=Xf(t,_,a),n.memoizedState=Vf,Fo(null,o)):(Ka(n),Wf(n,R))}var V=t.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(h)n.flags&256?(Ka(n),n.flags&=-257,n=Yf(t,n,a)):n.memoizedState!==null?(Qa(),n.child=t.child,n.flags|=128,n=null):(Qa(),R=o.fallback,u=n.mode,o=uc({mode:"visible",children:o.children},u),R=Ns(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Fs(n,t.child,null,a),o=n.child,o.memoizedState=kf(a),o.childLanes=Xf(t,_,a),n.memoizedState=Vf,n=Fo(null,o));else if(Ka(n),Ah(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var se=_.dgst;_=se,o=Error(s(419)),o.stack="",o.digest=_,Ro({value:o,source:null,stack:null}),n=Yf(t,n,a)}else if(yn||pr(t,n,a,!1),_=(a&t.childLanes)!==0,yn||_){if(_=jt,_!==null&&(o=oi(_,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Us(t,o),ti(_,t,o),Hf;Th(R)||yc(),n=Yf(t,n,a)}else Th(R)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,en=Ri(R.nextSibling),Pn=n,Dt=!0,ka=null,Ti=!1,t!==null&&Pm(n,t),n=Wf(n,o.children),n.flags|=4096);return n}return u?(Qa(),R=o.fallback,u=n.mode,V=t.child,se=V.sibling,o=ua(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,se!==null?R=ua(se,R):(R=Ns(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Fo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=kf(a):(u=R.cachePool,u!==null?(V=_n._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Gm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Xf(t,_,a),n.memoizedState=Vf,Fo(t.child,o)):(Ka(n),a=t.child,t=a.sibling,a=ua(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Wf(t,n){return n=uc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function uc(t,n){return t=fi(22,t,null,n),t.lanes=0,t}function Yf(t,n,a){return Fs(n,t.child,null,a),t=Wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function eg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),of(t.return,n,a)}function qf(t,n,a,o,u,h){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=h)}function tg(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var _=hn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,W(hn,_),zn(t,n,o,a),o=Dt?Ao:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,a,n);else if(t.tag===19)eg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&jl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),qf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&jl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}qf(n,!0,a,null,h,o);break;case"together":qf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ga(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ua(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ua(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function qx(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Wa(n,_n,t.memoizedState.cache),Ls();break;case 27:case 5:lt(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$0(t,n,a):(Ka(n),t=ga(t,n,a),t!==null?t.sibling:null);Ka(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(pr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return tg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),W(hn,hn.current),o)break;return null;case 22:return n.lanes=0,q0(t,n,a,n.pendingProps);case 24:Wa(n,_n,t.memoizedState.cache)}return ga(t,n,a)}function ng(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!Zf(t,a)&&(n.flags&128)===0)return yn=!1,qx(t,n,a);yn=(t.flags&131072)!==0}else yn=!1,Dt&&(n.flags&1048576)!==0&&Om(n,Ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=zs(n.elementType),n.type=t,typeof t=="function")ju(t)?(o=Gs(t,o),n.tag=1,n=J0(null,n,t,o,a)):(n.tag=0,n=Gf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=X0(null,n,t,o,a);break e}else if(u===U){n.tag=14,n=W0(null,n,t,o,a);break e}}throw n=ge(t)||t,Error(s(306,n,""))}}return n;case 0:return Gf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Gs(o,n.pendingProps),J0(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,pf(t,n),Oo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Wa(n,_n,o),o!==h.cache&&lf(n,[_n],a,!0),Lo(),o=_.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=j0(t,n,o,a);break e}else if(o!==u){u=Mi(Error(s(424)),n),Ro(u),n=j0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Ri(t.firstChild),Pn=n,Dt=!0,ka=null,Ti=!0,a=qm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ls(),o===u){n=ga(t,n,a);break e}zn(t,n,o,a)}n=n.child}return n;case 26:return cc(t,n),t===null?(a=d_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Dt||(a=n.type,t=n.pendingProps,o=Ac(ne.current).createElement(a),o[mn]=n,o[On]=t,Bn(o,a,t),gn(o),n.stateNode=o):n.memoizedState=d_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return lt(n),t===null&&Dt&&(o=n.stateNode=u_(n.type,n.pendingProps,ne.current),Pn=n,Ti=!0,u=en,as(n.type)?(Rh=u,en=Ri(o.firstChild)):en=u),zn(t,n,n.pendingProps.children,a),cc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((u=o=en)&&(o=ES(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Pn=n,en=Ri(o.firstChild),Ti=!1,u=!0):u=!1),u||Xa(n)),lt(n),u=n.type,h=n.pendingProps,_=t!==null?t.memoizedProps:null,o=h.children,Mh(u,h)?o=null:_!==null&&Mh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Sf(t,n,Bx,null,null,a),el._currentValue=u),cc(t,n),zn(t,n,o,a),n.child;case 6:return t===null&&Dt&&((t=a=en)&&(a=bS(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Pn=n,en=null,t=!0):t=!1),t||Xa(n)),null;case 13:return $0(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Fs(n,null,o,a):zn(t,n,o,a),n.child;case 11:return X0(t,n,n.type,n.pendingProps,a);case 7:return zn(t,n,n.pendingProps,a),n.child;case 8:return zn(t,n,n.pendingProps.children,a),n.child;case 12:return zn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Wa(n,n.type,o.value),zn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ps(n),u=In(u),o=o(u),n.flags|=1,zn(t,n,o,a),n.child;case 14:return W0(t,n,n.type,n.pendingProps,a);case 15:return Y0(t,n,n.type,n.pendingProps,a);case 19:return tg(t,n,a);case 31:return Yx(t,n,a);case 22:return q0(t,n,a,n.pendingProps);case 24:return Ps(n),o=In(_n),t===null?(u=ff(),u===null&&(u=jt,h=cf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},df(n),Wa(n,_n,u)):((t.lanes&a)!==0&&(pf(t,n),Oo(n,null,null,a),Lo()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Wa(n,_n,o)):(o=h.cache,Wa(n,_n,o),o!==u.cache&&lf(n,[_n],a,!0))),zn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function _a(t){t.flags|=4}function Kf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(wg())t.flags|=8192;else throw Bs=Zl,hf}else t.flags&=-16777217}function ig(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!v_(n))if(wg())t.flags|=8192;else throw Bs=Zl,hf}function fc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,Ar|=n)}function Ho(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Zx(t,n,a){var o=n.pendingProps;switch(nf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),da(_n),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(dr(n)?_a(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sf())),tn(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(_a(n),h!==null?(tn(n),ig(n,h)):(tn(n),Kf(n,u,null,o,a))):h?h!==t.memoizedState?(_a(n),tn(n),ig(n,h)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&_a(n),tn(n),Kf(n,u,t,o,a)),null;case 27:if(tt(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}t=_e.current,dr(n)?Im(n):(t=u_(u,o,a),n.stateNode=t,_a(n))}return tn(n),null;case 5:if(tt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(h=_e.current,dr(n))Im(n);else{var _=Ac(ne.current);switch(h){case 1:h=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=_.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}h[mn]=n,h[On]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)h.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=h;e:switch(Bn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&_a(n)}}return tn(n),Kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&_a(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,dr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||$g(t.nodeValue,a)),t||Xa(n,!0)}else t=Ac(t).createTextNode(o),t[mn]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=dr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[mn]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=dr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[mn]=n}else Ls(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),fc(n,n.updateQueue),tn(n),null);case 4:return ke(),t===null&&_h(n.stateNode.containerInfo),tn(n),null;case 10:return da(n.type),tn(n),null;case 19:if(j(hn),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Ho(o,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=jl(t),h!==null){for(n.flags|=128,Ho(o,!1),t=h.updateQueue,n.updateQueue=t,fc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Um(a,t),a=a.sibling;return W(hn,hn.current&1|2),Dt&&fa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Qe()>gc&&(n.flags|=128,u=!0,Ho(o,!1),n.lanes=4194304)}else{if(!u)if(t=jl(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,fc(n,t),Ho(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Dt)return tn(n),null}else 2*Qe()-o.renderingStartTime>gc&&a!==536870912&&(n.flags|=128,u=!0,Ho(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Qe(),t.sibling=null,a=hn.current,W(hn,u?a&1|2:a&1),Dt&&fa(n,o.treeForkCount),t):(tn(n),null);case 22:case 23:return di(n),vf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&fc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&j(Is),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),da(_n),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Kx(t,n){switch(nf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return da(_n),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return tt(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(s(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ls()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return j(hn),null;case 4:return ke(),null;case 10:return da(n.type),null;case 22:case 23:return di(n),vf(),t!==null&&j(Is),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return da(_n),null;case 25:return null;default:return null}}function ag(t,n){switch(nf(n),n.tag){case 3:da(_n),ke();break;case 26:case 27:case 5:tt(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:j(hn);break;case 10:da(n.type);break;case 22:case 23:di(n),vf(),t!==null&&j(Is);break;case 24:da(_n)}}function Go(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,_=a.inst;o=h(),_.destroy=o}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Ja(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var V=a,se=R;try{se()}catch(ve){kt(u,V,ve)}}}o=o.next}while(o!==h)}}catch(ve){kt(n,n.return,ve)}}function sg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Km(n,a)}catch(o){kt(t,t.return,o)}}}function rg(t,n,a){a.props=Gs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function Vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function Zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function og(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Qf(t,n,a){try{var o=t.stateNode;_S(o,t.type,a,n),o[On]=n}catch(u){kt(t,t.return,u)}}function lg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&as(t.type)||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&as(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=la));else if(o!==4&&(o===27&&as(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(jf(t,n,a),t=t.sibling;t!==null;)jf(t,n,a),t=t.sibling}function hc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&as(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(hc(t,n,a),t=t.sibling;t!==null;)hc(t,n,a),t=t.sibling}function cg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Bn(n,o,a),n[mn]=t,n[On]=a}catch(h){kt(t,t.return,h)}}var va=!1,xn=!1,$f=!1,ug=typeof WeakSet=="function"?WeakSet:Set,wn=null;function Qx(t,n){if(t=t.containerInfo,xh=Lc,t=Mm(t),Wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var _=0,R=-1,V=-1,se=0,ve=0,be=t,ce=null;t:for(;;){for(var fe;be!==a||u!==0&&be.nodeType!==3||(R=_+u),be!==h||o!==0&&be.nodeType!==3||(V=_+o),be.nodeType===3&&(_+=be.nodeValue.length),(fe=be.firstChild)!==null;)ce=be,be=fe;for(;;){if(be===t)break t;if(ce===a&&++se===u&&(R=_),ce===h&&++ve===o&&(V=_),(fe=be.nextSibling)!==null)break;be=ce,ce=be.parentNode}be=fe}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sh={focusedElem:t,selectionRange:a},Lc=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var je=Gs(a.type,u);t=o.getSnapshotBeforeUpdate(je,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){kt(a,a.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)bh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function fg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:xa(t,a),o&4&&Go(5,a);break;case 1:if(xa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){kt(a,a.return,_)}else{var u=Gs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){kt(a,a.return,_)}}o&64&&sg(a),o&512&&Vo(a,a.return);break;case 3:if(xa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Km(t,n)}catch(_){kt(a,a.return,_)}}break;case 27:n===null&&o&4&&cg(a);case 26:case 5:xa(t,a),n===null&&o&4&&og(a),o&512&&Vo(a,a.return);break;case 12:xa(t,a);break;case 31:xa(t,a),o&4&&pg(t,a);break;case 13:xa(t,a),o&4&&mg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sS.bind(null,a),TS(t,a))));break;case 22:if(o=a.memoizedState!==null||va,!o){n=n!==null&&n.memoizedState!==null||xn,u=va;var h=xn;va=o,(xn=n)&&!h?Sa(t,a,(a.subtreeFlags&8772)!==0):xa(t,a),va=u,xn=h}break;case 30:break;default:xa(t,a)}}function hg(t){var n=t.alternate;n!==null&&(t.alternate=null,hg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ba(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Jn=!1;function ya(t,n,a){for(a=a.child;a!==null;)dg(t,n,a),a=a.sibling}function dg(t,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(pe,a)}catch{}switch(a.tag){case 26:xn||Zi(a,n),ya(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xn||Zi(a,n);var o=rn,u=Jn;as(a.type)&&(rn=a.stateNode,Jn=!1),ya(t,n,a),Jo(a.stateNode),rn=o,Jn=u;break;case 5:xn||Zi(a,n);case 6:if(o=rn,u=Jn,rn=null,ya(t,n,a),rn=o,Jn=u,rn!==null)if(Jn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(h){kt(a,n,h)}else try{rn.removeChild(a.stateNode)}catch(h){kt(a,n,h)}break;case 18:rn!==null&&(Jn?(t=rn,s_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Or(t)):s_(rn,a.stateNode));break;case 4:o=rn,u=Jn,rn=a.stateNode.containerInfo,Jn=!0,ya(t,n,a),rn=o,Jn=u;break;case 0:case 11:case 14:case 15:Ja(2,a,n),xn||Ja(4,a,n),ya(t,n,a);break;case 1:xn||(Zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&rg(a,n,o)),ya(t,n,a);break;case 21:ya(t,n,a);break;case 22:xn=(o=xn)||a.memoizedState!==null,ya(t,n,a),xn=o;break;default:ya(t,n,a)}}function pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Or(t)}catch(a){kt(n,n.return,a)}}}function mg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Or(t)}catch(a){kt(n,n.return,a)}}function Jx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ug),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ug),n;default:throw Error(s(435,t.tag))}}function dc(t,n){var a=Jx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=rS.bind(null,t,o);o.then(u,u)}})}function jn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(as(R.type)){rn=R.stateNode,Jn=!1;break e}break;case 5:rn=R.stateNode,Jn=!1;break e;case 3:case 4:rn=R.stateNode.containerInfo,Jn=!0;break e}R=R.return}if(rn===null)throw Error(s(160));dg(h,_,u),rn=null,Jn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)gg(n,t),n=n.sibling}var Ii=null;function gg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),$n(t),o&4&&(Ja(3,t,t.return),Go(3,t),Ja(5,t,t.return));break;case 1:jn(n,t),$n(t),o&512&&(xn||a===null||Zi(a,a.return)),o&64&&va&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ii;if(jn(n,t),$n(t),o&512&&(xn||a===null||Zi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[za]||h[mn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Bn(h,o,a),h[mn]=t,gn(h),o=h;break e;case"link":var _=g_("link","href",u).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(h=_[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}h=u.createElement(o),Bn(h,o,a),u.head.appendChild(h);break;case"meta":if(_=g_("meta","content",u).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(h=_[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}h=u.createElement(o),Bn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[mn]=t,gn(h),o=h}t.stateNode=o}else __(u,t.type,t.stateNode);else t.stateNode=m_(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?__(u,t.type,t.stateNode):m_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Qf(t,t.memoizedProps,a.memoizedProps)}break;case 27:jn(n,t),$n(t),o&512&&(xn||a===null||Zi(a,a.return)),a!==null&&o&4&&Qf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,t),$n(t),o&512&&(xn||a===null||Zi(a,a.return)),t.flags&32){u=t.stateNode;try{ci(u,"")}catch(je){kt(t,t.return,je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Qf(t,u,a!==null?a.memoizedProps:u)),o&1024&&($f=!0);break;case 6:if(jn(n,t),$n(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(je){kt(t,t.return,je)}}break;case 3:if(wc=null,u=Ii,Ii=Rc(n.containerInfo),jn(n,t),Ii=u,$n(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Or(n.containerInfo)}catch(je){kt(t,t.return,je)}$f&&($f=!1,_g(t));break;case 4:o=Ii,Ii=Rc(t.stateNode.containerInfo),jn(n,t),$n(t),Ii=o;break;case 12:jn(n,t),$n(t);break;case 31:jn(n,t),$n(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,dc(t,o)));break;case 13:jn(n,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(mc=Qe()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,dc(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,se=va,ve=xn;if(va=se||u,xn=ve||V,jn(n,t),xn=ve,va=se,$n(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||va||xn||Vs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(h=V.stateNode,u)_=h.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=V.stateNode;var be=V.memoizedProps.style,ce=be!=null&&be.hasOwnProperty("display")?be.display:null;R.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(je){kt(V,V.return,je)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(je){kt(V,V.return,je)}}}else if(n.tag===18){if(a===null){V=n;try{var fe=V.stateNode;u?r_(fe,!0):r_(V.stateNode,!1)}catch(je){kt(V,V.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,dc(t,a))));break;case 19:jn(n,t),$n(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,dc(t,o)));break;case 30:break;case 21:break;default:jn(n,t),$n(t)}}function $n(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(lg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Jf(t);hc(t,h,u);break;case 5:var _=a.stateNode;a.flags&32&&(ci(_,""),a.flags&=-33);var R=Jf(t);hc(t,R,_);break;case 3:case 4:var V=a.stateNode.containerInfo,se=Jf(t);jf(t,se,V);break;default:throw Error(s(161))}}catch(ve){kt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function _g(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;_g(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function xa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)fg(t,n.alternate,n),n=n.sibling}function Vs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ja(4,n,n.return),Vs(n);break;case 1:Zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&rg(n,n.return,a),Vs(n);break;case 27:Jo(n.stateNode);case 26:case 5:Zi(n,n.return),Vs(n);break;case 22:n.memoizedState===null&&Vs(n);break;case 30:Vs(n);break;default:Vs(n)}t=t.sibling}}function Sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,_=h.flags;switch(h.tag){case 0:case 11:case 15:Sa(u,h,a),Go(4,h);break;case 1:if(Sa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(se){kt(o,o.return,se)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Zm(V[u],R)}catch(se){kt(o,o.return,se)}}a&&_&64&&sg(h),Vo(h,h.return);break;case 27:cg(h);case 26:case 5:Sa(u,h,a),a&&o===null&&_&4&&og(h),Vo(h,h.return);break;case 12:Sa(u,h,a);break;case 31:Sa(u,h,a),a&&_&4&&pg(u,h);break;case 13:Sa(u,h,a),a&&_&4&&mg(u,h);break;case 22:h.memoizedState===null&&Sa(u,h,a),Vo(h,h.return);break;case 30:break;default:Sa(u,h,a)}n=n.sibling}}function eh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Co(a))}function th(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Co(t))}function zi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vg(t,n,a,o),n=n.sibling}function vg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:zi(t,n,a,o),u&2048&&Go(9,n);break;case 1:zi(t,n,a,o);break;case 3:zi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Co(t)));break;case 12:if(u&2048){zi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,_=h.id,R=h.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){kt(n,n.return,V)}}else zi(t,n,a,o);break;case 31:zi(t,n,a,o);break;case 13:zi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,_=n.alternate,n.memoizedState!==null?h._visibility&2?zi(t,n,a,o):ko(t,n):h._visibility&2?zi(t,n,a,o):(h._visibility|=2,Er(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&eh(_,n);break;case 24:zi(t,n,a,o),u&2048&&th(n.alternate,n);break;default:zi(t,n,a,o)}}function Er(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,_=n,R=a,V=o,se=_.flags;switch(_.tag){case 0:case 11:case 15:Er(h,_,R,V,u),Go(8,_);break;case 23:break;case 22:var ve=_.stateNode;_.memoizedState!==null?ve._visibility&2?Er(h,_,R,V,u):ko(h,_):(ve._visibility|=2,Er(h,_,R,V,u)),u&&se&2048&&eh(_.alternate,_);break;case 24:Er(h,_,R,V,u),u&&se&2048&&th(_.alternate,_);break;default:Er(h,_,R,V,u)}n=n.sibling}}function ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:ko(a,o),u&2048&&eh(o.alternate,o);break;case 24:ko(a,o),u&2048&&th(o.alternate,o);break;default:ko(a,o)}n=n.sibling}}var Xo=8192;function br(t,n,a){if(t.subtreeFlags&Xo)for(t=t.child;t!==null;)yg(t,n,a),t=t.sibling}function yg(t,n,a){switch(t.tag){case 26:br(t,n,a),t.flags&Xo&&t.memoizedState!==null&&zS(a,Ii,t.memoizedState,t.memoizedProps);break;case 5:br(t,n,a);break;case 3:case 4:var o=Ii;Ii=Rc(t.stateNode.containerInfo),br(t,n,a),Ii=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Xo,Xo=16777216,br(t,n,a),Xo=o):br(t,n,a));break;default:br(t,n,a)}}function xg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Mg(o,t)}xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sg(t),t=t.sibling}function Sg(t){switch(t.tag){case 0:case 11:case 15:Wo(t),t.flags&2048&&Ja(9,t,t.return);break;case 3:Wo(t);break;case 12:Wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,pc(t)):Wo(t);break;default:Wo(t)}}function pc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];wn=o,Mg(o,t)}xg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),pc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,pc(n));break;default:pc(n)}t=t.sibling}}function Mg(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,wn=o;else e:for(a=t;wn!==null;){o=wn;var u=o.sibling,h=o.return;if(hg(o),o===a){wn=null;break e}if(u!==null){u.return=h,wn=u;break e}wn=h}}}var jx={getCacheForType:function(t){var n=In(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return In(_n).controller.signal}},$x=typeof WeakMap=="function"?WeakMap:Map,It=0,jt=null,Tt=null,Ct=0,Vt=0,pi=null,ja=!1,Tr=!1,nh=!1,Ma=0,un=0,$a=0,ks=0,ih=0,mi=0,Ar=0,Yo=null,ei=null,ah=!1,mc=0,Eg=0,gc=1/0,_c=null,es=null,Tn=0,ts=null,Rr=null,Ea=0,sh=0,rh=null,bg=null,qo=0,oh=null;function gi(){return(It&2)!==0&&Ct!==0?Ct&-Ct:B.T!==null?dh():go()}function Tg(){if(mi===0)if((Ct&536870912)===0||Dt){var t=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),mi=t}else mi=536870912;return t=hi.current,t!==null&&(t.flags|=32),mi}function ti(t,n,a){(t===jt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(Cr(t,0),ns(t,Ct,mi,!1)),Ze(t,a),((It&2)===0||t!==jt)&&(t===jt&&((It&2)===0&&(ks|=a),un===4&&ns(t,Ct,mi,!1)),Ki(t))}function Ag(t,n,a){if((It&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Oe(t,n),u=o?nS(t,n):ch(t,n,!0),h=o;do{if(u===0){Tr&&!o&&ns(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!eS(a)){u=ch(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=Yo;var V=R.current.memoizedState.isDehydrated;if(V&&(Cr(R,_).flags|=256),_=ch(R,_,!1),_!==2){if(nh&&!V){R.errorRecoveryDisabledLanes|=h,ks|=h,u=4;break e}h=ei,ei=u,h!==null&&(ei===null?ei=h:ei.push.apply(ei,h))}u=_}if(h=!1,u!==2)continue}}if(u===1){Cr(t,0),ns(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ns(o,n,mi,!ja);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=mc+300-Qe(),10<u)){if(ns(o,n,mi,!ja),xe(o,0,!0)!==0)break e;Ea=n,o.timeoutHandle=i_(Rg.bind(null,o,a,ei,_c,ah,n,mi,ks,Ar,ja,h,"Throttled",-0,0),u);break e}Rg(o,a,ei,_c,ah,n,mi,ks,Ar,ja,h,null,-0,0)}}break}while(!0);Ki(t)}function Rg(t,n,a,o,u,h,_,R,V,se,ve,be,ce,fe){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:la},yg(n,h,be);var je=(h&62914560)===h?mc-Qe():(h&4194048)===h?Eg-Qe():0;if(je=BS(be,je),je!==null){Ea=h,t.cancelPendingCommit=je(Pg.bind(null,t,n,h,a,o,u,_,R,V,ve,be,null,ce,fe)),ns(t,h,_,!se);return}}Pg(t,n,h,a,o,u,_,R,V)}function eS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ui(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ns(t,n,a,o){n&=~ih,n&=~ks,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Xe(u),_=1<<h;o[h]=-1,u&=~_}a!==0&&Bt(t,a,n)}function vc(){return(It&6)===0?(Zo(0),!1):!0}function lh(){if(Tt!==null){if(Vt===0)var t=Tt.return;else t=Tt,ha=Os=null,bf(t),vr=null,Do=0,t=Tt;for(;t!==null;)ag(t.alternate,t),t=t.return;Tt=null}}function Cr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,xS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ea=0,lh(),jt=t,Tt=a=ua(t.current,null),Ct=n,Vt=0,pi=null,ja=!1,Tr=Oe(t,n),nh=!1,Ar=mi=ih=ks=$a=un=0,ei=Yo=null,ah=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),h=1<<u;n|=t[u],o&=~h}return Ma=n,Fl(),a}function Cg(t,n){gt=null,B.H=Bo,n===_r||n===ql?(n=Xm(),Vt=3):n===hf?(n=Xm(),Vt=4):Vt=n===Hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pi=n,Tt===null&&(un=1,oc(t,Mi(n,t.current)))}function wg(){var t=hi.current;return t===null?!0:(Ct&4194048)===Ct?Ai===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?t===Ai:!1}function Dg(){var t=B.H;return B.H=Bo,t===null?Bo:t}function Ug(){var t=B.A;return B.A=jx,t}function yc(){un=4,ja||(Ct&4194048)!==Ct&&hi.current!==null||(Tr=!0),($a&134217727)===0&&(ks&134217727)===0||jt===null||ns(jt,Ct,mi,!1)}function ch(t,n,a){var o=It;It|=2;var u=Dg(),h=Ug();(jt!==t||Ct!==n)&&(_c=null,Cr(t,n)),n=!1;var _=un;e:do try{if(Vt!==0&&Tt!==null){var R=Tt,V=pi;switch(Vt){case 8:lh(),_=6;break e;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var se=Vt;if(Vt=0,pi=null,wr(t,R,V,se),a&&Tr){_=0;break e}break;default:se=Vt,Vt=0,pi=null,wr(t,R,V,se)}}tS(),_=un;break}catch(ve){Cg(t,ve)}while(!0);return n&&t.shellSuspendCounter++,ha=Os=null,It=o,B.H=u,B.A=h,Tt===null&&(jt=null,Ct=0,Fl()),_}function tS(){for(;Tt!==null;)Ng(Tt)}function nS(t,n){var a=It;It|=2;var o=Dg(),u=Ug();jt!==t||Ct!==n?(_c=null,gc=Qe()+500,Cr(t,n)):Tr=Oe(t,n);e:do try{if(Vt!==0&&Tt!==null){n=Tt;var h=pi;t:switch(Vt){case 1:Vt=0,pi=null,wr(t,n,h,1);break;case 2:case 9:if(Vm(h)){Vt=0,pi=null,Lg(n);break}n=function(){Vt!==2&&Vt!==9||jt!==t||(Vt=7),Ki(t)},h.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Vm(h)?(Vt=0,pi=null,Lg(n)):(Vt=0,pi=null,wr(t,n,h,7));break;case 5:var _=null;switch(Tt.tag){case 26:_=Tt.memoizedState;case 5:case 27:var R=Tt;if(_?v_(_):R.stateNode.complete){Vt=0,pi=null;var V=R.sibling;if(V!==null)Tt=V;else{var se=R.return;se!==null?(Tt=se,xc(se)):Tt=null}break t}}Vt=0,pi=null,wr(t,n,h,5);break;case 6:Vt=0,pi=null,wr(t,n,h,6);break;case 8:lh(),un=6;break e;default:throw Error(s(462))}}iS();break}catch(ve){Cg(t,ve)}while(!0);return ha=Os=null,B.H=o,B.A=u,It=a,Tt!==null?0:(jt=null,Ct=0,Fl(),un)}function iS(){for(;Tt!==null&&!Ye();)Ng(Tt)}function Ng(t){var n=ng(t.alternate,t,Ma);t.memoizedProps=t.pendingProps,n===null?xc(t):Tt=n}function Lg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Q0(a,n,n.pendingProps,n.type,void 0,Ct);break;case 11:n=Q0(a,n,n.pendingProps,n.type.render,n.ref,Ct);break;case 5:bf(n);default:ag(a,n),n=Tt=Um(n,Ma),n=ng(a,n,Ma)}t.memoizedProps=t.pendingProps,n===null?xc(t):Tt=n}function wr(t,n,a,o){ha=Os=null,bf(n),vr=null,Do=0;var u=n.return;try{if(Wx(t,u,n,a,Ct)){un=1,oc(t,Mi(a,t.current)),Tt=null;return}}catch(h){if(u!==null)throw Tt=u,h;un=1,oc(t,Mi(a,t.current)),Tt=null;return}n.flags&32768?(Dt||o===1?t=!0:Tr||(Ct&536870912)!==0?t=!1:(ja=t=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Og(n,t)):xc(n)}function xc(t){var n=t;do{if((n.flags&32768)!==0){Og(n,ja);return}t=n.return;var a=Zx(n.alternate,n,Ma);if(a!==null){Tt=a;return}if(n=n.sibling,n!==null){Tt=n;return}Tt=n=t}while(n!==null);un===0&&(un=5)}function Og(t,n){do{var a=Kx(t.alternate,t);if(a!==null){a.flags&=32767,Tt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=a}while(t!==null);un=6,Tt=null}function Pg(t,n,a,o,u,h,_,R,V){t.cancelPendingCommit=null;do Sc();while(Tn!==0);if((It&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Qu,nn(t,a,h,_,R,V),t===jt&&(Tt=jt=null,Ct=0),Rr=n,ts=t,Ea=a,sh=h,rh=u,bg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,oS(K,function(){return Hg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=G.p,G.p=2,_=It,It|=4;try{Qx(t,n,a)}finally{It=_,G.p=u,B.T=o}}Tn=1,Ig(),zg(),Bg()}}function Ig(){if(Tn===1){Tn=0;var t=ts,n=Rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=It;It|=4;try{gg(n,t);var h=Sh,_=Mm(t.containerInfo),R=h.focusedElem,V=h.selectionRange;if(_!==R&&R&&R.ownerDocument&&Sm(R.ownerDocument.documentElement,R)){if(V!==null&&Wu(R)){var se=V.start,ve=V.end;if(ve===void 0&&(ve=se),"selectionStart"in R)R.selectionStart=se,R.selectionEnd=Math.min(ve,R.value.length);else{var be=R.ownerDocument||document,ce=be&&be.defaultView||window;if(ce.getSelection){var fe=ce.getSelection(),je=R.textContent.length,ct=Math.min(V.start,je),Kt=V.end===void 0?ct:Math.min(V.end,je);!fe.extend&&ct>Kt&&(_=Kt,Kt=ct,ct=_);var ee=xm(R,ct),Y=xm(R,Kt);if(ee&&Y&&(fe.rangeCount!==1||fe.anchorNode!==ee.node||fe.anchorOffset!==ee.offset||fe.focusNode!==Y.node||fe.focusOffset!==Y.offset)){var ae=be.createRange();ae.setStart(ee.node,ee.offset),fe.removeAllRanges(),ct>Kt?(fe.addRange(ae),fe.extend(Y.node,Y.offset)):(ae.setEnd(Y.node,Y.offset),fe.addRange(ae))}}}}for(be=[],fe=R;fe=fe.parentNode;)fe.nodeType===1&&be.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<be.length;R++){var Me=be[R];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}Lc=!!xh,Sh=xh=null}finally{It=u,G.p=o,B.T=a}}t.current=n,Tn=2}}function zg(){if(Tn===2){Tn=0;var t=ts,n=Rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=It;It|=4;try{fg(t,n.alternate,n)}finally{It=u,G.p=o,B.T=a}}Tn=3}}function Bg(){if(Tn===4||Tn===3){Tn=0,H();var t=ts,n=Rr,a=Ea,o=bg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Rr=ts=null,Fg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(es=null),mo(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=G.p,G.p=2,B.T=null;try{for(var h=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];h(R.value,{componentStack:R.stack})}}finally{B.T=n,G.p=u}}(Ea&3)!==0&&Sc(),Ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===oh?qo++:(qo=0,oh=t):qo=0,Zo(0)}}function Fg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Co(n)))}function Sc(){return Ig(),zg(),Bg(),Hg()}function Hg(){if(Tn!==5)return!1;var t=ts,n=sh;sh=0;var a=mo(Ea),o=B.T,u=G.p;try{G.p=32>a?32:a,B.T=null,a=rh,rh=null;var h=ts,_=Ea;if(Tn=0,Rr=ts=null,Ea=0,(It&6)!==0)throw Error(s(331));var R=It;if(It|=4,Sg(h.current),vg(h,h.current,_,a),It=R,Zo(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(pe,h)}catch{}return!0}finally{G.p=u,B.T=o,Fg(t,n)}}function Gg(t,n,a){n=Mi(a,n),n=Ff(t.stateNode,n,2),t=Za(t,n,2),t!==null&&(Ze(t,2),Ki(t))}function kt(t,n,a){if(t.tag===3)Gg(t,t,a);else for(;n!==null;){if(n.tag===3){Gg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(es===null||!es.has(o))){t=Mi(a,t),a=V0(2),o=Za(n,a,2),o!==null&&(k0(a,o,n,t),Ze(o,2),Ki(o));break}}n=n.return}}function uh(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new $x;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(nh=!0,u.add(a),t=aS.bind(null,t,n,a),n.then(t,t))}function aS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,jt===t&&(Ct&a)===a&&(un===4||un===3&&(Ct&62914560)===Ct&&300>Qe()-mc?(It&2)===0&&Cr(t,0):ih|=a,Ar===Ct&&(Ar=0)),Ki(t)}function Vg(t,n){n===0&&(n=Ae()),t=Us(t,n),t!==null&&(Ze(t,n),Ki(t))}function sS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Vg(t,a)}function rS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Vg(t,a)}function oS(t,n){return De(t,n)}var Mc=null,Dr=null,fh=!1,Ec=!1,hh=!1,is=0;function Ki(t){t!==Dr&&t.next===null&&(Dr===null?Mc=Dr=t:Dr=Dr.next=t),Ec=!0,fh||(fh=!0,cS())}function Zo(t,n){if(!hh&&Ec){hh=!0;do for(var a=!1,o=Mc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var _=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Xe(42|t)+1)-1,h&=u&~(_&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Yg(o,h))}else h=Ct,h=xe(o,o===jt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Oe(o,h)||(a=!0,Yg(o,h));o=o.next}while(a);hh=!1}}function lS(){kg()}function kg(){Ec=fh=!1;var t=0;is!==0&&yS()&&(t=is);for(var n=Qe(),a=null,o=Mc;o!==null;){var u=o.next,h=Xg(o,n);h===0?(o.next=null,a===null?Mc=u:a.next=u,u===null&&(Dr=a)):(a=o,(t!==0||(h&3)!==0)&&(Ec=!0)),o=u}Tn!==0&&Tn!==5||Zo(t),is!==0&&(is=0)}function Xg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var _=31-Xe(h),R=1<<_,V=u[_];V===-1?((R&a)===0||(R&o)!==0)&&(u[_]=Ge(R,n)):V<=n&&(t.expiredLanes|=R),h&=~R}if(n=jt,a=Ct,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ve(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ve(o),mo(a)){case 2:case 8:a=S;break;case 32:a=K;break;case 268435456:a=de;break;default:a=K}return o=Wg.bind(null,t),a=De(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ve(o),t.callbackPriority=2,t.callbackNode=null,2}function Wg(t,n){if(Tn!==0&&Tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Sc()&&t.callbackNode!==a)return null;var o=Ct;return o=xe(t,t===jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ag(t,o,n),Xg(t,Qe()),t.callbackNode!=null&&t.callbackNode===a?Wg.bind(null,t):null)}function Yg(t,n){if(Sc())return null;Ag(t,n,!0)}function cS(){SS(function(){(It&6)!==0?De(w,lS):kg()})}function dh(){if(is===0){var t=mr;t===0&&(t=at,at<<=1,(at&261888)===0&&(at=256)),is=t}return is}function qg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rs(""+t)}function Zg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function uS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=qg((u[On]||null).action),_=o.submitter;_&&(n=(n=_[On]||null)?qg(n.formAction):_.getAttribute("formAction"),n!==null&&(h=n,_=null));var R=new Pl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(is!==0){var V=_?Zg(u,_):new FormData(u);Lf(a,{pending:!0,data:V,method:u.method,action:h},null,V)}}else typeof h=="function"&&(R.preventDefault(),V=_?Zg(u,_):new FormData(u),Lf(a,{pending:!0,data:V,method:u.method,action:h},h,V))},currentTarget:u}]})}}for(var ph=0;ph<Ku.length;ph++){var mh=Ku[ph],fS=mh.toLowerCase(),hS=mh[0].toUpperCase()+mh.slice(1);Pi(fS,"on"+hS)}Pi(Tm,"onAnimationEnd"),Pi(Am,"onAnimationIteration"),Pi(Rm,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(Cx,"onTransitionRun"),Pi(wx,"onTransitionStart"),Pi(Dx,"onTransitionCancel"),Pi(Cm,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function Kg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],V=R.instance,se=R.currentTarget;if(R=R.listener,V!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=se;try{h(u)}catch(ve){Bl(ve)}u.currentTarget=null,h=V}else for(_=0;_<o.length;_++){if(R=o[_],V=R.instance,se=R.currentTarget,R=R.listener,V!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=se;try{h(u)}catch(ve){Bl(ve)}u.currentTarget=null,h=V}}}}function At(t,n){var a=n[bs];a===void 0&&(a=n[bs]=new Set);var o=t+"__bubble";a.has(o)||(Qg(n,t,2,!1),a.add(o))}function gh(t,n,a){var o=0;n&&(o|=4),Qg(a,t,o,n)}var bc="_reactListening"+Math.random().toString(36).slice(2);function _h(t){if(!t[bc]){t[bc]=!0,Ul.forEach(function(a){a!=="selectionchange"&&(dS.has(a)||gh(a,!1,t),gh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[bc]||(n[bc]=!0,gh("selectionchange",!1,n))}}function Qg(t,n,a,o){switch(T_(n)){case 2:var u=GS;break;case 8:u=VS;break;default:u=Nh}a=u.bind(null,n,a,t),u=void 0,!Iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function vh(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=o.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=ra(R),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){o=h=_;continue e}R=R.parentNode}}o=o.return}tm(function(){var se=h,ve=Ou(a),be=[];e:{var ce=wm.get(t);if(ce!==void 0){var fe=Pl,je=t;switch(t){case"keypress":if(Ll(a)===0)break e;case"keydown":case"keyup":fe=rx;break;case"focusin":je="focus",fe=Hu;break;case"focusout":je="blur",fe=Hu;break;case"beforeblur":case"afterblur":fe=Hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=cx;break;case Tm:case Am:case Rm:fe=Jy;break;case Cm:fe=fx;break;case"scroll":case"scrollend":fe=Yy;break;case"wheel":fe=dx;break;case"copy":case"cut":case"paste":fe=$y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=rm;break;case"toggle":case"beforetoggle":fe=mx}var ct=(n&4)!==0,Kt=!ct&&(t==="scroll"||t==="scrollend"),ee=ct?ce!==null?ce+"Capture":null:ce;ct=[];for(var Y=se,ae;Y!==null;){var Me=Y;if(ae=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||ae===null||ee===null||(Me=_o(Y,ee),Me!=null&&ct.push(Qo(Y,Me,ae))),Kt)break;Y=Y.return}0<ct.length&&(ce=new fe(ce,je,null,a,ve),be.push({event:ce,listeners:ct}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",ce&&a!==Lu&&(je=a.relatedTarget||a.fromElement)&&(ra(je)||je[Kn]))break e;if((fe||ce)&&(ce=ve.window===ve?ve:(ce=ve.ownerDocument)?ce.defaultView||ce.parentWindow:window,fe?(je=a.relatedTarget||a.toElement,fe=se,je=je?ra(je):null,je!==null&&(Kt=c(je),ct=je.tag,je!==Kt||ct!==5&&ct!==27&&ct!==6)&&(je=null)):(fe=null,je=se),fe!==je)){if(ct=am,Me="onMouseLeave",ee="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(ct=rm,Me="onPointerLeave",ee="onPointerEnter",Y="pointer"),Kt=fe==null?ce:As(fe),ae=je==null?ce:As(je),ce=new ct(Me,Y+"leave",fe,a,ve),ce.target=Kt,ce.relatedTarget=ae,Me=null,ra(ve)===se&&(ct=new ct(ee,Y+"enter",je,a,ve),ct.target=ae,ct.relatedTarget=Kt,Me=ct),Kt=Me,fe&&je)t:{for(ct=pS,ee=fe,Y=je,ae=0,Me=ee;Me;Me=ct(Me))ae++;Me=0;for(var rt=Y;rt;rt=ct(rt))Me++;for(;0<ae-Me;)ee=ct(ee),ae--;for(;0<Me-ae;)Y=ct(Y),Me--;for(;ae--;){if(ee===Y||Y!==null&&ee===Y.alternate){ct=ee;break t}ee=ct(ee),Y=ct(Y)}ct=null}else ct=null;fe!==null&&Jg(be,ce,fe,ct,!1),je!==null&&Kt!==null&&Jg(be,Kt,je,ct,!0)}}e:{if(ce=se?As(se):window,fe=ce.nodeName&&ce.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ce.type==="file")var Ot=pm;else if(hm(ce))if(mm)Ot=Tx;else{Ot=Ex;var et=Mx}else fe=ce.nodeName,!fe||fe.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?se&&zt(se.elementType)&&(Ot=pm):Ot=bx;if(Ot&&(Ot=Ot(t,se))){dm(be,Ot,a,ve);break e}et&&et(t,ce,se),t==="focusout"&&se&&ce.type==="number"&&se.memoizedProps.value!=null&&bt(ce,"number",ce.value)}switch(et=se?As(se):window,t){case"focusin":(hm(et)||et.contentEditable==="true")&&(or=et,Yu=se,To=null);break;case"focusout":To=Yu=or=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Em(be,a,ve);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":Em(be,a,ve)}var _t;if(Vu)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else rr?um(t,a)&&(wt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(om&&a.locale!=="ko"&&(rr||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&rr&&(_t=nm()):(Ga=ve,zu="value"in Ga?Ga.value:Ga.textContent,rr=!0)),et=Tc(se,wt),0<et.length&&(wt=new sm(wt,t,null,a,ve),be.push({event:wt,listeners:et}),_t?wt.data=_t:(_t=fm(a),_t!==null&&(wt.data=_t)))),(_t=_x?vx(t,a):yx(t,a))&&(wt=Tc(se,"onBeforeInput"),0<wt.length&&(et=new sm("onBeforeInput","beforeinput",null,a,ve),be.push({event:et,listeners:wt}),et.data=_t)),uS(be,t,se,a,ve)}Kg(be,n)})}function Qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Tc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=_o(t,a),u!=null&&o.unshift(Qo(t,u,h)),u=_o(t,n),u!=null&&o.push(Qo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function pS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Jg(t,n,a,o,u){for(var h=n._reactName,_=[];a!==null&&a!==o;){var R=a,V=R.alternate,se=R.stateNode;if(R=R.tag,V!==null&&V===o)break;R!==5&&R!==26&&R!==27||se===null||(V=se,u?(se=_o(a,h),se!=null&&_.unshift(Qo(a,se,V))):u||(se=_o(a,h),se!=null&&_.push(Qo(a,se,V)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(mS,`
`).replace(gS,"")}function $g(t,n){return n=jg(n),jg(t)===n}function Zt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ci(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ci(t,""+o);break;case"className":Je(t,"class",o);break;case"tabIndex":Je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,a,o);break;case"style":Oi(t,o,h);break;case"data":if(n!=="object"){Je(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Rs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Zt(t,n,"name",u.name,u,null),Zt(t,n,"formEncType",u.formEncType,u,null),Zt(t,n,"formMethod",u.formMethod,u,null),Zt(t,n,"formTarget",u.formTarget,u,null)):(Zt(t,n,"encType",u.encType,u,null),Zt(t,n,"method",u.method,u,null),Zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Rs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=la);break;case"onScroll":o!=null&&At("scroll",t);break;case"onScrollEnd":o!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Rs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":At("beforetoggle",t),At("toggle",t),Ie(t,"popover",o);break;case"xlinkActuate":Ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ie(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wi.get(a)||a,Ie(t,a,o))}}function yh(t,n,a,o,u,h){switch(a){case"style":Oi(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ci(t,o):(typeof o=="number"||typeof o=="bigint")&&ci(t,""+o);break;case"onScroll":o!=null&&At("scroll",t);break;case"onScrollEnd":o!=null&&At("scrollend",t);break;case"onClick":o!=null&&(t.onclick=la);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[On]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ie(t,a,o)}}}function Bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var _=a[h];if(_!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,h,_,a,null)}}u&&Zt(t,n,"srcSet",a.srcSet,a,null),o&&Zt(t,n,"src",a.src,a,null);return;case"input":At("invalid",t);var R=h=_=u=null,V=null,se=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":_=ve;break;case"checked":V=ve;break;case"defaultChecked":se=ve;break;case"value":h=ve;break;case"defaultValue":R=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:Zt(t,n,o,ve,a,null)}}Gn(t,h,R,V,se,_,u,!1);return;case"select":At("invalid",t),o=_=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:Zt(t,n,u,R,a,null)}n=h,a=_,t.multiple=!!o,n!=null?bn(t,!!o,n,!1):a!=null&&bn(t,!!o,a,!0);return;case"textarea":At("invalid",t),h=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Zt(t,n,_,R,a,null)}Li(t,o,u,h);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,n,V,o,a,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(o=0;o<Ko.length;o++)At(Ko[o],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in a)if(a.hasOwnProperty(se)&&(o=a[se],o!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,se,o,a,null)}return;default:if(zt(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&yh(t,n,ve,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Zt(t,n,R,o,a,null))}function _S(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,_=null,R=null,V=null,se=null,ve=null;for(fe in a){var be=a[fe];if(a.hasOwnProperty(fe)&&be!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":V=be;default:o.hasOwnProperty(fe)||Zt(t,n,fe,null,o,be)}}for(var ce in o){var fe=o[ce];if(be=a[ce],o.hasOwnProperty(ce)&&(fe!=null||be!=null))switch(ce){case"type":h=fe;break;case"name":u=fe;break;case"checked":se=fe;break;case"defaultChecked":ve=fe;break;case"value":_=fe;break;case"defaultValue":R=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==be&&Zt(t,n,ce,fe,o,be)}}We(t,_,R,V,se,ve,h,u);return;case"select":fe=_=R=ce=null;for(h in a)if(V=a[h],a.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":fe=V;default:o.hasOwnProperty(h)||Zt(t,n,h,null,o,V)}for(u in o)if(h=o[u],V=a[u],o.hasOwnProperty(u)&&(h!=null||V!=null))switch(u){case"value":ce=h;break;case"defaultValue":R=h;break;case"multiple":_=h;default:h!==V&&Zt(t,n,u,h,o,V)}n=R,a=_,o=fe,ce!=null?bn(t,!!a,ce,!1):!!o!=!!a&&(n!=null?bn(t,!!a,n,!0):bn(t,!!a,a?[]:"",!1));return;case"textarea":fe=ce=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Zt(t,n,R,null,o,u)}for(_ in o)if(u=o[_],h=a[_],o.hasOwnProperty(_)&&(u!=null||h!=null))switch(_){case"value":ce=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Zt(t,n,_,u,o,h)}li(t,ce,fe);return;case"option":for(var je in a)if(ce=a[je],a.hasOwnProperty(je)&&ce!=null&&!o.hasOwnProperty(je))switch(je){case"selected":t.selected=!1;break;default:Zt(t,n,je,null,o,ce)}for(V in o)if(ce=o[V],fe=a[V],o.hasOwnProperty(V)&&ce!==fe&&(ce!=null||fe!=null))switch(V){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Zt(t,n,V,ce,o,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)ce=a[ct],a.hasOwnProperty(ct)&&ce!=null&&!o.hasOwnProperty(ct)&&Zt(t,n,ct,null,o,ce);for(se in o)if(ce=o[se],fe=a[se],o.hasOwnProperty(se)&&ce!==fe&&(ce!=null||fe!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:Zt(t,n,se,ce,o,fe)}return;default:if(zt(n)){for(var Kt in a)ce=a[Kt],a.hasOwnProperty(Kt)&&ce!==void 0&&!o.hasOwnProperty(Kt)&&yh(t,n,Kt,void 0,o,ce);for(ve in o)ce=o[ve],fe=a[ve],!o.hasOwnProperty(ve)||ce===fe||ce===void 0&&fe===void 0||yh(t,n,ve,ce,o,fe);return}}for(var ee in a)ce=a[ee],a.hasOwnProperty(ee)&&ce!=null&&!o.hasOwnProperty(ee)&&Zt(t,n,ee,null,o,ce);for(be in o)ce=o[be],fe=a[be],!o.hasOwnProperty(be)||ce===fe||ce==null&&fe==null||Zt(t,n,be,ce,o,fe)}function e_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,_=u.initiatorType,R=u.duration;if(h&&R&&e_(_)){for(_=0,R=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],se=V.startTime;if(se>R)break;var ve=V.transferSize,be=V.initiatorType;ve&&e_(be)&&(V=V.responseEnd,_+=ve*(V<R?1:(R-se)/(V-se)))}if(--o,n+=8*(h+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var xh=null,Sh=null;function Ac(t){return t.nodeType===9?t:t.ownerDocument}function t_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Mh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Eh=null;function yS(){var t=window.event;return t&&t.type==="popstate"?t===Eh?!1:(Eh=t,!0):(Eh=null,!1)}var i_=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,a_=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof a_<"u"?function(t){return a_.resolve(null).then(t).catch(MS)}:i_;function MS(t){setTimeout(function(){throw t})}function as(t){return t==="head"}function s_(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Or(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Jo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Jo(a);for(var h=a.firstChild;h;){var _=h.nextSibling,R=h.nodeName;h[za]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=_}}else a==="body"&&Jo(t.ownerDocument.body);a=u}while(a);Or(n)}function r_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function bh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bh(a),Ba(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ES(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function bS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ri(t.nextSibling),t===null))return null;return t}function o_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ri(t.nextSibling),t===null))return null;return t}function Th(t){return t.data==="$?"||t.data==="$~"}function Ah(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function TS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Rh=null;function l_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function c_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function u_(t,n,a){switch(n=Ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Jo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ba(t)}var Ci=new Map,f_=new Set;function Rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ba=G.d;G.d={f:AS,r:RS,D:CS,C:wS,L:DS,m:US,X:LS,S:NS,M:OS};function AS(){var t=ba.f(),n=vc();return t||n}function RS(t){var n=oa(t);n!==null&&n.tag===5&&n.type==="form"?C0(n):ba.r(t)}var Ur=typeof document>"u"?null:document;function h_(t,n,a){var o=Ur;if(o&&typeof n=="string"&&n){var u=Ht(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),f_.has(u)||(f_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Bn(n,"link",t),gn(n),o.head.appendChild(n)))}}function CS(t){ba.D(t),h_("dns-prefetch",t,null)}function wS(t,n){ba.C(t,n),h_("preconnect",t,n)}function DS(t,n,a){ba.L(t,n,a);var o=Ur;if(o&&t&&n){var u='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(t)+'"]';var h=u;switch(n){case"style":h=Nr(t);break;case"script":h=Lr(t)}Ci.has(h)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ci.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(jo(h))||n==="script"&&o.querySelector($o(h))||(n=o.createElement("link"),Bn(n,"link",t),gn(n),o.head.appendChild(n)))}}function US(t,n){ba.m(t,n);var a=Ur;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ht(o)+'"][href="'+Ht(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Lr(t)}if(!Ci.has(h)&&(t=x({rel:"modulepreload",href:t},n),Ci.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($o(h)))return}o=a.createElement("link"),Bn(o,"link",t),gn(o),a.head.appendChild(o)}}}function NS(t,n,a){ba.S(t,n,a);var o=Ur;if(o&&t){var u=Fa(o).hoistableStyles,h=Nr(t);n=n||"default";var _=u.get(h);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(jo(h)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ci.get(h))&&Ch(t,a);var V=_=o.createElement("link");gn(V),Bn(V,"link",t),V._p=new Promise(function(se,ve){V.onload=se,V.onerror=ve}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Cc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(h,_)}}}function LS(t,n){ba.X(t,n);var a=Ur;if(a&&t){var o=Fa(a).hoistableScripts,u=Lr(t),h=o.get(u);h||(h=a.querySelector($o(u)),h||(t=x({src:t,async:!0},n),(n=Ci.get(u))&&wh(t,n),h=a.createElement("script"),gn(h),Bn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function OS(t,n){ba.M(t,n);var a=Ur;if(a&&t){var o=Fa(a).hoistableScripts,u=Lr(t),h=o.get(u);h||(h=a.querySelector($o(u)),h||(t=x({src:t,async:!0,type:"module"},n),(n=Ci.get(u))&&wh(t,n),h=a.createElement("script"),gn(h),Bn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function d_(t,n,a,o){var u=(u=ne.current)?Rc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Nr(a.href),a=Fa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Nr(a.href);var h=Fa(u).hoistableStyles,_=h.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,_),(h=u.querySelector(jo(t)))&&!h._p&&(_.instance=h,_.state.loading=5),Ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(t,a),h||PS(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Lr(a),a=Fa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Nr(t){return'href="'+Ht(t)+'"'}function jo(t){return'link[rel="stylesheet"]['+t+"]"}function p_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function PS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Bn(n,"link",a),gn(n),t.head.appendChild(n))}function Lr(t){return'[src="'+Ht(t)+'"]'}function $o(t){return"script[async]"+t}function m_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),Bn(o,"style",u),Cc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Nr(a.href);var h=t.querySelector(jo(u));if(h)return n.state.loading|=4,n.instance=h,gn(h),h;o=p_(a),(u=Ci.get(u))&&Ch(o,u),h=(t.ownerDocument||t).createElement("link"),gn(h);var _=h;return _._p=new Promise(function(R,V){_.onload=R,_.onerror=V}),Bn(h,"link",o),n.state.loading|=4,Cc(h,a.precedence,t),n.instance=h;case"script":return h=Lr(a.src),(u=t.querySelector($o(h)))?(n.instance=u,gn(u),u):(o=a,(u=Ci.get(h))&&(o=x({},a),wh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),Bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Cc(o,a.precedence,t));return n.instance}function Cc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function wh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var wc=null;function g_(t,n,a){if(wc===null){var o=new Map,u=wc=new Map;u.set(a,o)}else u=wc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[za]||h[mn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var _=h.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(h):o.set(_,[h])}}return o}function __(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function IS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function v_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function zS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Nr(o.href),h=n.querySelector(jo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Dc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,gn(h);return}h=n.ownerDocument||n,o=p_(o),(u=Ci.get(u))&&Ch(o,u),h=h.createElement("link"),gn(h);var _=h;_._p=new Promise(function(R,V){_.onload=R,_.onerror=V}),Bn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Dc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Dh=0;function BS(t,n){return t.stylesheets&&t.count===0&&Nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Nc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Dh===0&&(Dh=62500*vS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Nc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Dh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uc=null;function Nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uc=new Map,n.forEach(FS,t),Uc=null,Dc.call(t))}function FS(t,n){if(!(n.state.loading&4)){var a=Uc.get(t);if(a)var o=a.get(null);else{a=new Map,Uc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var _=u[h];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),h=a.get(_)||o,h===o&&a.set(null,u),a.set(_,u),this.count++,o=Dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var el={$$typeof:F,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function HS(t,n,a,o,u,h,_,R,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function y_(t,n,a,o,u,h,_,R,V,se,ve,be){return t=new HS(t,n,a,_,V,se,ve,be,R),n=1,h===!0&&(n|=24),h=fi(3,null,null,n),t.current=h,h.stateNode=t,n=cf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},df(h),t}function x_(t){return t?(t=ur,t):ur}function S_(t,n,a,o,u,h){u=x_(u),o.context===null?o.context=u:o.pendingContext=u,o=qa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Za(t,o,n),a!==null&&(ti(a,t,n),No(a,t,n))}function M_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Uh(t,n){M_(t,n),(t=t.alternate)&&M_(t,n)}function E_(t){if(t.tag===13||t.tag===31){var n=Us(t,67108864);n!==null&&ti(n,t,67108864),Uh(t,67108864)}}function b_(t){if(t.tag===13||t.tag===31){var n=gi();n=po(n);var a=Us(t,n);a!==null&&ti(a,t,n),Uh(t,n)}}var Lc=!0;function GS(t,n,a,o){var u=B.T;B.T=null;var h=G.p;try{G.p=2,Nh(t,n,a,o)}finally{G.p=h,B.T=u}}function VS(t,n,a,o){var u=B.T;B.T=null;var h=G.p;try{G.p=8,Nh(t,n,a,o)}finally{G.p=h,B.T=u}}function Nh(t,n,a,o){if(Lc){var u=Lh(o);if(u===null)vh(t,n,o,Oc,a),A_(t,o);else if(XS(u,t,n,a,o))o.stopPropagation();else if(A_(t,o),n&4&&-1<kS.indexOf(t)){for(;u!==null;){var h=oa(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var _=Ue(h.pendingLanes);if(_!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var V=1<<31-Xe(_);R.entanglements[1]|=V,_&=~V}Ki(h),(It&6)===0&&(gc=Qe()+500,Zo(0))}}break;case 31:case 13:R=Us(h,2),R!==null&&ti(R,h,2),vc(),Uh(h,2)}if(h=Lh(o),h===null&&vh(t,n,o,Oc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else vh(t,n,o,null,a)}}function Lh(t){return t=Ou(t),Oh(t)}var Oc=null;function Oh(t){if(Oc=null,t=ra(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Oc=t,null}function T_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ze()){case w:return 2;case S:return 8;case K:case ie:return 32;case de:return 268435456;default:return 32}default:return 32}}var Ph=!1,ss=null,rs=null,os=null,tl=new Map,nl=new Map,ls=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A_(t,n){switch(t){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=oa(n),n!==null&&E_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function XS(t,n,a,o,u){switch(n){case"focusin":return ss=il(ss,t,n,a,o,u),!0;case"dragenter":return rs=il(rs,t,n,a,o,u),!0;case"mouseover":return os=il(os,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return tl.set(h,il(tl.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,nl.set(h,il(nl.get(h)||null,t,n,a,o,u)),!0}return!1}function R_(t){var n=ra(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,ir(t.priority,function(){b_(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,ir(t.priority,function(){b_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Lu=o,a.target.dispatchEvent(o),Lu=null}else return n=oa(a),n!==null&&E_(n),t.blockedOn=a,!1;n.shift()}return!0}function C_(t,n,a){Pc(t)&&a.delete(n)}function WS(){Ph=!1,ss!==null&&Pc(ss)&&(ss=null),rs!==null&&Pc(rs)&&(rs=null),os!==null&&Pc(os)&&(os=null),tl.forEach(C_),nl.forEach(C_)}function Ic(t,n){t.blockedOn===n&&(t.blockedOn=null,Ph||(Ph=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,WS)))}var zc=null;function w_(t){zc!==t&&(zc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){zc===t&&(zc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Oh(o||a)===null)continue;break}var h=oa(a);h!==null&&(t.splice(n,3),n-=3,Lf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Or(t){function n(V){return Ic(V,t)}ss!==null&&Ic(ss,t),rs!==null&&Ic(rs,t),os!==null&&Ic(os,t),tl.forEach(n),nl.forEach(n);for(var a=0;a<ls.length;a++){var o=ls[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ls.length&&(a=ls[0],a.blockedOn===null);)R_(a),a.blockedOn===null&&ls.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],_=u[On]||null;if(typeof h=="function")_||w_(a);else if(_){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,_=h[On]||null)R=_.formAction;else if(Oh(u)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),w_(a)}}}function D_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ih(t){this._internalRoot=t}Bc.prototype.render=Ih.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=gi();S_(a,o,t,n,null,null)},Bc.prototype.unmount=Ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;S_(t.current,2,null,t,null,null),vc(),n[Kn]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var n=go();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ls.length&&n!==0&&n<ls[a].priority;a++);ls.splice(a,0,t),a===0&&R_(t)}};var U_=e.version;if(U_!=="19.2.8")throw Error(s(527,U_,"19.2.8"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var YS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{pe=Fc.inject(YS),me=Fc}catch{}}return al.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=B0,h=F0,_=H0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=y_(t,1,!1,null,null,a,o,null,u,h,_,D_),t[Kn]=n.current,_h(t),new Ih(n)},al.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",h=B0,_=F0,R=H0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=y_(t,1,!0,n,a??null,o,u,V,h,_,R,D_),n.context=x_(null),a=n.current,o=gi(),o=po(o),u=qa(o),u.callback=null,Za(a,u,o),a=o,n.current.lanes=a,Ze(n,a),Ki(n),t[Kn]=n.current,_h(t),new Bc(n)},al.version="19.2.8",al}var F_;function tM(){if(F_)return Bh.exports;F_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Bh.exports=eM(),Bh.exports}var nM=tM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ey=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=vt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},m)=>vt.createElement("svg",{ref:m,...aM,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:ey("lucide",l),...p},[...f.map(([d,y])=>vt.createElement(d,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(r,e)=>{const i=vt.forwardRef(({className:s,...l},c)=>vt.createElement(sM,{ref:c,iconNode:e,className:ey(`lucide-${iM(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=pn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=pn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=pn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=pn("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=pn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=pn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=pn("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=pn("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=pn("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=pn("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=pn("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=pn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=pn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=pn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=pn("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=pn("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=pn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=pn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=pn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=pn("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=pn("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rp="185",to={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vM=0,X_=1,yM=2,_l=1,xM=2,ml=3,ys=0,si=1,$i=2,Na=0,no=1,W_=2,Y_=3,q_=4,SM=5,Zs=100,MM=101,EM=102,bM=103,TM=104,AM=200,RM=201,CM=202,wM=203,Td=204,Ad=205,DM=206,UM=207,NM=208,LM=209,OM=210,PM=211,IM=212,zM=213,BM=214,Rd=0,Cd=1,wd=2,ro=3,Dd=4,Ud=5,Nd=6,Ld=7,iy=0,FM=1,HM=2,na=0,ay=1,sy=2,ry=3,Cp=4,oy=5,ly=6,cy=7,uy=300,er=301,oo=302,Vh=303,kh=304,Cu=306,Od=1e3,Ua=1001,Pd=1002,Hn=1003,GM=1004,Gc=1005,Un=1006,Xh=1007,Js=1008,yi=1009,fy=1010,hy=1011,Ml=1012,wp=1013,aa=1014,ea=1015,Pa=1016,Dp=1017,Up=1018,El=1020,dy=35902,py=35899,my=1021,gy=1022,Vi=1023,Ia=1026,js=1027,_y=1028,Np=1029,tr=1030,Lp=1031,Op=1033,mu=33776,gu=33777,_u=33778,vu=33779,Id=35840,zd=35841,Bd=35842,Fd=35843,Hd=36196,Gd=37492,Vd=37496,kd=37488,Xd=37489,xu=37490,Wd=37491,Yd=37808,qd=37809,Zd=37810,Kd=37811,Qd=37812,Jd=37813,jd=37814,$d=37815,ep=37816,tp=37817,np=37818,ip=37819,ap=37820,sp=37821,rp=36492,op=36494,lp=36495,cp=36283,up=36284,Su=36285,fp=36286,VM=3200,hp=0,kM=1,_s="",ii="srgb",Mu="srgb-linear",Eu="linear",Xt="srgb",Pr=7680,Z_=519,XM=512,WM=513,YM=514,Pp=515,qM=516,ZM=517,Ip=518,KM=519,dp=35044,K_="300 es",ta=2e3,bl=2001;function QM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function JM(){const r=bu("canvas");return r.style.display="block",r}const Q_={};function Tu(...r){const e="THREE."+r.shift();console.log(e,...r)}function vy(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ut(...r){r=vy(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Ut(...r){r=vy(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function io(...r){const e=r.join(" ");e in Q_||(Q_[e]=!0,ut(...r))}function jM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const $M={[Rd]:Cd,[wd]:Nd,[Dd]:Ld,[ro]:Ud,[Cd]:Rd,[Nd]:wd,[Ld]:Dd,[Ud]:ro};class Es{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let J_=1234567;const vl=Math.PI/180,Tl=180/Math.PI;function La(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[i&63|128]+kn[i>>8&255]+"-"+kn[i>>16&255]+kn[i>>24&255]+kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]).toLowerCase()}function Et(r,e,i){return Math.max(e,Math.min(i,r))}function zp(r,e){return(r%e+e)%e}function eE(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function tE(r,e,i){return r!==e?(i-r)/(e-r):0}function yl(r,e,i){return(1-i)*r+i*e}function nE(r,e,i,s){return yl(r,e,1-Math.exp(-i*s))}function iE(r,e=1){return e-Math.abs(zp(r,e*2)-e)}function aE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function sE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function rE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function oE(r,e){return r+Math.random()*(e-r)}function lE(r){return r*(.5-Math.random())}function cE(r){r!==void 0&&(J_=r);let e=J_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uE(r){return r*vl}function fE(r){return r*Tl}function hE(r){return(r&r-1)===0&&r!==0}function dE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mE(r,e,i,s,l){const c=Math.cos,f=Math.sin,p=c(i/2),m=f(i/2),d=c((e+s)/2),y=f((e+s)/2),x=c((e-s)/2),g=f((e-s)/2),M=c((s-e)/2),T=f((s-e)/2);switch(l){case"XYX":r.set(p*y,m*x,m*g,p*d);break;case"YZY":r.set(m*g,p*y,m*x,p*d);break;case"ZXZ":r.set(m*x,m*g,p*y,p*d);break;case"XZX":r.set(p*y,m*T,m*M,p*d);break;case"YXY":r.set(m*M,p*y,m*T,p*d);break;case"ZYZ":r.set(m*T,m*M,p*y,p*d);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pp={DEG2RAD:vl,RAD2DEG:Tl,generateUUID:La,clamp:Et,euclideanModulo:zp,mapLinear:eE,inverseLerp:tE,lerp:yl,damp:nE,pingpong:iE,smoothstep:aE,smootherstep:sE,randInt:rE,randFloat:oE,randFloatSpread:lE,seededRandom:cE,degToRad:uE,radToDeg:fE,isPowerOfTwo:hE,ceilPowerOfTwo:dE,floorPowerOfTwo:pE,setQuaternionFromProperEuler:mE,normalize:Wt,denormalize:Gi},Kp=class Kp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kp.prototype.isVector2=!0;let ot=Kp;class xs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let m=s[l+0],d=s[l+1],y=s[l+2],x=s[l+3],g=c[f+0],M=c[f+1],T=c[f+2],C=c[f+3];if(x!==C||m!==g||d!==M||y!==T){let E=m*g+d*M+y*T+x*C;E<0&&(g=-g,M=-M,T=-T,C=-C,E=-E);let v=1-p;if(E<.9995){const z=Math.acos(E),F=Math.sin(z);v=Math.sin(v*z)/F,p=Math.sin(p*z)/F,m=m*v+g*p,d=d*v+M*p,y=y*v+T*p,x=x*v+C*p}else{m=m*v+g*p,d=d*v+M*p,y=y*v+T*p,x=x*v+C*p;const z=1/Math.sqrt(m*m+d*d+y*y+x*x);m*=z,d*=z,y*=z,x*=z}}e[i]=m,e[i+1]=d,e[i+2]=y,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],m=s[l+1],d=s[l+2],y=s[l+3],x=c[f],g=c[f+1],M=c[f+2],T=c[f+3];return e[i]=p*T+y*x+m*M-d*g,e[i+1]=m*T+y*g+d*x-p*M,e[i+2]=d*T+y*M+p*g-m*x,e[i+3]=y*T-p*x-m*g-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,m=Math.sin,d=p(s/2),y=p(l/2),x=p(c/2),g=m(s/2),M=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=g*y*x+d*M*T,this._y=d*M*x-g*y*T,this._z=d*y*T+g*M*x,this._w=d*y*x-g*M*T;break;case"YXZ":this._x=g*y*x+d*M*T,this._y=d*M*x-g*y*T,this._z=d*y*T-g*M*x,this._w=d*y*x+g*M*T;break;case"ZXY":this._x=g*y*x-d*M*T,this._y=d*M*x+g*y*T,this._z=d*y*T+g*M*x,this._w=d*y*x-g*M*T;break;case"ZYX":this._x=g*y*x-d*M*T,this._y=d*M*x+g*y*T,this._z=d*y*T-g*M*x,this._w=d*y*x+g*M*T;break;case"YZX":this._x=g*y*x+d*M*T,this._y=d*M*x+g*y*T,this._z=d*y*T-g*M*x,this._w=d*y*x-g*M*T;break;case"XZY":this._x=g*y*x-d*M*T,this._y=d*M*x-g*y*T,this._z=d*y*T+g*M*x,this._w=d*y*x+g*M*T;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],y=i[6],x=i[10],g=s+p+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(y-m)*M,this._y=(c-d)*M,this._z=(f-l)*M}else if(s>p&&s>x){const M=2*Math.sqrt(1+s-p-x);this._w=(y-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+d)/M}else if(p>x){const M=2*Math.sqrt(1+p-s-x);this._w=(c-d)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+y)/M}else{const M=2*Math.sqrt(1+x-s-p);this._w=(f-l)/M,this._x=(c+d)/M,this._y=(m+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,m=i._y,d=i._z,y=i._w;return this._x=s*y+f*p+l*d-c*m,this._y=l*y+f*m+c*p-s*d,this._z=c*y+f*d+s*m-l*p,this._w=f*y-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),y=Math.sin(d);m=Math.sin(m*d)/y,i=Math.sin(i*d)/y,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qp=class Qp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(j_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(j_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,m=e.w,d=2*(f*l-p*s),y=2*(p*i-c*l),x=2*(c*s-f*i);return this.x=i+m*d+f*x-p*y,this.y=s+m*y+p*d-c*x,this.z=l+m*x+c*y-f*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qp.prototype.isVector3=!0;let $=Qp;const Wh=new $,j_=new xs,Jp=class Jp{constructor(e,i,s,l,c,f,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,d)}set(e,i,s,l,c,f,p,m,d){const y=this.elements;return y[0]=e,y[1]=l,y[2]=p,y[3]=i,y[4]=c,y[5]=m,y[6]=s,y[7]=f,y[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],d=s[1],y=s[4],x=s[7],g=s[2],M=s[5],T=s[8],C=l[0],E=l[3],v=l[6],z=l[1],F=l[4],D=l[7],I=l[2],N=l[5],U=l[8];return c[0]=f*C+p*z+m*I,c[3]=f*E+p*F+m*N,c[6]=f*v+p*D+m*U,c[1]=d*C+y*z+x*I,c[4]=d*E+y*F+x*N,c[7]=d*v+y*D+x*U,c[2]=g*C+M*z+T*I,c[5]=g*E+M*F+T*N,c[8]=g*v+M*D+T*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],d=e[7],y=e[8];return i*f*y-i*p*d-s*c*y+s*p*m+l*c*d-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],d=e[7],y=e[8],x=y*f-p*d,g=p*m-y*c,M=d*c-f*m,T=i*x+s*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=x*C,e[1]=(l*d-y*s)*C,e[2]=(p*s-l*f)*C,e[3]=g*C,e[4]=(y*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=M*C,e[7]=(s*m-d*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*f+d*p)+f+e,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(e,i){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yh.makeScale(e,i)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yh.makeRotation(-e)),this}translate(e,i){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jp.prototype.isMatrix3=!0;let pt=Jp;const Yh=new pt,$_=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ev=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gE(){const r={enabled:!0,workingColorSpace:Mu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xt&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xt&&(l.r=ao(l.r),l.g=ao(l.g),l.b=ao(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_s?Eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Mu]:{primaries:e,whitePoint:s,transfer:Eu,toXYZ:$_,fromXYZ:ev,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:s,transfer:Xt,toXYZ:$_,fromXYZ:ev,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),r}const Nt=gE();function Oa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ir;class _E{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ir===void 0&&(Ir=bu("canvas")),Ir.width=e.width,Ir.height=e.height;const l=Ir.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ir}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=bu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Oa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Oa(i[s]/255)*255):i[s]=Oa(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vE=0;class Bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=La(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(qh(l[f].image)):c.push(qh(l[f]))}else c=qh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_E.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let yE=0;const Zh=new $;class Wn extends Es{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Ua,l=Ua,c=Un,f=Js,p=Vi,m=yi,d=Wn.DEFAULT_ANISOTROPY,y=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=La(),this.name="",this.source=new Bp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zh).x}get height(){return this.source.getSize(Zh).y}get depth(){return this.source.getSize(Zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case Ua:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case Ua:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=uy;Wn.DEFAULT_ANISOTROPY=1;const jp=class jp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],y=m[4],x=m[8],g=m[1],M=m[5],T=m[9],C=m[2],E=m[6],v=m[10];if(Math.abs(y-g)<.01&&Math.abs(x-C)<.01&&Math.abs(T-E)<.01){if(Math.abs(y+g)<.1&&Math.abs(x+C)<.1&&Math.abs(T+E)<.1&&Math.abs(d+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(d+1)/2,D=(M+1)/2,I=(v+1)/2,N=(y+g)/4,U=(x+C)/4,b=(T+E)/4;return F>D&&F>I?F<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(F),l=N/s,c=U/s):D>I?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=N/l,c=b/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=U/c,l=b/c),this.set(s,l,c,i),this}let z=Math.sqrt((E-T)*(E-T)+(x-C)*(x-C)+(g-y)*(g-y));return Math.abs(z)<.001&&(z=1),this.x=(E-T)/z,this.y=(x-C)/z,this.z=(g-y)/z,this.w=Math.acos((d+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jp.prototype.isVector4=!0;let ln=jp;class xE extends Es{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Wn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Bp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ia extends xE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class yy extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SE extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ru=class Ru{constructor(e,i,s,l,c,f,p,m,d,y,x,g,M,T,C,E){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,m,d,y,x,g,M,T,C,E)}set(e,i,s,l,c,f,p,m,d,y,x,g,M,T,C,E){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=p,v[13]=m,v[2]=d,v[6]=y,v[10]=x,v[14]=g,v[3]=M,v[7]=T,v[11]=C,v[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ru().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/zr.setFromMatrixColumn(e,0).length(),c=1/zr.setFromMatrixColumn(e,1).length(),f=1/zr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),y=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=f*y,M=f*x,T=p*y,C=p*x;i[0]=m*y,i[4]=-m*x,i[8]=d,i[1]=M+T*d,i[5]=g-C*d,i[9]=-p*m,i[2]=C-g*d,i[6]=T+M*d,i[10]=f*m}else if(e.order==="YXZ"){const g=m*y,M=m*x,T=d*y,C=d*x;i[0]=g+C*p,i[4]=T*p-M,i[8]=f*d,i[1]=f*x,i[5]=f*y,i[9]=-p,i[2]=M*p-T,i[6]=C+g*p,i[10]=f*m}else if(e.order==="ZXY"){const g=m*y,M=m*x,T=d*y,C=d*x;i[0]=g-C*p,i[4]=-f*x,i[8]=T+M*p,i[1]=M+T*p,i[5]=f*y,i[9]=C-g*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(e.order==="ZYX"){const g=f*y,M=f*x,T=p*y,C=p*x;i[0]=m*y,i[4]=T*d-M,i[8]=g*d+C,i[1]=m*x,i[5]=C*d+g,i[9]=M*d-T,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*d,T=p*m,C=p*d;i[0]=m*y,i[4]=C-g*x,i[8]=T*x+M,i[1]=x,i[5]=f*y,i[9]=-p*y,i[2]=-d*y,i[6]=M*x+T,i[10]=g-C*x}else if(e.order==="XZY"){const g=f*m,M=f*d,T=p*m,C=p*d;i[0]=m*y,i[4]=-x,i[8]=d*y,i[1]=g*x+C,i[5]=f*y,i[9]=M*x-T,i[2]=T*x-M,i[6]=p*y,i[10]=C*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ME,e,EE)}lookAt(e,i,s){const l=this.elements;return _i.subVectors(e,i),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),us.crossVectors(s,_i),us.lengthSq()===0&&(Math.abs(s.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),us.crossVectors(s,_i)),us.normalize(),Vc.crossVectors(_i,us),l[0]=us.x,l[4]=Vc.x,l[8]=_i.x,l[1]=us.y,l[5]=Vc.y,l[9]=_i.y,l[2]=us.z,l[6]=Vc.z,l[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],d=s[12],y=s[1],x=s[5],g=s[9],M=s[13],T=s[2],C=s[6],E=s[10],v=s[14],z=s[3],F=s[7],D=s[11],I=s[15],N=l[0],U=l[4],b=l[8],L=l[12],X=l[1],k=l[5],Q=l[9],ue=l[13],ge=l[2],te=l[6],B=l[10],G=l[14],Z=l[3],he=l[7],Te=l[11],O=l[15];return c[0]=f*N+p*X+m*ge+d*Z,c[4]=f*U+p*k+m*te+d*he,c[8]=f*b+p*Q+m*B+d*Te,c[12]=f*L+p*ue+m*G+d*O,c[1]=y*N+x*X+g*ge+M*Z,c[5]=y*U+x*k+g*te+M*he,c[9]=y*b+x*Q+g*B+M*Te,c[13]=y*L+x*ue+g*G+M*O,c[2]=T*N+C*X+E*ge+v*Z,c[6]=T*U+C*k+E*te+v*he,c[10]=T*b+C*Q+E*B+v*Te,c[14]=T*L+C*ue+E*G+v*O,c[3]=z*N+F*X+D*ge+I*Z,c[7]=z*U+F*k+D*te+I*he,c[11]=z*b+F*Q+D*B+I*Te,c[15]=z*L+F*ue+D*G+I*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],m=e[9],d=e[13],y=e[2],x=e[6],g=e[10],M=e[14],T=e[3],C=e[7],E=e[11],v=e[15],z=m*M-d*g,F=p*M-d*x,D=p*g-m*x,I=f*M-d*y,N=f*g-m*y,U=f*x-p*y;return i*(C*z-E*F+v*D)-s*(T*z-E*I+v*N)+l*(T*F-C*I+v*U)-c*(T*D-C*N+E*U)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],p=e[9],m=e[2],d=e[6],y=e[10];return i*(f*y-p*d)-s*(c*y-p*m)+l*(c*d-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],m=e[6],d=e[7],y=e[8],x=e[9],g=e[10],M=e[11],T=e[12],C=e[13],E=e[14],v=e[15],z=i*p-s*f,F=i*m-l*f,D=i*d-c*f,I=s*m-l*p,N=s*d-c*p,U=l*d-c*m,b=y*C-x*T,L=y*E-g*T,X=y*v-M*T,k=x*E-g*C,Q=x*v-M*C,ue=g*v-M*E,ge=z*ue-F*Q+D*k+I*X-N*L+U*b;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/ge;return e[0]=(p*ue-m*Q+d*k)*te,e[1]=(l*Q-s*ue-c*k)*te,e[2]=(C*U-E*N+v*I)*te,e[3]=(g*N-x*U-M*I)*te,e[4]=(m*X-f*ue-d*L)*te,e[5]=(i*ue-l*X+c*L)*te,e[6]=(E*D-T*U-v*F)*te,e[7]=(y*U-g*D+M*F)*te,e[8]=(f*Q-p*X+d*b)*te,e[9]=(s*X-i*Q-c*b)*te,e[10]=(T*N-C*D+v*z)*te,e[11]=(x*D-y*N-M*z)*te,e[12]=(p*L-f*k-m*b)*te,e[13]=(i*k-s*L+l*b)*te,e[14]=(C*F-T*I-E*z)*te,e[15]=(y*I-x*F+g*z)*te,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,m=e.z,d=c*f,y=c*p;return this.set(d*f+s,d*p-l*m,d*m+l*p,0,d*p+l*m,y*p+s,y*m-l*f,0,d*m-l*p,y*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,y=f+f,x=p+p,g=c*d,M=c*y,T=c*x,C=f*y,E=f*x,v=p*x,z=m*d,F=m*y,D=m*x,I=s.x,N=s.y,U=s.z;return l[0]=(1-(C+v))*I,l[1]=(M+D)*I,l[2]=(T-F)*I,l[3]=0,l[4]=(M-D)*N,l[5]=(1-(g+v))*N,l[6]=(E+z)*N,l[7]=0,l[8]=(T+F)*U,l[9]=(E-z)*U,l[10]=(1-(g+C))*U,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=zr.set(l[0],l[1],l[2]).length();const p=zr.set(l[4],l[5],l[6]).length(),m=zr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Bi.copy(this);const d=1/f,y=1/p,x=1/m;return Bi.elements[0]*=d,Bi.elements[1]*=d,Bi.elements[2]*=d,Bi.elements[4]*=y,Bi.elements[5]*=y,Bi.elements[6]*=y,Bi.elements[8]*=x,Bi.elements[9]*=x,Bi.elements[10]*=x,i.setFromRotationMatrix(Bi),s.x=f,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,f,p=ta,m=!1){const d=this.elements,y=2*c/(i-e),x=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let T,C;if(m)T=c/(f-c),C=f*c/(f-c);else if(p===ta)T=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===bl)T=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=y,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=ta,m=!1){const d=this.elements,y=2/(i-e),x=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let T,C;if(m)T=1/(f-c),C=f/(f-c);else if(p===ta)T=-2/(f-c),C=-(f+c)/(f-c);else if(p===bl)T=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=y,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Ru.prototype.isMatrix4=!0;let on=Ru;const zr=new $,Bi=new on,ME=new $(0,0,0),EE=new $(1,1,1),us=new $,Vc=new $,_i=new $,tv=new on,nv=new xs;class Ss{constructor(e=0,i=0,s=0,l=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],y=l[9],x=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return nv.setFromEuler(this),this.setFromQuaternion(nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class Fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bE=0;const iv=new $,Br=new xs,Ta=new on,kc=new $,sl=new $,TE=new $,AE=new xs,av=new $(1,0,0),sv=new $(0,1,0),rv=new $(0,0,1),ov={type:"added"},RE={type:"removed"},Fr={type:"childadded",child:null},Kh={type:"childremoved",child:null};class Nn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new $,i=new Ss,s=new xs,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new pt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(av,e)}rotateY(e){return this.rotateOnAxis(sv,e)}rotateZ(e){return this.rotateOnAxis(rv,e)}translateOnAxis(e,i){return iv.copy(e).applyQuaternion(this.quaternion),this.position.add(iv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(av,e)}translateY(e){return this.translateOnAxis(sv,e)}translateZ(e){return this.translateOnAxis(rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?kc.copy(e):kc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(sl,kc,this.up):Ta.lookAt(kc,sl,this.up),this.quaternion.setFromRotationMatrix(Ta),l&&(Ta.extractRotation(l.matrixWorld),Br.setFromRotationMatrix(Ta),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ov),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(RE),Kh.child=e,this.dispatchEvent(Kh),Kh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ov),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,TE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,AE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,p=c.length;f<p;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,y=m.length;d<y;d++){const x=m[d];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=f(e.geometries),m=f(e.materials),d=f(e.textures),y=f(e.images),x=f(e.shapes),g=f(e.skeletons),M=f(e.animations),T=f(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),y.length>0&&(s.images=y),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(p){const m=[];for(const d in p){const y=p[d];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new $(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Da extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CE={type:"move"};class Qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){f=!0;for(const C of e.hand.values()){const E=i.getJointPose(C,s),v=this._getHandJoint(d,C);E!==null&&(v.matrix.fromArray(E.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=E.radius),v.visible=E!==null}const y=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=y.position.distanceTo(x.position),M=.02,T=.005;d.inputState.pinching&&g>M+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=M-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(CE)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Da;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function Jh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Rt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Nt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Nt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Nt.workingColorSpace){if(e=zp(e,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Jh(f,c,e+1/3),this.g=Jh(f,c,e),this.b=Jh(f,c,e-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(e,i=ii){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ii){const s=xy[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Nt.workingToColorSpace(Xn.copy(this),e),Math.round(Et(Xn.r*255,0,255))*65536+Math.round(Et(Xn.g*255,0,255))*256+Math.round(Et(Xn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Nt.workingColorSpace){Nt.workingToColorSpace(Xn.copy(this),i);const s=Xn.r,l=Xn.g,c=Xn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const y=(p+f)/2;if(p===f)m=0,d=0;else{const x=f-p;switch(d=y<=.5?x/(f+p):x/(2-f-p),f){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=d,e.l=y,e}getRGB(e,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=ii){Nt.workingToColorSpace(Xn.copy(this),e);const i=Xn.r,s=Xn.g,l=Xn.b;return e!==ii?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+i,fs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(fs),e.getHSL(Xc);const s=yl(fs.h,Xc.h,i),l=yl(fs.s,Xc.s,i),c=yl(fs.l,Xc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Rt;Rt.NAMES=xy;class Hp{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Rt(e),this.near=i,this.far=s}clone(){return new Hp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wE extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fi=new $,Aa=new $,jh=new $,Ra=new $,Hr=new $,Gr=new $,lv=new $,$h=new $,ed=new $,td=new $,nd=new ln,id=new ln,ad=new ln;class Ni{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Fi.subVectors(l,i),Aa.subVectors(s,i),jh.subVectors(e,i);const f=Fi.dot(Fi),p=Fi.dot(Aa),m=Fi.dot(jh),d=Aa.dot(Aa),y=Aa.dot(jh),x=f*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(d*m-p*y)*g,T=(f*y-p*m)*g;return c.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,s,l,c,f,p,m){return this.getBarycoord(e,i,s,l,Ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ra.x),m.addScaledVector(f,Ra.y),m.addScaledVector(p,Ra.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return nd.setScalar(0),id.setScalar(0),ad.setScalar(0),nd.fromBufferAttribute(e,i),id.fromBufferAttribute(e,s),ad.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(nd,c.x),f.addScaledVector(id,c.y),f.addScaledVector(ad,c.z),f}static isFrontFacing(e,i,s,l){return Fi.subVectors(s,i),Aa.subVectors(e,i),Fi.cross(Aa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Fi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ni.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Hr.subVectors(l,s),Gr.subVectors(c,s),$h.subVectors(e,s);const m=Hr.dot($h),d=Gr.dot($h);if(m<=0&&d<=0)return i.copy(s);ed.subVectors(e,l);const y=Hr.dot(ed),x=Gr.dot(ed);if(y>=0&&x<=y)return i.copy(l);const g=m*x-y*d;if(g<=0&&m>=0&&y<=0)return f=m/(m-y),i.copy(s).addScaledVector(Hr,f);td.subVectors(e,c);const M=Hr.dot(td),T=Gr.dot(td);if(T>=0&&M<=T)return i.copy(c);const C=M*d-m*T;if(C<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Gr,p);const E=y*T-M*x;if(E<=0&&x-y>=0&&M-T>=0)return lv.subVectors(c,l),p=(x-y)/(x-y+(M-T)),i.copy(l).addScaledVector(lv,p);const v=1/(E+C+g);return f=C*v,p=g*v,i.copy(s).addScaledVector(Hr,f).addScaledVector(Gr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cl{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Hi):Hi.fromBufferAttribute(c,f),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Wc.copy(s.boundingBox)),Wc.applyMatrix4(e.matrixWorld),this.union(Wc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),Yc.subVectors(this.max,rl),Vr.subVectors(e.a,rl),kr.subVectors(e.b,rl),Xr.subVectors(e.c,rl),hs.subVectors(kr,Vr),ds.subVectors(Xr,kr),Xs.subVectors(Vr,Xr);let i=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Xs.z,Xs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Xs.z,0,-Xs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Xs.y,Xs.x,0];return!sd(i,Vr,kr,Xr,Yc)||(i=[1,0,0,0,1,0,0,0,1],!sd(i,Vr,kr,Xr,Yc))?!1:(qc.crossVectors(hs,ds),i=[qc.x,qc.y,qc.z],sd(i,Vr,kr,Xr,Yc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new $,new $,new $,new $,new $,new $,new $,new $],Hi=new $,Wc=new Cl,Vr=new $,kr=new $,Xr=new $,hs=new $,ds=new $,Xs=new $,rl=new $,Yc=new $,qc=new $,Ws=new $;function sd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ws.fromArray(r,c);const p=l.x*Math.abs(Ws.x)+l.y*Math.abs(Ws.y)+l.z*Math.abs(Ws.z),m=e.dot(Ws),d=i.dot(Ws),y=s.dot(Ws);if(Math.max(-Math.max(m,d,y),Math.min(m,d,y))>p)return!1}return!0}const Sn=new $,Zc=new ot;let DE=0;class ki extends Es{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=dp,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Zc.fromBufferAttribute(this,i),Zc.applyMatrix3(e),this.setXY(i,Zc.x,Zc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wt(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Gi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Gi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Gi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Gi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array),c=Wt(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Sy extends ki{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class My extends ki{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ln extends ki{constructor(e,i,s){super(new Float32Array(e),i,s)}}const UE=new Cl,ol=new $,rd=new $;class Gp{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):UE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ol.subVectors(e,this.center);const i=ol.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ol,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ol.copy(e.center).add(rd)),this.expandByPoint(ol.copy(e.center).sub(rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NE=0;const wi=new on,od=new Nn,Wr=new $,vi=new Cl,ll=new Cl,Dn=new $;class xi extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QM(e)?My:Sy)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,s){return wi.makeTranslation(e,i,s),this.applyMatrix4(wi),this}scale(e,i,s){return wi.makeScale(e,i,s),this.applyMatrix4(wi),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ln(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];ll.setFromBufferAttribute(p),this.morphTargetsRelative?(Dn.addVectors(vi.min,ll.min),vi.expandByPoint(Dn),Dn.addVectors(vi.max,ll.max),vi.expandByPoint(Dn)):(vi.expandByPoint(ll.min),vi.expandByPoint(ll.max))}vi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Dn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Dn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,y=p.count;d<y;d++)Dn.fromBufferAttribute(p,d),m&&(Wr.fromBufferAttribute(e,d),Dn.add(Wr)),l=Math.max(l,s.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new ki(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new $,m[b]=new $;const d=new $,y=new $,x=new $,g=new ot,M=new ot,T=new ot,C=new $,E=new $;function v(b,L,X){d.fromBufferAttribute(s,b),y.fromBufferAttribute(s,L),x.fromBufferAttribute(s,X),g.fromBufferAttribute(c,b),M.fromBufferAttribute(c,L),T.fromBufferAttribute(c,X),y.sub(d),x.sub(d),M.sub(g),T.sub(g);const k=1/(M.x*T.y-T.x*M.y);isFinite(k)&&(C.copy(y).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(k),E.copy(x).multiplyScalar(M.x).addScaledVector(y,-T.x).multiplyScalar(k),p[b].add(C),p[L].add(C),p[X].add(C),m[b].add(E),m[L].add(E),m[X].add(E))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let b=0,L=z.length;b<L;++b){const X=z[b],k=X.start,Q=X.count;for(let ue=k,ge=k+Q;ue<ge;ue+=3)v(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const F=new $,D=new $,I=new $,N=new $;function U(b){I.fromBufferAttribute(l,b),N.copy(I);const L=p[b];F.copy(L),F.sub(I.multiplyScalar(I.dot(L))).normalize(),D.crossVectors(N,L);const k=D.dot(m[b])<0?-1:1;f.setXYZW(b,F.x,F.y,F.z,k)}for(let b=0,L=z.length;b<L;++b){const X=z[b],k=X.start,Q=X.count;for(let ue=k,ge=k+Q;ue<ge;ue+=3)U(e.getX(ue+0)),U(e.getX(ue+1)),U(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new ki(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,f=new $,p=new $,m=new $,d=new $,y=new $,x=new $;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),C=e.getX(g+1),E=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,E),y.subVectors(f,c),x.subVectors(l,c),y.cross(x),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),d.fromBufferAttribute(s,E),p.add(y),m.add(y),d.add(y),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(E,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),y.subVectors(f,c),x.subVectors(l,c),y.cross(x),s.setXYZ(g+0,y.x,y.y,y.z),s.setXYZ(g+1,y.x,y.y,y.z),s.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(p,m){const d=p.array,y=p.itemSize,x=p.normalized,g=new d.constructor(m.length*y);let M=0,T=0;for(let C=0,E=m.length;C<E;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*y;for(let v=0;v<y;v++)g[T++]=d[M++]}return new ki(g,y,x)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let y=0,x=d.length;y<x;y++){const g=d[y],M=e(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],y=[];for(let x=0,g=d.length;x<g;x++){const M=d[x];y.push(M.toJSON(e.data))}y.length>0&&(l[m]=y,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const y=l[d];this.setAttribute(d,y.clone(i))}const c=e.morphAttributes;for(const d in c){const y=[],x=c[d];for(let g=0,M=x.length;g<M;g++)y.push(x[g].clone(i));this.morphAttributes[d]=y}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let d=0,y=f.length;d<y;d++){const x=f[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class LE{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=dp,this.updateRanges=[],this.version=0,this.uuid=La()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qn=new $;class Au{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.applyMatrix4(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.applyNormalMatrix(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)qn.fromBufferAttribute(this,i),qn.transformDirection(e),this.setXYZ(i,qn.x,qn.y,qn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Wt(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Gi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Gi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Gi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Gi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Wt(i,this.array),s=Wt(s,this.array),l=Wt(l,this.array),c=Wt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){Tu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new ki(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Au(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let OE=0;class fo extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=La(),this.name="",this.type="Material",this.blending=no,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(s.blending=this.blending),this.side!==ys&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Td&&(s.blendSrc=this.blendSrc),this.blendDst!==Ad&&(s.blendDst=this.blendDst),this.blendEquation!==Zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ot().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ey extends fo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Yr;const cl=new $,qr=new $,Zr=new $,Kr=new ot,ul=new ot,by=new on,Kc=new $,fl=new $,Qc=new $,cv=new ot,ld=new ot,uv=new ot;class PE extends Nn{constructor(e=new Ey){if(super(),this.isSprite=!0,this.type="Sprite",Yr===void 0){Yr=new xi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new LE(i,5);Yr.setIndex([0,1,2,0,2,3]),Yr.setAttribute("position",new Au(s,3,0,!1)),Yr.setAttribute("uv",new Au(s,2,3,!1))}this.geometry=Yr,this.material=e,this.center=new ot(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),by.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Zr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;Jc(Kc.set(-.5,-.5,0),Zr,f,qr,l,c),Jc(fl.set(.5,-.5,0),Zr,f,qr,l,c),Jc(Qc.set(.5,.5,0),Zr,f,qr,l,c),cv.set(0,0),ld.set(1,0),uv.set(1,1);let p=e.ray.intersectTriangle(Kc,fl,Qc,!1,cl);if(p===null&&(Jc(fl.set(-.5,.5,0),Zr,f,qr,l,c),ld.set(0,1),p=e.ray.intersectTriangle(Kc,Qc,fl,!1,cl),p===null))return;const m=e.ray.origin.distanceTo(cl);m<e.near||m>e.far||i.push({distance:m,point:cl.clone(),uv:Ni.getInterpolation(cl,Kc,fl,Qc,cv,ld,uv,new ot),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Jc(r,e,i,s,l,c){Kr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(ul.x=c*Kr.x-l*Kr.y,ul.y=l*Kr.x+c*Kr.y):ul.copy(Kr),r.copy(e),r.x+=ul.x,r.y+=ul.y,r.applyMatrix4(by)}const wa=new $,cd=new $,jc=new $,ps=new $,ud=new $,$c=new $,fd=new $;class Vp{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=wa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){cd.copy(e).add(i).multiplyScalar(.5),jc.copy(i).sub(e).normalize(),ps.copy(this.origin).sub(cd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(jc),p=ps.dot(this.direction),m=-ps.dot(jc),d=ps.lengthSq(),y=Math.abs(1-f*f);let x,g,M,T;if(y>0)if(x=f*m-p,g=f*p-m,T=c*y,x>=0)if(g>=-T)if(g<=T){const C=1/y;x*=C,g*=C,M=x*(x+f*g+2*p)+g*(f*x+g+2*m)+d}else g=c,x=Math.max(0,-(f*g+p)),M=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(f*g+p)),M=-x*x+g*(g+2*m)+d;else g<=-T?(x=Math.max(0,-(-f*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+d):(x=Math.max(0,-(f*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+g*(g+2*m)+d);else g=f>0?-c:c,x=Math.max(0,-(f*g+p)),M=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(cd).addScaledVector(jc,g),M}intersectSphere(e,i){wa.subVectors(e.center,this.origin);const s=wa.dot(this.direction),l=wa.dot(wa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,m;const d=1/this.direction.x,y=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),y>=0?(c=(e.min.y-g.y)*y,f=(e.max.y-g.y)*y):(c=(e.max.y-g.y)*y,f=(e.min.y-g.y)*y),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),x>=0?(p=(e.min.z-g.z)*x,m=(e.max.z-g.z)*x):(p=(e.max.z-g.z)*x,m=(e.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,wa)!==null}intersectTriangle(e,i,s,l,c){ud.subVectors(i,e),$c.subVectors(s,e),fd.crossVectors(ud,$c);let f=this.direction.dot(fd),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ps.subVectors(this.origin,e);const m=p*this.direction.dot($c.crossVectors(ps,$c));if(m<0)return null;const d=p*this.direction.dot(ud.cross(ps));if(d<0||m+d>f)return null;const y=-p*ps.dot(fd);return y<0?null:this.at(y/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xl extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=iy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fv=new on,Ys=new Vp,eu=new Gp,hv=new $,tu=new $,nu=new $,iu=new $,hd=new $,au=new $,dv=new $,su=new $;class Mn extends Nn{constructor(e=new xi,i=new xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){au.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const y=p[m],x=c[m];y!==0&&(hd.fromBufferAttribute(x,e),f?au.addScaledVector(hd,y):au.addScaledVector(hd.sub(i),y))}i.add(au)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),eu.copy(s.boundingSphere),eu.applyMatrix4(c),Ys.copy(e.ray).recast(e.near),!(eu.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(eu,hv)===null||Ys.origin.distanceToSquared(hv)>(e.far-e.near)**2))&&(fv.copy(c).invert(),Ys.copy(e.ray).applyMatrix4(fv),!(s.boundingBox!==null&&Ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ys)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,y=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let T=0,C=g.length;T<C;T++){const E=g[T],v=f[E.materialIndex],z=Math.max(E.start,M.start),F=Math.min(p.count,Math.min(E.start+E.count,M.start+M.count));for(let D=z,I=F;D<I;D+=3){const N=p.getX(D),U=p.getX(D+1),b=p.getX(D+2);l=ru(this,v,e,s,d,y,x,N,U,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let E=T,v=C;E<v;E+=3){const z=p.getX(E),F=p.getX(E+1),D=p.getX(E+2);l=ru(this,f,e,s,d,y,x,z,F,D),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,C=g.length;T<C;T++){const E=g[T],v=f[E.materialIndex],z=Math.max(E.start,M.start),F=Math.min(m.count,Math.min(E.start+E.count,M.start+M.count));for(let D=z,I=F;D<I;D+=3){const N=D,U=D+1,b=D+2;l=ru(this,v,e,s,d,y,x,N,U,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=E.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let E=T,v=C;E<v;E+=3){const z=E,F=E+1,D=E+2;l=ru(this,f,e,s,d,y,x,z,F,D),l&&(l.faceIndex=Math.floor(E/3),i.push(l))}}}}function IE(r,e,i,s,l,c,f,p){let m;if(e.side===si?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,e.side===ys,p),m===null)return null;su.copy(p),su.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(su);return d<i.near||d>i.far?null:{distance:d,point:su.clone(),object:r}}function ru(r,e,i,s,l,c,f,p,m,d){r.getVertexPosition(p,tu),r.getVertexPosition(m,nu),r.getVertexPosition(d,iu);const y=IE(r,e,i,s,tu,nu,iu,dv);if(y){const x=new $;Ni.getBarycoord(dv,tu,nu,iu,x),l&&(y.uv=Ni.getInterpolatedAttribute(l,p,m,d,x,new ot)),c&&(y.uv1=Ni.getInterpolatedAttribute(c,p,m,d,x,new ot)),f&&(y.normal=Ni.getInterpolatedAttribute(f,p,m,d,x,new $),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new $,materialIndex:0};Ni.getNormal(tu,nu,iu,g.normal),y.face=g,y.barycoord=x}return y}class zE extends Wn{constructor(e=null,i=1,s=1,l,c,f,p,m,d=Hn,y=Hn,x,g){super(null,f,p,m,d,y,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new $,BE=new $,FE=new pt;class gs{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=dd.subVectors(s,i).cross(BE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(dd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||FE.getNormalMatrix(e),l=this.coplanarPoint(dd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Gp,HE=new ot(.5,.5),ou=new $;class kp{constructor(e=new gs,i=new gs,s=new gs,l=new gs,c=new gs,f=new gs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ta,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],m=c[2],d=c[3],y=c[4],x=c[5],g=c[6],M=c[7],T=c[8],C=c[9],E=c[10],v=c[11],z=c[12],F=c[13],D=c[14],I=c[15];if(l[0].setComponents(d-f,M-y,v-T,I-z).normalize(),l[1].setComponents(d+f,M+y,v+T,I+z).normalize(),l[2].setComponents(d+p,M+x,v+C,I+F).normalize(),l[3].setComponents(d-p,M-x,v-C,I-F).normalize(),s)l[4].setComponents(m,g,E,D).normalize(),l[5].setComponents(d-m,M-g,v-E,I-D).normalize();else if(l[4].setComponents(d-m,M-g,v-E,I-D).normalize(),i===ta)l[5].setComponents(d+m,M+g,v+E,I+D).normalize();else if(i===bl)l[5].setComponents(m,g,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);const i=HE.distanceTo(e.center);return qs.radius=.7071067811865476+i,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(ou.x=l.normal.x>0?e.max.x:e.min.x,ou.y=l.normal.y>0?e.max.y:e.min.y,ou.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ou)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ty extends Wn{constructor(e=[],i=er,s,l,c,f,p,m,d,y){super(e,i,s,l,c,f,p,m,d,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GE extends Wn{constructor(e,i,s,l,c,f,p,m,d){super(e,i,s,l,c,f,p,m,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lo extends Wn{constructor(e,i,s=aa,l,c,f,p=Hn,m=Hn,d,y=Ia,x=1){if(y!==Ia&&y!==js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,f,p,m,y,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class VE extends lo{constructor(e,i=aa,s=er,l,c,f=Hn,p=Hn,m,d=Ia){const y={width:e,height:e,depth:1},x=[y,y,y,y,y,y];super(e,e,i,s,l,c,f,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ay extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ms extends xi{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],y=[],x=[];let g=0,M=0;T("z","y","x",-1,-1,s,i,e,f,c,0),T("z","y","x",1,-1,s,i,-e,f,c,1),T("x","z","y",1,1,e,s,i,l,f,2),T("x","z","y",1,-1,e,s,-i,l,f,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ln(d,3)),this.setAttribute("normal",new Ln(y,3)),this.setAttribute("uv",new Ln(x,2));function T(C,E,v,z,F,D,I,N,U,b,L){const X=D/U,k=I/b,Q=D/2,ue=I/2,ge=N/2,te=U+1,B=b+1;let G=0,Z=0;const he=new $;for(let Te=0;Te<B;Te++){const O=Te*k-ue;for(let j=0;j<te;j++){const W=j*X-Q;he[C]=W*z,he[E]=O*F,he[v]=ge,d.push(he.x,he.y,he.z),he[C]=0,he[E]=0,he[v]=N>0?1:-1,y.push(he.x,he.y,he.z),x.push(j/U),x.push(1-Te/b),G+=1}}for(let Te=0;Te<b;Te++)for(let O=0;O<U;O++){const j=g+O+te*Te,W=g+O+te*(Te+1),_e=g+(O+1)+te*(Te+1),Re=g+(O+1)+te*Te;m.push(j,W,Re),m.push(W,_e,Re),Z+=6}p.addGroup(M,Z,L),M+=Z,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wu extends xi{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const y=[],x=[],g=[],M=[];let T=0;const C=[],E=s/2;let v=0;z(),f===!1&&(e>0&&F(!0),i>0&&F(!1)),this.setIndex(y),this.setAttribute("position",new Ln(x,3)),this.setAttribute("normal",new Ln(g,3)),this.setAttribute("uv",new Ln(M,2));function z(){const D=new $,I=new $;let N=0;const U=(i-e)/s;for(let b=0;b<=c;b++){const L=[],X=b/c,k=X*(i-e)+e;for(let Q=0;Q<=l;Q++){const ue=Q/l,ge=ue*m+p,te=Math.sin(ge),B=Math.cos(ge);I.x=k*te,I.y=-X*s+E,I.z=k*B,x.push(I.x,I.y,I.z),D.set(te,U,B).normalize(),g.push(D.x,D.y,D.z),M.push(ue,1-X),L.push(T++)}C.push(L)}for(let b=0;b<l;b++)for(let L=0;L<c;L++){const X=C[L][b],k=C[L+1][b],Q=C[L+1][b+1],ue=C[L][b+1];(e>0||L!==0)&&(y.push(X,k,ue),N+=3),(i>0||L!==c-1)&&(y.push(k,Q,ue),N+=3)}d.addGroup(v,N,0),v+=N}function F(D){const I=T,N=new ot,U=new $;let b=0;const L=D===!0?e:i,X=D===!0?1:-1;for(let Q=1;Q<=l;Q++)x.push(0,E*X,0),g.push(0,X,0),M.push(.5,.5),T++;const k=T;for(let Q=0;Q<=l;Q++){const ge=Q/l*m+p,te=Math.cos(ge),B=Math.sin(ge);U.x=L*B,U.y=E*X,U.z=L*te,x.push(U.x,U.y,U.z),g.push(0,X,0),N.x=te*.5+.5,N.y=B*.5*X+.5,M.push(N.x,N.y),T++}for(let Q=0;Q<l;Q++){const ue=I+Q,ge=k+Q;D===!0?y.push(ge,ge+1,ue):y.push(ge+1,ge,ue),b+=3}d.addGroup(v,b,D===!0?1:2),v+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sl extends wu{constructor(e=1,i=1,s=32,l=1,c=!1,f=0,p=Math.PI*2){super(0,e,i,s,l,c,f,p),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:p}}static fromJSON(e){return new Sl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $s extends xi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,y=m+1,x=e/p,g=i/m,M=[],T=[],C=[],E=[];for(let v=0;v<y;v++){const z=v*g-f;for(let F=0;F<d;F++){const D=F*x-c;T.push(D,-z,0),C.push(0,0,1),E.push(F/p),E.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<p;z++){const F=z+d*v,D=z+d*(v+1),I=z+1+d*(v+1),N=z+1+d*v;M.push(F,D,N),M.push(D,I,N)}this.setIndex(M),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(C,3)),this.setAttribute("uv",new Ln(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xp extends xi{constructor(e=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],d=[],y=[];let x=e;const g=(i-e)/l,M=new $,T=new ot;for(let C=0;C<=l;C++){for(let E=0;E<=s;E++){const v=c+E/s*f;M.x=x*Math.cos(v),M.y=x*Math.sin(v),m.push(M.x,M.y,M.z),d.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,y.push(T.x,T.y)}x+=g}for(let C=0;C<l;C++){const E=C*(s+1);for(let v=0;v<s;v++){const z=v+E,F=z,D=z+s+1,I=z+s+2,N=z+1;p.push(F,D,N),p.push(D,I,N)}}this.setIndex(p),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(d,3)),this.setAttribute("uv",new Ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wp extends xi{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+p,Math.PI);let d=0;const y=[],x=new $,g=new $,M=[],T=[],C=[],E=[];for(let v=0;v<=s;v++){const z=[],F=v/s,D=f+F*p,I=e*Math.cos(D),N=Math.sqrt(e*e-I*I);let U=0;v===0&&f===0?U=.5/i:v===s&&m===Math.PI&&(U=-.5/i);for(let b=0;b<=i;b++){const L=b/i,X=l+L*c;x.x=-N*Math.cos(X),x.y=I,x.z=N*Math.sin(X),T.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),E.push(L+U,1-F),z.push(d++)}y.push(z)}for(let v=0;v<s;v++)for(let z=0;z<i;z++){const F=y[v][z+1],D=y[v][z],I=y[v+1][z],N=y[v+1][z+1];(v!==0||f>0)&&M.push(F,D,N),(v!==s-1||m<Math.PI)&&M.push(D,I,N)}this.setIndex(M),this.setAttribute("position",new Ln(T,3)),this.setAttribute("normal",new Ln(C,3)),this.setAttribute("uv",new Ln(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function co(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(pv(l))l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(pv(l[0])){const c=[];for(let f=0,p=l.length;f<p;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Zn(r){const e={};for(let i=0;i<r.length;i++){const s=co(r[i]);for(const l in s)e[l]=s[l]}return e}function pv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function kE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Ry(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const XE={clone:co,merge:Zn};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=YE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=kE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Rt().setHex(l.value);break;case"v2":this.uniforms[s].value=new ot().fromArray(l.value);break;case"v3":this.uniforms[s].value=new $().fromArray(l.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[s].value=new pt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new on().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qE extends sa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mv extends fo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hp,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZE extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KE extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cy extends Nn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class QE extends Cy{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const pd=new on,gv=new $,_v=new $;class JE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;gv.setFromMatrixPosition(e.matrixWorld),i.position.copy(gv),_v.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(_v),i.updateMatrixWorld(),pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===bl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lu=new $,cu=new xs,Qi=new $;class wy extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lu,cu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(lu,cu,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ms=new $,vv=new ot,yv=new ot;class Ui extends wy{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Tl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,i){return this.getViewBounds(e,vv,yv),i.subVectors(yv,vv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(vl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/d,l*=f.width/m,s*=f.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Yp extends wy{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=y*this.view.offsetY,m=p-y*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jE extends JE{constructor(){super(new Yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $E extends Cy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new jE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Qr=-90,Jr=1;class eb extends Nn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ui(Qr,Jr,e,i);l.layers=this.layers,this.add(l);const c=new Ui(Qr,Jr,e,i);c.layers=this.layers,this.add(c);const f=new Ui(Qr,Jr,e,i);f.layers=this.layers,this.add(f);const p=new Ui(Qr,Jr,e,i);p.layers=this.layers,this.add(p);const m=new Ui(Qr,Jr,e,i);m.layers=this.layers,this.add(m);const d=new Ui(Qr,Jr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(e===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,y]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),E&&e.autoClear===!1&&e.clearDepth(),e.render(i,y),e.setRenderTarget(x,g,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class tb extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const xv=new on;class nb{constructor(e,i,s=0,l=1/0){this.ray=new Vp(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ut("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return xv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xv),this}intersectObject(e,i=!0,s=[]){return mp(e,this,s,i),s.sort(Sv),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)mp(e[l],this,s,i);return s.sort(Sv),s}}function Sv(r,e){return r.distance-e.distance}function mp(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,p=c.length;f<p;f++)mp(c[f],e,i,!0)}}class Mv{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Et(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const $p=class $p{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};$p.prototype.isMatrix2=!0;let Ev=$p;class ib extends Es{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ut("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function bv(r,e,i,s){const l=ab(s);switch(i){case my:return r*e;case _y:return r*e/l.components*l.byteLength;case Np:return r*e/l.components*l.byteLength;case tr:return r*e*2/l.components*l.byteLength;case Lp:return r*e*2/l.components*l.byteLength;case gy:return r*e*3/l.components*l.byteLength;case Vi:return r*e*4/l.components*l.byteLength;case Op:return r*e*4/l.components*l.byteLength;case mu:case gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _u:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zd:case Fd:return Math.max(r,16)*Math.max(e,8)/4;case Id:case Bd:return Math.max(r,8)*Math.max(e,8)/2;case Hd:case Gd:case kd:case Xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vd:case xu:case Wd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case jd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ep:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case tp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case np:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ip:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ap:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case sp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rp:case op:case lp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case cp:case up:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Su:case fp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ab(r){switch(r){case yi:case fy:return{byteLength:1,components:1};case Ml:case hy:case Pa:return{byteLength:2,components:1};case Dp:case Up:return{byteLength:2,components:4};case aa:case wp:case ea:return{byteLength:4,components:1};case dy:case py:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dy(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function sb(r){const e=new WeakMap;function i(p,m){const d=p.array,y=p.usage,x=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,y),p.onUploadCallback();let M;if(d instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=r.SHORT;else if(d instanceof Uint32Array)M=r.UNSIGNED_INT;else if(d instanceof Int32Array)M=r.INT;else if(d instanceof Int8Array)M=r.BYTE;else if(d instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const y=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,y);else{x.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<x.length;M++){const T=x[g],C=x[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,x[g]=C)}x.length=g+1;for(let M=0,T=x.length;M<T;M++){const C=x[M];r.bufferSubData(d,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const y=e.get(p);(!y||y.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ob=`#ifdef USE_ALPHAHASH
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
#endif`,lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hb=`#ifdef USE_AOMAP
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
#endif`,db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pb=`#ifdef USE_BATCHING
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
#endif`,mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yb=`#ifdef USE_IRIDESCENCE
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
#endif`,xb=`#ifdef USE_BUMPMAP
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wb=`#define PI 3.141592653589793
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
} // validated`,Db=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ub=`vec3 transformedNormal = objectNormal;
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
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",zb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bb=`#ifdef USE_ENVMAP
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
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qb=`#ifdef USE_GRADIENTMAP
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
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jb=`#ifdef USE_ENVMAP
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
#endif`,$b=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i1=`PhysicalMaterial material;
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
#endif`,a1=`uniform sampler2D dfgLUT;
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
}`,s1=`
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
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
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,c1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g1=`#if defined( USE_POINTS_UV )
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
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
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
#endif`,E1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,D1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W1=`float getShadowMask() {
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
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eT=`#ifdef USE_TRANSMISSION
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
#endif`,tT=`#ifdef USE_TRANSMISSION
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oT=`uniform sampler2D t2D;
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`#include <common>
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
}`,dT=`#if DEPTH_PACKING == 3200
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
}`,pT=`#define DISTANCE
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
}`,mT=`#define DISTANCE
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
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
}`,yT=`uniform vec3 diffuse;
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
}`,xT=`#include <common>
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
}`,ST=`uniform vec3 diffuse;
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
}`,MT=`#define LAMBERT
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
}`,ET=`#define LAMBERT
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
}`,bT=`#define MATCAP
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
}`,TT=`#define MATCAP
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
}`,AT=`#define NORMAL
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
}`,RT=`#define NORMAL
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
}`,CT=`#define PHONG
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
}`,wT=`#define PHONG
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
}`,DT=`#define STANDARD
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
}`,UT=`#define STANDARD
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
}`,NT=`#define TOON
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
}`,LT=`#define TOON
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
}`,OT=`uniform float size;
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
}`,PT=`uniform vec3 diffuse;
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
}`,IT=`#include <common>
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
}`,zT=`uniform vec3 color;
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
}`,BT=`uniform float rotation;
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
}`,FT=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:rb,alphahash_pars_fragment:ob,alphamap_fragment:lb,alphamap_pars_fragment:cb,alphatest_fragment:ub,alphatest_pars_fragment:fb,aomap_fragment:hb,aomap_pars_fragment:db,batching_pars_vertex:pb,batching_vertex:mb,begin_vertex:gb,beginnormal_vertex:_b,bsdfs:vb,iridescence_fragment:yb,bumpmap_pars_fragment:xb,clipping_planes_fragment:Sb,clipping_planes_pars_fragment:Mb,clipping_planes_pars_vertex:Eb,clipping_planes_vertex:bb,color_fragment:Tb,color_pars_fragment:Ab,color_pars_vertex:Rb,color_vertex:Cb,common:wb,cube_uv_reflection_fragment:Db,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Nb,displacementmap_vertex:Lb,emissivemap_fragment:Ob,emissivemap_pars_fragment:Pb,colorspace_fragment:Ib,colorspace_pars_fragment:zb,envmap_fragment:Bb,envmap_common_pars_fragment:Fb,envmap_pars_fragment:Hb,envmap_pars_vertex:Gb,envmap_physical_pars_fragment:jb,envmap_vertex:Vb,fog_vertex:kb,fog_pars_vertex:Xb,fog_fragment:Wb,fog_pars_fragment:Yb,gradientmap_pars_fragment:qb,lightmap_pars_fragment:Zb,lights_lambert_fragment:Kb,lights_lambert_pars_fragment:Qb,lights_pars_begin:Jb,lights_toon_fragment:$b,lights_toon_pars_fragment:e1,lights_phong_fragment:t1,lights_phong_pars_fragment:n1,lights_physical_fragment:i1,lights_physical_pars_fragment:a1,lights_fragment_begin:s1,lights_fragment_maps:r1,lights_fragment_end:o1,lightprobes_pars_fragment:l1,logdepthbuf_fragment:c1,logdepthbuf_pars_fragment:u1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:h1,map_fragment:d1,map_pars_fragment:p1,map_particle_fragment:m1,map_particle_pars_fragment:g1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:v1,morphinstance_vertex:y1,morphcolor_vertex:x1,morphnormal_vertex:S1,morphtarget_pars_vertex:M1,morphtarget_vertex:E1,normal_fragment_begin:b1,normal_fragment_maps:T1,normal_pars_fragment:A1,normal_pars_vertex:R1,normal_vertex:C1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:D1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:N1,iridescence_pars_fragment:L1,opaque_fragment:O1,packing:P1,premultiplied_alpha_fragment:I1,project_vertex:z1,dithering_fragment:B1,dithering_pars_fragment:F1,roughnessmap_fragment:H1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:V1,shadowmap_pars_vertex:k1,shadowmap_vertex:X1,shadowmask_pars_fragment:W1,skinbase_vertex:Y1,skinning_pars_vertex:q1,skinning_vertex:Z1,skinnormal_vertex:K1,specularmap_fragment:Q1,specularmap_pars_fragment:J1,tonemapping_fragment:j1,tonemapping_pars_fragment:$1,transmission_fragment:eT,transmission_pars_fragment:tT,uv_pars_fragment:nT,uv_pars_vertex:iT,uv_vertex:aT,worldpos_vertex:sT,background_vert:rT,background_frag:oT,backgroundCube_vert:lT,backgroundCube_frag:cT,cube_vert:uT,cube_frag:fT,depth_vert:hT,depth_frag:dT,distance_vert:pT,distance_frag:mT,equirect_vert:gT,equirect_frag:_T,linedashed_vert:vT,linedashed_frag:yT,meshbasic_vert:xT,meshbasic_frag:ST,meshlambert_vert:MT,meshlambert_frag:ET,meshmatcap_vert:bT,meshmatcap_frag:TT,meshnormal_vert:AT,meshnormal_frag:RT,meshphong_vert:CT,meshphong_frag:wT,meshphysical_vert:DT,meshphysical_frag:UT,meshtoon_vert:NT,meshtoon_frag:LT,points_vert:OT,points_frag:PT,shadow_vert:IT,shadow_frag:zT,sprite_vert:BT,sprite_frag:FT},He={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ji={basic:{uniforms:Zn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Zn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Zn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Zn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Zn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Rt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Zn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Zn([He.points,He.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Zn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Zn([He.common,He.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Zn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Zn([He.sprite,He.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Zn([He.common,He.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Zn([He.lights,He.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ji.physical={uniforms:Zn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const uu={r:0,b:0,g:0},HT=new on,Uy=new pt;Uy.set(-1,0,0,0,1,0,0,0,1);function GT(r,e,i,s,l,c){const f=new Rt(0);let p=l===!0?0:1,m,d,y=null,x=0,g=null;function M(z){let F=z.isScene===!0?z.background:null;if(F&&F.isTexture){const D=z.backgroundBlurriness>0;F=e.get(F,D)}return F}function T(z){let F=!1;const D=M(z);D===null?E(f,p):D&&D.isColor&&(E(D,1),F=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(z,F){const D=M(F);D&&(D.isCubeTexture||D.mapping===Cu)?(d===void 0&&(d=new Mn(new Ms(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:co(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=D,d.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(HT.makeRotationFromEuler(F.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Uy),d.material.toneMapped=Nt.getTransfer(D.colorSpace)!==Xt,(y!==D||x!==D.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,y=D,x=D.version,g=r.toneMapping),d.layers.enableAll(),z.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Mn(new $s(2,2),new sa({name:"BackgroundMaterial",uniforms:co(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Nt.getTransfer(D.colorSpace)!==Xt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(y!==D||x!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,y=D,x=D.version,g=r.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function E(z,F){z.getRGB(uu,Ry(r)),i.buffers.color.setClear(uu.r,uu.g,uu.b,F,c)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(z,F=1){f.set(z),p=F,E(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,E(f,p)},render:T,addToRenderList:C,dispose:v}}function VT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function p(k,Q,ue,ge,te){let B=!1;const G=x(k,ge,ue,Q);c!==G&&(c=G,d(c.object)),B=M(k,ge,ue,te),B&&T(k,ge,ue,te),te!==null&&e.update(te,r.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,D(k,Q,ue,ge),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function m(){return r.createVertexArray()}function d(k){return r.bindVertexArray(k)}function y(k){return r.deleteVertexArray(k)}function x(k,Q,ue,ge){const te=ge.wireframe===!0;let B=s[Q.id];B===void 0&&(B={},s[Q.id]=B);const G=k.isInstancedMesh===!0?k.id:0;let Z=B[G];Z===void 0&&(Z={},B[G]=Z);let he=Z[ue.id];he===void 0&&(he={},Z[ue.id]=he);let Te=he[te];return Te===void 0&&(Te=g(m()),he[te]=Te),Te}function g(k){const Q=[],ue=[],ge=[];for(let te=0;te<i;te++)Q[te]=0,ue[te]=0,ge[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ue,attributeDivisors:ge,object:k,attributes:{},index:null}}function M(k,Q,ue,ge){const te=c.attributes,B=Q.attributes;let G=0;const Z=ue.getAttributes();for(const he in Z)if(Z[he].location>=0){const O=te[he];let j=B[he];if(j===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(j=k.instanceColor)),O===void 0||O.attribute!==j||j&&O.data!==j.data)return!0;G++}return c.attributesNum!==G||c.index!==ge}function T(k,Q,ue,ge){const te={},B=Q.attributes;let G=0;const Z=ue.getAttributes();for(const he in Z)if(Z[he].location>=0){let O=B[he];O===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const j={};j.attribute=O,O&&O.data&&(j.data=O.data),te[he]=j,G++}c.attributes=te,c.attributesNum=G,c.index=ge}function C(){const k=c.newAttributes;for(let Q=0,ue=k.length;Q<ue;Q++)k[Q]=0}function E(k){v(k,0)}function v(k,Q){const ue=c.newAttributes,ge=c.enabledAttributes,te=c.attributeDivisors;ue[k]=1,ge[k]===0&&(r.enableVertexAttribArray(k),ge[k]=1),te[k]!==Q&&(r.vertexAttribDivisor(k,Q),te[k]=Q)}function z(){const k=c.newAttributes,Q=c.enabledAttributes;for(let ue=0,ge=Q.length;ue<ge;ue++)Q[ue]!==k[ue]&&(r.disableVertexAttribArray(ue),Q[ue]=0)}function F(k,Q,ue,ge,te,B,G){G===!0?r.vertexAttribIPointer(k,Q,ue,te,B):r.vertexAttribPointer(k,Q,ue,ge,te,B)}function D(k,Q,ue,ge){C();const te=ge.attributes,B=ue.getAttributes(),G=Q.defaultAttributeValues;for(const Z in B){const he=B[Z];if(he.location>=0){let Te=te[Z];if(Te===void 0&&(Z==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),Z==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),Te!==void 0){const O=Te.normalized,j=Te.itemSize,W=e.get(Te);if(W===void 0)continue;const _e=W.buffer,Re=W.type,ne=W.bytesPerElement,ye=Re===r.INT||Re===r.UNSIGNED_INT||Te.gpuType===wp;if(Te.isInterleavedBufferAttribute){const Ee=Te.data,ke=Ee.stride,lt=Te.offset;if(Ee.isInstancedInterleavedBuffer){for(let tt=0;tt<he.locationSize;tt++)v(he.location+tt,Ee.meshPerAttribute);k.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let tt=0;tt<he.locationSize;tt++)E(he.location+tt);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let tt=0;tt<he.locationSize;tt++)F(he.location+tt,j/he.locationSize,Re,O,ke*ne,(lt+j/he.locationSize*tt)*ne,ye)}else{if(Te.isInstancedBufferAttribute){for(let Ee=0;Ee<he.locationSize;Ee++)v(he.location+Ee,Te.meshPerAttribute);k.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ee=0;Ee<he.locationSize;Ee++)E(he.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Ee=0;Ee<he.locationSize;Ee++)F(he.location+Ee,j/he.locationSize,Re,O,j*ne,j/he.locationSize*Ee*ne,ye)}}else if(G!==void 0){const O=G[Z];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(he.location,O);break;case 3:r.vertexAttrib3fv(he.location,O);break;case 4:r.vertexAttrib4fv(he.location,O);break;default:r.vertexAttrib1fv(he.location,O)}}}}z()}function I(){L();for(const k in s){const Q=s[k];for(const ue in Q){const ge=Q[ue];for(const te in ge){const B=ge[te];for(const G in B)y(B[G].object),delete B[G];delete ge[te]}}delete s[k]}}function N(k){if(s[k.id]===void 0)return;const Q=s[k.id];for(const ue in Q){const ge=Q[ue];for(const te in ge){const B=ge[te];for(const G in B)y(B[G].object),delete B[G];delete ge[te]}}delete s[k.id]}function U(k){for(const Q in s){const ue=s[Q];for(const ge in ue){const te=ue[ge];if(te[k.id]===void 0)continue;const B=te[k.id];for(const G in B)y(B[G].object),delete B[G];delete te[k.id]}}}function b(k){for(const Q in s){const ue=s[Q],ge=k.isInstancedMesh===!0?k.id:0,te=ue[ge];if(te!==void 0){for(const B in te){const G=te[B];for(const Z in G)y(G[Z].object),delete G[Z];delete te[B]}delete ue[ge],Object.keys(ue).length===0&&delete s[Q]}}}function L(){X(),f=!0,c!==l&&(c=l,d(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:X,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:b,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:E,disableUnusedAttributes:z}}function kT(r,e,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function f(m,d,y){y!==0&&(r.drawArraysInstanced(s,m,d,y),i.update(d,s,y))}function p(m,d,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,y);let g=0;for(let M=0;M<y;M++)g+=d[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p}function XT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(U){return!(U!==Vi&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(U){const b=U===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==yi&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ea&&!b)}function m(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const y=m(d);y!==d&&(ut("WebGLRenderer:",d,"not supported, using",y,"instead."),d=y);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),F=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:E,maxAttributes:v,maxVertexUniforms:z,maxVaryings:F,maxFragmentUniforms:D,maxSamples:I,samples:N}}function WT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new gs,p=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||l;return l=g,s=x.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=y(x,g,0)},this.setState=function(x,g,M){const T=x.clippingPlanes,C=x.clipIntersection,E=x.clipShadows,v=r.get(x);if(!l||T===null||T.length===0||c&&!E)c?y(null):d();else{const z=c?0:s,F=z*4;let D=v.clippingState||null;m.value=D,D=y(T,g,F,M);for(let I=0;I!==F;++I)D[I]=i[I];v.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function y(x,g,M,T){const C=x!==null?x.length:0;let E=null;if(C!==0){if(E=m.value,T!==!0||E===null){const v=M+C*4,z=g.matrixWorldInverse;p.getNormalMatrix(z),(E===null||E.length<v)&&(E=new Float32Array(v));for(let F=0,D=M;F!==C;++F,D+=4)f.copy(x[F]).applyMatrix4(z,p),f.normal.toArray(E,D),E[D+3]=f.constant}m.value=E,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,E}}const vs=4,Tv=[.125,.215,.35,.446,.526,.582],Ks=20,YT=256,hl=new Yp,Av=new Rt;let md=null,gd=0,_d=0,vd=!1;const qT=new $;class Rv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=qT}=c;md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,_d),this._renderer.xr.enabled=vd,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===er||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Pa,format:Vi,colorSpace:Mu,depthBuffer:!1},l=Cv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZT(c)),this._blurMaterial=QT(c,e,i),this._ggxMaterial=KT(c,e,i)}return l}_compileMaterial(e){const i=new Mn(new xi,e);this._renderer.compile(i,hl)}_sceneToCubeUV(e,i,s,l,c){const m=new Ui(90,1,i,s),d=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(Av),x.toneMapping=na,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Ms,new xl({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,E=C.material;let v=!1;const z=e.background;z?z.isColor&&(E.color.copy(z),e.background=null,v=!0):(E.color.copy(Av),v=!0);for(let F=0;F<6;F++){const D=F%3;D===0?(m.up.set(0,d[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+y[F],c.y,c.z)):D===1?(m.up.set(0,0,d[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+y[F],c.z)):(m.up.set(0,d[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+y[F]));const I=this._cubeSize;jr(l,D*I,F>2?I:0,I,I),x.setRenderTarget(l),v&&x.render(C,m),x.render(e,m)}x.toneMapping=M,x.autoClear=g,e.background=z}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===er||e.mapping===oo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;jr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,hl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,d=s/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-y*y),g=0+d*1.25,M=x*g,{_lodMax:T}=this,C=this._sizeLods[s],E=3*C*(s>T-vs?s-T+vs:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,jr(c,E,v,3*C,2*C),l.setRenderTarget(c),l.render(p,hl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,jr(e,E,v,3*C,2*C),l.setRenderTarget(e),l.render(p,hl)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const y=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ks-1),C=c/T,E=isFinite(c)?1+Math.floor(y*C):Ks;E>Ks&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ks}`);const v=[];let z=0;for(let U=0;U<Ks;++U){const b=U/C,L=Math.exp(-b*b/2);v.push(L),U===0?z+=L:U<E&&(z+=2*L)}for(let U=0;U<v.length;U++)v[U]=v[U]/z;g.envMap.value=e.texture,g.samples.value=E,g.weights.value=v,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:F}=this;g.dTheta.value=T,g.mipInt.value=F-s;const D=this._sizeLods[l],I=3*D*(l>F-vs?l-F+vs:0),N=4*(this._cubeSize-D);jr(i,I,N,3*D,2*D),m.setRenderTarget(i),m.render(x,hl)}}function ZT(r){const e=[],i=[],s=[];let l=r;const c=r-vs+1+Tv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let m=1/p;f>r-vs?m=Tv[f-r+vs-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),y=-d,x=1+d,g=[y,y,x,y,x,x,y,y,x,x,y,x],M=6,T=6,C=3,E=2,v=1,z=new Float32Array(C*T*M),F=new Float32Array(E*T*M),D=new Float32Array(v*T*M);for(let N=0;N<M;N++){const U=N%3*2/3-1,b=N>2?0:-1,L=[U,b,0,U+2/3,b,0,U+2/3,b+1,0,U,b,0,U+2/3,b+1,0,U,b+1,0];z.set(L,C*T*N),F.set(g,E*T*N);const X=[N,N,N,N,N,N];D.set(X,v*T*N)}const I=new xi;I.setAttribute("position",new ki(z,C)),I.setAttribute("uv",new ki(F,E)),I.setAttribute("faceIndex",new ki(D,v)),s.push(new Mn(I,null)),l>vs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Cv(r,e,i){const s=new ia(r,e,i);return s.texture.mapping=Cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function jr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function KT(r,e,i){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function QT(r,e,i){const s=new Float32Array(Ks),l=new $(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function wv(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Dv(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

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
	`}class Ny extends ia{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Ty(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ms(5,5,5),c=new sa({name:"CubemapFromEquirect",uniforms:co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:si,blending:Na});c.uniforms.tEquirect.value=i;const f=new Mn(l,c),p=i.minFilter;return i.minFilter===Js&&(i.minFilter=Un),new eb(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function JT(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Vh||M===kh)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new Ny(T.height);return C.fromEquirectangularTexture(r,g),e.set(g,C),g.addEventListener("dispose",d),p(C.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,T=M===Vh||M===kh,C=M===er||M===oo;if(T||C){let E=i.get(g);const v=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new Rv(r)),E=T?s.fromEquirectangular(g,E):s.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),E.texture;if(E!==void 0)return E.texture;{const z=g.image;return T&&z&&z.height>0||C&&z&&m(z)?(s===null&&(s=new Rv(r)),E=T?s.fromEquirectangular(g):s.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,i.set(g,E),g.addEventListener("dispose",y),E.texture):null}}}return g}function p(g,M){return M===Vh?g.mapping=er:M===kh&&(g.mapping=oo),g}function m(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function d(g){const M=g.target;M.removeEventListener("dispose",d);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function y(g){const M=g.target;M.removeEventListener("dispose",y);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function jT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&io("WebGLRenderer: "+s+" extension not supported."),l}}}function $T(r,e,i,s){const l={},c=new WeakMap;function f(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function d(x){const g=[],M=x.index,T=x.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const z=M.array;C=M.version;for(let F=0,D=z.length;F<D;F+=3){const I=z[F+0],N=z[F+1],U=z[F+2];g.push(I,N,N,U,U,I)}}else{const z=T.array;C=T.version;for(let F=0,D=z.length/3-1;F<D;F+=3){const I=F+0,N=F+1,U=F+2;g.push(I,N,N,U,U,I)}}const E=new(T.count>=65535?My:Sy)(g,1);E.version=C;const v=c.get(x);v&&e.remove(v),c.set(x,E)}function y(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:y}}function eA(r,e,i){let s;function l(x){s=x}let c,f;function p(x){c=x.type,f=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*f),i.update(g,s,1)}function d(x,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,x*f,M),i.update(g,s,M))}function y(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,M);let C=0;for(let E=0;E<M;E++)C+=g[E];i.update(C,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=y}function tA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ut("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function nA(r,e,i){const s=new WeakMap,l=new ln;function c(f,p,m){const d=f.morphTargetInfluences,y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=y!==void 0?y.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let X=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",X)};var M=X;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,E=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let D=0;T===!0&&(D=1),C===!0&&(D=2),E===!0&&(D=3);let I=p.attributes.position.count*D,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const U=new Float32Array(I*N*4*x),b=new yy(U,I,N,x);b.type=ea,b.needsUpdate=!0;const L=D*4;for(let k=0;k<x;k++){const Q=v[k],ue=z[k],ge=F[k],te=I*N*4*k;for(let B=0;B<Q.count;B++){const G=B*L;T===!0&&(l.fromBufferAttribute(Q,B),U[te+G+0]=l.x,U[te+G+1]=l.y,U[te+G+2]=l.z,U[te+G+3]=0),C===!0&&(l.fromBufferAttribute(ue,B),U[te+G+4]=l.x,U[te+G+5]=l.y,U[te+G+6]=l.z,U[te+G+7]=0),E===!0&&(l.fromBufferAttribute(ge,B),U[te+G+8]=l.x,U[te+G+9]=l.y,U[te+G+10]=l.z,U[te+G+11]=ge.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new ot(I,N)},s.set(p,g),p.addEventListener("dispose",X)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let E=0;E<d.length;E++)T+=d[E];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function iA(r,e,i,s,l){let c=new WeakMap;function f(d){const y=l.render.frame,x=d.geometry,g=e.get(d,x);if(c.get(g)!==y&&(e.update(g),c.set(g,y)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==y&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,y))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==y&&(M.update(),c.set(M,y))}return g}function p(){c=new WeakMap}function m(d){const y=d.target;y.removeEventListener("dispose",m),s.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:f,dispose:p}}const aA={[ay]:"LINEAR_TONE_MAPPING",[sy]:"REINHARD_TONE_MAPPING",[ry]:"CINEON_TONE_MAPPING",[Cp]:"ACES_FILMIC_TONE_MAPPING",[ly]:"AGX_TONE_MAPPING",[cy]:"NEUTRAL_TONE_MAPPING",[oy]:"CUSTOM_TONE_MAPPING"};function sA(r,e,i,s,l,c){const f=new ia(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new lo(e,i):void 0}),p=new ia(e,i,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),m=new xi;m.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const d=new qE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new Mn(m,d),x=new Yp(-1,1,1,-1,0,1);let g=null,M=null,T=!1,C,E=null,v=[],z=!1;this.setSize=function(F,D){f.setSize(F,D),p.setSize(F,D);for(let I=0;I<v.length;I++){const N=v[I];N.setSize&&N.setSize(F,D)}},this.setEffects=function(F){v=F,z=v.length>0&&v[0].isRenderPass===!0;const D=f.width,I=f.height;for(let N=0;N<v.length;N++){const U=v[N];U.setSize&&U.setSize(D,I)}},this.begin=function(F,D){if(T||F.toneMapping===na&&v.length===0)return!1;if(E=D,D!==null){const I=D.width,N=D.height;(f.width!==I||f.height!==N)&&this.setSize(I,N)}return z===!1&&F.setRenderTarget(f),C=F.toneMapping,F.toneMapping=na,!0},this.hasRenderPass=function(){return z},this.end=function(F,D){F.toneMapping=C,T=!0;let I=f,N=p;for(let U=0;U<v.length;U++){const b=v[U];if(b.enabled!==!1&&(b.render(F,N,I,D),b.needsSwap!==!1)){const L=I;I=N,N=L}}if(g!==F.outputColorSpace||M!==F.toneMapping){g=F.outputColorSpace,M=F.toneMapping,d.defines={},Nt.getTransfer(g)===Xt&&(d.defines.SRGB_TRANSFER="");const U=aA[M];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,F.setRenderTarget(E),F.render(y,x),E=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Ly=new Wn,gp=new lo(1,1),Oy=new yy,Py=new SE,Iy=new Ty,Uv=[],Nv=[],Lv=new Float32Array(16),Ov=new Float32Array(9),Pv=new Float32Array(4);function ho(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Uv[l];if(c===void 0&&(c=new Float32Array(l),Uv[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function Rn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Cn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Uu(r,e){let i=Nv[e];i===void 0&&(i=new Int32Array(e),Nv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function rA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function oA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2fv(this.addr,e),Cn(i,e)}}function lA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Rn(i,e))return;r.uniform3fv(this.addr,e),Cn(i,e)}}function cA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4fv(this.addr,e),Cn(i,e)}}function uA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Pv.set(s),r.uniformMatrix2fv(this.addr,!1,Pv),Cn(i,s)}}function fA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Ov.set(s),r.uniformMatrix3fv(this.addr,!1,Ov),Cn(i,s)}}function hA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Rn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Cn(i,e)}else{if(Rn(i,s))return;Lv.set(s),r.uniformMatrix4fv(this.addr,!1,Lv),Cn(i,s)}}function dA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function pA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2iv(this.addr,e),Cn(i,e)}}function mA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;r.uniform3iv(this.addr,e),Cn(i,e)}}function gA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4iv(this.addr,e),Cn(i,e)}}function _A(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function vA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;r.uniform2uiv(this.addr,e),Cn(i,e)}}function yA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;r.uniform3uiv(this.addr,e),Cn(i,e)}}function xA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;r.uniform4uiv(this.addr,e),Cn(i,e)}}function SA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(gp.compareFunction=i.isReversedDepthBuffer()?Ip:Pp,c=gp):c=Ly,i.setTexture2D(e||c,l)}function MA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Py,l)}function EA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Iy,l)}function bA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Oy,l)}function TA(r){switch(r){case 5126:return rA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return hA;case 5124:case 35670:return dA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return _A;case 36294:return vA;case 36295:return yA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return bA}}function AA(r,e){r.uniform1fv(this.addr,e)}function RA(r,e){const i=ho(e,this.size,2);r.uniform2fv(this.addr,i)}function CA(r,e){const i=ho(e,this.size,3);r.uniform3fv(this.addr,i)}function wA(r,e){const i=ho(e,this.size,4);r.uniform4fv(this.addr,i)}function DA(r,e){const i=ho(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function UA(r,e){const i=ho(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function NA(r,e){const i=ho(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function LA(r,e){r.uniform1iv(this.addr,e)}function OA(r,e){r.uniform2iv(this.addr,e)}function PA(r,e){r.uniform3iv(this.addr,e)}function IA(r,e){r.uniform4iv(this.addr,e)}function zA(r,e){r.uniform1uiv(this.addr,e)}function BA(r,e){r.uniform2uiv(this.addr,e)}function FA(r,e){r.uniform3uiv(this.addr,e)}function HA(r,e){r.uniform4uiv(this.addr,e)}function GA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=gp:f=Ly;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function VA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Py,c[f])}function kA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Iy,c[f])}function XA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Rn(s,c)||(r.uniform1iv(this.addr,c),Cn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Oy,c[f])}function WA(r){switch(r){case 5126:return AA;case 35664:return RA;case 35665:return CA;case 35666:return wA;case 35674:return DA;case 35675:return UA;case 35676:return NA;case 5124:case 35670:return LA;case 35667:case 35671:return OA;case 35668:case 35672:return PA;case 35669:case 35673:return IA;case 5125:return zA;case 36294:return BA;case 36295:return FA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return VA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return XA}}class YA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=TA(i.type)}}class qA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=WA(i.type)}}class ZA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function Iv(r,e){r.seq.push(e),r.map[e.id]=e}function KA(r,e,i){const s=r.name,l=s.length;for(yd.lastIndex=0;;){const c=yd.exec(s),f=yd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){Iv(i,d===void 0?new YA(p,r,e):new qA(p,r,e));break}else{let x=i.map[p];x===void 0&&(x=new ZA(p),Iv(i,x)),i=x}}}class yu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),m=e.getUniformLocation(i,p.name);KA(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function zv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const QA=37297;let JA=0;function jA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const Bv=new pt;function $A(r){Nt._getMatrix(Bv,Nt.workingColorSpace,r);const e=`mat3( ${Bv.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(r)){case Eu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Fv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+jA(r.getShaderSource(e),p)}else return c}function e2(r,e){const i=$A(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const t2={[ay]:"Linear",[sy]:"Reinhard",[ry]:"Cineon",[Cp]:"ACESFilmic",[ly]:"AgX",[cy]:"Neutral",[oy]:"Custom"};function n2(r,e){const i=t2[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const fu=new $;function i2(){Nt.getLuminanceCoefficients(fu);const r=fu.x.toFixed(4),e=fu.y.toFixed(4),i=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function s2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function r2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function gl(r){return r!==""}function Hv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o2=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(r){return r.replace(o2,c2)}const l2=new Map;function c2(r,e){let i=xt[e];if(i===void 0){const s=l2.get(e);if(s!==void 0)i=xt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _p(i)}const u2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vv(r){return r.replace(u2,f2)}function f2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function kv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const h2={[_l]:"SHADOWMAP_TYPE_PCF",[ml]:"SHADOWMAP_TYPE_VSM"};function d2(r){return h2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p2={[er]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function m2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":p2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const g2={[oo]:"ENVMAP_MODE_REFRACTION"};function _2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":g2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const v2={[iy]:"ENVMAP_BLENDING_MULTIPLY",[FM]:"ENVMAP_BLENDING_MIX",[HM]:"ENVMAP_BLENDING_ADD"};function y2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":v2[r.combine]||"ENVMAP_BLENDING_NONE"}function x2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function S2(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=d2(i),d=m2(i),y=_2(i),x=y2(i),g=x2(i),M=a2(i),T=s2(c),C=l.createProgram();let E,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(E=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(gl).join(`
`),E.length>0&&(E+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(gl).join(`
`),v.length>0&&(v+=`
`)):(E=[kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),v=[kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+y:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==na?"#define TONE_MAPPING":"",i.toneMapping!==na?xt.tonemapping_pars_fragment:"",i.toneMapping!==na?n2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,e2("linearToOutputTexel",i.outputColorSpace),i2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(gl).join(`
`)),f=_p(f),f=Hv(f,i),f=Gv(f,i),p=_p(p),p=Hv(p,i),p=Gv(p,i),f=Vv(f),p=Vv(p),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,E=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,v=["#define varying in",i.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const F=z+E+f,D=z+v+p,I=zv(l,l.VERTEX_SHADER,F),N=zv(l,l.FRAGMENT_SHADER,D);l.attachShader(C,I),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function U(k){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",ue=l.getShaderInfoLog(I)||"",ge=l.getShaderInfoLog(N)||"",te=Q.trim(),B=ue.trim(),G=ge.trim();let Z=!0,he=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,I,N);else{const Te=Fv(l,I,"vertex"),O=Fv(l,N,"fragment");Ut("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+te+`
`+Te+`
`+O)}else te!==""?ut("WebGLProgram: Program Info Log:",te):(B===""||G==="")&&(he=!1);he&&(k.diagnostics={runnable:Z,programLog:te,vertexShader:{log:B,prefix:E},fragmentShader:{log:G,prefix:v}})}l.deleteShader(I),l.deleteShader(N),b=new yu(l,C),L=r2(l,C)}let b;this.getUniforms=function(){return b===void 0&&U(this),b};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(C,QA)),X},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=N,this}let M2=0;class E2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new b2(e),i.set(e,s)),s}}class b2{constructor(e){this.id=M2++,this.code=e,this.usedTimes=0}}function T2(r){return r===tr||r===xu||r===Su}function A2(r,e,i,s,l,c){const f=new Fp,p=new E2,m=new Set,d=[],y=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,L,X,k,Q,ue){const ge=k.fog,te=Q.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,G=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,Z=e.get(b.envMap||B,G),he=Z&&Z.mapping===Cu?Z.image.height:null,Te=M[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&ut("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const O=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,j=O!==void 0?O.length:0;let W=0;te.morphAttributes.position!==void 0&&(W=1),te.morphAttributes.normal!==void 0&&(W=2),te.morphAttributes.color!==void 0&&(W=3);let _e,Re,ne,ye;if(Te){const Ze=ji[Te];_e=Ze.vertexShader,Re=Ze.fragmentShader}else{_e=b.vertexShader,Re=b.fragmentShader;const Ze=p.getVertexShaderStage(b),nn=p.getFragmentShaderStage(b);p.update(b,Ze,nn),ne=Ze.id,ye=nn.id}const Ee=r.getRenderTarget(),ke=r.state.buffers.depth.getReversed(),lt=Q.isInstancedMesh===!0,tt=Q.isBatchedMesh===!0,Yt=!!b.map,ht=!!b.matcap,St=!!Z,Mt=!!b.aoMap,yt=!!b.lightMap,$t=!!b.bumpMap&&b.wireframe===!1,Se=!!b.normalMap,we=!!b.displacementMap,De=!!b.emissiveMap,Ve=!!b.metalnessMap,Ye=!!b.roughnessMap,H=b.anisotropy>0,Qe=b.clearcoat>0,ze=b.dispersion>0,w=b.iridescence>0,S=b.sheen>0,K=b.transmission>0,ie=H&&!!b.anisotropyMap,de=Qe&&!!b.clearcoatMap,Ce=Qe&&!!b.clearcoatNormalMap,Ne=Qe&&!!b.clearcoatRoughnessMap,pe=w&&!!b.iridescenceMap,me=w&&!!b.iridescenceThicknessMap,Le=S&&!!b.sheenColorMap,Xe=S&&!!b.sheenRoughnessMap,Be=!!b.specularMap,Pe=!!b.specularColorMap,it=!!b.specularIntensityMap,at=K&&!!b.transmissionMap,ft=K&&!!b.thicknessMap,q=!!b.gradientMap,Ue=!!b.alphaMap,xe=b.alphaTest>0,Oe=!!b.alphaHash,Ge=!!b.extensions;let Ae=na;b.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const $e={shaderID:Te,shaderType:b.type,shaderName:b.name,vertexShader:_e,fragmentShader:Re,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:tt,batchingColor:tt&&Q._colorsTexture!==null,instancing:lt,instancingColor:lt&&Q.instanceColor!==null,instancingMorph:lt&&Q.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Yt,matcap:ht,envMap:St,envMapMode:St&&Z.mapping,envMapCubeUVHeight:he,aoMap:Mt,lightMap:yt,bumpMap:$t,normalMap:Se,displacementMap:we,emissiveMap:De,normalMapObjectSpace:Se&&b.normalMapType===kM,normalMapTangentSpace:Se&&b.normalMapType===hp,packedNormalMap:Se&&b.normalMapType===hp&&T2(b.normalMap.format),metalnessMap:Ve,roughnessMap:Ye,anisotropy:H,anisotropyMap:ie,clearcoat:Qe,clearcoatMap:de,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ne,dispersion:ze,iridescence:w,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:S,sheenColorMap:Le,sheenRoughnessMap:Xe,specularMap:Be,specularColorMap:Pe,specularIntensityMap:it,transmission:K,transmissionMap:at,thicknessMap:ft,gradientMap:q,opaque:b.transparent===!1&&b.blending===no&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:Oe,combine:b.combine,mapUv:Yt&&T(b.map.channel),aoMapUv:Mt&&T(b.aoMap.channel),lightMapUv:yt&&T(b.lightMap.channel),bumpMapUv:$t&&T(b.bumpMap.channel),normalMapUv:Se&&T(b.normalMap.channel),displacementMapUv:we&&T(b.displacementMap.channel),emissiveMapUv:De&&T(b.emissiveMap.channel),metalnessMapUv:Ve&&T(b.metalnessMap.channel),roughnessMapUv:Ye&&T(b.roughnessMap.channel),anisotropyMapUv:ie&&T(b.anisotropyMap.channel),clearcoatMapUv:de&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&T(b.sheenRoughnessMap.channel),specularMapUv:Be&&T(b.specularMap.channel),specularColorMapUv:Pe&&T(b.specularColorMap.channel),specularIntensityMapUv:it&&T(b.specularIntensityMap.channel),transmissionMapUv:at&&T(b.transmissionMap.channel),thicknessMapUv:ft&&T(b.thicknessMap.channel),alphaMapUv:Ue&&T(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Se||H),vertexNormals:!!te.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!te.attributes.uv&&(Yt||Ue),fog:!!ge,useFog:b.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||te.attributes.normal===void 0&&Se===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ke,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:W,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Yt&&b.map.isVideoTexture===!0&&Nt.getTransfer(b.map.colorSpace)===Xt,decodeVideoTextureEmissive:De&&b.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(b.emissiveMap.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$i,flipSided:b.side===si,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=m.has(1),$e.vertexUv2s=m.has(2),$e.vertexUv3s=m.has(3),m.clear(),$e}function E(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const X in b.defines)L.push(X),L.push(b.defines[X]);return b.isRawShaderMaterial===!1&&(v(L,b),z(L,b),L.push(r.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function v(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function z(b,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),L.packedNormalMap&&f.enable(22),L.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),L.numLightProbeGrids>0&&f.enable(22),L.hasPositionAttribute&&f.enable(23),b.push(f.mask)}function F(b){const L=M[b.type];let X;if(L){const k=ji[L];X=XE.clone(k.uniforms)}else X=b.uniforms;return X}function D(b,L){let X=y.get(L);return X!==void 0?++X.usedTimes:(X=new S2(r,L,b,l),d.push(X),y.set(L,X)),X}function I(b){if(--b.usedTimes===0){const L=d.indexOf(b);d[L]=d[d.length-1],d.pop(),y.delete(b.cacheKey),b.destroy()}}function N(b){p.remove(b)}function U(){p.dispose()}return{getParameters:C,getProgramCacheKey:E,getUniforms:F,acquireProgram:D,releaseProgram:I,releaseShaderCache:N,programs:d,dispose:U}}function R2(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function C2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Xv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,T,C,E,v){let z=r[e];return z===void 0?(z={id:g.id,object:g,geometry:M,material:T,materialVariant:f(g),groupOrder:C,renderOrder:g.renderOrder,z:E,group:v},r[e]=z):(z.id=g.id,z.object=g,z.geometry=M,z.material=T,z.materialVariant=f(g),z.groupOrder=C,z.renderOrder=g.renderOrder,z.z=E,z.group=v),e++,z}function m(g,M,T,C,E,v){const z=p(g,M,T,C,E,v);T.transmission>0?s.push(z):T.transparent===!0?l.push(z):i.push(z)}function d(g,M,T,C,E,v){const z=p(g,M,T,C,E,v);T.transmission>0?s.unshift(z):T.transparent===!0?l.unshift(z):i.unshift(z)}function y(g,M,T){i.length>1&&i.sort(g||C2),s.length>1&&s.sort(M||Xv),l.length>1&&l.sort(M||Xv),T&&(i.reverse(),s.reverse(),l.reverse())}function x(){for(let g=e,M=r.length;g<M;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:y}}function w2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new Wv,r.set(s,[f])):l>=c.length?(f=new Wv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function D2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Rt};break;case"SpotLight":i={position:new $,direction:new $,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":i={color:new Rt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=i,i}}}function U2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let N2=0;function L2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function O2(r){const e=new D2,i=U2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new $);const l=new $,c=new on,f=new on;function p(d){let y=0,x=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,T=0,C=0,E=0,v=0,z=0,F=0,D=0,I=0,N=0,U=0;d.sort(L2);for(let L=0,X=d.length;L<X;L++){const k=d[L],Q=k.color,ue=k.intensity,ge=k.distance;let te=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===tr?te=k.shadow.map.texture:te=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)y+=Q.r*ue,x+=Q.g*ue,g+=Q.b*ue;else if(k.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(k.sh.coefficients[B],ue);U++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const G=k.shadow,Z=i.get(k);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=te,s.directionalShadowMatrix[M]=k.shadow.matrix,z++}s.directional[M]=B,M++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(Q).multiplyScalar(ue),B.distance=ge,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,s.spot[C]=B;const G=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,G.updateMatrices(k),k.castShadow&&N++),s.spotLightMatrix[C]=G.matrix,k.castShadow){const Z=i.get(k);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,s.spotShadow[C]=Z,s.spotShadowMap[C]=te,D++}C++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(Q).multiplyScalar(ue),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),s.rectArea[E]=B,E++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const G=k.shadow,Z=i.get(k);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,s.pointShadow[T]=Z,s.pointShadowMap[T]=te,s.pointShadowMatrix[T]=k.shadow.matrix,F++}s.point[T]=B,T++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(ue),B.groundColor.copy(k.groundColor).multiplyScalar(ue),s.hemi[v]=B,v++}}E>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==E||b.hemiLength!==v||b.numDirectionalShadows!==z||b.numPointShadows!==F||b.numSpotShadows!==D||b.numSpotMaps!==I||b.numLightProbes!==U)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=E,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=D+I-N,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=U,b.directionalLength=M,b.pointLength=T,b.spotLength=C,b.rectAreaLength=E,b.hemiLength=v,b.numDirectionalShadows=z,b.numPointShadows=F,b.numSpotShadows=D,b.numSpotMaps=I,b.numLightProbes=U,s.version=N2++)}function m(d,y){let x=0,g=0,M=0,T=0,C=0;const E=y.matrixWorldInverse;for(let v=0,z=d.length;v<z;v++){const F=d[v];if(F.isDirectionalLight){const D=s.directional[x];D.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(E),x++}else if(F.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(F.matrixWorld),D.position.applyMatrix4(E),D.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(E),M++}else if(F.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(F.matrixWorld),D.position.applyMatrix4(E),f.identity(),c.copy(F.matrixWorld),c.premultiply(E),f.extractRotation(c),D.halfWidth.set(F.width*.5,0,0),D.halfHeight.set(0,F.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),T++}else if(F.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(F.matrixWorld),D.position.applyMatrix4(E),g++}else if(F.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(F.matrixWorld),D.direction.transformDirection(E),C++}}}return{setup:p,setupView:m,state:s}}function Yv(r){const e=new O2(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function y(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:y,pushLight:f,pushShadow:p,pushLightProbeGrid:m}}function P2(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new Yv(r),e.set(l,[p])):c>=f.length?(p=new Yv(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const I2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z2=`uniform sampler2D shadow_pass;
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
}`,B2=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],F2=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],qv=new on,dl=new $,xd=new $;function H2(r,e,i){let s=new kp;const l=new ot,c=new ot,f=new ln,p=new ZE,m=new KE,d={},y=i.maxTextureSize,x={[ys]:si,[si]:ys,[$i]:$i},g=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:I2,fragmentShader:z2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new xi;T.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Mn(T,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let v=this.type;this.render=function(N,U,b){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||N.length===0)return;this.type===xM&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_l);const L=r.getRenderTarget(),X=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Na),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ue=v!==this.type;ue&&U.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach(te=>te.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,te=N.length;ge<te;ge++){const B=N[ge],G=B.shadow;if(G===void 0){ut("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const Z=G.getFrameExtents();l.multiply(Z),c.copy(G.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/Z.x),l.x=c.x*Z.x,G.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/Z.y),l.y=c.y*Z.y,G.mapSize.y=c.y));const he=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=he,G.map===null||ue===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ml){if(B.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ia(l.x,l.y,{format:tr,type:Pa,minFilter:Un,magFilter:Un,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new lo(l.x,l.y,ea),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ia,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Hn,G.map.depthTexture.magFilter=Hn}else B.isPointLight?(G.map=new Ny(l.x),G.map.depthTexture=new VE(l.x,aa)):(G.map=new ia(l.x,l.y),G.map.depthTexture=new lo(l.x,l.y,aa)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ia,this.type===_l?(G.map.depthTexture.compareFunction=he?Ip:Pp,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Hn,G.map.depthTexture.magFilter=Hn);G.camera.updateProjectionMatrix()}const Te=G.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Te;O++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,O),r.clear();else{O===0&&(r.setRenderTarget(G.map),r.clear());const j=G.getViewport(O);f.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),Q.viewport(f)}if(B.isPointLight){const j=G.camera,W=G.matrix,_e=B.distance||j.far;_e!==j.far&&(j.far=_e,j.updateProjectionMatrix()),dl.setFromMatrixPosition(B.matrixWorld),j.position.copy(dl),xd.copy(j.position),xd.add(B2[O]),j.up.copy(F2[O]),j.lookAt(xd),j.updateMatrixWorld(),W.makeTranslation(-dl.x,-dl.y,-dl.z),qv.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix(qv,j.coordinateSystem,j.reversedDepth)}else G.updateMatrices(B);s=G.getFrustum(),D(U,b,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===ml&&z(G,b),G.needsUpdate=!1}v=this.type,E.needsUpdate=!1,r.setRenderTarget(L,X,k)};function z(N,U){const b=e.update(C);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ia(l.x,l.y,{format:tr,type:Pa})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(U,null,b,g,C,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(U,null,b,M,C,null)}function F(N,U,b,L){let X=null;const k=b.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)X=k;else if(X=b.isPointLight===!0?m:p,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Q=X.uuid,ue=U.uuid;let ge=d[Q];ge===void 0&&(ge={},d[Q]=ge);let te=ge[ue];te===void 0&&(te=X.clone(),ge[ue]=te,U.addEventListener("dispose",I)),X=te}if(X.visible=U.visible,X.wireframe=U.wireframe,L===ml?X.side=U.shadowSide!==null?U.shadowSide:U.side:X.side=U.shadowSide!==null?U.shadowSide:x[U.side],X.alphaMap=U.alphaMap,X.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,X.map=U.map,X.clipShadows=U.clipShadows,X.clippingPlanes=U.clippingPlanes,X.clipIntersection=U.clipIntersection,X.displacementMap=U.displacementMap,X.displacementScale=U.displacementScale,X.displacementBias=U.displacementBias,X.wireframeLinewidth=U.wireframeLinewidth,X.linewidth=U.linewidth,b.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Q=r.properties.get(X);Q.light=b}return X}function D(N,U,b,L,X){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&X===ml)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,N.matrixWorld);const ue=e.update(N),ge=N.material;if(Array.isArray(ge)){const te=ue.groups;for(let B=0,G=te.length;B<G;B++){const Z=te[B],he=ge[Z.materialIndex];if(he&&he.visible){const Te=F(N,he,L,X);N.onBeforeShadow(r,N,U,b,ue,Te,Z),r.renderBufferDirect(b,null,ue,Te,N,Z),N.onAfterShadow(r,N,U,b,ue,Te,Z)}}}else if(ge.visible){const te=F(N,ge,L,X);N.onBeforeShadow(r,N,U,b,ue,te,null),r.renderBufferDirect(b,null,ue,te,N,null),N.onAfterShadow(r,N,U,b,ue,te,null)}}const Q=N.children;for(let ue=0,ge=Q.length;ue<ge;ue++)D(Q[ue],U,b,L,X)}function I(N){N.target.removeEventListener("dispose",I);for(const b in d){const L=d[b],X=N.target.uuid;X in L&&(L[X].dispose(),delete L[X])}}}function G2(r,e){function i(){let q=!1;const Ue=new ln;let xe=null;const Oe=new ln(0,0,0,0);return{setMask:function(Ge){xe!==Ge&&!q&&(r.colorMask(Ge,Ge,Ge,Ge),xe=Ge)},setLocked:function(Ge){q=Ge},setClear:function(Ge,Ae,$e,Ze,nn){nn===!0&&(Ge*=Ze,Ae*=Ze,$e*=Ze),Ue.set(Ge,Ae,$e,Ze),Oe.equals(Ue)===!1&&(r.clearColor(Ge,Ae,$e,Ze),Oe.copy(Ue))},reset:function(){q=!1,xe=null,Oe.set(-1,0,0,0)}}}function s(){let q=!1,Ue=!1,xe=null,Oe=null,Ge=null;return{setReversed:function(Ae){if(Ue!==Ae){const $e=e.get("EXT_clip_control");Ae?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ae;const Ze=Ge;Ge=null,this.setClear(Ze)}},getReversed:function(){return Ue},setTest:function(Ae){Ae?Ee(r.DEPTH_TEST):ke(r.DEPTH_TEST)},setMask:function(Ae){xe!==Ae&&!q&&(r.depthMask(Ae),xe=Ae)},setFunc:function(Ae){if(Ue&&(Ae=$M[Ae]),Oe!==Ae){switch(Ae){case Rd:r.depthFunc(r.NEVER);break;case Cd:r.depthFunc(r.ALWAYS);break;case wd:r.depthFunc(r.LESS);break;case ro:r.depthFunc(r.LEQUAL);break;case Dd:r.depthFunc(r.EQUAL);break;case Ud:r.depthFunc(r.GEQUAL);break;case Nd:r.depthFunc(r.GREATER);break;case Ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=Ae}},setLocked:function(Ae){q=Ae},setClear:function(Ae){Ge!==Ae&&(Ge=Ae,Ue&&(Ae=1-Ae),r.clearDepth(Ae))},reset:function(){q=!1,xe=null,Oe=null,Ge=null,Ue=!1}}}function l(){let q=!1,Ue=null,xe=null,Oe=null,Ge=null,Ae=null,$e=null,Ze=null,nn=null;return{setTest:function(Bt){q||(Bt?Ee(r.STENCIL_TEST):ke(r.STENCIL_TEST))},setMask:function(Bt){Ue!==Bt&&!q&&(r.stencilMask(Bt),Ue=Bt)},setFunc:function(Bt,ri,oi){(xe!==Bt||Oe!==ri||Ge!==oi)&&(r.stencilFunc(Bt,ri,oi),xe=Bt,Oe=ri,Ge=oi)},setOp:function(Bt,ri,oi){(Ae!==Bt||$e!==ri||Ze!==oi)&&(r.stencilOp(Bt,ri,oi),Ae=Bt,$e=ri,Ze=oi)},setLocked:function(Bt){q=Bt},setClear:function(Bt){nn!==Bt&&(r.clearStencil(Bt),nn=Bt)},reset:function(){q=!1,Ue=null,xe=null,Oe=null,Ge=null,Ae=null,$e=null,Ze=null,nn=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,d=new WeakMap;let y={},x={},g={},M=new WeakMap,T=[],C=null,E=!1,v=null,z=null,F=null,D=null,I=null,N=null,U=null,b=new Rt(0,0,0),L=0,X=!1,k=null,Q=null,ue=null,ge=null,te=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const he=r.getParameter(r.VERSION);he.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(he)[1]),G=Z>=1):he.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),G=Z>=2);let Te=null,O={};const j=r.getParameter(r.SCISSOR_BOX),W=r.getParameter(r.VIEWPORT),_e=new ln().fromArray(j),Re=new ln().fromArray(W);function ne(q,Ue,xe,Oe){const Ge=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(q,Ae),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<xe;$e++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Ue,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Ge):r.texImage2D(Ue+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ge);return Ae}const ye={};ye[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),Ee(r.DEPTH_TEST),f.setFunc(ro),$t(!1),Se(X_),Ee(r.CULL_FACE),Mt(Na);function Ee(q){y[q]!==!0&&(r.enable(q),y[q]=!0)}function ke(q){y[q]!==!1&&(r.disable(q),y[q]=!1)}function lt(q,Ue){return g[q]!==Ue?(r.bindFramebuffer(q,Ue),g[q]=Ue,q===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ue),q===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ue),!0):!1}function tt(q,Ue){let xe=T,Oe=!1;if(q){xe=M.get(Ue),xe===void 0&&(xe=[],M.set(Ue,xe));const Ge=q.textures;if(xe.length!==Ge.length||xe[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,$e=Ge.length;Ae<$e;Ae++)xe[Ae]=r.COLOR_ATTACHMENT0+Ae;xe.length=Ge.length,Oe=!0}}else xe[0]!==r.BACK&&(xe[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(xe)}function Yt(q){return C!==q?(r.useProgram(q),C=q,!0):!1}const ht={[Zs]:r.FUNC_ADD,[MM]:r.FUNC_SUBTRACT,[EM]:r.FUNC_REVERSE_SUBTRACT};ht[bM]=r.MIN,ht[TM]=r.MAX;const St={[AM]:r.ZERO,[RM]:r.ONE,[CM]:r.SRC_COLOR,[Td]:r.SRC_ALPHA,[OM]:r.SRC_ALPHA_SATURATE,[NM]:r.DST_COLOR,[DM]:r.DST_ALPHA,[wM]:r.ONE_MINUS_SRC_COLOR,[Ad]:r.ONE_MINUS_SRC_ALPHA,[LM]:r.ONE_MINUS_DST_COLOR,[UM]:r.ONE_MINUS_DST_ALPHA,[PM]:r.CONSTANT_COLOR,[IM]:r.ONE_MINUS_CONSTANT_COLOR,[zM]:r.CONSTANT_ALPHA,[BM]:r.ONE_MINUS_CONSTANT_ALPHA};function Mt(q,Ue,xe,Oe,Ge,Ae,$e,Ze,nn,Bt){if(q===Na){E===!0&&(ke(r.BLEND),E=!1);return}if(E===!1&&(Ee(r.BLEND),E=!0),q!==SM){if(q!==v||Bt!==X){if((z!==Zs||I!==Zs)&&(r.blendEquation(r.FUNC_ADD),z=Zs,I=Zs),Bt)switch(q){case no:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case W_:r.blendFunc(r.ONE,r.ONE);break;case Y_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case q_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ut("WebGLState: Invalid blending: ",q);break}else switch(q){case no:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case W_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Y_:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case q_:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",q);break}F=null,D=null,N=null,U=null,b.set(0,0,0),L=0,v=q,X=Bt}return}Ge=Ge||Ue,Ae=Ae||xe,$e=$e||Oe,(Ue!==z||Ge!==I)&&(r.blendEquationSeparate(ht[Ue],ht[Ge]),z=Ue,I=Ge),(xe!==F||Oe!==D||Ae!==N||$e!==U)&&(r.blendFuncSeparate(St[xe],St[Oe],St[Ae],St[$e]),F=xe,D=Oe,N=Ae,U=$e),(Ze.equals(b)===!1||nn!==L)&&(r.blendColor(Ze.r,Ze.g,Ze.b,nn),b.copy(Ze),L=nn),v=q,X=!1}function yt(q,Ue){q.side===$i?ke(r.CULL_FACE):Ee(r.CULL_FACE);let xe=q.side===si;Ue&&(xe=!xe),$t(xe),q.blending===no&&q.transparent===!1?Mt(Na):Mt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const Oe=q.stencilWrite;p.setTest(Oe),Oe&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),De(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):ke(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(q){k!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),k=q)}function Se(q){q!==vM?(Ee(r.CULL_FACE),q!==Q&&(q===X_?r.cullFace(r.BACK):q===yM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ke(r.CULL_FACE),Q=q}function we(q){q!==ue&&(G&&r.lineWidth(q),ue=q)}function De(q,Ue,xe){q?(Ee(r.POLYGON_OFFSET_FILL),(ge!==Ue||te!==xe)&&(ge=Ue,te=xe,f.getReversed()&&(Ue=-Ue),r.polygonOffset(Ue,xe))):ke(r.POLYGON_OFFSET_FILL)}function Ve(q){q?Ee(r.SCISSOR_TEST):ke(r.SCISSOR_TEST)}function Ye(q){q===void 0&&(q=r.TEXTURE0+B-1),Te!==q&&(r.activeTexture(q),Te=q)}function H(q,Ue,xe){xe===void 0&&(Te===null?xe=r.TEXTURE0+B-1:xe=Te);let Oe=O[xe];Oe===void 0&&(Oe={type:void 0,texture:void 0},O[xe]=Oe),(Oe.type!==q||Oe.texture!==Ue)&&(Te!==xe&&(r.activeTexture(xe),Te=xe),r.bindTexture(q,Ue||ye[q]),Oe.type=q,Oe.texture=Ue)}function Qe(){const q=O[Te];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ze(){try{r.compressedTexImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function w(){try{r.compressedTexImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function S(){try{r.texSubImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function K(){try{r.texSubImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function ie(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function Ce(){try{r.texStorage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function Ne(){try{r.texStorage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function pe(){try{r.texImage2D(...arguments)}catch(q){Ut("WebGLState:",q)}}function me(){try{r.texImage3D(...arguments)}catch(q){Ut("WebGLState:",q)}}function Le(q){return x[q]!==void 0?x[q]:r.getParameter(q)}function Xe(q,Ue){x[q]!==Ue&&(r.pixelStorei(q,Ue),x[q]=Ue)}function Be(q){_e.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),_e.copy(q))}function Pe(q){Re.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Re.copy(q))}function it(q,Ue){let xe=d.get(Ue);xe===void 0&&(xe=new WeakMap,d.set(Ue,xe));let Oe=xe.get(q);Oe===void 0&&(Oe=r.getUniformBlockIndex(Ue,q.name),xe.set(q,Oe))}function at(q,Ue){const Oe=d.get(Ue).get(q);m.get(Ue)!==Oe&&(r.uniformBlockBinding(Ue,Oe,q.__bindingPointIndex),m.set(Ue,Oe))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),y={},x={},Te=null,O={},g={},M=new WeakMap,T=[],C=null,E=!1,v=null,z=null,F=null,D=null,I=null,N=null,U=null,b=new Rt(0,0,0),L=0,X=!1,k=null,Q=null,ue=null,ge=null,te=null,_e.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:Ee,disable:ke,bindFramebuffer:lt,drawBuffers:tt,useProgram:Yt,setBlending:Mt,setMaterial:yt,setFlipSided:$t,setCullFace:Se,setLineWidth:we,setPolygonOffset:De,setScissorTest:Ve,activeTexture:Ye,bindTexture:H,unbindTexture:Qe,compressedTexImage2D:ze,compressedTexImage3D:w,texImage2D:pe,texImage3D:me,pixelStorei:Xe,getParameter:Le,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:Ce,texStorage3D:Ne,texSubImage2D:S,texSubImage3D:K,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:Be,viewport:Pe,reset:ft}}function V2(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ot,y=new WeakMap,x=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(w,S){return T?new OffscreenCanvas(w,S):bu("canvas")}function E(w,S,K){let ie=1;const de=ze(w);if((de.width>K||de.height>K)&&(ie=K/Math.max(de.width,de.height)),ie<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Ce=Math.floor(ie*de.width),Ne=Math.floor(ie*de.height);g===void 0&&(g=C(Ce,Ne));const pe=S?C(Ce,Ne):g;return pe.width=Ce,pe.height=Ne,pe.getContext("2d").drawImage(w,0,0,Ce,Ne),ut("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ce+"x"+Ne+")."),pe}else return"data"in w&&ut("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),w;return w}function v(w){return w.generateMipmaps}function z(w){r.generateMipmap(w)}function F(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(w,S,K,ie,de,Ce=!1){if(w!==null){if(r[w]!==void 0)return r[w];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Ne;ie&&(Ne=e.get("EXT_texture_norm16"),Ne||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=S;if(S===r.RED&&(K===r.FLOAT&&(pe=r.R32F),K===r.HALF_FLOAT&&(pe=r.R16F),K===r.UNSIGNED_BYTE&&(pe=r.R8),K===r.UNSIGNED_SHORT&&Ne&&(pe=Ne.R16_EXT),K===r.SHORT&&Ne&&(pe=Ne.R16_SNORM_EXT)),S===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.R8UI),K===r.UNSIGNED_SHORT&&(pe=r.R16UI),K===r.UNSIGNED_INT&&(pe=r.R32UI),K===r.BYTE&&(pe=r.R8I),K===r.SHORT&&(pe=r.R16I),K===r.INT&&(pe=r.R32I)),S===r.RG&&(K===r.FLOAT&&(pe=r.RG32F),K===r.HALF_FLOAT&&(pe=r.RG16F),K===r.UNSIGNED_BYTE&&(pe=r.RG8),K===r.UNSIGNED_SHORT&&Ne&&(pe=Ne.RG16_EXT),K===r.SHORT&&Ne&&(pe=Ne.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.RG8UI),K===r.UNSIGNED_SHORT&&(pe=r.RG16UI),K===r.UNSIGNED_INT&&(pe=r.RG32UI),K===r.BYTE&&(pe=r.RG8I),K===r.SHORT&&(pe=r.RG16I),K===r.INT&&(pe=r.RG32I)),S===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),K===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),K===r.UNSIGNED_INT&&(pe=r.RGB32UI),K===r.BYTE&&(pe=r.RGB8I),K===r.SHORT&&(pe=r.RGB16I),K===r.INT&&(pe=r.RGB32I)),S===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),K===r.UNSIGNED_INT&&(pe=r.RGBA32UI),K===r.BYTE&&(pe=r.RGBA8I),K===r.SHORT&&(pe=r.RGBA16I),K===r.INT&&(pe=r.RGBA32I)),S===r.RGB&&(K===r.UNSIGNED_SHORT&&Ne&&(pe=Ne.RGB16_EXT),K===r.SHORT&&Ne&&(pe=Ne.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),S===r.RGBA){const me=Ce?Eu:Nt.getTransfer(de);K===r.FLOAT&&(pe=r.RGBA32F),K===r.HALF_FLOAT&&(pe=r.RGBA16F),K===r.UNSIGNED_BYTE&&(pe=me===Xt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Ne&&(pe=Ne.RGBA16_EXT),K===r.SHORT&&Ne&&(pe=Ne.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function I(w,S){let K;return w?S===null||S===aa||S===El?K=r.DEPTH24_STENCIL8:S===ea?K=r.DEPTH32F_STENCIL8:S===Ml&&(K=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===aa||S===El?K=r.DEPTH_COMPONENT24:S===ea?K=r.DEPTH_COMPONENT32F:S===Ml&&(K=r.DEPTH_COMPONENT16),K}function N(w,S){return v(w)===!0||w.isFramebufferTexture&&w.minFilter!==Hn&&w.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function U(w){const S=w.target;S.removeEventListener("dispose",U),L(S),S.isVideoTexture&&y.delete(S),S.isHTMLTexture&&x.delete(S)}function b(w){const S=w.target;S.removeEventListener("dispose",b),k(S)}function L(w){const S=s.get(w);if(S.__webglInit===void 0)return;const K=w.source,ie=M.get(K);if(ie){const de=ie[S.__cacheKey];de.usedTimes--,de.usedTimes===0&&X(w),Object.keys(ie).length===0&&M.delete(K)}s.remove(w)}function X(w){const S=s.get(w);r.deleteTexture(S.__webglTexture);const K=w.source,ie=M.get(K);delete ie[S.__cacheKey],f.memory.textures--}function k(w){const S=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let de=0;de<S.__webglFramebuffer[ie].length;de++)r.deleteFramebuffer(S.__webglFramebuffer[ie][de]);else r.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)r.deleteFramebuffer(S.__webglFramebuffer[ie]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const K=w.textures;for(let ie=0,de=K.length;ie<de;ie++){const Ce=s.get(K[ie]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),f.memory.textures--),s.remove(K[ie])}s.remove(w)}let Q=0;function ue(){Q=0}function ge(){return Q}function te(w){Q=w}function B(){const w=Q;return w>=l.maxTextures&&ut("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),Q+=1,w}function G(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function Z(w,S){const K=s.get(w);if(w.isVideoTexture&&H(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&K.__version!==w.version){const ie=w.image;if(ie===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(K,w,S);return}}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+S)}function he(w,S){const K=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){ke(K,w,S);return}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+S)}function Te(w,S){const K=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){ke(K,w,S);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+S)}function O(w,S){const K=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&K.__version!==w.version){lt(K,w,S);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+S)}const j={[Od]:r.REPEAT,[Ua]:r.CLAMP_TO_EDGE,[Pd]:r.MIRRORED_REPEAT},W={[Hn]:r.NEAREST,[GM]:r.NEAREST_MIPMAP_NEAREST,[Gc]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[Xh]:r.LINEAR_MIPMAP_NEAREST,[Js]:r.LINEAR_MIPMAP_LINEAR},_e={[XM]:r.NEVER,[KM]:r.ALWAYS,[WM]:r.LESS,[Pp]:r.LEQUAL,[YM]:r.EQUAL,[Ip]:r.GEQUAL,[qM]:r.GREATER,[ZM]:r.NOTEQUAL};function Re(w,S){if(S.type===ea&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===Xh||S.magFilter===Gc||S.magFilter===Js||S.minFilter===Un||S.minFilter===Xh||S.minFilter===Gc||S.minFilter===Js)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,j[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,j[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,j[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,W[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,W[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,_e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Hn||S.minFilter!==Gc&&S.minFilter!==Js||S.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||s.get(S).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,l.getMaxAnisotropy())),s.get(S).__currentAnisotropy=S.anisotropy}}}function ne(w,S){let K=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",U));const ie=S.source;let de=M.get(ie);de===void 0&&(de={},M.set(ie,de));const Ce=G(S);if(Ce!==w.__cacheKey){de[Ce]===void 0&&(de[Ce]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,K=!0),de[Ce].usedTimes++;const Ne=de[w.__cacheKey];Ne!==void 0&&(de[w.__cacheKey].usedTimes--,Ne.usedTimes===0&&X(S)),w.__cacheKey=Ce,w.__webglTexture=de[Ce].texture}return K}function ye(w,S,K){return Math.floor(Math.floor(w/K)/S)}function Ee(w,S,K,ie){const Ce=w.updateRanges;if(Ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,K,ie,S.data);else{Ce.sort((Xe,Be)=>Xe.start-Be.start);let Ne=0;for(let Xe=1;Xe<Ce.length;Xe++){const Be=Ce[Ne],Pe=Ce[Xe],it=Be.start+Be.count,at=ye(Pe.start,S.width,4),ft=ye(Be.start,S.width,4);Pe.start<=it+1&&at===ft&&ye(Pe.start+Pe.count-1,S.width,4)===at?Be.count=Math.max(Be.count,Pe.start+Pe.count-Be.start):(++Ne,Ce[Ne]=Pe)}Ce.length=Ne+1;const pe=i.getParameter(r.UNPACK_ROW_LENGTH),me=i.getParameter(r.UNPACK_SKIP_PIXELS),Le=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Xe=0,Be=Ce.length;Xe<Be;Xe++){const Pe=Ce[Xe],it=Math.floor(Pe.start/4),at=Math.ceil(Pe.count/4),ft=it%S.width,q=Math.floor(it/S.width),Ue=at,xe=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(r.UNPACK_SKIP_ROWS,q),i.texSubImage2D(r.TEXTURE_2D,0,ft,q,Ue,xe,K,ie,S.data)}w.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,pe),i.pixelStorei(r.UNPACK_SKIP_PIXELS,me),i.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function ke(w,S,K){let ie=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=r.TEXTURE_3D);const de=ne(w,S),Ce=S.source;i.bindTexture(ie,w.__webglTexture,r.TEXTURE0+K);const Ne=s.get(Ce);if(Ce.version!==Ne.__version||de===!0){if(i.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const xe=Nt.getPrimaries(Nt.workingColorSpace),Oe=S.colorSpace===_s?null:Nt.getPrimaries(S.colorSpace),Ge=S.colorSpace===_s||xe===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let me=E(S.image,!1,l.maxTextureSize);me=Qe(S,me);const Le=c.convert(S.format,S.colorSpace),Xe=c.convert(S.type);let Be=D(S.internalFormat,Le,Xe,S.normalized,S.colorSpace,S.isVideoTexture);Re(ie,S);let Pe;const it=S.mipmaps,at=S.isVideoTexture!==!0,ft=Ne.__version===void 0||de===!0,q=Ce.dataReady,Ue=N(S,me);if(S.isDepthTexture)Be=I(S.format===js,S.type),ft&&(at?i.texStorage2D(r.TEXTURE_2D,1,Be,me.width,me.height):i.texImage2D(r.TEXTURE_2D,0,Be,me.width,me.height,0,Le,Xe,null));else if(S.isDataTexture)if(it.length>0){at&&ft&&i.texStorage2D(r.TEXTURE_2D,Ue,Be,it[0].width,it[0].height);for(let xe=0,Oe=it.length;xe<Oe;xe++)Pe=it[xe],at?q&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Le,Xe,Pe.data):i.texImage2D(r.TEXTURE_2D,xe,Be,Pe.width,Pe.height,0,Le,Xe,Pe.data);S.generateMipmaps=!1}else at?(ft&&i.texStorage2D(r.TEXTURE_2D,Ue,Be,me.width,me.height),q&&Ee(S,me,Le,Xe)):i.texImage2D(r.TEXTURE_2D,0,Be,me.width,me.height,0,Le,Xe,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){at&&ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,Be,it[0].width,it[0].height,me.depth);for(let xe=0,Oe=it.length;xe<Oe;xe++)if(Pe=it[xe],S.format!==Vi)if(Le!==null)if(at){if(q)if(S.layerUpdates.size>0){const Ge=bv(Pe.width,Pe.height,S.format,S.type);for(const Ae of S.layerUpdates){const $e=Pe.data.subarray(Ae*Ge/Pe.data.BYTES_PER_ELEMENT,(Ae+1)*Ge/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,Ae,Pe.width,Pe.height,1,Le,$e)}S.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,me.depth,Le,Pe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xe,Be,Pe.width,Pe.height,me.depth,0,Pe.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?q&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,me.depth,Le,Xe,Pe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,xe,Be,Pe.width,Pe.height,me.depth,0,Le,Xe,Pe.data)}else{at&&ft&&i.texStorage2D(r.TEXTURE_2D,Ue,Be,it[0].width,it[0].height);for(let xe=0,Oe=it.length;xe<Oe;xe++)Pe=it[xe],S.format!==Vi?Le!==null?at?q&&i.compressedTexSubImage2D(r.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Le,Pe.data):i.compressedTexImage2D(r.TEXTURE_2D,xe,Be,Pe.width,Pe.height,0,Pe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?q&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Le,Xe,Pe.data):i.texImage2D(r.TEXTURE_2D,xe,Be,Pe.width,Pe.height,0,Le,Xe,Pe.data)}else if(S.isDataArrayTexture)if(at){if(ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,Be,me.width,me.height,me.depth),q)if(S.layerUpdates.size>0){const xe=bv(me.width,me.height,S.format,S.type);for(const Oe of S.layerUpdates){const Ge=me.data.subarray(Oe*xe/me.data.BYTES_PER_ELEMENT,(Oe+1)*xe/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Oe,me.width,me.height,1,Le,Xe,Ge)}S.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Le,Xe,me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,me.width,me.height,me.depth,0,Le,Xe,me.data);else if(S.isData3DTexture)at?(ft&&i.texStorage3D(r.TEXTURE_3D,Ue,Be,me.width,me.height,me.depth),q&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Le,Xe,me.data)):i.texImage3D(r.TEXTURE_3D,0,Be,me.width,me.height,me.depth,0,Le,Xe,me.data);else if(S.isFramebufferTexture){if(ft)if(at)i.texStorage2D(r.TEXTURE_2D,Ue,Be,me.width,me.height);else{let xe=me.width,Oe=me.height;for(let Ge=0;Ge<Ue;Ge++)i.texImage2D(r.TEXTURE_2D,Ge,Be,xe,Oe,0,Le,Xe,null),xe>>=1,Oe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const xe=r.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),me.parentNode!==xe){xe.appendChild(me),x.add(S),xe.onpaint=Oe=>{const Ge=Oe.changedElements;for(const Ae of x)Ge.includes(Ae.image)&&(Ae.needsUpdate=!0)},xe.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,me);else{const Ge=r.RGBA,Ae=r.RGBA,$e=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,Ae,$e,me)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(it.length>0){if(at&&ft){const xe=ze(it[0]);i.texStorage2D(r.TEXTURE_2D,Ue,Be,xe.width,xe.height)}for(let xe=0,Oe=it.length;xe<Oe;xe++)Pe=it[xe],at?q&&i.texSubImage2D(r.TEXTURE_2D,xe,0,0,Le,Xe,Pe):i.texImage2D(r.TEXTURE_2D,xe,Be,Le,Xe,Pe);S.generateMipmaps=!1}else if(at){if(ft){const xe=ze(me);i.texStorage2D(r.TEXTURE_2D,Ue,Be,xe.width,xe.height)}q&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Le,Xe,me)}else i.texImage2D(r.TEXTURE_2D,0,Be,Le,Xe,me);v(S)&&z(ie),Ne.__version=Ce.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function lt(w,S,K){if(S.image.length!==6)return;const ie=ne(w,S),de=S.source;i.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+K);const Ce=s.get(de);if(de.version!==Ce.__version||ie===!0){i.activeTexture(r.TEXTURE0+K);const Ne=Nt.getPrimaries(Nt.workingColorSpace),pe=S.colorSpace===_s?null:Nt.getPrimaries(S.colorSpace),me=S.colorSpace===_s||Ne===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,Xe=S.image[0]&&S.image[0].isDataTexture,Be=[];for(let Ae=0;Ae<6;Ae++)!Le&&!Xe?Be[Ae]=E(S.image[Ae],!0,l.maxCubemapSize):Be[Ae]=Xe?S.image[Ae].image:S.image[Ae],Be[Ae]=Qe(S,Be[Ae]);const Pe=Be[0],it=c.convert(S.format,S.colorSpace),at=c.convert(S.type),ft=D(S.internalFormat,it,at,S.normalized,S.colorSpace),q=S.isVideoTexture!==!0,Ue=Ce.__version===void 0||ie===!0,xe=de.dataReady;let Oe=N(S,Pe);Re(r.TEXTURE_CUBE_MAP,S);let Ge;if(Le){q&&Ue&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ft,Pe.width,Pe.height);for(let Ae=0;Ae<6;Ae++){Ge=Be[Ae].mipmaps;for(let $e=0;$e<Ge.length;$e++){const Ze=Ge[$e];S.format!==Vi?it!==null?q?xe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,0,0,Ze.width,Ze.height,it,Ze.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,ft,Ze.width,Ze.height,0,Ze.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,0,0,Ze.width,Ze.height,it,at,Ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,ft,Ze.width,Ze.height,0,it,at,Ze.data)}}}else{if(Ge=S.mipmaps,q&&Ue){Ge.length>0&&Oe++;const Ae=ze(Be[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ft,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Xe){q?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Be[Ae].width,Be[Ae].height,it,at,Be[Ae].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ft,Be[Ae].width,Be[Ae].height,0,it,at,Be[Ae].data);for(let $e=0;$e<Ge.length;$e++){const nn=Ge[$e].image[Ae].image;q?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,0,0,nn.width,nn.height,it,at,nn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,ft,nn.width,nn.height,0,it,at,nn.data)}}else{q?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,it,at,Be[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ft,it,at,Be[Ae]);for(let $e=0;$e<Ge.length;$e++){const Ze=Ge[$e];q?xe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,0,0,it,at,Ze.image[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,ft,it,at,Ze.image[Ae])}}}v(S)&&z(r.TEXTURE_CUBE_MAP),Ce.__version=de.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function tt(w,S,K,ie,de,Ce){const Ne=c.convert(K.format,K.colorSpace),pe=c.convert(K.type),me=D(K.internalFormat,Ne,pe,K.normalized,K.colorSpace),Le=s.get(S),Xe=s.get(K);if(Xe.__renderTarget=S,!Le.__hasExternalTextures){const Be=Math.max(1,S.width>>Ce),Pe=Math.max(1,S.height>>Ce);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?i.texImage3D(de,Ce,me,Be,Pe,S.depth,0,Ne,pe,null):i.texImage2D(de,Ce,me,Be,Pe,0,Ne,pe,null)}i.bindFramebuffer(r.FRAMEBUFFER,w),Ye(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,de,Xe.__webglTexture,0,Ve(S)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,de,Xe.__webglTexture,Ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(w,S,K){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){const ie=S.depthTexture,de=ie&&ie.isDepthTexture?ie.type:null,Ce=I(S.stencilBuffer,de),Ne=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ye(S)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve(S),Ce,S.width,S.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve(S),Ce,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,w)}else{const ie=S.textures;for(let de=0;de<ie.length;de++){const Ce=ie[de],Ne=c.convert(Ce.format,Ce.colorSpace),pe=c.convert(Ce.type),me=D(Ce.internalFormat,Ne,pe,Ce.normalized,Ce.colorSpace);Ye(S)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve(S),me,S.width,S.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve(S),me,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,me,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(w,S,K){const ie=S.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=s.get(S.depthTexture);if(de.__renderTarget=S,(!de.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ie){if(de.__webglInit===void 0&&(de.__webglInit=!0,S.depthTexture.addEventListener("dispose",U)),de.__webglTexture===void 0){de.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Re(r.TEXTURE_CUBE_MAP,S.depthTexture);const Le=c.convert(S.depthTexture.format),Xe=c.convert(S.depthTexture.type);let Be;S.depthTexture.format===Ia?Be=r.DEPTH_COMPONENT24:S.depthTexture.format===js&&(Be=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Be,S.width,S.height,0,Le,Xe,null)}}else Z(S.depthTexture,0);const Ce=de.__webglTexture,Ne=Ve(S),pe=ie?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,me=S.depthTexture.format===js?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ia)Ye(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,pe,Ce,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,me,pe,Ce,0);else if(S.depthTexture.format===js)Ye(S)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,pe,Ce,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,me,pe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(w){const S=s.get(w),K=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const ie=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ie){const de=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ie.removeEventListener("dispose",de)};ie.addEventListener("dispose",de),S.__depthDisposeCallback=de}S.__boundDepthTexture=ie}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(K)for(let ie=0;ie<6;ie++)ht(S.__webglFramebuffer[ie],w,ie);else{const ie=w.texture.mipmaps;ie&&ie.length>0?ht(S.__webglFramebuffer[0],w,0):ht(S.__webglFramebuffer,w,0)}else if(K){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]===void 0)S.__webglDepthbuffer[ie]=r.createRenderbuffer(),Yt(S.__webglDepthbuffer[ie],w,!1);else{const de=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=S.__webglDepthbuffer[ie];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Ce)}}else{const ie=w.texture.mipmaps;if(ie&&ie.length>0?i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Yt(S.__webglDepthbuffer,w,!1);else{const de=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,Ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(w,S,K){const ie=s.get(w);S!==void 0&&tt(ie.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&St(w)}function yt(w){const S=w.texture,K=s.get(w),ie=s.get(S);w.addEventListener("dispose",b);const de=w.textures,Ce=w.isWebGLCubeRenderTarget===!0,Ne=de.length>1;if(Ne||(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=S.version,f.memory.textures++),Ce){K.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[pe]=[];for(let me=0;me<S.mipmaps.length;me++)K.__webglFramebuffer[pe][me]=r.createFramebuffer()}else K.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)K.__webglFramebuffer[pe]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let pe=0,me=de.length;pe<me;pe++){const Le=s.get(de[pe]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),f.memory.textures++)}if(w.samples>0&&Ye(w)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const me=de[pe];K.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[pe]);const Le=c.convert(me.format,me.colorSpace),Xe=c.convert(me.type),Be=D(me.internalFormat,Le,Xe,me.normalized,me.colorSpace,w.isXRRenderTarget===!0),Pe=Ve(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Be,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,K.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(K.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),Re(r.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)tt(K.__webglFramebuffer[pe][me],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else tt(K.__webglFramebuffer[pe],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(S)&&z(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let pe=0,me=de.length;pe<me;pe++){const Le=de[pe],Xe=s.get(Le);let Be=r.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Be=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Be,Xe.__webglTexture),Re(Be,Le),tt(K.__webglFramebuffer,w,Le,r.COLOR_ATTACHMENT0+pe,Be,0),v(Le)&&z(Be)}i.unbindTexture()}else{let pe=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(pe,ie.__webglTexture),Re(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)tt(K.__webglFramebuffer[me],w,S,r.COLOR_ATTACHMENT0,pe,me);else tt(K.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,pe,0);v(S)&&z(pe),i.unbindTexture()}w.depthBuffer&&St(w)}function $t(w){const S=w.textures;for(let K=0,ie=S.length;K<ie;K++){const de=S[K];if(v(de)){const Ce=F(w),Ne=s.get(de).__webglTexture;i.bindTexture(Ce,Ne),z(Ce),i.unbindTexture()}}}const Se=[],we=[];function De(w){if(w.samples>0){if(Ye(w)===!1){const S=w.textures,K=w.width,ie=w.height;let de=r.COLOR_BUFFER_BIT;const Ce=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=s.get(w),pe=S.length>1;if(pe)for(let Le=0;Le<S.length;Le++)i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const me=w.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Le]);const Xe=s.get(S[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xe,0)}r.blitFramebuffer(0,0,K,ie,0,0,K,ie,de,r.NEAREST),m===!0&&(Se.length=0,we.length=0,Se.push(r.COLOR_ATTACHMENT0+Le),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Se.push(Ce),we.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,we)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<S.length;Le++){i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Le]);const Xe=s.get(S[Le]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,Xe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ve(w){return Math.min(l.maxSamples,w.samples)}function Ye(w){const S=s.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function H(w){const S=f.render.frame;y.get(w)!==S&&(y.set(w,S),w.update())}function Qe(w,S){const K=w.colorSpace,ie=w.format,de=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||K!==Mu&&K!==_s&&(Nt.getTransfer(K)===Xt?(ie!==Vi||de!==yi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",K)),S}function ze(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=B,this.resetTextureUnits=ue,this.getTextureUnits=ge,this.setTextureUnits=te,this.setTexture2D=Z,this.setTexture2DArray=he,this.setTexture3D=Te,this.setTextureCube=O,this.rebindTextures=Mt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function k2(r,e){function i(s,l=_s){let c;const f=Nt.getTransfer(l);if(s===yi)return r.UNSIGNED_BYTE;if(s===Dp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Up)return r.UNSIGNED_SHORT_5_5_5_1;if(s===dy)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===py)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===fy)return r.BYTE;if(s===hy)return r.SHORT;if(s===Ml)return r.UNSIGNED_SHORT;if(s===wp)return r.INT;if(s===aa)return r.UNSIGNED_INT;if(s===ea)return r.FLOAT;if(s===Pa)return r.HALF_FLOAT;if(s===my)return r.ALPHA;if(s===gy)return r.RGB;if(s===Vi)return r.RGBA;if(s===Ia)return r.DEPTH_COMPONENT;if(s===js)return r.DEPTH_STENCIL;if(s===_y)return r.RED;if(s===Np)return r.RED_INTEGER;if(s===tr)return r.RG;if(s===Lp)return r.RG_INTEGER;if(s===Op)return r.RGBA_INTEGER;if(s===mu||s===gu||s===_u||s===vu)if(f===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_u)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Id||s===zd||s===Bd||s===Fd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===xu||s===Wd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Hd||s===Gd)return f===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Vd)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===kd)return c.COMPRESSED_R11_EAC;if(s===Xd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===xu)return c.COMPRESSED_RG11_EAC;if(s===Wd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Yd||s===qd||s===Zd||s===Kd||s===Qd||s===Jd||s===jd||s===$d||s===ep||s===tp||s===np||s===ip||s===ap||s===sp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Yd)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qd)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Zd)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kd)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qd)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jd)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jd)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$d)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ep)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===np)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ip)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ap)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sp)return f===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rp||s===op||s===lp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===rp)return f===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===op)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cp||s===up||s===Su||s===fp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===cp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===up)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Su)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===El?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const X2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W2=`
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

}`;class Y2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Ay(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new sa({vertexShader:X2,fragmentShader:W2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mn(new $s(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q2 extends Es{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,y=null,x=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",E=new Y2,v={},z=i.getContextAttributes();let F=null,D=null;const I=[],N=[],U=new ot;let b=null;const L=new Ui;L.viewport=new ln;const X=new Ui;X.viewport=new ln;const k=[L,X],Q=new tb;let ue=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ye=I[ne];return ye===void 0&&(ye=new Qh,I[ne]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ne){let ye=I[ne];return ye===void 0&&(ye=new Qh,I[ne]=ye),ye.getGripSpace()},this.getHand=function(ne){let ye=I[ne];return ye===void 0&&(ye=new Qh,I[ne]=ye),ye.getHandSpace()};function te(ne){const ye=N.indexOf(ne.inputSource);if(ye===-1)return;const Ee=I[ye];Ee!==void 0&&(Ee.update(ne.inputSource,ne.frame,d||f),Ee.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){l.removeEventListener("select",te),l.removeEventListener("selectstart",te),l.removeEventListener("selectend",te),l.removeEventListener("squeeze",te),l.removeEventListener("squeezestart",te),l.removeEventListener("squeezeend",te),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",G);for(let ne=0;ne<I.length;ne++){const ye=N[ne];ye!==null&&(N[ne]=null,I[ne].disconnect(ye))}ue=null,ge=null,E.reset();for(const ne in v)delete v[ne];e.setRenderTarget(F),M=null,g=null,x=null,l=null,D=null,Re.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(U.width,U.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){p=ne,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",te),l.addEventListener("selectstart",te),l.addEventListener("selectend",te),l.addEventListener("squeeze",te),l.addEventListener("squeezestart",te),l.addEventListener("squeezeend",te),l.addEventListener("end",B),l.addEventListener("inputsourceschange",G),z.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(U),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ke=null,lt=null;z.depth&&(lt=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=z.stencil?js:Ia,ke=z.stencil?El:aa);const tt={colorFormat:i.RGBA8,depthFormat:lt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(tt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new ia(g.textureWidth,g.textureHeight,{format:Vi,type:yi,depthTexture:new lo(g.textureWidth,g.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new ia(M.framebufferWidth,M.framebufferHeight,{format:Vi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),Re.setContext(l),Re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function G(ne){for(let ye=0;ye<ne.removed.length;ye++){const Ee=ne.removed[ye],ke=N.indexOf(Ee);ke>=0&&(N[ke]=null,I[ke].disconnect(Ee))}for(let ye=0;ye<ne.added.length;ye++){const Ee=ne.added[ye];let ke=N.indexOf(Ee);if(ke===-1){for(let tt=0;tt<I.length;tt++)if(tt>=N.length){N.push(Ee),ke=tt;break}else if(N[tt]===null){N[tt]=Ee,ke=tt;break}if(ke===-1)break}const lt=I[ke];lt&&lt.connect(Ee)}}const Z=new $,he=new $;function Te(ne,ye,Ee){Z.setFromMatrixPosition(ye.matrixWorld),he.setFromMatrixPosition(Ee.matrixWorld);const ke=Z.distanceTo(he),lt=ye.projectionMatrix.elements,tt=Ee.projectionMatrix.elements,Yt=lt[14]/(lt[10]-1),ht=lt[14]/(lt[10]+1),St=(lt[9]+1)/lt[5],Mt=(lt[9]-1)/lt[5],yt=(lt[8]-1)/lt[0],$t=(tt[8]+1)/tt[0],Se=Yt*yt,we=Yt*$t,De=ke/(-yt+$t),Ve=De*-yt;if(ye.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ve),ne.translateZ(De),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),lt[10]===-1)ne.projectionMatrix.copy(ye.projectionMatrix),ne.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const Ye=Yt+De,H=ht+De,Qe=Se-Ve,ze=we+(ke-Ve),w=St*ht/H*Ye,S=Mt*ht/H*Ye;ne.projectionMatrix.makePerspective(Qe,ze,w,S,Ye,H),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function O(ne,ye){ye===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ye.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let ye=ne.near,Ee=ne.far;E.texture!==null&&(E.depthNear>0&&(ye=E.depthNear),E.depthFar>0&&(Ee=E.depthFar)),Q.near=X.near=L.near=ye,Q.far=X.far=L.far=Ee,(ue!==Q.near||ge!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ue=Q.near,ge=Q.far),Q.layers.mask=ne.layers.mask|6,L.layers.mask=Q.layers.mask&-5,X.layers.mask=Q.layers.mask&-3;const ke=ne.parent,lt=Q.cameras;O(Q,ke);for(let tt=0;tt<lt.length;tt++)O(lt[tt],ke);lt.length===2?Te(Q,L,X):Q.projectionMatrix.copy(L.projectionMatrix),j(ne,Q,ke)};function j(ne,ye,Ee){Ee===null?ne.matrix.copy(ye.matrixWorld):(ne.matrix.copy(Ee.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ye.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ye.projectionMatrix),ne.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Tl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(ne){m=ne,g!==null&&(g.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(Q)},this.getCameraTexture=function(ne){return v[ne]};let W=null;function _e(ne,ye){if(y=ye.getViewerPose(d||f),T=ye,y!==null){const Ee=y.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let ke=!1;Ee.length!==Q.cameras.length&&(Q.cameras.length=0,ke=!0);for(let ht=0;ht<Ee.length;ht++){const St=Ee[ht];let Mt=null;if(M!==null)Mt=M.getViewport(St);else{const $t=x.getViewSubImage(g,St);Mt=$t.viewport,ht===0&&(e.setRenderTargetTextures(D,$t.colorTexture,$t.depthStencilTexture),e.setRenderTarget(D))}let yt=k[ht];yt===void 0&&(yt=new Ui,yt.layers.enable(ht),yt.viewport=new ln,k[ht]=yt),yt.matrix.fromArray(St.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(St.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ht===0&&(Q.matrix.copy(yt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),ke===!0&&Q.cameras.push(yt)}const lt=l.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=s.getBinding();const ht=x.getDepthInformation(Ee[0]);ht&&ht.isValid&&ht.texture&&E.init(ht,l.renderState)}if(lt&&lt.includes("camera-access")&&C){e.state.unbindTexture(),x=s.getBinding();for(let ht=0;ht<Ee.length;ht++){const St=Ee[ht].camera;if(St){let Mt=v[St];Mt||(Mt=new Ay,v[St]=Mt);const yt=x.getCameraImage(St);Mt.sourceTexture=yt}}}}for(let Ee=0;Ee<I.length;Ee++){const ke=N[Ee],lt=I[Ee];ke!==null&&lt!==void 0&&lt.update(ke,ye,d||f)}W&&W(ne,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),T=null}const Re=new Dy;Re.setAnimationLoop(_e),this.setAnimationLoop=function(ne){W=ne},this.dispose=function(){}}}const Z2=new on,zy=new pt;zy.set(-1,0,0,0,1,0,0,0,1);function K2(r,e){function i(E,v){E.matrixAutoUpdate===!0&&E.updateMatrix(),v.value.copy(E.matrix)}function s(E,v){v.color.getRGB(E.fogColor.value,Ry(r)),v.isFog?(E.fogNear.value=v.near,E.fogFar.value=v.far):v.isFogExp2&&(E.fogDensity.value=v.density)}function l(E,v,z,F,D){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(E,v):v.isMeshLambertMaterial?(c(E,v),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(E,v),x(E,v)):v.isMeshPhongMaterial?(c(E,v),y(E,v),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(E,v),g(E,v),v.isMeshPhysicalMaterial&&M(E,v,D)):v.isMeshMatcapMaterial?(c(E,v),T(E,v)):v.isMeshDepthMaterial?c(E,v):v.isMeshDistanceMaterial?(c(E,v),C(E,v)):v.isMeshNormalMaterial?c(E,v):v.isLineBasicMaterial?(f(E,v),v.isLineDashedMaterial&&p(E,v)):v.isPointsMaterial?m(E,v,z,F):v.isSpriteMaterial?d(E,v):v.isShadowMaterial?(E.color.value.copy(v.color),E.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(E,v){E.opacity.value=v.opacity,v.color&&E.diffuse.value.copy(v.color),v.emissive&&E.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(E.map.value=v.map,i(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.bumpMap&&(E.bumpMap.value=v.bumpMap,i(v.bumpMap,E.bumpMapTransform),E.bumpScale.value=v.bumpScale,v.side===si&&(E.bumpScale.value*=-1)),v.normalMap&&(E.normalMap.value=v.normalMap,i(v.normalMap,E.normalMapTransform),E.normalScale.value.copy(v.normalScale),v.side===si&&E.normalScale.value.negate()),v.displacementMap&&(E.displacementMap.value=v.displacementMap,i(v.displacementMap,E.displacementMapTransform),E.displacementScale.value=v.displacementScale,E.displacementBias.value=v.displacementBias),v.emissiveMap&&(E.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,E.emissiveMapTransform)),v.specularMap&&(E.specularMap.value=v.specularMap,i(v.specularMap,E.specularMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest);const z=e.get(v),F=z.envMap,D=z.envMapRotation;F&&(E.envMap.value=F,E.envMapRotation.value.setFromMatrix4(Z2.makeRotationFromEuler(D)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&E.envMapRotation.value.premultiply(zy),E.reflectivity.value=v.reflectivity,E.ior.value=v.ior,E.refractionRatio.value=v.refractionRatio),v.lightMap&&(E.lightMap.value=v.lightMap,E.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,E.lightMapTransform)),v.aoMap&&(E.aoMap.value=v.aoMap,E.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,E.aoMapTransform))}function f(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,v.map&&(E.map.value=v.map,i(v.map,E.mapTransform))}function p(E,v){E.dashSize.value=v.dashSize,E.totalSize.value=v.dashSize+v.gapSize,E.scale.value=v.scale}function m(E,v,z,F){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.size.value=v.size*z,E.scale.value=F*.5,v.map&&(E.map.value=v.map,i(v.map,E.uvTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function d(E,v){E.diffuse.value.copy(v.color),E.opacity.value=v.opacity,E.rotation.value=v.rotation,v.map&&(E.map.value=v.map,i(v.map,E.mapTransform)),v.alphaMap&&(E.alphaMap.value=v.alphaMap,i(v.alphaMap,E.alphaMapTransform)),v.alphaTest>0&&(E.alphaTest.value=v.alphaTest)}function y(E,v){E.specular.value.copy(v.specular),E.shininess.value=Math.max(v.shininess,1e-4)}function x(E,v){v.gradientMap&&(E.gradientMap.value=v.gradientMap)}function g(E,v){E.metalness.value=v.metalness,v.metalnessMap&&(E.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,E.metalnessMapTransform)),E.roughness.value=v.roughness,v.roughnessMap&&(E.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,E.roughnessMapTransform)),v.envMap&&(E.envMapIntensity.value=v.envMapIntensity)}function M(E,v,z){E.ior.value=v.ior,v.sheen>0&&(E.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),E.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(E.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,E.sheenColorMapTransform)),v.sheenRoughnessMap&&(E.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,E.sheenRoughnessMapTransform))),v.clearcoat>0&&(E.clearcoat.value=v.clearcoat,E.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(E.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,E.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(E.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===si&&E.clearcoatNormalScale.value.negate())),v.dispersion>0&&(E.dispersion.value=v.dispersion),v.iridescence>0&&(E.iridescence.value=v.iridescence,E.iridescenceIOR.value=v.iridescenceIOR,E.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(E.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,E.iridescenceMapTransform)),v.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),v.transmission>0&&(E.transmission.value=v.transmission,E.transmissionSamplerMap.value=z.texture,E.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(E.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,E.transmissionMapTransform)),E.thickness.value=v.thickness,v.thicknessMap&&(E.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=v.attenuationDistance,E.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(E.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(E.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=v.specularIntensity,E.specularColor.value.copy(v.specularColor),v.specularColorMap&&(E.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,E.specularColorMapTransform)),v.specularIntensityMap&&(E.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,E.specularIntensityMapTransform))}function T(E,v){v.matcap&&(E.matcap.value=v.matcap)}function C(E,v){const z=e.get(v).light;E.referencePosition.value.setFromMatrixPosition(z.matrixWorld),E.nearDistance.value=z.shadow.camera.near,E.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Q2(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,I){const N=I.program;s.uniformBlockBinding(D,N)}function d(D,I){let N=l[D.id];N===void 0&&(E(D),N=y(D),l[D.id]=N,D.addEventListener("dispose",z));const U=I.program;s.updateUBOMapping(D,U);const b=e.render.frame;c[D.id]!==b&&(g(D),c[D.id]=b)}function y(D){const I=x();D.__bindingPointIndex=I;const N=r.createBuffer(),U=D.__size,b=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,U,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,N),N}function x(){for(let D=0;D<p;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const I=l[D.id],N=D.uniforms,U=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let b=0,L=N.length;b<L;b++){const X=N[b];if(Array.isArray(X))for(let k=0,Q=X.length;k<Q;k++)M(X[k],b,k,U);else M(X,b,0,U)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,I,N,U){if(C(D,I,N,U)===!0){const b=D.__offset,L=D.value;if(Array.isArray(L)){let X=0;for(let k=0;k<L.length;k++){const Q=L[k],ue=v(Q);T(Q,D.__data,X),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(X+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,D.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,D.__data)}}function T(D,I,N){typeof D=="number"||typeof D=="boolean"?I[0]=D:D.isMatrix3?(I[0]=D.elements[0],I[1]=D.elements[1],I[2]=D.elements[2],I[3]=0,I[4]=D.elements[3],I[5]=D.elements[4],I[6]=D.elements[5],I[7]=0,I[8]=D.elements[6],I[9]=D.elements[7],I[10]=D.elements[8],I[11]=0):ArrayBuffer.isView(D)?I.set(new D.constructor(D.buffer,D.byteOffset,I.length)):D.toArray(I,N)}function C(D,I,N,U){const b=D.value,L=I+"_"+N;if(U[L]===void 0)return typeof b=="number"||typeof b=="boolean"?U[L]=b:ArrayBuffer.isView(b)?U[L]=b.slice():U[L]=b.clone(),!0;{const X=U[L];if(typeof b=="number"||typeof b=="boolean"){if(X!==b)return U[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(X.equals(b)===!1)return X.copy(b),!0}}return!1}function E(D){const I=D.uniforms;let N=0;const U=16;for(let L=0,X=I.length;L<X;L++){const k=Array.isArray(I[L])?I[L]:[I[L]];for(let Q=0,ue=k.length;Q<ue;Q++){const ge=k[Q],te=Array.isArray(ge.value)?ge.value:[ge.value];for(let B=0,G=te.length;B<G;B++){const Z=te[B],he=v(Z),Te=N%U,O=Te%he.boundary,j=Te+O;N+=O,j!==0&&U-j<he.storage&&(N+=U-j),ge.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),ge.__offset=N,N+=he.storage}}}const b=N%U;return b>0&&(N+=U-b),D.__size=N,D.__cache={},this}function v(D){const I={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(I.boundary=4,I.storage=4):D.isVector2?(I.boundary=8,I.storage=8):D.isVector3||D.isColor?(I.boundary=16,I.storage=12):D.isVector4?(I.boundary=16,I.storage=16):D.isMatrix3?(I.boundary=48,I.storage=48):D.isMatrix4?(I.boundary=64,I.storage=64):D.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(I.boundary=16,I.storage=D.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",D),I}function z(D){const I=D.target;I.removeEventListener("dispose",z);const N=f.indexOf(I.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function F(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:d,dispose:F}}const J2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function j2(){return Ji===null&&(Ji=new zE(J2,16,16,tr,Pa),Ji.name="DFG_LUT",Ji.minFilter=Un,Ji.magFilter=Un,Ji.wrapS=Ua,Ji.wrapT=Ua,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class $2{constructor(e={}){const{canvas:i=JM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=yi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const C=M,E=new Set([Op,Lp,Np]),v=new Set([yi,aa,Ml,El,Dp,Up]),z=new Uint32Array(4),F=new Int32Array(4),D=new $;let I=null,N=null;const U=[],b=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=na,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let k=!1,Q=null,ue=null,ge=null,te=null;this._outputColorSpace=ii;let B=0,G=0,Z=null,he=-1,Te=null;const O=new ln,j=new ln;let W=null;const _e=new Rt(0);let Re=0,ne=i.width,ye=i.height,Ee=1,ke=null,lt=null;const tt=new ln(0,0,ne,ye),Yt=new ln(0,0,ne,ye);let ht=!1;const St=new kp;let Mt=!1,yt=!1;const $t=new on,Se=new $,we=new ln,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ye(){return Z===null?Ee:1}let H=s;function Qe(A,J){return i.getContext(A,J)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:y,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rp}`),i.addEventListener("webglcontextlost",nn,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",ri,!1),H===null){const J="webgl2";if(H=Qe(J,A),H===null)throw Qe(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ut("WebGLRenderer: "+A.message),A}let ze,w,S,K,ie,de,Ce,Ne,pe,me,Le,Xe,Be,Pe,it,at,ft,q,Ue,xe,Oe,Ge,Ae;function $e(){ze=new jT(H),ze.init(),Oe=new k2(H,ze),w=new XT(H,ze,e,Oe),S=new G2(H,ze),w.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),ue=H.createFramebuffer(),ge=H.createFramebuffer(),te=H.createFramebuffer(),K=new tA(H),ie=new R2,de=new V2(H,ze,S,ie,w,Oe,K),Ce=new JT(X),Ne=new sb(H),Ge=new VT(H,Ne),pe=new $T(H,Ne,K,Ge),me=new iA(H,pe,Ne,Ge,K),q=new nA(H,w,de),it=new WT(ie),Le=new A2(X,Ce,ze,w,Ge,it),Xe=new K2(X,ie),Be=new w2,Pe=new P2(ze),ft=new GT(X,Ce,S,me,T,m),at=new H2(X,me,w),Ae=new Q2(H,K,w,S),Ue=new kT(H,ze,K),xe=new eA(H,ze,K),K.programs=Le.programs,X.capabilities=w,X.extensions=ze,X.properties=ie,X.renderLists=Be,X.shadowMap=at,X.state=S,X.info=K}$e(),C!==yi&&(L=new sA(C,i.width,i.height,p,l,c));const Ze=new q2(X,H);this.xr=Ze,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ze.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ze.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(ne,ye,!1))},this.getSize=function(A){return A.set(ne,ye)},this.setSize=function(A,J,le=!0){if(Ze.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,ye=J,i.width=Math.floor(A*Ee),i.height=Math.floor(J*Ee),le===!0&&(i.style.width=A+"px",i.style.height=J+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(ne*Ee,ye*Ee).floor()},this.setDrawingBufferSize=function(A,J,le){ne=A,ye=J,Ee=le,i.width=Math.floor(A*le),i.height=Math.floor(J*le),this.setViewport(0,0,A,J)},this.setEffects=function(A){if(C===yi){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let J=0;J<A.length;J++)if(A[J].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,J,le,re){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,J,le,re),S.viewport(O.copy(tt).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Yt)},this.setScissor=function(A,J,le,re){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,J,le,re),S.scissor(j.copy(Yt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){S.setScissorTest(ht=A)},this.setOpaqueSort=function(A){ke=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(A=!0,J=!0,le=!0){let re=0;if(A){let oe=!1;if(Z!==null){const Fe=Z.texture.format;oe=E.has(Fe)}if(oe){const Fe=Z.texture.type,qe=v.has(Fe),Ie=ft.getClearColor(),Je=ft.getClearAlpha(),Ke=Ie.r,st=Ie.g,mt=Ie.b;qe?(z[0]=Ke,z[1]=st,z[2]=mt,z[3]=Je,H.clearBufferuiv(H.COLOR,0,z)):(F[0]=Ke,F[1]=st,F[2]=mt,F[3]=Je,H.clearBufferiv(H.COLOR,0,F))}else re|=H.COLOR_BUFFER_BIT}J&&(re|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",nn,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),ft.dispose(),Be.dispose(),Pe.dispose(),ie.dispose(),Ce.dispose(),me.dispose(),Ge.dispose(),Ae.dispose(),Le.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",mn),Ze.removeEventListener("sessionend",On),Kn.stop()};function nn(A){A.preventDefault(),Tu("WebGLRenderer: Context Lost."),k=!0}function Bt(){Tu("WebGLRenderer: Context Restored."),k=!1;const A=K.autoReset,J=at.enabled,le=at.autoUpdate,re=at.needsUpdate,oe=at.type;$e(),K.autoReset=A,at.enabled=J,at.autoUpdate=le,at.needsUpdate=re,at.type=oe}function ri(A){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oi(A){const J=A.target;J.removeEventListener("dispose",oi),po(J)}function po(A){mo(A),ie.remove(A)}function mo(A){const J=ie.get(A).programs;J!==void 0&&(J.forEach(function(le){Le.releaseProgram(le)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,le,re,oe,Fe){J===null&&(J=De);const qe=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ie=Fa(A,J,le,re,oe);S.setMaterial(re,qe);let Je=le.index,Ke=1;if(re.wireframe===!0){if(Je=pe.getWireframeAttribute(le),Je===void 0)return;Ke=2}const st=le.drawRange,mt=le.attributes.position;let nt=st.start*Ke,Lt=(st.start+st.count)*Ke;Fe!==null&&(nt=Math.max(nt,Fe.start*Ke),Lt=Math.min(Lt,(Fe.start+Fe.count)*Ke)),Je!==null?(nt=Math.max(nt,0),Lt=Math.min(Lt,Je.count)):mt!=null&&(nt=Math.max(nt,0),Lt=Math.min(Lt,mt.count));const an=Lt-nt;if(an<0||an===1/0)return;Ge.setup(oe,re,Ie,le,Je);let Jt,Ft=Ue;if(Je!==null&&(Jt=Ne.get(Je),Ft=xe,Ft.setIndex(Jt)),oe.isMesh)re.wireframe===!0?(S.setLineWidth(re.wireframeLinewidth*Ye()),Ft.setMode(H.LINES)):Ft.setMode(H.TRIANGLES);else if(oe.isLine){let Ht=re.linewidth;Ht===void 0&&(Ht=1),S.setLineWidth(Ht*Ye()),oe.isLineSegments?Ft.setMode(H.LINES):oe.isLineLoop?Ft.setMode(H.LINE_LOOP):Ft.setMode(H.LINE_STRIP)}else oe.isPoints?Ft.setMode(H.POINTS):oe.isSprite&&Ft.setMode(H.TRIANGLES);if(oe.isBatchedMesh)if(ze.get("WEBGL_multi_draw"))Ft.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Ht=oe._multiDrawStarts,We=oe._multiDrawCounts,Gn=oe._multiDrawCount,bt=Je?Ne.get(Je).bytesPerElement:1,bn=ie.get(re).currentProgram.getUniforms();for(let li=0;li<Gn;li++)bn.setValue(H,"_gl_DrawID",li),Ft.render(Ht[li]/bt,We[li])}else if(oe.isInstancedMesh)Ft.renderInstances(nt,an,oe.count);else if(le.isInstancedBufferGeometry){const Ht=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,We=Math.min(le.instanceCount,Ht);Ft.renderInstances(nt,an,We)}else Ft.render(nt,an)};function go(A,J,le){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,Ba(A,J,le),A.side=ys,A.needsUpdate=!0,Ba(A,J,le),A.side=$i):Ba(A,J,le)}this.compile=function(A,J,le=null){le===null&&(le=A),N=Pe.get(le),N.init(J),b.push(N),le.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(N.pushLight(oe),oe.castShadow&&N.pushShadow(oe))}),A!==le&&A.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(N.pushLight(oe),oe.castShadow&&N.pushShadow(oe))}),N.setupLights();const re=new Set;return A.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Fe=oe.material;if(Fe)if(Array.isArray(Fe))for(let qe=0;qe<Fe.length;qe++){const Ie=Fe[qe];go(Ie,le,oe),re.add(Ie)}else go(Fe,le,oe),re.add(Fe)}),N=b.pop(),re},this.compileAsync=function(A,J,le=null){const re=this.compile(A,J,le);return new Promise(oe=>{function Fe(){if(re.forEach(function(qe){ie.get(qe).currentProgram.isReady()&&re.delete(qe)}),re.size===0){oe(A);return}setTimeout(Fe,10)}ze.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let ir=null;function Xi(A){ir&&ir(A)}function mn(){Kn.stop()}function On(){Kn.start()}const Kn=new Dy;Kn.setAnimationLoop(Xi),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(A){ir=A,Ze.setAnimationLoop(A),A===null?Kn.stop():Kn.start()},Ze.addEventListener("sessionstart",mn),Ze.addEventListener("sessionend",On),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Q!==null&&Q.renderStart(A,J);const le=Ze.enabled===!0&&Ze.isPresenting===!0,re=L!==null&&(Z===null||le)&&L.begin(X,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(J),J=Ze.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,J,Z),N=Pe.get(A,b.length),N.init(J),N.state.textureUnits=de.getTextureUnits(),b.push(N),$t.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),St.setFromProjectionMatrix($t,ta,J.reversedDepth),yt=this.localClippingEnabled,Mt=it.init(this.clippingPlanes,yt),I=Be.get(A,U.length),I.init(),U.push(I),Ze.enabled===!0&&Ze.isPresenting===!0){const qe=X.xr.getDepthSensingMesh();qe!==null&&bs(qe,J,-1/0,X.sortObjects)}bs(A,J,0,X.sortObjects),I.finish(),X.sortObjects===!0&&I.sort(ke,lt,J.reversedDepth),Ve=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Ve&&ft.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&it.beginShadows();const oe=N.state.shadowsArray;if(at.render(oe,A,J),Mt===!0&&it.endShadows(),(re&&L.hasRenderPass())===!1){const qe=I.opaque,Ie=I.transmissive;if(N.setupLights(),J.isArrayCamera){const Je=J.cameras;if(Ie.length>0)for(let Ke=0,st=Je.length;Ke<st;Ke++){const mt=Je[Ke];Dl(qe,Ie,A,mt)}Ve&&ft.render(A);for(let Ke=0,st=Je.length;Ke<st;Ke++){const mt=Je[Ke];wl(I,A,mt,mt.viewport)}}else Ie.length>0&&Dl(qe,Ie,A,J),Ve&&ft.render(A),wl(I,A,J)}Z!==null&&G===0&&(de.updateMultisampleRenderTarget(Z),de.updateRenderTargetMipmap(Z)),re&&L.end(X),A.isScene===!0&&A.onAfterRender(X,A,J),Ge.resetDefaultState(),he=-1,Te=null,b.pop(),b.length>0?(N=b[b.length-1],de.setTextureUnits(N.state.textureUnits),Mt===!0&&it.setGlobalState(X.clippingPlanes,N.state.camera)):N=null,U.pop(),U.length>0?I=U[U.length-1]:I=null,Q!==null&&Q.renderEnd()};function bs(A,J,le,re){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||St.intersectsSprite(A)){re&&we.setFromMatrixPosition(A.matrixWorld).applyMatrix4($t);const qe=me.update(A),Ie=A.material;Ie.visible&&I.push(A,qe,Ie,le,we.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||St.intersectsObject(A))){const qe=me.update(A),Ie=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),we.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),we.copy(qe.boundingSphere.center)),we.applyMatrix4(A.matrixWorld).applyMatrix4($t)),Array.isArray(Ie)){const Je=qe.groups;for(let Ke=0,st=Je.length;Ke<st;Ke++){const mt=Je[Ke],nt=Ie[mt.materialIndex];nt&&nt.visible&&I.push(A,qe,nt,le,we.z,mt)}}else Ie.visible&&I.push(A,qe,Ie,le,we.z,null)}}const Fe=A.children;for(let qe=0,Ie=Fe.length;qe<Ie;qe++)bs(Fe[qe],J,le,re)}function wl(A,J,le,re){const{opaque:oe,transmissive:Fe,transparent:qe}=A;N.setupLightsView(le),Mt===!0&&it.setGlobalState(X.clippingPlanes,le),re&&S.viewport(O.copy(re)),oe.length>0&&Ts(oe,J,le),Fe.length>0&&Ts(Fe,J,le),qe.length>0&&Ts(qe,J,le),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Dl(A,J,le,re){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[re.id]===void 0){const nt=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[re.id]=new ia(1,1,{generateMipmaps:!0,type:nt?Pa:yi,minFilter:Js,samples:Math.max(4,w.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Fe=N.state.transmissionRenderTarget[re.id],qe=re.viewport||O;Fe.setSize(qe.z*X.transmissionResolutionScale,qe.w*X.transmissionResolutionScale);const Ie=X.getRenderTarget(),Je=X.getActiveCubeFace(),Ke=X.getActiveMipmapLevel();X.setRenderTarget(Fe),X.getClearColor(_e),Re=X.getClearAlpha(),Re<1&&X.setClearColor(16777215,.5),X.clear(),Ve&&ft.render(le);const st=X.toneMapping;X.toneMapping=na;const mt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),N.setupLightsView(re),Mt===!0&&it.setGlobalState(X.clippingPlanes,re),Ts(A,le,re),de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe),ze.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Lt=0,an=J.length;Lt<an;Lt++){const Jt=J[Lt],{object:Ft,geometry:Ht,material:We,group:Gn}=Jt;if(We.side===$i&&Ft.layers.test(re.layers)){const bt=We.side;We.side=si,We.needsUpdate=!0,za(Ft,le,re,Ht,We,Gn),We.side=bt,We.needsUpdate=!0,nt=!0}}nt===!0&&(de.updateMultisampleRenderTarget(Fe),de.updateRenderTargetMipmap(Fe))}X.setRenderTarget(Ie,Je,Ke),X.setClearColor(_e,Re),mt!==void 0&&(re.viewport=mt),X.toneMapping=st}function Ts(A,J,le){const re=J.isScene===!0?J.overrideMaterial:null;for(let oe=0,Fe=A.length;oe<Fe;oe++){const qe=A[oe],{object:Ie,geometry:Je,group:Ke}=qe;let st=qe.material;st.allowOverride===!0&&re!==null&&(st=re),Ie.layers.test(le.layers)&&za(Ie,J,le,Je,st,Ke)}}function za(A,J,le,re,oe,Fe){A.onBeforeRender(X,J,le,re,oe,Fe),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(X,J,le,re,A,Fe),oe.transparent===!0&&oe.side===$i&&oe.forceSinglePass===!1?(oe.side=si,oe.needsUpdate=!0,X.renderBufferDirect(le,J,re,oe,A,Fe),oe.side=ys,oe.needsUpdate=!0,X.renderBufferDirect(le,J,re,oe,A,Fe),oe.side=$i):X.renderBufferDirect(le,J,re,oe,A,Fe),A.onAfterRender(X,J,le,re,oe,Fe)}function Ba(A,J,le){J.isScene!==!0&&(J=De);const re=ie.get(A),oe=N.state.lights,Fe=N.state.shadowsArray,qe=oe.state.version,Ie=Le.getParameters(A,oe.state,Fe,J,le,N.state.lightProbeGridArray),Je=Le.getProgramCacheKey(Ie);let Ke=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?J.environment:null,re.fog=J.fog;const st=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=Ce.get(A.envMap||re.environment,st),re.envMapRotation=re.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,Ke===void 0&&(A.addEventListener("dispose",oi),Ke=new Map,re.programs=Ke);let mt=Ke.get(Je);if(mt!==void 0){if(re.currentProgram===mt&&re.lightsStateVersion===qe)return oa(A,Ie),mt}else Ie.uniforms=Le.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,le,Ie),A.onBeforeCompile(Ie,X),mt=Le.acquireProgram(Ie,Je),Ke.set(Je,mt),re.uniforms=Ie.uniforms;const nt=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(nt.clippingPlanes=it.uniform),oa(A,Ie),re.needsLights=Ul(A),re.lightsStateVersion=qe,re.needsLights&&(nt.ambientLightColor.value=oe.state.ambient,nt.lightProbe.value=oe.state.probe,nt.directionalLights.value=oe.state.directional,nt.directionalLightShadows.value=oe.state.directionalShadow,nt.spotLights.value=oe.state.spot,nt.spotLightShadows.value=oe.state.spotShadow,nt.rectAreaLights.value=oe.state.rectArea,nt.ltc_1.value=oe.state.rectAreaLTC1,nt.ltc_2.value=oe.state.rectAreaLTC2,nt.pointLights.value=oe.state.point,nt.pointLightShadows.value=oe.state.pointShadow,nt.hemisphereLights.value=oe.state.hemi,nt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,nt.spotLightMatrix.value=oe.state.spotLightMatrix,nt.spotLightMap.value=oe.state.spotLightMap,nt.pointShadowMatrix.value=oe.state.pointShadowMatrix),re.lightProbeGrid=N.state.lightProbeGridArray.length>0,re.currentProgram=mt,re.uniformsList=null,mt}function ra(A){if(A.uniformsList===null){const J=A.currentProgram.getUniforms();A.uniformsList=yu.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function oa(A,J){const le=ie.get(A);le.outputColorSpace=J.outputColorSpace,le.batching=J.batching,le.batchingColor=J.batchingColor,le.instancing=J.instancing,le.instancingColor=J.instancingColor,le.instancingMorph=J.instancingMorph,le.skinning=J.skinning,le.morphTargets=J.morphTargets,le.morphNormals=J.morphNormals,le.morphColors=J.morphColors,le.morphTargetsCount=J.morphTargetsCount,le.numClippingPlanes=J.numClippingPlanes,le.numIntersection=J.numClipIntersection,le.vertexAlphas=J.vertexAlphas,le.vertexTangents=J.vertexTangents,le.toneMapping=J.toneMapping}function As(A,J){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;D.setFromMatrixPosition(J.matrixWorld);for(let le=0,re=A.length;le<re;le++){const oe=A[le];if(oe.texture!==null&&oe.boundingBox.containsPoint(D))return oe}return null}function Fa(A,J,le,re,oe){J.isScene!==!0&&(J=De),de.resetTextureUnits();const Fe=J.fog,qe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?J.environment:null,Ie=Z===null?X.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Nt.workingColorSpace,Je=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Ke=Ce.get(re.envMap||qe,Je),st=re.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,mt=!!le.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),nt=!!le.morphAttributes.position,Lt=!!le.morphAttributes.normal,an=!!le.morphAttributes.color;let Jt=na;re.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Jt=X.toneMapping);const Ft=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ht=Ft!==void 0?Ft.length:0,We=ie.get(re),Gn=N.state.lights;if(Mt===!0&&(yt===!0||A!==Te)){const zt=A===Te&&re.id===he;it.setState(re,A,zt)}let bt=!1;re.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Gn.state.version||We.outputColorSpace!==Ie||oe.isBatchedMesh&&We.batching===!1||!oe.isBatchedMesh&&We.batching===!0||oe.isBatchedMesh&&We.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&We.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&We.instancing===!1||!oe.isInstancedMesh&&We.instancing===!0||oe.isSkinnedMesh&&We.skinning===!1||!oe.isSkinnedMesh&&We.skinning===!0||oe.isInstancedMesh&&We.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&We.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&We.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&We.instancingMorph===!1&&oe.morphTexture!==null||We.envMap!==Ke||re.fog===!0&&We.fog!==Fe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==it.numPlanes||We.numIntersection!==it.numIntersection)||We.vertexAlphas!==st||We.vertexTangents!==mt||We.morphTargets!==nt||We.morphNormals!==Lt||We.morphColors!==an||We.toneMapping!==Jt||We.morphTargetsCount!==Ht||!!We.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,We.__version=re.version);let bn=We.currentProgram;bt===!0&&(bn=Ba(re,J,oe),Q&&re.isNodeMaterial&&Q.onUpdateProgram(re,bn,We));let li=!1,Li=!1,ci=!1;const Gt=bn.getUniforms(),sn=We.uniforms;if(S.useProgram(bn.program)&&(li=!0,Li=!0,ci=!0),re.id!==he&&(he=re.id,Li=!0),We.needsLights){const zt=As(N.state.lightProbeGridArray,oe);We.lightProbeGrid!==zt&&(We.lightProbeGrid=zt,Li=!0)}if(li||Te!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(H,"projectionMatrix",A.projectionMatrix),Gt.setValue(H,"viewMatrix",A.matrixWorldInverse);const Wi=Gt.map.cameraPosition;Wi!==void 0&&Wi.setValue(H,Se.setFromMatrixPosition(A.matrixWorld)),w.logarithmicDepthBuffer&&Gt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Gt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),Te!==A&&(Te=A,Li=!0,ci=!0)}if(We.needsLights&&(Gn.state.directionalShadowMap.length>0&&Gt.setValue(H,"directionalShadowMap",Gn.state.directionalShadowMap,de),Gn.state.spotShadowMap.length>0&&Gt.setValue(H,"spotShadowMap",Gn.state.spotShadowMap,de),Gn.state.pointShadowMap.length>0&&Gt.setValue(H,"pointShadowMap",Gn.state.pointShadowMap,de)),oe.isSkinnedMesh){Gt.setOptional(H,oe,"bindMatrix"),Gt.setOptional(H,oe,"bindMatrixInverse");const zt=oe.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Gt.setValue(H,"boneTexture",zt.boneTexture,de))}oe.isBatchedMesh&&(Gt.setOptional(H,oe,"batchingTexture"),Gt.setValue(H,"batchingTexture",oe._matricesTexture,de),Gt.setOptional(H,oe,"batchingIdTexture"),Gt.setValue(H,"batchingIdTexture",oe._indirectTexture,de),Gt.setOptional(H,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Gt.setValue(H,"batchingColorTexture",oe._colorsTexture,de));const Oi=le.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&q.update(oe,le,bn),(Li||We.receiveShadow!==oe.receiveShadow)&&(We.receiveShadow=oe.receiveShadow,Gt.setValue(H,"receiveShadow",oe.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&J.environment!==null&&(sn.envMapIntensity.value=J.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=j2()),Li){if(Gt.setValue(H,"toneMappingExposure",X.toneMappingExposure),We.needsLights&&gn(sn,ci),Fe&&re.fog===!0&&Xe.refreshFogUniforms(sn,Fe),Xe.refreshMaterialUniforms(sn,re,Ee,ye,N.state.transmissionRenderTarget[A.id]),We.needsLights&&We.lightProbeGrid){const zt=We.lightProbeGrid;sn.probesSH.value=zt.texture,sn.probesMin.value.copy(zt.boundingBox.min),sn.probesMax.value.copy(zt.boundingBox.max),sn.probesResolution.value.copy(zt.resolution)}yu.upload(H,ra(We),sn,de)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(yu.upload(H,ra(We),sn,de),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Gt.setValue(H,"center",oe.center),Gt.setValue(H,"modelViewMatrix",oe.modelViewMatrix),Gt.setValue(H,"normalMatrix",oe.normalMatrix),Gt.setValue(H,"modelMatrix",oe.matrixWorld),re.uniformsGroups!==void 0){const zt=re.uniformsGroups;for(let Wi=0,Ha=zt.length;Wi<Ha;Wi++){const Rs=zt[Wi];Ae.update(Rs,bn),Ae.bind(Rs,bn)}}return bn}function gn(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function Ul(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,J,le){const re=ie.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ie.get(A.texture).__webglTexture=J,ie.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:le,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,J){const le=ie.get(A);le.__webglFramebuffer=J,le.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(A,J=0,le=0){Z=A,B=J,G=le;let re=null,oe=!1,Fe=!1;if(A){const Ie=ie.get(A);if(Ie.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(H.FRAMEBUFFER,Ie.__webglFramebuffer),O.copy(A.viewport),j.copy(A.scissor),W=A.scissorTest,S.viewport(O),S.scissor(j),S.setScissorTest(W),he=-1;return}else if(Ie.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(Ie.__hasExternalTextures)de.rebindTextures(A,ie.get(A.texture).__webglTexture,ie.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const st=A.depthTexture;if(Ie.__boundDepthTexture!==st){if(st!==null&&ie.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Fe=!0);const Ke=ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[J])?re=Ke[J][le]:re=Ke[J],oe=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?re=ie.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?re=Ke[le]:re=Ke,O.copy(A.viewport),j.copy(A.scissor),W=A.scissorTest}else O.copy(tt).multiplyScalar(Ee).floor(),j.copy(Yt).multiplyScalar(Ee).floor(),W=ht;if(le!==0&&(re=ue),S.bindFramebuffer(H.FRAMEBUFFER,re)&&S.drawBuffers(A,re),S.viewport(O),S.scissor(j),S.setScissorTest(W),oe){const Ie=ie.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ie.__webglTexture,le)}else if(Fe){const Ie=J;for(let Je=0;Je<A.textures.length;Je++){const Ke=ie.get(A.textures[Je]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Je,Ke.__webglTexture,le,Ie)}}else if(A!==null&&le!==0){const Ie=ie.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ie.__webglTexture,le)}he=-1},this.readRenderTargetPixels=function(A,J,le,re,oe,Fe,qe,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Je=Je[qe]),Je){S.bindFramebuffer(H.FRAMEBUFFER,Je);try{const Ke=A.textures[Ie],st=Ke.format,mt=Ke.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ie),!w.textureFormatReadable(st)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(mt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-re&&le>=0&&le<=A.height-oe&&H.readPixels(J,le,re,oe,Oe.convert(st),Oe.convert(mt),Fe)}finally{const Ke=Z!==null?ie.get(Z).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(A,J,le,re,oe,Fe,qe,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Je=Je[qe]),Je)if(J>=0&&J<=A.width-re&&le>=0&&le<=A.height-oe){S.bindFramebuffer(H.FRAMEBUFFER,Je);const Ke=A.textures[Ie],st=Ke.format,mt=Ke.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ie),!w.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,nt),H.bufferData(H.PIXEL_PACK_BUFFER,Fe.byteLength,H.STREAM_READ),H.readPixels(J,le,re,oe,Oe.convert(st),Oe.convert(mt),0);const Lt=Z!==null?ie.get(Z).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,Lt);const an=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await jM(H,an,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,nt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Fe),H.deleteBuffer(nt),H.deleteSync(an),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,J=null,le=0){const re=Math.pow(2,-le),oe=Math.floor(A.image.width*re),Fe=Math.floor(A.image.height*re),qe=J!==null?J.x:0,Ie=J!==null?J.y:0;de.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,le,0,0,qe,Ie,oe,Fe),S.unbindTexture()},this.copyTextureToTexture=function(A,J,le=null,re=null,oe=0,Fe=0){let qe,Ie,Je,Ke,st,mt,nt,Lt,an;const Jt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(le!==null)qe=le.max.x-le.min.x,Ie=le.max.y-le.min.y,Je=le.isBox3?le.max.z-le.min.z:1,Ke=le.min.x,st=le.min.y,mt=le.isBox3?le.min.z:0;else{const sn=Math.pow(2,-oe);qe=Math.floor(Jt.width*sn),Ie=Math.floor(Jt.height*sn),A.isDataArrayTexture?Je=Jt.depth:A.isData3DTexture?Je=Math.floor(Jt.depth*sn):Je=1,Ke=0,st=0,mt=0}re!==null?(nt=re.x,Lt=re.y,an=re.z):(nt=0,Lt=0,an=0);const Ft=Oe.convert(J.format),Ht=Oe.convert(J.type);let We;J.isData3DTexture?(de.setTexture3D(J,0),We=H.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(de.setTexture2DArray(J,0),We=H.TEXTURE_2D_ARRAY):(de.setTexture2D(J,0),We=H.TEXTURE_2D),S.activeTexture(H.TEXTURE0),S.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,J.flipY),S.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),S.pixelStorei(H.UNPACK_ALIGNMENT,J.unpackAlignment);const Gn=S.getParameter(H.UNPACK_ROW_LENGTH),bt=S.getParameter(H.UNPACK_IMAGE_HEIGHT),bn=S.getParameter(H.UNPACK_SKIP_PIXELS),li=S.getParameter(H.UNPACK_SKIP_ROWS),Li=S.getParameter(H.UNPACK_SKIP_IMAGES);S.pixelStorei(H.UNPACK_ROW_LENGTH,Jt.width),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Jt.height),S.pixelStorei(H.UNPACK_SKIP_PIXELS,Ke),S.pixelStorei(H.UNPACK_SKIP_ROWS,st),S.pixelStorei(H.UNPACK_SKIP_IMAGES,mt);const ci=A.isDataArrayTexture||A.isData3DTexture,Gt=J.isDataArrayTexture||J.isData3DTexture;if(A.isDepthTexture){const sn=ie.get(A),Oi=ie.get(J),zt=ie.get(sn.__renderTarget),Wi=ie.get(Oi.__renderTarget);S.bindFramebuffer(H.READ_FRAMEBUFFER,zt.__webglFramebuffer),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Ha=0;Ha<Je;Ha++)ci&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ie.get(A).__webglTexture,oe,mt+Ha),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ie.get(J).__webglTexture,Fe,an+Ha)),H.blitFramebuffer(Ke,st,qe,Ie,nt,Lt,qe,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(oe!==0||A.isRenderTargetTexture||ie.has(A)){const sn=ie.get(A),Oi=ie.get(J);S.bindFramebuffer(H.READ_FRAMEBUFFER,ge),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,te);for(let zt=0;zt<Je;zt++)ci?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,sn.__webglTexture,oe,mt+zt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,sn.__webglTexture,oe),Gt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oi.__webglTexture,Fe,an+zt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Oi.__webglTexture,Fe),oe!==0?H.blitFramebuffer(Ke,st,qe,Ie,nt,Lt,qe,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):Gt?H.copyTexSubImage3D(We,Fe,nt,Lt,an+zt,Ke,st,qe,Ie):H.copyTexSubImage2D(We,Fe,nt,Lt,Ke,st,qe,Ie);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(We,Fe,nt,Lt,an,qe,Ie,Je,Ft,Ht,Jt.data):J.isCompressedArrayTexture?H.compressedTexSubImage3D(We,Fe,nt,Lt,an,qe,Ie,Je,Ft,Jt.data):H.texSubImage3D(We,Fe,nt,Lt,an,qe,Ie,Je,Ft,Ht,Jt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Fe,nt,Lt,qe,Ie,Ft,Ht,Jt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Fe,nt,Lt,Jt.width,Jt.height,Ft,Jt.data):H.texSubImage2D(H.TEXTURE_2D,Fe,nt,Lt,qe,Ie,Ft,Ht,Jt);S.pixelStorei(H.UNPACK_ROW_LENGTH,Gn),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bt),S.pixelStorei(H.UNPACK_SKIP_PIXELS,bn),S.pixelStorei(H.UNPACK_SKIP_ROWS,li),S.pixelStorei(H.UNPACK_SKIP_IMAGES,Li),Fe===0&&J.generateMipmaps&&H.generateMipmap(We),S.unbindTexture()},this.initRenderTarget=function(A){ie.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){B=0,G=0,Z=null,S.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Nt._getUnpackColorSpace()}}const Zv={type:"change"},qp={type:"start"},By={type:"end"},hu=new Vp,Kv=new gs,eR=Math.cos(70*pp.DEG2RAD),An=new $,ni=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sd=1e-6;class tR extends ib{constructor(e,i=null){super(e,i),this.state=Qt.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:to.ROTATE,MIDDLE:to.DOLLY,RIGHT:to.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new xs,this._lastTargetPosition=new $,this._quat=new xs().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mv,this._sphericalDelta=new Mv,this._scale=1,this._panOffset=new $,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new $,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iR.bind(this),this._onPointerDown=nR.bind(this),this._onPointerUp=aR.bind(this),this._onContextMenu=fR.bind(this),this._onMouseWheel=oR.bind(this),this._onKeyDown=lR.bind(this),this._onTouchStart=cR.bind(this),this._onTouchMove=uR.bind(this),this._onMouseDown=sR.bind(this),this._onMouseMove=rR.bind(this),this._interceptControlDown=hR.bind(this),this._interceptControlUp=dR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zv),this.update(),this.state=Qt.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;An.copy(i).sub(this.target),An.applyQuaternion(this._quat),this._spherical.setFromVector3(An),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ni:s>Math.PI&&(s-=ni),l<-Math.PI?l+=ni:l>Math.PI&&(l-=ni),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(An.setFromSpherical(this._spherical),An.applyQuaternion(this._quatInverse),i.copy(this.target).add(An),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=An.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),f=An.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(hu.origin.copy(this.object.position),hu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hu.direction))<eR?this.object.lookAt(this.target):(Kv.setFromNormalAndCoplanarPoint(this.object.up,this.target),hu.intersectPlane(Kv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sd||this._lastTargetPosition.distanceToSquared(this.target)>Sd?(this.dispatchEvent(Zv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ni/60*this.autoRotateSpeed*e:ni/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){An.setFromMatrixColumn(i,0),An.multiplyScalar(-e),this._panOffset.add(An)}_panUp(e,i){this.screenSpacePanning===!0?An.setFromMatrixColumn(i,1):(An.setFromMatrixColumn(i,0),An.crossVectors(this.object.up,An)),An.multiplyScalar(e),this._panOffset.add(An)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;An.copy(l).sub(this.target);let c=An.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,f=s.width,p=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ot,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function nR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function aR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(By),this.state=Qt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function sR(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case to.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Qt.DOLLY;break;case to.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Qt.ROTATE}break;case to.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(qp)}function rR(r){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function oR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(r.preventDefault(),this.dispatchEvent(qp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(By))}function lR(r){this.enabled!==!1&&this._handleKeyDown(r)}function cR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Qt.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Qt.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(qp)}function uR(r){switch(this._trackPointer(r),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Qt.NONE}}function fR(r){this.enabled!==!1&&r.preventDefault()}function hR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pl=new $;function Di(r,e,i,s,l,c){const f=2*Math.PI*l/4,p=Math.max(c-2*l,0),m=Math.PI/4;pl.copy(e),pl[s]=0,pl.normalize();const d=.5*f/(f+p),y=1-pl.angleTo(r)/m;return Math.sign(pl[i])===1?y*d:p/(f+p)+d+d*(1-y)}class Zp extends Ms{constructor(e=1,i=1,s=1,l=2,c=.1){const f=l*2+1;if(c=Math.min(e/2,i/2,s/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:e,height:i,depth:s,segments:l,radius:c},f===1)return;const p=this.toNonIndexed();this.index=null,this.attributes.position=p.attributes.position,this.attributes.normal=p.attributes.normal,this.attributes.uv=p.attributes.uv;const m=new $,d=new $,y=new $(e,i,s).divideScalar(2).subScalar(c),x=this.attributes.position.array,g=this.attributes.normal.array,M=this.attributes.uv.array,T=x.length/6,C=new $,E=.5/f;for(let v=0,z=0;v<x.length;v+=3,z+=2)switch(m.fromArray(x,v),d.copy(m),d.x-=Math.sign(d.x)*E,d.y-=Math.sign(d.y)*E,d.z-=Math.sign(d.z)*E,d.normalize(),x[v+0]=y.x*Math.sign(m.x)+d.x*c,x[v+1]=y.y*Math.sign(m.y)+d.y*c,x[v+2]=y.z*Math.sign(m.z)+d.z*c,g[v+0]=d.x,g[v+1]=d.y,g[v+2]=d.z,Math.floor(v/T)){case 0:C.set(1,0,0),M[z+0]=Di(C,d,"z","y",c,s),M[z+1]=1-Di(C,d,"y","z",c,i);break;case 1:C.set(-1,0,0),M[z+0]=1-Di(C,d,"z","y",c,s),M[z+1]=1-Di(C,d,"y","z",c,i);break;case 2:C.set(0,1,0),M[z+0]=1-Di(C,d,"x","z",c,e),M[z+1]=Di(C,d,"z","x",c,s);break;case 3:C.set(0,-1,0),M[z+0]=1-Di(C,d,"x","z",c,e),M[z+1]=1-Di(C,d,"z","x",c,s);break;case 4:C.set(0,0,1),M[z+0]=1-Di(C,d,"x","y",c,e),M[z+1]=1-Di(C,d,"y","x",c,i);break;case 5:C.set(0,0,-1),M[z+0]=Di(C,d,"x","y",c,e),M[z+1]=1-Di(C,d,"y","x",c,i);break}}static fromJSON(e){return new Zp(e.width,e.height,e.depth,e.segments,e.radius)}}const Al="city-tycoon-v1",vp="city-tycoon-manual-v1",Fy=720*60*60*1e3;function Nu(r){return!!((r==null?void 0:r.version)===1&&Array.isArray(r.players)&&r.players.length>=2&&r.players.length<=4&&r.players.every((e,i)=>e.id===i&&typeof e.name=="string"&&Number.isFinite(e.cash)&&e.cash>=0&&Number.isInteger(e.pos)&&e.pos>=0&&e.pos<32&&[0,1].includes(e.jail)&&typeof e.bankrupt=="boolean")&&r.lots&&typeof r.lots=="object"&&!Array.isArray(r.lots)&&Object.entries(r.lots).every(([e,i])=>Number.isInteger(+e)&&+e>0&&+e<32&&![3,6,8,11,14,16,19,22,24,27,30].includes(+e)&&i&&Number.isInteger(i.owner)&&i.owner>=0&&i.owner<r.players.length&&Number.isInteger(i.level)&&i.level>=0&&i.level<=5)&&Number.isInteger(r.turn)&&r.turn>=0&&r.turn<r.players.length&&Number.isInteger(r.round)&&r.round>=1&&(r.maxRounds===void 0||r.maxRounds===null||Number.isInteger(r.maxRounds)&&r.maxRounds>=1)&&(r.maxRounds===void 0||r.maxRounds===null||r.round<=r.maxRounds+1)&&["ready","moving","decision","end","finished"].includes(r.stage)&&Array.isArray(r.dice)&&r.dice.length===2&&r.dice.every(e=>Number.isInteger(e)&&e>=1&&e<=6)&&Number.isInteger(r.remaining)&&r.remaining>=0&&r.remaining<=12&&(r.stage!=="moving"||r.remaining>0&&Number.isInteger(r.eventIndex)&&r.eventIndex>=0&&r.eventIndex<6)&&Array.isArray(r.log)&&r.log.every(e=>e&&typeof e.text=="string"&&typeof e.kind=="string")&&typeof r.notice=="string"&&(r.event===null||r.event&&typeof r.event.title=="string"&&Number.isFinite(r.event.amount))&&(r.stage!=="finished"||Number.isInteger(r.winner)&&r.winner>=0&&r.winner<r.players.length)&&(r.bank===void 0||Number.isInteger(r.bank.houses)&&r.bank.houses>=0&&Number.isInteger(r.bank.hotels)&&r.bank.hotels>=0)&&(r.buildAvailable===void 0||typeof r.buildAvailable=="boolean")&&(r.buildUsed===void 0||typeof r.buildUsed=="boolean"))}const yp=(r,e)=>r&&Number.isFinite(r.savedAt)&&r.savedAt<=e&&e-r.savedAt<Fy&&Nu(r.game);function Rl(r=localStorage,e=Date.now()){const i=r.getItem(vp),s=i?JSON.parse(i):[];if(!Array.isArray(s))throw new Error("存檔清單格式損壞。");const l=s.filter(f=>yp(f,e)&&typeof f.id=="string"&&typeof f.name=="string").sort((f,p)=>p.savedAt-f.savedAt).slice(0,10);JSON.stringify(l)!==i&&r.setItem(vp,JSON.stringify(l));const c=r.getItem(Al);if(c){let f;try{f=JSON.parse(c)}catch{}(!f||f.savedAt!==void 0&&!yp(f,e))&&r.removeItem(Al)}return l}function pR(r,e,i=!1,s=localStorage,l=Date.now()){if(!Nu(r))throw new Error("遊戲狀態無法儲存。");const c=Rl(s,l);if(c.length>=10&&!i)throw new Error("已達 10 個存檔，請確認取代最舊版本。");const p=[{id:crypto.randomUUID(),name:e.trim().slice(0,60)||`回合 ${r.round}`,savedAt:l,game:structuredClone(r)},...c].slice(0,10);return s.setItem(vp,JSON.stringify(p)),p}function mR(r,e=localStorage,i=Date.now()){const s=Rl(e,i).find(l=>l.id===r);if(!s)throw new Error("存檔已過期或不存在。");return structuredClone(s.game)}function xp(r,e=localStorage,i=Date.now()){e.setItem(Al,JSON.stringify({savedAt:i,game:r}))}function gR(r=localStorage,e=Date.now()){const i=r.getItem(Al);if(!i)return null;const s=JSON.parse(i);return Nu(s)?(xp(s,r,e),s):yp(s,e)?s.game:(r.removeItem(Al),null)}const Fn=["#61ac78","#62a6da","#e7b942","#de809a"],_R=["#e997aa","#9ecb91","#e6af66","#e5c963","#ae99d0","#79b6d4","#72bfb1","#b5a38b"],vR=["起點","中山路","南京東路","機會","敦化南路","民生東路","所得稅","松江路","探訪監獄","永康街","師大路","機會","大安路","青田街","城市基金","溫州街","免費停車","天母西路","士林夜市","機會","大直街","內湖路","城市基金","南港路","前往監獄","忠孝東路","信義路","機會","仁愛路","和平東路","奢侈稅","松仁路"],ai=vR.map((r,e)=>{const i={0:"start",3:"chance",6:"tax",8:"jail",11:"chance",14:"fund",16:"park",19:"chance",22:"fund",24:"gojail",27:"chance",30:"tax"},s=Math.floor(e/4);return{id:e,name:r,type:i[e]||"property",group:s,color:_R[s],price:1e3+s*300+e%4*100}}),fn=r=>"$"+r.toLocaleString("en-US"),uo=r=>Math.round(r.price*.6),yR=40,Hy=r=>r===null?null:Number.isInteger(Number(r))&&Number(r)>=1?Number(r):yR,Sp={houses:32,hotels:12},xR=r=>{let e=0,i=0;for(const s of Object.values(r.lots||{}))s.level===5?i++:e+=Math.max(0,Math.min(4,s.level||0));return{houses:Math.max(0,Sp.houses-e),hotels:Math.max(0,Sp.hotels-i)}},nr=r=>r.bank&&Number.isInteger(r.bank.houses)&&Number.isInteger(r.bank.hotels)?r.bank:xR(r),Gy=r=>({...r,maxRounds:Hy(r.maxRounds),players:r.players.map((e,i)=>({...e,color:e.color||Fn[i],human:e.human===void 0?i===0:!!e.human})),bank:{...nr(r)},buildAvailable:r.buildAvailable===!0,buildUsed:r.buildUsed===!0}),SR=[["你",Fn[0],!0],["艾米",Fn[1],!1],["小傑",Fn[2],!1],["喵喵",Fn[3],!1]];function Mp(r={}){const e=Math.min(4,Math.max(2,Number(r.count)||4));return{version:1,players:SR.slice(0,e).map(([s,l,c],f)=>{var m;const p=((m=r.players)==null?void 0:m[f])||{};return{id:f,name:typeof p.name=="string"&&p.name.trim()?p.name.trim():s,color:p.color||l,human:p.human===void 0?c:!!p.human,cash:15e3,pos:0,jail:0,bankrupt:!1}}),lots:{},bank:{...Sp},turn:0,round:1,maxRounds:Hy(r.maxRounds),stage:"ready",dice:[1,1],remaining:0,selected:null,buildAvailable:!1,buildUsed:!1,event:null,winner:null,log:[{text:`歡迎來到城市大亨！${e} 位玩家各獲得 $15,000。`,kind:"welcome"}],notice:"擲出骰子，開始你的城市冒險。"}}const En=(r,e,i="info")=>{r.notice=e,r.log.unshift({text:e,kind:i}),r.log=r.log.slice(0,40)},Qs=(r,e)=>ai.filter(i=>{var s;return((s=r.lots[i.id])==null?void 0:s.owner)===e}),MR=(r,e,i)=>ai.filter(s=>s.type==="property"&&s.group===e.group).every(s=>{var l;return((l=r.lots[s.id])==null?void 0:l.owner)===i}),Ep=(r,e)=>{let i=r.lots[e.id];return i?Math.round(e.price*.18)*(i.level?[1,3,6,10,15,22][i.level]:MR(r,e,i.owner)?2:1):0},so=(r,e)=>r.players[e].cash+Qs(r,e).reduce((i,s)=>i+s.price+(r.lots[s.id].level||0)*Math.round(s.price*.6),0),bp=(r,e,i=r.turn)=>{const s=ai[e],l=r.lots[e],c=nr(r);return!s||s.type!=="property"||!l||l.owner!==i||r.turn!==i||r.stage!=="end"||r.selected!==e||!r.buildAvailable||r.buildUsed||l.level>=5||r.players[i].cash<uo(s)?!1:l.level<4?c.houses>0:c.hotels>0};function Vy(r,e){const i=r.bank||nr(r);e.level===5?i.hotels++:i.houses+=Math.max(0,Math.min(4,e.level||0)),r.bank=i}function ky(r){const e=r.players.filter(i=>!i.bankrupt);e.length===1&&(r.winner=e[0].id,r.stage="finished",En(r,`${e[0].name}成為城市大亨！`))}function Md(r,e,i,s=null){let l=r.players[e];for(const f of Qs(r,e).sort((p,m)=>p.price-m.price)){if(l.cash>=i)break;const p=Math.floor((f.price+r.lots[f.id].level*Math.round(f.price*.6))*.5);l.cash+=p,Vy(r,r.lots[f.id]),delete r.lots[f.id],En(r,`${l.name}變賣${f.name}，回收 ${fn(p)}。`,"sell")}const c=Math.min(l.cash,i);l.cash-=c,s!==null&&(r.players[s].cash+=c),c<i&&(l.bankrupt=!0,En(r,`${l.name}資金不足，宣告破產。`,"bankrupt"),ky(r))}function ER(r,e){const i=r.players[r.turn],s=ai[i.pos];if(r.selected=s.id,r.stage="end",r.buildAvailable=!1,r.buildUsed=!1,s.type==="property"){const l=r.lots[s.id];if(!l)r.stage=i.cash>=s.price?"decision":"end",En(r,`${i.name}抵達${s.name}，${i.cash>=s.price?"可以購買這塊地產。":"現金不足以購買。"}`);else if(l.owner!==i.id){const c=Ep(r,s);En(r,`${i.name}在${s.name}支付 ${fn(c)} 租金給${r.players[l.owner].name}。`,"rent"),Md(r,i.id,c,l.owner)}else{r.buildAvailable=!0;const c=l.level===5?"已有旅館。":l.level===4?nr(r).hotels?"可以升級為旅館。":"銀行旅館已用完。":nr(r).houses?"可以加蓋一間房屋。":"銀行房屋已用完。";En(r,`${i.name}回到自己的${s.name}，${c}`)}}else if(s.type==="tax"){let l=s.id===6?1200:1800;En(r,`${i.name}支付${s.name} ${fn(l)}。`,"tax"),Md(r,i.id,l)}else if(s.type==="gojail")i.pos=8,i.jail=1,En(r,`${i.name}前往監獄，下次回合暫停一次。`,"jail");else if(s.type==="chance"||s.type==="fund"){const l=[["城市更新獎勵","你的街區煥然一新，獲得市府獎勵。",1500],["房屋修繕","城市的美好，需要一點維護費。",-900],["投資分紅","好眼光！你的投資帶來額外收益。",1e3],["社區公益","支持在地社區，支付公益基金。",-600],["創業獎金","你的創意獲得肯定，領取創業獎金。",2e3],["幸運退稅","收到一筆意外的退稅！",800]],[c,f,p]=l[Math.abs(e||0)%l.length];r.event={title:c,body:f,amount:p},En(r,`${i.name}抽到「${c}」：${p>0?"獲得":"支付"} ${fn(Math.abs(p))}。`,"chance"),p>0?i.cash+=p:Md(r,i.id,-p)}else En(r,s.type==="start"?`${i.name}抵達起點。`:s.type==="park"?`${i.name}在城市公園休息，享受片刻悠閒。`:`${i.name}只是探訪監獄，自由通行。`);ky(r)}function bR(r,e){var l;if(e.type==="NEW")return Mp(e.config);if(e.type==="LOAD")return Nu(e.game)?Gy(structuredClone(e.game)):r;const i=structuredClone(r),s=i.players[i.turn];switch(e.type){case"ROLL":if(i.stage!=="ready"||s.bankrupt)return r;if(s.jail){s.jail--,i.stage="end",En(i,`${s.name}在監獄休息一回合，下回合恢復行動。`);break}i.dice=e.dice,i.remaining=e.dice[0]+e.dice[1],i.event=null,i.stage="moving",i.eventIndex=e.eventIndex,En(i,`${s.name}擲出 ${e.dice[0]} + ${e.dice[1]}，前進 ${i.remaining} 格。`,"dice");break;case"STEP":if(i.stage!=="moving")return r;s.pos=(s.pos+1)%32,s.pos===0&&(s.cash+=2e3,En(i,`${s.name}通過起點，領取 $2,000。`,"salary")),i.remaining--,i.remaining===0&&ER(i,i.eventIndex);break;case"BUY":{if(i.stage!=="decision")return r;const c=ai[s.pos];if(i.lots[c.id]||s.cash<c.price)return r;s.cash-=c.price,i.lots[c.id]={owner:s.id,level:0},i.stage="end",En(i,`${s.name}購買了${c.name}，支付 ${fn(c.price)}。`,"buy");break}case"SKIP":if(i.stage!=="decision")return r;i.stage="end",En(i,`${s.name}暫不購買${ai[s.pos].name}。`);break;case"BUILD":{if(!bp(i,e.id))return r;const c=ai[e.id],f=i.lots[e.id],p=uo(c);i.bank=i.bank||nr(i),s.cash-=p,f.level<4?(i.bank.houses--,f.level++,En(i,`${s.name}在${c.name}加蓋第 ${f.level} 間房屋，支付 ${fn(p)}。`,"build")):(i.bank.houses+=4,i.bank.hotels--,f.level=5,En(i,`${s.name}將${c.name}的 4 間房屋升級為旅館，支付 ${fn(p)}。`,"build")),i.buildAvailable=!1,i.buildUsed=!0;break}case"SELL":{if(!["ready","end"].includes(i.stage)||((l=i.lots[e.id])==null?void 0:l.owner)!==s.id)return r;const c=ai[e.id],f=i.lots[e.id],p=Math.floor((c.price+f.level*Math.round(c.price*.6))*.5);Vy(i,f),s.cash+=p,delete i.lots[e.id],i.buildAvailable=!1,En(i,`${s.name}變賣${c.name}，回收 ${fn(p)}。`,"sell");break}case"NEXT":if(i.stage!=="end")return r;{let c=i.turn;do c=(c+1)%i.players.length,c===0&&i.round++;while(i.players[c].bankrupt);i.turn=c,i.event=null,i.stage="ready",i.selected=null,i.buildAvailable=!1,i.buildUsed=!1,i.maxRounds!==null&&i.round>i.maxRounds?(i.winner=i.players.filter(f=>!f.bankrupt).sort((f,p)=>so(i,p.id)-so(i,f.id))[0].id,i.stage="finished",En(i,`${i.maxRounds} 回合結束！${i.players[i.winner].name}以最高總資產獲勝。`)):En(i,`輪到${i.players[c].name}，準備擲骰子。`);break}default:return r}return i}function TR(){try{const r=gR();return r?Gy(r):Mp()}catch{return Mp()}}function du(r){return r<=8?[-8+r*2,8]:r<=16?[8,8-(r-8)*2]:r<=24?[8-(r-16)*2,-8]:[-8,-8+(r-24)*2]}const AR=vt.forwardRef(function({game:e,onSelect:i,onError:s},l){const c=vt.useRef(),f=vt.useRef(),p=vt.useRef(e),m=vt.useRef(i);return p.current=e,m.current=i,vt.useImperativeHandle(l,()=>({reset(){var d;(d=f.current)==null||d.reset()},zoom(d){const y=f.current;y&&(y.camera.position.sub(y.controls.target).multiplyScalar(d).clampLength(13,80).add(y.controls.target),y.controls.update())},rotate(){f.current&&(f.current.controls.autoRotate=!f.current.controls.autoRotate)},top(){const d=f.current;d&&(d.camera.position.set(0,29,.01),d.controls.update())}}),[]),vt.useEffect(()=>{let d=!1,y=()=>{};return(async()=>{var $t;try{await Promise.race([(($t=document.fonts)==null?void 0:$t.ready)||Promise.resolve(),new Promise(Se=>setTimeout(Se,2e3))])}catch{}if(d)return;const g='"Noto Sans TC", "Microsoft JhengHei", sans-serif',M=c.current;let T;try{T=new $2({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch{s==null||s("瀏覽器無法啟用 WebGL，請開啟硬體加速後重新整理。");return}T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.shadowMap.enabled=!0,T.shadowMap.type=_l,T.outputColorSpace=ii,T.toneMapping=Cp,T.toneMappingExposure=.9,M.appendChild(T.domElement),T.domElement.setAttribute("aria-label","3D 城市棋盤，拖曳旋轉，滾輪縮放，點擊地產查看詳情");const C=new wE;C.background=new Rt("#eaf0e5"),C.fog=new Hp("#eaf0e5",48,90);const E=new Ui(39,1,.1,120),v=new tR(E,T.domElement);v.enableDamping=!0,v.dampingFactor=.07,v.minDistance=13,v.maxDistance=80,v.maxPolarAngle=Math.PI*.485,v.minPolarAngle=.01,v.target.set(0,0,0),v.autoRotateSpeed=.65,v.enablePan=!0;const z=()=>{E.position.set(4.5,28,22).multiplyScalar(Math.max(1,1.12/E.aspect)),v.target.set(0,0,0),v.autoRotate=!1,v.update()};z(),f.current={camera:E,controls:v,reset:z},C.add(new QE("#fff9e9","#86967e",2.4));const F=new $E("#fff5df",3.2);F.position.set(-12,25,8),F.castShadow=!0,F.shadow.mapSize.set(2048,2048),Object.assign(F.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65}),F.shadow.normalBias=.04,F.shadow.bias=-2e-4,F.shadow.radius=4,C.add(F);const D=new Map,I=Se=>(D.has(Se)||D.set(Se,new mv({color:Se,roughness:.82})),D.get(Se)),N=new Map,U=(Se,we,De,Ve,Ye,H=0,Qe=0,ze=0,w=0)=>{const S=[we,De,Ve,w].join(",");N.has(S)||N.set(S,w?new Zp(we,De,Ve,2,w):new Ms(we,De,Ve));const K=new Mn(N.get(S),I(Ye));return K.position.set(H,Qe,ze),K.castShadow=!0,K.receiveShadow=!0,Se.add(K),K},b=new Wp(1,14,10),L=(Se,we,De,Ve,Ye,H,Qe=H,ze=H)=>{const w=new Mn(b,I(we));return w.position.set(De,Ve,Ye),w.scale.set(H,Qe,ze),w.castShadow=!0,w.receiveShadow=!0,Se.add(w),w},X=(Se,we,De,Ve,Ye,H,Qe,ze,w=24)=>{const S=new Mn(new wu(we,De,Ve,w),I(Ye));return S.position.set(H,Qe,ze),S.castShadow=!0,S.receiveShadow=!0,Se.add(S),S},k=new Mn(new $s(200,200),I("#eaf0e5"));k.rotation.x=-Math.PI/2,k.position.y=-.67,k.receiveShadow=!0,C.add(k),X(C,14.3,14.5,.22,"#d2dfc8",0,-.51,0,100),X(C,13.8,13.8,.035,"#dce7d4",0,-.38,0,100),U(C,18.55,.65,18.55,"#405d50",0,-.03,0,.2),U(C,18.35,.13,18.35,"#f8f4e9",0,.35,0,.1),U(C,14.05,.08,14.05,"#b8d0a2",0,.46,0,.1);const Q=[];function ue(Se,we=512,De=512){const Ve=document.createElement("canvas");Ve.width=we,Ve.height=De;const Ye=Ve.getContext("2d");Se(Ye,we,De);const H=new GE(Ve);return H.colorSpace=ii,H.minFilter=Un,H.magFilter=Un,H.anisotropy=T.capabilities.getMaxAnisotropy(),Q.push(H),H}const ge={start:"➜",chance:"?",fund:"✦",tax:"$",jail:"▥",gojail:"▥",park:"P"},te=[],B=[],G=[],Z=new Map;function he(Se,we){const De=`${Se}:${we}`;if(!Z.has(De)){const Ve=ue((Ye,H,Qe)=>{Ye.clearRect(0,0,H,Qe),Ye.fillStyle=we,Ye.beginPath(),Ye.roundRect(8,8,H-16,Qe-16,24),Ye.fill(),Ye.strokeStyle="#fffaf0",Ye.lineWidth=8,Ye.stroke(),Ye.fillStyle="#fffaf0",Ye.beginPath(),Ye.arc(H/2,Qe/2,43,0,Math.PI*2),Ye.fill(),Ye.fillStyle="#294237",Ye.textAlign="center",Ye.textBaseline="middle",Ye.font="bold 72px Arial",Ye.fillText(String(Se+1),H/2,Qe/2+3)},192,144);Z.set(De,new Ey({map:Ve,toneMapped:!1,depthTest:!1,depthWrite:!1}))}return Z.get(De)}for(const Se of ai){const[we,De]=du(Se.id),Ve=new Da;Ve.position.set(we,.44,De),C.add(Ve);const Ye=U(Ve,1.94,.14,1.94,"#fffaf0",0,0,0,.035);Ye.userData.tile=Se.id,te.push(Ye),B[Se.id]=Ye;const H=ue((w,S,K)=>{w.fillStyle="#fcf9f0",w.fillRect(0,0,S,K),Se.type==="property"&&(w.fillStyle=Se.color,w.fillRect(0,0,S,82)),w.fillStyle="#294237",w.textAlign="center",w.font=`bold 76px ${g}`,w.fillText(Se.name,S/2,Se.type==="property"?180:140),Se.type==="property"?(w.font="60px Arial",w.fillText(fn(Se.price),S/2,290),w.fillStyle="#8c998e",w.font="26px sans-serif",w.fillText("CITY PROPERTY",S/2,410)):(w.font="bold 135px Arial",w.fillStyle=Se.type==="chance"?"#ba9270":"#648473",w.fillText(ge[Se.type],S/2,320),w.fillStyle="#728375",w.font=`30px ${g}`,w.fillText(Se.type==="start"?"+ $2,000":Se.type==="tax"?"城市稅收":Se.type==="park"?"歇一會兒":Se.type==="chance"?"好運降臨":Se.type==="fund"?"城市生活":"JUST VISITING",S/2,420))}),Qe=new Mn(new $s(1.89,1.89),new xl({map:H,toneMapped:!1}));Qe.rotation.x=-Math.PI/2,Qe.rotation.z=Se.id<8?0:Se.id<16?Math.PI/2:Se.id<24?Math.PI:-Math.PI/2,Qe.position.y=.076,Ve.add(Qe);const ze=new Da;ze.position.set(we,.58,De),ze.rotation.y=Se.id<8?0:Se.id<16?Math.PI/2:Se.id<24?Math.PI:-Math.PI/2,C.add(ze),G[Se.id]=ze}for(const Se of[-4.4,4.4]){U(C,.8,.025,13,"#d3d2bb",Se,.525,0),U(C,1.15,.018,13,"#f6f1df",Se,.513,0);for(let we=-6;we<=6;we+=.75)U(C,.035,.008,.29,"#faf6e8",Se,.543,we)}for(const Se of[-3.2,3.2]){U(C,13,.025,.8,"#d3d2bb",0,.525,Se),U(C,13,.018,1.15,"#f6f1df",0,.513,Se);for(let we=-6;we<=6;we+=.75)U(C,.29,.008,.035,"#faf6e8",we,.543,Se)}function Te(Se,we,De=1){const Ve=new Da;Ve.position.set(Se,.52,we),Ve.scale.setScalar(De),C.add(Ve),X(Ve,.045,.075,.55,"#94785c",0,.28,0,7),L(Ve,"#8db578",0,.83,0,.29,.44,.29),L(Ve,"#a2c28a",-.14,.69,.02,.22,.29,.22)}function O(Se,we,De,Ve,Ye,H,Qe=!1){const ze=new Da;ze.position.set(Se,.53,we),C.add(ze),U(ze,De+.18,.12,Ve+.18,"#ede9d5",0,.06,0,.04),U(ze,De,Ye,Ve,H,0,Ye/2+.1,0,.035),U(ze,De+.1,.1,Ve+.1,"#fff4df",0,Ye+.12,0,.02);for(let w=.45;w<Ye-.1;w+=.42){for(let S=-De/2+.22;S<De/2-.08;S+=.32)U(ze,.17,.23,.018,"#6d9097",S,w,Ve/2+.01),U(ze,.17,.23,.018,"#6d9097",S,w,-Ve/2-.01);for(let S=-Ve/2+.22;S<Ve/2-.08;S+=.32)U(ze,.018,.23,.17,"#6d9097",De/2+.01,w,S);U(ze,De+.025,.045,Ve+.025,"#ede9d8",0,w+.17,0)}if(U(ze,.24,.36,.024,"#496d68",0,.28,Ve/2+.02),Qe){const w=new Mn(new Sl(De*.81,.55,4),I("#c98468"));w.rotation.y=Math.PI/4,w.scale.z=Ve/De,w.position.y=Ye+.42,w.castShadow=!0,ze.add(w)}else U(ze,De*.7,.08,Ve*.7,"#a5b7ae",0,Ye+.21,0),U(ze,.23,.2,.25,"#e9e4d2",De*.18,Ye+.34,0)}O(-5.6,-5.2,1.1,1.3,1.2,"#dbc39f",!0),O(-2.6,-5.15,1.15,1.05,2.2,"#b4cbd3"),O(-.55,-5.2,1.25,1.25,3.15,"#93b4c4"),O(1.55,-5.2,1.3,1.3,1.7,"#e3c7a5"),O(5.6,-5,1.1,1.5,2.3,"#aac5bc"),O(-5.7,-.9,1.05,1.35,1.7,"#b3c7ce"),O(5.7,-1.1,1.1,1.25,1.3,"#e4c2a4",!0),O(-5.7,4.95,1.15,1.25,1.2,"#e0bf9d",!0),O(-2.6,5.25,1.25,1.1,1.35,"#c1d1c7",!0),O(2.15,5.25,1.15,1.2,2.15,"#b7cad2"),O(5.55,5.3,1.1,1.15,1.7,"#d4c7b2");for(const[Se,we]of[[-6.4,-6.3],[-3.6,-6.1],[3.2,-5.8],[6.2,-3.8],[-6.3,1.8],[-5.4,2],[-3.3,-1.9],[3.4,-1.9],[-3.3,1.9],[3.3,1.9],[-.5,5.2],[.4,6.2],[6.1,2.2],[-3.5,6.3],[3.8,6.2],[-6.3,6.4]])Te(Se,we,1.05);for(let Se=0;Se<24;Se++){const we=Se*Math.PI*2/24;Se%3!==0&&Te(Math.cos(we)*12.5,Math.sin(we)*12.5,.85+Se%3*.12)}U(C,7.1,.055,4.3,"#dce0b9",0,.545,0,.3);const j=ue((Se,we,De)=>{Se.clearRect(0,0,we,De),Se.textAlign="center",Se.fillStyle="#3d6850",Se.font="900 152px Arial",Se.fillText("CITY",we/2,148),Se.fillText("TYCOON",we/2,265),Se.font=`25px ${g}`,Se.fillStyle="#6d8468",Se.fillText("每一步，都是新可能。",we/2,338)},1024,420),W=new Mn(new $s(6.2,2.54),new mv({map:j,transparent:!0,depthWrite:!1}));W.rotation.x=-Math.PI/2,W.position.set(0,.58,0),C.add(W),X(C,.75,.82,.12,"#ede7cf",0,.59,4.3),X(C,.62,.62,.05,"#91c8ce",0,.675,4.3),X(C,.18,.28,.5,"#dfebdf",0,.95,4.3),L(C,"#9fcfd2",0,1.3,4.3,.14),X(C,.36,.26,.08,"#e8eedc",0,1.16,4.3);const _e=[];for(let Se=0;Se<4;Se++){const we=new Da;C.add(we),X(we,.26,.3,.12,Fn[Se],0,.08,0),L(we,Fn[Se],0,.53,0,.23,.32,.18),L(we,"#f1d5b0",0,1,0,.225),L(we,Fn[Se],0,1.12,-.015,.24,.14,.235),U(we,.44,.05,.15,Fn[Se],0,1.1,.16,.025);for(const Ye of[-.09,.09])L(we,"#273e34",Ye,1.015,.198,.025),U(we,.13,.2,.19,"#3c5349",Ye,.22,.025,.035),L(we,"#f1d5b0",Ye*2.8,.51,0,.075,.15,.075);U(we,.29,.3,.15,"#edcf8a",0,.56,-.19,.04),we.scale.setScalar(.95);const[De,Ve]=du(0);we.position.set(De+(Se%2-.5)*.62,.59,Ve+(Math.floor(Se/2)-.5)*.62),we.traverse(Ye=>{Ye.material===I(Fn[Se])&&(Ye.userData.playerTint=!0)}),_e.push(we)}const Re=new Mn(new Xp(.42,.5,40),new xl({color:"#f4c65b",side:$i}));Re.rotation.x=-Math.PI/2,C.add(Re);const ne=new Mn(new Ms(1.98,.045,1.98),new xl({color:"#edc768",transparent:!0,opacity:.6}));C.add(ne),ne.visible=!1;let ye="",Ee,ke=0,lt=performance.now();const tt=()=>{const Se=M.clientWidth,we=M.clientHeight;T.setSize(Se,we),E.aspect=Se/we,E.updateProjectionMatrix(),z()},Yt=new ResizeObserver(tt);Yt.observe(M),tt();let ht;const St=Se=>{ht=[Se.clientX,Se.clientY]},Mt=Se=>{if(!ht||Math.hypot(Se.clientX-ht[0],Se.clientY-ht[1])>6)return;const we=M.getBoundingClientRect(),De=new nb;De.setFromCamera(new ot((Se.clientX-we.left)/we.width*2-1,-(Se.clientY-we.top)/we.height*2+1),E);const Ve=De.intersectObjects(te)[0];Ve&&m.current(Ve.object.userData.tile)};M.addEventListener("pointerdown",St),M.addEventListener("pointerup",Mt);function yt(){var Ye;Ee=requestAnimationFrame(yt);const Se=performance.now(),we=Math.min((Se-lt)/1e3,.05);lt=Se,ke+=we;const De=p.current;for(let H=0;H<_e.length;H++)_e[H].visible=!!De.players[H]&&!De.players[H].bankrupt;for(let H=0;H<De.players.length;H++){const Qe=De.players[H],ze=_e[H],[w,S]=du(Qe.pos);ze.traverse(Ce=>{Ce.userData.playerTint&&(Ce.material=I(Qe.color||Fn[H]))});const K=w+(H%2-.5)*.62,ie=S+(Math.floor(H/2)-.5)*.62;Math.hypot(K-ze.position.x,ie-ze.position.z)>.04?(ze.rotation.y=Math.atan2(K-ze.position.x,ie-ze.position.z),ze.position.x=pp.damp(ze.position.x,K,13,we),ze.position.z=pp.damp(ze.position.z,ie,13,we),ze.position.y=.59+Math.abs(Math.sin(ke*17))*.18):ze.position.y=.59,ze.visible=!Qe.bankrupt}if(Re.position.copy(_e[De.turn].position),Re.position.y=.595,Re.scale.setScalar(1+Math.sin(ke*3)*.06),De.selected!==null){const[H,Qe]=du(De.selected);ne.position.set(H,.536,Qe),ne.visible=!0}else ne.visible=!1;const Ve=JSON.stringify([De.lots,De.players.map(H=>H.color)]);if(ye!==Ve){ye=Ve;for(const H of ai){const Qe=G[H.id];for(;Qe.children.length;){const S=Qe.children[0];S.userData.disposableGeometry&&S.geometry.dispose(),Qe.remove(S)}const ze=De.lots[H.id],w=ze?((Ye=De.players[ze.owner])==null?void 0:Ye.color)||Fn[ze.owner]:null;if(B[H.id].material=I(w||"#fffaf0"),ze){U(Qe,.045,.72,.045,"#647568",.67,.36,.7,.01);const S=new PE(he(ze.owner,w));if(S.position.set(.67,.86,.7),S.scale.set(.62,.465,1),S.renderOrder=5,Qe.add(S),U(Qe,1.75,.055,.13,w,0,0,.84,.015),ze.level===5){U(Qe,.62,.72,.58,w,0,.36,-.18,.04),U(Qe,.72,.08,.68,"#f8f0d8",0,.76,-.18,.02);const K=new Mn(new Sl(.43,.28,4),I("#d2a451"));K.position.set(0,.96,-.18),K.userData.disposableGeometry=!0,K.rotation.y=Math.PI/4,K.castShadow=!0,Qe.add(K),U(Qe,.18,.18,.03,"#e7b64d",0,.42,-.49,.01)}else{const K=[[-.3,-.35],[.3,-.35],[-.3,.05],[.3,.05]];for(let ie=0;ie<ze.level;ie++){const[de,Ce]=K[ie];U(Qe,.33,.32,.34,w,de,.2,Ce,.02);const Ne=new Mn(new Sl(.3,.19,4),I("#faf0d7"));Ne.position.set(de,.45,Ce),Ne.userData.disposableGeometry=!0,Ne.rotation.y=Math.PI/4,Ne.castShadow=!0,Qe.add(Ne)}}}}}v.update(),T.render(C,E)}yt(),y=()=>{cancelAnimationFrame(Ee),Yt.disconnect(),M.removeEventListener("pointerdown",St),M.removeEventListener("pointerup",Mt),v.dispose();const Se=new Set,we=new Set;C.traverse(De=>{De.geometry&&Se.add(De.geometry),De.material&&we.add(De.material)}),Se.forEach(De=>De.dispose()),N.forEach(De=>De.dispose()),we.forEach(De=>De.dispose()),D.forEach(De=>De.dispose()),Z.forEach(De=>De.dispose()),Q.forEach(De=>De.dispose()),T.dispose(),T.domElement.parentNode===M&&M.removeChild(T.domElement),f.current=null}})(),()=>{d=!0,y()}},[]),P.createElement("div",{className:"board-canvas",ref:c})});function RR({game:r,onLoad:e}){const[i,s]=vt.useState([]),[l,c]=vt.useState(""),[f,p]=vt.useState(""),[m,d]=vt.useState(null),y=()=>{try{s(Rl())}catch{p("無法讀取瀏覽器存檔，請檢查儲存權限或資料格式。")}};vt.useEffect(()=>{y();const M=setInterval(y,6e4);return window.addEventListener("storage",y),()=>{clearInterval(M),window.removeEventListener("storage",y)}},[]);function x(M=!1){try{const T=Rl();if(s(T),T.length===10&&!M){d({type:"replace"});return}s(pR(r,l,M)),c(""),d(null),p("已儲存，可保留 30 天。")}catch(T){d(null),p(`儲存失敗：${T.message} 請確認瀏覽器允許儲存且空間足夠。`)}}function g(){try{const M=mR(m.id);e(M)}catch(M){d(null),p(M.message),y()}}return P.createElement("div",{className:"save-manager"},P.createElement("p",{className:"modal-lead"},"遊戲已暫停。手動存檔 ",i.length," / 10，每份保留 30 天；僅此瀏覽器與網站可用。自動存檔另計。"),P.createElement("label",{htmlFor:"save-name"},"存檔名稱（選填）"),P.createElement("input",{id:"save-name",maxLength:60,value:l,onChange:M=>c(M.target.value),placeholder:`回合 ${r.round}`}),P.createElement("button",{className:"primary",onClick:()=>x()},"儲存目前進度"),P.createElement("p",{role:"status"},f),m?P.createElement("section",{className:"save-confirm"},P.createElement("p",null,m.type==="replace"?"已有 10 個版本，確定移除最舊版本並儲存目前進度？":"確定讀取此版本？目前未手動儲存的進度將被取代。"),P.createElement("button",{className:"primary",onClick:()=>m.type==="replace"?x(!0):g()},"確認",m.type==="replace"?"取代並儲存":"讀取"),P.createElement("button",{className:"secondary full",onClick:()=>d(null)},"取消")):null,!i.length&&P.createElement("p",null,"尚無手動存檔。"),i.map(M=>P.createElement("article",{className:"save-entry",key:M.id},P.createElement("div",null,P.createElement("strong",null,M.name),P.createElement("small",null,new Date(M.savedAt).toLocaleString("zh-TW")),P.createElement("small",null,"回合 ",M.game.round," · 你的總資產 ",fn(so(M.game,0))),P.createElement("small",null,"到期：",new Date(M.savedAt+Fy).toLocaleString("zh-TW"))),P.createElement("button",{className:"secondary",onClick:()=>d({type:"load",id:M.id})},"讀取"))))}function Qv({value:r,rolling:e}){const i={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};return P.createElement("div",{className:"die "+(e?"rolling":""),"aria-label":`${r} 點`},Array.from({length:9},(s,l)=>P.createElement("i",{key:l,className:i[r].includes(l+1)?"pip":""})))}function Tp(r){return(r==null?void 0:r.color)||Fn[(r==null?void 0:r.id)||0]}function Jv({id:r,small:e=!1,player:i}){return P.createElement("span",{className:"avatar "+(e?"small":""),style:{"--player":Tp(i||{id:r})}},P.createElement("span",{className:"avatar-head"}),P.createElement("span",{className:"avatar-body"}),P.createElement("span",{className:"avatar-cap"}),P.createElement("span",{className:"owner-number"},r+1))}function CR(r){return r===5?"旅館":r?`${r} 間房屋`:"未開發地產"}function wR(r){return r===5?"旅館":"房屋 "+(r||0)+" / 4"}function DR(r,e,i){if(r.selected!==e.id||r.stage!=="end")return"走到自己的土地時，才能在當下建造。";if(r.buildUsed)return"本次落地已完成建造。";if(i.level===5)return"這塊土地已有旅館。";const s=nr(r);return i.level===4?s.hotels?"你剛走到這塊土地，可以升級為旅館。":"銀行旅館已用完。":s.houses?"你剛走到自己的土地，可以加蓋一間房屋。":"銀行房屋已用完。"}function UR(r,e,i){return i.level===5?"已達最高等級":r.buildUsed&&r.selected===e.id?"本次落地已建造":i.level===4?`升級旅館 · ${fn(uo(e))}`:`建造房屋 · ${fn(uo(e))}`}function $r({title:r,onClose:e,children:i,wide:s=!1}){const l=vt.useRef();return vt.useEffect(()=>{var p;const c=document.activeElement;(p=l.current)==null||p.focus();function f(m){if(m.key==="Escape"&&(e==null||e()),m.key==="Tab"){const d=[...l.current.querySelectorAll('button:not(:disabled),a,input,[tabindex="0"]')];if(!d.length){m.preventDefault();return}m.shiftKey&&document.activeElement===d[0]?(m.preventDefault(),d.at(-1).focus()):!m.shiftKey&&document.activeElement===d.at(-1)&&(m.preventDefault(),d[0].focus())}}return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f),c==null||c.focus()}},[]),P.createElement("div",{className:"modal-backdrop",onMouseDown:c=>{c.target===c.currentTarget&&(e==null||e())}},P.createElement("section",{ref:l,tabIndex:-1,className:"modal "+(s?"wide":""),role:"dialog","aria-modal":"true","aria-label":r},P.createElement("div",{className:"modal-heading"},P.createElement("h2",null,r),e&&P.createElement("button",{className:"icon-button","aria-label":"關閉",onClick:e},P.createElement(ny,{size:20}))),i))}const NR=[["擲骰與移動","你與 3 位電腦輪流擲兩顆骰子，3D 棋子按點數前進。通過起點領取 $2,000；雙骰相同不追加回合。"],["購地與租金","停在無主地產可按標價購買，也可跳過。停在對手地產即支付租金；同色地產收齊後，空地租金加倍。"],["房屋與旅館","只要走到自己的土地，就能在該次落地決定是否建造；不需要集齊同色地產，每次落地最多建造 1 次。每次建造費為地價的 60%；最多 4 間房屋，已有 4 間房屋時再次走到該地可升級為旅館。租金倍率依序為 3、6、10、15，旅館為 22。"],["城市中的驚喜","機會與城市基金帶來獎勵或支出。所得稅 $1,200，奢侈稅 $1,800。前往監獄會移到探訪監獄格並暫停下一回合；免費停車不收費。"],["資金與勝利","現金不足付款時，系統由低價地產開始，以地價和升級成本合計的 50% 自動變賣；仍不足就破產。最後存活者獲勝；若設定回合上限，達到上限後以現金＋地產原價＋升級成本最高者獲勝。"],["你的遊戲，自動保留","每個穩定回合自動儲存在這個瀏覽器。重新整理可繼續；新遊戲會清除原進度。本作採自訂快速規則，未加入拍賣、抵押或玩家間交易。"]];function LR(r){if(r.roundOption==="unlimited")return null;if(r.roundOption==="custom"){const e=Number(r.customRounds);return Number.isInteger(e)&&e>=1?e:null}return Number(r.roundOption)}const jv="city-tycoon:activity-visible:v1",Xy="city-tycoon:glass-opacity:v1",Ed=72,Wy=r=>Math.min(95,Math.max(5,Number(r)));function OR(){try{const r=localStorage.getItem(Xy);if(r===null)return Ed;const e=Number(r);return Number.isFinite(e)?Wy(e):Ed}catch{return Ed}}function $v({entries:r}){return r.map((e,i)=>P.createElement("div",{className:"activity-item",key:i},P.createElement("span",{className:"event-icon "+e.kind},e.kind==="buy"?P.createElement(pu,{size:16}):e.kind==="dice"?P.createElement(ty,{size:16}):e.kind==="tax"?P.createElement(cM,{size:16}):P.createElement(bd,{size:16})),P.createElement("p",null,e.text,P.createElement("small",null,i===0?"剛剛":"本局紀錄"))))}function PR(){var j;const[r,e]=vt.useState(()=>{try{return localStorage.getItem(jv)!=="false"}catch{return!0}}),[i,s]=vt.useState(OR),l=vt.useRef();vt.useEffect(()=>{try{localStorage.setItem(jv,String(r))}catch{}},[r]);const c=W=>{const _e=Wy(Number(W.currentTarget.value));s(_e);try{localStorage.setItem(Xy,String(_e))}catch{}},[f,p]=vt.useReducer(bR,void 0,TR),[m,d]=vt.useState(null),[y,x]=vt.useState(null),[g,M]=vt.useState("players"),[T,C]=vt.useState(!1),[E,v]=vt.useState(!1),[z,F]=vt.useState(""),[D,I]=vt.useState(!1),[N,U]=vt.useState({count:4,roundOption:"40",customRounds:"100",players:[{name:"你",color:Fn[0],human:!0},{name:"艾米",color:Fn[1],human:!1},{name:"小傑",color:Fn[2],human:!1},{name:"喵喵",color:Fn[3],human:!1}]}),b=vt.useRef(),L=vt.useRef(),X=f.players[f.turn],k=!!(X!=null&&X.human)&&!(X!=null&&X.bankrupt),Q=k&&["ready","end"].includes(f.stage),ue=()=>{p({type:"ROLL",dice:[1+Math.floor(Math.random()*6),1+Math.floor(Math.random()*6)],eventIndex:Math.floor(Math.random()*6)})};vt.useEffect(()=>{try{Rl()}catch{I(!0)}},[]),vt.useEffect(()=>{if(f.stage!=="moving")try{xp(f),I(!1)}catch{I(!0)}},[f]),vt.useEffect(()=>{if(f.stage==="moving"&&m!=="saves"){const W=setTimeout(()=>p({type:"STEP"}),330);return()=>clearTimeout(W)}},[f,m]),vt.useEffect(()=>{const W=f.selected,_e=W===null?null:ai[W],Re=W===null?null:f.lots[W],ne=k&&f.stage==="decision"&&(_e==null?void 0:_e.type)==="property"&&!Re,ye=k&&f.stage==="end"&&f.buildAvailable&&(Re==null?void 0:Re.owner)===f.turn;(ne||ye)&&(x(W),d("property"))},[f,k]),vt.useEffect(()=>{if(k||f.stage==="finished"||m==="new"||m==="rules"||m==="saves")return;const W=setTimeout(()=>{if(f.stage==="ready")ue();else if(f.stage==="decision")p({type:X.cash>ai[X.pos].price+1800?"BUY":"SKIP"});else if(f.stage==="end"){const _e=Qs(f,f.turn).find(Re=>bp(f,Re.id)&&X.cash>Math.round(Re.price*.6)+2500);p(_e?{type:"BUILD",id:_e.id}:{type:"NEXT"})}},f.stage==="decision"?1300:1100);return()=>clearTimeout(W)},[f,k,m]),vt.useEffect(()=>{if(!(!T||!L.current))try{const W=L.current,_e=W.createOscillator(),Re=W.createGain();_e.connect(Re),Re.connect(W.destination),_e.type="sine",_e.frequency.setValueAtTime(f.stage==="moving"?380:620,W.currentTime),Re.gain.setValueAtTime(.035,W.currentTime),Re.gain.exponentialRampToValueAtTime(.001,W.currentTime+.13),_e.start(),_e.stop(W.currentTime+.15)}catch{}},[f.remaining,f.stage,T]);const ge=()=>{if(!T){const W=window.AudioContext||window.webkitAudioContext;W&&(L.current||(L.current=new W),L.current.resume())}C(!T)},te=W=>{x(W),d("property")},B=LR(N),G=()=>{var W;N.roundOption==="custom"&&!B||(p({type:"NEW",config:{...N,maxRounds:B}}),d(null),M("players"),(W=b.current)==null||W.reset(),v(!1))},Z=y!==null?ai[y]:null,he=Z?f.lots[Z.id]:null,Te=ai[X.pos],O=!!Z&&Z.type==="property"&&!he&&f.stage==="decision"&&k&&Te.id===Z.id;return P.createElement("div",{className:"app-shell"},P.createElement("header",{className:"header"},P.createElement("a",{className:"brand",href:"./","aria-label":"城市大亨首頁"},P.createElement("span",{className:"brand-icon"},P.createElement(G_,{size:33,strokeWidth:1.8})),P.createElement("span",null,P.createElement("strong",null,"城市大亨"),P.createElement("small",null,"CITY TYCOON"))),P.createElement("p",{className:"tagline"},"玩一場，擁有一座城。"),P.createElement("nav",null,P.createElement("button",{className:"text-button","aria-label":"遊戲規則",onClick:()=>d("rules")},P.createElement(H_,{size:18}),P.createElement("span",null,"遊戲規則")),P.createElement("span",{className:"nav-divider"}),P.createElement("button",{className:"outline-button",onClick:()=>d("new")},P.createElement(V_,{size:18}),P.createElement("span",null,"新遊戲")))),P.createElement("button",{className:"save-launch secondary",onClick:()=>d("saves")},"儲存／讀取"),m==="saves"&&P.createElement($r,{title:"存檔管理",wide:!0,onClose:()=>d(null)},P.createElement(RR,{game:f,onLoad:W=>{p({type:"LOAD",game:W});try{xp(W),I(!1)}catch{I(!0)}x(null),M("players"),d(null)}})),P.createElement("main",{className:"game-layout"},P.createElement("section",{className:"world","aria-label":"遊戲棋盤"},P.createElement(AR,{game:f,onSelect:te,onError:F,ref:b}),P.createElement("div",{className:"world-heading"},P.createElement("span",{className:"live-dot"}),"經典城市 ",P.createElement("span",{className:"world-heading-divider"},"/"),P.createElement("span",null,f.players.length," 人對局"),P.createElement("button",{ref:l,className:"activity-toggle","aria-expanded":r,"aria-controls":"glass-city-activity",onClick:()=>e(W=>!W)},P.createElement(H_,{size:16}),"城市動態",P.createElement("span",null,r?"收起":"展開"))),P.createElement("section",{id:"glass-city-activity",className:"glass-activity",style:{"--glass-opacity":i/100},"aria-labelledby":"glass-activity-title",hidden:!r},P.createElement("div",{className:"glass-activity-heading"},P.createElement("h2",{id:"glass-activity-title"},"城市動態"),P.createElement("label",{className:"glass-opacity-control"},P.createElement("span",null,"透明度"),P.createElement("input",{className:"glass-opacity-range",type:"range",min:"5",max:"95",step:"1",value:i,"aria-label":"玻璃面板透明度",onChange:W=>s(Number(W.target.value)),onPointerUp:c,onBlur:c}),P.createElement("output",null,i,"%")),P.createElement("button",{className:"icon-button","aria-label":"關閉左側城市動態",onClick:()=>{var W;e(!1),(W=l.current)==null||W.focus()}},P.createElement(ny,{size:20}))),P.createElement("div",{className:"glass-activity-list",tabIndex:0,role:"region","aria-label":"城市動態紀錄"},P.createElement($v,{entries:f.log})),P.createElement("button",{className:"glass-activity-all",onClick:()=>d("log")},"全部紀錄 ",P.createElement(bd,{size:16}))),P.createElement("div",{className:"world-top-right"},P.createElement("span",{className:"saved"},P.createElement(rM,{size:13}),D?"此瀏覽器無法存檔":"自動儲存"),P.createElement("button",{className:"icon-button sound","aria-label":T?"關閉音效":"開啟音效",onClick:ge},T?P.createElement(pM,{size:18}):P.createElement(mM,{size:18}))),z&&P.createElement("div",{className:"webgl-error"},z),P.createElement("div",{className:"board-foot"},P.createElement("div",{className:"camera-toolbar"},P.createElement("button",{title:"自動旋轉視角","aria-label":"自動旋轉視角",className:E?"selected":"",onClick:()=>{var W;(W=b.current)==null||W.rotate(),v(!E)}},P.createElement(fM,{size:20}),P.createElement("span",null,"旋轉視角")),P.createElement("button",{title:"重置視角","aria-label":"重置視角",onClick:()=>{var W;(W=b.current)==null||W.reset(),v(!1)}},P.createElement(hM,{size:18})),P.createElement("button",{title:"俯視棋盤","aria-label":"俯視棋盤",onClick:()=>{var W;return(W=b.current)==null?void 0:W.top()}},P.createElement(dM,{size:18})),P.createElement("i",null),P.createElement("button",{title:"縮小","aria-label":"縮小",onClick:()=>{var W;return(W=b.current)==null?void 0:W.zoom(1.15)}},P.createElement(_M,{size:20})),P.createElement("button",{title:"放大","aria-label":"放大",onClick:()=>{var W;return(W=b.current)==null?void 0:W.zoom(.87)}},P.createElement(gM,{size:20}))),P.createElement("span",{className:"gesture-hint"},"拖曳旋轉 · 滾輪縮放 · 點選地產"))),P.createElement("aside",{className:"sidebar"},P.createElement("div",{className:"round-heading"},P.createElement("div",null,P.createElement("span",{className:"round-caption"},"城市的每一步，由你決定"),P.createElement("h1",null,"回合 ",P.createElement("b",null,String(f.round).padStart(2,"0")),P.createElement("span",null,"/ ",f.maxRounds===null?"∞":f.maxRounds))),P.createElement("span",{className:"round-icon"},P.createElement(lM,{size:21}))),P.createElement("div",{className:"tabs"},P.createElement("button",{className:g==="players"?"active":"",onClick:()=>M("players")},"玩家概況"),P.createElement("button",{className:g==="properties"?"active":"",onClick:()=>M("properties")},"我的地產 ",P.createElement("span",null,Qs(f,0).length))),P.createElement("div",{className:"overview"},g==="players"?f.players.map(W=>P.createElement("div",{key:W.id,className:"player-row "+(f.turn===W.id?"current ":"")+(W.bankrupt?"bankrupt":""),style:{"--player":Tp(W)}},P.createElement(Jv,{id:W.id,player:W}),P.createElement("div",{className:"player-info"},P.createElement("strong",null,W.name,W.id===0?P.createElement("em",null,"玩家"):P.createElement("span",{className:"ai"},"電腦")),P.createElement("small",null,W.bankrupt?"已破產":`${Qs(f,W.id).length} 塊地產${W.jail?" · 監獄中":""}`)),P.createElement("div",{className:"player-cash"},P.createElement("b",null,fn(W.cash)),f.turn===W.id&&P.createElement("small",null,P.createElement("span",null)," 目前回合")))):P.createElement("div",{className:"property-list"},Qs(f,0).length?Qs(f,0).map(W=>P.createElement("button",{key:W.id,onClick:()=>te(W.id)},P.createElement("i",{style:{background:W.color}}),P.createElement("span",null,P.createElement("strong",null,W.name),P.createElement("small",null,CR(f.lots[W.id].level)," · 租金 ",fn(Ep(f,W)))),P.createElement(oM,{size:16}))):P.createElement("div",{className:"empty-properties"},P.createElement(pu,{size:28}),P.createElement("strong",null,"你的第一塊地產，正在等你"),P.createElement("p",null,"擲骰探索城市，停在無主街區即可購買。")))),P.createElement("section",{className:"turn-panel","aria-live":"polite"},P.createElement("div",{className:"turn-title"},P.createElement("span",{className:"live-dot",style:{background:Tp(X)}}),P.createElement("h2",null,f.stage==="finished"?"本局已結束":k?"你的回合":`${X.name}的回合`),P.createElement("span",null,f.stage==="moving"?"移動中":f.stage==="decision"?"購地時刻":k?"準備出發":"電腦玩家")),P.createElement("div",{className:"dice-row"},P.createElement(Qv,{value:f.dice[0],rolling:f.stage==="moving"}),P.createElement(Qv,{value:f.dice[1],rolling:f.stage==="moving"})),f.stage==="finished"?P.createElement("button",{className:"primary",onClick:()=>d("result")},P.createElement(k_,{size:19}),"查看結算"):k&&f.stage==="decision"?P.createElement("div",{className:"buy-actions"},P.createElement("div",{className:"buy-summary"},P.createElement("strong",null,Te.name),P.createElement("b",null,fn(Te.price))),P.createElement("button",{className:"primary",onClick:()=>p({type:"BUY"})},P.createElement(pu,{size:18}),"購買地產"),P.createElement("button",{className:"skip-button",onClick:()=>p({type:"SKIP"})},"暫不購買，保留現金 ",P.createElement(Hc,{size:14}))):P.createElement("button",{className:"primary",disabled:!k||f.stage==="moving",onClick:()=>f.stage==="end"?p({type:"NEXT"}):ue()},f.stage==="moving"?P.createElement(P.Fragment,null,"前進中 · 還有 ",f.remaining," 格"):k?f.stage==="end"?P.createElement(P.Fragment,null,"結束回合 ",P.createElement(Hc,{size:19})):P.createElement(P.Fragment,null,P.createElement(ty,{size:21}),"擲骰子"):P.createElement(P.Fragment,null,"電腦思考中",P.createElement("span",{className:"thinking"},"…"))),P.createElement("p",{className:"turn-hint"},f.stage==="ready"?k?"好運從這一步開始。":"下一段城市冒險，即將展開。":f.notice),f.event&&P.createElement("div",{className:"event-note"},P.createElement("img",{src:"./chance.png",alt:"城市機會卡"}),P.createElement("div",null,P.createElement("strong",null,f.event.title),P.createElement("span",null,f.event.amount>0?"+":"−"," ",fn(Math.abs(f.event.amount)))))),P.createElement("section",{className:"activity"},P.createElement("div",{className:"activity-heading"},P.createElement("h2",null,"城市動態"),P.createElement("button",{onClick:()=>d("log")},"全部紀錄 ",P.createElement(bd,{size:14}))),P.createElement("div",{className:"activity-list"},P.createElement($v,{entries:f.log.slice(0,3)}))),P.createElement("footer",{className:"sidebar-footer"},P.createElement("span",{className:"mini-dot"}),"一起，把城市變成你的故事。"))),m==="rules"&&P.createElement($r,{title:"城市大亨 · 遊戲規則",wide:!0,onClose:()=>d(null)},P.createElement("p",{className:"modal-lead"},"買下喜歡的街區，把小小投資變成一座城市。"),P.createElement("div",{className:"rules-list"},NR.map(([W,_e],Re)=>P.createElement("div",{key:W},P.createElement("span",null,String(Re+1).padStart(2,"0")),P.createElement("section",null,P.createElement("h3",null,W),P.createElement("p",null,_e))))),P.createElement("button",{className:"primary",onClick:()=>d(null)},"知道了，回到城市 ",P.createElement(Hc,{size:18}))),m==="new"&&P.createElement($r,{title:"開啟一段全新的城市故事",onClose:()=>d(null)},P.createElement("img",{className:"modal-art",src:"./chance.png",alt:"微縮城市與機會信封"}),P.createElement("p",{className:"modal-lead"},"設定參與玩家與遊戲長度後開始新遊戲。每位玩家各帶著 $15,000 出發。"),P.createElement("label",{className:"setup-count"},"玩家人數 ",P.createElement("select",{value:N.count,onChange:W=>U(_e=>({..._e,count:Number(W.target.value)}))},[2,3,4].map(W=>P.createElement("option",{key:W,value:W},W," 人")))),P.createElement("label",{className:"setup-count"},"最多回合 ",P.createElement("select",{"aria-label":"最多回合",value:N.roundOption,onChange:W=>U(_e=>({..._e,roundOption:W.target.value}))},P.createElement("option",{value:"40"},"40 回合"),P.createElement("option",{value:"80"},"80 回合"),P.createElement("option",{value:"custom"},"自訂"),P.createElement("option",{value:"unlimited"},"無限制"))),N.roundOption==="custom"&&P.createElement("label",{className:"round-limit-custom"},"自訂回合數",P.createElement("input",{"aria-label":"自訂回合數",type:"number",min:"1",step:"1",value:N.customRounds,onChange:W=>U(_e=>({..._e,customRounds:W.target.value}))})),P.createElement("div",{className:"player-setup"},N.players.slice(0,N.count).map((W,_e)=>P.createElement("div",{className:"player-setup-row",key:_e},P.createElement("input",{"aria-label":`玩家 ${_e+1} 名稱`,value:W.name,onChange:Re=>U(ne=>({...ne,players:ne.players.map((ye,Ee)=>Ee===_e?{...ye,name:Re.target.value}:ye)}))}),P.createElement("input",{"aria-label":`玩家 ${_e+1} 顏色`,type:"color",value:W.color,onChange:Re=>U(ne=>({...ne,players:ne.players.map((ye,Ee)=>Ee===_e?{...ye,color:Re.target.value}:ye)}))}),P.createElement("select",{value:W.human?"human":"ai",onChange:Re=>U(ne=>({...ne,players:ne.players.map((ye,Ee)=>Ee===_e?{...ye,human:Re.target.value==="human"}:ye)}))},P.createElement("option",{value:"human"},"真人"),P.createElement("option",{value:"ai"},"電腦"))))),P.createElement("button",{className:"primary",disabled:N.roundOption==="custom"&&!B,onClick:G},P.createElement(V_,{size:18}),"開始新遊戲"),P.createElement("button",{className:"secondary full",onClick:()=>d(null)},"繼續目前遊戲")),m==="property"&&Z&&P.createElement($r,{title:"地產手冊",onClose:()=>d(null)},P.createElement("div",{className:"property-card",style:{"--lot":Z.color}},P.createElement("div",{className:"property-banner"},Z.type==="property"?"CITY PROPERTY":"CITY DESTINATION"),P.createElement(uM,{size:24}),P.createElement("h3",null,Z.name),P.createElement("p",null,Z.type==="property"?`街區 ${Z.group+1} · ${he?`${f.players[he.owner].name}的地產`:"尚未出售"}`:"城市公共空間")),Z.type==="property"?P.createElement(P.Fragment,null,P.createElement("div",{className:"property-stats"},P.createElement("div",null,P.createElement("span",null,"地產價格"),P.createElement("b",null,fn(Z.price))),P.createElement("div",null,P.createElement("span",null,"目前租金"),P.createElement("b",null,fn(he?Ep(f,Z):Math.round(Z.price*.18)))),P.createElement("div",null,P.createElement("span",null,"建築等級"),P.createElement("b",null,wR(he==null?void 0:he.level))),P.createElement("div",null,P.createElement("span",null,"建造費"),P.createElement("b",null,fn(uo(Z))))),(he==null?void 0:he.owner)===X.id?P.createElement(P.Fragment,null,P.createElement("p",{className:"property-help"},DR(f,Z,he)),P.createElement("button",{className:"primary",disabled:!Q||!bp(f,Z.id,X.id),onClick:()=>p({type:"BUILD",id:Z.id})},P.createElement(G_,{size:18}),UR(f,Z,he)),P.createElement("button",{className:"secondary full",disabled:!Q,onClick:()=>{p({type:"SELL",id:Z.id}),d(null)}},"變賣地產 · ",fn(Math.floor((Z.price+he.level*uo(Z))*.5)))):O?P.createElement(P.Fragment,null,P.createElement("p",{className:"property-help"},"本次落地可以購買這塊地產。"),P.createElement("button",{className:"primary",onClick:()=>p({type:"BUY"})},P.createElement(pu,{size:18}),"購買地產 · ",fn(Z.price)),P.createElement("button",{className:"secondary full",onClick:()=>{p({type:"SKIP"}),d(null)}},"暫不購買，保留現金")):P.createElement("p",{className:"property-help"},he?"停留在此需向擁有者支付租金。":"擲骰移動到此，即可購買這塊地產。")):P.createElement("p",{className:"property-help"},Z.type==="start"?"每次經過起點，領取 $2,000。":Z.type==="chance"||Z.type==="fund"?"抽一張城市事件卡，看看今天有什麼驚喜。":Z.type==="gojail"?"前往監獄並暫停下一回合。":Z.type==="tax"?`停在這裡支付 ${Z.id===6?"$1,200":"$1,800"} 稅金。`:Z.type==="jail"?"路過僅探訪；由前往監獄格送入才需暫停。":"免費休息，不支付任何費用。")),m==="log"&&P.createElement($r,{title:"本局城市紀錄",onClose:()=>d(null)},P.createElement("div",{className:"full-log"},f.log.map((W,_e)=>P.createElement("p",{key:_e},P.createElement("span",null,String(f.log.length-_e).padStart(2,"0")),W.text)))),(m==="result"||f.stage==="finished"&&m===null)&&P.createElement($r,{title:"這座城市，有了新的大亨",onClose:()=>d("closedResult")},P.createElement("div",{className:"winner"},P.createElement(k_,{size:42}),P.createElement("h3",null,(j=f.players[f.winner])==null?void 0:j.name,"獲勝！"),P.createElement("p",null,"城市的每一步，成就你的不凡眼光。")),P.createElement("div",{className:"rankings"},[...f.players].sort((W,_e)=>so(f,_e.id)-so(f,W.id)).map((W,_e)=>P.createElement("div",{key:W.id},P.createElement("b",null,_e+1),P.createElement(Jv,{id:W.id,player:W,small:!0}),P.createElement("strong",null,W.name),P.createElement("span",null,W.bankrupt?"已破產":fn(so(f,W.id)))))),P.createElement("p",{className:"property-help"},"總資產＝現金＋地產原價＋房屋建造成本"),P.createElement("button",{className:"primary",onClick:G},"再玩一場 ",P.createElement(Hc,{size:18}))))}nM.createRoot(document.getElementById("root")).render(P.createElement(PR,null));
