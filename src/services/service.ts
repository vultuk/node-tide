
const url: string = "https://api.tide.co/tide-backend/rest/api/v1/external";

export class Service {

  protected postRequest(path: string, data: any): Promise<any> {
    return this.performRequest('POST', path, data);
  }

  protected getRequest(path: string, data: any): Promise<any> {
    return this.performRequest('GET', path, data);
  }

  protected performRequest(type: string, path: string, data: any): Promise<any> {
    return Promise
      .resolve({ endpoint: `${url}${path}`, data: data})
      .then(({endpoint, data}) => {
        
      });
  }

}
