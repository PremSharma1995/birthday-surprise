import React from "react";
import "./FloatingHearts.css";
 
export default function FloatingHearts() {
  return (
    <div className="hearts">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i}>❤️</span>
      ))}
    </div>
  );
}