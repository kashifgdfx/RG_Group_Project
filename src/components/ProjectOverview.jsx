import React, { useState, useEffect } from "react";
import BookingModal from "./BookingModal";

const ProjectOverview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider images aur unke corresponding dynamic badge/labels ka data array
  const sliderData = [
    {
      image: "/amenities7.jpg",
    
      label: "70% Open Green Spaces"
    },
     {
      image: "/aroma-garden.jpg",
  
      label: "🌿 Aroma Garden"
    },
    {
      image: "/amenities3.png",
  
     label: "Sports & Fitness"
    },
    {
      image: "/amenities8.jpg",
   
      label: "Luxury Indoor & Outdoor Swimming Pool"
    }
  ];

  // 4 second mein auto-slide change hone ka logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderData.length]);

  const highlights = [
    "Premium High-Rise Residential Towers",
    "Premium Luxury Apartments",
    "Modern Architectural Design",
    "70% Landscaped Green Spaces",
    "Beautifully Landscaped Aroma Garden",
    "Grand Entrance Lobby",
    "Every Tower Offers Just 8 Apartments Per Floor",
    "Clubhouse with Premium Facilities",
    "Premium Podium-Based Development",
    "Mivan Trusted Construction Expertise",
    "Prime 3-Side Corner Location",
    "Premium Banquet Hall (Capacity: 200–300 Guests)",
    "Indoor & Outdoor Swimming Pools",
    "Children's Play Area",
    "Indoor & Outdoor Sports Facilities",
    "12 ft Ceiling Height",
    "Premium Toughened Glass Balconies",
    "Fitness Centre & Gym",
    "24×7 Security with CCTV",
    "High-Speed lifts in every towers",
    "Dedicated Parking",
    "Power Backup",
    "Excellent Connectivity"
  ];

  return (
    <section id="overview" className="py-24 bg-stone text-charcoal">
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

          {/* Right Column: Auto Slider Section with Badge placed BELOW the Image Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-white  border border-stone/80 shadow-2xl">
              
              {/* Image Box */}
              <div className="relative h-[400px] w-full bg-slate-200 overflow-hidden group">
                {sliderData.map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={`Project Overview ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                  />
                ))}
              </div>

              {/* Dynamic Text Box placed strictly BELOW the Image Box */}
              <div className="mt-4 bg-charcoal text-white px-6 py-4 shadow-md border-l-4 border-gold flex items-center justify-between transition-all duration-500">
                <div>
                  <p className="text-gold font-bold text-xl md:text-2xl">{sliderData[currentIndex].value}</p>
                  <p className="text-stone uppercase tracking-wider text-[11px] font-medium">{sliderData[currentIndex].label}</p>
                </div>
                
                {/* Slider Indicators */}
                <div className="flex space-x-1.5">
                  {sliderData.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-6 bg-gold" : "w-1.5 bg-white/50"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>

            </div>

            {/* Background Aesthetic Border Accent */}
            <div className="absolute -inset-4 border border-gold/30 -z-0 hidden sm:block"></div>
          </div>

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
          {/* <button 
            onClick={() => {
              window.open('/brochure.pdf', '_blank');
            }}
            className="w-full sm:w-auto bg-charcoal text-white px-8 md:px-10 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-gold transition-all duration-300 shadow-md text-center"
          >
            Download Brochure
          </button> */}
          
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