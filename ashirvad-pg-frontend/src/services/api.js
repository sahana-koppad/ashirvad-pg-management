import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-13-61-146-142.eu-north-1.compute.amazonaws.com:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;