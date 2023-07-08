/* eslint-disable jest/no-conditional-expect */

const fetch = require('../src/fetch');

describe('fetch', () => {
  test('Library exists', () => {
    expect(fetch).toBeTruthy();
  });

  describe('fetchUrl function', () => {
    test('returns an object', () => {
      const url = 'https://google.com';
      const p = fetch.fetchUrl(url);
      expect(typeof p).toEqual('object');
    });
  });

  describe('fetch function', () => {
    test('returns a json', () => {
      expect.assertions(1);

      // const url = 'http://httpbin.org/ip';
      const url = 'https://jsonplaceholder.typicode.com/todos/1';
      return new Promise((resolve, reject) => {
        fetch(url, resolve, reject);
      })
        .then((data) => {
          expect(data).toBeTruthy();
        })
        .catch((ex) => {
          // eslint-disable-next-line no-console
          console.log(ex);
          // no used, in case it raises a test error
          expect(false).toBeTruthy();
        });
    });
    test('Reject non json', () => {
      expect.assertions(1);

      const url = 'http://google.com';
      return new Promise((resolve, reject) => {
        fetch(url, resolve, reject);
      })
        .then(() => {
          // no used, in case it raises a test error
          expect(false).toBeTruthy();
        })
        .catch((data) => {
          expect(data).toBeTruthy();
        });
    });
  });

  describe('parseJSON function', () => {
    test('json', () => {
      const data = {
        foor: 'bar',
      };
      const response = {
        json: () => data,
      };
      expect(fetch.parseJSON(response)).toEqual(data);
    });
  });

  describe('checkStatus function', () => {
    test('status 200', () => {
      const response = {
        status: 200,
        statusText: 'OK',
      };
      expect(fetch.checkStatus(response)).toBe(response);
    });
    test('status 403', () => {
      const response = {
        status: 403,
        statusText: 'Forbidden',
      };
      expect(() => {
        fetch.checkStatus(response);
      }).toThrow();
    });
  });
});
