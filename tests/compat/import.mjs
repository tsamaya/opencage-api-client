// ESM consumer: `import` must resolve the "import" export condition.
import assert from 'node:assert/strict';
import opencage, { geocode } from 'opencage-api-client';

assert.equal(typeof geocode, 'function', 'named geocode export');
assert.equal(typeof opencage.geocode, 'function', 'default export geocode');

console.log('ok  ESM import');
