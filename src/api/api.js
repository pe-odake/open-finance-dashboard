import axios from "axios";

const prod = import.meta.env.VITE_PROD === "true";
const API_URL = prod
  ? import.meta.env.VITE_URL_DEPLOY
  : import.meta.env.VITE_URL_LOCAL;

const api = axios.create({
    baseURL: API_URL,
    timeout: 2000,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use((config) => {
    const isAuthRoute = config.url?.startsWith("/auth");
    const token = localStorage.getItem("token");
    if (token && !isAuthRoute) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;