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
        // @ts-expect-error Argument of type 'undefined' is not assignable to parameter of type 'GeocodingRequest'.ts(2345)
        await opencage.geocode(input);
      } catch (error) {
        // console.log(error);
        expect(error.response.status.code).toEqual(400);
      }
    });
    it('tests a null input parameter [browser]', async () => {
      const input = null;
      try {
        // @ts-expect-error Argument of type 'null' is not assignable to parameter of type 'GeocodingRequest'.ts(2345)
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
  describe('abort tests', () => {
    it('aborts the geocode request when signal is aborted', async () => {
      // Provide a dummy API key to avoid the missing key error
      const input = { q: 'lyon', key: 'test' };
      const controller = new AbortController();

      // Start the geocode request
      const promise = opencage.geocode(input, { signal: controller.signal });

      // Abort the request almost immediately
      controller.abort();

      await expect(promise).rejects.toMatchObject({
        name: 'AbortError',
      });
    });
  });
});
