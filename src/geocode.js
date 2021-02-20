const helpers = require('./helpers');
const buildQueryString = require('./qs');
const fetch = require('./fetch');

const OPENCAGEDATA_JSON_URL = 'https://api.opencagedata.com/geocode/v1/json';

/**
 * @private
 * build input paraameters with lat,lng,query and optional parameters
 * TODO externalize for gecodeGeoJSON method
 *
 * @param  {Object} input [description]
 * @return {Object}       the OpenCage API parameters
 */
const buildParams = (input) => input;

/**
 * geocode address and reverse geocode coordinates using
 * [OpenCage API](https://opencagedata.com/api) requesting the json format.
 *
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
      const error = new Error('missing or bad query');
      error.response = {
        status: {
          code: 400,
          message: 'missing or bad query',
        },
      };
      reject(error);
      return;
    }
    const params = buildParams(input);
    let endpoint = OPENCAGEDATA_JSON_URL;
    if (helpers.isUndefinedOrEmpty(params.proxyURL)) {
      if (helpers.isUndefinedOrEmpty(params.key)) {
        params.key = process.env.OPENCAGE_API_KEY || process.env.OCD_API_KEY;
      }
      if (helpers.isUndefinedOrEmpty(params.key)) {
        const error = new Error('missing API key');
        error.response = {
          status: {
            code: 401,
            message: 'missing API key',
          },
        };
        reject(error);
        return;
      }
    } else {
      endpoint = params.proxyURL;
      delete params.proxyURL;
    }
    const qs = buildQueryString(params);
    const url = `${endpoint}?${qs}`;
    // console.log(url);
    fetch(url, resolve, reject);
  });

module.exports = geocode;
// exports below for unit test purposes
module.exports.buildParams = buildParams;
