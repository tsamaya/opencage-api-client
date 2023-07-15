const helpers = require('./helpers');
const buildQueryString = require('./qs');
const fetch = require('./fetch');
const buildError = require('./error');

const OPENCAGEDATA_JSON_URL = 'https://api.opencagedata.com/geocode/v1/json';

const MISSING_OR_BAD_QUERY = 'missing or bad query';
const MISSING_API_KEY = 'missing API key';

/**
 * Builds the query params including key and proxy URL
 *
 * @param {*} input
 */
const buildQuery = (input) => {
  const query = { ...input };

  let endpoint = OPENCAGEDATA_JSON_URL;
  let missingKey = false;
  if (!helpers.isUndefinedOrEmpty(input.proxyURL)) {
    // endpoint will be the proxyURL
    endpoint = input.proxyURL;
    delete query.proxyURL;
  } else {
    if (helpers.isUndefinedOrEmpty(input.key)) {
      query.key = process.env.OPENCAGE_API_KEY || process.env.OCD_API_KEY;
    }
    if (helpers.isUndefinedOrEmpty(query.key)) {
      missingKey = true;
    }
  }
  return {
    missingKey,
    endpoint,
    query,
  };
};

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
const geocode = (input) =>
  new Promise((resolve, reject) => {
    if (helpers.isUndefinedOrNull(input)) {
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
    fetch(url, resolve, reject);
  });

module.exports = geocode;
