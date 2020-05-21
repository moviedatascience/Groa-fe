import React, { useEffect } from "react";
import TileBar from "./TileBar";
import Picture3 from "../img/couch-popcorn.png";
import Box from '@material-ui/core/Box';
import { Link, useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import RegisterNavLinks from "./layout/nav-layouts/RegisterNavLinks";
import { makeStyles } from "@material-ui/core";
import { withTheme } from "@material-ui/styles";


import headerImg from '../img/watching-tv.png';


const useStyles = makeStyles((theme) => ({
    testDiv: {
        margin: "auto",
        width: "90%",
        minHeight: "90vh",
        color: "white"
    },
    jumbotron: {
        border: "2px solid white",
        height: "90vh",
        display: "flex",
        flexDirection: "row",
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

const LandingPage = () => {
    const styles = useStyles();
    return (
        <div>            
            <div className={styles.testDiv}>
                <nav className="onboarding-nav registerNav">
                    <RegisterNavLinks />
                </nav>

                <header className={styles.jumbotron}>
                    <div>
                       <h1>Welcome to Groa!</h1> 
                    </div>
                    <div>
                        <img src={headerImg} alt="groa"/>
                    </div>                    
                </header>



                <h3>Explore Movies</h3>
                <TileBar />
            </div>            
        <Box mt={3}>
          <Copyright />
        </Box>
      </div>
    );
  };

export default LandingPage;