import * as Interfaces from "../interfaces";

export class TooManyRequestsError extends Error implements Interfaces.ErrorMessage {

    /**
     * Holds a basic message about this error
     */
    message: string = "Too Many Requests";

    /**
     * Holds the HTTP error code associated with the error
     */
    httpErrorCode: number = 429;

    /**
     * Holds a more desciptive message about the error
     */
    description: string = "There have been too many requests to this resource this hour, please ensure you stay within appropriate rate limiting.";

}
