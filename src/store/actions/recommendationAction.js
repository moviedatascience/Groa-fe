import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const FETCHING_RECOMMENDATIONS_START = "FETCHING_RECOMMENDATIONS_START";
export const FETCHING_RECOMMENDATIONS_SUCCESS = "FETCHING_RECOMMENDATIONS_SUCCESS";
export const FETCHING_RECOMMENDATIONS_FAIL = "FETCHING_RECOMMENDATIONS_FAIL";

// RECOMMENDATIONS
export function recommendationAction(id) {
  return dispatch => {
    dispatch({
      type: FETCHING_RECOMMENDATIONS_START
    });
    axiosWithAuth()
    .get(`/${id}/recommended`)
    //.get(`/${id}/recommendations`)
    .then(res => {
        dispatch({
            type: FETCHING_RECOMMENDATIONS_SUCCESS,
            payload: res.data.recommendation_json
        })
    })
    .catch(err => {
        console.log("ERROR: ", err);
        dispatch({
          type: FETCHING_RECOMMENDATIONS_FAIL,
          payload: err
        });
    });
  };
}
