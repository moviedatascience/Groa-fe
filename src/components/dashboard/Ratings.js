import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import { getRatingAction, setFilter } from "../../store/actions/index.js";
// children components
import MovieCard from "../movies/MovieCard.js";
import LoadingScreen from "../layout/LoadingScreen.js";
//for grid
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
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
  useEffect(() => {
    setFilter("");
    // Returns the ratings
    getRatingAction(userid);
  }, [getRatingAction, userid, setFilter]);
  const classes = useStyles();

  if (isFetching) return <LoadingScreen />;
  else
    return (
      // <div className="container ratings" data-test={ifDev("ratings-component")}>
      //   <div className="movie-cards">
      <Container className={classes.cardGrid} maxWidth='md'>

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
                

                <MovieCard
                  key={index}
                  name={movie.primary_title}
                  movie_id={movie.movie_id}
                  year={movie.start_year}
                  rated={movie.rating}
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
                
                
              );

            }
            )}
        {/* </div>
      </div> */}
      </Container>
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
