import { geocode } from './geocode';
declare const opencage: {
    geocode: typeof geocode;
};
export type { GeocodeRequest, GeocodeError } from './geocode';
export { geocode };
export default opencage;
