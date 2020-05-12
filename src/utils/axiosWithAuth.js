import axios from 'axios';
// import GetOktaToken from '../config/GetOktaToken';


//baseURL needs to be properly implement once endpoints for login are available

const axiosWithAuth = (accessToken) => {

    // const [ accessToken ] = GetOktaToken();

    return axios.create({
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        baseURL: "http://localhost:8080/api/users"
    })
}


export default axiosWithAuth;