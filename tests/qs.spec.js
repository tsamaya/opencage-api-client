const buildQueryString = require('../src/qs');

describe('buildQueryString', () => {
  test('function exists', () => {
    expect(buildQueryString).toBeTruthy();
    expect(typeof buildQueryString).toBe('function');
  });
  test('call with undefined', () => {
    const result = buildQueryString();
    expect(result).toBe('');
  });
  test('call with null', () => {
    const result = buildQueryString(null);
    expect(result).toBe('');
  });
  test('call with empty object', () => {
    const result = buildQueryString({});
    expect(result).toBe('');
  });
  test('call with a string value', () => {
    const result = buildQueryString({ q: 'value' });
    expect(result).toBe('q=value');
  });
  test('call with a numeric value', () => {
    const result = buildQueryString({ q: 10 });
    expect(result).toBe('q=10');
  });
  test('call with a negative numeric value', () => {
    const result = buildQueryString({ q: -10 });
    expect(result).toBe('q=-10');
  });
  test('call with two parameters', () => {
    const result = buildQueryString({ q: -10, a: 'z' });
    expect(result).toBe('q=-10&a=z');
  });
  test('call with nested parameters (not supported)', () => {
    const result = buildQueryString({ q: -10, a: { b: 'z' } });
    // a=[object object]
    expect(result).toBe('q=-10&a=%5Bobject%20Object%5D');
  });
});
