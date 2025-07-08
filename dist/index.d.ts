import { geocode } from './geocode';
declare const opencage: {
    geocode: typeof geocode;
};
export type { GeocodeRequest } from './types/GeocodeRequest';
export type { GeocodeResponse } from './types/GeocodeResponse';
export { geocode };
export default opencage;
