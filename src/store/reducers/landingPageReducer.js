import {
    FETCHING_LANDING_MOVIES_START,
    FETCHING_LANDING_MOVIES_SUCCESS,
    FETCHING_LANDING_MOVIES_FAIL,
} from "../actions/landingPageAction";


const initialState = {
    landingMovies: [],
    landingMoviesRec: [],
    isFetching: false,
    error: ""
};


export const landingPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_LANDING_MOVIES_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCHING_LANDING_MOVIES_SUCCESS:
            return {
                ...state,
                landingMovies: action.payload.data,
                landingMoviesRec: action.payload.recs,
                isFetching: false,
            }
        case FETCHING_LANDING_MOVIES_FAIL: 
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default:
            return state;
    }
}