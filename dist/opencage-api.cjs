function t(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}),e.default=t,e}var e=/*#__PURE__*/t(require("dotenv"));function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(n=function(){return!!t})()}function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function c(t){var e="function"==typeof Map?new Map:void 0;return c=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return function(t,e,r){if(n())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,e);var c=new(t.bind.apply(t,o));return r&&u(c,r.prototype),c}(t,arguments,o(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)},c(t)}var i=/*#__PURE__*/function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).response=void 0,e.status=void 0,e}var n,r;return r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,u(n,r),e}(/*#__PURE__*/c(Error));function s(t,e){var n=new i(e);return n.response={status:{code:t,message:e}},n}function a(t){if(t.status>=200&&t.status<300)return t;var e=new i(t.statusText);throw e.status={code:t.status,message:t.statusText},e}function f(t){return t.json()}function p(t){return void 0===t||""===t}function l(t){return null==t}function y(t){return new Promise(function(e,n){if(l(t))n(s(400,"missing or bad query"));else{var o=function(t){var e=r({},t),n="https://api.opencagedata.com/geocode/v1/json",o=!1;return p(t.proxyURL)?(p(t.key)&&(e.key=process.env.OPENCAGE_API_KEY||process.env.OCD_API_KEY),p(e.key)&&(o=!0)):(n=t.proxyURL,delete e.proxyURL),{missingKey:o,endpoint:n,query:e}}(t);if(o.missingKey)n(s(401,"missing API key"));else{var u=o.endpoint,c=function(t){return l(t)?"":Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")}(o.query);!function(t,e,n){try{return fetch(t).then(a).then(f).then(function(t){e(t)}).catch(function(t){n(t)}),Promise.resolve()}catch(t){return Promise.reject(t)}}(u+"?"+c,e,n)}}})}e.config();var v={geocode:y};exports.GeocodeError=i,exports.default=v,exports.geocode=y;
//# sourceMappingURL=opencage-api.cjs.map
