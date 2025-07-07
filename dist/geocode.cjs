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
    isUndefinedOrEmpty: ()=>isUndefinedOrEmpty,
    fetchUrl: ()=>fetchUrl,
    buildQueryString: ()=>buildQueryString,
    geocode: ()=>geocode,
    GeocodeError: ()=>GeocodeError,
    isUndefinedOrNull: ()=>isUndefinedOrNull
});
const external_version_cjs_namespaceObject = require("./version.cjs");
const OPENCAGEDATA_JSON_URL = 'https://api.opencagedata.com/geocode/v1/json';
const MISSING_OR_BAD_QUERY = 'missing or bad query';
const MISSING_API_KEY = 'missing API key';
const USER_AGENT = `OpenCageData Geocoding NodeJS API Client/${external_version_cjs_namespaceObject.version}`;
class GeocodeError extends Error {
    response;
    status;
}
function buildValidationError(code, message) {
    const error = new GeocodeError(message);
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
function checkFetchStatus(response) {
    if (response.status >= 200 && response.status < 300) return response;
    const error = new GeocodeError(response.statusText);
    error.status = {
        code: response.status,
        message: response.statusText
    };
    error.response = response;
    throw error;
}
function parseJSON(response) {
    return response.json();
}
async function fetchUrl(url, resolve, reject) {
    fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': USER_AGENT,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    }).then(checkFetchStatus).then(parseJSON).then((data)=>{
        resolve(data);
    }).catch((error)=>{
        reject(error);
    });
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
function buildQuery(input) {
    const query = {
        ...input
    };
    let endpoint = OPENCAGEDATA_JSON_URL;
    let missingKey = false;
    if (isUndefinedOrEmpty(input.proxyURL)) {
        if (isUndefinedOrEmpty(input.key)) query.key = process.env.OPENCAGE_API_KEY;
        if (isUndefinedOrEmpty(query.key)) missingKey = true;
    } else {
        endpoint = input.proxyURL;
        delete query.proxyURL;
    }
    return {
        missingKey,
        endpoint,
        query
    };
}
async function geocode(input) {
    return new Promise((resolve, reject)=>{
        if (isUndefinedOrNull(input)) {
            const error = buildValidationError(400, MISSING_OR_BAD_QUERY);
            reject(error);
            return;
        }
        const params = buildQuery(input);
        if (params.missingKey) {
            const error = buildValidationError(401, MISSING_API_KEY);
            reject(error);
            return;
        }
        const { query, endpoint } = params;
        const qs = buildQueryString(query);
        const url = `${endpoint}?${qs}`;
        fetchUrl(url, resolve, reject);
    });
}
exports.GeocodeError = __webpack_exports__.GeocodeError;
exports.buildQueryString = __webpack_exports__.buildQueryString;
exports.fetchUrl = __webpack_exports__.fetchUrl;
exports.geocode = __webpack_exports__.geocode;
exports.isUndefinedOrEmpty = __webpack_exports__.isUndefinedOrEmpty;
exports.isUndefinedOrNull = __webpack_exports__.isUndefinedOrNull;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "GeocodeError",
    "buildQueryString",
    "fetchUrl",
    "geocode",
    "isUndefinedOrEmpty",
    "isUndefinedOrNull"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});

//# sourceMappingURL=geocode.cjs.map