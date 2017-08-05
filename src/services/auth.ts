import * as Entities from "../entities";
import * as Transformers from "../transformers";

import { Service } from "../services/service";

export class Auth extends Service {

  public generateAuthUrl(config: Entities.AuthenticationConfig): string {
    return `https://api.tide.co/tide-backend/oauth/index.html?redirect_url=${config.redirectUrl}&client_id=${config.clientId}`;
  }

  public generateAccessToken(code: string, refresh: boolean = false): Promise<Entities.Credentials> {
    return Promise
      .resolve({code: code, refresh: refresh})
      .then(({code, refresh}) => this.getRequest(`/oauth2/tokens?${refresh ? 'refresh_token' : 'code'}=${code}`, {}))
      .then(response => (new Transformers.Credentials).item(response))
  }

}
