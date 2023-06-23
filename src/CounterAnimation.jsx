import React, { useEffect, useState } from "react";

const CounterAnimation = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      current += increment;
      setCount(current);
      if (
        (increment === 1 && current >= end) ||
        (increment === -1 && current <= end)
      ) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => {
      clearInterval(timer);
    };
  }, [start, end, duration]);

  return <div>{count}</div>;
};

export default CounterAnimation;
