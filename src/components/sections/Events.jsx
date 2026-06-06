import { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// I've duplicated the array slightly to ensure we have enough items 
// for a seamless infinite 3D loop. 5 items is the sweet spot for a 3-visible carousel.
const eventsList = [
  {
    id: 1,
    title: 'Akshorbongo',
    subtitle: 'Creative Writing Competition',
  },
  {
    id: 2,
    title: 'Baak Bitorko',
    subtitle: 'Debate Competition',
  },
  {
    id: 3,
    title: 'Khône Kotha',
    subtitle: 'Extempore Competition',
  },
  {
    id: 4,
    title: 'Antaraal',
    subtitle: 'Poetry Competitions',
  }
];

export default function Events() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play the continuous horizontal movement
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % eventsList.length);
    }, 3500); // Changes every 3.5 seconds
    
    return () => clearInterval(timer);
  }, []);

  // Function to calculate the 3D spatial properties for each card
  const getCardStyle = (index) => {
    const total = eventsList.length;
    // Calculate the shortest distance in a circular array
    let diff = index - activeIndex;
    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    // Center Active Card
    if (diff === 0) {
      return { 
        transform: 'translateX(0%) translateZ(0px) rotateY(0deg) scale(1)', 
        zIndex: 30, 
        opacity: 1 
      };
    } 
    // Left Card
    else if (diff === -1) {
      return { 
        transform: 'translateX(-120%) translateZ(-150px) rotateY(25deg) scale(0.9)', 
        zIndex: 20, 
        opacity: 0.9 
      };
    } 
    // Right Card
    else if (diff === 1) {
      return { 
        transform: 'translateX(120%) translateZ(-150px) rotateY(-25deg) scale(0.9)', 
        zIndex: 20, 
        opacity: 0.9 
      };
    } 
    // Hidden Background Cards
    else {
      return { 
        transform: `translateX(${diff > 0 ? '150%' : '-150%'}) translateZ(-400px) rotateY(${diff > 0 ? '-60deg' : '60deg'}) scale(0.7)`, 
        zIndex: 10, 
        opacity: 0 
      };
    }
  };

  return (
    <section id="events" className="w-full bg-[#efe1b8] pt-12 pb-16 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4">
        
        <h2 
          className={`text-center font-pirata-o1 text-4xl md:text-5xl text-black
            ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        >
          Events
        </h2>

        {/* 3D Perspective Container */}
        <div 
          className={`relative h-[550px] w-full flex justify-center items-center perspective-distant
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ transitionDelay: '300ms' }}
        >
          {eventsList.map((event, index) => (
            <div 
              key={event.id}
              onClick={() => setActiveIndex(index)}
              className="absolute top-0 w-[320px] md:w-[400px] lg:w-[450px] h-[500px] md:h-[550px] transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                ...getCardStyle(index),
                transformStyle: 'preserve-3d'
              }}
            >
              
              {/* 1. The Background Scene 
                We use an inner div with a highly rounded top to prevent the square corners 
                of 'event-section.webp' from bleeding outside the transparent edges of 'window.webp'.
              */}
              <div className="absolute inset-x-4 bottom-8 top-12 rounded-t-[120px] overflow-hidden z-10">
                 <img 
                    src="src/assets/images/event-section.webp" 
                    alt="Street Scene" 
                    className="w-full h-full object-cover opacity-90"
                 />
                 {/* Optional slight gradient overlay to make text pop against the sky */}
                 {/* <div className="absolute inset-0 bg-linear-to-b from-white/40 to-transparent" /> */}
              </div>

              {/* 2. The Archway Frame (Foreground) */}
              <img 
                src="src/assets/images/window.webp" 
                alt="Arch Frame" 
                className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none" 
              />

              {/* 3. The Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-start z-30 pt-48">
                 <h3 className="font-pirata-o1 text-3xl md:text-4xl text-black text-center px-6 leading-tight">
                   {event.title.split(' ').map((word, i) => (
                     <span key={i} className="block">{word}</span>
                   ))}
                 </h3>
              </div>

              {/* 4. Subtitle below the arch container */}
              <div 
                className="absolute -bottom-10 left-0 right-0 text-center transition-opacity duration-500"
              >
                 <p className="font-pirata-o7 font-semibold text-black tracking-wide text-sm md:text-base pb-5">
                   {event.subtitle}
                 </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}