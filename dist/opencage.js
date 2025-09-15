import { fetchUrl } from "./fetch.js";
import { buildQuery, buildQueryString, buildValidationError, isUndefinedOrNull } from "./helpers/geocodeHelpers.js";
const MISSING_OR_BAD_QUERY = 'missing or bad query';
const MISSING_API_KEY = 'missing API key';
async function geocode(input, options) {
    return new Promise((resolve, reject)=>{
        if (isUndefinedOrNull(input)) {
            const error = buildValidationError(400, MISSING_OR_BAD_QUERY);
            reject(error);
            return;
        }
        const params = buildQuery(input, options);
        if (params.missingKey) {
            const error = buildValidationError(401, MISSING_API_KEY);
            reject(error);
            return;
        }
        const { query, endpoint } = params;
        const qs = buildQueryString(query);
        const url = `${endpoint}?${qs}`;
        fetchUrl(url, resolve, reject, options?.signal);
    });
}
export { geocode };

//# sourceMappingURL=opencage.js.map