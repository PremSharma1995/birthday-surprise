import React, { useState } from "react";
import her1 from "../assets/her1.jpg";
import her2 from "../assets/her2.jpg";
 
export default function Gifts({ next }) {
  const [gift, setGift] = useState(null);
 
  return (
    <div className="screen">
      <h1>Open a Gift 🎁</h1>
 
      <button onClick={() => setGift(1)}>Gift 1</button>
      <button onClick={() => setGift(2)}>Gift 2</button>
 
      {gift === 1 && (
        <div className="card">
          <img src={her1} className="img" alt="Smiling portrait of her"/>
          <p>You are my happiness 💖</p>
        </div>
      )}
 
      {gift === 2 && (
        <div className="card">
          <img src={her2} className="img" alt="Her with a joyful expression"/>
          <p>My world = You ❤️</p>
          <button onClick={next}>Next</button>
        </div>
      )}
    </div>
  );
}
 