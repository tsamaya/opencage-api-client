import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { fetchUrl } from '../src/fetch.ts';
import { version } from '../src/version';

describe('fetchUrl', () => {
  const USER_AGENT = `OpenCageData Geocoding NodeJS API Client/${version}`;

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

    expect(fetchMock).toHaveBeenCalledWith(
      url,
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          'User-Agent': USER_AGENT,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      })
    );
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

    await expect(
      new Promise((resolve, reject) => {
        fetchUrl(url, resolve, reject);
      })
    ).rejects.toBe(error);
  });

  it('rejects with error if response status is not ok', async () => {
    const url = 'https://api.opencagedata.com/';
    const mockResponse = {
      status: 404,
      statusText: 'Not Found',
      json: () => Promise.resolve({}),
    };
    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    await expect(
      new Promise((resolve, reject) => {
        fetchUrl(url, resolve, reject);
      })
    ).rejects.toMatchObject({ status: { code: 404, message: 'Not Found' } });
  });
});
