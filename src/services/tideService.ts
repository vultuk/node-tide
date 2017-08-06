import * as Errors from "../errors";
import * as Interfaces from "../interfaces";
import * as request from "request-promise-native";

export class TideService implements Interfaces.Service {

  /**
   * The URL used to access the API
   */
  public apiUrl: string = "https://api.tide.co/tide-backend/rest/api/v1";;

  /**
   * Stores the access token used to validate requests to the API
   */
  public accessToken: string = undefined;

  /**
   * Sets the access token used to validate requests to the API
   * @param  {string} accessToken The access token
   * @return {this}               A copy of the Service being used
   */
  public setAccessToken(accessToken: string): this {
    this.accessToken = accessToken;

    return this;
  }

  /**
   * Performs a POST request to the given API path with the given data
   * @param  {string}       path The API path to be called
   * @param  {any}          data The data to be posted
   * @return {Promise<any>}      A promise to respond with the data that comes
   *                             from the API
   */
  public postRequest(path: string, data: any): Promise<any> {
    return this.performRequest('POST', path, data);
  }

  /**
   * Performs a GET request to the given API path with the given data
   * @param  {string}       path The API path to be called
   * @param  {any}          data Any required data
   * @return {Promise<any>}      A promise to respond with the data that comes
   *                             from the API
   */
  public getRequest(path: string, data: any): Promise<any> {
    return this.performRequest('GET', path, data);
  }

  /**
   * Performs a given request type to a path with appropriate data
   * @param  {string}       type The type of request (GET/POST)
   * @param  {string}       path The API path to be called
   * @param  {any}          data Any required data
   * @return {Promise<any>}      A promise to respond with the data that comes
   *                             from the API
   */
  public performRequest(type: string, path: string, data: any): Promise<any> {
    return Promise
      .resolve({ endpoint: `${this.apiUrl}${path}`, data: data})
      .then(({endpoint, data}) => request({
        method: type,
        uri: endpoint,
        headers: this.accessToken === undefined ? {} : {
          Authorization: `Bearer ${this.accessToken}`
        },
        body: data,
        json: true
      }))
      .catch(err => {
        throw this.returnError(err.statusCode, err);
      });
  }

  /**
   * Find the appropriate error required to be thrown for this hrrp request
   * @param  {number}                  code The error code thrown by the API
   * @param  {Error}                   err  The original Error
   * @return {Interfaces.ErrorMessage}      The node-tide error message
   */
  private returnError(code: number, err: Error): Interfaces.ErrorMessage {
    switch(code) {
      case 400:
        return new Errors.BadRequestError();
      case 401:
        return new Errors.UnauthorisedError();
      case 403:
        return new Errors.ForbiddenError();
      case 404:
        return new Errors.NotFoundError();
      case 405:
        return new Errors.NotAllowedError();
      case 406:
        return new Errors.NotAcceptableError();
      case 429:
        return new Errors.TooManyRequestsError();
      case 500:
        return new Errors.InternalServerError();
      case 503:
        return new Errors.UnavailableError();
      default:
        let newError: Interfaces.ErrorMessage = new Errors.InternalServerError();

        newError.message = err.message;
        newError.description = err.message;
        newError.httpErrorCode = 500;

        return newError;
    }
  }

}
