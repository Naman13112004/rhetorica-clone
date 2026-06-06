// src/components/sections/About.jsx
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function About() {
  const { ref: textRef, isVisible: isTextVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: isStatsVisible } = useScrollReveal();

  return (
    <section id="about" className="w-full bg-white text-black pt-20">
      {/* About Header & Text */}
      <div 
        ref={textRef} 
        className={`px-20 flex flex-col md:flex-row gap-8 mb-20 ${isTextVisible ? 'animate-slide-up' : 'opacity-0'}`}
      >
        <h2 className="font-pirata-o1 text-4xl md:text-5xl shrink-0">About</h2>
        <p className="font-pirata-o7 font-medium text-gray-700 leading-7 text-base md:text-xl ps-10 pe-3">
          Rhetorica '26 is the Fifth Edition of the Annual Literary Festival of Techno International New Town, organised by LITWITS, the Literary Club of Techno International New Town. Scheduled for 20th and 21st January 2026, the festival features a diverse lineup of events including debate, poetry, storytelling, and creative writing - creating a platform where voices rise, ideas clash, and the transformative power of words takes center stage. Whether you're a seasoned performer or a first-time participant, Rhetorica is where the literary community comes alive.
        </p>
      </div>
    </section>
  );
}