import { GeocodeRequest } from '../types/GeocodeRequest';
import { GeocodeError, GeocodeErrorStatus } from '../errors/GeocodeError';

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
 * @description checks the response status and throws an error if the status is not ok
 * @param response {Response} the response object
 * @returns {Response} the response object
 * @throws {GeocodeError} the error object
 */
export function checkFetchStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new GeocodeError(response.statusText);
  error.status = {
    code: response.status,
    message: response.statusText,
  };
  error.response = response;
  throw error;
}

export function parseJSON(response: Response) {
  return response.json();
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
  param: GeocodeRequest | null | undefined
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
 * @param {*} input
 */
export function buildQuery(input: GeocodeRequest) {
  const query = { ...input };
  let endpoint = OPENCAGEDATA_JSON_URL;
  let missingKey = false;
  if (!isUndefinedOrEmpty(input.proxyURL)) {
    endpoint = input.proxyURL as string;
    delete query.proxyURL;
  } else {
    if (isUndefinedOrEmpty(input.key)) {
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
