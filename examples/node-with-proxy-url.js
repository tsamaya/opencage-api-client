/* eslint-disable no-console */
const opencage = require('..');
// const proxyURL =
//   'https://us-central1-ocd-315303.cloudfunctions.net/geocode';
const proxyURL =
  'https://jvkdf2pe18.execute-api.us-east-1.amazonaws.com/dev/geocode';

opencage
  .geocode({ q: 'rue de la république lyon', limit: 3, proxyURL })
  .then((data) => {
    console.log('geocode ---------------------------------');
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('error', error.message);
  });

opencage
  .geocode({ q: '45.188529 5.724524', proxyURL })
  .then((data) => {
    console.log('reverse geocode -------------------------');
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('error', error.message);
  });
