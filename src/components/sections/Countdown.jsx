// src/components/sections/Countdown.jsx
import { useState, useEffect } from 'react';

const TARGET_DATE = new Date('2026-01-20T00:00:00').getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <section id="countdown" className="w-full py-20 bg-gray-50 flex justify-center items-center">
      <div className="bg-[#f0f4f8] rounded-3xl py-6 px-24 shadow-2xl text-center">
        <p className="text-xs md:text-xs uppercase tracking-tight text-black font-pirata-o7 font-medium">Begins on</p>
        <h3 className="text-xl md:text-2xl font-bold mb-6 font-pirata-o7">20TH JAN 2026</h3>
        
        <div className="flex gap-6 md:gap-12 justify-center">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="bg-gray-50 rounded-2xl py-3 shadow-md mb-3 w-16 md:w-24 flex flex-col items-center justify-center">
                {/* Ensure you use a font that mimics the split-flap display from the design if needed */}
                <span className="text-5xl md:text-7xl font-normal font-pirata-o1">{formatNumber(value)}</span>
                <span className="text-sm text-black uppercase tracking-widest font-pirata-o5 font-semibold">{unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}