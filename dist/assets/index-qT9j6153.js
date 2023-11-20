function O0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function V0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L0={exports:{}},Rd={},M0={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vu=Symbol.for("react.element"),wk=Symbol.for("react.portal"),Ik=Symbol.for("react.fragment"),Ek=Symbol.for("react.strict_mode"),Tk=Symbol.for("react.profiler"),Sk=Symbol.for("react.provider"),Rk=Symbol.for("react.context"),Ak=Symbol.for("react.forward_ref"),Pk=Symbol.for("react.suspense"),Ck=Symbol.for("react.memo"),kk=Symbol.for("react.lazy"),Qv=Symbol.iterator;function xk(t){return t===null||typeof t!="object"?null:(t=Qv&&t[Qv]||t["@@iterator"],typeof t=="function"?t:null)}var F0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U0=Object.assign,$0={};function fa(t,e,n){this.props=t,this.context=e,this.refs=$0,this.updater=n||F0}fa.prototype.isReactComponent={};fa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B0(){}B0.prototype=fa.prototype;function Wg(t,e,n){this.props=t,this.context=e,this.refs=$0,this.updater=n||F0}var Kg=Wg.prototype=new B0;Kg.constructor=Wg;U0(Kg,fa.prototype);Kg.isPureReactComponent=!0;var Yv=Array.isArray,j0=Object.prototype.hasOwnProperty,Gg={current:null},z0={key:!0,ref:!0,__self:!0,__source:!0};function q0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)j0.call(e,r)&&!z0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vu,type:t,key:s,ref:o,props:i,_owner:Gg.current}}function bk(t,e){return{$$typeof:Vu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vu}function Dk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jv=/\/+/g;function Zf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dk(""+t.key):e.toString(36)}function Kc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vu:case wk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zf(o,0):r,Yv(i)?(n="",t!=null&&(n=t.replace(Jv,"$&/")+"/"),Kc(i,e,n,"",function(u){return u})):i!=null&&(Hg(i)&&(i=bk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Zf(s,a);o+=Kc(s,e,n,l,i)}else if(l=xk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Zf(s,a++),o+=Kc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yc(t,e,n){if(t==null)return t;var r=[],i=0;return Kc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Nk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Gc={transition:null},Ok={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Gc,ReactCurrentOwner:Gg};le.Children={map:yc,forEach:function(t,e,n){yc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yc(t,function(){e++}),e},toArray:function(t){return yc(t,function(e){return e})||[]},only:function(t){if(!Hg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=fa;le.Fragment=Ik;le.Profiler=Tk;le.PureComponent=Wg;le.StrictMode=Ek;le.Suspense=Pk;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ok;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=U0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)j0.call(e,l)&&!z0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vu,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:Rk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sk,_context:t},t.Consumer=t};le.createElement=q0;le.createFactory=function(t){var e=q0.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:Ak,render:t}};le.isValidElement=Hg;le.lazy=function(t){return{$$typeof:kk,_payload:{_status:-1,_result:t},_init:Nk}};le.memo=function(t,e){return{$$typeof:Ck,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Gc.transition;Gc.transition={};try{t()}finally{Gc.transition=e}};le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};le.useCallback=function(t,e){return Jt.current.useCallback(t,e)};le.useContext=function(t){return Jt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Jt.current.useEffect(t,e)};le.useId=function(){return Jt.current.useId()};le.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Jt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};le.useRef=function(t){return Jt.current.useRef(t)};le.useState=function(t){return Jt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Jt.current.useTransition()};le.version="18.2.0";M0.exports=le;var D=M0.exports;const ln=V0(D),Vk=O0({__proto__:null,default:ln},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lk=D,Mk=Symbol.for("react.element"),Fk=Symbol.for("react.fragment"),Uk=Object.prototype.hasOwnProperty,$k=Lk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bk={key:!0,ref:!0,__self:!0,__source:!0};function W0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Uk.call(e,r)&&!Bk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Mk,type:t,key:s,ref:o,props:i,_owner:$k.current}}Rd.Fragment=Fk;Rd.jsx=W0;Rd.jsxs=W0;L0.exports=Rd;var C=L0.exports,em={},K0={exports:{}},En={},G0={exports:{}},H0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,z){var J=L.length;L.push(z);e:for(;0<J;){var pe=J-1>>>1,Ie=L[pe];if(0<i(Ie,z))L[pe]=z,L[J]=Ie,J=pe;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var z=L[0],J=L.pop();if(J!==z){L[0]=J;e:for(var pe=0,Ie=L.length,Sn=Ie>>>1;pe<Sn;){var $t=2*(pe+1)-1,Hi=L[$t],vr=$t+1,Zs=L[vr];if(0>i(Hi,J))vr<Ie&&0>i(Zs,Hi)?(L[pe]=Zs,L[vr]=J,pe=vr):(L[pe]=Hi,L[$t]=J,pe=$t);else if(vr<Ie&&0>i(Zs,J))L[pe]=Zs,L[vr]=J,pe=vr;else break e}}return z}function i(L,z){var J=L.sortIndex-z.sortIndex;return J!==0?J:L.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,f=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=L)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function g(L){if(v=!1,y(L),!_)if(n(l)!==null)_=!0,st(R);else{var z=n(u);z!==null&&Ut(g,z.startTime-L)}}function R(L,z){_=!1,v&&(v=!1,m(V),V=-1),f=!0;var J=d;try{for(y(z),h=n(l);h!==null&&(!(h.expirationTime>z)||L&&!me());){var pe=h.callback;if(typeof pe=="function"){h.callback=null,d=h.priorityLevel;var Ie=pe(h.expirationTime<=z);z=t.unstable_now(),typeof Ie=="function"?h.callback=Ie:h===n(l)&&r(l),y(z)}else r(l);h=n(l)}if(h!==null)var Sn=!0;else{var $t=n(u);$t!==null&&Ut(g,$t.startTime-z),Sn=!1}return Sn}finally{h=null,d=J,f=!1}}var P=!1,A=null,V=-1,Q=5,G=-1;function me(){return!(t.unstable_now()-G<Q)}function vt(){if(A!==null){var L=t.unstable_now();G=L;var z=!0;try{z=A(!0,L)}finally{z?Te():(P=!1,A=null)}}else P=!1}var Te;if(typeof p=="function")Te=function(){p(vt)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,ge=ut.port2;ut.port1.onmessage=vt,Te=function(){ge.postMessage(null)}}else Te=function(){w(vt,0)};function st(L){A=L,P||(P=!0,Te())}function Ut(L,z){V=w(function(){L(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||f||(_=!0,st(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var J=d;d=z;try{return L()}finally{d=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=d;d=L;try{return z()}finally{d=J}},t.unstable_scheduleCallback=function(L,z,J){var pe=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pe+J:pe):J=pe,L){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=J+Ie,L={id:c++,callback:z,priorityLevel:L,startTime:J,expirationTime:Ie,sortIndex:-1},J>pe?(L.sortIndex=J,e(u,L),n(l)===null&&L===n(u)&&(v?(m(V),V=-1):v=!0,Ut(g,J-pe))):(L.sortIndex=Ie,e(l,L),_||f||(_=!0,st(R))),L},t.unstable_shouldYield=me,t.unstable_wrapCallback=function(L){var z=d;return function(){var J=d;d=z;try{return L.apply(this,arguments)}finally{d=J}}}})(H0);G0.exports=H0;var jk=G0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0=D,vn=jk;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y0=new Set,Fl={};function zs(t,e){Wo(t,e),Wo(t+"Capture",e)}function Wo(t,e){for(Fl[t]=e,t=0;t<e.length;t++)Y0.add(e[t])}var Nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tm=Object.prototype.hasOwnProperty,zk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xv={},Zv={};function qk(t){return tm.call(Zv,t)?!0:tm.call(Xv,t)?!1:zk.test(t)?Zv[t]=!0:(Xv[t]=!0,!1)}function Wk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kk(t,e,n,r){if(e===null||typeof e>"u"||Wk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qg=/[\-:]([a-z])/g;function Yg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qg,Yg);kt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qg,Yg);kt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qg,Yg);kt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jg(t,e,n,r){var i=kt.hasOwnProperty(e)?kt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kk(e,n,i,r)&&(n=null),r||i===null?qk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Br=Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_c=Symbol.for("react.element"),mo=Symbol.for("react.portal"),go=Symbol.for("react.fragment"),Xg=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),Zg=Symbol.for("react.forward_ref"),rm=Symbol.for("react.suspense"),im=Symbol.for("react.suspense_list"),ey=Symbol.for("react.memo"),ni=Symbol.for("react.lazy"),Z0=Symbol.for("react.offscreen"),ew=Symbol.iterator;function Ma(t){return t===null||typeof t!="object"?null:(t=ew&&t[ew]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,ep;function ol(t){if(ep===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ep=e&&e[1]||""}return`
`+ep+t}var tp=!1;function np(t,e){if(!t||tp)return"";tp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{tp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ol(t):""}function Gk(t){switch(t.tag){case 5:return ol(t.type);case 16:return ol("Lazy");case 13:return ol("Suspense");case 19:return ol("SuspenseList");case 0:case 2:case 15:return t=np(t.type,!1),t;case 11:return t=np(t.type.render,!1),t;case 1:return t=np(t.type,!0),t;default:return""}}function sm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case go:return"Fragment";case mo:return"Portal";case nm:return"Profiler";case Xg:return"StrictMode";case rm:return"Suspense";case im:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X0:return(t.displayName||"Context")+".Consumer";case J0:return(t._context.displayName||"Context")+".Provider";case Zg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ey:return e=t.displayName||null,e!==null?e:sm(t.type)||"Memo";case ni:e=t._payload,t=t._init;try{return sm(t(e))}catch{}}return null}function Hk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sm(e);case 8:return e===Xg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Si(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function eT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qk(t){var e=eT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vc(t){t._valueTracker||(t._valueTracker=Qk(t))}function tT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=eT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function om(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Si(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nT(t,e){e=e.checked,e!=null&&Jg(t,"checked",e,!1)}function am(t,e){nT(t,e);var n=Si(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lm(t,e.type,n):e.hasOwnProperty("defaultValue")&&lm(t,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lm(t,e,n){(e!=="number"||wh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var al=Array.isArray;function xo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Si(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function um(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(al(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Si(n)}}function rT(t,e){var n=Si(e.value),r=Si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function iw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function iT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?iT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wc,sT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wc=wc||document.createElement("div"),wc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yk=["Webkit","ms","Moz","O"];Object.keys(yl).forEach(function(t){Yk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yl[e]=yl[t]})});function oT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yl.hasOwnProperty(t)&&yl[t]?(""+e).trim():e+"px"}function aT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=oT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Jk=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hm(t,e){if(e){if(Jk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function dm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fm=null;function ty(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pm=null,bo=null,Do=null;function sw(t){if(t=Fu(t)){if(typeof pm!="function")throw Error(N(280));var e=t.stateNode;e&&(e=xd(e),pm(t.stateNode,t.type,e))}}function lT(t){bo?Do?Do.push(t):Do=[t]:bo=t}function uT(){if(bo){var t=bo,e=Do;if(Do=bo=null,sw(t),e)for(t=0;t<e.length;t++)sw(e[t])}}function cT(t,e){return t(e)}function hT(){}var rp=!1;function dT(t,e,n){if(rp)return t(e,n);rp=!0;try{return cT(t,e,n)}finally{rp=!1,(bo!==null||Do!==null)&&(hT(),uT())}}function $l(t,e){var n=t.stateNode;if(n===null)return null;var r=xd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var mm=!1;if(Nr)try{var Fa={};Object.defineProperty(Fa,"passive",{get:function(){mm=!0}}),window.addEventListener("test",Fa,Fa),window.removeEventListener("test",Fa,Fa)}catch{mm=!1}function Xk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var _l=!1,Ih=null,Eh=!1,gm=null,Zk={onError:function(t){_l=!0,Ih=t}};function ex(t,e,n,r,i,s,o,a,l){_l=!1,Ih=null,Xk.apply(Zk,arguments)}function tx(t,e,n,r,i,s,o,a,l){if(ex.apply(this,arguments),_l){if(_l){var u=Ih;_l=!1,Ih=null}else throw Error(N(198));Eh||(Eh=!0,gm=u)}}function qs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ow(t){if(qs(t)!==t)throw Error(N(188))}function nx(t){var e=t.alternate;if(!e){if(e=qs(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ow(i),t;if(s===r)return ow(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function pT(t){return t=nx(t),t!==null?mT(t):null}function mT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mT(t);if(e!==null)return e;t=t.sibling}return null}var gT=vn.unstable_scheduleCallback,aw=vn.unstable_cancelCallback,rx=vn.unstable_shouldYield,ix=vn.unstable_requestPaint,Xe=vn.unstable_now,sx=vn.unstable_getCurrentPriorityLevel,ny=vn.unstable_ImmediatePriority,yT=vn.unstable_UserBlockingPriority,Th=vn.unstable_NormalPriority,ox=vn.unstable_LowPriority,_T=vn.unstable_IdlePriority,Ad=null,hr=null;function ax(t){if(hr&&typeof hr.onCommitFiberRoot=="function")try{hr.onCommitFiberRoot(Ad,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:cx,lx=Math.log,ux=Math.LN2;function cx(t){return t>>>=0,t===0?32:31-(lx(t)/ux|0)|0}var Ic=64,Ec=4194304;function ll(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ll(a):(s&=o,s!==0&&(r=ll(s)))}else o=n&~i,o!==0?r=ll(o):s!==0&&(r=ll(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qn(e),i=1<<n,r|=t[n],e&=~i;return r}function hx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ym(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vT(){var t=Ic;return Ic<<=1,!(Ic&4194240)&&(Ic=64),t}function ip(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function fx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ry(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function wT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var IT,iy,ET,TT,ST,_m=!1,Tc=[],fi=null,pi=null,mi=null,Bl=new Map,jl=new Map,si=[],px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lw(t,e){switch(t){case"focusin":case"focusout":fi=null;break;case"dragenter":case"dragleave":pi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":Bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jl.delete(e.pointerId)}}function Ua(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fu(e),e!==null&&iy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mx(t,e,n,r,i){switch(e){case"focusin":return fi=Ua(fi,t,e,n,r,i),!0;case"dragenter":return pi=Ua(pi,t,e,n,r,i),!0;case"mouseover":return mi=Ua(mi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bl.set(s,Ua(Bl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jl.set(s,Ua(jl.get(s)||null,t,e,n,r,i)),!0}return!1}function RT(t){var e=as(t.target);if(e!==null){var n=qs(e);if(n!==null){if(e=n.tag,e===13){if(e=fT(n),e!==null){t.blockedOn=e,ST(t.priority,function(){ET(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fm=r,n.target.dispatchEvent(r),fm=null}else return e=Fu(n),e!==null&&iy(e),t.blockedOn=n,!1;e.shift()}return!0}function uw(t,e,n){Hc(t)&&n.delete(e)}function gx(){_m=!1,fi!==null&&Hc(fi)&&(fi=null),pi!==null&&Hc(pi)&&(pi=null),mi!==null&&Hc(mi)&&(mi=null),Bl.forEach(uw),jl.forEach(uw)}function $a(t,e){t.blockedOn===e&&(t.blockedOn=null,_m||(_m=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,gx)))}function zl(t){function e(i){return $a(i,t)}if(0<Tc.length){$a(Tc[0],t);for(var n=1;n<Tc.length;n++){var r=Tc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fi!==null&&$a(fi,t),pi!==null&&$a(pi,t),mi!==null&&$a(mi,t),Bl.forEach(e),jl.forEach(e),n=0;n<si.length;n++)r=si[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<si.length&&(n=si[0],n.blockedOn===null);)RT(n),n.blockedOn===null&&si.shift()}var No=Br.ReactCurrentBatchConfig,Rh=!0;function yx(t,e,n,r){var i=ve,s=No.transition;No.transition=null;try{ve=1,sy(t,e,n,r)}finally{ve=i,No.transition=s}}function _x(t,e,n,r){var i=ve,s=No.transition;No.transition=null;try{ve=4,sy(t,e,n,r)}finally{ve=i,No.transition=s}}function sy(t,e,n,r){if(Rh){var i=vm(t,e,n,r);if(i===null)pp(t,e,r,Ah,n),lw(t,r);else if(mx(i,t,e,n,r))r.stopPropagation();else if(lw(t,r),e&4&&-1<px.indexOf(t)){for(;i!==null;){var s=Fu(i);if(s!==null&&IT(s),s=vm(t,e,n,r),s===null&&pp(t,e,r,Ah,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pp(t,e,r,null,n)}}var Ah=null;function vm(t,e,n,r){if(Ah=null,t=ty(r),t=as(t),t!==null)if(e=qs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ah=t,null}function AT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sx()){case ny:return 1;case yT:return 4;case Th:case ox:return 16;case _T:return 536870912;default:return 16}default:return 16}}var ui=null,oy=null,Qc=null;function PT(){if(Qc)return Qc;var t,e=oy,n=e.length,r,i="value"in ui?ui.value:ui.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qc=i.slice(t,1<r?1-r:void 0)}function Yc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sc(){return!0}function cw(){return!1}function Tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sc:cw,this.isPropagationStopped=cw,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sc)},persist:function(){},isPersistent:Sc}),e}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ay=Tn(pa),Mu=$e({},pa,{view:0,detail:0}),vx=Tn(Mu),sp,op,Ba,Pd=$e({},Mu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ly,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ba&&(Ba&&t.type==="mousemove"?(sp=t.screenX-Ba.screenX,op=t.screenY-Ba.screenY):op=sp=0,Ba=t),sp)},movementY:function(t){return"movementY"in t?t.movementY:op}}),hw=Tn(Pd),wx=$e({},Pd,{dataTransfer:0}),Ix=Tn(wx),Ex=$e({},Mu,{relatedTarget:0}),ap=Tn(Ex),Tx=$e({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=Tn(Tx),Rx=$e({},pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ax=Tn(Rx),Px=$e({},pa,{data:0}),dw=Tn(Px),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xx[t])?!!e[t]:!1}function ly(){return bx}var Dx=$e({},Mu,{key:function(t){if(t.key){var e=Cx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ly,charCode:function(t){return t.type==="keypress"?Yc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nx=Tn(Dx),Ox=$e({},Pd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fw=Tn(Ox),Vx=$e({},Mu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ly}),Lx=Tn(Vx),Mx=$e({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fx=Tn(Mx),Ux=$e({},Pd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=Tn(Ux),Bx=[9,13,27,32],uy=Nr&&"CompositionEvent"in window,vl=null;Nr&&"documentMode"in document&&(vl=document.documentMode);var jx=Nr&&"TextEvent"in window&&!vl,CT=Nr&&(!uy||vl&&8<vl&&11>=vl),pw=String.fromCharCode(32),mw=!1;function kT(t,e){switch(t){case"keyup":return Bx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yo=!1;function zx(t,e){switch(t){case"compositionend":return xT(e);case"keypress":return e.which!==32?null:(mw=!0,pw);case"textInput":return t=e.data,t===pw&&mw?null:t;default:return null}}function qx(t,e){if(yo)return t==="compositionend"||!uy&&kT(t,e)?(t=PT(),Qc=oy=ui=null,yo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return CT&&e.locale!=="ko"?null:e.data;default:return null}}var Wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wx[t.type]:e==="textarea"}function bT(t,e,n,r){lT(r),e=Ph(e,"onChange"),0<e.length&&(n=new ay("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wl=null,ql=null;function Kx(t){jT(t,0)}function Cd(t){var e=wo(t);if(tT(e))return t}function Gx(t,e){if(t==="change")return e}var DT=!1;if(Nr){var lp;if(Nr){var up="oninput"in document;if(!up){var yw=document.createElement("div");yw.setAttribute("oninput","return;"),up=typeof yw.oninput=="function"}lp=up}else lp=!1;DT=lp&&(!document.documentMode||9<document.documentMode)}function _w(){wl&&(wl.detachEvent("onpropertychange",NT),ql=wl=null)}function NT(t){if(t.propertyName==="value"&&Cd(ql)){var e=[];bT(e,ql,t,ty(t)),dT(Kx,e)}}function Hx(t,e,n){t==="focusin"?(_w(),wl=e,ql=n,wl.attachEvent("onpropertychange",NT)):t==="focusout"&&_w()}function Qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cd(ql)}function Yx(t,e){if(t==="click")return Cd(e)}function Jx(t,e){if(t==="input"||t==="change")return Cd(e)}function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:Xx;function Wl(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tm.call(e,i)||!Kn(t[i],e[i]))return!1}return!0}function vw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ww(t,e){var n=vw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vw(n)}}function OT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?OT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function VT(){for(var t=window,e=wh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wh(t.document)}return e}function cy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zx(t){var e=VT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&OT(n.ownerDocument.documentElement,n)){if(r!==null&&cy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ww(n,s);var o=ww(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eb=Nr&&"documentMode"in document&&11>=document.documentMode,_o=null,wm=null,Il=null,Im=!1;function Iw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Im||_o==null||_o!==wh(r)||(r=_o,"selectionStart"in r&&cy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Il&&Wl(Il,r)||(Il=r,r=Ph(wm,"onSelect"),0<r.length&&(e=new ay("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_o)))}function Rc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vo={animationend:Rc("Animation","AnimationEnd"),animationiteration:Rc("Animation","AnimationIteration"),animationstart:Rc("Animation","AnimationStart"),transitionend:Rc("Transition","TransitionEnd")},cp={},LT={};Nr&&(LT=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function kd(t){if(cp[t])return cp[t];if(!vo[t])return t;var e=vo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in LT)return cp[t]=e[n];return t}var MT=kd("animationend"),FT=kd("animationiteration"),UT=kd("animationstart"),$T=kd("transitionend"),BT=new Map,Ew="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(t,e){BT.set(t,e),zs(e,[t])}for(var hp=0;hp<Ew.length;hp++){var dp=Ew[hp],tb=dp.toLowerCase(),nb=dp[0].toUpperCase()+dp.slice(1);Mi(tb,"on"+nb)}Mi(MT,"onAnimationEnd");Mi(FT,"onAnimationIteration");Mi(UT,"onAnimationStart");Mi("dblclick","onDoubleClick");Mi("focusin","onFocus");Mi("focusout","onBlur");Mi($T,"onTransitionEnd");Wo("onMouseEnter",["mouseout","mouseover"]);Wo("onMouseLeave",["mouseout","mouseover"]);Wo("onPointerEnter",["pointerout","pointerover"]);Wo("onPointerLeave",["pointerout","pointerover"]);zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ul));function Tw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tx(r,e,void 0,t),t.currentTarget=null}function jT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Tw(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Tw(i,a,u),s=l}}}if(Eh)throw t=gm,Eh=!1,gm=null,t}function Ce(t,e){var n=e[Am];n===void 0&&(n=e[Am]=new Set);var r=t+"__bubble";n.has(r)||(zT(e,t,2,!1),n.add(r))}function fp(t,e,n){var r=0;e&&(r|=4),zT(n,t,r,e)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function Kl(t){if(!t[Ac]){t[Ac]=!0,Y0.forEach(function(n){n!=="selectionchange"&&(rb.has(n)||fp(n,!1,t),fp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ac]||(e[Ac]=!0,fp("selectionchange",!1,e))}}function zT(t,e,n,r){switch(AT(e)){case 1:var i=yx;break;case 4:i=_x;break;default:i=sy}n=i.bind(null,e,n,t),i=void 0,!mm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=as(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}dT(function(){var u=s,c=ty(n),h=[];e:{var d=BT.get(t);if(d!==void 0){var f=ay,_=t;switch(t){case"keypress":if(Yc(n)===0)break e;case"keydown":case"keyup":f=Nx;break;case"focusin":_="focus",f=ap;break;case"focusout":_="blur",f=ap;break;case"beforeblur":case"afterblur":f=ap;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=hw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Lx;break;case MT:case FT:case UT:f=Sx;break;case $T:f=Fx;break;case"scroll":f=vx;break;case"wheel":f=$x;break;case"copy":case"cut":case"paste":f=Ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=fw}var v=(e&4)!==0,w=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,y;p!==null;){y=p;var g=y.stateNode;if(y.tag===5&&g!==null&&(y=g,m!==null&&(g=$l(p,m),g!=null&&v.push(Gl(p,g,y)))),w)break;p=p.return}0<v.length&&(d=new f(d,_,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&n!==fm&&(_=n.relatedTarget||n.fromElement)&&(as(_)||_[Or]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(_=n.relatedTarget||n.toElement,f=u,_=_?as(_):null,_!==null&&(w=qs(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(f=null,_=u),f!==_)){if(v=hw,g="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=fw,g="onPointerLeave",m="onPointerEnter",p="pointer"),w=f==null?d:wo(f),y=_==null?d:wo(_),d=new v(g,p+"leave",f,n,c),d.target=w,d.relatedTarget=y,g=null,as(c)===u&&(v=new v(m,p+"enter",_,n,c),v.target=y,v.relatedTarget=w,g=v),w=g,f&&_)t:{for(v=f,m=_,p=0,y=v;y;y=no(y))p++;for(y=0,g=m;g;g=no(g))y++;for(;0<p-y;)v=no(v),p--;for(;0<y-p;)m=no(m),y--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=no(v),m=no(m)}v=null}else v=null;f!==null&&Sw(h,d,f,v,!1),_!==null&&w!==null&&Sw(h,w,_,v,!0)}}e:{if(d=u?wo(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var R=Gx;else if(gw(d))if(DT)R=Jx;else{R=Qx;var P=Hx}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=Yx);if(R&&(R=R(t,u))){bT(h,R,n,c);break e}P&&P(t,d,u),t==="focusout"&&(P=d._wrapperState)&&P.controlled&&d.type==="number"&&lm(d,"number",d.value)}switch(P=u?wo(u):window,t){case"focusin":(gw(P)||P.contentEditable==="true")&&(_o=P,wm=u,Il=null);break;case"focusout":Il=wm=_o=null;break;case"mousedown":Im=!0;break;case"contextmenu":case"mouseup":case"dragend":Im=!1,Iw(h,n,c);break;case"selectionchange":if(eb)break;case"keydown":case"keyup":Iw(h,n,c)}var A;if(uy)e:{switch(t){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else yo?kT(t,n)&&(V="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(CT&&n.locale!=="ko"&&(yo||V!=="onCompositionStart"?V==="onCompositionEnd"&&yo&&(A=PT()):(ui=c,oy="value"in ui?ui.value:ui.textContent,yo=!0)),P=Ph(u,V),0<P.length&&(V=new dw(V,t,null,n,c),h.push({event:V,listeners:P}),A?V.data=A:(A=xT(n),A!==null&&(V.data=A)))),(A=jx?zx(t,n):qx(t,n))&&(u=Ph(u,"onBeforeInput"),0<u.length&&(c=new dw("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}jT(h,e)})}function Gl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ph(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$l(t,n),s!=null&&r.unshift(Gl(t,s,i)),s=$l(t,e),s!=null&&r.push(Gl(t,s,i))),t=t.return}return r}function no(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=$l(n,s),l!=null&&o.unshift(Gl(n,l,a))):i||(l=$l(n,s),l!=null&&o.push(Gl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ib=/\r\n?/g,sb=/\u0000|\uFFFD/g;function Rw(t){return(typeof t=="string"?t:""+t).replace(ib,`
`).replace(sb,"")}function Pc(t,e,n){if(e=Rw(e),Rw(t)!==e&&n)throw Error(N(425))}function Ch(){}var Em=null,Tm=null;function Sm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rm=typeof setTimeout=="function"?setTimeout:void 0,ob=typeof clearTimeout=="function"?clearTimeout:void 0,Aw=typeof Promise=="function"?Promise:void 0,ab=typeof queueMicrotask=="function"?queueMicrotask:typeof Aw<"u"?function(t){return Aw.resolve(null).then(t).catch(lb)}:Rm;function lb(t){setTimeout(function(){throw t})}function mp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zl(e)}function gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ma=Math.random().toString(36).slice(2),er="__reactFiber$"+ma,Hl="__reactProps$"+ma,Or="__reactContainer$"+ma,Am="__reactEvents$"+ma,ub="__reactListeners$"+ma,cb="__reactHandles$"+ma;function as(t){var e=t[er];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Or]||n[er]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pw(t);t!==null;){if(n=t[er])return n;t=Pw(t)}return e}t=n,n=t.parentNode}return null}function Fu(t){return t=t[er]||t[Or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function xd(t){return t[Hl]||null}var Pm=[],Io=-1;function Fi(t){return{current:t}}function be(t){0>Io||(t.current=Pm[Io],Pm[Io]=null,Io--)}function Ae(t,e){Io++,Pm[Io]=t.current,t.current=e}var Ri={},Ft=Fi(Ri),un=Fi(!1),Ts=Ri;function Ko(t,e){var n=t.type.contextTypes;if(!n)return Ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function cn(t){return t=t.childContextTypes,t!=null}function kh(){be(un),be(Ft)}function Cw(t,e,n){if(Ft.current!==Ri)throw Error(N(168));Ae(Ft,e),Ae(un,n)}function qT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,Hk(t)||"Unknown",i));return $e({},n,r)}function xh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ri,Ts=Ft.current,Ae(Ft,t),Ae(un,un.current),!0}function kw(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=qT(t,e,Ts),r.__reactInternalMemoizedMergedChildContext=t,be(un),be(Ft),Ae(Ft,t)):be(un),Ae(un,n)}var Er=null,bd=!1,gp=!1;function WT(t){Er===null?Er=[t]:Er.push(t)}function hb(t){bd=!0,WT(t)}function Ui(){if(!gp&&Er!==null){gp=!0;var t=0,e=ve;try{var n=Er;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Er=null,bd=!1}catch(i){throw Er!==null&&(Er=Er.slice(t+1)),gT(ny,Ui),i}finally{ve=e,gp=!1}}return null}var Eo=[],To=0,bh=null,Dh=0,Pn=[],Cn=0,Ss=null,Tr=1,Sr="";function Xi(t,e){Eo[To++]=Dh,Eo[To++]=bh,bh=t,Dh=e}function KT(t,e,n){Pn[Cn++]=Tr,Pn[Cn++]=Sr,Pn[Cn++]=Ss,Ss=t;var r=Tr;t=Sr;var i=32-qn(r)-1;r&=~(1<<i),n+=1;var s=32-qn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tr=1<<32-qn(e)+i|n<<i|r,Sr=s+t}else Tr=1<<s|n<<i|r,Sr=t}function hy(t){t.return!==null&&(Xi(t,1),KT(t,1,0))}function dy(t){for(;t===bh;)bh=Eo[--To],Eo[To]=null,Dh=Eo[--To],Eo[To]=null;for(;t===Ss;)Ss=Pn[--Cn],Pn[Cn]=null,Sr=Pn[--Cn],Pn[Cn]=null,Tr=Pn[--Cn],Pn[Cn]=null}var yn=null,mn=null,De=!1,Bn=null;function GT(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,mn=gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ss!==null?{id:Tr,overflow:Sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,mn=null,!0):!1;default:return!1}}function Cm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function km(t){if(De){var e=mn;if(e){var n=e;if(!xw(t,e)){if(Cm(t))throw Error(N(418));e=gi(n.nextSibling);var r=yn;e&&xw(t,e)?GT(r,n):(t.flags=t.flags&-4097|2,De=!1,yn=t)}}else{if(Cm(t))throw Error(N(418));t.flags=t.flags&-4097|2,De=!1,yn=t}}}function bw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Cc(t){if(t!==yn)return!1;if(!De)return bw(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sm(t.type,t.memoizedProps)),e&&(e=mn)){if(Cm(t))throw HT(),Error(N(418));for(;e;)GT(t,e),e=gi(e.nextSibling)}if(bw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=yn?gi(t.stateNode.nextSibling):null;return!0}function HT(){for(var t=mn;t;)t=gi(t.nextSibling)}function Go(){mn=yn=null,De=!1}function fy(t){Bn===null?Bn=[t]:Bn.push(t)}var db=Br.ReactCurrentBatchConfig;function Fn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Nh=Fi(null),Oh=null,So=null,py=null;function my(){py=So=Oh=null}function gy(t){var e=Nh.current;be(Nh),t._currentValue=e}function xm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Oo(t,e){Oh=t,py=So=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(py!==t)if(t={context:t,memoizedValue:e,next:null},So===null){if(Oh===null)throw Error(N(308));So=t,Oh.dependencies={lanes:0,firstContext:t}}else So=So.next=t;return e}var ls=null;function yy(t){ls===null?ls=[t]:ls.push(t)}function QT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yy(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vr(t,r)}function Vr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ri=!1;function _y(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function YT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vr(t,n)}return i=r.interleaved,i===null?(e.next=e,yy(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vr(t,n)}function Jc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ry(t,n)}}function Dw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vh(t,e,n,r){var i=t.updateQueue;ri=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,f=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(d=e,f=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(f,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,d=typeof _=="function"?_.call(f,h,d):_,d==null)break e;h=$e({},h,d);break e;case 2:ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else f={eventTime:f,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);As|=o,t.lanes=o,t.memoizedState=h}}function Nw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var JT=new Q0.Component().refs;function bm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dd={isMounted:function(t){return(t=t._reactInternals)?qs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=vi(t),s=kr(r,i);s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,i),e!==null&&(Wn(e,t,i,r),Jc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=vi(t),s=kr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yi(t,s,i),e!==null&&(Wn(e,t,i,r),Jc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),r=vi(t),i=kr(n,r);i.tag=2,e!=null&&(i.callback=e),e=yi(t,i,r),e!==null&&(Wn(e,t,r,n),Jc(e,t,r))}};function Ow(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wl(n,r)||!Wl(i,s):!0}function XT(t,e,n){var r=!1,i=Ri,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(i=cn(e)?Ts:Ft.current,r=e.contextTypes,s=(r=r!=null)?Ko(t,i):Ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dd.enqueueReplaceState(e,e.state,null)}function Dm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=JT,_y(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nn(s):(s=cn(e)?Ts:Ft.current,i.context=Ko(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dd.enqueueReplaceState(i,i.state,null),Vh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ja(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===JT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function kc(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lw(t){var e=t._init;return e(t._payload)}function ZT(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=wi(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,g){return p===null||p.tag!==6?(p=Tp(y,m.mode,g),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,g){var R=y.type;return R===go?c(m,p,y.props.children,g,y.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ni&&Lw(R)===p.type)?(g=i(p,y.props),g.ref=ja(m,p,y),g.return=m,g):(g=rh(y.type,y.key,y.props,null,m.mode,g),g.ref=ja(m,p,y),g.return=m,g)}function u(m,p,y,g){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Sp(y,m.mode,g),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,g,R){return p===null||p.tag!==7?(p=_s(y,m.mode,g,R),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Tp(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case _c:return y=rh(p.type,p.key,p.props,null,m.mode,y),y.ref=ja(m,null,p),y.return=m,y;case mo:return p=Sp(p,m.mode,y),p.return=m,p;case ni:var g=p._init;return h(m,g(p._payload),y)}if(al(p)||Ma(p))return p=_s(p,m.mode,y,null),p.return=m,p;kc(m,p)}return null}function d(m,p,y,g){var R=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:a(m,p,""+y,g);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _c:return y.key===R?l(m,p,y,g):null;case mo:return y.key===R?u(m,p,y,g):null;case ni:return R=y._init,d(m,p,R(y._payload),g)}if(al(y)||Ma(y))return R!==null?null:c(m,p,y,g,null);kc(m,y)}return null}function f(m,p,y,g,R){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(y)||null,a(p,m,""+g,R);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _c:return m=m.get(g.key===null?y:g.key)||null,l(p,m,g,R);case mo:return m=m.get(g.key===null?y:g.key)||null,u(p,m,g,R);case ni:var P=g._init;return f(m,p,y,P(g._payload),R)}if(al(g)||Ma(g))return m=m.get(y)||null,c(p,m,g,R,null);kc(p,g)}return null}function _(m,p,y,g){for(var R=null,P=null,A=p,V=p=0,Q=null;A!==null&&V<y.length;V++){A.index>V?(Q=A,A=null):Q=A.sibling;var G=d(m,A,y[V],g);if(G===null){A===null&&(A=Q);break}t&&A&&G.alternate===null&&e(m,A),p=s(G,p,V),P===null?R=G:P.sibling=G,P=G,A=Q}if(V===y.length)return n(m,A),De&&Xi(m,V),R;if(A===null){for(;V<y.length;V++)A=h(m,y[V],g),A!==null&&(p=s(A,p,V),P===null?R=A:P.sibling=A,P=A);return De&&Xi(m,V),R}for(A=r(m,A);V<y.length;V++)Q=f(A,m,V,y[V],g),Q!==null&&(t&&Q.alternate!==null&&A.delete(Q.key===null?V:Q.key),p=s(Q,p,V),P===null?R=Q:P.sibling=Q,P=Q);return t&&A.forEach(function(me){return e(m,me)}),De&&Xi(m,V),R}function v(m,p,y,g){var R=Ma(y);if(typeof R!="function")throw Error(N(150));if(y=R.call(y),y==null)throw Error(N(151));for(var P=R=null,A=p,V=p=0,Q=null,G=y.next();A!==null&&!G.done;V++,G=y.next()){A.index>V?(Q=A,A=null):Q=A.sibling;var me=d(m,A,G.value,g);if(me===null){A===null&&(A=Q);break}t&&A&&me.alternate===null&&e(m,A),p=s(me,p,V),P===null?R=me:P.sibling=me,P=me,A=Q}if(G.done)return n(m,A),De&&Xi(m,V),R;if(A===null){for(;!G.done;V++,G=y.next())G=h(m,G.value,g),G!==null&&(p=s(G,p,V),P===null?R=G:P.sibling=G,P=G);return De&&Xi(m,V),R}for(A=r(m,A);!G.done;V++,G=y.next())G=f(A,m,V,G.value,g),G!==null&&(t&&G.alternate!==null&&A.delete(G.key===null?V:G.key),p=s(G,p,V),P===null?R=G:P.sibling=G,P=G);return t&&A.forEach(function(vt){return e(m,vt)}),De&&Xi(m,V),R}function w(m,p,y,g){if(typeof y=="object"&&y!==null&&y.type===go&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _c:e:{for(var R=y.key,P=p;P!==null;){if(P.key===R){if(R=y.type,R===go){if(P.tag===7){n(m,P.sibling),p=i(P,y.props.children),p.return=m,m=p;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===ni&&Lw(R)===P.type){n(m,P.sibling),p=i(P,y.props),p.ref=ja(m,P,y),p.return=m,m=p;break e}n(m,P);break}else e(m,P);P=P.sibling}y.type===go?(p=_s(y.props.children,m.mode,g,y.key),p.return=m,m=p):(g=rh(y.type,y.key,y.props,null,m.mode,g),g.ref=ja(m,p,y),g.return=m,m=g)}return o(m);case mo:e:{for(P=y.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Sp(y,m.mode,g),p.return=m,m=p}return o(m);case ni:return P=y._init,w(m,p,P(y._payload),g)}if(al(y))return _(m,p,y,g);if(Ma(y))return v(m,p,y,g);kc(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=Tp(y,m.mode,g),p.return=m,m=p),o(m)):n(m,p)}return w}var Ho=ZT(!0),eS=ZT(!1),Uu={},dr=Fi(Uu),Ql=Fi(Uu),Yl=Fi(Uu);function us(t){if(t===Uu)throw Error(N(174));return t}function vy(t,e){switch(Ae(Yl,e),Ae(Ql,t),Ae(dr,Uu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cm(e,t)}be(dr),Ae(dr,e)}function Qo(){be(dr),be(Ql),be(Yl)}function tS(t){us(Yl.current);var e=us(dr.current),n=cm(e,t.type);e!==n&&(Ae(Ql,t),Ae(dr,n))}function wy(t){Ql.current===t&&(be(dr),be(Ql))}var Me=Fi(0);function Lh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yp=[];function Iy(){for(var t=0;t<yp.length;t++)yp[t]._workInProgressVersionPrimary=null;yp.length=0}var Xc=Br.ReactCurrentDispatcher,_p=Br.ReactCurrentBatchConfig,Rs=0,Fe=null,ot=null,ht=null,Mh=!1,El=!1,Jl=0,fb=0;function bt(){throw Error(N(321))}function Ey(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Ty(t,e,n,r,i,s){if(Rs=s,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xc.current=t===null||t.memoizedState===null?yb:_b,t=n(r,i),El){s=0;do{if(El=!1,Jl=0,25<=s)throw Error(N(301));s+=1,ht=ot=null,e.updateQueue=null,Xc.current=vb,t=n(r,i)}while(El)}if(Xc.current=Fh,e=ot!==null&&ot.next!==null,Rs=0,ht=ot=Fe=null,Mh=!1,e)throw Error(N(300));return t}function Sy(){var t=Jl!==0;return Jl=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Fe.memoizedState=ht=t:ht=ht.next=t,ht}function On(){if(ot===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=ht===null?Fe.memoizedState:ht.next;if(e!==null)ht=e,ot=t;else{if(t===null)throw Error(N(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ht===null?Fe.memoizedState=ht=t:ht=ht.next=t}return ht}function Xl(t,e){return typeof e=="function"?e(t):e}function vp(t){var e=On(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=ot,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Rs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Fe.lanes|=c,As|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Kn(r,e.memoizedState)||(nn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Fe.lanes|=s,As|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wp(t){var e=On(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function nS(){}function rS(t,e){var n=Fe,r=On(),i=e(),s=!Kn(r.memoizedState,i);if(s&&(r.memoizedState=i,nn=!0),r=r.queue,Ry(oS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,Zl(9,sS.bind(null,n,r,i,e),void 0,null),ft===null)throw Error(N(349));Rs&30||iS(n,e,i)}return i}function iS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sS(t,e,n,r){e.value=n,e.getSnapshot=r,aS(e)&&lS(t)}function oS(t,e,n){return n(function(){aS(e)&&lS(t)})}function aS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function lS(t){var e=Vr(t,1);e!==null&&Wn(e,t,1,-1)}function Mw(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:t},e.queue=t,t=t.dispatch=gb.bind(null,Fe,t),[e.memoizedState,t]}function Zl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function uS(){return On().memoizedState}function Zc(t,e,n,r){var i=Zn();Fe.flags|=t,i.memoizedState=Zl(1|e,n,void 0,r===void 0?null:r)}function Nd(t,e,n,r){var i=On();r=r===void 0?null:r;var s=void 0;if(ot!==null){var o=ot.memoizedState;if(s=o.destroy,r!==null&&Ey(r,o.deps)){i.memoizedState=Zl(e,n,s,r);return}}Fe.flags|=t,i.memoizedState=Zl(1|e,n,s,r)}function Fw(t,e){return Zc(8390656,8,t,e)}function Ry(t,e){return Nd(2048,8,t,e)}function cS(t,e){return Nd(4,2,t,e)}function hS(t,e){return Nd(4,4,t,e)}function dS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fS(t,e,n){return n=n!=null?n.concat([t]):null,Nd(4,4,dS.bind(null,e,t),n)}function Ay(){}function pS(t,e){var n=On();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ey(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mS(t,e){var n=On();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ey(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gS(t,e,n){return Rs&21?(Kn(n,e)||(n=vT(),Fe.lanes|=n,As|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function pb(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=_p.transition;_p.transition={};try{t(!1),e()}finally{ve=n,_p.transition=r}}function yS(){return On().memoizedState}function mb(t,e,n){var r=vi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_S(t))vS(e,n);else if(n=QT(t,e,n,r),n!==null){var i=Gt();Wn(n,t,r,i),wS(n,e,r)}}function gb(t,e,n){var r=vi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_S(t))vS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(i.next=i,yy(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=QT(t,e,i,r),n!==null&&(i=Gt(),Wn(n,t,r,i),wS(n,e,r))}}function _S(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function vS(t,e){El=Mh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ry(t,n)}}var Fh={readContext:Nn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},yb={readContext:Nn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:Fw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4194308,4,dS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zc(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mb.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Mw,useDebugValue:Ay,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Mw(!1),e=t[0];return t=pb.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=Zn();if(De){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),ft===null)throw Error(N(349));Rs&30||iS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Fw(oS.bind(null,r,s,t),[t]),r.flags|=2048,Zl(9,sS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=ft.identifierPrefix;if(De){var n=Sr,r=Tr;n=(r&~(1<<32-qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_b={readContext:Nn,useCallback:pS,useContext:Nn,useEffect:Ry,useImperativeHandle:fS,useInsertionEffect:cS,useLayoutEffect:hS,useMemo:mS,useReducer:vp,useRef:uS,useState:function(){return vp(Xl)},useDebugValue:Ay,useDeferredValue:function(t){var e=On();return gS(e,ot.memoizedState,t)},useTransition:function(){var t=vp(Xl)[0],e=On().memoizedState;return[t,e]},useMutableSource:nS,useSyncExternalStore:rS,useId:yS,unstable_isNewReconciler:!1},vb={readContext:Nn,useCallback:pS,useContext:Nn,useEffect:Ry,useImperativeHandle:fS,useInsertionEffect:cS,useLayoutEffect:hS,useMemo:mS,useReducer:wp,useRef:uS,useState:function(){return wp(Xl)},useDebugValue:Ay,useDeferredValue:function(t){var e=On();return ot===null?e.memoizedState=t:gS(e,ot.memoizedState,t)},useTransition:function(){var t=wp(Xl)[0],e=On().memoizedState;return[t,e]},useMutableSource:nS,useSyncExternalStore:rS,useId:yS,unstable_isNewReconciler:!1};function Yo(t,e){try{var n="",r=e;do n+=Gk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ip(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wb=typeof WeakMap=="function"?WeakMap:Map;function IS(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$h||($h=!0,zm=r),Nm(t,e)},n}function ES(t,e,n){n=kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Nm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nm(t,e),typeof r!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Uw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ob.bind(null,t,e,n),e.then(t,t))}function $w(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,yi(n,e,1))),n.lanes|=1),t)}var Ib=Br.ReactCurrentOwner,nn=!1;function zt(t,e,n,r){e.child=t===null?eS(e,null,n,r):Ho(e,t.child,n,r)}function jw(t,e,n,r,i){n=n.render;var s=e.ref;return Oo(e,i),r=Ty(t,e,n,r,s,i),n=Sy(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(De&&n&&hy(e),e.flags|=1,zt(t,e,r,i),e.child)}function zw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Oy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,TS(t,e,s,r,i)):(t=rh(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wl,n(o,r)&&t.ref===e.ref)return Lr(t,e,i)}return e.flags|=1,t=wi(s,r),t.ref=e.ref,t.return=e,e.child=t}function TS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wl(s,r)&&t.ref===e.ref)if(nn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Lr(t,e,i)}return Om(t,e,n,r,i)}function SS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Ao,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ae(Ao,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ae(Ao,fn),fn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ae(Ao,fn),fn|=r;return zt(t,e,i,n),e.child}function RS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Om(t,e,n,r,i){var s=cn(n)?Ts:Ft.current;return s=Ko(e,s),Oo(e,i),n=Ty(t,e,n,r,s,i),r=Sy(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(De&&r&&hy(e),e.flags|=1,zt(t,e,n,i),e.child)}function qw(t,e,n,r,i){if(cn(n)){var s=!0;xh(e)}else s=!1;if(Oo(e,i),e.stateNode===null)eh(t,e),XT(e,n,r),Dm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=cn(n)?Ts:Ft.current,u=Ko(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vw(e,o,r,u),ri=!1;var d=e.memoizedState;o.state=d,Vh(e,r,o,i),l=e.memoizedState,a!==r||d!==l||un.current||ri?(typeof c=="function"&&(bm(e,n,c,r),l=e.memoizedState),(a=ri||Ow(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,YT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Fn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=cn(n)?Ts:Ft.current,l=Ko(e,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Vw(e,o,r,l),ri=!1,d=e.memoizedState,o.state=d,Vh(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||un.current||ri?(typeof f=="function"&&(bm(e,n,f,r),_=e.memoizedState),(u=ri||Ow(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Vm(t,e,n,r,s,i)}function Vm(t,e,n,r,i,s){RS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&kw(e,n,!1),Lr(t,e,s);r=e.stateNode,Ib.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ho(e,t.child,null,s),e.child=Ho(e,null,a,s)):zt(t,e,a,s),e.memoizedState=r.state,i&&kw(e,n,!0),e.child}function AS(t){var e=t.stateNode;e.pendingContext?Cw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cw(t,e.context,!1),vy(t,e.containerInfo)}function Ww(t,e,n,r,i){return Go(),fy(i),e.flags|=256,zt(t,e,n,r),e.child}var Lm={dehydrated:null,treeContext:null,retryLane:0};function Mm(t){return{baseLanes:t,cachePool:null,transitions:null}}function PS(t,e,n){var r=e.pendingProps,i=Me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ae(Me,i&1),t===null)return km(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ld(o,r,0,null),t=_s(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mm(n),e.memoizedState=Lm,t):Py(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Eb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=wi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wi(a,s):(s=_s(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lm,r}return s=t.child,t=s.sibling,r=wi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Py(t,e){return e=Ld({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xc(t,e,n,r){return r!==null&&fy(r),Ho(e,t.child,null,n),t=Py(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Eb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ip(Error(N(422))),xc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ld({mode:"visible",children:r.children},i,0,null),s=_s(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ho(e,t.child,null,o),e.child.memoizedState=Mm(o),e.memoizedState=Lm,s);if(!(e.mode&1))return xc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Ip(s,r,void 0),xc(t,e,o,r)}if(a=(o&t.childLanes)!==0,nn||a){if(r=ft,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vr(t,i),Wn(r,t,i,-1))}return Ny(),r=Ip(Error(N(421))),xc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Vb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,mn=gi(i.nextSibling),yn=e,De=!0,Bn=null,t!==null&&(Pn[Cn++]=Tr,Pn[Cn++]=Sr,Pn[Cn++]=Ss,Tr=t.id,Sr=t.overflow,Ss=e),e=Py(e,r.children),e.flags|=4096,e)}function Kw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xm(t.return,e,n)}function Ep(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function CS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(zt(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kw(t,n,e);else if(t.tag===19)Kw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ae(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Lh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ep(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Lh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ep(e,!0,n,null,s);break;case"together":Ep(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eh(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),As|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Tb(t,e,n){switch(e.tag){case 3:AS(e),Go();break;case 5:tS(e);break;case 1:cn(e.type)&&xh(e);break;case 4:vy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ae(Nh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?PS(t,e,n):(Ae(Me,Me.current&1),t=Lr(t,e,n),t!==null?t.sibling:null);Ae(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return CS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,SS(t,e,n)}return Lr(t,e,n)}var kS,Fm,xS,bS;kS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fm=function(){};xS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,us(dr.current);var s=null;switch(n){case"input":i=om(t,i),r=om(t,r),s=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),s=[];break;case"textarea":i=um(t,i),r=um(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ch)}hm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bS=function(t,e,n,r){n!==r&&(e.flags|=4)};function za(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Sb(t,e,n){var r=e.pendingProps;switch(dy(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return cn(e.type)&&kh(),Dt(e),null;case 3:return r=e.stateNode,Qo(),be(un),be(Ft),Iy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(Km(Bn),Bn=null))),Fm(t,e),Dt(e),null;case 5:wy(e);var i=us(Yl.current);if(n=e.type,t!==null&&e.stateNode!=null)xS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return Dt(e),null}if(t=us(dr.current),Cc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[er]=e,r[Hl]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<ul.length;i++)Ce(ul[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":tw(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":rw(r,s),Ce("invalid",r)}hm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pc(r.textContent,a,t),i=["children",""+a]):Fl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":vc(r),nw(r,s,!0);break;case"textarea":vc(r),iw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ch)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=iT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[er]=e,t[Hl]=r,kS(t,e,!1,!1),e.stateNode=t;e:{switch(o=dm(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<ul.length;i++)Ce(ul[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":tw(t,r),i=om(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":rw(t,r),i=um(t,r),Ce("invalid",t);break;default:i=r}hm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?aT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ul(t,l):typeof l=="number"&&Ul(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ce("scroll",t):l!=null&&Jg(t,s,l,o))}switch(n){case"input":vc(t),nw(t,r,!1);break;case"textarea":vc(t),iw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Si(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xo(t,!!r.multiple,s,!1):r.defaultValue!=null&&xo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ch)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)bS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=us(Yl.current),us(dr.current),Cc(e)){if(r=e.stateNode,n=e.memoizedProps,r[er]=e,(s=r.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Pc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[er]=e,e.stateNode=r}return Dt(e),null;case 13:if(be(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&mn!==null&&e.mode&1&&!(e.flags&128))HT(),Go(),e.flags|=98560,s=!1;else if(s=Cc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[er]=e}else Go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else Bn!==null&&(Km(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?at===0&&(at=3):Ny())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return Qo(),Fm(t,e),t===null&&Kl(e.stateNode.containerInfo),Dt(e),null;case 10:return gy(e.type._context),Dt(e),null;case 17:return cn(e.type)&&kh(),Dt(e),null;case 19:if(be(Me),s=e.memoizedState,s===null)return Dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)za(s,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Lh(t),o!==null){for(e.flags|=128,za(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ae(Me,Me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Xe()>Jo&&(e.flags|=128,r=!0,za(s,!1),e.lanes=4194304)}else{if(!r)if(t=Lh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),za(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return Dt(e),null}else 2*Xe()-s.renderingStartTime>Jo&&n!==1073741824&&(e.flags|=128,r=!0,za(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xe(),e.sibling=null,n=Me.current,Ae(Me,r?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return Dy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?fn&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function Rb(t,e){switch(dy(e),e.tag){case 1:return cn(e.type)&&kh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qo(),be(un),be(Ft),Iy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wy(e),null;case 13:if(be(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));Go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(Me),null;case 4:return Qo(),null;case 10:return gy(e.type._context),null;case 22:case 23:return Dy(),null;case 24:return null;default:return null}}var bc=!1,Ot=!1,Ab=typeof WeakSet=="function"?WeakSet:Set,j=null;function Ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function Um(t,e,n){try{n()}catch(r){je(t,e,r)}}var Gw=!1;function Pb(t,e){if(Em=Rh,t=VT(),cy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var f;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tm={focusedElem:t,selectionRange:n},Rh=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Fn(e.type,v),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(g){je(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return _=Gw,Gw=!1,_}function Tl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Um(e,n,s)}i=i.next}while(i!==r)}}function Od(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $m(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function DS(t){var e=t.alternate;e!==null&&(t.alternate=null,DS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[er],delete e[Hl],delete e[Am],delete e[ub],delete e[cb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function NS(t){return t.tag===5||t.tag===3||t.tag===4}function Hw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||NS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ch));else if(r!==4&&(t=t.child,t!==null))for(Bm(t,e,n),t=t.sibling;t!==null;)Bm(t,e,n),t=t.sibling}function jm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jm(t,e,n),t=t.sibling;t!==null;)jm(t,e,n),t=t.sibling}var It=null,Un=!1;function Jr(t,e,n){for(n=n.child;n!==null;)OS(t,e,n),n=n.sibling}function OS(t,e,n){if(hr&&typeof hr.onCommitFiberUnmount=="function")try{hr.onCommitFiberUnmount(Ad,n)}catch{}switch(n.tag){case 5:Ot||Ro(n,e);case 6:var r=It,i=Un;It=null,Jr(t,e,n),It=r,Un=i,It!==null&&(Un?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Un?(t=It,n=n.stateNode,t.nodeType===8?mp(t.parentNode,n):t.nodeType===1&&mp(t,n),zl(t)):mp(It,n.stateNode));break;case 4:r=It,i=Un,It=n.stateNode.containerInfo,Un=!0,Jr(t,e,n),It=r,Un=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Um(n,e,o),i=i.next}while(i!==r)}Jr(t,e,n);break;case 1:if(!Ot&&(Ro(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}Jr(t,e,n);break;case 21:Jr(t,e,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,Jr(t,e,n),Ot=r):Jr(t,e,n);break;default:Jr(t,e,n)}}function Qw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ab),e.forEach(function(r){var i=Lb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Un=!1;break e;case 3:It=a.stateNode.containerInfo,Un=!0;break e;case 4:It=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(It===null)throw Error(N(160));OS(s,o,i),It=null,Un=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)VS(e,t),e=e.sibling}function VS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),Xn(t),r&4){try{Tl(3,t,t.return),Od(3,t)}catch(v){je(t,t.return,v)}try{Tl(5,t,t.return)}catch(v){je(t,t.return,v)}}break;case 1:Mn(e,t),Xn(t),r&512&&n!==null&&Ro(n,n.return);break;case 5:if(Mn(e,t),Xn(t),r&512&&n!==null&&Ro(n,n.return),t.flags&32){var i=t.stateNode;try{Ul(i,"")}catch(v){je(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&nT(i,s),dm(a,o);var u=dm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?aT(i,h):c==="dangerouslySetInnerHTML"?sT(i,h):c==="children"?Ul(i,h):Jg(i,c,h,u)}switch(a){case"input":am(i,s);break;case"textarea":rT(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?xo(i,!!s.multiple,f,!1):d!==!!s.multiple&&(s.defaultValue!=null?xo(i,!!s.multiple,s.defaultValue,!0):xo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hl]=s}catch(v){je(t,t.return,v)}}break;case 6:if(Mn(e,t),Xn(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){je(t,t.return,v)}}break;case 3:if(Mn(e,t),Xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zl(e.containerInfo)}catch(v){je(t,t.return,v)}break;case 4:Mn(e,t),Xn(t);break;case 13:Mn(e,t),Xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xy=Xe())),r&4&&Qw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||c,Mn(e,t),Ot=u):Mn(e,t),Xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(j=t,c=t.child;c!==null;){for(h=j=c;j!==null;){switch(d=j,f=d.child,d.tag){case 0:case 11:case 14:case 15:Tl(4,d,d.return);break;case 1:Ro(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){je(r,n,v)}}break;case 5:Ro(d,d.return);break;case 22:if(d.memoizedState!==null){Jw(h);continue}}f!==null?(f.return=d,j=f):Jw(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=oT("display",o))}catch(v){je(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){je(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Mn(e,t),Xn(t),r&4&&Qw(t);break;case 21:break;default:Mn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(NS(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ul(i,""),r.flags&=-33);var s=Hw(t);jm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hw(t);Bm(t,a,o);break;default:throw Error(N(161))}}catch(l){je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cb(t,e,n){j=t,LS(t)}function LS(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||bc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=bc;var u=Ot;if(bc=o,(Ot=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?Xw(i):l!==null?(l.return=o,j=l):Xw(i);for(;s!==null;)j=s,LS(s),s=s.sibling;j=i,bc=a,Ot=u}Yw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):Yw(t)}}function Yw(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Od(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&zl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ot||e.flags&512&&$m(e)}catch(d){je(e,e.return,d)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function Jw(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function Xw(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Od(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){je(e,i,l)}}var s=e.return;try{$m(e)}catch(l){je(e,s,l)}break;case 5:var o=e.return;try{$m(e)}catch(l){je(e,o,l)}}}catch(l){je(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var kb=Math.ceil,Uh=Br.ReactCurrentDispatcher,Cy=Br.ReactCurrentOwner,Dn=Br.ReactCurrentBatchConfig,de=0,ft=null,it=null,At=0,fn=0,Ao=Fi(0),at=0,eu=null,As=0,Vd=0,ky=0,Sl=null,tn=null,xy=0,Jo=1/0,Ir=null,$h=!1,zm=null,_i=null,Dc=!1,ci=null,Bh=0,Rl=0,qm=null,th=-1,nh=0;function Gt(){return de&6?Xe():th!==-1?th:th=Xe()}function vi(t){return t.mode&1?de&2&&At!==0?At&-At:db.transition!==null?(nh===0&&(nh=vT()),nh):(t=ve,t!==0||(t=window.event,t=t===void 0?16:AT(t.type)),t):1}function Wn(t,e,n,r){if(50<Rl)throw Rl=0,qm=null,Error(N(185));Lu(t,n,r),(!(de&2)||t!==ft)&&(t===ft&&(!(de&2)&&(Vd|=n),at===4&&oi(t,At)),hn(t,r),n===1&&de===0&&!(e.mode&1)&&(Jo=Xe()+500,bd&&Ui()))}function hn(t,e){var n=t.callbackNode;dx(t,e);var r=Sh(t,t===ft?At:0);if(r===0)n!==null&&aw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&aw(n),e===1)t.tag===0?hb(Zw.bind(null,t)):WT(Zw.bind(null,t)),ab(function(){!(de&6)&&Ui()}),n=null;else{switch(wT(r)){case 1:n=ny;break;case 4:n=yT;break;case 16:n=Th;break;case 536870912:n=_T;break;default:n=Th}n=qS(n,MS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function MS(t,e){if(th=-1,nh=0,de&6)throw Error(N(327));var n=t.callbackNode;if(Vo()&&t.callbackNode!==n)return null;var r=Sh(t,t===ft?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=jh(t,r);else{e=r;var i=de;de|=2;var s=US();(ft!==t||At!==e)&&(Ir=null,Jo=Xe()+500,ys(t,e));do try{Db();break}catch(a){FS(t,a)}while(1);my(),Uh.current=s,de=i,it!==null?e=0:(ft=null,At=0,e=at)}if(e!==0){if(e===2&&(i=ym(t),i!==0&&(r=i,e=Wm(t,i))),e===1)throw n=eu,ys(t,0),oi(t,r),hn(t,Xe()),n;if(e===6)oi(t,r);else{if(i=t.current.alternate,!(r&30)&&!xb(i)&&(e=jh(t,r),e===2&&(s=ym(t),s!==0&&(r=s,e=Wm(t,s))),e===1))throw n=eu,ys(t,0),oi(t,r),hn(t,Xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:Zi(t,tn,Ir);break;case 3:if(oi(t,r),(r&130023424)===r&&(e=xy+500-Xe(),10<e)){if(Sh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rm(Zi.bind(null,t,tn,Ir),e);break}Zi(t,tn,Ir);break;case 4:if(oi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kb(r/1960))-r,10<r){t.timeoutHandle=Rm(Zi.bind(null,t,tn,Ir),r);break}Zi(t,tn,Ir);break;case 5:Zi(t,tn,Ir);break;default:throw Error(N(329))}}}return hn(t,Xe()),t.callbackNode===n?MS.bind(null,t):null}function Wm(t,e){var n=Sl;return t.current.memoizedState.isDehydrated&&(ys(t,e).flags|=256),t=jh(t,e),t!==2&&(e=tn,tn=n,e!==null&&Km(e)),t}function Km(t){tn===null?tn=t:tn.push.apply(tn,t)}function xb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function oi(t,e){for(e&=~ky,e&=~Vd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),r=1<<n;t[n]=-1,e&=~r}}function Zw(t){if(de&6)throw Error(N(327));Vo();var e=Sh(t,0);if(!(e&1))return hn(t,Xe()),null;var n=jh(t,e);if(t.tag!==0&&n===2){var r=ym(t);r!==0&&(e=r,n=Wm(t,r))}if(n===1)throw n=eu,ys(t,0),oi(t,e),hn(t,Xe()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zi(t,tn,Ir),hn(t,Xe()),null}function by(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Jo=Xe()+500,bd&&Ui())}}function Ps(t){ci!==null&&ci.tag===0&&!(de&6)&&Vo();var e=de;de|=1;var n=Dn.transition,r=ve;try{if(Dn.transition=null,ve=1,t)return t()}finally{ve=r,Dn.transition=n,de=e,!(de&6)&&Ui()}}function Dy(){fn=Ao.current,be(Ao)}function ys(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ob(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(dy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kh();break;case 3:Qo(),be(un),be(Ft),Iy();break;case 5:wy(r);break;case 4:Qo();break;case 13:be(Me);break;case 19:be(Me);break;case 10:gy(r.type._context);break;case 22:case 23:Dy()}n=n.return}if(ft=t,it=t=wi(t.current,null),At=fn=e,at=0,eu=null,ky=Vd=As=0,tn=Sl=null,ls!==null){for(e=0;e<ls.length;e++)if(n=ls[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ls=null}return t}function FS(t,e){do{var n=it;try{if(my(),Xc.current=Fh,Mh){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mh=!1}if(Rs=0,ht=ot=Fe=null,El=!1,Jl=0,Cy.current=null,n===null||n.return===null){at=1,eu=e,it=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=At,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=$w(o);if(f!==null){f.flags&=-257,Bw(f,o,a,s,e),f.mode&1&&Uw(s,u,e),e=f,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){Uw(s,u,e),Ny();break e}l=Error(N(426))}}else if(De&&a.mode&1){var w=$w(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Bw(w,o,a,s,e),fy(Yo(l,a));break e}}s=l=Yo(l,a),at!==4&&(at=2),Sl===null?Sl=[s]:Sl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=IS(s,l,e);Dw(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(_i===null||!_i.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=ES(s,a,e);Dw(s,g);break e}}s=s.return}while(s!==null)}BS(n)}catch(R){e=R,it===n&&n!==null&&(it=n=n.return);continue}break}while(1)}function US(){var t=Uh.current;return Uh.current=Fh,t===null?Fh:t}function Ny(){(at===0||at===3||at===2)&&(at=4),ft===null||!(As&268435455)&&!(Vd&268435455)||oi(ft,At)}function jh(t,e){var n=de;de|=2;var r=US();(ft!==t||At!==e)&&(Ir=null,ys(t,e));do try{bb();break}catch(i){FS(t,i)}while(1);if(my(),de=n,Uh.current=r,it!==null)throw Error(N(261));return ft=null,At=0,at}function bb(){for(;it!==null;)$S(it)}function Db(){for(;it!==null&&!rx();)$S(it)}function $S(t){var e=zS(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?BS(t):it=e,Cy.current=null}function BS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Rb(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,it=null;return}}else if(n=Sb(n,e,fn),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);at===0&&(at=5)}function Zi(t,e,n){var r=ve,i=Dn.transition;try{Dn.transition=null,ve=1,Nb(t,e,n,r)}finally{Dn.transition=i,ve=r}return null}function Nb(t,e,n,r){do Vo();while(ci!==null);if(de&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fx(t,s),t===ft&&(it=ft=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dc||(Dc=!0,qS(Th,function(){return Vo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=ve;ve=1;var a=de;de|=4,Cy.current=null,Pb(t,n),VS(n,t),Zx(Tm),Rh=!!Em,Tm=Em=null,t.current=n,Cb(n),ix(),de=a,ve=o,Dn.transition=s}else t.current=n;if(Dc&&(Dc=!1,ci=t,Bh=i),s=t.pendingLanes,s===0&&(_i=null),ax(n.stateNode),hn(t,Xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($h)throw $h=!1,t=zm,zm=null,t;return Bh&1&&t.tag!==0&&Vo(),s=t.pendingLanes,s&1?t===qm?Rl++:(Rl=0,qm=t):Rl=0,Ui(),null}function Vo(){if(ci!==null){var t=wT(Bh),e=Dn.transition,n=ve;try{if(Dn.transition=null,ve=16>t?16:t,ci===null)var r=!1;else{if(t=ci,ci=null,Bh=0,de&6)throw Error(N(331));var i=de;for(de|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Tl(8,c,s)}var h=c.child;if(h!==null)h.return=c,j=h;else for(;j!==null;){c=j;var d=c.sibling,f=c.return;if(DS(c),c===u){j=null;break}if(d!==null){d.return=f,j=d;break}j=f}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Tl(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,j=m;break e}j=s.return}}var p=t.current;for(j=p;j!==null;){o=j;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,j=y;else e:for(o=p;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Od(9,a)}}catch(R){je(a,a.return,R)}if(a===o){j=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,j=g;break e}j=a.return}}if(de=i,Ui(),hr&&typeof hr.onPostCommitFiberRoot=="function")try{hr.onPostCommitFiberRoot(Ad,t)}catch{}r=!0}return r}finally{ve=n,Dn.transition=e}}return!1}function eI(t,e,n){e=Yo(n,e),e=IS(t,e,1),t=yi(t,e,1),e=Gt(),t!==null&&(Lu(t,1,e),hn(t,e))}function je(t,e,n){if(t.tag===3)eI(t,t,n);else for(;e!==null;){if(e.tag===3){eI(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_i===null||!_i.has(r))){t=Yo(n,t),t=ES(e,t,1),e=yi(e,t,1),t=Gt(),e!==null&&(Lu(e,1,t),hn(e,t));break}}e=e.return}}function Ob(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(At&n)===n&&(at===4||at===3&&(At&130023424)===At&&500>Xe()-xy?ys(t,0):ky|=n),hn(t,e)}function jS(t,e){e===0&&(t.mode&1?(e=Ec,Ec<<=1,!(Ec&130023424)&&(Ec=4194304)):e=1);var n=Gt();t=Vr(t,e),t!==null&&(Lu(t,e,n),hn(t,n))}function Vb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jS(t,n)}function Lb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),jS(t,n)}var zS;zS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,Tb(t,e,n);nn=!!(t.flags&131072)}else nn=!1,De&&e.flags&1048576&&KT(e,Dh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eh(t,e),t=e.pendingProps;var i=Ko(e,Ft.current);Oo(e,n),i=Ty(null,e,r,t,i,n);var s=Sy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(r)?(s=!0,xh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_y(e),i.updater=Dd,e.stateNode=i,i._reactInternals=e,Dm(e,r,t,n),e=Vm(null,e,r,!0,s,n)):(e.tag=0,De&&s&&hy(e),zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eh(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Fb(r),t=Fn(r,t),i){case 0:e=Om(null,e,r,t,n);break e;case 1:e=qw(null,e,r,t,n);break e;case 11:e=jw(null,e,r,t,n);break e;case 14:e=zw(null,e,r,Fn(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),Om(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),qw(t,e,r,i,n);case 3:e:{if(AS(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,YT(t,e),Vh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yo(Error(N(423)),e),e=Ww(t,e,r,n,i);break e}else if(r!==i){i=Yo(Error(N(424)),e),e=Ww(t,e,r,n,i);break e}else for(mn=gi(e.stateNode.containerInfo.firstChild),yn=e,De=!0,Bn=null,n=eS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Go(),r===i){e=Lr(t,e,n);break e}zt(t,e,r,n)}e=e.child}return e;case 5:return tS(e),t===null&&km(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sm(r,i)?o=null:s!==null&&Sm(r,s)&&(e.flags|=32),RS(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&km(e),null;case 13:return PS(t,e,n);case 4:return vy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ho(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),jw(t,e,r,i,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ae(Nh,r._currentValue),r._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===i.children&&!un.current){e=Lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=kr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oo(e,n),i=Nn(i),r=r(i),e.flags|=1,zt(t,e,r,n),e.child;case 14:return r=e.type,i=Fn(r,e.pendingProps),i=Fn(r.type,i),zw(t,e,r,i,n);case 15:return TS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Fn(r,i),eh(t,e),e.tag=1,cn(r)?(t=!0,xh(e)):t=!1,Oo(e,n),XT(e,r,i),Dm(e,r,i,n),Vm(null,e,r,!0,t,n);case 19:return CS(t,e,n);case 22:return SS(t,e,n)}throw Error(N(156,e.tag))};function qS(t,e){return gT(t,e)}function Mb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,r){return new Mb(t,e,n,r)}function Oy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fb(t){if(typeof t=="function")return Oy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zg)return 11;if(t===ey)return 14}return 2}function wi(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rh(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Oy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case go:return _s(n.children,i,s,e);case Xg:o=8,i|=8;break;case nm:return t=xn(12,n,e,i|2),t.elementType=nm,t.lanes=s,t;case rm:return t=xn(13,n,e,i),t.elementType=rm,t.lanes=s,t;case im:return t=xn(19,n,e,i),t.elementType=im,t.lanes=s,t;case Z0:return Ld(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J0:o=10;break e;case X0:o=9;break e;case Zg:o=11;break e;case ey:o=14;break e;case ni:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=xn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _s(t,e,n,r){return t=xn(7,t,r,e),t.lanes=n,t}function Ld(t,e,n,r){return t=xn(22,t,r,e),t.elementType=Z0,t.lanes=n,t.stateNode={isHidden:!1},t}function Tp(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function Sp(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ub(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ip(0),this.expirationTimes=ip(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ip(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vy(t,e,n,r,i,s,o,a,l){return t=new Ub(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_y(s),t}function $b(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function WS(t){if(!t)return Ri;t=t._reactInternals;e:{if(qs(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(cn(n))return qT(t,n,e)}return e}function KS(t,e,n,r,i,s,o,a,l){return t=Vy(n,r,!0,t,i,s,o,a,l),t.context=WS(null),n=t.current,r=Gt(),i=vi(n),s=kr(r,i),s.callback=e??null,yi(n,s,i),t.current.lanes=i,Lu(t,i,r),hn(t,r),t}function Md(t,e,n,r){var i=e.current,s=Gt(),o=vi(i);return n=WS(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yi(i,e,o),t!==null&&(Wn(t,i,o,s),Jc(t,i,o)),o}function zh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tI(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ly(t,e){tI(t,e),(t=t.alternate)&&tI(t,e)}function Bb(){return null}var GS=typeof reportError=="function"?reportError:function(t){console.error(t)};function My(t){this._internalRoot=t}Fd.prototype.render=My.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));Md(t,e,null,null)};Fd.prototype.unmount=My.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ps(function(){Md(null,t,null,null)}),e[Or]=null}};function Fd(t){this._internalRoot=t}Fd.prototype.unstable_scheduleHydration=function(t){if(t){var e=TT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<si.length&&e!==0&&e<si[n].priority;n++);si.splice(n,0,t),n===0&&RT(t)}};function Fy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nI(){}function jb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=zh(o);s.call(u)}}var o=KS(e,r,t,0,null,!1,!1,"",nI);return t._reactRootContainer=o,t[Or]=o.current,Kl(t.nodeType===8?t.parentNode:t),Ps(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=zh(l);a.call(u)}}var l=Vy(t,0,!1,null,null,!1,!1,"",nI);return t._reactRootContainer=l,t[Or]=l.current,Kl(t.nodeType===8?t.parentNode:t),Ps(function(){Md(e,l,n,r)}),l}function $d(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=zh(o);a.call(l)}}Md(e,o,t,i)}else o=jb(n,e,t,i,r);return zh(o)}IT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ll(e.pendingLanes);n!==0&&(ry(e,n|1),hn(e,Xe()),!(de&6)&&(Jo=Xe()+500,Ui()))}break;case 13:Ps(function(){var r=Vr(t,1);if(r!==null){var i=Gt();Wn(r,t,1,i)}}),Ly(t,1)}};iy=function(t){if(t.tag===13){var e=Vr(t,134217728);if(e!==null){var n=Gt();Wn(e,t,134217728,n)}Ly(t,134217728)}};ET=function(t){if(t.tag===13){var e=vi(t),n=Vr(t,e);if(n!==null){var r=Gt();Wn(n,t,e,r)}Ly(t,e)}};TT=function(){return ve};ST=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};pm=function(t,e,n){switch(e){case"input":if(am(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xd(r);if(!i)throw Error(N(90));tT(r),am(r,i)}}}break;case"textarea":rT(t,n);break;case"select":e=n.value,e!=null&&xo(t,!!n.multiple,e,!1)}};cT=by;hT=Ps;var zb={usingClientEntryPoint:!1,Events:[Fu,wo,xd,lT,uT,by]},qa={findFiberByHostInstance:as,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qb={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pT(t),t===null?null:t.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||Bb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{Ad=Nc.inject(qb),hr=Nc}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zb;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fy(e))throw Error(N(200));return $b(t,e,null,n)};En.createRoot=function(t,e){if(!Fy(t))throw Error(N(299));var n=!1,r="",i=GS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vy(t,1,!1,null,null,n,!1,r,i),t[Or]=e.current,Kl(t.nodeType===8?t.parentNode:t),new My(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=pT(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Ps(t)};En.hydrate=function(t,e,n){if(!Ud(e))throw Error(N(200));return $d(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Fy(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=GS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=KS(e,null,t,1,n??null,i,!1,s,o),t[Or]=e.current,Kl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fd(e)};En.render=function(t,e,n){if(!Ud(e))throw Error(N(200));return $d(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Ud(t))throw Error(N(40));return t._reactRootContainer?(Ps(function(){$d(null,null,t,!1,function(){t._reactRootContainer=null,t[Or]=null})}),!0):!1};En.unstable_batchedUpdates=by;En.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ud(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return $d(t,e,n,!1,r)};En.version="18.2.0-next-9e3b772b8-20220608";function HS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(HS)}catch(t){console.error(t)}}HS(),K0.exports=En;var Uy=K0.exports;const QS=V0(Uy),Wb=O0({__proto__:null,default:QS},[Uy]);var rI=Uy;em.createRoot=rI.createRoot,em.hydrateRoot=rI.hydrateRoot;/**
 * @remix-run/router v1.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ze(){return ze=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ze.apply(this,arguments)}var Ye;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ye||(Ye={}));const iI="popstate";function Kb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return tu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ks(i)}return Hb(e,n,null,t)}function oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Cs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Gb(){return Math.random().toString(36).substr(2,8)}function sI(t,e){return{usr:t.state,key:t.key,idx:e}}function tu(t,e,n,r){return n===void 0&&(n=null),ze({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?jr(e):e,{state:n,key:e&&e.key||r||Gb()})}function ks(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function jr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Hb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ye.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ze({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Ye.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:m})}function d(w,m){a=Ye.Push;let p=tu(v.location,w,m);n&&n(p,w),u=c()+1;let y=sI(p,u),g=v.createHref(p);try{o.pushState(y,"",g)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(g)}s&&l&&l({action:a,location:v.location,delta:1})}function f(w,m){a=Ye.Replace;let p=tu(v.location,w,m);n&&n(p,w),u=c();let y=sI(p,u),g=v.createHref(p);o.replaceState(y,"",g),s&&l&&l({action:a,location:v.location,delta:0})}function _(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:ks(w);return oe(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(iI,h),l=w,()=>{i.removeEventListener(iI,h),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let m=_(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:f,go(w){return o.go(w)}};return v}var Je;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Je||(Je={}));const Qb=new Set(["lazy","caseSensitive","path","id","index","children"]);function Yb(t){return t.index===!0}function Gm(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(oe(i.index!==!0||!i.children,"Cannot specify children on an index route"),oe(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Yb(i)){let l=ze({},i,e(i),{id:a});return r[a]=l,l}else{let l=ze({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=Gm(i.children,e,o,r)),l}})}function Po(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?jr(e):e,i=ga(r.pathname||"/",n);if(i==null)return null;let s=YS(t);Xb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=aD(s[a],cD(i));return o}function Jb(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function YS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(oe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=xr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),YS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:sD(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of JS(s.path))i(s,o,l)}),e}function JS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=JS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Xb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Zb=/^:\w+$/,eD=3,tD=2,nD=1,rD=10,iD=-2,oI=t=>t==="*";function sD(t,e){let n=t.split("/"),r=n.length;return n.some(oI)&&(r+=iD),e&&(r+=tD),n.filter(i=>!oI(i)).reduce((i,s)=>i+(Zb.test(s)?eD:s===""?nD:rD),r)}function oD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function aD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=lD({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:xr([i,c.pathname]),pathnameBase:pD(xr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=xr([i,c.pathnameBase]))}return s}function lD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=uD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:f}=c;if(d==="*"){let v=a[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=a[h];return f&&!_?u[d]=void 0:u[d]=hD(_||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function uD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Cs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function cD(t){try{return decodeURI(t)}catch(e){return Cs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function hD(t,e){try{return decodeURIComponent(t)}catch(n){return Cs(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ga(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function dD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?jr(t):t;return{pathname:n?n.startsWith("/")?n:fD(n,e):e,search:mD(r),hash:gD(i)}}function fD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bd(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $y(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=jr(t):(i=ze({},t),oe(!i.pathname||!i.pathname.includes("?"),Rp("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),Rp("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),Rp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else if(r){let h=e[e.length-1].replace(/^\//,"").split("/");if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h.pop();i.pathname=d.join("/")}a="/"+h.join("/")}else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=dD(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const xr=t=>t.join("/").replace(/\/\/+/g,"/"),pD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class By{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function XS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ZS=["post","put","patch","delete"],yD=new Set(ZS),_D=["get",...ZS],vD=new Set(_D),wD=new Set([301,302,303,307,308]),ID=new Set([307,308]),Ap={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ED={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Wa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},eR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,TD=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),tR="remix-router-transitions";function SD(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;oe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let I=t.detectErrorBoundary;i=T=>({hasErrorBoundary:I(T)})}else i=TD;let s={},o=Gm(t.routes,i,void 0,s),a,l=t.basename||"/",u=ze({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,f=null,_=null,v=t.hydrationData!=null,w=Po(o,t.history.location,l),m=null;if(w==null){let I=An(404,{pathname:t.history.location.pathname}),{matches:T,route:k}=pI(o);w=T,m={[k.id]:I}}let p=!w.some(I=>I.route.lazy)&&(!w.some(I=>I.route.loader)||t.hydrationData!=null),y,g={historyAction:t.history.action,location:t.history.location,matches:w,initialized:p,navigation:Ap,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},R=Ye.Pop,P=!1,A,V=!1,Q=new Map,G=null,me=!1,vt=!1,Te=[],ut=[],ge=new Map,st=0,Ut=-1,L=new Map,z=new Set,J=new Map,pe=new Map,Ie=new Set,Sn=new Map,$t=new Map,Hi=!1;function vr(){if(c=t.history.listen(I=>{let{action:T,location:k,delta:F}=I;if(Hi){Hi=!1;return}Cs($t.size===0||F!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let q=Wv({currentLocation:g.location,nextLocation:k,historyAction:T});if(q&&F!=null){Hi=!0,t.history.go(F*-1),mc(q,{state:"blocked",location:k,proceed(){mc(q,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),t.history.go(F)},reset(){let re=new Map(g.blockers);re.set(q,Wa),dn({blockers:re})}});return}return Qi(T,k)}),n){VD(e,Q);let I=()=>LD(e,Q);e.addEventListener("pagehide",I),G=()=>e.removeEventListener("pagehide",I)}return g.initialized||Qi(Ye.Pop,g.location),y}function Zs(){c&&c(),G&&G(),h.clear(),A&&A.abort(),g.fetchers.forEach((I,T)=>pc(T)),g.blockers.forEach((I,T)=>qv(T))}function ak(I){return h.add(I),()=>h.delete(I)}function dn(I,T){T===void 0&&(T={}),g=ze({},g,I);let k=[],F=[];u.v7_fetcherPersist&&g.fetchers.forEach((q,re)=>{q.state==="idle"&&(Ie.has(re)?F.push(re):k.push(re))}),[...h].forEach(q=>q(g,{deletedFetchers:F,unstable_viewTransitionOpts:T.viewTransitionOpts,unstable_flushSync:T.flushSync===!0})),u.v7_fetcherPersist&&(k.forEach(q=>g.fetchers.delete(q)),F.forEach(q=>pc(q)))}function Na(I,T,k){var F,q;let{flushSync:re}=k===void 0?{}:k,Z=g.actionData!=null&&g.navigation.formMethod!=null&&$n(g.navigation.formMethod)&&g.navigation.state==="loading"&&((F=I.state)==null?void 0:F._isRedirect)!==!0,X;T.actionData?Object.keys(T.actionData).length>0?X=T.actionData:X=null:Z?X=g.actionData:X=null;let H=T.loaderData?fI(g.loaderData,T.loaderData,T.matches||[],T.errors):g.loaderData,ue=g.blockers;ue.size>0&&(ue=new Map(ue),ue.forEach((Se,Le)=>ue.set(Le,Wa)));let wt=P===!0||g.navigation.formMethod!=null&&$n(g.navigation.formMethod)&&((q=I.state)==null?void 0:q._isRedirect)!==!0;a&&(o=a,a=void 0),me||R===Ye.Pop||(R===Ye.Push?t.history.push(I,I.state):R===Ye.Replace&&t.history.replace(I,I.state));let ie;if(R===Ye.Pop){let Se=Q.get(g.location.pathname);Se&&Se.has(I.pathname)?ie={currentLocation:g.location,nextLocation:I}:Q.has(I.pathname)&&(ie={currentLocation:I,nextLocation:g.location})}else if(V){let Se=Q.get(g.location.pathname);Se?Se.add(I.pathname):(Se=new Set([I.pathname]),Q.set(g.location.pathname,Se)),ie={currentLocation:g.location,nextLocation:I}}dn(ze({},T,{actionData:X,loaderData:H,historyAction:R,location:I,initialized:!0,navigation:Ap,revalidation:"idle",restoreScrollPosition:Gv(I,T.matches||g.matches),preventScrollReset:wt,blockers:ue}),{viewTransitionOpts:ie,flushSync:re===!0}),R=Ye.Pop,P=!1,V=!1,me=!1,vt=!1,Te=[],ut=[]}async function Fv(I,T){if(typeof I=="number"){t.history.go(I);return}let k=Hm(g.location,g.matches,l,u.v7_prependBasename,I,T==null?void 0:T.fromRouteId,T==null?void 0:T.relative),{path:F,submission:q,error:re}=aI(u.v7_normalizeFormMethod,!1,k,T),Z=g.location,X=tu(g.location,F,T&&T.state);X=ze({},X,t.history.encodeLocation(X));let H=T&&T.replace!=null?T.replace:void 0,ue=Ye.Push;H===!0?ue=Ye.Replace:H===!1||q!=null&&$n(q.formMethod)&&q.formAction===g.location.pathname+g.location.search&&(ue=Ye.Replace);let wt=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,ie=(T&&T.unstable_flushSync)===!0,Se=Wv({currentLocation:Z,nextLocation:X,historyAction:ue});if(Se){mc(Se,{state:"blocked",location:X,proceed(){mc(Se,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),Fv(I,T)},reset(){let Le=new Map(g.blockers);Le.set(Se,Wa),dn({blockers:Le})}});return}return await Qi(ue,X,{submission:q,pendingError:re,preventScrollReset:wt,replace:T&&T.replace,enableViewTransition:T&&T.unstable_viewTransition,flushSync:ie})}function lk(){if(Gf(),dn({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Qi(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Qi(R||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Qi(I,T,k){A&&A.abort(),A=null,R=I,me=(k&&k.startUninterruptedRevalidation)===!0,yk(g.location,g.matches),P=(k&&k.preventScrollReset)===!0,V=(k&&k.enableViewTransition)===!0;let F=a||o,q=k&&k.overrideNavigation,re=Po(F,T,l),Z=(k&&k.flushSync)===!0;if(!re){let Le=An(404,{pathname:T.pathname}),{matches:Bt,route:Jn}=pI(F);Hf(),Na(T,{matches:Bt,loaderData:{},errors:{[Jn.id]:Le}},{flushSync:Z});return}if(g.initialized&&!vt&&kD(g.location,T)&&!(k&&k.submission&&$n(k.submission.formMethod))){Na(T,{matches:re},{flushSync:Z});return}A=new AbortController;let X=Ga(t.history,T,A.signal,k&&k.submission),H,ue;if(k&&k.pendingError)ue={[Al(re).route.id]:k.pendingError};else if(k&&k.submission&&$n(k.submission.formMethod)){let Le=await uk(X,T,k.submission,re,{replace:k.replace,flushSync:Z});if(Le.shortCircuited)return;H=Le.pendingActionData,ue=Le.pendingActionError,q=Pp(T,k.submission),Z=!1,X=new Request(X.url,{signal:X.signal})}let{shortCircuited:wt,loaderData:ie,errors:Se}=await ck(X,T,re,q,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,Z,H,ue);wt||(A=null,Na(T,ze({matches:re},H?{actionData:H}:{},{loaderData:ie,errors:Se})))}async function uk(I,T,k,F,q){q===void 0&&(q={}),Gf();let re=ND(T,k);dn({navigation:re},{flushSync:q.flushSync===!0});let Z,X=Ym(F,T);if(!X.route.action&&!X.route.lazy)Z={type:Je.error,error:An(405,{method:I.method,pathname:T.pathname,routeId:X.route.id})};else if(Z=await Ka("action",I,X,F,s,i,l),I.signal.aborted)return{shortCircuited:!0};if(Lo(Z)){let H;return q&&q.replace!=null?H=q.replace:H=Z.location===g.location.pathname+g.location.search,await Oa(g,Z,{submission:k,replace:H}),{shortCircuited:!0}}if(Pl(Z)){let H=Al(F,X.route.id);return(q&&q.replace)!==!0&&(R=Ye.Push),{pendingActionData:{},pendingActionError:{[H.route.id]:Z.error}}}if(cs(Z))throw An(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:Z.data}}}async function ck(I,T,k,F,q,re,Z,X,H,ue){let wt=F||Pp(T,q),ie=q||re||yI(wt),Se=a||o,[Le,Bt]=lI(t.history,g,k,ie,T,vt,Te,ut,J,z,Se,l,H,ue);if(Hf(Re=>!(k&&k.some(Rn=>Rn.route.id===Re))||Le&&Le.some(Rn=>Rn.route.id===Re)),Ut=++st,Le.length===0&&Bt.length===0){let Re=jv();return Na(T,ze({matches:k,loaderData:{},errors:ue||null},H?{actionData:H}:{},Re?{fetchers:new Map(g.fetchers)}:{}),{flushSync:X}),{shortCircuited:!0}}if(!me){Bt.forEach(Rn=>{let tt=g.fetchers.get(Rn.key),Yi=Ha(void 0,tt?tt.data:void 0);g.fetchers.set(Rn.key,Yi)});let Re=H||g.actionData;dn(ze({navigation:wt},Re?Object.keys(Re).length===0?{actionData:null}:{actionData:Re}:{},Bt.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:X})}Bt.forEach(Re=>{ge.has(Re.key)&&Yr(Re.key),Re.controller&&ge.set(Re.key,Re.controller)});let Jn=()=>Bt.forEach(Re=>Yr(Re.key));A&&A.signal.addEventListener("abort",Jn);let{results:La,loaderResults:Qf,fetcherResults:eo}=await Uv(g.matches,k,Le,Bt,I);if(I.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",Jn),Bt.forEach(Re=>ge.delete(Re.key));let Ln=mI(La);if(Ln){if(Ln.idx>=Le.length){let Re=Bt[Ln.idx-Le.length].key;z.add(Re)}return await Oa(g,Ln.result,{replace:Z}),{shortCircuited:!0}}let{loaderData:gc,errors:Yf}=dI(g,k,Le,Qf,ue,Bt,eo,Sn);Sn.forEach((Re,Rn)=>{Re.subscribe(tt=>{(tt||Re.done)&&Sn.delete(Rn)})});let Jf=jv(),Xf=zv(Ut),to=Jf||Xf||Bt.length>0;return ze({loaderData:gc,errors:Yf},to?{fetchers:new Map(g.fetchers)}:{})}function hk(I,T,k,F){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ge.has(I)&&Yr(I);let q=(F&&F.unstable_flushSync)===!0,re=a||o,Z=Hm(g.location,g.matches,l,u.v7_prependBasename,k,T,F==null?void 0:F.relative),X=Po(re,Z,l);if(!X){Va(I,T,An(404,{pathname:Z}),{flushSync:q});return}let{path:H,submission:ue,error:wt}=aI(u.v7_normalizeFormMethod,!0,Z,F);if(wt){Va(I,T,wt,{flushSync:q});return}let ie=Ym(X,H);if(P=(F&&F.preventScrollReset)===!0,ue&&$n(ue.formMethod)){dk(I,T,H,ie,X,q,ue);return}J.set(I,{routeId:T,path:H}),fk(I,T,H,ie,X,q,ue)}async function dk(I,T,k,F,q,re,Z){if(Gf(),J.delete(I),!F.route.action&&!F.route.lazy){let tt=An(405,{method:Z.formMethod,pathname:k,routeId:T});Va(I,T,tt,{flushSync:re});return}let X=g.fetchers.get(I);Qr(I,OD(Z,X),{flushSync:re});let H=new AbortController,ue=Ga(t.history,k,H.signal,Z);ge.set(I,H);let wt=st,ie=await Ka("action",ue,F,q,s,i,l);if(ue.signal.aborted){ge.get(I)===H&&ge.delete(I);return}if(Ie.has(I)){Qr(I,ti(void 0));return}if(Lo(ie))if(ge.delete(I),Ut>wt){Qr(I,ti(void 0));return}else return z.add(I),Qr(I,Ha(Z)),Oa(g,ie,{fetcherSubmission:Z});if(Pl(ie)){Va(I,T,ie.error);return}if(cs(ie))throw An(400,{type:"defer-action"});let Se=g.navigation.location||g.location,Le=Ga(t.history,Se,H.signal),Bt=a||o,Jn=g.navigation.state!=="idle"?Po(Bt,g.navigation.location,l):g.matches;oe(Jn,"Didn't find any matches after fetcher action");let La=++st;L.set(I,La);let Qf=Ha(Z,ie.data);g.fetchers.set(I,Qf);let[eo,Ln]=lI(t.history,g,Jn,Z,Se,vt,Te,ut,J,z,Bt,l,{[F.route.id]:ie.data},void 0);Ln.filter(tt=>tt.key!==I).forEach(tt=>{let Yi=tt.key,Hv=g.fetchers.get(Yi),vk=Ha(void 0,Hv?Hv.data:void 0);g.fetchers.set(Yi,vk),ge.has(Yi)&&Yr(Yi),tt.controller&&ge.set(Yi,tt.controller)}),dn({fetchers:new Map(g.fetchers)});let gc=()=>Ln.forEach(tt=>Yr(tt.key));H.signal.addEventListener("abort",gc);let{results:Yf,loaderResults:Jf,fetcherResults:Xf}=await Uv(g.matches,Jn,eo,Ln,Le);if(H.signal.aborted)return;H.signal.removeEventListener("abort",gc),L.delete(I),ge.delete(I),Ln.forEach(tt=>ge.delete(tt.key));let to=mI(Yf);if(to){if(to.idx>=eo.length){let tt=Ln[to.idx-eo.length].key;z.add(tt)}return Oa(g,to.result)}let{loaderData:Re,errors:Rn}=dI(g,g.matches,eo,Jf,void 0,Ln,Xf,Sn);if(g.fetchers.has(I)){let tt=ti(ie.data);g.fetchers.set(I,tt)}zv(La),g.navigation.state==="loading"&&La>Ut?(oe(R,"Expected pending action"),A&&A.abort(),Na(g.navigation.location,{matches:Jn,loaderData:Re,errors:Rn,fetchers:new Map(g.fetchers)})):(dn({errors:Rn,loaderData:fI(g.loaderData,Re,Jn,Rn),fetchers:new Map(g.fetchers)}),vt=!1)}async function fk(I,T,k,F,q,re,Z){let X=g.fetchers.get(I);Qr(I,Ha(Z,X?X.data:void 0),{flushSync:re});let H=new AbortController,ue=Ga(t.history,k,H.signal);ge.set(I,H);let wt=st,ie=await Ka("loader",ue,F,q,s,i,l);if(cs(ie)&&(ie=await iR(ie,ue.signal,!0)||ie),ge.get(I)===H&&ge.delete(I),!ue.signal.aborted){if(Ie.has(I)){Qr(I,ti(void 0));return}if(Lo(ie))if(Ut>wt){Qr(I,ti(void 0));return}else{z.add(I),await Oa(g,ie);return}if(Pl(ie)){Va(I,T,ie.error);return}oe(!cs(ie),"Unhandled fetcher deferred data"),Qr(I,ti(ie.data))}}async function Oa(I,T,k){let{submission:F,fetcherSubmission:q,replace:re}=k===void 0?{}:k;T.revalidate&&(vt=!0);let Z=tu(I.location,T.location,{_isRedirect:!0});if(oe(Z,"Expected a location on the redirect navigation"),n){let Se=!1;if(T.reloadDocument)Se=!0;else if(eR.test(T.location)){const Le=t.history.createURL(T.location);Se=Le.origin!==e.location.origin||ga(Le.pathname,l)==null}if(Se){re?e.location.replace(T.location):e.location.assign(T.location);return}}A=null;let X=re===!0?Ye.Replace:Ye.Push,{formMethod:H,formAction:ue,formEncType:wt}=I.navigation;!F&&!q&&H&&ue&&wt&&(F=yI(I.navigation));let ie=F||q;if(ID.has(T.status)&&ie&&$n(ie.formMethod))await Qi(X,Z,{submission:ze({},ie,{formAction:T.location}),preventScrollReset:P});else{let Se=Pp(Z,F);await Qi(X,Z,{overrideNavigation:Se,fetcherSubmission:q,preventScrollReset:P})}}async function Uv(I,T,k,F,q){let re=await Promise.all([...k.map(H=>Ka("loader",q,H,T,s,i,l)),...F.map(H=>H.matches&&H.match&&H.controller?Ka("loader",Ga(t.history,H.path,H.controller.signal),H.match,H.matches,s,i,l):{type:Je.error,error:An(404,{pathname:H.path})})]),Z=re.slice(0,k.length),X=re.slice(k.length);return await Promise.all([gI(I,k,Z,Z.map(()=>q.signal),!1,g.loaderData),gI(I,F.map(H=>H.match),X,F.map(H=>H.controller?H.controller.signal:null),!0)]),{results:re,loaderResults:Z,fetcherResults:X}}function Gf(){vt=!0,Te.push(...Hf()),J.forEach((I,T)=>{ge.has(T)&&(ut.push(T),Yr(T))})}function Qr(I,T,k){k===void 0&&(k={}),g.fetchers.set(I,T),dn({fetchers:new Map(g.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function Va(I,T,k,F){F===void 0&&(F={});let q=Al(g.matches,T);pc(I),dn({errors:{[q.route.id]:k},fetchers:new Map(g.fetchers)},{flushSync:(F&&F.flushSync)===!0})}function $v(I){return u.v7_fetcherPersist&&(pe.set(I,(pe.get(I)||0)+1),Ie.has(I)&&Ie.delete(I)),g.fetchers.get(I)||ED}function pc(I){let T=g.fetchers.get(I);ge.has(I)&&!(T&&T.state==="loading"&&L.has(I))&&Yr(I),J.delete(I),L.delete(I),z.delete(I),Ie.delete(I),g.fetchers.delete(I)}function pk(I){if(u.v7_fetcherPersist){let T=(pe.get(I)||0)-1;T<=0?(pe.delete(I),Ie.add(I)):pe.set(I,T)}else pc(I);dn({fetchers:new Map(g.fetchers)})}function Yr(I){let T=ge.get(I);oe(T,"Expected fetch controller: "+I),T.abort(),ge.delete(I)}function Bv(I){for(let T of I){let k=$v(T),F=ti(k.data);g.fetchers.set(T,F)}}function jv(){let I=[],T=!1;for(let k of z){let F=g.fetchers.get(k);oe(F,"Expected fetcher: "+k),F.state==="loading"&&(z.delete(k),I.push(k),T=!0)}return Bv(I),T}function zv(I){let T=[];for(let[k,F]of L)if(F<I){let q=g.fetchers.get(k);oe(q,"Expected fetcher: "+k),q.state==="loading"&&(Yr(k),L.delete(k),T.push(k))}return Bv(T),T.length>0}function mk(I,T){let k=g.blockers.get(I)||Wa;return $t.get(I)!==T&&$t.set(I,T),k}function qv(I){g.blockers.delete(I),$t.delete(I)}function mc(I,T){let k=g.blockers.get(I)||Wa;oe(k.state==="unblocked"&&T.state==="blocked"||k.state==="blocked"&&T.state==="blocked"||k.state==="blocked"&&T.state==="proceeding"||k.state==="blocked"&&T.state==="unblocked"||k.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+T.state);let F=new Map(g.blockers);F.set(I,T),dn({blockers:F})}function Wv(I){let{currentLocation:T,nextLocation:k,historyAction:F}=I;if($t.size===0)return;$t.size>1&&Cs(!1,"A router only supports one blocker at a time");let q=Array.from($t.entries()),[re,Z]=q[q.length-1],X=g.blockers.get(re);if(!(X&&X.state==="proceeding")&&Z({currentLocation:T,nextLocation:k,historyAction:F}))return re}function Hf(I){let T=[];return Sn.forEach((k,F)=>{(!I||I(F))&&(k.cancel(),T.push(F),Sn.delete(F))}),T}function gk(I,T,k){if(d=I,_=T,f=k||null,!v&&g.navigation===Ap){v=!0;let F=Gv(g.location,g.matches);F!=null&&dn({restoreScrollPosition:F})}return()=>{d=null,_=null,f=null}}function Kv(I,T){return f&&f(I,T.map(F=>Jb(F,g.loaderData)))||I.key}function yk(I,T){if(d&&_){let k=Kv(I,T);d[k]=_()}}function Gv(I,T){if(d){let k=Kv(I,T),F=d[k];if(typeof F=="number")return F}return null}function _k(I){s={},a=Gm(I,i,void 0,s)}return y={get basename(){return l},get state(){return g},get routes(){return o},get window(){return e},initialize:vr,subscribe:ak,enableScrollRestoration:gk,navigate:Fv,fetch:hk,revalidate:lk,createHref:I=>t.history.createHref(I),encodeLocation:I=>t.history.encodeLocation(I),getFetcher:$v,deleteFetcher:pk,dispose:Zs,getBlocker:mk,deleteBlocker:qv,_internalFetchControllers:ge,_internalActiveDeferreds:Sn,_internalSetRoutes:_k},y}function RD(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Hm(t,e,n,r,i,s,o){let a,l;if(s){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=$y(i||".",Bd(a).map(c=>c.pathnameBase),ga(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!jy(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:xr([n,u.pathname])),ks(u)}function aI(t,e,n,r){if(!r||!RD(r))return{path:n};if(r.formMethod&&!DD(r.formMethod))return{path:n,error:An(405,{method:r.formMethod})};let i=()=>({path:n,error:An(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=rR(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!$n(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((f,_)=>{let[v,w]=_;return""+f+v+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!$n(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}oe(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Qm(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Qm(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=hI(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=hI(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if($n(c.formMethod))return{path:n,submission:c};let h=jr(n);return e&&h.search&&jy(h.search)&&l.append("index",""),h.search="?"+l,{path:ks(h),submission:c}}function AD(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function lI(t,e,n,r,i,s,o,a,l,u,c,h,d,f){let _=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,v=t.createURL(e.location),w=t.createURL(i),m=f?Object.keys(f)[0]:void 0,y=AD(n,m).filter((R,P)=>{if(R.route.lazy)return!0;if(R.route.loader==null)return!1;if(PD(e.loaderData,e.matches[P],R)||o.some(Q=>Q===R.route.id))return!0;let A=e.matches[P],V=R;return uI(R,ze({currentUrl:v,currentParams:A.params,nextUrl:w,nextParams:V.params},r,{actionResult:_,defaultShouldRevalidate:s||v.pathname+v.search===w.pathname+w.search||v.search!==w.search||nR(A,V)}))}),g=[];return l.forEach((R,P)=>{if(!n.some(me=>me.route.id===R.routeId))return;let A=Po(c,R.path,h);if(!A){g.push({key:P,routeId:R.routeId,path:R.path,matches:null,match:null,controller:null});return}let V=e.fetchers.get(P),Q=Ym(A,R.path),G=!1;u.has(P)?G=!1:a.includes(P)?G=!0:V&&V.state!=="idle"&&V.data===void 0?G=s:G=uI(Q,ze({currentUrl:v,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:s})),G&&g.push({key:P,routeId:R.routeId,path:R.path,matches:A,match:Q,controller:new AbortController})}),[y,g]}function PD(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function nR(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function uI(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function cI(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];oe(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Cs(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Qb.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,ze({},e(i),{lazy:void 0}))}async function Ka(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=_=>{let v,w=new Promise((m,p)=>v=p);return c=()=>v(),e.signal.addEventListener("abort",c),Promise.race([_({request:e,params:n.params,context:a.requestContext}),w])};try{let _=n.route[t];if(n.route.lazy)if(_){let v,w=await Promise.all([h(_).catch(m=>{v=m}),cI(n.route,s,i)]);if(v)throw v;u=w[0]}else if(await cI(n.route,s,i),_=n.route[t],_)u=await h(_);else if(t==="action"){let v=new URL(e.url),w=v.pathname+v.search;throw An(405,{method:e.method,pathname:w,routeId:n.route.id})}else return{type:Je.data,data:void 0};else if(_)u=await h(_);else{let v=new URL(e.url),w=v.pathname+v.search;throw An(404,{pathname:w})}oe(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(_){l=Je.error,u=_}finally{c&&e.signal.removeEventListener("abort",c)}if(bD(u)){let _=u.status;if(wD.has(_)){let m=u.headers.get("Location");if(oe(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!eR.test(m))m=Hm(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!a.isStaticRequest){let p=new URL(e.url),y=m.startsWith("//")?new URL(p.protocol+m):new URL(m),g=ga(y.pathname,o)!=null;y.origin===p.origin&&g&&(m=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Je.redirect,status:_,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===Je.error?Je.error:Je.data,response:u};let v,w=u.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?v=await u.json():v=await u.text(),l===Je.error?{type:l,error:new By(_,u.statusText,v),headers:u.headers}:{type:Je.data,data:v,statusCode:u.status,headers:u.headers}}if(l===Je.error)return{type:l,error:u};if(xD(u)){var d,f;return{type:Je.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((f=u.init)==null?void 0:f.headers)&&new Headers(u.init.headers)}}return{type:Je.data,data:u}}function Ga(t,e,n,r){let i=t.createURL(rR(e)).toString(),s={signal:n};if(r&&$n(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Qm(r.formData):s.body=r.formData}return new Request(i,s)}function Qm(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function hI(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function CD(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(oe(!Lo(c),"Cannot handle redirect results in processLoaderData"),Pl(c)){let f=Al(t,d),_=c.error;r&&(_=Object.values(r)[0],r=void 0),o=o||{},o[f.route.id]==null&&(o[f.route.id]=_),s[d]=void 0,l||(l=!0,a=XS(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else cs(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function dI(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=CD(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:f}=s[c];oe(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let _=o[c];if(!(f&&f.signal.aborted))if(Pl(_)){let v=Al(t.matches,d==null?void 0:d.route.id);u&&u[v.route.id]||(u=ze({},u,{[v.route.id]:_.error})),t.fetchers.delete(h)}else if(Lo(_))oe(!1,"Unhandled fetcher revalidation redirect");else if(cs(_))oe(!1,"Unhandled fetcher deferred data");else{let v=ti(_.data);t.fetchers.set(h,v)}}return{loaderData:l,errors:u}}function fI(t,e,n,r){let i=ze({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Al(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function pI(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function An(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new By(t||500,o,new Error(a),!0)}function mI(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Lo(n))return{result:n,idx:e}}}function rR(t){let e=typeof t=="string"?jr(t):t;return ks(ze({},e,{hash:""}))}function kD(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function cs(t){return t.type===Je.deferred}function Pl(t){return t.type===Je.error}function Lo(t){return(t&&t.type)===Je.redirect}function xD(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function bD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function DD(t){return vD.has(t.toLowerCase())}function $n(t){return yD.has(t.toLowerCase())}async function gI(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!nR(u,l)&&(s&&s[l.route.id])!==void 0;if(cs(a)&&(i||c)){let h=r[o];oe(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await iR(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function iR(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Je.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Je.error,error:i}}return{type:Je.data,data:t.deferredData.data}}}function jy(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Ym(t,e){let n=typeof e=="string"?jr(e).search:e.search;if(t[t.length-1].route.index&&jy(n||""))return t[t.length-1];let r=Bd(t);return r[r.length-1]}function yI(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Pp(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ND(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ha(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function OD(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function ti(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function VD(t,e){try{let n=t.sessionStorage.getItem(tR);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function LD(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(tR,JSON.stringify(n))}catch(r){Cs(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qh(){return qh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qh.apply(this,arguments)}const jd=D.createContext(null),sR=D.createContext(null),ya=D.createContext(null),zd=D.createContext(null),$i=D.createContext({outlet:null,matches:[],isDataRoute:!1}),oR=D.createContext(null);function MD(t,e){let{relative:n}=e===void 0?{}:e;$u()||oe(!1);let{basename:r,navigator:i}=D.useContext(ya),{hash:s,pathname:o,search:a}=lR(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:xr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function $u(){return D.useContext(zd)!=null}function qd(){return $u()||oe(!1),D.useContext(zd).location}function aR(t){D.useContext(ya).static||D.useLayoutEffect(t)}function Wd(){let{isDataRoute:t}=D.useContext($i);return t?JD():FD()}function FD(){$u()||oe(!1);let t=D.useContext(jd),{basename:e,navigator:n}=D.useContext(ya),{matches:r}=D.useContext($i),{pathname:i}=qd(),s=JSON.stringify(Bd(r).map(l=>l.pathnameBase)),o=D.useRef(!1);return aR(()=>{o.current=!0}),D.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=$y(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:xr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const UD=D.createContext(null);function $D(t){let e=D.useContext($i).outlet;return e&&D.createElement(UD.Provider,{value:t},e)}function lR(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=D.useContext($i),{pathname:i}=qd(),s=JSON.stringify(Bd(r).map((o,a)=>a===r.length-1?o.pathname:o.pathnameBase));return D.useMemo(()=>$y(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function BD(t,e,n){$u()||oe(!1);let{navigator:r}=D.useContext(ya),{matches:i}=D.useContext($i),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=qd(),u;if(e){var c;let v=typeof e=="string"?jr(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||oe(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",f=Po(t,{pathname:d}),_=KD(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:xr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:xr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&_?D.createElement(zd.Provider,{value:{location:qh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ye.Pop}},_):_}function jD(){let t=YD(),e=XS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,s)}const zD=D.createElement(jD,null);class qD extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?D.createElement($i.Provider,{value:this.props.routeContext},D.createElement(oR.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WD(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(jd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement($i.Provider,{value:e},r)}function KD(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||oe(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||zD);let d=e.concat(s.slice(0,u+1)),f=()=>{let _;return c?_=h:l.route.Component?_=D.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,D.createElement(WD,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?D.createElement(qD,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var uR=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(uR||{}),Wh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Wh||{});function GD(t){let e=D.useContext(jd);return e||oe(!1),e}function HD(t){let e=D.useContext(sR);return e||oe(!1),e}function QD(t){let e=D.useContext($i);return e||oe(!1),e}function cR(t){let e=QD(),n=e.matches[e.matches.length-1];return n.route.id||oe(!1),n.route.id}function YD(){var t;let e=D.useContext(oR),n=HD(Wh.UseRouteError),r=cR(Wh.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function JD(){let{router:t}=GD(uR.UseNavigateStable),e=cR(Wh.UseNavigateStable),n=D.useRef(!1);return aR(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,qh({fromRouteId:e},s)))},[t,e])}function XD(t){return $D(t.context)}function ZD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ye.Pop,navigator:s,static:o=!1}=t;$u()&&oe(!1);let a=e.replace(/^\/*/,"/"),l=D.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=jr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,_=D.useMemo(()=>{let v=ga(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:f},navigationType:i}},[a,u,c,h,d,f,i]);return _==null?null:D.createElement(ya.Provider,{value:l},D.createElement(zd.Provider,{children:n,value:_}))}new Promise(()=>{});function eN(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:D.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:D.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nu.apply(this,arguments)}function tN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function nN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function rN(t,e){return t.button===0&&(!e||e==="_self")&&!nN(t)}const iN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function sN(t,e){return SD({basename:e==null?void 0:e.basename,future:nu({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Kb({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||oN(),routes:t,mapRouteProperties:eN,window:e==null?void 0:e.window}).initialize()}function oN(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=nu({},e,{errors:aN(e.errors)})),e}function aN(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new By(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const lN=D.createContext({isTransitioning:!1}),uN=D.createContext(new Map),cN="startTransition",_I=Vk[cN],hN="flushSync",vI=Wb[hN];function dN(t){_I?_I(t):t()}function Qa(t){vI?vI(t):t()}let fN=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function pN(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=D.useState(n.state),[o,a]=D.useState(),[l,u]=D.useState({isTransitioning:!1}),[c,h]=D.useState(),[d,f]=D.useState(),[_,v]=D.useState(),w=D.useRef(new Map),{v7_startTransition:m}=r||{},p=D.useCallback(A=>{m?dN(A):A()},[m]),y=D.useCallback((A,V)=>{let{deletedFetchers:Q,unstable_flushSync:G,unstable_viewTransitionOpts:me}=V;Q.forEach(Te=>w.current.delete(Te)),A.fetchers.forEach((Te,ut)=>{Te.data!==void 0&&w.current.set(ut,Te.data)});let vt=n.window==null||typeof n.window.document.startViewTransition!="function";if(!me||vt){G?Qa(()=>s(A)):p(()=>s(A));return}if(G){Qa(()=>{d&&(c&&c.resolve(),d.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:me.currentLocation,nextLocation:me.nextLocation})});let Te=n.window.document.startViewTransition(()=>{Qa(()=>s(A))});Te.finished.finally(()=>{Qa(()=>{h(void 0),f(void 0),a(void 0),u({isTransitioning:!1})})}),Qa(()=>f(Te));return}d?(c&&c.resolve(),d.skipTransition(),v({state:A,currentLocation:me.currentLocation,nextLocation:me.nextLocation})):(a(A),u({isTransitioning:!0,flushSync:!1,currentLocation:me.currentLocation,nextLocation:me.nextLocation}))},[n.window,d,c,w,p]);D.useLayoutEffect(()=>n.subscribe(y),[n,y]),D.useEffect(()=>{l.isTransitioning&&!l.flushSync&&h(new fN)},[l]),D.useEffect(()=>{if(c&&o&&n.window){let A=o,V=c.promise,Q=n.window.document.startViewTransition(async()=>{p(()=>s(A)),await V});Q.finished.finally(()=>{h(void 0),f(void 0),a(void 0),u({isTransitioning:!1})}),f(Q)}},[p,o,c,n.window]),D.useEffect(()=>{c&&o&&i.location.key===o.location.key&&c.resolve()},[c,d,i.location,o]),D.useEffect(()=>{!l.isTransitioning&&_&&(a(_.state),u({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}),v(void 0))},[l.isTransitioning,_]);let g=D.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:A=>n.navigate(A),push:(A,V,Q)=>n.navigate(A,{state:V,preventScrollReset:Q==null?void 0:Q.preventScrollReset}),replace:(A,V,Q)=>n.navigate(A,{replace:!0,state:V,preventScrollReset:Q==null?void 0:Q.preventScrollReset})}),[n]),R=n.basename||"/",P=D.useMemo(()=>({router:n,navigator:g,static:!1,basename:R}),[n,g,R]);return D.createElement(D.Fragment,null,D.createElement(jd.Provider,{value:P},D.createElement(sR.Provider,{value:i},D.createElement(uN.Provider,{value:w.current},D.createElement(lN.Provider,{value:l},D.createElement(ZD,{basename:R,location:i.location,navigationType:i.historyAction,navigator:g},i.initialized?D.createElement(mN,{routes:n.routes,state:i}):e))))),null)}function mN(t){let{routes:e,state:n}=t;return BD(e,void 0,n)}const gN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rn=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=tN(e,iN),{basename:f}=D.useContext(ya),_,v=!1;if(typeof u=="string"&&yN.test(u)&&(_=u,gN))try{let y=new URL(window.location.href),g=u.startsWith("//")?new URL(y.protocol+u):new URL(u),R=ga(g.pathname,f);g.origin===y.origin&&R!=null?u=R+g.search+g.hash:v=!0}catch{}let w=MD(u,{relative:i}),m=_N(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function p(y){r&&r(y),y.defaultPrevented||m(y)}return D.createElement("a",nu({},d,{href:_||w,onClick:v||s?r:p,ref:n,target:l}))});var wI;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wI||(wI={}));var II;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(II||(II={}));function _N(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Wd(),u=qd(),c=lR(t,{relative:o});return D.useCallback(h=>{if(rN(h,n)){h.preventDefault();let d=r!==void 0?r:ks(u)===ks(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function Jm(t,e){return Jm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Jm(t,e)}function Kd(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Jm(t,e)}var Gd=function(){function t(){this.listeners=[]}var e=t.prototype;return e.subscribe=function(r){var i=this,s=r||function(){};return this.listeners.push(s),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(o){return o!==s}),i.onUnsubscribe()}},e.hasListeners=function(){return this.listeners.length>0},e.onSubscribe=function(){},e.onUnsubscribe=function(){},t}();function ye(){return ye=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ye.apply(this,arguments)}var hR=typeof window>"u";function jt(){}function vN(t,e){return typeof t=="function"?t(e):t}function wN(t){return typeof t=="number"&&t>=0&&t!==1/0}function Kh(t){return Array.isArray(t)?t:[t]}function IN(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Cp(t,e,n){return Hd(t)?typeof e=="function"?ye({},n,{queryKey:t,queryFn:e}):ye({},e,{queryKey:t}):t}function ii(t,e,n){return Hd(t)?[ye({},e,{queryKey:t}),n]:[t||{},e]}function EN(t,e){if(t===!0&&e===!0||t==null&&e==null)return"all";if(t===!1&&e===!1)return"none";var n=t??!e;return n?"active":"inactive"}function EI(t,e){var n=t.active,r=t.exact,i=t.fetching,s=t.inactive,o=t.predicate,a=t.queryKey,l=t.stale;if(Hd(a)){if(r){if(e.queryHash!==zy(a,e.options))return!1}else if(!Gh(e.queryKey,a))return!1}var u=EN(n,s);if(u==="none")return!1;if(u!=="all"){var c=e.isActive();if(u==="active"&&!c||u==="inactive"&&c)return!1}return!(typeof l=="boolean"&&e.isStale()!==l||typeof i=="boolean"&&e.isFetching()!==i||o&&!o(e))}function TI(t,e){var n=t.exact,r=t.fetching,i=t.predicate,s=t.mutationKey;if(Hd(s)){if(!e.options.mutationKey)return!1;if(n){if(hs(e.options.mutationKey)!==hs(s))return!1}else if(!Gh(e.options.mutationKey,s))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||i&&!i(e))}function zy(t,e){var n=(e==null?void 0:e.queryKeyHashFn)||hs;return n(t)}function hs(t){var e=Kh(t);return TN(e)}function TN(t){return JSON.stringify(t,function(e,n){return Xm(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function Gh(t,e){return dR(Kh(t),Kh(e))}function dR(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(function(n){return!dR(t[n],e[n])}):!1}function fR(t,e){if(t===e)return t;var n=Array.isArray(t)&&Array.isArray(e);if(n||Xm(t)&&Xm(e)){for(var r=n?t.length:Object.keys(t).length,i=n?e:Object.keys(e),s=i.length,o=n?[]:{},a=0,l=0;l<s;l++){var u=n?l:i[l];o[u]=fR(t[u],e[u]),o[u]===t[u]&&a++}return r===s&&a===r?t:o}return e}function Xm(t){if(!SI(t))return!1;var e=t.constructor;if(typeof e>"u")return!0;var n=e.prototype;return!(!SI(n)||!n.hasOwnProperty("isPrototypeOf"))}function SI(t){return Object.prototype.toString.call(t)==="[object Object]"}function Hd(t){return typeof t=="string"||Array.isArray(t)}function SN(t){return new Promise(function(e){setTimeout(e,t)})}function RI(t){Promise.resolve().then(t).catch(function(e){return setTimeout(function(){throw e})})}function pR(){if(typeof AbortController=="function")return new AbortController}var RN=function(t){Kd(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!hR&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("visibilitychange",o,!1),window.addEventListener("focus",o,!1),function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("focus",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setFocused(a):o.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},e}(Gd),ih=new RN,AN=function(t){Kd(e,t);function e(){var r;return r=t.call(this)||this,r.setup=function(i){var s;if(!hR&&((s=window)!=null&&s.addEventListener)){var o=function(){return i()};return window.addEventListener("online",o,!1),window.addEventListener("offline",o,!1),function(){window.removeEventListener("online",o),window.removeEventListener("offline",o)}}},r}var n=e.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var s,o=this;this.setup=i,(s=this.cleanup)==null||s.call(this),this.cleanup=i(function(a){typeof a=="boolean"?o.setOnline(a):o.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},e}(Gd),sh=new AN;function PN(t){return Math.min(1e3*Math.pow(2,t),3e4)}function Hh(t){return typeof(t==null?void 0:t.cancel)=="function"}var mR=function(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent};function kp(t){return t instanceof mR}var gR=function(e){var n=this,r=!1,i,s,o,a;this.abort=e.abort,this.cancel=function(d){return i==null?void 0:i(d)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return s==null?void 0:s()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(d,f){o=d,a=f});var l=function(f){n.isResolved||(n.isResolved=!0,e.onSuccess==null||e.onSuccess(f),s==null||s(),o(f))},u=function(f){n.isResolved||(n.isResolved=!0,e.onError==null||e.onError(f),s==null||s(),a(f))},c=function(){return new Promise(function(f){s=f,n.isPaused=!0,e.onPause==null||e.onPause()}).then(function(){s=void 0,n.isPaused=!1,e.onContinue==null||e.onContinue()})},h=function d(){if(!n.isResolved){var f;try{f=e.fn()}catch(_){f=Promise.reject(_)}i=function(v){if(!n.isResolved&&(u(new mR(v)),n.abort==null||n.abort(),Hh(f)))try{f.cancel()}catch{}},n.isTransportCancelable=Hh(f),Promise.resolve(f).then(l).catch(function(_){var v,w;if(!n.isResolved){var m=(v=e.retry)!=null?v:3,p=(w=e.retryDelay)!=null?w:PN,y=typeof p=="function"?p(n.failureCount,_):p,g=m===!0||typeof m=="number"&&n.failureCount<m||typeof m=="function"&&m(n.failureCount,_);if(r||!g){u(_);return}n.failureCount++,e.onFail==null||e.onFail(n.failureCount,_),SN(y).then(function(){if(!ih.isFocused()||!sh.isOnline())return c()}).then(function(){r?u(_):d()})}})}};h()},CN=function(){function t(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var e=t.prototype;return e.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},e.schedule=function(r){var i=this;this.transactions?this.queue.push(r):RI(function(){i.notifyFn(r)})},e.batchCalls=function(r){var i=this;return function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];i.schedule(function(){r.apply(void 0,o)})}},e.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&RI(function(){r.batchNotifyFn(function(){i.forEach(function(s){r.notifyFn(s)})})})},e.setNotifyFunction=function(r){this.notifyFn=r},e.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},t}(),Tt=new CN,yR=console;function _R(){return yR}function kN(t){yR=t}var xN=function(){function t(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var e=t.prototype;return e.setOptions=function(r){var i;this.options=ye({},this.defaultOptions,r),this.meta=r==null?void 0:r.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},e.setDefaultOptions=function(r){this.defaultOptions=r},e.scheduleGc=function(){var r=this;this.clearGcTimeout(),wN(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},e.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},e.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},e.setData=function(r,i){var s,o,a=this.state.data,l=vN(r,a);return(s=(o=this.options).isDataEqual)!=null&&s.call(o,a,l)?l=a:this.options.structuralSharing!==!1&&(l=fR(a,l)),this.dispatch({data:l,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt}),l},e.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},e.cancel=function(r){var i,s=this.promise;return(i=this.retryer)==null||i.cancel(r),s?s.then(jt).catch(jt):Promise.resolve()},e.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},e.reset=function(){this.destroy(),this.setState(this.initialState)},e.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},e.isFetching=function(){return this.state.isFetching},e.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},e.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!IN(this.state.dataUpdatedAt,r)},e.onFocus=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.onOnline=function(){var r,i=this.observers.find(function(s){return s.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},e.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},e.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},e.getObserversCount=function(){return this.observers.length},e.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},e.fetch=function(r,i){var s=this,o,a,l;if(this.state.isFetching){if(this.state.dataUpdatedAt&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(this.promise){var u;return(u=this.retryer)==null||u.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var c=this.observers.find(function(p){return p.options.queryFn});c&&this.setOptions(c.options)}var h=Kh(this.queryKey),d=pR(),f={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(f,"signal",{enumerable:!0,get:function(){if(d)return s.abortSignalConsumed=!0,d.signal}});var _=function(){return s.options.queryFn?(s.abortSignalConsumed=!1,s.options.queryFn(f)):Promise.reject("Missing queryFn")},v={fetchOptions:i,options:this.options,queryKey:h,state:this.state,fetchFn:_,meta:this.meta};if((o=this.options.behavior)!=null&&o.onFetch){var w;(w=this.options.behavior)==null||w.onFetch(v)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((a=v.fetchOptions)==null?void 0:a.meta)){var m;this.dispatch({type:"fetch",meta:(m=v.fetchOptions)==null?void 0:m.meta})}return this.retryer=new gR({fn:v.fetchFn,abort:d==null||(l=d.abort)==null?void 0:l.bind(d),onSuccess:function(y){s.setData(y),s.cache.config.onSuccess==null||s.cache.config.onSuccess(y,s),s.cacheTime===0&&s.optionalRemove()},onError:function(y){kp(y)&&y.silent||s.dispatch({type:"error",error:y}),kp(y)||(s.cache.config.onError==null||s.cache.config.onError(y,s),_R().error(y)),s.cacheTime===0&&s.optionalRemove()},onFail:function(){s.dispatch({type:"failed"})},onPause:function(){s.dispatch({type:"pause"})},onContinue:function(){s.dispatch({type:"continue"})},retry:v.options.retry,retryDelay:v.options.retryDelay}),this.promise=this.retryer.promise,this.promise},e.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),Tt.batch(function(){i.observers.forEach(function(s){s.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},e.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,s=typeof r.initialData<"u",o=s?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,a=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:a?o??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:a?"success":"idle"}},e.reducer=function(r,i){var s,o;switch(i.type){case"failed":return ye({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return ye({},r,{isPaused:!0});case"continue":return ye({},r,{isPaused:!1});case"fetch":return ye({},r,{fetchFailureCount:0,fetchMeta:(s=i.meta)!=null?s:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return ye({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=i.dataUpdatedAt)!=null?o:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var a=i.error;return kp(a)&&a.revert&&this.revertState?ye({},this.revertState):ye({},r,{error:a,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return ye({},r,{isInvalidated:!0});case"setState":return ye({},r,i.state);default:return r}},t}(),bN=function(t){Kd(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=e.prototype;return n.build=function(i,s,o){var a,l=s.queryKey,u=(a=s.queryHash)!=null?a:zy(l,s),c=this.get(u);return c||(c=new xN({cache:this,queryKey:l,queryHash:u,options:i.defaultQueryOptions(s),state:o,defaultOptions:i.getQueryDefaults(l),meta:s.meta}),this.add(c)),c},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var s=this.queriesMap[i.queryHash];s&&(i.destroy(),this.queries=this.queries.filter(function(o){return o!==i}),s===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;Tt.batch(function(){i.queries.forEach(function(s){i.remove(s)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,s){var o=ii(i,s),a=o[0];return typeof a.exact>"u"&&(a.exact=!0),this.queries.find(function(l){return EI(a,l)})},n.findAll=function(i,s){var o=ii(i,s),a=o[0];return Object.keys(a).length>0?this.queries.filter(function(l){return EI(a,l)}):this.queries},n.notify=function(i){var s=this;Tt.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){var i=this;Tt.batch(function(){i.queries.forEach(function(s){s.onFocus()})})},n.onOnline=function(){var i=this;Tt.batch(function(){i.queries.forEach(function(s){s.onOnline()})})},e}(Gd),DN=function(){function t(n){this.options=ye({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||NN(),this.meta=n.meta}var e=t.prototype;return e.setState=function(r){this.dispatch({type:"setState",state:r})},e.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},e.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},e.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(jt).catch(jt)):Promise.resolve()},e.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},e.execute=function(){var r=this,i,s=this.state.status==="loading",o=Promise.resolve();return s||(this.dispatch({type:"loading",variables:this.options.variables}),o=o.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(a){a!==r.state.context&&r.dispatch({type:"loading",context:a,variables:r.state.variables})})),o.then(function(){return r.executeMutation()}).then(function(a){i=a,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(a){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(a,r.state.variables,r.state.context,r),_R().error(a),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(a,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,a,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:a}),a})})},e.executeMutation=function(){var r=this,i;return this.retryer=new gR({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},e.dispatch=function(r){var i=this;this.state=ON(this.state,r),Tt.batch(function(){i.observers.forEach(function(s){s.onMutationUpdate(r)}),i.mutationCache.notify(i)})},t}();function NN(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function ON(t,e){switch(e.type){case"failed":return ye({},t,{failureCount:t.failureCount+1});case"pause":return ye({},t,{isPaused:!0});case"continue":return ye({},t,{isPaused:!1});case"loading":return ye({},t,{context:e.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:e.variables});case"success":return ye({},t,{data:e.data,error:null,status:"success",isPaused:!1});case"error":return ye({},t,{data:void 0,error:e.error,failureCount:t.failureCount+1,isPaused:!1,status:"error"});case"setState":return ye({},t,e.state);default:return t}}var VN=function(t){Kd(e,t);function e(r){var i;return i=t.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=e.prototype;return n.build=function(i,s,o){var a=new DN({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(s),state:o,defaultOptions:s.mutationKey?i.getMutationDefaults(s.mutationKey):void 0,meta:s.meta});return this.add(a),a},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(s){return s!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;Tt.batch(function(){i.mutations.forEach(function(s){i.remove(s)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(s){return TI(i,s)})},n.findAll=function(i){return this.mutations.filter(function(s){return TI(i,s)})},n.notify=function(i){var s=this;Tt.batch(function(){s.listeners.forEach(function(o){o(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(s){return s.state.isPaused});return Tt.batch(function(){return i.reduce(function(s,o){return s.then(function(){return o.continue().catch(jt)})},Promise.resolve())})},e}(Gd);function LN(){return{onFetch:function(e){e.fetchFn=function(){var n,r,i,s,o,a,l=(n=e.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,u=(i=e.fetchOptions)==null||(s=i.meta)==null?void 0:s.fetchMore,c=u==null?void 0:u.pageParam,h=(u==null?void 0:u.direction)==="forward",d=(u==null?void 0:u.direction)==="backward",f=((o=e.state.data)==null?void 0:o.pages)||[],_=((a=e.state.data)==null?void 0:a.pageParams)||[],v=pR(),w=v==null?void 0:v.signal,m=_,p=!1,y=e.options.queryFn||function(){return Promise.reject("Missing queryFn")},g=function(ut,ge,st,Ut){return m=Ut?[ge].concat(m):[].concat(m,[ge]),Ut?[st].concat(ut):[].concat(ut,[st])},R=function(ut,ge,st,Ut){if(p)return Promise.reject("Cancelled");if(typeof st>"u"&&!ge&&ut.length)return Promise.resolve(ut);var L={queryKey:e.queryKey,signal:w,pageParam:st,meta:e.meta},z=y(L),J=Promise.resolve(z).then(function(Ie){return g(ut,st,Ie,Ut)});if(Hh(z)){var pe=J;pe.cancel=z.cancel}return J},P;if(!f.length)P=R([]);else if(h){var A=typeof c<"u",V=A?c:AI(e.options,f);P=R(f,A,V)}else if(d){var Q=typeof c<"u",G=Q?c:MN(e.options,f);P=R(f,Q,G,!0)}else(function(){m=[];var Te=typeof e.options.getNextPageParam>"u",ut=l&&f[0]?l(f[0],0,f):!0;P=ut?R([],Te,_[0]):Promise.resolve(g([],_[0],f[0]));for(var ge=function(L){P=P.then(function(z){var J=l&&f[L]?l(f[L],L,f):!0;if(J){var pe=Te?_[L]:AI(e.options,z);return R(z,Te,pe)}return Promise.resolve(g(z,_[L],f[L]))})},st=1;st<f.length;st++)ge(st)})();var me=P.then(function(Te){return{pages:Te,pageParams:m}}),vt=me;return vt.cancel=function(){p=!0,v==null||v.abort(),Hh(P)&&P.cancel()},me}}}}function AI(t,e){return t.getNextPageParam==null?void 0:t.getNextPageParam(e[e.length-1],e)}function MN(t,e){return t.getPreviousPageParam==null?void 0:t.getPreviousPageParam(e[0],e)}var FN=function(){function t(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new bN,this.mutationCache=n.mutationCache||new VN,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var e=t.prototype;return e.mount=function(){var r=this;this.unsubscribeFocus=ih.subscribe(function(){ih.isFocused()&&sh.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=sh.subscribe(function(){ih.isFocused()&&sh.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},e.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},e.isFetching=function(r,i){var s=ii(r,i),o=s[0];return o.fetching=!0,this.queryCache.findAll(o).length},e.isMutating=function(r){return this.mutationCache.findAll(ye({},r,{fetching:!0})).length},e.getQueryData=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state.data},e.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var s=i.queryKey,o=i.state,a=o.data;return[s,a]})},e.setQueryData=function(r,i,s){var o=Cp(r),a=this.defaultQueryOptions(o);return this.queryCache.build(this,a).setData(i,s)},e.setQueriesData=function(r,i,s){var o=this;return Tt.batch(function(){return o.getQueryCache().findAll(r).map(function(a){var l=a.queryKey;return[l,o.setQueryData(l,i,s)]})})},e.getQueryState=function(r,i){var s;return(s=this.queryCache.find(r,i))==null?void 0:s.state},e.removeQueries=function(r,i){var s=ii(r,i),o=s[0],a=this.queryCache;Tt.batch(function(){a.findAll(o).forEach(function(l){a.remove(l)})})},e.resetQueries=function(r,i,s){var o=this,a=ii(r,i,s),l=a[0],u=a[1],c=this.queryCache,h=ye({},l,{active:!0});return Tt.batch(function(){return c.findAll(l).forEach(function(d){d.reset()}),o.refetchQueries(h,u)})},e.cancelQueries=function(r,i,s){var o=this,a=ii(r,i,s),l=a[0],u=a[1],c=u===void 0?{}:u;typeof c.revert>"u"&&(c.revert=!0);var h=Tt.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.cancel(c)})});return Promise.all(h).then(jt).catch(jt)},e.invalidateQueries=function(r,i,s){var o,a,l,u=this,c=ii(r,i,s),h=c[0],d=c[1],f=ye({},h,{active:(o=(a=h.refetchActive)!=null?a:h.active)!=null?o:!0,inactive:(l=h.refetchInactive)!=null?l:!1});return Tt.batch(function(){return u.queryCache.findAll(h).forEach(function(_){_.invalidate()}),u.refetchQueries(f,d)})},e.refetchQueries=function(r,i,s){var o=this,a=ii(r,i,s),l=a[0],u=a[1],c=Tt.batch(function(){return o.queryCache.findAll(l).map(function(d){return d.fetch(void 0,ye({},u,{meta:{refetchPage:l==null?void 0:l.refetchPage}}))})}),h=Promise.all(c).then(jt);return u!=null&&u.throwOnError||(h=h.catch(jt)),h},e.fetchQuery=function(r,i,s){var o=Cp(r,i,s),a=this.defaultQueryOptions(o);typeof a.retry>"u"&&(a.retry=!1);var l=this.queryCache.build(this,a);return l.isStaleByTime(a.staleTime)?l.fetch(a):Promise.resolve(l.state.data)},e.prefetchQuery=function(r,i,s){return this.fetchQuery(r,i,s).then(jt).catch(jt)},e.fetchInfiniteQuery=function(r,i,s){var o=Cp(r,i,s);return o.behavior=LN(),this.fetchQuery(o)},e.prefetchInfiniteQuery=function(r,i,s){return this.fetchInfiniteQuery(r,i,s).then(jt).catch(jt)},e.cancelMutations=function(){var r=this,i=Tt.batch(function(){return r.mutationCache.getAll().map(function(s){return s.cancel()})});return Promise.all(i).then(jt).catch(jt)},e.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},e.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},e.getQueryCache=function(){return this.queryCache},e.getMutationCache=function(){return this.mutationCache},e.getDefaultOptions=function(){return this.defaultOptions},e.setDefaultOptions=function(r){this.defaultOptions=r},e.setQueryDefaults=function(r,i){var s=this.queryDefaults.find(function(o){return hs(r)===hs(o.queryKey)});s?s.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},e.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(s){return Gh(r,s.queryKey)}))==null?void 0:i.defaultOptions:void 0},e.setMutationDefaults=function(r,i){var s=this.mutationDefaults.find(function(o){return hs(r)===hs(o.mutationKey)});s?s.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},e.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(s){return Gh(r,s.mutationKey)}))==null?void 0:i.defaultOptions:void 0},e.defaultQueryOptions=function(r){if(r!=null&&r._defaulted)return r;var i=ye({},this.defaultOptions.queries,this.getQueryDefaults(r==null?void 0:r.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=zy(i.queryKey,i)),i},e.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},e.defaultMutationOptions=function(r){return r!=null&&r._defaulted?r:ye({},this.defaultOptions.mutations,this.getMutationDefaults(r==null?void 0:r.mutationKey),r,{_defaulted:!0})},e.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},t}(),UN=QS.unstable_batchedUpdates;Tt.setBatchNotifyFunction(UN);var $N=console;kN($N);var PI=ln.createContext(void 0),BN=ln.createContext(!1);function jN(t){return t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=PI),window.ReactQueryClientContext):PI}var zN=function(e){var n=e.client,r=e.contextSharing,i=r===void 0?!1:r,s=e.children;ln.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var o=jN(i);return ln.createElement(BN.Provider,{value:i},ln.createElement(o.Provider,{value:n},s))},vR={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},CI=ln.createContext&&ln.createContext(vR),Ii=function(){return Ii=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ii.apply(this,arguments)},qN=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function wR(t){return t&&t.map(function(e,n){return ln.createElement(e.tag,Ii({key:n},e.attr),wR(e.child))})}function IR(t){return function(e){return ln.createElement(WN,Ii({attr:Ii({},t.attr)},e),wR(t.child))}}function WN(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=qN(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ln.createElement("svg",Ii({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ii(Ii({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&ln.createElement("title",null,s),t.children)};return CI!==void 0?ln.createElement(CI.Consumer,null,function(n){return e(n)}):e(vR)}function KN(t){return IR({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm3.241 10.5v-.001c-.1-2.708-.992-4.904-1.89-6.452a13.919 13.919 0 0 0-1.304-1.88L12 3.11l-.047.059c-.354.425-.828 1.06-1.304 1.88-.898 1.547-1.79 3.743-1.89 6.451Zm-12.728 0h4.745c.1-3.037 1.1-5.49 2.093-7.204.39-.672.78-1.233 1.119-1.673C6.11 3.329 2.746 7 2.513 11.5Zm18.974 0C21.254 7 17.89 3.329 13.53 2.623c.339.44.729 1.001 1.119 1.673.993 1.714 1.993 4.167 2.093 7.204ZM8.787 13c.182 2.478 1.02 4.5 1.862 5.953.382.661.818 1.29 1.304 1.88l.047.057.047-.059c.354-.425.828-1.06 1.304-1.88.842-1.451 1.679-3.471 1.862-5.951Zm-1.504 0H2.552a9.505 9.505 0 0 0 7.918 8.377 15.773 15.773 0 0 1-1.119-1.673C8.413 18.085 7.47 15.807 7.283 13Zm9.434 0c-.186 2.807-1.13 5.085-2.068 6.704-.39.672-.78 1.233-1.118 1.673A9.506 9.506 0 0 0 21.447 13Z"}}]})(t)}function GN(t){return IR({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.716 1.329a1.341 1.341 0 0 1 2.109 1.55L15.147 9h4.161c1.623 0 2.372 2.016 1.143 3.075L8.102 22.721a1.148 1.148 0 0 1-1.81-1.317L8.996 15H4.674c-1.619 0-2.37-2.008-1.148-3.07l12.19-10.6Zm.452 1.595L4.51 13.061a.25.25 0 0 0 .164.439h5.45a.749.749 0 0 1 .692 1.041l-2.559 6.066 11.215-9.668a.25.25 0 0 0-.164-.439H14a.75.75 0 0 1-.687-1.05Z"}}]})(t)}const HN=({modalHandler:t})=>C.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-20",children:C.jsxs("div",{className:"bg-white text-gray-800 rounded-lg flex flex-col gap-1 items-center px-[20px] w-[328px] h-[226px] font-semibold",children:[C.jsx(rn,{to:"/admin",children:C.jsx("span",{className:"text-gray-500 rounded-lg text-xs cursor-pointer",children:"❋"})}),C.jsx("span",{className:"text-[19px] font-semibold -mt-2 mb-2",children:"infomation"}),C.jsx("span",{className:"text-sm",children:"📩 → gim.goya@gmail.com"}),C.jsx("span",{className:"text-sm",children:"📞 → +82 1043312680"}),C.jsx("span",{className:"text-sm",children:C.jsx("a",{href:"https://github.com/Goyka",children:"⚙️ → github"})}),C.jsx("button",{className:"bg-slate-500 w-[63px] h-[31px] text-white rounded-lg px-1 text-sm mt-3 cursor-pointer",onClick:()=>t(),children:"close"})]})}),QN=()=>{const t=Wd(),[e,n]=D.useState(!1),r=()=>{D.startTransition(()=>{n(!e)})};return C.jsxs("div",{className:"flex px-9 py-3 max-mobile:p-3 justify-between items-center text-4xl",children:[C.jsx("span",{className:"[100%] cursor-pointer",onClick:()=>{t("/")},children:C.jsx(GN,{alt:"logo"})}),C.jsx("span",{className:"[100%] cursor-pointer",onClick:()=>r(),children:C.jsx(KN,{alt:"menu"})}),e===!1?C.jsx(C.Fragment,{}):C.jsx(C.Fragment,{children:C.jsx(HN,{modalHandler:r})})]})};function YN(){return C.jsxs("div",{className:"flex-col w-[100vw] h-[100vh] items-center justify-center fixed",children:[C.jsx("div",{className:"h-[7vh] w-[100%] my-2 px-3 relative z-10",children:C.jsx(QN,{})}),C.jsx("div",{className:"h-[40vh] px-2 fixed",children:C.jsx(XD,{})})]})}var kI={};/**
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
 */const ER=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},JN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},TR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ER(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new XN;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZN=function(t){const e=ER(t);return TR.encodeByteArray(e,!0)},Qh=function(t){return ZN(t).replace(/\./g,"")},SR=function(t){try{return TR.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Yh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eO(n)||(t[n]=Yh(t[n],e[n]));return t}function eO(t){return t!=="__proto__"}/**
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
 */function tO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nO=()=>tO().__FIREBASE_DEFAULTS__,rO=()=>{if(typeof process>"u"||typeof kI>"u")return;const t=kI.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&SR(t[1]);return e&&JSON.parse(e)},Qd=()=>{try{return nO()||rO()||iO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sO=t=>{var e,n;return(n=(e=Qd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RR=t=>{const e=sO(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},AR=()=>{var t;return(t=Qd())===null||t===void 0?void 0:t.config},oO=t=>{var e;return(e=Qd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class aO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function PR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Qh(JSON.stringify(n)),Qh(JSON.stringify(o)),a].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function qy(){var t;const e=(t=Qd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uO(){return typeof self=="object"&&self.self===self}function CR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kR(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cO(){return!qy()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ru(){try{return typeof indexedDB=="object"}catch{return!1}}function hO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const dO="FirebaseError";class Vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dO,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ws.prototype.create)}}class Ws{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vt(i,a,r)}}function fO(t,e){return t.replace(pO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pO=/\{\$([^}]+)}/g;/**
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
 */function xI(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function mO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zm(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bI(s)&&bI(o)){if(!Zm(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bI(t){return t!==null&&typeof t=="object"}/**
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
 */function _a(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xR(t,e){const n=new gO(t,e);return n.subscribe.bind(n)}class gO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xp),i.error===void 0&&(i.error=xp),i.complete===void 0&&(i.complete=xp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xp(){}/**
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
 */function Y(t){return t&&t._delegate?t._delegate:t}class Gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const es="[DEFAULT]";/**
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
 */class _O{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wO(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vO(t){return t===es?void 0:t}function wO(t){return t.instantiationMode==="EAGER"}/**
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
 */class IO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _O(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ky=[];var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const bR={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},EO=se.INFO,TO={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},SO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yd{constructor(e){this.name=e,this._logLevel=EO,this._logHandler=SO,this._userLogHandler=null,Ky.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}function RO(t){Ky.forEach(e=>{e.setLogLevel(t)})}function AO(t,e){for(const n of Ky){let r=null;e&&e.level&&(r=bR[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:se[s].toLowerCase(),message:a,args:o,type:i.name})}}}const PO=(t,e)=>e.some(n=>t instanceof n);let DI,NI;function CO(){return DI||(DI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kO(){return NI||(NI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DR=new WeakMap,eg=new WeakMap,NR=new WeakMap,bp=new WeakMap,Gy=new WeakMap;function xO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ei(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&DR.set(n,t)}).catch(()=>{}),Gy.set(e,t),e}function bO(t){if(eg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});eg.set(t,e)}let tg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||NR.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ei(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DO(t){tg=t(tg)}function NO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dp(this),e,...n);return NR.set(r,e.sort?e.sort():[e]),Ei(r)}:kO().includes(t)?function(...e){return t.apply(Dp(this),e),Ei(DR.get(this))}:function(...e){return Ei(t.apply(Dp(this),e))}}function OO(t){return typeof t=="function"?NO(t):(t instanceof IDBTransaction&&bO(t),PO(t,CO())?new Proxy(t,tg):t)}function Ei(t){if(t instanceof IDBRequest)return xO(t);if(bp.has(t))return bp.get(t);const e=OO(t);return e!==t&&(bp.set(t,e),Gy.set(e,t)),e}const Dp=t=>Gy.get(t);function VO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ei(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ei(o.result),l.oldVersion,l.newVersion,Ei(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const LO=["get","getKey","getAll","getAllKeys","count"],MO=["put","add","delete","clear"],Np=new Map;function OI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Np.get(e))return Np.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Np.set(e,s),s}DO(t=>({...t,get:(e,n,r)=>OI(e,n)||t.get(e,n,r),has:(e,n)=>!!OI(e,n)||t.has(e,n)}));/**
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
 */class FO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ng="@firebase/app",VI="0.9.23";/**
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
 */const xs=new Yd("@firebase/app"),$O="@firebase/app-compat",BO="@firebase/analytics-compat",jO="@firebase/analytics",zO="@firebase/app-check-compat",qO="@firebase/app-check",WO="@firebase/auth",KO="@firebase/auth-compat",GO="@firebase/database",HO="@firebase/database-compat",QO="@firebase/functions",YO="@firebase/functions-compat",JO="@firebase/installations",XO="@firebase/installations-compat",ZO="@firebase/messaging",eV="@firebase/messaging-compat",tV="@firebase/performance",nV="@firebase/performance-compat",rV="@firebase/remote-config",iV="@firebase/remote-config-compat",sV="@firebase/storage",oV="@firebase/storage-compat",aV="@firebase/firestore",lV="@firebase/firestore-compat",uV="firebase",cV="10.6.0";/**
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
 */const Ai="[DEFAULT]",hV={[ng]:"fire-core",[$O]:"fire-core-compat",[jO]:"fire-analytics",[BO]:"fire-analytics-compat",[qO]:"fire-app-check",[zO]:"fire-app-check-compat",[WO]:"fire-auth",[KO]:"fire-auth-compat",[GO]:"fire-rtdb",[HO]:"fire-rtdb-compat",[QO]:"fire-fn",[YO]:"fire-fn-compat",[JO]:"fire-iid",[XO]:"fire-iid-compat",[ZO]:"fire-fcm",[eV]:"fire-fcm-compat",[tV]:"fire-perf",[nV]:"fire-perf-compat",[rV]:"fire-rc",[iV]:"fire-rc-compat",[sV]:"fire-gcs",[oV]:"fire-gcs-compat",[aV]:"fire-fst",[lV]:"fire-fst-compat","fire-js":"fire-js",[uV]:"fire-js-all"};/**
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
 */const Pi=new Map,iu=new Map;function Jh(t,e){try{t.container.addComponent(e)}catch(n){xs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function OR(t,e){t.container.addOrOverwriteComponent(e)}function Mr(t){const e=t.name;if(iu.has(e))return xs.debug(`There were multiple attempts to register component ${e}.`),!1;iu.set(e,t);for(const n of Pi.values())Jh(n,t);return!0}function Jd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dV(t,e,n=Ai){Jd(t,e).clearInstance(n)}function fV(){iu.clear()}/**
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
 */const pV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},br=new Ws("app","Firebase",pV);/**
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
 */let mV=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}};/**
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
 */const zr=cV;function Xd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw br.create("bad-app-name",{appName:String(i)});if(n||(n=AR()),!n)throw br.create("no-options");const s=Pi.get(i);if(s){if(Zm(n,s.options)&&Zm(r,s.config))return s;throw br.create("duplicate-app",{appName:i})}const o=new IO(i);for(const l of iu.values())o.addComponent(l);const a=new mV(n,r,o);return Pi.set(i,a),a}function Hy(t=Ai){const e=Pi.get(t);if(!e&&t===Ai&&AR())return Xd();if(!e)throw br.create("no-app",{appName:t});return e}function gV(){return Array.from(Pi.values())}async function VR(t){const e=t.name;Pi.has(e)&&(Pi.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function _n(t,e,n){var r;let i=(r=hV[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xs.warn(a.join(" "));return}Mr(new Gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function LR(t,e){if(t!==null&&typeof t!="function")throw br.create("invalid-log-argument");AO(t,e)}function MR(t){RO(t)}/**
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
 */const yV="firebase-heartbeat-database",_V=1,su="firebase-heartbeat-store";let Op=null;function FR(){return Op||(Op=VO(yV,_V,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(su)}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),Op}async function vV(t){try{return await(await FR()).transaction(su).objectStore(su).get(UR(t))}catch(e){if(e instanceof Vt)xs.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xs.warn(n.message)}}}async function LI(t,e){try{const r=(await FR()).transaction(su,"readwrite");await r.objectStore(su).put(e,UR(t)),await r.done}catch(n){if(n instanceof Vt)xs.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xs.warn(r.message)}}}function UR(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wV=1024,IV=30*24*60*60*1e3;class EV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=MI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=IV}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=MI(),{heartbeatsToSend:r,unsentEntries:i}=TV(this._heartbeatsCache.heartbeats),s=Qh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function MI(){return new Date().toISOString().substring(0,10)}function TV(t,e=wV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),FI(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),FI(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ru()?hO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vV(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return LI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return LI(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function FI(t){return Qh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RV(t){Mr(new Gn("platform-logger",e=>new FO(e),"PRIVATE")),Mr(new Gn("heartbeat",e=>new EV(e),"PRIVATE")),_n(ng,VI,t),_n(ng,VI,"esm2017"),_n("fire-js","")}RV("");const AV=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Vt,SDK_VERSION:zr,_DEFAULT_ENTRY_NAME:Ai,_addComponent:Jh,_addOrOverwriteComponent:OR,_apps:Pi,_clearComponents:fV,_components:iu,_getProvider:Jd,_registerComponent:Mr,_removeServiceInstance:dV,deleteApp:VR,getApp:Hy,getApps:gV,initializeApp:Xd,onLog:LR,registerVersion:_n,setLogLevel:MR},Symbol.toStringTag,{value:"Module"}));var PV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Qy=Qy||{},ee=PV||self;function Zd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function CV(t){return Object.prototype.hasOwnProperty.call(t,Vp)&&t[Vp]||(t[Vp]=++kV)}var Vp="closure_uid_"+(1e9*Math.random()>>>0),kV=0;function xV(t,e,n){return t.call.apply(t.bind,arguments)}function bV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Lt=xV:Lt=bV,Lt.apply(null,arguments)}function Oc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function gt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Bi(){this.s=this.s,this.o=this.o}var DV=0;Bi.prototype.s=!1;Bi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),DV!=0)&&CV(this)};Bi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $R=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function UI(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var NV=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",()=>{},e),ee.removeEventListener("test",()=>{},e)}catch{}return t}();function ou(t){return/^[\s\xa0]*$/.test(t)}function ef(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function tr(t){return ef().indexOf(t)!=-1}function Jy(t){return Jy[" "](t),t}Jy[" "]=function(){};function OV(t,e){var n=AL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var VV=tr("Opera"),Xo=tr("Trident")||tr("MSIE"),BR=tr("Edge"),rg=BR||Xo,jR=tr("Gecko")&&!(ef().toLowerCase().indexOf("webkit")!=-1&&!tr("Edge"))&&!(tr("Trident")||tr("MSIE"))&&!tr("Edge"),LV=ef().toLowerCase().indexOf("webkit")!=-1&&!tr("Edge");function zR(){var t=ee.document;return t?t.documentMode:void 0}var ig;e:{var Lp="",Mp=function(){var t=ef();if(jR)return/rv:([^\);]+)(\)|;)/.exec(t);if(BR)return/Edge\/([\d\.]+)/.exec(t);if(Xo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(LV)return/WebKit\/(\S+)/.exec(t);if(VV)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mp&&(Lp=Mp?Mp[1]:""),Xo){var Fp=zR();if(Fp!=null&&Fp>parseFloat(Lp)){ig=String(Fp);break e}}ig=Lp}var sg;if(ee.document&&Xo){var $I=zR();sg=$I||parseInt(ig,10)||void 0}else sg=void 0;var MV=sg;function au(t,e){if(Mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(jR){e:{try{Jy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FV[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&au.$.h.call(this)}}gt(au,Mt);var FV={2:"touch",3:"pen",4:"mouse"};au.prototype.h=function(){au.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ju="closure_listenable_"+(1e6*Math.random()|0),UV=0;function $V(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++UV,this.fa=this.ia=!1}function tf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Xy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function BV(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function qR(t){const e={};for(const n in t)e[n]=t[n];return e}const BI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function WR(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<BI.length;s++)n=BI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function nf(t){this.src=t,this.g={},this.h=0}nf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ag(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new $V(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function og(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=$R(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(tf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ag(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Zy="closure_lm_"+(1e6*Math.random()|0),Up={};function KR(t,e,n,r,i){if(r&&r.once)return HR(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)KR(t,e[s],n,r,i);return null}return n=n_(n),t&&t[ju]?t.O(e,n,Bu(r)?!!r.capture:!!r,i):GR(t,e,n,!1,r,i)}function GR(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Bu(i)?!!i.capture:!!i,a=t_(t);if(a||(t[Zy]=a=new nf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=jV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)NV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(YR(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jV(){function t(n){return e.call(t.src,t.listener,n)}const e=zV;return t}function HR(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)HR(t,e[s],n,r,i);return null}return n=n_(n),t&&t[ju]?t.P(e,n,Bu(r)?!!r.capture:!!r,i):GR(t,e,n,!0,r,i)}function QR(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)QR(t,e[s],n,r,i);else r=Bu(r)?!!r.capture:!!r,n=n_(n),t&&t[ju]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ag(s,n,r,i),-1<n&&(tf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=t_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ag(e,n,r,i)),(n=-1<t?e[t]:null)&&e_(n))}function e_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ju])og(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(YR(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=t_(e))?(og(n,t),n.h==0&&(n.src=null,e[Zy]=null)):tf(t)}}}function YR(t){return t in Up?Up[t]:Up[t]="on"+t}function zV(t,e){if(t.fa)t=!0;else{e=new au(e,this);var n=t.listener,r=t.la||t.src;t.ia&&e_(t),t=n.call(r,e)}return t}function t_(t){return t=t[Zy],t instanceof nf?t:null}var $p="__closure_events_fn_"+(1e9*Math.random()>>>0);function n_(t){return typeof t=="function"?t:(t[$p]||(t[$p]=function(e){return t.handleEvent(e)}),t[$p])}function mt(){Bi.call(this),this.i=new nf(this),this.S=this,this.J=null}gt(mt,Bi);mt.prototype[ju]=!0;mt.prototype.removeEventListener=function(t,e,n,r){QR(this,t,e,n,r)};function Pt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Mt(e,t);else if(e instanceof Mt)e.target=e.target||t;else{var i=e;e=new Mt(r,t),WR(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Vc(o,r,!0,e)&&i}if(o=e.g=t,i=Vc(o,r,!0,e)&&i,i=Vc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Vc(o,r,!1,e)&&i}mt.prototype.N=function(){if(mt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)tf(n[r]);delete t.g[e],t.h--}}this.J=null};mt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};mt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Vc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&og(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var r_=ee.JSON.stringify;class qV{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function WV(){var t=i_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class KV{constructor(){this.h=this.g=null}add(e,n){const r=JR.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var JR=new qV(()=>new GV,t=>t.reset());class GV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HV(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function QV(t){ee.setTimeout(()=>{throw t},0)}let lu,uu=!1,i_=new KV,XR=()=>{const t=ee.Promise.resolve(void 0);lu=()=>{t.then(YV)}};var YV=()=>{for(var t;t=WV();){try{t.h.call(t.g)}catch(n){QV(n)}var e=JR;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}uu=!1};function rf(t,e){mt.call(this),this.h=t||1,this.g=e||ee,this.j=Lt(this.qb,this),this.l=Date.now()}gt(rf,mt);$=rf.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Pt(this,"tick"),this.ga&&(s_(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function s_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){rf.$.N.call(this),s_(this),delete this.g};function o_(t,e,n){if(typeof t=="function")n&&(t=Lt(t,n));else if(t&&typeof t.handleEvent=="function")t=Lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function ZR(t){t.g=o_(()=>{t.g=null,t.i&&(t.i=!1,ZR(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JV extends Bi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ZR(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cu(t){Bi.call(this),this.h=t,this.g={}}gt(cu,Bi);var jI=[];function eA(t,e,n,r){Array.isArray(n)||(n&&(jI[0]=n.toString()),n=jI);for(var i=0;i<n.length;i++){var s=KR(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function tA(t){Xy(t.g,function(e,n){this.g.hasOwnProperty(n)&&e_(e)},t),t.g={}}cu.prototype.N=function(){cu.$.N.call(this),tA(this)};cu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sf(){this.g=!0}sf.prototype.Ea=function(){this.g=!1};function XV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ZV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ko(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tL(t,n)+(r?" "+r:"")})}function eL(t,e){t.info(function(){return"TIMEOUT: "+e})}sf.prototype.info=function(){};function tL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return r_(n)}catch{return e}}var Ks={},zI=null;function of(){return zI=zI||new mt}Ks.Ta="serverreachability";function nA(t){Mt.call(this,Ks.Ta,t)}gt(nA,Mt);function hu(t){const e=of();Pt(e,new nA(e))}Ks.STAT_EVENT="statevent";function rA(t,e){Mt.call(this,Ks.STAT_EVENT,t),this.stat=e}gt(rA,Mt);function Kt(t){const e=of();Pt(e,new rA(e,t))}Ks.Ua="timingevent";function iA(t,e){Mt.call(this,Ks.Ua,t),this.size=e}gt(iA,Mt);function zu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var af={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function a_(){}a_.prototype.h=null;function qI(t){return t.h||(t.h=t.i())}function oA(){}var qu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function l_(){Mt.call(this,"d")}gt(l_,Mt);function u_(){Mt.call(this,"c")}gt(u_,Mt);var lg;function lf(){}gt(lf,a_);lf.prototype.g=function(){return new XMLHttpRequest};lf.prototype.i=function(){return{}};lg=new lf;function Wu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new cu(this),this.P=nL,t=rg?125:void 0,this.V=new rf(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new aA}function aA(){this.i=null,this.g="",this.h=!1}var nL=45e3,ug={},Xh={};$=Wu.prototype;$.setTimeout=function(t){this.P=t};function cg(t,e,n){t.L=1,t.v=cf(Fr(e)),t.s=n,t.S=!0,lA(t,null)}function lA(t,e){t.G=Date.now(),Ku(t),t.A=Fr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),gA(n.i,"t",r),t.C=0,n=t.l.J,t.h=new aA,t.g=MA(t.l,n?e:null,!t.s),0<t.O&&(t.M=new JV(Lt(t.Pa,t,t.g),t.O)),eA(t.U,t.g,"readystatechange",t.nb),e=t.I?qR(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),hu(),XV(t.j,t.u,t.A,t.m,t.W,t.s)}$.nb=function(t){t=t.target;const e=this.M;e&&or(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const c=or(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||rg||this.g&&(this.h.h||this.g.ja()||HI(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?hu(3):hu(2)),uf(this);var n=this.g.da();this.ca=n;t:if(uA(this)){var r=HI(this.g);t="";var i=r.length,s=or(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ds(this),Cl(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,ZV(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ou(a)){var u=a;break t}}u=null}if(n=u)ko(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hg(this,n);else{this.i=!1,this.o=3,Kt(12),ds(this),Cl(this);break e}}this.S?(cA(this,c,o),rg&&this.i&&c==3&&(eA(this.U,this.V,"tick",this.mb),this.V.start())):(ko(this.j,this.m,o,null),hg(this,o)),c==4&&ds(this),this.i&&!this.J&&(c==4?NA(this.l,this):(this.i=!1,Ku(this)))}else TL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Kt(12)):(this.o=0,Kt(13)),ds(this),Cl(this)}}}catch{}finally{}};function uA(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function cA(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=rL(t,n),i==Xh){e==4&&(t.o=4,Kt(14),r=!1),ko(t.j,t.m,null,"[Incomplete Response]");break}else if(i==ug){t.o=4,Kt(15),ko(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ko(t.j,t.m,i,null),hg(t,i);uA(t)&&i!=Xh&&i!=ug&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),m_(e),e.M=!0,Kt(11))):(ko(t.j,t.m,n,"[Invalid Chunked Response]"),ds(t),Cl(t))}$.mb=function(){if(this.g){var t=or(this.g),e=this.g.ja();this.C<e.length&&(uf(this),cA(this,t,e),this.i&&t!=4&&Ku(this))}};function rL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Xh:(n=Number(e.substring(n,r)),isNaN(n)?ug:(r+=1,r+n>e.length?Xh:(e=e.slice(r,r+n),t.C=r+n,e)))}$.cancel=function(){this.J=!0,ds(this)};function Ku(t){t.Y=Date.now()+t.P,hA(t,t.P)}function hA(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=zu(Lt(t.lb,t),e)}function uf(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}$.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(eL(this.j,this.A),this.L!=2&&(hu(),Kt(17)),ds(this),this.o=2,Cl(this)):hA(this,this.Y-t)};function Cl(t){t.l.H==0||t.J||NA(t.l,t)}function ds(t){uf(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,s_(t.V),tA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function hg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||dg(n.i,t))){if(!t.K&&dg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)td(n),ff(n);else break e;p_(n),Kt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=zu(Lt(n.ib,n),6e3));if(1>=vA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else fs(n,11)}else if((t.K||n.g==t)&&td(n),!ou(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(c_(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ke(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=LA(r,r.J?r.pa:null,r.Y),o.K){wA(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(uf(a),Ku(a)),r.g=o}else bA(r);0<n.j.length&&pf(n)}else u[0]!="stop"&&u[0]!="close"||fs(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?fs(n,7):f_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}hu(4)}catch{}}function iL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function sL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function dA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=sL(t),r=iL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var fA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function vs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vs){this.h=t.h,Zh(this,t.j),this.s=t.s,this.g=t.g,ed(this,t.m),this.l=t.l;var e=t.i,n=new du;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),WI(this,n),this.o=t.o}else t&&(e=String(t).match(fA))?(this.h=!1,Zh(this,e[1]||"",!0),this.s=hl(e[2]||""),this.g=hl(e[3]||"",!0),ed(this,e[4]),this.l=hl(e[5]||"",!0),WI(this,e[6]||"",!0),this.o=hl(e[7]||"")):(this.h=!1,this.i=new du(null,this.h))}vs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(dl(e,KI,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(dl(e,KI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(dl(n,n.charAt(0)=="/"?uL:lL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",dl(n,hL)),t.join("")};function Fr(t){return new vs(t)}function Zh(t,e,n){t.j=n?hl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ed(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function WI(t,e,n){e instanceof du?(t.i=e,dL(t.i,t.h)):(n||(e=dl(e,cL)),t.i=new du(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function cf(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function dl(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,aL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function aL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var KI=/[#\/\?@]/g,lL=/[#\?:]/g,uL=/[#\?]/g,cL=/[#\?@]/g,hL=/#/g;function du(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ji(t){t.g||(t.g=new Map,t.h=0,t.i&&oL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=du.prototype;$.add=function(t,e){ji(this),this.i=null,t=va(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function pA(t,e){ji(t),e=va(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function mA(t,e){return ji(t),e=va(t,e),t.g.has(e)}$.forEach=function(t,e){ji(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.ta=function(){ji(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.Z=function(t){ji(this);let e=[];if(typeof t=="string")mA(this,t)&&(e=e.concat(this.g.get(va(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return ji(this),this.i=null,t=va(this,t),mA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function gA(t,e,n){pA(t,e),0<n.length&&(t.i=null,t.g.set(va(t,e),Yy(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function va(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dL(t,e){e&&!t.j&&(ji(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(pA(this,r),gA(this,i,n))},t)),t.j=e}var fL=class{constructor(t,e){this.g=t,this.map=e}};function yA(t){this.l=t||pL,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pL=10;function _A(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vA(t){return t.h?1:t.g?t.g.size:0}function dg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function c_(t,e){t.g?t.g.add(e):t.h=e}function wA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}yA.prototype.cancel=function(){if(this.i=IA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function IA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Yy(t.i)}var mL=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function gL(){this.g=new mL}function yL(t,e,n){const r=n||"";try{dA(t,function(i,s){let o=i;Bu(i)&&(o=r_(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _L(t,e){const n=new sf;if(ee.Image){const r=new Image;r.onload=Oc(Lc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Oc(Lc,n,r,"TestLoadImage: error",!1,e),r.onabort=Oc(Lc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Oc(Lc,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Lc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Gu(t){this.l=t.ec||null,this.j=t.ob||!1}gt(Gu,a_);Gu.prototype.g=function(){return new hf(this.l,this.j)};Gu.prototype.i=function(t){return function(){return t}}({});function hf(t,e){mt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=h_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(hf,mt);var h_=0;$=hf.prototype;$.open=function(t,e){if(this.readyState!=h_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fu(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hu(this)),this.readyState=h_};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fu(this)),this.g&&(this.readyState=3,fu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;EA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function EA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hu(this):fu(this),this.readyState==3&&EA(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Hu(this))};$.Ya=function(t){this.g&&(this.response=t,Hu(this))};$.ka=function(){this.g&&Hu(this)};function Hu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fu(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vL=ee.JSON.parse;function We(t){mt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=TA,this.L=this.M=!1}gt(We,mt);var TA="",wL=/^https?$/i,IL=["POST","PUT"];$=We.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():lg.g(),this.C=this.u?qI(this.u):qI(lg),this.g.onreadystatechange=Lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){GI(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ee.FormData&&t instanceof ee.FormData,!(0<=$R(IL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{AA(this),0<this.B&&((this.L=EL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Lt(this.ua,this)):this.A=o_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){GI(this,s)}};function EL(t){return Xo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Qy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pt(this,"timeout"),this.abort(8))};function GI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,SA(t),df(t)}function SA(t){t.F||(t.F=!0,Pt(t,"complete"),Pt(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pt(this,"complete"),Pt(this,"abort"),df(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),df(this,!0)),We.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?RA(this):this.kb())};$.kb=function(){RA(this)};function RA(t){if(t.h&&typeof Qy<"u"&&(!t.C[1]||or(t)!=4||t.da()!=2)){if(t.v&&or(t)==4)o_(t.La,0,t);else if(Pt(t,"readystatechange"),or(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(fA)[1]||null;!i&&ee.self&&ee.self.location&&(i=ee.self.location.protocol.slice(0,-1)),r=!wL.test(i?i.toLowerCase():"")}n=r}if(n)Pt(t,"complete"),Pt(t,"success");else{t.m=6;try{var s=2<or(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",SA(t)}}finally{df(t)}}}}function df(t,e){if(t.g){AA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Pt(t,"ready");try{n.onreadystatechange=r}catch{}}}function AA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function or(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<or(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vL(e)}};function HI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case TA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function TL(t){const e={};t=(t.g&&2<=or(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ou(t[r]))continue;var n=HV(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}BV(e,function(r){return r.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function PA(t){let e="";return Xy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function d_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=PA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function Ya(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function CA(t){this.Ga=0,this.j=[],this.l=new sf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ya("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ya("baseRetryDelayMs",5e3,t),this.hb=Ya("retryDelaySeedMs",1e4,t),this.eb=Ya("forwardChannelMaxRetries",2,t),this.xa=Ya("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new yA(t&&t.concurrentRequestLimit),this.Ja=new gL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=CA.prototype;$.ra=8;$.H=1;function f_(t){if(kA(t),t.H==3){var e=t.W++,n=Fr(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),Qu(t,n),e=new Wu(t,t.l,e),e.L=2,e.v=cf(Fr(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=MA(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ku(e)}VA(t)}function ff(t){t.g&&(m_(t),t.g.cancel(),t.g=null)}function kA(t){ff(t),t.u&&(ee.clearTimeout(t.u),t.u=null),td(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function pf(t){if(!_A(t.i)&&!t.m){t.m=!0;var e=t.Na;lu||XR(),uu||(lu(),uu=!0),i_.add(e,t),t.C=0}}function SL(t,e){return vA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=zu(Lt(t.Na,t,e),OA(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Wu(this,this.l,t);let s=this.s;if(this.U&&(s?(s=qR(s),WR(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xA(this,i,e),n=Fr(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),Qu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(PA(s)))+"&"+e:this.o&&d_(n,this.o,s)),c_(this.i,i),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),i.aa=!0,cg(i,n,null)):cg(i,n,e),this.H=2}}else this.H==3&&(t?QI(this,t):this.j.length==0||_A(this.i)||QI(this))};function QI(t,e){var n;e?n=e.m:n=t.W++;const r=Fr(t.I);ke(r,"SID",t.K),ke(r,"RID",n),ke(r,"AID",t.V),Qu(t,r),t.o&&t.s&&d_(r,t.o,t.s),n=new Wu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=xA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),c_(t.i,n),cg(n,r,e)}function Qu(t,e){t.na&&Xy(t.na,function(n,r){ke(e,r,n)}),t.h&&dA({},function(n,r){ke(e,r,n)})}function xA(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Lt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{yL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function bA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;lu||XR(),uu||(lu(),uu=!0),i_.add(e,t),t.A=0}}function p_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=zu(Lt(t.Ma,t),OA(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,DA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=zu(Lt(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Kt(10),ff(this),DA(this))};function m_(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function DA(t){t.g=new Wu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Fr(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),Qu(t,e),t.o&&t.s&&d_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=cf(Fr(e)),n.s=null,n.S=!0,lA(n,t)}$.ib=function(){this.v!=null&&(this.v=null,ff(this),p_(this),Kt(19))};function td(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function NA(t,e){var n=null;if(t.g==e){td(t),m_(t),t.g=null;var r=2}else if(dg(t.i,e))n=e.F,wA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=of(),Pt(r,new iA(r,n)),pf(t)}else bA(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&SL(t,e)||r==2&&p_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:fs(t,5);break;case 4:fs(t,10);break;case 3:fs(t,6);break;default:fs(t,2)}}}function OA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function fs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Lt(t.pb,t);n||(n=new vs("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Zh(n,"https"),cf(n)),_L(n.toString(),r)}else Kt(2);t.H=0,t.h&&t.h.za(e),VA(t),kA(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Kt(2)):(this.l.info("Failed to ping google.com"),Kt(1))};function VA(t){if(t.H=0,t.ma=[],t.h){const e=IA(t.i);(e.length!=0||t.j.length!=0)&&(UI(t.ma,e),UI(t.ma,t.j),t.i.i.length=0,Yy(t.j),t.j.length=0),t.h.ya()}}function LA(t,e,n){var r=n instanceof vs?Fr(n):new vs(n);if(r.g!="")e&&(r.g=e+"."+r.g),ed(r,r.m);else{var i=ee.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new vs(null);r&&Zh(s,r),e&&(s.g=e),i&&ed(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ke(r,n,e),ke(r,"VER",t.ra),Qu(t,r),r}function MA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new We(new Gu({ob:!0})):new We(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function FA(){}$=FA.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function nd(){if(Xo&&!(10<=Number(MV)))throw Error("Environmental error: no available transport.")}nd.prototype.g=function(t,e){return new wn(t,e)};function wn(t,e){mt.call(this),this.g=new CA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ou(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ou(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new wa(this)}gt(wn,mt);wn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=LA(t,null,t.Y),pf(t)};wn.prototype.close=function(){f_(this.g)};wn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=r_(t),t=n);e.j.push(new fL(e.fb++,t)),e.H==3&&pf(e)};wn.prototype.N=function(){this.g.h=null,delete this.j,f_(this.g),delete this.g,wn.$.N.call(this)};function UA(t){l_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}gt(UA,l_);function $A(){u_.call(this),this.status=1}gt($A,u_);function wa(t){this.g=t}gt(wa,FA);wa.prototype.Ba=function(){Pt(this.g,"a")};wa.prototype.Aa=function(t){Pt(this.g,new UA(t))};wa.prototype.za=function(t){Pt(this.g,new $A)};wa.prototype.ya=function(){Pt(this.g,"b")};function RL(){this.blockSize=-1}function Hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}gt(Hn,RL);Hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Bp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Hn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Bp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Bp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Bp(this,r),i=0;break}}this.h=i,this.i+=e};Hn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function we(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var AL={};function g_(t){return-128<=t&&128>t?OV(t,function(e){return new we([e|0],0>e?-1:0)}):new we([t|0],0>t?-1:0)}function ar(t){if(isNaN(t)||!isFinite(t))return Mo;if(0>t)return St(ar(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=fg;return new we(e,0)}function BA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return St(BA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ar(Math.pow(e,8)),r=Mo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=ar(Math.pow(e,s)),r=r.R(s).add(ar(o))):(r=r.R(n),r=r.add(ar(o)))}return r}var fg=4294967296,Mo=g_(0),pg=g_(1),YI=g_(16777216);$=we.prototype;$.ea=function(){if(kn(this))return-St(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:fg+r)*e,e*=fg}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Rr(this))return"0";if(kn(this))return"-"+St(this).toString(t);for(var e=ar(Math.pow(t,6)),n=this,r="";;){var i=id(n,e).g;n=rd(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Rr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Rr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kn(t){return t.h==-1}$.X=function(t){return t=rd(this,t),kn(t)?-1:Rr(t)?0:1};function St(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new we(n,~t.h).add(pg)}$.abs=function(){return kn(this)?St(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new we(n,n[n.length-1]&-2147483648?-1:0)};function rd(t,e){return t.add(St(e))}$.R=function(t){if(Rr(this)||Rr(t))return Mo;if(kn(this))return kn(t)?St(this).R(St(t)):St(St(this).R(t));if(kn(t))return St(this.R(St(t)));if(0>this.X(YI)&&0>t.X(YI))return ar(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Mc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Mc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Mc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Mc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new we(n,0)};function Mc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ja(t,e){this.g=t,this.h=e}function id(t,e){if(Rr(e))throw Error("division by zero");if(Rr(t))return new Ja(Mo,Mo);if(kn(t))return e=id(St(t),e),new Ja(St(e.g),St(e.h));if(kn(e))return e=id(t,St(e)),new Ja(St(e.g),e.h);if(30<t.g.length){if(kn(t)||kn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pg,r=e;0>=r.X(t);)n=JI(n),r=JI(r);var i=ro(n,1),s=ro(r,1);for(r=ro(r,2),n=ro(n,2);!Rr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ro(r,1),n=ro(n,1)}return e=rd(t,i.R(e)),new Ja(i,e)}for(i=Mo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ar(n),o=s.R(e);kn(o)||0<o.X(t);)n-=r,s=ar(n),o=s.R(e);Rr(s)&&(s=pg),i=i.add(s),t=rd(t,o)}return new Ja(i,t)}$.gb=function(t){return id(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new we(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new we(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new we(n,this.h^t.h)};function JI(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new we(n,t.h)}function ro(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new we(i,t.h)}nd.prototype.createWebChannel=nd.prototype.g;wn.prototype.send=wn.prototype.u;wn.prototype.open=wn.prototype.m;wn.prototype.close=wn.prototype.close;af.NO_ERROR=0;af.TIMEOUT=8;af.HTTP_ERROR=6;sA.COMPLETE="complete";oA.EventType=qu;qu.OPEN="a";qu.CLOSE="b";qu.ERROR="c";qu.MESSAGE="d";mt.prototype.listen=mt.prototype.O;We.prototype.listenOnce=We.prototype.P;We.prototype.getLastError=We.prototype.Sa;We.prototype.getLastErrorCode=We.prototype.Ia;We.prototype.getStatus=We.prototype.da;We.prototype.getResponseJson=We.prototype.Wa;We.prototype.getResponseText=We.prototype.ja;We.prototype.send=We.prototype.ha;We.prototype.setWithCredentials=We.prototype.Oa;Hn.prototype.digest=Hn.prototype.l;Hn.prototype.reset=Hn.prototype.reset;Hn.prototype.update=Hn.prototype.j;we.prototype.add=we.prototype.add;we.prototype.multiply=we.prototype.R;we.prototype.modulo=we.prototype.gb;we.prototype.compare=we.prototype.X;we.prototype.toNumber=we.prototype.ea;we.prototype.toString=we.prototype.toString;we.prototype.getBits=we.prototype.D;we.fromNumber=ar;we.fromString=BA;var PL=function(){return new nd},CL=function(){return of()},jp=af,kL=sA,xL=Ks,XI={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},bL=Gu,Fc=oA,DL=We,NL=Hn,Fo=we,OL={};const ZI="@firebase/firestore";/**
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
 */let dt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
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
 */let Ia="10.5.2";/**
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
 */const Ci=new Yd("@firebase/firestore");function uo(){return Ci.logLevel}function VL(t){Ci.setLogLevel(t)}function b(t,...e){if(Ci.logLevel<=se.DEBUG){const n=e.map(y_);Ci.debug(`Firestore (${Ia}): ${t}`,...n)}}function Ze(t,...e){if(Ci.logLevel<=se.ERROR){const n=e.map(y_);Ci.error(`Firestore (${Ia}): ${t}`,...n)}}function Qn(t,...e){if(Ci.logLevel<=se.WARN){const n=e.map(y_);Ci.warn(`Firestore (${Ia}): ${t}`,...n)}}function y_(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Ia}) INTERNAL ASSERTION FAILED: `+t;throw Ze(e),new Error(e)}function K(t,e){t||B()}function LL(t,e){t||B()}function U(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Vt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class jA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ML{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class FL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UL{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new jA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new dt(e)}}class $L{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $L(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(K(typeof n.token=="string"),this.R=n.token,new jL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function qL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class zA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Zo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function qA(t){return t+"\0"}/**
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
 */class Ve{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ve(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ve(0,0))}static max(){return new W(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class pu{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends pu{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const WL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends pu{construct(e,n,r){return new Ne(e,n,r)}static isValidIdentifier(e){return WL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(n)}static emptyPath(){return new Ne([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(he.fromString(e))}static fromName(e){return new M(he.fromString(e).popFirst(5))}static empty(){return new M(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new he(e.slice()))}}/**
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
 */class sd{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function mg(t){return t.fields.find(e=>e.kind===2)}function ts(t){return t.fields.filter(e=>e.kind!==2)}sd.UNKNOWN_ID=-1;class oh{constructor(e,n){this.fieldPath=e,this.kind=n}}class mu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new mu(0,In.min())}}function WA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new In(i,M.empty(),e)}function KA(t){return new In(t.readTime,t.key,-1)}class In{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new In(W.min(),M.empty(),-1)}static max(){return new In(W.max(),M.empty(),-1)}}function __(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const GA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==GA)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class mf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new pt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new kl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=v_(r.target.error);this.V.reject(new kl(e,i))}}static open(e,n,r,i){try{return new mf(n,e.transaction(i,r))}catch(s){throw new kl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(b("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new GL(n)}}class jn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,jn.S(Be())===12.2&&Ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return b("SimpleDb","Removing database:",e),ns(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ru())return!1;if(jn.C())return!0;const e=Be(),n=jn.S(e),r=0<n&&n<10,i=jn.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=OL)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(b("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new kl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new x(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new x(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new kl(e,o))},i.onupgradeneeded=s=>{b("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{b("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=mf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),E.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(b("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class KL{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ns(this.k.delete())}}class kl extends x{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function qi(t){return t.name==="IndexedDbTransactionError"}class GL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(b("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(b("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ns(r)}add(e){return b("SimpleDb","ADD",this.store.name,e,e),ns(this.store.add(e))}get(e){return ns(this.store.get(e)).next(n=>(n===void 0&&(n=null),b("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return b("SimpleDb","DELETE",this.store.name,e),ns(this.store.delete(e))}count(){return b("SimpleDb","COUNT",this.store.name),ns(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new E((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new E((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){b("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new E((r,i)=>{n.onerror=s=>{const o=v_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new KL(a),u=n(a.primaryKey,a.value,l);if(u instanceof E){const c=u.catch(h=>(l.done(),E.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>E.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ns(t){return new E((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=v_(r.target.error);n(i)}})}let eE=!1;function v_(t){const e=jn.S(Be());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eE||(eE=!0,setTimeout(()=>{throw r},0)),r}}return t}class HL{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){b("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{b("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(n){qi(n)?b("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await zi(n)}await this.ee(6e4)})}}class QL{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return E.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return b("IndexBackiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(b("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=KA(s);__(o,r)>0&&(r=o)}),new In(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class sn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}sn._e=-1;function Yu(t){return t==null}function gu(t){return t===0&&1/t==-1/0}function QA(t){return typeof t=="number"&&Number.isInteger(t)&&!gu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ht(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tE(e)),e=YL(t.get(n),e);return tE(e)}function YL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function tE(t){return t+""}function lr(t){const e=t.length;if(K(e>=2),e===2)return K(t.charAt(0)===""&&t.charAt(1)===""),he.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&B(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:B()}s=o+2}return new he(r)}/**
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
 */const nE=["userId","batchId"];/**
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
 */function ah(t,e){return[t,Ht(e)]}function YA(t,e,n){return[t,Ht(e),n]}const JL={},XL=["prefixPath","collectionGroup","readTime","documentId"],ZL=["prefixPath","collectionGroup","documentId"],eM=["collectionGroup","readTime","prefixPath","documentId"],tM=["canonicalId","targetId"],nM=["targetId","path"],rM=["path","targetId"],iM=["collectionId","parent"],sM=["indexId","uid"],oM=["uid","sequenceNumber"],aM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],lM=["indexId","uid","orderedDocumentKey"],uM=["userId","collectionPath","documentId"],cM=["userId","collectionPath","largestBatchId"],hM=["userId","collectionGroup","largestBatchId"],JA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],dM=[...JA,"documentOverlays"],XA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ZA=XA,fM=[...ZA,"indexConfiguration","indexState","indexEntries"];/**
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
 */class gg extends HA{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function yt(t,e){const n=U(t);return jn.M(n.ae,e)}/**
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
 */function rE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uc(this.root,e,this.comparator,!0)}}class Uc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Et.RED,this.left=i??Et.EMPTY,this.right=s??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iE(this.data.getIterator())}getIteratorFrom(e){return new iE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class iE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function io(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class on{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new on([])}unionWith(e){let n=new Ee(Ne.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class tP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function pM(){return typeof atob<"u"}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new tP("Invalid base64 string: "+s):s}}(e);return new lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const mM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(t){if(K(!!t),typeof t=="string"){let e=0;const n=mM.exec(t);if(K(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */function gf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function w_(t){const e=t.mapValue.fields.__previous_value__;return gf(e)?w_(e):e}function yu(t){const e=ki(t.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class gM{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},lh={nullValue:"NULL_VALUE"};function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gf(t)?4:nP(t)?9007199254740991:10:B()}function pr(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yu(t).isEqual(yu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ki(i.timestampValue),a=ki(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return xi(i.bytesValue).isEqual(xi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return qe(i.geoPointValue.latitude)===qe(s.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return qe(i.integerValue)===qe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=qe(i.doubleValue),a=qe(s.doubleValue);return o===a?gu(o)===gu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Zo(t.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(rE(o)!==rE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!pr(o[l],a[l])))return!1;return!0}(t,e);default:return B()}}function _u(t,e){return(t.values||[]).find(n=>pr(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=bs(t),r=bs(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=qe(s.integerValue||s.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return sE(t.timestampValue,e.timestampValue);case 4:return sE(yu(t),yu(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(s,o){const a=xi(s),l=xi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=te(a[u],l[u]);if(c!==0)return c}return te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=te(qe(s.latitude),qe(o.latitude));return a!==0?a:te(qe(s.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Di(a[u],l[u]);if(c)return c}return te(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===hi.mapValue&&o===hi.mapValue)return 0;if(s===hi.mapValue)return 1;if(o===hi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=te(l[h],c[h]);if(d!==0)return d;const f=Di(a[l[h]],u[c[h]]);if(f!==0)return f}return te(l.length,c.length)}(t.mapValue,e.mapValue);default:throw B()}}function sE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=ki(t),r=ki(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function ea(t){return yg(t)}function yg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ki(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return M.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yg(n.fields[o])}`;return i+"}"}(t.mapValue):B()}function Ds(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _g(t){return!!t&&"integerValue"in t}function vu(t){return!!t&&"arrayValue"in t}function oE(t){return!!t&&"nullValue"in t}function aE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uh(t){return!!t&&"mapValue"in t}function xl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function yM(t){return"nullValue"in t?lh:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ds(bi.empty(),M.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:B()}function _M(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ds(bi.empty(),M.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?hi:B()}function lE(t,e){const n=Di(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function uE(t,e){const n=Di(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!uh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xl(n)}setAll(e){let n=Ne.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=xl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());uh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];uh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Gs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(xl(this.value))}}function rP(t){const e=[];return Gs(t.fields,(n,r)=>{const i=new Ne([n]);if(uh(r)){const s=rP(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new on(e)}/**
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
 */class xe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xe(e,0,W.min(),W.min(),W.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new xe(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new xe(e,2,n,W.min(),W.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new xe(e,3,n,W.min(),W.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ni{constructor(e,n){this.position=e,this.inclusive=n}}function cE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wu{constructor(e,n="asc"){this.field=e,this.dir=n}}function vM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class iP{}class ae extends iP{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wM(e,n,r):n==="array-contains"?new TM(e,r):n==="in"?new cP(e,r):n==="not-in"?new SM(e,r):n==="array-contains-any"?new RM(e,r):new ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IM(e,r):new EM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Di(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _e extends iP{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new _e(e,n)}matches(e){return ta(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ta(t){return t.op==="and"}function vg(t){return t.op==="or"}function I_(t){return sP(t)&&ta(t)}function sP(t){for(const e of t.filters)if(e instanceof _e)return!1;return!0}function wg(t){if(t instanceof ae)return t.field.canonicalString()+t.op.toString()+ea(t.value);if(I_(t))return t.filters.map(e=>wg(e)).join(",");{const e=t.filters.map(n=>wg(n)).join(",");return`${t.op}(${e})`}}function oP(t,e){return t instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&pr(r.value,i.value)}(t,e):t instanceof _e?function(r,i){return i instanceof _e&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&oP(o,i.filters[a]),!0):!1}(t,e):void B()}function aP(t,e){const n=t.filters.concat(e);return _e.create(n,t.op)}function lP(t){return t instanceof ae?function(n){return`${n.field.canonicalString()} ${n.op} ${ea(n.value)}`}(t):t instanceof _e?function(n){return n.op.toString()+" {"+n.getFilters().map(lP).join(" ,")+"}"}(t):"Filter"}class wM extends ae{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class IM extends ae{constructor(e,n){super(e,"in",n),this.keys=uP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class EM extends ae{constructor(e,n){super(e,"not-in",n),this.keys=uP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function uP(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class TM extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vu(n)&&_u(n.arrayValue,this.value)}}class cP extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_u(this.value.arrayValue,n)}}class SM extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(_u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_u(this.value.arrayValue,n)}}class RM extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_u(this.value.arrayValue,r))}}/**
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
 */class AM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Ig(t,e=null,n=[],r=[],i=null,s=null,o=null){return new AM(t,e,n,r,i,s,o)}function Ns(t){const e=U(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ea(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ea(r)).join(",")),e.ce=n}return e.ce}function Ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hE(t.startAt,e.startAt)&&hE(t.endAt,e.endAt)}function od(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ad(t,e){return t.filters.filter(n=>n instanceof ae&&n.field.isEqual(e))}function dE(t,e,n){let r=lh,i=!0;for(const s of ad(t,e)){let o=lh,a=!0;switch(s.op){case"<":case"<=":o=yM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=lh}lE({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];lE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function fE(t,e,n){let r=hi,i=!0;for(const s of ad(t,e)){let o=hi,a=!0;switch(s.op){case">=":case">":o=_M(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=hi}uE({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];uE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class qr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function hP(t,e,n,r,i,s,o,a){return new qr(t,e,n,r,i,s,o,a)}function Ea(t){return new qr(t)}function pE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function E_(t){return t.collectionGroup!==null}function Uo(t){const e=U(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ee(Ne.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new wu(s,r))}),n.has(Ne.keyField().canonicalString())||e.le.push(new wu(Ne.keyField(),r))}return e.le}function Qt(t){const e=U(t);return e.he||(e.he=PM(e,Uo(t))),e.he}function PM(t,e){if(t.limitType==="F")return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wu(i.field,s)});const n=t.endAt?new Ni(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ni(t.startAt.position,t.startAt.inclusive):null;return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Eg(t,e){const n=t.filters.concat([e]);return new qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ld(t,e,n){return new qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xu(t,e){return Ju(Qt(t),Qt(e))&&t.limitType===e.limitType}function dP(t){return`${Ns(Qt(t))}|lt:${t.limitType}`}function co(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>lP(i)).join(", ")}]`),Yu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ea(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ea(i)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function Zu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Uo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=cE(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Uo(r),i)||r.endAt&&!function(o,a,l){const u=cE(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Uo(r),i))}(t,e)}function fP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pP(t){return(e,n)=>{let r=!1;for(const i of Uo(t)){const s=CM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function CM(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Di(l,u):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
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
 */class Wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return eP(this.inner)}size(){return this.innerSize}}/**
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
 */const kM=new Pe(M.comparator);function an(){return kM}const mP=new Pe(M.comparator);function fl(...t){let e=mP;for(const n of t)e=e.insert(n.key,n);return e}function gP(t){let e=mP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ur(){return bl()}function yP(){return bl()}function bl(){return new Wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const xM=new Pe(M.comparator),bM=new Ee(M.comparator);function ne(...t){let e=bM;for(const n of t)e=e.add(n);return e}const DM=new Ee(te);function T_(){return DM}/**
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
 */function _P(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gu(e)?"-0":e}}function vP(t){return{integerValue:""+t}}function wP(t,e){return QA(e)?vP(e):_P(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class yf{constructor(){this._=void 0}}function NM(t,e,n){return t instanceof na?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&gf(s)&&(s=w_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Os?EP(t,e):t instanceof Vs?TP(t,e):function(i,s){const o=IP(i,s),a=mE(o)+mE(i.Ie);return _g(o)&&_g(i.Ie)?vP(a):_P(i.serializer,a)}(t,e)}function OM(t,e,n){return t instanceof Os?EP(t,e):t instanceof Vs?TP(t,e):n}function IP(t,e){return t instanceof ra?function(r){return _g(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class na extends yf{}class Os extends yf{constructor(e){super(),this.elements=e}}function EP(t,e){const n=SP(e);for(const r of t.elements)n.some(i=>pr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Vs extends yf{constructor(e){super(),this.elements=e}}function TP(t,e){let n=SP(e);for(const r of t.elements)n=n.filter(i=>!pr(i,r));return{arrayValue:{values:n}}}class ra extends yf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function mE(t){return qe(t.integerValue||t.doubleValue)}function SP(t){return vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ec{constructor(e,n){this.field=e,this.transform=n}}function VM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Os&&i instanceof Os||r instanceof Vs&&i instanceof Vs?Zo(r.elements,i.elements,pr):r instanceof ra&&i instanceof ra?pr(r.Ie,i.Ie):r instanceof na&&i instanceof na}(t.transform,e.transform)}class LM{constructor(e,n){this.version=e,this.transformResults=n}}class Oe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ch(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _f{}function RP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sa(t.key,Oe.none()):new Ta(t.key,t.data,Oe.none());{const n=t.data,r=Rt.empty();let i=new Ee(Ne.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wr(t.key,r,new on(i.toArray()),Oe.none())}}function MM(t,e,n){t instanceof Ta?function(i,s,o){const a=i.value.clone(),l=yE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Wr?function(i,s,o){if(!ch(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=yE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(AP(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Dl(t,e,n,r){return t instanceof Ta?function(s,o,a,l){if(!ch(s.precondition,o))return a;const u=s.value.clone(),c=_E(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wr?function(s,o,a,l){if(!ch(s.precondition,o))return a;const u=_E(s.fieldTransforms,l,o),c=o.data;return c.setAll(AP(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return ch(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function FM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=IP(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function gE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zo(r,i,(s,o)=>VM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends _f{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wr extends _f{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function AP(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yE(t,e,n){const r=new Map;K(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,OM(o,a,n[i]))}return r}function _E(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,NM(s,o,e))}return r}class Sa extends _f{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S_ extends _f{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class R_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&MM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Dl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Dl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=RP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Zo(this.mutations,e.mutations,(n,r)=>gE(n,r))&&Zo(this.baseMutations,e.baseMutations,(n,r)=>gE(n,r))}}class A_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){K(e.mutations.length===r.length);let i=function(){return xM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new A_(e,n,r,i)}}/**
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
 */class P_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class UM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var nt,ce;function PP(t){switch(t){default:return B();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function CP(t){if(t===void 0)return Ze("GRPC error has no .code"),S.UNKNOWN;switch(t){case nt.OK:return S.OK;case nt.CANCELLED:return S.CANCELLED;case nt.UNKNOWN:return S.UNKNOWN;case nt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case nt.INTERNAL:return S.INTERNAL;case nt.UNAVAILABLE:return S.UNAVAILABLE;case nt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case nt.NOT_FOUND:return S.NOT_FOUND;case nt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case nt.ABORTED:return S.ABORTED;case nt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case nt.DATA_LOSS:return S.DATA_LOSS;default:return B()}}(ce=nt||(nt={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function kP(){return new TextEncoder}/**
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
 */const $M=new Fo([4294967295,4294967295],0);function vE(t){const e=kP().encode(t),n=new NL;return n.update(e),new Uint8Array(n.digest())}function wE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fo([n,r],0),new Fo([i,s],0)]}class C_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pl(`Invalid padding: ${n}`);if(r<0)throw new pl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pl(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Fo.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Fo.fromNumber(r)));return i.compare($M)===1&&(i=new Fo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=vE(e),[r,i]=wE(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new C_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=vE(e),[r,i]=wE(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,nc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tc(W.min(),i,new Pe(te),an(),ne())}}class nc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new nc(r,n,ne(),ne(),ne())}}/**
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
 */class hh{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class xP{constructor(e,n){this.targetId=e,this.fe=n}}class bP{constructor(e,n,r=lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class IE{constructor(){this.ge=0,this.pe=TE(),this.ye=lt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ne(),n=ne(),r=ne();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new nc(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=TE()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class BM{constructor(e){this.Le=e,this.ke=new Map,this.qe=an(),this.Qe=EE(),this.Ke=new Pe(te)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(od(s))if(r===0){const o=new M(s.path);this.We(n,o,xe.newNoDocument(o,W.min()))}else K(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=xi(r).toUint8Array()}catch(l){if(l instanceof tP)return Qn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new C_(o,i,s)}catch(l){return Qn(l instanceof pl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&od(a.target)){const l=new M(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,xe.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=ne();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new tc(e,n,this.Ke,this.qe,r);return this.qe=an(),this.Qe=EE(),this.Ke=new Pe(te),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new IE,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ee(te),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new IE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function EE(){return new Pe(M.comparator)}function TE(){return new Pe(M.comparator)}const jM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qM=(()=>({and:"AND",or:"OR"}))();class WM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tg(t,e){return t.useProto3Json||Yu(e)?e:{value:e}}function ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function DP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KM(t,e){return ia(t,e.toTimestamp())}function et(t){return K(!!t),W.fromTimestamp(function(n){const r=ki(n);return new Ve(r.seconds,r.nanos)}(t))}function k_(t,e){return function(r){return new he(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function NP(t){const e=he.fromString(t);return K(jP(e)),e}function Iu(t,e){return k_(t.databaseId,e.path)}function fr(t,e){const n=NP(e);if(n.get(1)!==t.databaseId.projectId)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(VP(n))}function Sg(t,e){return k_(t.databaseId,e)}function OP(t){const e=NP(t);return e.length===4?he.emptyPath():VP(e)}function Eu(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function VP(t){return K(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function SE(t,e,n){return{name:Iu(t,e),fields:n.value.mapValue.fields}}function LP(t,e,n){const r=fr(t,e.name),i=et(e.updateTime),s=e.createTime?et(e.createTime):W.min(),o=new Rt({mapValue:{fields:e.fields}}),a=xe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function GM(t,e){return"found"in e?function(r,i){K(!!i.found),i.found.name,i.found.updateTime;const s=fr(r,i.found.name),o=et(i.found.updateTime),a=i.found.createTime?et(i.found.createTime):W.min(),l=new Rt({mapValue:{fields:i.found.fields}});return xe.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){K(!!i.missing),K(!!i.readTime);const s=fr(r,i.missing),o=et(i.readTime);return xe.newNoDocument(s,o)}(t,e):B()}function HM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(K(c===void 0||typeof c=="string"),lt.fromBase64String(c||"")):(K(c===void 0||c instanceof Uint8Array),lt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:CP(u.code);return new x(c,u.message||"")}(o);n=new bP(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fr(t,r.document.name),s=et(r.document.updateTime),o=r.document.createTime?et(r.document.createTime):W.min(),a=new Rt({mapValue:{fields:r.document.fields}}),l=xe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new hh(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fr(t,r.document),s=r.readTime?et(r.readTime):W.min(),o=xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fr(t,r.document),s=r.removedTargetIds||[];n=new hh([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new UM(i,s),a=r.targetId;n=new xP(a,o)}}return n}function Tu(t,e){let n;if(e instanceof Ta)n={update:SE(t,e.key,e.value)};else if(e instanceof Sa)n={delete:Iu(t,e.key)};else if(e instanceof Wr)n={update:SE(t,e.key,e.data),updateMask:eF(e.fieldMask)};else{if(!(e instanceof S_))return B();n={verify:Iu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Os)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ra)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:KM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:B()}(t,e.precondition)),n}function Rg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Oe.updateTime(et(s.updateTime)):s.exists!==void 0?Oe.exists(s.exists):Oe.none()}(e.currentDocument):Oe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)K(a.setToServerValue==="REQUEST_TIME"),l=new na;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new Os(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new Vs(c)}else"increment"in a?l=new ra(o,a.increment):B();const u=Ne.fromServerFormat(a.fieldPath);return new ec(u,l)}(t,i)):[];if(e.update){e.update.name;const i=fr(t,e.update.name),s=new Rt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new on(u.map(c=>Ne.fromServerFormat(c)))}(e.updateMask);return new Wr(i,s,o,n,r)}return new Ta(i,s,n,r)}if(e.delete){const i=fr(t,e.delete);return new Sa(i,n)}if(e.verify){const i=fr(t,e.verify);return new S_(i,n)}return B()}function QM(t,e){return t&&t.length>0?(K(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?et(i.updateTime):et(s);return o.isEqual(W.min())&&(o=et(s)),new LM(o,i.transformResults||[])}(n,e))):[]}function MP(t,e){return{documents:[Sg(t,e.path)]}}function FP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Sg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return BP(_e.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ho(h.field),direction:JM(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Tg(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function UP(t){let e=OP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){K(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=$P(h);return d instanceof _e&&I_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new wu(fo(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Yu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Ni(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Ni(f,d)}(n.endAt)),hP(e,i,o,s,a,"F",l,u)}function YM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $P(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fo(n.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fo(n.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fo(n.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fo(n.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(t):t.fieldFilter!==void 0?function(n){return ae.create(fo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _e.create(n.compositeFilter.filters.map(r=>$P(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(n.compositeFilter.op))}(t):B()}function JM(t){return jM[t]}function XM(t){return zM[t]}function ZM(t){return qM[t]}function ho(t){return{fieldPath:t.canonicalString()}}function fo(t){return Ne.fromServerFormat(t.fieldPath)}function BP(t){return t instanceof ae?function(n){if(n.op==="=="){if(aE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NAN"}};if(oE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(aE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NAN"}};if(oE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(n.field),op:XM(n.op),value:n.value}}}(t):t instanceof _e?function(n){const r=n.getFilters().map(i=>BP(i));return r.length===1?r[0]:{compositeFilter:{op:ZM(n.op),filters:r}}}(t):B()}function eF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ar{constructor(e,n,r,i,s=W.min(),o=W.min(),a=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zP{constructor(e){this.ut=e}}function tF(t,e){let n;if(e.document)n=LP(t.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=M.fromSegments(e.noDocument.path),i=Ms(e.noDocument.readTime);n=xe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return B();{const r=M.fromSegments(e.unknownDocument.path),i=Ms(e.unknownDocument.version);n=xe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ve(i[0],i[1]);return W.fromTimestamp(s)}(e.readTime)),n}function RE(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:ud(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Iu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ia(s,o.version.toTimestamp()),createTime:ia(s,o.createTime.toTimestamp())}}(t.ut,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ls(e.version)};else{if(!e.isUnknownDocument())return B();r.unknownDocument={path:n.path.toArray(),version:Ls(e.version)}}return r}function ud(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ls(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ms(t){const e=new Ve(t.seconds,t.nanoseconds);return W.fromTimestamp(e)}function rs(t,e){const n=(e.baseMutations||[]).map(s=>Rg(t.ut,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Rg(t.ut,s)),i=Ve.fromMillis(e.localWriteTimeMs);return new R_(e.batchId,i,n,r)}function ml(t){const e=Ms(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ms(t.lastLimboFreeSnapshotVersion):W.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return K(s.documents.length===1),Qt(Ea(OP(s.documents[0])))}(t.query):function(s){return Qt(UP(s))}(t.query),new Ar(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,lt.fromBase64String(t.resumeToken))}function qP(t,e){const n=Ls(e.snapshotVersion),r=Ls(e.lastLimboFreeSnapshotVersion);let i;i=od(e.target)?MP(t.ut,e.target):FP(t.ut,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ns(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function x_(t){const e=UP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ld(e,e.limit,"L"):e}function zp(t,e){return new P_(e.largestBatchId,Rg(t.ut,e.overlayMutation))}function AE(t,e){const n=e.path.lastSegment();return[t,Ht(e.path.popLast()),n]}function PE(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ls(r.readTime),documentKey:Ht(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class nF{getBundleMetadata(e,n){return CE(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ms(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return CE(e).put(function(i){return{bundleId:i.id,createTime:Ls(et(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return kE(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:x_(s.bundledQuery),readTime:Ms(s.readTime)}}(r)})}saveNamedQuery(e,n){return kE(e).put(function(i){return{name:i.name,readTime:Ls(et(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function CE(t){return yt(t,"bundles")}function kE(t){return yt(t,"namedQueries")}/**
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
 */class vf{constructor(e,n){this.serializer=e,this.userId=n}static ct(e,n){const r=n.uid||"";return new vf(e,r)}getOverlay(e,n){return Xa(e).get(AE(this.userId,n)).next(r=>r?zp(this.serializer,r):null)}getOverlays(e,n){const r=ur();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new P_(n,o);i.push(this.lt(e,a))}),E.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ht(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Xa(e).H("collectionPathOverlayIndex",a))}),E.waitFor(s)}getOverlaysForCollection(e,n,r){const i=ur(),s=Ht(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Xa(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=zp(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=ur();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Xa(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=zp(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}lt(e,n){return Xa(e).put(function(i,s,o){const[a,l,u]=AE(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Tu(i.ut,o.mutation)}}(this.serializer,this.userId,n))}}function Xa(t){return yt(t,"documentOverlays")}/**
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
 */class is{constructor(){}ht(e,n){this.Pt(e,n),n.It()}Pt(e,n){if("nullValue"in e)this.Tt(n,5);else if("booleanValue"in e)this.Tt(n,10),n.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(n,15),n.Et(qe(e.integerValue));else if("doubleValue"in e){const r=qe(e.doubleValue);isNaN(r)?this.Tt(n,13):(this.Tt(n,15),gu(r)?n.Et(0):n.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(n,20),typeof r=="string"?n.dt(r):(n.dt(`${r.seconds||""}`),n.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,n),this.Rt(n);else if("bytesValue"in e)this.Tt(n,30),n.Vt(xi(e.bytesValue)),this.Rt(n);else if("referenceValue"in e)this.ft(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(n,45),n.Et(r.latitude||0),n.Et(r.longitude||0)}else"mapValue"in e?nP(e)?this.Tt(n,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,n),this.Rt(n)):"arrayValue"in e?(this.yt(e.arrayValue,n),this.Rt(n)):B()}At(e,n){this.Tt(n,25),this.wt(e,n)}wt(e,n){n.dt(e)}gt(e,n){const r=e.fields||{};this.Tt(n,55);for(const i of Object.keys(r))this.At(i,n),this.Pt(r[i],n)}yt(e,n){const r=e.values||[];this.Tt(n,50);for(const i of r)this.Pt(i,n)}ft(e,n){this.Tt(n,37),M.fromName(e).path.forEach(r=>{this.Tt(n,60),this.wt(r,n)})}Tt(e,n){e.Et(n)}Rt(e){e.Et(2)}}is.St=new is;function rF(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function xE(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=rF(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class iF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Dt(r.value),r=n.next();this.Ct()}vt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=n.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(e){const n=this.Bt(e),r=xE(n);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}kt(e){const n=this.Bt(e),r=xE(n);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Dt(e){const n=255&e;n===0?(this.Qt(0),this.Qt(255)):n===255?(this.Qt(255),this.Qt(0)):this.Qt(n)}Ft(e){const n=255&e;n===0?(this.$t(0),this.$t(255)):n===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class sF{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class oF{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class Za{constructor(){this.Wt=new iF,this.Gt=new sF(this.Wt),this.zt=new oF(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
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
 */class ss{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ht(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ss(this.indexId,this.documentKey,this.arrayValue,r)}}function Xr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=bE(t.arrayValue,e.arrayValue),n!==0?n:(n=bE(t.directionalValue,e.directionalValue),n!==0?n:M.comparator(t.documentKey,e.documentKey)))}function bE(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class DE{constructor(e){this.Jt=new Ee((n,r)=>Ne.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(K(e.collectionGroup===this.collectionId),this.Xt)return!1;const n=mg(e);if(n!==void 0&&!this.tn(n))return!1;const r=ts(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.nn(a,l)||!this.rn(this.Yt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let e=new Ee(Ne.comparator);const n=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new oh(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new oh(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new oh(r.field,r.dir==="asc"?0:1)));return new sd(sd.UNKNOWN_ID,this.collectionId,n,mu.empty())}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function WP(t){var e,n;if(K(t instanceof ae||t instanceof _e),t instanceof ae){if(t instanceof cP){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ae.create(t.field,"==",s)))||[];return _e.create(i,"or")}return t}const r=t.filters.map(i=>WP(i));return _e.create(r,t.op)}function aF(t){if(t.getFilters().length===0)return[];const e=Cg(WP(t));return K(KP(e)),Ag(e)||Pg(e)?[e]:e.getFilters()}function Ag(t){return t instanceof ae}function Pg(t){return t instanceof _e&&I_(t)}function KP(t){return Ag(t)||Pg(t)||function(n){if(n instanceof _e&&vg(n)){for(const r of n.getFilters())if(!Ag(r)&&!Pg(r))return!1;return!0}return!1}(t)}function Cg(t){if(K(t instanceof ae||t instanceof _e),t instanceof ae)return t;if(t.filters.length===1)return Cg(t.filters[0]);const e=t.filters.map(r=>Cg(r));let n=_e.create(e,t.op);return n=cd(n),KP(n)?n:(K(n instanceof _e),K(ta(n)),K(n.filters.length>1),n.filters.reduce((r,i)=>b_(r,i)))}function b_(t,e){let n;return K(t instanceof ae||t instanceof _e),K(e instanceof ae||e instanceof _e),n=t instanceof ae?e instanceof ae?function(i,s){return _e.create([i,s],"and")}(t,e):NE(t,e):e instanceof ae?NE(e,t):function(i,s){if(K(i.filters.length>0&&s.filters.length>0),ta(i)&&ta(s))return aP(i,s.getFilters());const o=vg(i)?i:s,a=vg(i)?s:i,l=o.filters.map(u=>b_(u,a));return _e.create(l,"or")}(t,e),cd(n)}function NE(t,e){if(ta(e))return aP(e,t.getFilters());{const n=e.filters.map(r=>b_(t,r));return _e.create(n,"or")}}function cd(t){if(K(t instanceof ae||t instanceof _e),t instanceof ae)return t;const e=t.getFilters();if(e.length===1)return cd(e[0]);if(sP(t))return t;const n=e.map(i=>cd(i)),r=[];return n.forEach(i=>{i instanceof ae?r.push(i):i instanceof _e&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:_e.create(r,t.op)}/**
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
 */class lF{constructor(){this.on=new D_}addToCollectionParentIndex(e,n){return this.on.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}deleteAllFieldIndexes(e){return E.resolve()}createTargetIndexes(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(In.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(In.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class D_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ee(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(he.comparator)).toArray()}}/**
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
 */const $c=new Uint8Array(0);class uF{constructor(e,n){this.user=e,this.databaseId=n,this._n=new D_,this.an=new Wi(r=>Ns(r),(r,i)=>Ju(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this._n.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this._n.add(n)});const s={collectionId:r,parent:Ht(i)};return OE(e).put(s)}return E.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[qA(n),""],!1,!0);return OE(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(lr(o.parent))}return r})}addFieldIndex(e,n){const r=el(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=oo(e);return s.next(a=>{o.put(PE(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=el(e),i=oo(e),s=so(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=el(e),r=so(e),i=oo(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return E.forEach(this.un(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new DE(r).sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=so(e);let i=!0;const s=new Map;return E.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ne();const a=[];return E.forEach(s,(l,u)=>{b("IndexedDbIndexManager",`Using index ${function(y){return`id=${y.indexId}|cg=${y.collectionGroup}|f=${y.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`}(l)} to execute ${Ns(n)}`);const c=function(y,g){const R=mg(g);if(R===void 0)return null;for(const P of ad(y,R.fieldPath))switch(P.op){case"array-contains-any":return P.value.arrayValue.values||[];case"array-contains":return[P.value]}return null}(u,l),h=function(y,g){const R=new Map;for(const P of ts(g))for(const A of ad(y,P.fieldPath))switch(A.op){case"==":case"in":R.set(P.fieldPath.canonicalString(),A.value);break;case"not-in":case"!=":return R.set(P.fieldPath.canonicalString(),A.value),Array.from(R.values())}return null}(u,l),d=function(y,g){const R=[];let P=!0;for(const A of ts(g)){const V=A.kind===0?dE(y,A.fieldPath,y.startAt):fE(y,A.fieldPath,y.startAt);R.push(V.value),P&&(P=V.inclusive)}return new Ni(R,P)}(u,l),f=function(y,g){const R=[];let P=!0;for(const A of ts(g)){const V=A.kind===0?fE(y,A.fieldPath,y.endAt):dE(y,A.fieldPath,y.endAt);R.push(V.value),P&&(P=V.inclusive)}return new Ni(R,P)}(u,l),_=this.ln(l,u,d),v=this.ln(l,u,f),w=this.hn(l,u,h),m=this.Pn(l.indexId,c,_,d.inclusive,v,f.inclusive,w);return E.forEach(m,p=>r.j(p,n.limit).next(y=>{y.forEach(g=>{const R=M.fromSegments(g.documentKey);o.has(R)||(o=o.add(R),a.push(R))})}))}).next(()=>a)}return E.resolve(null)})}un(e){let n=this.an.get(e);return n||(e.filters.length===0?n=[e]:n=aF(_e.create(e.filters,"and")).map(r=>Ig(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,n),n)}Pn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.In(n[h/u]):$c,f=this.Tn(e,d,r[h%u],i),_=this.En(e,d,s[h%u],o),v=a.map(w=>this.Tn(e,d,w,!0));c.push(...this.createRange(f,_,v))}return c}Tn(e,n,r,i){const s=new ss(e,M.empty(),n,r);return i?s:s.Ht()}En(e,n,r,i){const s=new ss(e,M.empty(),n,r);return i?s.Ht():s}cn(e,n){const r=new DE(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return E.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new Ee(Ne.comparator),c=!1;for(const h of l.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?c=!0:u=u.add(d.field));for(const h of l.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}dn(e,n){const r=new Za;for(const i of ts(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);is.St.ht(s,o)}return r.Ut()}In(e){const n=new Za;return is.St.ht(e,n.jt(0)),n.Ut()}An(e,n){const r=new Za;return is.St.ht(Ds(this.databaseId,n),r.jt(function(s){const o=ts(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Ut()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new Za);let s=0;for(const o of ts(e)){const a=r[s++];for(const l of i)if(this.Rn(n,o.fieldPath)&&vu(a))i=this.Vn(i,o,a);else{const u=l.jt(o.kind);is.St.ht(a,u)}}return this.mn(i)}ln(e,n,r){return this.hn(e,n,r.position)}mn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ut();return n}Vn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Za;l.seed(a.Ut()),is.St.ht(o,l.jt(n.kind)),s.push(l)}return s}Rn(e,n){return!!e.filters.find(r=>r instanceof ae&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=el(e),i=oo(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return E.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,h){const d=h?new mu(h.sequenceNumber,new In(Ms(h.readTime),new M(lr(h.documentKey)),h.largestBatchId)):mu.empty(),f=c.fields.map(([_,v])=>new oh(Ne.fromServerFormat(_),v));return new sd(c.indexId,c.collectionGroup,f,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:te(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=el(e),s=oo(e);return this.fn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>E.forEach(a,l=>s.put(PE(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return E.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?E.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),E.forEach(a,l=>this.gn(e,i,l).next(u=>{const c=this.pn(s,l);return u.isEqual(c)?E.resolve():this.yn(e,s,l,u,c)}))))})}wn(e,n,r,i){return so(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,n.key),documentKey:n.key.path.toArray()})}Sn(e,n,r,i){return so(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,n.key),n.key.path.toArray()])}gn(e,n,r){const i=so(e);let s=new Ee(Xr);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,n)])},(o,a)=>{s=s.add(new ss(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(e,n){let r=new Ee(Xr);const i=this.dn(n,e);if(i==null)return r;const s=mg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(vu(o))for(const a of o.arrayValue.values||[])r=r.add(new ss(n.indexId,e.key,this.In(a),i))}else r=r.add(new ss(n.indexId,e.key,$c,i));return r}yn(e,n,r,i,s){b("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,h,d){const f=l.getIterator(),_=u.getIterator();let v=io(f),w=io(_);for(;v||w;){let m=!1,p=!1;if(v&&w){const y=c(v,w);y<0?p=!0:y>0&&(m=!0)}else v!=null?p=!0:m=!0;m?(h(w),w=io(_)):p?(d(v),v=io(f)):(v=io(f),w=io(_))}}(i,s,Xr,a=>{o.push(this.wn(e,n,r,a))},a=>{o.push(this.Sn(e,n,r,a))}),E.waitFor(o)}fn(e){let n=1;return oo(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Xr(o,a)).filter((o,a,l)=>!a||Xr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Xr(o,e),l=Xr(o,n);if(a===0)i[0]=e.Ht();else if(a>0&&l<0)i.push(o),i.push(o.Ht());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,$c,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,$c,[]];s.push(IDBKeyRange.bound(a,l))}return s}bn(e,n){return Xr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(VE)}getMinOffset(e,n){return E.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||B())).next(VE)}}function OE(t){return yt(t,"collectionParents")}function so(t){return yt(t,"indexEntries")}function el(t){return yt(t,"indexConfiguration")}function oo(t){return yt(t,"indexState")}function VE(t){K(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;__(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new In(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const LE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Zt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function GP(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{K(a===1)}));const u=[];for(const c of n.mutations){const h=YA(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return E.waitFor(s).next(()=>u)}function hd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw B();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(41943040,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);class wf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(e,n,r,i){K(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new wf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zr(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=po(e),o=Zr(e);return o.add({}).next(a=>{K(typeof a=="number");const l=new R_(a,n,r,i),u=function(f,_,v){const w=v.baseMutations.map(p=>Tu(f.ut,p)),m=v.mutations.map(p=>Tu(f.ut,p));return{userId:_,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:w,mutations:m}}(this.serializer,this.userId,l),c=[];let h=new Ee((d,f)=>te(d.canonicalString(),f.canonicalString()));for(const d of i){const f=YA(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(f,JL))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Dn[a]=l.keys()}),E.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return Zr(e).get(n).next(r=>r?(K(r.userId===this.userId),rs(this.serializer,r)):null)}Cn(e,n){return this.Dn[n]?E.resolve(this.Dn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Dn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Zr(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(K(a.batchId>=r),s=rs(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Zr(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Zr(e).W("userMutationsIndex",n).next(r=>r.map(i=>rs(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=ah(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return po(e).Y({range:i},(o,a,l)=>{const[u,c,h]=o,d=lr(c);if(u===this.userId&&n.path.isEqual(d))return Zr(e).get(h).next(f=>{if(!f)throw B();K(f.userId===this.userId),s.push(rs(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(te);const i=[];return n.forEach(s=>{const o=ah(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=po(e).Y({range:a},(u,c,h)=>{const[d,f,_]=u,v=lr(f);d===this.userId&&s.path.isEqual(v)?r=r.add(_):h.done()});i.push(l)}),E.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=ah(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ee(te);return po(e).Y({range:o},(l,u,c)=>{const[h,d,f]=l,_=lr(d);h===this.userId&&r.isPrefixOf(_)?_.length===i&&(a=a.add(f)):c.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Zr(e).get(s).next(o=>{if(o===null)throw B();K(o.userId===this.userId),r.push(rs(this.serializer,o))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return GP(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Fn(n.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return E.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return po(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=lr(s[1]);i.push(l)}else a.done()}).next(()=>{K(i.length===0)})})}containsKey(e,n){return HP(e,this.userId,n)}Mn(e){return QP(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function HP(t,e,n){const r=ah(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return po(t).Y({range:s,J:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function Zr(t){return yt(t,"mutations")}function po(t){return yt(t,"documentMutations")}function QP(t){return yt(t,"mutationQueues")}/**
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
 */class Fs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Fs(0)}static Nn(){return new Fs(-1)}}/**
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
 */class cF{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new Fs(n.highestTargetId);return n.highestTargetId=r.next(),this.Ln(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>W.fromTimestamp(new Ve(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Ln(e,i)))}addTargetData(e,n){return this.kn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(n,r),this.Ln(e,r))))}updateTargetData(e,n){return this.kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ao(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(K(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ao(e).Y((o,a)=>{const l=ml(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ao(e).Y((r,i)=>{const s=ml(i);n(s)})}Bn(e){return ME(e).get("targetGlobalKey").next(n=>(K(n!==null),n))}Ln(e,n){return ME(e).put("targetGlobalKey",n)}kn(e,n){return ao(e).put(qP(this.serializer,n))}qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ns(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ao(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=ml(a);Ju(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ai(e);return n.forEach(o=>{const a=Ht(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(i)}removeMatchingKeys(e,n,r){const i=ai(e);return E.forEach(n,s=>{const o=Ht(s.path);return E.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ai(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ai(e);let s=ne();return i.Y({range:r,J:!0},(o,a,l)=>{const u=lr(o[1]),c=new M(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Ht(n.path),i=IDBKeyRange.bound([r],[qA(r)],!1,!0);let s=0;return ai(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return ao(e).get(n).next(r=>r?ml(r):null)}}function ao(t){return yt(t,"targets")}function ME(t){return yt(t,"targetGlobal")}function ai(t){return yt(t,"targetDocuments")}/**
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
 */function FE([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class hF{constructor(e){this.Qn=e,this.buffer=new Ee(FE),this.Kn=0}$n(){return++this.Kn}Un(e){const n=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();FE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class dF{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){b("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qi(n)?b("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await zi(n)}await this.Gn(3e5)})}}class fF{constructor(e,n){this.zn=e,this.params=n}calculateTargetCount(e,n){return this.zn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return E.resolve(sn._e);const r=new hF(n);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(LE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),LE):this.Jn(e,n))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),uo()<=se.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function pF(t,e){return new fF(t,e)}/**
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
 */class mF{constructor(e,n){this.db=e,this.garbageCollector=pF(this,n)}jn(e){const n=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Yn(e){let n=0;return this.Hn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Hn(e,n){return this.Zn(e,(r,i)=>n(i))}addReference(e,n,r){return Bc(e,r)}removeReference(e,n,r){return Bc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Bc(e,n)}Xn(e,n){return function(i,s){let o=!1;return QP(i).Z(a=>HP(i,a,s).next(l=>(l&&(o=!0),E.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,a)=>{if(a<=n){const l=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),ai(e).delete(function(h){return[0,Ht(h.path)]}(o))))});i.push(l)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Bc(e,n)}Zn(e,n){const r=ai(e);let i,s=sn._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==sn._e&&n(new M(lr(i)),s),s=u,i=l):s=sn._e}).next(()=>{s!==sn._e&&n(new M(lr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Bc(t,e){return ai(t).put(function(r,i){return{targetId:0,path:Ht(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class YP{constructor(){this.changes=new Wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gF{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ji(e).put(r)}removeEntry(e,n,r){return Ji(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],ud(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.er(e,r)))}getEntry(e,n){let r=xe.newInvalidDocument(n);return Ji(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(tl(n))},(i,s)=>{r=this.tr(n,s)}).next(()=>r)}nr(e,n){let r={size:0,document:xe.newInvalidDocument(n)};return Ji(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(tl(n))},(i,s)=>{r={document:this.tr(n,s),size:hd(s)}}).next(()=>r)}getEntries(e,n){let r=an();return this.rr(e,n,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,n){let r=an(),i=new Pe(M.comparator);return this.rr(e,n,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,hd(o))}).next(()=>({documents:r,sr:i}))}rr(e,n,r){if(n.isEmpty())return E.resolve();let i=new Ee(BE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(tl(i.first()),tl(i.last())),o=i.getIterator();let a=o.getNext();return Ji(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=M.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&BE(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(tl(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),ud(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ji(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=an();for(const h of u){const d=this.tr(M.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Zu(n,d)||i.has(d.key))&&(c=c.insert(d.key,d))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=an();const o=$E(n,r),a=$E(n,In.max());return Ji(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.tr(M.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new yF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return UE(e).get("remoteDocumentGlobalKey").next(n=>(K(!!n),n))}er(e,n){return UE(e).put("remoteDocumentGlobalKey",n)}tr(e,n){if(n){const r=tF(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return xe.newInvalidDocument(e)}}function JP(t){return new gF(t)}class yF extends YP{constructor(e,n){super(),this._r=e,this.trackRemovals=n,this.ar=new Wi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ee((s,o)=>te(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(n.push(this._r.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=RE(this._r.serializer,o);i=i.add(s.path.popLast());const u=hd(l);r+=u-a.size,n.push(this._r.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=RE(this._r.serializer,o.convertToNoDocument(W.min()));n.push(this._r.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),n.push(this._r.updateMetadata(e,r)),E.waitFor(n)}getFromCache(e,n){return this._r.nr(e,n).next(r=>(this.ar.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this._r.ir(e,n).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function UE(t){return yt(t,"remoteDocumentGlobal")}function Ji(t){return yt(t,"remoteDocumentsV14")}function tl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function $E(t,e){const n=e.documentKey.path.toArray();return[t,ud(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function BE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=te(n[s],r[s]),i)return i;return i=te(n.length,r.length),i||(i=te(n[n.length-2],r[r.length-2]),i||te(n[n.length-1],r[r.length-1]))}/**
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
 *//**
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
 */class _F{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class XP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Dl(r.mutation,i,on.empty(),Ve.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=an();const o=bl(),a=function(){return bl()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Wr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Dl(c.mutation,u,c.mutation.getFieldMask(),Ve.now())):o.set(u.key,on.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new _F(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=bl();let i=new Pe((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||on.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=yP();c.forEach(d=>{if(!s.has(d)){const f=RP(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):E_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(ur());let a=-1,l=s;return o.next(u=>E.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?E.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ne())).next(c=>({batchId:a,changes:gP(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=fl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fl();return this.indexManager.getCollectionParents(e,s).next(a=>E.forEach(a,l=>{const u=function(h,d){return new qr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,xe.newInvalidDocument(c)))});let a=fl();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Dl(c.mutation,u,on.empty(),Ve.now()),Zu(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class vF{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return E.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:et(i.createTime)}}(n)),E.resolve()}getNamedQuery(e,n){return E.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:x_(i.bundledQuery),readTime:et(i.readTime)}}(n)),E.resolve()}}/**
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
 */class wF{constructor(){this.overlays=new Pe(M.comparator),this.lr=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ur();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=ur(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ur(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ur(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return E.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new P_(n,r));let s=this.lr.get(n);s===void 0&&(s=ne(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class N_{constructor(){this.hr=new Ee(ct.Pr),this.Ir=new Ee(ct.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new ct(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new M(new he([])),r=new ct(n,e),i=new ct(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new M(new he([])),r=new ct(n,e),i=new ct(n,e+1);let s=ne();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ct(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return M.comparator(e.key,n.key)||te(e.gr,n.gr)}static Tr(e,n){return te(e.gr,n.gr)||M.comparator(e.key,n.key)}}/**
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
 */class IF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ee(ct.Pr)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new R_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new ct(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(te);return n.forEach(i=>{const s=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),E.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new ct(new M(s),0);let a=new Ee(te);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),E.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){K(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return E.forEach(n.mutations,i=>{const s=new ct(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new ct(n,0),i=this.yr.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class EF{constructor(e){this.Cr=e,this.docs=function(){return new Pe(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(n))}getEntries(e,n){let r=an();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=an();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||__(KA(c),r)<=0||(i.has(c.key)||Zu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,n,r,i){B()}vr(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TF(this)}getSize(e){return E.resolve(this.size)}}class TF extends YP{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class SF{constructor(e){this.persistence=e,this.Fr=new Wi(n=>Ns(n),Ju),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Mr=0,this.Or=new N_,this.targetCount=0,this.Nr=Fs.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),E.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.kn(n),E.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Or.containsKey(n))}}/**
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
 */class ZP{constructor(e,n){this.Br={},this.overlays={},this.Lr=new sn(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new SF(this),this.indexManager=new lF,this.remoteDocumentCache=function(i){return new EF(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new zP(n),this.Kr=new vF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new IF(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new RF(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return E.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class RF extends HA{constructor(e){super(),this.currentSequenceNumber=e}}class If{constructor(e){this.persistence=e,this.Gr=new N_,this.zr=null}static jr(e){return new If(e)}get Hr(){if(this.zr)return this.zr;throw B()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),E.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Hr,r=>{const i=M.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return E.or([()=>E.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class AF{constructor(e){this.serializer=e}N(e,n,r,i){const s=new mf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nE,{unique:!0}),l.createObjectStore("documentMutations")}(e),jE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=E.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),jE(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nE,{unique:!0});const h=u.store("mutations"),d=c.map(f=>h.put(f));return E.waitFor(d)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:uM});u.createIndex("collectionPathOverlayIndex",cM,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",hM,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:XL});u.createIndex("documentKeyIndex",ZL),u.createIndex("collectionGroupIndex",eM)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:sM}).createIndex("sequenceNumberIndex",oM,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:aM}).createIndex("documentKeyIndex",lM,{unique:!1})}(e))),o}Xr(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=hd(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>E.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>E.forEach(a,l=>{K(l.userId===s.userId);const u=rs(this.serializer,l);return GP(e,s.userId,u).next(()=>{})}))}))}ei(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new he(o),u=function(h){return[0,Ht(h)]}(l);s.push(n.get(u).next(c=>c?E.resolve():(h=>n.put({targetId:0,path:Ht(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>E.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:iM});const r=n.store("collectionParents"),i=new D_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Ht(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new he(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=lr(a);return s(c.popLast())}))}ni(e){const n=e.store("targets");return n.Y((r,i)=>{const s=ml(i),o=qP(this.serializer,s);return n.put(o)})}ri(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new M(he.fromString(h.document.name).popFirst(5)):h.noDocument?M.fromSegments(h.noDocument.path):h.unknownDocument?M.fromSegments(h.unknownDocument.path):B()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>E.waitFor(i))}ii(e,n){const r=n.store("mutations"),i=JP(this.serializer),s=new ZP(If.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:ne();rs(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),E.forEach(a,(l,u)=>{const c=new dt(u),h=vf.ct(this.serializer,c),d=s.getIndexManager(c),f=wf.ct(c,this.serializer,d,s.referenceDelegate);return new XP(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new gg(n,sn._e),l).next()})})}}function jE(t){t.createObjectStore("targetDocuments",{keyPath:nM}).createIndex("documentTargetsIndex",rM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",tM,{unique:!0}),t.createObjectStore("targetGlobal")}const qp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class O_{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=c,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!O_.D())throw new x(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new mF(this,i),this.Ii=n+"main",this.serializer=new zP(l),this.Ti=new jn(this.Ii,this.ai,new AF(this.serializer)),this.qr=new cF(this.referenceDelegate,this.serializer),this.remoteDocumentCache=JP(this.serializer),this.Kr=new nF,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,c===!1&&Ze("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(S.FAILED_PRECONDITION,qp);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new sn(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>jc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(n=>this.isPrimary&&!n?this.pi(e).next(()=>!1):!!n&&this.yi(e).next(()=>!0))).catch(e=>{if(qi(e))return b("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return b("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return nl(e).get("owner").next(n=>E.resolve(this.wi(n)))}Si(e){return jc(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=yt(n,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const n of e)this.Ei.removeItem(this.vi(n.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?E.resolve(!0):nl(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)){if(this.wi(n)&&this.networkEnabled)return!0;if(!this.wi(n)){if(!n.allowTabSynchronization)throw new x(S.FAILED_PRECONDITION,qp);return!1}}return!(!this.networkEnabled||!this.inForeground)||jc(e).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&b("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new gg(e,sn._e);return this.pi(n).next(()=>this.Si(n))}),this.Ti.close(),this.Ni()}Ci(e,n){return e.filter(r=>this.Di(r.updateTimeMs,n)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>jc(e).W().next(n=>this.Ci(n,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,n){return wf.ct(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new uF(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return vf.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,n,r){b("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?fM:l===14?ZA:l===13?XA:l===12?dM:l===11?JA:void B()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,a=>(o=new gg(a,this.Lr?this.Lr.next():sn._e),n==="readwrite-primary"?this.fi(o).next(l=>!!l||this.gi(o)).next(l=>{if(!l)throw Ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new x(S.FAILED_PRECONDITION,GA);return r(o)}).next(l=>this.yi(o).next(()=>l)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return nl(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)&&!this.wi(n)&&!(this._i||this.allowTabSynchronization&&n.allowTabSynchronization))throw new x(S.FAILED_PRECONDITION,qp)})}yi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return nl(e).put("owner",n)}static D(){return jn.D()}pi(e){const n=nl(e);return n.get("owner").next(r=>this.wi(r)?(b("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):E.resolve())}Di(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ze(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const n=/(?:Version|Mobile)\/1[456]/;cO()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var n;try{const r=((n=this.Ei)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return b("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ze("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){Ze("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function nl(t){return yt(t,"owner")}function jc(t){return yt(t,"clientMetadata")}function V_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class L_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new L_(e,n.fromCache,r,i)}}/**
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
 */class PF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class e1{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new PF;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(uo()<=se.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",co(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),E.resolve()):(uo()<=se.DEBUG&&b("QueryEngine","Query:",co(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(uo()<=se.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",co(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):E.resolve())}zi(e,n){if(pE(n))return E.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ld(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,ld(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return pE(n)||i.isEqual(W.min())?E.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?E.resolve(null):(uo()<=se.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),co(n)),this.Xi(e,o,n,WA(i,-1)).next(a=>a))})}Yi(e,n){let r=new Ee(pP(e));return n.forEach((i,s)=>{Zu(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return uo()<=se.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",co(n)),this.Gi.getDocumentsMatchingQuery(e,n,In.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class CF{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Pe(te),this.ns=new Wi(s=>Ns(s),Ju),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XP(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function t1(t,e,n,r){return new CF(t,e,n,r)}async function n1(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ne();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function kF(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=E.resolve();return d.forEach(_=>{f=f.next(()=>c.getEntry(l,_)).next(v=>{const w=u.docVersions.get(_);K(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function r1(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function xF(t,e){const n=U(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(lt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(v,w,m){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.qr.updateTargetData(s,f))});let l=an(),u=ne();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(i1(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(W.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function i1(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=an();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function bF(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sa(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function oa(t,e,n){const r=U(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qi(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function dd(t,e,n){const r=U(t);let i=W.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=U(l),d=h.ns.get(c);return d!==void 0?E.resolve(h.ts.get(d)):h.qr.getTargetData(u,c)}(r,o,Qt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:ne())).next(a=>(a1(r,fP(e),a),{documents:a,ls:s})))}function s1(t,e){const n=U(t),r=U(n.qr),i=n.ts.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function o1(t,e){const n=U(t),r=n.rs.get(e)||W.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.ss.getAllFromCollectionGroup(i,e,WA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(a1(n,e,i),i))}function a1(t,e,n){let r=t.rs.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}async function DF(t,e,n,r){const i=U(t);let s=ne(),o=an();for(const u of n){const c=e.hs(u.metadata.name);u.document&&(s=s.add(c));const h=e.Ps(u);h.setReadTime(e.Is(u.metadata.readTime)),o=o.insert(c,h)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),l=await sa(i,function(c){return Qt(Ea(he.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>i1(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.us,c.cs)).next(()=>c.us)))}async function NF(t,e,n=ne()){const r=await sa(t,Qt(x_(e.bundledQuery))),i=U(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=et(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,e);const a=r.withResumeToken(lt.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function zE(t,e){return`firestore_clients_${t}_${e}`}function qE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Wp(t,e){return`firestore_targets_${t}_${e}`}class fd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Ts(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new x(i.error.code,i.error.message))),o?new fd(e,n,i.state,s):(Ze("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Nl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Ts(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new x(r.error.code,r.error.message))),s?new Nl(e,r.state,i):(Ze("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pd{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ts(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=T_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=QA(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new pd(e,s):(Ze("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class M_{constructor(e,n){this.clientId=e,this.onlineState=n}static Ts(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new M_(n.clientId,n.onlineState):(Ze("SharedClientState",`Failed to parse online state: ${e}`),null)}}class kg{constructor(){this.activeTargetIds=T_()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kp{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new Pe(te),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=zE(this.persistenceKey,this.Rs),this.ws=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new kg),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.vs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const i=this.getItem(zE(this.persistenceKey,r));if(i){const s=pd.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const n=this.storage.getItem(this.Cs);if(n){const r=this.Ms(n);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let n=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,n,r){this.Ns(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Wp(this.persistenceKey,e));if(r){const i=Nl.Ts(e,r);i&&(n=i.state)}}return this.Ls.ds(e),this.Fs(),n}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Wp(this.persistenceKey,e))}updateQueryState(e,n,r){this.ks(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return b("SharedClientState","READ",e,n),n}setItem(e,n){b("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){b("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const n=e;if(n.storageArea===this.storage){if(b("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ys)return void Ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ss.test(n.key)){if(n.newValue==null){const r=this.Ks(n.key);return this.$s(r,null)}{const r=this.Us(n.key,n.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(n.key)){if(n.newValue!==null){const r=this.Ws(n.key,n.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.zs(n.key,n.newValue);if(r)return this.js(r)}}else if(n.key===this.Cs){if(n.newValue!==null){const r=this.Ms(n.newValue);if(r)return this.xs(r)}}else if(n.key===this.ws){const r=function(s){let o=sn._e;if(s!=null)try{const a=JSON.parse(s);K(typeof a=="number"),o=a}catch(a){Ze("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==sn._e&&this.sequenceNumberHandler(r)}else if(n.key===this.vs){const r=this.Hs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(n)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,n,r){const i=new fd(this.currentUser,e,n,r),s=qE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Es())}Bs(e){const n=qE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}qs(e){const n={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(n))}ks(e,n,r){const i=Wp(this.persistenceKey,e),s=new Nl(e,n,r);this.setItem(i,s.Es())}Qs(e){const n=JSON.stringify(Array.from(e));this.setItem(this.vs,n)}Ks(e){const n=this.Ss.exec(e);return n?n[1]:null}Us(e,n){const r=this.Ks(e);return pd.Ts(r,n)}Ws(e,n){const r=this.bs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return fd.Ts(new dt(s),i,n)}zs(e,n){const r=this.Ds.exec(e),i=Number(r[1]);return Nl.Ts(i,n)}Ms(e){return M_.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);b("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,n){const r=n?this.gs.insert(e,n):this.gs.remove(e),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let n=T_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class l1{constructor(){this.eo=new kg,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new kg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OF{ro(e){}shutdown(){}}/**
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
 */class WE{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zc=null;function Gp(){return zc===null?zc=function(){return 268435456+Math.round(2147483648*Math.random())}():zc++,"0x"+zc.toString(16)}/**
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
 */const VF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class LF{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const Nt="WebChannelConnection";class MF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Gp(),l=this.So(n,r);b("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(b("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Qn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ia}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=VF[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Gp();return new Promise((o,a)=>{const l=new DL;l.setWithCredentials(!0),l.listenOnce(kL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case jp.NO_ERROR:const c=l.getResponseJson();b(Nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case jp.TIMEOUT:b(Nt,`RPC '${e}' ${s} timed out`),a(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case jp.HTTP_ERROR:const h=l.getStatus();if(b(Nt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(f.status);a(new x(_,f.message))}else a(new x(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(S.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{b(Nt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(Nt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Gp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PL(),a=CL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new bL({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");b(Nt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const _=new LF({co:w=>{f?b(Nt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(b(Nt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),b(Nt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},lo:()=>h.close()}),v=(w,m,p)=>{w.listen(m,y=>{try{p(y)}catch(g){setTimeout(()=>{throw g},0)}})};return v(h,Fc.EventType.OPEN,()=>{f||b(Nt,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Fc.EventType.CLOSE,()=>{f||(f=!0,b(Nt,`RPC '${e}' stream ${i} transport closed`),_.Ro())}),v(h,Fc.EventType.ERROR,w=>{f||(f=!0,Qn(Nt,`RPC '${e}' stream ${i} transport errored:`,w),_.Ro(new x(S.UNAVAILABLE,"The operation could not be completed")))}),v(h,Fc.EventType.MESSAGE,w=>{var m;if(!f){const p=w.data[0];K(!!p);const y=p,g=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(g){b(Nt,`RPC '${e}' stream ${i} received error:`,g);const R=g.status;let P=function(Q){const G=nt[Q];if(G!==void 0)return CP(G)}(R),A=g.message;P===void 0&&(P=S.INTERNAL,A="Unknown error status: "+R+" with message "+g.message),f=!0,_.Ro(new x(P,A)),h.close()}else b(Nt,`RPC '${e}' stream ${i} received:`,p),_.Vo(p)}}),v(a,xL.STAT_EVENT,w=>{w.stat===XI.PROXY?b(Nt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===XI.NOPROXY&&b(Nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}/**
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
 *//**
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
 */function u1(){return typeof window<"u"?window:null}function dh(){return typeof document<"u"?document:null}/**
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
 */function rc(t){return new WM(t,!0)}/**
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
 */class F_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class c1{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new F_(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Ze(n.toString()),Ze("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new x(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FF extends c1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=HM(this.serializer,e),r=function(s){if(!("targetChange"in s))return W.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?et(o.readTime):W.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Eu(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=od(l)?{documents:MP(s,l)}:{query:FP(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=DP(s,o.resumeToken);const u=Tg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=ia(s,o.snapshotVersion.toTimestamp());const u=Tg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=YM(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Eu(this.serializer),n.removeTarget=e,this.e_(n)}}class UF extends c1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=QM(e.writeResults,e.commitTime),r=et(e.commitTime);return this.listener.I_(r,n)}return K(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Eu(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Tu(this.serializer,r))};this.e_(n)}}/**
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
 */class $F extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(S.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(S.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class BF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Ze(n),this.f_=!1):b("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class jF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Ki(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=U(l);u.C_.add(4),await Ra(u),u.M_.set("Unknown"),u.C_.delete(4),await ic(u)}(this))})}),this.M_=new BF(r,i)}}async function ic(t){if(Ki(t))for(const e of t.v_)await e(!0)}async function Ra(t){for(const e of t.v_)await e(!1)}function Ef(t,e){const n=U(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),B_(n)?$_(n):Pa(n).Ho()&&U_(n,e))}function Su(t,e){const n=U(t),r=Pa(n);n.D_.delete(e),r.Ho()&&h1(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Ki(n)&&n.M_.set("Unknown"))}function U_(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Pa(t).u_(e)}function h1(t,e){t.x_.Oe(e),Pa(t).c_(e)}function $_(t){t.x_=new BM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Pa(t).start(),t.M_.g_()}function B_(t){return Ki(t)&&!Pa(t).jo()&&t.D_.size>0}function Ki(t){return U(t).C_.size===0}function d1(t){t.x_=void 0}async function zF(t){t.D_.forEach((e,n)=>{U_(t,e)})}async function qF(t,e){d1(t),B_(t)?(t.M_.w_(e),$_(t)):t.M_.set("Unknown")}async function WF(t,e,n){if(t.M_.set("Online"),e instanceof bP&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await md(t,r)}else if(e instanceof hh?t.x_.$e(e):e instanceof xP?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(W.min()))try{const r=await r1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(lt.EMPTY_BYTE_STRING,c.snapshotVersion)),h1(s,l);const h=new Ar(c.target,l,u,c.sequenceNumber);U_(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await md(t,r)}}async function md(t,e,n){if(!qi(e))throw e;t.C_.add(1),await Ra(t),t.M_.set("Offline"),n||(n=()=>r1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await ic(t)})}function f1(t,e){return e().catch(n=>md(t,n,e))}async function Aa(t){const e=U(t),n=Oi(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;KF(e);)try{const i=await bF(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,GF(e,i)}catch(i){await md(e,i)}p1(e)&&m1(e)}function KF(t){return Ki(t)&&t.b_.length<10}function GF(t,e){t.b_.push(e);const n=Oi(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function p1(t){return Ki(t)&&!Oi(t).jo()&&t.b_.length>0}function m1(t){Oi(t).start()}async function HF(t){Oi(t).E_()}async function QF(t){const e=Oi(t);for(const n of t.b_)e.P_(n.mutations)}async function YF(t,e,n){const r=t.b_.shift(),i=A_.from(r,e,n);await f1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Aa(t)}async function JF(t,e){e&&Oi(t).h_&&await async function(r,i){if(function(o){return PP(o)&&o!==S.ABORTED}(i.code)){const s=r.b_.shift();Oi(r).Yo(),await f1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Aa(r)}}(t,e),p1(t)&&m1(t)}async function KE(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=Ki(n);n.C_.add(3),await Ra(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await ic(n)}async function xg(t,e){const n=U(t);e?(n.C_.delete(2),await ic(n)):e||(n.C_.add(2),await Ra(n),n.M_.set("Unknown"))}function Pa(t){return t.O_||(t.O_=function(n,r,i){const s=U(n);return s.A_(),new FF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:zF.bind(null,t),Io:qF.bind(null,t),a_:WF.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),B_(t)?$_(t):t.M_.set("Unknown")):(await t.O_.stop(),d1(t))})),t.O_}function Oi(t){return t.N_||(t.N_=function(n,r,i){const s=U(n);return s.A_(),new UF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:HF.bind(null,t),Io:JF.bind(null,t),T_:QF.bind(null,t),I_:YF.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Aa(t)):(await t.N_.stop(),t.b_.length>0&&(b("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class j_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new j_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ca(t,e){if(Ze("AsyncQueue",`${e}: ${t}`),qi(t))return new x(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $o{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=fl(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new $o(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $o)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $o;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class GE{constructor(){this.B_=new Pe(M.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):B():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class aa{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new aa(e,n,$o.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class XF{constructor(){this.k_=void 0,this.listeners=[]}}class ZF{constructor(){this.queries=new Wi(e=>dP(e),Xu),this.onlineState="Unknown",this.q_=new Set}}async function z_(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new XF),i)try{s.k_=await n.onListen(r)}catch(o){const a=Ca(o,`Initialization of query '${co(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&W_(n)}async function q_(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function e2(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&W_(n)}function t2(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function W_(t){t.q_.forEach(e=>{e.next()})}class K_{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new aa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=aa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class n2{constructor(e,n){this.Y_=e,this.byteLength=n}Z_(){return"metadata"in this.Y_}}/**
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
 */class HE{constructor(e){this.serializer=e}hs(e){return fr(this.serializer,e)}Ps(e){return e.metadata.exists?LP(this.serializer,e.document,!1):xe.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return et(e)}}class r2{constructor(e,n,r){this.X_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=g1(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++n;const r=he.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ta(e){const n=new Map,r=new HE(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ne()).add(s);n.set(o,a)}}return n}async complete(){const e=await DF(this.localStore,new HE(this.serializer),this.documents,this.X_.id),n=this.ta(this.documents);for(const r of this.queries)await NF(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function g1(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class y1{constructor(e){this.key=e}}class _1{constructor(e){this.key=e}}class v1{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=ne(),this.mutatedKeys=ne(),this._a=pP(e),this.aa=new $o(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new GE,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Zu(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?_!==v&&(r.track({type:3,doc:f}),w=!0):this.ha(d,f)||(r.track({type:2,doc:f}),w=!0,(l&&this._a(f,l)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),w=!0):d&&!f&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((u,c)=>function(d,f){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return _(d)-_(f)}(u.type,c.type)||this._a(u.doc,c.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,s.length!==0||l?{snapshot:new aa(this.query,e.aa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new GE,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=ne(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new _1(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new y1(r))}),n}da(e){this.ia=e.ls,this.oa=ne();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return aa.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class i2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class s2{constructor(e){this.key=e,this.Ra=!1}}class o2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Wi(a=>dP(a),Xu),this.fa=new Map,this.ga=new Set,this.pa=new Pe(M.comparator),this.ya=new Map,this.wa=new N_,this.Sa={},this.ba=new Map,this.Da=Fs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function a2(t,e){const n=J_(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await sa(n.localStore,Qt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await G_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Ef(n.remoteStore,o)}return i}async function G_(t,e,n,r,i){t.va=(h,d,f)=>async function(v,w,m,p){let y=w.view.ca(m);y.Zi&&(y=await dd(v.localStore,w.query,!1).then(({documents:P})=>w.view.ca(P,y)));const g=p&&p.targetChanges.get(w.targetId),R=w.view.applyChanges(y,v.isPrimaryClient,g);return bg(v,w.targetId,R.Ta),R.snapshot}(t,h,d,f);const s=await dd(t.localStore,e,!0),o=new v1(e,s.ls),a=o.ca(s.documents),l=nc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);bg(t,n,u.Ta);const c=new i2(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function l2(t,e){const n=U(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Xu(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await oa(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Su(n.remoteStore,r.targetId),la(n,r.targetId)}).catch(zi)):(la(n,r.targetId),await oa(n.localStore,r.targetId,!0))}async function u2(t,e,n){const r=X_(t);try{const i=await function(o,a){const l=U(o),u=Ve.now(),c=a.reduce((f,_)=>f.add(_.key),ne());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=an(),v=ne();return l.ss.getEntries(f,c).next(w=>{_=w,_.forEach((m,p)=>{p.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,_)).next(w=>{h=w;const m=[];for(const p of a){const y=FM(p,h.get(p.key).overlayedDocument);y!=null&&m.push(new Wr(p.key,y,rP(y.value.mapValue),Oe.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,m,a)}).next(w=>{d=w;const m=w.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(f,w.batchId,m)})}).then(()=>({batchId:d.batchId,changes:gP(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new Pe(te)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Kr(r,i.changes),await Aa(r.remoteStore)}catch(i){const s=Ca(i,"Failed to persist write");n.reject(s)}}async function w1(t,e){const n=U(t);try{const r=await xF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?K(o.Ra):i.removedDocuments.size>0&&(K(o.Ra),o.Ra=!1))}),await Kr(n,r,e)}catch(r){await zi(r)}}function QE(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=U(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&W_(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function c2(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new Pe(M.comparator);o=o.insert(s,xe.newNoDocument(s,W.min()));const a=ne().add(s),l=new tc(W.min(),new Map,new Pe(te),o,a);await w1(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),Y_(r)}else await oa(r.localStore,e,!1).then(()=>la(r,e,n)).catch(zi)}async function h2(t,e){const n=U(t),r=e.batch.batchId;try{const i=await kF(n.localStore,e);Q_(n,r,null),H_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Kr(n,i)}catch(i){await zi(i)}}async function d2(t,e,n){const r=U(t);try{const i=await function(o,a){const l=U(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(K(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);Q_(r,e,n),H_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Kr(r,i)}catch(i){await zi(i)}}async function f2(t,e){const n=U(t);Ki(n.remoteStore)||b("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=U(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ba.get(r)||[];i.push(e),n.ba.set(r,i)}catch(r){const i=Ca(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function H_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Q_(t,e,n){const r=U(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function la(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||I1(t,r)})}function I1(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Su(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Y_(t))}function bg(t,e,n){for(const r of n)r instanceof y1?(t.wa.addReference(r.key,e),p2(t,r)):r instanceof _1?(b("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||I1(t,r.key)):B()}function p2(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(b("SyncEngine","New document in limbo: "+n),t.ga.add(r),Y_(t))}function Y_(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new M(he.fromString(e)),r=t.Da.next();t.ya.set(r,new s2(n)),t.pa=t.pa.insert(n,r),Ef(t.remoteStore,new Ar(Qt(Ea(n.path)),r,"TargetPurposeLimboResolution",sn._e))}}async function Kr(t,e,n){const r=U(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=L_.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=U(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(u,d=>E.forEach(d.ki,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>E.forEach(d.qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!qi(h))throw h;b("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.ts.get(d),_=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(_);c.ts=c.ts.insert(d,v)}}}(r.localStore,s))}async function m2(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await n1(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new x(S.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Kr(n,r._s)}}function g2(t,e){const n=U(t),r=n.ya.get(e);if(r&&r.Ra)return ne().add(r.key);{let i=ne();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function y2(t,e){const n=U(t),r=await dd(n.localStore,e.query,!0),i=e.view.da(r);return n.isPrimaryClient&&bg(n,e.targetId,i.Ta),i}async function _2(t,e){const n=U(t);return o1(n.localStore,e).then(r=>Kr(n,r))}async function v2(t,e,n,r){const i=U(t),s=await function(a,l){const u=U(a),c=U(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>c.Cn(h,l).next(d=>d?u.localDocuments.getDocuments(h,d):E.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Aa(i.remoteStore):n==="acknowledged"||n==="rejected"?(Q_(i,e,r||null),H_(i,e),function(a,l){U(U(a).mutationQueue).Fn(l)}(i.localStore,e)):B(),await Kr(i,s)):b("SyncEngine","Cannot apply mutation batch with id: "+e)}async function w2(t,e){const n=U(t);if(J_(n),X_(n),e===!0&&n.Ca!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await YE(n,r.toArray());n.Ca=!0,await xg(n.remoteStore,!0);for(const s of i)Ef(n.remoteStore,s)}else if(e===!1&&n.Ca!==!1){const r=[];let i=Promise.resolve();n.fa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(la(n,o),oa(n.localStore,o,!0))),Su(n.remoteStore,o)}),await i,await YE(n,r),function(o){const a=U(o);a.ya.forEach((l,u)=>{Su(a.remoteStore,u)}),a.wa.Vr(),a.ya=new Map,a.pa=new Pe(M.comparator)}(n),n.Ca=!1,await xg(n.remoteStore,!1)}}async function YE(t,e,n){const r=U(t),i=[],s=[];for(const o of e){let a;const l=r.fa.get(o);if(l&&l.length!==0){a=await sa(r.localStore,Qt(l[0]));for(const u of l){const c=r.ma.get(u),h=await y2(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await s1(r.localStore,o);a=await sa(r.localStore,u),await G_(r,E1(u),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function E1(t){return hP(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function I2(t){return function(n){return U(U(n).persistence).Bi()}(U(t).localStore)}async function E2(t,e,n,r){const i=U(t);if(i.Ca)return void b("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await o1(i.localStore,fP(s[0])),a=tc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",lt.EMPTY_BYTE_STRING);await Kr(i,o,a);break}case"rejected":await oa(i.localStore,e,!0),la(i,e,r);break;default:B()}}async function T2(t,e,n){const r=J_(t);if(r.Ca){for(const i of e){if(r.fa.has(i)){b("SyncEngine","Adding an already active target "+i);continue}const s=await s1(r.localStore,i),o=await sa(r.localStore,s);await G_(r,E1(s),o.targetId,!1,o.resumeToken),Ef(r.remoteStore,o)}for(const i of n)r.fa.has(i)&&await oa(r.localStore,i,!1).then(()=>{Su(r.remoteStore,i),la(r,i)}).catch(zi)}}function J_(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=w1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=g2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=c2.bind(null,e),e.Va.a_=e2.bind(null,e.eventManager),e.Va.Fa=t2.bind(null,e.eventManager),e}function X_(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=h2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=d2.bind(null,e),e}function S2(t,e,n){const r=U(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,_){const v=U(f),w=et(_.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",m=>v.Kr.getBundleMetadata(m,_.id)).then(m=>!!m&&m.createTime.compareTo(w)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(g1(l));const u=new r2(l,s.localStore,o.serializer);let c=await o.Ma();for(;c;){const d=await u.ea(c);d&&a._updateProgress(d),c=await o.Ma()}const h=await u.complete();return await Kr(s,h.ra,void 0),await function(f,_){const v=U(f);return v.persistence.runTransaction("Save bundle","readwrite",w=>v.Kr.saveBundleMetadata(w,_))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h.na)}catch(l){return Qn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Dg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return t1(this.persistence,new e1,e.initialUser,this.serializer)}createPersistence(e){return new ZP(If.jr,this.serializer)}createSharedClientState(e){return new l1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class T1 extends Dg{constructor(e,n,r){super(),this.xa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await X_(this.xa.syncEngine),await Aa(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return t1(this.persistence,new e1,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new dF(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new QL(n,this.persistence);return new HL(e.asyncQueue,r)}createPersistence(e){const n=V_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new O_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,u1(),dh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new l1}}class R2 extends T1{constructor(e,n){super(e,n,!1),this.xa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.xa.syncEngine;this.sharedClientState instanceof Kp&&(this.sharedClientState.syncEngine={Ys:v2.bind(null,n),Zs:E2.bind(null,n),Xs:T2.bind(null,n),Bi:I2.bind(null,n),Js:_2.bind(null,n)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await w2(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=u1();if(!Kp.D(n))throw new x(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=V_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Kp(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Z_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>QE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=m2.bind(null,this.syncEngine),await xg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZF}()}createDatastore(e){const n=rc(e.databaseInfo.databaseId),r=function(s){return new MF(s)}(e.databaseInfo);return function(s,o,a,l){return new $F(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new jF(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>QE(this.syncEngine,n,0),function(){return WE.D()?new WE:new OF}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new o2(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=U(n);b("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ra(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */function JE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class Tf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Ze("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class A2{constructor(e,n){this.Ba=e,this.serializer=n,this.metadata=new pt,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const n=this.La.decode(e),r=Number(n);isNaN(r)&&this.Qa(`length string (${n}) is not valid number`);const i=await this.Ka(r);return new n2(JSON.parse(i),e.length+r)}$a(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const n=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class P2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new x(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=U(i),a=Eu(o.serializer)+"/documents",l={documents:s.map(d=>Iu(o.serializer,d))},u=await o.Co("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(d=>{const f=GM(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());K(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Sa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=M.fromPath(r);this.mutations.push(new S_(i,this.precondition(i)))}),await async function(r,i){const s=U(r),o=Eu(s.serializer)+"/documents",a={writes:i.map(l=>Tu(s.serializer,l))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw B();n=W.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new x(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(W.min())?Oe.exists(!1):Oe.updateTime(n):Oe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(W.min()))throw new x(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Oe.updateTime(n)}return Oe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class C2{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new F_(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new P2(this.datastore),n=this.za(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const n=this.updateFunction(e);return!Yu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!PP(n)}return!1}}/**
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
 */class k2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=zA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ca(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fh(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await n1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ng(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ev(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>KE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>KE(e.remoteStore,s)),t._onlineComponents=e}function S1(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ev(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!S1(n))throw n;Qn("Error using user provided cache. Falling back to memory cache: "+n),await fh(t,new Dg)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await fh(t,new Dg);return t._offlineComponents}async function Sf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Ng(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Ng(t,new Z_))),t._onlineComponents}function R1(t){return ev(t).then(e=>e.persistence)}function tv(t){return ev(t).then(e=>e.localStore)}function A1(t){return Sf(t).then(e=>e.remoteStore)}function nv(t){return Sf(t).then(e=>e.syncEngine)}function x2(t){return Sf(t).then(e=>e.datastore)}async function ua(t){const e=await Sf(t),n=e.eventManager;return n.onListen=a2.bind(null,e.syncEngine),n.onUnlisten=l2.bind(null,e.syncEngine),n}function b2(t){return t.asyncQueue.enqueue(async()=>{const e=await R1(t),n=await A1(t);return e.setNetworkEnabled(!0),function(i){const s=U(i);return s.C_.delete(0),ic(s)}(n)})}function D2(t){return t.asyncQueue.enqueue(async()=>{const e=await R1(t),n=await A1(t);return e.setNetworkEnabled(!1),async function(i){const s=U(i);s.C_.add(0),await Ra(s),s.M_.set("Offline")}(n)})}function N2(t,e){const n=new pt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const h=U(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new x(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Ca(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await tv(t),e,n)),n.promise}function P1(t,e,n={}){const r=new pt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Tf({next:d=>{o.enqueueAndForget(()=>q_(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new x(S.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new x(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new K_(Ea(a.path),c,{includeMetadataChanges:!0,J_:!0});return z_(s,h)}(await ua(t),t.asyncQueue,e,n,r)),r.promise}function O2(t,e){const n=new pt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await dd(i,s,!0),l=new v1(s,a.ls),u=l.ca(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=Ca(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await tv(t),e,n)),n.promise}function C1(t,e,n={}){const r=new pt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Tf({next:d=>{o.enqueueAndForget(()=>q_(s,h)),d.fromCache&&l.source==="server"?u.reject(new x(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new K_(a,c,{includeMetadataChanges:!0,J_:!0});return z_(s,h)}(await ua(t),t.asyncQueue,e,n,r)),r.promise}function V2(t,e){const n=new Tf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){U(i).q_.add(s),s.next()}(await ua(t),n)),()=>{n.Na(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){U(i).q_.delete(s)}(await ua(t),n))}}function L2(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?kP().encode(o):o,function(c,h){return new A2(c,h)}(function(c,h){if(c instanceof Uint8Array)return JE(c,h);if(c instanceof ArrayBuffer)return JE(new Uint8Array(c),h);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,rc(e));t.asyncQueue.enqueueAndForget(async()=>{S2(await nv(t),i,r)})}function M2(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=U(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await tv(t),e))}/**
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
 */function k1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const XE=new Map;/**
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
 */function rv(t,e,n){if(!n)throw new x(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function x1(t,e,n,r){if(e===!0&&r===!0)throw new x(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ZE(t){if(!M.isDocumentKey(t))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function e0(t){if(M.isDocumentKey(t))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function fe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rf(t);throw new x(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function b1(t,e){if(e<=0)throw new x(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class t0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}x1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ML;switch(r.type){case"firstParty":return new BL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=XE.get(n);r&&(b("ComponentProvider","Removing Datastore"),XE.delete(n),r.terminate())}(this),Promise.resolve()}}function D1(t,e,n,r={}){var i;const s=(t=fe(t,sc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=dt.MOCK_USER;else{a=PR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new dt(u)}t._authCredentials=new FL(new jA(a,l))}}/**
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
 */let Yt=class N1{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new N1(this.firestore,e,this._query)}},Ue=class O1{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new O1(this.firestore,e,this._key)}},Ti=class V1 extends Yt{constructor(e,n,r){super(e,n,Ea(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new M(e))}withConverter(e){return new V1(this.firestore,e,this._path)}};function Bo(t,e,...n){if(t=Y(t),rv("collection","path",e),t instanceof sc){const r=he.fromString(e,...n);return e0(r),new Ti(t,null,r)}{if(!(t instanceof Ue||t instanceof Ti))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return e0(r),new Ti(t.firestore,null,r)}}function F2(t,e){if(t=fe(t,sc),rv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Yt(t,null,function(r){return new qr(he.emptyPath(),r)}(e))}function gd(t,e,...n){if(t=Y(t),arguments.length===1&&(e=zA.newId()),rv("doc","path",e),t instanceof sc){const r=he.fromString(e,...n);return ZE(r),new Ue(t,null,new M(r))}{if(!(t instanceof Ue||t instanceof Ti))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return ZE(r),new Ue(t.firestore,t instanceof Ti?t.converter:null,new M(r))}}function L1(t,e){return t=Y(t),e=Y(e),(t instanceof Ue||t instanceof Ti)&&(e instanceof Ue||e instanceof Ti)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function M1(t,e){return t=Y(t),e=Y(e),t instanceof Yt&&e instanceof Yt&&t.firestore===e.firestore&&Xu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class U2{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new F_(this,"async_queue_retry"),this.iu=()=>{const n=dh();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=dh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new pt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!qi(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ze("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=j_.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&B()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function Og(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class $2{constructor(){this._progressObserver={},this._taskCompletionResolver=new pt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const B2=-1;let Ke=class extends sc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new U2}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||F1(this),this._firestoreClient.terminate()}};function j2(t,e){const n=typeof t=="object"?t:Hy(),r=typeof t=="string"?t:e||"(default)",i=Jd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=RR("firestore");s&&D1(i,...s)}return i}function _t(t){return t._firestoreClient||F1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function F1(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new gM(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,k1(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new k2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function z2(t,e){$1(t=fe(t,Ke));const n=_t(t);if(n._uninitializedComponentsProvider)throw new x(S.FAILED_PRECONDITION,"SDK cache is already specified.");Qn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Z_;return U1(n,i,new T1(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function q2(t){$1(t=fe(t,Ke));const e=_t(t);if(e._uninitializedComponentsProvider)throw new x(S.FAILED_PRECONDITION,"SDK cache is already specified.");Qn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Z_;return U1(e,r,new R2(r,n.cacheSizeBytes))}function U1(t,e,n){const r=new pt;return t.asyncQueue.enqueue(async()=>{try{await fh(t,n),await Ng(t,e),r.resolve()}catch(i){const s=i;if(!S1(s))throw s;Qn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function W2(t){if(t._initialized&&!t._terminated)throw new x(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new pt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!jn.D())return Promise.resolve();const i=r+"main";await jn.delete(i)}(V_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function K2(t){return function(n){const r=new pt;return n.asyncQueue.enqueueAndForget(async()=>f2(await nv(n),r)),r.promise}(_t(t=fe(t,Ke)))}function G2(t){return b2(_t(t=fe(t,Ke)))}function H2(t){return D2(_t(t=fe(t,Ke)))}function Q2(t,e){const n=_t(t=fe(t,Ke)),r=new $2;return L2(n,t._databaseId,e,r),r}function Y2(t,e){return M2(_t(t=fe(t,Ke)),e).then(n=>n?new Yt(t,null,n.query):null)}function $1(t){if(t._initialized||t._terminated)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mr(lt.fromBase64String(e))}catch(n){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mr(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Vi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Hs=class{constructor(e){this._methodName=e}};/**
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
 */class Af{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const J2=/^__.*__$/;class X2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}class B1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function j1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Pf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return yd(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(j1(this.Iu)&&J2.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Z2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||rc(e)}pu(e,n,r,i=!1){return new Pf({Iu:e,methodName:n,gu:r,path:Ne.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qs(t){const e=t._freezeSettings(),n=rc(t._databaseId);return new Z2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cf(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);av("Data must be an object, but it was:",o,r);const a=W1(r,o);let l,u;if(s.merge)l=new on(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Vg(e,h,n);if(!o.contains(d))throw new x(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);G1(c,d)||c.push(d)}l=new on(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new X2(new Rt(a),l,u)}class oc extends Hs{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oc}}function z1(t,e,n){return new Pf({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class iv extends Hs{_toFieldTransform(e){return new ec(e.path,new na)}isEqual(e){return e instanceof iv}}class eU extends Hs{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=z1(this,e,!0),r=this.yu.map(s=>Ys(s,n)),i=new Os(r);return new ec(e.path,i)}isEqual(e){return this===e}}class tU extends Hs{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=z1(this,e,!0),r=this.yu.map(s=>Ys(s,n)),i=new Vs(r);return new ec(e.path,i)}isEqual(e){return this===e}}class nU extends Hs{constructor(e,n){super(e),this.wu=n}_toFieldTransform(e){const n=new ra(e.serializer,wP(e.serializer,this.wu));return new ec(e.path,n)}isEqual(e){return this===e}}function sv(t,e,n,r){const i=t.pu(1,e,n);av("Data must be an object, but it was:",i,r);const s=[],o=Rt.empty();Gs(r,(l,u)=>{const c=lv(e,l,n);u=Y(u);const h=i.Ru(c);if(u instanceof oc)s.push(c);else{const d=Ys(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new on(s);return new B1(o,a,i.fieldTransforms)}function ov(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Vg(e,r,n)],l=[i];if(s.length%2!=0)throw new x(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Vg(e,s[d])),l.push(s[d+1]);const u=[],c=Rt.empty();for(let d=a.length-1;d>=0;--d)if(!G1(u,a[d])){const f=a[d];let _=l[d];_=Y(_);const v=o.Ru(f);if(_ instanceof oc)u.push(f);else{const w=Ys(_,v);w!=null&&(u.push(f),c.set(f,w))}}const h=new on(u);return new B1(c,h,o.fieldTransforms)}function q1(t,e,n,r=!1){return Ys(n,t.pu(r?4:3,e))}function Ys(t,e){if(K1(t=Y(t)))return av("Unsupported field value:",e,t),W1(t,e);if(t instanceof Hs)return function(r,i){if(!j1(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ys(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Y(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ve.fromDate(r);return{timestampValue:ia(i.serializer,s)}}if(r instanceof Ve){const s=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ia(i.serializer,s)}}if(r instanceof Af)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mr)return{bytesValue:DP(i.serializer,r._byteString)};if(r instanceof Ue){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:k_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Rf(r)}`)}(t,e)}function W1(t,e){const n={};return eP(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(r,i)=>{const s=Ys(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function K1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Af||t instanceof mr||t instanceof Ue||t instanceof Hs)}function av(t,e,n){if(!K1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Rf(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Vg(t,e,n){if((e=Y(e))instanceof Vi)return e._internalPath;if(typeof e=="string")return lv(t,e);throw yd("Field path arguments must be of type string or ",t,!1,void 0,n)}const rU=new RegExp("[~\\*/\\[\\]]");function lv(t,e,n){if(e.search(rU)>=0)throw yd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vi(...e.split("."))._internalPath}catch{throw yd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(S.INVALID_ARGUMENT,a+t+l)}function G1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ru{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iU extends Ru{data(){return super.data()}}function kf(t,e){return typeof e=="string"?lv(t,e):e instanceof Vi?e._internalPath:e._delegate._internalPath}/**
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
 */function H1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uv{}class ac extends uv{}function wr(t,e,...n){let r=[];e instanceof uv&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof cv).length,a=s.filter(l=>l instanceof xf).length;if(o>1||o>0&&a>0)throw new x(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class xf extends ac{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xf(e,n,r)}_apply(e){const n=this._parse(e);return J1(e._query,n),new Yt(e.firestore,e.converter,Eg(e._query,n))}_parse(e){const n=Qs(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){r0(h,c);const f=[];for(const _ of h)f.push(n0(l,s,_));d={arrayValue:{values:f}}}else d=n0(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||r0(h,c),d=q1(a,o,h,c==="in"||c==="not-in");return ae.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sU(t,e,n){const r=e,i=kf("where",t);return xf._create(i,r,n)}class cv extends uv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_e.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)J1(o,l),o=Eg(o,l)}(e._query,n),new Yt(e.firestore,e.converter,Eg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hv extends ac{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hv(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new x(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new x(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wu(s,o)}(e._query,this._field,this._direction);return new Yt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new qr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Q1(t,e="asc"){const n=e,r=kf("orderBy",t);return hv._create(r,n)}class bf extends ac{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new bf(e,n,r)}_apply(e){return new Yt(e.firestore,e.converter,ld(e._query,this._limit,this._limitType))}}function oU(t){return b1("limit",t),bf._create("limit",t,"F")}function aU(t){return b1("limitToLast",t),bf._create("limitToLast",t,"L")}class Df extends ac{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Df(e,n,r)}_apply(e){const n=Y1(e,this.type,this._docOrFields,this._inclusive);return new Yt(e.firestore,e.converter,function(i,s){return new qr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function lU(...t){return Df._create("startAt",t,!0)}function uU(...t){return Df._create("startAfter",t,!1)}class Nf extends ac{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Nf(e,n,r)}_apply(e){const n=Y1(e,this.type,this._docOrFields,this._inclusive);return new Yt(e.firestore,e.converter,function(i,s){return new qr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function cU(...t){return Nf._create("endBefore",t,!1)}function hU(...t){return Nf._create("endAt",t,!0)}function Y1(t,e,n,r){if(n[0]=Y(n[0]),n[0]instanceof Ru)return function(s,o,a,l,u){if(!l)throw new x(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of Uo(s))if(h.field.isKeyField())c.push(Ds(o,l.key));else{const d=l.data.field(h.field);if(gf(d))throw new x(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new x(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}c.push(d)}return new Ni(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Qs(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new x(S.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let _=0;_<c.length;_++){const v=c[_];if(d[_].field.isKeyField()){if(typeof v!="string")throw new x(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!E_(o)&&v.indexOf("/")!==-1)throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const w=o.path.child(he.fromString(v));if(!M.isDocumentKey(w))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const m=new M(w);f.push(Ds(a,m))}else{const w=q1(l,u,v);f.push(w)}}return new Ni(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function n0(t,e,n){if(typeof(n=Y(n))=="string"){if(n==="")throw new x(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!E_(e)&&n.indexOf("/")!==-1)throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!M.isDocumentKey(r))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ds(t,new M(r))}if(n instanceof Ue)return Ds(t,n._key);throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rf(n)}.`)}function r0(t,e){if(!Array.isArray(t)||t.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function J1(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new x(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new x(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class dv{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Af(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=w_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(yu(e));default:return null}}convertTimestamp(e){const n=ki(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);K(jP(r));const i=new bi(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||Ze(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Of(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class dU extends dv{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}/**
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
 */class ps{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ur=class extends Ru{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Ol=class extends Ur{data(e={}){return super.data(e)}},Li=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ps(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ol(this._firestore,this._userDataWriter,r.key,r,new ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Ol(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ol(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ps(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:fU(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function fU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}function X1(t,e){return t instanceof Ur&&e instanceof Ur?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Li&&e instanceof Li&&t._firestore===e._firestore&&M1(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function pU(t){t=fe(t,Ue);const e=fe(t.firestore,Ke);return P1(_t(e),t._key).then(n=>fv(e,t,n))}class Js extends dv{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function mU(t){t=fe(t,Ue);const e=fe(t.firestore,Ke),n=_t(e),r=new Js(e);return N2(n,t._key).then(i=>new Ur(e,r,t._key,i,new ps(i!==null&&i.hasLocalMutations,!0),t.converter))}function gU(t){t=fe(t,Ue);const e=fe(t.firestore,Ke);return P1(_t(e),t._key,{source:"server"}).then(n=>fv(e,t,n))}function Z1(t){t=fe(t,Yt);const e=fe(t.firestore,Ke),n=_t(e),r=new Js(e);return H1(t._query),C1(n,t._query).then(i=>new Li(e,r,t,i))}function yU(t){t=fe(t,Yt);const e=fe(t.firestore,Ke),n=_t(e),r=new Js(e);return O2(n,t._query).then(i=>new Li(e,r,t,i))}function _U(t){t=fe(t,Yt);const e=fe(t.firestore,Ke),n=_t(e),r=new Js(e);return C1(n,t._query,{source:"server"}).then(i=>new Li(e,r,t,i))}function i0(t,e,n){t=fe(t,Ue);const r=fe(t.firestore,Ke),i=Of(t.converter,e,n);return lc(r,[Cf(Qs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Oe.none())])}function s0(t,e,n,...r){t=fe(t,Ue);const i=fe(t.firestore,Ke),s=Qs(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof Vi?ov(s,"updateDoc",t._key,e,n,r):sv(s,"updateDoc",t._key,e),lc(i,[o.toMutation(t._key,Oe.exists(!0))])}function vU(t){return lc(fe(t.firestore,Ke),[new Sa(t._key,Oe.none())])}function ph(t,e){const n=fe(t.firestore,Ke),r=gd(t),i=Of(t.converter,e);return lc(n,[Cf(Qs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Oe.exists(!1))]).then(()=>r)}function eC(t,...e){var n,r,i;t=Y(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Og(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Og(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Ue)u=fe(t.firestore,Ke),c=Ea(t._key.path),l={next:h=>{e[o]&&e[o](fv(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=fe(t,Yt);u=fe(h.firestore,Ke),c=h._query;const d=new Js(u);l={next:f=>{e[o]&&e[o](new Li(u,d,h,f))},error:e[o+1],complete:e[o+2]},H1(t._query)}return function(d,f,_,v){const w=new Tf(v),m=new K_(f,w,_);return d.asyncQueue.enqueueAndForget(async()=>z_(await ua(d),m)),()=>{w.Na(),d.asyncQueue.enqueueAndForget(async()=>q_(await ua(d),m))}}(_t(u),c,a,l)}function wU(t,e){return V2(_t(t=fe(t,Ke)),Og(e)?e:{next:e})}function lc(t,e){return function(r,i){const s=new pt;return r.asyncQueue.enqueueAndForget(async()=>u2(await nv(r),i,s)),s.promise}(_t(t),e)}function fv(t,e,n){const r=n.docs.get(e._key),i=new Js(t);return new Ur(t,i,e._key,r,new ps(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const IU={maxAttempts:5};/**
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
 */let EU=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Qs(e)}set(e,n,r){this._verifyNotCommitted();const i=li(e,this._firestore),s=Of(i.converter,n,r),o=Cf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Oe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=li(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof Vi?ov(this._dataReader,"WriteBatch.update",s._key,n,r,i):sv(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Oe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=li(e,this._firestore);return this._mutations=this._mutations.concat(new Sa(n._key,Oe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function li(t,e){if((t=Y(t)).firestore!==e)throw new x(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 *//**
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
 */let TU=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Qs(n)}get(n){const r=li(n,this._firestore),i=new dU(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return B();const o=s[0];if(o.isFoundDocument())return new Ru(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Ru(this._firestore,i,r._key,null,r.converter);throw B()})}set(n,r,i){const s=li(n,this._firestore),o=Of(s.converter,r,i),a=Cf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=li(n,this._firestore);let a;return a=typeof(r=Y(r))=="string"||r instanceof Vi?ov(this._dataReader,"Transaction.update",o._key,r,i,s):sv(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=li(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=li(e,this._firestore),r=new Js(this._firestore);return super.get(e).then(i=>new Ur(this._firestore,r,n._key,i._document,new ps(!1,!1),n.converter))}};function SU(t,e,n){t=fe(t,Ke);const r=Object.assign(Object.assign({},IU),n);return function(s){if(s.maxAttempts<1)throw new x(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new pt;return s.asyncQueue.enqueueAndForget(async()=>{const u=await x2(s);new C2(s.asyncQueue,u,a,o,l).run()}),l.promise}(_t(t),i=>e(new TU(t,i)),r)}/**
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
 */function RU(){return new oc("deleteField")}function AU(){return new iv("serverTimestamp")}function PU(...t){return new eU("arrayUnion",t)}function CU(...t){return new tU("arrayRemove",t)}function kU(t){return new nU("increment",t)}(function(e,n=!0){(function(i){Ia=i})(zr),Mr(new Gn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ke(new UL(r.getProvider("auth-internal")),new zL(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),_n(ZI,"4.3.2",e),_n(ZI,"4.3.2","esm2017")})();var xU="firebase",bU="10.6.0";/**
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
 */_n(xU,bU,"app");/**
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
 */const tC="firebasestorage.googleapis.com",DU="storageBucket",NU=2*60*1e3,OU=10*60*1e3;/**
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
 */class _r extends Vt{constructor(e,n,r=0){super(Hp(e),`Firebase Storage: ${n} (${Hp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_r.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var gr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(gr||(gr={}));function Hp(t){return"storage/"+t}function VU(){const t="An unknown error occurred, please check the error payload for server response.";return new _r(gr.UNKNOWN,t)}function LU(){return new _r(gr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function MU(){return new _r(gr.CANCELED,"User canceled the upload/download.")}function FU(t){return new _r(gr.INVALID_URL,"Invalid URL '"+t+"'.")}function UU(t){return new _r(gr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function o0(t){return new _r(gr.INVALID_ARGUMENT,t)}function nC(){return new _r(gr.APP_DELETED,"The Firebase app was deleted.")}function $U(t){return new _r(gr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class zn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=zn.makeFromUrl(e,n)}catch{return new zn(e,"")}if(r.path==="")return r;throw UU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},v=n===tC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:f,indices:_,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<y.length;g++){const R=y[g],P=R.regex.exec(e);if(P){const A=P[R.indices.bucket];let V=P[R.indices.path];V||(V=""),r=new zn(A,V),R.postModify(r);break}}if(r==null)throw FU(e);return r}}class BU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function jU(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function d(){s&&clearTimeout(s)}function f(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let _=!1;function v(w){_||(_=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function zU(t){t(!1)}/**
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
 */function qU(t){return t!==void 0}function a0(t,e,n,r){if(r<e)throw o0(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw o0(`Invalid value for '${t}'. Expected ${n} or less.`)}function WU(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var _d;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_d||(_d={}));/**
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
 */function KU(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class GU{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,_)=>{this.resolve_=f,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new qc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===_d.NO_ERROR,l=s.getStatus();if(!a||KU(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===_d.ABORT;r(!1,new qc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new qc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());qU(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=VU();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?nC():MU();o(l)}else{const l=LU();o(l)}};this.canceled_?n(!1,new qc(!1,null,!0)):this.backoffId_=jU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function HU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function QU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function YU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XU(t,e,n,r,i,s,o=!0){const a=WU(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return YU(u,e),HU(u,n),QU(u,s),JU(u,r),new GU(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function ZU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function e4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class vd{constructor(e,n){this._service=e,n instanceof zn?this._location=n:this._location=zn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vd(e,n)}get root(){const e=new zn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return e4(this._location.path)}get storage(){return this._service}get parent(){const e=ZU(this._location.path);if(e===null)return null;const n=new zn(this._location.bucket,e);return new vd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $U(e)}}function l0(t,e){const n=e==null?void 0:e[DU];return n==null?null:zn.makeFromBucketSpec(n,t)}function t4(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:PR(i,t.app.options.projectId))}class n4{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=tC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=NU,this._maxUploadRetryTime=OU,this._requests=new Set,i!=null?this._bucket=zn.makeFromBucketSpec(i,this._host):this._bucket=l0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=zn.makeFromBucketSpec(this._url,e):this._bucket=l0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vd(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new BU(nC());{const o=XU(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const u0="@firebase/storage",c0="0.11.2";/**
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
 */const rC="storage";function r4(t=Hy(),e){t=Y(t);const r=Jd(t,rC).getImmediate({identifier:e}),i=RR("storage");return i&&i4(r,...i),r}function i4(t,e,n,r={}){t4(t,e,n,r)}function s4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new n4(n,r,i,e,zr)}function o4(){Mr(new Gn(rC,s4,"PUBLIC").setMultipleInstances(!0)),_n(u0,c0,""),_n(u0,c0,"esm2017")}o4();const a4={apiKey:"AIzaSyCi3qkK34ti7Do0P2tKLZX6yqW9afRCpOA",authDomain:"myweb-897b8.firebaseapp.com",projectId:"myweb-897b8",storageBucket:"myweb-897b8.appspot.com",messagingSenderId:"1066894459722",appId:"1:1066894459722:web:075633b69f17fb64bd77b3",measurementId:"G-54Y7DBRV50"},iC=Xd(a4);r4(iC);const mh=j2(iC),pv=D.memo(({prop:t})=>{const[e,n]=D.useState([]);D.useEffect(()=>{r()},[t]);const r=async()=>{if(t){const s=wr(Bo(mh,t),Q1("createdAt","desc"));try{const a=(await Z1(s)).docs.map(l=>{const{title:u,content:c,createdAt:h}=l.data();return{id:l.id,title:u,content:c,createdAt:h}});n(a)}catch(o){console.error("Error fetching data:",o)}}},i=D.useMemo(()=>e,[e]);return C.jsx(C.Fragment,{children:i.map(s=>C.jsxs("div",{className:"py-3 px-2 text-slate-800 flex flex-col justify-start items-start max-mobile:px-1",children:[C.jsx("span",{className:"font-semibold text-lg ml-[20px] mb-2 max-mobile:ml-[14px] max-mobile:text-sm max-smallphone:text-sm max-mobile:font-bold max-smallphone:font-bold",children:s.title}),C.jsx("pre",{className:"flex flex-col text-left",children:C.jsx("p",{className:"font-medium px-6 text-sm mt-1 max-mobile:text-xs max-mobile:px-2",children:s.content.includes("http")?s.content.split(" ").map((o,a)=>o.startsWith("http")?C.jsx(rn,{to:o,target:"_blank",rel:"noopener noreferrer",children:o},a):C.jsxs("span",{children:[o," "]},a)):s.content})})]},s.id))})}),l4=()=>{const t=sessionStorage.getItem("adminKey"),[e]=D.useState("home");return C.jsxs("div",{className:"h-[100vh] grid-2 flex justify-around",children:[C.jsxs("div",{className:"bg-transparent text-slate-800 rounded-2xl rounded-l-none w-[9vw] mt-1 mx-2 p-7 flex-col text-left text-[19px] font-semibold max-tablet:text-[19px] max-tablet:w-[12vw] max-smalltab:w-[14vw] max-mobile:text-[13px] max-mobile:w-[14vw] max-mobile:p-1 max-smallphone:w-[14vw]",children:[C.jsx("div",{children:C.jsx(rn,{to:"/project",children:"project"})}),C.jsx("div",{children:C.jsx(rn,{to:"https://www.notion.so/goyaresume/707d9a851a7f4666a1815e8ee0e016f5",children:"resume"})}),C.jsx(rn,{to:"/study",children:"study"}),t?C.jsx("div",{children:C.jsx(rn,{to:"/post",children:C.jsx("span",{className:"font-semibold text-xl",children:"⚑"})})}):C.jsx(C.Fragment,{})]}),C.jsxs("div",{className:"bg-slate-50 rounded-xl w-[88vw] h-[86vh] flex-col overflow-y-auto text-center p-3 mt-2 max-laptop:w-[88vw] max-tablet:w-[82vw] max-smalltab:w-[80vw] max-mobile:mr-2 max-mobile:w-[76vw] max-smallphone:h-[84vh]",children:[C.jsx("img",{src:"/profile.webp",alt:"profile",className:"w-[100px] ml-8 mt-3 mb-2 max-mobile:ml-6"}),C.jsx(pv,{prop:e})]})]})},u4=()=>{const t=sessionStorage.getItem("adminKey"),[e]=D.useState("project");return C.jsxs("div",{className:"h-[100vh] grid-2 flex justify-around",children:[C.jsxs("div",{className:"bg-transparent text-slate-800 rounded-2xl rounded-l-none w-[9vw] mt-1 mx-2 p-7 flex-col text-left text-[19px] font-semibold max-tablet:text-[19px] max-tablet:w-[12vw] max-smalltab:w-[14vw] max-mobile:text-[13px] max-mobile:w-[14vw] max-mobile:p-1 max-smallphone:w-[14vw]",children:[C.jsx("div",{children:C.jsx(rn,{to:"/project",children:"project"})}),C.jsx("div",{children:C.jsx(rn,{to:"https://www.notion.so/goyaresume/707d9a851a7f4666a1815e8ee0e016f5",children:"resume"})}),C.jsx(rn,{to:"/study",children:"study"}),t?C.jsx("div",{children:C.jsx(rn,{to:"/post",children:C.jsx("span",{className:"font-semibold text-xl",children:"⚑"})})}):C.jsx(C.Fragment,{})]}),C.jsx("div",{className:"bg-slate-50 rounded-xl w-[88vw] h-[86vh] flex-col overflow-y-auto text-center p-3 mt-2 max-laptop:w-[88vw] max-tablet:w-[82vw] max-smalltab:w-[80vw] max-mobile:mr-2 max-mobile:w-[76vw] max-smallphone:h-[84vh]",children:C.jsx(pv,{prop:e})})]})},c4=()=>{const t=sessionStorage.getItem("adminKey"),[e]=D.useState("study");return C.jsxs("div",{className:"h-[100vh] grid-2 flex justify-around",children:[C.jsxs("div",{className:"bg-transparent text-slate-800 rounded-2xl rounded-l-none w-[9vw] mt-1 mx-2 p-7 flex-col text-left text-[19px] font-semibold max-tablet:text-[19px] max-tablet:w-[12vw] max-smalltab:w-[14vw] max-mobile:text-[13px] max-mobile:w-[14vw] max-mobile:p-1 max-smallphone:w-[14vw]",children:[C.jsx("div",{children:C.jsx(rn,{to:"/project",children:"project"})}),C.jsx("div",{children:C.jsx(rn,{to:"https://www.notion.so/goyaresume/707d9a851a7f4666a1815e8ee0e016f5",children:"resume"})}),C.jsx(rn,{to:"/study",children:"study"}),t?C.jsx("div",{children:C.jsx(rn,{to:"/post",children:C.jsx("span",{className:"font-semibold text-xl",children:"⚑"})})}):C.jsx(C.Fragment,{})]}),C.jsx("div",{className:"bg-slate-50 rounded-xl w-[88vw] h-[86vh] flex-col overflow-y-auto text-center p-3 mt-2 max-laptop:w-[88vw] max-tablet:w-[82vw] max-smalltab:w-[80vw] max-mobile:mr-2 max-mobile:w-[76vw] max-smallphone:h-[84vh]",children:C.jsx(pv,{prop:e})})]})},h4=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),[i,s]=D.useState("home"),o=Wd(),a=sessionStorage.getItem("adminKey");D.useEffect(()=>{a||o("/")},[]);const l=c=>{c.preventDefault(),c.target.value==="project"?s("project"):c.target.value==="study"?s("study"):s("home")},u=async c=>{if(c.preventDefault(),!(t===""&&n==="")){try{i==="home"?(await ph(Bo(mh,"home"),{title:t,content:n,createdAt:Date.now()}),o("/")):i==="project"?(await ph(Bo(mh,"project"),{title:t,content:n,createdAt:Date.now()}),o("/project")):(await ph(Bo(mh,"study"),{title:t,content:n,createdAt:Date.now()}),o("/study"))}catch(h){console.error(h)}e(""),r("")}};return C.jsx("div",{className:"bg-slate-50 rounded-xl w-[98vw] h-[87vh] flex-col mx-2 p-5 mt-2 max-tablet:w-[96vw] max-mobile:mr-2 max-mobile:w-[92vw]",children:C.jsxs("div",{className:"flex flex-col gap-2 items-center justify-center",children:[C.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[i==="home"&&C.jsxs(C.Fragment,{children:[C.jsx("button",{value:"project",onClick:c=>l(c),className:"bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"project"}),C.jsx("button",{value:"study",onClick:c=>l(c),className:"bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"study"})]}),i==="project"&&C.jsxs(C.Fragment,{children:[C.jsx("button",{value:"project",onClick:c=>l(c),className:"bg-slate-800 text-slate-100 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"project"}),C.jsx("button",{value:"study",onClick:c=>l(c),className:"bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"study"})]}),i==="study"&&C.jsxs(C.Fragment,{children:[C.jsx("button",{value:"project",onClick:c=>l(c),className:"bg-slate-200 text-slate-800 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"project"}),C.jsx("button",{value:"study",onClick:c=>l(c),className:"bg-slate-800 text-slate-100 font-medium w-[65px] h-[35px] mt-2 rounded-full",children:"study"})]})]}),C.jsx("input",{type:"text",id:"title",value:t,onChange:c=>e(c.target.value),placeholder:" title",className:"w-[80vw] h-[35px] border-2 rounded-md font-medium"}),C.jsxs("div",{className:"flex w-[80vw] h-[40px] gap-2 text-xl items-center px-1",children:[C.jsx("input",{id:"file",type:"file",accept:"image/*",className:"hidden"}),C.jsx("label",{htmlFor:"file",className:"bg-slate-200 w-[33px] h-[33px] rounded-xl text-center items-center cursor-pointer",children:"📷"}),C.jsx("span",{className:"bg-slate-200 w-[33px] h-[33px] rounded-xl text-center items-center",children:"🔗"})]}),C.jsx("textarea",{name:"content",id:"content",value:n,onChange:c=>r(c.target.value),placeholder:" content",className:"w-[80vw] h-[54vh] border-2 rounded-md font-medium max-smallphone:h-[51vh] max-mobile:h-[54vh]"}),C.jsx("button",{onClick:u,className:"bg-slate-800 text-slate-50 font-semibold w-[95px] h-[35px] mt-2 rounded-lg",children:"post"})]})})},d4=()=>{const[t,e]=D.useState(""),[n,r]=D.useState(""),i=Wd(),s="n6QFVfs74YDiUrW38Fzb";D.useEffect(()=>{sessionStorage.getItem("adminKey")&&i("/")},[]);const o=a=>{a.preventDefault(),t==="goyka"&&n==="220605"?sessionStorage.setItem("adminKey",s):(alert("잘못 된 접근입니다. 메인 페이지로 안내합니다."),i("/")),e(""),r(""),i("/")};return C.jsxs("div",{className:"flex flex-col justify-center items-center w-[96vw] h-[77vh] gap-1.5 text-sm font-semibold",children:[C.jsx("label",{htmlFor:"id",children:"관리자 코드"}),C.jsx("input",{type:"text",className:"w-[215px] h-[35px] border-2 rounded-md font-medium",value:t,onChange:a=>e(a.target.value),id:"id",placeholder:" admin code"}),C.jsx("label",{htmlFor:"password",children:"비밀번호"}),C.jsx("input",{type:"password",className:"w-[215px] h-[35px] border-2 rounded-md font-medium",value:n,onChange:a=>r(a.target.value),id:"password",placeholder:" password"}),C.jsx("button",{onClick:o,className:"bg-slate-800 text-slate-50 font-semibold w-[95px] h-[35px] mt-2 rounded-lg",children:"admin"})]})},f4=sN([{path:"/",element:C.jsx(YN,{}),children:[{path:"",element:C.jsx(l4,{})},{path:"/study",element:C.jsx(c4,{})},{path:"/project",element:C.jsx(u4,{})},{path:"/admin",element:C.jsx(d4,{})},{path:"/post",element:C.jsx(h4,{})}]}]);/**
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
 */class p4{constructor(e,n){this._delegate=e,this.firebase=n,Jh(e,new Gn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),VR(this._delegate)))}_getService(e,n=Ai){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ai){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Jh(this._delegate,e)}_addOrOverwriteComponent(e){OR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const m4={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},h0=new Ws("app-compat","Firebase",m4);/**
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
 */function g4(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:_n,setLogLevel:MR,onLog:LR,apps:null,SDK_VERSION:zr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:AV}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Ai,!xI(e,u))throw h0.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=Xd(u,c);if(xI(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(Mr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw h0.create("invalid-app-argument",{appName:c});return f[h]()};u.serviceProps!==void 0&&Yh(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function sC(){const t=g4(p4);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:sC,extendNamespace:e,createSubscribe:xR,ErrorFactory:Ws,deepExtend:Yh});function e(n){Yh(t,n)}return t}const y4=sC();/**
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
 */const d0=new Yd("@firebase/app-compat"),_4="@firebase/app-compat",v4="0.2.23";/**
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
 */function w4(t){_n(_4,v4,t)}/**
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
 */if(uO()&&self.firebase!==void 0){d0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&d0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Vf=y4;w4();function mv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const rl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},lo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function I4(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function oC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E4=I4,T4=oC,aC=new Ws("auth","Firebase",oC());/**
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
 */const wd=new Yd("@firebase/auth");function S4(t,...e){wd.logLevel<=se.WARN&&wd.warn(`Auth (${zr}): ${t}`,...e)}function gh(t,...e){wd.logLevel<=se.ERROR&&wd.error(`Auth (${zr}): ${t}`,...e)}/**
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
 */function xt(t,...e){throw gv(t,...e)}function Ct(t,...e){return gv(t,...e)}function lC(t,e,n){const r=Object.assign(Object.assign({},T4()),{[e]:n});return new Ws("auth","Firebase",r).create(e,{appName:t.name})}function ka(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xt(t,"argument-error"),lC(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aC.create(t,...e)}function O(t,e,...n){if(!t)throw gv(e,...n)}function cr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gh(e),new Error(e)}function Yn(t,e){t||cr(e)}/**
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
 */function Au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yv(){return f0()==="http:"||f0()==="https:"}function f0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function R4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yv()||CR()||"connection"in navigator)?navigator.onLine:!0}function A4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class uc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=lO()||Wy()}get(){return R4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _v(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const P4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const C4=new uc(3e4,6e4);function He(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qe(t,e,n,r,i={}){return cC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_a(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),uC.fetch()(hC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function cC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},P4),e);try{const i=new x4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw gl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lC(t,c,u);xt(t,c)}}catch(i){if(i instanceof Vt)throw i;xt(t,"network-request-failed",{message:String(i)})}}async function Gr(t,e,n,r,i={}){const s=await Qe(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_v(t.config,i):`${t.config.apiScheme}://${i}`}function k4(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class x4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),C4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function p0(t){return t!==void 0&&t.getResponse!==void 0}function m0(t){return t!==void 0&&t.enterprise!==void 0}class b4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return k4(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function D4(t){return(await Qe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function N4(t,e){return Qe(t,"GET","/v2/recaptchaConfig",He(t,e))}/**
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
 */async function O4(t,e){return Qe(t,"POST","/v1/accounts:delete",e)}async function V4(t,e){return Qe(t,"POST","/v1/accounts:update",e)}async function L4(t,e){return Qe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M4(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=Lf(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vl(Qp(i.auth_time)),issuedAtTime:Vl(Qp(i.iat)),expirationTime:Vl(Qp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qp(t){return Number(t)*1e3}function Lf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gh("JWT malformed, contained fewer than 3 sections"),null;try{const i=SR(n);return i?JSON.parse(i):(gh("Failed to decode base64 JWT payload"),null)}catch(i){return gh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function F4(t){const e=Lf(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $r(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vt&&U4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function U4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vl(this.lastLoginAt),this.creationTime=Vl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $r(t,L4(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?z4(s.providerUserInfo):[],a=j4(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function B4(t){const e=Y(t);await Pu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function z4(t){return t.map(e=>{var{providerId:n}=e,r=mv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function q4(t,e){const n=await cC(t,{},async()=>{const r=_a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function W4(t,e){return Qe(t,"POST","/v2/accounts:revokeToken",He(t,e))}/**
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
 */class Cu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):F4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await q4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Cu;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cu,this.toJSON())}_performRefresh(){return cr("not implemented")}}/**
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
 */function ei(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ws{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $r(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return M4(this,e)}reload(){return B4(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ws(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $r(this,O4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:g,isAnonymous:R,providerData:P,stsTokenManager:A}=n;O(y&&A,e,"internal-error");const V=Cu.fromJSON(this.name,A);O(typeof y=="string",e,"internal-error"),ei(h,e.name),ei(d,e.name),O(typeof g=="boolean",e,"internal-error"),O(typeof R=="boolean",e,"internal-error"),ei(f,e.name),ei(_,e.name),ei(v,e.name),ei(w,e.name),ei(m,e.name),ei(p,e.name);const Q=new ws({uid:y,auth:e,email:d,emailVerified:g,displayName:h,isAnonymous:R,photoURL:_,phoneNumber:f,tenantId:v,stsTokenManager:V,createdAt:m,lastLoginAt:p});return P&&Array.isArray(P)&&(Q.providerData=P.map(G=>Object.assign({},G))),w&&(Q._redirectEventId=w),Q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Cu;i.updateFromServerResponse(n);const s=new ws({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pu(s),s}}/**
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
 */const g0=new Map;function gn(t){Yn(t instanceof Function,"Expected a class definition");let e=g0.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,g0.set(t,e),e)}/**
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
 */class fC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fC.type="NONE";const ca=fC;/**
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
 */function Is(t,e,n){return`firebase:${t}:${e}:${n}`}class jo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Is(this.userKey,i.apiKey,s),this.fullPersistenceKey=Is("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ws._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jo(gn(ca),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||gn(ca);const o=Is(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ws._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new jo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new jo(s,e,r))}}/**
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
 */function y0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yC(e))return"Blackberry";if(_C(e))return"Webos";if(vv(e))return"Safari";if((e.includes("chrome/")||mC(e))&&!e.includes("edge/"))return"Chrome";if(cc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pC(t=Be()){return/firefox\//i.test(t)}function vv(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mC(t=Be()){return/crios\//i.test(t)}function gC(t=Be()){return/iemobile/i.test(t)}function cc(t=Be()){return/android/i.test(t)}function yC(t=Be()){return/blackberry/i.test(t)}function _C(t=Be()){return/webos/i.test(t)}function xa(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function K4(t=Be()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function G4(t=Be()){var e;return xa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function H4(){return kR()&&document.documentMode===10}function vC(t=Be()){return xa(t)||cc(t)||_C(t)||yC(t)||/windows phone/i.test(t)||gC(t)}function Q4(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wC(t,e=[]){let n;switch(t){case"Browser":n=y0(Be());break;case"Worker":n=`${y0(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
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
 */class Y4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function J4(t,e={}){return Qe(t,"GET","/v2/passwordPolicy",He(t,e))}/**
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
 */const X4=6;class Z4{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:X4,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class e${constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _0(this),this.idTokenSubscription=new _0(this),this.beforeStateQueue=new Y4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await jo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Y(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await J4(this),n=new Z4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ws("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await W4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await jo.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&S4(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ge(t){return Y(t)}class _0{constructor(e){this.auth=e,this.observer=null,this.addObserver=xR(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function t$(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",t$().appendChild(r)})}function IC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const n$="https://www.google.com/recaptcha/enterprise.js?render=",r$="recaptcha-enterprise",i$="NO_RECAPTCHA";class s${constructor(e){this.type=r$,this.auth=Ge(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{N4(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new b4(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;m0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(i$)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&m0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wv(n$+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function v0(t,e,n,r=!1){const i=new s$(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ku(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await v0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await v0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function o$(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function a$(t,e,n){const r=Ge(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=EC(e),{host:o,port:a}=l$(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||u$()}function EC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function l$(t){const e=EC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:w0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:w0(o)}}}function w0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function u$(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ba{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cr("not implemented")}_getIdTokenResponse(e){return cr("not implemented")}_linkToIdToken(e,n){return cr("not implemented")}_getReauthenticationResolver(e){return cr("not implemented")}}/**
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
 */async function TC(t,e){return Qe(t,"POST","/v1/accounts:resetPassword",He(t,e))}async function c$(t,e){return Qe(t,"POST","/v1/accounts:update",e)}async function h$(t,e){return Qe(t,"POST","/v1/accounts:signUp",e)}async function d$(t,e){return Qe(t,"POST","/v1/accounts:update",He(t,e))}/**
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
 */async function f$(t,e){return Gr(t,"POST","/v1/accounts:signInWithPassword",He(t,e))}async function Mf(t,e){return Qe(t,"POST","/v1/accounts:sendOobCode",He(t,e))}async function p$(t,e){return Mf(t,e)}async function m$(t,e){return Mf(t,e)}async function g$(t,e){return Mf(t,e)}async function y$(t,e){return Mf(t,e)}/**
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
 */async function _$(t,e){return Gr(t,"POST","/v1/accounts:signInWithEmailLink",He(t,e))}async function v$(t,e){return Gr(t,"POST","/v1/accounts:signInWithEmailLink",He(t,e))}/**
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
 */class xu extends ba{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ku(e,n,"signInWithPassword",f$);case"emailLink":return _$(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ku(e,r,"signUpPassword",h$);case"emailLink":return v$(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Dr(t,e){return Gr(t,"POST","/v1/accounts:signInWithIdp",He(t,e))}/**
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
 */const w$="http://localhost";class yr extends ba{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}buildRequest(){const e={requestUri:w$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_a(n)}return e}}/**
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
 */async function I$(t,e){return Qe(t,"POST","/v1/accounts:sendVerificationCode",He(t,e))}async function E$(t,e){return Gr(t,"POST","/v1/accounts:signInWithPhoneNumber",He(t,e))}async function T$(t,e){const n=await Gr(t,"POST","/v1/accounts:signInWithPhoneNumber",He(t,e));if(n.temporaryProof)throw gl(t,"account-exists-with-different-credential",n);return n}const S$={USER_NOT_FOUND:"user-not-found"};async function R$(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Gr(t,"POST","/v1/accounts:signInWithPhoneNumber",He(t,n),S$)}/**
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
 */class Es extends ba{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Es({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Es({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return E$(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return T$(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return R$(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Es({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function A$(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function P$(t){const e=Co(cl(t)).link,n=e?Co(cl(e)).deep_link_id:null,r=Co(cl(t)).deep_link_id;return(r?Co(cl(r)).link:null)||r||n||e||t}class Ff{constructor(e){var n,r,i,s,o,a;const l=Co(cl(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=A$((i=l.mode)!==null&&i!==void 0?i:null);O(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=P$(e);try{return new Ff(n)}catch{return null}}}/**
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
 */class Gi{constructor(){this.providerId=Gi.PROVIDER_ID}static credential(e,n){return xu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ff.parseLink(n);return O(r,"argument-error"),xu._fromEmailAndCode(e,r.code,r.tenantId)}}Gi.PROVIDER_ID="password";Gi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Da extends Hr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class zo extends Da{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return O("providerId"in n&&"signInMethod"in n,"argument-error"),yr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return O(e.idToken||e.accessToken,"argument-error"),yr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return zo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return zo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new zo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class nr extends Da{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class ir extends Da{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */const C$="http://localhost";class ha extends ba{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ha(r,s)}static _create(e,n){return new ha(e,n)}buildRequest(){return{requestUri:C$,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const k$="saml.";class Id extends Hr{constructor(e){O(e.startsWith(k$),"argument-error"),super(e)}static credentialFromResult(e){return Id.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Id.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ha.fromJSON(e);return O(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ha._create(r,n)}catch{return null}}}/**
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
 */class sr extends Da{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */async function SC(t,e){return Gr(t,"POST","/v1/accounts:signUp",He(t,e))}/**
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
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ws._fromIdTokenResponse(e,r,i),o=I0(r);return new Vn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=I0(r);return new Vn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function I0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function x$(t){var e;const n=Ge(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Vn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await SC(n,{returnSecureToken:!0}),i=await Vn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Ed extends Vt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ed.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ed(e,n,r,i)}}function RC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ed._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function AC(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function b$(t,e){const n=Y(t);await Uf(!0,n,e);const{providerUserInfo:r}=await V4(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=AC(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Iv(t,e,n=!1){const r=await $r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vn._forOperation(t,"link",r)}async function Uf(t,e,n){await Pu(e);const r=AC(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";O(r.has(n)===t,e.auth,i)}/**
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
 */async function PC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await $r(t,RC(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=Lf(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),Vn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
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
 */async function CC(t,e,n=!1){const r="signIn",i=await RC(t,r,e),s=await Vn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $f(t,e){return CC(Ge(t),e)}async function kC(t,e){const n=Y(t);return await Uf(!1,n,e.providerId),Iv(n,e)}async function xC(t,e){return PC(Y(t),e)}/**
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
 */async function D$(t,e){return Gr(t,"POST","/v1/accounts:signInWithCustomToken",He(t,e))}/**
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
 */async function N$(t,e){const n=Ge(t),r=await D$(n,{token:e,returnSecureToken:!0}),i=await Vn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class hc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Ev._fromServerResponse(e,n):"totpInfo"in n?Tv._fromServerResponse(e,n):xt(e,"internal-error")}}class Ev extends hc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Ev(n)}}class Tv extends hc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Tv(n)}}/**
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
 */function Bf(t,e,n){var r;O(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),O(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Sv(t){const e=Ge(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function O$(t,e,n){const r=Ge(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Bf(r,i,n),await ku(r,i,"getOobCode",m$)}async function V$(t,e,n){await TC(Y(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sv(t),r})}async function L$(t,e){await d$(Y(t),{oobCode:e})}async function bC(t,e){const n=Y(t),r=await TC(n,{oobCode:e}),i=r.requestType;switch(O(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,n,"internal-error");default:O(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=hc._fromServerResponse(Ge(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function M$(t,e){const{data:n}=await bC(Y(t),e);return n.email}async function F$(t,e,n){const r=Ge(t),o=await ku(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SC).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Sv(t),l}),a=await Vn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function U$(t,e,n){return $f(Y(t),Gi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sv(t),r})}/**
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
 */async function $$(t,e,n){const r=Ge(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){O(a.handleCodeInApp,r,"argument-error"),a&&Bf(r,o,a)}s(i,n),await ku(r,i,"getOobCode",g$)}function B$(t,e){const n=Ff.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function j$(t,e,n){const r=Y(t),i=Gi.credentialWithLink(e,n||Au());return O(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),$f(r,i)}/**
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
 */async function z$(t,e){return Qe(t,"POST","/v1/accounts:createAuthUri",He(t,e))}/**
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
 */async function q$(t,e){const n=yv()?Au():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await z$(Y(t),r);return i||[]}async function W$(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Bf(n.auth,i,e);const{email:s}=await p$(n.auth,i);s!==t.email&&await t.reload()}async function K$(t,e,n){const r=Y(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Bf(r.auth,s,n);const{email:o}=await y$(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function G$(t,e){return Qe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function H$(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await $r(r,G$(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Q$(t,e){return DC(Y(t),e,null)}function Y$(t,e){return DC(Y(t),null,e)}async function DC(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await $r(t,c$(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function J$(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Lf(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new qo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new X$(s,i);case"github.com":return new Z$(s,i);case"google.com":return new eB(s,i);case"twitter.com":return new tB(s,i,t.screenName||null);case"custom":case"anonymous":return new qo(s,null);default:return new qo(s,r,i)}}class qo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class NC extends qo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class X$ extends qo{constructor(e,n){super(e,"facebook.com",n)}}class Z$ extends NC{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class eB extends qo{constructor(e,n){super(e,"google.com",n)}}class tB extends NC{constructor(e,n,r){super(e,"twitter.com",n,r)}}function nB(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:J$(n)}/**
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
 */class ms{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new ms("enroll",e,n)}static _fromMfaPendingCredential(e){return new ms("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ms._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ms._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Rv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ge(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>hc._fromServerResponse(r,a));O(i.mfaPendingCredential,r,"internal-error");const o=ms._fromMfaPendingCredential(i.mfaPendingCredential);return new Rv(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Vn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return O(n.user,r,"internal-error"),Vn._forOperation(n.user,n.operationType,u);default:xt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function rB(t,e){var n;const r=Y(t),i=e;return O(e.customData.operationType,r,"argument-error"),O((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Rv._fromError(r,i)}/**
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
 */function iB(t,e){return Qe(t,"POST","/v2/accounts/mfaEnrollment:start",He(t,e))}function sB(t,e){return Qe(t,"POST","/v2/accounts/mfaEnrollment:finalize",He(t,e))}function oB(t,e){return Qe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",He(t,e))}class Av{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>hc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Av(e)}async getSession(){return ms._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await $r(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await $r(this.user,oB(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Yp=new WeakMap;function aB(t){const e=Y(t);return Yp.has(e)||Yp.set(e,Av._fromUser(e)),Yp.get(e)}const Td="__sak";/**
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
 */class OC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Td,"1"),this.storage.removeItem(Td),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lB(){const t=Be();return vv(t)||xa(t)}const uB=1e3,cB=10;class VC extends OC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lB()&&Q4(),this.fallbackToPolling=vC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);H4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cB):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VC.type="LOCAL";const Pv=VC;/**
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
 */class LC extends OC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}LC.type="SESSION";const Us=LC;/**
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
 */function hB(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await hB(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jf.receivers=[];/**
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
 */function dc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dB{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=dc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rt(){return window}function fB(t){rt().location.href=t}/**
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
 */function Cv(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function pB(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mB(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gB(){return Cv()?self:null}/**
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
 */const MC="firebaseLocalStorageDb",yB=1,Sd="firebaseLocalStorage",FC="fbase_key";class fc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zf(t,e){return t.transaction([Sd],e?"readwrite":"readonly").objectStore(Sd)}function _B(){const t=indexedDB.deleteDatabase(MC);return new fc(t).toPromise()}function Lg(){const t=indexedDB.open(MC,yB);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sd,{keyPath:FC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sd)?e(r):(r.close(),await _B(),e(await Lg()))})})}async function E0(t,e,n){const r=zf(t,!0).put({[FC]:e,value:n});return new fc(r).toPromise()}async function vB(t,e){const n=zf(t,!1).get(e),r=await new fc(n).toPromise();return r===void 0?null:r.value}function T0(t,e){const n=zf(t,!0).delete(e);return new fc(n).toPromise()}const wB=800,IB=3;class UC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IB)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jf._getInstance(gB()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pB(),!this.activeServiceWorker)return;this.sender=new dB(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mB()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lg();return await E0(e,Td,"1"),await T0(e,Td),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>E0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vB(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=zf(i,!1).getAll();return new fc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UC.type="LOCAL";const bu=UC;/**
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
 */function EB(t,e){return Qe(t,"POST","/v2/accounts/mfaSignIn:start",He(t,e))}function TB(t,e){return Qe(t,"POST","/v2/accounts/mfaSignIn:finalize",He(t,e))}/**
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
 */const SB=500,RB=6e4,Wc=1e12;class AB{constructor(e){this.auth=e,this.counter=Wc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new PB(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Wc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Wc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Wc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class PB{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;O(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=CB(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},RB)},SB))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function CB(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Jp=IC("rcb"),kB=new uc(3e4,6e4),xB="https://www.google.com/recaptcha/api.js?";class bB{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=rt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return O(DB(n),e,"argument-error"),this.shouldResolveImmediately(n)&&p0(rt().grecaptcha)?Promise.resolve(rt().grecaptcha):new Promise((r,i)=>{const s=rt().setTimeout(()=>{i(Ct(e,"network-request-failed"))},kB.get());rt()[Jp]=()=>{rt().clearTimeout(s),delete rt()[Jp];const a=rt().grecaptcha;if(!a||!p0(a)){i(Ct(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${xB}?${_a({onload:Jp,render:"explicit",hl:n})}`;wv(o).catch(()=>{clearTimeout(s),i(Ct(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=rt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function DB(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class NB{async load(e){return new AB(e)}clearedOneInstance(){}}/**
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
 */const $C="recaptcha",OB={theme:"light",type:"image"};let VB=class{constructor(e,n,r=Object.assign({},OB)){this.parameters=r,this.type=$C,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ge(e),this.isInvisible=this.parameters.size==="invisible",O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;O(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new NB:new bB,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=rt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){O(yv()&&!Cv(),this.auth,"internal-error"),await LB(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await D4(this.auth);O(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function LB(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class kv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Es._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function MB(t,e,n){const r=Ge(t),i=await qf(r,e,Y(n));return new kv(i,s=>$f(r,s))}async function FB(t,e,n){const r=Y(t);await Uf(!1,r,"phone");const i=await qf(r.auth,e,Y(n));return new kv(i,s=>kC(r,s))}async function UB(t,e,n){const r=Y(t),i=await qf(r.auth,e,Y(n));return new kv(i,s=>xC(r,s))}async function qf(t,e,n){var r;const i=await n.verify();try{O(typeof i=="string",t,"argument-error"),O(n.type===$C,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return O(o.type==="enroll",t,"internal-error"),(await iB(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{O(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return O(a,t,"missing-multi-factor-info"),(await EB(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await I$(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function $B(t,e){await Iv(Y(t),e)}/**
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
 */let $s=class yh{constructor(e){this.providerId=yh.PROVIDER_ID,this.auth=Ge(e)}verifyPhoneNumber(e,n){return qf(this.auth,e,Y(n))}static credential(e,n){return Es._fromVerification(e,n)}static credentialFromResult(e){const n=e;return yh.credentialFromTaggedObject(n)}static credentialFromError(e){return yh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Es._fromTokenResponse(n,r):null}};$s.PROVIDER_ID="phone";$s.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Xs(t,e){return e?gn(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class xv extends ba{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BB(t){return CC(t.auth,new xv(t),t.bypassAuthState)}function jB(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),PC(n,new xv(t),t.bypassAuthState)}async function zB(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Iv(n,new xv(t),t.bypassAuthState)}/**
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
 */class BC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BB;case"linkViaPopup":case"linkViaRedirect":return zB;case"reauthViaPopup":case"reauthViaRedirect":return jB;default:xt(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qB=new uc(2e3,1e4);async function WB(t,e,n){const r=Ge(t);ka(t,e,Hr);const i=Xs(r,n);return new Pr(r,"signInViaPopup",e,i).executeNotNull()}async function KB(t,e,n){const r=Y(t);ka(r.auth,e,Hr);const i=Xs(r.auth,n);return new Pr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function GB(t,e,n){const r=Y(t);ka(r.auth,e,Hr);const i=Xs(r.auth,n);return new Pr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Pr extends BC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qB.get())};e()}}Pr.currentPopupAction=null;/**
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
 */const HB="pendingRedirect",Ll=new Map;class QB extends BC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ll.get(this.auth._key());if(!e){try{const r=await YB(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ll.set(this.auth._key(),e)}return this.bypassAuthState||Ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YB(t,e){const n=zC(e),r=jC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function bv(t,e){return jC(t)._set(zC(e),"true")}function JB(){Ll.clear()}function Dv(t,e){Ll.set(t._key(),e)}function jC(t){return gn(t._redirectPersistence)}function zC(t){return Is(HB,t.config.apiKey,t.name)}/**
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
 */function XB(t,e,n){return ZB(t,e,n)}async function ZB(t,e,n){const r=Ge(t);ka(t,e,Hr),await r._initializationPromise;const i=Xs(r,n);return await bv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function ej(t,e,n){return tj(t,e,n)}async function tj(t,e,n){const r=Y(t);ka(r.auth,e,Hr),await r.auth._initializationPromise;const i=Xs(r.auth,n);await bv(i,r.auth);const s=await qC(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function nj(t,e,n){return rj(t,e,n)}async function rj(t,e,n){const r=Y(t);ka(r.auth,e,Hr),await r.auth._initializationPromise;const i=Xs(r.auth,n);await Uf(!1,r,e.providerId),await bv(i,r.auth);const s=await qC(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function ij(t,e){return await Ge(t)._initializationPromise,Wf(t,e,!1)}async function Wf(t,e,n=!1){const r=Ge(t),i=Xs(r,e),o=await new QB(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function qC(t){const e=dc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const sj=10*60*1e3;class WC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oj(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!KC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sj&&this.cachedEventUids.clear(),this.cachedEventUids.has(S0(e))}saveEventToCache(e){this.cachedEventUids.add(S0(e)),this.lastProcessedEventTime=Date.now()}}function S0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function KC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oj(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KC(t);default:return!1}}/**
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
 */async function GC(t,e={}){return Qe(t,"GET","/v1/projects",e)}/**
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
 */const aj=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lj=/^https?/;async function uj(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GC(t);for(const n of e)try{if(cj(n))return}catch{}xt(t,"unauthorized-domain")}function cj(t){const e=Au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lj.test(n))return!1;if(aj.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hj=new uc(3e4,6e4);function R0(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dj(t){return new Promise((e,n)=>{var r,i,s;function o(){R0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{R0(),n(Ct(t,"network-request-failed"))},timeout:hj.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)o();else{const a=IC("iframefcb");return rt()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},wv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _h=null,e})}let _h=null;function fj(t){return _h=_h||dj(t),_h}/**
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
 */const pj=new uc(5e3,15e3),mj="__/auth/iframe",gj="emulator/auth/iframe",yj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_j=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vj(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_v(e,gj):`https://${t.config.authDomain}/${mj}`,r={apiKey:e.apiKey,appName:t.name,v:zr},i=_j.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_a(r).slice(1)}`}async function wj(t){const e=await fj(t),n=rt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:vj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yj,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=rt().setTimeout(()=>{s(o)},pj.get());function l(){rt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Ij={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ej=500,Tj=600,Sj="_blank",Rj="http://localhost";class A0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Aj(t,e,n,r=Ej,i=Tj){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ij),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();n&&(a=mC(u)?Sj:n),pC(u)&&(e=e||Rj,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(G4(u)&&a!=="_self")return Pj(e||"",a),new A0(null);const h=window.open(e||"",a,c);O(h,t,"popup-blocked");try{h.focus()}catch{}return new A0(h)}function Pj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Cj="__/auth/handler",kj="emulator/auth/handler",xj=encodeURIComponent("fac");async function Mg(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:i};if(e instanceof Hr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Da){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${xj}=${encodeURIComponent(l)}`:"";return`${bj(t)}?${_a(a).slice(1)}${u}`}function bj({config:t}){return t.emulator?_v(t,kj):`https://${t.authDomain}/${Cj}`}/**
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
 */const Xp="webStorageSupport";class Dj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Us,this._completeRedirectFn=Wf,this._overrideRedirectResult=Dv}async _openPopup(e,n,r,i){var s;Yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Mg(e,n,r,Au(),i);return Aj(e,o,dc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Mg(e,n,r,Au(),i);return fB(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wj(e),r=new WC(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xp,{type:Xp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xp];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uj(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vC()||vv()||xa()}}const Nj=Dj;class Oj{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return cr("unexpected MultiFactorSessionType")}}}class Nv extends Oj{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Nv(e)}_finalizeEnroll(e,n,r){return sB(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return TB(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class HC{constructor(){}static assertion(e){return Nv._fromCredential(e)}}HC.FACTOR_ID="phone";var P0="@firebase/auth",C0="1.4.0";/**
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
 */class Vj{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mj(t){Mr(new Gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wC(t)},u=new e$(r,i,s,l);return o$(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new Gn("auth-internal",e=>{const n=Ge(e.getProvider("auth").getImmediate());return(r=>new Vj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(P0,C0,Lj(t)),_n(P0,C0,"esm2017")}/**
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
 */const Fj=5*60;oO("authIdTokenMaxAge");Mj("Browser");/**
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
 */function Bs(){return window}/**
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
 */const Uj=2e3;async function $j(t,e,n){var r;const{BuildInfo:i}=Bs();Yn(e.sessionId,"AuthEvent did not contain a session ID");const s=await Wj(e.sessionId),o={};return xa()?o.ibi=i.packageName:cc()?o.apn=i.packageName:xt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Mg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Bj(t){const{BuildInfo:e}=Bs(),n={};xa()?n.iosBundleId=e.packageName:cc()?n.androidPackageName=e.packageName:xt(t,"operation-not-supported-in-this-environment"),await GC(t,n)}function jj(t){const{cordova:e}=Bs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,K4()?"_blank":"_system","location=yes"),n(i)})})}async function zj(t,e,n){const{cordova:r}=Bs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Ct(t,"redirect-cancelled-by-user"))},Uj))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),cc()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function qj(t){var e,n,r,i,s,o,a,l,u,c;const h=Bs();O(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Wj(t){const e=Kj(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Kj(t){if(Yn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const Gj=20;class Hj extends WC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Qj(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Xj(),postBody:null,tenantId:t.tenantId,error:Ct(t,"no-auth-event")}}function Yj(t,e){return Fg()._set(Ug(t),e)}async function k0(t){const e=await Fg()._get(Ug(t));return e&&await Fg()._remove(Ug(t)),e}function Jj(t,e){var n,r;const i=ez(e);if(i.includes("/__/auth/callback")){const s=vh(i),o=s.firebaseError?Zj(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Ct(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function Xj(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Gj;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Fg(){return gn(Pv)}function Ug(t){return Is("authEvent",t.config.apiKey,t.name)}function Zj(t){try{return JSON.parse(t)}catch{return null}}function ez(t){const e=vh(t),n=e.link?decodeURIComponent(e.link):void 0,r=vh(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return vh(i).link||i||r||n||t}function vh(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Co(n.join("?"))}/**
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
 */const tz=500;class nz{constructor(){this._redirectPersistence=Us,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Wf,this._overrideRedirectResult=Dv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new Hj(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){xt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){qj(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),JB(),await this._originValidation(e);const o=Qj(e,r,i);await Yj(e,o);const a=await $j(e,o,n),l=await jj(a);return zj(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bj(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Bs(),o=setTimeout(async()=>{await k0(e),n.onEvent(x0())},tz),a=async c=>{clearTimeout(o);const h=await k0(e);let d=null;h&&(c!=null&&c.url)&&(d=Jj(h,c.url)),n.onEvent(d||x0())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Bs().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const rz=nz;function x0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ct("no-auth-event")}}/**
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
 */function iz(t,e){Ge(t)._logFramework(e)}var sz="@firebase/auth-compat",oz="0.4.9";/**
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
 */const az=1e3;function Ml(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function lz(){return Ml()==="http:"||Ml()==="https:"}function QC(t=Be()){return!!((Ml()==="file:"||Ml()==="ionic:"||Ml()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function uz(){return Wy()||qy()}function cz(){return kR()&&(document==null?void 0:document.documentMode)===11}function hz(t=Be()){return/Edge\/\d+/.test(t)}function dz(t=Be()){return cz()||hz(t)}function YC(){try{const t=self.localStorage,e=dc();if(t)return t.setItem(e,"1"),t.removeItem(e),dz()?ru():!0}catch{return Ov()&&ru()}return!1}function Ov(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Zp(){return(lz()||CR()||QC())&&!uz()&&YC()&&!Ov()}function JC(){return QC()&&typeof document<"u"}async function fz(){return JC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},az);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function pz(){return typeof window<"u"?window:null}/**
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
 */const pn={LOCAL:"local",NONE:"none",SESSION:"session"},il=O,XC="persistence";function mz(t,e){if(il(Object.values(pn).includes(e),t,"invalid-persistence-type"),Wy()){il(e!==pn.SESSION,t,"unsupported-persistence-type");return}if(qy()){il(e===pn.NONE,t,"unsupported-persistence-type");return}if(Ov()){il(e===pn.NONE||e===pn.LOCAL&&ru(),t,"unsupported-persistence-type");return}il(e===pn.NONE||YC(),t,"unsupported-persistence-type")}async function $g(t){await t._initializationPromise;const e=ZC(),n=Is(XC,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function gz(t,e){const n=ZC();if(!n)return[];const r=Is(XC,t,e);switch(n.getItem(r)){case pn.NONE:return[ca];case pn.LOCAL:return[bu,Us];case pn.SESSION:return[Us];default:return[]}}function ZC(){var t;try{return((t=pz())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const yz=O;class di{constructor(){this.browserResolver=gn(Nj),this.cordovaResolver=gn(rz),this.underlyingResolver=null,this._redirectPersistence=Us,this._completeRedirectFn=Wf,this._overrideRedirectResult=Dv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return JC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return yz(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await fz();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function ek(t){return t.unwrap()}function _z(t){return t.wrapped()}/**
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
 */function vz(t){return tk(t)}function wz(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new Iz(t,rB(t,e))}else if(r){const i=tk(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function tk(t){const{_tokenResponse:e}=t instanceof Vt?t.customData:t;if(!e)return null;if(!(t instanceof Vt)&&"temporaryProof"in e&&"phoneNumber"in e)return $s.credentialFromResult(t);const n=e.providerId;if(!n||n===rl.PASSWORD)return null;let r;switch(n){case rl.GOOGLE:r=rr;break;case rl.FACEBOOK:r=nr;break;case rl.GITHUB:r=ir;break;case rl.TWITTER:r=sr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ha._create(n,a):yr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new zo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Vt?r.credentialFromError(t):r.credentialFromResult(t)}function en(t,e){return e.catch(n=>{throw n instanceof Vt&&wz(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:vz(n),additionalUserInfo:nB(n),user:Cr.getOrCreate(i)}})}async function Bg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>en(t,n.confirm(r))}}class Iz{constructor(e,n){this.resolver=n,this.auth=_z(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return en(ek(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Cr{constructor(e){this._delegate=e,this.multiFactor=aB(e)}static getOrCreate(e){return Cr.USER_MAP.has(e)||Cr.USER_MAP.set(e,new Cr(e)),Cr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return en(this.auth,kC(this._delegate,e))}async linkWithPhoneNumber(e,n){return Bg(this.auth,FB(this._delegate,e,n))}async linkWithPopup(e){return en(this.auth,GB(this._delegate,e,di))}async linkWithRedirect(e){return await $g(Ge(this.auth)),nj(this._delegate,e,di)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return en(this.auth,xC(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Bg(this.auth,UB(this._delegate,e,n))}reauthenticateWithPopup(e){return en(this.auth,KB(this._delegate,e,di))}async reauthenticateWithRedirect(e){return await $g(Ge(this.auth)),ej(this._delegate,e,di)}sendEmailVerification(e){return W$(this._delegate,e)}async unlink(e){return await b$(this._delegate,e),this}updateEmail(e){return Q$(this._delegate,e)}updatePassword(e){return Y$(this._delegate,e)}updatePhoneNumber(e){return $B(this._delegate,e)}updateProfile(e){return H$(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return K$(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Cr.USER_MAP=new WeakMap;/**
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
 */const sl=O;class jg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;sl(r,"invalid-api-key",{appName:e.name}),sl(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?di:void 0;this._delegate=n.initialize({options:{persistence:Ez(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(E4),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Cr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){a$(this._delegate,e,n)}applyActionCode(e){return L$(this._delegate,e)}checkActionCode(e){return bC(this._delegate,e)}confirmPasswordReset(e,n){return V$(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return en(this._delegate,F$(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return q$(this._delegate,e)}isSignInWithEmailLink(e){return B$(this._delegate,e)}async getRedirectResult(){sl(Zp(),this._delegate,"operation-not-supported-in-this-environment");const e=await ij(this._delegate,di);return e?en(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){iz(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=b0(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=b0(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return $$(this._delegate,e,n)}sendPasswordResetEmail(e,n){return O$(this._delegate,e,n||void 0)}async setPersistence(e){mz(this._delegate,e);let n;switch(e){case pn.SESSION:n=Us;break;case pn.LOCAL:n=await gn(bu)._isAvailable()?bu:Pv;break;case pn.NONE:n=ca;break;default:return xt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return en(this._delegate,x$(this._delegate))}signInWithCredential(e){return en(this._delegate,$f(this._delegate,e))}signInWithCustomToken(e){return en(this._delegate,N$(this._delegate,e))}signInWithEmailAndPassword(e,n){return en(this._delegate,U$(this._delegate,e,n))}signInWithEmailLink(e,n){return en(this._delegate,j$(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Bg(this._delegate,MB(this._delegate,e,n))}async signInWithPopup(e){return sl(Zp(),this._delegate,"operation-not-supported-in-this-environment"),en(this._delegate,WB(this._delegate,e,di))}async signInWithRedirect(e){return sl(Zp(),this._delegate,"operation-not-supported-in-this-environment"),await $g(this._delegate),XB(this._delegate,e,di)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return M$(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}jg.Persistence=pn;function b0(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Cr.getOrCreate(o)),error:e,complete:n}}function Ez(t,e){const n=gz(t,e);if(typeof self<"u"&&!n.includes(bu)&&n.push(bu),typeof window<"u")for(const r of[Pv,Us])n.includes(r)||n.push(r);return n.includes(ca)||n.push(ca),n}/**
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
 */class Vv{constructor(){this.providerId="phone",this._delegate=new $s(ek(Vf.auth()))}static credential(e,n){return $s.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Vv.PHONE_SIGN_IN_METHOD=$s.PHONE_SIGN_IN_METHOD;Vv.PROVIDER_ID=$s.PROVIDER_ID;/**
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
 */const Tz=O;class Sz{constructor(e,n,r=Vf.app()){var i;Tz((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new VB(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const Rz="auth-compat";function Az(t){t.INTERNAL.registerComponent(new Gn(Rz,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new jg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:lo.EMAIL_SIGNIN,PASSWORD_RESET:lo.PASSWORD_RESET,RECOVER_EMAIL:lo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:lo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:lo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:lo.VERIFY_EMAIL}},EmailAuthProvider:Gi,FacebookAuthProvider:nr,GithubAuthProvider:ir,GoogleAuthProvider:rr,OAuthProvider:zo,SAMLAuthProvider:Id,PhoneAuthProvider:Vv,PhoneMultiFactorGenerator:HC,RecaptchaVerifier:Sz,TwitterAuthProvider:sr,Auth:jg,AuthCredential:ba,Error:Vt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(sz,oz)}Az(Vf);const Pz="@firebase/firestore-compat",Cz="0.3.22";/**
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
 */function Lv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new x("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function D0(){if(typeof Uint8Array>"u")throw new x("unimplemented","Uint8Arrays are not available in this environment.")}function N0(){if(!pM())throw new x("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Du{constructor(e){this._delegate=e}static fromBase64String(e){return N0(),new Du(mr.fromBase64String(e))}static fromUint8Array(e){return D0(),new Du(mr.fromUint8Array(e))}toBase64(){return N0(),this._delegate.toBase64()}toUint8Array(){return D0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function zg(t){return kz(t,["next","error","complete"])}function kz(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class xz{enableIndexedDbPersistence(e,n){return z2(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return q2(e._delegate)}clearIndexedDbPersistence(e){return W2(e._delegate)}}class nk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof bi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Qn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){D1(this._delegate,e,n,r)}enableNetwork(){return G2(this._delegate)}disableNetwork(){return H2(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,x1("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return K2(this._delegate)}onSnapshotsInSync(e){return wU(this._delegate,e)}get app(){if(!this._appCompat)throw new x("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new da(this,Bo(this._delegate,e))}catch(n){throw Wt(n,"collection()","Firestore.collection()")}}doc(e){try{return new bn(this,gd(this._delegate,e))}catch(n){throw Wt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new qt(this,F2(this._delegate,e))}catch(n){throw Wt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return SU(this._delegate,n=>e(new rk(this,n)))}batch(){return _t(this._delegate),new ik(new EU(this._delegate,e=>lc(this._delegate,e)))}loadBundle(e){return Q2(this._delegate,e)}namedQuery(e){return Y2(this._delegate,e).then(n=>n?new qt(this,n):null)}}class Kf extends dv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Du(new mr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return bn.forKey(n,this.firestore,null)}}function bz(t){VL(t)}class rk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Kf(e)}get(e){const n=gs(e);return this._delegate.get(n).then(r=>new Nu(this._firestore,new Ur(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=gs(e);return r?(Lv("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=gs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=gs(e);return this._delegate.delete(n),this}}class ik{constructor(e){this._delegate=e}set(e,n,r){const i=gs(e);return r?(Lv("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=gs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=gs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class js{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ol(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ou(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=js.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new js(e,new Kf(e),n),i.set(n,s)),s}}js.INSTANCES=new WeakMap;class bn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Kf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new x("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new bn(n,new Ue(n._delegate,r,new M(e)))}static forKey(e,n,r){return new bn(n,new Ue(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new da(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new da(this.firestore,Bo(this._delegate,e))}catch(n){throw Wt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof Ue?L1(this._delegate,e):!1}set(e,n){n=Lv("DocumentReference.set",n);try{return n?i0(this._delegate,e,n):i0(this._delegate,e)}catch(r){throw Wt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?s0(this._delegate,e):s0(this._delegate,e,n,...r)}catch(i){throw Wt(i,"updateDoc()","DocumentReference.update()")}}delete(){return vU(this._delegate)}onSnapshot(...e){const n=sk(e),r=ok(e,i=>new Nu(this.firestore,new Ur(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return eC(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=mU(this._delegate):(e==null?void 0:e.source)==="server"?n=gU(this._delegate):n=pU(this._delegate),n.then(r=>new Nu(this.firestore,new Ur(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new bn(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Wt(t,e,n){return t.message=t.message.replace(e,n),t}function sk(t){for(const e of t)if(typeof e=="object"&&!zg(e))return e;return{}}function ok(t,e){var n,r;let i;return zg(t[0])?i=t[0]:zg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Nu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new bn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return X1(this._delegate,e._delegate)}}class Ou extends Nu{data(e){const n=this._delegate.data(e);return this._delegate._converter||LL(n!==void 0),n}}class qt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Kf(e)}where(e,n,r){try{return new qt(this.firestore,wr(this._delegate,sU(e,n,r)))}catch(i){throw Wt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new qt(this.firestore,wr(this._delegate,Q1(e,n)))}catch(r){throw Wt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new qt(this.firestore,wr(this._delegate,oU(e)))}catch(n){throw Wt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new qt(this.firestore,wr(this._delegate,aU(e)))}catch(n){throw Wt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new qt(this.firestore,wr(this._delegate,lU(...e)))}catch(n){throw Wt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new qt(this.firestore,wr(this._delegate,uU(...e)))}catch(n){throw Wt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new qt(this.firestore,wr(this._delegate,cU(...e)))}catch(n){throw Wt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new qt(this.firestore,wr(this._delegate,hU(...e)))}catch(n){throw Wt(n,"endAt()","Query.endAt()")}}isEqual(e){return M1(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=yU(this._delegate):(e==null?void 0:e.source)==="server"?n=_U(this._delegate):n=Z1(this._delegate),n.then(r=>new qg(this.firestore,new Li(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=sk(e),r=ok(e,i=>new qg(this.firestore,new Li(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return eC(this._delegate,n,r)}withConverter(e){return new qt(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Dz{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ou(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class qg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new qt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ou(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new Dz(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Ou(this._firestore,r))})}isEqual(e){return X1(this._delegate,e._delegate)}}class da extends qt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new bn(this.firestore,e):null}doc(e){try{return e===void 0?new bn(this.firestore,gd(this._delegate)):new bn(this.firestore,gd(this._delegate,e))}catch(n){throw Wt(n,"doc()","CollectionReference.doc()")}}add(e){return ph(this._delegate,e).then(n=>new bn(this.firestore,n))}isEqual(e){return L1(this._delegate,e._delegate)}withConverter(e){return new da(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function gs(t){return fe(t,Ue)}/**
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
 */class Mv{constructor(...e){this._delegate=new Vi(...e)}static documentId(){return new Mv(Ne.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof Vi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class os{constructor(e){this._delegate=e}static serverTimestamp(){const e=AU();return e._methodName="FieldValue.serverTimestamp",new os(e)}static delete(){const e=RU();return e._methodName="FieldValue.delete",new os(e)}static arrayUnion(...e){const n=PU(...e);return n._methodName="FieldValue.arrayUnion",new os(n)}static arrayRemove(...e){const n=CU(...e);return n._methodName="FieldValue.arrayRemove",new os(n)}static increment(e){const n=kU(e);return n._methodName="FieldValue.increment",new os(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const Nz={Firestore:nk,GeoPoint:Af,Timestamp:Ve,Blob:Du,Transaction:rk,WriteBatch:ik,DocumentReference:bn,DocumentSnapshot:Nu,Query:qt,QueryDocumentSnapshot:Ou,QuerySnapshot:qg,CollectionReference:da,FieldPath:Mv,FieldValue:os,setLogLevel:bz,CACHE_SIZE_UNLIMITED:B2};function Oz(t,e){t.INTERNAL.registerComponent(new Gn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Nz)))}/**
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
 */function Vz(t){Oz(t,(e,n)=>new nk(e,n,new xz)),t.registerVersion(Pz,Cz)}Vz(Vf);const Lz=new FN;em.createRoot(document.getElementById("root")).render(C.jsx(ln.StrictMode,{children:C.jsx(zN,{client:Lz,children:C.jsx(pN,{router:f4})})}));
