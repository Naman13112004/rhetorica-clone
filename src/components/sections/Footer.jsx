// src/components/sections/Footer.jsx
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Footer() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer className="w-full relative overflow-hidden pt-4">
      <div 
        ref={ref}
        className={`w-full z-10 relative
          h-48 md:h-128 bg-[url('https://rhetorica.tint.edu.in/footer.png')] bg-cover bg-bottom bg-no-repeat 
          ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 px-24 py-16">
          
          {/* Brand Col */}
          <div className="flex flex-col space-y-4">
            <h2 className="font-pirata-o1 text-6xl text-black">Rhetorica '26</h2>
            <p className="text-sm font-medium text-gray-800 leading-relaxed max-w-[250px]">
              Annual Literary Festival of<br />Techno International New Town
            </p>
            <p className="text-sm font-bold text-gray-900 mt-4">Organised by LITWITS</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-black mb-2">Quick Links</h3>
            {['About', "'26 Edition", 'Countdown', 'Events', 'Collaborations', 'Map'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/[' ]/g, '')}`} className="text-sm text-gray-700 hover:text-black transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Documents */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-black mb-2">Documents</h3>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">Brochure</a>
            <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">Sponsorship Deck</a>
          </div>

          {/* Socials & Contact */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-black mb-2">Follow us on Social Media</h3>
            <div className="flex space-x-4 mb-4">
              {/* Replace with standard SVG icons */}
              <a href="#" className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">IG</a>
              <a href="#" className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">FB</a>
            </div>
            <a href="mailto:rhetorica.tint@gmail.com" className="text-sm text-gray-700 hover:text-black flex items-center gap-2">
              ✉ rhetorica.tint@gmail.com
            </a>
            <a href="mailto:literary.club@tict.edu.in" className="text-sm text-gray-700 hover:text-black flex items-center gap-2">
              ✉ literary.club@tict.edu.in
            </a>
          </div>
        </div>
      </div>

      {/* The Scenic Footer Illustration */}
      {/* Assuming the image is a continuous strip in your assets */}
      {/* <div 
        className={`w-full h-48 md:h-[350px] bg-[url('https://rhetorica.tint.edu.in/footer.png')] bg-cover bg-bottom bg-no-repeat relative z-0
          ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} 
        style={{ transitionDelay: '300ms' }}
      /> */}

      {/* Bottom Credits Bar */}
      <div className="w-full font-pirata-o5 font-bold  bg-white py-4 text-center border-t border-gray-200">
        <p className="text-xs md:text-sm text-gray-600">
          Built with <span className="text-red-500">♥</span> by <a href="https://sidahq.com" className="text-blue-600 font-medium">SIDA Technologies</a>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          An initiative by LITWITS & Rhetorica Organising Committee
        </p>
      </div>
    </footer>
  );
}