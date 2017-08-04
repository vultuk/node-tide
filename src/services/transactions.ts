import * as Entities from "../entities";
import * as Transformers from "../transformers";
import * as moment from "moment";

import { Service } from "../services/service"

export class Transactions extends Service {

  public all(accountId: number): Promise<Entities.Transaction[]> {
    return this.getRequest(`/external/accounts/${accountId}/transactions`, {})
      .then(response => (new Transformers.Transaction).items(response))
  }

  public findReference(accountId: number, transactionReference: string): Promise<Entities.Transaction[]> {
    return this.all(accountId)
      .then(transactions => {
        let foundTransactions: Entities.Transaction[] = [];

        transactions.forEach(transaction => {
          let matchReference = transaction.description.match(/ref: (.*)/);
          if (matchReference && matchReference[1].toLowerCase() === transactionReference.toLowerCase()) {
            foundTransactions.push(transaction);
          }
        })

        if (foundTransactions.length === 0) {
          throw new Error('No transactions found')
        }

        return foundTransactions;
      })
  }

  public findDateRange(accountId: number, startDate: moment.Moment, endDate?: moment.Moment): Promise<Entities.Transaction[]> {
    if (!endDate || endDate === undefined) {
      startDate = startDate.startOf('day');
      endDate = startDate.clone().endOf('day');
    }

    return this.all(accountId)
      .then((transactions: Entities.Transaction[]) => {
        let foundTransactions: Entities.Transaction[] = [];

        transactions.forEach(transaction => {
          if (transaction.transactionOn.isBetween(startDate, endDate)) {
            foundTransactions.push(transaction);
          }
        })

        if (foundTransactions.length === 0) {
          throw new Error('No transactions found')
        }

        return foundTransactions;
      })
  }

}
