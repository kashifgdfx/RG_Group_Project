import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const floorData = [
  {
    id: "tower-1-2",
    title: "Tower 01 & 02",
    type: "TYPE - 1 (3 BHK + 2 TOILET)",
    typicalPlan: "/floor1.png", // Apni image ka path yahan rakhein
    carpetArea: "63.080 Sq. Mtr. (679 Sq. Ft.)",
    builtUpArea: "86.520 Sq. Mtr. (931 Sq. Ft.)",
    totalArea: "118.521 Sq. Mtr. (1276 Sq. Ft.)"
  },
  {
    id: "tower-3-4",
    title: "Tower 03 & 04",
    type: "TYPE - 2 (3 BHK + 3 TOILET)",
    typicalPlan: "/floor2.png",
    carpetArea: "80.890 Sq. Mtr. (871 Sq. Ft.)",
    builtUpArea: "106.600 Sq. Mtr. (1147 Sq. Ft.)",
    totalArea: "146.027 Sq. Mtr. (1572 Sq. Ft.)"
  },
  {
    id: "tower-5-6",
    title: "Tower 05 & 06",
    type: "TYPE - 3 (4 BHK + 3 TOILET)",
    typicalPlan: "/floor3.png",
    carpetArea: "107.540 Sq. Mtr. (1159 Sq. Ft.)",
    builtUpArea: "148.160 Sq. Mtr. (1595 Sq. Ft.)",
    totalArea: "202.969 Sq. Mtr. (2185 Sq. Ft.)"
  }
];

const FloorPlanSection = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Agar smooth scroll chahiye toh, warna 'auto' bhi kar sakte ho
    });
  }, []);


  const [activeTab, setActiveTab] = useState(0);
  const activeData = floorData[activeTab];

  return (
    <section className="py-24 bg-stone text-charcoal relative overflow-hidden" id="floor-plans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3 block">
            Masterful Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
            Floor Plans & Unit Layouts
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate text-base md:text-lg max-w-2xl mx-auto">
            Explore meticulously planned layouts designed to offer maximum space, ventilation, and natural lighting.
          </p>
        </motion.div>

        {/* Tower Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {floorData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-3.5 uppercase tracking-widest text-xs font-semibold transition-all duration-300 border ${
                activeTab === index
                  ? "bg-charcoal text-white border-charcoal shadow-lg scale-105"
                  : "bg-white text-charcoal border-stone/80 hover:border-gold hover:text-gold"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Tab Content Area with Smooth Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 md:p-12 border border-stone/80 shadow-xl"
          >
            {/* Left Side: Images Display */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative group overflow-hidden bg-stone/20 border border-stone/60 p-2 shadow-inner">
                <div className="absolute top-4 left-4 z-10 bg-charcoal/80 text-white px-3 py-1 text-[10px] tracking-widest uppercase backdrop-blur-sm border border-gold/30">
                  {activeData.title} Layout
                </div>
                <img
                  src={activeData.typicalPlan}
                  alt={activeData.title}
                  className="w-full h-auto object-contain max-h-[500px] mx-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Side: Specifications & Area Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">
                  Apartment Configuration
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
                  {activeData.type}
                </h3>
                <div className="w-16 h-0.5 bg-gold mb-6"></div>
              </div>

              {/* Area Breakdown Cards */}
              <div className="space-y-4">
                <div className="p-4 bg-stone/30 border-l-4 border-gold flex justify-between items-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate font-semibold">Carpet Area</p>
                    <p className="text-charcoal font-serif font-medium text-sm md:text-base">{activeData.carpetArea}</p>
                  </div>
                </div>

                <div className="p-4 bg-stone/30 border-l-4 border-charcoal flex justify-between items-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate font-semibold">Built-Up Area</p>
                    <p className="text-charcoal font-serif font-medium text-sm md:text-base">{activeData.builtUpArea}</p>
                  </div>
                </div>

                <div className="p-4 bg-charcoal text-white flex justify-between items-center shadow-md">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-stone font-semibold">Total Area</p>
                    <p className="text-gold font-serif font-bold text-base md:text-lg">{activeData.totalArea}</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button 
                  onClick={() => alert("Brochure or Detailed Plan inquiry triggered!")}
                  className="w-full bg-charcoal text-white py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-gold transition-all duration-300 shadow-md"
                >
                  Download Detailed Floor Plan
                </button>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default FloorPlanSection;