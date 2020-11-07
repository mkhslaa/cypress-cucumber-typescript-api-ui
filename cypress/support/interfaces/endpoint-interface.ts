export interface Endpoint {
    method: string,
    route: string | RegExp;
    alias: string;
  }