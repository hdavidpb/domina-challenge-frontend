import axios from "axios";

import { localStorageService } from "../src/services/";

export const apiRest = axios.create({
  baseURL: "http://127.0.0.1:3001/api",
});

apiRest.interceptors.request.use(
  (config) => {
    const token = localStorageService.getAccesToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
