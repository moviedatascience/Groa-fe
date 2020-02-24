import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    //need env file for line 6?
    //var key = process.env.REACT_APP_KEY
    return axios.create({
        baseURL:'http://groabe-env.v3umry9g8h.us-east-1.elasticbeanstalk.com/',
        headers: {
            Authorization: token 
        }
    });
};

export default axiosWithAuth;