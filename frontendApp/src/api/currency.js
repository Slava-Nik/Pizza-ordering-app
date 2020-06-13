import axios from "axios";
import config from "../config";

const resource = `${config.axios.baseURL}/currency`;

export default {
  getCurrencyRates() {
    return axios.get(resource);
  },
};
