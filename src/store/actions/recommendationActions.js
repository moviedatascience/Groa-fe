import axios from "axios";
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
    axios
      .post(
        "https://ds.groa.us/recommendations",
        {
          user_id: id,
          num_recs: 50,
          good_threshold: 3.5,
          bad_threshold: 2.5,
          harshness: 1,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res);
        dispatch({
          type: FETCHING_RECOMMENDATIONS_SUCCESS,
          payload: res.data,
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
