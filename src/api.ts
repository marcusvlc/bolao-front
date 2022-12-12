import axios from "axios";

const objAxiosConfig = {
  baseURL: process.env.VUE_APP_BASE_API_URL,
};

console.log(process.env.VUE_APP_BASE_API_URL);
const api = axios.create(objAxiosConfig);

export default api;
