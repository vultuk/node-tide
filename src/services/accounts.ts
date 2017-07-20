import { Service } from "../services"
import { AccountTransformer } from "../transformers";
import { Account } from "../types";

export class Accounts extends Service {

  public all(companyId: number): Promise<Account[]> {
    return this.getRequest(`/companies/${companyId}/accounts`, {})
      .then(response => (new AccountTransformer).items(response))
  }

}
