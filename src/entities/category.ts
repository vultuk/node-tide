import * as Interfaces from "../interfaces";

export class Category implements Interfaces.Category {

  /**
   * The ID used for the category
   */
  public id: number;

  /**
   * The name of the category
   */
  public name: string;

  /**
   * An extra type field to show the type of the category
   */
  public type: string;

}
