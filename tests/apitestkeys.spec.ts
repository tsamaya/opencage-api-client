import { describe, it, expect } from 'vitest';

import opencage from '../src';

describe('API keys for testing', () => {
  const query = {
    q: '51.952659,7.632473',
    pretty: 1,
    no_annotations: 1,
  };

  describe('Sunny test', () => {
    it('generate a 200 - OK response', async () => {
      const input = {
        ...query,
        key: '6d0e711d72d74daeb2b0bfd2a5cdfdba',
      };
      const data = await opencage.geocode(input);
      expect(data).toBeTruthy();
      expect(data.status).toBeTruthy();
      expect(data.status.code).toBeTruthy();
      expect(data.status.code).toEqual(200);
    });
  });
  describe('rainy tests', () => {
    it('generate a 402 - quota exceeded response', async () => {
      const input = {
        ...query,
        key: '4372eff77b8343cebfc843eb4da4ddc4',
      };

      try {
        await opencage.geocode(input);
      } catch (error) {
        expect(error).toBeTruthy();
        expect(error.status).toBeTruthy();
        expect(error.status.code).toBeTruthy();
        expect(error.status.code).toEqual(402);
      }
    });
    it('generate a 403 - suspended response', async () => {
      const input = {
        ...query,
        key: '2e10e5e828262eb243ec0b54681d699a',
      };
      try {
        await opencage.geocode(input);
      } catch (error) {
        // console.log(error);
        expect(error).toBeTruthy();
        expect(error.status).toBeTruthy();
        expect(error.status.code).toBeTruthy();
        expect(error.status.code).toEqual(403);
      }
    });
    it('generate a 429 - requesting too quickly response', async () => {
      const input = {
        ...query,
        key: 'd6d0f0065f4348a4bdfe4587ba02714b',
      };
      try {
        await opencage.geocode(input);
      } catch (error) {
        // console.log(error);
        expect(error).toBeTruthy();
        expect(error.status).toBeTruthy();
        expect(error.status.code).toBeTruthy();
        expect(error.status.code).toEqual(429);
      }
    });
  });
});
