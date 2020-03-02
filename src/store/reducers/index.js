import { combineReducers } from "redux";
import { watchListReducer } from "./watchListReducer.js";
import { dashboardMain } from "./dashboardMain.js";


export const reducer = combineReducers({
  watchListReducer: watchListReducer,
  dashboardMain: dashboardMain
});
