import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import { getMoviesAction } from "../../store/actions/index.js";
// children components
import MovieCard from "../movies/MovieCard.js";
import LoadingScreen from "../layout/LoadingScreen.js";

function Explore({ isFetching, movies, userid, getMoviesAction }) {
  useEffect(() => {
    // Returns the ratings
    getMoviesAction(userid);
  }, [getMoviesAction, userid]);
  if (isFetching) return <LoadingScreen />;
  else
    return (
      <div className="container ratings" data-test={ifDev("ratings-component")}>
        <div className="movie-cards">
          {movies.slice(0, 50).map((movie, index) => {
            let posterURI = movie.poster_url;
            let unsplashUrl =
              "https://source.unsplash.com/collection/1736993/500x650";
            let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

            return (
              <MovieCard
                key={index}
                name={movie.name}
                year={movie.year}
                rated={movie.average_rating}
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
          })}
        </div>
      </div>
    );
}

const mapStateToProps = state => {
  console.log(state.rating.movies)
  return {
    userid: state.login.userid,
    isFetching: state.movie.isFetching,
    movies: state.movie.movies,
    moviesError: state.movie.error
  };
};
export default connect(mapStateToProps, { getMoviesAction })(Explore);
