import { geocode } from './opencage.js';
/**
 * OpenCage Module
 */
declare const opencage: {
    geocode: typeof geocode;
};
/**
 * OpenCage Geocoding API Client types
 */
export type { GeocodingRequest } from './types/GeocodingRequest.js';
export type { GeocodeRequest } from './types/GeocodeRequest.js';
export type { GeocodingOptions } from './types/GeocodingOptions.js';
export type * from './types/GeocodingResponse.js';
/**
 * OpenCage Geocoding API Client function
 */
export { geocode };
/**
 * OpenCage Geocoding API Client
 */
export default opencage;
