import 'dotenv/config';

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import opencage from '../src';

describe('integration tests', () => {
  it('tests if environment variable is set', () => {
    // In JavaScript, there are six falsy values:
    // false, 0, '', null, undefined, and NaN.
    // Everything else is truthy.
    expect(process.env.OPENCAGE_API_KEY).toBeTruthy();
  });

  it('test an invalid API key', async () => {
    // expect.assertions(3);
    const input = {
      q: 'Brandenburg Gate',
      key: 'not.a.key',
    };
    try {
      await opencage.geocode(input);
    } catch (error) {
      // console.log(error);
      expect(error.status).toBeTruthy();
      expect(error.status.code).toBeTruthy();
      expect(error.status.code).toEqual(401);
    }
  });
  it('geocodes Brandenburg Gate', async () => {
    // expect.assertions(1);
    const input = {
      q: 'Brandenburg Gate',
    };
    const data = await opencage.geocode(input);
    expect(data).toBeTruthy();
  });
  it('reverse geocodes Brandenburg Gate with space', async () => {
    const input = {
      q: '52.5162767 13.3777025',
    };
    const data = await opencage.geocode(input);
    expect(data).toBeTruthy();
  });
  it('reverse geocodes Brandenburg Gate with comma', async () => {
    const input = {
      q: '52.5162767,13.3777025',
    };
    const data = await opencage.geocode(input);
    expect(data).toBeTruthy();
  });
  it('reverse geocodes Brandenburg Gate with space and comma', async () => {
    const input = {
      q: '52.5162767, 13.3777025',
    };
    const data = await opencage.geocode(input);
    expect(data).toBeTruthy();
  });

  /**
   * Proxy tests
   *
   * These tests are only run if the PROXY_URL environment variable is set.
   *
   * The PROXY_URL environment variable is used to proxy the request to a different URL.
   *
   * The PROXY_URL environment variable is used to proxy the request to a different URL.
   */
  describe('proxy tests', () => {
    if (!process.env.PROXY_URL) {
      it('No Proxy set', () => {
        expect(true).toBeTruthy();
      });
      return;
    }
    const proxyURL = process.env.PROXY_URL;
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
    if (proxyURL) {
      it('test if environment variable PROXY_URL is set', () => {
        // In JavaScript, there are six falsy values:
        // false, 0, '', null, undefined, and NaN.
        // Everything else is truthy.
        expect(proxyURL).toBeTruthy();
      });

      it('geocodes Brandenburg Gate via proxy in GeocodingRequest', async () => {
        const input = {
          q: 'Brandenburg Gate',
          proxyURL,
        };
        const data = await opencage.geocode(input);
        expect(data).toBeTruthy();
      });
      it('geocodes Brandenburg Gate via proxy in GeocodingOptions', async () => {
        const input = {
          q: 'Brandenburg Gate',
        };
        const options = {
          proxyURL,
        };
        const data = await opencage.geocode(input, options);
        expect(data).toBeTruthy();
      });
    }
  });
});
