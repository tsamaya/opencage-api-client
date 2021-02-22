const opencage = require('..');

describe('integration tests', () => {
  if (process.env.CI) {
    // eslint-disable-next-line
    test.skip('CI : skipping integration tests', () => {
      expect(true).toBeTruthy();
    });
    return;
  }

  test('if environment variable is set', () => {
    // In JavaScript, there are six falsy values:
    // false, 0, '', null, undefined, and NaN.
    // Everything else is truthy.
    expect(process.env.OPENCAGE_API_KEY).toBeTruthy();
  });

  test('an invalid API key', () => {
    expect.assertions(3);
    const input = {
      q: 'Brandenburg Gate',
      key: 'not.a.key',
    };
    return opencage
      .geocode(input)
      .then(() => {
        // no used, in case it raises a test error
        expect(false).toBeTruthy();
      })
      .catch((data) => {
        // console.log(data.response);
        expect(data.status).toBeTruthy();
        expect(data.status.code).toBeTruthy();
        expect(data.status.code).toEqual(401);
      });
  });
  test('geocode Brandenburg Gate', () => {
    expect.assertions(1);
    const input = {
      q: 'Brandenburg Gate',
    };
    return opencage
      .geocode(input)
      .then((data) => {
        expect(data).toBeTruthy();
      })
      .catch(() => {
        // no used, in case it raises a test error
        expect(false).toBeTruthy();
      });
  });
  test('reverse geocode Brandenburg Gate with space', () => {
    expect.assertions(1);
    const input = {
      q: '52.5162767 13.3777025',
    };
    return opencage
      .geocode(input)
      .then((data) => {
        expect(data).toBeTruthy();
      })
      .catch(() => {
        // no used, in case it raises a test error
        expect(false).toBeTruthy();
      });
  });
  test('reverse geocode Brandenburg Gate with comma', () => {
    expect.assertions(1);
    const input = {
      q: '52.5162767,13.3777025',
    };
    return opencage
      .geocode(input)
      .then((data) => {
        expect(data).toBeTruthy();
      })
      .catch(() => {
        // no used, in case it raises a test error
        expect(false).toBeTruthy();
      });
  });
  test('reverse geocode Brandenburg Gate with space and comma', () => {
    expect.assertions(1);
    const input = {
      q: '52.5162767, 13.3777025',
    };
    return opencage
      .geocode(input)
      .then((data) => {
        expect(data).toBeTruthy();
      })
      .catch(() => {
        // no used, in case it raises a test error
        expect(false).toBeTruthy();
      });
  });
  describe('proxy tests', () => {
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
      test('geocode Brandenburg Gate via proxy', () => {
        expect.assertions(1);
        const input = {
          q: 'Brandenburg Gate',
          proxyURL,
        };
        return opencage
          .geocode(input)
          .then((data) => {
            expect(data).toBeTruthy();
          })
          .catch(() => {
            // no used, in case it raises a test error
            expect(false).toBeTruthy();
          });
      });
    }
  });
});
