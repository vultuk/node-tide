import * as moment from "moment";

export class Company {
  public id: number;
  public number: number;
  public name: string;
  public sicCode: string;
  public vatNumber: string;
  public tradingName: string;
  public registered: boolean;
  public createdOn: moment.Moment;
  public updatedOn: moment.Moment;
}
