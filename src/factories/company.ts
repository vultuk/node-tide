import * as Entities from "../entities";
import * as Interfaces from "../interfaces";
import * as moment from "moment";

import { Factory } from "../factories/factory";

export class Company extends Factory implements Interfaces.Factory {

  /**
   * Creates an appropriate Entity from the given data
   * @param  {any}             item Data to create an entity from
   * @return {Promise<Entity>}      A promise to return the new Entity
   */
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
