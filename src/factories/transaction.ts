import * as Entities from "../entities";
import * as Interfaces from "../interfaces";
import * as moment from "moment";

import { Factory } from "../factories/factory";

export class Transaction extends Factory implements Interfaces.Factory {

  /**
   * Creates an appropriate Entity from the given data
   * @param  {any}             item Data to create an entity from
   * @return {Promise<Entity>}      A promise to return the new Entity
   */
  public item(item: any): Promise<Entities.Transaction> {
    return Promise.resolve(item)
      .then(item => {
        return {
          id: item.transactionId,
          accountId: item.accountId,
          amount: item.amount,
          type: item.type,
          transactionRef: item.txnRef,
          transactionOn: moment(item.isoTransactionDateTime),
          appliedOn: moment(item.isoAppliedDateTime),
          clearedOn: (item.isoClearedDateTime),
          maskedPan: item.maskedPan,
          status: item.status,
          description: item.description,
          createdOn: moment(item.isoCreatedOn),
          updatedOn: moment(item.isoUpdatedOn),
          category: {
            id: item.categoryId,
            name: item.categoryName,
            type: item.categoryType
          } as Entities.Category
        } as Entities.Transaction;
      });
  }

}
