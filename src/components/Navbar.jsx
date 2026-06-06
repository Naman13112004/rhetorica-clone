import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['About', "'26 Edition", 'Countdown', 'Events', 'Collaborations', 'Map'];

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute top-4 right-8 z-50 p-3 rounded-full transition-all duration-300 ${
          isOpen 
            ? 'bg-transparent shadow-none border-transparent' 
            : 'bg-white/70 shadow-md border border-gray-100'
        }`}
        aria-label="Toggle Menu"
      >
        {/* Animation Logic:
          - Opening (isOpen = true): Container rotates 45deg immediately. Icons wait 300ms, then cross-fade.
          - Closing (isOpen = false): Icons cross-fade immediately. Container waits 200ms, then rotates back to 0.
        */}
        <div 
          className={`relative w-6 h-6 transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-90 delay-0' : 'rotate-0 delay-200'
          }`}
        >
          {/* Hamburger Icon - Rotated 180 degrees */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
            className={`absolute inset-0 origin-center rotate-180 transition-opacity duration-200 ${
              isOpen ? 'opacity-0 delay-300' : 'opacity-100 delay-0'
            }`}
          >  
            <path d="M4 5L16 5"></path>
            <path d="M4 12L20 12"></path>
            <path d="M4 19L12 19"></path>
          </svg>

          {/* Close (X) Icon - Pre-rotated by -45deg so it sits upright when the parent rotates to 45deg */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
            className={`absolute inset-0 rotate-90 transition-opacity duration-200 ${
              isOpen ? 'opacity-100 delay-300' : 'opacity-0 delay-0'
            }`} 
            aria-hidden="true"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </div>
      </button>

      {/* Flyout Menu */}
      <div 
        className={`absolute top-4 right-8 z-40 bg-white/95 backdrop-blur-md rounded-xl shadow-xl transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? 'w-48 opacity-100 pointer-events-auto' : 'w-0 opacity-0 pointer-events-none'}`}
      >
        <div className="px-6 pt-10 pb-4 flex flex-col space-y-2 min-w-[192px] bg-slate-100">
          {menuItems.map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/[' ]/g, '')}`}
              onClick={() => setIsOpen(false)}
              className="font-pirata-o5 font-normal text-black hover:underline transition-all duration-300 text-sm md:text-base cursor-pointer"
              style={{
                transitionDelay: isOpen ? `${(index * 40) + 200}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(15px)',
                opacity: isOpen ? 1 : 0
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}