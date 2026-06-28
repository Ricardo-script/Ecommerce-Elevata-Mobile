import { getToken } from "../storage/auth-storage";
import { api } from "./api";

api.interceptors.request.use(
  async (config) => {
    const token = await getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // remover token
      // redirecionar para login
    }

    return Promise.reject(error);
  },
);
