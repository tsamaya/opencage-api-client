import { geocode } from './opencage.cjs';
/**
 * OpenCage Module
 */
declare const opencage: {
    geocode: typeof geocode;
};
/**
 * OpenCage Geocoding API Client types
 */
export type { GeocodingRequest } from './types/GeocodingRequest.cjs';
export type { GeocodeRequest } from './types/GeocodeRequest.cjs';
export type { GeocodingOptions } from './types/GeocodingOptions.cjs';
export type * from './types/GeocodingResponse.cjs';
/**
 * OpenCage Geocoding API Client function
 */
export { geocode };
/**
 * OpenCage Geocoding API Client
 */
export default opencage;
