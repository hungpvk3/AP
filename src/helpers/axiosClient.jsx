import axios from "axios";

const instance = axios.create({
  baseURL: "https://ap-sever.herokuapp.com",
  headers: {
    "content-type": "application/json",
  },
});

// instance.interceptors.request.use((config) => {
//   config.headers.common.Authorization = `Bearer ${token}`;
// });

instance.interceptors.response.use((res) => {
  return res.data;
});

export default instance;
