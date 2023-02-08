/* eslint-disable no-console */
const opencage = require('..');

opencage
  .geocode({ q: 'Theresienhöhe 11, München' })
  .then((data) => {
    // console.log(JSON.stringify(data));
    if (data.results.length > 0) {
      const place = data.results[0];
      console.log(place.formatted);
      console.log(place.geometry);
      console.log(place.annotations.timezone.name);
    } else {
      console.log('status', data.status.message);
      console.log('total_results', data.total_results);
    }
  })
  .catch((error) => {
    console.log('error', error.message);
    // console.log(JSON.stringify(error));
    // other possible response codes:
    // https://opencagedata.com/api#codes
    if (error.status.code === 402) {
      console.log('hit free trial daily limit');
      console.log('become a customer: https://opencagedata.com/pricing');
    }
  });

// ... prints
// Theresienhöhe 11, 80339 Munich, Germany
// { lat: 48.1341651, lng: 11.5464794 }
// Europe/Berlin
