import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../store/actions";
import { Link } from "react-router-dom";
//img
import OnboardingImg from "../../img/happy-running-person.png";
//material-ui
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  [theme.breakpoints.down("xs")]: {
    root: {
     flexDirection:'column'
    },
  },
}));

function OnboardingPlateform({ userid }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={OnboardingImg} alt="onboarding girl jumping" />
      <div>
        <h1> You're Almost There</h1>
        <p>
          Help Groa personalize your recommendations! Groa works better when you
          tell us what you like.
      </p>
        <p>
          Rate six movies on a scale from 1 to 5 and we’ll get you your
          personalized recommendations in no time! Train Groa to be your personal
          movie AI!
      </p>
        <Link to={`/${userid}/Onboarding`}>
          <button> Let's Start</button>
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
})(OnboardingPlateform);
