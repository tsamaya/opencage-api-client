import * as dotenv from 'dotenv';
import geocode from './geocode';
dotenv.config();

const opencage = {
  geocode,
};

export default opencage;
