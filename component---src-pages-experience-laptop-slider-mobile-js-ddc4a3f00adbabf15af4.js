(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2zs7":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=void 0;var o,r=n("2rMq");var a=((o=r)&&o.__esModule?o:{default:o}).default,l=a.canUseDOM?window.HTMLElement:{};t.canUseDOM=a.canUseDOM;t.default=l},"9rZX":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("qFS3"),a=(o=r)&&o.__esModule?o:{default:o};t.default=a.default,e.exports=t.default},"KQ/M":function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),a=(n("9rZX"),n("6wIH")),l=n("wSuE"),s=n("pX8o"),u=Object(o.lazy)((function(){return n.e(12).then(n.bind(null,"1VNF"))}));t.a=Object(l.hot)((function(e){var t=Object(o.useState)(0),n=t[0],l=t[1],i=s[a.a.currentTime].slides;return r.a.createElement("div",{"data-testid":"desktop-slider"},r.a.createElement(o.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(u,{mainSrc:i[n],nextSrc:i[(n+1)%i.length],prevSrc:i[(n+i.length-1)%i.length],onCloseRequest:function(){e.onClose()},onMovePrevRequest:function(){return l((n+i.length-1)%i.length)},onMoveNextRequest:function(){return l((n+1)%i.length)}})))}))},NPsS:function(e,t,n){"use strict";n("pIFo");var o=function(){};e.exports=o},QEso:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("eM6i"),n("/SS/"),n("hHhE"),n("rE2o"),n("ioFf"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n("q1tI"),s=m(l),u=m(n("17x9")),i=h(n("VKEO")),c=m(n("S1to")),f=h(n("Ye7m")),d=h(n("fbhf")),p=m(n("2zs7"));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function m(e){return e&&e.__esModule?e:{default:e}}var b={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},v=0,y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName;a&&d.remove(document.body,a),r&&d.remove(document.getElementsByTagName("html")[0],r),o&&v>0&&0===(v-=1)&&f.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(i.returnFocus(),i.teardownScopedFocus()):i.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose()},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(i.setupScopedFocus(n.node),i.markForFocusLater()),n.setState({isOpen:!0},(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){9===e.keyCode&&(0,c.default)(n.content,e),n.props.shouldCloseOnEsc&&27===e.keyCode&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":r(t))?t:{base:b[e],afterOpen:b[e]+"--after-open",beforeClose:b[e]+"--before-close"},a=o.base;return n.state.afterOpen&&(a=a+" "+o.afterOpen),n.state.beforeClose&&(a=a+" "+o.beforeClose),"string"==typeof t&&t?a+" "+t:a},n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName;r&&d.add(document.body,r),o&&d.add(document.getElementsByTagName("html")[0],o),n&&(v+=1,f.hide(t))}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,a=e.defaultStyles,l=n?{}:a.content,u=r?{}:a.overlay;return this.shouldBeClosed()?null:s.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},u,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},s.default.createElement("div",o({id:t,ref:this.setContentRef,style:o({},l,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",this.props.aria||{}),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),this.props.children))}}]),t}(l.Component);y.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},y.propTypes={isOpen:u.default.bool.isRequired,defaultStyles:u.default.shape({content:u.default.object,overlay:u.default.object}),style:u.default.shape({content:u.default.object,overlay:u.default.object}),className:u.default.oneOfType([u.default.string,u.default.object]),overlayClassName:u.default.oneOfType([u.default.string,u.default.object]),bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,ariaHideApp:u.default.bool,appElement:u.default.instanceOf(p.default),onAfterOpen:u.default.func,onAfterClose:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,role:u.default.string,contentLabel:u.default.string,aria:u.default.object,data:u.default.object,children:u.default.node,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,testId:u.default.string},t.default=y,e.exports=t.default},S1to:function(e,t,n){"use strict";n("V+eJ"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,a.default)(e);if(!n.length)return void t.preventDefault();var o,r=t.shiftKey,l=n[0],s=n[n.length-1];if(e===document.activeElement){if(!r)return;o=s}s!==document.activeElement||r||(o=l);l===document.activeElement&&r&&(o=s);if(o)return t.preventDefault(),void o.focus();var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==u||"Chrome"==u[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var i=n.indexOf(document.activeElement);i>-1&&(i+=r?-1:1);if(void 0===n[i])return t.preventDefault(),void(o=r?s:l).focus();t.preventDefault(),n[i].focus()};var o,r=n("ZDLa"),a=(o=r)&&o.__esModule?o:{default:o};e.exports=t.default},TyAF:function(e,t,n){"use strict";n("WLL4"),n("jm62"),n("0l/t"),n("Oyvg"),n("bWfx"),n("LK8F");n("91GP");n("2Spj"),n("f3/d");var o=n("rePB"),r=(n("HAE/"),n("V+eJ"),n("8+KV"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("rE2o"),n("ioFf"),n("2vnA")),a=n("q1tI"),l=n("i8i4");if(!a.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!r.q)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");var s=!1;function u(){return s}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function c(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)l.push(o.value)}catch(s){r={error:s}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return l}function f(e){return e.current?Object(r.k)(e.current):"<unknown>"}var d=[];function p(){var e=c(Object(a.useState)(0),2)[1];return Object(a.useCallback)((function(){e((function(e){return e+1}))}),[])}var h={};function m(e,t,n){if(void 0===t&&(t="observed"),void 0===n&&(n=h),u())return e();var o=(n.useForceUpdate||p)(),l=Object(a.useRef)(null);l.current||(l.current=new r.b("observer("+t+")",(function(){o()})));var s,i,c=function(){l.current&&!l.current.isDisposed&&(l.current.dispose(),l.current=null)};if(Object(a.useDebugValue)(l,f),function(e){Object(a.useEffect)((function(){return e}),d)}((function(){c()})),l.current.track((function(){try{s=e()}catch(t){i=t}})),i)throw c(),i;return s}function b(e,t){if(u())return e;var n,o,r,l=i({forwardRef:!1},t),s=e.displayName||e.name,c=function(t,n){return m((function(){return e(t,n)}),s)};return c.displayName=s,n=l.forwardRef?Object(a.memo)(Object(a.forwardRef)(c)):Object(a.memo)(c),o=e,r=n,Object.keys(o).forEach((function(e){o.hasOwnProperty(e)&&!v[e]&&Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})),n.displayName=s,n}var v={$$typeof:!0,render:!0,compare:!0,type:!0};function y(e){var t=e.children,n=e.render,o=t||n;return"function"!=typeof o?null:m(o)}function O(e,t,n,o,r){var a="children"===t?"render":"children",l="function"==typeof e[t],s="function"==typeof e[a];return l&&s?new Error("MobX Observer: Do not use children and render in the same time in`"+n):l||s?null:new Error("Invalid prop `"+r+"` of type `"+typeof e[t]+"` supplied to `"+n+"`, expected `function`.")}y.propTypes={children:O,render:O},y.displayName="Observer";n.d(t,"a",(function(){return I}));var w=0;var C={};function g(e){return C[e]||(C[e]=function(e){if("function"==typeof Symbol)return Symbol(e);var t="__$mobx-react ".concat(e," (").concat(w,")");return w++,t}(e)),C[e]}function E(e,t){if(j(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var r=0;r<n.length;r++)if(!Object.hasOwnProperty.call(t,n[r])||!j(e[n[r]],t[n[r]]))return!1;return!0}function j(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function S(e,t,n){Object.hasOwnProperty.call(e,t)?e[t]=n:Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})}var _=g("patchMixins"),M=g("patchedDefinition");function P(e,t){for(var n=this,o=arguments.length,r=new Array(o>2?o-2:0),a=2;a<o;a++)r[a-2]=arguments[a];t.locks++;try{var l;return null!=e&&(l=e.apply(this,r)),l}finally{t.locks--,0===t.locks&&t.methods.forEach((function(e){e.apply(n,r)}))}}function R(e,t){return function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];P.call.apply(P,[this,e,t].concat(o))}}function k(e,t,n){var r=function(e,t){var n=e[_]=e[_]||{},o=n[t]=n[t]||{};return o.locks=o.locks||0,o.methods=o.methods||[],o}(e,t);r.methods.indexOf(n)<0&&r.methods.push(n);var a=Object.getOwnPropertyDescriptor(e,t);if(!a||!a[M]){var l=e[t],s=function e(t,n,r,a,l){var s,u=R(l,a);return s={},Object(o.a)(s,M,!0),Object(o.a)(s,"get",(function(){return u})),Object(o.a)(s,"set",(function(o){if(this===t)u=R(o,a);else{var l=e(this,n,r,a,o);Object.defineProperty(this,n,l)}})),Object(o.a)(s,"configurable",!0),Object(o.a)(s,"enumerable",r),s}(e,t,a?a.enumerable:void 0,r,l);Object.defineProperty(e,t,s)}}var A=r.a||"$mobx",T=g("isUnmounted"),N=g("skipRender"),F=g("isForcingUpdate");function x(e){var t=e.prototype;if(t.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==a.PureComponent)if(t.shouldComponentUpdate){if(t.shouldComponentUpdate!==q)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else t.shouldComponentUpdate=q;H(t,"props"),H(t,"state");var n=t.render;return t.render=function(){return D.call(this,n)},k(t,"componentWillUnmount",(function(){if(!0!==u()){if(this.render[A])this.render[A].dispose();else;this[T]=!0}})),e}function D(e){var t=this;if(!0===u())return e.call(this);S(this,N,!1),S(this,F,!1);var n,o=(n=this).displayName||n.name||n.constructor&&(n.constructor.displayName||n.constructor.name)||"<component>",l=e.bind(this),s=!1,i=new r.b("".concat(o,".render()"),(function(){if(!s&&(s=!0,!0!==t[T])){var e=!0;try{S(t,F,!0),t[N]||a.Component.prototype.forceUpdate.call(t),e=!1}finally{S(t,F,!1),e&&i.dispose()}}}));function c(){s=!1;var e=void 0,t=void 0;if(i.track((function(){try{t=Object(r.c)(!1,l)}catch(n){e=n}})),e)throw e;return t}return i.reactComponent=this,c[A]=i,this.render=c,c.call(this)}function q(e,t){return u()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||!E(this.props,e)}function H(e,t){var n=g("reactProp_".concat(t,"_valueHolder")),o=g("reactProp_".concat(t,"_atomHolder"));function a(){return this[o]||S(this,o,Object(r.i)("reactive "+t)),this[o]}Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){var e=!1;return r.e&&r.d&&(e=Object(r.e)(!0)),a.call(this).reportObserved(),r.e&&r.d&&Object(r.d)(e),this[n]},set:function(e){this[F]||E(this[n],e)?S(this,n,e):(S(this,n,e),S(this,N,!0),a.call(this).reportChanged(),S(this,N,!1))}})}var L="function"==typeof Symbol&&Symbol.for,U=L?Symbol.for("react.forward_ref"):"function"==typeof a.forwardRef&&Object(a.forwardRef)((function(e){return null})).$$typeof,W=L?Symbol.for("react.memo"):"function"==typeof a.memo&&Object(a.memo)((function(e){return null})).$$typeof;function I(e){if(!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),W&&e.$$typeof===W)throw new Error("Mobx observer: You are trying to use 'observer' on function component wrapped to either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(U&&e.$$typeof===U){var t=e.render;if("function"!=typeof t)throw new Error("render property of ForwardRef was not a function");return Object(a.forwardRef)((function(){var e=arguments;return Object(a.createElement)(y,null,(function(){return t.apply(void 0,e)}))}))}return"function"!=typeof e||e.prototype&&e.prototype.render||e.isReactClass||Object.prototype.isPrototypeOf.call(a.Component,e)?x(e):b(e)}if(!a.Component)throw new Error("mobx-react requires React to be available");if(!r.o)throw new Error("mobx-react requires mobx to be available");"function"==typeof l.unstable_batchedUpdates&&Object(r.h)({reactionScheduler:l.unstable_batchedUpdates})},VKEO:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=i,t.handleFocus=c,t.markForFocusLater=function(){l.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(0!==l.length&&(e=l.pop()).focus())}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){l.length>0&&l.pop()},t.setupScopedFocus=function(e){s=e,window.addEventListener?(window.addEventListener("blur",i,!1),document.addEventListener("focus",c,!0)):(window.attachEvent("onBlur",i),document.attachEvent("onFocus",c))},t.teardownScopedFocus=function(){s=null,window.addEventListener?(window.removeEventListener("blur",i),document.removeEventListener("focus",c)):(window.detachEvent("onBlur",i),document.detachEvent("onFocus",c))};var o,r=n("ZDLa"),a=(o=r)&&o.__esModule?o:{default:o};var l=[],s=null,u=!1;function i(){u=!0}function c(){if(u){if(u=!1,!s)return;setTimeout((function(){s.contains(document.activeElement)||((0,a.default)(s)[0]||s).focus()}),0)}}},WLL4:function(e,t,n){var o=n("XKFU");o(o.S+o.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},Ye7m:function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=u,t.setElement=function(e){var t=e;if("string"==typeof t&&l.canUseDOM){var n=document.querySelectorAll(t);u(n,t),t="length"in n?n[0]:n}return s=t||s},t.validateElement=i,t.hide=function(e){i(e)&&(e||s).setAttribute("aria-hidden","true")},t.show=function(e){i(e)&&(e||s).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){s=null},t.resetForTesting=function(){s=null};var o,r=n("NPsS"),a=(o=r)&&o.__esModule?o:{default:o},l=n("2zs7");var s=null;function u(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function i(e){return!(!e&&!s)||((0,a.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),!1)}},ZDLa:function(e,t,n){"use strict";n("0l/t"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(l)};var o=/input|select|textarea|button|object/;function r(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;var n=window.getComputedStyle(e);return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}function a(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e;t&&t!==document.body;){if(r(t))return!1;t=t.parentNode}return!0}(e)}function l(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}e.exports=t.default},fEfL:function(e,t,n){"use strict";n.r(t);n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo");var o=n("q1tI"),r=n.n(o),a=(n("2vnA"),n("TyAF")),l=n("RUoE"),s=n("6wIH"),u=n("pX8o");n("KQ/M");function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=Object(a.a)((function(){var e=Object(o.useState)(0),t=e[0],n=e[1];Object(o.useEffect)((function(){n(0),c(),a()}),[s.a.currentTime]);var a=function(){var e=i(document.querySelectorAll(".lazy-image"));e.forEach((function(e){e.offsetTop<window.innerHeight+window.pageYOffset+300&&(e.src=e.dataset.src,e.onload=function(){return e.classList.add("loaded")})}))},c=function(){var e=i(document.querySelectorAll(".lazy-image"));e.forEach((function(e){e.offsetTop<window.innerHeight+window.pageYOffset+300&&e.removeAttribute("src")}))};Object(o.useEffect)((function(){a()}),[]);var f=function(){var e=[],o=[];return u[s.a.currentTime].slides.map((function(a,i){return e.push(r.a.createElement(l.u,{className:"lazy-image"+(u[s.a.currentTime].mobileMockup?" js-mockup-mobile":""),"data-src":a,style:{display:t===i?"block":"none",opacity:0===i||t===i?1:0}})),o.push(r.a.createElement(l.o,{key:i,className:t===i?"js-active":"",onClick:function(){n(i)}})),a})),{shots:e,dots:o}};return r.a.createElement(l.s,{style:{marginTop:"80px"}},r.a.createElement(l.v,{onClick:function(){s.a.setMobileModalVisibility(!0)},desktopMockup:!u[s.a.currentTime].mobileMockup},f().shots,r.a.createElement("div",{style:{position:"absolute",bottom:u[s.a.currentTime].mobileMockup?0:30,textAlign:"center",width:"100%"},onClick:function(e){e.stopPropagation()}},f().dots)),r.a.createElement(l.D,{style:{flexDirection:"column",margin:"0px auto",flexWrap:"wrap"}},r.a.createElement(l.E,{style:{margin:5}},r.a.createElement(l.G,null,"Backend Technology"),u[s.a.currentTime].backendTec.map((function(e,t){return r.a.createElement(l.F,{key:t},e)}))),r.a.createElement(l.E,{style:{margin:5}},r.a.createElement(l.G,null,"Frontend Technology"),u[s.a.currentTime].frontendTec.map((function(e,t){return r.a.createElement(l.F,{key:t},e)}))),r.a.createElement(l.E,{style:{margin:5}},r.a.createElement(l.G,null,"Company"),r.a.createElement(l.F,null,u[s.a.currentTime].company))))}))},fbhf:function(e,t,n){"use strict";n("KKXr"),n("8+KV"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.dumpClassLists=function(){0};var o={},r={};t.add=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(a,e),n.add(e)}));var n,a},t.remove=function(e,t){return n=e.classList,a="html"==e.nodeName.toLowerCase()?o:r,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(a,e),0===a[e]&&n.remove(e)}));var n,a}},jm62:function(e,t,n){var o=n("XKFU"),r=n("mQtv"),a=n("aCFj"),l=n("EemH"),s=n("8a7r");o(o.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,o=a(e),u=l.f,i=r(o),c={},f=0;i.length>f;)void 0!==(n=u(o,t=i[f++]))&&s(c,t,n);return c}})},qFS3:function(e,t,n){"use strict";n("eM6i"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),l=h(a),s=h(n("i8i4")),u=h(n("17x9")),i=h(n("QEso")),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("Ye7m")),f=n("2zs7"),d=h(f),p=n("94VI");function h(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var v=t.portalClassName="ReactModalPortal",y=t.bodyOpenClassName="ReactModal__Body--open",O=void 0!==s.default.createPortal,w=function(){return O?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer};function C(e){return e()}var g=function(e){function t(){var e,n,r;m(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=r=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.removePortal=function(){!O&&s.default.unmountComponentAtNode(r.node),C(r.props.parentSelector).removeChild(r.node)},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=w()(r,l.default.createElement(i.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},b(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){f.canUseDOM&&(O||(this.node=document.createElement("div")),this.node.className=this.props.portalClassName,C(this.props.parentSelector).appendChild(this.node),!O&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:C(e.parentSelector),nextParent:C(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(f.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var l=n.prevParent,s=n.nextParent;s!==l&&(l.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&!O&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(f.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return f.canUseDOM&&O?(!this.node&&O&&(this.node=document.createElement("div")),w()(l.default.createElement(i.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),t}(a.Component);g.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.instanceOf(d.default),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func},g.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:y,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,parentSelector:function(){return document.body}},g.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(g),t.default=g},wSuE:function(e,t,n){t.hot=function(e){return e}}}]);
//# sourceMappingURL=component---src-pages-experience-laptop-slider-mobile-js-ddc4a3f00adbabf15af4.js.map