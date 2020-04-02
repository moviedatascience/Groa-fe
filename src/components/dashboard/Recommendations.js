import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import {
  recommendedAction,
  recommendationAction,
  toggleIsUploaded
} from "../../store/actions/index.js";
// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard from "../movies/MovieCard.js";

function Recommendations({
  isFetching,
  recommendations,
  userid,
  recommendedAction,
  recommendationAction,
  searchTerm, 
  isUploaded
}) {
  useEffect(() => {
    // returns initial recommendations after uploading a file
    if (isUploaded === true) {
      recommendationAction(userid);
      toggleIsUploaded();
    }
    // Returns the most recent recommendations from the database
    recommendedAction(userid);
  }, [recommendedAction, userid, isUploaded, recommendationAction]);

  if (isFetching) return <LoadingScreen />;
  else
    return (
      <div
        className="container recommendations"
        data-test={ifDev("recommendations-component")}
      >
        <div className="movie-cards">
        {recommendations.filter(post =>
        searchTerm !== '' ? post.Title.toString().toLowerCase().includes(searchTerm.toLowerCase()) : true).map((x, index) =>{
            let posterURI = x["Poster URL"];
            let unsplashUrl =
              "https://source.unsplash.com/collection/1736993/500x650";
            let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

            return (
              <MovieCard
                key={index}
                name={x.Title}
                year={x.Year}
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
    isFetching: state.recommendations.isFetching,
    recommendations: state.recommendations.movies,
    recommendationsError: state.recommendations.error,
    searchTerm: state.filter.searchTerm,
    isUploaded: state.upload.isUploaded
  };
};

export default connect(mapStateToProps, {
  recommendedAction,
  recommendationAction,
  toggleIsUploaded
})(Recommendations);
