import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Attach token automatically in every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ---------------- AUTH APIs ----------------

// SIGNUP API
export const signUpUser = (data) => {
  return API.post("/signup", data);
};

// LOGIN API
export const loginUser = (data) => {
return axios.post("http://localhost:5000/api/auth/login", data);
};
export const createOrder = async(orderData) => {
  return await API.post("/api/orders", orderData);
};

// Get All Orders
export const getAllOrders = async () => {
  return await API.get("/orders");
};