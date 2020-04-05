import React, { useState, useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import { removeFromWatchlistAction, getWatchlistAction } from "../../store/actions/index.js";
// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard from "../movies/MovieCard.js";

function Watchlist({
  userid,
  isFetching,
  isDeleting,
  watchlist,
  watchlistError,
  getWatchlistAction,
  searchTerm, 
  removeFromWatchlistAction
}) {
  const [deleteMode, setDeleteMode] = useState(false)

  useEffect(() => {
    // Returns the users watchlist from the database
    getWatchlistAction(userid);
  }, [getWatchlistAction, userid,isDeleting]);

  function handleClick(id) {
    removeFromWatchlistAction(userid ,id)
  }

  if (isFetching) return <LoadingScreen />;
  else if (isDeleting) return <LoadingScreen />;
  else
    return (
      <div
        className="watchlist-container"
        data-test={ifDev("watchlist-component")}
      >
        <div className="movie-cards">
          {watchlist.filter(movie =>
            searchTerm !== '' ? 
              movie.name
              .toString()
              .toLowerCase()
              .includes(
                searchTerm
                .toLowerCase()
              ) : true
            ).map((movie, index) => {
              let posterURI = movie.poster_url;
              let unsplashUrl =
                "https://source.unsplash.com/collection/1736993/500x650";
              let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
              return (
                <div key={index}
                className="movie-card-container"
                onClick={()=>setDeleteMode(!deleteMode)}
                >
                  <MovieCard
                    key={index}
                    name={movie.name}
                    year={movie.year}
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
                  {deleteMode &&<button 
                  className="delete-button"
                  onClick={()=>handleClick(movie.id)}
                  >
                    x
                  </button>}
              </div>
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
    isDeleting: state.watchlist.isDeleting,
    watchlist: state.watchlist.movies,
    watchlistError: state.watchlist.error,
    searchTerm: state.filter.searchTerm
  };
};
export default connect(mapStateToProps, { getWatchlistAction, removeFromWatchlistAction })(
  Watchlist
);
