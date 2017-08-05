import * as Entities from "../entities";
import * as Factories from "../factories";

import { RequiresService } from "../interfaces/requiresService";

export class Companies extends RequiresService {

  /**
   * Get a list of all companies available to the given authentication
   * @return {Promise<Entities.Company[]>} A promise to return a list of companies
   */
  public all(): Promise<Entities.Company[]> {
    return this.service.getRequest(`/external/companies`, {})
      .then(response => (new Factories.Company).items(response))
  }

}
