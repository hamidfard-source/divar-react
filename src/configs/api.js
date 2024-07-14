import axios from "axios";
import { getNewToken } from "services/token";
import { getCookie, setCookie } from "utils/cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject("error: header error");
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log("originalRequest: ", originalRequest);
    if (error.response.status === 401 && !originalRequest._Retry) {
      originalRequest._Retry = true;
      const res = await getNewToken();
      if (!res?.response) return;
      setCookie(res.response.data);
      console.log(res);
      return api(originalRequest);
    }
  },
);

export default api;
