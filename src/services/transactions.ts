import * as Entities from "../entities";
import * as Factories from "../factories";
import * as moment from "moment";

import { RequiresService } from "../interfaces/requiresService";

export class Transactions extends RequiresService {

  /**
   * Gets a list of all transactions for the given account ID
   * @param  {number}                          accountId The account number
   * @return {Promise<Entities.Transaction[]>}           A promise to return all transactions
   */
  public all(accountId: number): Promise<Entities.Transaction[]> {
    return this.service.getRequest(`/external/accounts/${accountId}/transactions`, {})
      .then(response => (new Factories.Transaction).items(response))
  }

  /**
   * Gets a list of all transactions with a given reference string. The
   * reference given is based on standard bank transfers and will come from
   * the description field after the 'ref:' tag that Tide adds.
   * @param  {number}                          accountId            The account number
   * @param  {string}                          transactionReference The reference to search for
   * @return {Promise<Entities.Transaction[]>}                      A promise to return the required transactions
   */
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

  /**
   * Gets a list of all transactions for a given date range. If no start date is
   * provided then the start date wil be set to the beginning of the current date.
   * If no end date is given then the end date is set to the end of the start date
   * @param  {number}                          accountId [description]
   * @param  {moment.Moment}                   startDate [description]
   * @param  {moment.Moment}                   endDate   [description]
   * @return {Promise<Entities.Transaction[]>}           [description]
   */
  public findDateRange(accountId: number, startDate?: moment.Moment, endDate?: moment.Moment): Promise<Entities.Transaction[]> {
    if (!startDate || startDate === undefined) {
      startDate = moment().startOf('day');
    }

    if (!endDate || endDate === undefined) {
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
