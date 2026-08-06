import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from './BookingModal';
import {useState} from 'react';

const AreaIcon = () => (
  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);

const FeatureCheck = () => (
  <svg className="w-4 h-4 text-gold mr-2.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);

const Configurations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Alag-alag content wale 4 BHK cards
  const flats = [
    {
      title: "Grand 4 BHK + 3T",
      subTitle: "The Epitome of Exclusivity",
      area: "2185 Sq.Ft.",
      price: "20 Lakh*",
      desc: "Experience expansive living spaces, premium finishes, and breathtaking views reserved for the privileged few.",
      features: [
        "Premium Podium-Based Development",
        "Prime 3-Side Corner Location",
        "Designer Master Suite",
        "Premium Toughened Glass Balconies"
      ],
      imageUrl: "/hero1.webp",

    },
 
    {
      title: "4 BHK Penthouse Style",
      subTitle: "Premium Luxury Apartments",
      area: "2185 Sq.Ft.",
      price: "20 Lakh*",
      desc: "Indulge in sky-high luxury featuring majestic ceiling heights, private terrace garden space, and elite aesthetics.",
      features: [
        "Grand Double-Height Entrance Lobby",
        "Private Terrace Garden",
        "Designer Water Features & Fountains",
        "Premium Seating Lounge"
      ],
      imageUrl: "/amenities7.jpg"
    }
  ];

  return (
    <>
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-widest text-xs font-medium mb-2 block">Luxury Redefined</span>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-3">Featured Residences</h2>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full flex overflow-x-hidden group">
          {/* Gradient Edges Effect for Smooth Fade */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div> */}
          {/* <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div> */}

          {/* Marquee Track (Hover karne par animation pause ho jayegi) */}
          <div className="flex animate-marquee gap-8 py-4 group-hover:[animation-play-state:paused]">
            
            {/* First Set of Cards */}
            {flats.map((flat, index) => (
              <div 
                key={`1-${index}`} 
                className="bg-[#faf9f6] border border-gray-200 grid md:grid-cols-12 gap-0 shadow-lg rounded-xl overflow-hidden w-[85vw] md:w-[700px] flex-shrink-0"
              >
                {/* Left Column: Image */}
                <div className="md:col-span-6 h-56 md:h-auto relative">
                  <img 
                    src={flat.imageUrl} 
                    alt={flat.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-charcoal px-3 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-sm">
                    <AreaIcon />
                    {flat.area}
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <h3 className="text-2xl font-serif text-charcoal mb-1">{flat.title}</h3>
                      <p className="text-gold font-medium text-xs italic">{flat.subTitle}</p>
                    </div>

                    <p className="text-slate mb-6 text-sm leading-relaxed">
                      {flat.desc}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-[11px] text-charcoal uppercase tracking-wider mb-3 font-bold">Signature Inclusions</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {flat.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-charcoal text-xs">
                            <FeatureCheck />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-charcoal">{flat.price}</div>
                        <div className="text-[10px] text-slate uppercase tracking-wide">Onwards (All Incl.)</div>
                      </div>
                      {/* <div className="text-right text-[10px] text-slate italic">
                          Limited Availability
                      </div> */}
                    </div>

                    
                      <button onClick={() => setIsModalOpen(true)}
                      className="w-full bg-charcoal text-white py-3 px-6 font-bold uppercase tracking-wider text-xs hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-sm">
                      Book site Visit
                      </button>
                   
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Infinite Loop */}
            {flats.map((flat, index) => (
              <div 
                key={`2-${index}`} 
                className="bg-[#faf9f6] border border-gray-200 grid md:grid-cols-12 gap-0 shadow-lg rounded-xl overflow-hidden w-[85vw] md:w-[700px] flex-shrink-0"
              >
                <div className="md:col-span-6 h-56 md:h-auto relative">
                  <img 
                    src={flat.imageUrl} 
                    alt={flat.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-charcoal px-3 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-sm">
                    <AreaIcon />
                    {flat.area}
                  </div>
                </div>

                <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <h3 className="text-2xl font-serif text-charcoal mb-1">{flat.title}</h3>
                      <p className="text-gold font-medium text-xs italic">{flat.subTitle}</p>
                    </div>

                    <p className="text-slate mb-6 text-sm leading-relaxed">
                      {flat.desc}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-[11px] text-charcoal uppercase tracking-wider mb-3 font-bold">Signature Inclusions</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {flat.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-charcoal text-xs">
                            <FeatureCheck />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-charcoal">{flat.price}</div>
                        <div className="text-[10px] text-slate uppercase tracking-wide">Onwards (All Incl.)</div>
                      </div>
                      {/* <div className="text-right text-[10px] text-slate italic">
                          Limited Availability
                      </div> */}
                    </div>

                      <button onClick={() => setIsModalOpen(true)}
                      className="w-full bg-charcoal text-white py-3 px-6 font-bold uppercase tracking-wider text-xs hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-sm">
                       Book Site Visit
                      </button>
                    
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
       <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Configurations;