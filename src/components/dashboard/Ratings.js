import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import { getRatingAction, recommendedAction } from "../../store/actions/index.js";
// children components
import MovieCard from "../movies/MovieCard.js";
import LoadingScreen from "../layout/LoadingScreen.js";

function Ratings({
    isFetching,
    ratings,
    userid,
    getRatingAction,
  }) {

    useEffect(() => {
      // Returns the ratings
      getRatingAction(userid);
    }, []);
    if (isFetching) return  <LoadingScreen />;

    else
    
      return (
        <div
          className="container ratings"
          data-test={ifDev("ratings-component")} 
        >
          <div className="movie-cards">
            {ratings.map((x, index) => {
                
              let posterURI = x["poster_url"];
              let unsplashUrl =
                "https://source.unsplash.com/collection/1736993/500x650";
              let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  
              return (
                <MovieCard
                  key={index}
                  name={x.name}
                  year={x.year}
                  rated={x.rating}z
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
      isFetching: state.rating.isFetching,
      ratings: state.rating.movies,
      ratingsError: state.rating.error,
      
    };
  };
  export default connect(mapStateToProps, {getRatingAction})( 
    Ratings
  );
  