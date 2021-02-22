// require('es6-promise').polyfill();
const crossFetch = require('cross-fetch');

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // console.log('Will throw an error');
  const error = new Error(response.statusText);
  error.status = {
    code: response.status,
    message: response.statusText,
  };
  // error.response = response;
  throw error;
};

const parseJSON = (response) => response.json();

const fetchUrl = (url) => crossFetch(url);

const fetch = (url, resolve, reject) => {
  fetchUrl(url)
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
};

module.exports = fetch;
// exports below for unit test purposes
module.exports.fetchUrl = fetchUrl;
module.exports.parseJSON = parseJSON;
module.exports.checkStatus = checkStatus;
