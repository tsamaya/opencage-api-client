import type { GeocodingRequest } from './types/GeocodingRequest';
import type { GeocodingResponse } from './types/GeocodingResponse';
import type { GeocodingOptions } from './types/GeocodingOptions';
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
 * @param  {GeocodingRequest} input the input query parameter as JSON object,
 *  the attribute `q` is required, the `key` can be omitted when using
 *  a `proxyURL`, and when using node with a dedicated environment variable
 *  (OPENCAGE_API_KEY).
 *  Others optional parameters can be found at OpenCage Data API
 *  [documentation](https://opencagedata.com/api#forward-opt)
 *
 * @param  {Object} options the options object,
 *  the attribute `signal` is used to abort the request when the signal is aborted.
 *  the attribute `proxyURL` is used to proxy the request to a different URL.
 *
 * @return {Promise<GeocodingResponse>} a promise resolved by the json format API payload
 */
export async function geocode(
  input: GeocodingRequest,
  options?: GeocodingOptions
): Promise<GeocodingResponse> {
  return new Promise((resolve, reject) => {
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
    // console.debug(url);
    fetchUrl(url, resolve, reject, options?.signal);
  });
}
