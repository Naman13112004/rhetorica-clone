// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Countdown from './components/sections/Countdown';
import Events from './components/sections/Events';
import Collaborations from './components/sections/Collaborations';
import Footer from './components/sections/Footer';
import Edition from './components/sections/26edition';

function App() {
  return (
    // 'scroll-smooth' handles the native anchor linking behavior requested in the nav
    <main className="min-h-screen font-sans bg-white text-gray-900">
      {/* <Navbar /> */}
      
      {/* Wrap sections in a container if you need global overflow hidden 
        to prevent horizontal scrolling issues with the slide-in animations.
      */}
      <div className="overflow-x-hidden">
        <Hero />
        <About />
        <Edition />
        <Countdown />
        <Events />
        <Collaborations />
        <Footer />
      </div>
    </main>
  );
}

export default App;