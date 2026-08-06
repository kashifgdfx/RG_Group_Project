import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { amenitiesData } from '../data/amenitiesData';

const AmenitiesSection = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenitiesData.map((item, index) => (
            <Link to={`/amenities/${item.id}`} key={item.id}>
              <motion.div 
                className="relative h-96 overflow-hidden cursor-pointer rounded-sm shadow-md block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif text-xl md:text-2xl leading-snug">
                    {item.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-gold mt-3 transform origin-left transition-all duration-300"></div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;