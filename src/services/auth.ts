import { Service } from "../services/service"
import { AuthenticationConfig } from "../types";

export class Auth extends Service {

  public generateAuthUrl(config: AuthenticationConfig): Promise<string> {
    return Promise
      .resolve(config)
      .then(config => `https://api.tide.co/tide-backend/oauth/index.html?redirect_url=${config.redirectUrl}&client_id=${config.clientId}`)
  }

  public generateAccessToken(code: string, refresh: boolean = false): Promise<string> {
    return Promise
      .resolve({code: code, refresh: refresh})
      .then(grantCode => this.getRequest(`/oauth2/tokens?${refresh ? 'refresh_token' : 'code'}=${grantCode}`, {}))
  }

}
