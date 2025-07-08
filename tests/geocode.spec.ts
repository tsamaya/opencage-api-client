import { describe, it, expect, beforeAll, afterAll } from 'vitest';

import opencage from '../src';
describe('geocode tests', () => {
  describe('rainy tests', () => {
    const savedKey = process.env.OPENCAGE_API_KEY;
    beforeAll(() => {
      if (typeof savedKey !== 'undefined') {
        delete process.env.OPENCAGE_API_KEY;
      }
    });
    afterAll(() => {
      if (typeof savedKey !== 'undefined') {
        process.env.OPENCAGE_API_KEY = savedKey;
      }
    });

    it('tests no input parameters [browser]', async () => {
      const input = undefined;
      try {
        // @ts-expect-error Argument of type 'undefined' is not assignable to parameter of type 'GeocodeRequest'.ts(2345)
        await opencage.geocode(input);
      } catch (error) {
        // console.log(error);
        expect(error.response.status.code).toEqual(400);
      }
    });
    it('tests a null input parameter [browser]', async () => {
      const input = null;
      try {
        // @ts-expect-error Argument of type 'null' is not assignable to parameter of type 'GeocodeRequest'.ts(2345)
        await opencage.geocode(input);
      } catch (error) {
        // console.log(error);
        expect(error.response.status.code).toEqual(400);
      }
    });
    it('tests an input parameters without key', async () => {
      const input = { q: 'lyon, france' };
      try {
        await opencage.geocode(input);
      } catch (error) {
        // console.log(error);
        expect(error.response.status.code).toEqual(401);
      }
    });
  });
});
