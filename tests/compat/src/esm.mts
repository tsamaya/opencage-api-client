// ESM TypeScript consumer (moduleResolution: nodenext) — resolves dist/index.d.ts

import opencage, { geocode } from 'opencage-api-client';
import type { GeocodingRequest, GeocodingResponse } from 'opencage-api-client';

const request: GeocodingRequest = { q: 'Brandenburg Gate' };
const fromNamed: (input: GeocodingRequest) => Promise<GeocodingResponse> =
  geocode;
const fromDefault: typeof geocode = opencage.geocode;

export { request, fromNamed, fromDefault };
