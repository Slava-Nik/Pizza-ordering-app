import axios from "axios";
import config from "../config";

const resource = `${config.axios.baseURL}/products`;

export default {
  getProducts() {
    return axios.get(resource);
  },
};
