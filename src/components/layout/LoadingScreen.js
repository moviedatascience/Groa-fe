import React from "react";
import ReactLoading from "react-loading";
import { ifDev } from "../../utils/removeAttribute.js";
import "./_LoadingScreen.scss";

export default function LoadingScreen() {
  return (
    <div
      className="container loading-screen"
      data-test={ifDev("loading-screen-component")}
    >
      <h4>Loading...</h4>
      <ReactLoading
        className="loading-component"
        data-test={ifDev("loading-object")}
        type={"spinningBubbles"}
        color={"#00E6BC"}
        height={"200px"}
        width={"200px"}
      />
      <p>
        Based on the connection to our server,
        <br />
        this process could take up to a minute.
      </p>
    </div>
  );
}
