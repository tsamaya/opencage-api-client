declare module 'opencage-api-client' {
  interface GeocodeRequest {
    /**
     * a 30 character long, alphanumeric string.
     */
    key?: string;
    /**
     * the query string to be geocoded: a latitude, longitude or a placename/address.
     */
    q: string;
    /**
     * When set to 1 we attempt to abbreviate and shorten the formatted string we return. Learn more about formatted placenames.
     */
    abbrv?: number;
    /**
     * When set to 1 the various request parameters are added to the response for ease of debugging.
     */
    add_request?: number;
    /**
     * Used only for forward geocoding. This value will restrict the possible results to a defined bounding box.
     * The value of the bounds parameter should be specified as two coordinate points forming the south-west and north-east corners of a bounding box (min lon, min lat, max lon, max lat).
     *
     * Example usage:
     * bounds=-0.563160,51.280430,0.278970,51.683979
     */
    bounds?: string;
    /**
     * Used only for forward geocoding. Restricts results to the specified country/territory or countries.
     *
     * Example usage:
     * countrycode=de
     *
     * The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States.
     * Non-two letter country codes are ignored.
     * You can specify multiple country codes by supplying a comma separated list. For example countrycode=ca,us would limit results to either the United States or Canada.
     */
    countrycode?: string;
    /**
     * Wraps the returned JSON with a function name.
     */
    jsonp?: string;
    /**
     * An IETF format language code (such as es for Spanish or pt-BR for Brazilian Portuguese), or native in which case we will attempt to return the response in the local language(s).
     *
     * Example usage:
     * language=de
     *
     * If no language is explicitly specified, we will then look for an HTTP Accept-Language header like those sent by a browser and use highest quality language specified (please see RFC 4647 for details). If the request did not specify a valid header, then en (English) will be assumed.
     */
    language?: string;
    /**
     * The maximum number of results we should return. Default is 10. Maximum allowable value is 100.
     *
     * Example usage:
     * limit=1
     */
    limit?: number;
    /**
     * An integer from 1-10. Only results with at least this confidence will be returned. Learn more about our confidence score on API documentation.
     *
     * Example usage:
     * min_confidence=3
     */
    min_confidence?: number;
    /**
     * When set to 1 results will not contain annotations.
     *
     * Example usage:
     * no_annotations=1
     *
     * The only exception is if the optional roadinfo parameter is set (see below).
     */
    no_annotations?: number;
    /**
     * When set to 1 results will not be deduplicated.
     */
    no_dedupe?: number;
    /**
     * When set to 1 the query contents are not logged. Please use this parameter if you have concerns about privacy and want us to have no record of your query.
     */
    no_record?: number;
    /**
     * When set to 1 results are 'pretty' printed for easier reading. Useful for debugging.
     */
    pretty?: number;
    /**
     * Used only for forward geocoding. Provides the geocoder with a hint to bias results in favour of those closer to the specified location. Please note though, this is just one of many factors in the internal scoring we use for ranking results.
     * The value is a point with latitude, longitude coordinates in decimal format.
     *
     * Example usage:
     * proximity=51.952659,7.632473
     *
     * Values that are not valid coordinates are ignored.
     */
    proximity?: string;
    /**
     * When set to 1 the behaviour of the geocoder is changed to attempt to match the nearest road (as opposed to address). If possible we also fill additional information in the roadinfo annotation. Please see details API Documentation.
     */
    roadinfo?: number;
  }

  export function geocode(input: GeocodeRequest): Promise<any>;
}
