import * as Interfaces from "../interfaces";
import * as moment from "moment";

export class Account implements Interfaces.Account {

  /**
   * The ID of the account
   */
  public id: number;

  /**
   * The ID of the company this account belongs to
   */
  public companyId: number;

  /**
   * The account number designated to this account
   */
  public accountNumber: string;

  /**
   * The sort code designated to this account
   */
  public sortCode: string;

  /**
   * The name of this account
   */
  public name: string;

  /**
   * The current balance of this account
   */
  public balance: number;

  /**
   * The amount able to be spent from this account
   */
  public availableBalance: number;

  /**
   * The currency code used for this account
   */
  public currencyCode: string;

  /**
   * The date this account was created on
   */
  public createdOn: moment.Moment;

  /**
   * The date this account was last updated on
   */
  public updatedOn: moment.Moment;

}
