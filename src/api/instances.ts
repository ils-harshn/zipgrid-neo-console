import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});

api.interceptors.request.use(
  function (config) {
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
