export * from "./services";
export * from "./types";

import { Auth, Companies, Accounts, Transactions } from "./services";

export class Tide {
  public auth: Auth;
  public companies: Companies;
  public accounts: Accounts;
  public transactions: Transactions;

  constructor(accessToken: string = undefined) {
    this.auth = (new Auth());
    if (accessToken !== undefined) { this.setAccessToken(accessToken); }
  }

  public setAccessToken(accessToken: string = undefined) {
    if (accessToken === undefined) { throw new Error("Access Token not Supplied"); }
    this.companies = (new Companies()).setAccessToken(accessToken);
    this.accounts = (new Accounts()).setAccessToken(accessToken);
    this.transactions = (new Transactions()).setAccessToken(accessToken);
  }

}
