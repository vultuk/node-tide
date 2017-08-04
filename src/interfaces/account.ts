import * as moment from "moment";

export interface Account {
  id: number;
  companyId: number;
  accountNumber: string;
  sortCode: string;
  name: string;
  balance: number;
  availableBalance: number;
  currencyCode: string;
  createdOn: moment.Moment;
  updatedOn: moment.Moment;
}
