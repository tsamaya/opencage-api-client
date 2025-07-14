import { GeocodingRequest } from '../types/GeocodingRequest';
import { GeocodeError, GeocodeErrorStatus } from '../errors/GeocodeError';
import { GeocodingOptions } from '../types/GeocodingOptions';

const OPENCAGEDATA_JSON_URL = 'https://api.opencagedata.com/geocode/v1/json';

/**
 * @private
 * @description Returns a {GeocodeError} object with status (validation error)
 * @param code {number} HTTP status code
 * @param message {string} error message
 * @returns {GeocodeError}
 *
 */
export function buildValidationError(code: number, message: string) {
  const error = new GeocodeError(message);
  const status: GeocodeErrorStatus = {
    code,
    message,
  };
  error.status = status;
  error.response = { status };
  return error;
}

/**
 * @private
 * returns true is `param` is not defined or empty
 * @param  {String}  param object property as a string
 * @return {Boolean}       returns value
 */
export function isUndefinedOrEmpty(param: string | null | undefined): boolean {
  return typeof param === 'undefined' || param === '';
}

/**
 * @private
 * returns true is `param` is not defined or null
 * @param  {String}  param object property as a string
 * @return {Boolean}       returns value
 */
export function isUndefinedOrNull(
  param: GeocodingRequest | null | undefined
): boolean {
  return typeof param === 'undefined' || param === null;
}

/**
 * @private
 *
 * @param input
 * @returns the request query string
 */
export function buildQueryString(input: any): string {
  if (isUndefinedOrNull(input)) {
    return '';
  }
  return Object.keys(input)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(input[key] || '')}`
    )
    .join('&');
}

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
export function buildQuery(
  input: GeocodingRequest,
  options?: GeocodingOptions
) {
  const query = { ...input };
  let endpoint = OPENCAGEDATA_JSON_URL;
  let missingKey = false;
  if (
    !isUndefinedOrEmpty(input.proxyURL) ||
    !isUndefinedOrEmpty(options?.proxyURL)
  ) {
    endpoint = options?.proxyURL as string;
    if (isUndefinedOrEmpty(endpoint)) {
      endpoint = input.proxyURL as string;
    }
    delete query.proxyURL;
  } else {
    if (isUndefinedOrEmpty(input.key) && typeof process !== 'undefined') {
      query.key = process.env.OPENCAGE_API_KEY;
    }
    if (isUndefinedOrEmpty(query.key)) {
      missingKey = true;
    }
  }
  return {
    missingKey,
    endpoint,
    query,
  };
}
