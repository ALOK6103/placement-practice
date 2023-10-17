import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
   
        let intervalid;
    
        if (isRunning) {
          intervalid = setInterval(() => {
            setCount((count) => count + 1);
          }, 1000);
        }
    
        return () => {
          clearInterval(intervalid);
        };
      
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning(true)
  }
  

  const handlePause = () => {
    setIsRunning(false)
  };

  const handleReset=()=>{
    setCount(0)
    setIsRunning(false)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick} disabled={isRunning} >start</button>
      <button onClick={handlePause} disabled={!isRunning}>pause</button>
      <button onClick={handleReset} disabled={isRunning}>reset</button>

    </div>
  );
};

export default Counter;
