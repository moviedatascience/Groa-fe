import {
    FETCHING_USER_REGISTER_SUCCESS,
    FETCHING_USER_REGISTER_FAIL
  } from "../actions/registerAction";
  
  const initialState = {
    registerSuccess: false,
    error: ""
  };
  
  export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      //LOGIN SUCCESS
      case FETCHING_USER_REGISTER_SUCCESS:
        return {
          ...state,
          registerSuccess: true
        };
  
      //LOGIN FAIL
      case FETCHING_USER_REGISTER_FAIL:
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  };