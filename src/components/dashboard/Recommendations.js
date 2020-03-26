import React, { useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import { recommendedAction } from "../../store/actions/index.js";
// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard from "../movies/MovieCard.js";

function Recommendations({
  isFetching,
  recommendations,
  userid,
  recommendedAction
}) {
  useEffect(() => {
    // Returns the most recent recommendations from the database
    recommendedAction(userid);
  }, [recommendedAction, userid]);

  if (isFetching) return <LoadingScreen />;
  else
    return (
      <div
        className="container recommendations"
        data-test={ifDev("recommendations-component")}
      >
        <h2>Your recommendations</h2>
        <div className="movie-cards">
          {recommendations.map((x, index) => {
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
  console.log("COMPONENT STATE: ", state);
  return {
    userid: state.login.userid,
    isFetching: state.recommendations.isFetching,
    recommendations: state.recommendations.movies,
    recommendationsError: state.recommendations.error,
    isUploading: state.upload.isUploading
  };
};
export default connect(mapStateToProps, {
  recommendedAction
})(Recommendations);
