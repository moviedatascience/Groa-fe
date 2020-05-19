import axios from 'axios';

const axiosWithAuth = (accessToken) => {

    return axios.create({
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        baseURL: "process.env.REACT_APP_BASEURL"
    })
}
export default axiosWithAuth;