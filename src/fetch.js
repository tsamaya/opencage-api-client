require('es6-promise').polyfill();
require('fetch-everywhere');

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

const fetch = (url, resolve, reject) => {
  global
    .fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      // console.log('request succeeded with JSON response', data);
      resolve(data);
    })
    .catch(error => {
      // console.log('request failed', error);
      reject(error);
    });
};

module.exports = fetch;
module.exports.parseJSON = parseJSON;
module.exports.checkStatus = checkStatus;
