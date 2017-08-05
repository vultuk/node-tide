import * as Entities from "../entities";
import * as Interfaces from "../interfaces";
import * as moment from "moment";

import { Factory } from "../factories/factory";

export class Account extends Factory implements Interfaces.Factory {

  /**
   * Creates an appropriate Entity from the given data
   * @param  {any}             item Data to create an entity from
   * @return {Promise<Entity>}      A promise to return the new Entity
   */
  public item(item: any): Promise<Entities.Account> {
    return Promise.resolve(item)
      .then(item => {
        return {
          id: item.accountId,
          companyId: item.companyId,
          accountNumber: item.accountNumber,
          sortCode: item.sortCode,
          name: item.name,
          balance: item.balance,
          availableBalance: item.availableBalance,
          currencyCode: item.currencyCode,
          createdOn: moment(item.isoCreatedOn),
          updatedOn: moment(item.isoUpdatedOn)
        } as Entities.Account;
      });
  }

}
