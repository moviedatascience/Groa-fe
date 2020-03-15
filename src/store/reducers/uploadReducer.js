import {
    UPLOADING_FILE_SUCCESS,
    UPLOADING_FILE_FAIL
  } from "../actions/uploadAction";
  const initialState = {
    ratings: [],
    reviews: [],
    watched: [],
    watchlist: [],
    error: ""
  };
  
  export const upload = (state = initialState, action) => {
    switch (action.type) {
      //UPLOAD SUCCESS
      case UPLOADING_FILE_SUCCESS:
        return {
          ...state,
          ratings: action.payload.ratings,
          reviews: action.payload.reviews,
          watched: action.payload.watched,
          watchlist: action.payload.watchlist
        };
  
      //LOGIN FAIL
      case UPLOADING_FILE_FAIL:
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  