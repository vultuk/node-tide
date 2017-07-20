import * as moment from "moment";

import { Category } from "./";

export class Transaction {
  public id: number;
  public accountId: number;
  public amount: number;
  public type: string;
  public transactionRef: string;
  public transactionOn: moment.Moment;
  public appliedOn: moment.Moment;
  public clearedOn: moment.Moment;
  public maskedPan: boolean;
  public status: string;
  public description: string;
  public createdOn: moment.Moment;
  public updatedOn: moment.Moment;
  public category: Category;
}
