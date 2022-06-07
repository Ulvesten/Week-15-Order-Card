import React from "react";
import Avatar from "../../src/images/icon-music.svg";
import "./Plan.css";

const Plan = () => {
  return (
    <div className="Card__Container">
      <div className="Card__Avatar">
        <img src={Avatar} alt="avatar" />
      </div>
      <div className="Card__Text">
        <h3>Annual Plan</h3>
        <p>$59.99/year</p>
      </div>
      <div className="Card__Link">Change</div>
    </div>
  );
};

export default Plan;
