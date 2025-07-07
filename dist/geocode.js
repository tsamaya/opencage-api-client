const OPENCAGEDATA_JSON_URL = 'https://api.opencagedata.com/geocode/v1/json';
const MISSING_OR_BAD_QUERY = 'missing or bad query';
const MISSING_API_KEY = 'missing API key';
const USER_AGENT = 'OpenCageData Geocoding NodeJS API Client';
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
export { GeocodeError, buildQueryString, fetchUrl, geocode, isUndefinedOrEmpty, isUndefinedOrNull };

//# sourceMappingURL=geocode.js.map