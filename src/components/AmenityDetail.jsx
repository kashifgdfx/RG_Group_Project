import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { amenitiesData } from "../data/amenitiesData";

const AmenityDetail = () => {
  const { id } = useParams();
  
  // Find current amenity matching URL id
  const amenity = amenitiesData.find((item) => item.id === id);

  if (!amenity) {
    return (
      <div className="pt-36 pb-24 text-center min-h-screen bg-stone">
        <h2 className="text-3xl font-serif text-charcoal mb-4">Amenity Not Found</h2>
        <Link to="/" className="text-gold uppercase tracking-widest text-xs font-semibold underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-stone text-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link 
            to="/#amenities" 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-slate hover:text-gold transition-colors"
          >
            ← Back to Amenities
          </Link>
        </motion.div>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3 block">
                {amenity.subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-4 leading-tight">
                {amenity.title}
              </h1>
              <div className="w-20 h-1 bg-gold mb-6"></div>
            </div>

            <p className="text-slate text-base md:text-lg leading-relaxed">
              {amenity.description}
            </p>
            
            <p className="text-slate/80 text-sm md:text-base leading-relaxed">
              Designed with meticulous attention to detail, this exclusive space embodies the pinnacle of comfort and sophistication. Every element is crafted to offer residents an unmatched lifestyle experience right at their doorstep within RG's Pleiaddes.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link 
                to="/#contact" 
                className="bg-charcoal text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-gold transition-all duration-300 shadow-md"
              >
                Book a Private Tour
              </Link>
              <Link 
                to="/floor-plans" 
                className="border border-charcoal text-charcoal px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                View Floor Plans
              </Link>
            </div>
          </motion.div>

          {/* Right Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative bg-white p-4 border border-stone/80 shadow-2xl">
              <div className="relative h-[450px] w-full overflow-hidden">
                <img 
                  src={amenity.img} 
                  alt={amenity.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-charcoal text-white p-6 shadow-xl hidden sm:block border-l-4 border-gold z-20">
                <p className="text-gold font-bold text-xl">RG's Pleiaddes</p>
                <p className="text-stone uppercase tracking-wider text-[10px]">7-Star Living Experience</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Detailed Features & Specs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-stone/80 p-8 md:p-14 shadow-lg mb-16"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">
              Exquisite Craftsmanship
            </span>
            <h2 className="text-3xl font-serif text-charcoal mb-4">
              Key Highlights & Exclusive Features
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenity.features.map((feat, idx) => (
              <div key={idx} className="p-6 bg-stone/30 border border-stone/60 hover:border-gold transition-colors flex flex-col justify-between space-y-4">
                <div className="w-10 h-10 bg-charcoal text-gold flex items-center justify-center font-serif font-bold text-lg">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal mb-2">{feat}</h4>
                  <p className="text-slate text-xs leading-relaxed">
                    Engineered to meet global luxury standards, offering seamless convenience and elegance.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Call to Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-charcoal text-white p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold block">
              Experience Luxury Firsthand
            </span>
            <h3 className="text-3xl md:text-4xl font-serif">
              Ready to Step Into the World of RG's Pleiaddes?
            </h3>
            <p className="text-stone/80 text-sm md:text-base leading-relaxed">
              Schedule an exclusive walkthrough of our grand amenities and discover your future dream home today.
            </p>
            <div className="pt-4">
              <Link 
                to="/#contact" 
                className="inline-block bg-gold text-charcoal font-semibold px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-white transition-all duration-300 shadow-lg"
              >
                Schedule Site Visit Now
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AmenityDetail;