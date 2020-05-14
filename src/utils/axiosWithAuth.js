import axios from 'axios';

const axiosWithAuth = (accessToken) => {

    return axios.create({
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        baseURL: `https://www.dev.groa.us/api/users`
       })
}
export default axiosWithAuth;