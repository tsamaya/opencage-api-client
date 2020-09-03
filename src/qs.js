const helpers = require('./helpers');

const buildQueryString = (input) => {
  if (helpers.isUndefinedOrNull(input)) {
    return '';
  }
  return Object.keys(input)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(input[key])}`
    )
    .join('&');
};

module.exports = buildQueryString;
