import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const ADDING_WATCHLIST_START = "ADDING_WATCHLIST_START";
export const ADDING_WATCHLIST_SUCCESS = "ADDING_WATCHLIST_SUCCESS";
export const ADDING_WATCHLIST_FAIL = "ADDING_WATCHLIST_FAIL";

export const REMOVING_FROM_WATCHLIST_START = "REMOVING_FROM_WATCHLIST_START";
export const REMOVING_FROM_WATCHLIST_SUCCESS = "REMOVING_FROM_WATCHLIST_SUCCESS";
export const REMOVING_FROM_WATCHLIST_FAIL = "REMOVING_FROM_WATCHLIST_FAIL";

export const FETCHING_WATCHLIST_START = "FETCHING_WATCHLIST_START";
export const FETCHING_WATCHLIST_SUCCESS = "FETCHING_WATCHLIST_SUCCESS";
export const FETCHING_WATCHLIST_FAIL = "FETCHING_WATCHLIST_FAIL";

// ADD TO WATCHLIST
export function addToWatchlistAction(id, movie) {
  return dispatch => {
    dispatch({
      type: ADDING_WATCHLIST_START
    });
    axiosWithAuth()
      .post(`/${id}/add-to-watchlist`, movie)
      .then(res => {
        dispatch({
          type: ADDING_WATCHLIST_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ADDING_WATCHLIST_FAIL,
          payload: err
        });
      });
  };
}

// GET WATCHLIST
export function getWatchlistAction(id) {
  return dispatch => {
    dispatch({
      type: FETCHING_WATCHLIST_START
    });
    axiosWithAuth()
      .get(`/${id}/get-watchlist`)
      .then(res => {
        dispatch({
          type: FETCHING_WATCHLIST_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: FETCHING_WATCHLIST_FAIL,
          payload: err
        });
      });
  };
}

// DELETE FROM WATCHLIST
export function removeFromWatchlistAction(user_id, watchlist_id) {
  return dispatch => {
    dispatch({
      type: REMOVING_FROM_WATCHLIST_START
    });
    axiosWithAuth()
      .delete(`/${user_id}/remove-from-watchlist/${watchlist_id}`)
      .then(res => {
        console.log(res);
        dispatch({
          type: REMOVING_FROM_WATCHLIST_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log("ERROR: ", err);
        dispatch({
          type: REMOVING_FROM_WATCHLIST_FAIL,
          payload: err
        });
      });
  };
}
