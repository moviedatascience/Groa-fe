import React, { useState, useEffect } from "react";
// tools
import { connect } from "react-redux";
import { getMoviesAction, setFilter, notWatchListAction } from "../store/actions/index.js";
// Screen width util
import widthFinder from "../utils/widthFinder.js";

// children components
import MovieCard from "./movies/MovieCard.js";
import LoadingScreen from "./layout/LoadingScreen.js";
//for grid
import { GridList,GridListTileBar,GridListTile, IconButton } from "@material-ui/core/";

import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const useStyles = makeStyles((theme) => ({
    '@global': {
        '*::-webkit-scrollbar': {
          width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(244, 246, 244, 0.86)',
          outline: '1px solid slategrey',
          borderRadius: '10px',
          height: '5px'
        }
      },
      cont: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        backgroundColor: theme.palette.background.paper,
        height: "500px",
      },
      movieList: {
        minWidth:'15%',
        margin:'10px',
      },
      posterImg: {
        width:'100%',
      },
      movieList: {
        minWidth:'15%',
        margin:'10px',
      },
      posterImg: {
        width:'100%',
      },
      customArrow:{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color:"white",
          fontWeight:"900",
          border: "none",
          width: "50px",
          height:"50px",
          borderRadius:"50%",
          position: "absolute",
          right:"0",
          padding: "0",
          fontSize:"30px",
          "&:hover": {
             backgroundColor:"rgba(0, 0, 0, 0.6)",
             color:"white",
             width: "50px",
             height:"95%",
             borderRadius:"0" 
          }
      },
      leftArrow:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        color:"white",
        fontWeight:"900",
        border: "none",
        width: "50px",
        height:"50px",
        borderRadius:"50%",
        position: "absolute",
        left:"0",
        padding: "0",
        fontSize:"30px",
        "&:hover": {
           backgroundColor:"rgba(0, 0, 0, 0.6)",
           color:"white",
           width: "50px",
           height:"95%",
           borderRadius:"0" 
        }
    },

  }));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

export const TileBar = ({movies}) => {
    const styles = useStyles();

    return (
      <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          keyBoardControl={true}
          transitionDuration={200}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-10-px"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
      >

          {movies.map(tile => {
              let posterURI = tile.poster_url;
              let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
              let movieTitle = tile.title

              return (              
              <div className={styles.movieList}>
              <img src={moviePoster} alt={movieTitle} className={styles.posterImg} /> 
              </div>              
              )
          })}
        </Carousel>
    )
}


const CustomRightArrow = ({ onClick, ...rest }) => {
  const styles = useStyles();
  const {
    onMove,
    carouselState: { currentSlide, deviceType } 
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className={styles.customArrow} onClick={() => onClick()}> > </button>;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
const styles = useStyles();
const {
  onMove,
  carouselState: { currentSlide, deviceType } 
} = rest;
// onMove means if dragging or swiping in progress.
return <button className={styles.leftArrow} onClick={() => onClick()}> &#60; </button>;
};
