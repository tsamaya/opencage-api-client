import { GeocodeError } from './errors/GeocodeError';
import { version } from './version';

const USER_AGENT = `OpenCageData Geocoding NodeJS API Client/${version}`;

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
  // console.debug('request failed with status', response.status);
  // console.debug('request failed with status text', response.statusText);
  const message = response.statusText || `HTTP error ${response.status}`;
  const error = new GeocodeError(message);
  error.status = {
    code: response.status,
    message,
  };
  error.response = response;
  throw error;
}

export function parseJSON(response: Response) {
  return response.json();
}

/**
 * fetches the url and returns a promise
 * @param  {String}  url     the url to fetch
 * @param  {Function} resolve the resolve function
 * @param  {Function} reject  the reject function
 */
export async function fetchUrl(
  url: string,
  resolve: any,
  reject: any,
  signal?: AbortSignal
) {
  fetch(url, {
    method: 'GET',
    headers: {
      'User-Agent': USER_AGENT,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    signal,
  })
    .then(checkFetchStatus)
    .then(parseJSON)
    .then((data) => {
      // console.debug('request succeeded with JSON response', data);
      resolve(data);
    })
    .catch((error) => {
      // console.debug('request failed', { error });
      reject(error);
    });
}
