/**
 * GeocodeError type
 *
 * Represents the Error Type
 */
export type GeocodeErrorStatus = {
    /**
     * The HTTP status code
     */
    code: number;
    /**
     * The error message
     */
    message: string;
};
/**
 * GeocodeError class
 *
 * Represents the Error Object
 */
export declare class GeocodeError extends Error {
    /**
     * The response error object or the status error object for backward compatibility
     */
    response?: Response | {
        status: GeocodeErrorStatus;
    };
    /**
     * The status error object
     */
    status?: GeocodeErrorStatus;
    /**
     * Constructor for the GeocodeError class
     *
     * @param message the error message
     */
    constructor(message: string);
}
