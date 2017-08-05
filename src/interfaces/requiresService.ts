import * as Interfaces from "./";

export abstract class RequiresService {

  /**
   * The service class required to perform API calls
   */
  protected service: Interfaces.Service;

  constructor(service: Interfaces.Service, accessToken?: string) {
    this.service = service;
    if (accessToken) {
      this.service.setAccessToken(accessToken);
    }
  }

}
