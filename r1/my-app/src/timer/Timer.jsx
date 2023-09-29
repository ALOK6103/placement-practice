import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

 const [tim,setTim]=useState(0)
 const [mnt,setMnt]=useState(0)


  useEffect(() => {
    let interval;

    if (isRunning) {
        setTim(1)
      interval = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 0 && isRunning && tim!==0) {
        setMnt(1)
      setMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));
    }
  }, [seconds, isRunning]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0 && isRunning && tim!==0 && mnt!==0) {
      setHours((prevHours) => (prevHours === 23 ? 0 : prevHours + 1));
    }
  }, [minutes, seconds, isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div>
      <h1>Google-like Timer</h1>
      <div>
        <span>{hours < 10 ? `0${hours}` : hours}</span>:
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <button onClick={handleStartStop}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
