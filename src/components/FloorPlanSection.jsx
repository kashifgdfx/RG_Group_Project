import React, { useEffect } from "react";
import { motion } from "framer-motion";
import FAQSection from "./FAQSection";
import PremiumCtaButton from "./PremiumCtaButton";

const floorPlansData = [
  {
    id: 1,
    title: "4 BHK + 3 Toilets",
    typicalPlan: "/floor1.png",
    carpetArea: "107.540 Sq. Mtr. (1159 Sq. Ft.)",
    builtUpArea: "148.160 Sq. Mtr. (1595 Sq. Ft.)",
    totalArea: "202.969 Sq. Mtr. (2185 Sq. Ft.)",
  },
  // {
  //   id: 2,
  //   title: "4 BHK + 3 Toilets - Type 2",
  //   typicalPlan: "/floor2.png",
  //   carpetArea: "110.000 Sq. Mtr. (1184 Sq. Ft.)",
  //   builtUpArea: "150.000 Sq. Mtr. (1614 Sq. Ft.)",
  //   totalArea: "210.000 Sq. Mtr. (2260 Sq. Ft.)",
  // },
  // {
  //   id: 3,
  //   title: "4 BHK + 3 Toilets - Type 3",
  //   typicalPlan: "/floor3.png",
  //   carpetArea: "107.540 Sq. Mtr. (1159 Sq. Ft.)",
  //   builtUpArea: "148.160 Sq. Mtr. (1595 Sq. Ft.)",
  //   totalArea: "202.969 Sq. Mtr. (2185 Sq. Ft.)",
  // },
];

const FloorPlanSection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
    <section
      className="py-24 bg-stone text-charcoal relative overflow-hidden"
      id="floor-plans"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3 block">
            Masterful Architecture
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
            4 BHK Floor Plans
          </h2>

          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>

          <p className="text-slate text-base md:text-lg max-w-2xl mx-auto">
            Spaciously designed 4 BHK residences with optimized layouts,
            abundant natural light, and seamless ventilation for luxurious
            everyday living.
          </p>
        </motion.div>

        {/* Floor Plans List (Stacked Cards) */}
        <div className="space-y-16">
          {floorPlansData.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white p-8 md:p-12 border border-stone/80 shadow-xl rounded-sm"
            >
              {/* Left Image */}
              <div className="lg:col-span-7">
                <div className="relative group overflow-hidden bg-stone/20 border border-stone/60 p-3 shadow-inner">
                  {/* <div className="absolute top-4 left-4 bg-charcoal/80 text-white px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-sm border border-gold/30 z-10">
                    Floor Plan {index + 1}
                  </div> */}

                  <img
                    src={plan.typicalPlan}
                    alt={plan.title}
                    className="w-full h-auto object-contain max-h-[600px] mx-auto transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold block mb-2">
                    Apartment Configuration
                  </span>

                  <h3 className="text-3xl font-serif text-charcoal mb-4">
                    {plan.title}
                  </h3>

                  <div className="w-16 h-0.5 bg-gold"></div>
                </div>

                {/* Area Cards */}
                <div className="space-y-4">
                  <div className="p-5 bg-stone/30 border-l-4 border-gold">
                    <p className="text-[10px] uppercase tracking-widest text-slate font-semibold">
                      Carpet Area
                    </p>

                    <p className="font-serif text-charcoal text-base mt-1">
                      {plan.carpetArea}
                    </p>
                  </div>

                  <div className="p-5 bg-stone/30 border-l-4 border-charcoal">
                    <p className="text-[10px] uppercase tracking-widest text-slate font-semibold">
                      Built-Up Area
                    </p>

                    <p className="font-serif text-charcoal text-base mt-1">
                      {plan.builtUpArea}
                    </p>
                  </div>

                  <div className="p-5 bg-charcoal text-white">
                    <p className="text-[10px] uppercase tracking-widest text-stone font-semibold">
                      Total Super Area
                    </p>

                    <p className="text-gold font-serif text-lg font-bold mt-1">
                      {plan.totalArea}
                    </p>
                  </div>
                </div>

                {/* Button */}
                {/* <button
                  onClick={() => alert(`Download Floor Plan ${index + 1}`)}
                  className="w-full bg-charcoal text-white py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300"
                >
                  Download Floor Plan {index + 1}
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

<PremiumCtaButton/>


    </>
  );
};

export default FloorPlanSection;