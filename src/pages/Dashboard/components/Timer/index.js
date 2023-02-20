import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

// import useTimer from "./useTimer";

import "./style.scss";
// import { useCountdown } from "./useCountdown";

const Timer = ({ timeLimit = 10 }) => {
  //   const { timeElapsed } = useTimer(timeLimit);
  //   const [days, hours, minutes, seconds] = useCountdown(
  //     new Date().getTime() + 80 * 60 * 1000
  //   );
  const time = new Date();
  time.setSeconds(time.getSeconds() + timeLimit * 60); // converting into seconds

  const {
    seconds,
    minutes,
    hours,
    // days,
    // isRunning,
    start,
    // pause,
    // resume,
    // restart,
  } = useStopwatch({
    // expiryTimestamp: time,
    offsetTimestamp: 0,

    // onExpire: () => console.warn("onExpire called"),
  });

  let timeElapsed = seconds + minutes * 60;

  useEffect(() => {
    start();
  }, []);

  return (
    <div className="timer-container">
      <div className="timer-wrapper">
        <div className="timer">
          {hours} : {minutes} : {seconds}
        </div>
        <span className="min-txt">Mins</span>
      </div>
      <p className="min-remaining-txt">
        {Math.floor((timeLimit * 60 - timeElapsed) / 60)} Mins Remaining
      </p>
    </div>
  );
};

export default Timer;
