import React from 'react';
import { motion } from 'framer-motion';

const locations = [
  { name: "ACE Divino", distance: "0.0 km", top: "52%", left: "55%" },
  { name: "ATS Destinaire", distance: "0.0 km", top: "68%", left: "55%" },
  { name: "Yatharth Hospital", distance: "2.3 km", top: "22%", left: "78%" },
  { name: "Sanfort Playschool", distance: "1.1 km", top: "20%", left: "64%" },
  { name: "Adorables Daycare", distance: "400 m", top: "33%", left: "65%" },
  { name: "DRS Public School", distance: "850 m", top: "48%", left: "74%" },
  { name: "Gautam Budh Inter College", distance: "2.9 km", top: "61%", left: "82%" },
  { name: "Felix Hospital", distance: "--", top: "73%", left: "61%" },
  { name: "Numed Hospital", distance: "--", top: "33%", left: "80%" },
  { name: "Star City Hospital", distance: "--", top: "44%", left: "91%" },
  { name: "D-Mart", distance: "--", top: "24%", left: "68%" },
  { name: "Ved Van Park", distance: "--", top: "48%", left: "42%" },
  { name: "Noida Sector 81 Metro", distance: "8.1 km", top: "62%", left: "46%" },
  { name: "Anand Vihar Railway Stn", distance: "23.6 km", top: "24%", left: "42%" },
  { name: "Indira Gandhi Airport", distance: "53.0 km", top: "48%", left: "12%" }
];

const nearbyLandmarksList = [
  { name: "ACE Divino", dist: "0.0 km" },
  { name: "ATS Destinaire", dist: "0.0 km" },
  { name: "Yatharth Super Speciality Hospital", dist: "2.3 km" },
  { name: "Sanfort Play School", dist: "1.1 km" },
  { name: "Adorables Daycare", dist: "400 m" },
  { name: "DRS Public School", dist: "850 m" },
  { name: "Gautam Budh Balak Inter College", dist: "2.9 km" },
];

const publicTransportList = [
  { name: "Nearest Bus Stop", dist: "2.8 km" },
  { name: "Noida Sector 81 Metro Station", dist: "8.1 km" },
  { name: "Anand Vihar Terminal Railway Station", dist: "23.6 km" },
  { name: "Indira Gandhi International Airport", dist: "53 km" },
];

const LocationSection = () => {
  return (
    <section className="relative py-32 bg-charcoal text-white overflow-hidden">
      
      {/* Inline styles for animated glowing constellation lines */}
      <style>{`
        @keyframes pulseLine {
          0% { stroke-opacity: 0.15; stroke-dashoffset: 24; }
          50% { stroke-opacity: 0.8; stroke-dashoffset: 0; }
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
      `}</style>

      {/* Subtle background star-field texture */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-10 h-[1px] bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Location Map</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left: Text & Landmarks Lists (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl xl:text-5xl font-serif leading-[1.1] mb-6"
              >
                Location <br />
                <span className="text-gold italic">Map & Connectivity</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-white/60 text-sm leading-relaxed"
              >
                Nestled in Sector 1, Noida, RG's Pleiaddes shines at the pinnacle of connectivity and convenience, offering seamless access to the best the city has to offer. Just minutes from key business hubs, entertainment centers, and elite schools.
              </motion.p>
            </div>

            {/* Nearby Landmarks Table */}
            <div className="bg-white/[0.02] border border-gold/20 p-6 rounded-sm">
              <h3 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 pb-2 border-b border-gold/10">
                Nearby Landmarks
              </h3>
              <div className="space-y-3">
                {nearbyLandmarksList.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <span className="text-white/80 font-light">{item.name}</span>
                    <span className="text-gold font-medium">{item.dist}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Public Transport Table */}
            <div className="bg-white/[0.02] border border-gold/20 p-6 rounded-sm">
              <h3 className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 pb-2 border-b border-gold/10">
                Public Transport
              </h3>
              <div className="space-y-3">
                {publicTransportList.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <span className="text-white/80 font-light">{item.name}</span>
                    <span className="text-gold font-medium">{item.dist}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-white/40 mt-4 italic">*Map not to scale</p>
            </div>

          </div>

          {/* Right: Constellation Map Visual (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 mt-40 relative h-[620px] w-full bg-[#0b0f19] border border-gold/30 rounded-sm overflow-hidden shadow-2xl"
          >
            {/* Background constellation ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(197,160,89,0.12)_0%,transparent_70%)]" />

            {/* Constellation Connecting Lines Overlay with Live Flow/Blink Animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#c5a059" strokeWidth="1" fill="none">
                {/* Center project connection hub - Primary Animated Lines */}
                <line x1="63%" y1="50%" x2="55%" y2="52%" className="animated-constellation-line" />
                <line x1="63%" y1="50%" x2="55%" y2="68%" className="animated-constellation-line-delayed" />
                <line x1="63%" y1="50%" x2="74%" y2="48%" className="animated-constellation-line" />
                <line x1="63%" y1="50%" x2="61%" y2="73%" className="animated-constellation-line-delayed" />
                <line x1="63%" y1="50%" x2="82%" y2="61%" className="animated-constellation-line" />

                {/* Upper and side networks */}
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
                <div className="w-16 h-16 rounded-full border border-gold/40 animate-ping absolute -inset-2 opacity-40" />
                <div className="w-8 h-8 bg-gold rounded-full border-2 border-charcoal flex items-center justify-center shadow-lg shadow-gold/50">
                  <span className="text-[10px] text-charcoal font-bold">✦</span>
                </div>
                <div className="mt-2 bg-charcoal/90 border border-gold px-3 py-1 text-center shadow-2xl whitespace-nowrap">
                  <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-gold">RG's Pleiaddes</p>
                  <p className="text-[9px] tracking-widest text-white/70">The 7 Star Living</p>
                </div>
              </div>
            </div>

            {/* Other Map Landmark Pins */}
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ top: loc.top, left: loc.left }}
              >
                <div className="relative group cursor-pointer flex flex-col items-center">
                  <div className="w-2.5 h-2.5 bg-gold rounded-full border border-charcoal group-hover:scale-150 transition-transform duration-300 shadow-sm shadow-gold" />
                  <span className="absolute top-3.5 whitespace-nowrap text-[10px] tracking-wider text-white/90 font-light bg-charcoal/80 px-1.5 py-0.5 border border-white/10 group-hover:border-gold transition-colors">
                    {loc.name}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Brand Logo Watermark on Map Top Right */}
            <div className="absolute top-4 right-4 text-right pointer-events-none">
              <p className="text-gold font-serif text-sm tracking-widest">RG's</p>
              <p className="text-white font-serif text-lg font-bold tracking-wider">Pleiaddes</p>
              <p className="text-[8px] text-gold/70 tracking-[0.2em] uppercase">The 7 Star Living</p>
            </div>

            {/* Corner Luxury Frame Borders */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-6 h-6 pointer-events-none`}>
                <div className={`absolute w-full h-[1px] bg-gold/50 ${i < 2 ? 'top-0' : 'bottom-0'}`} />
                <div className={`absolute h-full w-[1px] bg-gold/50 ${i % 2 === 0 ? 'left-0' : 'right-0'}`} />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;