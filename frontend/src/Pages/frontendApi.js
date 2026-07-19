import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const signUpUser = (data) => {
  return API.post("/api/auth/signup", data);
};

export const loginUser = (data) => {
  return API.post("/api/auth/login", data);
};

export const createOrder = (orderData) => {
  return API.post("/api/orders", orderData);
};

export const getAllOrders = () => {
  return API.get("/api/orders");
};

export default API;