import { combineReducers } from "redux";
import { login } from './loginReducer';
import { register } from './registerReducer';

export const reducer = combineReducers({
  login,
  register
});
