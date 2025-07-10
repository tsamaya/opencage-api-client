"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ('undefined' != typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    buildQuery: ()=>buildQuery,
    isUndefinedOrEmpty: ()=>isUndefinedOrEmpty,
    buildQueryString: ()=>buildQueryString,
    isUndefinedOrNull: ()=>isUndefinedOrNull,
    buildValidationError: ()=>buildValidationError
});
const GeocodeError_cjs_namespaceObject = require("../errors/GeocodeError.cjs");
const OPENCAGEDATA_JSON_URL = 'https://api.opencagedata.com/geocode/v1/json';
function buildValidationError(code, message) {
    const error = new GeocodeError_cjs_namespaceObject.GeocodeError(message);
    const status = {
        code,
        message
    };
    error.status = status;
    error.response = {
        status
    };
    return error;
}
function isUndefinedOrEmpty(param) {
    return void 0 === param || '' === param;
}
function isUndefinedOrNull(param) {
    return null == param;
}
function buildQueryString(input) {
    if (isUndefinedOrNull(input)) return '';
    return Object.keys(input).map((key)=>`${encodeURIComponent(key)}=${encodeURIComponent(input[key] || '')}`).join('&');
}
function buildQuery(input, options) {
    const query = {
        ...input
    };
    let endpoint = OPENCAGEDATA_JSON_URL;
    let missingKey = false;
    if (isUndefinedOrEmpty(input.proxyURL) && isUndefinedOrEmpty(options?.proxyURL)) {
        if (isUndefinedOrEmpty(input.key) && 'undefined' != typeof process) query.key = process.env.OPENCAGE_API_KEY;
        if (isUndefinedOrEmpty(query.key)) missingKey = true;
    } else {
        endpoint = options?.proxyURL;
        if (isUndefinedOrEmpty(endpoint)) endpoint = input.proxyURL;
        delete query.proxyURL;
    }
    return {
        missingKey,
        endpoint,
        query
    };
}
exports.buildQuery = __webpack_exports__.buildQuery;
exports.buildQueryString = __webpack_exports__.buildQueryString;
exports.buildValidationError = __webpack_exports__.buildValidationError;
exports.isUndefinedOrEmpty = __webpack_exports__.isUndefinedOrEmpty;
exports.isUndefinedOrNull = __webpack_exports__.isUndefinedOrNull;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "buildQuery",
    "buildQueryString",
    "buildValidationError",
    "isUndefinedOrEmpty",
    "isUndefinedOrNull"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});

//# sourceMappingURL=geocodeHelpers.cjs.map