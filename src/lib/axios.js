import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {

    config.headers.Authorization =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyOGFlNDFkMy05NzM2LTQzZjAtOGM3YS0wMmViZTY0ZDk5MzYiLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6InB1cm5hc3Jpbml2YXNrb3BwaXNldHRpQGdtYWlsLmNvbSIsImV4cCI6MTc4MDQ3Nzc4Nn0.SUbsaNt0mF5UcJS-iNKIWQpGPB9t1sg532zhyhW6H8I";

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;