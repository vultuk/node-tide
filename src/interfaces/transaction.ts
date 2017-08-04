import * as Interfaces from "./";
import * as moment from "moment";

export interface Transaction {
  id: number;
  accountId: number;
  amount: number;
  type: string;
  transactionRef: string;
  transactionOn: moment.Moment;
  appliedOn: moment.Moment;
  clearedOn: moment.Moment;
  maskedPan: boolean;
  status: string;
  description: string;
  createdOn: moment.Moment;
  updatedOn: moment.Moment;
  category: Interfaces.Category;
}
