import { FETCHING_USER_LOGIN_SUCCESS } from "./loginAction"
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
export const FETCHING_USER_REGISTER_SUCCESS = "FETCHING_USER_REGISTER_SUCCESS";
export const FETCHING_USER_REGISTER_FAIL = "FETCHING_USER_REGISTER_FAIL";

// REGISTER 
export function registerAction(userCreds, history) {
    console.log("userCreds: ", userCreds);
    console.log("herstory", history)
    let newUser = { 
        user_name: userCreds.user_name, 
        password: userCreds.password 
    }
    return dispatch => {
        axiosWithAuth()
        .post("/register", userCreds)
        .then(res => {
            console.log("response from register", res)
        dispatch({ type: FETCHING_USER_REGISTER_SUCCESS })
        axiosWithAuth()
        .post("/login", newUser)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.token);
            dispatch({ type: FETCHING_USER_LOGIN_SUCCESS, payload: res.data.id });
            history.push(`/${res.data.id}/recommended`);
            }) 
        })
        .catch(err => {
        console.log("ERROR: ", err);
            dispatch({
                type: FETCHING_USER_REGISTER_FAIL,
                payload: err
            });
        });
    }
};