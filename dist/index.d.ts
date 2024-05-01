import { geocode, GeocodeRequest, GeocodeError } from './geocode';
declare const opencage: {
    geocode: typeof geocode;
};
export { geocode, GeocodeRequest, GeocodeError };
export default opencage;
