import React, { useEffect, useState } from "react";
// import Onboarding from '../lib';
// import reactOnboardingPro from "react-onboarding-pro";
// import "react-onboarding-pro/build/index.css";
import { connect } from "react-redux";
import { getMoviesAction, setFilter } from "../../store/actions/index.js";
// Screen width util
import widthFinder from "../../utils/widthFinder.js";

// children components
import MovieCard from "../movies/MovieCard.js";
import LoadingScreen from "../layout/LoadingScreen.js";
//for grid
import { GridList } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
//for Link
import { ifDev } from "../../utils/removeAttribute.js";
import { Link } from "react-router-dom";
//for search bar
import { useTheme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

//testing snackbar
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

//okta
import { useOktaAuth } from "@okta/okta-react/dist/OktaContext";

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
  console.log("movies", movies);
  const classes = useStyles();
  //for okta
  const { authState, authService } = useOktaAuth();
  const { accessToken } = authState;

  const [openAlert, setOpenAlert] = useState(false);
  const screenWidth = widthFinder(window.innerWidth);
  //for search bar
  const handleSubmit = (e) => {
    if (e.keyCode === 13 && query.query !== "") props.setFilter(e.target.value);
  };
  const [query, setQuery] = useState({
    query: "",
  });

  const sendChange = (query) => {
    props.setFilter(query);
  };

  const handleChange = (e) => {
    setQuery({ query: e.target.value });
    sendChange(e.target.value.trim());
  };
  const handleClickStar = () => {
    setOpenAlert(true);
    console.log("openalert");
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
  }, [getMoviesAction, userid, ratings, setFilter]);
  // How many movies render
  const cardAmount = 25;
  // console.log("open alert is now ", openAlert);
  if (isFetching) return <LoadingScreen />;
  else
    return (
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
                <div>
                  <MovieCard
                    key={index}
                    name={movie.primary_title}
                    page={"Onboarding"}
                    // year={movie.start_year}
                    // trailer={movie.trailer_url}
                    // description={movie.description}
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
                  />
                </div>
              );
            })}
        </GridList>
        {/* <Link className={classes.Link} to={`/${props.userid}/Onboarding2`}>
          Next
        </Link> */}
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleCloseStar}
        >
          <Alert onClose={handleCloseStar} variant="outlined" severity="success">
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
  };
};
export default connect(mapStateToProps, {
  getMoviesAction,
  setFilter,
})(Onboarding);
