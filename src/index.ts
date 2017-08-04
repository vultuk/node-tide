export * from "./services";
export * from "./entities";

import * as Services from "./services";

export class Tide {
  public auth: Services.Auth;
  public companies: Services.Companies;
  public accounts: Services.Accounts;
  public transactions: Services.Transactions;

  constructor(accessToken: string = undefined) {
    this.auth = (new Services.Auth());
    if (accessToken !== undefined) { this.setAccessToken(accessToken); }
  }

  public setAccessToken(accessToken: string = undefined) {
    if (accessToken === undefined) { throw new Error("Access Token not Supplied"); }
    this.companies = (new Services.Companies()).setAccessToken(accessToken);
    this.accounts = (new Services.Accounts()).setAccessToken(accessToken);
    this.transactions = (new Services.Transactions()).setAccessToken(accessToken);
  }

}
