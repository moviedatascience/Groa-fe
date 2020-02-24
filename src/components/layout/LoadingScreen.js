import React, { useState, useEffect } from "react";
import axios from "axios";
import popMovieQuote from "popular-movie-quotes";

export default function LoadingScreen() {
  const [movieQuote, setMovieQuote] = useState("Loading...");

  //   let authOptions = {
  //     method: "POST",
  //     // url: "https://opentdb.com/api.php?amount=10&category=11",
  //     url: "http://movie-quotes-app.herokuapp.com/api/v1/quotes",
  //     headers: {
  //       "x-rapidapi-host": "juanroldan1989-moviequotes-v1.p.rapidapi.com",
  //       "x-rapidapi-key": "c3de27b2d2msh0100baf74bcce37p13129bjsn1514e1040c12",
  //       authorization: "Token token=yd8WzkWNEEzGtqMSgiZBrwtt"
  //     }
  //   };

  useEffect(() => {
    //     // axios(authOptions)
    //     //   .then(res => console.log("movieQuote: res: ", res))
    //     //   .catch(err => console.log("movieQuote: error: ", err));
    //     axios({
    //       method: "POST",
    //       url: "https://andruxnet-random-famous-quotes.p.rapidapi.com/",
    //       headers: {
    //         "content-type": "application/x-www-form-urlencoded",
    //         "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
    //         "x-rapidapi-key": "c3de27b2d2msh0100baf74bcce37p13129bjsn1514e1040c12"
    //       },
    //       params: {
    //         count: "10",
    //         cat: "movies"
    //       },
    //       data: {}
    //     })
    //       .then(response => {
    //         console.log(response);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    setMovieQuote(popMovieQuote.getSomeRandom(1)[0]);
    console.log(popMovieQuote.getSomeRandom(1));
  }, []);

  return (
    <div>
      <p>{movieQuote.quote}</p>
      <p>{movieQuote.movie}</p>
    </div>
  );
}
