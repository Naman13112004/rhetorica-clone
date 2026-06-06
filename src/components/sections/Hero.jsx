import { useScrollReveal } from '../../hooks/useScrollReveal';
import Navbar from '../Navbar';

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="hero" className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image */}
      <div 
        className="absolute inset-0 bg-[url('https://rhetorica.tint.edu.in/bg-image.png')] bg-cover bg-center animate-fade-in pointer-events-none"
      />
      
      {/* 2. Title */}
      <div ref={ref} className="relative z-10 text-center pointer-events-none">
        <h1 
          className={`font-pirata-o1 text-8xl md:text-8xl lg:text-9xl text-black drop-shadow-lg tracking-normal pb-96
            ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          Rhetorica
        </h1>
      </div>

      {/* 3. Navbar */}
      <Navbar />
      
    </section>
  );
}