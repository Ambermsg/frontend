import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time <= 0) return;

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);

  return time;
};

export default Timer;
