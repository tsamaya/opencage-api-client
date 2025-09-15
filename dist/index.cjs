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
    default: ()=>src,
    geocode: ()=>external_opencage_cjs_namespaceObject.geocode
});
const external_opencage_cjs_namespaceObject = require("./opencage.cjs");
const opencage = {
    geocode: external_opencage_cjs_namespaceObject.geocode
};
const src = opencage;
exports["default"] = __webpack_exports__["default"];
exports.geocode = __webpack_exports__.geocode;
for(var __webpack_i__ in __webpack_exports__)if (-1 === [
    "default",
    "geocode"
].indexOf(__webpack_i__)) exports[__webpack_i__] = __webpack_exports__[__webpack_i__];
Object.defineProperty(exports, '__esModule', {
    value: true
});

//# sourceMappingURL=index.cjs.map