import axios from 'axios';

const baseURL = process.env.REACT_APP_BASEURL || 'http://localhost:8080/api/users'

const axiosWithAuth = (accessToken) => {

    return axios.create({
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        baseURL: baseURL
    })
}
export default axiosWithAuth;