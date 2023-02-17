import axios from "axios";
import qs from "qs";

const HOSTNAME = `${process.env.BACKEND_PROTOCOL}://${process.env.BACKEND_HOST}`;

export default class CallAPI {
  constructor() {
    this.hostname = HOSTNAME;
    this.api_key = process.env.API_KEY;
  }

  getMethod = async (endpoint, query = {}) => {
    console.log('get method', query)
    try {
      const request = axios({
        url: endpoint,
        method: 'get',
        baseURL: this.hostname,
        headers: {},
        params: {
          api_key: this.api_key,
          ...query
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: "repeat" }); // repeat or comma
        },
      })
      return request
    } catch (error) {
      return { error };
    }
  }
}