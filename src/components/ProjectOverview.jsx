import React, { useState, useEffect } from "react";
import BookingModal from "./BookingModal";

const ProjectOverview = () => {
  // Slider ke liye images ka array
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [
    "/about1.png",
    "/amenities3.png", 
    "/amenities7.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 3 second mein auto-slide change hone ka logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const highlights = [
    "Premium High-Rise Residential Towers",
    "Spacious Luxury Apartments",
    "Modern Architectural Design",
    "Landscaped Green Spaces",
    "Grand Entrance Lobby",
    "Clubhouse with Premium Facilities",
    "Swimming Pool",
    "Children's Play Area",
    "Indoor & Outdoor Sports Facilities",
    "Fitness Centre & Gym",
    "24×7 Security with CCTV",
    "High-Speed Elevators",
    "Dedicated Parking",
    "Power Backup",
    "Excellent Connectivity"
  ];

  return (
    <section className="py-24 bg-stone text-charcoal">
      <div className="max-w-7xl mx-auto px-6">

        {/* About Storytelling Section (Split Layout: Content Left, Image/Visual Story Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">

          {/* Left Column: Story Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3 block">
                About Project
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4 tracking-tight leading-tight">
                Welcome to RG's Pleiaddes
              </h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
            </div>

            <div className="space-y-4 text-slate text-base md:text-lg leading-relaxed">
              <p>
                RG's Pleiaddes is a premium residential development thoughtfully designed to redefine urban living. Every apartment is crafted with intelligent planning, abundant natural light, and superior ventilation, ensuring a comfortable and luxurious lifestyle.
              </p>
              <p>
                Surrounded by lush greenery and world-class infrastructure, the project combines elegant architecture with modern conveniences, creating the perfect destination for families seeking quality living.
              </p>
              <p className="text-charcoal font-medium">
                Whether it's your first home or your dream home, RG's Pleiaddes offers everything you need for a sophisticated lifestyle.
              </p>
            </div>
          </div>

          {/* Right Column: Auto Slider Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-white p-4 border border-stone/80 shadow-2xl">
              <div className="relative h-[380px] w-full bg-slate-200 overflow-hidden group">
                
                {/* Images Mapping for Slider */}
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Project Overview ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                  />
                ))}

              </div>

              {/* Floating Badge Card inside Right Section */}
              <div className="absolute -bottom-6 -left-6 bg-charcoal text-white p-6 shadow-xl hidden sm:block border-l-4 border-gold z-20">
                <p className="text-gold font-bold text-2xl">70%+</p>
                <p className="text-stone uppercase tracking-wider text-[10px]">Open Green Spaces</p>
              </div>
            </div>

            {/* Background Aesthetic Border Accent */}
            <div className="absolute -inset-4 border border-gold/30 -z-0 hidden sm:block"></div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { label: "Project Size", value: "8 Acres" },
            { label: "Green Spaces", value: "70%+" },
            { label: "Towers", value: "6 Iconic" },
            { label: "Clubhouse", value: "50k Sq.Ft" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 border-b-4 border-gold text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <h4 className="text-gold font-bold text-3xl mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </h4>
              <p className="text-charcoal uppercase tracking-wider text-xs font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Project Highlights Section */}
        <div className="bg-white p-10 md:p-14 border border-stone/60 shadow-md mb-16">
          <div className="text-center mb-10">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-2 block">
              Excellence in Detail
            </span>
            <h3 className="text-3xl font-serif text-charcoal mb-3">Project Highlights</h3>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-stone/40 border border-stone/80 hover:border-gold transition-colors duration-300"
              >
                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-gold rounded-full"></span>
                <span className="text-charcoal font-medium text-sm md:text-base leading-snug">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs md:text-sm tracking-widest uppercase text-slate font-semibold">
              Location: <span className="text-charcoal">Sector-1, Greater Noida West</span>
            </p>
          </div>
        </div>

        {/* Brochure/Visit Buttons */}
     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
  <button 
    onClick={() => {
      window.open('/brochure.pdf', '_blank');
    }}
    className="w-full sm:w-auto bg-charcoal text-white px-8 md:px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-gold transition-all duration-300 shadow-md text-center"
  >
    Download Brochure
  </button>
  
  <button 
    onClick={() => setIsModalOpen(true)}
    className="w-full sm:w-auto bg-white border-2 border-charcoal text-charcoal px-8 md:px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-charcoal hover:text-white transition-all duration-300 shadow-md text-center"
  >
    Book Free Site Visit
  </button>
</div>

      </div>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ProjectOverview;