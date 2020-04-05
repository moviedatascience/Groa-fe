import React from "react";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";

function LoadingScreen({
  isUploading,
  isFetchingRecommendations,
  isFetchingWatchlist,
  isFetchingRatings,
  isFetchingExplore,
}) {
  return (
    <div
      className="container loading-screen"
      data-test={ifDev("loading-screen-component")}
    >
      {isUploading ? (
        <h4>Uploading files...</h4>
      ) : isFetchingWatchlist ? (
        <h4>Loading watchlist...</h4>
      ) : isFetchingRecommendations ? (
        <h4>Loading recommendations...</h4>
      ) : isFetchingRatings ? (
        <h4>Loading ratings...</h4>
      ) : isFetchingExplore ? (
        <h4>Loading search results...</h4>
      )  : null}
      <ReactLoading
        className="loading-component"
        data-test={ifDev("loading-object")}
        type={"spinningBubbles"}
        color={"#00E6BC"}
        height={"200px"}
        width={"200px"}
      />
      <p>
        Based on the connection to our server,
        <br />
        this process could take a few seconds.
      </p>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    isUploading: state.upload.isUploading,
    isFetchingWatchlist: state.watchlist.isFetching,
    isFetchingRecommendations: state.recommendations.isFetching,
    isFetchingRatings: state.rating.isFetching,
    isFetchingExplore: state.movie.isFetching
  };
};

export default connect(mapStateToProps, {})(LoadingScreen);
