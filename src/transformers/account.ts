import * as Entities from "../entities";
import * as moment from "moment";

import { Transformer } from "../transformers/transformer";

export class Account extends Transformer {

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
