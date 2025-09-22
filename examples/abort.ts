import { geocode } from '../src';

const controller = new AbortController();
geocode(
  { q: 'Berlin', key: '6d0e711d72d74daeb2b0bfd2a5cdfdba' },
  { signal: controller.signal }
)
  .then((response) => {
    console.log('Unexpected success', response);
  })
  .catch((err) => {
    if (err.name === 'AbortError') {
      console.log('Aborted as expected');
    } else {
      console.log('Unexpected error', err);
    }
  });
// To abort:
controller.abort();
