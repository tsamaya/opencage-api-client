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
    fetchUrl: ()=>fetchUrl
});
const external_version_cjs_namespaceObject = require("./version.cjs");
const geocodeHelpers_cjs_namespaceObject = require("./helpers/geocodeHelpers.cjs");
const USER_AGENT = `OpenCageData Geocoding NodeJS API Client/${external_version_cjs_namespaceObject.version}`;
async function fetchUrl(url, resolve, reject, signal) {
    fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': USER_AGENT,
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        signal
    }).then(geocodeHelpers_cjs_namespaceObject.checkFetchStatus).then(geocodeHelpers_cjs_namespaceObject.parseJSON).then((data)=>{
        resolve(data);
    }).catch((error)=>{
        reject(error);
    });
}
exports.fetchUrl = __webpack_exports__.fetchUrl;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "fetchUrl"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});

//# sourceMappingURL=fetch.cjs.map