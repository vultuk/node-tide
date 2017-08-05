import * as Interfaces from "./";
import * as moment from "moment";

export interface Transaction {
  
  /**
   * The ID of the transation
   */
  id: number;

  /**
   * The ID of the account this transaction was made to or from
   */
  accountId: number;

  /**
   * The amount the transaction was for
   */
  amount: number;

  /**
   * The type of transaction
   */
  type: string;

  /**
   * A unique reference for this transaction
   */
  transactionRef: string;

  /**
   * The date and time the item was transacted on
   */
  transactionOn: moment.Moment;

  /**
   * The date and time the transaction was applied on
   */
  appliedOn: moment.Moment;

  /**
   * The date and time the transaction cleared on
   */
  clearedOn: moment.Moment;

  /**
   * The masked card number of the transaction (if applicable)
   */
  maskedPan: string;

  /**
   * The current status of this transaction
   */
  status: string;

  /**
   * A description of the transaction. For bank transfers this will include
   * the name of the person/business sending the transaction and also the
   * reference used
   */
  description: string;

  /**
   * The date and time the transaction was created on
   */
  createdOn: moment.Moment;

  /**
   * The date and time of the last update to this transaction
   */
  updatedOn: moment.Moment;

  /**
   * The category this transaction fits into
   */
  category: Interfaces.Category;

}
