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
    geocode: ()=>geocode
});
const external_fetch_cjs_namespaceObject = require("./fetch.cjs");
const geocodeHelpers_cjs_namespaceObject = require("./helpers/geocodeHelpers.cjs");
const MISSING_OR_BAD_QUERY = 'missing or bad query';
const MISSING_API_KEY = 'missing API key';
async function geocode(input, options) {
    return new Promise((resolve, reject)=>{
        if ((0, geocodeHelpers_cjs_namespaceObject.isUndefinedOrNull)(input)) {
            const error = (0, geocodeHelpers_cjs_namespaceObject.buildValidationError)(400, MISSING_OR_BAD_QUERY);
            reject(error);
            return;
        }
        const params = (0, geocodeHelpers_cjs_namespaceObject.buildQuery)(input, options);
        if (params.missingKey) {
            const error = (0, geocodeHelpers_cjs_namespaceObject.buildValidationError)(401, MISSING_API_KEY);
            reject(error);
            return;
        }
        const { query, endpoint } = params;
        const qs = (0, geocodeHelpers_cjs_namespaceObject.buildQueryString)(query);
        const url = `${endpoint}?${qs}`;
        (0, external_fetch_cjs_namespaceObject.fetchUrl)(url, resolve, reject, options?.signal);
    });
}
exports.geocode = __webpack_exports__.geocode;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "geocode"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});

//# sourceMappingURL=opencage.cjs.map