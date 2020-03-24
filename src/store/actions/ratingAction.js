import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const ADDING_RATING_START = "ADDING_RATING_START";
export const ADDING_RATING_SUCCESS = "ADDING_RATING_SUCCESS";
export const ADDING_RATING_FAIL = "ADDING_RATING_FAIL";

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
