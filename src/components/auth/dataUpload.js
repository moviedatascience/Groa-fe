import React, { useState } from "react";
// tools
import { connect } from "react-redux";
import { uploadAction } from "../../store/actions/index.js";
import { ifDev } from "../../utils/removeAttribute.js";
import "./dataUpload.scss";
import letterboxdLogo from "../../img/letterboxd-logo.svg";
import imdbLogo from "../../img/imdb-logo.svg";
// children components
import Congratulations from "./Congratulations.js";
import LoadingScreen from "../layout/LoadingScreen.js";

const DataUpload = ({ userid, uploadAction, isUploading }) => {
  const [input] = useState({ file: "" });
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const toggleInstructions = window.onclick = function(event) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
      if (event.target.matches(".dropbtn")) {
        event.target.nextSibling.classList.toggle("show")
      }
  };
  const handleChange = e => {
    let data = new FormData();
    data.append("movies", e.target.files[0], e.target.files[0].name);
    uploadAction(userid, data, setUploadSuccess)
    data = new FormData();
  };

  if (isUploading)
    return (<LoadingScreen/>) 
  else if (uploadSuccess)
    return <Congratulations/>;
  else
  return (
    <div className="DataUploadPage" data-test="DataUploadPage-test">
      <div>
        <div className="textholder1">
          <h1>Already rated movies elsewhere?</h1>
          <h3>
            Groa lets you easily upload your ratings from
            <br />
            either LetterBoxd or IMDb:
          </h3>
        </div>

        <div className="DboxContainer">
          <div className="dropdown">
            <button
              onClick={toggleInstructions}
              data-test={ifDev("clickLetterBoxd")}
              className="dropbtn"
            >
              Instructions LetterBoxd
            </button>
            <div id="myDropdownL" className="dropdown-content">
              <div className="DboxLeft">
                <div className="boxInside">
                  <img src={letterboxdLogo}alt="Letterboxd Logo" />
                  <p className="ptext">1.Log in to Letterboxd</p>
                  <p className="ptext">
                    2.Click on your username and select SETTINGS from the
                    dropdown menu.
                  </p>
                  <p className="ptext">
                    3.Go to the IMPORT and XPORT tab, then click EXPORT YOUR
                    DATA. Save the ratings.csv file somwhere convenient like
                    your desktop or downloads folder.
                  </p>
                  <p className="ptext">
                    4.Click to browse or simply drop your .csv file below
                  </p>
                </div>
              </div>
              {/* END  DboxLeft*/}
            </div>
            {/* END dropdown-content*/}
          </div>
          {/* END DROPDOWN */}

          <div className="dropdown">
            <button
              onClick={toggleInstructions}
              data-test={ifDev("clickIMDb")}
              className="dropbtn"
            >
              Instructions IMDb
            </button>
            <div id="myDropdownR" className="dropdown-content">
              <div className="DboxRight">
                <img src={imdbLogo} alt="IMDb Logo" />
                <p className="ptext">1.Log in to IMDb</p>
                <p className="ptext">
                  2.Click on your username and select YOUR RATINGS fromthe
                  dropdown menu.
                </p>
                <p className="ptext">
                  3.Click on the icon and select Export. Save the ratings.csv
                  file somwhere convenient like your desktop or downloads
                  folder.
                </p>
                <p className="ptext">
                  4.Click to browse or simply drop your .csv file below
                </p>
              </div>
              {/* END DboxRight*/}
            </div>
            {/* END dropdown-content*/}
          </div>
          {/* END DROPDOWN */}
        </div>
        {/* END DboxContainer */}

        {/* ///////////////UPLOAD FILE //////////////////// */}
        <div className="UploadContainer">
          <div className="inputholder">
            <input
              className="uploadData"
              type="file"
              placeholder="letterbox csv file here"
              name="movies"
              value={input.movieName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="textholder2">
          <h5>
            Groa values your privacy strives to be transparent to all users.
            <br />
            Your data will be kept strictly confidential-you're the only one who
            will be able to view or access it.
          </h5>
        </div>
      </div>
    </div>
    // END DataUploadPage
  );
};
const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    isUploading: state.upload.isUploading,
  };
};

export default connect(mapStateToProps, { uploadAction })(DataUpload);