import * as Interfaces from "../interfaces";

export class NotAcceptableError extends Error implements Interfaces.ErrorMessage {

    /**
     * Holds a basic message about this error
     */
    message: string = "Not Acceptable";

    /**
     * Holds the HTTP error code associated with the error
     */
    httpErrorCode: number = 406;

    /**
     * Holds a more desciptive message about the error
     */
    description: string = "You requested a format that isn’t JSON.";

}
