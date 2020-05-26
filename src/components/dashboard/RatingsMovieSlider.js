import React from "react";
import { makeStyles } from "@material-ui/core";
import { RatingsTileBar } from "./RatingsTileBar";
import ReactLoading from "react-loading";
import "react-multi-carousel/lib/styles.css";
import Rating from "@material-ui/lab/Rating";
//styling for Landing Movie Slider Component
const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: `"Work Sans", sans-serif`,
  },
  btnCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transitionDuration: ".5s",
    position: "relative",
    "@media (max-width:500px)": {
      width: "100%",
    },
  },
  recBtn: {
    fontFamily: `"Work Sans", sans-serif`,
    margin: "10px 0",
    width: "300px",
    height: "5vh",
    fontSize: "18px",
    color: "black",
    backgroundColor: "rgba(65, 236, 176, 1)",
    borderRadius: "20px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transitionDuration: ".2s",
    fontWeight: "900",
  },
  actionBtn: {
    fontFamily: `"Work Sans", sans-serif`,
    margin: "10px 0",
    width: "300px",
    height: "5vh",
    fontSize: "18px",
    color: "black",
    backgroundColor: "gold",
    borderRadius: "20px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transitionDuration: ".2s",
    fontWeight: "900",
    "@media (max-width:500px)": {
      width: "100%",
      margin: "2vh auto",
    },
  },
  btnClose: {
    fontFamily: `"Work Sans", sans-serif`,
    position: "absolute",
    right: "0",
    margin: "auto",
    width: "10%",
    height: "5vh",
    fontSize: "20px",
    color: "white",
    backgroundColor: "red",
    borderRadius: "20px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transitionDuration: ".5s",
    "@media (max-width:500px)": {
      width: "20%",
      fontSize: "12px",
    },
  },
  recMovies: {
    backgroundColor: "rgba(125, 125, 125, 1)",
  },
  loading: {
    margin: "auto",
  },
  titles: {
    fontSize: "1.5rem",
  },
}));

const LandingMovieSlider = ({ movieRatings, heading }) => {
  const styles = useStyles();

  return (
    <section className={styles.container}>
      <h1 className={styles.titles}> {heading} </h1>

      {movieRatings.length > 1 ? (
        <>
          <RatingsTileBar movies={movieRatings} />
        </>
      ) : (
        <ReactLoading
          className={styles.loading}
          type={"spinningBubbles"}
          color={"#00E6BC"}
          height={"150px"}
          width={"150px"}
        />
      )}
    </section>
  );
};

export default LandingMovieSlider;
