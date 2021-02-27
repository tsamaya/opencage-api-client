# opencage-api-client

This repository is an [OpenCage Data API](https://opencagedata.com/api) client for JavaScript and node.

[![CircleCI (all branches)](https://img.shields.io/circleci/project/github/tsamaya/opencage-api-client.svg)](https://circleci.com/gh/tsamaya/opencage-api-client)
![npm](https://img.shields.io/npm/dw/opencage-api-client)
[![codecov](https://codecov.io/gh/tsamaya/opencage-api-client/branch/master/graph/badge.svg)](https://codecov.io/gh/tsamaya/opencage-api-client)
[![Maintainability](https://api.codeclimate.com/v1/badges/8f0f9ba00ade907ef576/maintainability)](https://codeclimate.com/github/tsamaya/opencage-api-client/maintainability)
[![stability status](https://www.meterian.io/badge/gh/tsamaya/opencage-api-client/stability)](https://www.meterian.io/report/gh/tsamaya/opencage-api-client)
[![security status](https://www.meterian.io/badge/gh/tsamaya/opencage-api-client/security)](https://www.meterian.io/report/gh/tsamaya/opencage-api-client)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftsamaya%2Fopencage-api-client.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftsamaya%2Fopencage-api-client?ref=badge_shield)

## Getting started

Signup for a [free API Key](https://opencagedata.com/users/sign_up).

### node

The library uses [dotenv](https://www.npmjs.com/package/dotenv) on node runtime to configure OpenCage Data API key. But using `key` as an input parameter is always a possiblity.

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
OPENCAGE_API_KEY=YOUR-OPENCAGE_DATA_API_KEY
```

Here is an example:

```javascript
const opencage = require('opencage-api-client');

opencage
  .geocode({ q: 'lyon' })
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('error', error.message);
  });
```

### browser

The browser version is built over the node one, obviously without the dotenv feature.

The library is available with `unkpg` _CDN_ : https://unpkg.com/opencage-api-client

1- include the library:

```html
<!-- latest version -->
<script src="https://unpkg.com/opencage-api-client"></script>
```

```html
<!-- specific version -->
<script src="https://unpkg.com/opencage-api-client@0.10.0/dist/opencage-api.min.js"></script>
```

2- use it

```javascript
opencage
  .geocode({ q: 'lyon', key: 'YOUR-API-KEY' })
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('Error caught:', error.message);
  });
```

3- others Examples

Found some examples in the [examples](./examples/) folder.

## API

### geocode

| Parameter | Type   | Optional? | Description                                                                                               |
| --------- | ------ | --------- | --------------------------------------------------------------------------------------------------------- |
| q         | String | mandatory | the query string to be geocoded: a placename, address or coordinates as lat,long                          |
| key       | String | optional  | the `key` can be omitted when using a `proxyURL` or when using node with a dedicated environment variable |
| proxyURL  | String | optional  | The proxy URL parameter (useful to hide your API key)                                                     |

### Error handling

API can return errors like invalid key, to many requests, daily quota exceeded, etc. Thoses errors are thrown as Javascript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) by the `geocode` function. The error object contains the same status object as the [OpenCage API](https://opencagedata.com/api#response).

Assuming the catch statment uses `error` as variable name:

```js
console.log('Error caught:', error.message);
```

will output for a 429:

```bash
Error caught: Too Many Requests
```

and

```js
console.log(JSON.stringify(error, null, 2));
```

will output for a 429:

```json
{
  "status": {
    "code": 429,
    "message": "Too Many Requests"
  }
}
```

Check the examples using the Test API key from Opencage [error handling examples](./examples/apitestkeys.js)

## Build and test

1.  Fork or clone this repository
1.  `$ cd` into the `repository` folder
1.  `$ npm install` to install all the required dependencies from [npm](https://www.npmjs.com/)
1.  lint and test using `$ npm test`
1.  coverage `$ npm run coverage`
1.  Build : `$ npm run build`

## Revision History

Check the [CHANGELOG](CHANGELOG.md) file.

## Contributing

Anyone and everyone is welcome to contribute.

## Issues

Find a bug or want to request a new feature? Please let me know by submitting an issue.

## Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE.md) file.
