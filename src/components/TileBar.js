import React, { useEffect } from "react";
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
          outline: '1px solid slategrey'
        }
      },
    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
    movieCard: {
      "&:hover": {
        boxShadow: "0px 0px 2px 2px black",
        backgroundColor: "black",
      },
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
      title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
  }));


 

  const tileData = [
    {
      img: 'https://i.imgur.com/c63JJmt.png',
      title: 'Image',
      author: 'author',
    },
    {
    img: 'https://i.imgur.com/c63JJmt.png',
    title: 'Image',
    author: 'author',
    },
    {
    img: 'https://i.imgur.com/c63JJmt.png',
    title: 'Image',
    author: 'author',
    },
    {
    img: 'https://i.imgur.com/c63JJmt.png',
    title: 'Image',
    author: 'author',
    },
    {
    img: 'https://i.imgur.com/c63JJmt.png',
    title: 'Image',
    author: 'author',
    },
    {
    img: 'https://i.imgur.com/c63JJmt.png',
    title: 'Image',
    author: 'author',
    },
    
  ];



const TileBar = () => {
    const classes = useStyles();
    const screenWidth = widthFinder(window.innerWidth);

    return (
        <div className={classes.root}>
        <GridList className={classes.gridList} cols={5}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
}

export default TileBar;