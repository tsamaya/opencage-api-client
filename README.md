# opencage-api-client

This repository is an [OpenCage Data API](https://opencagedata.com/api) client for JavaScript and node.

[![CircleCI](https://circleci.com/gh/tsamaya/opencage-api-client/tree/master.svg?style=svg)](https://circleci.com/gh/tsamaya/opencage-api-client/tree/master)
[![security status](https://www.meterian.io/badge/gh/tsamaya/opencage-api-client/security)](https://www.meterian.io/report/gh/tsamaya/opencage-api-client)
[![stability status](https://www.meterian.io/badge/gh/tsamaya/opencage-api-client/stability)](https://www.meterian.io/report/gh/tsamaya/opencage-api-client)
[![codecov](https://codecov.io/gh/tsamaya/opencage-api-client/branch/master/graph/badge.svg)](https://codecov.io/gh/tsamaya/opencage-api-client)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Getting started

Signup for a [free API Key](https://opencagedata.com/users/sign_up).

### node

The library uses [dotenv](https://www.npmjs.com/package/dotenv) on node runtime to configure OpenCage Data API key.

First install the library with `npm` or `yarn`:

```
$ npm i --save opencage-api-client
```

or

```
$ yarn add opencage-api-client
```

Create a `.env` file with:

```
OCD_API_KEY=YOUR-OPENCAGE_DATA_API_KEY
```

Here is an example:

```javascript
const opencage = require('opencage-api-client');

opencage
  .geocode({ q: 'lyon' })
  .then(data => {
    console.log(JSON.stringify(data));
  })
  .catch(error => {
    console.log('error', error.message);
  });
```

### browser

The browser version is built over the node one, obviously without the dotenv feature.

The library is available with `unkpg` _CDN_ : https://unpkg.com/opencage-api-client@0.3.0/dist/opencage-api.min.js

1- include the library:

```html
<script src="https://unpkg.com/opencage-api-client@0.3.0/dist/opencage-api.min.js"></script>
```

2- use it

```javascript
opencage
  .geocode({ q: 'lyon' })
  .then(data => {
    console.log(JSON.stringify(data));
  })
  .catch(error => {
    console.log('error', error.message);
  });
```

## API

### geocode

| Parameter  | Type   | Optional? | Description |
| ---------- | ------ | --------  | ------------|
| q          | String | mandatory | the query string to be geocoded; a placename or lat+long. This must be URL encoded. |
| key        | String | optional  | the `key` can be omitted when using a `proxyURL` and when using node with a dedicated environment variable |
| proxyURL   | String | optional  | The proxy URL parameter (useful to hide your API key) |

## Build and test

1.  Fork or clone this repository
1.  `$ cd` into the `repository` folder
1.  `$ npm install` to install all the required dependencies from [npm](https://www.npmjs.com/)
1.  lint and test using `$ npm test`
1.  coverage `$ npm run coverage`
1.  Build : `$ npm run build`

## Revision History

| Version  | Date       | Description                                               |
| -------- | ---------- | --------------------------------------------------------- |
| `v0.3.0` | 28/08/2018 | adding readme documentation and upgrade dependencies      |
| `v0.2.0` | 17/07/2018 | Allow a proxy URL to use instead of official API endpoint |
| `v0.1.1` | 21/06/2018 | Open Cage website URL has changed                         |
| `v0.1.0` | 04/03/2018 | first release                                             |

**Nb** Using European Date Format :smile: Sorry 🇺🇸

## Contributing

Anyone and everyone is welcome to contribute.

## Issues

Find a bug or want to request a new feature? Please let me know by submitting an issue.

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE.md) file.
