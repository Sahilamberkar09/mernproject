const axios = require("axios");

export const axiosInstance = axios.create({
  baseURL: process.env.Base_URL || "http://localhost:5000/api",
  withCredentials: true,
});
