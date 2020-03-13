import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
export const FETCHING_USER_LOGIN_SUCCESS = "FETCHING_USER_LOGIN_SUCCESS";
export const FETCHING_USER_LOGIN_FAIL = "FETCHING_USER_LOGIN_FAIL";

// LOGIN
export function loginAction(userCreds, history) {
  console.log("userCreds: ", userCreds);
  return dispatch => {
    axiosWithAuth()
      .post("/login", userCreds)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: FETCHING_USER_LOGIN_SUCCESS, payload: res.data.id });
        history.push(`/${res.data.id}/recommended`);
      })
      .catch(err => {
        console.log("ERROR: ", err);
        dispatch({
          type: FETCHING_USER_LOGIN_FAIL,
          payload: err
        });
      });
  };
};