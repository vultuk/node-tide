import * as moment from "moment";

export interface Account {

  /**
   * The ID of the account
   */
  id: number;

  /**
   * The ID of the company this account belongs to
   */
  companyId: number;

  /**
   * The account number designated to this account
   */
  accountNumber: string;

  /**
   * The sort code designated to this account
   */
  sortCode: string;

  /**
   * The name of this account
   */
  name: string;

  /**
   * The current balance of this account
   */
  balance: number;

  /**
   * The amount able to be spent from this account
   */
  availableBalance: number;

  /**
   * The currency code used for this account
   */
  currencyCode: string;

  /**
   * The date this account was created on
   */
  createdOn: moment.Moment;

  /**
   * The date this account was last updated on
   */
  updatedOn: moment.Moment;

}
