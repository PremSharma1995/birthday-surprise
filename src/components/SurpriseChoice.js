import React, { useState } from "react";
import { motion } from "framer-motion";
import angry from "../assets/angry.png";
 
export default function SurpriseChoice({ next }) {
  const [no, setNo] = useState(false);
 
  return (
    <div className="screen">
      <h1>Are you ready for surprise? 😏</h1>
 
      <button onClick={next}>Yes 💖</button>
      <button onClick={() => setNo(true)}>No 😤</button>
 
      {no && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <p>How dare you 😡</p>
 
          <motion.img
            src={angry}
            className="img"
            animate={{ x: [-10, 10, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          />
        </motion.div>
      )}
    </div>
  );
}