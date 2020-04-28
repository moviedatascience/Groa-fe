import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const FETCHING_RECOMMENDATIONS_START = "FETCHING_RECOMMENDATIONS_START";
export const FETCHING_RECOMMENDATIONS_SUCCESS =
  "FETCHING_RECOMMENDATIONS_SUCCESS";
export const FETCHING_RECOMMENDATIONS_FAIL = "FETCHING_RECOMMENDATIONS_FAIL";

// RECOMMENDATIONS
// this call requests new recommendations be inserted into the database, then returns latest
export function recommendationAction(id) {
  return (dispatch) => {
    dispatch({
      type: FETCHING_RECOMMENDATIONS_START,
    });
    axiosWithAuth()
      .get(`/${id}/recommendations`)
      .then((res) => {
        console.log(res);
        dispatch({
          type: FETCHING_RECOMMENDATIONS_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        console.log("ERROR: ", err);
        dispatch({
          type: FETCHING_RECOMMENDATIONS_FAIL,
          payload: err,
        });
      });
  };
}