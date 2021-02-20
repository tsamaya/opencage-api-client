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

    test('no input parameters', () => {
      expect.assertions(1);

      const input = undefined;
      return opencage
        .geocode(input)
        .then(() => {
          // no used, in case it raises a test error
          expect(false).toBeTruthy();
        })
        .catch((error) => {
          // console.log(data);
          expect(error.response.status.code).toEqual(400);
        });
    });
    test('null input parameters', () => {
      expect.assertions(1);

      const input = null;
      return opencage
        .geocode(input)
        .then(() => {
          // no used, in case it raises a test error
          expect(false).toBeTruthy();
        })
        .catch((error) => {
          // console.log(data);
          expect(error.response.status.code).toEqual(400);
        });
    });
    test('input parameters without key', () => {
      expect.assertions(1);

      const input = { q: 'lyon, france' };
      return opencage
        .geocode(input)
        .then(() => {
          // no used, in case it raises a test error
          expect(false).toBeTruthy();
        })
        .catch((error) => {
          // console.log(data);
          expect(error.response.status.code).toEqual(401);
        });
    });
  });
});
