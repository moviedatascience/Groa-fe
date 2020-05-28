import {
    REMOVEFROMWATCHLIST_START,
    REMOVEFROMWATCHLIST_SUCCESS,
    REMOVEFROMWATCHLIST_FAIL,
} from '../actions/removeWatchListAction'

const initialState = {
    movies: [],
    isRemoving: false,
    error: '',
}
export const removewatchlist = (state = initialState, action) => {
    switch (action.type) {
        case REMOVEFROMWATCHLIST_START:
            return {
                ...state,
                isRemoving: true,
            };
        case REMOVEFROMWATCHLIST_SUCCESS:
            return {
                ...state,
                isRemoving: false,
            };
        case REMOVEFROMWATCHLIST_FAIL:
            return {
                ...state,
                isRemoving: false,
                error: action.payload,
            };
        default:
            return state;
    }
}