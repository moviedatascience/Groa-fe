import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { TileBar } from "./TileBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 5
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 3
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 2
//   }
// };


const useStyles = makeStyles((theme) => ({
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
        alignItems:"center",
        cursor: "pointer",
    },
    btnClose: {
        margin: "auto",
        width: "200px",
        height:"5vh",
        fontSize:"18px",
        color: "white",
        backgroundColor:"red",
        borderRadius: "20px",
        border:"none",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        cursor: "pointer",
    },

    // movieList: {
    //     minWidth:'15%',
    //     margin:'10px',
    //   },
    //   posterImg: {
    //     width:'100%',
    //   },
    //   customArrow:{
    //       display:"flex",
    //       justifyContent:"center",
    //       alignItems:"center",
    //       backgroundColor: "rgba(0, 0, 0, 0.3)",
    //       color:"white",
    //       fontWeight:"900",
    //       border: "none",
    //       width: "50px",
    //       height:"50px",
    //       borderRadius:"50%",
    //       position: "absolute",
    //       right:"0",
    //       padding: "0",
    //       fontSize:"30px",
    //       "&:hover": {
    //          backgroundColor:"rgba(0, 0, 0, 0.6)",
    //          color:"white",
    //          width: "50px",
    //          height:"95%",
    //          borderRadius:"0" 
    //       }
    //   },
    //   leftArrow:{
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     backgroundColor: "rgba(0, 0, 0, 0.3)",
    //     color:"white",
    //     fontWeight:"900",
    //     border: "none",
    //     width: "50px",
    //     height:"50px",
    //     borderRadius:"50%",
    //     position: "absolute",
    //     left:"0",
    //     padding: "0",
    //     fontSize:"30px",
    //     "&:hover": {
    //        backgroundColor:"rgba(0, 0, 0, 0.6)",
    //        color:"white",
    //        width: "50px",
    //        height:"95%",
    //        borderRadius:"0" 
    //     }
    // },
}) ); 


const LandingMovieSlider = ({moviesRated, moviesRec, category}) => {
    const [getRec, setGetRec] = useState(false);
    const styles = useStyles();

    const toggleRec = () => {
        setGetRec(!getRec);
    }

    return(
        <section>
            <h3>Rate {category} Movies</h3>
            <TileBar movies={moviesRated} />
            <div className={!getRec ? styles.recBtn : styles.btnClose} onClick={toggleRec}>
                {!getRec ? 
                <p>Show Recommendations</p>
                : 
                <p>X Close </p>}        
            </div>

            {getRec ? 
            <TileBar 
                movies={moviesRec}
            /> 
            :
            null
            }
            {/* <Carousel
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

                {moviesRec.map(tile => {
                    let posterURI = tile.poster_url;
                    let moviePoster = `https://image.tmdb.org/t/p/w500${posterURI}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
                    let movieTitle = tile.title

                    return (              
                    <div className={styles.movieList}>
                    <img src={moviePoster} alt={movieTitle} className={styles.posterImg} /> 
                    </div>              
                    )
                })}
            </Carousel> */}

        </section>
    )
}

// const CustomRightArrow = ({ onClick, ...rest }) => {
//     const styles = useStyles();
//     const {
//       onMove,
//       carouselState: { currentSlide, deviceType } 
//     } = rest;
//     // onMove means if dragging or swiping in progress.
//     return <button className={styles.customArrow} onClick={() => onClick()}> > </button>;
//   };

// const CustomLeftArrow = ({ onClick, ...rest }) => {
// const styles = useStyles();
// const {
//     onMove,
//     carouselState: { currentSlide, deviceType } 
// } = rest;
// // onMove means if dragging or swiping in progress.
// return <button className={styles.leftArrow} onClick={() => onClick()}> &#60; </button>;
// };


export default LandingMovieSlider;