import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://api.groa.us/api/users",
    headers: {
      "Content-type": "application/json",
      Authorization: `${token}`
    }
  });
};
