import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const START_SEARCH_START = "START_SEARCH_START";
export const START_SEARCH_SUCCESS = "START_SEARCH_SUCCESS";
export const START_SEARCH_FAIL = "START_SEARCH_FAIL";

export function searchAction(id, query, token) {
  return (dispatch) => {
    dispatch({
      type: START_SEARCH_START,
    });
    axiosWithAuth(token)
      .post(`/${id}/search`, query)
      .then((res) => {
        dispatch({
          type: START_SEARCH_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
        dispatch({
          type: START_SEARCH_FAIL,
          payload: err,
        });
      });
  };
}
