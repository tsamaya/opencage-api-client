import { geocode } from './opencage';
/**
 * OpenCage Module
 */
declare const opencage: {
    geocode: typeof geocode;
};
/**
 * OpenCage Geocoding API Client types
 */
export type { GeocodingRequest } from './types/GeocodingRequest';
export type { GeocodeRequest } from './types/GeocodeRequest';
export type { GeocodingOptions } from './types/GeocodingOptions';
export type * from './types/GeocodingResponse';
/**
 * OpenCage Geocoding API Client function
 */
export { geocode };
/**
 * OpenCage Geocoding API Client
 */
export default opencage;
