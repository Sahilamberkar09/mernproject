const axios = require("axios");

exports.axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:5000/api",
  withCredentials: true,
});
