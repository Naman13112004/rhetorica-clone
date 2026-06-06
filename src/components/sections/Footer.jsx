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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 px-24 py-12">

          {/* Brand Col */}
          <div className="flex flex-col space-y-4">
            <h2 className="font-pirata-o1 text-6xl text-black">Rhetorica '26</h2>
            <div data-orientation="horizontal" role="none" data-slot="separator" class="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px h-px bg-linear-to-r from-transparent via-black/50 to-transparent"></div>
            <p className="text-md font-semibold text-black leading-relaxed font-pirata-o7">
              Annual Literary Festival of<br />Techno International New Town
            </p>
            <p className="text-md font-pirata-o7 font-semibold text-black">Organised by LITWITS</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3 ps-16">
            <h3 className="font-bold text-black mb-6 text-xl font-pirata-o7">Quick Links</h3>
            {['About', "'26 Edition", 'Countdown', 'Events', 'Collaborations', 'Map'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/[' ]/g, '')}`} className="text-md font-medium leading-tight text-black hover:underline transition-colors font-pirata-o7">
                {link}
              </a>
            ))}
          </div>

          {/* Documents */}
          <div className="flex flex-col space-y-3 leading-tight">
            <h3 className="font-bold text-black mb-6 text-xl font-pirata-o7">Documents</h3>
            <a href="https://drive.google.com/file/d/1CvgcmPsVR3iD6pAS5vtTb4SdltDbcF8g/view?usp=sharing" className="text-md text-black hover:underline font-pirata-o7 font-medium transition-colors">Brochure</a>
            <a href="https://drive.google.com/file/d/1p0fV_mpq7S6asz9_II6afLCLMbQOeE8g/view?usp=sharing" className="text-md text-black hover:underline font-pirata-o7 font-medium transition-colors">Sponsorship Deck</a>
          </div>

          {/* Socials & Contact */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-black mb-2 text-xl font-pirata-o7">Follow us on Social Media</h3>
            <div className="flex space-x-4 mb-4">
              {/* Replace with standard SVG icons */}
              <a href="https://www.instagram.com/rhetorica.tint">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" class="h-5 w-5 md:h-6 md:w-6"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"></path><path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5"></path><path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
              </a>
              <a href="https://www.instagram.com/litwits.tint">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" class="h-5 w-5 md:h-6 md:w-6"><path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"></path><path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5"></path><path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
              </a>
              <a href="https://www.facebook.com/TINT.Literary.Club.Litwits">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" class="h-5 w-5 md:h-6 md:w-6"><path d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" fill-rule="evenodd" stroke-linejoin="round" stroke-width="1.5"></path></svg>
              </a>
            </div>
            <div data-orientation="horizontal" role="none" data-slot="separator" class="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px h-px bg-linear-to-r from-transparent via-black/50 to-transparent"></div>
            <div className="leading-loose">
              <a href="mailto:rhetorica.tint@gmail.com" className="text-xs font-pirata-o7 text-black flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" class="h-4 w-4"><path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"></path><path d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                rhetorica.tint@gmail.com
              </a>
              <a href="mailto:literary.club@tict.edu.in" className="text-xs font-pirata-o7 text-black flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" class="h-4 w-4"><path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"></path><path d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                literary.club@tict.edu.in
              </a>
            </div>
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
      <div className="w-full font-pirata-o7 font-semibold  bg-white py-4 text-center border-t border-gray-200">
        <p className="text-xs md:text-sm text-black">
          Built with ❤️ by <a href="https://sidahq.com" className="text-blue-600 font-semibold">SIDA Technologies</a>
        </p>
        <p className="text-xs md:text-sm text-black">
          An initiative by LITWITS & Rhetorica Organising Committee
        </p>
      </div>
    </footer>
  );
}



