# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), Types of changes:

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

And, this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [unreleased]

### Added

- 🎸 Documentation with [typedoc](https://typedoc.org/) publish on GH pages
- 🎸 exports in package.json ([1d2246a](https://github.com/tsamaya/opencage-api-client/commit/1d2246a3bc27f502eec6c674bc5ae9845a3bfdaf)), closes [#396](https://github.com/tsamaya/opencage-api-client/issues/396)

### Changed

- 💡 Default branch is now `main`
- 💡 renames source files to improve documentation readability

### Removed

- Codeclimate badge and its app integration

## [2.0.0] (2025-07-14)

### Added

- 🎸 Implement AbortController/AbortSignal pattern ([c105ef0](https://github.com/tsamaya/opencage-api-client/commit/c105ef06b49c3817e8e540103ad558fc6e7a88c4)), closes [#253](https://github.com/tsamaya/opencage-api-client/issues/253)
- 🎸 User-Agent ([b45f984](https://github.com/tsamaya/opencage-api-client/commit/b45f98401a86824aaa57aad3959736ac351359f6)), closes [#223](https://github.com/tsamaya/opencage-api-client/issues/223)
- 🎸 Packaging with Rsbuild ([07b6bd0](https://github.com/tsamaya/opencage-api-client/commit/07b6bd03b3f0f9f484c7b0a60dac7a28fbdabbf6))
- 🎸 Documentation with [typedoc](https://typedoc.org/)

### Changed

- 💡 proxyURL in `GeocodingOptions` with backward compatibility
- 💡 Geocoding Request/Response with backward compatibility with the type `GeocodeRequest`

### Fixed

- 🐛 Prevent undefined process with UMD version in Browser ([87ff870](https://github.com/tsamaya/opencage-api-client/commit/87ff87094dfe9a3c05dfd5fbad186364c0fc8500)), closes [#124](https://github.com/tsamaya/opencage-api-client/issues/124)

### Removed

- 💡 removes dotenv from dependencies
- Drop support for Node 18

## [2.0.0-beta.3] (2025-07-10)

### Changed

- Backward compatibility exporting the type `GeocodeRequest`

### Fixed

- Fixes browser issue with `process undefined` error when the API is not provided [#124](https://github.com/tsamaya/opencage-api-client/issues/124)

## [2.0.0-beta.2] (2025-07-09)

### Added

- Allow to cancel a request using the the [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- The GeocodingResponse contains the latest changes on the [Open API specification for the OpenCage Geocoding API](https://opencagedata.com/api#openapi).

### Changed

- :warning: Breaking Change: the GeocodeRequest type is now renamed into GeocodingRequest

## [2.0.0-beta.1] (2025-07-08)

### Removed

- removes dotenv

## [2.0.0-alpha.5] (2025-07-07)

### Added

- Adds HTTP Header 'User-Agent'

### Changed

- Use Rsbuild for packaging
- Upgrade dependencies
- Port changes from Version 1.2.0

### Removed

- Drop support for Node 18
- Removes HoundCI

## [2.0.0-alpha.4] (2025-04-24)

### Changed

- Upgrade dependencies
- Port changes from Version 1.1.0

## [2.0.0-alpha.3] (2024-10-20)

### Added

- GeocodeResponse type

### Changed

- Upgrade dependencies
- Eslint v9

## [2.0.0-alpha.2] (2024-06-03)

### Changed

- Wrong tag publishing v2.0.0-alpha.1, publishing a new alpha version as next

## [2.0.0-alpha.1] (2024-06-03)

### Added

- Refactor using typescript, microbundle for packaging

### Changed

- Script to validate CHANGELOG file
- Uses [typedoc](https://typedoc.org/)

### Removed

- Drop support for Node 16

## [1.2.0] - 2025-07-07

### Changed

- upgrade dependencies

## [1.1.0] - 2025-03-16

### Changed

- upgrade dependencies
- update maintenance badge for 2025

### Removed

- removes node 16 from the tested platforms
- removes Meterian badges and GHActions on Meterian

## [1.0.7] (2024-06-03)

### Changed

- Wrong tag publishing v2.0.0-alpha.1, publishing a new stable version as latest

## [1.0.6] (2024-06-03)

### Changed

- Uses pnpm as package manager
- Upgrade dependencies
- GHActions codecov and Meterian runs only on branch master

### Removed

- Drop CircleCI

## [1.0.5] (2024-04-27)

### Changed

- Adds CI using GitHub actions
- upgrade dependencies

## [1.0.4] (2024-02-03)

### Changed

- upgrade dependencies

## [1.0.3] (2023-11-10)

### Changed

- adds input parameter `address_only` into the typescript definition

## [1.0.2] (2023-07-16)

### Changed

- upgrade dependencies

## [1.0.1] (2023-02-08)

### Changed

- Adds opencage documentation tutorial as examples
- upgrade dependencies
- unit test using async/await
- uses HoundCI

## [1.0.0] (2021-02-27)

### Changed

- Uses environment variable OPENCAGE_API_KEY (backward compatible with OCD_API_KEY)
- Returns 401 and not 403 when the API Key is missing
- Maps error messages on Opencage Data API messages
- Information and example on error handling
- Adds a TypeScript Example

## [0.10.0] (2020-11-14)

### Added

- Now using [webapck](https://webpack.js.org/) version 5
- Starts using a Changelog file based on [Keep a Changelog](https://github.com/olivierlacan/keep-a-changelog)
- Added [FOSSA](https://fossa.com) Licence compliance status

### Changed

- updated README
- fix typos thanks to [0xflotus](https://github.com/0xflotus)

## [0.9.0] (2020-09-20)

### Changed

- fetch uses `cross-fetch`

## [0.8.1] (2020-09-19)

### Changed

- `TypeScript` support without enum

## [0.8.0] (2020-09-19)

### Changed

- `TypeScript` support

## [0.7.1] (2020-03-15)

### Changed

- Updates documentation

## [0.7.0] (2020-03-15)

### Changed

- Same JSON Error structure as the official API

## [0.6.0] (2020-03-14)

### Changed

- Upgrade dependencies

## [0.5.1] (2019-12-09)

### Changed

- Upgrade dependencies

## [0.5.0] (2019-03-10)

### Changed

- Upgrade dependencies

## [0.4.0] (2018-12-08)

### Changed

- upgrade dependencies and update test with proxy

## [0.3.0] (2018-08-28)

### Changed

- adding readme documentation and upgrade dependencies

## [0.2.0] (2018-07-17)

### Changed

- Allow a proxy URL to use instead of official API endpoint

## [0.1.1] (2018-06-21)

### Changed

- Open Cage website URL has changed

## [0.1.0] (2018-03-04)

### Feature

- First release

[unreleased]: https://github.com/tsamaya/opencage-api-client/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/tsamaya/opencage-api-client/compare/v1.2.0...v2.0.0
[2.0.0-beta.3]: https://github.com/tsamaya/opencage-api-client/compare/v2.0.0-beta.2...v2.0.0-beta.3
[2.0.0-beta.3]: https://github.com/tsamaya/opencage-api-client/compare/v2.0.0-beta.2...v2.0.0-beta.3
[2.0.0-beta.2]: https://github.com/tsamaya/opencage-api-client/compare/v2.0.0-beta.1...v2.0.0-beta.2
[2.0.0-beta.1]: https://github.com/tsamaya/opencage-api-client/compare/v2.0.0-alpha.5...v2.0.0-beta.1
[2.0.0-alpha.5]: https://github.com/tsamaya/opencage-api-client/compare/v2.0.0-alpha.4...v2.0.0-apha.5
[2.0.0-alpha.4]: https://github.com/tsamaya/opencage-api-client/compare/v2.0.0-alpha.3...v2.0.0-apha.4
[2.0.0-alpha.3]: https://github.com/tsamaya/opencage-api-client/compare/v2.0.0-alpha.2...v2.0.0-apha.3
[2.0.0-alpha.2]: https://github.com/tsamaya/opencage-api-client/compare/v2.0.0-alpha.1...v2.0.0-alpha.2
[2.0.0-alpha.1]: https://github.com/tsamaya/opencage-api-client/releases/tag/v2.0.0-alpha.1
[1.2.0]: https://github.com/tsamaya/opencage-api-client/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.7...v1.1.0
[1.0.7]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/tsamaya/opencage-api-client/compare/v1.0.0...v1.0.1
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
