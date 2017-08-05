import * as Entities from "../entities";
import * as moment from "moment";

import { Transformer } from "../transformers/transformer";

export class Credentials extends Transformer {

  public item(item: any): Promise<Entities.Credentials> {
    return Promise.resolve(item)
      .then(item => {
        return {
          accessToken: item.access_token,
          refreshToken: item.refresh_token
        } as Entities.Credentials;
      });
  }

}
