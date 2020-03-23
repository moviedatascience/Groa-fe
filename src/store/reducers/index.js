import { combineReducers } from "redux";
import { login } from './loginReducer';
import { rating } from './ratingReducer';
import { register } from './registerReducer';
import { recommendations } from './recommendationReducer';
import { upload } from './uploadReducer';

export const reducer = combineReducers({
  login,
  rating,
  register,
  recommendations,
  upload
});