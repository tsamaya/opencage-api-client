import { geocode } from './geocode';
declare const opencage: {
    geocode: typeof geocode;
};
export type { GeocodingRequest } from './types/GeocodingRequest';
export type { GeocodingResponse } from './types/GeocodingResponse';
export { geocode };
export default opencage;
