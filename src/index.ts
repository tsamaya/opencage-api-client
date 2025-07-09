import { geocode } from './geocode';

const opencage = {
  geocode,
};

export type { GeocodingRequest } from './types/GeocodingRequest';
export type { GeocodingResponse } from './types/GeocodingResponse';

export { geocode };
export default opencage;
