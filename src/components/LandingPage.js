import React, { useEffect, useState } from "react";
//redux
import { connect } from "react-redux";
import { landingPageAction } from "../store/actions/index.js";

import LandingMovieSlider from './LandingMovieSlider';
import TileBar from "./TileBar";
import Picture3 from "../img/couch-popcorn.png";
import Box from '@material-ui/core/Box';
import { Link, useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import LandingNavLinks from "./layout/nav-layouts/LandingNavLinks";
import { makeStyles } from "@material-ui/core";
import { withTheme } from "@material-ui/styles";
import Axios from 'axios';




import headerImg from '../img/watching-tv.png';
import axiosWithAuth from "../utils/axiosWithAuth";


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
            width:"30%",
            height:"8vh",
            fontSize:"30px",
            color: "black",
            backgroundColor:"gold",
            borderRadius: "20px",
            border:"none"
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
        landingPageAction,
        landingMovies,
        landingMoviesRec,
    }) => {
    const [getRec, setGetRec] = useState(false);
    const styles = useStyles();

    useEffect(() => {
        landingPageAction(39);            
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
                       <button>Get Started</button> 
                    </div>
                    <div>
                        <img src={headerImg} alt="groa"/>
                    </div>                    
                </header>
                <LandingMovieSlider 
                    moviesRated={landingMovies}
                    moviesRec={landingMoviesRec}
                    category={"Horror"}
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
        landingMovies: state.landingPageReducer.landingMovies,
        landingMoviesRec: state.landingPageReducer.landingMoviesRec,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, {
    landingPageAction,
})(LandingPage);