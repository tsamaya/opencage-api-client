import * as dotenv from 'dotenv';

import { geocode, GeocodeError } from './geocode';
import type { GeocodeRequest } from './geocode';

dotenv.config();

const opencage = {
  geocode,
};

export { geocode, GeocodeError, GeocodeRequest };

export default opencage;
