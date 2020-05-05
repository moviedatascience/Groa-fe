import React, { useState } from "react";
import { connect } from "react-redux";
import { ratingAction, addToWatchlistAction } from "../../store/actions";
import Stars from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
//for grid
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
//for modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "row",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "&:hover": {
      background: "black",
      opacity: "0.3",
    },
    moreInfo: {
      display: "flex",
      flexDirection: "row",
    },
  },

  cardContent: {
    padding: 0,
  },
  cardActions: {
    fontSize: "10px",
    padding: 0,
  },
  stars: {
    fontSize: "2.5vw",
    alignContent: "center",
  },
  text: {
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "16px",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .2s, visibility .2s",
    "&:hover": {
      opacity: 5,
    },
  },

  movieImg: {
    width: "100%",
    opacity: 1,
    display: "block",
    backfaceVisibility: "hidden",
    borderRadius: "11px",
    // '&:hover':{
    //   opacity: 0.3,
    // }
  },
  movieImgModal: {
    width: "50%",
    opacity: 1,
    display: "block",
    backfaceVisibility: "hidden",
    borderRadius: "11px",
    margin:'auto',
    // '&:hover':{
    //   opacity: 0.3,
    // }
  },
  watchList: {
    fontSize: "10px",
    textAlign: "left",
    padding: 0,
  },
  //modal
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    background:'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    <div className={classes.card}>
      <button type="button" onClick={handleOpen}>
      <img
        className={classes.movieImg}
        src={image}
        alt="Random Movie poster as a placeholder."
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.name}>{name}</Typography>
      </CardContent>
      
      </button>
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
 <Fade in={open}>
          <div className={classes.paper}>
          <img
        className={classes.movieImgModal}
        src={image}
        alt="Random Movie poster as a placeholder."
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.name}>{name}</Typography>
      </CardContent>
          <Typography>{year}</Typography>
          <CardActions className={classes.cardActions}>
        <Button
          onClick={handleClick}
          className={classes.watchList}
          disabled={added || inWatchlist || inRatings ? true : false}
          size="small"
          color="primary"
        >
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
        </Fade>
      </Modal>
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
