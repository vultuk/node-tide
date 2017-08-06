export * from "./services";
export * from "./interfaces";
export * from "./errors";

import * as Services from "./services";

export class Tide {

  /**
   * The tide service which allows communication with the Tide API
   */
  private service: Services.TideService;

  /**
   * The authentication service
   */
  public auth: Services.Auth;

  /**
   * The company service
   */
  public companies: Services.Companies;

  /**
   * The account service
   */
  public accounts: Services.Accounts;

  /**
   * The transaction service
   */
  public transactions: Services.Transactions;

  /**
   * Creates a new Tide object with the ability to set the access token if
   * it has already been generated and stored.
   * @param  {string = undefined}   accessToken The Access Token from the found credentials
   * @return {this}                             The new tide object
   */
  constructor(accessToken?: string ) {
    this.service = new Services.TideService();
    this.auth = (new Services.Auth(this.service));
    if (accessToken) { this.setAccessToken(accessToken); }
  }

  /**
   * Sets the access token for all services so that the API can successfully
   * validate and return the required data
   * @param  {string = undefined}   accessToken The Access Token from the found credentials
   * @return {this}                             The new tide object with access token stored
   */
  public setAccessToken(accessToken: string = undefined): this {
    if (accessToken === undefined) { throw new Error("Access Token not Supplied"); }
    this.companies = new Services.Companies(this.service, accessToken);
    this.accounts = new Services.Accounts(this.service, accessToken);
    this.transactions = new Services.Transactions(this.service, accessToken);

    return this;
  }

}
