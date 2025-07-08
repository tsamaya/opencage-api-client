import { version } from './version';
import { checkFetchStatus, parseJSON } from './helpers/geocodeHelpers';

const USER_AGENT = `OpenCageData Geocoding NodeJS API Client/${version}`;

/**
 * fetches the url and returns a promise
 * @param  {String}  url     the url to fetch
 * @param  {Function} resolve the resolve function
 * @param  {Function} reject  the reject function
 */
export async function fetchUrl(url: string, resolve: any, reject: any) {
  fetch(url, {
    method: 'GET',
    headers: {
      'User-Agent': USER_AGENT,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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
