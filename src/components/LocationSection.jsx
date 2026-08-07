import React, { useState ,useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMapMarkedAlt,
  FaSchool,
  FaHospital,
  FaShoppingBag,
  FaSubway,
} from "react-icons/fa";

const locations = [
  { name: "ACE Divino", distance: "0.0 km", top: "52%", left: "55%", category: "project" },
  { name: "ATS Destinaire", distance: "0.0 km", top: "68%", left: "55%", category: "project" },
  { name: "Yatharth Hospital", distance: "2.3 km", top: "22%", left: "78%", category: "hospital" },
  { name: "Sanfort Playschool", distance: "1.1 km", top: "20%", left: "64%", category: "school" },
  { name: "Adorables Daycare", distance: "400 m", top: "33%", left: "65%", category: "school" },
  { name: "DRS Public School", distance: "850 m", top: "48%", left: "74%", category: "school" },
  { name: "Gautam Budh Inter College", distance: "2.9 km", top: "61%", left: "82%", category: "school" },
  { name: "Felix Hospital", distance: "--", top: "73%", left: "61%", category: "hospital" },
  { name: "Numed Hospital", distance: "--", top: "33%", left: "80%", category: "hospital" },
  { name: "Star City Hospital", distance: "--", top: "44%", left: "91%", category: "hospital" },
  { name: "D-Mart", distance: "--", top: "24%", left: "68%", category: "shopping" },
  { name: "Ved Van Park", distance: "--", top: "48%", left: "42%", category: "shopping" },
  { name: "Noida Sector 81 Metro", distance: "8.1 km", top: "62%", left: "46%", category: "transport" },
  { name: "Anand Vihar Railway Stn", distance: "23.6 km", top: "24%", left: "42%", category: "transport" },
  { name: "Indira Gandhi Airport", distance: "53.0 km", top: "48%", left: "12%", category: "transport" }
];

const categories = [
  { id: "all", label: "All Landmarks", icon: <FaMapMarkedAlt /> },
  { id: "school", label: "Schools", icon: <FaSchool /> },
  { id: "hospital", label: "Healthcare", icon: <FaHospital /> },
  { id: "shopping", label: "Shopping", icon: <FaShoppingBag /> },
  { id: "transport", label: "Transit", icon: <FaSubway /> },
];

const detailedLandmarks = [
  { name: "Paras Public School", dist: "0.7 km", category: "school" },
  { name: "Sanfort Playschool", dist: "1.1 km", category: "school" },
  { name: "D.S. International School", dist: "2.2 km", category: "school" },
  { name: "DRS Public School", dist: "850 m", category: "school" },
  { name: "Sarvottam International School", dist: "5.3 km", category: "school" },
  { name: "Yatharth Super Speciality Hospital", dist: "2.3 km", category: "hospital" },
  { name: "Saini Hospital", dist: "1.5 km", category: "hospital" },
  { name: "Felix Hospital", dist: "Nearby", category: "hospital" },
  { name: "Numed Hospital", dist: "Nearby", category: "hospital" },
  { name: "Kailash Hospital", dist: "7.5 km", category: "hospital" },
  { name: "D-Mart", dist: "Nearby", category: "shopping" },
  { name: "Valencia Square", dist: "2.0 km", category: "shopping" },
  { name: "Ved Van Park", dist: "Nearby", category: "shopping" },
  { name: "Gaur City Mall", dist: "8.0 km", category: "shopping" },
  { name: "Nearest Bus Stop", dist: "2.8 km", category: "transport" },
  { name: "Noida Sector 81 Metro Station", dist: "8.1 km", category: "transport" },
  { name: "Anand Vihar Railway Terminal", dist: "23.6 km", category: "transport" },
  { name: "Indira Gandhi International Airport", dist: "53.0 km", category: "transport" }
];

const LocationSection = () => {

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);

  const [activeTab, setActiveTab] = useState("all");

  const filteredLandmarks = activeTab === "all" 
    ? detailedLandmarks 
    : detailedLandmarks.filter(item => item.category === activeTab);

  return (
    <section className="relative py-24 lg:py-42 pt-20 bg-[#121620]  overflow-hidden" id="location">
      
      {/* Inline styles for animated glowing constellation lines */}
      <style>{`
        @keyframes pulseLine {
          0% { stroke-opacity: 0.15; stroke-dashoffset: 24; }
          50% { stroke-opacity: 0.85; stroke-dashoffset: 0; }
          100% { stroke-opacity: 0.15; stroke-dashoffset: -24; }
        }
        .animated-constellation-line {
          stroke-dasharray: 6 6;
          animation: pulseLine 4s ease-in-out infinite;
        }
        .animated-constellation-line-delayed {
          stroke-dasharray: 6 6;
          animation: pulseLine 4s ease-in-out infinite 2s;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(197, 160, 89, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(197, 160, 89, 0.6);
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >/
          <span className="w-10 h-[1px] bg-[#c5a059]" />
          <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-medium">Strategic Location</span>
        </motion.div>

        {/* Main Grid Container with balanced vertical alignment */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Text & Categorized Landmarks List (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-white text-3xl sm:text-4xl xl:text-5xl font-serif leading-[1.15] mb-4"
              >
                Location <br />
                <span className="text-[#c5a059] italic">Map & Connectivity</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-white/60 text-xs sm:text-sm leading-relaxed"
              >
                Nestled in Sector 1, Greater Noida West, RG's Pleiaddes stands at the pinnacle of connectivity and convenience, offering seamless access to premier business hubs, healthcare, and educational institutions.
              </motion.p>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`text-xs px-3 py-2 rounded-sm transition-all duration-300 border ${
                    activeTab === cat.id
                      ? "bg-[#c5a059] text-[#121620] border-[#c5a059] font-medium shadow-md shadow-[#c5a059]/20"
                      : "bg-white/[0.03] text-white/70 border-[#c5a059]/20 hover:border-[#c5a059]/50 hover:text-white"
                  }`}
                >
                 <div className="flex items-center gap-2">
  {cat.icon}
  <span>{cat.label}</span>
</div>
                </button>
              ))}
            </div>

            {/* Filtered Landmarks List Container */}
            <div className="bg-white/[0.02] border border-[#c5a059]/20 p-5 rounded-sm shadow-xl backdrop-blur-sm">
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#c5a059]/10">
                <h3 className="text-[#c5a059] text-xs font-semibold tracking-[0.2em] uppercase">
                  {activeTab === "all" ? "All Nearby Destinations" : categories.find(c => c.id === activeTab)?.label}
                </h3>
                <span className="text-[10px] text-white/40">{filteredLandmarks.length} locations</span>
              </div>

              <div className="space-y-3 max-h-[280px] sm:max-h-[310px] overflow-y-auto pr-2 custom-scrollbar">
                <AnimatePresence mode="wait">
                  {filteredLandmarks.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, delay: i * 0.02 }}
                      className="flex justify-between items-center text-xs group py-1.5 border-b border-white/[0.03] last:border-none"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]/50 group-hover:bg-[#c5a059] transition-colors" />
                        <span className="text-white/80 font-light group-hover:text-white transition-colors">{item.name}</span>
                      </div>
                      <span className="text-[#c5a059] font-medium bg-[#c5a059]/10 px-2 py-0.5 rounded text-[11px] shrink-0">{item.dist}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <p className="text-[10px] text-white/40 mt-4 italic border-t border-[#c5a059]/10 pt-2.5">*Distances calculated from project site via major roadways. Map not to scale.</p>
            </div>

          </div>

          {/* Right: Constellation Map Visual (7 cols) - Polished Dimensions */}
          <motion.div
            id="location-map"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative h-[480px] sm:h-[540px] lg:h-[580px] w-full bg-[#0b0f19] border border-[#c5a059]/30 rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Background constellation ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(197,160,89,0.12)_0%,transparent_70%)]" />

            {/* Constellation Connecting Lines Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#c5a059" strokeWidth="1" fill="none">
                <line x1="63%" y1="50%" x2="55%" y2="52%" className="animated-constellation-line" />
                <line x1="63%" y1="50%" x2="55%" y2="68%" className="animated-constellation-line-delayed" />
                <line x1="63%" y1="50%" x2="74%" y2="48%" className="animated-constellation-line" />
                <line x1="63%" y1="50%" x2="61%" y2="73%" className="animated-constellation-line-delayed" />
                <line x1="63%" y1="50%" x2="82%" y2="61%" className="animated-constellation-line" />
                <line x1="74%" y1="48%" x2="80%" y2="33%" className="animated-constellation-line-delayed" />
                <line x1="80%" y1="33%" x2="91%" y2="44%" className="animated-constellation-line" />
                <line x1="74%" y1="48%" x2="91%" y2="44%" className="animated-constellation-line-delayed" />
                <line x1="74%" y1="48%" x2="78%" y2="22%" className="animated-constellation-line" />
                <line x1="55%" y1="52%" x2="46%" y2="62%" className="animated-constellation-line" />
                <line x1="55%" y1="52%" x2="42%" y2="48%" className="animated-constellation-line-delayed" />
                <line x1="46%" y1="62%" x2="61%" y2="73%" className="animated-constellation-line" />
                <line x1="42%" y1="48%" x2="68%" y2="24%" className="animated-constellation-line-delayed" />
                <line x1="68%" y1="24%" x2="64%" y2="20%" className="animated-constellation-line" />
                <line x1="68%" y1="24%" x2="78%" y2="22%" className="animated-constellation-line-delayed" />
                <line x1="42%" y1="48%" x2="42%" y2="24%" className="animated-constellation-line" />
                <line x1="42%" y1="24%" x2="33%" y2="33%" className="animated-constellation-line-delayed" />
                <line x1="33%" y1="33%" x2="12%" y2="48%" className="animated-constellation-line" />
              </g>
            </svg>

            {/* Central Project Pin ("RG's Pleiaddes") */}
            <div className="absolute z-20 -translate-x-1/2 -translate-y-1/2" style={{ top: '50%', left: '63%' }}>
              <div className="relative flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-[#c5a059]/40 animate-ping absolute -inset-2 opacity-40 pointer-events-none" />
                <div className="w-8 h-8 bg-[#c5a059] rounded-full border-2 border-[#121620] flex items-center justify-center shadow-lg shadow-[#c5a059]/50">
                  <span className="text-[10px] text-[#121620] font-bold">✦</span>
                </div>
                <div className="mt-2 bg-[#121620]/95 border border-[#c5a059] px-3 py-1.5 text-center shadow-2xl whitespace-nowrap backdrop-blur-sm">
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#c5a059]">RG's Pleiaddes</p>
                  <p className="text-[9px] tracking-widest text-white/70">The 7 Star Living</p>
                </div>
              </div>
            </div>

            {/* Other Map Landmark Pins */}
            {locations.map((loc, i) => {
              const isHighlighted = activeTab === "all" || loc.category === activeTab;
              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.03 }}
                  className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                    isHighlighted ? "opacity-100 scale-100" : "opacity-25 scale-90"
                  }`}
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className="relative group cursor-pointer flex flex-col items-center">
                    <div className="w-2.5 h-2.5 bg-[#c5a059] rounded-full border border-[#121620] group-hover:scale-150 transition-transform duration-300 shadow-sm shadow-[#c5a059]" />
                    <span className="absolute top-3.5 whitespace-nowrap text-[10px] tracking-wider text-white/90 font-light bg-[#121620]/90 px-2 py-0.5 border border-white/10 group-hover:border-[#c5a059] transition-colors shadow-md backdrop-blur-sm">
                      {loc.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Brand Logo Watermark on Map Top Right */}
            <div className="absolute top-4 right-4 text-right pointer-events-none">
              <p className="text-[#c5a059] font-serif text-sm tracking-widest">RG's</p>
              <p className="text-white font-serif text-lg font-bold tracking-wider">Pleiaddes</p>
              <p className="text-[8px] text-[#c5a059]/70 tracking-[0.2em] uppercase">The 7 Star Living</p>
            </div>

            {/* Corner Luxury Frame Borders */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-6 h-6 pointer-events-none`}>
                <div className={`absolute w-full h-[1px] bg-[#c5a059]/50 ${i < 2 ? 'top-0' : 'bottom-0'}`} />
                <div className={`absolute h-full w-[1px] bg-[#c5a059]/50 ${i % 2 === 0 ? 'left-0' : 'right-0'}`} />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  
  );
};

export default LocationSection;