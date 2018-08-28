const opencage = require('..');

describe('Module', () => {
  test('Library exists', () => {
    expect(opencage).toBeTruthy();
    expect(typeof opencage).toBe('object');
  });
});
