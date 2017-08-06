import * as Interfaces from "../interfaces";

export class ForbiddenError extends Error implements Interfaces.ErrorMessage {

    /**
     * Holds a basic message about this error
     */
    message: string = "Forbidden";

    /**
     * Holds the HTTP error code associated with the error
     */
    httpErrorCode: number = 403;

    /**
     * Holds a more desciptive message about the error
     */
    description: string = "You do not have the required permissions to access the requested resource.";

}
