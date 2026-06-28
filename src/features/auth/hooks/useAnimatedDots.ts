import { useEffect, useState } from "react";

export const useAnimatedDots = (maxDots = 3, interval = 500) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prev) => (prev.length >= maxDots ? "" : prev + "."));
    }, interval);

    return () => clearInterval(timer);
  }, [maxDots, interval]);

  return dots;
};
