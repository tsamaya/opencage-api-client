const opencage = require('..');

describe('Module', () => {
  test('Library exists', () => {
    expect(opencage).toBeTruthy();
    expect(typeof opencage).toBe('object');
    expect(opencage.geocode).toBeTruthy();
    expect(typeof opencage.geocode).toBe('function');
  });
});
