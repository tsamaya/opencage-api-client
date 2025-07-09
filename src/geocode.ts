import type { GeocodeRequest } from './types/GeocodeRequest';
import type { GeocodeResponse } from './types/GeocodeResponse';
import { fetchUrl } from './fetch';
import {
  buildValidationError,
  isUndefinedOrNull,
  buildQueryString,
  buildQuery,
} from './helpers/geocodeHelpers';

const MISSING_OR_BAD_QUERY = 'missing or bad query';
const MISSING_API_KEY = 'missing API key';

/**
 * geocode address and reverse geocode coordinates using
 * [OpenCage API](https://opencagedata.com/api) requesting the json format.
 *
 * @param  {Object} input the input query parameter as JSON object,
 *  the attribute `q` is required, the `key` can be omitted when using
 *  a `proxyURL`, and when using node with a dedicated environment variable
 *  (OPENCAGE_API_KEY).
 *  Others optional parameters can be found at OpenCage Data API
 *  [documentation](https://opencagedata.com/api#forward-opt)
 *
 * @return {Promise} a promise resolved by the json format API payload
 */
export async function geocode(
  input: GeocodeRequest,
  options?: { signal?: AbortSignal }
): Promise<GeocodeResponse> {
  return new Promise((resolve, reject) => {
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
    // console.debug(url);
    fetchUrl(url, resolve, reject, options?.signal);
  });
}
