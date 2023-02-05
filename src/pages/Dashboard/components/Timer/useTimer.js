import { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const useTimer = (targetMins) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [timeElapsed, setTimeElapsed] = useState(0);

  const startTimer = () => {

  }

  useEffect(() => {
    //   startTimer()

  })

  return {
    hours,
    minutes,
    seconds,
    timeElapsed,
  };
};

export default useTimer;
