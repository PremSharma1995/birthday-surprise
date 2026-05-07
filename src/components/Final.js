import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import voice from "../assets/voice.mp3";
 
export default function Final() {
  const [show, setShow] = useState(true);
 
  useEffect(() => {
    const audio = new Audio(voice);
    audio.play().catch(() => {});
    setTimeout(() => setShow(false), 8000);
  }, []);
 
  return (
    <div className="screen">
      {show && <Confetti />}
 
      <h1>To My Favourite Girl 💕</h1>
      <p>I love you the most ❤️</p>
    </div>
  );
}