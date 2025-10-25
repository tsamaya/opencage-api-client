// Exporting GeocodeRequest type as an alias for GeocodingRequest
// This allows backward compatibility with existing code that uses GeocodeRequest

import type { GeocodingRequest } from './GeocodingRequest';

/**
 * GeocodeRequest type is an alias for GeocodingRequest.
 * @deprecated Use GeocodingRequest instead.
 * This type is kept for backward compatibility, but it is recommended to use GeocodingRequest
 * for new code.
 */
export type GeocodeRequest = GeocodingRequest & {};
