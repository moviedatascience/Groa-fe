import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { getRatingAction, setFilter } from "../../store/actions/index.js";
// Screen width util
import widthFinder from "../../utils/widthFinder.js";
// children components
import MovieCard from "../movies/MovieCard.js";
import LoadingScreen from "../layout/LoadingScreen.js";
//for grid
import { makeStyles } from '@material-ui/core/styles';
import { GridList } from "@material-ui/core/";
import { useOktaAuth } from "@okta/okta-react/dist/OktaContext";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  movieCard:{
    border:'2px solid red'
  },
}));
function Ratings({
  userid,
  isFetching,
  getRatingAction,
  ratings,
  searchTerm,
  setFilter,
}) {
  //OKTA AUTH
  const { authState, authService } = useOktaAuth();
  const {accessToken} = authState;
  //for sizing of the movie cards
  const classes = useStyles();
  const screenWidth = widthFinder(window.innerWidth);
  useEffect(() => {
    setFilter("");
    // Returns the ratings
    getRatingAction(userid, accessToken);
  }, [getRatingAction, userid, setFilter]);
  console.log(`here + ${screenWidth}`);
  // console.log(classes);
  console.log("ratings length " + ratings.length);

  if (isFetching) return <LoadingScreen />;
  else
    return (
      <GridList
        className={classes.cardGrid}
        cols={screenWidth ? 3 : 5}
        cellHeight="auto"
      >
        {ratings
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
              <div key={index} className={classes.movieCard}>
                <MovieCard
                  key={index}
                  name={movie.primary_title}
                  movie_id={movie.movie_id}
                  year={movie.start_year}
                  rated={movie.rating}
                  description={movie.description}
                  trailer={movie.trailer_url}
                  genres={movie.genres}
                  image={
                    !posterURI ||
                      posterURI === "None" ||
                      posterURI === "No poster" ||
                      posterURI === "No Poster" ||
                      posterURI === "Not in table"
                      ? unsplashUrl
                      : moviePoster
                  }
                />
              </div>
            );
          }
          )}
      </GridList>
    );
}

const mapStateToProps = (state) => {
  return {
    userid: state.login.userid,
    isFetching: state.rating.isFetching,
    ratings: state.rating.movies,
    ratingsError: state.rating.error,
    searchTerm: state.filter.searchTerm,
  };
};
export default connect(mapStateToProps, { getRatingAction, setFilter })(
  Ratings
);
