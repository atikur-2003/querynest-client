import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://assignment-11-server-blush-phi.vercel.app",
  // baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
