/*! For license information please see main.a922295b.js.LICENSE.txt */
(()=>{"use strict";var e={43:(e,t,r)=>{e.exports=r(288)},288:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,_={};function g(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||d}function h(){}function m(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var S=m.prototype=new h;S.constructor=m,v(S,g.prototype),S.isPureReactComponent=!0;var b=Array.isArray,E={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function R(e,t,n,o,i,u){return n=u.ref,{$$typeof:r,type:e,key:t,ref:void 0!==n?n:null,props:u}}function T(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(){}function H(e,t,o,i,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c,f,a=!1;if(null===e)a=!0;else switch(s){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0;break;case p:return H((a=e._init)(e._payload),t,o,i,u)}}if(a)return u=u(e),a=""===i?"."+j(e,0):i,b(u)?(o="",null!=a&&(o=a.replace(w,"$&/")+"/"),H(u,t,o,"",(function(e){return e}))):null!=u&&(T(u)&&(c=u,f=o+(null==u.key||e&&e.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+a,u=R(c.type,f,void 0,0,0,c.props)),t.push(u)),1;a=0;var l,d=""===i?".":i+":";if(b(e))for(var v=0;v<e.length;v++)a+=H(i=e[v],t,o,s=d+j(i,v),u);else if("function"===typeof(v=null===(l=e)||"object"!==typeof l?null:"function"===typeof(l=y&&l[y]||l["@@iterator"])?l:null))for(e=v.call(e),v=0;!(i=e.next()).done;)a+=H(i=i.value,t,o,s=d+j(i,v++),u);else if("object"===s){if("function"===typeof e.then)return H(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(C,C):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,i,u);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function k(e,t,r){if(null==e)return e;var n=[],o=0;return H(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function N(){}t.Children={map:k,forEach:function(e,t,r){k(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return k(e,(function(){t++})),t},toArray:function(e){return k(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=u,t.PureComponent=m,t.StrictMode=i,t.Suspense=a,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var n=v({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(o=""+t.key),t)!O.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(n[i]=t[i]);var i=arguments.length-2;if(1===i)n.children=r;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];n.children=u}return R(e.type,o,void 0,0,0,n)},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,r){var n,o={},i=null;if(null!=t)for(n in void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return R(e,i,void 0,0,0,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=E.T,r={};E.T=r;try{var n=e(),o=E.S;null!==o&&o(r,n),"object"===typeof n&&null!==n&&"function"===typeof n.then&&n.then(N,A)}catch(i){A(i)}finally{E.T=t}},t.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},t.use=function(e){return E.H.use(e)},t.useActionState=function(e,t,r){return E.H.useActionState(e,t,r)},t.useCallback=function(e,t){return E.H.useCallback(e,t)},t.useContext=function(e){return E.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return E.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return E.H.useEffect(e,t)},t.useId=function(){return E.H.useId()},t.useImperativeHandle=function(e,t,r){return E.H.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return E.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return E.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return E.H.useMemo(e,t)},t.useOptimistic=function(e,t){return E.H.useOptimistic(e,t)},t.useReducer=function(e,t,r){return E.H.useReducer(e,t,r)},t.useRef=function(e){return E.H.useRef(e)},t.useState=function(e){return E.H.useState(e)},t.useSyncExternalStore=function(e,t,r){return E.H.useSyncExternalStore(e,t,r)},t.useTransition=function(){return E.H.useTransition()},t.version="19.0.0"},579:(e,t,r)=>{e.exports=r(799)},672:(e,t,r)=>{var n=r(43);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var u={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.flushSync=function(e){var t=c.T,r=u.p;try{if(c.T=null,u.p=2,e)return e()}finally{c.T=t,u.p=r,u.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,u.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&u.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var r=t.as,n=f(r,t.crossOrigin),o="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?u.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:o,fetchPriority:i}):"script"===r&&u.d.X(e,{crossOrigin:n,integrity:o,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=f(t.as,t.crossOrigin);u.d.M(e,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&u.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var r=t.as,n=f(r,t.crossOrigin);u.d.L(e,r,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var r=f(t.as,t.crossOrigin);u.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else u.d.m(e)},t.requestFormReset=function(e){u.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,r){return c.H.useFormState(e,t,r)},t.useFormStatus=function(){return c.H.useHostTransitionStatus()},t.version="19.0.0"},799:(e,t)=>{var r=Symbol.for("react.transitional.element");function n(e,t,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:o,ref:void 0!==t?t:null,props:n}}Symbol.for("react.fragment"),t.jsx=n,t.jsxs=n},950:(e,t,r)=>{!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(672)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}var n=r(43),o=r(950),i=r(579);const u=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Freight Electrification News"}),(0,i.jsx)("p",{children:"Welcome to the news dashboard!"})]})};o.render((0,i.jsx)(n.StrictMode,{children:(0,i.jsx)(u,{})}),document.getElementById("root"))})();
//# sourceMappingURL=main.a922295b.js.map