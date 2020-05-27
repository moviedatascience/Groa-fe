import React from "react";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
//material-ui
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#212120',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Work Sans',
  },
  loadingComponent: {
    margin: '4.5% auto'
  },
  loadingComponenth4:{
    fontSize: '2.5rem',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '700',
  },
  loadingComponentp:{
    fontSize: '1.4rem',
    textAlign: 'center',
    lineHeight: '2rem',
    color: '#ffffff',
  },
}));

function LoadingScreen({
  isUploading,
  isFetchingRecommendations,
  isFetchingWatchlist,
  isFetchingRatings,
  isFetchingExplore,
}) {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      data-test={ifDev("loading-screen-component")}
    >
      {isUploading ? (
        <h4 className={classes.loadingComponenth4} >Uploading files...</h4>
      ) : isFetchingWatchlist ? (
        <h4 className={classes.loadingComponenth4}>Loading watchlist...</h4>
      ) : isFetchingRecommendations ? (
        <h4 className={classes.loadingComponenth4}>Loading recommendations...</h4>
      ) : isFetchingRatings ? (
        <h4 className={classes.loadingComponenth4}>Loading ratings...</h4>
      ) : isFetchingExplore ? (
        <h4 className={classes.loadingComponenth4}>Loading search results...</h4>
      ) : null}
      <ReactLoading
        className={classes.loadingComponent}
        data-test={ifDev("loading-object")}
        type={"spinningBubbles"}
        color={"#00E6BC"}
        height={"200px"}
        width={"200px"}
      />
      <p className={classes.loadingComponentp}>
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
