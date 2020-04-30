import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import {
  recommendationAction,
  toggleIsUploaded,
  setFilter,
} from "../../store/actions/index.js";
// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard from "../movies/MovieCard.js";
//for grid
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

  if (isFetching) return <LoadingScreen />;
  else
    return (
      // <div
      //   className="container recommendations"
      //   data-test={ifDev("recommendations-component")}
      // >
      //   <div className="movie-cards">
      <Container className={classes.cardGrid} maxWidth='md'>

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
                <Grid container spacing={4}>

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
                </Grid>
              );
            })}
        {/* </div>
      </div> */}
      </Container>
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
