import CallAPI from "./callApi";


export default class ConfigApi extends CallAPI{
  constructor() {
    super()
  }

  async getConfig(endpoint, query) {
    const req = await this.getMethod(endpoint, query);
    if (req.status === 200) return req.data;
    return req
  }
}