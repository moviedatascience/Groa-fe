import React, { useState, useEffect } from "react";
import popMovieQuote from "popular-movie-quotes"; // src: https://www.npmjs.com/package/popular-movie-quotes

export default function LoadingScreen() {
  const [movieQuote, setMovieQuote] = useState("Loading...");

  useEffect(() => {
    setMovieQuote(popMovieQuote.getSomeRandom(1)[0]);
  }, []);

  return (
    <div data-test="loading-screen">
      <p>"{movieQuote.quote}"</p>
      <p>-{movieQuote.movie}</p>
      <p>Year: {movieQuote.year}</p>
    </div>
  );
}
