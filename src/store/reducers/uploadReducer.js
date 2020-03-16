import {
    UPLOADING_FILE_START,
    UPLOADING_FILE_SUCCESS,
    UPLOADING_FILE_FAIL
  } from "../actions/uploadAction";
  const initialState = {
    isUploading: false,
    ratings: [],
    reviews: [],
    watched: [],
    watchlist: [],
    error: ""
  };
  
  export const upload = (state = initialState, action) => {
    switch (action.type) {
      //UPLOAD START
      case UPLOADING_FILE_START:
        return {
          ...state,
          isUploading: true
        }
      //UPLOAD SUCCESS
      case UPLOADING_FILE_SUCCESS:
        return {
          ...state,
          isUploading: false,
          ratings: action.payload.ratings,
          reviews: action.payload.reviews,
          watched: action.payload.watched,
          watchlist: action.payload.watchlist
        };
      //LOGIN FAIL
      case UPLOADING_FILE_FAIL:
        return {
          ...state,
          isUploading: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  