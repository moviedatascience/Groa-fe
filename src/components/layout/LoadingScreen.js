import React, { useState, useEffect } from "react";
import { ifDev } from "../../utils/removeAttribute.js";
import popMovieQuote from "popular-movie-quotes"; // src: https://www.npmjs.com/package/popular-movie-quotes

export default function LoadingScreen({ history }) {
  const [movieQuote, setMovieQuote] = useState("Loading...");

  const pushTo = () => {
    history.push("/watch-list");
  };

  useEffect(() => {
    setMovieQuote(popMovieQuote.getSomeRandom(1)[0]);
  }, []);

  return (
    <div data-test={ifDev("loading-screen")}>
      <p>"{movieQuote.quote}"</p>
      <p>-{movieQuote.movie}</p>
      <p>Year: {movieQuote.year}</p>

      <button onClick={pushTo}>Go to '/watch-list' here</button>
    </div>
  );
}
