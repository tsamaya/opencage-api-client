import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { fetchUrl } from '../src/geocode.ts';
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

  describe('fetchUrl', () => {
  const USER_AGENT = 'OpenCageData Geocoding NodeJS API Client';
  let originalFetch: typeof global.fetch;

  beforeAll(() => {
    originalFetch = global.fetch;
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it('calls fetch with correct URL and User-Agent header', async () => {
    const url = 'https://api.opencagedata.com/';
    const mockResponse = {
      status: 200,
      json: () => Promise.resolve({ ok: true }),
    };
    const fetchMock = vi.fn().mockResolvedValue(mockResponse);
    global.fetch = fetchMock;

    await new Promise((resolve, reject) => {
      fetchUrl(url, resolve, reject);
    });

    expect(fetchMock).toHaveBeenCalledWith(url, expect.objectContaining({
      method: 'GET',
      headers: expect.objectContaining({
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    }));
  });

  it('resolves with parsed JSON data on success', async () => {
    const url = 'https://api.opencagedata.com/';
    const data = { foo: 'bar' };
    const mockResponse = {
      status: 200,
      json: () => Promise.resolve(data),
    };
    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    const result = await new Promise((resolve, reject) => {
      fetchUrl(url, resolve, reject);
    });

    expect(result).toEqual(data);
  });

  it('rejects with error if fetch fails', async () => {
    const url = 'https://api.opencagedata.com/';
    const error = new Error('Network error');
    global.fetch = vi.fn().mockRejectedValue(error);

    await expect(new Promise((resolve, reject) => {
      fetchUrl(url, resolve, reject);
    })).rejects.toBe(error);
  });

  it('rejects with error if response status is not ok', async () => {
    const url = 'https://api.opencagedata.com/';
    const mockResponse = {
      status: 404,
      statusText: 'Not Found',
      json: () => Promise.resolve({}),
    };
    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    await expect(new Promise((resolve, reject) => {
      fetchUrl(url, resolve, reject);
    })).rejects.toMatchObject({ status: { code: 404, message: 'Not Found' } });
  });
});
});
