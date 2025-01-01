import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);

  const intervalId = useEffect(() => {
    setInterval(() => {
      setTime((time) => (time -= 1));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Wait {time} seconds to send one more email</div>;
};

export default Timer;
