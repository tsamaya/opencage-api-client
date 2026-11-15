/** Geographic coordinates (latitude and longitude) */
export interface LatLng {
    /** Latitude coordinate in decimal degrees */
    lat: number;
    /** Longitude coordinate in decimal degrees */
    lng: number;
}
/** License information for data sources used in the response */
export interface License {
    /** Name of the license */
    name: string;
    /** URL where the full license text can be found */
    url: string;
}
/** Rate limit information. Not present for subscription customers. */
export interface RateLimit {
    /** Total number of requests allowed within the time window */
    limit: number;
    /** Number of requests remaining within the current time window */
    remaining: number;
    /** Unix timestamp when the rate limit will reset */
    reset: number;
}
/** Status information about the request */
export interface Status {
    /** Status message */
    message: string;
    /** HTTP status code */
    code: number;
}
/** Links to follow OpenCage for updates */
export interface StayInformed {
    /** URL to the OpenCage blog */
    blog: string;
    /** URL to OpenCage Twitter account */
    twitter?: string;
    /** URL to OpenCage Mastodon account */
    mastodon: string;
}
/** Timestamp information */
export interface Timestamp {
    /** HTTP-formatted timestamp */
    created_http: string;
    /** Unix timestamp */
    created_unix: number;
}
/** Degrees, minutes, seconds representation of coordinates */
export interface DMS {
    lat: string;
    lng: string;
}
/** FIPS (Federal Information Processing Standards) codes */
export interface FIPS {
    /** FIPS county code */
    county?: string;
    /** FIPS state code */
    state: string;
}
/** Web Mercator projection coordinates */
export interface Mercator {
    /** X coordinate (longitude) in Web Mercator projection */
    x: number;
    /** Y coordinate (latitude) in Web Mercator projection */
    y: number;
}
/** Nomenclature of Territorial Units for Statistics codes */
export interface NUTS {
    NUTS0: {
        code: string;
    };
    NUTS1: {
        code: string;
    };
    NUTS2: {
        code: string;
    };
    NUTS3: {
        code: string;
    };
}
/** OpenStreetMap related information */
export interface OSM {
    /** URL to edit this location on OpenStreetMap */
    edit_url?: string;
    /** URL to add a note about this location on OpenStreetMap */
    note_url: string;
    /** URL to view this location on OpenStreetMap */
    url: string;
}
/** United Nations Code for Trade and Transport Locations */
export interface UNLOCODE {
    code: string;
    date: string;
    function: Record<string, any>;
    meaning: string[];
    raw: string;
}
/** UN M49 standard country or area codes */
export interface UNM49 {
    /** Hierarchical region codes */
    regions: {
        WORLD: string;
        AMERICAS?: string;
        NORTHERN_AMERICA?: string;
        US?: string;
        DE?: string;
        EUROPE?: string;
        WESTERN_EUROPE?: string;
    };
    /** Statistical groupings the location belongs to */
    statistical_groupings: string[];
}
/** Currency information for the location's country */
export interface Currency {
    /** Alternative symbols used for the currency */
    alternate_symbols: string[];
    /** Character used as decimal separator */
    decimal_mark: string;
    /** Symbol used to disambiguate the currency */
    disambiguate_symbol?: string;
    /** HTML entity for the currency symbol */
    html_entity: string;
    /** ISO 4217 currency code */
    iso_code: string;
    /** ISO 4217 numeric currency code */
    iso_numeric: string;
    /** Full name of the currency */
    name: string;
    /** Smallest denomination in circulation */
    smallest_denomination: number;
    /** Name of the subunit of the currency */
    subunit: string;
    /** Number of subunits in one unit */
    subunit_to_unit: number;
    /** Primary symbol used for the currency */
    symbol: string;
    /** Whether the symbol appears before (1) or after (0) the amount */
    symbol_first: number;
    /** Character used as thousands separator */
    thousands_separator: string;
}
/** Information about roads at or near the location */
export interface RoadInfo {
    /** Which side of the road traffic drives on */
    drive_on: 'left' | 'right';
    /** Number of lanes */
    lanes?: number;
    /** Maximum height restriction */
    maxheight?: string;
    /** Maximum speed limit */
    maxspeed?: string;
    /** Maximum weight restriction */
    maxweight?: number;
    /** Maximum width restriction */
    maxwidth?: number;
    /** Whether the road is one-way (1) or two-way (0) */
    oneway?: 0 | 1;
    /** Road name or identifier */
    road?: string;
    /** Road reference identifier */
    road_reference?: string;
    /** International road reference identifier */
    road_reference_intl?: string;
    /** Type of road */
    road_type?: string;
    /** Units used for speed limits */
    speed_in: 'km/h' | 'mph';
    /** Surface type */
    surface?: number;
    /** Toll information */
    toll?: string;
    /** Width of the road */
    width?: number;
}
/** Sun timing information */
export interface SunTimes {
    /** Sunrise time considering atmospheric refraction */
    apparent: number;
    /** When the sun is 18 degrees below the horizon */
    astronomical: number;
    /** When the sun is 6 degrees below the horizon */
    civil: number;
    /** When the sun is 12 degrees below the horizon */
    nautical: number;
}
/** Sun rise and set times for the location */
export interface Sun {
    /** Various sunrise times */
    rise: SunTimes;
    /** Various sunset times */
    set: SunTimes;
}
/** Timezone information for the location */
export interface Timezone {
    /** IANA timezone database name */
    name: string;
    /** Whether daylight saving time is currently in effect */
    now_in_dst: 0 | 1;
    /** Offset from UTC in seconds */
    offset_sec: number;
    /** Offset from UTC as string (e.g., +01:00) */
    offset_string: string;
    /** Short timezone name (e.g., EST, CEST) */
    short_name: string;
}
/** What3Words representation of the location */
export interface What3Words {
    /** Three-word address */
    words: string;
}
/** Additional data about the location */
export interface Annotations {
    /** Degrees, minutes, seconds representation of coordinates */
    DMS?: DMS;
    /** FIPS (Federal Information Processing Standards) codes */
    FIPS?: FIPS;
    /** H3 geospatial indexing system */
    H3?: string;
    /** Military Grid Reference System coordinates */
    MGRS?: string;
    /** Maidenhead Locator System coordinates */
    Maidenhead?: string;
    /** Web Mercator projection coordinates */
    Mercator?: Mercator;
    /** Nomenclature of Territorial Units for Statistics codes */
    NUTS?: NUTS;
    /** OpenStreetMap related information */
    OSM?: OSM;
    /** United Nations Code for Trade and Transport Locations */
    'UN/LOCODE'?: UNLOCODE;
    /** UN M49 standard country or area codes */
    UN_M49?: UNM49;
    /** International calling code for the country */
    callingcode?: number;
    /** Currency information for the location's country */
    currency?: Currency;
    /** Unicode representation of the country's flag */
    flag?: string;
    /** Geohash representation of the coordinates */
    geohash?: string;
    /** Direction of the Qibla (in degrees from north) */
    qibla?: number;
    /** Information about roads at or near the location */
    roadinfo?: RoadInfo;
    /** Sun rise and set times for the location */
    sun?: Sun;
    /** Timezone information for the location */
    timezone?: Timezone;
    /** What3Words representation of the location */
    what3words?: What3Words;
}
/** Bounding box containing the location */
export interface Bounds {
    northeast: LatLng;
    southwest: LatLng;
}
/** Normalized components of the address */
export interface Components {
    /** Type of the location */
    _type: string;
    /** Category of the location */
    _category: string;
    /** Two-letter country code */
    'ISO_3166-1_alpha-2'?: string;
    /** Three-letter country code */
    'ISO_3166-1_alpha-3'?: string;
    /** Codes for country subdivisions */
    'ISO_3166-2'?: string[];
    /** Normalized city name */
    _normalized_city?: string;
    /** Body of water */
    body_of_water?: string;
    /** Borough or district within a city */
    borough?: string;
    /** City name */
    city?: string;
    /** City district */
    city_district?: string;
    /** Continent name */
    continent?: string;
    /** Country name */
    country?: string;
    /** Two-letter country code (lowercase) */
    country_code?: string;
    /** County or district name */
    county?: string;
    /** Building or house number */
    house_number?: string;
    /** Neighborhood name */
    neighbourhood?: string;
    /** Office or building name */
    office?: string;
    /** Political union (e.g., European Union) */
    political_union?: string;
    /** Postal code */
    postcode?: string;
    /** Street or road name */
    road?: string;
    /** State, province, or region name */
    state?: string;
    /** State or province code */
    state_code?: string;
    /** Suburb name */
    suburb?: string;
    /** Town name */
    town?: string;
    /** Village name */
    village?: string;
}
/** Distance information for reverse geocoding */
export interface DistanceFromQuery {
    /** Distance in meters */
    meters: number;
}
/** Individual geocoding result */
export interface GeocodingResult {
    /** Additional data about the location */
    annotations?: Annotations;
    /** Bounding box containing the location */
    bounds?: Bounds;
    /** Normalized components of the address */
    components: Components;
    /** Confidence score from 0-10 (10 being the most confident) */
    confidence: number;
    /** Distance from the query point to the result (reverse geocoding only) */
    distance_from_q?: DistanceFromQuery;
    /** Human-readable formatted address */
    formatted: string;
    /** Geographic coordinates */
    geometry: LatLng;
}
/** For backward compatibility */
export type Result = GeocodingResult;
/** Main OpenCage Geocoder API Response */
export type GeocodingResponse = {
    /** URL to the API documentation */
    documentation: string;
    /** Rate limit information (not present for subscription customers) */
    rate?: RateLimit | null;
    /** License information for data sources used in the response */
    licenses: License[];
    /** Array of geocoding results */
    results: GeocodingResult[];
    /** Status information about the request */
    status: Status;
    /** Links to follow OpenCage for updates */
    stay_informed: StayInformed;
    /** Thank you message */
    thanks: string;
    /** Timestamp information */
    timestamp: Timestamp;
    /** Total number of results found */
    total_results: number;
};
