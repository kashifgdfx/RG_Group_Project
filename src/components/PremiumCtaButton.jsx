import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BookingModal from './BookingModal'; // Apne BookingModal component ka path yaha import kar lein

const FooterCtaSection = ({ onBrochureClick }) => {
  // Booking Modal ke liye state
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Agar mobile menu/drawer ka state hai to use yaha rakh sakte hain (jaise setIsOpen)
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <>
      <section className="relative py-20 lg:py-28 bg-[#121620] text-white overflow-hidden">
        
        {/* Background Ambient Glow & Luxury Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0b0f19] border border-[#c5a059]/30 p-8 sm:p-12 lg:p-16 rounded-sm shadow-2xl overflow-hidden">

            {/* Decorative Corner Luxury Frame Borders */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-8 h-8 pointer-events-none`}>
                <div className={`absolute w-full h-[1px] bg-[#c5a059]/60 ${i < 2 ? 'top-0' : 'bottom-0'}`} />
                <div className={`absolute h-full w-[1px] bg-[#c5a059]/60 ${i % 2 === 0 ? 'left-0' : 'right-0'}`} />
              </div>
            ))}

            {/* Background Watermark Symbol */}
            <div className="absolute right-[-20px] bottom-[-30px] text-[#c5a059]/5 font-serif text-[180px] pointer-events-none select-none leading-none">
              ✦
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Content Area (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center lg:justify-start gap-3"
                >
                  <span className="w-8 h-[1px] bg-[#c5a059]" />
                  <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-medium">Exclusive Invitation</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif leading-[1.15]"
                >
                  Step Into <span className="text-[#c5a059] italic">7-Star Luxury</span> Living
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
                >
                  Download the complete e-brochure to explore master plans, luxury specifications, and pricing, or schedule a private site visit with our relationship manager.
                </motion.p>
              </div>

              {/* Right Action Buttons Area (5 Cols) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-center lg:items-end"
              >
                {/* Primary CTA - Download Brochure */}
                <motion.button
                   whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      window.open('/brochure.pdf', '_blank');
                    }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto lg:w-full relative group overflow-hidden rounded-sm p-[1px] focus:outline-none cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#c5a059] via-white/80 to-[#c5a059] opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <span className="relative flex items-center justify-between bg-[#121620] px-6 py-4 rounded-sm transition-all duration-300 group-hover:bg-[#121620]/90">
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform" />
                    
                    <div className="flex items-center gap-3">
                      <span className="text-[#c5a059] text-xs font-bold transition-transform duration-300 group-hover:rotate-45">✦</span>
                      <div className="flex flex-col text-left">
                        <span className="text-white font-serif tracking-[0.2em] text-xs uppercase group-hover:text-[#c5a059] transition-colors">
                          Download Brochure
                        </span>
                        <span className="text-[10px] tracking-widest text-white/50 font-light mt-0.5">
                          Plans & Specifications
                        </span>
                      </div>
                    </div>

                    <span className="ml-3 flex items-center justify-center w-7 h-7 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-[#121620] transition-all duration-300 group-hover:translate-x-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </span>
                </motion.button>

                {/* Secondary CTA - Schedule Site Visit (Updated with your exact button styling & handler) */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto lg:w-full"
                >
                  <button
                    onClick={() => {
                      setIsMenuOpen(false); // agar mobile drawer close karna ho
                      setIsModalOpen(true);
                    }}
                    className="btn-gold relative overflow-hidden group w-full py-4 px-6 rounded-sm text-center font-serif tracking-[0.2em] text-xs uppercase cursor-pointer block border border-[#c5a059]"
                  >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                      Book Site Visit
                    </span>
                    <span className="absolute inset-0 bg-[#c5a059] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                  </button>
                </motion.div>

              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal Integration */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FooterCtaSection;