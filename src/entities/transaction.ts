import * as Entities from "./";
import * as Interfaces from "../interfaces";
import * as moment from "moment";

export class Transaction implements Interfaces.Transaction {

  /**
   * The ID of the transation
   */
  public id: number;

  /**
   * The ID of the account this transaction was made to or from
   */
  public accountId: number;

  /**
   * The amount the transaction was for
   */
  public amount: number;

  /**
   * The type of transaction
   */
  public type: string;

  /**
   * A unique reference for this transaction
   */
  public transactionRef: string;

  /**
   * The date and time the item was transacted on
   */
  public transactionOn: moment.Moment;

  /**
   * The date and time the transaction was applied on
   */
  public appliedOn: moment.Moment;

  /**
   * The date and time the transaction cleared on
   */
  public clearedOn: moment.Moment;

  /**
   * The masked card number of the transaction (if applicable)
   */
  public maskedPan: string;

  /**
   * The current status of this transaction
   */
  public status: string;

  /**
   * A description of the transaction. For bank transfers this will include
   * the name of the person/business sending the transaction and also the
   * reference used
   */
  public description: string;

  /**
   * The date and time the transaction was created on
   */
  public createdOn: moment.Moment;

  /**
   * The date and time of the last update to this transaction
   */
  public updatedOn: moment.Moment;

  /**
   * The category this transaction fits into
   */
  public category: Interfaces.Category;

}
