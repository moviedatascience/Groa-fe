import React, {useState} from "react";
import { connect } from "react-redux";
import { ratingAction, addToWatchlistAction } from "../../store/actions";
import Stars from "@material-ui/lab/Rating";
import StarBorderIcon from '@material-ui/icons/StarBorder';

// more fields will be appearing according to the Figma file
function MovieCard({ userid, name, year, image, ratingAction, watchlistAction }) {
  const [rating, setRating] = useState(0);

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
  }

  return (
    <div data-test="box" className="box">

      <div className="top-content">
        <img src={image} alt="Random Movie poster as a placeholder." />
        <div className="text-container">
          <h3>{name}</h3>
          <p>{year}</p>
          <p>{rating}</p>
          <br/>
        </div>
      </div>

      <div className="action-panel">
        <button 
          className="watchlist-button"
          onClick={handleClick}
        >
          Add to watchlist
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
          value={rating}
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
    watchlistError: state.watchlist.error
  };
};
export default connect(mapStateToProps, { ratingAction, addToWatchlistAction })(MovieCard);