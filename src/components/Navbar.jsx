import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BookingModal from "./BookingModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/75 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Single Logo Container */}
          <div className="z-50 flex items-center w-46 lg:w-50">
            <Link to="/" className="block w-full">
              <img
                src="/logo.png"
                alt="RG Group Logo"
                className="h-16 lg:h-18 w-full object-contain object-left"
              />
            </Link>
          </div>

          {/* Desktop Navigationnnn */}
          <div className="hidden md:flex items-center gap-10 text-white font-medium text-sm uppercase tracking-[0.2em]">
            <HashLink smooth to="/#overview" className="hover:text-gold transition-colors duration-300">
              Overview
            </HashLink>
            <HashLink smooth to="/#amenities" className="hover:text-gold transition-colors duration-300">
              Amenities
            </HashLink>
            
            <Link to="/floor-plans" className="hover:text-gold transition-colors duration-300">
              Floor Plans
            </Link>

            <HashLink smooth to="/#location" className="hover:text-gold transition-colors duration-300">
              Location
            </HashLink>
          </div>

          {/* Desktop CTAAAA */}
          <div className="hidden md:block">
             <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="btn-gold relative overflow-hidden group mt-4"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Book Site Visit
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl z-50"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-transform duration-500 md:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <HashLink
              smooth
              to="/#overview"
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl uppercase tracking-widest hover:text-gold transition-colors"
            >
              Overview
            </HashLink>
            <HashLink
              smooth
              to="/#amenities"
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl uppercase tracking-widest hover:text-gold transition-colors"
            >
              Amenities
            </HashLink>
            <Link
              to="/floor-plans"
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl uppercase tracking-widest hover:text-gold transition-colors"
            >
              Floor Plans
            </Link>
            <HashLink
              smooth
              to="/#location"
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl uppercase tracking-widest hover:text-gold transition-colors"
            >
              Location
            </HashLink>

            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="btn-gold relative overflow-hidden group mt-4"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                Book Site Visit
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
            </button>
          </div>
          
        </div>
      </nav>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;