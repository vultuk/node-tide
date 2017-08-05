import * as Interfaces from "../interfaces";

export abstract class Factory implements Interfaces.Factory {

  /**
   * Creates an appropriate Entity from the given data
   * @param  {any}             item Data to create an entity from
   * @return {Promise<Entity>}      A promise to return the new Entity
   */
  public abstract item(item: any): Promise<any>;

  /**
   * Creates an array of appropriate Entites from the given data
   * @param  {any[]}             items Array of data to create the Entries from
   * @return {Promise<Entity[]>}       A promise to return the new array of Entities
   */
  public items(items: any[]): Promise<any[]> {
    return Promise
      .resolve(items)
      .then(items => Promise.all(items.map(item => this.item(item))));
  }
}
