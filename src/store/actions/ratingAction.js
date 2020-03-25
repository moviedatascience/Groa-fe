import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const ADDING_RATING_START = "ADDING_RATING_START";
export const ADDING_RATING_SUCCESS = "ADDING_RATING_SUCCESS";
export const ADDING_RATING_FAIL = "ADDING_RATING_FAIL";

export const FETCHING_RATINGS_START = "FETCHING_RATINGS_START";
export const FETCHING_RATINGS_SUCCESS = "FETCHING_RATINGS_SUCCESS";
export const FETCHING_RATINGS_FAIL = "FETCHING_RATINGS_FAIL";



// RATINGS
export function ratingAction(id, rating) {
  return dispatch => {
    dispatch({
      type: ADDING_RATING_START
    });
    axiosWithAuth()
    .post(`/${id}/add-movie-rating`, rating)
    .then(res => {
      console.log(res)
        dispatch({
            type: ADDING_RATING_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log("ERROR: ", err);
        dispatch({
          type: ADDING_RATING_FAIL,
          payload: err
        });
    });
  };
}

//GET RATINGS
export function getRatingAction(id) {
  return dispatch => {
    dispatch({
      type: FETCHING_RATINGS_START
    });
    axiosWithAuth()
    .get(`/${id}/ratings`)
    .then(res => {
        dispatch({
            type: FETCHING_RATINGS_SUCCESS,
            payload: res.data.recommendation_json // RATING JSON HERE
        })
    })
    .catch(err => {
        console.log("ERROR: ", err);
        dispatch({
          type: FETCHING_RATINGS_FAIL,
          payload: err
        });
    });
  };
}