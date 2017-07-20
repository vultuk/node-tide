import * as moment from "moment";

import { Transformer } from "../transformers";
import { Company } from "../types";

export class CompanyTransformer extends Transformer {

  public item(item: any): Promise<Company> {
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
        } as Company;
      });
  }

}
