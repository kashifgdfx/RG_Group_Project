import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  HardHat, 
  Trees, 
  GaugeCircle, 
  Building2, 
  Ruler, 
  Layers3, 
  Users 
} from 'lucide-react'; 

const features = [
  { title: "Premium Flooring", desc: "Vitrified tiles throughout for an elegant finish.", icon: HardHat },
  { title: "Aluminum Form Work", desc: "Precision-engineered construction technology.", icon: Layers3 },
  { title: "24/7 Security", desc: "Secure gated community with advanced CCTV.", icon: ShieldCheck },
  { title: "High-Speed Lifts", desc: "5 dedicated high-speed lifts per tower.", icon: GaugeCircle },
  { title: "6 Iconic Towers", desc: "Standalone design with double-height lobbies.", icon: Building2 },
  { title: "11-12 Ft Floor Height", desc: "Superior floor-to-floor height for ventilation.", icon: Ruler },
  { title: "Exclusive Cluster", desc: "Only 8 apartments per floor for privacy.", icon: Users },
  { title: "Fire & Service Lifts", desc: "4+1 dedicated service/fire safety elevators.", icon: Trees } // Icon map kiye
];

const FeaturesSection = () => {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className='text-center mb-15'>
          <h2 className="text-4xl font-serif text-charcoal mb-4">Lifestyle Excellence</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
          {features.map((feature, index) => {
            const Icon = feature.icon; // Icon component ko assign kiya
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white p-10 hover:bg-soft-sand transition-colors duration-500 group relative"
              >
                {/* Animated Gold Icon */}
                <div className="mb-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <Icon className="w-10 h-10 text-champagne-gold stroke-[1.5]" />
                </div>

                <h3 className="text-sm font-bold text-deep-black uppercase tracking-widest mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {feature.desc}
                </p>

                {/* Decorative bottom border jo hover par fill hoga */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-champagne-gold transition-all duration-500 group-hover:w-full"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;