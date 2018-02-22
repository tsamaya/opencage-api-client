const helpers = require('./helpers');
const buildQueryString = require('./qs');
const fetch = require('./fetch');

const OPEN_CAGE_DATA_URL = 'https://api.opencagedata.com/geocode/v1/json';

/**
 * geocode
 * @param  {Object} input query paraameters
 * @return {Promise}      a promise resolved by the json format API payload
 */
const geocode = input =>
  new Promise((resolve, reject) => {
    const params = input;
    if (helpers.isUndefinedOrEmpty(params.key)) {
      params.key = process.env.OCD_API_KEY;
    }
    const qs = buildQueryString(params);
    const url = `${OPEN_CAGE_DATA_URL}?${qs}`;
    // console.log(url);
    fetch(url, resolve, reject);
  });

module.exports = geocode;
