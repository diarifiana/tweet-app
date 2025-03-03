import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://helpfulpickle-us.backendless.app/api",
});
