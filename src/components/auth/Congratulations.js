import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import successImg from "../../img/success.png";

const Congrats = ({ userid }) => {
  return (
    <div className="CongratsPage" data-test="congrats-screen">
      <div className="CenterBox">
        <div className="congratsForm">
          <div className="textHolder">
            <h1>Congratulations!</h1>
            <h2>Your ratings have been successfully uploaded.</h2>
            <div className="image">
              <img src={successImg} alt="Success png" />
            </div>
            <button>
              <Link to={`/${userid}/recommended`}>Go to Dashboard</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    errorStatus: state.login.error
  };
};
export default connect(mapStateToProps, {})(Congrats);
