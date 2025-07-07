# OpenCage API Client

[![Version](https://img.shields.io/npm/v/opencage-api-client.svg)](https://www.npmjs.com/package/opencage-api-client)
![Downloads](https://img.shields.io/npm/dw/opencage-api-client)
[![GitHub license](https://img.shields.io/github/license/tsamaya/opencage-api-client)](https://github.com/tsamaya/opencage-api-client/blob/master/LICENSE.md)
![Maintained](https://img.shields.io/maintenance/yes/2025.svg)

This repository is an [OpenCage Geocoding API](https://opencagedata.com/api) client for Node Typescript and JavaScript.

## Continuous integration

[![CircleCI (all branches)](https://img.shields.io/circleci/project/github/tsamaya/opencage-api-client.svg)](https://circleci.com/gh/tsamaya/opencage-api-client)
[![codecov](https://codecov.io/gh/tsamaya/opencage-api-client/branch/master/graph/badge.svg)](https://codecov.io/gh/tsamaya/opencage-api-client)
[![Maintainability](https://api.codeclimate.com/v1/badges/8f0f9ba00ade907ef576/maintainability)](https://codeclimate.com/github/tsamaya/opencage-api-client/maintainability)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

## Security

| Source                      | Scores                                                                                                                                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [FOSSA](https://fossa.com/) | [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftsamaya%2Fopencage-api-client.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftsamaya%2Fopencage-api-client?ref=badge_shield) |
| [Snyk](https://snyk.io/)    | ![Known Vulnerabilities](https://snyk.io/test/github/tsamaya/opencage-api-client/badge.svg)                                                                                                                              |

# 🎓 Tutorial

You can find a comprehensive tutorial for using this module [on the OpenCage site](https://opencagedata.com/tutorials/geocode-in-nodejs).

# 🔧 Getting started

Sign up for a [free-trial API Key](https://opencagedata.com/users/sign_up).

## node

The library uses [dotenv](https://www.npmjs.com/package/dotenv) on node runtime to configure OpenCage Geocoding API key. But using `key` as an input parameter is always a possibility.

First install the library with `npm` or `yarn`:

```
$ npm i --save opencage-api-client
```

or

```
$ yarn add opencage-api-client
```

or

```
$ pnpm add opencage-api-client
```

Create a `.env` file with:

```
OPENCAGE_API_KEY=YOUR-OPENCAGE_DATA_API_KEY
```

Here are examples:

1. CommonJS

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

2. ESM

```javascript
import opencage from 'opencage-api-client';

opencage
  .geocode({ q: 'lyon' })
  .then((data) => {
    console.log(JSON.stringify(data));
  })
  .catch((error) => {
    console.log('error', error.message);
  });
```

3. Typescript

```javascript
import { geocode, GeocodeRequest } from 'opencage-api-client';

async function geocode() {
  const input: GeocodeRequest = {
    q: '51.952659,7.632473',
    // The API Key value from process.env.OPENCAGE_API_KEY is overridden by the one provided below
    key: '6d0e711d72d74daeb2b0bfd2a5cdfdba', // https://opencagedata.com/api#testingkeys
    no_annotations: 1,
  };
  const result = await geocode(input);
  console.log(JSON.stringify(result,null,2));
}
```

## browser

The browser version is built over the node one, obviously without the dotenv feature.

The library is available with `unkpg` _CDN_ : https://unpkg.com/opencage-api-client

1- include the library:

```html
<!-- latest version -->
<script src="https://unpkg.com/opencage-api-client"></script>
```

```html
<!-- specific version -->
<script src="https://unpkg.com/opencage-api-client@1.1.0/dist/opencage-api.min.js"></script>
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

Found some examples in the [examples](https://github.com/tsamaya/opencage-api-client/tree/main/examples) folder.

# ✨ API

## geocode

| Parameter | Type   | Optional? | Description                                                                                                                  |
| --------- | ------ | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| q         | String | mandatory | the query string to be geocoded: a placename, address or coordinates as lat,long                                             |
| key       | String | optional  | the `key` can be omitted when using a `proxyURL` or when using node with a dedicated environment variable `OPENCAGE_API_KEY` |
| proxyURL  | String | optional  | The proxy URL parameter (useful to hide your API key)                                                                        |

## Error handling

API can return errors like invalid key, to many requests, daily quota exceeded, etc. Those errors are thrown as Javascript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) by the `geocode` function. The error object contains the same status object as the [OpenCage API](https://opencagedata.com/api#response).

Assuming the catch statement uses `error` as variable name:

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

Check the examples using the Test API key from OpenCage [error handling examples](https://github.com/tsamaya/opencage-api-client/tree/main/examples/apitestkeys.js)

# 🔨 Build and test

1.  Fork or clone this repository
1.  `$ cd` into the `repository` folder
1.  `$ pnpm install` to install all the required dependencies from [npm](https://www.npmjs.com/)
1.  lint and test coverage using `$ pnpm run test:coverage`
1.  Build : `$ npm run build`

# 🛣 Revision History

Check the [CHANGELOG](CHANGELOG.md) file.

# 🥂 Contributing

Anyone and everyone is welcome to contribute.

# 🐞 Issues

Find a bug or want to request a new feature? Please let me know by submitting an issue.

# 🗝 Licensing

Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE.md) file.
