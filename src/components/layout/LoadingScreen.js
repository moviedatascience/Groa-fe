import React from "react";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import { ifDev } from "../../utils/removeAttribute.js";

function LoadingScreen({ isUploading }) {
  return (
    <div
      className="container loading-screen"
      data-test={ifDev("loading-screen-component")}
    >
      {isUploading ? (
        <h4>Uploading files...</h4>
      ) : (
        <h4>Loading recommendations...</h4>
      )}
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
const mapStateToProps = state => {
  return {
    isUploading: state.upload.isUploading
  };
};

export default connect(mapStateToProps, {})(LoadingScreen);
