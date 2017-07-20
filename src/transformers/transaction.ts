import * as moment from "moment";

import { Transformer } from "../transformers";
import { Transaction, Category } from "../types";

export class TransactionTransformer extends Transformer {

  public item(item: any): Promise<Transaction> {
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
          } as Category
        } as Transaction;
      });
  }

}
