import React, { useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth.js";
import { useHistory } from "react-router-dom";

// local imports
import "./dash.scss";
import MovieCard from "../movies/MovieCard.js";
import LoadingScreen from "../layout/LoadingScreen.js";

// dashboard could become a place where we store all of our other layouts.
const Dashboardv1 = () => {
  let history = useHistory();
  const [input] = useState({ file: "" }); // if we're never using setInput, do we need this useState?
  const [ratings, setRatings] = useState([]); // maybe this should updated to recommendations? -- are we expecting an array?
  // const [toggle, setToggle] = useState(true);

  const changeHandler = e => {
    // maybe document this some where??? https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
    // packages up form to make it able to send over https
    // new FormData() needs to be used for the file upload to work. // why?
    let data = new FormData();

    // have to read more on new FormData to understand why appending "movies" works here with the input attribute
    data.append("movies", e.target.files[0], e.target.files[0].name);

    // history.location.state.userid is just where I am holding userid for now from the Register page so I do not need to implment redux.
    axiosWithAuth()
      // this is insantiated when a file is added to input
      .post(`/${history.location.state.userid}/uploading`, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        console.log(res);
        setRatings(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    // clears out previous uploaded file
    data = new FormData();
  };

  // const handleSubmit = e => {
  //   setToggle(!toggle);
  //   e.preventDefault();
  //   console.log(input);
  // };

  switch (true) {
    case !history?.location?.state?.userid:
      return <LoadingScreen />; // redirect to login/register
    case !ratings?.length:
      return (
        <div className="bigContainer">
          <div data-test="dashboard-screen" className="DB-Container">
            <div className="form-hover">
              {/* keep create component? */}
              <form id="zip-form">
                <input
                  id="zip-input"
                  className="movie-input"
                  type="file"
                  placeholder="letterbox csv file here"
                  name="movies" // name of file / name of obj?  used in key field for postman to upload a file too
                  value={input.movieName} // im not sure why this works but it does.  // document this portion out as well
                  onChange={changeHandler}
                />
              </form>
              <p className="form-directions">
                upload your letterboxd csv file here to get all past movie
                ratings
              </p>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="bigContainer">
          <div data-test="dashboard-screen" className="DB-Container">
            <div className="form-hover">
              {/* keep create component? */}
              <form id="zip-form">
                <input
                  id="zip-input"
                  className="movie-input"
                  type="file"
                  placeholder="letterbox csv file here"
                  name="movies" // name of file / name of obj?  used in key field for postman to upload a file too
                  value={input.movieName} // im not sure why this works but it does.  // document this portion out as well
                  onChange={changeHandler}
                />
              </form>
              <p className="form-directions">
                upload your letterboxd csv file here to get all past movie
                ratings
              </p>
            </div>

            {/* this shows the recommendations movie cards */}
            <div data-test="box-container" className="box-container">
              {/* should off set up to 200 and then retun nothing */}
              {ratings.map((x, index) =>
                index < 201 ? (
                  <MovieCard
                    key={index}
                    name={x.Name}
                    year={x.Year}
                    rating={x.Rating}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      );
  }
};

export default Dashboardv1;
