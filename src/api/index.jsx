import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-backend-app-38ez.onrender.com/api/",
});
export default api;
