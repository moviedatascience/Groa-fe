import {
    FETCHING_RECOMMENDATIONS_START,
    FETCHING_RECOMMENDATIONS_SUCCESS,
    FETCHING_RECOMMENDATIONS_FAIL,
    FETCHING_RECOMMENDED_START,
    FETCHING_RECOMMENDED_SUCCESS,
    FETCHING_RECOMMENDED_FAIL
  } from "../actions/recommendationActions";
  
  const initialState = {
    isFetching: false,
    movies: [],
    error: ""
  };
  
  export const recommendations = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_RECOMMENDATIONS_START:
        return {
          ...state,
          isFetching: true
        }
      //RECOMMENDATIONS SUCCESS
      case FETCHING_RECOMMENDATIONS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          movies: action.payload
        };
  
      //RECOMMENDATIONS FAIL
      case FETCHING_RECOMMENDATIONS_FAIL:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  export const recommended = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_RECOMMENDED_START:
        return {
          ...state,
          isFetching: true
        }
      //RECOMMENDED SUCCESS
      case FETCHING_RECOMMENDED_SUCCESS:
        return {
          ...state,
          isFetching: false,
          movies: action.payload
        };
  
      //RECOMMENDED FAIL
      case FETCHING_RECOMMENDED_FAIL:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  