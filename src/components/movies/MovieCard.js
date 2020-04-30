import React, { useState } from "react";
import { connect } from "react-redux";
import { ratingAction, addToWatchlistAction } from "../../store/actions";
import Stars from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
//for grid
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  // root:{
  //   flexGrow:1,
  // },
  control: {
    padding: theme.spacing(2),
  },
  // icon: {
  //   marginRight: theme.spacing(2),
  // },
  // heroContent: {
  // backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(8, 0, 6),
  // },
  // heroButtons: {
  //   marginTop: theme.spacing(4),
  // },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    display:'flex',
    flexDirection:'row',
    // paddingLeft: theme.spacing(8),
    // paddingRight: theme.spacing(8),
    // width: "100%"
    // justify:'center',

  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: "1px solid #5B7648",
    width:'100%',
    // margin:0,
    // justifyContent:'center',
    '&:hover':{
      background:'black',
      // opacity: 0.3,
    },
    moreInfo:{
      display: 'flex',
      flexDirection: 'row',
    },
  },
  // cardMedia: {
  //   '&:hover':{
  //     opacity: 5,
  //   }

  // },
  cardContent: {
    // flexGrow: 1,
    padding:0,
    textAlign:'center',
  },
  
//  name:{
// width: '100%'
//  },
 cardActions:{
// display:'flex',
// flexDirection:'column'
// margin:'auto',
fontSize:'10px'
 },
 stars:{
  fontSize: '2.5vw',
  alignContent:'center'
 },
//  middle:{
//   transition:' .5s ease',
//   opacity: 0,
//   position: 'absolute',
//   transform: 'translate(-50%, -50%)',
//   -msTransform:' translate(-50%, -50%)',
//   textAlign: 'center',
//   '&:hover':{
//     opacity: 1,
//   }
//  },
 text:{
  backgroundColor: '#4CAF50',
  color: 'white',
  fontSize: '16px',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity .2s, visibility .2s',
  '&:hover':{
    opacity: 5,
  },
 },
 
 movieImg:{
   width:'100%',
   opacity: 1,
  display: 'block',
  // height: 'auto',
  // transition: '5s ease',
  backfaceVisibility: 'hidden',
  // '&:hover':{
  //   opacity: 0.3,
  // }
 },

watchList:{
  fontSize:'8px'
}

}));

// more fields will be appearing according to the Figma file
function MovieCard({
  userid,
  name,
  year,
  image,
  movie_id,
  ratingAction,
  watchlist,
  addToWatchlistAction,
  rated,
  ratings,
}) {
  const [yourRating, setYourRating] = useState(false);
  /* Used for the star rating */
  const [rating, setRating] = useState(0);
  /* Used for dynamically rendering the "Add to watchlist" button and if it's disabled */
  const [added, setAdded] = useState(false);
  /* This checks if the movie is in the watchlist */
  const inWatchlist = watchlist.some(
    (movie) => movie.name === name && movie.year === year
  );
  const inRatings = ratings.some(
    (movie) => movie.name === name && movie.year === year
  );
  //material-ui
  const classes = useStyles();
  // const [spacing, setSpacing] = React.useState(2);


  /* Used to format the movie object for action calls */
  let movie = {
    movie_id: movie_id,
    name: name,
    year: year,
  };

  const handleChange = (event, newValue) => {
    /* Sets rating for the star value */
    setRating(newValue);
    /* Sets rating for the POST request */
    const newRating = {
      movie_id: movie.movie_id,
      rating: newValue,
    };
    console.log(newRating);
    ratingAction(userid, newRating);
    setYourRating(true);
  };

  const handleClick = () => {
    /* Adds movie to the POST request */
    addToWatchlistAction(userid, movie);
    setAdded(true);
  };

  return (

   
  // <Grid  xs={12} sm={6} md={4}>

                <div className={classes.card}>
                 
                  {/* <CardMedia className={classes.cardMedia} > */}
                 <img className={classes.movieImg} src={image} alt="Random Movie poster as a placeholder." />
                  {/* </CardMedia> */}
              
                      {/* <div className={classes.text}>Description:</div> */}
                  
                 
                  <CardContent className={classes.cardContent}>
                    <Typography  component="h4" className={classes.name}>
                    {name}
                    </Typography>
                    <Typography>
                    {year}
                    </Typography>

                  </CardContent>
                  <CardActions className={classes.cardActions} padding='0'>
                    <Button  onClick={handleClick}
                    className={classes.watchList}
                    disabled={added || inWatchlist || inRatings ? true : false}size="small" color="primary">
                            {inRatings || yourRating
                      ? "Your rating:"
                      : !added && !inWatchlist
                      ? "Add to watchlist"
                      : "In your watchlist"}
                    </Button>
                   
                  </CardActions>
                  
                  <CardActions>
                  <Stars
                   className={classes.stars}
          data-test="star"
          precision={0.5}
          size="large"
          emptyIcon={
            <StarBorderIcon fontSize="inherit" style={{ color: "#ffb400" }} />
          }
          name={name}
          value={rated ? rated : rating}
          onChange={handleChange}
        /> 
                  </CardActions>
                </div>
           
            
         
  );
}
const mapStateToProps = (state) => {
  return {
    userid: state.login.userid,
    ratingError: state.rating.error,
    watchlist: state.watchlist.movies,
    watchlistError: state.watchlist.error,
    ratings: state.rating.movies,
  };
};
export default connect(mapStateToProps, { ratingAction, addToWatchlistAction })(
  MovieCard
);