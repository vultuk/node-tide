import * as request from "request-promise-native";

const url: string = "https://api.tide.co/tide-backend/rest/api/v1";

export class Service {
  private accessToken: string = undefined;

  public setAccessToken(accessToken: string): this {
    this.accessToken = accessToken;

    return this;
  }

  protected postRequest(path: string, data: any): Promise<any> {
    return this.performRequest('POST', path, data);
  }

  protected getRequest(path: string, data: any): Promise<any> {
    return this.performRequest('GET', path, data);
  }

  protected performRequest(type: string, path: string, data: any): Promise<any> {
    return Promise
      .resolve({ endpoint: `${url}${path}`, data: data})
      .then(({endpoint, data}) => request({
        method: type,
        uri: endpoint,
        headers: this.accessToken === undefined ? {} : {
          Authorization: `Bearer ${this.accessToken}`
        },
        body: data,
        json: true
      }));
  }

}
