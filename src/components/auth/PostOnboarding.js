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
        background: '#505050',
        padding:'2%',
      },
      PostOnboardingImg: {
        width: '50%',
        padding:'3%',
      },
      onboardingText: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '3%',
        color: '#FFFFFF',
      },
      onboardingh1: {
        fontSize: '35px',
        padding: '2%',
      },
      onboardingp1: {
        color: '#00E6BC',
        padding: '2%',
        fontSize: '20px',
      },
      onboardingp2: {
        padding: '2%',
        fontSize: '20px',
      },
      onboardingLink: {
        textAlign: 'center',
        fontSize: '25px',
        padding: '2%',
      },
      onboardingBut: {
        backgroundColor: '#00E6BC',
        width: '100%',
        color: '#FFFFFF',
        padding:'2%',
        borderRadius:'4px',
        '&:hover':{
            backgroundColor:'white',
            color:'#00E6BC',
          },
      },
      [theme.breakpoints.down("xs")]: {
        root: {
          flexDirection: 'column'
        },
        PostOnboardingImg: {
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: "60%",
        }
      },
}));

function PostOnboarding({ userid }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.PostOnboardingImg} src={PostOnboardingImg} alt="onboarding boy jumping" />
      <div className={classes.onboardingText}>
        <h1 className={classes.onboardingh1}> Great Job!</h1>
        <p className={classes.onboardingp1}>
         You've come so far!
      </p>
        <p className={classes.onboardingp2}>
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
