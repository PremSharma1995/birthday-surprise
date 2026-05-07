import React, { useEffect, useState } from "react";
 
export default function Countdown({ next }) {
  const [time, setTime] = useState("");
 
  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date("May 3, 2026 00:00:00").getTime();
      const now = new Date().getTime();
      const diff = target - now;
 
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
 
      setTime(`${h}h ${m}m ${s}s`);
    }, 1000);
 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <div className="screen">
      <h1>Countdown to Your Day 💖</h1>
      <h2>{time}</h2>
      <button onClick={next}>Next ❤️</button>
    </div>
  );
}