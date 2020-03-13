import React from "react";
import "../auth/Congratulations.scss";

const Congrats = () => {
  return (
    <div className="CongratsPage" data-test="congrats-screen">
      <div className="CenterBox">
        <div className="congratsForm">
          <div className="textHolder">
            <h1>Congratulations!</h1>
            <h2>Your ratings have been successfully uploaded.</h2>
            <div className="image">
              <img src="./success.png" alt="Success png" />
            </div>
            <button>Go to Dashboard</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Congrats;
