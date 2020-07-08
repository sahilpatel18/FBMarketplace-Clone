import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.14:9001/api",
});

export default apiClient