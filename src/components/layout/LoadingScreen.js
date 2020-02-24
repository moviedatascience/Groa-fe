import React, { useState, useEffect } from "react";
import popMovieQuote from "popular-movie-quotes"; // src: https://www.npmjs.com/package/popular-movie-quotes

export default function LoadingScreen() {
  const [movieQuote, setMovieQuote] = useState("Loading...");

  useEffect(() => {
    setMovieQuote(popMovieQuote.getSomeRandom(1)[0]);
  }, []);

  return (
    <div>
      <p>"{movieQuote.quote}"</p>
      <p>
        -{movieQuote.movie} Year: {movieQuote.year}
      </p>
    </div>
  );
}
