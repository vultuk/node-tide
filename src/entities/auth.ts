import * as Interfaces from "../interfaces";

export class AuthenticationConfig implements Interfaces.AuthenticationConfig {
  public clientId: string;
  public redirectUrl: string;
}
