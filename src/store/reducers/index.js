import { combineReducers } from "redux";
import { watchListReducer } from "./watchListReducer.js";
import { dashboardMain } from "./dashboardMain.js";
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';

export const reducer = combineReducers({
  watchListReducer: watchListReducer,
  dashboardMain: dashboardMain,
  loginReducer: loginReducer,
  registerReducer: registerReducer
});
