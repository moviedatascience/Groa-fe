import axios from 'axios';

const axiosWithAuth = (accessToken) => {

    return axios.create({
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        baseURL: "http://localhost:5000/api/users"
    })
}
export default axiosWithAuth;