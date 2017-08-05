import * as Interfaces from "../interfaces";
import * as moment from "moment";

export class Company implements Interfaces.Company {

  /**
   * The ID of the company
   */
  public id: number;

  /**
   * The registered company number
   */
  public number: number;

  /**
   * The name of the company
   */
  public name: string;

  /**
   * The SIC code of the company
   */
  public sicCode: string;

  /**
   * The VAT number of the company
   */
  public vatNumber: string;

  /**
   * The name the company trades under
   */
  public tradingName: string;

  /**
   * If the company is registered or not
   */
  public registered: boolean;

  /**
   * The date the company was created on
   */
  public createdOn: moment.Moment;

  /**
   * The date the company was last update on
   */
  public updatedOn: moment.Moment;

}
