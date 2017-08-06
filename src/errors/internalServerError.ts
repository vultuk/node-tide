import * as Interfaces from "../interfaces";

export class InternalServerError extends Error implements Interfaces.ErrorMessage {

    /**
     * Holds a basic message about this error
     */
    message: string = "Internal Server Error";

    /**
     * Holds the HTTP error code associated with the error
     */
    httpErrorCode: number = 500;

    /**
     * Holds a more desciptive message about the error
     */
    description: string = "An error has occurred in either Tide's service or the Node-Tide module. Please inspect this error further for full details.";

}
