import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    //baseURL: "https://dev.groa.us/api/users",
    baseURL: "http://localhost:4000/api/users",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;