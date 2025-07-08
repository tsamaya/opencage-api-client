import { GeocodeRequest } from '../types/GeocodeRequest';
import { GeocodeError } from '../errors/GeocodeError';
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
 * @description checks the response status and throws an error if the status is not ok
 * @param response {Response} the response object
 * @returns {Response} the response object
 * @throws {GeocodeError} the error object
 */
export declare function checkFetchStatus(response: Response): Response;
export declare function parseJSON(response: Response): Promise<unknown>;
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
export declare function isUndefinedOrNull(param: GeocodeRequest | null | undefined): boolean;
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
 * @param {*} input
 */
export declare function buildQuery(input: GeocodeRequest): {
    missingKey: boolean;
    endpoint: string;
    query: {
        key?: string;
        q: string;
        proxyURL?: string;
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
    };
};
