(function(m,_){typeof exports=="object"&&typeof module<"u"?_(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],_):(m=typeof globalThis<"u"?globalThis:m||self,_(m.PieKit={},m.React))})(this,function(m,_){"use strict";var A={exports:{}},R={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z;function ye(){if(z)return R;z=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(s,c,b){var g=null;if(b!==void 0&&(g=""+b),c.key!==void 0&&(g=""+c.key),"key"in c){b={};for(var v in c)v!=="key"&&(b[v]=c[v])}else b=c;return c=b.ref,{$$typeof:n,type:s,key:g,ref:c!==void 0?c:null,props:b}}return R.Fragment=i,R.jsx=a,R.jsxs=a,R}var C={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L;function xe(){return L||(L=1,process.env.NODE_ENV!=="production"&&function(){function n(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case Se:return"Portal";case re:return"Profiler";case ee:return"StrictMode";case q:return"Suspense";case J:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case oe:return(e.displayName||"Context")+".Provider";case te:return(e._context.displayName||"Context")+".Consumer";case U:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return r=e.displayName||null,r!==null?r:n(e.type)||"Memo";case B:r=e._payload,e=e._init;try{return n(e(r))}catch{}}return null}function i(e){return""+e}function a(e){try{i(e);var r=!1}catch{r=!0}if(r){r=console;var t=r.error,u=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",u),i(e)}}function s(){}function c(){if(N===0){ue=console.log,se=console.info,le=console.warn,ie=console.error,ce=console.group,fe=console.groupCollapsed,de=console.groupEnd;var e={configurable:!0,enumerable:!0,value:s,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}N++}function b(){if(N--,N===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:h({},e,{value:ue}),info:h({},e,{value:se}),warn:h({},e,{value:le}),error:h({},e,{value:ie}),group:h({},e,{value:ce}),groupCollapsed:h({},e,{value:fe}),groupEnd:h({},e,{value:de})})}0>N&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function g(e){if(H===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);H=r&&r[1]||"",be=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+e+be}function v(e,r){if(!e||X)return"";var t=F.get(e);if(t!==void 0)return t;X=!0,t=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var u=null;u=p.H,p.H=null,c();try{var f={DetermineComponentFrameRoot:function(){try{if(r){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(y){var O=y}Reflect.construct(e,[],x)}else{try{x.call()}catch(y){O=y}e.call(x.prototype)}}else{try{throw Error()}catch(y){O=y}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(y){if(y&&O&&typeof y.stack=="string")return[y.stack,O.stack]}return[null,null]}};f.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(f.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(f.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=f.DetermineComponentFrameRoot(),E=o[0],T=o[1];if(E&&T){var d=E.split(`
`),w=T.split(`
`);for(o=l=0;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;for(;o<w.length&&!w[o].includes("DetermineComponentFrameRoot");)o++;if(l===d.length||o===w.length)for(l=d.length-1,o=w.length-1;1<=l&&0<=o&&d[l]!==w[o];)o--;for(;1<=l&&0<=o;l--,o--)if(d[l]!==w[o]){if(l!==1||o!==1)do if(l--,o--,0>o||d[l]!==w[o]){var S=`
`+d[l].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),typeof e=="function"&&F.set(e,S),S}while(1<=l&&0<=o);break}}}finally{X=!1,p.H=u,b(),Error.prepareStackTrace=t}return d=(d=e?e.displayName||e.name:"")?g(d):"",typeof e=="function"&&F.set(e,d),d}function k(e){if(e==null)return"";if(typeof e=="function"){var r=e.prototype;return v(e,!(!r||!r.isReactComponent))}if(typeof e=="string")return g(e);switch(e){case q:return g("Suspense");case J:return g("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case U:return e=v(e.render,!1),e;case V:return k(e.type);case B:r=e._payload,e=e._init;try{return k(e(r))}catch{}}return""}function Y(){var e=p.A;return e===null?null:e.getOwner()}function Te(e){if(ae.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function _e(e,r){function t(){ge||(ge=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}function Re(){var e=n(this.type);return ve[e]||(ve[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function Ce(e,r,t,u,f,l){return t=l.ref,e={$$typeof:M,type:e,key:r,props:l,_owner:f},(t!==void 0?t:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:Re}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function Q(e,r,t,u,f,l){if(typeof e=="string"||typeof e=="function"||e===W||e===re||e===ee||e===q||e===J||e===Ae||typeof e=="object"&&e!==null&&(e.$$typeof===B||e.$$typeof===V||e.$$typeof===oe||e.$$typeof===te||e.$$typeof===U||e.$$typeof===Pe||e.getModuleId!==void 0)){var o=r.children;if(o!==void 0)if(u)if(G(o)){for(u=0;u<o.length;u++)I(o[u],e);Object.freeze&&Object.freeze(o)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else I(o,e)}else o="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?u="null":G(e)?u="array":e!==void 0&&e.$$typeof===M?(u="<"+(n(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,o);if(ae.call(r,"key")){o=n(e);var E=Object.keys(r).filter(function(d){return d!=="key"});u=0<E.length?"{key: someKey, "+E.join(": ..., ")+": ...}":"{key: someKey}",me[o+u]||(E=0<E.length?"{"+E.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,u,o,E,o),me[o+u]=!0)}if(o=null,t!==void 0&&(a(t),o=""+t),Te(r)&&(a(r.key),o=""+r.key),"key"in r){t={};for(var T in r)T!=="key"&&(t[T]=r[T])}else t=r;return o&&_e(t,typeof e=="function"?e.displayName||e.name||"Unknown":e),Ce(e,o,l,f,Y(),t)}function I(e,r){if(typeof e=="object"&&e&&e.$$typeof!==Ye){if(G(e))for(var t=0;t<e.length;t++){var u=e[t];$(u)&&D(u,r)}else if($(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?t=null:(t=ne&&e[ne]||e["@@iterator"],t=typeof t=="function"?t:null),typeof t=="function"&&t!==e.entries&&(t=t.call(e),t!==e))for(;!(e=t.next()).done;)$(e.value)&&D(e.value,r)}}function $(e){return typeof e=="object"&&e!==null&&e.$$typeof===M}function D(e,r){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,r=ke(r),!Ee[r])){Ee[r]=!0;var t="";e&&e._owner!=null&&e._owner!==Y()&&(t=null,typeof e._owner.tag=="number"?t=n(e._owner.type):typeof e._owner.name=="string"&&(t=e._owner.name),t=" It was passed a child from "+t+".");var u=p.getCurrentStack;p.getCurrentStack=function(){var f=k(e.type);return u&&(f+=u()||""),f},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',r,t),p.getCurrentStack=u}}function ke(e){var r="",t=Y();return t&&(t=n(t.type))&&(r=`

Check the render method of \``+t+"`."),r||(e=n(e))&&(r=`

Check the top-level render call using <`+e+">."),r}var Ne=_,M=Symbol.for("react.transitional.element"),Se=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),te=Symbol.for("react.consumer"),oe=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),Ae=Symbol.for("react.offscreen"),ne=Symbol.iterator,Oe=Symbol.for("react.client.reference"),p=Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=Object.prototype.hasOwnProperty,h=Object.assign,Pe=Symbol.for("react.client.reference"),G=Array.isArray,N=0,ue,se,le,ie,ce,fe,de;s.__reactDisabledLog=!0;var H,be,X=!1,F=new(typeof WeakMap=="function"?WeakMap:Map),Ye=Symbol.for("react.client.reference"),ge,ve={},me={},Ee={};C.Fragment=W,C.jsx=function(e,r,t,u,f){return Q(e,r,t,!1,u,f)},C.jsxs=function(e,r,t,u,f){return Q(e,r,t,!0,u,f)}}()),C}var Z;function pe(){return Z||(Z=1,process.env.NODE_ENV==="production"?A.exports=ye():A.exports=xe()),A.exports}var j=pe();function K(n){var i,a,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(i=0;i<c;i++)n[i]&&(a=K(n[i]))&&(s&&(s+=" "),s+=a)}else for(a in n)n[a]&&(s&&(s+=" "),s+=a);return s}function P(){for(var n,i,a=0,s="",c=arguments.length;a<c;a++)(n=arguments[a])&&(i=K(n))&&(s&&(s+=" "),s+=i);return s}const he=({variant:n="primary",alignment:i="center",appearance:a="solid",size:s="md",full:c=!1,className:b,testId:g,children:v,...k})=>j.jsx("button",{...k,"data-testid":g,className:P("font-semibold transition-all duration-150","inline-flex items-center justify-center flex-shrink-0 gap-x-1.5","focus:outline-none focus-visible:outline-none focus:ring-2","disabled:cursor-not-allowed disabled:opacity-30",{"px-2.5 py-1.5 text-sm rounded-lg":s==="xs","px-4 py-2 text-sm rounded-lg":s==="sm","px-4.5 py-2.5 text-base rounded-lg":s==="md"||s===void 0,"px-6 py-3 text-lg rounded-xl":s==="lg","text-white":a==="solid","bg-primary-900 enabled:hover:bg-primary-950 enabled:focus:ring-primary-500/30":a==="solid"&&n==="primary","bg-success-500 enabled:hover:bg-success-600 enabled:focus:ring-success-500/30":a==="solid"&&n==="success","bg-error-500 enabled:hover:bg-error-600 enabled:focus:ring-error-500/30":a==="solid"&&n==="error","bg-transparent border enabled:hover:text-white":a==="outline","text-primary-900 border-primary-900 enabled:hover:bg-primary-900 enabled:focus:ring-primary-500/40":a==="outline"&&n==="primary","text-success-500 border-success-500 enabled:hover:bg-success-500 enabled:focus:ring-success-500/40":a==="outline"&&n==="success","text-error-500 border-error-500 enabled:hover:bg-error-500 enabled:focus:ring-error-500/40":a==="outline"&&n==="error","w-full":c,"justify-start":i==="left","justify-center":i==="center","justify-end":i==="right"},b),children:v}),we=({className:n,testId:i,children:a,...s})=>j.jsx("div",{...s,className:P("p-6 rounded-xl bg-white text-gray-950 shadow-lg",{},n),"data-testid":i,children:a}),je=({className:n,label:i,testId:a,hasError:s=!1,errorMessages:c=[],...b})=>j.jsxs("div",{"data-testid":`${a}-form`,children:[i===void 0?null:j.jsx("label",{className:"block mb-1 text-gray-900 font-semibold","data-testid":`${a}-label`,children:i}),j.jsx("input",{...b,className:P("block w-full rounded-lg px-2.5 py-1.5 border","bg-white shadow-sm","disabled:cursor-not-allowed disabled:opacity-60 outline-none","ring-0 focus:ring-2",{"focus:ring-gray-500/30 text-gray-900 placeholder-gray-400 border-gray-900 caret-gray-500":!s,"focus:ring-red-500/30 text-red-500 placeholder-red-300 border-red-500 caret-red-500":s},n),"data-testid":`${a}-input`}),s&&c.length>0?c.map((g,v)=>j.jsx("p",{className:"text-sm mt-1 text-red-300","data-testid":`${a}-error-msg-${v}`,children:g},v)):null]});m.Button=he,m.Card=we,m.FormInput=je,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});
