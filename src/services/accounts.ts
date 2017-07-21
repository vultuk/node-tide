import { Service } from "../services/service"
import { AccountTransformer } from "../transformers";
import { Account } from "../types";

export class Accounts extends Service {

  public all(companyId: number): Promise<Account[]> {
    return this.getRequest(`/external/companies/${companyId}/accounts`, {})
      .then(response => (new AccountTransformer).items(response))
  }

}
