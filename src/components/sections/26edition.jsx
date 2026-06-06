// src/components/sections/About.jsx
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Edition() {
  const { ref: statsRef, isVisible: isStatsVisible } = useScrollReveal();

  return (
    <section id="26edition" className="w-full bg-white text-black">
      {/* Stats Board with Blurred Background */}
      <div 
        ref={statsRef}
        className={`mx-auto overflow-hidden relative p-8 md:p-12 min-h-100
          ${isStatsVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-[url('https://rhetorica.tint.edu.in/blur-bg.png')] bg-cover bg-center" />
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="lg:w-15/16 ps-8">
            <h3 className="font-pirata-o4 text-3xl font-extrabold mb-4">Our 26&apos; Edition</h3>
            <p className="text-gray-900 font-medium leading-8 font-pirata-o4 text-2xl">
              This year, we&apos;re organising Rhetorica on a bigger and grander scale, having received registrations from over 35+ Colleges across West Bengal, with over 140+ participants having registered for our multiple events across the two days of our event. We&apos;ve also obtained various brand partnerships across diverse industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 bg-black/15 px-6 py-8 rounded-2xl border border-black mt-5 me-5">
            {[
              { num: '140+', label: 'Participants' },
              { num: '5+', label: 'Events' },
              { num: '8+', label: 'Brands Partnerships' },
              { num: '35+', label: 'Colleges' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-1 font-pirata-o7 max-w-64">{stat.num}</div>
                <div className="text-base font-medium text-black tracking-wider font-pirata-o5 max-w-64">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}