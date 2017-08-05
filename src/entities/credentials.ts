import * as Interfaces from "../interfaces";

export class Credentials implements Interfaces.Credentials {
  public accessToken: string;
  public refreshToken: string;
}
