// import axios from "axios";

// const instance = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL,
//   withCredentials: true,
// });

// // Optional: attach token automatically
// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default instance;



import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // http://localhost:5000/api
  withCredentials: true, // 🔥 MUST stay true
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
