import { describe, it, expect } from 'vitest';
import {
  isUndefinedOrEmpty,
  isUndefinedOrNull,
  buildQuery,
} from '../src/helpers/geocodeHelpers';

describe('Helpers library', () => {
  describe('function isUndefinedOrEmpty', () => {
    it('undefined', () => {
      const input = undefined;
      const result = isUndefinedOrEmpty(input);
      expect(result).toBe(true);
    });
    it('empty', () => {
      const input = '';
      const result = isUndefinedOrEmpty(input);
      expect(result).toBe(true);
    });
    it('null', () => {
      const input = null;
      const result = isUndefinedOrEmpty(input);
      expect(result).toBe(false);
    });
    it('a', () => {
      const input = 'a';
      const result = isUndefinedOrEmpty(input);
      expect(result).toBe(false);
    });
    it('0', () => {
      const input = '0';
      const result = isUndefinedOrEmpty(input);
      expect(result).toBe(false);
    });
    it('10', () => {
      const input = '10';
      const result = isUndefinedOrEmpty(input);
      expect(result).toBe(false);
    });
    it('100', () => {
      const input = 100;
      // @ts-expect-error testing with wrong type
      const result = isUndefinedOrEmpty(input);
      expect(result).toBe(false);
    });
  });
  describe('function isUndefinedOrNull', () => {
    it('undefined', () => {
      const input = undefined;
      const result = isUndefinedOrNull(input);
      expect(result).toBe(true);
    });
    it('empty', () => {
      const input = '';
      // @ts-expect-error testing with wrong type
      const result = isUndefinedOrNull(input);
      expect(result).toBe(false);
    });
    it('a', () => {
      const input = 'a';
      // @ts-expect-error testing with wrong type
      const result = isUndefinedOrNull(input);
      expect(result).toBe(false);
    });
    it('0', () => {
      const input = 0;
      // @ts-expect-error testing with wrong type
      const result = isUndefinedOrNull(input);
      expect(result).toBe(false);
    });
    it('null', () => {
      const input = null;
      const result = isUndefinedOrNull(input);
      expect(result).toBe(true);
    });
  });
  describe('function buildQuery', () => {
    const defaultInput = { key: 'test-key', q: 'Berlin' };

    it('returns correct endpoint and query when no proxyURL and key provided', () => {
      const result = buildQuery(defaultInput);
      expect(result.endpoint).toBe('https://api.opencagedata.com/geocode/v1/json');
      expect(result.missingKey).toBe(false);
      expect(result.query).toEqual(defaultInput);
    });

    it('removes proxyURL from query and uses it as endpoint (input.proxyURL)', () => {
      const input = { ...defaultInput, proxyURL: 'https://proxy.example.com' };
      const result = buildQuery(input);
      expect(result.endpoint).toBe('https://proxy.example.com');
      expect(result.query.proxyURL).toBeUndefined();
      expect(result.missingKey).toBe(false);
    });

    it('removes proxyURL from query and uses it as endpoint (options.proxyURL)', () => {
      const input = { ...defaultInput };
      const options = { proxyURL: 'https://proxy2.example.com' };
      const result = buildQuery(input, options);
      expect(result.endpoint).toBe('https://proxy2.example.com');
      expect(result.query.proxyURL).toBeUndefined();
      expect(result.missingKey).toBe(false);
    });

    it('prefers options.proxyURL over input.proxyURL', () => {
      const input = { ...defaultInput, proxyURL: 'https://proxy.example.com' };
      const options = { proxyURL: 'https://proxy2.example.com' };
      const result = buildQuery(input, options);
      expect(result.endpoint).toBe('https://proxy2.example.com');
      expect(result.query.proxyURL).toBeUndefined();
    });

    it('uses input.proxyURL if options.proxyURL is empty', () => {
      const input = { ...defaultInput, proxyURL: 'https://proxy.example.com' };
      const options = { proxyURL: '' };
      const result = buildQuery(input, options);
      expect(result.endpoint).toBe('https://proxy.example.com');
      expect(result.query.proxyURL).toBeUndefined();
    });

    it('sets missingKey true if key is missing and process.env.OPENCAGE_API_KEY is undefined', () => {
      const input = { q: 'Berlin' };
      const originalEnv = process.env.OPENCAGE_API_KEY;
      delete process.env.OPENCAGE_API_KEY;
      const result = buildQuery(input);
      expect(result.missingKey).toBe(true);
      process.env.OPENCAGE_API_KEY = originalEnv;
    });

    it('uses process.env.OPENCAGE_API_KEY if key is missing in input', () => {
      const input = { q: 'Berlin' };
      const originalEnv = process.env.OPENCAGE_API_KEY;
      process.env.OPENCAGE_API_KEY = 'env-key';
      const result = buildQuery(input);
      expect(result.query.key).toBe('env-key');
      expect(result.missingKey).toBe(false);
      process.env.OPENCAGE_API_KEY = originalEnv;
    });

    it('handles empty input object', () => {
      // GeocodingRequest requires at least 'q' (query string)
      const result = buildQuery({ q: '' });
      expect(result.endpoint).toBe('https://api.opencagedata.com/geocode/v1/json');
      // missingKey should be true if no key and no env
      expect(typeof result.missingKey).toBe('boolean');
      expect(typeof result.query).toBe('object');
    });

    it('handles undefined options', () => {
      const result = buildQuery(defaultInput, undefined);
      expect(result.endpoint).toBe('https://api.opencagedata.com/geocode/v1/json');
      expect(result.missingKey).toBe(false);
      expect(result.query).toEqual(defaultInput);
    });
  });
});
