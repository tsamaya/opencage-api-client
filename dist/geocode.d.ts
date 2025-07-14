import type { GeocodingRequest } from './types/GeocodingRequest';
import type { GeocodingResponse } from './types/GeocodingResponse';
import type { GeocodingOptions } from './types/GeocodingOptions';
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
export declare function geocode(input: GeocodingRequest, options?: GeocodingOptions): Promise<GeocodingResponse>;
