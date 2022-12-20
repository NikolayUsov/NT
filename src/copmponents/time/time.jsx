import { useEffect, useState } from "react";
import "./time.scss";

export default function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h2 className="time__title">{time}</h2>;
}
