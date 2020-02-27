import axios from 'axios'

export const axiosWithAuth = () => { 
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://stylingbranch-groa-be.herokuapp.com/api/users',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `${token}`
        }
    })
}