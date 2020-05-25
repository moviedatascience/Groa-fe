import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const ADDING_NOTWATCHLIST_START = "FETCHING_ADDING_START";
export const ADDING_NOTWATCHLIST_SUCCESS =
  "ADDING_NOTWATCHLIST_SUCCESS";
export const ADDING_NOTWATCHLIST_FAIL = "ADDING_NOTWATCHLIST_FAIL";

export function notWatchListAction(id, movie, token) {
    return(dispatch) => {
        dispatch({
            type: ADDING_NOTWATCHLIST_START,
        });
        axiosWithAuth(token)
        .post(`/notwatchlist`, id, movie)
        .then((res) => {
            console.log('this is the res of notwatchlist', res)
            dispatch({
                type: ADDING_NOTWATCHLIST_SUCCESS,
                payload:res.data,
            });
        })
        .catch((err) => {
            console.log("ERROR:", err);
            dispatch({
                type: ADDING_NOTWATCHLIST_FAIL,
                payload: err
            })
        })
    }
}
