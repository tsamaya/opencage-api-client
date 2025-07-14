import { describe, it, expect } from 'vitest';
import { geocode } from '../src/browser.ts';

describe('browser.ts', () => {
  it('should be a function', () => {
    expect(geocode).toBeInstanceOf(Function);
  });
});
