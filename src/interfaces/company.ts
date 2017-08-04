import * as moment from "moment";

export interface Company {
  id: number;
  number: number;
  name: string;
  sicCode: string;
  vatNumber: string;
  tradingName: string;
  registered: boolean;
  createdOn: moment.Moment;
  updatedOn: moment.Moment;
}
