import * as Interfaces from "../interfaces";
import * as moment from "moment";

export class Account implements Interfaces.Account {
  public id: number;
  public companyId: number;
  public accountNumber: string;
  public sortCode: string;
  public name: string;
  public balance: number;
  public availableBalance: number;
  public currencyCode: string;
  public createdOn: moment.Moment;
  public updatedOn: moment.Moment;
}
