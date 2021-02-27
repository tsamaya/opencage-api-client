/* eslint-disable no-console */
const opencage = require('..');

opencage
  .geocode({
    q: 'rue de la république lyon',
    limit: 3,
    key: '4372eff77b8343cebfc843eb4da4ddc4',
  })
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('geocode - 402 Payment Required ------------');
    console.log('Error caught:', error.message, { status: error.status });
    console.log(error);
  });

opencage
  .geocode({
    q: 'rue de la république lyon',
    limit: 3,
    key: 'd6d0f0065f4348a4bdfe4587ba02714b',
  })
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('geocode - 429 Too Many Requests ------------');
    console.log('Error caught:', error.message, { status: error.status });
    console.log(error);
    console.log(JSON.stringify(error, null, 2));
  });
