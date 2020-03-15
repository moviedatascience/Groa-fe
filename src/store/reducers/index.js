import { combineReducers } from "redux";
import { login } from './loginReducer';
import { register } from './registerReducer';
import { recommendations } from './recommendationReducer';

export const reducer = combineReducers({
  login,
  register,
  recommendations
});
