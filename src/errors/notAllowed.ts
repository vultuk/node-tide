import * as Interfaces from "../interfaces";

export class NotAllowedError extends Error implements Interfaces.ErrorMessage {

    /**
     * Holds a basic message about this error
     */
    message: string = "Not Allowed";

    /**
     * Holds the HTTP error code associated with the error
     */
    httpErrorCode: number = 405;

    /**
     * Holds a more desciptive message about the error
     */
    description: string = "You tried to access a resource with an invalid method.";

}
