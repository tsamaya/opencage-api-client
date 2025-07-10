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
    fetchUrl: ()=>fetchUrl,
    parseJSON: ()=>parseJSON,
    checkFetchStatus: ()=>checkFetchStatus
});
const GeocodeError_cjs_namespaceObject = require("./errors/GeocodeError.cjs");
const external_version_cjs_namespaceObject = require("./version.cjs");
const USER_AGENT = `OpenCageData Geocoding NodeJS API Client/${external_version_cjs_namespaceObject.version}`;
function checkFetchStatus(response) {
    if (response.status >= 200 && response.status < 300) return response;
    const message = response.statusText || `HTTP error ${response.status}`;
    const error = new GeocodeError_cjs_namespaceObject.GeocodeError(message);
    error.status = {
        code: response.status,
        message
    };
    error.response = response;
    throw error;
}
function parseJSON(response) {
    return response.json();
}
async function fetchUrl(url, resolve, reject, signal) {
    fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': USER_AGENT,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        signal
    }).then(checkFetchStatus).then(parseJSON).then((data)=>{
        resolve(data);
    }).catch((error)=>{
        reject(error);
    });
}
exports.checkFetchStatus = __webpack_exports__.checkFetchStatus;
exports.fetchUrl = __webpack_exports__.fetchUrl;
exports.parseJSON = __webpack_exports__.parseJSON;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "checkFetchStatus",
    "fetchUrl",
    "parseJSON"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});

//# sourceMappingURL=fetch.cjs.map