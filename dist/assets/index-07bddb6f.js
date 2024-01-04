function rE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function iE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lg={exports:{}},Oa={},Mg={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),sE=Symbol.for("react.portal"),oE=Symbol.for("react.fragment"),lE=Symbol.for("react.strict_mode"),aE=Symbol.for("react.profiler"),uE=Symbol.for("react.provider"),cE=Symbol.for("react.context"),dE=Symbol.for("react.forward_ref"),hE=Symbol.for("react.suspense"),fE=Symbol.for("react.memo"),pE=Symbol.for("react.lazy"),Kf=Symbol.iterator;function mE(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fg=Object.assign,jg={};function qi(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Ug}qi.prototype.isReactComponent={};qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zg(){}zg.prototype=qi.prototype;function Ud(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Ug}var Fd=Ud.prototype=new zg;Fd.constructor=Ud;Fg(Fd,qi.prototype);Fd.isPureReactComponent=!0;var qf=Array.isArray,Bg=Object.prototype.hasOwnProperty,jd={current:null},$g={key:!0,ref:!0,__self:!0,__source:!0};function Wg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bg.call(e,r)&&!$g.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:To,type:t,key:s,ref:o,props:i,_owner:jd.current}}function gE(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function _E(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qf=/\/+/g;function Su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_E(""+t.key):e.toString(36)}function _l(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case To:case sE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Su(o,0):r,qf(i)?(n="",t!=null&&(n=t.replace(Qf,"$&/")+"/"),_l(i,e,n,"",function(u){return u})):i!=null&&(zd(i)&&(i=gE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Qf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qf(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Su(s,l);o+=_l(s,e,n,a,i)}else if(a=mE(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Su(s,l++),o+=_l(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ko(t,e,n){if(t==null)return t;var r=[],i=0;return _l(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nt={current:null},vl={transition:null},yE={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:vl,ReactCurrentOwner:jd};Y.Children={map:Ko,forEach:function(t,e,n){Ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ko(t,function(){e++}),e},toArray:function(t){return Ko(t,function(e){return e})||[]},only:function(t){if(!zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=qi;Y.Fragment=oE;Y.Profiler=aE;Y.PureComponent=Ud;Y.StrictMode=lE;Y.Suspense=hE;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yE;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Bg.call(e,a)&&!$g.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:To,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:cE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uE,_context:t},t.Consumer=t};Y.createElement=Wg;Y.createFactory=function(t){var e=Wg.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:dE,render:t}};Y.isValidElement=zd;Y.lazy=function(t){return{$$typeof:pE,_payload:{_status:-1,_result:t},_init:vE}};Y.memo=function(t,e){return{$$typeof:fE,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return nt.current.useCallback(t,e)};Y.useContext=function(t){return nt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return nt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return nt.current.useEffect(t,e)};Y.useId=function(){return nt.current.useId()};Y.useImperativeHandle=function(t,e,n){return nt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return nt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return nt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return nt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return nt.current.useReducer(t,e,n)};Y.useRef=function(t){return nt.current.useRef(t)};Y.useState=function(t){return nt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return nt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return nt.current.useTransition()};Y.version="18.2.0";Mg.exports=Y;var C=Mg.exports;const wE=iE(C),EE=rE({__proto__:null,default:wE},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CE=C,SE=Symbol.for("react.element"),IE=Symbol.for("react.fragment"),TE=Object.prototype.hasOwnProperty,kE=CE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RE={key:!0,ref:!0,__self:!0,__source:!0};function Vg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TE.call(e,r)&&!RE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:SE,type:t,key:s,ref:o,props:i,_owner:kE.current}}Oa.Fragment=IE;Oa.jsx=Vg;Oa.jsxs=Vg;Lg.exports=Oa;var I=Lg.exports,gc={},Hg={exports:{}},wt={},Gg={exports:{}},Kg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,F){var V=A.length;A.push(F);e:for(;0<V;){var pe=V-1>>>1,Re=A[pe];if(0<i(Re,F))A[pe]=F,A[V]=Re,V=pe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var F=A[0],V=A.pop();if(V!==F){A[0]=V;e:for(var pe=0,Re=A.length,Zr=Re>>>1;pe<Zr;){var oe=2*(pe+1)-1,tn=A[oe],Ht=oe+1,ei=A[Ht];if(0>i(tn,V))Ht<Re&&0>i(ei,tn)?(A[pe]=ei,A[Ht]=V,pe=Ht):(A[pe]=tn,A[oe]=V,pe=oe);else if(Ht<Re&&0>i(ei,V))A[pe]=ei,A[Ht]=V,pe=Ht;else break e}}return F}function i(A,F){var V=A.sortIndex-F.sortIndex;return V!==0?V:A.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,_=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=A)r(u),F.sortIndex=F.expirationTime,e(a,F);else break;F=n(u)}}function p(A){if(y=!1,g(A),!v)if(n(a)!==null)v=!0,ft(T);else{var F=n(u);F!==null&&Vt(p,F.startTime-A)}}function T(A,F){v=!1,y&&(y=!1,m(b),b=-1),_=!0;var V=h;try{for(g(F),d=n(a);d!==null&&(!(d.expirationTime>F)||A&&!Te());){var pe=d.callback;if(typeof pe=="function"){d.callback=null,h=d.priorityLevel;var Re=pe(d.expirationTime<=F);F=t.unstable_now(),typeof Re=="function"?d.callback=Re:d===n(a)&&r(a),g(F)}else r(a);d=n(a)}if(d!==null)var Zr=!0;else{var oe=n(u);oe!==null&&Vt(p,oe.startTime-F),Zr=!1}return Zr}finally{d=null,h=V,_=!1}}var P=!1,x=null,b=-1,H=5,M=-1;function Te(){return!(t.unstable_now()-M<H)}function ee(){if(x!==null){var A=t.unstable_now();M=A;var F=!0;try{F=x(!0,A)}finally{F?ke():(P=!1,x=null)}}else P=!1}var ke;if(typeof f=="function")ke=function(){f(ee)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,Wt=Je.port2;Je.port1.onmessage=ee,ke=function(){Wt.postMessage(null)}}else ke=function(){S(ee,0)};function ft(A){x=A,P||(P=!0,ke())}function Vt(A,F){b=S(function(){A(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,ft(T))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var V=h;h=F;try{return A()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,F){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var V=h;h=A;try{return F()}finally{h=V}},t.unstable_scheduleCallback=function(A,F,V){var pe=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?pe+V:pe):V=pe,A){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=V+Re,A={id:c++,callback:F,priorityLevel:A,startTime:V,expirationTime:Re,sortIndex:-1},V>pe?(A.sortIndex=V,e(u,A),n(a)===null&&A===n(u)&&(y?(m(b),b=-1):y=!0,Vt(p,V-pe))):(A.sortIndex=Re,e(a,A),v||_||(v=!0,ft(T))),A},t.unstable_shouldYield=Te,t.unstable_wrapCallback=function(A){var F=h;return function(){var V=h;h=F;try{return A.apply(this,arguments)}finally{h=V}}}})(Kg);Gg.exports=Kg;var xE=Gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg=C,yt=xE;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qg=new Set,Ks={};function Kr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(Ks[t]=e,t=0;t<e.length;t++)Qg.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,NE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yf={},Xf={};function PE(t){return _c.call(Xf,t)?!0:_c.call(Yf,t)?!1:NE.test(t)?Xf[t]=!0:(Yf[t]=!0,!1)}function bE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AE(t,e,n,r){if(e===null||typeof e>"u"||bE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bd,$d);He[e]=new rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bd,$d);He[e]=new rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bd,$d);He[e]=new rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new rt(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AE(e,n,i,r)&&(n=null),r||i===null?PE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),si=Symbol.for("react.portal"),oi=Symbol.for("react.fragment"),Vd=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),Yg=Symbol.for("react.provider"),Xg=Symbol.for("react.context"),Hd=Symbol.for("react.forward_ref"),yc=Symbol.for("react.suspense"),wc=Symbol.for("react.suspense_list"),Gd=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),Jg=Symbol.for("react.offscreen"),Jf=Symbol.iterator;function as(t){return t===null||typeof t!="object"?null:(t=Jf&&t[Jf]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,Iu;function Ts(t){if(Iu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Iu=e&&e[1]||""}return`
`+Iu+t}var Tu=!1;function ku(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ts(t):""}function OE(t){switch(t.tag){case 5:return Ts(t.type);case 16:return Ts("Lazy");case 13:return Ts("Suspense");case 19:return Ts("SuspenseList");case 0:case 2:case 15:return t=ku(t.type,!1),t;case 11:return t=ku(t.type.render,!1),t;case 1:return t=ku(t.type,!0),t;default:return""}}function Ec(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case oi:return"Fragment";case si:return"Portal";case vc:return"Profiler";case Vd:return"StrictMode";case yc:return"Suspense";case wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xg:return(t.displayName||"Context")+".Consumer";case Yg:return(t._context.displayName||"Context")+".Provider";case Hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gd:return e=t.displayName||null,e!==null?e:Ec(t.type)||"Memo";case Dn:e=t._payload,t=t._init;try{return Ec(t(e))}catch{}}return null}function DE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ec(e);case 8:return e===Vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LE(t){var e=Zg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qo(t){t._valueTracker||(t._valueTracker=LE(t))}function e_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Zg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cc(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t_(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function Sc(t,e){t_(t,e);var n=rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ic(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ep(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ic(t,e,n){(e!=="number"||Ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ks=Array.isArray;function Ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(ks(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function n_(t,e){var n=rr(e.value),r=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function np(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function r_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?r_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yo,i_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ME=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(t){ME.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bs[e]=bs[t]})});function s_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bs.hasOwnProperty(t)&&bs[t]?(""+e).trim():e+"px"}function o_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=s_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var UE=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rc(t,e){if(e){if(UE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function xc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nc=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pc=null,Si=null,Ii=null;function rp(t){if(t=xo(t)){if(typeof Pc!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Fa(e),Pc(t.stateNode,t.type,e))}}function l_(t){Si?Ii?Ii.push(t):Ii=[t]:Si=t}function a_(){if(Si){var t=Si,e=Ii;if(Ii=Si=null,rp(t),e)for(t=0;t<e.length;t++)rp(e[t])}}function u_(t,e){return t(e)}function c_(){}var Ru=!1;function d_(t,e,n){if(Ru)return t(e,n);Ru=!0;try{return u_(t,e,n)}finally{Ru=!1,(Si!==null||Ii!==null)&&(c_(),a_())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var r=Fa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var bc=!1;if(gn)try{var us={};Object.defineProperty(us,"passive",{get:function(){bc=!0}}),window.addEventListener("test",us,us),window.removeEventListener("test",us,us)}catch{bc=!1}function FE(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var As=!1,Ul=null,Fl=!1,Ac=null,jE={onError:function(t){As=!0,Ul=t}};function zE(t,e,n,r,i,s,o,l,a){As=!1,Ul=null,FE.apply(jE,arguments)}function BE(t,e,n,r,i,s,o,l,a){if(zE.apply(this,arguments),As){if(As){var u=Ul;As=!1,Ul=null}else throw Error(R(198));Fl||(Fl=!0,Ac=u)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function h_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ip(t){if(qr(t)!==t)throw Error(R(188))}function $E(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ip(i),t;if(s===r)return ip(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function f_(t){return t=$E(t),t!==null?p_(t):null}function p_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p_(t);if(e!==null)return e;t=t.sibling}return null}var m_=yt.unstable_scheduleCallback,sp=yt.unstable_cancelCallback,WE=yt.unstable_shouldYield,VE=yt.unstable_requestPaint,Ie=yt.unstable_now,HE=yt.unstable_getCurrentPriorityLevel,qd=yt.unstable_ImmediatePriority,g_=yt.unstable_UserBlockingPriority,jl=yt.unstable_NormalPriority,GE=yt.unstable_LowPriority,__=yt.unstable_IdlePriority,Da=null,Yt=null;function KE(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Da,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:YE,qE=Math.log,QE=Math.LN2;function YE(t){return t>>>=0,t===0?32:31-(qE(t)/QE|0)|0}var Xo=64,Jo=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Rs(l):(s&=o,s!==0&&(r=Rs(s)))}else o=n&~i,o!==0?r=Rs(o):s!==0&&(r=Rs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function XE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=XE(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v_(){var t=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),t}function xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function ZE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Z=0;function y_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w_,Yd,E_,C_,S_,Dc=!1,Zo=[],Gn=null,Kn=null,qn=null,Ys=new Map,Xs=new Map,Mn=[],eC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function op(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":Ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}function cs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xo(e),e!==null&&Yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function tC(t,e,n,r,i){switch(e){case"focusin":return Gn=cs(Gn,t,e,n,r,i),!0;case"dragenter":return Kn=cs(Kn,t,e,n,r,i),!0;case"mouseover":return qn=cs(qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ys.set(s,cs(Ys.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xs.set(s,cs(Xs.get(s)||null,t,e,n,r,i)),!0}return!1}function I_(t){var e=Er(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=h_(n),e!==null){t.blockedOn=e,S_(t.priority,function(){E_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nc=r,n.target.dispatchEvent(r),Nc=null}else return e=xo(n),e!==null&&Yd(e),t.blockedOn=n,!1;e.shift()}return!0}function lp(t,e,n){yl(t)&&n.delete(e)}function nC(){Dc=!1,Gn!==null&&yl(Gn)&&(Gn=null),Kn!==null&&yl(Kn)&&(Kn=null),qn!==null&&yl(qn)&&(qn=null),Ys.forEach(lp),Xs.forEach(lp)}function ds(t,e){t.blockedOn===e&&(t.blockedOn=null,Dc||(Dc=!0,yt.unstable_scheduleCallback(yt.unstable_NormalPriority,nC)))}function Js(t){function e(i){return ds(i,t)}if(0<Zo.length){ds(Zo[0],t);for(var n=1;n<Zo.length;n++){var r=Zo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gn!==null&&ds(Gn,t),Kn!==null&&ds(Kn,t),qn!==null&&ds(qn,t),Ys.forEach(e),Xs.forEach(e),n=0;n<Mn.length;n++)r=Mn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mn.length&&(n=Mn[0],n.blockedOn===null);)I_(n),n.blockedOn===null&&Mn.shift()}var Ti=In.ReactCurrentBatchConfig,Bl=!0;function rC(t,e,n,r){var i=Z,s=Ti.transition;Ti.transition=null;try{Z=1,Xd(t,e,n,r)}finally{Z=i,Ti.transition=s}}function iC(t,e,n,r){var i=Z,s=Ti.transition;Ti.transition=null;try{Z=4,Xd(t,e,n,r)}finally{Z=i,Ti.transition=s}}function Xd(t,e,n,r){if(Bl){var i=Lc(t,e,n,r);if(i===null)Fu(t,e,r,$l,n),op(t,r);else if(tC(i,t,e,n,r))r.stopPropagation();else if(op(t,r),e&4&&-1<eC.indexOf(t)){for(;i!==null;){var s=xo(i);if(s!==null&&w_(s),s=Lc(t,e,n,r),s===null&&Fu(t,e,r,$l,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fu(t,e,r,null,n)}}var $l=null;function Lc(t,e,n,r){if($l=null,t=Kd(r),t=Er(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=h_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $l=t,null}function T_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HE()){case qd:return 1;case g_:return 4;case jl:case GE:return 16;case __:return 536870912;default:return 16}default:return 16}}var Vn=null,Jd=null,wl=null;function k_(){if(wl)return wl;var t,e=Jd,n=e.length,r,i="value"in Vn?Vn.value:Vn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wl=i.slice(t,1<r?1-r:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function ap(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:ap,this.isPropagationStopped=ap,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var Qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zd=Et(Qi),Ro=_e({},Qi,{view:0,detail:0}),sC=Et(Ro),Nu,Pu,hs,La=_e({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hs&&(hs&&t.type==="mousemove"?(Nu=t.screenX-hs.screenX,Pu=t.screenY-hs.screenY):Pu=Nu=0,hs=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),up=Et(La),oC=_e({},La,{dataTransfer:0}),lC=Et(oC),aC=_e({},Ro,{relatedTarget:0}),bu=Et(aC),uC=_e({},Qi,{animationName:0,elapsedTime:0,pseudoElement:0}),cC=Et(uC),dC=_e({},Qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hC=Et(dC),fC=_e({},Qi,{data:0}),cp=Et(fC),pC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _C(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gC[t])?!!e[t]:!1}function eh(){return _C}var vC=_e({},Ro,{key:function(t){if(t.key){var e=pC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eh,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yC=Et(vC),wC=_e({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dp=Et(wC),EC=_e({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eh}),CC=Et(EC),SC=_e({},Qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),IC=Et(SC),TC=_e({},La,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kC=Et(TC),RC=[9,13,27,32],th=gn&&"CompositionEvent"in window,Os=null;gn&&"documentMode"in document&&(Os=document.documentMode);var xC=gn&&"TextEvent"in window&&!Os,R_=gn&&(!th||Os&&8<Os&&11>=Os),hp=String.fromCharCode(32),fp=!1;function x_(t,e){switch(t){case"keyup":return RC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var li=!1;function NC(t,e){switch(t){case"compositionend":return N_(e);case"keypress":return e.which!==32?null:(fp=!0,hp);case"textInput":return t=e.data,t===hp&&fp?null:t;default:return null}}function PC(t,e){if(li)return t==="compositionend"||!th&&x_(t,e)?(t=k_(),wl=Jd=Vn=null,li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R_&&e.locale!=="ko"?null:e.data;default:return null}}var bC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bC[t.type]:e==="textarea"}function P_(t,e,n,r){l_(r),e=Wl(e,"onChange"),0<e.length&&(n=new Zd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ds=null,Zs=null;function AC(t){B_(t,0)}function Ma(t){var e=ci(t);if(e_(e))return t}function OC(t,e){if(t==="change")return e}var b_=!1;if(gn){var Au;if(gn){var Ou="oninput"in document;if(!Ou){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),Ou=typeof mp.oninput=="function"}Au=Ou}else Au=!1;b_=Au&&(!document.documentMode||9<document.documentMode)}function gp(){Ds&&(Ds.detachEvent("onpropertychange",A_),Zs=Ds=null)}function A_(t){if(t.propertyName==="value"&&Ma(Zs)){var e=[];P_(e,Zs,t,Kd(t)),d_(AC,e)}}function DC(t,e,n){t==="focusin"?(gp(),Ds=e,Zs=n,Ds.attachEvent("onpropertychange",A_)):t==="focusout"&&gp()}function LC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ma(Zs)}function MC(t,e){if(t==="click")return Ma(e)}function UC(t,e){if(t==="input"||t==="change")return Ma(e)}function FC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:FC;function eo(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_c.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function _p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vp(t,e){var n=_p(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_p(n)}}function O_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function D_(){for(var t=window,e=Ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ml(t.document)}return e}function nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jC(t){var e=D_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O_(n.ownerDocument.documentElement,n)){if(r!==null&&nh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vp(n,s);var o=vp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zC=gn&&"documentMode"in document&&11>=document.documentMode,ai=null,Mc=null,Ls=null,Uc=!1;function yp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uc||ai==null||ai!==Ml(r)||(r=ai,"selectionStart"in r&&nh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ls&&eo(Ls,r)||(Ls=r,r=Wl(Mc,"onSelect"),0<r.length&&(e=new Zd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ai)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ui={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Du={},L_={};gn&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function Ua(t){if(Du[t])return Du[t];if(!ui[t])return t;var e=ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return Du[t]=e[n];return t}var M_=Ua("animationend"),U_=Ua("animationiteration"),F_=Ua("animationstart"),j_=Ua("transitionend"),z_=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){z_.set(t,e),Kr(e,[t])}for(var Lu=0;Lu<wp.length;Lu++){var Mu=wp[Lu],BC=Mu.toLowerCase(),$C=Mu[0].toUpperCase()+Mu.slice(1);ar(BC,"on"+$C)}ar(M_,"onAnimationEnd");ar(U_,"onAnimationIteration");ar(F_,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(j_,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WC=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function Ep(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,BE(r,e,void 0,t),t.currentTarget=null}function B_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Ep(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Ep(i,l,u),s=a}}}if(Fl)throw t=Ac,Fl=!1,Ac=null,t}function ue(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var r=t+"__bubble";n.has(r)||($_(e,t,2,!1),n.add(r))}function Uu(t,e,n){var r=0;e&&(r|=4),$_(n,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[nl]){t[nl]=!0,Qg.forEach(function(n){n!=="selectionchange"&&(WC.has(n)||Uu(n,!1,t),Uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,Uu("selectionchange",!1,e))}}function $_(t,e,n,r){switch(T_(e)){case 1:var i=rC;break;case 4:i=iC;break;default:i=Xd}n=i.bind(null,e,n,t),i=void 0,!bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Er(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}d_(function(){var u=s,c=Kd(n),d=[];e:{var h=z_.get(t);if(h!==void 0){var _=Zd,v=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":_=yC;break;case"focusin":v="focus",_=bu;break;case"focusout":v="blur",_=bu;break;case"beforeblur":case"afterblur":_=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=lC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=CC;break;case M_:case U_:case F_:_=cC;break;case j_:_=IC;break;case"scroll":_=sC;break;case"wheel":_=kC;break;case"copy":case"cut":case"paste":_=hC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=dp}var y=(e&4)!==0,S=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var p=g.stateNode;if(g.tag===5&&p!==null&&(g=p,m!==null&&(p=Qs(f,m),p!=null&&y.push(no(f,p,g)))),S)break;f=f.return}0<y.length&&(h=new _(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==Nc&&(v=n.relatedTarget||n.fromElement)&&(Er(v)||v[_n]))break e;if((_||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?Er(v):null,v!==null&&(S=qr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=up,p="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=dp,p="onPointerLeave",m="onPointerEnter",f="pointer"),S=_==null?h:ci(_),g=v==null?h:ci(v),h=new y(p,f+"leave",_,n,c),h.target=S,h.relatedTarget=g,p=null,Er(c)===u&&(y=new y(m,f+"enter",v,n,c),y.target=g,y.relatedTarget=S,p=y),S=p,_&&v)t:{for(y=_,m=v,f=0,g=y;g;g=ti(g))f++;for(g=0,p=m;p;p=ti(p))g++;for(;0<f-g;)y=ti(y),f--;for(;0<g-f;)m=ti(m),g--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=ti(y),m=ti(m)}y=null}else y=null;_!==null&&Cp(d,h,_,y,!1),v!==null&&S!==null&&Cp(d,S,v,y,!0)}}e:{if(h=u?ci(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var T=OC;else if(pp(h))if(b_)T=UC;else{T=LC;var P=DC}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=MC);if(T&&(T=T(t,u))){P_(d,T,n,c);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ic(h,"number",h.value)}switch(P=u?ci(u):window,t){case"focusin":(pp(P)||P.contentEditable==="true")&&(ai=P,Mc=u,Ls=null);break;case"focusout":Ls=Mc=ai=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,yp(d,n,c);break;case"selectionchange":if(zC)break;case"keydown":case"keyup":yp(d,n,c)}var x;if(th)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else li?x_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(R_&&n.locale!=="ko"&&(li||b!=="onCompositionStart"?b==="onCompositionEnd"&&li&&(x=k_()):(Vn=c,Jd="value"in Vn?Vn.value:Vn.textContent,li=!0)),P=Wl(u,b),0<P.length&&(b=new cp(b,t,null,n,c),d.push({event:b,listeners:P}),x?b.data=x:(x=N_(n),x!==null&&(b.data=x)))),(x=xC?NC(t,n):PC(t,n))&&(u=Wl(u,"onBeforeInput"),0<u.length&&(c=new cp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}B_(d,e)})}function no(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qs(t,n),s!=null&&r.unshift(no(t,s,i)),s=Qs(t,e),s!=null&&r.push(no(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Qs(n,s),a!=null&&o.unshift(no(n,a,l))):i||(a=Qs(n,s),a!=null&&o.push(no(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VC=/\r\n?/g,HC=/\u0000|\uFFFD/g;function Sp(t){return(typeof t=="string"?t:""+t).replace(VC,`
`).replace(HC,"")}function rl(t,e,n){if(e=Sp(e),Sp(t)!==e&&n)throw Error(R(425))}function Vl(){}var Fc=null,jc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,GC=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,KC=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(t){return Ip.resolve(null).then(t).catch(qC)}:Bc;function qC(t){setTimeout(function(){throw t})}function ju(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Js(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Js(e)}function Qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yi=Math.random().toString(36).slice(2),qt="__reactFiber$"+Yi,ro="__reactProps$"+Yi,_n="__reactContainer$"+Yi,$c="__reactEvents$"+Yi,QC="__reactListeners$"+Yi,YC="__reactHandles$"+Yi;function Er(t){var e=t[qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tp(t);t!==null;){if(n=t[qt])return n;t=Tp(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[qt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Fa(t){return t[ro]||null}var Wc=[],di=-1;function ur(t){return{current:t}}function de(t){0>di||(t.current=Wc[di],Wc[di]=null,di--)}function ae(t,e){di++,Wc[di]=t.current,t.current=e}var ir={},Ye=ur(ir),at=ur(!1),Ar=ir;function Mi(t,e){var n=t.type.contextTypes;if(!n)return ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function Hl(){de(at),de(Ye)}function kp(t,e,n){if(Ye.current!==ir)throw Error(R(168));ae(Ye,e),ae(at,n)}function W_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,DE(t)||"Unknown",i));return _e({},n,r)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Ar=Ye.current,ae(Ye,t),ae(at,at.current),!0}function Rp(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=W_(t,e,Ar),r.__reactInternalMemoizedMergedChildContext=t,de(at),de(Ye),ae(Ye,t)):de(at),ae(at,n)}var ln=null,ja=!1,zu=!1;function V_(t){ln===null?ln=[t]:ln.push(t)}function XC(t){ja=!0,V_(t)}function cr(){if(!zu&&ln!==null){zu=!0;var t=0,e=Z;try{var n=ln;for(Z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ln=null,ja=!1}catch(i){throw ln!==null&&(ln=ln.slice(t+1)),m_(qd,cr),i}finally{Z=e,zu=!1}}return null}var hi=[],fi=0,Kl=null,ql=0,St=[],It=0,Or=null,an=1,un="";function _r(t,e){hi[fi++]=ql,hi[fi++]=Kl,Kl=t,ql=e}function H_(t,e,n){St[It++]=an,St[It++]=un,St[It++]=Or,Or=t;var r=an;t=un;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,an=1<<32-Ft(e)+i|n<<i|r,un=s+t}else an=1<<s|n<<i|r,un=t}function rh(t){t.return!==null&&(_r(t,1),H_(t,1,0))}function ih(t){for(;t===Kl;)Kl=hi[--fi],hi[fi]=null,ql=hi[--fi],hi[fi]=null;for(;t===Or;)Or=St[--It],St[It]=null,un=St[--It],St[It]=null,an=St[--It],St[It]=null}var vt=null,mt=null,fe=!1,Dt=null;function G_(t,e){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,mt=Qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:an,overflow:un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,mt=null,!0):!1;default:return!1}}function Vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hc(t){if(fe){var e=mt;if(e){var n=e;if(!xp(t,e)){if(Vc(t))throw Error(R(418));e=Qn(n.nextSibling);var r=vt;e&&xp(t,e)?G_(r,n):(t.flags=t.flags&-4097|2,fe=!1,vt=t)}}else{if(Vc(t))throw Error(R(418));t.flags=t.flags&-4097|2,fe=!1,vt=t}}}function Np(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function il(t){if(t!==vt)return!1;if(!fe)return Np(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=mt)){if(Vc(t))throw K_(),Error(R(418));for(;e;)G_(t,e),e=Qn(e.nextSibling)}if(Np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=Qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=vt?Qn(t.stateNode.nextSibling):null;return!0}function K_(){for(var t=mt;t;)t=Qn(t.nextSibling)}function Ui(){mt=vt=null,fe=!1}function sh(t){Dt===null?Dt=[t]:Dt.push(t)}var JC=In.ReactCurrentBatchConfig;function bt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ql=ur(null),Yl=null,pi=null,oh=null;function lh(){oh=pi=Yl=null}function ah(t){var e=Ql.current;de(Ql),t._currentValue=e}function Gc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ki(t,e){Yl=t,oh=pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(st=!0),t.firstContext=null)}function Rt(t){var e=t._currentValue;if(oh!==t)if(t={context:t,memoizedValue:e,next:null},pi===null){if(Yl===null)throw Error(R(308));pi=t,Yl.dependencies={lanes:0,firstContext:t}}else pi=pi.next=t;return e}var Cr=null;function uh(t){Cr===null?Cr=[t]:Cr.push(t)}function q_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,uh(e)):(n.next=i.next,i.next=n),e.interleaved=n,vn(t,r)}function vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ln=!1;function ch(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vn(t,n)}return i=r.interleaved,i===null?(e.next=e,uh(r)):(e.next=i.next,i.next=e),r.interleaved=e,vn(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}function Pp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xl(t,e,n,r){var i=t.updateQueue;Ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(h=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(_,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(_,d,h):v,h==null)break e;d=_e({},d,h);break e;case 2:Ln=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=_,a=d):c=c.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=d}}function bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Y_=new qg.Component().refs;function Kc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var za={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Jn(t),s=fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(jt(e,t,i,r),Cl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),i=Jn(t),s=fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(jt(e,t,i,r),Cl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=Jn(t),i=fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yn(t,i,r),e!==null&&(jt(e,t,r,n),Cl(e,t,r))}};function Ap(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!eo(n,r)||!eo(i,s):!0}function X_(t,e,n){var r=!1,i=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=ut(e)?Ar:Ye.current,r=e.contextTypes,s=(r=r!=null)?Mi(t,i):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=za,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Op(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&za.enqueueReplaceState(e,e.state,null)}function qc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Y_,ch(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=ut(e)?Ar:Ye.current,i.context=Mi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&za.enqueueReplaceState(i,i.state,null),Xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Y_&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dp(t){var e=t._init;return e(t._payload)}function J_(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Zn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,p){return f===null||f.tag!==6?(f=Ku(g,m.mode,p),f.return=m,f):(f=i(f,g),f.return=m,f)}function a(m,f,g,p){var T=g.type;return T===oi?c(m,f,g.props.children,p,g.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Dn&&Dp(T)===f.type)?(p=i(f,g.props),p.ref=fs(m,f,g),p.return=m,p):(p=xl(g.type,g.key,g.props,null,m.mode,p),p.ref=fs(m,f,g),p.return=m,p)}function u(m,f,g,p){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=qu(g,m.mode,p),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,p,T){return f===null||f.tag!==7?(f=xr(g,m.mode,p,T),f.return=m,f):(f=i(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ku(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case qo:return g=xl(f.type,f.key,f.props,null,m.mode,g),g.ref=fs(m,null,f),g.return=m,g;case si:return f=qu(f,m.mode,g),f.return=m,f;case Dn:var p=f._init;return d(m,p(f._payload),g)}if(ks(f)||as(f))return f=xr(f,m.mode,g,null),f.return=m,f;sl(m,f)}return null}function h(m,f,g,p){var T=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:l(m,f,""+g,p);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qo:return g.key===T?a(m,f,g,p):null;case si:return g.key===T?u(m,f,g,p):null;case Dn:return T=g._init,h(m,f,T(g._payload),p)}if(ks(g)||as(g))return T!==null?null:c(m,f,g,p,null);sl(m,g)}return null}function _(m,f,g,p,T){if(typeof p=="string"&&p!==""||typeof p=="number")return m=m.get(g)||null,l(f,m,""+p,T);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case qo:return m=m.get(p.key===null?g:p.key)||null,a(f,m,p,T);case si:return m=m.get(p.key===null?g:p.key)||null,u(f,m,p,T);case Dn:var P=p._init;return _(m,f,g,P(p._payload),T)}if(ks(p)||as(p))return m=m.get(g)||null,c(f,m,p,T,null);sl(f,p)}return null}function v(m,f,g,p){for(var T=null,P=null,x=f,b=f=0,H=null;x!==null&&b<g.length;b++){x.index>b?(H=x,x=null):H=x.sibling;var M=h(m,x,g[b],p);if(M===null){x===null&&(x=H);break}t&&x&&M.alternate===null&&e(m,x),f=s(M,f,b),P===null?T=M:P.sibling=M,P=M,x=H}if(b===g.length)return n(m,x),fe&&_r(m,b),T;if(x===null){for(;b<g.length;b++)x=d(m,g[b],p),x!==null&&(f=s(x,f,b),P===null?T=x:P.sibling=x,P=x);return fe&&_r(m,b),T}for(x=r(m,x);b<g.length;b++)H=_(x,m,b,g[b],p),H!==null&&(t&&H.alternate!==null&&x.delete(H.key===null?b:H.key),f=s(H,f,b),P===null?T=H:P.sibling=H,P=H);return t&&x.forEach(function(Te){return e(m,Te)}),fe&&_r(m,b),T}function y(m,f,g,p){var T=as(g);if(typeof T!="function")throw Error(R(150));if(g=T.call(g),g==null)throw Error(R(151));for(var P=T=null,x=f,b=f=0,H=null,M=g.next();x!==null&&!M.done;b++,M=g.next()){x.index>b?(H=x,x=null):H=x.sibling;var Te=h(m,x,M.value,p);if(Te===null){x===null&&(x=H);break}t&&x&&Te.alternate===null&&e(m,x),f=s(Te,f,b),P===null?T=Te:P.sibling=Te,P=Te,x=H}if(M.done)return n(m,x),fe&&_r(m,b),T;if(x===null){for(;!M.done;b++,M=g.next())M=d(m,M.value,p),M!==null&&(f=s(M,f,b),P===null?T=M:P.sibling=M,P=M);return fe&&_r(m,b),T}for(x=r(m,x);!M.done;b++,M=g.next())M=_(x,m,b,M.value,p),M!==null&&(t&&M.alternate!==null&&x.delete(M.key===null?b:M.key),f=s(M,f,b),P===null?T=M:P.sibling=M,P=M);return t&&x.forEach(function(ee){return e(m,ee)}),fe&&_r(m,b),T}function S(m,f,g,p){if(typeof g=="object"&&g!==null&&g.type===oi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case qo:e:{for(var T=g.key,P=f;P!==null;){if(P.key===T){if(T=g.type,T===oi){if(P.tag===7){n(m,P.sibling),f=i(P,g.props.children),f.return=m,m=f;break e}}else if(P.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Dn&&Dp(T)===P.type){n(m,P.sibling),f=i(P,g.props),f.ref=fs(m,P,g),f.return=m,m=f;break e}n(m,P);break}else e(m,P);P=P.sibling}g.type===oi?(f=xr(g.props.children,m.mode,p,g.key),f.return=m,m=f):(p=xl(g.type,g.key,g.props,null,m.mode,p),p.ref=fs(m,f,g),p.return=m,m=p)}return o(m);case si:e:{for(P=g.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=qu(g,m.mode,p),f.return=m,m=f}return o(m);case Dn:return P=g._init,S(m,f,P(g._payload),p)}if(ks(g))return v(m,f,g,p);if(as(g))return y(m,f,g,p);sl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Ku(g,m.mode,p),f.return=m,m=f),o(m)):n(m,f)}return S}var Fi=J_(!0),Z_=J_(!1),No={},Xt=ur(No),io=ur(No),so=ur(No);function Sr(t){if(t===No)throw Error(R(174));return t}function dh(t,e){switch(ae(so,e),ae(io,t),ae(Xt,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kc(e,t)}de(Xt),ae(Xt,e)}function ji(){de(Xt),de(io),de(so)}function ev(t){Sr(so.current);var e=Sr(Xt.current),n=kc(e,t.type);e!==n&&(ae(io,t),ae(Xt,n))}function hh(t){io.current===t&&(de(Xt),de(io))}var me=ur(0);function Jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bu=[];function fh(){for(var t=0;t<Bu.length;t++)Bu[t]._workInProgressVersionPrimary=null;Bu.length=0}var Sl=In.ReactCurrentDispatcher,$u=In.ReactCurrentBatchConfig,Dr=0,ge=null,Ae=null,Ue=null,Zl=!1,Ms=!1,oo=0,ZC=0;function Ge(){throw Error(R(321))}function ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bt(t[n],e[n]))return!1;return!0}function mh(t,e,n,r,i,s){if(Dr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?rS:iS,t=n(r,i),Ms){s=0;do{if(Ms=!1,oo=0,25<=s)throw Error(R(301));s+=1,Ue=Ae=null,e.updateQueue=null,Sl.current=sS,t=n(r,i)}while(Ms)}if(Sl.current=ea,e=Ae!==null&&Ae.next!==null,Dr=0,Ue=Ae=ge=null,Zl=!1,e)throw Error(R(300));return t}function gh(){var t=oo!==0;return oo=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ge.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function xt(){if(Ae===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=Ue===null?ge.memoizedState:Ue.next;if(e!==null)Ue=e,Ae=t;else{if(t===null)throw Error(R(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ue===null?ge.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function lo(t,e){return typeof e=="function"?e(t):e}function Wu(t){var e=xt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Dr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ge.lanes|=c,Lr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Bt(r,e.memoizedState)||(st=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vu(t){var e=xt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bt(s,e.memoizedState)||(st=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function tv(){}function nv(t,e){var n=ge,r=xt(),i=e(),s=!Bt(r.memoizedState,i);if(s&&(r.memoizedState=i,st=!0),r=r.queue,_h(sv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,ao(9,iv.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(R(349));Dr&30||rv(n,e,i)}return i}function rv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iv(t,e,n,r){e.value=n,e.getSnapshot=r,ov(e)&&lv(t)}function sv(t,e,n){return n(function(){ov(e)&&lv(t)})}function ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bt(t,n)}catch{return!0}}function lv(t){var e=vn(t,1);e!==null&&jt(e,t,1,-1)}function Lp(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},e.queue=t,t=t.dispatch=nS.bind(null,ge,t),[e.memoizedState,t]}function ao(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function av(){return xt().memoizedState}function Il(t,e,n,r){var i=Kt();ge.flags|=t,i.memoizedState=ao(1|e,n,void 0,r===void 0?null:r)}function Ba(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var o=Ae.memoizedState;if(s=o.destroy,r!==null&&ph(r,o.deps)){i.memoizedState=ao(e,n,s,r);return}}ge.flags|=t,i.memoizedState=ao(1|e,n,s,r)}function Mp(t,e){return Il(8390656,8,t,e)}function _h(t,e){return Ba(2048,8,t,e)}function uv(t,e){return Ba(4,2,t,e)}function cv(t,e){return Ba(4,4,t,e)}function dv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hv(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4,4,dv.bind(null,e,t),n)}function vh(){}function fv(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ph(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pv(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ph(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mv(t,e,n){return Dr&21?(Bt(n,e)||(n=v_(),ge.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,st=!0),t.memoizedState=n)}function eS(t,e){var n=Z;Z=n!==0&&4>n?n:4,t(!0);var r=$u.transition;$u.transition={};try{t(!1),e()}finally{Z=n,$u.transition=r}}function gv(){return xt().memoizedState}function tS(t,e,n){var r=Jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_v(t))vv(e,n);else if(n=q_(t,e,n,r),n!==null){var i=tt();jt(n,t,r,i),yv(n,e,r)}}function nS(t,e,n){var r=Jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_v(t))vv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Bt(l,o)){var a=e.interleaved;a===null?(i.next=i,uh(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=q_(t,e,i,r),n!==null&&(i=tt(),jt(n,t,r,i),yv(n,e,r))}}function _v(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function vv(t,e){Ms=Zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}var ea={readContext:Rt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},rS={readContext:Rt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:Mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,dv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tS.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:Lp,useDebugValue:vh,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=Lp(!1),e=t[0];return t=eS.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Kt();if(fe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),ze===null)throw Error(R(349));Dr&30||rv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Mp(sv.bind(null,r,s,t),[t]),r.flags|=2048,ao(9,iv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=ze.identifierPrefix;if(fe){var n=un,r=an;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iS={readContext:Rt,useCallback:fv,useContext:Rt,useEffect:_h,useImperativeHandle:hv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:pv,useReducer:Wu,useRef:av,useState:function(){return Wu(lo)},useDebugValue:vh,useDeferredValue:function(t){var e=xt();return mv(e,Ae.memoizedState,t)},useTransition:function(){var t=Wu(lo)[0],e=xt().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1},sS={readContext:Rt,useCallback:fv,useContext:Rt,useEffect:_h,useImperativeHandle:hv,useInsertionEffect:uv,useLayoutEffect:cv,useMemo:pv,useReducer:Vu,useRef:av,useState:function(){return Vu(lo)},useDebugValue:vh,useDeferredValue:function(t){var e=xt();return Ae===null?e.memoizedState=t:mv(e,Ae.memoizedState,t)},useTransition:function(){var t=Vu(lo)[0],e=xt().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:gv,unstable_isNewReconciler:!1};function zi(t,e){try{var n="",r=e;do n+=OE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oS=typeof WeakMap=="function"?WeakMap:Map;function wv(t,e,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){na||(na=!0,sd=r),Qc(t,e)},n}function Ev(t,e,n){n=fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qc(t,e),typeof r!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Up(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wS.bind(null,t,e,n),e.then(t,t))}function Fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fn(-1,1),e.tag=2,Yn(n,e,1))),n.lanes|=1),t)}var lS=In.ReactCurrentOwner,st=!1;function et(t,e,n,r){e.child=t===null?Z_(e,null,n,r):Fi(e,t.child,n,r)}function zp(t,e,n,r,i){n=n.render;var s=e.ref;return ki(e,i),r=mh(t,e,n,r,s,i),n=gh(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(fe&&n&&rh(e),e.flags|=1,et(t,e,r,i),e.child)}function Bp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!kh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cv(t,e,s,r,i)):(t=xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(o,r)&&t.ref===e.ref)return yn(t,e,i)}return e.flags|=1,t=Zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Cv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(eo(s,r)&&t.ref===e.ref)if(st=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(st=!0);else return e.lanes=t.lanes,yn(t,e,i)}return Yc(t,e,n,r,i)}function Sv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(gi,pt),pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(gi,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(gi,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(gi,pt),pt|=r;return et(t,e,i,n),e.child}function Iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yc(t,e,n,r,i){var s=ut(n)?Ar:Ye.current;return s=Mi(e,s),ki(e,i),n=mh(t,e,n,r,s,i),r=gh(),t!==null&&!st?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(fe&&r&&rh(e),e.flags|=1,et(t,e,n,i),e.child)}function $p(t,e,n,r,i){if(ut(n)){var s=!0;Gl(e)}else s=!1;if(ki(e,i),e.stateNode===null)Tl(t,e),X_(e,n,r),qc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ut(n)?Ar:Ye.current,u=Mi(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Op(e,o,r,u),Ln=!1;var h=e.memoizedState;o.state=h,Xl(e,r,o,i),a=e.memoizedState,l!==r||h!==a||at.current||Ln?(typeof c=="function"&&(Kc(e,n,c,r),a=e.memoizedState),(l=Ln||Ap(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Q_(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:bt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Rt(a):(a=ut(n)?Ar:Ye.current,a=Mi(e,a));var _=n.getDerivedStateFromProps;(c=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Op(e,o,r,a),Ln=!1,h=e.memoizedState,o.state=h,Xl(e,r,o,i);var v=e.memoizedState;l!==d||h!==v||at.current||Ln?(typeof _=="function"&&(Kc(e,n,_,r),v=e.memoizedState),(u=Ln||Ap(e,n,u,r,h,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Xc(t,e,n,r,s,i)}function Xc(t,e,n,r,i,s){Iv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Rp(e,n,!1),yn(t,e,s);r=e.stateNode,lS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fi(e,t.child,null,s),e.child=Fi(e,null,l,s)):et(t,e,l,s),e.memoizedState=r.state,i&&Rp(e,n,!0),e.child}function Tv(t){var e=t.stateNode;e.pendingContext?kp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kp(t,e.context,!1),dh(t,e.containerInfo)}function Wp(t,e,n,r,i){return Ui(),sh(i),e.flags|=256,et(t,e,n,r),e.child}var Jc={dehydrated:null,treeContext:null,retryLane:0};function Zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function kv(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(me,i&1),t===null)return Hc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Va(o,r,0,null),t=xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zc(n),e.memoizedState=Jc,t):yh(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return aS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Zn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Zn(l,s):(s=xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jc,r}return s=t.child,t=s.sibling,r=Zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function yh(t,e){return e=Va({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ol(t,e,n,r){return r!==null&&sh(r),Fi(e,t.child,null,n),t=yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hu(Error(R(422))),ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Va({mode:"visible",children:r.children},i,0,null),s=xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Fi(e,t.child,null,o),e.child.memoizedState=Zc(o),e.memoizedState=Jc,s);if(!(e.mode&1))return ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(R(419)),r=Hu(s,r,void 0),ol(t,e,o,r)}if(l=(o&t.childLanes)!==0,st||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vn(t,i),jt(r,t,i,-1))}return Th(),r=Hu(Error(R(421))),ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ES.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,mt=Qn(i.nextSibling),vt=e,fe=!0,Dt=null,t!==null&&(St[It++]=an,St[It++]=un,St[It++]=Or,an=t.id,un=t.overflow,Or=e),e=yh(e,r.children),e.flags|=4096,e)}function Vp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gc(t.return,e,n)}function Gu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,n,e);else if(t.tag===19)Vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Jl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Jl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gu(e,!0,n,null,s);break;case"together":Gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uS(t,e,n){switch(e.tag){case 3:Tv(e),Ui();break;case 5:ev(e);break;case 1:ut(e.type)&&Gl(e);break;case 4:dh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(Ql,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?kv(t,e,n):(ae(me,me.current&1),t=yn(t,e,n),t!==null?t.sibling:null);ae(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Rv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,Sv(t,e,n)}return yn(t,e,n)}var xv,ed,Nv,Pv;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};Nv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Sr(Xt.current);var s=null;switch(n){case"input":i=Cc(t,i),r=Cc(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=Tc(t,i),r=Tc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vl)}Rc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ue("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ps(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cS(t,e,n){var r=e.pendingProps;switch(ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return ut(e.type)&&Hl(),Ke(e),null;case 3:return r=e.stateNode,ji(),de(at),de(Ye),fh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(ad(Dt),Dt=null))),ed(t,e),Ke(e),null;case 5:hh(e);var i=Sr(so.current);if(n=e.type,t!==null&&e.stateNode!=null)Nv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return Ke(e),null}if(t=Sr(Xt.current),il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qt]=e,r[ro]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)ue(xs[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Zf(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":tp(r,s),ue("invalid",r)}Rc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),i=["children",""+l]):Ks.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":Qo(r),ep(r,s,!0);break;case"textarea":Qo(r),np(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=r_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qt]=e,t[ro]=r,xv(t,e,!1,!1),e.stateNode=t;e:{switch(o=xc(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)ue(xs[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Zf(t,r),i=Cc(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),ue("invalid",t);break;case"textarea":tp(t,r),i=Tc(t,r),ue("invalid",t);break;default:i=r}Rc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?o_(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&i_(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&qs(t,a):typeof a=="number"&&qs(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ks.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ue("scroll",t):a!=null&&Wd(t,s,a,o))}switch(n){case"input":Qo(t),ep(t,r,!1);break;case"textarea":Qo(t),np(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)Pv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Sr(so.current),Sr(Xt.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[qt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=e,e.stateNode=r}return Ke(e),null;case 13:if(de(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&mt!==null&&e.mode&1&&!(e.flags&128))K_(),Ui(),e.flags|=98560,s=!1;else if(s=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[qt]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Dt!==null&&(ad(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?De===0&&(De=3):Th())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return ji(),ed(t,e),t===null&&to(e.stateNode.containerInfo),Ke(e),null;case 10:return ah(e.type._context),Ke(e),null;case 17:return ut(e.type)&&Hl(),Ke(e),null;case 19:if(de(me),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ps(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Jl(t),o!==null){for(e.flags|=128,ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>Bi&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=Jl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return Ke(e),null}else 2*Ie()-s.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=me.current,ae(me,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return Ih(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pt&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function dS(t,e){switch(ih(e),e.tag){case 1:return ut(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ji(),de(at),de(Ye),fh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hh(e),null;case 13:if(de(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(me),null;case 4:return ji(),null;case 10:return ah(e.type._context),null;case 22:case 23:return Ih(),null;case 24:return null;default:return null}}var ll=!1,qe=!1,hS=typeof WeakSet=="function"?WeakSet:Set,O=null;function mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function td(t,e,n){try{n()}catch(r){ve(t,e,r)}}var Hp=!1;function fS(t,e){if(Fc=Bl,t=D_(),nh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:t,selectionRange:n},Bl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:bt(e.type,y),S);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(p){ve(e,e.return,p)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return v=Hp,Hp=!1,v}function Us(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&td(e,n,s)}i=i.next}while(i!==r)}}function $a(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bv(t){var e=t.alternate;e!==null&&(t.alternate=null,bv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qt],delete e[ro],delete e[$c],delete e[QC],delete e[YC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function id(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}var $e=null,At=!1;function An(t,e,n){for(n=n.child;n!==null;)Ov(t,e,n),n=n.sibling}function Ov(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Da,n)}catch{}switch(n.tag){case 5:qe||mi(n,e);case 6:var r=$e,i=At;$e=null,An(t,e,n),$e=r,At=i,$e!==null&&(At?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(At?(t=$e,n=n.stateNode,t.nodeType===8?ju(t.parentNode,n):t.nodeType===1&&ju(t,n),Js(t)):ju($e,n.stateNode));break;case 4:r=$e,i=At,$e=n.stateNode.containerInfo,At=!0,An(t,e,n),$e=r,At=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&td(n,e,o),i=i.next}while(i!==r)}An(t,e,n);break;case 1:if(!qe&&(mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ve(n,e,l)}An(t,e,n);break;case 21:An(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,An(t,e,n),qe=r):An(t,e,n);break;default:An(t,e,n)}}function Kp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hS),e.forEach(function(r){var i=CS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,At=!1;break e;case 3:$e=l.stateNode.containerInfo,At=!0;break e;case 4:$e=l.stateNode.containerInfo,At=!0;break e}l=l.return}if($e===null)throw Error(R(160));Ov(s,o,i),$e=null,At=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dv(e,t),e=e.sibling}function Dv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(e,t),Gt(t),r&4){try{Us(3,t,t.return),$a(3,t)}catch(y){ve(t,t.return,y)}try{Us(5,t,t.return)}catch(y){ve(t,t.return,y)}}break;case 1:Pt(e,t),Gt(t),r&512&&n!==null&&mi(n,n.return);break;case 5:if(Pt(e,t),Gt(t),r&512&&n!==null&&mi(n,n.return),t.flags&32){var i=t.stateNode;try{qs(i,"")}catch(y){ve(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&t_(i,s),xc(l,o);var u=xc(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?o_(i,d):c==="dangerouslySetInnerHTML"?i_(i,d):c==="children"?qs(i,d):Wd(i,c,d,u)}switch(l){case"input":Sc(i,s);break;case"textarea":n_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ci(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[ro]=s}catch(y){ve(t,t.return,y)}}break;case 6:if(Pt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ve(t,t.return,y)}}break;case 3:if(Pt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Js(e.containerInfo)}catch(y){ve(t,t.return,y)}break;case 4:Pt(e,t),Gt(t);break;case 13:Pt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ch=Ie())),r&4&&Kp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||c,Pt(e,t),qe=u):Pt(e,t),Gt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(d=O=c;O!==null;){switch(h=O,_=h.child,h.tag){case 0:case 11:case 14:case 15:Us(4,h,h.return);break;case 1:mi(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ve(r,n,y)}}break;case 5:mi(h,h.return);break;case 22:if(h.memoizedState!==null){Qp(d);continue}}_!==null?(_.return=h,O=_):Qp(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=s_("display",o))}catch(y){ve(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){ve(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pt(e,t),Gt(t),r&4&&Kp(t);break;case 21:break;default:Pt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qs(i,""),r.flags&=-33);var s=Gp(t);id(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Gp(t);rd(t,l,o);break;default:throw Error(R(161))}}catch(a){ve(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pS(t,e,n){O=t,Lv(t)}function Lv(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ll;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||qe;l=ll;var u=qe;if(ll=o,(qe=a)&&!u)for(O=i;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?Yp(i):a!==null?(a.return=o,O=a):Yp(i);for(;s!==null;)O=s,Lv(s),s=s.sibling;O=i,ll=l,qe=u}qp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):qp(t)}}function qp(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||$a(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Js(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}qe||e.flags&512&&nd(e)}catch(h){ve(e,e.return,h)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Qp(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Yp(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$a(4,e)}catch(a){ve(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ve(e,i,a)}}var s=e.return;try{nd(e)}catch(a){ve(e,s,a)}break;case 5:var o=e.return;try{nd(e)}catch(a){ve(e,o,a)}}}catch(a){ve(e,e.return,a)}if(e===t){O=null;break}var l=e.sibling;if(l!==null){l.return=e.return,O=l;break}O=e.return}}var mS=Math.ceil,ta=In.ReactCurrentDispatcher,wh=In.ReactCurrentOwner,kt=In.ReactCurrentBatchConfig,X=0,ze=null,Ne=null,Ve=0,pt=0,gi=ur(0),De=0,uo=null,Lr=0,Wa=0,Eh=0,Fs=null,it=null,Ch=0,Bi=1/0,on=null,na=!1,sd=null,Xn=null,al=!1,Hn=null,ra=0,js=0,od=null,kl=-1,Rl=0;function tt(){return X&6?Ie():kl!==-1?kl:kl=Ie()}function Jn(t){return t.mode&1?X&2&&Ve!==0?Ve&-Ve:JC.transition!==null?(Rl===0&&(Rl=v_()),Rl):(t=Z,t!==0||(t=window.event,t=t===void 0?16:T_(t.type)),t):1}function jt(t,e,n,r){if(50<js)throw js=0,od=null,Error(R(185));ko(t,n,r),(!(X&2)||t!==ze)&&(t===ze&&(!(X&2)&&(Wa|=n),De===4&&Un(t,Ve)),ct(t,r),n===1&&X===0&&!(e.mode&1)&&(Bi=Ie()+500,ja&&cr()))}function ct(t,e){var n=t.callbackNode;JE(t,e);var r=zl(t,t===ze?Ve:0);if(r===0)n!==null&&sp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sp(n),e===1)t.tag===0?XC(Xp.bind(null,t)):V_(Xp.bind(null,t)),KC(function(){!(X&6)&&cr()}),n=null;else{switch(y_(r)){case 1:n=qd;break;case 4:n=g_;break;case 16:n=jl;break;case 536870912:n=__;break;default:n=jl}n=Wv(n,Mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mv(t,e){if(kl=-1,Rl=0,X&6)throw Error(R(327));var n=t.callbackNode;if(Ri()&&t.callbackNode!==n)return null;var r=zl(t,t===ze?Ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ia(t,r);else{e=r;var i=X;X|=2;var s=Fv();(ze!==t||Ve!==e)&&(on=null,Bi=Ie()+500,Rr(t,e));do try{vS();break}catch(l){Uv(t,l)}while(1);lh(),ta.current=s,X=i,Ne!==null?e=0:(ze=null,Ve=0,e=De)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=ld(t,i))),e===1)throw n=uo,Rr(t,0),Un(t,r),ct(t,Ie()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!gS(i)&&(e=ia(t,r),e===2&&(s=Oc(t),s!==0&&(r=s,e=ld(t,s))),e===1))throw n=uo,Rr(t,0),Un(t,r),ct(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:vr(t,it,on);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=Ch+500-Ie(),10<e)){if(zl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bc(vr.bind(null,t,it,on),e);break}vr(t,it,on);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mS(r/1960))-r,10<r){t.timeoutHandle=Bc(vr.bind(null,t,it,on),r);break}vr(t,it,on);break;case 5:vr(t,it,on);break;default:throw Error(R(329))}}}return ct(t,Ie()),t.callbackNode===n?Mv.bind(null,t):null}function ld(t,e){var n=Fs;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=ia(t,e),t!==2&&(e=it,it=n,e!==null&&ad(e)),t}function ad(t){it===null?it=t:it.push.apply(it,t)}function gS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~Eh,e&=~Wa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function Xp(t){if(X&6)throw Error(R(327));Ri();var e=zl(t,0);if(!(e&1))return ct(t,Ie()),null;var n=ia(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=ld(t,r))}if(n===1)throw n=uo,Rr(t,0),Un(t,e),ct(t,Ie()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,it,on),ct(t,Ie()),null}function Sh(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Bi=Ie()+500,ja&&cr())}}function Mr(t){Hn!==null&&Hn.tag===0&&!(X&6)&&Ri();var e=X;X|=1;var n=kt.transition,r=Z;try{if(kt.transition=null,Z=1,t)return t()}finally{Z=r,kt.transition=n,X=e,!(X&6)&&cr()}}function Ih(){pt=gi.current,de(gi)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GC(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(ih(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hl();break;case 3:ji(),de(at),de(Ye),fh();break;case 5:hh(r);break;case 4:ji();break;case 13:de(me);break;case 19:de(me);break;case 10:ah(r.type._context);break;case 22:case 23:Ih()}n=n.return}if(ze=t,Ne=t=Zn(t.current,null),Ve=pt=e,De=0,uo=null,Eh=Wa=Lr=0,it=Fs=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Cr=null}return t}function Uv(t,e){do{var n=Ne;try{if(lh(),Sl.current=ea,Zl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zl=!1}if(Dr=0,Ue=Ae=ge=null,Ms=!1,oo=0,wh.current=null,n===null||n.return===null){De=1,uo=e,Ne=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var _=Fp(o);if(_!==null){_.flags&=-257,jp(_,o,l,s,e),_.mode&1&&Up(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){Up(s,u,e),Th();break e}a=Error(R(426))}}else if(fe&&l.mode&1){var S=Fp(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),jp(S,o,l,s,e),sh(zi(a,l));break e}}s=a=zi(a,l),De!==4&&(De=2),Fs===null?Fs=[s]:Fs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=wv(s,a,e);Pp(s,m);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xn===null||!Xn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var p=Ev(s,l,e);Pp(s,p);break e}}s=s.return}while(s!==null)}zv(n)}catch(T){e=T,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function Fv(){var t=ta.current;return ta.current=ea,t===null?ea:t}function Th(){(De===0||De===3||De===2)&&(De=4),ze===null||!(Lr&268435455)&&!(Wa&268435455)||Un(ze,Ve)}function ia(t,e){var n=X;X|=2;var r=Fv();(ze!==t||Ve!==e)&&(on=null,Rr(t,e));do try{_S();break}catch(i){Uv(t,i)}while(1);if(lh(),X=n,ta.current=r,Ne!==null)throw Error(R(261));return ze=null,Ve=0,De}function _S(){for(;Ne!==null;)jv(Ne)}function vS(){for(;Ne!==null&&!WE();)jv(Ne)}function jv(t){var e=$v(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?zv(t):Ne=e,wh.current=null}function zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dS(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Ne=null;return}}else if(n=cS(n,e,pt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);De===0&&(De=5)}function vr(t,e,n){var r=Z,i=kt.transition;try{kt.transition=null,Z=1,yS(t,e,n,r)}finally{kt.transition=i,Z=r}return null}function yS(t,e,n,r){do Ri();while(Hn!==null);if(X&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZE(t,s),t===ze&&(Ne=ze=null,Ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,Wv(jl,function(){return Ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=Z;Z=1;var l=X;X|=4,wh.current=null,fS(t,n),Dv(n,t),jC(jc),Bl=!!Fc,jc=Fc=null,t.current=n,pS(n),VE(),X=l,Z=o,kt.transition=s}else t.current=n;if(al&&(al=!1,Hn=t,ra=i),s=t.pendingLanes,s===0&&(Xn=null),KE(n.stateNode),ct(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(na)throw na=!1,t=sd,sd=null,t;return ra&1&&t.tag!==0&&Ri(),s=t.pendingLanes,s&1?t===od?js++:(js=0,od=t):js=0,cr(),null}function Ri(){if(Hn!==null){var t=y_(ra),e=kt.transition,n=Z;try{if(kt.transition=null,Z=16>t?16:t,Hn===null)var r=!1;else{if(t=Hn,Hn=null,ra=0,X&6)throw Error(R(331));var i=X;for(X|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Us(8,c,s)}var d=c.child;if(d!==null)d.return=c,O=d;else for(;O!==null;){c=O;var h=c.sibling,_=c.return;if(bv(c),c===u){O=null;break}if(h!==null){h.return=_,O=h;break}O=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Us(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var f=t.current;for(O=f;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=f;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$a(9,l)}}catch(T){ve(l,l.return,T)}if(l===o){O=null;break e}var p=l.sibling;if(p!==null){p.return=l.return,O=p;break e}O=l.return}}if(X=i,cr(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Da,t)}catch{}r=!0}return r}finally{Z=n,kt.transition=e}}return!1}function Jp(t,e,n){e=zi(n,e),e=wv(t,e,1),t=Yn(t,e,1),e=tt(),t!==null&&(ko(t,1,e),ct(t,e))}function ve(t,e,n){if(t.tag===3)Jp(t,t,n);else for(;e!==null;){if(e.tag===3){Jp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xn===null||!Xn.has(r))){t=zi(n,t),t=Ev(e,t,1),e=Yn(e,t,1),t=tt(),e!==null&&(ko(e,1,t),ct(e,t));break}}e=e.return}}function wS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ve&n)===n&&(De===4||De===3&&(Ve&130023424)===Ve&&500>Ie()-Ch?Rr(t,0):Eh|=n),ct(t,e)}function Bv(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=tt();t=vn(t,e),t!==null&&(ko(t,e,n),ct(t,n))}function ES(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bv(t,n)}function CS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),Bv(t,n)}var $v;$v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)st=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return st=!1,uS(t,e,n);st=!!(t.flags&131072)}else st=!1,fe&&e.flags&1048576&&H_(e,ql,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tl(t,e),t=e.pendingProps;var i=Mi(e,Ye.current);ki(e,n),i=mh(null,e,r,t,i,n);var s=gh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,Gl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ch(e),i.updater=za,e.stateNode=i,i._reactInternals=e,qc(e,r,t,n),e=Xc(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&rh(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=IS(r),t=bt(r,t),i){case 0:e=Yc(null,e,r,t,n);break e;case 1:e=$p(null,e,r,t,n);break e;case 11:e=zp(null,e,r,t,n);break e;case 14:e=Bp(null,e,r,bt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Yc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),$p(t,e,r,i,n);case 3:e:{if(Tv(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Q_(t,e),Xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zi(Error(R(423)),e),e=Wp(t,e,r,n,i);break e}else if(r!==i){i=zi(Error(R(424)),e),e=Wp(t,e,r,n,i);break e}else for(mt=Qn(e.stateNode.containerInfo.firstChild),vt=e,fe=!0,Dt=null,n=Z_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ui(),r===i){e=yn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return ev(e),t===null&&Hc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zc(r,i)?o=null:s!==null&&zc(r,s)&&(e.flags|=32),Iv(t,e),et(t,e,o,n),e.child;case 6:return t===null&&Hc(e),null;case 13:return kv(t,e,n);case 4:return dh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fi(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),zp(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(Ql,r._currentValue),r._currentValue=o,s!==null)if(Bt(s.value,o)){if(s.children===i.children&&!at.current){e=yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=fn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Gc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ki(e,n),i=Rt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),Bp(t,e,r,i,n);case 15:return Cv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Tl(t,e),e.tag=1,ut(r)?(t=!0,Gl(e)):t=!1,ki(e,n),X_(e,r,i),qc(e,r,i,n),Xc(null,e,r,!0,t,n);case 19:return Rv(t,e,n);case 22:return Sv(t,e,n)}throw Error(R(156,e.tag))};function Wv(t,e){return m_(t,e)}function SS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,e,n,r){return new SS(t,e,n,r)}function kh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IS(t){if(typeof t=="function")return kh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hd)return 11;if(t===Gd)return 14}return 2}function Zn(t,e){var n=t.alternate;return n===null?(n=Tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case oi:return xr(n.children,i,s,e);case Vd:o=8,i|=8;break;case vc:return t=Tt(12,n,e,i|2),t.elementType=vc,t.lanes=s,t;case yc:return t=Tt(13,n,e,i),t.elementType=yc,t.lanes=s,t;case wc:return t=Tt(19,n,e,i),t.elementType=wc,t.lanes=s,t;case Jg:return Va(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yg:o=10;break e;case Xg:o=9;break e;case Hd:o=11;break e;case Gd:o=14;break e;case Dn:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xr(t,e,n,r){return t=Tt(7,t,r,e),t.lanes=n,t}function Va(t,e,n,r){return t=Tt(22,t,r,e),t.elementType=Jg,t.lanes=n,t.stateNode={isHidden:!1},t}function Ku(t,e,n){return t=Tt(6,t,null,e),t.lanes=n,t}function qu(t,e,n){return e=Tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xu(0),this.expirationTimes=xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rh(t,e,n,r,i,s,o,l,a){return t=new TS(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ch(s),t}function kS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Vv(t){if(!t)return ir;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(ut(n))return W_(t,n,e)}return e}function Hv(t,e,n,r,i,s,o,l,a){return t=Rh(n,r,!0,t,i,s,o,l,a),t.context=Vv(null),n=t.current,r=tt(),i=Jn(n),s=fn(r,i),s.callback=e??null,Yn(n,s,i),t.current.lanes=i,ko(t,i,r),ct(t,r),t}function Ha(t,e,n,r){var i=e.current,s=tt(),o=Jn(i);return n=Vv(n),e.context===null?e.context=n:e.pendingContext=n,e=fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yn(i,e,o),t!==null&&(jt(t,i,o,s),Cl(t,i,o)),o}function sa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xh(t,e){Zp(t,e),(t=t.alternate)&&Zp(t,e)}function RS(){return null}var Gv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nh(t){this._internalRoot=t}Ga.prototype.render=Nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Ha(t,e,null,null)};Ga.prototype.unmount=Nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Mr(function(){Ha(null,t,null,null)}),e[_n]=null}};function Ga(t){this._internalRoot=t}Ga.prototype.unstable_scheduleHydration=function(t){if(t){var e=C_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mn.length&&e!==0&&e<Mn[n].priority;n++);Mn.splice(n,0,t),n===0&&I_(t)}};function Ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ka(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function em(){}function xS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=sa(o);s.call(u)}}var o=Hv(e,r,t,0,null,!1,!1,"",em);return t._reactRootContainer=o,t[_n]=o.current,to(t.nodeType===8?t.parentNode:t),Mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=sa(a);l.call(u)}}var a=Rh(t,0,!1,null,null,!1,!1,"",em);return t._reactRootContainer=a,t[_n]=a.current,to(t.nodeType===8?t.parentNode:t),Mr(function(){Ha(e,a,n,r)}),a}function qa(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=sa(o);l.call(a)}}Ha(e,o,t,i)}else o=xS(n,e,t,i,r);return sa(o)}w_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rs(e.pendingLanes);n!==0&&(Qd(e,n|1),ct(e,Ie()),!(X&6)&&(Bi=Ie()+500,cr()))}break;case 13:Mr(function(){var r=vn(t,1);if(r!==null){var i=tt();jt(r,t,1,i)}}),xh(t,1)}};Yd=function(t){if(t.tag===13){var e=vn(t,134217728);if(e!==null){var n=tt();jt(e,t,134217728,n)}xh(t,134217728)}};E_=function(t){if(t.tag===13){var e=Jn(t),n=vn(t,e);if(n!==null){var r=tt();jt(n,t,e,r)}xh(t,e)}};C_=function(){return Z};S_=function(t,e){var n=Z;try{return Z=t,e()}finally{Z=n}};Pc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Fa(r);if(!i)throw Error(R(90));e_(r),Sc(r,i)}}}break;case"textarea":n_(t,n);break;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}};u_=Sh;c_=Mr;var NS={usingClientEntryPoint:!1,Events:[xo,ci,Fa,l_,a_,Sh]},ms={findFiberByHostInstance:Er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},PS={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f_(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||RS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{Da=ul.inject(PS),Yt=ul}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NS;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ph(e))throw Error(R(200));return kS(t,e,null,n)};wt.createRoot=function(t,e){if(!Ph(t))throw Error(R(299));var n=!1,r="",i=Gv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rh(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,to(t.nodeType===8?t.parentNode:t),new Nh(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=f_(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return Mr(t)};wt.hydrate=function(t,e,n){if(!Ka(e))throw Error(R(200));return qa(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!Ph(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Gv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hv(e,null,t,1,n??null,i,!1,s,o),t[_n]=e.current,to(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ga(e)};wt.render=function(t,e,n){if(!Ka(e))throw Error(R(200));return qa(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!Ka(t))throw Error(R(40));return t._reactRootContainer?(Mr(function(){qa(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};wt.unstable_batchedUpdates=Sh;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ka(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return qa(t,e,n,!1,r)};wt.version="18.2.0-next-9e3b772b8-20220608";function Kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv)}catch(t){console.error(t)}}Kv(),Hg.exports=wt;var bS=Hg.exports,tm=bS;gc.createRoot=tm.createRoot,gc.hydrateRoot=tm.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw Xi(e)},Xi=function(t){return new Error("Firebase Database ("+qv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(h=64)),r.push(n[c],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new OS;const h=s<<2|l>>4;if(r.push(h),u!==64){const _=l<<4&240|u>>2;if(r.push(_),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yv=function(t){const e=Qv(t);return bh.encodeByteArray(e,!0)},oa=function(t){return Yv(t).replace(/\./g,"")},la=function(t){try{return bh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){return Xv(void 0,t)}function Xv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LS(n)||(t[n]=Xv(t[n],e[n]));return t}function LS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=()=>MS().__FIREBASE_DEFAULTS__,FS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&la(t[1]);return e&&JSON.parse(e)},Qa=()=>{try{return US()||FS()||jS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jv=t=>{var e,n;return(n=(e=Qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zv=t=>{const e=Jv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ey=()=>{var t;return(t=Qa())===null||t===void 0?void 0:t.config},ty=t=>{var e;return(e=Qa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[oa(JSON.stringify(n)),oa(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ah(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function zS(){var t;const e=(t=Qa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ry(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $S(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iy(){return qv.NODE_ADMIN===!0}function WS(){try{return typeof indexedDB=="object"}catch{return!1}}function VS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HS,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?GS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,l,r)}}function GS(t,e){return t.replace(KS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t){return JSON.parse(t)}function je(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=co(la(s[0])||""),n=co(la(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},qS=function(t){const e=sy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},QS=function(t){const e=sy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $i(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ud(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function aa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ua(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(nm(s)&&nm(o)){if(!ua(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function nm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ps(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function XS(t,e){const n=new JS(t,e);return n.subscribe.bind(n)}class JS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qu),i.error===void 0&&(i.error=Qu),i.complete===void 0&&(i.complete=Qu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qu(){}function Oh(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xa=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}class sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ya;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rI(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nI(t){return t===yr?void 0:t}function rI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const sI={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},oI=re.INFO,lI={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},aI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dh{constructor(e){this.name=e,this._logLevel=oI,this._logHandler=aI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const uI=(t,e)=>e.some(n=>t instanceof n);let rm,im;function cI(){return rm||(rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dI(){return im||(im=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oy=new WeakMap,cd=new WeakMap,ly=new WeakMap,Yu=new WeakMap,Lh=new WeakMap;function hI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oy.set(n,t)}).catch(()=>{}),Lh.set(e,t),e}function fI(t){if(cd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cd.set(t,e)}let dd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ly.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pI(t){dd=t(dd)}function mI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xu(this),e,...n);return ly.set(r,e.sort?e.sort():[e]),er(r)}:dI().includes(t)?function(...e){return t.apply(Xu(this),e),er(oy.get(this))}:function(...e){return er(t.apply(Xu(this),e))}}function gI(t){return typeof t=="function"?mI(t):(t instanceof IDBTransaction&&fI(t),uI(t,cI())?new Proxy(t,dd):t)}function er(t){if(t instanceof IDBRequest)return hI(t);if(Yu.has(t))return Yu.get(t);const e=gI(t);return e!==t&&(Yu.set(t,e),Lh.set(e,t)),e}const Xu=t=>Lh.get(t);function _I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",a=>{r(er(o.result),a.oldVersion,a.newVersion,er(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const vI=["get","getKey","getAll","getAllKeys","count"],yI=["put","add","delete","clear"],Ju=new Map;function sm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ju.get(e))return Ju.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vI.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ju.set(e,s),s}pI(t=>({...t,get:(e,n,r)=>sm(e,n)||t.get(e,n,r),has:(e,n)=>!!sm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function EI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",om="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Dh("@firebase/app"),CI="@firebase/app-compat",SI="@firebase/analytics-compat",II="@firebase/analytics",TI="@firebase/app-check-compat",kI="@firebase/app-check",RI="@firebase/auth",xI="@firebase/auth-compat",NI="@firebase/database",PI="@firebase/database-compat",bI="@firebase/functions",AI="@firebase/functions-compat",OI="@firebase/installations",DI="@firebase/installations-compat",LI="@firebase/messaging",MI="@firebase/messaging-compat",UI="@firebase/performance",FI="@firebase/performance-compat",jI="@firebase/remote-config",zI="@firebase/remote-config-compat",BI="@firebase/storage",$I="@firebase/storage-compat",WI="@firebase/firestore",VI="@firebase/firestore-compat",HI="firebase",GI="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="[DEFAULT]",KI={[hd]:"fire-core",[CI]:"fire-core-compat",[II]:"fire-analytics",[SI]:"fire-analytics-compat",[kI]:"fire-app-check",[TI]:"fire-app-check-compat",[RI]:"fire-auth",[xI]:"fire-auth-compat",[NI]:"fire-rtdb",[PI]:"fire-rtdb-compat",[bI]:"fire-fn",[AI]:"fire-fn-compat",[OI]:"fire-iid",[DI]:"fire-iid-compat",[LI]:"fire-fcm",[MI]:"fire-fcm-compat",[UI]:"fire-perf",[FI]:"fire-perf-compat",[jI]:"fire-rc",[zI]:"fire-rc-compat",[BI]:"fire-gcs",[$I]:"fire-gcs-compat",[WI]:"fire-fst",[VI]:"fire-fst-compat","fire-js":"fire-js",[HI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new Map,pd=new Map;function qI(t,e){try{t.container.addComponent(e)}catch(n){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(pd.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;pd.set(e,t);for(const n of ca.values())qI(n,t);return!0}function Ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tr=new Po("app","Firebase",QI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=GI;function ay(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw tr.create("bad-app-name",{appName:String(i)});if(n||(n=ey()),!n)throw tr.create("no-options");const s=ca.get(i);if(s){if(ua(n,s.options)&&ua(r,s.config))return s;throw tr.create("duplicate-app",{appName:i})}const o=new iI(i);for(const a of pd.values())o.addComponent(a);const l=new YI(n,r,o);return ca.set(i,l),l}function Mh(t=fd){const e=ca.get(t);if(!e&&t===fd&&ey())return ay();if(!e)throw tr.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let i=(r=KI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(l.join(" "));return}Fr(new sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="firebase-heartbeat-database",JI=1,ho="firebase-heartbeat-store";let Zu=null;function uy(){return Zu||(Zu=_I(XI,JI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ho)}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),Zu}async function ZI(t){try{return await(await uy()).transaction(ho).objectStore(ho).get(cy(t))}catch(e){if(e instanceof Tn)Ur.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(n.message)}}}async function lm(t,e){try{const r=(await uy()).transaction(ho,"readwrite");await r.objectStore(ho).put(e,cy(t)),await r.done}catch(n){if(n instanceof Tn)Ur.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ur.warn(r.message)}}}function cy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=1024,tT=30*24*60*60*1e3;class nT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=am();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=am(),{heartbeatsToSend:n,unsentEntries:r}=rT(this._heartbeatsCache.heartbeats),i=oa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function am(){return new Date().toISOString().substring(0,10)}function rT(t,e=eT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),um(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),um(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WS()?VS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function um(t){return oa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){Fr(new sr("platform-logger",e=>new wI(e),"PRIVATE")),Fr(new sr("heartbeat",e=>new nT(e),"PRIVATE")),Jt(hd,om,t),Jt(hd,om,"esm2017"),Jt("fire-js","")}sT("");var oT="firebase",lT="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(oT,lT,"app");function Uh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function cm(t){return t!==void 0&&t.enterprise!==void 0}class aT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function dy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uT=dy,hy=new Po("auth","Firebase",dy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Dh("@firebase/auth");function cT(t,...e){da.logLevel<=re.WARN&&da.warn(`Auth (${Qr}): ${t}`,...e)}function Nl(t,...e){da.logLevel<=re.ERROR&&da.error(`Auth (${Qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Fh(t,...e)}function Zt(t,...e){return Fh(t,...e)}function dT(t,e,n){const r=Object.assign(Object.assign({},uT()),{[e]:n});return new Po("auth","Firebase",r).create(e,{appName:t.name})}function Fh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hy.create(t,...e)}function z(t,e,...n){if(!t)throw Fh(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nl(e),new Error(e)}function wn(t,e){t||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fy(){return dm()==="http:"||dm()==="https:"}function dm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fy()||BS()||"connection"in navigator)?navigator.onLine:!0}function fT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ah()||ry()}get(){return hT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new bo(3e4,6e4);function dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hr(t,e,n,r,i={}){return my(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ji(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),py.fetch()(gy(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function my(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pT),e);try{const i=new gT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw cl(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw cl(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw cl(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dT(t,c,u);$t(t,c)}}catch(i){if(i instanceof Tn)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function Ao(t,e,n,r,i={}){const s=await hr(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jh(t.config,i):`${t.config.apiScheme}://${i}`}class gT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),mT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zt(t,e,r);return i.customData._tokenResponse=n,i}async function _T(t,e){return hr(t,"GET","/v2/recaptchaConfig",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(t,e){return hr(t,"POST","/v1/accounts:delete",e)}async function yT(t,e){return hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wT(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=zh(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zs(ec(i.auth_time)),issuedAtTime:zs(ec(i.iat)),expirationTime:zs(ec(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ec(t){return Number(t)*1e3}function zh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nl("JWT malformed, contained fewer than 3 sections"),null;try{const i=la(n);return i?JSON.parse(i):(Nl("Failed to decode base64 JWT payload"),null)}catch(i){return Nl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ET(t){const e=zh(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&CT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fo(t,yT(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kT(s.providerUserInfo):[],l=TT(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new _y(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function IT(t){const e=Pe(t);await fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kT(t){return t.map(e=>{var{providerId:n}=e,r=Uh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(t,e){const n=await my(t,{},async()=>{const r=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gy(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",py.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ET(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new po;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Uh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ST(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _y(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fo(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wT(this,e)}reload(){return IT(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fo(this,vT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:p,isAnonymous:T,providerData:P,stsTokenManager:x}=n;z(g&&x,e,"internal-error");const b=po.fromJSON(this.name,x);z(typeof g=="string",e,"internal-error"),On(d,e.name),On(h,e.name),z(typeof p=="boolean",e,"internal-error"),z(typeof T=="boolean",e,"internal-error"),On(_,e.name),On(v,e.name),On(y,e.name),On(S,e.name),On(m,e.name),On(f,e.name);const H=new Nr({uid:g,auth:e,email:h,emailVerified:p,displayName:d,isAnonymous:T,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:b,createdAt:m,lastLoginAt:f});return P&&Array.isArray(P)&&(H.providerData=P.map(M=>Object.assign({},M))),S&&(H._redirectEventId=S),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new po;i.updateFromServerResponse(n);const s=new Nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fa(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=new Map;function dn(t){wn(t instanceof Function,"Expected a class definition");let e=hm.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vy.type="NONE";const fm=vy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e,n){return`firebase:${t}:${e}:${n}`}class xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xi(dn(fm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||dn(fm);const o=Pl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Nr._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new xi(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ey(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sy(e))return"Blackberry";if(Iy(e))return"Webos";if(Bh(e))return"Safari";if((e.includes("chrome/")||wy(e))&&!e.includes("edge/"))return"Chrome";if(Cy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yy(t=Xe()){return/firefox\//i.test(t)}function Bh(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wy(t=Xe()){return/crios\//i.test(t)}function Ey(t=Xe()){return/iemobile/i.test(t)}function Cy(t=Xe()){return/android/i.test(t)}function Sy(t=Xe()){return/blackberry/i.test(t)}function Iy(t=Xe()){return/webos/i.test(t)}function Za(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xT(t=Xe()){var e;return Za(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NT(){return $S()&&document.documentMode===10}function Ty(t=Xe()){return Za(t)||Cy(t)||Iy(t)||Sy(t)||/windows phone/i.test(t)||Ey(t)}function PT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e=[]){let n;switch(t){case"Browser":n=pm(Xe());break;case"Worker":n=`${pm(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(t,e={}){return hr(t,"GET","/v2/passwordPolicy",dr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=6;class DT{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:OT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mm(this),this.idTokenSubscription=new mm(this),this.beforeStateQueue=new bT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AT(this),n=new DT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return Pe(t)}class mm{constructor(e){this.auth=e,this.observer=null,this.addObserver=XS(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ry(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MT().appendChild(r)})}function UT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const FT="https://www.google.com/recaptcha/enterprise.js?render=",jT="recaptcha-enterprise",zT="NO_RECAPTCHA";class BT{constructor(e){this.type=jT,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{_T(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new aT(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;cm(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(zT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&cm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ry(FT+l).then(()=>{i(l,s,o)}).catch(a=>{o(a)})}}).catch(l=>{o(l)})})}}async function pa(t,e,n,r=!1){const i=new BT(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t,e){const n=Ja(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ua(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function WT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function VT(t,e,n){const r=Yr(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=xy(e),{host:o,port:l}=HT(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GT()}function xy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HT(t){const e=xy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gm(o)}}}function gm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function KT(t,e){return hr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(t,e){return Ao(t,"POST","/v1/accounts:signInWithPassword",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}async function QT(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends $h{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await pa(e,r,"signInWithPassword");return tc(e,i)}else return tc(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await pa(e,r,"signInWithPassword");return tc(e,s)}else return Promise.reject(i)});case"emailLink":return qT(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return KT(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QT(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t,e){return Ao(t,"POST","/v1/accounts:signInWithIdp",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT="http://localhost";class jr extends $h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Uh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ni(e,n)}buildRequest(){const e={requestUri:YT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JT(t){const e=Ns(Ps(t)).link,n=e?Ns(Ps(e)).deep_link_id:null,r=Ns(Ps(t)).deep_link_id;return(r?Ns(Ps(r)).link:null)||r||n||e||t}class Wh{constructor(e){var n,r,i,s,o,l;const a=Ns(Ps(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,d=XT((i=a.mode)!==null&&i!==void 0?i:null);z(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=JT(e);try{return new Wh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.providerId=Zi.PROVIDER_ID}static credential(e,n){return mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wh.parseLink(n);return z(r,"argument-error"),mo._fromEmailAndCode(e,r.code,r.tenantId)}}Zi.PROVIDER_ID="password";Zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Ny{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Oo{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Oo{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Oo{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(t,e){return Ao(t,"POST","/v1/accounts:signUp",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nr._fromIdTokenResponse(e,r,i),o=_m(r);return new zr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_m(r);return new zr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _m(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ma.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ma(e,n,r,i)}}function Py(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ma._fromErrorAndOperation(t,s,e,r):s})}async function ZT(t,e,n=!1){const r=await fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await fo(t,Py(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=zh(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),zr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function by(t,e,n=!1){const r="signIn",i=await Py(t,r,e),s=await zr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function t1(t,e){return by(Yr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function n1(t,e,n){var r;const i=Yr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await pa(i,s,"signUpPassword");o=nc(i,u)}else o=nc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await pa(i,s,"signUpPassword");return nc(i,c)}throw u});const l=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ay(t),u}),a=await zr._fromIdTokenResponse(i,"signIn",l);return await i._updateCurrentUser(a.user),a}function r1(t,e,n){return t1(Pe(t),Zi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ay(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e){return hr(t,"POST","/v1/accounts:createAuthUri",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(t,e){const n=fy()?ha():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await i1(Pe(t),r);return i||[]}function s1(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function o1(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function l1(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function a1(t){return Pe(t).signOut()}const ga="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ga,"1"),this.storage.removeItem(ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(){const t=Xe();return Bh(t)||Za(t)}const c1=1e3,d1=10;class Dy extends Oy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=u1()&&PT(),this.fallbackToPolling=Ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,d1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},c1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dy.type="LOCAL";const h1=Dy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly extends Oy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ly.type="SESSION";const My=Ly;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new eu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await f1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Vh("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function m1(t){en().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function g1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function v1(){return Uy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="firebaseLocalStorageDb",y1=1,_a="firebaseLocalStorage",jy="fbase_key";class Do{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tu(t,e){return t.transaction([_a],e?"readwrite":"readonly").objectStore(_a)}function w1(){const t=indexedDB.deleteDatabase(Fy);return new Do(t).toPromise()}function md(){const t=indexedDB.open(Fy,y1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_a,{keyPath:jy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_a)?e(r):(r.close(),await w1(),e(await md()))})})}async function ym(t,e,n){const r=tu(t,!0).put({[jy]:e,value:n});return new Do(r).toPromise()}async function E1(t,e){const n=tu(t,!1).get(e),r=await new Do(n).toPromise();return r===void 0?null:r.value}function wm(t,e){const n=tu(t,!0).delete(e);return new Do(n).toPromise()}const C1=800,S1=3;class zy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>S1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eu._getInstance(v1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await g1(),!this.activeServiceWorker)return;this.sender=new p1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await ym(e,ga,"1"),await wm(e,ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ym(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>E1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tu(i,!1).getAll();return new Do(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),C1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zy.type="LOCAL";const I1=zy;new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t,e){return e?dn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends $h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function k1(t){return by(t.auth,new Hh(t),t.bypassAuthState)}function R1(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),e1(n,new Hh(t),t.bypassAuthState)}async function x1(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),ZT(n,new Hh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k1;case"linkViaPopup":case"linkViaRedirect":return x1;case"reauthViaPopup":case"reauthViaRedirect":return R1;default:$t(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=new bo(2e3,1e4);class _i extends By{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N1.get())};e()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="pendingRedirect",bl=new Map;class b1 extends By{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bl.get(this.auth._key());if(!e){try{const r=await A1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bl.set(this.auth._key(),e)}return this.bypassAuthState||bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A1(t,e){const n=L1(e),r=D1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function O1(t,e){bl.set(t._key(),e)}function D1(t){return dn(t._redirectPersistence)}function L1(t){return Pl(P1,t.config.apiKey,t.name)}async function M1(t,e,n=!1){const r=Yr(t),i=T1(r,e),o=await new b1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=10*60*1e3;class F1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!j1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$y(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Em(e))}saveEventToCache(e){this.cachedEventUids.add(Em(e)),this.lastProcessedEventTime=Date.now()}}function Em(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $y({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function j1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $y(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(t,e={}){return hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$1=/^https?/;async function W1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await z1(t);for(const n of e)try{if(V1(n))return}catch{}$t(t,"unauthorized-domain")}function V1(t){const e=ha(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$1.test(n))return!1;if(B1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=new bo(3e4,6e4);function Cm(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function G1(t){return new Promise((e,n)=>{var r,i,s;function o(){Cm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cm(),n(Zt(t,"network-request-failed"))},timeout:H1.get()})}if(!((i=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=en().gapi)===null||s===void 0)&&s.load)o();else{const l=UT("iframefcb");return en()[l]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},Ry(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Al=null,e})}let Al=null;function K1(t){return Al=Al||G1(t),Al}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=new bo(5e3,15e3),Q1="__/auth/iframe",Y1="emulator/auth/iframe",X1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Z1(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jh(e,Y1):`https://${t.config.authDomain}/${Q1}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},i=J1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ji(r).slice(1)}`}async function ek(t){const e=await K1(t),n=en().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:Z1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),l=en().setTimeout(()=>{s(o)},q1.get());function a(){en().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nk=500,rk=600,ik="_blank",sk="http://localhost";class Sm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ok(t,e,n,r=nk,i=rk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},tk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Xe().toLowerCase();n&&(l=wy(u)?ik:n),yy(u)&&(e=e||sk,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(xT(u)&&l!=="_self")return lk(e||"",l),new Sm(null);const d=window.open(e||"",l,c);z(d,t,"popup-blocked");try{d.focus()}catch{}return new Sm(d)}function lk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="__/auth/handler",uk="emulator/auth/handler",ck=encodeURIComponent("fac");async function Im(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(e instanceof Ny){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ud(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Oo){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${ck}=${encodeURIComponent(a)}`:"";return`${dk(t)}?${Ji(l).slice(1)}${u}`}function dk({config:t}){return t.emulator?jh(t,uk):`https://${t.authDomain}/${ak}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="webStorageSupport";class hk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=My,this._completeRedirectFn=M1,this._overrideRedirectResult=O1}async _openPopup(e,n,r,i){var s;wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Im(e,n,r,ha(),i);return ok(e,o,Vh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Im(e,n,r,ha(),i);return m1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ek(e),r=new F1(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rc];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=W1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ty()||Bh()||Za()}}const fk=hk;var Tm="@firebase/auth",km="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gk(t){Fr(new sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ky(t)},u=new LT(r,i,s,a);return WT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new sr("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new pk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Tm,km,mk(t)),Jt(Tm,km,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=5*60,vk=ty("authIdTokenMaxAge")||_k;let Rm=null;const yk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vk)return;const i=n==null?void 0:n.token;Rm!==i&&(Rm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wk(t=Mh()){const e=Ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$T(t,{popupRedirectResolver:fk,persistence:[I1,h1,My]}),r=ty("authTokenSyncURL");if(r){const s=yk(r);o1(n,s,()=>s(n.currentUser)),s1(n,o=>s(o))}const i=Jv("auth");return i&&VT(n,`http://${i}`),n}gk("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ek(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(c){try{u(r.next(c))}catch(d){o(d)}}function a(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(l,a)}u((r=r.apply(t,e||[])).next())})}function Ck(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(u){return function(c){return a([u,c])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vi=function(){return vi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},vi.apply(this,arguments)},Wy=function(t){return{loading:t==null,value:t}},Sk=function(){return function(t,e){switch(e.type){case"error":return vi(vi({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Wy(e.defaultValue);case"value":return vi(vi({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Ik=function(t){var e=t?t():void 0,n=C.useReducer(Sk(),Wy(e)),r=n[0],i=n[1],s=C.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=C.useCallback(function(a){i({type:"error",error:a})},[]),l=C.useCallback(function(a){i({type:"value",value:a})},[]);return C.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},Tk=function(t,e){var n=Ik(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return C.useEffect(function(){var a=l1(t,function(u){return Ek(void 0,void 0,void 0,function(){var c;return Ck(this,function(d){switch(d.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return d.sent(),[3,4];case 3:return c=d.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){a()}},[t]),[l,i,r]};const xm="@firebase/database",Nm="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vy="";function kk(t){Vy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:co(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Rk(e)}}catch{}return new xk},Ir=Hy("localStorage"),gd=Hy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Dh("@firebase/database"),Nk=function(){let t=1;return function(){return t++}}(),Gy=function(t){const e=eI(t),n=new YS;n.update(e);const r=n.digest();return bh.encodeByteArray(r)},Lo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Lo.apply(null,r):typeof r=="object"?e+=je(r):e+=r,e+=" "}return e};let Pr=null,Pm=!0;const Pk=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Pi.logLevel=re.VERBOSE,Pr=Pi.log.bind(Pi),e&&gd.set("logging_enabled",!0)):typeof t=="function"?Pr=t:(Pr=null,gd.remove("logging_enabled"))},Qe=function(...t){if(Pm===!0&&(Pm=!1,Pr===null&&gd.get("logging_enabled")===!0&&Pk(!0)),Pr){const e=Lo.apply(null,t);Pr(e)}},Mo=function(t){return function(...e){Qe(t,...e)}},_d=function(...t){const e="FIREBASE INTERNAL ERROR: "+Lo(...t);Pi.error(e)},En=function(...t){const e=`FIREBASE FATAL ERROR: ${Lo(...t)}`;throw Pi.error(e),new Error(e)},dt=function(...t){const e="FIREBASE WARNING: "+Lo(...t);Pi.warn(e)},bk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ky=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ak=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wi="[MIN_NAME]",Br="[MAX_NAME]",es=function(t,e){if(t===e)return 0;if(t===Wi||e===Br)return-1;if(e===Wi||t===Br)return 1;{const n=bm(t),r=bm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},Ok=function(t,e){return t===e?0:t<e?-1:1},gs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+je(e))},Gh=function(t){if(typeof t!="object"||t===null)return je(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=je(e[r]),n+=":",n+=Gh(t[e[r]]);return n+="}",n},qy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ht(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Qy=function(t){N(!Ky(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Dk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Lk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Mk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const Uk=new RegExp("^-?(0*)\\d{1,10}$"),Fk=-2147483648,jk=2147483647,bm=function(t){if(Uk.test(t)){const e=Number(t);if(e>=Fk&&e<=jk)return e}return null},ts=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},zk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class bi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="5",Yy="v",Xy="s",Jy="r",Zy="f",e0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,t0="ls",n0="p",vd="ac",r0="websocket",i0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Wk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function o0(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===r0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===i0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Wk(t)&&(n.ns=t.namespace);const i=[];return ht(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this.counters_={}}incrementCounter(e,n=1){kn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return DS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic={},sc={};function qh(t){const e=t.toString();return ic[e]||(ic[e]=new Vk),ic[e]}function Hk(t,e){const n=t.toString();return sc[n]||(sc[n]=e()),sc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ts(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="start",Kk="close",qk="pLPCommand",Qk="pRTLPCB",l0="id",a0="pw",u0="ser",Yk="cb",Xk="seg",Jk="ts",Zk="d",eR="dframe",c0=1870,d0=30,tR=c0-d0,nR=25e3,rR=3e4;class yi{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mo(e),this.stats_=qh(n),this.urlFn=a=>(this.appCheckToken&&(a[vd]=this.appCheckToken),o0(n,i0,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Gk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rR)),Ak(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qh((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Am)this.id=l,this.password=a;else if(o===Kk)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Am]="t",r[u0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Yk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Yy]=Kh,this.transportSessionId&&(r[Xy]=this.transportSessionId),this.lastSessionId&&(r[t0]=this.lastSessionId),this.applicationId&&(r[n0]=this.applicationId),this.appCheckToken&&(r[vd]=this.appCheckToken),typeof location<"u"&&location.hostname&&e0.test(location.hostname)&&(r[Jy]=Zy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yi.forceAllow_=!0}static forceDisallow(){yi.forceDisallow_=!0}static isAvailable(){return yi.forceAllow_?!0:!yi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Dk()&&!Lk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yv(n),i=qy(r,tR);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[eR]="t",r[l0]=e,r[a0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nk(),window[qk+this.uniqueCallbackIdentifier]=e,window[Qk+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Qe("frame writing exception"),l.stack&&Qe(l.stack),Qe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[l0]=this.myID,e[a0]=this.myPW,e[u0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+d0+r.length<=c0;){const o=this.pendingSegs.shift();r=r+"&"+Xk+i+"="+o.seg+"&"+Jk+i+"="+o.ts+"&"+Zk+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(nR)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=16384,sR=45e3;let va=null;typeof MozWebSocket<"u"?va=MozWebSocket:typeof WebSocket<"u"&&(va=WebSocket);class Lt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mo(this.connId),this.stats_=qh(n),this.connURL=Lt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Yy]=Kh,typeof location<"u"&&location.hostname&&e0.test(location.hostname)&&(o[Jy]=Zy),n&&(o[Xy]=n),r&&(o[t0]=r),i&&(o[vd]=i),s&&(o[n0]=s),o0(e,r0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ir.set("previous_websocket_failure",!0);try{let r;iy(),this.mySock=new va(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&va!==null&&!Lt.forceDisallow_}static previouslyFailed(){return Ir.isInMemoryStorage||Ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=co(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=qy(n,iR);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Lt.responsesRequiredToBeHealthy=2;Lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yi,Lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Lt&&Lt.isAvailable();let r=n&&!Lt.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Lt];else{const i=this.transports_=[];for(const s of go.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);go.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}go.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=6e4,lR=5e3,aR=10*1024,uR=100*1024,oc="t",Om="d",cR="s",Dm="r",dR="e",Lm="o",Mm="a",Um="n",Fm="p",hR="h";class fR{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mo("c:"+this.id+":"),this.transportManager_=new go(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>aR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(oc in e){const n=e[oc];n===Mm?this.upgradeIfSecondaryHealthy_():n===Dm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Lm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gs("t",e),r=gs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Um,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gs("t",e),r=gs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gs(oc,e);if(Om in e){const r=e[Om];if(n===hR){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Um){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===cR?this.onConnectionShutdown_(r):n===Dm?this.onReset_(r):n===dR?_d("Server Error: "+r):n===Lm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_d("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Kh!==r&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Bs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(oR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends f0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ah()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ya}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=32,zm=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new se("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function or(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function p0(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function pR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function m0(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function g0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=G(t),r=G(e);if(n===null)return e;if(n===r)return ot(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Yh(t,e){if(or(t)!==or(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Mt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(or(t)>or(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class mR{constructor(e,n){this.errorPrefix_=n,this.parts_=m0(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Xa(this.parts_[r]);_0(this)}}function gR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xa(e),_0(t)}function _R(t){const e=t.parts_.pop();t.byteLength_-=Xa(e),t.parts_.length>0&&(t.byteLength_-=1)}function _0(t){if(t.byteLength_>zm)throw new Error(t.errorPrefix_+"has a key path longer than "+zm+" bytes ("+t.byteLength_+").");if(t.parts_.length>jm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jm+") or object contains a cycle "+wr(t))}function wr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh extends f0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Xh}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=1e3,vR=60*5*1e3,Bm=30*1e3,yR=1.3,wR=3e4,ER="server_kill",$m=3;class pn extends h0{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=pn.nextPersistentConnectionId_++,this.log_=Mo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_s,this.maxReconnectDelay_=vR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!iy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ya.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(je(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ya,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;pn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kn(e,"w")){const r=$i(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||QS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+je(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_d("Unrecognized action received from server: "+je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wR&&(this.reconnectDelay_=_s),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new fR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{dt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(ER)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&dt(d),a())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ud(this.interruptReasons_)&&(this.reconnectDelay_=_s,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Gh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$m&&(this.reconnectDelay_=Bm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$m&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Vy.replace(/\./g,"-")]=1,Ah()?e["framework.cordova"]=1:ry()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ya.getInstance().currentlyOnline();return ud(this.interruptReasons_)&&e}}pn.nextPersistentConnectionId_=0;pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new K(Wi,e),i=new K(Wi,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;class v0 extends nu{static get __EMPTY_NODE(){return dl}static set __EMPTY_NODE(e){dl=e}compare(e,n){return es(e.name,n.name)}isDefinedOn(e){throw Xi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Br,dl)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,dl)}toString(){return".key"}}const Ai=new v0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??lt.EMPTY_NODE,this.right=s??lt.EMPTY_NODE}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return lt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return lt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class CR{copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class lt{constructor(e,n=lt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new lt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new lt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hl(this.root_,null,this.comparator_,!0,e)}}lt.EMPTY_NODE=new CR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t,e){return es(t.name,e.name)}function Jh(t,e){return es(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd;function IR(t){yd=t}const y0=function(t){return typeof t=="number"?"number:"+Qy(t):"string:"+t},w0=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kn(e,".sv"),"Priority must be a string or number.")}else N(t===yd||t.isEmpty(),"priority of unexpected type.");N(t===yd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wm;class Me{constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),w0(this.priorityNode_)}static set __childrenNodeConstructor(e){Wm=e}static get __childrenNodeConstructor(){return Wm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:G(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=G(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+y0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Qy(this.value_):e+=this.value_,this.lazyHash_=Gy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),s=Me.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E0,C0;function TR(t){E0=t}function kR(t){C0=t}class RR extends nu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?es(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Br,new Me("[PRIORITY-POST]",C0))}makePost(e,n){const r=E0(e);return new K(n,new Me("[PRIORITY-POST]",r))}toString(){return".priority"}}const ye=new RR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=Math.log(2);class NR{constructor(e){const n=s=>parseInt(Math.log(s)/xR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wa=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new Fe(h,d.node,Fe.BLACK,null,null);{const _=parseInt(c/2,10)+a,v=i(a,_),y=i(_+1,u);return d=t[_],h=n?n(d):d,new Fe(h,d.node,Fe.BLACK,v,y)}},s=function(a){let u=null,c=null,d=t.length;const h=function(v,y){const S=d-v,m=d;d-=v;const f=i(S+1,m),g=t[S],p=n?n(g):g;_(new Fe(p,g.node,y,null,f))},_=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),S=Math.pow(2,a.count-(v+1));y?h(S,Fe.BLACK):(h(S,Fe.BLACK),h(S,Fe.RED))}return c},o=new NR(t.length),l=s(o);return new lt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc;const ni={};class hn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(ni&&ye,"ChildrenNode.ts has not been loaded"),lc=lc||new hn({".priority":ni},{".priority":ye}),lc}get(e){const n=$i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof lt?n:null}hasIndex(e){return kn(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=wa(r,e.getCompare()):l=ni;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new hn(c,u)}addToIndexes(e,n){const r=aa(this.indexes_,(i,s)=>{const o=$i(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===ni)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(K.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),wa(l,o.getCompare())}else return ni;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new K(e.name,l))),a.insert(e,e.node)}});return new hn(r,this.indexSet_)}removeFromIndexes(e,n){const r=aa(this.indexes_,i=>{if(i===ni)return i;{const s=n.get(e.name);return s?i.remove(new K(e.name,s)):i}});return new hn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&w0(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vs||(vs=new j(new lt(Jh),null,hn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vs}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vs:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new K(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?vs:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=G(e);if(r===null)return n;{N(G(e)!==".priority"||or(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(le(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ye,(o,l)=>{n[o]=l.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+y0(this.getPriority().val())+":"),this.forEachChild(ye,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Gy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Uo?-1:0}withIndex(e){if(e===Ai||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ye),i=n.getIterator(ye);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ai?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PR extends j{constructor(){super(new lt(Jh),j.EMPTY_NODE,hn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Uo=new PR;Object.defineProperties(K,{MIN:{value:new K(Wi,j.EMPTY_NODE)},MAX:{value:new K(Br,Uo)}});v0.__EMPTY_NODE=j.EMPTY_NODE;Me.__childrenNodeConstructor=j;IR(Uo);kR(Uo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=!0;function We(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,We(e))}if(!(t instanceof Array)&&bR){const n=[];let r=!1;if(ht(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=We(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new K(o,a)))}}),n.length===0)return j.EMPTY_NODE;const s=wa(n,SR,o=>o.name,Jh);if(r){const o=wa(n,ye.getCompare());return new j(s,We(e),new hn({".priority":o},{".priority":ye}))}else return new j(s,We(e),hn.Default)}else{let n=j.EMPTY_NODE;return ht(t,(r,i)=>{if(kn(t,r)&&r.substring(0,1)!=="."){const s=We(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(We(e))}}TR(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR extends nu{constructor(e){super(),this.indexPath_=e,N(!Q(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?es(e.name,n.name):s}makePost(e,n){const r=We(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Uo);return new K(Br,e)}toString(){return m0(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR extends nu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?es(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const r=We(e);return new K(n,r)}toString(){return".value"}}const DR=new OR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t){return{type:"value",snapshotNode:t}}function Vi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _o(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(_o(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Vi(n,r)):o.trackChildChange(vo(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,s)=>{n.hasChild(i)||r.trackChildChange(_o(i,s))}),n.isLeafNode()||n.forEachChild(ye,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(vo(i,s,o))}else r.trackChildChange(Vi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.indexedFilter_=new Zh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=yo.getStartPost_(e),this.endPost_=yo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new K(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(ye,(o,l)=>{s.matches(new K(o,l))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new yo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new K(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const a=new K(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(c&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(vo(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(_o(n,d));const y=l.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Vi(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(_o(u.name,u.node)),s.trackChildChange(Vi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wi}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Br}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new ef;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UR(t){return t.loadsAllData()?new Zh(t.getIndex()):t.hasLimit()?new MR(t):new yo(t)}function Vm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===DR?n="$value":t.index_===Ai?n="$key":(N(t.index_ instanceof AR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=je(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=je(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+je(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=je(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Hm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends h0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Mo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ea.getListenId_(e,r),l={};this.listens_[o]=l;const a=Vm(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),$i(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ea.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vm(e._queryParams),r=e._path.toString(),i=new Ya;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ji(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=co(l.responseText)}catch{dt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&dt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(){return{value:null,children:new Map}}function I0(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=G(e);t.children.has(r)||t.children.set(r,Ca());const i=t.children.get(r);e=le(e),I0(i,e,n)}}function wd(t,e,n){t.value!==null?n(e,t.value):jR(t,(r,i)=>{const s=new se(e.toString()+"/"+r);wd(i,s,n)})}function jR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ht(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=10*1e3,BR=30*1e3,$R=5*60*1e3;class WR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zR(e);const r=Gm+(BR-Gm)*Math.random();Bs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ht(e,(i,s)=>{s>0&&kn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Bs(this.reportStats_.bind(this),Math.floor(Math.random()*2*$R))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ut||(Ut={}));function T0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ut.ACK_USER_WRITE,this.source=T0()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Sa(J(),n,this.revert)}}else return N(G(this.path)===e,"operationForChild called for unrelated child."),new Sa(le(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.source=e,this.path=n,this.type=Ut.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new wo(this.source,J()):new wo(this.source,le(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ut.OVERWRITE}operationForChild(e){return Q(this.path)?new $r(this.source,J(),this.snap.getImmediateChild(e)):new $r(this.source,le(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ut.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new $r(this.source,J(),n.value):new Eo(this.source,J(),n)}else return N(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Eo(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(LR(o.childName,o.snapshotNode))}),ys(t,i,"child_removed",e,r,n),ys(t,i,"child_added",e,r,n),ys(t,i,"child_moved",s,r,n),ys(t,i,"child_changed",e,r,n),ys(t,i,"value",e,r,n),i}function ys(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>KR(t,l,a)),o.forEach(l=>{const a=GR(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function GR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function KR(t,e,n){if(e.childName==null||n.childName==null)throw Xi("Should only compare child_ events.");const r=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t,e){return{eventCache:t,serverCache:e}}function $s(t,e,n,r){return ru(new Wr(e,n,r),t.serverCache)}function k0(t,e,n,r){return ru(t.eventCache,new Wr(e,n,r))}function Ed(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;const qR=()=>(ac||(ac=new lt(Ok)),ac);class ce{constructor(e,n=qR()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return ht(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(Q(e))return null;{const r=G(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(le(e),n);return s!=null?{path:Oe(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=G(e),r=this.children.get(n);return r!==null?r.subtree(le(e)):new ce(null)}}set(e,n){if(Q(e))return new ce(n,this.children);{const r=G(e),s=(this.children.get(r)||new ce(null)).set(le(e),n),o=this.children.insert(r,s);return new ce(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=G(e),r=this.children.get(n);if(r){const i=r.remove(le(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=G(e),r=this.children.get(n);return r?r.get(le(e)):null}}setTree(e,n){if(Q(e))return n;{const r=G(e),s=(this.children.get(r)||new ce(null)).setTree(le(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ce(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Oe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Q(e))return null;{const s=G(e),o=this.children.get(s);return o?o.findOnPath_(le(e),Oe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,r){if(Q(e))return this;{this.value&&r(n,this.value);const i=G(e),s=this.children.get(i);return s?s.foreachOnPath_(le(e),Oe(n,i),r):new ce(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.writeTree_=e}static empty(){return new zt(new ce(null))}}function Ws(t,e,n){if(Q(e))return new zt(new ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ot(i,e);return s=s.updateChild(o,n),new zt(t.writeTree_.set(i,s))}else{const i=new ce(n),s=t.writeTree_.setTree(e,i);return new zt(s)}}}function Km(t,e,n){let r=t;return ht(n,(i,s)=>{r=Ws(r,Oe(e,i),s)}),r}function qm(t,e){if(Q(e))return zt.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new zt(n)}}function Cd(t,e){return Xr(t,e)!=null}function Xr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function Qm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(r,i)=>{e.push(new K(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new K(r,i.value))}),e}function nr(t,e){if(Q(e))return t;{const n=Xr(t,e);return n!=null?new zt(new ce(n)):new zt(t.writeTree_.subtree(e))}}function Sd(t){return t.writeTree_.isEmpty()}function Hi(t,e){return R0(J(),t.writeTree_,e)}function R0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=R0(Oe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Oe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t,e){return b0(e,t)}function QR(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ws(t.visibleWrites,e,n)),t.lastWriteId=r}function YR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function XR(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&JR(l,r.path)?i=!1:Mt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return ZR(t),!0;if(r.snap)t.visibleWrites=qm(t.visibleWrites,r.path);else{const l=r.children;ht(l,a=>{t.visibleWrites=qm(t.visibleWrites,Oe(r.path,a))})}return!0}else return!1}function JR(t,e){if(t.snap)return Mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Mt(Oe(t.path,n),e))return!0;return!1}function ZR(t){t.visibleWrites=x0(t.allWrites,ex,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ex(t){return t.visible}function x0(t,e,n){let r=zt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Mt(n,o)?(l=ot(n,o),r=Ws(r,l,s.snap)):Mt(o,n)&&(l=ot(o,n),r=Ws(r,J(),s.snap.getChild(l)));else if(s.children){if(Mt(n,o))l=ot(n,o),r=Km(r,l,s.children);else if(Mt(o,n))if(l=ot(o,n),Q(l))r=Km(r,J(),s.children);else{const a=$i(s.children,G(l));if(a){const u=a.getChild(le(l));r=Ws(r,J(),u)}}}else throw Xi("WriteRecord should have .snap or .children")}}return r}function N0(t,e,n,r,i){if(!r&&!i){const s=Xr(t.visibleWrites,e);if(s!=null)return s;{const o=nr(t.visibleWrites,e);if(Sd(o))return n;if(n==null&&!Cd(o,J()))return null;{const l=n||j.EMPTY_NODE;return Hi(o,l)}}}else{const s=nr(t.visibleWrites,e);if(!i&&Sd(s))return n;if(!i&&n==null&&!Cd(s,J()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Mt(u.path,e)||Mt(e,u.path))},l=x0(t.allWrites,o,e),a=n||j.EMPTY_NODE;return Hi(l,a)}}}function tx(t,e,n){let r=j.EMPTY_NODE;const i=Xr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=nr(t.visibleWrites,e);return n.forEachChild(ye,(o,l)=>{const a=Hi(nr(s,new se(o)),l);r=r.updateImmediateChild(o,a)}),Qm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=nr(t.visibleWrites,e);return Qm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function nx(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Oe(e,n);if(Cd(t.visibleWrites,s))return null;{const o=nr(t.visibleWrites,s);return Sd(o)?i.getChild(n):Hi(o,i.getChild(n))}}function rx(t,e,n,r){const i=Oe(e,n),s=Xr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=nr(t.visibleWrites,i);return Hi(o,r.getNode().getImmediateChild(n))}else return null}function ix(t,e){return Xr(t.visibleWrites,e)}function sx(t,e,n,r,i,s,o){let l;const a=nr(t.visibleWrites,e),u=Xr(a,J());if(u!=null)l=u;else if(n!=null)l=Hi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&c.length<i;)d(_,r)!==0&&c.push(_),_=h.getNext();return c}else return[]}function ox(){return{visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1}}function Ia(t,e,n,r){return N0(t.writeTree,t.treePath,e,n,r)}function sf(t,e){return tx(t.writeTree,t.treePath,e)}function Ym(t,e,n,r){return nx(t.writeTree,t.treePath,e,n,r)}function Ta(t,e){return ix(t.writeTree,Oe(t.treePath,e))}function lx(t,e,n,r,i,s){return sx(t.writeTree,t.treePath,e,n,r,i,s)}function of(t,e,n){return rx(t.writeTree,t.treePath,e,n)}function P0(t,e){return b0(Oe(t.treePath,e),t.writeTree)}function b0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,vo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,_o(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Vi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,vo(r,e.snapshotNode,i.oldSnap));else throw Xi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const A0=new ux;class lf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return of(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vr(this.viewCache_),s=lx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t){return{filter:t}}function dx(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hx(t,e,n,r,i){const s=new ax;let o,l;if(n.type===Ut.OVERWRITE){const u=n;u.source.fromUser?o=Id(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!Q(u.path),o=ka(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Ut.MERGE){const u=n;u.source.fromUser?o=px(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Td(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Ut.ACK_USER_WRITE){const u=n;u.revert?o=_x(t,e,u.path,r,i,s):o=mx(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Ut.LISTEN_COMPLETE)o=gx(t,e,n.path,r,s);else throw Xi("Unknown operation type: "+n.type);const a=s.getChanges();return fx(e,o,a),{viewCache:o,changes:a}}function fx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ed(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(S0(Ed(e)))}}function O0(t,e,n,r,i,s){const o=e.eventCache;if(Ta(r,n)!=null)return e;{let l,a;if(Q(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Vr(e),c=u instanceof j?u:j.EMPTY_NODE,d=sf(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Ia(r,Vr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=G(n);if(u===".priority"){N(or(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=Ym(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=le(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Ym(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=of(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return $s(e,l,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function ka(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(Q(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),_,null)}else{const _=G(n);if(!a.isCompleteForPath(n)&&or(n)>1)return e;const v=le(n),S=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=c.updatePriority(a.getNode(),S):u=c.updateChild(a.getNode(),_,S,v,A0,null)}const d=k0(e,u,a.isFullyInitialized()||Q(n),c.filtersNodes()),h=new lf(i,d,s);return O0(t,d,n,i,h,l)}function Id(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new lf(i,e,s);if(Q(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=$s(e,u,!0,t.filter.filtersNodes());else{const d=G(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=$s(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=le(n),_=l.getNode().getImmediateChild(d);let v;if(Q(h))v=r;else{const y=c.getCompleteChild(d);y!=null?p0(h)===".priority"&&y.getChild(g0(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=j.EMPTY_NODE}if(_.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),d,v,h,c,o);a=$s(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Xm(t,e){return t.eventCache.isCompleteForChild(e)}function px(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=Oe(n,a);Xm(e,G(c))&&(l=Id(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=Oe(n,a);Xm(e,G(c))||(l=Id(t,l,c,u,i,s,o))}),l}function Jm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Td(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;Q(n)?u=r:u=new ce(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=Jm(t,_,h);a=ka(t,a,new se(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),y=Jm(t,v,h);a=ka(t,a,new se(d),y,i,s,o,l)}}),a}function mx(t,e,n,r,i,s,o){if(Ta(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(Q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ka(t,e,n,a.getNode().getChild(n),i,s,l,o);if(Q(n)){let u=new ce(null);return a.getNode().forEachChild(Ai,(c,d)=>{u=u.set(new se(c),d)}),Td(t,e,n,u,i,s,l,o)}else return e}else{let u=new ce(null);return r.foreach((c,d)=>{const h=Oe(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Td(t,e,n,u,i,s,l,o)}}function gx(t,e,n,r,i){const s=e.serverCache,o=k0(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return O0(t,o,n,r,A0,i)}function _x(t,e,n,r,i,s){let o;if(Ta(r,n)!=null)return e;{const l=new lf(r,e,i),a=e.eventCache.getNode();let u;if(Q(n)||G(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ia(r,Vr(e));else{const d=e.serverCache.getNode();N(d instanceof j,"serverChildren would be complete if leaf node"),c=sf(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=G(n);let d=of(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,le(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,j.EMPTY_NODE,le(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ia(r,Vr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ta(r,J())!=null,$s(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Zh(r.getIndex()),s=UR(r);this.processor_=cx(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,l.getNode(),null),c=new Wr(a,o.isFullyInitialized(),i.filtersNodes()),d=new Wr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ru(d,c),this.eventGenerator_=new VR(this.query_)}get query(){return this.query_}}function yx(t){return t.viewCache_.serverCache.getNode()}function wx(t,e){const n=Vr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function Zm(t){return t.eventRegistrations_.length===0}function Ex(t,e){t.eventRegistrations_.push(e)}function eg(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function tg(t,e,n,r){e.type===Ut.MERGE&&e.source.queryId!==null&&(N(Vr(t.viewCache_),"We should always have a full cache before handling merges"),N(Ed(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=hx(t.processor_,i,e,n,r);return dx(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,D0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Cx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(s,o)=>{r.push(Vi(s,o))}),n.isFullyInitialized()&&r.push(S0(n.getNode())),D0(t,r,n.getNode(),e)}function D0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return HR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra;class Sx{constructor(){this.views=new Map}}function Ix(t){N(!Ra,"__referenceConstructor has already been defined"),Ra=t}function Tx(){return N(Ra,"Reference.ts has not been loaded"),Ra}function kx(t){return t.views.size===0}function af(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),tg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(tg(o,e,n,r));return s}}function Rx(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Ia(n,i?r:null),a=!1;l?a=!0:r instanceof j?(l=sf(n,r),a=!1):(l=j.EMPTY_NODE,a=!1);const u=ru(new Wr(l,a,!1),new Wr(r,i,!1));return new vx(e,u)}return o}function xx(t,e,n,r,i,s){const o=Rx(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ex(o,n),Cx(o,n)}function Nx(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=lr(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(eg(u,n,r)),Zm(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(eg(a,n,r)),Zm(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!lr(t)&&s.push(new(Tx())(e._repo,e._path)),{removed:s,events:o}}function L0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Oi(t,e){let n=null;for(const r of t.views.values())n=n||wx(r,e);return n}function M0(t,e){if(e._queryParams.loadsAllData())return iu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function U0(t,e){return M0(t,e)!=null}function lr(t){return iu(t)!=null}function iu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa;function Px(t){N(!xa,"__referenceConstructor has already been defined"),xa=t}function bx(){return N(xa,"Reference.ts has not been loaded"),xa}let Ax=1;class ng{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=ox(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function F0(t,e,n,r,i){return QR(t.pendingWriteTree_,e,n,r,i),i?Fo(t,new $r(T0(),e,n)):[]}function Tr(t,e,n=!1){const r=YR(t.pendingWriteTree_,e);if(XR(t.pendingWriteTree_,e)){let s=new ce(null);return r.snap!=null?s=s.set(J(),!0):ht(r.children,o=>{s=s.set(new se(o),!0)}),Fo(t,new Sa(r.path,s,n))}else return[]}function su(t,e,n){return Fo(t,new $r(tf(),e,n))}function Ox(t,e,n){const r=ce.fromObject(n);return Fo(t,new Eo(tf(),e,r))}function Dx(t,e){return Fo(t,new wo(tf(),e))}function Lx(t,e,n){const r=cf(t,n);if(r){const i=df(r),s=i.path,o=i.queryId,l=ot(s,e),a=new wo(nf(o),l);return hf(t,s,a)}else return[]}function kd(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||U0(o,e))){const a=Nx(o,e,n,r);kx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>lr(_));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=Fx(h);for(let v=0;v<_.length;++v){const y=_[v],S=y.query,m=B0(t,y);t.listenProvider_.startListening(Vs(S),Na(t,S),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Vs(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(ou(h));t.listenProvider_.stopListening(Vs(h),_)}))}jx(t,u)}return l}function Mx(t,e,n,r){const i=cf(t,r);if(i!=null){const s=df(i),o=s.path,l=s.queryId,a=ot(o,e),u=new $r(nf(l),a,n);return hf(t,o,u)}else return[]}function Ux(t,e,n,r){const i=cf(t,r);if(i){const s=df(i),o=s.path,l=s.queryId,a=ot(o,e),u=ce.fromObject(n),c=new Eo(nf(l),a,u);return hf(t,o,c)}else return[]}function rg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=ot(h,i);s=s||Oi(_,v),o=o||lr(_)});let l=t.syncPointTree_.get(i);l?(o=o||lr(l),s=s||Oi(l,J())):(l=new Sx,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=Oi(v,J());y&&(s=s.updateImmediateChild(_,y))}));const u=U0(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=ou(e);N(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=zx();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const c=rf(t.pendingWriteTree_,i);let d=xx(l,e,n,c,s,a);if(!u&&!o&&!r){const h=M0(l,e);d=d.concat(Bx(t,e,h))}return d}function uf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ot(o,e),u=Oi(l,a);if(u)return u});return N0(i,e,s,n,!0)}function Fo(t,e){return j0(e,t.syncPointTree_,null,rf(t.pendingWriteTree_,J()))}function j0(t,e,n,r){if(Q(t.path))return z0(t,e,n,r);{const i=e.get(J());n==null&&i!=null&&(n=Oi(i,J()));let s=[];const o=G(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=P0(r,o);s=s.concat(j0(l,a,u,c))}return i&&(s=s.concat(af(i,t,r,n))),s}}function z0(t,e,n,r){const i=e.get(J());n==null&&i!=null&&(n=Oi(i,J()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=P0(r,o),c=t.operationForChild(o);c&&(s=s.concat(z0(c,l,a,u)))}),i&&(s=s.concat(af(i,t,r,n))),s}function B0(t,e){const n=e.query,r=Na(t,n);return{hashFn:()=>(yx(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Lx(t,n._path,r):Dx(t,n._path);{const s=Mk(i,n);return kd(t,n,null,s)}}}}function Na(t,e){const n=ou(e);return t.queryToTagMap.get(n)}function ou(t){return t._path.toString()+"$"+t._queryIdentifier}function cf(t,e){return t.tagToQueryMap.get(e)}function df(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function hf(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=rf(t.pendingWriteTree_,e);return af(r,n,i,null)}function Fx(t){return t.fold((e,n,r)=>{if(n&&lr(n))return[iu(n)];{let i=[];return n&&(i=L0(n)),ht(r,(s,o)=>{i=i.concat(o)}),i}})}function Vs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bx())(t._repo,t._path):t}function jx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ou(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function zx(){return Ax++}function Bx(t,e,n){const r=e._path,i=Na(t,e),s=B0(t,n),o=t.listenProvider_.startListening(Vs(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)N(!lr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!Q(u)&&c&&lr(c))return[iu(c).query];{let h=[];return c&&(h=h.concat(L0(c).map(_=>_.query))),ht(d,(_,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Vs(c),Na(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ff(n)}node(){return this.node_}}class pf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Oe(this.path_,e);return new pf(this.syncTree_,n)}node(){return uf(this.syncTree_,this.path_)}}const $x=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ig=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Wx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Vx(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Wx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},Vx=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Hx=function(t,e,n,r){return mf(e,new pf(n,t),r)},$0=function(t,e,n){return mf(t,new ff(e),n)};function mf(t,e,n){const r=t.getPriority().val(),i=ig(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=ig(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Me(l,We(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Me(i))),o.forEachChild(ye,(l,a)=>{const u=mf(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function _f(t,e){let n=e instanceof se?e:new se(e),r=t,i=G(n);for(;i!==null;){const s=$i(r.node.children,i)||{children:{},childCount:0};r=new gf(i,r,s),n=le(n),i=G(n)}return r}function ns(t){return t.node.value}function W0(t,e){t.node.value=e,Rd(t)}function V0(t){return t.node.childCount>0}function Gx(t){return ns(t)===void 0&&!V0(t)}function lu(t,e){ht(t.node.children,(n,r)=>{e(new gf(n,t,r))})}function H0(t,e,n,r){n&&!r&&e(t),lu(t,i=>{H0(i,e,!0,r)}),n&&r&&e(t)}function Kx(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function jo(t){return new se(t.parent===null?t.name:jo(t.parent)+"/"+t.name)}function Rd(t){t.parent!==null&&qx(t.parent,t.name,t)}function qx(t,e,n){const r=Gx(n),i=kn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Rd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Rd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=/[\[\].#$\/\u0000-\u001F\u007F]/,Yx=/[\[\].#$\u0000-\u001F\u007F]/,uc=10*1024*1024,G0=function(t){return typeof t=="string"&&t.length!==0&&!Qx.test(t)},K0=function(t){return typeof t=="string"&&t.length!==0&&!Yx.test(t)},Xx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),K0(t)},q0=function(t,e,n,r){r&&e===void 0||vf(Oh(t,"value"),e,n)},vf=function(t,e,n){const r=n instanceof se?new mR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+wr(r));if(typeof e=="function")throw new Error(t+"contains a function "+wr(r)+" with contents = "+e.toString());if(Ky(e))throw new Error(t+"contains "+e.toString()+" "+wr(r));if(typeof e=="string"&&e.length>uc/3&&Xa(e)>uc)throw new Error(t+"contains a string greater than "+uc+" utf8 bytes "+wr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ht(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!G0(o)))throw new Error(t+" contains an invalid key ("+o+") "+wr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gR(r,o),vf(t,l,r),_R(r)}),i&&s)throw new Error(t+' contains ".value" child '+wr(r)+" in addition to actual children.")}},Q0=function(t,e,n,r){if(!(r&&n===void 0)&&!K0(n))throw new Error(Oh(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Jx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Q0(t,e,n,r)},yf=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Zx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!G0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Xx(n))throw new Error(Oh(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Yh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Y0(t,e,n){wf(t,n),X0(t,r=>Yh(r,e))}function Cn(t,e,n){wf(t,n),X0(t,r=>Mt(r,e)||Mt(e,r))}function X0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(tN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Pr&&Qe("event: "+n.toString()),ts(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="repo_interrupt",rN=25;class iN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ca(),this.transactionQueueTree_=new gf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sN(t,e,n){if(t.stats_=qh(t.repoInfo_),t.forceRestClient_||zk())t.server_=new Ea(t.repoInfo_,(r,i,s,o)=>{sg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>og(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{je(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new pn(t.repoInfo_,e,(r,i,s,o)=>{sg(t,r,i,s,o)},r=>{og(t,r)},r=>{oN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Hk(t.repoInfo_,()=>new WR(t.stats_,t.server_)),t.infoData_=new FR,t.infoSyncTree_=new ng({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=su(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Cf(t,"connected",!1),t.serverSyncTree_=new ng({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Cn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function J0(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ef(t){return $x({timestamp:J0(t)})}function sg(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=aa(n,u=>We(u));o=Ux(t.serverSyncTree_,s,a,i)}else{const a=We(n);o=Mx(t.serverSyncTree_,s,a,i)}else if(r){const a=aa(n,u=>We(u));o=Ox(t.serverSyncTree_,s,a)}else{const a=We(n);o=su(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=au(t,s)),Cn(t.eventQueue_,l,o)}function og(t,e){Cf(t,"connected",e),e===!1&&aN(t)}function oN(t,e){ht(e,(n,r)=>{Cf(t,n,r)})}function Cf(t,e,n){const r=new se("/.info/"+e),i=We(n);t.infoData_.updateSnapshot(r,i);const s=su(t.infoSyncTree_,r,i);Cn(t.eventQueue_,r,s)}function Z0(t){return t.nextWriteId_++}function lN(t,e,n,r,i){Sf(t,"set",{path:e.toString(),value:n,priority:r});const s=Ef(t),o=We(n,r),l=uf(t.serverSyncTree_,e),a=$0(o,l,s),u=Z0(t),c=F0(t.serverSyncTree_,e,a,u,!0);wf(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||dt("set at "+e+" failed: "+h);const y=Tr(t.serverSyncTree_,u,!v);Cn(t.eventQueue_,e,y),dN(t,i,h,_)});const d=iw(t,e);au(t,d),Cn(t.eventQueue_,d,[])}function aN(t){Sf(t,"onDisconnectEvents");const e=Ef(t),n=Ca();wd(t.onDisconnect_,J(),(i,s)=>{const o=Hx(i,s,t.serverSyncTree_,e);I0(n,i,o)});let r=[];wd(n,J(),(i,s)=>{r=r.concat(su(t.serverSyncTree_,i,s));const o=iw(t,i);au(t,o)}),t.onDisconnect_=Ca(),Cn(t.eventQueue_,J(),r)}function uN(t,e,n){let r;G(e._path)===".info"?r=rg(t.infoSyncTree_,e,n):r=rg(t.serverSyncTree_,e,n),Y0(t.eventQueue_,e._path,r)}function lg(t,e,n){let r;G(e._path)===".info"?r=kd(t.infoSyncTree_,e,n):r=kd(t.serverSyncTree_,e,n),Y0(t.eventQueue_,e._path,r)}function cN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nN)}function Sf(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qe(n,...e)}function dN(t,e,n,r){e&&ts(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function ew(t,e,n){return uf(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function If(t,e=t.transactionQueueTree_){if(e||uu(t,e),ns(e)){const n=nw(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hN(t,jo(e),n)}else V0(e)&&lu(e,n=>{If(t,n)})}function hN(t,e,n){const r=n.map(u=>u.currentWriteId),i=ew(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ot(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Sf(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Tr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();uu(t,_f(t.transactionQueueTree_,e)),If(t,t.transactionQueueTree_),Cn(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)ts(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{dt("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}au(t,e)}},o)}function au(t,e){const n=tw(t,e),r=jo(n),i=nw(t,n);return fN(t,i,r),r}function fN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=ot(n,a.path);let c=!1,d;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Tr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=rN)c=!0,d="maxretry",i=i.concat(Tr(t.serverSyncTree_,a.currentWriteId,!0));else{const h=ew(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){vf("transaction failed: Data returned ",_,a.path);let v=We(_);typeof _=="object"&&_!=null&&kn(_,".priority")||(v=v.updatePriority(h.getPriority()));const S=a.currentWriteId,m=Ef(t),f=$0(v,h,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=Z0(t),o.splice(o.indexOf(S),1),i=i.concat(F0(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Tr(t.serverSyncTree_,S,!0))}else c=!0,d="nodata",i=i.concat(Tr(t.serverSyncTree_,a.currentWriteId,!0))}Cn(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}uu(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ts(r[l]);If(t,t.transactionQueueTree_)}function tw(t,e){let n,r=t.transactionQueueTree_;for(n=G(e);n!==null&&ns(r)===void 0;)r=_f(r,n),e=le(e),n=G(e);return r}function nw(t,e){const n=[];return rw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function rw(t,e,n){const r=ns(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);lu(e,i=>{rw(t,i,n)})}function uu(t,e){const n=ns(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,W0(e,n.length>0?n:void 0)}lu(e,r=>{uu(t,r)})}function iw(t,e){const n=jo(tw(t,e)),r=_f(t.transactionQueueTree_,e);return Kx(r,i=>{cc(t,i)}),cc(t,r),H0(r,i=>{cc(t,i)}),n}function cc(t,e){const n=ns(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Tr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?W0(e,void 0):n.length=s+1,Cn(t.eventQueue_,jo(e),i);for(let o=0;o<r.length;o++)ts(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function mN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const ag=function(t,e){const n=gN(t),r=n.namespace;n.domain==="firebase.com"&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new s0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},gN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=pN(t.substring(c,d)));const h=mN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",_N=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=ug.charAt(n%64),n=Math.floor(n/64);N(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ug.charAt(e[i]);return N(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+je(this.snapshot.exportVal())}}class ow{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Q(this._path)?null:p0(this._path)}get ref(){return new Rn(this._repo,this._path)}get _queryIdentifier(){const e=Hm(this._queryParams),n=Gh(e);return n==="{}"?"default":n}get _queryObject(){return Hm(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof Tf))return!1;const n=this._repo===e._repo,r=Yh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pR(this._path)}}class Rn extends Tf{constructor(e,n){super(e,n,new ef,!1)}get parent(){const e=g0(this._path);return e===null?null:new Rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Co{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=Gi(this.ref,e);return new Co(this._node.getChild(n),r,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Co(i,Gi(this.ref,r),ye)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lw(t,e){return t=Pe(t),t._checkNotDeleted("ref"),e!==void 0?Gi(t._root,e):t._root}function Gi(t,e){return t=Pe(t),G(t._path)===null?Jx("child","path",e,!1):Q0("child","path",e,!1),new Rn(t._repo,Oe(t._path,e))}function cg(t,e){t=Pe(t),yf("push",t._path),q0("push",e,t._path,!0);const n=J0(t._repo),r=_N(n),i=Gi(t,r),s=Gi(t,r);let o;return e!=null?o=aw(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function yN(t){return yf("remove",t._path),aw(t,null)}function aw(t,e){t=Pe(t),yf("set",t._path),q0("set",e,t._path,!1);const n=new Ya;return lN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class kf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new sw("value",this,new Co(e.snapshotNode,new Rn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ow(this,e,n):null}matches(e){return e instanceof kf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Rf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ow(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=Gi(new Rn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new sw(e.type,this,new Co(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Rf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function wN(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{lg(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new vN(n,s||void 0),l=e==="value"?new kf(o):new Rf(e,o);return uN(t._repo,t,l),()=>lg(t._repo,t,l)}function EN(t,e,n,r){return wN(t,"value",e,n,r)}Ix(Rn);Px(Rn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="FIREBASE_DATABASE_EMULATOR_HOST",xd={};let SN=!1;function IN(t,e,n,r){t.repoInfo_=new s0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function TN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ag(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[CN]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=ag(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new bi(bi.OWNER):new $k(t.name,t.options,e);Zx("Invalid Firebase Database URL",o),Q(o.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const d=RN(l,t,c,new Bk(t.name,n));return new xN(d,t)}function kN(t,e){const n=xd[e];(!n||n[t.key]!==t)&&En(`Database ${e}(${t.repoInfo_}) has already been deleted.`),cN(t),delete n[t.key]}function RN(t,e,n,r){let i=xd[e.name];i||(i={},xd[e.name]=i);let s=i[t.toURLString()];return s&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new iN(t,SN,n,r),i[t.toURLString()]=s,s}class xN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rn(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(kN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}}function NN(t=Mh(),e){const n=Ja(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Zv("database");r&&PN(n,...r)}return n}function PN(t,e,n,r={}){t=Pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&En("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new bi(bi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ny(r.mockUserToken,t.app.options.projectId);s=new bi(o)}IN(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){kk(Qr),Fr(new sr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return TN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Jt(xm,Nm,t),Jt(xm,Nm,"esm2017")}pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bN();let AN={data:""},ON=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||AN,DN=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,LN=/\/\*[^]*?\*\/|  +/g,dg=/\n+/g,$n=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?$n(o,s):s+"{"+$n(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=$n(o,e?e.replace(/([^,])+/g,l=>s.replace(/(^:.*)|([^,])+/g,a=>/&/.test(a)?a.replace(/&/g,l):l?l+" "+a:a)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=$n.p?$n.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},sn={},uw=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+uw(t[n]);return e}return t},MN=(t,e,n,r,i)=>{let s=uw(t),o=sn[s]||(sn[s]=(a=>{let u=0,c=11;for(;u<a.length;)c=101*c+a.charCodeAt(u++)>>>0;return"go"+c})(s));if(!sn[o]){let a=s!==t?t:(u=>{let c,d,h=[{}];for(;c=DN.exec(u.replace(LN,""));)c[4]?h.shift():c[3]?(d=c[3].replace(dg," ").trim(),h.unshift(h[0][d]=h[0][d]||{})):h[0][c[1]]=c[2].replace(dg," ").trim();return h[0]})(t);sn[o]=$n(i?{["@keyframes "+o]:a}:a,n?"":"."+o)}let l=n&&sn.g?sn.g:null;return n&&(sn.g=sn[o]),((a,u,c,d)=>{d?u.data=u.data.replace(d,a):u.data.indexOf(a)===-1&&(u.data=c?a+u.data:u.data+a)})(sn[o],e,r,l),o},UN=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),a=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=a?"."+a:l&&typeof l=="object"?l.props?"":$n(l,""):l===!1?"":l}return r+i+(o??"")},"");function cu(t){let e=this||{},n=t.call?t(e.p):t;return MN(n.unshift?n.raw?UN(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,ON(e.target),e.g,e.o,e.k)}let cw,Nd,Pd;cu.bind({g:1});let Sn=cu.bind({k:1});function FN(t,e,n,r){$n.p=e,cw=t,Nd=n,Pd=r}function fr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),a=l.className||i.className;n.p=Object.assign({theme:Nd&&Nd()},l),n.o=/ *go\d+/.test(a),l.className=cu.apply(n,r)+(a?" "+a:""),e&&(l.ref=o);let u=t;return t[0]&&(u=l.as||t,delete l.as),Pd&&u[0]&&Pd(l),cw(u,l)}return e?e(i):i}}var jN=t=>typeof t=="function",Pa=(t,e)=>jN(t)?t(e):t,zN=(()=>{let t=0;return()=>(++t).toString()})(),dw=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),BN=20,Ol=new Map,$N=1e3,hg=t=>{if(Ol.has(t))return;let e=setTimeout(()=>{Ol.delete(t),Jr({type:4,toastId:t})},$N);Ol.set(t,e)},WN=t=>{let e=Ol.get(t);e&&clearTimeout(e)},bd=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,BN)};case 1:return e.toast.id&&WN(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?bd(t,{type:1,toast:n}):bd(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?hg(r):t.toasts.forEach(s=>{hg(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Dl=[],Ll={toasts:[],pausedAt:void 0},Jr=t=>{Ll=bd(Ll,t),Dl.forEach(e=>{e(Ll)})},VN={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},HN=(t={})=>{let[e,n]=C.useState(Ll);C.useEffect(()=>(Dl.push(n),()=>{let i=Dl.indexOf(n);i>-1&&Dl.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||VN[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},GN=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||zN()}),zo=t=>(e,n)=>{let r=GN(e,t,n);return Jr({type:2,toast:r}),r.id},gt=(t,e)=>zo("blank")(t,e);gt.error=zo("error");gt.success=zo("success");gt.loading=zo("loading");gt.custom=zo("custom");gt.dismiss=t=>{Jr({type:3,toastId:t})};gt.remove=t=>Jr({type:4,toastId:t});gt.promise=(t,e,n)=>{let r=gt.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(gt.success(Pa(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{gt.error(Pa(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var KN=(t,e)=>{Jr({type:1,toast:{id:t,height:e}})},qN=()=>{Jr({type:5,time:Date.now()})},QN=t=>{let{toasts:e,pausedAt:n}=HN(t);C.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(l=>{if(l.duration===1/0)return;let a=(l.duration||0)+l.pauseDuration-(s-l.createdAt);if(a<0){l.visible&&gt.dismiss(l.id);return}return setTimeout(()=>gt.dismiss(l.id),a)});return()=>{o.forEach(l=>l&&clearTimeout(l))}},[e,n]);let r=C.useCallback(()=>{n&&Jr({type:6,time:Date.now()})},[n]),i=C.useCallback((s,o)=>{let{reverseOrder:l=!1,gutter:a=8,defaultPosition:u}=o||{},c=e.filter(_=>(_.position||u)===(s.position||u)&&_.height),d=c.findIndex(_=>_.id===s.id),h=c.filter((_,v)=>v<d&&_.visible).length;return c.filter(_=>_.visible).slice(...l?[h+1]:[0,h]).reduce((_,v)=>_+(v.height||0)+a,0)},[e]);return{toasts:e,handlers:{updateHeight:KN,startPause:qN,endPause:r,calculateOffset:i}}},YN=Sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,XN=Sn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,JN=Sn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ZN=fr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${YN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${XN} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${JN} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,eP=Sn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,tP=fr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${eP} 1s linear infinite;
`,nP=Sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,rP=Sn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,iP=fr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${nP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${rP} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,sP=fr("div")`
  position: absolute;
`,oP=fr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,lP=Sn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,aP=fr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${lP} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,uP=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?C.createElement(aP,null,e):e:n==="blank"?null:C.createElement(oP,null,C.createElement(tP,{...r}),n!=="loading"&&C.createElement(sP,null,n==="error"?C.createElement(ZN,{...r}):C.createElement(iP,{...r})))},cP=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,dP=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,hP="0%{opacity:0;} 100%{opacity:1;}",fP="0%{opacity:1;} 100%{opacity:0;}",pP=fr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,mP=fr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,gP=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=dw()?[hP,fP]:[cP(n),dP(n)];return{animation:e?`${Sn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Sn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},_P=C.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?gP(t.position||e||"top-center",t.visible):{opacity:0},s=C.createElement(uP,{toast:t}),o=C.createElement(mP,{...t.ariaProps},Pa(t.message,t));return C.createElement(pP,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):C.createElement(C.Fragment,null,s,o))});FN(C.createElement);var vP=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=C.useCallback(o=>{if(o){let l=()=>{let a=o.getBoundingClientRect().height;r(t,a)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return C.createElement("div",{ref:s,className:e,style:n},i)},yP=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dw()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},wP=cu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,fl=16,EP=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:a}=QN(n);return C.createElement("div",{style:{position:"fixed",zIndex:9999,top:fl,left:fl,right:fl,bottom:fl,pointerEvents:"none",...s},className:o,onMouseEnter:a.startPause,onMouseLeave:a.endPause},l.map(u=>{let c=u.position||e,d=a.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),h=yP(c,d);return C.createElement(vP,{id:u.id,key:u.id,onHeightUpdate:a.updateHeight,className:u.visible?wP:"",style:h},u.type==="custom"?Pa(u.message,u):i?i(u):C.createElement(_P,{toast:u,position:c}))}))},CP=gt;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="firebasestorage.googleapis.com",fw="storageBucket",SP=2*60*1e3,IP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee extends Tn{constructor(e,n,r=0){super(dc(e),`Firebase Storage: ${n} (${dc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function dc(t){return"storage/"+t}function xf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ee(we.UNKNOWN,t)}function TP(t){return new Ee(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function kP(t){return new Ee(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ee(we.UNAUTHENTICATED,t)}function xP(){return new Ee(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NP(t){return new Ee(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function PP(){return new Ee(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bP(){return new Ee(we.CANCELED,"User canceled the upload/download.")}function AP(t){return new Ee(we.INVALID_URL,"Invalid URL '"+t+"'.")}function OP(t){return new Ee(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function DP(){return new Ee(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fw+"' property when initializing the app?")}function LP(){return new Ee(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function MP(){return new Ee(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function UP(t){return new Ee(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ad(t){return new Ee(we.INVALID_ARGUMENT,t)}function pw(){return new Ee(we.APP_DELETED,"The Firebase app was deleted.")}function FP(t){return new Ee(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hs(t,e){return new Ee(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ws(t){throw new Ee(we.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_t.makeFromUrl(e,n)}catch{return new _t(e,"")}if(r.path==="")return r;throw OP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(p){p.path.charAt(p.path.length-1)==="/"&&(p.path_=p.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function u(p){p.path_=decodeURIComponent(p.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},y=n===hw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${S}`,"i"),g=[{regex:l,indices:a,postModify:s},{regex:_,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let p=0;p<g.length;p++){const T=g[p],P=T.regex.exec(e);if(P){const x=P[T.indices.bucket];let b=P[T.indices.path];b||(b=""),r=new _t(x,b),T.postModify(r);break}}if(r==null)throw AP(e);return r}}class jP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let u=!1;function c(...S){u||(u=!0,e.apply(null,S))}function d(S){i=setTimeout(()=>{i=null,t(_,a())},S)}function h(){s&&clearTimeout(s)}function _(S,...m){if(u){h();return}if(S){h(),c.call(null,S,...m);return}if(a()||o){h(),c.call(null,S,...m);return}r<64&&(r*=2);let g;l===1?(l=2,g=0):g=(r+Math.random())*1e3,d(g)}let v=!1;function y(S){v||(v=!0,h(),!u&&(i!==null?(S||(l=2),clearTimeout(i),d(0)):S||(l=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function BP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){return t!==void 0}function WP(t){return typeof t=="object"&&!Array.isArray(t)}function Nf(t){return typeof t=="string"||t instanceof String}function fg(t){return Pf()&&t instanceof Blob}function Pf(){return typeof Blob<"u"&&!zS()}function pg(t,e,n,r){if(r<e)throw Ad(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ad(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function mw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(br||(br={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,r,i,s,o,l,a,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new pl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===br.NO_ERROR,a=s.getStatus();if(!l||VP(a,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===br.ABORT;r(!1,new pl(!1,null,c));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new pl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());$P(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=xf();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?pw():bP();o(a)}else{const a=PP();o(a)}};this.canceled_?n(!1,new pl(!1,null,!0)):this.backoffId_=zP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&BP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function GP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YP(t,e,n,r,i,s,o=!0){const l=mw(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return qP(u,e),GP(u,n),KP(u,s),QP(u,r),new HP(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function JP(...t){const e=XP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Pf())return new Blob(t);throw new Ee(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ZP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(t){if(typeof atob>"u")throw UP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hc{constructor(e,n){this.data=e,this.contentType=n||null}}function tb(t,e){switch(t){case Qt.RAW:return new hc(gw(e));case Qt.BASE64:case Qt.BASE64URL:return new hc(_w(t,e));case Qt.DATA_URL:return new hc(rb(e),ib(e))}throw xf()}function gw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nb(t){let e;try{e=decodeURIComponent(t)}catch{throw Hs(Qt.DATA_URL,"Malformed data URL.")}return gw(e)}function _w(t,e){switch(t){case Qt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Hs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Qt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Hs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=eb(e)}catch(i){throw i.message.includes("polyfill")?i:Hs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class vw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Hs(Qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=sb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rb(t){const e=new vw(t);return e.base64?_w(Qt.BASE64,e.rest):nb(e.rest)}function ib(t){return new vw(t).contentType}function sb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){let r=0,i="";fg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(fg(this.data_)){const r=this.data_,i=ZP(r,e,n);return i===null?null:new Wn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Wn(r,!0)}}static getBlob(...e){if(Pf()){const n=e.map(r=>r instanceof Wn?r.data_:r);return new Wn(JP.apply(null,n))}else{const n=e.map(o=>Nf(o)?tb(Qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Wn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){let e;try{e=JSON.parse(t)}catch{return null}return WP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ww(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t,e){return e}class Ze{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||ab}}let ml=null;function ub(t){return!Nf(t)||t.length<2?t:ww(t)}function Ew(){if(ml)return ml;const t=[];t.push(new Ze("bucket")),t.push(new Ze("generation")),t.push(new Ze("metageneration")),t.push(new Ze("name","fullPath",!0));function e(s,o){return ub(o)}const n=new Ze("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ze("size");return i.xform=r,t.push(i),t.push(new Ze("timeCreated")),t.push(new Ze("updated")),t.push(new Ze("md5Hash",null,!0)),t.push(new Ze("cacheControl",null,!0)),t.push(new Ze("contentDisposition",null,!0)),t.push(new Ze("contentEncoding",null,!0)),t.push(new Ze("contentLanguage",null,!0)),t.push(new Ze("contentType",null,!0)),t.push(new Ze("metadata","customMetadata",!0)),ml=t,ml}function cb(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new _t(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function db(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return cb(r,t),r}function Cw(t,e,n){const r=yw(e);return r===null?null:db(t,r,n)}function hb(t,e,n,r){const i=yw(e);if(i===null||!Nf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),_=bf(h,n,r),v=mw({alt:"media",token:u});return _+v})[0]}function fb(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Sw{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t){if(!t)throw xf()}function pb(t,e){function n(r,i){const s=Cw(t,i,e);return Iw(s!==null),s}return n}function mb(t,e){function n(r,i){const s=Cw(t,i,e);return Iw(s!==null),hb(s,i,t.host,t._protocol)}return n}function Tw(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=xP():i=RP():n.getStatus()===402?i=kP(t.bucket):n.getStatus()===403?i=NP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function gb(t){const e=Tw(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=TP(t.path)),s.serverResponse=i.serverResponse,s}return n}function _b(t,e,n){const r=e.fullServerUrl(),i=bf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Sw(i,s,mb(t,n),o);return l.errorHandler=gb(e),l}function vb(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yb(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vb(null,e)),r}function wb(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let g="";for(let p=0;p<2;p++)g=g+Math.random().toString().slice(2);return g}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=yb(e,r,i),c=fb(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+a+"--",_=Wn.getBlob(d,r,h);if(_===null)throw LP();const v={name:u.fullPath},y=bf(s,t.host,t._protocol),S="POST",m=t.maxUploadRetryTime,f=new Sw(y,S,pb(t,n),m);return f.urlParams=v,f.headers=o,f.body=_.uploadData(),f.errorHandler=Tw(e),f}class Eb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ws("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Cb extends Eb{initXhr(){this.xhr_.responseType="text"}}function kw(){return new Cb}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this._service=e,n instanceof _t?this._location=n:this._location=_t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hr(e,n)}get root(){const e=new _t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ww(this._location.path)}get storage(){return this._service}get parent(){const e=ob(this._location.path);if(e===null)return null;const n=new _t(this._location.bucket,e);return new Hr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FP(e)}}function Sb(t,e,n){t._throwIfRoot("uploadBytes");const r=wb(t.storage,t._location,Ew(),new Wn(e,!0),n);return t.storage.makeRequestWithTokens(r,kw).then(i=>({metadata:i,ref:t}))}function Ib(t){t._throwIfRoot("getDownloadURL");const e=_b(t.storage,t._location,Ew());return t.storage.makeRequestWithTokens(e,kw).then(n=>{if(n===null)throw MP();return n})}function Tb(t,e){const n=lb(t._location.path,e),r=new _t(t._location.bucket,n);return new Hr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){return/^[A-Za-z]+:\/\//.test(t)}function Rb(t,e){return new Hr(t,e)}function Rw(t,e){if(t instanceof Af){const n=t;if(n._bucket==null)throw DP();const r=new Hr(n,n._bucket);return e!=null?Rw(r,e):r}else return e!==void 0?Tb(t,e):t}function xb(t,e){if(e&&kb(e)){if(t instanceof Af)return Rb(t,e);throw Ad("To use ref(service, url), the first argument must be a Storage instance.")}else return Rw(t,e)}function mg(t,e){const n=e==null?void 0:e[fw];return n==null?null:_t.makeFromBucketSpec(n,t)}function Nb(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ny(i,t.app.options.projectId))}class Af{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=hw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SP,this._maxUploadRetryTime=IP,this._requests=new Set,i!=null?this._bucket=_t.makeFromBucketSpec(i,this._host):this._bucket=mg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_t.makeFromBucketSpec(this._url,e):this._bucket=mg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new jP(pw());{const o=YP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const gg="@firebase/storage",_g="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="storage";function Pb(t,e,n){return t=Pe(t),Sb(t,e,n)}function bb(t){return t=Pe(t),Ib(t)}function Ab(t,e){return t=Pe(t),xb(t,e)}function Ob(t=Mh(),e){t=Pe(t);const r=Ja(t,xw).getImmediate({identifier:e}),i=Zv("storage");return i&&Db(r,...i),r}function Db(t,e,n,r={}){Nb(t,e,n,r)}function Lb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Af(n,r,i,e,Qr)}function Mb(){Fr(new sr(xw,Lb,"PUBLIC").setMultipleInstances(!0)),Jt(gg,_g,""),Jt(gg,_g,"esm2017")}Mb();const Ub={apiKey:"AIzaSyCRQqjxl1EZTpMN-bx2_1rINcePZeCNGCo",authDomain:"chat-room-ac113.firebaseapp.com",datatbaseURL:"https://chat-room-ac113-default-rtdb.firebaseio.com/",projectId:"chat-room-ac113",storageBucket:"chat-room-ac113.appspot.com",messagingSenderId:"71734616025",appId:"1:71734616025:web:ba05da9bedc52039fd03c8"},Nw=C.createContext(),Of=ay(Ub),Fb=Ob(Of),Pw=NN(Of),fc=lw(Pw,"messages"),ri=wk(Of),Bo=()=>C.useContext(Nw),jb=({children:t})=>{const[e]=Tk(ri),[n,r]=C.useState([]),[i,s]=C.useState(!1),[o,l]=C.useState({flag:"",message:""}),[a,u]=C.useState({email:"",password:""}),c=()=>{s(!0),vm(ri,a.email).then(m=>{m.length>0?(l({flag:"red",message:"Email is already registered go to Login"}),s(!1)):(s(!0),n1(ri,a.email,a.password).then(()=>{l({flag:"green",message:"Email is registered go to Login"}),s(!1)}).catch(f=>{console.log(f.message),s(!1)}))}),u({email:"",password:""}),setTimeout(()=>{l({flag:"",message:""})},1e3)},d=()=>{s(!0),vm(ri,a.email).then(m=>{m.length>0?r1(ri,a.email,a.password).then(f=>{localStorage.setItem("token",f.user.accessToken),s(!1),l({flag:"green",message:"user has logged in successfully"})}).catch(f=>{console.log(f),l({flag:"red",message:f.message}),s(!1)}):(l({flag:"red",message:"Email is not registered go to Sign Up."}),s(!1))}),u({email:"",password:""}),setTimeout(()=>{l({flag:"",message:""})},5e3)},h=()=>{a1(ri)},_=async m=>{try{const f={message:m.trim(),email:e.email,type:"message"};cg(fc,f)}catch(f){console.error(f.message)}y("message is sent.")},v=async m=>{const f=lw(Pw,`messages/${m}`);await yN(f),y("message is deleted.")},y=m=>{CP(m,{ariaProps:{role:"status","aria-live":"polite"}})},S=m=>{try{const f=`${Date.now()}_${m.name}`,g=Ab(Fb,f);Pb(g,m).then(p=>bb(p.ref)).then(p=>{const T={message:p,email:e.email,type:"image"};cg(fc,T)})}catch(f){console.log(f.message)}y("image is sent.")};return C.useEffect(()=>{EN(fc,m=>{if(m.exists()){const f=Object.values(m.val()),g=Object.keys(m.val());for(let p=0;p<f.length;p++)f[p].id=g[p];r(f)}})},[]),I.jsx(Nw.Provider,{value:{user:e,messageFromDataBase:n,uploadImg:S,deleteMessage:v,sendMessage:_,getUserLoggedOut:h,setUserCredentials:u,userCredentials:a,getUserSignUP:c,setMessage:l,message:o,loading:i,getUserLogin:d},children:t})},zb=t=>{const{deleteMessage:e,user:n}=Bo(),{id:r,email:i,message:s,type:o}=t.message,l=C.useRef(),a=()=>{l.current.scrollIntoView({behavior:"smooth"})},u=c=>{c===n.email&&e(r)};return C.useEffect(()=>{a()},[]),I.jsx(I.Fragment,{children:I.jsxs("div",{className:`flex ${n&&n.email===i?"justify-end":"justify-start"} mt-1.5`,children:[I.jsx("div",{className:`flex flex-col ${n&&n.email===i?"items-end":"items-start"}`,children:o==="message"?I.jsxs(I.Fragment,{children:[I.jsx("p",{className:"text-xs opacity-60",children:i}),I.jsx("div",{onDoubleClick:()=>{u(i)},className:`${n&&n.email===i?"bg-[#4bb4f8]":"bg-gray-600"} max-w-xs select-none py-1 cursor-pointer px-2.5 mt-2 rounded-2xl`,children:s})]}):I.jsxs(I.Fragment,{children:[I.jsx("p",{className:"text-xs opacity-60",children:i}),I.jsx("img",{className:"w-36 rounded-2xl mt-1 cursor-pointer",src:s,loading:"lazy",alt:`${i}-image`,onClick:()=>{t.setImagePreviewer(s,r,i)}})]})}),I.jsx("div",{ref:l})]})})};/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function he(){return he=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},he.apply(this,arguments)}var xe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xe||(xe={}));const vg="popstate";function Bb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return So("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Gr(i)}return Wb(e,n,null,t)}function q(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ki(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $b(){return Math.random().toString(36).substr(2,8)}function yg(t,e){return{usr:t.state,key:t.key,idx:e}}function So(t,e,n,r){return n===void 0&&(n=null),he({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xn(e):e,{state:n,key:e&&e.key||r||$b()})}function Gr(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xn(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Wb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=xe.Pop,a=null,u=c();u==null&&(u=0,o.replaceState(he({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=xe.Pop;let S=c(),m=S==null?null:S-u;u=S,a&&a({action:l,location:y.location,delta:m})}function h(S,m){l=xe.Push;let f=So(y.location,S,m);n&&n(f,S),u=c()+1;let g=yg(f,u),p=y.createHref(f);try{o.pushState(g,"",p)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(p)}s&&a&&a({action:l,location:y.location,delta:1})}function _(S,m){l=xe.Replace;let f=So(y.location,S,m);n&&n(f,S),u=c();let g=yg(f,u),p=y.createHref(f);o.replaceState(g,"",p),s&&a&&a({action:l,location:y.location,delta:0})}function v(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:Gr(S);return q(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return l},get location(){return t(i,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(vg,d),a=S,()=>{i.removeEventListener(vg,d),a=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let m=v(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:_,go(S){return o.go(S)}};return y}var Se;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Se||(Se={}));const Vb=new Set(["lazy","caseSensitive","path","id","index","children"]);function Hb(t){return t.index===!0}function Od(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],l=typeof i.id=="string"?i.id:o.join("-");if(q(i.index!==!0||!i.children,"Cannot specify children on an index route"),q(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),Hb(i)){let a=he({},i,e(i),{id:l});return r[l]=a,a}else{let a=he({},i,e(i),{id:l,children:void 0});return r[l]=a,i.children&&(a.children=Od(i.children,e,o,r)),a}})}function wi(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?xn(e):e,i=rs(r.pathname||"/",n);if(i==null)return null;let s=bw(t);Gb(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=tA(s[l],iA(i));return o}function bw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(q(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=mn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(q(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),bw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Zb(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Aw(s.path))i(s,o,a)}),e}function Aw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Aw(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function Gb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kb=/^:\w+$/,qb=3,Qb=2,Yb=1,Xb=10,Jb=-2,wg=t=>t==="*";function Zb(t,e){let n=t.split("/"),r=n.length;return n.some(wg)&&(r+=Jb),e&&(r+=Qb),n.filter(i=>!wg(i)).reduce((i,s)=>i+(Kb.test(s)?qb:s===""?Yb:Xb),r)}function eA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nA({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:mn([i,c.pathname]),pathnameBase:aA(mn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=mn([i,c.pathnameBase]))}return s}function nA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=l[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=sA(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ki(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iA(t){try{return decodeURI(t)}catch(e){return Ki(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sA(t,e){try{return decodeURIComponent(t)}catch(n){return Ki(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function rs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function oA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xn(t):t;return{pathname:n?n.startsWith("/")?n:lA(n,e):e,search:uA(r),hash:cA(i)}}function lA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function du(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Df(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xn(t):(i=he({},t),q(!i.pathname||!i.pathname.includes("?"),pc("?","pathname","search",i)),q(!i.pathname||!i.pathname.includes("#"),pc("#","pathname","hash",i)),q(!i.search||!i.search.includes("#"),pc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?e[d]:"/"}let a=oA(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const mn=t=>t.join("/").replace(/\/\/+/g,"/"),aA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),uA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Lf{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Ow(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Dw=["post","put","patch","delete"],dA=new Set(Dw),hA=["get",...Dw],fA=new Set(hA),pA=new Set([301,302,303,307,308]),mA=new Set([307,308]),mc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},gA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Es={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Lw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_A=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function vA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;q(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let w=t.detectErrorBoundary;i=E=>({hasErrorBoundary:w(E)})}else i=_A;let s={},o=Od(t.routes,i,void 0,s),l,a=t.basename||"/",u=he({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,h=null,_=null,v=null,y=t.hydrationData!=null,S=wi(o,t.history.location,a),m=null;if(S==null){let w=Ct(404,{pathname:t.history.location.pathname}),{matches:E,route:k}=xg(o);S=E,m={[k.id]:w}}let f=!S.some(w=>w.route.lazy)&&(!S.some(w=>w.route.loader)||t.hydrationData!=null),g,p={historyAction:t.history.action,location:t.history.location,matches:S,initialized:f,navigation:mc,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},T=xe.Pop,P=!1,x,b=!1,H=!1,M=[],Te=[],ee=new Map,ke=0,Je=-1,Wt=new Map,ft=new Set,Vt=new Map,A=new Map,F=new Map,V=!1;function pe(){return c=t.history.listen(w=>{let{action:E,location:k,delta:D}=w;if(V){V=!1;return}Ki(F.size===0||D!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=Wf({currentLocation:p.location,nextLocation:k,historyAction:E});if(W&&D!=null){V=!0,t.history.go(D*-1),Ho(W,{state:"blocked",location:k,proceed(){Ho(W,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),t.history.go(D)},reset(){let B=new Map(p.blockers);B.set(W,Es),oe({blockers:B})}});return}return Nn(E,k)}),p.initialized||Nn(xe.Pop,p.location),g}function Re(){c&&c(),d.clear(),x&&x.abort(),p.fetchers.forEach((w,E)=>gu(E)),p.blockers.forEach((w,E)=>$f(E))}function Zr(w){return d.add(w),()=>d.delete(w)}function oe(w){p=he({},p,w),d.forEach(E=>E(p))}function tn(w,E){var k,D;let W=p.actionData!=null&&p.navigation.formMethod!=null&&Ot(p.navigation.formMethod)&&p.navigation.state==="loading"&&((k=w.state)==null?void 0:k._isRedirect)!==!0,B;E.actionData?Object.keys(E.actionData).length>0?B=E.actionData:B=null:W?B=p.actionData:B=null;let $=E.loaderData?Rg(p.loaderData,E.loaderData,E.matches||[],E.errors):p.loaderData,U=p.blockers;U.size>0&&(U=new Map(U),U.forEach((ie,Be)=>U.set(Be,Es)));let L=P===!0||p.navigation.formMethod!=null&&Ot(p.navigation.formMethod)&&((D=w.state)==null?void 0:D._isRedirect)!==!0;l&&(o=l,l=void 0),b||T===xe.Pop||(T===xe.Push?t.history.push(w,w.state):T===xe.Replace&&t.history.replace(w,w.state)),oe(he({},E,{actionData:B,loaderData:$,historyAction:T,location:w,initialized:!0,navigation:mc,revalidation:"idle",restoreScrollPosition:Hf(w,E.matches||p.matches),preventScrollReset:L,blockers:U})),T=xe.Pop,P=!1,b=!1,H=!1,M=[],Te=[]}async function Ht(w,E){if(typeof w=="number"){t.history.go(w);return}let k=Dd(p.location,p.matches,a,u.v7_prependBasename,w,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:D,submission:W,error:B}=Eg(u.v7_normalizeFormMethod,!1,k,E),$=p.location,U=So(p.location,D,E&&E.state);U=he({},U,t.history.encodeLocation(U));let L=E&&E.replace!=null?E.replace:void 0,ie=xe.Push;L===!0?ie=xe.Replace:L===!1||W!=null&&Ot(W.formMethod)&&W.formAction===p.location.pathname+p.location.search&&(ie=xe.Replace);let Be=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,te=Wf({currentLocation:$,nextLocation:U,historyAction:ie});if(te){Ho(te,{state:"blocked",location:U,proceed(){Ho(te,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),Ht(w,E)},reset(){let Ce=new Map(p.blockers);Ce.set(te,Es),oe({blockers:Ce})}});return}return await Nn(ie,U,{submission:W,pendingError:B,preventScrollReset:Be,replace:E&&E.replace})}function ei(){if(mu(),oe({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Nn(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Nn(T||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Nn(w,E,k){x&&x.abort(),x=null,T=w,b=(k&&k.startUninterruptedRevalidation)===!0,eE(p.location,p.matches),P=(k&&k.preventScrollReset)===!0;let D=l||o,W=k&&k.overrideNavigation,B=wi(D,E,a);if(!B){let Ce=Ct(404,{pathname:E.pathname}),{matches:Le,route:mr}=xg(D);_u(),tn(E,{matches:Le,loaderData:{},errors:{[mr.id]:Ce}});return}if(p.initialized&&!H&&SA(p.location,E)&&!(k&&k.submission&&Ot(k.submission.formMethod))){tn(E,{matches:B});return}x=new AbortController;let $=Ss(t.history,E,x.signal,k&&k.submission),U,L;if(k&&k.pendingError)L={[Ei(B).route.id]:k.pendingError};else if(k&&k.submission&&Ot(k.submission.formMethod)){let Ce=await Kw($,E,k.submission,B,{replace:k.replace});if(Ce.shortCircuited)return;U=Ce.pendingActionData,L=Ce.pendingActionError,W=gl(E,k.submission),$=new Request($.url,{signal:$.signal})}let{shortCircuited:ie,loaderData:Be,errors:te}=await qw($,E,B,W,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,U,L);ie||(x=null,tn(E,he({matches:B},U?{actionData:U}:{},{loaderData:Be,errors:te})))}async function Kw(w,E,k,D,W){W===void 0&&(W={}),mu();let B=xA(E,k);oe({navigation:B});let $,U=Md(D,E);if(!U.route.action&&!U.route.lazy)$={type:Se.error,error:Ct(405,{method:w.method,pathname:E.pathname,routeId:U.route.id})};else if($=await Cs("action",w,U,D,s,i,a),w.signal.aborted)return{shortCircuited:!0};if(Di($)){let L;return W&&W.replace!=null?L=W.replace:L=$.location===p.location.pathname+p.location.search,await ss(p,$,{submission:k,replace:L}),{shortCircuited:!0}}if(Gs($)){let L=Ei(D,U.route.id);return(W&&W.replace)!==!0&&(T=xe.Push),{pendingActionData:{},pendingActionError:{[L.route.id]:$.error}}}if(kr($))throw Ct(400,{type:"defer-action"});return{pendingActionData:{[U.route.id]:$.data}}}async function qw(w,E,k,D,W,B,$,U,L){let ie=D||gl(E,W),Be=W||B||bg(ie),te=l||o,[Ce,Le]=Cg(t.history,p,k,Be,E,H,M,Te,Vt,ft,te,a,U,L);if(_u(ne=>!(k&&k.some(Nt=>Nt.route.id===ne))||Ce&&Ce.some(Nt=>Nt.route.id===ne)),Je=++ke,Ce.length===0&&Le.length===0){let ne=zf();return tn(E,he({matches:k,loaderData:{},errors:L||null},U?{actionData:U}:{},ne?{fetchers:new Map(p.fetchers)}:{})),{shortCircuited:!0}}if(!b){Le.forEach(Nt=>{let bn=p.fetchers.get(Nt.key),Cu=Is(void 0,bn?bn.data:void 0);p.fetchers.set(Nt.key,Cu)});let ne=U||p.actionData;oe(he({navigation:ie},ne?Object.keys(ne).length===0?{actionData:null}:{actionData:ne}:{},Le.length>0?{fetchers:new Map(p.fetchers)}:{}))}Le.forEach(ne=>{ee.has(ne.key)&&Pn(ne.key),ne.controller&&ee.set(ne.key,ne.controller)});let mr=()=>Le.forEach(ne=>Pn(ne.key));x&&x.signal.addEventListener("abort",mr);let{results:gr,loaderResults:os,fetcherResults:vu}=await Ff(p.matches,k,Ce,Le,w);if(w.signal.aborted)return{shortCircuited:!0};x&&x.signal.removeEventListener("abort",mr),Le.forEach(ne=>ee.delete(ne.key));let nn=Ng(gr);if(nn){if(nn.idx>=Ce.length){let ne=Le[nn.idx-Ce.length].key;ft.add(ne)}return await ss(p,nn.result,{replace:$}),{shortCircuited:!0}}let{loaderData:rn,errors:Go}=kg(p,k,Ce,os,L,Le,vu,A);A.forEach((ne,Nt)=>{ne.subscribe(bn=>{(bn||ne.done)&&A.delete(Nt)})});let yu=zf(),wu=Bf(Je),Eu=yu||wu||Le.length>0;return he({loaderData:rn,errors:Go},Eu?{fetchers:new Map(p.fetchers)}:{})}function Uf(w){return p.fetchers.get(w)||gA}function Qw(w,E,k,D){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ee.has(w)&&Pn(w);let W=l||o,B=Dd(p.location,p.matches,a,u.v7_prependBasename,k,E,D==null?void 0:D.relative),$=wi(W,B,a);if(!$){Vo(w,E,Ct(404,{pathname:B}));return}let{path:U,submission:L,error:ie}=Eg(u.v7_normalizeFormMethod,!0,B,D);if(ie){Vo(w,E,ie);return}let Be=Md($,U);if(P=(D&&D.preventScrollReset)===!0,L&&Ot(L.formMethod)){Yw(w,E,U,Be,$,L);return}Vt.set(w,{routeId:E,path:U}),Xw(w,E,U,Be,$,L)}async function Yw(w,E,k,D,W,B){if(mu(),Vt.delete(w),!D.route.action&&!D.route.lazy){let be=Ct(405,{method:B.formMethod,pathname:k,routeId:E});Vo(w,E,be);return}let $=p.fetchers.get(w),U=NA(B,$);p.fetchers.set(w,U),oe({fetchers:new Map(p.fetchers)});let L=new AbortController,ie=Ss(t.history,k,L.signal,B);ee.set(w,L);let Be=ke,te=await Cs("action",ie,D,W,s,i,a);if(ie.signal.aborted){ee.get(w)===L&&ee.delete(w);return}if(Di(te))if(ee.delete(w),Je>Be){let be=ii(void 0);p.fetchers.set(w,be),oe({fetchers:new Map(p.fetchers)});return}else{ft.add(w);let be=Is(B);return p.fetchers.set(w,be),oe({fetchers:new Map(p.fetchers)}),ss(p,te,{submission:B,isFetchActionRedirect:!0})}if(Gs(te)){Vo(w,E,te.error);return}if(kr(te))throw Ct(400,{type:"defer-action"});let Ce=p.navigation.location||p.location,Le=Ss(t.history,Ce,L.signal),mr=l||o,gr=p.navigation.state!=="idle"?wi(mr,p.navigation.location,a):p.matches;q(gr,"Didn't find any matches after fetcher action");let os=++ke;Wt.set(w,os);let vu=Is(B,te.data);p.fetchers.set(w,vu);let[nn,rn]=Cg(t.history,p,gr,B,Ce,H,M,Te,Vt,ft,mr,a,{[D.route.id]:te.data},void 0);rn.filter(be=>be.key!==w).forEach(be=>{let ls=be.key,Gf=p.fetchers.get(ls),nE=Is(void 0,Gf?Gf.data:void 0);p.fetchers.set(ls,nE),ee.has(ls)&&Pn(ls),be.controller&&ee.set(ls,be.controller)}),oe({fetchers:new Map(p.fetchers)});let Go=()=>rn.forEach(be=>Pn(be.key));L.signal.addEventListener("abort",Go);let{results:yu,loaderResults:wu,fetcherResults:Eu}=await Ff(p.matches,gr,nn,rn,Le);if(L.signal.aborted)return;L.signal.removeEventListener("abort",Go),Wt.delete(w),ee.delete(w),rn.forEach(be=>ee.delete(be.key));let ne=Ng(yu);if(ne){if(ne.idx>=nn.length){let be=rn[ne.idx-nn.length].key;ft.add(be)}return ss(p,ne.result)}let{loaderData:Nt,errors:bn}=kg(p,p.matches,nn,wu,void 0,rn,Eu,A);if(p.fetchers.has(w)){let be=ii(te.data);p.fetchers.set(w,be)}let Cu=Bf(os);p.navigation.state==="loading"&&os>Je?(q(T,"Expected pending action"),x&&x.abort(),tn(p.navigation.location,{matches:gr,loaderData:Nt,errors:bn,fetchers:new Map(p.fetchers)})):(oe(he({errors:bn,loaderData:Rg(p.loaderData,Nt,gr,bn)},Cu||rn.length>0?{fetchers:new Map(p.fetchers)}:{})),H=!1)}async function Xw(w,E,k,D,W,B){let $=p.fetchers.get(w),U=Is(B,$?$.data:void 0);p.fetchers.set(w,U),oe({fetchers:new Map(p.fetchers)});let L=new AbortController,ie=Ss(t.history,k,L.signal);ee.set(w,L);let Be=ke,te=await Cs("loader",ie,D,W,s,i,a);if(kr(te)&&(te=await Fw(te,ie.signal,!0)||te),ee.get(w)===L&&ee.delete(w),ie.signal.aborted)return;if(Di(te))if(Je>Be){let Le=ii(void 0);p.fetchers.set(w,Le),oe({fetchers:new Map(p.fetchers)});return}else{ft.add(w),await ss(p,te);return}if(Gs(te)){let Le=Ei(p.matches,E);p.fetchers.delete(w),oe({fetchers:new Map(p.fetchers),errors:{[Le.route.id]:te.error}});return}q(!kr(te),"Unhandled fetcher deferred data");let Ce=ii(te.data);p.fetchers.set(w,Ce),oe({fetchers:new Map(p.fetchers)})}async function ss(w,E,k){let{submission:D,replace:W,isFetchActionRedirect:B}=k===void 0?{}:k;E.revalidate&&(H=!0);let $=So(w.location,E.location,he({_isRedirect:!0},B?{_isFetchActionRedirect:!0}:{}));if(q($,"Expected a location on the redirect navigation"),n){let ie=!1;if(E.reloadDocument)ie=!0;else if(Lw.test(E.location)){const Be=t.history.createURL(E.location);ie=Be.origin!==e.location.origin||rs(Be.pathname,a)==null}if(ie){W?e.location.replace(E.location):e.location.assign(E.location);return}}x=null;let U=W===!0?xe.Replace:xe.Push,L=D||bg(w.navigation);if(mA.has(E.status)&&L&&Ot(L.formMethod))await Nn(U,$,{submission:he({},L,{formAction:E.location}),preventScrollReset:P});else if(B)await Nn(U,$,{overrideNavigation:gl($),fetcherSubmission:L,preventScrollReset:P});else{let ie=gl($,L);await Nn(U,$,{overrideNavigation:ie,preventScrollReset:P})}}async function Ff(w,E,k,D,W){let B=await Promise.all([...k.map(L=>Cs("loader",W,L,E,s,i,a)),...D.map(L=>L.matches&&L.match&&L.controller?Cs("loader",Ss(t.history,L.path,L.controller.signal),L.match,L.matches,s,i,a):{type:Se.error,error:Ct(404,{pathname:L.path})})]),$=B.slice(0,k.length),U=B.slice(k.length);return await Promise.all([Pg(w,k,$,$.map(()=>W.signal),!1,p.loaderData),Pg(w,D.map(L=>L.match),U,D.map(L=>L.controller?L.controller.signal:null),!0)]),{results:B,loaderResults:$,fetcherResults:U}}function mu(){H=!0,M.push(..._u()),Vt.forEach((w,E)=>{ee.has(E)&&(Te.push(E),Pn(E))})}function Vo(w,E,k){let D=Ei(p.matches,E);gu(w),oe({errors:{[D.route.id]:k},fetchers:new Map(p.fetchers)})}function gu(w){let E=p.fetchers.get(w);ee.has(w)&&!(E&&E.state==="loading"&&Wt.has(w))&&Pn(w),Vt.delete(w),Wt.delete(w),ft.delete(w),p.fetchers.delete(w)}function Pn(w){let E=ee.get(w);q(E,"Expected fetch controller: "+w),E.abort(),ee.delete(w)}function jf(w){for(let E of w){let k=Uf(E),D=ii(k.data);p.fetchers.set(E,D)}}function zf(){let w=[],E=!1;for(let k of ft){let D=p.fetchers.get(k);q(D,"Expected fetcher: "+k),D.state==="loading"&&(ft.delete(k),w.push(k),E=!0)}return jf(w),E}function Bf(w){let E=[];for(let[k,D]of Wt)if(D<w){let W=p.fetchers.get(k);q(W,"Expected fetcher: "+k),W.state==="loading"&&(Pn(k),Wt.delete(k),E.push(k))}return jf(E),E.length>0}function Jw(w,E){let k=p.blockers.get(w)||Es;return F.get(w)!==E&&F.set(w,E),k}function $f(w){p.blockers.delete(w),F.delete(w)}function Ho(w,E){let k=p.blockers.get(w)||Es;q(k.state==="unblocked"&&E.state==="blocked"||k.state==="blocked"&&E.state==="blocked"||k.state==="blocked"&&E.state==="proceeding"||k.state==="blocked"&&E.state==="unblocked"||k.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+E.state);let D=new Map(p.blockers);D.set(w,E),oe({blockers:D})}function Wf(w){let{currentLocation:E,nextLocation:k,historyAction:D}=w;if(F.size===0)return;F.size>1&&Ki(!1,"A router only supports one blocker at a time");let W=Array.from(F.entries()),[B,$]=W[W.length-1],U=p.blockers.get(B);if(!(U&&U.state==="proceeding")&&$({currentLocation:E,nextLocation:k,historyAction:D}))return B}function _u(w){let E=[];return A.forEach((k,D)=>{(!w||w(D))&&(k.cancel(),E.push(D),A.delete(D))}),E}function Zw(w,E,k){if(h=w,v=E,_=k||null,!y&&p.navigation===mc){y=!0;let D=Hf(p.location,p.matches);D!=null&&oe({restoreScrollPosition:D})}return()=>{h=null,v=null,_=null}}function Vf(w,E){return _&&_(w,E.map(D=>RA(D,p.loaderData)))||w.key}function eE(w,E){if(h&&v){let k=Vf(w,E);h[k]=v()}}function Hf(w,E){if(h){let k=Vf(w,E),D=h[k];if(typeof D=="number")return D}return null}function tE(w){s={},l=Od(w,i,void 0,s)}return g={get basename(){return a},get state(){return p},get routes(){return o},initialize:pe,subscribe:Zr,enableScrollRestoration:Zw,navigate:Ht,fetch:Qw,revalidate:ei,createHref:w=>t.history.createHref(w),encodeLocation:w=>t.history.encodeLocation(w),getFetcher:Uf,deleteFetcher:gu,dispose:Re,getBlocker:Jw,deleteBlocker:$f,_internalFetchControllers:ee,_internalActiveDeferreds:A,_internalSetRoutes:tE},g}function yA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Dd(t,e,n,r,i,s,o){let l,a;if(s!=null&&o!=="path"){l=[];for(let c of e)if(l.push(c),c.route.id===s){a=c;break}}else l=e,a=e[e.length-1];let u=Df(i||".",du(l).map(c=>c.pathnameBase),rs(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&a&&a.route.index&&!Mf(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:mn([n,u.pathname])),Gr(u)}function Eg(t,e,n,r){if(!r||!yA(r))return{path:n};if(r.formMethod&&!kA(r.formMethod))return{path:n,error:Ct(405,{method:r.formMethod})};let i=()=>({path:n,error:Ct(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=Uw(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Ot(o))return i();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((_,v)=>{let[y,S]=v;return""+_+y+"="+S+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!Ot(o))return i();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return i()}}}q(typeof FormData=="function","FormData is not available in this environment");let a,u;if(r.formData)a=Ld(r.formData),u=r.formData;else if(r.body instanceof FormData)a=Ld(r.body),u=r.body;else if(r.body instanceof URLSearchParams)a=r.body,u=Tg(a);else if(r.body==null)a=new URLSearchParams,u=new FormData;else try{a=new URLSearchParams(r.body),u=Tg(a)}catch{return i()}let c={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Ot(c.formMethod))return{path:n,submission:c};let d=xn(n);return e&&d.search&&Mf(d.search)&&a.append("index",""),d.search="?"+a,{path:Gr(d),submission:c}}function wA(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Cg(t,e,n,r,i,s,o,l,a,u,c,d,h,_){let v=_?Object.values(_)[0]:h?Object.values(h)[0]:void 0,y=t.createURL(e.location),S=t.createURL(i),m=_?Object.keys(_)[0]:void 0,g=wA(n,m).filter((T,P)=>{if(T.route.lazy)return!0;if(T.route.loader==null)return!1;if(EA(e.loaderData,e.matches[P],T)||o.some(H=>H===T.route.id))return!0;let x=e.matches[P],b=T;return Sg(T,he({currentUrl:y,currentParams:x.params,nextUrl:S,nextParams:b.params},r,{actionResult:v,defaultShouldRevalidate:s||y.pathname+y.search===S.pathname+S.search||y.search!==S.search||Mw(x,b)}))}),p=[];return a.forEach((T,P)=>{if(!n.some(Te=>Te.route.id===T.routeId))return;let x=wi(c,T.path,d);if(!x){p.push({key:P,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let b=e.fetchers.get(P),H=Md(x,T.path),M=!1;u.has(P)?M=!1:l.includes(P)?M=!0:b&&b.state!=="idle"&&b.data===void 0?M=s:M=Sg(H,he({currentUrl:y,currentParams:e.matches[e.matches.length-1].params,nextUrl:S,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),M&&p.push({key:P,routeId:T.routeId,path:T.path,matches:x,match:H,controller:new AbortController})}),[g,p]}function EA(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Mw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Sg(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Ig(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];q(i,"No route found in manifest");let s={};for(let o in r){let a=i[o]!==void 0&&o!=="hasErrorBoundary";Ki(!a,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!a&&!Vb.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,he({},e(i),{lazy:void 0}))}async function Cs(t,e,n,r,i,s,o,l){l===void 0&&(l={});let a,u,c,d=v=>{let y,S=new Promise((m,f)=>y=f);return c=()=>y(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:l.requestContext}),S])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([d(v),Ig(n.route,s,i)]))[0];else if(await Ig(n.route,s,i),v=n.route[t],v)u=await d(v);else if(t==="action"){let y=new URL(e.url),S=y.pathname+y.search;throw Ct(405,{method:e.method,pathname:S,routeId:n.route.id})}else return{type:Se.data,data:void 0};else if(v)u=await d(v);else{let y=new URL(e.url),S=y.pathname+y.search;throw Ct(404,{pathname:S})}q(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){a=Se.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if(TA(u)){let v=u.status;if(pA.has(v)){let m=u.headers.get("Location");if(q(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Lw.test(m))m=Dd(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!l.isStaticRequest){let f=new URL(e.url),g=m.startsWith("//")?new URL(f.protocol+m):new URL(m),p=rs(g.pathname,o)!=null;g.origin===f.origin&&p&&(m=g.pathname+g.search+g.hash)}if(l.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Se.redirect,status:v,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:a===Se.error?Se.error:Se.data,response:u};let y,S=u.headers.get("Content-Type");return S&&/\bapplication\/json\b/.test(S)?y=await u.json():y=await u.text(),a===Se.error?{type:a,error:new Lf(v,u.statusText,y),headers:u.headers}:{type:Se.data,data:y,statusCode:u.status,headers:u.headers}}if(a===Se.error)return{type:a,error:u};if(IA(u)){var h,_;return{type:Se.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((_=u.init)==null?void 0:_.headers)&&new Headers(u.init.headers)}}return{type:Se.data,data:u}}function Ss(t,e,n,r){let i=t.createURL(Uw(e)).toString(),s={signal:n};if(r&&Ot(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=Ld(r.formData):s.body=r.formData}return new Request(i,s)}function Ld(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Tg(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function CA(t,e,n,r,i){let s={},o=null,l,a=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(q(!Di(c),"Cannot handle redirect results in processLoaderData"),Gs(c)){let _=Ei(t,h),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[_.route.id]==null&&(o[_.route.id]=v),s[h]=void 0,a||(a=!0,l=Ow(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else kr(c)?(i.set(h,c.deferredData),s[h]=c.deferredData.data):s[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!a&&(l=c.statusCode),c.headers&&(u[h]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:u}}function kg(t,e,n,r,i,s,o,l){let{loaderData:a,errors:u}=CA(e,n,r,i,l);for(let c=0;c<s.length;c++){let{key:d,match:h,controller:_}=s[c];q(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(_&&_.signal.aborted))if(Gs(v)){let y=Ei(t.matches,h==null?void 0:h.route.id);u&&u[y.route.id]||(u=he({},u,{[y.route.id]:v.error})),t.fetchers.delete(d)}else if(Di(v))q(!1,"Unhandled fetcher revalidation redirect");else if(kr(v))q(!1,"Unhandled fetcher deferred data");else{let y=ii(v.data);t.fetchers.set(d,y)}}return{loaderData:a,errors:u}}function Rg(t,e,n,r){let i=he({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Ei(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function xg(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ct(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?l="defer() is not supported in actions":s==="invalid-body"&&(l="Unable to encode submission body")):t===403?(o="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",l='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Lf(t||500,o,new Error(l),!0)}function Ng(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Di(n))return{result:n,idx:e}}}function Uw(t){let e=typeof t=="string"?xn(t):t;return Gr(he({},e,{hash:""}))}function SA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function kr(t){return t.type===Se.deferred}function Gs(t){return t.type===Se.error}function Di(t){return(t&&t.type)===Se.redirect}function IA(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function TA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function kA(t){return fA.has(t.toLowerCase())}function Ot(t){return dA.has(t.toLowerCase())}async function Pg(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let l=n[o],a=e[o];if(!a)continue;let u=t.find(d=>d.route.id===a.route.id),c=u!=null&&!Mw(u,a)&&(s&&s[a.route.id])!==void 0;if(kr(l)&&(i||c)){let d=r[o];q(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Fw(l,d,i).then(h=>{h&&(n[o]=h||n[o])})}}}async function Fw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Se.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Se.error,error:i}}return{type:Se.data,data:t.deferredData.data}}}function Mf(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function RA(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Md(t,e){let n=typeof e=="string"?xn(e).search:e.search;if(t[t.length-1].route.index&&Mf(n||""))return t[t.length-1];let r=du(t);return r[r.length-1]}function bg(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function gl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Is(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function NA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function ii(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ba.apply(this,arguments)}const hu=C.createContext(null),jw=C.createContext(null),is=C.createContext(null),fu=C.createContext(null),pr=C.createContext({outlet:null,matches:[],isDataRoute:!1}),zw=C.createContext(null);function PA(t,e){let{relative:n}=e===void 0?{}:e;$o()||q(!1);let{basename:r,navigator:i}=C.useContext(is),{hash:s,pathname:o,search:l}=$w(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:mn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function $o(){return C.useContext(fu)!=null}function pu(){return $o()||q(!1),C.useContext(fu).location}function Bw(t){C.useContext(is).static||C.useLayoutEffect(t)}function Wo(){let{isDataRoute:t}=C.useContext(pr);return t?VA():bA()}function bA(){$o()||q(!1);let t=C.useContext(hu),{basename:e,navigator:n}=C.useContext(is),{matches:r}=C.useContext(pr),{pathname:i}=pu(),s=JSON.stringify(du(r).map(a=>a.pathnameBase)),o=C.useRef(!1);return Bw(()=>{o.current=!0}),C.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let c=Df(a,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:mn([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const AA=C.createContext(null);function OA(t){let e=C.useContext(pr).outlet;return e&&C.createElement(AA.Provider,{value:t},e)}function $w(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(pr),{pathname:i}=pu(),s=JSON.stringify(du(r).map(o=>o.pathnameBase));return C.useMemo(()=>Df(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function DA(t,e,n){$o()||q(!1);let{navigator:r}=C.useContext(is),{matches:i}=C.useContext(pr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=pu(),u;if(e){var c;let y=typeof e=="string"?xn(e):e;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||q(!1),u=y}else u=a;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",_=wi(t,{pathname:h}),v=jA(_&&_.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:mn([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:mn([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&v?C.createElement(fu.Provider,{value:{location:ba({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:xe.Pop}},v):v}function LA(){let t=WA(),e=Ow(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}const MA=C.createElement(LA,null);class UA extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(pr.Provider,{value:this.props.routeContext},C.createElement(zw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function FA(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(hu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(pr.Provider,{value:e},r)}function jA(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=s.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||q(!1),s=s.slice(0,Math.min(s.length,l+1))}return s.reduceRight((l,a,u)=>{let c=a.route.id?o==null?void 0:o[a.route.id]:null,d=null;n&&(d=a.route.errorElement||MA);let h=e.concat(s.slice(0,u+1)),_=()=>{let v;return c?v=d:a.route.Component?v=C.createElement(a.route.Component,null):a.route.element?v=a.route.element:v=l,C.createElement(FA,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:v})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?C.createElement(UA,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var Ww=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ww||{}),Aa=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Aa||{});function zA(t){let e=C.useContext(hu);return e||q(!1),e}function BA(t){let e=C.useContext(jw);return e||q(!1),e}function $A(t){let e=C.useContext(pr);return e||q(!1),e}function Vw(t){let e=$A(),n=e.matches[e.matches.length-1];return n.route.id||q(!1),n.route.id}function WA(){var t;let e=C.useContext(zw),n=BA(Aa.UseRouteError),r=Vw(Aa.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function VA(){let{router:t}=zA(Ww.UseNavigateStable),e=Vw(Aa.UseNavigateStable),n=C.useRef(!1);return Bw(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ba({fromRouteId:e},s)))},[t,e])}const HA="startTransition",Ag=EE[HA];function GA(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=C.useState(n.state),{v7_startTransition:o}=r||{},l=C.useCallback(d=>{o&&Ag?Ag(()=>s(d)):s(d)},[s,o]);C.useLayoutEffect(()=>n.subscribe(l),[n,l]);let a=C.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,h,_)=>n.navigate(d,{state:h,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(d,h,_)=>n.navigate(d,{replace:!0,state:h,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[n]),u=n.basename||"/",c=C.useMemo(()=>({router:n,navigator:a,static:!1,basename:u}),[n,a,u]);return C.createElement(C.Fragment,null,C.createElement(hu.Provider,{value:c},C.createElement(jw.Provider,{value:i},C.createElement(QA,{basename:u,location:i.location,navigationType:i.historyAction,navigator:a},i.initialized?C.createElement(KA,{routes:n.routes,state:i}):e))),null)}function KA(t){let{routes:e,state:n}=t;return DA(e,void 0,n)}function qA(t){return OA(t.context)}function QA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=xe.Pop,navigator:s,static:o=!1}=t;$o()&&q(!1);let l=e.replace(/^\/*/,"/"),a=C.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=xn(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:_="default"}=r,v=C.useMemo(()=>{let y=rs(u,l);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:_},navigationType:i}},[l,u,c,d,h,_,i]);return v==null?null:C.createElement(is.Provider,{value:a},C.createElement(fu.Provider,{children:n,value:v}))}new Promise(()=>{});function YA(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:C.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:C.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Io.apply(this,arguments)}function XA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function JA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ZA(t,e){return t.button===0&&(!e||e==="_self")&&!JA(t)}const eO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function tO(t,e){return vA({basename:e==null?void 0:e.basename,future:Io({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Bb({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||nO(),routes:t,mapRouteProperties:YA}).initialize()}function nO(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Io({},e,{errors:rO(e.errors)})),e}function rO(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Lf(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const iO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hw=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=e,d=XA(e,eO),{basename:h}=C.useContext(is),_,v=!1;if(typeof u=="string"&&sO.test(u)&&(_=u,iO))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),p=rs(g.pathname,h);g.origin===f.origin&&p!=null?u=p+g.search+g.hash:v=!0}catch{}let y=PA(u,{relative:i}),S=oO(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||S(f)}return C.createElement("a",Io({},d,{href:_||y,onClick:v||s?r:m,ref:n,target:a}))});var Og;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Og||(Og={}));var Dg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dg||(Dg={}));function oO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,l=Wo(),a=pu(),u=$w(t,{relative:o});return C.useCallback(c=>{if(ZA(c,n)){c.preventDefault();let d=r!==void 0?r:Gr(a)===Gr(u);l(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,t,s,o])}const lO=()=>{const t=C.useRef(),[e,n]=C.useState(!1),[r,i]=C.useState(!1),[s,o]=C.useState(null),[l,a]=C.useState(null),[u,c]=C.useState(null),[d,h]=C.useState(null),[_,v]=C.useState(""),y=Wo(),{user:S,getUserLoggedOut:m,sendMessage:f,messageFromDataBase:g,uploadImg:p,deleteMessage:T}=Bo();C.useEffect(()=>{!S&&y("/login")},[]);const P=(ke,Je,Wt)=>{c(Je),a(Wt),o(ke),n(!0)},x=()=>{c(null),a(null),o(null),n(!1)},b=()=>{m()},H=ke=>{ke.preventDefault(),d&&_.length===0?(p(d),h(null)):_.trim().length&&(f(_),v(""))},M=()=>{t.current.click()},Te=ke=>{const Je=ke.target.files[0];Je&&h(Je)},ee=()=>{l===S.email&&(T(u),i(!1),n(!1))};return I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:`absolute top-0 right-0 w-full h-full bg-black z-10 flex items-center transition-all transform ${e?"scale-100":"scale-0"}`,children:[I.jsxs("div",{className:"absolute top-3 right-3 text-gray-300 bg-black px-2.5 py-1 rounded-full",children:[S&&S.email===l&&I.jsx("i",{className:"fa-solid fa-trash mr-5 cursor-pointer",onClick:()=>{i(!0)}}),I.jsx("i",{className:"fa-solid fa-xmark cursor-pointer",onClick:x})]}),I.jsx("img",{className:"",src:s,loading:"lazy"})]}),I.jsx("div",{className:`absolute top-0 right-0 w-full h-full bg-[#292b3678] z-10 flex items-center justify-center transition-all transform ${r?"scale-100":"scale-0"}`,children:I.jsxs("div",{className:"h-28 w-11/12 bg-white text-black rounded-xl p-4 flex flex-col justify-between",children:[I.jsx("p",{children:"Are you sure. You want to delete this image?"}),I.jsxs("div",{className:"flex justify-end gap-10 font-semibold",children:[I.jsx("p",{className:"cursor-pointer",onClick:()=>{i(!1)},children:"Cancle"}),I.jsx("p",{className:"cursor-pointer",onClick:ee,children:"Delete"})]})]})}),I.jsxs("div",{className:"h-full sm:w-chat-room w-screen sm:shadow-gray-900 sm:shadow-xl flex flex-col relative",children:[I.jsx("div",{className:"w-full h-header-footer-height shadow-gray-900 shadow bg-[#292b36]",children:I.jsxs("div",{className:"relative w-full h-full flex items-center justify-between px-4",children:[I.jsx("h1",{className:"text-xl",children:"Chat Room"}),I.jsx("button",{onClick:b,className:"bg-[#4bb4f8] text-sm px-3 py-1.5 rounded transition-all transform active:scale-95",children:"sign out"})]})}),I.jsx("div",{className:"w-full h-message-area-height px-4 pb-1 pt-3 flex flex-col overflow-y-auto",children:g.length>0?g.map((ke,Je)=>I.jsx(zb,{message:ke,setImagePreviewer:P},Je)):I.jsxs("div",{children:[I.jsx("p",{className:"text-sm opacity-60 text-center",children:"start chatting"}),I.jsx("p",{className:"text-xs opacity-60 text-center px-5",children:"your message will be listed on the top of all messages"})]})}),I.jsx("div",{className:"w-full h-header-footer-height px-1.5 flex items-center",children:I.jsxs("div",{className:"w-full h-4/5 bg-gray-600 rounded-full flex items-center justify-between px-3",children:[I.jsxs("div",{className:"grow flex items-center gap-2.5",children:[I.jsx("div",{className:"bg-[#4bb4f8] p-2.5 rounded-full flex items-center justify-center cursor-pointer",onClick:M,children:I.jsx("i",{className:"fa-solid fa-camera"})}),I.jsx("input",{className:"hidden",ref:t,type:"file",accept:"image/*",onChange:Te}),d?I.jsxs("div",{className:"relative",children:[I.jsx("i",{className:"fa-solid fa-circle-xmark text-gray-200 absolute -top-2.5 -right-2.5 cursor-pointer",onClick:()=>{h(null)}}),I.jsx("img",{className:"h-9 rounded",src:URL.createObjectURL(d),alt:"selected-image"})]}):I.jsx("textarea",{className:"resize-none w-full bg-inherit py-1 outline-none text-white",placeholder:"type your messages...",value:_,rows:1,onChange:ke=>{v(ke.target.value)}})]}),I.jsx("div",{className:"flex items-center justify-evenly",children:I.jsx("button",{onClick:H,className:"bg-[#4bb4f8] rounded-full p-2.5 flex items-center justify-center transition-all transform active:scale-95",children:I.jsx("i",{className:"fa-solid fa-paper-plane"})})})]})})]})]})},Gw="/assets/loader-261863af.gif",aO=()=>{const{userCredentials:t,setUserCredentials:e,getUserLogin:n,message:r,loading:i,setMessage:s,user:o}=Bo(),[l,a]=C.useState(!0),[u,c]=C.useState(!0),[d,h]=C.useState(!1),[_,v]=C.useState("password"),y=Wo(),S=g=>{const{name:p}=g.target;p==="email"?(e({...t,[g.target.name]:g.target.value}),t.email.includes("@")&&t.email.includes(".co")?a(!0):a(!1)):(e({...t,[g.target.name]:g.target.value}),t.password.length>5?c(!0):c(!1))},m=async g=>{g.preventDefault(),n()},f=()=>{d?(h(!1),v("password")):(h(!0),v("text"))};return C.useEffect(()=>{o&&y("/")},[]),I.jsxs("div",{className:"sm:h-[40rem] sm:w-functional-screens sm:rounded-lg w-screen h-full sm:shadow-gray-900 sm:shadow-xl flex flex-col justify-evenly",children:[I.jsxs("div",{className:"w-full text-center",children:[I.jsx("h1",{className:"text-3xl",children:"Login"}),I.jsxs("p",{className:"text-sm pt-14",children:["To ",I.jsx("span",{className:"font-semibold",children:"Chat Room"})]}),I.jsx("p",{className:" text-sm pb-10 italic",children:"where gossips remain safe"})]}),I.jsxs("form",{className:"w-full flex flex-col gap-10 px-8",onSubmit:m,children:[I.jsxs("div",{className:"relative",children:[I.jsx("input",{type:"email",name:"email",placeholder:"Email",className:"peer w-full bg-inherit placeholder-transparent outline-none p-1",required:!0,onChange:S}),I.jsx("label",{className:"absolute left-1 -top-5 transition-all duration-300 peer-focus:-top-5 peer-placeholder-shown:top-0 text-lg",children:"Email"}),I.jsx("div",{className:`h-0.5 w-full bg-[#fff] rounded-lg ${l?"bg-[#fff]":"bg-pink-600"}`}),I.jsx("p",{className:`absolute -bottom-5 text-xs text-pink-700 ${l?"invisible":"visible"}`,children:"please enter correct email address"})]}),I.jsxs("div",{className:"relative",children:[I.jsx("div",{className:"absolute top-1.5 right-2",onClick:f,children:I.jsx("i",{className:`${d?"fa-regular fa-eye-slash":"fa-regular fa-eye"} cursor-pointer`})}),I.jsx("input",{type:_,name:"password",placeholder:"Password",className:"peer w-full bg-inherit placeholder-transparent outline-none p-1",required:!0,onChange:S}),I.jsx("label",{className:"absolute left-1 -top-5 transition-all duration-300 peer-focus:-top-5 peer-placeholder-shown:top-0 text-lg",children:"Password"}),I.jsx("div",{className:`h-0.5 w-full rounded-lg ${u?"bg-[#fff]":"bg-pink-600"}`}),I.jsx("p",{className:`absolute -bottom-5 text-xs text-pink-700 ${u?"invisible":"visible"}`,children:"password must be atleast 8 characters"})]}),I.jsxs("div",{className:"relative",children:[I.jsx("button",{type:"submit",disabled:i,className:`bg-[#4bb4f8] w-full text-lg p-2 rounded transition-all tranform ${i?null:"active:scale-95"} ${i?"opacity-80":"opacity-100"}`,children:i?I.jsx("img",{src:Gw,alt:"loading...",className:"w-9 mx-auto"}):"Login"}),I.jsx("p",{className:`text-sm pt-2 ${r.flag==="red"?"text-pink-700":"text-green-700"}`,children:r.message})]})]}),I.jsxs("p",{className:"text-sm text-center",children:["create an account? ",I.jsx(Hw,{to:"/signup",onClick:()=>{s({flag:"",message:""})},className:"text-[#4bb4f8] font-semibold cursor-pointer",children:"Signin"})]})]})},uO=()=>{const t=Wo(),{userCredentials:e,setUserCredentials:n,getUserSignUP:r,message:i,loading:s,setMessage:o,user:l}=Bo(),[a,u]=C.useState(!0),[c,d]=C.useState(!0),[h,_]=C.useState(!1),[v,y]=C.useState("password"),S=g=>{const{name:p}=g.target;p==="email"?(n({...e,[g.target.name]:g.target.value}),e.email.includes("@")&&e.email.includes(".co")?u(!0):u(!1)):(n({...e,[g.target.name]:g.target.value}),e.password.length>5?d(!0):d(!1))},m=g=>{g.preventDefault(),r()},f=()=>{h?(_(!1),y("password")):(_(!0),y("text"))};return C.useEffect(()=>{l&&t("/")},[]),I.jsxs("div",{className:"sm:h-[40rem] sm:w-functional-screens sm:rounded-lg w-screen h-full sm:shadow-gray-900 shadow-xl flex flex-col justify-evenly",children:[I.jsxs("div",{className:"w-full text-center",children:[I.jsx("h1",{className:"text-3xl",children:"Sign Up"}),I.jsxs("p",{className:"text-sm pt-14",children:["To ",I.jsx("span",{className:"font-semibold",children:"Chat Room"})]}),I.jsx("p",{className:" text-sm pb-10 italic",children:"where gossips remain safe"})]}),I.jsxs("form",{className:"w-full flex flex-col gap-10 px-8",onSubmit:m,children:[I.jsxs("div",{className:"relative",children:[I.jsx("input",{type:"email",name:"email",placeholder:"Email",className:"peer w-full bg-inherit placeholder-transparent outline-none p-1",required:!0,onChange:S}),I.jsx("label",{className:"absolute left-1 -top-5 transition-all duration-300 peer-focus:-top-5 peer-placeholder-shown:top-0 text-lg",children:"Email"}),I.jsx("div",{className:`h-0.5 w-full bg-[#fff] rounded-lg ${a?"bg-[#fff]":"bg-pink-600"}`}),I.jsx("p",{className:`absolute -bottom-5 text-xs text-pink-700 ${a?"invisible":"visible"}`,children:"please enter correct email address"})]}),I.jsxs("div",{className:"relative",children:[I.jsx("div",{className:"absolute top-1.5 right-2",onClick:f,children:I.jsx("i",{className:`${h?"fa-regular fa-eye-slash":"fa-regular fa-eye"} cursor-pointer`})}),I.jsx("input",{type:v,name:"password",placeholder:"Password",className:"peer w-full bg-inherit placeholder-transparent outline-none p-1",required:!0,onChange:S}),I.jsx("label",{className:"absolute left-1 -top-5 transition-all duration-300 peer-focus:-top-5 peer-placeholder-shown:top-0 text-lg",children:"Password"}),I.jsx("div",{className:`h-0.5 w-full rounded-lg ${c?"bg-[#fff]":"bg-pink-600"}`}),I.jsx("p",{className:`absolute -bottom-5 text-xs text-pink-700 ${c?"invisible":"visible"}`,children:"password must be atleast 8 characters"})]}),I.jsxs("div",{className:"relative",children:[I.jsx("button",{type:"submit",disabled:s,className:`bg-[#4bb4f8] w-full text-lg p-2 rounded transition-all tranform ${s?null:"active:scale-95"} ${s?"opacity-80":"opacity-100"}`,children:s?I.jsx("img",{src:Gw,alt:"loading...",className:"w-9 mx-auto"}):"sign up"}),I.jsx("p",{className:`text-sm pt-2 ${i.flag==="red"?"text-pink-700":"text-green-700"}`,children:i.message})]})]}),I.jsxs("p",{className:"text-sm text-center",children:["already have account? ",I.jsx(Hw,{to:"/login",onClick:()=>{o({flag:"",message:""})},className:"text-[#4bb4f8] font-semibold cursor-pointer",children:"Login"})]})]})},cO=()=>{const{user:t}=Bo(),e=Wo();return C.useEffect(()=>{e(t?"/":"/login")},[t]),I.jsxs(I.Fragment,{children:[I.jsx(EP,{position:"top-center",reverseOrder:!1,gutter:8,containerClassName:"",containerStyle:{},toastOptions:{duration:5e3,style:{background:"#4bb4f8",color:"#fff"},success:{duration:3e3,theme:{}}}}),I.jsx(qA,{})]})};function dO(){const t=tO([{path:"/",element:I.jsx(cO,{}),children:[{path:"/",element:I.jsx(lO,{})},{path:"signup",element:I.jsx(uO,{})},{path:"login",element:I.jsx(aO,{})}]}]);return I.jsx(GA,{router:t})}gc.createRoot(document.getElementById("root")).render(I.jsx(jb,{children:I.jsx(dO,{})}));
