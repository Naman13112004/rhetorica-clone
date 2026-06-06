// src/components/sections/Collaborations.jsx
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Collaborations() {
  const { ref: logosRef, isVisible: isLogosVisible } = useScrollReveal();
  const { ref: mapRef, isVisible: isMapVisible } = useScrollReveal(0.2);

  const partners = [
    { name: 'Kolkata Oxford Debating Circuit', src: 'https://rhetorica.tint.edu.in/brands/7.svg' },
    { name: 'TINT Photography Club', src: 'https://rhetorica.tint.edu.in/brands/8.svg' },
    { name: 'SIDA Technologies', src: 'https://rhetorica.tint.edu.in/brands/9.svg' },
    { name: 'The Kolkata Buzz', src: '/src/assets/images/10.webp' },
    { name: 'My Dawai Wala', src: 'https://rhetorica.tint.edu.in/brands/3.svg' },
    { name: 'B Clear', src: 'https://rhetorica.tint.edu.in/brands/4.svg' },
    { name: 'Calcutta Cacophony', src: 'https://rhetorica.tint.edu.in/brands/5.svg' },
    { name: 'Calcutta Musings', src: 'https://rhetorica.tint.edu.in/brands/6.svg' },
  ];

  return (
    <section id="collaborations" className="w-full bg-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Logos Section */}
        <div ref={logosRef} className="mb-32">
          <h2 
            className={`text-center font-pirata-o1 text-4xl md:text-5xl text-black mb-16
              ${isLogosVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            Collaborations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {partners.map((partner, index) => (
              <img 
                key={index}
                src={partner.src} 
                alt={partner.name}
                className={`h-16 md:h-20 object-contain transition-all duration-300
                  ${isLogosVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div 
          id="map" 
          ref={mapRef} 
          className="flex flex-col lg:flex-row gap-12 items-center justify-between"
        >
          {/* Map Left Side (Slide in from Left via negative Right) */}
          <div 
            className={`w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-gray-100
              ${isMapVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            {/* Replace src with the actual Google Maps embed link */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0230048819503!2d88.4757762!3d22.5782429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753269586b03%3A0xfbb4d0c346a81109!2sTechno%20International%20New%20Town%20(TINT)!5e0!3m2!1sen!2sin!4v1768564381607!5m2!1sen!2sin" 
              width="100%" 
              height="350" 
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
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              Techno International New Town
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              1/1, Service Rd, DG Block(Newtown), Action Area I, Newtown, Chakpachuria, West Bengal 700156
            </p>
            
            <div className="space-y-2 text-sm md:text-base text-gray-800">
              <p className="font-semibold mb-3">Guide:</p>
              <p>a. 15 mins from Netaji Subhash Chandra Bose International Airport.</p>
              <p>b. 2 mins from Biswa Bangla Gate.</p>
              <p>c. 4 mins from Ecospace Business Park.</p>
            </div>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center bg-[#0f9d58] hover:bg-[#0d844a] text-white px-6 py-2 rounded-lg font-medium transition-colors mt-4"
            >
              View on Google Maps →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}