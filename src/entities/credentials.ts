import * as Interfaces from "../interfaces";

export class Credentials implements Interfaces.Credentials {

  /**
   * The access token required to call authenticated routes on the API
   */
  public accessToken: string;

  /**
   * A refresh token used when the access token has expired
   */
  public refreshToken: string;

}
