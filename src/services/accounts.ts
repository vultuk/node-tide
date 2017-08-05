import * as Entities from "../entities";
import * as Factories from "../factories";

import { RequiresService } from "../interfaces/requiresService";

export class Accounts extends RequiresService {

  /**
   * Get a list of all accounts for the given company
   * @param  {number}                      companyId The company ID
   * @return {Promise<Entities.Account[]>}           A promise to return the list of accounts
   */
  public all(companyId: number): Promise<Entities.Account[]> {
    return this.service.getRequest(`/external/companies/${companyId}/accounts`, {})
      .then(response => (new Factories.Account).items(response))
  }

}
