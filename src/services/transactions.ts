import { Service } from "../services/service"
import { TransactionTransformer } from "../transformers";
import { Transaction } from "../types";

export class Transactions extends Service {

  public all(accountId: number): Promise<Transaction[]> {
    return this.getRequest(`/external/accounts/${accountId}/transactions`, {})
      .then(response => (new TransactionTransformer).items(response))
  }

  public findReference(accountId: number, transactionReference: string): Promise<Transaction[]> {
    return this.all(accountId)
      .then(response => (new TransactionTransformer).items(response))
      .then(transactions => {
        let foundTransactions: Transaction[] = [];

        transactions.forEach(transaction => {
          if (transaction.transactionRef === transactionReference) {
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
