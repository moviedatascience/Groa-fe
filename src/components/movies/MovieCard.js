import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth.js";
import { connect } from "react-redux";
import {
  ratingAction,
  addToWatchlistAction,
  notWatchListAction,
} from "../../store/actions";

import Stars from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Box from "@material-ui/core/Box";
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
  Link,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useOktaAuth } from "@okta/okta-react/dist/OktaContext";

//menu expander
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import for button group
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

// const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

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

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  nameModal: {
    fontSize: "25px",
    textAlign: "center",
  },
  cardContent: {
    height: "100%",
    padding: 0,
  },
  movieImg: {
    width: "100%",
    height: "375px",
    opacity: 1,
    backfaceVisibility: "hidden",
    borderRadius: "11px",
    objectFit: "contain",
  },
  name: {
    fontSize: "15px",
    textAlign: "center",
    paddingTop: "2%",
    marginBottom: "2%",
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
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "&:hover": {},
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
    paddingBottom: "1%",
    width: "50%",
  },
  watchList: {
    justifyContent: "center",
    display: "flex",
  },
  //modal
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
  paper: {
    background: "rgb(23, 23, 23, .96)",
    margin: "auto",
    width: "55rem",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 6, 3),
    color: "white",
  },
  DeleteMoviefromWatch: {
    backgroundColor: "white",
    cursor: "pointer",
  },
  movieInfoModal: {
    display: "flex",
  },
  movieContentDiv: {
    margin: "auto",
  },
  genresModal: {
    fontStyle: "italic",
    paddingTop: "3%",
  },
  actionButtons: {
    display: "flex",
    justifyContent: "center",
  },
  starRoot: {
    display: "flex",
    width: "50%",
    margin: "auto",
    // flexDirection: 'column',
    justifyContent: "center",
    // '& > * + *': {
    //   marginTop: theme.spacing(1),
    // },
  },
  starRootOnboarding: {
    width: "100%",
  },
  watchStarsModal: {
    display: "flex",
    justifyContent: "center",
  },
  cardActionsModal: {
    justifyContent: "center",
    display: "flex",
  },
  starsModal: {
    justifyContent: "center",
    // display: "flex",
    fontSize: "3vw",
    // margin:'auto',
  },
  actionBtn: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  trailerModal: {
    marginTop: "10%",
    padding: "0 1.5rem",
  },
  // gridProvider: {
  //   width: '80%',
  // margin: 'auto',
  //   backgroundColor: '#212120',
  // },
  root: {
    // dislay:'flex',
    // justifyContent:'center',
  },
  btnsProviders: {
    backgroundColor: "#212120",
    color: "white",
  },
  expansionPanal: {
    dislay: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    width: '80%',
    backgroundColor: '#212120',
  },
  expansionPanalSummary: {
    backgroundColor: 'white',
    margin: 'auto',
    width: '80%',
    backgroundColor: '#212120',

  },
  serviceInfo: {
    textAlign: 'center',
  },
  Link: {
    textDecoration: "none",
  },
  serviceBtn: {
    textDecoration: 'none',
    margin: '1%',
  },
  [theme.breakpoints.down("xs")]: {
    name: {
      padding: "0",
    },
    movieImg: {
      height: "200px",
      width: "100%",
    },
    movieImgModal: {
      width: "80%",
    },
    paper: {
      width: "24rem",
      padding: theme.spacing(0, 1, 3),
    },
    trailerModal: {
      padding: "0",
      height: "35vh",
    },
    movieInfoModal: {
      flexDirection: "column",
    },
    starsModal: {
      fontSize: "5vw",
    },
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
  setDeleteMode,
  notWatchListAction,
  notwatchlist,
}) {
  //OKTA AUTH
  const { authState, authService } = useOktaAuth();
  const { accessToken } = authState;
  // console.log('movie id', movie_id)

  // useEffect(() => {
  //   serviceProviderAction(userid, accessToken, movie_id)
  // }, [serviceProviderAction, userid, movie_id, accessToken])

  // console.log('service provider',serviceProvider )
  const [serviceProvider, setServiceProvider] = useState([]);
  const [yourRating, setYourRating] = useState(false);
  /* Used for the star rating */
  const [rating, setRating] = useState(0);
  /* Used for dynamically rendering the "Add to watchlist" button and if it's disabled */
  const [added, setAdded] = useState(false);
  //to remove movie user not interested in
  const [removed, setRemoved] = useState(false);
  /* This checks if the movie is in the watchlist */
  const inWatchlist = watchlist.some(
    (movie) => movie.name === name && movie.year === year
  );
  const notInWatchlist = notwatchlist.some(
    (movie) => movie.name === name && movie.year === year
  );
  const inRatings = ratings.some(
    (movie) => movie.name === name && movie.year === year
  );
  //material-ui
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);
  //for button group
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleClickServiceProvider = () => {
  //   console.info(`You clicked ${serviceProvider[selectedIndex]}`);
  // };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  const handleCloseServiceProvider = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
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
    ratingAction(userid, newRating, accessToken);
    setYourRating(true);
  };
  const handleClick = () => {
    /* Adds movie to the POST request */
    addToWatchlistAction(userid, movie, accessToken);
    setAdded(true);
  };

  const handleClickRemove = () => {
    const notWatch = { movie_id: movie.movie_id, user_id: userid };
    notWatchListAction(userid, notWatch, accessToken);
    setRemoved(true);
    handleClose();
  };

  const handleClickProviders = () => {
    axiosWithAuth(accessToken)
      .get(`${userid}/service-providers/${movie.movie_id}`)
      .then((res) => {
        setServiceProvider(res.data);
        console.log("data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen((prevOpen) => !prevOpen);
    // console.info(`You clicked ${serviceProvider[selectedIndex]}`);
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
  };
  // console.log('sericelink', serviceLinks)
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
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
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

              <div className={classes.movieContentDiv}>
                <CardContent className={classes.cardContentModal}>
                  <h1 className={classes.nameModal}> {name} </h1>
                  <p className={classes.year}>{year}</p>
                  <p className={classes.descriptionModal}>{description}</p>
                  <p className={classes.genresModal}>{genres}</p>
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

                  {page === "Recommendations" ? (
                    <CardActions className={classes.cardActionsModal}>
                      <Button
                        onClick={handleClickRemove}
                        className={classes.watchList}
                        disabled={removed || notInWatchlist ? true : false}
                        size="small"
                        color="primary"
                      >
                        {!removed && !notInWatchlist
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
                  <CardActions
                    className={classes.cardActionsModal}
                    onClick={() => setDeleteMode(!deleteMode)}
                  >
                    {deleteMode && (
                      <button
                        className={classes.DeleteMoviefromWatch}
                        onClick={() => handleClick(movie.id)}
                      >
                        Remove from Watchlist
                      </button>
                    )}
                  </CardActions>
                ) : (
                  // </div>
                  ""
                )}
                {page === "Onboarding" ? (
                  <Box
                    className={classes.starRootOnboarding}
                    component="fieldset"
                    borderColor="transparent"
                  >
                    <Stars
                      className={classes.starsModal}
                      size="large"
                      precision={0.5}
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
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
                  </Box>
                ) : (
                    <Box className={classes.starRoot} borderColor="transparent">
                      <Stars
                        className={classes.starsModal}
                        size="large"
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        emptyIcon={
                          <StarBorderIcon
                            fontSize="inherit"
                            style={{ color: "#ffb400" }}
                          />
                        }
                        name={name}
                        value={rated ? rated : rating}
                        onChange={handleChange}
                      />
                    </Box>
                  )}
                {page !== 'watchlist' && page !== 'Onboarding' ? (
                  <div className={classes.root}>
                    <ExpansionPanel className={classes.expansionPanal}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.expansionPanalSummary}
                        onClick={handleClickProviders}
                      >
                        <Typography className={classes.heading}>Where to Watch</Typography>
                      </ExpansionPanelSummary>
                      <div className={classes.serviceInfo}>
                        {serviceProvider
                          .map((serviceProviders) => {
                            return (
                              <div >
                                <Link href={serviceProviders.link} className={classes.Link}>
                                  <Button variant="outlined" className={classes.serviceBtn}>{serviceProviders.name}</Button>
                                </Link>
                              </div>
                            )
                          })}
                      </div>
                    </ExpansionPanel>
                  </div>
                ) : (
                    ""
                  )}
                {/* {page !== 'watchlist' && page !== 'Onboarding' ? (
                  <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                      <ButtonGroup
                        variant="contained"
                        color="primary"
                        ref={anchorRef}
                        aria-label="split button"
                      >
                        <Button
                          className={classes.btnsProviders}
                          onClick={handleClickProviders}
                        >
                          Service Providers
                        </Button>
                        <Button
                          className={classes.btnsProviders}
                          color="primary"
                          size="small"
                          aria-controls={open ? "split-button-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-label="select merge strategy"
                          aria-haspopup="menu"
                          onClick={handleClickProviders}
                        >
                          <ArrowDropDownIcon />
                        </Button>
                      </ButtonGroup>
                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === "bottom"
                                  ? "center top"
                                  : "center bottom",
                            }}
                          >
                            <Paper>
                              <ClickAwayListener
                                onClickAway={handleCloseServiceProvider}
                              >
                                <MenuList id="split-button-menu">
                                  {serviceProvider.map(
                                    (serviceProviders, index) => {
                                      return (
                                        <MenuItem
                                          key={serviceProvider}
                                          disabled={index === 2}
                                          selected={index === selectedIndex}
                                          onClick={(event) =>
                                            handleMenuItemClick(event, index)
                                          }
                                        >
                                          <Link
                                            href={serviceProviders.link}
                                            className={classes.Link}
                                          >
                                            <Button
                                              variant="outlined"
                                              className={classes.serviceBtn}
                                            >
                                              {serviceProviders.name}
                                            </Button>
                                          </Link>
                                        </MenuItem>
                                      );
                                    }
                                  )}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </Grid>
                  </Grid>
                ) : (
                    ""
                  )} */}
              </div>
            </div>

            {page !== "Onboarding" ? (
              <iframe
                className={classes.trailerModal}
                title={name}
                width="100%"
                height="345vh"
                margin-left="auto"
                margin-right="auto"
                padding="2%"
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
  // console.log('this is the res of notwatchlist', state)

  return {
    userid: state.login.userid,
    ratingError: state.rating.error,
    watchlist: state.watchlist.movies,
    watchlistError: state.watchlist.error,
    ratings: state.rating.movies,
    notwatchlist: state.notwatchlist.movies,
  };
};
export default connect(mapStateToProps, {
  ratingAction,
  addToWatchlistAction,
  notWatchListAction,
})(MovieCard);
