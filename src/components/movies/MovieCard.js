import React, { useState } from "react";
import { connect } from "react-redux";
import { ratingAction, addToWatchlistAction, removeFromWatchlistAction } from "../../store/actions";
import Stars from "@material-ui/lab/Rating";
import StarBorderIcon from '@material-ui/icons/StarBorder';

// more fields will be appearing according to the Figma file
function MovieCard({ userid, name, year, image, ratingAction, watchlist, addToWatchlistAction, rated, ratings }) {
  /* Used for the star rating */
  const [rating, setRating] = useState(0);
  /* Used for dynamically rendering the "Add to watchlist" button and if it's disabled */
  const [added, setAdded] = useState(false)
  /* This checks if the movie is in the watchlist */
  const inWatchlist = watchlist.some(movie => movie.name === name && movie.year === year)
  const inRatings = ratings.some(movie => movie.name === name && movie.year === year) 
 
  /* Used to format the movie object for action calls */
  let movie = {
    name: name,
    year: year,
  }

  const handleChange = (event, newValue) => {
    /* Sets rating for the star value */
    setRating(newValue);
    /* Sets rating for the POST request */
    const newRating = {
      ...movie, rating: newValue
    }
    ratingAction(userid, newRating)
  }

  const handleClick = () => {
    /* Adds movie to the POST request */
      addToWatchlistAction(userid, movie)
      setAdded(true)
  }

  return (
    <div data-test="box" className="box">

      <div className="top-content">
        <div className="aspect-ratio-wrapper">
          <img src={image} alt="Random Movie poster as a placeholder." />
        </div>
        <div className="text-container">
          <h3>{name}</h3>
          <p>{year}</p>
          <br/>
        </div>
      </div>

      <div className="action-panel">
        <button 
          className="watchlist-button"
          onClick={handleClick}
          disabled={ added || inWatchlist || inRatings ? true : false }
        >
          { inRatings ? 
              "Your rating:" :
            !added && !inWatchlist ? 
              "Add to watchlist" : 
              "In your watchlist" }
        </button>
        <Stars 
          className="stars"
          data-test="star"
          precision={0.5}
          size="large"
          emptyIcon={
            <StarBorderIcon 
              fontSize="inherit" 
              style={{color:"#ffb400"}} 
            />
          }
          name={name}
          value={ rated ? rated : rating }
          onChange={handleChange}
        />
      </div>

    </div>
  );
}
const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    ratingError: state.rating.error,
    watchlist: state.watchlist.movies,
    watchlistError: state.watchlist.error,
    ratings: state.rating.movies,
  };
};
export default connect(mapStateToProps, { ratingAction, addToWatchlistAction })(MovieCard);