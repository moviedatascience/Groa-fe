import { axiosWithAuth } from '../../utils/axiosWithAuth';
import constants from '../constants';

export const Login = (userId) => { 
    return {type: constants.USER_LOGIN , payload: userId}
}

