import React from "react";
//import Lottie from "lottie-react";
import dudu from "../assets/dudu.mp4";
 
export default function TeddyScreen({ next }) {
  return (
    <div className="screen">
      <h1>Happy Birthday Banduuuu.... 🎂</h1>
 
      <div style={{ width: 300, margin: "auto" }}>
        {/* <Lottie animationData={dudu} loop /> */}
        <video
          src={dudu}
          autoPlay
          loop
          muted
          style={{ width : 300 }}
        />

      </div>
 
      <p>Bringing flowers just for you 💐</p>
      <button onClick={next}>Next</button>
    </div>
  );
}