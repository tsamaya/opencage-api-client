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

  interface GeocodeResponse {
    documentation: string;
    licenses: License[];
    rate: Rate;
    results: Result[];
    status: Status;
    stayInformed: StayInformed;
    thanks: string;
    timestamp: Timestamp;
    totalResults: number;
  }

  interface License {
    name: string;
    url: string;
  }

  interface Rate {
    limit: number;
    remaining: number;
    reset: number;
  }

  interface Result {
    annotations: Annotations;
    bounds: Bounds;
    components: Components;
    confidence: number;
    formatted: string;
    geometry: Geometry;
  }

  interface Annotations {
    dms: Dms;
    fips: FIPS;
    mgrs: string;
    maidenhead: string;
    mercator: Mercator;
    osm: Osm;
    unM49: UnM49;
    callingcode: number;
    currency: Currency;
    flag: string;
    geohash: string;
    qibla: number;
    roadinfo: Roadinfo;
    sun: Sun;
    timezone: Timezone;
    what3Words: What3Words;
  }

  interface Currency {
    alternateSymbols: string[];
    decimalMark: string;
    disambiguateSymbol: string;
    htmlEntity: string;
    isoCode: string;
    isoNumeric: string;
    name: string;
    smallestDenomination: number;
    subunit: string;
    subunitToUnit: number;
    symbol: string;
    symbolFirst: number;
    thousandsSeparator: string;
  }

  interface Dms {
    lat: string;
    lng: string;
  }

  interface FIPS {
    county: string;
    state: string;
  }

  interface Mercator {
    x: number;
    y: number;
  }

  interface Osm {
    editURL: string;
    noteURL: string;
    url: string;
  }

  interface Roadinfo {
    driveOn: string;
    road: string;
    speedIn: string;
  }

  interface Sun {
    rise: Rise;
    set: Rise;
  }

  interface Rise {
    apparent: number;
    astronomical: number;
    civil: number;
    nautical: number;
  }

  interface Timezone {
    name: string;
    nowInDst: number;
    offsetSEC: number;
    offsetString: string;
    shortName: string;
  }

  interface UnM49 {
    regions: Regions;
    statisticalGroupings: string[];
  }

  interface Regions {
    americas: string;
    northernAmerica: string;
    us: string;
    world: string;
  }

  interface What3Words {
    words: string;
  }

  interface Bounds {
    northeast: Geometry;
    southwest: Geometry;
  }

  interface Geometry {
    lat: number;
    lng: number;
  }

  interface Components {
    iso31661_Alpha2: string;
    iso31661_Alpha3: string;
    iso31662: string[];
    category: string;
    type: string;
    city: string;
    continent: string;
    country: string;
    countryCode: string;
    county: string;
    houseNumber: string;
    postcode: string;
    road: string;
    state: string;
    stateCode: string;
    suburb: string;
  }

  interface Status {
    code: number;
    message: string;
  }

  interface StayInformed {
    blog: string;
    twitter: string;
  }

  interface Timestamp {
    createdHTTP: string;
    createdUnix: number;
  }

  export function geocode(input: GeocodeRequest): Promise<GeocodeResponse>;
}
