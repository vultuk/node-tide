import * as Interfaces from "../interfaces";

export class UnavailableError extends Error implements Interfaces.ErrorMessage {

    /**
     * Holds a basic message about this error
     */
    message: string = "Unavailable";

    /**
     * Holds the HTTP error code associated with the error
     */
    httpErrorCode: number = 503;

    /**
     * Holds a more desciptive message about the error
     */
    description: string = "Tide's API service is currently undergoing maintainance. Please try again later.";

}
