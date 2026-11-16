// CommonJS TypeScript consumer (moduleResolution: nodenext) — resolves dist/index.d.cts
// See https://github.com/tsamaya/opencage-api-client/issues/761

import opencage = require('opencage-api-client');
import type { GeocodingRequest, GeocodingResponse } from 'opencage-api-client';

const request: GeocodingRequest = { q: 'Brandenburg Gate' };
const fromNamed: (input: GeocodingRequest) => Promise<GeocodingResponse> =
  opencage.geocode;
const fromDefault: typeof opencage.geocode = opencage.default.geocode;

export = { request, fromNamed, fromDefault };
