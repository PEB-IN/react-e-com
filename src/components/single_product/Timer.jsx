import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "April, 15, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <p id="timing">
        {days}
        <h6>Days</h6>
      </p>
      <p id="timing">
        {hours}
        <h6>Hour</h6>
      </p>
      <p id="timing">
        {minutes}
        <h6>Mins</h6>
      </p>
      <p id="timing">
        {seconds}
        <h6>Sec</h6>
      </p>
    </div>
  );
};

export default Timer;
