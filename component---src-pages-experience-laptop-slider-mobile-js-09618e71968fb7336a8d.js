(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{TyAF:function(e,t,r){"use strict";r("WLL4"),r("jm62"),r("0l/t"),r("Oyvg"),r("bWfx"),r("LK8F");r("91GP");r("2Spj"),r("f3/d");var n=r("rePB"),o=(r("HAE/"),r("V+eJ"),r("8+KV"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("rE2o"),r("ioFf"),r("2vnA")),a=r("q1tI"),i=r("i8i4");if(!a.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!o.p)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");var c=!1;function u(){return c}var f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function l(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function s(e){return e.current?Object(o.j)(e.current):"<unknown>"}var p=[];function d(){var e=l(Object(a.useState)(0),2)[1];return Object(a.useCallback)((function(){e((function(e){return e+1}))}),[])}var m={};function b(e,t,r){if(void 0===t&&(t="observed"),void 0===r&&(r=m),u())return e();var n=(r.useForceUpdate||d)(),i=Object(a.useRef)(null);i.current||(i.current=new o.b("observer("+t+")",(function(){n()})));var c,f,l=function(){i.current&&!i.current.isDisposed&&(i.current.dispose(),i.current=null)};if(Object(a.useDebugValue)(i,s),function(e){Object(a.useEffect)((function(){return e}),p)}((function(){l()})),i.current.track((function(){try{c=e()}catch(t){f=t}})),f)throw l(),f;return c}function y(e,t){if(u())return e;var r,n,o,i=f({forwardRef:!1},t),c=e.displayName||e.name,l=function(t,r){return b((function(){return e(t,r)}),c)};return l.displayName=c,r=i.forwardRef?Object(a.memo)(Object(a.forwardRef)(l)):Object(a.memo)(l),n=e,o=r,Object.keys(n).forEach((function(e){n.hasOwnProperty(e)&&!h[e]&&Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(n,e))})),r.displayName=c,r}var h={$$typeof:!0,render:!0,compare:!0,type:!0};function v(e){var t=e.children,r=e.render,n=t||r;return"function"!=typeof n?null:b(n)}function w(e,t,r,n,o){var a="children"===t?"render":"children",i="function"==typeof e[t],c="function"==typeof e[a];return i&&c?new Error("MobX Observer: Do not use children and render in the same time in`"+r):i||c?null:new Error("Invalid prop `"+o+"` of type `"+typeof e[t]+"` supplied to `"+r+"`, expected `function`.")}v.propTypes={children:w,render:w},v.displayName="Observer";r.d(t,"a",(function(){return N}));var O=0;var j={};function g(e){return j[e]||(j[e]=function(e){if("function"==typeof Symbol)return Symbol(e);var t="__$mobx-react ".concat(e," (").concat(O,")");return O++,t}(e)),j[e]}function E(e,t){if(k(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.hasOwnProperty.call(t,r[o])||!k(e[r[o]],t[r[o]]))return!1;return!0}function k(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function x(e,t,r){Object.hasOwnProperty.call(e,t)?e[t]=r:Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:r})}var P=g("patchMixins"),T=g("patchedDefinition");function S(e,t){for(var r=this,n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];t.locks++;try{var i;return null!=e&&(i=e.apply(this,o)),i}finally{t.locks--,0===t.locks&&t.methods.forEach((function(e){e.apply(r,o)}))}}function F(e,t){return function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];S.call.apply(S,[this,e,t].concat(n))}}function R(e,t,r){var o=function(e,t){var r=e[P]=e[P]||{},n=r[t]=r[t]||{};return n.locks=n.locks||0,n.methods=n.methods||[],n}(e,t);o.methods.indexOf(r)<0&&o.methods.push(r);var a=Object.getOwnPropertyDescriptor(e,t);if(!a||!a[T]){var i=e[t],c=function e(t,r,o,a,i){var c,u=F(i,a);return c={},Object(n.a)(c,T,!0),Object(n.a)(c,"get",(function(){return u})),Object(n.a)(c,"set",(function(n){if(this===t)u=F(n,a);else{var i=e(this,r,o,a,n);Object.defineProperty(this,r,i)}})),Object(n.a)(c,"configurable",!0),Object(n.a)(c,"enumerable",o),c}(e,t,a?a.enumerable:void 0,o,i);Object.defineProperty(e,t,c)}}var C=o.a||"$mobx",A=g("isUnmounted"),U=g("skipRender"),L=g("isForcingUpdate");function _(e){var t=e.prototype;if(t.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==a.PureComponent)if(t.shouldComponentUpdate){if(t.shouldComponentUpdate!==q)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else t.shouldComponentUpdate=q;D(t,"props"),D(t,"state");var r=t.render;return t.render=function(){return $.call(this,r)},R(t,"componentWillUnmount",(function(){if(!0!==u()){if(this.render[C])this.render[C].dispose();else;this[A]=!0}})),e}function $(e){var t=this;if(!0===u())return e.call(this);x(this,U,!1),x(this,L,!1);var r,n=(r=this).displayName||r.name||r.constructor&&(r.constructor.displayName||r.constructor.name)||"<component>",i=e.bind(this),c=!1,f=new o.b("".concat(n,".render()"),(function(){if(!c&&(c=!0,!0!==t[A])){var e=!0;try{x(t,L,!0),t[U]||a.Component.prototype.forceUpdate.call(t),e=!1}finally{x(t,L,!1),e&&f.dispose()}}}));function l(){c=!1;var e=void 0,t=void 0;if(f.track((function(){try{t=Object(o.c)(!1,i)}catch(r){e=r}})),e)throw e;return t}return f.reactComponent=this,l[C]=f,this.render=l,l.call(this)}function q(e,t){return u()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||!E(this.props,e)}function D(e,t){var r=g("reactProp_".concat(t,"_valueHolder")),n=g("reactProp_".concat(t,"_atomHolder"));function a(){return this[n]||x(this,n,Object(o.h)("reactive "+t)),this[n]}Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){var e=!1;return o.e&&o.d&&(e=Object(o.e)(!0)),a.call(this).reportObserved(),o.e&&o.d&&Object(o.d)(e),this[r]},set:function(e){this[L]||E(this[r],e)?x(this,r,e):(x(this,r,e),x(this,U,!0),a.call(this).reportChanged(),x(this,U,!1))}})}var H="function"==typeof Symbol&&Symbol.for,W=H?Symbol.for("react.forward_ref"):"function"==typeof a.forwardRef&&Object(a.forwardRef)((function(e){return null})).$$typeof,I=H?Symbol.for("react.memo"):"function"==typeof a.memo&&Object(a.memo)((function(e){return null})).$$typeof;function N(e){if(!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),I&&e.$$typeof===I)throw new Error("Mobx observer: You are trying to use 'observer' on function component wrapped to either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(W&&e.$$typeof===W){var t=e.render;if("function"!=typeof t)throw new Error("render property of ForwardRef was not a function");return Object(a.forwardRef)((function(){var e=arguments;return Object(a.createElement)(v,null,(function(){return t.apply(void 0,e)}))}))}return"function"!=typeof e||e.prototype&&e.prototype.render||e.isReactClass||Object.prototype.isPrototypeOf.call(a.Component,e)?_(e):y(e)}if(!a.Component)throw new Error("mobx-react requires React to be available");if(!o.n)throw new Error("mobx-react requires mobx to be available");"function"==typeof i.unstable_batchedUpdates&&Object(o.g)({reactionScheduler:i.unstable_batchedUpdates})},WLL4:function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperties:r("FJW5")})},fEfL:function(e,t,r){"use strict";r.r(t);r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo");var n=r("q1tI"),o=r.n(n),a=(r("2vnA"),r("TyAF")),i=r("RUoE"),c=r("6wIH"),u=r("LTXe");function f(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=Object(a.a)((function(){var e=Object(n.useState)(0),t=e[0],r=e[1];Object(n.useEffect)((function(){r(0),l(),a()}),[c.a.currentTime]);var a=function(){var e=f(document.querySelectorAll(".lazy-image"));e.forEach((function(e){e.offsetTop<window.innerHeight+window.pageYOffset+300&&(e.src=e.dataset.src,e.onload=function(){return e.classList.add("loaded")})}))},l=function(){var e=f(document.querySelectorAll(".lazy-image"));e.forEach((function(e){e.offsetTop<window.innerHeight+window.pageYOffset+300&&e.removeAttribute("src")}))};Object(n.useEffect)((function(){a()}),[]);var s=function(){var e=[],n=[];return u.timeLine[c.a.currentTime].slides.map((function(a,f){return e.push(o.a.createElement(i.u,{className:"lazy-image","data-src":a,style:{objectFit:u.timeLine[c.a.currentTime].objectFit,opacity:0===f||t===f?1:0}})),n.push(o.a.createElement(i.o,{key:f,className:t===f?"js-active":"",onClick:function(){r(f)}})),a})),{shots:e,dots:n}};return o.a.createElement(i.s,{style:{marginTop:"80px"}},o.a.createElement(i.v,{onClick:function(){c.a.openMobileSliderModal=!0}},s().shots,o.a.createElement("div",{style:{position:"absolute",bottom:70,textAlign:"center",width:"100%"},onClick:function(e){e.stopPropagation()}},s().dots)),o.a.createElement(i.D,{style:{flexDirection:"column",margin:"0px auto",flexWrap:"wrap"}},o.a.createElement(i.E,{style:{margin:5}},o.a.createElement(i.G,null,"Backend Technology"),u.timeLine[c.a.currentTime].backendTec.map((function(e,t){return o.a.createElement(i.F,{key:t},e)}))),o.a.createElement(i.E,{style:{margin:5}},o.a.createElement(i.G,null,"Frontend Technology"),u.timeLine[c.a.currentTime].frontendTec.map((function(e,t){return o.a.createElement(i.F,{key:t},e)}))),o.a.createElement(i.E,{style:{margin:5}},o.a.createElement(i.G,null,"Company"),o.a.createElement(i.F,null,u.timeLine[c.a.currentTime].company))))}))},jm62:function(e,t,r){var n=r("XKFU"),o=r("mQtv"),a=r("aCFj"),i=r("EemH"),c=r("8a7r");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=a(e),u=i.f,f=o(n),l={},s=0;f.length>s;)void 0!==(r=u(n,t=f[s++]))&&c(l,t,r);return l}})}}]);
//# sourceMappingURL=component---src-pages-experience-laptop-slider-mobile-js-09618e71968fb7336a8d.js.map