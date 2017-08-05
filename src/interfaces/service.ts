export interface Service {
  /**
   * The URL used to access the API
   */
  apiUrl: string;

  /**
   * Stores the access token used to validate requests to the API
   */
  accessToken: string;

  /**
   * Sets the access token used to validate requests to the API
   * @param  {string} accessToken The access token
   * @return {this}               A copy of the Service being used
   */
  setAccessToken(accessToken: string): this;

  /**
   * Performs a POST request to the given API path with the given data
   * @param  {string}       path The API path to be called
   * @param  {any}          data The data to be posted
   * @return {Promise<any>}      A promise to respond with the data that comes
   *                             from the API
   */
  postRequest(path: string, data: any): Promise<any>;

  /**
   * Performs a GET request to the given API path with the given data
   * @param  {string}       path The API path to be called
   * @param  {any}          data Any required data
   * @return {Promise<any>}      A promise to respond with the data that comes
   *                             from the API
   */
  getRequest(path: string, data: any): Promise<any>;

  /**
   * Performs a given request type to a path with appropriate data
   * @param  {string}       type The type of request (GET/POST)
   * @param  {string}       path The API path to be called
   * @param  {any}          data Any required data
   * @return {Promise<any>}      A promise to respond with the data that comes
   *                             from the API
   */
  performRequest(type: string, path: string, data: any): Promise<any> ;
}
