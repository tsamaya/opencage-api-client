import { GeocodingRequest } from './types/GeocodingRequest';
import { GeocodingResponse } from './types/GeocodingResponse';
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
export declare function geocode(input: GeocodingRequest): Promise<GeocodingResponse>;
