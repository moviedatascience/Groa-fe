import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import {
  recommendationAction,
  toggleIsUploaded,
  setFilter,
} from "../../store/actions/index.js";
// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard from "../movies/MovieCard.js";
// Screen width util
import widthFinder from "../../utils/widthFinder.js";
//for grid
import { GridList } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

}));

function Recommendations({
  isFetching,
  recommendations,
  userid,
  recommendationAction,
  searchTerm,
  isUploaded,
  setFilter,
}) {
  useEffect(() => {
    setFilter("");
    if (isUploaded === true) {
      recommendationAction(userid);
      toggleIsUploaded();
    }
    recommendationAction(userid);
    // Returns the most recent recommendations from the database
  }, [userid, isUploaded, recommendationAction, setFilter]);
  const classes = useStyles();
  const screenWidth = widthFinder(window.innerWidth);

  if (isFetching) return <LoadingScreen />;
  else
    return (
      <GridList
        className={classes.cardGrid}
        cols={screenWidth ? 3 : 5}
        cellHeight="auto"
      >
        {recommendations
          .filter((movie) =>
            searchTerm !== ""
              ? movie.title
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
              <div>
                <MovieCard
                  key={index}
                  rated={null}
                  name={movie.title}
                  year={movie.year}
                  movie_id={movie.movie_id}
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
          })}
      </GridList>
    );
}

const mapStateToProps = (state) => {
  return {
    userid: state.login.userid,
    isFetching: state.recommendations.isFetching,
    recommendations: state.recommendations.movies,
    recommendationsError: state.recommendations.error,
    searchTerm: state.filter.searchTerm,
    isUploaded: state.upload.isUploaded,
  };
};

export default connect(mapStateToProps, {
  recommendationAction,
  toggleIsUploaded,
  setFilter,
})(Recommendations);
