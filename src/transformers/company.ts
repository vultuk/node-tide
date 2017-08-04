import * as Entities from "../entities";
import * as moment from "moment";

import { Transformer } from "../transformers/transformer";

export class Company extends Transformer {

  public item(item: any): Promise<Entities.Company> {
    return Promise.resolve(item)
      .then(item => {
        return {
          id: item.companyId,
          number: item.number,
          name: item.name,
          sicCode: item.sicCode,
          vatNumber: item.vatNumber,
          tradingName: item.tradingName,
          registered: item.registered,
          createdOn: moment(item.isoCreatedOn),
          updatedOn: moment(item.isoUpdatedOn)
        } as Entities.Company;
      });
  }

}
