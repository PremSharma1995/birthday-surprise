import React, { useState } from "react";
import cake from "../assets/cake.png";
 
export default function Cake({ next }) {
  const [blown, setBlown] = useState(false);
 
  const handleBlow = () => {
    setBlown(true);
 
    setTimeout(() => {
      next(); // auto move
    }, 5000); // 2 sec delay
  };
 
  return (
    <div className="screen">
      <h1>Virtual Cake 🎂</h1>
 
      <img src={cake} className="img" alt="cake" />
 
      <p>Calorie free but full of love ❤️</p>
 
      {!blown && (
        <button onClick={handleBlow}>
          Blow Candle 🕯️
        </button>
      )}
 
      {blown && (
        <>
          <h2>Happy Birthday My Love 💖</h2>
          <p>You are the best thing in my life ❤️</p>
        </>
      )}
    </div>
  );
}
 