import React, {useState} from "react";
import { connect } from "react-redux";
import { ratingAction } from "../../store/actions";
import Stars from "@material-ui/lab/Rating";

// more fields will be appearing according to the Figma file
function MovieCard({ userid, name, year, image, ratingAction }) {
  const [rating, setRating] = useState(0);

  let newRating = {
    name: name,
    year: year,
    rating: rating,
  }

  const handleChange = (event, newValue) => {
    /* Sets rating for the star value */
    setRating(newValue);
    /* Sets rating for the POST request */
    newRating = {
      ...newRating, rating: newValue
    }
    ratingAction(userid, newRating)
  }

  return (
    <div data-test="box" className="box">
      
      <img src={image} alt="Random Movie poster as a placeholder." />
      <div className="text-container">
        <h3>{name}</h3>
        <p>{year}</p>
      <div className="hidestars">
        <Stars data-test="star"
          precision={0.5}
          name={name}
          value={rating}
          onChange={handleChange}
        />
         
        <p>{rating}</p>
        </div>
  
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    errorStatus: state.rating.error
  };
};
export default connect(mapStateToProps, { ratingAction })(MovieCard);