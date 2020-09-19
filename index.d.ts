declare module 'opencage-api-client' {
  enum GeocodeOption {
    Off = 0,
    On = 1,
  }

  interface GeocodeRequest {
    key?: string;
    q: string;
    abbrv?: GeocodeOption;
    add_request?: GeocodeOption;
    bounds?: string;
    countrycode?: string;
    jsonp?: string;
    language?: string;
    limit?: number;
    min_confidence?: number;
    no_annotations?: GeocodeOption;
    no_dedupe?: GeocodeOption;
    no_record?: GeocodeOption;
    pretty?: GeocodeOption;
    proximity?: string;
    roadinfo?: GeocodeOption;
  }

  export function geocode(input: GeocodeRequest): Promise<any>;
}
