import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { amenitiesData } from '../data/amenitiesData';

const AmenitiesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 bg-soft-sand relative overflow-hidden" id="amenities">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3 block">
            Excellence in Living
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
            World-Class Amenities
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {amenitiesData.map((item, index) => (
            <Link to={`/amenities/${item.id}`} key={item.id}>
              <motion.div 
                className="relative h-96 overflow-hidden cursor-pointer rounded-sm shadow-md block"
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{ 
                  filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(6px) brightness(0.5)" : "blur(0px) brightness(1)",
                  scale: hoveredIndex === index ? 1.03 : 1
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.85, 
                    y: hoveredIndex === index ? 0 : 5 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gold uppercase tracking-widest text-[10px] font-semibold mb-1">
                    RG's Pleiaddes
                  </span>
                  <h3 className="text-white font-serif text-xl md:text-2xl leading-snug">
                    {item.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-gold mt-3 transform origin-left transition-all duration-300"></div>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;