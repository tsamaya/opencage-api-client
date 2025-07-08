import { version } from './version';

const OPENCAGEDATA_JSON_URL = 'https://api.opencagedata.com/geocode/v1/json';

const MISSING_OR_BAD_QUERY = 'missing or bad query';
const MISSING_API_KEY = 'missing API key';

const USER_AGENT = `OpenCageData Geocoding NodeJS API Client/${version}`;

/**
 * GeocodeRequest type
 *
 * Represents the Request Object
 */
export type GeocodeRequest = {
  /**
   * a 30 character long, alphanumeric string. The API Key is required when used in a browser. In a Node environment, it is optional, as it will be added automatically from the environment variable OPENAI_API_KEY, and a `.env` file can also be used.
   */
  key?: string;
  /**
   * the query string to be geocoded: a latitude, longitude or a placename/address.
   */
  q: string;
  /**
   * The URL of a proxy server to use for the request. This is useful if you want to hide your API Key.
   */
  proxyURL?: string;
  /**
   * When set to 1 we attempt to abbreviate and shorten the formatted string we return. Learn more about formatted placename.
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
   * When set to 1 the behavior of the geocoder is changed to attempt to match the nearest road (as opposed to address). If possible we also fill additional information in the roadinfo annotation. Please see details API Documentation.
   */
  roadinfo?: number;
  /**
   * When set to 1 we include only the address (excluding POI names) in the formatted string we return.
   *
   * Example usage: address_only=1
   *
   * As an example, by default a reverse geocoding request for the coordinates 50.976004, 11.336753 returns a formatted value of Goethes Gartenhaus, Corona-Schröter-Weg 1, 99425 Weimar, Germany, but if address_only=1 is specified the value would be simply Corona-Schröter-Weg 1, 99425 Weimar, Germany. This can be particularly useful when there are many stores/restaurants/whatever at a single location (for example a multi-story building).
   */
  address_only?: number;
};

/**
 * Rate/Usage Limits
 *
 * The OpenCage geocoding API uses rate limits to ensure that the service stays available to all users.
 */
export type Rate = {
  limit: number;
  remaining: number;
  reset: number;
};

/**
 * License
 *
 * See the credits detail page https://opencagedata.com/credits.
 */
export type License = {
  name: string;
  url: string;
};

/**
 * Status
 *
 * The status object contains the following fields:
 * - message: a human-readable message
 * - code: an integer code
 */
export type Status = {
  message?: string;
  code?: number;
};

/**
 * StayInformed
 *
 * Links to stay tuned about OpenCageData API
 */
export type StayInformed = {
  blog?: string;
  mastodon?: string;
};

/**
 * Timestamp
 *
 * The timestamp of the request in HTTP and UNIX format.
 */
export type Timestamp = {
  created_http?: string;
  created_unix?: number;
};

/**
 * Information about the local currency
 *
 * Example:
 * ```
 * "currency": {
 *    "alternate_symbols": [
 *    ],
 *  "decimal_mark": ",",
 *  "html_entity": "€",
 *  "iso_code": "EUR",
 *  "iso_numeric": "978",
 *  "name": "Euro",
 *  "smallest_denomination": 1,
 *  "subunit": "Cent",
 *  "subunit_to_unit": 100,
 *  "symbol": "€",
 *  "symbol_first": 0,
 *  "thousands_separator": "."
 * }
 *```
 */
export type Currency = {
  alternateSymbols: string[];
  decimalMark: string;
  disambiguateSymbol: string;
  htmlEntity: string;
  isoCode: string;
  isoNumeric: string;
  name: string;
  smallestDenomination: number;
  subunit: string;
  subunitToUnit: number;
  symbol: string;
  symbolFirst: number;
  thousandsSeparator: string;
};

/**
 * Contains the latitude and longitude of the center point of the result in degree minute decimal second format.
 *
 * Example: { "lat": "52° 23' 16.01880'' N", "lng": "9° 44' 0.38184'' E" }
 */
export type DMS = {
  lat: string;
  lng: string;
};

/**
 * Contains the US Federal Information Processing Standards (FIPS) code for the state (two digit) and county (five digit) of the center point of the result, if we can determine it.
 *
 * Example: { "county": "08101", "state": "08" }
 *
 * Note:
 *  - Only for locations in the United States and associated territories.
 *  - The values are strings - not numbers - and can have leading zeros.
 */
export type FIPS = {
  county: string;
  state: string;
};

/**
 * contains the Mercator projection (EPSG:41001, sometimes also referred to as "Simple Mercator") x and y unit meter values of the center point of the result.
 *
 * Example: { "x": 1083521.518, "y": 6836676.75 }
 * Note: use of Mercator projection on latitudes above/below +70/-70 degrees is strongly discouraged, due to the gross distortions of the projection.
 */
export type Mercator = {
  x: number;
  y: number;
};

export type Osm = {
  editURL: string;
  noteURL: string;
  url: string;
};

export type Roadinfo = {
  driveOn: string;
  road: string;
  speedIn: string;
};

export type Rise = {
  apparent: number;
  astronomical: number;
  civil: number;
  nautical: number;
};
export type Sun = {
  rise: Rise;
  set: Rise;
};

export type Timezone = {
  name: string;
  nowInDst: number;
  offsetSEC: number;
  offsetString: string;
  shortName: string;
};

export type Regions = {
  americas: string;
  northernAmerica: string;
  us: string;
  world: string;
};

/**
 * Contains the relevant United Nations M49 codes for the location.
 *
 * Consists of two keys: regions and statistical_groupings.
 *
 * regions contains keys which are human-readable names of the regions in English and values which are 3 digit UN M49 codes. Note: The codes are strings and not numbers, they can have leading zeros. See a list of all possible regions and the corresponding codes.
 * statistical_groupings contains a list of abbreviations of various country groupings commonly used in statistical analysis.
 *
 * Possible values are
 *
 *   - LDC	Least Developed Country
 *   - LEDC	Less Economically Developed Country
 *   - LLDC	Landlocked Developing Country
 *   - MEDC	More Economically Developed Country
 *   - SIDS	Small Island Developing State
 *
 * Example (for a location in Haiti)
 * ```
 * "UN_M49": {
 *   "regions": {
 *     "AMERICAS": "019",
 *     "CARIBBEAN": "029",
 *     "HT": "332",
 *     "LATIN_AMERICA": "419",
 *     "WORLD": "001"
 *   },
 *   "statistical_groupings": [
 *     "LDC",
 *     "LEDC",
 *     "SIDS"
 *   ]
 * },
 * ```
 */
export type UnM49 = {
  regions: Regions;
  statisticalGroupings: string[];
};

export type What3Words = {
  words: string;
};

/**
 * LatLng coordinates
 * - lat
 * - kng
 */
export type Geometry = {
  lat: number;
  lng: number;
};

export type Bounds = {
  northeast: Geometry;
  southwest: Geometry;
};

/**
 * Response components
 */
export type Components = {
  iso31661_Alpha2: string;
  iso31661_Alpha3: string;
  iso31662: string[];
  category: string;
  type: string;
  city: string;
  continent: string;
  country: string;
  countryCode: string;
  county: string;
  houseNumber: string;
  postcode: string;
  road: string;
  state: string;
  stateCode: string;
  suburb: string;
};

export type Annotations = {
  dms: DMS;
  fips: FIPS;
  mgrs: string;
  maidenhead: string;
  mercator: Mercator;
  osm: Osm;
  unM49: UnM49;
  /**
   * The international telephone calling code for the country of the result.
   *
   * Example: 49
   */
  callingcode: number;
  /**
   *
   */
  currency: Currency;
  /**
   * Emoji flag of the country of the result.
   *
   * Example: 🇩🇪
   */
  flag: string;
  /**	Contains a [geohash](https://en.wikipedia.org/wiki/Geohash) for the center point of the result.
   * Example: u1qfj2zsvwd6ntczum3r
   */
  geohash: string;
  /**
   *
   */
  qibla: number;
  roadinfo: Roadinfo;
  sun: Sun;
  timezone: Timezone;
  what3Words: What3Words;
};

export type GeocodeResult = {
  annotations: Annotations;
  bounds: Bounds;
  components: Components;
  confidence: number;
  formatted: string;
  /**
   * Geometry LatLng
   */
  geometry: Geometry;
};

/**
 * The API response is formatted according to the format specified in the request (json).
 *
 * All returned coordinates use WGS 84 (sometimes also known as EPSG:4326) as reference coordinate system.
 *
 * The response structure will vary slightly depending on:
 * - The optional request parameters specified.
 * - Whether or not you are a subscription customer. Because subscription customer do not face hard limits, their responses do NOT contain the rate element. Details.
 * - The location requested and the information we have available for that location.
 * - Reverse geocoding results contain the field distance_from_q which is the distance (in meters) to the coordinates in the request to the coordinates of the result.
 *
 * Ranking of Results
 * - Reverse geocoding requests return at most one result.
 * - Forward geocoding requests may return multiple results.
 * 1. Results are ordered from most relevant to least.
 * 2. Results are NOT ordered by confidence score (see definition of confidence score).
 */
export type GeocodeResponse = {
  /**
   * Link to the OpenCageData Geocoding API documentation
   */
  documentation?: string;
  /**
   * The OpenCage geocoding API uses rate limits to ensure that the service stays available to all users.
   *
   * **Free trial usage limits**
   * - Free trial accounts have a hard limit of 2,500 requests per day for testing purposes. Our definition of "day" is based on [the UTC timezone](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). Daily counts reset at 24:00 UTC. [See current UTC time](https://opencagedata.com/tools/current-utc-time).
   * - Free trial accounts are limited to one request per second. If you exceed that rate you may see a 429 - too many requests response.
   * - We offer a free TRIAL, not a free tier. If you are regularly depending on our service, you are not testing.
   */
  rate?: Rate;
  /**
   * Credits
   */
  licenses?: License[];
  /**
   * Results
   */
  results?: GeocodeResult[];
  /**
   * Response Status
   */
  status?: Status;
  /**
   * links to stay tuned about OpenCageData API
   */
  stay_informed?: StayInformed;
  /**
   * Thanks message
   */
  thanks?: string;
  /**
   * Server timestamp
   */
  timestamp?: Timestamp;
  /**
   * Number of results
   */
  totalResults?: number;
};

/**
 * GeocodeError type
 *
 * Represents the Error Type
 */

export type GeocodeErrorStatus = {
  /**
   * The HTTP status code
   */
  code: number;
  /**
   * The error message
   */
  message: string;
};

/**
 * GeocodeError type
 *
 * Represents the Error Object
 */
export class GeocodeError extends Error {
  /**
   * The response error object or the status error object for backward compatibility
   */
  response?: Response | { status: GeocodeErrorStatus };
  /**
   * The status error object
   */
  status?: GeocodeErrorStatus;
}

/**
 * @private
 * @description Returns a {GeocodeError} object with status (validation error)
 * @param code {number} HTTP status code
 * @param message {string} error message
 * @returns {GeocodeError}
 *
 */
function buildValidationError(code: number, message: string) {
  const error = new GeocodeError(message);
  const status = {
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
function checkFetchStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // console.log('Will throw an error');
  const error = new GeocodeError(response.statusText);
  error.status = {
    code: response.status,
    message: response.statusText,
  };
  error.response = response;
  throw error;
}

function parseJSON(response: Response) {
  return response.json();
}
/**
 * @private
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
  param: GeocodeRequest | undefined | null
): boolean {
  return typeof param === 'undefined' || param === null;
}

/**
 * @private
 *
 * @param input
 * @returns the request query string
 */
export function buildQueryString(input: GeocodeRequest): string {
  if (isUndefinedOrNull(input)) {
    return '';
  }
  return Object.keys(input)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(input[key as keyof GeocodeRequest] || '')}`
    )
    .join('&');
}

/**
 * @private
 * Builds the query params including key and proxy URL
 *
 * @param {*} input
 */
function buildQuery(input: GeocodeRequest) {
  const query = { ...input };

  let endpoint = OPENCAGEDATA_JSON_URL;
  let missingKey = false;
  if (!isUndefinedOrEmpty(input.proxyURL)) {
    // endpoint will be the proxyURL
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
 * @return {Promise}  a promise resolved by the json format API payload
 */
export async function geocode(input: GeocodeRequest): Promise<GeocodeResponse> {
  return new Promise((resolve, reject) => {
    if (isUndefinedOrNull(input)) {
      const error = buildValidationError(400, MISSING_OR_BAD_QUERY);
      reject(error);
      return;
    }
    const params = buildQuery(input);
    if (params.missingKey) {
      const error = buildValidationError(401, MISSING_API_KEY);
      reject(error);
      return;
    }
    const { query, endpoint } = params;
    const qs = buildQueryString(query);
    const url = `${endpoint}?${qs}`;
    // console.debug(url);
    fetchUrl(url, resolve, reject);
  });
}
