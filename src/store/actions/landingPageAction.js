import axiosWithAuth from "../../utils/axiosWithAuth.js";


export const FETCHING_LANDING_MOVIES_START = "FETCHING_LANDING_MOVIES_START";
export const FETCHING_LANDING_MOVIES_SUCCESS = "FETCHING_LANDING_MOVIES_SUCCESS";
export const FETCHING_LANDING_MOVIES_FAIL = "FETCHING_LANDING_MOVIES_FAIL";



export function landingPageAction(movie_list_id){

    return dispatch => {
        dispatch({ 
            type: FETCHING_LANDING_MOVIES_START 
        });

        axiosWithAuth()
            .post(`/landingpage`, {id:movie_list_id})
            .then(res => {
                dispatch({
                    type: FETCHING_LANDING_MOVIES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCHING_LANDING_MOVIES_FAIL,
                    payload: err
                })
            })
    }
}

