/* eslint-disable no-console */
const opencage = require('..');

opencage
  .geocode({ q: '45.188529,5.724524', no_annotations: 1 })
  .then((data) => {
    console.log('reverse geocode  -------------------------');
    console.log(data);
  })
  .catch((error) => {
    console.log('error', error.message);
  });

opencage
  .geocode({ q: '+45.188529,+5.724524', no_annotations: 1 })
  .then((data) => {
    console.log('reverse geocode -------------------------');
    console.log(data);
  })
  .catch((error) => {
    console.log('error', error.message);
  });

opencage
  .geocode({ q: '45.188529 5.724524', no_annotations: 1 })
  .then((data) => {
    console.log('reverse geocode -------------------------');
    console.log(data);
  })
  .catch((error) => {
    console.log('error', error.message);
  });
