import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMoviesAction, getRatingAction, setFilter } from "../../store/actions/index.js";
// Screen width util
import widthFinder from "../../utils/widthFinder.js";
// children components
import MovieCard from "../movies/MovieCard.js";
import LoadingScreen from "../layout/LoadingScreen.js";
//for grid
import { GridList } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

//testing snackbar
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//okta
import { useOktaAuth } from "@okta/okta-react/dist/OktaContext";
import { Redirect } from 'react-router';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#505050",
    "&:hover": {
      // backgroundColor: '#5c5b5b',
      color: "#D8D8D8",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#5c5b5b",
    "&:hover": {
      backgroundColor: "#5c5b5b",
      color: "#ffffff",
    },
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  searchContainer: {
    width: "40%",
    margin: "auto",
    // backgroundColor: '#505050',
    paddingTop: "4%",
  },
  [theme.breakpoints.down("xs")]: {
    searchContainer: {
      width: "90%",
    },
  },
  Link: {
    marginBottom: "2%",
  },
  movieCard: {
    color: 'white',
    "&:hover": {
      boxShadow: '0px 0px 2px 2px black',
      backgroundColor: 'black',
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Onboarding(
  {
    isFetching,
    movies,
    userid,
    getMoviesAction,
    searchTerm,
    setFilter,
    ratings,
  },
  props
) {
  // console.log("movies", movies);
  const classes = useStyles();
  //for okta
  const { authState } = useOktaAuth();
  const { accessToken } = authState;

  const [openAlert, setOpenAlert] = useState(false);
  let [numRatings, setNumRatings] = useState({ num: 0 });
  const screenWidth = widthFinder(window.innerWidth);
  //for search bar
  const [query, setQuery] = useState({
    query: "",
  });

  const sendChange = (query) => {
    props.setFilter(query);
  };

  const handleClickStar = () => {
    setOpenAlert(true);

  };
  const handleCloseStar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  useEffect(() => {
    setFilter("");
    // Returns the movies
    getMoviesAction(userid, accessToken);
  }, [getMoviesAction, userid, ratings, setFilter,]);
  // How many movies render
  const cardAmount = 25;

  if (isFetching) return <LoadingScreen />;
  else if (numRatings.num >= 13) return <Redirect to='postonboarding' />
  else return (
    <div>
      <GridList
        className={classes.cardGrid}
        cols={screenWidth ? 3 : 5}
        cellHeight="auto"
      >
        {movies
          .filter((movie) =>
            !ratings.includes(
              (film) =>
                film.primary_title === movie.primary_title &&
                film.start_year === movie.start_year
            ).length && searchTerm !== ""
              ? movie.primary_title
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
              : true
          )
          .slice(0, cardAmount)
          .map((movie, index) => {
            /* Checks if the film is in ratings */
            const isRated = (film) => {
              return (
                film.primary_title === movie.primary_title &&
                film.start_year === movie.start_year
              );
            };
            /* Returns the movie object if in ratings */
            let rated = ratings.find(isRated);
            let posterURI = movie.poster_url;
            let unsplashUrl =
              "https://source.unsplash.com/collection/1736993/500x650";
            let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
            return (
              <div className={classes.movieCard}>
                <MovieCard
                  key={index}
                  name={movie.primary_title}
                  page={"Onboarding"}
                  movie_id={movie.movie_id}
                  rated={rated ? rated.rating : null}
                  image={
                    !posterURI ||
                      posterURI === "None" ||
                      posterURI === "No poster" ||
                      posterURI === "No Poster" ||
                      posterURI === "Not in table"
                      ? unsplashUrl
                      : moviePoster
                  }
                  handleClickStar={handleClickStar}
                  numRatings={numRatings}
                  setNumRatings={setNumRatings}
                />
              </div>
            );
          })}
      </GridList>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleCloseStar}
      >
        <Alert onClose={handleCloseStar} variant="filled" severity="success">
          You have successfully rated this movie!
        </Alert>
      </Snackbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userid: state.login.userid,
    isFetching: state.movie.isFetching,
    movies: state.movie.movies,
    moviesError: state.movie.error,
    searchTerm: state.filter.searchTerm,
    watchlist: state.watchlist.movies,
    ratings: state.rating.movies,
    ratingsError: state.rating.error,
  };
};
export default connect(mapStateToProps, {
  getMoviesAction,
  setFilter,
  getRatingAction
})(Onboarding);
