export interface Factory {

  /**
   * Creates an appropriate Entity from the given data
   * @param  {any}             item Data to create an entity from
   * @return {Promise<Entity>}      A promise to return the new Entity
   */
  item(item: any): Promise<any>;

  /**
   * Creates an array of appropriate Entites from the given data
   * @param  {any[]}             items Array of data to create the Entries from
   * @return {Promise<Entity[]>}       A promise to return the new array of Entities
   */
  items(items: any[]): Promise<any[]>;

}
