import axiosWithAuth from "../../utils/axiosWithAuth.js";
export const REMOVEFROMWATCHLIST_START = 'REMOVEFROMWATCHLIST_START';
export const REMOVEFROMWATCHLIST_SUCCESS = 'REMOVEFROMWATCHLIST_SUCCESS';
export const REMOVEFROMWATCHLIST_FAIL = 'REMOVEFROMWATCHLIST_FAIL';

export function removeWatchListAction(id, movie_id, token) {
    console.log('mvie id', movie_id)
    return(dispatch) => {
        dispatch({
            type: REMOVEFROMWATCHLIST_START,
        });
        axiosWithAuth(token)
        .post(`/watchlist/${id}/remove/${movie_id}`)
        .then( res => {
            dispatch({
                type: REMOVEFROMWATCHLIST_SUCCESS,
                payload: res.data,
            });
            console.log('data from front end',res.data);
        })
        .catch( err => {
            dispatch({
                type: REMOVEFROMWATCHLIST_FAIL,
                payload: err
            })
        })
    }
}