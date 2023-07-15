/* eslint-disable jest/no-conditional-expect */

const opencage = require('..');

describe('geocode tests', () => {
  describe('rainy tests', () => {
    const savedKey = process.env.OPENCAGE_API_KEY;
    beforeAll(() => {
      if (typeof savedKey !== 'undefined') {
        delete process.env.OPENCAGE_API_KEY;
      }
    });
    afterAll(() => {
      if (typeof savedKey !== 'undefined') {
        process.env.OPENCAGE_API_KEY = savedKey;
      }
    });

    test('no input parameters', async () => {
      // expect.assertions(1);

      const input = undefined;
      try {
        await opencage.geocode(input);
      } catch (error) {
        // console.log(error);
        expect(error.response.status.code).toEqual(400);
      }
    });
    test('null input parameters', async () => {
      // expect.assertions(1);

      const input = null;
      try {
        await opencage.geocode(input);
      } catch (error) {
        // console.log(error);
        expect(error.response.status.code).toEqual(400);
      }
    });
    test('input parameters without key', async () => {
      // expect.assertions(1);

      const input = { q: 'lyon, france' };
      try {
        await opencage.geocode(input);
      } catch (error) {
        // console.log(error);
        expect(error.response.status.code).toEqual(401);
      }
    });
  });
});
