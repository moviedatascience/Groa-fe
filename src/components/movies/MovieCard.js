import React, { useState } from "react";
import { connect } from "react-redux";
import { ratingAction, addToWatchlistAction } from "../../store/actions";
import Stars from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
//for grid
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useOktaAuth } from "@okta/okta-react/dist/OktaContext";

const styles = (theme) => ({
  closeBtn: {
    display: "flex",
    justifyContent: "space-between",
  },
  closeButton: {
    // paddingLeft: "200px",
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose } = props;
  return (
    <div className={classes.closeBtn}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </div>
  );
});

const useStyles = makeStyles((theme) => ({
  nameModal: {
    fontSize: "25px",
    // paddingBottom: "2%",

  },
  modalBtn: {
    // border:'2px solid white',
    // height: '250px',
    // paddingBottom: '2%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  cardContent: {
    // paddingBottom: 0,
    // display:'flex',
    // justifyContent:'center',
    // alignItems:'baseline'
    height: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',

  },
  movieImg: {
    width: "100%",
    height: '375px',
    opacity: 1,
    // display: "block",
    backfaceVisibility: "hidden",
    borderRadius: "11px",
    objectFit: 'contain',

    // '&:hover':{
    //   opacity: 0.3,
    // }
  },
  name: {
    fontSize: "15px",
    textAlign: 'center',
    paddingTop: '2%',
    // display:'flex',
    // justifyContent:'center',
    // alignItems:'baseline'
    // verticalAlign: 'middle',

  },
  year: {
    fontSize: "18px",
    paddingBottom: "1%",
  },
  descriptionModal: {
    color: "white",
    fontSize: "15px",
  },
  span: {
    fontWeight: "bold",
  },
  control: {
    padding: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
  },
  card: {
    // height: "90%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "&:hover": {
      // boxShadow: '0px 0px 2px 2px black',
    },
    moreInfo: {
      display: "flex",
      flexDirection: "row",
    },
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
    color: "white",
    fontSize: "16px",
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .2s, visibility .2s",
    "&:hover": {
      opacity: 5,
    },
  },


  movieImgModal: {
    opacity: 1,
    display: "block",
    backfaceVisibility: "hidden",
    borderRadius: "11px",
    margin: "auto",
    paddingBottom: '1%',
    // '&:hover':{
    //   opacity: 0.3,
    // }
  },
  watchList: {
    // fontSize: "10px",
    // textAlign: "center",
    // padding: '16px',
    justifyContent: "center",
    display: "flex",
    // margin: 0,
  },
  //modal
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    background: "rgb(23, 23, 23, .96)",
    margin: "auto",
    // marginBottom:'auto',
    width: "55rem",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 4, 3),
    color: "white",
  },
  DeleteMoviefromWatch: {
    backgroundColor: 'white',
    cursor: 'pointer',

  },
  movieInfoModal: {
    display: "flex",
  },
  movieContentDiv: {
    margin: 'auto',
  },
  genresModal: {
    fontStyle: 'italic',
    paddingTop: "3%",
  },
  actionButtons: {
    display: 'flex',
    justifyContent:'center',
  },
  watchStarsModal: {
    display: "flex",
    justifyContent: "center"
  },
  cardActionsModal: {
    justifyContent: "center",
    display: "flex",
  },
  starsModal: {
    justifyContent: "center",
    display: "flex",
    fontSize: "3vw",
  },
  actionBtn: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  // videoWrapper:{
  //   position:'relative',
  //   height:0,
  //   paddingBottom:'56.25%',
  // },
  [theme.breakpoints.down("xs")]: {
    name: {
      padding: '0',
    },
    // movieImg:{
    //   height:'80%',
    // },
    movieImg: {
      height: '200px',
      width: '100%',
    },
    movieImgModal: {
      width: "80%",
    },
    paper: {
      width: "17rem",
      // marginTop: "1%",
    },
    movieInfoModal: {
      flexDirection: "column",
    },
    starsModal: {
      fontSize: "5vw",
    },
    // trailerModal:{
    //   width:'auto',
    //   height:'auto',
    // },
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
  trailer,
  description,
  genres,
  page,
  handleClickStar,
  numRatings,
  setNumRatings,
  deleteMode,
  setDeleteMode
}) {
  //OKTA AUTH
  const { authState, authService } = useOktaAuth();
  const { accessToken } = authState;

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
    description: description,
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
    ratingAction(userid, newRating, accessToken);
    setYourRating(true);
  };
  const handleClick = () => {
    /* Adds movie to the POST request */
    addToWatchlistAction(userid, movie, accessToken);
    setAdded(true);
  };

  const multiFunctions = () => {
    handleClose();
    handleClickStar();
    onboardingRating();
  };

  const onboardingRating = () => {
    setNumRatings({ ...numRatings, num: numRatings.num + 1 });
    console.log("number of ratings is " + numRatings.num);
    console.log("openalert");
  }


  return (
    <div className={classes.card}>
      <div className={classes.modalBtn} onClick={handleOpen}>
        <img
          className={classes.movieImg}
          src={image}
          alt="Random Movie poster as a placeholder."
        />
        <p className={classes.name}>{name}</p>
      </div>
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
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <DialogTitle className={classes.title} onClose={handleClose}>
              <></>
            </DialogTitle>
            <div className={classes.movieInfoModal}>

              <img
                className={classes.movieImgModal}
                src={image}
                alt="Random Movie poster as a placeholder."
              />

              <div className={classes.movieContentDiv} >
                <CardContent className={classes.cardContentModal}>
                  <h1 className={classes.nameModal}> {name} </h1>
                  <p className={classes.year}>{year}</p>
                  <p className={classes.descriptionModal}>
                    {description}
                  </p>
                  <p className={classes.genresModal}>
                    {genres}
                  </p>
                </CardContent>
                <div className={classes.actionButtons}>
                  {page !== "Onboarding" && page !== "watchlist" ? (
                    <CardActions className={classes.cardActionsModal}>
                      <Button
                        onClick={handleClick}
                        className={classes.watchList}
                        disabled={
                          added || inWatchlist || inRatings ? true : false
                        }
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
                  ) : (
                      ""
                    )}

                  {page === "Explore" ? (
                    <CardActions className={classes.cardActionsModal}>
                      <Button
                        onClick={handleClick}
                        className={classes.watchList}
                        disabled={
                          added || inWatchlist || inRatings ? true : false
                        }
                        size="small"
                        color="primary"
                      >
                        {inRatings || yourRating
                          ? "Your rating:"
                          : !added && !inWatchlist
                            ? "Not Interested"
                            : "Removed from Results"}
                      </Button>
                    </CardActions>
                  ) : (
                      ""
                    )}
                </div>
                {page === "watchlist" ? (
                  // <div key={movie_id} onClick={() => setDeleteMode(!deleteMode)}>
                  <CardActions className={classes.cardActionsModal} onClick={() => setDeleteMode(!deleteMode)} >
                    {deleteMode && (
                      <button
                        className={classes.DeleteMoviefromWatch}
                        onClick={() => handleClick(movie.id)}
                      >
                        Remove from Watchlist
                  </button>
                    )}
                  </CardActions>
                  // </div>
                ) : (
                    ""
                  )}
                {page === "Onboarding" ? (
                  <Stars
                    className={classes.starsModal}
                    data-test="star"
                    precision={0.5}
                    size="large"
                    emptyIcon={
                      <StarBorderIcon
                        fontSize="inherit"
                        style={{ color: "#ffb400" }}
                      />
                    }
                    name={name}
                    value={rated ? rated : rating}
                    onChange={handleChange}
                    onClick={multiFunctions}
                  />
                ) : (
                    <Stars
                      className={classes.starsModal}
                      data-test="star"
                      precision={0.5}
                      size="large"
                      emptyIcon={
                        <StarBorderIcon
                          fontSize="inherit"
                          style={{ color: "#ffb400" }}
                        />
                      }
                      name={name}
                      value={rated ? rated : rating}
                      onChange={handleChange}
                      onClick={handleClose}
                    />
                  )}
              </div>
            </div>
            {page !== "Onboarding" ? (
              <iframe className={classes.trailerModal}
                width="100%"
                height="315vh"
                margin-left='auto'
                margin-right='auto'
                padding='2%'
                src={trailer}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
                ""
              )}
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
