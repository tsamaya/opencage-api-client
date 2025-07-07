import { geocode } from './geocode';

const opencage = {
  geocode,
};

export type { GeocodeRequest, GeocodeError } from './geocode';
export { geocode };
export default opencage;
