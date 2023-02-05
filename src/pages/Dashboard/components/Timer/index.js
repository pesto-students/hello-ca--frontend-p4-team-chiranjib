import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

// import useTimer from "./useTimer";

import "./style.scss";
// import { useCountdown } from "./useCountdown";

const Timer = ({ availableTalkTime = 10 }) => {
//   const { timeElapsed } = useTimer(availableTalkTime);
  //   const [days, hours, minutes, seconds] = useCountdown(
  //     new Date().getTime() + 80 * 60 * 1000
  //   );
  const time = new Date();
  time.setSeconds(time.getSeconds() + availableTalkTime * 60); // converting into seconds

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useStopwatch({
    // expiryTimestamp: time,
    offsetTimestamp: 0,

    // onExpire: () => console.warn("onExpire called"),
  });

  let timeElapsed = seconds + minutes * 60;

  console.log(days, hours, minutes, seconds, isRunning, timeElapsed, availableTalkTime, availableTalkTime * 60 - timeElapsed, (availableTalkTime * 60 - timeElapsed) / 60);

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
        {Math.floor((availableTalkTime * 60 - timeElapsed) / 60)} Mins Remaining
      </p>
    </div>
  );
};

export default Timer;


// import React from 'react'
// import useTimer from "./useTimer";

// import "./style.scss";

// const Timer = ({ availableTalkTime = 10, }) => {
//   const {hours, minutes, seconds, timeElapsed} = useTimer()
//   return (
//     <div className="timer-container">
//        <div className="timer-wrapper">
//          <div className="timer">
//            {hours} : {minutes} : {seconds}
//          </div>
//          <span className="min-txt">Mins</span>
//        </div>
//        <p className="min-remaining-txt">
//          {Math.floor((availableTalkTime * 60 - timeElapsed) / 60)} Mins Remaining
//        </p>
//      </div>
//   )
// }

// export default Timer