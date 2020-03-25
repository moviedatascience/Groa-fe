import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import { getWatchlistAction } from "../../store/actions/index.js";
// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard from "../movies/MovieCard.js";

function Watchlist({
  userid,
  isFetching,
  watchlist,
  watchlistError,
  getWatchlistAction,
}) {
  console.log( watchlist)
  useEffect(() => {
    // Returns the most recent recommendations from the database
    getWatchlistAction(userid);
  }, []);

  if (isFetching) return <LoadingScreen />;
  else
    return (
      <div
        className="watchlist-container"
        data-test={ifDev("watchlist-component")}
      >
        <h2>Watchlist</h2>
        <div className="movie-cards">
          {watchlist.map((x, index) => {
            let posterURI = x.poster_url;
            let unsplashUrl =
              "https://source.unsplash.com/collection/1736993/500x650";
            let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

            return (
              <MovieCard
                key={index}
                name={x.name}
                year={x.year}
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
  return {
    userid: state.login.userid,
    isFetching: state.watchlist.isFetching,
    watchlist: state.watchlist.movies,
    watchlistError: state.watchlist.error,
  };
};
export default connect(mapStateToProps, { getWatchlistAction })(
  Watchlist
);
