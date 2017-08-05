export interface Credentials {
  
  /**
   * The access token required to call authenticated routes on the API
   */
  accessToken: string;

  /**
   * A refresh token used when the access token has expired
   */
  refreshToken: string;

}
