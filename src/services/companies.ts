import { Service } from "../services/service"
import { CompanyTransformer } from "../transformers";
import { Company } from "../types";

export class Companies extends Service {

  public all(): Promise<Company[]> {
    return this.getRequest(`/external/companies`, {})
      .then(response => (new CompanyTransformer).items(response))
  }

}
