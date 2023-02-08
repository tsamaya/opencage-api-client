/* eslint-disable jest/no-conditional-expect */
const opencage = require('..');

describe('integration tests', () => {
  test('if environment variable is set', () => {
    // In JavaScript, there are six falsy values:
    // false, 0, '', null, undefined, and NaN.
    // Everything else is truthy.
    expect(process.env.OPENCAGE_API_KEY).toBeTruthy();
  });

  test('an invalid API key', async () => {
    // expect.assertions(3);
    const input = {
      q: 'Brandenburg Gate',
      key: 'not.a.key',
    };
    try {
      await opencage.geocode(input);
    } catch (error) {
      // console.log(error);
      expect(error.status).toBeTruthy();
      expect(error.status.code).toBeTruthy();
      expect(error.status.code).toEqual(401);
    }
  });
  test('geocode Brandenburg Gate', async () => {
    // expect.assertions(1);
    const input = {
      q: 'Brandenburg Gate',
    };
    // try {
    const data = await opencage.geocode(input);
    expect(data).toBeTruthy();
    // } catch (error) {
    //   console.log(error);
    // }
  });
  test('reverse geocode Brandenburg Gate with space', async () => {
    // expect.assertions(1);
    const input = {
      q: '52.5162767 13.3777025',
    };
    // try {
    const data = await opencage.geocode(input);
    expect(data).toBeTruthy();
    // } catch (error) {
    //   console.log(error);
    // }
  });
  test('reverse geocode Brandenburg Gate with comma', async () => {
    // expect.assertions(1);
    const input = {
      q: '52.5162767,13.3777025',
    };
    // try {
    const data = await opencage.geocode(input);
    expect(data).toBeTruthy();
    // } catch (error) {
    //   console.log(error);
    // }
  });
  test('reverse geocode Brandenburg Gate with space and comma', async () => {
    // expect.assertions(1);
    const input = {
      q: '52.5162767, 13.3777025',
    };
    // try {
    const data = await opencage.geocode(input);
    expect(data).toBeTruthy();
    // } catch (error) {
    //   console.log(error);
    // }
  });
  describe('proxy tests', () => {
    if (!process.env.PROXY_URL) {
      test('No Proxy set', () => {
        expect(true).toBeTruthy();
      });
      return;
    }
    const proxyURL = process.env.PROXY_URL;
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
    if (proxyURL) {
      test('environment variable PROXY_URL is set', () => {
        // In JavaScript, there are six falsy values:
        // false, 0, '', null, undefined, and NaN.
        // Everything else is truthy.
        expect(proxyURL).toBeTruthy();
      });
      test('geocode Brandenburg Gate via proxy', async () => {
        // expect.assertions(1);
        const input = {
          q: 'Brandenburg Gate',
          proxyURL,
        };
        // try {
        const data = await opencage.geocode(input);
        expect(data).toBeTruthy();
        // } catch (error) {
        //   console.log(error);
        // }
      });
    }
  });
});
