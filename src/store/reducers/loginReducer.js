import {FETCHING_USER_LOGIN,FETCHING_USER_LOGIN_SUCCESS, FETCHING_USER_LOGIN_FAIL, USER_LOGOUT } from '../actions/loginAction';

const initialState = {
    userData:[],
    isFetching: false,
    error:''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        //FETCHING USER
        case FETCHING_USER_LOGIN:
            return {
                ...state,
                isFetching: true, 
                error: ''
            };

         //LOGIN SUCCESS
        case FETCHING_USER_LOGIN_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                isFetching: false, 
                error: ''
            };
        
        //LOGIN FAIL
        case FETCHING_USER_LOGIN_FAIL:
            return {
                ...state,
                isFetching: false, 
                error: action.payload
            };    

        //Not sure what to do with LOGOUT
        case USER_LOGOUT:
            return {
                ...state,
                isFetching: false, 
                error: ''
            };   
            
            
        default:
            return state; 

    }
}
