import { combineReducers } from "redux";
<<<<<<< HEAD
import { login } from "./loginReducer";
import { rating } from "./ratingReducer";
import { register } from "./registerReducer";
import { recommendations } from "./recommendationReducer";
import { upload } from "./uploadReducer";
import { filter } from "./filterReducer";
import { watchlist } from "./watchlistReducer";
import { movie } from "./movieReducer";
import { search } from "./searchReducer";
=======
import { login } from './loginReducer';
import { rating } from './ratingReducer';
import { register } from './registerReducer';
import { recommendations } from './recommendationReducer';
import { upload } from './uploadReducer';
import { filter } from './filterReducer'; 
import { watchlist } from './watchlistReducer';
import { movie } from './movieReducer';
import { notwatchlist } from './notWatchListReducer';
>>>>>>> 03a852403abb46cc3a4c36ade92ec57eec797ff9

export const reducer = combineReducers({
  login,
  rating,
  register,
  recommendations,
  upload,
  movie,
<<<<<<< HEAD
  filter,
  watchlist,
  search,
});
=======
  filter, 
  watchlist,
  notwatchlist,
});
>>>>>>> 03a852403abb46cc3a4c36ade92ec57eec797ff9
