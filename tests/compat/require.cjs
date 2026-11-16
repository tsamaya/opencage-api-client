// CommonJS consumer: `require` must resolve the "require" export condition.
const assert = require('node:assert/strict');
const opencage = require('opencage-api-client');

assert.equal(typeof opencage.geocode, 'function', 'named geocode export');
assert.equal(
  typeof opencage.default.geocode,
  'function',
  'default export geocode'
);

console.log('ok  CJS require');
