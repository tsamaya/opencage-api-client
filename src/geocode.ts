const OPENCAGEDATA_JSON_URL = 'https://api.opencagedata.com/geocode/v1/json';

const MISSING_OR_BAD_QUERY = 'missing or bad query';
const MISSING_API_KEY = 'missing API key';

/**
 * GeocodeRequest interface
 */
export type GeocodeRequest = {
  /**
   * a 30 character long, alphanumeric string.
   */
  key?: string;
  /**
   * the query string to be geocoded: a latitude, longitude or a placename/address.
   */
  q: string;
  /**
   * When set to 1 we attempt to abbreviate and shorten the formatted string we return. Learn more about formatted placenames.
   */
  abbrv?: number;
  /**
   * When set to 1 the various request parameters are added to the response for ease of debugging.
   */
  add_request?: number;
  /**
   * Used only for forward geocoding. This value will restrict the possible results to a defined bounding box.
   * The value of the bounds parameter should be specified as two coordinate points forming the south-west and north-east corners of a bounding box (min lon, min lat, max lon, max lat).
   *
   * Example usage:
   * bounds=-0.563160,51.280430,0.278970,51.683979
   */
  bounds?: string;
  /**
   * Used only for forward geocoding. Restricts results to the specified country/territory or countries.
   *
   * Example usage:
   * countrycode=de
   *
   * The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States.
   * Non-two letter country codes are ignored.
   * You can specify multiple country codes by supplying a comma separated list. For example countrycode=ca,us would limit results to either the United States or Canada.
   */
  countrycode?: string;
  /**
   * Wraps the returned JSON with a function name.
   */
  jsonp?: string;
  /**
   * An IETF format language code (such as es for Spanish or pt-BR for Brazilian Portuguese), or native in which case we will attempt to return the response in the local language(s).
   *
   * Example usage:
   * language=de
   *
   * If no language is explicitly specified, we will then look for an HTTP Accept-Language header like those sent by a browser and use highest quality language specified (please see RFC 4647 for details). If the request did not specify a valid header, then en (English) will be assumed.
   */
  language?: string;
  /**
   * The maximum number of results we should return. Default is 10. Maximum allowable value is 100.
   *
   * Example usage:
   * limit=1
   */
  limit?: number;
  /**
   * An integer from 1-10. Only results with at least this confidence will be returned. Learn more about our confidence score on API documentation.
   *
   * Example usage:
   * min_confidence=3
   */
  min_confidence?: number;
  /**
   * When set to 1 results will not contain annotations.
   *
   * Example usage:
   * no_annotations=1
   *
   * The only exception is if the optional roadinfo parameter is set (see below).
   */
  no_annotations?: number;
  /**
   * When set to 1 results will not be deduplicated.
   */
  no_dedupe?: number;
  /**
   * When set to 1 the query contents are not logged. Please use this parameter if you have concerns about privacy and want us to have no record of your query.
   */
  no_record?: number;
  /**
   * When set to 1 results are 'pretty' printed for easier reading. Useful for debugging.
   */
  pretty?: number;
  /**
   * Used only for forward geocoding. Provides the geocoder with a hint to bias results in favour of those closer to the specified location. Please note though, this is just one of many factors in the internal scoring we use for ranking results.
   * The value is a point with latitude, longitude coordinates in decimal format.
   *
   * Example usage:
   * proximity=51.952659,7.632473
   *
   * Values that are not valid coordinates are ignored.
   */
  proximity?: string;
  /**
   * When set to 1 the behaviour of the geocoder is changed to attempt to match the nearest road (as opposed to address). If possible we also fill additional information in the roadinfo annotation. Please see details API Documentation.
   */
  roadinfo?: number;
  /**
   * When set to 1 we include only the address (exluding POI names) in the formatted string we return.
   *
   * Example usage: address_only=1
   *
   * As an example, by default a reverse geocoding request for the coordinates 50.976004, 11.336753 returns a formatted value of Goethes Gartenhaus, Corona-Schröter-Weg 1, 99425 Weimar, Germany, but if address_only=1 is specified the value would be simply Corona-Schröter-Weg 1, 99425 Weimar, Germany. This can be particularly useful when there are many stores/restaurants/whatever at a single location (for example a multi-story building).
   */
  address_only?: number;
};

/**
 *
 */
export class GeocodeError extends Error {
  response?: any;
  status?: any;
}

/**
 * Returns an {GeocodeError} object with response and status
 * @param code
 * @param message
 * @returns
 */
function buildError(code: number, message: string) {
  const error = new GeocodeError(message);
  const status = {
    code,
    message,
  };
  error.response = {
    status,
  };
  return error;
}

/**
 *
 * @param response
 * @returns
 */
const checkStatus = (response: any) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // console.log('Will throw an error');
  const error = new GeocodeError(response.statusText);
  error.status = {
    code: response.status,
    message: response.statusText,
  };
  // error.response = response;
  throw error;
};

const parseJSON = (response: any) => response.json();

async function fetchUrl(url: string, resolve: any, reject: any) {
  fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      // console.log('request succeeded with JSON response', data);
      resolve(data);
    })
    .catch((error) => {
      // console.log('request failed', { error });
      reject(error);
    });
}

/**
 * @private
 * returns true is `param` is not defined or empty
 * @param  {String}  param object property as a string
 * @return {Boolean}       returns value
 */
export function isUndefinedOrEmpty(param: string): boolean {
  return typeof param === 'undefined' || param === '';
}

/**
 * @private
 * returns true is `param` is not defined or null
 * @param  {String}  param object property as a string
 * @return {Boolean}       returns value
 */
export function isUndefinedOrNull(param: GeocodeRequest): boolean {
  return typeof param === 'undefined' || param === null;
}

export function buildQueryString(input: any): string {
  if (isUndefinedOrNull(input)) {
    return '';
  }
  return Object.keys(input)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(input[key])}`
    )
    .join('&');
}

/**
 * Builds the query params including key and proxy URL
 *
 * @param {*} input
 */
function buildQuery(input: any) {
  const query = { ...input };

  let endpoint = OPENCAGEDATA_JSON_URL;
  let missingKey = false;
  if (!isUndefinedOrEmpty(input.proxyURL)) {
    // endpoint will be the proxyURL
    endpoint = input.proxyURL;
    delete query.proxyURL;
  } else {
    if (isUndefinedOrEmpty(input.key)) {
      query.key = process.env.OPENCAGE_API_KEY || process.env.OCD_API_KEY;
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

/**
 * geocode address and reverse geocode coordinates using
 * [OpenCage API](https://opencagedata.com/api) requesting the json format.
 *
 * @param  {Object} input the input query parameter as JSON object,
 *  the attribute `q` is required, the `key` can be omitted when using
 *  a `proxyURL`, and when using node with a dedicated environment variable
 *  (OPENCAGE_API_KEY).
 *  Others optional paameters can be found at Opencage Data API
 *  [documentation](https://opencagedata.com/api#forward-opt)
 *
 * @return {Promise}  a promise resolved by the json format API payload
 */
export function geocode(input: GeocodeRequest): Promise<any> {
  return new Promise((resolve, reject) => {
    if (isUndefinedOrNull(input)) {
      const error = buildError(400, MISSING_OR_BAD_QUERY);
      reject(error);
      return;
    }
    const params = buildQuery(input);
    if (params.missingKey) {
      const error = buildError(401, MISSING_API_KEY);
      reject(error);
      return;
    }
    const { query, endpoint } = params;
    const qs = buildQueryString(query);
    const url = `${endpoint}?${qs}`;
    // console.log(url);
    fetchUrl(url, resolve, reject);
  });
}
