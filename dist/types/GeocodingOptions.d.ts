/**
 * GeocodingOptions type
 *
 * Represents the options object for the geocoding request
 */
export type GeocodingOptions = {
    /**
     * The AbortSignal to cancel the request.
     */
    signal?: AbortSignal;
    /**
     * The URL of the proxy server to use for the request.
     * If provided, the API key can be omitted from the request.
     */
    proxyURL?: string;
};
