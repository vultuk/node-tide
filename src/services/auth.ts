import * as Entities from "../entities";
import * as Factories from "../factories";

import { RequiresService } from "../interfaces/requiresService";

export class Auth extends RequiresService {

  /**
   * Generates an URL to authenticate with Tide based on a given Authentication
   * Config object. This URL can then be provided to the user to authenticate
   * themselves securely using OAuth2
   * @param  {Entities.AuthenticationConfig} config Details of the application name and redirect url
   * @return {string}                               The URL to be presented to the user
   */
  public generateAuthUrl(config: Entities.AuthenticationConfig): string {
    return `https://api.tide.co/tide-backend/oauth/index.html?redirect_url=${config.redirectUrl}&client_id=${config.applicationName}`;
  }

  /**
   * Generates an Access Token and a Refresh Token based on the code returned
   * from the authentication by the client or a refresh token from a previous
   * authentication.
   * @param  {string}                        code    The code to authenticate with
   * @param  {boolean=false}                 refresh If the code given is a refresh token (defaults to false)
   * @return {Promise<Entities.Credentials>}         A promise to return the appropriate credentials
   */
  public generateAccessToken(code: string, refresh: boolean = false): Promise<Entities.Credentials> {
    return Promise
      .resolve({code: code, refresh: refresh})
      .then(({code, refresh}) => this.service.getRequest(`/oauth2/tokens?${refresh ? 'refresh_token' : 'code'}=${code}`, {}))
      .then(response => (new Factories.Credentials).item(response))
  }

}
