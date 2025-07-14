import { describe, it, expect } from 'vitest';
import { buildQueryString } from '../src/helpers/geocodeHelpers';

describe('buildQueryString', () => {
  it('function exists', () => {
    expect(buildQueryString).toBeTruthy();
    expect(typeof buildQueryString).toBe('function');
  });
  it('call with undefined', () => {
    const result = buildQueryString(undefined);
    expect(result).toBe('');
  });
  it('call with null', () => {
    const result = buildQueryString(null);
    expect(result).toBe('');
  });
  it('call with empty object', () => {
    const result = buildQueryString({});
    expect(result).toBe('');
  });
  it('call with an object and null value', () => {
    const result = buildQueryString({ q: null });
    expect(result).toBe('q=');
  });
  it('call with a string value', () => {
    const result = buildQueryString({ q: 'value' });
    expect(result).toBe('q=value');
  });
  it('call with a string value with diacritics', () => {
    const result = buildQueryString({ q: 'république' });
    expect(result).toBe('q=r%C3%A9publique');
  });
  it('call with a numeric value', () => {
    const result = buildQueryString({ q: 10 });
    expect(result).toBe('q=10');
  });
  it('call with a negative numeric value', () => {
    const result = buildQueryString({ q: -10 });
    expect(result).toBe('q=-10');
  });
  it('call with two parameters', () => {
    const result = buildQueryString({ q: -10, a: 'z' });
    expect(result).toBe('q=-10&a=z');
  });
  it('call with nested parameters (NOT SUPPORTED)', () => {
    const result = buildQueryString({ q: -10, a: { b: 'z' } });
    // a=[object object]
    expect(result).toBe('q=-10&a=%5Bobject%20Object%5D');
  });
});
