import * as moment from "moment";

export interface Company {

  /**
   * The ID of the company
   */
  id: number;

  /**
   * The registered company number
   */
  number: number;

  /**
   * The name of the company
   */
  name: string;

  /**
   * The SIC code of the company
   */
  sicCode: string;

  /**
   * The VAT number of the company
   */
  vatNumber: string;

  /**
   * The name the company trades under
   */
  tradingName: string;

  /**
   * If the company is registered or not
   */
  registered: boolean;

  /**
   * The date the company was created on
   */
  createdOn: moment.Moment;

  /**
   * The date the company was last update on
   */
  updatedOn: moment.Moment;

}
