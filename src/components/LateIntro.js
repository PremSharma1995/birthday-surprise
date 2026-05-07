import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
 
export default function LateIntro({ next }) {
  const message = "I know I’m a little late… but this surprise is worth it ❤️";
 
  const [displayText, setDisplayText] = useState("");
 
  useEffect(() => {
    let i = 0;
 
    const interval = setInterval(() => {
      setDisplayText(message.slice(0, i));
      i++;
 
      if (i > message.length) {
        clearInterval(interval);
      }
    }, 50);
 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <motion.div className="screen">
      <h1>Oops… 😅</h1>
 
      <p style={{ fontSize: "22px" }}>
        {displayText}
      </p>
 
      <button onClick={next}>Start Surprise 🎁</button>
    </motion.div>
  );
}
 