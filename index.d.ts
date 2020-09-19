declare module 'opencage-api-client' {
  interface GeocodeRequest {
    key?: string;
    q: string;
    abbrv?: number;
    add_request?: number;
    bounds?: string;
    countrycode?: string;
    jsonp?: string;
    language?: string;
    limit?: number;
    min_confidence?: number;
    no_annotations?: number;
    no_dedupe?: number;
    no_record?: number;
    pretty?: number;
    proximity?: string;
    roadinfo?: number;
  }

  export function geocode(input: GeocodeRequest): Promise<any>;
}
