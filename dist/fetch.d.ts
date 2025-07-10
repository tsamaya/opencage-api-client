/**
 * @private
 * @description checks the response status and throws an error if the status is not ok
 * @param response {Response} the response object
 * @returns {Response} the response object
 * @throws {GeocodeError} the error object
 */
export declare function checkFetchStatus(response: Response): Response;
export declare function parseJSON(response: Response): Promise<unknown>;
/**
 * fetches the url and returns a promise
 * @param  {String}  url     the url to fetch
 * @param  {Function} resolve the resolve function
 * @param  {Function} reject  the reject function
 */
export declare function fetchUrl(url: string, resolve: any, reject: any, signal?: AbortSignal): Promise<void>;
