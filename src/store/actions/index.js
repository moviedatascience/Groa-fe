import { loginAction } from "./loginAction.js";
import { ratingAction, getRatingAction } from "./ratingAction.js";
import { registerAction } from "./registerAction.js";
import { recommendationAction, recommendedAction } from "./recommendationActions.js";
import { uploadAction, toggleIsUploaded } from "./uploadAction.js";
import {
  addToWatchlistAction,
  removeFromWatchlistAction,
  getWatchlistAction
} from "./watchlistActions.js";
import { getMoviesAction } from "./movieAction"
import { setFilter } from "./filterActions.js"; 


export {
  loginAction,
  ratingAction,
  registerAction,
  recommendationAction,
  recommendedAction,
  uploadAction,
  toggleIsUploaded,
  getRatingAction,
  addToWatchlistAction,
  removeFromWatchlistAction,
  getWatchlistAction,
  getMoviesAction,
  setFilter
};
