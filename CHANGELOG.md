# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
And, this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.7] - 2024-06-03

### Chore

- Wrong tag publishing v2-alpha, publishing a new stable version as latest

## [1.0.6] - 2024-06-03

### Chore

- Uses pnpm as package manager
- upgrade dependencies
- Drop CircleCI
- GHActions codecov and meterian runs only on branch master

## [1.0.5] - 2024-04-27

### Changed

- Adds CI using GitHub actions
- upgrade dependencies

## [1.0.4] - 2024-02-03

### Changed

- upgrade dependencies

## [1.0.3] - 2023-11-10

### Changed

- adds input parameter `address_only` into the typescript definition

## [1.0.2] - 2023-07-16

### Changed

- upgrade dependencies

## [1.0.1] - 2023-02-08

### Changed

- Adds opencage documentation tutorial as examples
- upgrade dependencies
- unit test using async/await
- uses HoundCI

## [1.0.0] - 2021-02-27

### Changed

- Uses environment variable OPENCAGE_API_KEY (backward compatible with OCD_API_KEY)
- Returns 401 and not 403 when the API Key is missing
- Maps error messages on Opencage Data API messages
- Information and example on error handling
- Adds a TypeScript Example

## [0.10.0] - 2020-11-14

### Added

- Now using [webapck](https://webpack.js.org/) version 5
- Starts using a Changelog file based on [Keep a Changelog](https://github.com/olivierlacan/keep-a-changelog)
- Added [FOSSA](https://fossa.com) Licence compliance status

### Changed

- updated README
- fix typos thanks to [0xflotus](https://github.com/0xflotus)

## [0.9.0] - 2020-09-20

fetch uses `cross-fetch`

## [0.8.1] - 2020-09-19

`TypeScript` support without enum

## [0.8.0] - 2020-09-19

`TypeScript` support

## [0.7.1] - 2020-03-15

Updates documentation

## [0.7.0] - 2020-03-15

Same JSON Error structure as the official API

## [0.6.0] - 2020-03-14

Upgrade dependencies

## [0.5.1] - 2019-12-09

Upgrade dependencies

## [0.5.0] - 2019-03-10

Upgrade dependencies

## [0.4.0] - 2018-12-08

upgrade dependencies and update test with proxy

## [0.3.0] - 2018-08-28

adding readme documentation and upgrade dependencies

## [0.2.0] - 2018-07-17

Allow a proxy URL to use instead of official API endpoint

## [0.1.1] - 2018-06-21

Open Cage website URL has changed

## [0.1.0] - 2018-03-04

First release

[unreleased]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.7...HEAD
[1.0.7]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/tsamaya/opencage-api-client/compare/v0.10.0...v1.0.1
[1.0.0]: https://github.com/tsamaya/opencage-api-client/compare/v0.10.0...v1.0.0
[0.10.0]: https://github.com/tsamaya/opencage-api-client/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/tsamaya/opencage-api-client/compare/v0.8.1...v0.9.0
[0.8.1]: https://github.com/tsamaya/opencage-api-client/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/tsamaya/opencage-api-client/compare/v0.7.1...v0.8.0
[0.7.1]: https://github.com/tsamaya/opencage-api-client/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/tsamaya/opencage-api-client/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/tsamaya/opencage-api-client/compare/v0.5.1...v0.6.0
[0.5.1]: https://github.com/tsamaya/opencage-api-client/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/tsamaya/opencage-api-client/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/tsamaya/opencage-api-client/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/tsamaya/opencage-api-client/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/tsamaya/opencage-api-client/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/tsamaya/opencage-api-client/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/tsamaya/opencage-api-client/releases/tag/v0.1.0
