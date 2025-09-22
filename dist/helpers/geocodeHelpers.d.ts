import { GeocodingRequest } from '../types/GeocodingRequest';
import { GeocodeError } from '../errors/GeocodeError';
import { GeocodingOptions } from '../types/GeocodingOptions';
/**
 * @private
 * @description Returns a {GeocodeError} object with status (validation error)
 * @param code {number} HTTP status code
 * @param message {string} error message
 * @returns {GeocodeError}
 *
 */
export declare function buildValidationError(code: number, message: string): GeocodeError;
/**
 * @private
 * returns true is `param` is not defined or empty
 * @param  {String}  param object property as a string
 * @return {Boolean}       returns value
 */
export declare function isUndefinedOrEmpty(param: string | null | undefined): boolean;
/**
 * @private
 * returns true is `param` is not defined or null
 * @param  {String}  param object property as a string
 * @return {Boolean}       returns value
 */
export declare function isUndefinedOrNull(param: GeocodingRequest | null | undefined): boolean;
/**
 * @private
 *
 * @param input
 * @returns the request query string
 */
export declare function buildQueryString(input: any): string;
/**
 * @private
 * Builds the query params including key and proxy URL
 *
 * @param {GeocodingRequest} input
 * @param {GeocodingOptions} options
 * @returns {Object}  {
 *   missingKey: boolean,
 *   endpoint: string,
 *   query: GeocodingRequest copy of the input object with the proxyURL removed
 * }
 */
export declare function buildQuery(input: GeocodingRequest, options?: GeocodingOptions): {
    missingKey: boolean;
    endpoint: string;
    query: {
        abbrv?: number;
        add_request?: number;
        bounds?: string;
        countrycode?: string;
        jsonp?: string;
        language?: string;
        limit?: number;
        min_confidence?: number;
        no_annotations?: number;
        no_dedupe?: number;
        no_record?: number;
        pretty?: number;
        proximity?: string;
        roadinfo?: number;
        address_only?: number;
        key?: string;
        q: string;
        proxyURL?: string;
    };
};
