import axios from 'axios';

//baseURL needs to be properly implement once endpoints for login are available

const axiosWithAuth = (accessToken) => {

    return axios.create({
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        baseURL: "http://dev.groa.us/api/users"
    })
}
export default axiosWithAuth;