import React, { useEffect } from "react";

const Timer = ({ Fun }) => {
  const MINUTE_MS = 6000;

  useEffect(() => {
    const interval = setInterval(() => {
      Fun();
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
};

export default Timer;
