import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LoadingScreen() {
  const [movieQuote, setMovieQuote] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://movie-quotes-app.herokuapp.com/api/v1/quotes")
      .then(res => console.log("movieQuote: res: ", res))
      .catch(err => console.log("movieQuote: error: ", err));
  }, []);

  return (
    <div>
      <h1>Happy Birthday Frosty!</h1>
    </div>
  );
}
