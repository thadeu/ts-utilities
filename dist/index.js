function t(){return t=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},t.apply(this,arguments)}function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}function e(t,n,o){return e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,n,e){var o=[null];o.push.apply(o,n);var u=new(Function.bind.apply(t,o));return e&&r(u,e.prototype),u},e.apply(null,arguments)}function o(t){var u="function"==typeof Map?new Map:void 0;return o=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==u){if(u.has(t))return u.get(t);u.set(t,o)}function o(){return e(t,arguments,n(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),r(o,t)},o(t)}var u=/*#__PURE__*/function(t){var n,e;function o(n,r){var e;return(e=t.call(this,n)||this).statusCode=void 0,e.name="TryException",e.statusCode=r||400,Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e),e.constructor),e}return e=t,(n=o).prototype=Object.create(e.prototype),n.prototype.constructor=n,r(n,e),o}(/*#__PURE__*/o(Error)),c=function(t){var n;return"Function"===(null==t||null==(n=t.constructor)?void 0:n.name)},i=function(t){var n;return"AsyncFunction"===(null==t||null==(n=t.constructor)?void 0:n.name)},l=function(t,n){return void 0===n&&(n=null),i(t)||c(t)?t(n):t},a=function(t){return new Promise(function(n,r){return setTimeout(n,t)})},f=function(t){var n=new Promise(function(n,r){setTimeout(function(){return r("limit time excedded ("+t+" ms)")},t)});return Promise.race([n].concat([].slice.call(arguments,1)))};exports.Execute=l,exports.Try=function n(r,e){var o,s,p,y=null!=(o=null==e?void 0:e.max)?o:0,v=null!=(s=null==e?void 0:e.async)?s:i(r),d=null!=(p=null==e?void 0:e.count)?p:0;try{var h;return v?f(null!=(h=null==e?void 0:e.timeout)?h:9999,l(r)).catch(function(o){return d>=y?l(null==e?void 0:e.onError,o):(d++,null!=e&&e.onRetry&&e.onRetry(d,d>=y),n(r,t({},e,{count:d})))}):(c(r),l(r))}catch(o){if(d>=y){if(null!=e&&e.strict)throw new u(o);return l(null==e?void 0:e.onError,o)}return d++,null!=e&&e.onRetry&&e.onRetry(d,d>=y),y>0?function(){try{var o;return Promise.resolve(a(1e3*(null!=(o=Math.pow(d,null==e?void 0:e.exponential))?o:1.5))).then(function(){return n(r,t({},e,{count:d}))})}catch(t){return Promise.reject(t)}}():n(r,t({},e,{count:d}))}},exports.delay=a,exports.isAsyncFunction=i,exports.isFunction=c,exports.isPlainRegex=function(t){var n;return"RegExp"===(null==(n=t.constructor)?void 0:n.name)},exports.isPlainString=function(t){return"string"==typeof t&&t.trim()},exports.race=f;
//# sourceMappingURL=index.js.map
