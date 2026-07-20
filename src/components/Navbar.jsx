import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-serif text-charcoal tracking-tighter z-50">
          RG GROUP
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-slate font-medium text-sm uppercase tracking-widest">
          <a href="#overview" className="hover:text-gold transition-colors duration-300">Overview</a>
          <a href="#amenities" className="hover:text-gold transition-colors duration-300">Amenities</a>
          <a href="#location" className="hover:text-gold transition-colors duration-300">Location</a>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <button className="btn-gold">Book Site Visit</button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-charcoal z-50" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <a href="#overview" onClick={() => setIsOpen(false)} className="text-xl uppercase font-serif text-charcoal">Overview</a>
          <a href="#amenities" onClick={() => setIsOpen(false)} className="text-xl uppercase font-serif text-charcoal">Amenities</a>
          <a href="#location" onClick={() => setIsOpen(false)} className="text-xl uppercase font-serif text-charcoal">Location</a>
          <button className="btn-gold mt-4">Book Site Visit</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;