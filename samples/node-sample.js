/* eslint-disable */
const opencage = require('../');

opencage
  .geocode({ q: 'rue de la république lyon', limit: 3 })
  .then(data => {
    console.log('geocode ---------------------------------');
    console.log(JSON.stringify(data));
  })
  .catch(error => {
    console.log('error', error.message);
  });

opencage
  .geocode({ q: '45.188529 5.724524' })
  .then(data => {
    console.log('reverse geocode -------------------------');
    console.log(JSON.stringify(data));
  })
  .catch(error => {
    console.log('error', error.message);
  });
