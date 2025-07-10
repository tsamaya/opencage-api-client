import { GeocodeError } from "../errors/GeocodeError.js";
const OPENCAGEDATA_JSON_URL = 'https://api.opencagedata.com/geocode/v1/json';
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
export { buildQuery, buildQueryString, buildValidationError, isUndefinedOrEmpty, isUndefinedOrNull };

//# sourceMappingURL=geocodeHelpers.js.map