import * as dotenv from 'dotenv';

import { geocode } from './geocode';

dotenv.config();

const opencage = {
  geocode,
};

export type { GeocodeRequest, GeocodeError } from './geocode';
export { geocode };
export default opencage;
