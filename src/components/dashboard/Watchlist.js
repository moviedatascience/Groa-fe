import React, { useState, useEffect } from "react";
// tools
import { connect } from "react-redux";
import {
  removeFromWatchlistAction,
  getWatchlistAction,
  setFilter,
} from "../../store/actions/index.js";
// Screen width util
import widthFinder from "../../utils/widthFinder.js";

// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard from "../movies/MovieCard.js";

//for grid
import { GridList } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useOktaAuth } from "@okta/okta-react/dist/OktaContext";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  movieCard: {
    "&:hover": {
    boxShadow: '0px 0px 1px 1px black',
    backgroundColor:'black',
    },
  },
}));
function Watchlist({
  userid,
  isFetching,
  isDeleting,
  watchlist,
  getWatchlistAction,
  searchTerm,
  removeFromWatchlistAction,
  setFilter,
  movies,
}) {
  console.log('movies', movies)
  //OKTA AUTH
  const { authState } = useOktaAuth();
  const { accessToken } = authState;

  const [deleteMode, setDeleteMode] = useState(false);
  //for matieral-ui
  const classes = useStyles();
  const screenWidth = widthFinder(window.innerWidth);

  // console.log(classes);
  useEffect(() => {
    setFilter("");
    // Returns the users watchlist from the database
    getWatchlistAction(userid, accessToken);
  }, [getWatchlistAction, userid, isDeleting, setFilter]);

  function handleClick(id) {
    removeFromWatchlistAction(userid, id, accessToken);
  }

  if (isFetching) return <LoadingScreen />;
  else if (isDeleting) return <LoadingScreen />;
  else
    return (
      <GridList
        className={classes.cardGrid}
        cols={screenWidth ? 2 : 5}
        cellHeight="auto"
      >
        {/* <div> */}
        {watchlist
          .filter((movie) =>
            searchTerm !== ""
              ? movie.primary_title
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
              : true
          )
          .map((movie, index) => {
            let posterURI = movie.poster_url;
            let unsplashUrl =
              "https://source.unsplash.com/collection/1736993/500x650";
            let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
            return (
              <div className={classes.movieCard} key={index}>
                <MovieCard
                  key={index}
                  name={movie.primary_title}
                  year={movie.start_year}
                  trailer={movie.trailer_url}
                  description={movie.description}
                  genres={movie.genres}
                  page="watchlist"
                  image={
                    !posterURI ||
                      posterURI === "None" ||
                      posterURI === "No poster" ||
                      posterURI === "No Poster" ||
                      posterURI === "Not in table"
                      ? unsplashUrl
                      : moviePoster
                  }
                  deleteMode={deleteMode}
                  setDeleteMode={setDeleteMode}
                  handleClick={handleClick}
                />
              </div>
            );
          })}
        ;{/* </div> */}
      </GridList>
    );
}

const mapStateToProps = (state) => {
  return {
    userid: state.login.userid,
    isFetching: state.watchlist.isFetching,
    isDeleting: state.watchlist.isDeleting,
    watchlist: state.watchlist.movies,
    watchlistError: state.watchlist.error,
    searchTerm: state.filter.searchTerm,
  };
};
export default connect(mapStateToProps, {
  getWatchlistAction,
  removeFromWatchlistAction,
  setFilter,
})(Watchlist);
