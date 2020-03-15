import {
    FETCHING_RECOMMENDATIONS_SUCCESS,
    FETCHING_RECOMMENDATIONS_FAIL
  } from "../actions/recommendationAction";
  
  const initialState = {
    movies: [],
    error: ""
  };
  
  export const recommendations = (state = initialState, action) => {
    switch (action.type) {
      //RECOMMENDATIONS SUCCESS
      case FETCHING_RECOMMENDATIONS_SUCCESS:
        return {
          ...state,
          movies: action.payload
        };
  
      //RECOMMENDATIONS FAIL
      case FETCHING_RECOMMENDATIONS_FAIL:
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  