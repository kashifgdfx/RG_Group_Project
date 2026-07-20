import { motion } from 'framer-motion';
import { useState } from 'react';

const amenities = [
  { title: "Grand Clubhouse", img: "/img1.jpg" },
  { title: "Temperature Controlled Pools", img: "/img2.jpg" },
  { title: "Wellness & Spa Center", img: "/img3.jpg" },
  { title: "Indoor Sports Arena", img: "/img4.jpg" },
   { title: "Golf Simulator", img: "/img5.jpg" },
  { title: "Open Terrace for Social Gatherings", img: "/img6.jpg" },
  { title: "Banquet Hall", img: "/img7.jpg" },
    { title: "Indoor Sports Arena", img: "/img1.jpg" },
];

const AmenitiesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 bg-soft-sand">
      <div className="max-w-7xl mx-auto px-6">
       <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-charcoal mb-4">World class Amenities</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Parent container to track hover state */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {amenities.map((item, index) => (
            <motion.div 
              key={index}
              className="relative h-96 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              animate={{ 
                filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(8px) brightness(0.6)" : "blur(0px) brightness(1)",
                scale: hoveredIndex === index ? 1.05 : 1
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              
              {/* Text overlay appears only on hovered card */}
              <motion.div 
                className="absolute inset-0 bg-deep-black/60 flex items-end p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              >
                <h3 className="text-white font-serif text-2xl">{item.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;