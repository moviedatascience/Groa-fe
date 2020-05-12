import axios from 'axios';

const axiosWithAuth = (accessToken) => {

    return axios.create({
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        baseURL: "http://dev.groa.us/api/users"
    })
}
export default axiosWithAuth;