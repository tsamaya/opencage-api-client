/**
 * fetches the url and returns a promise
 * @param  {String}  url     the url to fetch
 * @param  {Function} resolve the resolve function
 * @param  {Function} reject  the reject function
 */
export declare function fetchUrl(url: string, resolve: any, reject: any, signal?: AbortSignal): Promise<void>;
