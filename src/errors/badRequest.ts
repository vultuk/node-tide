import * as Interfaces from "../interfaces";

export class BadRequestError extends Error implements Interfaces.ErrorMessage {

    /**
     * Holds a basic message about this error
     */
    message: string = "Invalid Input";

    /**
     * Holds the HTTP error code associated with the error
     */
    httpErrorCode: number = 400;

    /**
     * Holds a more desciptive message about the error
     */
    description: string = "An input was expected but it was not there. Therefore we could not perform the API request.";

}
