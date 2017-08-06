import * as Interfaces from "../interfaces";

export class UnauthorisedError extends Error implements Interfaces.ErrorMessage {

    /**
     * Holds a basic message about this error
     */
    message: string = "Unauthorised";

    /**
     * Holds the HTTP error code associated with the error
     */
    httpErrorCode: number = 401;

    /**
     * Holds a more desciptive message about the error
     */
    description: string = "It has not been possible to access the Tide API as no valid access token was provided.";

}
