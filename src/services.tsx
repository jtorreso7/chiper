import axios from "axios";
import humps from "humps";

import { ITEMS_PER_PAGE, BASE_URL } from "./const";
import { logger } from "./utility";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (config.data) {
    config.data = humps.decamelizeKeys(config.data);
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    response.data = humps.camelizeKeys(response.data);
    return response;
  },
  (error) => {
    const { response } = error;
    logger.log("Error :", {
      status: response.status,
      message: response.data.message,
    });
    return Promise.reject(response.data.message);
  }
);

const search = async (query: string, page: number) => {
  try {
    const response = await axiosInstance({
      method: "get",
      url: `/search?location=Berlin&per_page=${ITEMS_PER_PAGE}&page=${page}&query=${query}&access_token=S6Khp0Ja1_328-GLafr7Z16KXxiJ6dya8t3HxYtT3t4`,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

const searchFetch = async (query: string = "", page: number = 1) => {
  try {
    const response = await window
      .fetch(`http://54.211.49.192/api.php?page=${page}&query=${query}`)
      .then((res) => {
        return res.json();
      })
      .catch((e) => {
        throw Error(e);
      });

    return { ...response };
  } catch (error) {
    throw error;
  }
};

export { search, searchFetch };
