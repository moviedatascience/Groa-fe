import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL:
      "http://groaberecommendations-env.eba-jm9gzcte.us-east-1.elasticbeanstalk.com/",
    headers: {
      "Content-type": "application/json",
      Authorization: `${token}`
    }
  });
};
