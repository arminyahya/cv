(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3sAn":function(e,t,r){"use strict";r.r(t);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo");var n=r("q1tI"),o=r.n(n),a=(r("2vnA"),r("TyAF")),c=r("RUoE"),i=r("6wIH"),u=r("LTXe");function l(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=Object(a.a)((function(){var e=Object(n.useState)(0),t=e[0],r=e[1];Object(n.useEffect)((function(){r(0),f(),a()}),[i.a.currentTime]);var a=function(){var e=l(document.querySelectorAll(".lazy-image"));e.forEach((function(e){e.offsetTop<window.innerHeight+window.pageYOffset+300&&(e.src=e.dataset.src,e.onload=function(){return e.classList.add("loaded")})}))},f=function(){var e=l(document.querySelectorAll(".lazy-image"));e.forEach((function(e){e.offsetTop<window.innerHeight+window.pageYOffset+300&&e.removeAttribute("src")}))};Object(n.useEffect)((function(){a()}),[]);var s=function(){var e=[],n=[];return u.timeLine[i.a.currentTime].slides.map((function(a,l){return e.push(o.a.createElement(c.q,{key:l,className:"lazy-image","data-src":a,style:{objectFit:u.timeLine[i.a.currentTime].objectFit,opacity:0===l||t===l?1:0}})),n.push(o.a.createElement(c.o,{key:l,className:t===l?"js-active":"",onClick:function(){r(l)}})),a})),{shots:e,dots:n}};return o.a.createElement(c.s,null,o.a.createElement(c.r,{onClick:function(){i.a.openDesktopSliderModal=!0}},s().shots,o.a.createElement("div",{style:{position:"absolute",bottom:70,textAlign:"center",width:"1000px"},onClick:function(e){e.stopPropagation()}},s().dots)),o.a.createElement(c.D,{style:{width:"820px"}},o.a.createElement(c.E,null,o.a.createElement(c.H,null,"Backend Technology"),u.timeLine[i.a.currentTime].backendTec.map((function(e,t){return o.a.createElement(c.F,{key:t},e)}))),o.a.createElement(c.E,null,o.a.createElement(c.H,null,"Frontend Technology"),u.timeLine[i.a.currentTime].frontendTec.map((function(e,t){return o.a.createElement(c.F,{key:t},e)}))),o.a.createElement(c.E,null,o.a.createElement(c.H,null,"Company"),o.a.createElement(c.F,null,u.timeLine[i.a.currentTime].company))))}))},TyAF:function(e,t,r){"use strict";r("WLL4"),r("jm62"),r("0l/t"),r("Oyvg"),r("bWfx"),r("LK8F");r("91GP");r("2Spj"),r("f3/d");var n=r("rePB"),o=(r("HAE/"),r("V+eJ"),r("8+KV"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("rE2o"),r("ioFf"),r("2vnA")),a=r("q1tI"),c=r("i8i4");if(!a.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!o.p)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");var i=!1;function u(){return i}var l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function f(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)c.push(n.value)}catch(i){o={error:i}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return c}function s(e){return e.current?Object(o.j)(e.current):"<unknown>"}var p=[];function d(){var e=f(Object(a.useState)(0),2)[1];return Object(a.useCallback)((function(){e((function(e){return e+1}))}),[])}var m={};function b(e,t,r){if(void 0===t&&(t="observed"),void 0===r&&(r=m),u())return e();var n=(r.useForceUpdate||d)(),c=Object(a.useRef)(null);c.current||(c.current=new o.b("observer("+t+")",(function(){n()})));var i,l,f=function(){c.current&&!c.current.isDisposed&&(c.current.dispose(),c.current=null)};if(Object(a.useDebugValue)(c,s),function(e){Object(a.useEffect)((function(){return e}),p)}((function(){f()})),c.current.track((function(){try{i=e()}catch(t){l=t}})),l)throw f(),l;return i}function y(e,t){if(u())return e;var r,n,o,c=l({forwardRef:!1},t),i=e.displayName||e.name,f=function(t,r){return b((function(){return e(t,r)}),i)};return f.displayName=i,r=c.forwardRef?Object(a.memo)(Object(a.forwardRef)(f)):Object(a.memo)(f),n=e,o=r,Object.keys(n).forEach((function(e){n.hasOwnProperty(e)&&!h[e]&&Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(n,e))})),r.displayName=i,r}var h={$$typeof:!0,render:!0,compare:!0,type:!0};function v(e){var t=e.children,r=e.render,n=t||r;return"function"!=typeof n?null:b(n)}function w(e,t,r,n,o){var a="children"===t?"render":"children",c="function"==typeof e[t],i="function"==typeof e[a];return c&&i?new Error("MobX Observer: Do not use children and render in the same time in`"+r):c||i?null:new Error("Invalid prop `"+o+"` of type `"+typeof e[t]+"` supplied to `"+r+"`, expected `function`.")}v.propTypes={children:w,render:w},v.displayName="Observer";r.d(t,"a",(function(){return W}));var O=0;var j={};function g(e){return j[e]||(j[e]=function(e){if("function"==typeof Symbol)return Symbol(e);var t="__$mobx-react ".concat(e," (").concat(O,")");return O++,t}(e)),j[e]}function E(e,t){if(k(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.hasOwnProperty.call(t,r[o])||!k(e[r[o]],t[r[o]]))return!1;return!0}function k(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function P(e,t,r){Object.hasOwnProperty.call(e,t)?e[t]=r:Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:r})}var x=g("patchMixins"),S=g("patchedDefinition");function T(e,t){for(var r=this,n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];t.locks++;try{var c;return null!=e&&(c=e.apply(this,o)),c}finally{t.locks--,0===t.locks&&t.methods.forEach((function(e){e.apply(r,o)}))}}function F(e,t){return function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];T.call.apply(T,[this,e,t].concat(n))}}function R(e,t,r){var o=function(e,t){var r=e[x]=e[x]||{},n=r[t]=r[t]||{};return n.locks=n.locks||0,n.methods=n.methods||[],n}(e,t);o.methods.indexOf(r)<0&&o.methods.push(r);var a=Object.getOwnPropertyDescriptor(e,t);if(!a||!a[S]){var c=e[t],i=function e(t,r,o,a,c){var i,u=F(c,a);return i={},Object(n.a)(i,S,!0),Object(n.a)(i,"get",(function(){return u})),Object(n.a)(i,"set",(function(n){if(this===t)u=F(n,a);else{var c=e(this,r,o,a,n);Object.defineProperty(this,r,c)}})),Object(n.a)(i,"configurable",!0),Object(n.a)(i,"enumerable",o),i}(e,t,a?a.enumerable:void 0,o,c);Object.defineProperty(e,t,i)}}var A=o.a||"$mobx",C=g("isUnmounted"),U=g("skipRender"),_=g("isForcingUpdate");function H(e){var t=e.prototype;if(t.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==a.PureComponent)if(t.shouldComponentUpdate){if(t.shouldComponentUpdate!==$)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else t.shouldComponentUpdate=$;q(t,"props"),q(t,"state");var r=t.render;return t.render=function(){return L.call(this,r)},R(t,"componentWillUnmount",(function(){if(!0!==u()){if(this.render[A])this.render[A].dispose();else;this[C]=!0}})),e}function L(e){var t=this;if(!0===u())return e.call(this);P(this,U,!1),P(this,_,!1);var r,n=(r=this).displayName||r.name||r.constructor&&(r.constructor.displayName||r.constructor.name)||"<component>",c=e.bind(this),i=!1,l=new o.b("".concat(n,".render()"),(function(){if(!i&&(i=!0,!0!==t[C])){var e=!0;try{P(t,_,!0),t[U]||a.Component.prototype.forceUpdate.call(t),e=!1}finally{P(t,_,!1),e&&l.dispose()}}}));function f(){i=!1;var e=void 0,t=void 0;if(l.track((function(){try{t=Object(o.c)(!1,c)}catch(r){e=r}})),e)throw e;return t}return l.reactComponent=this,f[A]=l,this.render=f,f.call(this)}function $(e,t){return u()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||!E(this.props,e)}function q(e,t){var r=g("reactProp_".concat(t,"_valueHolder")),n=g("reactProp_".concat(t,"_atomHolder"));function a(){return this[n]||P(this,n,Object(o.h)("reactive "+t)),this[n]}Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){var e=!1;return o.e&&o.d&&(e=Object(o.e)(!0)),a.call(this).reportObserved(),o.e&&o.d&&Object(o.d)(e),this[r]},set:function(e){this[_]||E(this[r],e)?P(this,r,e):(P(this,r,e),P(this,U,!0),a.call(this).reportChanged(),P(this,U,!1))}})}var D="function"==typeof Symbol&&Symbol.for,I=D?Symbol.for("react.forward_ref"):"function"==typeof a.forwardRef&&Object(a.forwardRef)((function(e){return null})).$$typeof,N=D?Symbol.for("react.memo"):"function"==typeof a.memo&&Object(a.memo)((function(e){return null})).$$typeof;function W(e){if(!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),N&&e.$$typeof===N)throw new Error("Mobx observer: You are trying to use 'observer' on function component wrapped to either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(I&&e.$$typeof===I){var t=e.render;if("function"!=typeof t)throw new Error("render property of ForwardRef was not a function");return Object(a.forwardRef)((function(){var e=arguments;return Object(a.createElement)(v,null,(function(){return t.apply(void 0,e)}))}))}return"function"!=typeof e||e.prototype&&e.prototype.render||e.isReactClass||Object.prototype.isPrototypeOf.call(a.Component,e)?H(e):y(e)}if(!a.Component)throw new Error("mobx-react requires React to be available");if(!o.n)throw new Error("mobx-react requires mobx to be available");"function"==typeof c.unstable_batchedUpdates&&Object(o.g)({reactionScheduler:c.unstable_batchedUpdates})},WLL4:function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperties:r("FJW5")})},jm62:function(e,t,r){var n=r("XKFU"),o=r("mQtv"),a=r("aCFj"),c=r("EemH"),i=r("8a7r");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=a(e),u=c.f,l=o(n),f={},s=0;l.length>s;)void 0!==(r=u(n,t=l[s++]))&&i(f,t,r);return f}})}}]);
//# sourceMappingURL=component---src-pages-experience-laptop-slider-desktop-js-5b2eeaa5efe3fae9fe93.js.map