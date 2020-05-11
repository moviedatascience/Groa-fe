import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../store/actions";
import { Link } from "react-router-dom";
//img
import PostOnboardingImg from "../../img/post-onboarding-man.png";
//material-ui
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // backgroundColor:'#4CAF50'
    justifyContent:'center',
  },
  PostOnboardingText:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
  },
  onboardingLink:{
    textAlign:'center',
  },
  [theme.breakpoints.down("xs")]: {
    root: {
     flexDirection:'column'
    },
  
  },
}));

function PostOnboarding({ userid }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img classname={classes.PostOnboardingImg} src={PostOnboardingImg} alt="onboarding boy jumping" />
      <div className={classes.onboardingText}>
        <h1> Great Job!</h1>
        <p>
         You've come so far!
      </p>
        <p>
          Check out your personalized Groa recommendations
      </p>
        <Link className={classes.onboardingLink} to={`/${userid}/recommendations`}>
          <button className={classes.onboardingBut}>Finish</button>
        </Link>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userid: state.login.userid,
    isFetching: state.movie.isFetching,
    movies: state.movie.movies,
    moviesError: state.movie.error,
    searchTerm: state.filter.searchTerm,
    watchlist: state.watchlist.movies,
    ratings: state.rating.movies,
  };
};
export default connect(mapStateToProps, {
  setFilter,
})(PostOnboarding);
