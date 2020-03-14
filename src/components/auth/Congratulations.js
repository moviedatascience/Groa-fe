import React from "react";
import "../auth/Congratulations.scss";
import successImg from "../../img/success.png"

const Congrats = ({ history, userid }) => {
  function pushToRecommended() {
    history.push(`/${userid}/recommended`);
  }
  return (
    <div className="CongratsPage" data-test="congrats-screen">
      <div className="CenterBox">
        <div className="congratsForm">
          <div className="textHolder">
            <h1>Congratulations!</h1>
            <h2>Your ratings have been successfully uploaded.</h2>
            <div className="image">
              <img src={successImg}alt="Success png" />
            </div>
            <button onClick={pushToRecommended}>Go to Dashboard</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Congrats;
