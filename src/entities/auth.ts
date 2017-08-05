import * as Interfaces from "../interfaces";

export class AuthenticationConfig implements Interfaces.AuthenticationConfig {

  /**
   * The application name to be shown inside Tide
   */
  public applicationName: string;

  /**
   * The url to redirect to after Auth has been performed
   */
  public redirectUrl: string;

}
