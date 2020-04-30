import React, { useState, useEffect } from "react";
// tools
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";
import {
  removeFromWatchlistAction,
  getWatchlistAction,
  setFilter,
} from "../../store/actions/index.js";
// children components
import LoadingScreen from "../layout/LoadingScreen.js";
import MovieCard from "../movies/MovieCard.js";

//for grid
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
 
}));
function Watchlist({
  userid,
  isFetching,
  isDeleting,
  watchlist,
  watchlistError,
  getWatchlistAction,
  searchTerm,
  removeFromWatchlistAction,
  setFilter,
}) {
  const [deleteMode, setDeleteMode] = useState(false);
  //for matieral-ui
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  useEffect(() => {
    setFilter("");
    // Returns the users watchlist from the database
    getWatchlistAction(userid);
  }, [getWatchlistAction, userid, isDeleting, setFilter]);

  function handleClick(id) {
    removeFromWatchlistAction(userid, id);
  }

  if (isFetching) return <LoadingScreen />;
  else if (isDeleting) return <LoadingScreen />;
  else
    return (

      
      // /* <Grid container className={classes.root} justify="center"> */}
      // {/* <Grid item xs={12}> */}
      //   {/* <Grid justify="center" > */}
      // {/* <Container className={classes.cardGrid}> */}
      //    {/* <CssBaseline /> */}
         <Container className={classes.cardGrid} maxWidth='md'>
       {/* <Grid container spacing={4}> */}
        {/* <div className="movie-cards"> */}
     
              {/* <Grid  md={12} > */}
          {watchlist
            .filter((movie) =>
              searchTerm !== ""
                ? movie.primary_title
                    .toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                : true
            )
            .map((movie, index) => {

              let posterURI = movie.poster_url;
              let unsplashUrl =
                "https://source.unsplash.com/collection/1736993/500x650";
              let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
              return (
                <div
                  key={index}
        
                  onClick={() => setDeleteMode(!deleteMode)}
                >
       <Grid container spacing={4}>

                  <MovieCard
                    key={index}
                    name={movie.primary_title}
                    year={movie.start_year}
                    image={
                      !posterURI ||
                      posterURI === "None" ||
                      posterURI === "No poster" ||
                      posterURI === "No Poster" ||
                      posterURI === "Not in table"
                        ? unsplashUrl
                        : moviePoster
                    }
                    
                  />
                  </Grid>
                  {deleteMode && (
                    <button
                      className="delete-button"
                      onClick={() => handleClick(movie.id)}
                    >
                      x
                    </button>
                  )}
                </div>
              );
            })}
        
       
      </Container>
    );
}

const mapStateToProps = (state) => {
  return {
    userid: state.login.userid,
    isFetching: state.watchlist.isFetching,
    isDeleting: state.watchlist.isDeleting,
    watchlist: state.watchlist.movies,
    watchlistError: state.watchlist.error,
    searchTerm: state.filter.searchTerm,
  };
};
export default connect(mapStateToProps, {
  getWatchlistAction,
  removeFromWatchlistAction,
  setFilter,
})(Watchlist);
