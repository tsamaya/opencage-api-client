const opencage = require('../');

describe('integration tests', () => {
  if (process.env.CI) {
    test.skip('CI : skipping integration tests'); // eslint-disable-line
    return;
  }
  test('test environment variable ', () => {
    // In JavaScript, there are six falsy values:
    // false, 0, '', null, undefined, and NaN.
    // Everything else is truthy.
    expect(process.env.OCD_API_KEY).toBeTruthy();
  });

  test('invalid API key', () => {
    expect.assertions(1);
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
      .catch(data => {
        // console.log(data.response);
        expect(data.response.status).toEqual(403);
      });
  });
  test('geocode Brandburg Gate', () => {
    expect.assertions(1);
    const input = {
      q: 'Brandenburg Gate',
    };
    return opencage
      .geocode(input)
      .then(data => {
        expect(data).toBeTruthy();
      })
      .catch(() => {
        // no used, in case it raises a test error
        expect(false).toBeTruthy();
      });
  });
  test('reverse geocode Brandburg Gate with space', () => {
    expect.assertions(1);
    const input = {
      q: '52.5162767 13.3777025',
    };
    return opencage
      .geocode(input)
      .then(data => {
        expect(data).toBeTruthy();
      })
      .catch(() => {
        // no used, in case it raises a test error
        expect(false).toBeTruthy();
      });
  });
  test('reverse geocode Brandburg Gate with comma', () => {
    expect.assertions(1);
    const input = {
      q: '52.5162767,13.3777025',
    };
    return opencage
      .geocode(input)
      .then(data => {
        expect(data).toBeTruthy();
      })
      .catch(() => {
        // no used, in case it raises a test error
        expect(false).toBeTruthy();
      });
  });
  test('reverse geocode Brandburg Gate with space and comma', () => {
    expect.assertions(1);
    const input = {
      q: '52.5162767, 13.3777025',
    };
    return opencage
      .geocode(input)
      .then(data => {
        expect(data).toBeTruthy();
      })
      .catch(() => {
        // no used, in case it raises a test error
        expect(false).toBeTruthy();
      });
  });
});
