import React, { useEffect, useState } from "react";
//redux
import { connect } from "react-redux";
import { 
    horrorLandingAction,
    comedyLandingAction,
    dramaLandingAction,
    romanceLandingAction,
    staffLandingAction, 
} from "../store/actions/index.js";

import LandingMovieSlider from './LandingMovieSlider';
import Box from '@material-ui/core/Box';
import { Link, useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import LandingNavLinks from "./layout/nav-layouts/LandingNavLinks";
import { makeStyles } from "@material-ui/core";
import { withTheme } from "@material-ui/styles";
import headerImg from '../img/watching-tv.png';




const useStyles = makeStyles((theme) => ({
    testDiv: {
        margin: "auto",
        width: "80%",
        minHeight: "90vh",
        color: "white"
    },
    jumbotron: {
        // border: "2px solid white",
        height: "90vh",
        display: "flex",
        flexDirection: "row",
        '& div':{
            display: "flex",
            justifyContent: "center",
            alignItems:"center"
        },
        '& img':{
            width:"100%"
        }
    },
    title: {
        width: "50%",
        flexDirection:"column",
        fontFamily: `"Work Sans", sans-serif`,
        '& h1':{
            fontSize: '60px',            
        },
        '& button':{
            margin: "5vh",
            width:"100%",
            height:"8vh",
            fontSize:"30px",
            color: "black",
            backgroundColor:"gold",
            borderRadius: "20px",
            border:"none",
            cursor:"pointer"
        },
        '& p':{
            fontSize:"20px",
        }

    },
    recBtn: {
        margin: "auto",
        width: "200px",
        height:"5vh",
        fontSize:"18px",
        color: "black",
        backgroundColor:"gold",
        borderRadius: "20px",
        border:"none",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
}) ); 

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="white" to="https://github.com/Lambda-School-Labs/Groa-fe">
          GROÁ
        </Link>{' '}
        2020
        {'.'}
        <Link color="white" to="https://groa.us/privacy-policy">
          GROÁ Privacy Policy
        </Link>
      </Typography>
    );
  }

const LandingPage = ({
    //actions destructured from props
        horrorLandingAction,
        comedyLandingAction,
        dramaLandingAction,
        romanceLandingAction,
        staffLandingAction,
    //actions destructured from props
        horrorMovies,
        horrorMoviesRec,
        comedyMovies,
        comedyMoviesRec,
        dramaMovies,
        dramaMoviesRec,
        romanceMovies,
        romanceMoviesRec,
        staffMovies,
        staffMoviesRec,
        isFetching,

    }) => {
    const [getRec, setGetRec] = useState(false);
    const styles = useStyles();

    useEffect(() => {
        horrorLandingAction();
        comedyLandingAction();
        dramaLandingAction();
        romanceLandingAction();
        staffLandingAction();            
    }, []);

    const toggleRec = () => {
        setGetRec(!getRec);
    }

    return (
        <div>            
            <div className={styles.testDiv}>
                <nav className="onboarding-nav registerNav">
                    <LandingNavLinks />
                </nav>

                <header className={styles.jumbotron}>
                    <div className={styles.title}>
                       <h1>Welcome to Groa!</h1>
                       <p>The unbias movie recommendation platform!</p>
                       <p>For movie fans by movie fans!</p>
                       <Link to="/register">
                       <button>Get Started</button>
                       </Link>
                    </div>
                    <div>
                        <img src={headerImg} alt="groa"/>
                    </div>                    
                </header>
                <LandingMovieSlider 
                    moviesRated={horrorMovies}
                    moviesRec={horrorMoviesRec}
                    category={"Horror"}
                />

                <LandingMovieSlider 
                    moviesRated={comedyMovies}
                    moviesRec={comedyMoviesRec}
                    category={"Comedy"}
                />

                <LandingMovieSlider 
                    moviesRated={dramaMovies}
                    moviesRec={dramaMoviesRec}
                    category={"Drama"}
                />

                <LandingMovieSlider 
                    moviesRated={romanceMovies}
                    moviesRec={romanceMoviesRec}
                    category={"Romance"}
                />
                <LandingMovieSlider 
                    moviesRated={staffMovies}
                    moviesRec={staffMoviesRec}
                    category={"Staff"}
                />

            </div>            
        <Box mt={3}>
          <Copyright />
        </Box>
      </div>
    );
  };

const mapStateToProps = (state) => {

    console.log("SSSSSSSSSSSSSSSSs", state)
    return {
        horrorMovies: state.landingPageReducer.horrorMovies,
        horrorMoviesRec: state.landingPageReducer.horrorMoviesRec,
        comedyMovies: state.landingPageReducer.comedyMovies,
        comedyMoviesRec: state.landingPageReducer.comedyMoviesRec,
        dramaMovies: state.landingPageReducer.dramaMovies,
        dramaMoviesRec: state.landingPageReducer.dramaMoviesRec,
        romanceMovies: state.landingPageReducer.romanceMovies,
        romanceMoviesRec: state.landingPageReducer.romanceMoviesRec,
        staffMovies: state.landingPageReducer.staffMovies,
        staffMoviesRec: state.landingPageReducer.staffMoviesRec,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, {
    horrorLandingAction,
    comedyLandingAction,
    dramaLandingAction,
    romanceLandingAction,
    staffLandingAction,
})(LandingPage);