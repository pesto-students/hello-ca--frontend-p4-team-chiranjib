import React from "react";
import "./style.scss";

const Timer = () => {
  return (
    <div className="timer-container">
      <div className="timer-wrapper">
        <div className="timer">00 : 00 : 02</div>
        <span className="min-txt">Mins</span>
      </div>
      <p className="min-remaining-txt">80 Mins Remaining</p>
    </div>
  );
};

export default Timer;
