import * as Entities from "../entities";
import * as Transformers from "../transformers";

import { Service } from "../services/service";

export class Accounts extends Service {

  public all(companyId: number): Promise<Entities.Account[]> {
    return this.getRequest(`/external/companies/${companyId}/accounts`, {})
      .then(response => (new Transformers.Account).items(response))
  }

}
