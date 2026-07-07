/**
 * Zero-dependency smoke test for the built dist.
 * Run with: node tests/e2e/smoke.mjs
 * Requires: OPENCAGE_API_KEY environment variable
 */

const apiKey = process.env.OPENCAGE_API_KEY;
if (!apiKey) {
  console.error('OPENCAGE_API_KEY is not set');
  process.exit(1);
}

const { default: opencage } = await import('../../dist/index.js');

let passed = 0;
let failed = 0;

async function check(label, fn) {
  try {
    await fn();
    console.log(`  ok  ${label}`);
    passed++;
  } catch (err) {
    console.error(`  FAIL ${label}: ${err.message ?? err}`);
    failed++;
  }
}

console.log('\nOpenCage API client smoke tests\n');

await check('geocodes a valid address', async () => {
  const data = await opencage.geocode({ q: 'Brandenburg Gate' });
  if (!data?.results?.length) throw new Error('No results returned');
});

await check('reverse geocodes coordinates', async () => {
  const data = await opencage.geocode({ q: '52.5162767,13.3777025' });
  if (!data?.results?.length) throw new Error('No results returned');
});

await check('invalid key returns 401', async () => {
  try {
    await opencage.geocode({ q: 'Brandenburg Gate', key: 'not.a.key' });
    throw new Error('Expected error but request succeeded');
  } catch (err) {
    if (err?.status?.code !== 401)
      throw new Error(`Expected 401 got ${err?.status?.code}`, { cause: err });
  }
});

// OpenCage test keys — documented at https://opencagedata.com/api#testingkeys
await check('test key triggers 402 (quota exceeded)', async () => {
  try {
    await opencage.geocode({
      q: '51.952659,7.632473',
      key: '4372eff77b8343cebfc843eb4da4ddc4',
    });
    throw new Error('Expected error but request succeeded');
  } catch (err) {
    if (err?.status?.code !== 402)
      throw new Error(`Expected 402 got ${err?.status?.code}`, { cause: err });
  }
});

await check('test key triggers 403 (suspended)', async () => {
  try {
    await opencage.geocode({
      q: '51.952659,7.632473',
      key: '2e10e5e828262eb243ec0b54681d699a',
    });
    throw new Error('Expected error but request succeeded');
  } catch (err) {
    if (err?.status?.code !== 403)
      throw new Error(`Expected 403 got ${err?.status?.code}`, { cause: err });
  }
});

await check('test key triggers 429 (too many requests)', async () => {
  try {
    await opencage.geocode({
      q: '51.952659,7.632473',
      key: 'd6d0f0065f4348a4bdfe4587ba02714b',
    });
    throw new Error('Expected error but request succeeded');
  } catch (err) {
    if (err?.status?.code !== 429)
      throw new Error(`Expected 429 got ${err?.status?.code}`, { cause: err });
  }
});

console.log(`\n${passed} passed, ${failed} failed\n`);
if (failed > 0) process.exit(1);
