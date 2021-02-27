/* eslint-disable no-console */
const opencage = require('..');

opencage
  .geocode({ q: 'rue de la république lyon', limit: 3 })
  .then((data) => {
    console.log('geocode ---------------------------------');
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('Error caught:', error.message);
  });

opencage
  .geocode({ q: '45.188529 5.724524' })
  .then((data) => {
    console.log('reverse geocode -------------------------');
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('Error caught:', error.message);
  });

opencage
  .geocode({ q: '45.188529 5.724524', language: 'fr' })
  .then((data) => {
    console.log('reverse geocode fr -------------------------');
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('Error caught:', error.message);
  });

opencage
  .geocode({
    q: 'rue de la république lyon',
    proximity: '51.952659, 7.632473',
    no_annotations: 1,
    limit: 3,
  })
  .then((data) => {
    console.log('geocode with proximity ---------------------------------');
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('Error caught:', error.message);
  });
