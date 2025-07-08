/**
 * Rate/Usage Limits
 *
 * The OpenCage geocoding API uses rate limits to ensure that the service stays available to all users.
 */
export type Rate = {
    /**
     * Total number of requests allowed within the time window
     */
    limit: number;
    /**
     * Number of requests remaining within the current time window
     */
    remaining: number;
    /**
     * Unix timestamp when the rate limit will reset
     */
    reset: number;
};
/**
 * License
 *
 * See the credits detail page https://opencagedata.com/credits.
 */
export type License = {
    /**
     * Name of the license
     */
    name: string;
    /**
     * URL where the full license text can be found
     */
    url: string;
};
/**
 * Status
 *
 * The status object contains the following fields:
 * - message: a human-readable message
 * - code: an integer code
 */
export type Status = {
    /**
     * Status message
     */
    message?: string;
    /**
     * HTTP status code
     */
    code?: number;
};
/**
 * StayInformed
 *
 * Links to stay tuned about OpenCageData API
 */
export type StayInformed = {
    /**
     * URL to the OpenCage blog
     */
    blog?: string;
    /**
     * URL to OpenCage Mastodon account
     */
    mastodon?: string;
};
/**
 * Timestamp
 *
 * The timestamp of the request in HTTP and UNIX format.
 */
export type Timestamp = {
    /**
     * HTTP-formatted timestamp
     */
    created_http?: string;
    /**
     * Unix timestamp
     */
    created_unix?: number;
};
/**
 * Information about the local currency
 *
 * Example:
 * ```
 * "currency": {
 *    "alternate_symbols": [
 *    ],
 *  "decimal_mark": ",",
 *  "html_entity": "€",
 *  "iso_code": "EUR",
 *  "iso_numeric": "978",
 *  "name": "Euro",
 *  "smallest_denomination": 1,
 *  "subunit": "Cent",
 *  "subunit_to_unit": 100,
 *  "symbol": "€",
 *  "symbol_first": 0,
 *  "thousands_separator": "."
 * }
 *```
 */
export type Currency = {
    /**
     * Alternative symbols used for the currency
     */
    alternateSymbols: string[];
    /**
     * Character used as decimal separator
     */
    decimalMark: string;
    /**
     * Symbol used to disambiguate the currency
     */
    disambiguateSymbol: string;
    /**
     * HTML entity for the currency symbol
     */
    htmlEntity: string;
    /**
     * ISO 4217 currency code
     */
    isoCode: string;
    /**
     * ISO 4217 numeric currency code
     */
    isoNumeric: string;
    /**
     * Full name of the currency
     */
    name: string;
    /**
     * Smallest denomination in circulation
     */
    smallestDenomination: number;
    /**
     * Name of the subunit of the currency
     */
    subunit: string;
    /**
     * Number of subunits in one unit
     */
    subunitToUnit: number;
    /**
     * Primary symbol used for the currency
     */
    symbol: string;
    /**
     * Whether the symbol appears before (1) or after (0) the amount
     */
    symbolFirst: number;
    /**
     * Character used as thousands separator
     */
    thousandsSeparator: string;
};
/**
 * Contains the latitude and longitude of the center point of the result in degree minute decimal second format.
 *
 * Example: { "lat": "52° 23' 16.01880'' N", "lng": "9° 44' 0.38184'' E" }
 */
export type DMS = {
    /**
     * Latitude in degrees, minutes, seconds format
     */
    lat: string;
    /**
     * Longitude in degrees, minutes, seconds format
     */
    lng: string;
};
/**
 * Contains the US Federal Information Processing Standards (FIPS) code for the state (two digit) and county (five digit) of the center point of the result, if we can determine it.
 *
 * Example: { "county": "08101", "state": "08" }
 *
 * Note:
 *  - Only for locations in the United States and associated territories.
 *  - The values are strings - not numbers - and can have leading zeros.
 */
export type FIPS = {
    county: string;
    state: string;
};
/**
 * contains the Mercator projection (EPSG:41001, sometimes also referred to as "Simple Mercator") x and y unit meter values of the center point of the result.
 *
 * Example: { "x": 1083521.518, "y": 6836676.75 }
 * Note: use of Mercator projection on latitudes above/below +70/-70 degrees is strongly discouraged, due to the gross distortions of the projection.
 */
export type Mercator = {
    /**
     * Mercator x coordinate
     */
    x: number;
    /**
     *
     */
    y: number;
};
/**
 * OpenStreetMap related information
 */
export type Osm = {
    /**
     * URL to edit this location on OpenStreetMap
     */
    editURL: string;
    /**
     * URL to add a note about this location on OpenStreetMap
     */
    noteURL: string;
    /**
     * URL to view this location on OpenStreetMap
     */
    url: string;
};
/**
 * Information about roads at or near the location
 */
export type Roadinfo = {
    /**
     * Which side of the road traffic drives on
     */
    driveOn: string;
    /**
     * Road name or identifier
     */
    road: string;
    /**
     * Units used for speed limits
     */
    speedIn: string;
};
/**
 * Sun rise and set times for the location
 */
export type Rise = {
    /**
     * Sunrise/Sunset time considering atmospheric refraction
     */
    apparent: number;
    /**
     * When the sun is 18 degrees below the horizon
     */
    astronomical: number;
    /**
     * When the sun is 6 degrees below the horizon
     */
    civil: number;
    /**
     * When the sun is 12 degrees below the horizon
     */
    nautical: number;
};
/**
 * Sun rise and set times for the location
 */
export type Sun = {
    /**
     * Various sunrise times
     */
    rise: Rise;
    /**
     * Various sunset times
     */
    set: Rise;
};
/**
 * Timezone information for the location
 */
export type Timezone = {
    /**
     * IANA timezone database name
     */
    name: string;
    /**
     * Whether daylight saving time is currently in effect
     * Example: 1 for yes, 0 for no
     */
    nowInDst: number;
    /**
     * Offset from UTC in seconds
     */
    offsetSEC: number;
    /**
     * Offset from UTC as string (e.g., +01:00)
     */
    offsetString: string;
    /**
     * Short timezone name (e.g., EST, CEST)
     */
    shortName: string;
};
/**
 * Regions
 *
 * Contains the relevant United Nations M49 codes for the location.
 *
 * Consists of two keys: regions and statistical_groupings.
 *
 * regions contains keys which are human-readable names of the regions in English and values which are 3 digit UN M49 codes. Note: The codes are strings and not numbers, they can have leading zeros. See a list of all possible regions and the corresponding codes.
 * statistical_groupings contains a list of abbreviations of various country groupings commonly used in statistical analysis.
 */
export type Regions = {
    americas: string;
    northernAmerica: string;
    us: string;
    world: string;
};
/**
 * Contains the relevant United Nations M49 codes for the location.
 *
 * Consists of two keys: regions and statistical_groupings.
 *
 * regions contains keys which are human-readable names of the regions in English and values which are 3 digit UN M49 codes. Note: The codes are strings and not numbers, they can have leading zeros. See a list of all possible regions and the corresponding codes.
 * statistical_groupings contains a list of abbreviations of various country groupings commonly used in statistical analysis.
 *
 * Possible values are
 *
 *   - LDC	Least Developed Country
 *   - LEDC	Less Economically Developed Country
 *   - LLDC	Landlocked Developing Country
 *   - MEDC	More Economically Developed Country
 *   - SIDS	Small Island Developing State
 *
 * Example (for a location in Haiti)
 * ```
 * "UN_M49": {
 *   "regions": {
 *     "AMERICAS": "019",
 *     "CARIBBEAN": "029",
 *     "HT": "332",
 *     "LATIN_AMERICA": "419",
 *     "WORLD": "001"
 *   },
 *   "statistical_groupings": [
 *     "LDC",
 *     "LEDC",
 *     "SIDS"
 *   ]
 * },
 * ```
 */
export type UnM49 = {
    /**
     * Hierarchical region codes
     */
    regions: Regions;
    /**
     * Statistical groupings the location belongs to
     */
    statisticalGroupings: string[];
};
/**
 * Contains the words of a [What3Words](https://what3words.com/) address.
 */
export type What3Words = {
    /**
     * The three words that make up the What3Words address.
     * Example: "index.home.raft"
     */
    words: string;
};
/**
 * Latitude and longitude of the center point of the result.
 */
export type Geometry = {
    /**
     * lat: Latitude in degrees
     */
    lat: number;
    /**
     * lng: Longitude in degrees
     */
    lng: number;
};
/**
 * Bounds
 *
 * Contains the northeast and southwest corners of the bounding box for the result.
 */
export type Bounds = {
    /**
     * Northeast corner of the bounding box
     */
    northeast: Geometry;
    /**
     *
     */
    southwest: Geometry;
};
/**
 * Response components
 */
export type Components = {
    /**
     * Two-letter country code
     */
    iso31661_Alpha2: string;
    /**
     * Three-letter country code
     */
    iso31661_Alpha3: string;
    /**
     * ISO 3166-2 codes for subdivisions (e.g., states, provinces)
     */
    iso31662: string[];
    /**
     * Category of the location
     */
    category: string;
    /**
     * Type of the location
     */
    type: string;
    /**
     * City name
     */
    city: string;
    /**
     * Continent name
     */
    continent: string;
    /**
     * Country name
     */
    country: string;
    /**
     * Country code
     */
    countryCode: string;
    /**
     * county name
     */
    county: string;
    /**
     * House number of the address, if available
     */
    houseNumber: string;
    /**
     * Postcode of the address, if available
     */
    postcode: string;
    /**
     * Name of the road
     */
    road: string;
    /**
     * State or region name
     */
    state: string;
    /**
     * State or region code
     */
    stateCode: string;
    /**
     * Suburb or locality name, if available
     */
    suburb: string;
};
/**
 * Annotations
 */
export type Annotations = {
    /**
     * Degrees, minutes, seconds representation of coordinates
     */
    dms: DMS;
    /**
     * FIPS (Federal Information Processing Standards) codes
     */
    fips: FIPS;
    /**
     * H3 geospatial indexing system, only available to paying customers and by request
     */
    h3: string;
    /**
     * Military Grid Reference System coordinates
     */
    mgrs: string;
    /**
     * Maidenhead Locator System coordinates
     */
    maidenhead: string;
    /**
     * Web Mercator projection coordinates
     */
    mercator: Mercator;
    /**
     * OpenStreetMap related information
     */
    osm: Osm;
    /**
     * UN M49 standard country or area codes. Response varies based on region.
     */
    unM49: UnM49;
    /**
     * The international telephone calling code for the country of the result.
     *
     * Example: 49
     */
    callingcode: number;
    /**
     * Currency information for the location's country
     */
    currency: Currency;
    /**
     * Emoji flag of the country of the result.
     *
     * Example: 🇩🇪
     */
    flag: string;
    /**
     * Contains a [geohash](https://en.wikipedia.org/wiki/Geohash) for the center point of the result.
     * Example: `u1qfj2zsvwd6ntczum3r`
     */
    geohash: string;
    /**
     * Direction of the Qibla (in degrees from north)
     */
    qibla: number;
    /**
     * Information about roads at or near the location
     */
    roadinfo: Roadinfo;
    /**
     * Sun rise and set times for the location
     */
    sun: Sun;
    /**
     * Timezone information for the location
     */
    timezone: Timezone;
    /**
     * What3Words representation of the location
     */
    what3Words: What3Words;
};
/**
 * GeocodeResult
 *
 * Represents a single geocoding result.
 * Contains detailed information about the location, including annotations, bounding box, components, confidence score, formatted address, and geographic coordinates.
 */
export type GeocodeResult = {
    /**
     * Additional data about the location. Which annotations are returned depends on the location of the result.
     */
    annotations: Annotations;
    /**
     * Bounding box containing the location
     */
    bounds: Bounds;
    /**
     * Normalised components of the address. Fields will depend on the location.
     */
    components: Components;
    /**
     * Confidence score from 0-10 (10 being the most confident)
     */
    confidence: number;
    /**
     * Human-readable formatted address
     */
    formatted: string;
    /**
     * Geographic coordinates (latitude and longitude)
     */
    geometry: Geometry;
};
/**
 * The API response is formatted according to the format specified in the request (json).
 *
 * All returned coordinates use WGS 84 (sometimes also known as EPSG:4326) as reference coordinate system.
 *
 * The response structure will vary slightly depending on:
 * - The optional request parameters specified.
 * - Whether or not you are a subscription customer. Because subscription customer do not face hard limits, their responses do NOT contain the rate element. Details.
 * - The location requested and the information we have available for that location.
 * - Reverse geocoding results contain the field distance_from_q which is the distance (in meters) to the coordinates in the request to the coordinates of the result.
 *
 * Ranking of Results
 * - Reverse geocoding requests return at most one result.
 * - Forward geocoding requests may return multiple results.
 * 1. Results are ordered from most relevant to least.
 * 2. Results are NOT ordered by confidence score (see definition of confidence score).
 */
export type GeocodeResponse = {
    /**
     * Link to the OpenCageData Geocoding API documentation
     */
    documentation?: string;
    /**
     * The OpenCage geocoding API uses rate limits to ensure that the service stays available to all users.
     *
     * **Free trial usage limits**
     * - Free trial accounts have a hard limit of 2,500 requests per day for testing purposes. Our definition of "day" is based on [the UTC timezone](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). Daily counts reset at 24:00 UTC. [See current UTC time](https://opencagedata.com/tools/current-utc-time).
     * - Free trial accounts are limited to one request per second. If you exceed that rate you may see a 429 - too many requests response.
     * - We offer a free TRIAL, not a free tier. If you are regularly depending on our service, you are not testing.
     */
    rate?: Rate;
    /**
     * License information for data sources used in the response
     */
    licenses?: License[];
    /**
     * Array of geocoding results
     */
    results?: GeocodeResult[];
    /**
     * Response Status
     */
    status?: Status;
    /**
     * links to stay tuned about OpenCageData API
     */
    stay_informed?: StayInformed;
    /**
     * Thanks message
     */
    thanks?: string;
    /**
     * Server timestamp
     */
    timestamp?: Timestamp;
    /**
     * Number of results
     */
    totalResults?: number;
};
