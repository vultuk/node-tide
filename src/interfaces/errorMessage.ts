export interface ErrorMessage {

  /**
   * Holds a basic message about this error
   */
  message: string;

  /**
   * Holds the HTTP error code associated with the error
   */
  httpErrorCode: number;

  /**
   * Holds a more desciptive message about the error
   */
  description: string;

}
