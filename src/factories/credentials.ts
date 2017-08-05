import * as Entities from "../entities";
import * as Interfaces from "../interfaces";
import * as moment from "moment";

import { Factory } from "../factories/factory";

export class Credentials extends Factory implements Interfaces.Factory {

  /**
   * Creates an appropriate Entity from the given data
   * @param  {any}             item Data to create an entity from
   * @return {Promise<Entity>}      A promise to return the new Entity
   */
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
