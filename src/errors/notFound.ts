import * as Interfaces from "../interfaces";

export class NotFoundError extends Error implements Interfaces.ErrorMessage {

    /**
     * Holds a basic message about this error
     */
    message: string = "Not Found";

    /**
     * Holds the HTTP error code associated with the error
     */
    httpErrorCode: number = 404;

    /**
     * Holds a more desciptive message about the error
     */
    description: string = "The requested resource was not found.";

}
