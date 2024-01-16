import axios from "axios";
import webTokenStorer from "../webStorer";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});

api.interceptors.request.use(
  function (config) {
    let token = webTokenStorer.getToken();

    if (token?.access_token) {
      config.headers["Authorization"] = `Bearer ${token.access_token}`;
    }
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
