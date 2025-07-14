import { geocode } from './geocode';
declare const opencage: {
    geocode: typeof geocode;
};
/**
 * OpenCage Geocoding API Client types
 */
export type { GeocodingRequest, GeocodeRequest, } from './types/GeocodingRequest';
export type { GeocodingOptions } from './types/GeocodingOptions';
export type { GeocodingResponse } from './types/GeocodingResponse';
/**
 * OpenCage Geocoding API Client function
 */
export { geocode };
/**
 * OpenCage Geocoding API Client
 */
export default opencage;
