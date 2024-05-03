import { geocode, GeocodeError } from './geocode';
import type { GeocodeRequest } from './geocode';
declare const opencage: {
    geocode: typeof geocode;
};
export { geocode, GeocodeError, GeocodeRequest };
export default opencage;
