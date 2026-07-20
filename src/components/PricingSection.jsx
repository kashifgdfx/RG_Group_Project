import { motion } from 'framer-motion';

const priceCollection = [
  {
    type: "3 BHK Residence",
    subTitle: "The Elite Suite",
    area: "1,850 - 2,200 Sq.Ft.",
    price: "₹2.45 Cr onwards*",
    highlights: ["Private Elevator Access", "Double-Height Living Room", "Panoramic Golf View Balcony"],
    tag: "Limited Inventory"
  },
  {
    type: "4 BHK Sky Mansion",
    subTitle: "The Pleiaddes Imperial",
    area: "2,800 - 3,500 Sq.Ft.",
    price: "₹3.80 Cr onwards*",
    highlights: ["Personal Plunge Pool", "Separate Servant Quarters", "Smart Home Automation Integrated"],
    tag: "Exclusive Release"
  }
];

const PricingSection = () => {
  return (
    <section className="py-28 bg-[#050505] text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0e1624]/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#c5a059] font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Owning The Skyline
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white tracking-tight"
          >
            Exclusive Pricing & Inventory
          </motion.h2>
          <div className="w-16 h-[1px] bg-[#c5a059] mx-auto mt-6"></div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {priceCollection.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#0e1624]/40 border border-[#c5a059]/20 p-10 md:p-12 relative flex flex-col justify-between hover:border-[#c5a059] transition-all duration-500 backdrop-blur-md group"
            >
              {/* Top Tag */}
              {item.tag && (
                <span className="absolute top-0 right-12 -translate-y-1/2 bg-[#c5a059] text-[#050505] text-[10px] font-bold uppercase tracking-[0.15em] px-4 py-1">
                  {item.tag}
                </span>
              )}

              <div>
                <span className="text-[#c5a059] text-xs font-semibold tracking-widest uppercase block mb-2">
                  {item.subTitle}
                </span>
                <h3 className="text-3xl font-serif mb-4 text-white group-hover:text-[#c5a059] transition-colors duration-300">
                  {item.type}
                </h3>
                <p className="text-stone-400 text-sm tracking-wider uppercase mb-8">
                  Super Area: {item.area}
                </p>

                <div className="w-full h-[1px] bg-white/10 mb-8"></div>

                {/* Luxury Features list */}
                <ul className="space-y-4 mb-10">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-stone-300 text-sm font-light">
                      <span className="w-1 h-1 bg-[#c5a059] rounded-full mr-4 shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action Button */}
              <div>
                <div className="mb-8">
                  <span className="text-stone-500 text-xs uppercase tracking-wider block mb-1">Investment</span>
                  <p className="text-3xl md:text-4xl font-serif text-[#c5a059] font-medium">
                    {item.price}
                  </p>
                </div>

                <button className="w-full bg-transparent hover:bg-[#c5a059] text-white hover:text-[#050505] border border-[#c5a059] py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500">
                  Request Private Tour
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Notice */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-stone-600 text-xs mt-12 font-light tracking-wide"
        >
          *Prices mentioned are indicative starting values. Government taxes, PLC, and car parking charges extra.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;