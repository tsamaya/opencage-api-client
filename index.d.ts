declare module 'opencage-api-client' {
  enum Option {
    On = 1,
    Off = 0,
  }

  interface GeocodeRequest {
    key?: string;
    q: string;
    abbrv?: Option;
    add_request?: Option;
    bounds?: string;
    countrycode?: string;
    jsonp?: string;
    language?: string;
    limit?: number;
    min_confidence?: number;
    no_annotations?: Option;
    no_dedupe?: Option;
    no_record?: Option;
    pretty?: Option;
    proximity?: string;
    roadinfo?: Option;
  }

  export function geocode(input: GeocodeRequest): Promise<any>;
}
