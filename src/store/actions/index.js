import { loginAction } from "./loginAction.js";
import { ratingAction, getRatingAction } from "./ratingAction.js";
import { registerAction } from "./registerAction.js";
import { recommendationAction } from "./recommendationActions.js";
import { uploadAction, toggleIsUploaded } from "./uploadAction.js";
import {
  addToWatchlistAction,
  removeFromWatchlistAction,
  getWatchlistAction,
} from "./watchlistActions.js";
<<<<<<< HEAD
import { getMoviesAction } from "./movieAction";
import { setFilter } from "./filterActions.js";
import { searchAction } from "./searchAction.js";
=======
import { getMoviesAction } from "./movieAction"
import { setFilter } from "./filterActions.js"; 
import {notWatchListAction} from './notWatchListAction.js';

>>>>>>> 03a852403abb46cc3a4c36ade92ec57eec797ff9

export {
  loginAction,
  ratingAction,
  registerAction,
  recommendationAction,
  uploadAction,
  toggleIsUploaded,
  getRatingAction,
  addToWatchlistAction,
  removeFromWatchlistAction,
  getWatchlistAction,
  getMoviesAction,
  setFilter,
<<<<<<< HEAD
  searchAction,
=======
  notWatchListAction
>>>>>>> 03a852403abb46cc3a4c36ade92ec57eec797ff9
};
