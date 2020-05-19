import {
  START_SEARCH_START,
  START_SEARCH_SUCCESS,
  START_SEARCH_FAIL,
} from "../actions/searchAction.js";

const initialState = {
  queries: [],
  isSearching: false,
  error: "",
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case START_SEARCH_START:
      return {
        ...state,
        isSearching: true,
      };
    case START_SEARCH_SUCCESS:
      return {
        ...state,
        isSearching: false,
        queries: action.payload,
      };
    case START_SEARCH_FAIL:
      return {
        ...state,
        isSearching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
