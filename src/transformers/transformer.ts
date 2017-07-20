export abstract class Transformer {
  public abstract item(item: any): Promise<any>;

  public items(items: any[]): Promise<any[]> {
    return Promise
      .resolve(items)
      .then(items => Promise.all(items.map(item => this.item(item))));
  }
}
