import { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Collaborations() {
  const { ref: logosRef, isVisible: isLogosVisible } = useScrollReveal();
  const { ref: mapRef, isVisible: isMapVisible } = useScrollReveal(0.2);

  const partners = [
    { name: 'Kolkata Oxford Debating Circuit', src: 'https://rhetorica.tint.edu.in/brands/7.svg' },
    { name: 'TINT Photography Club', src: 'https://rhetorica.tint.edu.in/brands/8.svg' },
    { name: 'SIDA Technologies', src: 'https://rhetorica.tint.edu.in/brands/9.svg' },
    { name: 'The Kolkata Buzz', src: 'assets/images/10.webp' },
    { name: 'My Dawai Wala', src: 'https://rhetorica.tint.edu.in/brands/3.svg' },
    { name: 'B Clear', src: 'https://rhetorica.tint.edu.in/brands/4.svg' },
    { name: 'Calcutta Cacophony', src: 'https://rhetorica.tint.edu.in/brands/5.svg' },
    { name: 'Calcutta Musings', src: 'https://rhetorica.tint.edu.in/brands/6.svg' },
  ];

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate array for seamless infinite looping
  const extendedPartners = [...partners, ...partners];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2500); // Adjust delay between slides here (2.5 seconds)

    return () => clearInterval(timer);
  }, []);

  // When transition completes, check if we need to silently reset the loop
  const handleTransitionEnd = () => {
    if (currentIndex >= partners.length) {
      setIsTransitioning(false); // Disable animation for the snap
      setCurrentIndex(0); // Snap back to true start
    }
  };

  return (
    <section id="collaborations" className="w-full bg-white py-18 overflow-hidden">
      <div>
        
        {/* Logos Section */}
        <div ref={logosRef} className="mb-20">
          <h2 
            className={`text-center font-pirata-o1 text-4xl md:text-5xl text-black mb-16
              ${isLogosVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            Collaborations
          </h2>
          
          {/* Infinite Carousel Container */}
          <div 
            className={`overflow-hidden w-full relative ${isLogosVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div 
              className="flex w-full items-center"
              style={{
                // 20% width per slide because we want exactly 5 visible (100 / 5 = 20)
                transform: `translateX(-${currentIndex * 20}%)`,
                transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="w-[20%] shrink-0 flex items-center justify-center px-4 md:px-8"
                >
                  <img 
                    src={partner.src} 
                    alt={partner.name}
                    className="h-16 md:h-32 object-contain hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div 
          id="map" 
          ref={mapRef} 
          className="flex flex-col lg:flex-row gap-12 items-center justify-between mx-6 md:mx-36"
        >
          {/* Map Left Side */}
          <div 
            className={`w-full lg:w-3/5 rounded-2xl overflow-hidden shadow-lg border border-gray-100
              ${isMapVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            {/* Standard Google Maps embed URL natively handles the '...' truncation 
                inside its white card when the container is narrow. */}
            <iframe 
              src="https://maps.google.com/maps?q=Techno%20International%20New%20Town,%20Action%20Area%20I,%20Newtown&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="TINT Location"
            ></iframe>
          </div>

          {/* Text Right Side */}
          <div 
            className={`w-full lg:w-1/2 flex flex-col justify-center space-y-6
              ${isMapVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
          >
            <h3 className="text-3xl md:text-3xl font-bold text-black font-pirata-o7">
              Techno International New Town
            </h3>
            <p className="text-black text-sm md:text-base font-pirata-o4">
              1/1, Service Rd, DG Block(Newtown), Action Area I, Newtown, Chakpachuria, West Bengal 700156
            </p>
            
            <div className="space-y-2 text-sm md:text-base text-black font-pirata-o4">
              <p className="mb-3">Guide:</p>
              <div className="leading-relaxed">
                <p>a. 15 mins from Netaji Subhash Chandra Bose International Airport.</p>
                <p>b. 2 mins from Biswa Bangla Gate.</p>
                <p>c. 4 mins from Ecospace Business Park.</p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/maps?q=Techno+International+New+Town" 
              target="_blank" 
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#00a73e] hover:bg-[#0d844a] text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              View on Google Maps →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}