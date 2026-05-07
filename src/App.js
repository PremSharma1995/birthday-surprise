import React, { useState, useEffect } from "react";
import Countdown from "./components/Countdown";
import TeddyScreen from "./components/TeddyScreen";
import SurpriseChoice from "./components/SurpriseChoice";
import Gifts from "./components/Gifts";
import Cake from "./components/Cake";
import Final from "./components/Final";
import LateIntro from "./components/LateIntro";
import FloatingHearts from "./components/FloatingHearts";
import music from "./assets/music.mp3";
 
function App() {
  const [step, setStep] = useState(0);
 
  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true;
    audio.volume = 0;
 
    audio.play().catch(() => {});
 
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.5) {
        vol += 0.05;
        audio.volume = vol;
      }
    }, 300);
 
    return () => clearInterval(fade);
  }, []);
 
  return (
    <div className="app">
      <FloatingHearts />
 
      {step === 0 && <LateIntro next={() => setStep(2)} />}
{step === 1 && <Countdown next={() => setStep(2)} />}
{step === 2 && <TeddyScreen next={() => setStep(3)} />}
{step === 3 && <SurpriseChoice next={() => setStep(4)} />}
{step === 4 && <Gifts next={() => setStep(5)} />}
{step === 5 && <Cake next={() => setStep(6)} />}
{step === 6 && <Final />}
    </div>
  );
}
 
export default App;
 