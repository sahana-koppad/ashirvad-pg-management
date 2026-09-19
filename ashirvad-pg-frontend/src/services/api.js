import axios from "axios";

const api = axios.create({
  baseURL: "https://boston-animation-propecia-life.trycloudflare.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;