import * as Entities from "../entities";
import * as Transformers from "../transformers";

import { Service } from "../services/service"

export class Companies extends Service {

  public all(): Promise<Entities.Company[]> {
    return this.getRequest(`/external/companies`, {})
      .then(response => (new Transformers.Company).items(response))
  }

}
