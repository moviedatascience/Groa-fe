import { combineReducers } from "redux";
import { watchListReducer } from "./watchListReducer.js";

export const reducer = combineReducers({
  watchListReducer: watchListReducer
});
