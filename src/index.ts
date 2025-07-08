import { geocode } from './geocode';

const opencage = {
  geocode,
};

export type { GeocodeRequest } from './types/GeocodeRequest';
export type { GeocodeResponse } from './types/GeocodeResponse';

export { geocode };
export default opencage;
