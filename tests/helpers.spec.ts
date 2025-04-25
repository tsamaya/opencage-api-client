import { describe, it, expect } from 'vitest';
import { isUndefinedOrEmpty, isUndefinedOrNull } from '../src/geocode';

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
});
