import { combineReducers } from "redux";
import { watchList } from "./watchListReducer.js";
import { dashboardMain } from "./dashboardMain.js";
import { login } from './loginReducer';
import { register } from './registerReducer';

export const reducer = combineReducers({
  watchList,
  dashboardMain,
  login,
  register
});
