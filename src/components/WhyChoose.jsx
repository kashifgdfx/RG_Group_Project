import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Sparkles, Building, TrendingUp } from 'lucide-react';

const reasons = [
  { title: "Trusted Brand", desc: "RG's Group: A legacy of quality, RERA approved, and customer-first.", icon: ShieldCheck, span: "md:col-span-2" },
  { title: "Prime Location", desc: "5 mins to Noida, upcoming metro, high appreciation.", icon: MapPin, span: "md:col-span-1" },
  { title: "Premium Lifestyle", desc: "World-class amenities, resort-style living.", icon: Sparkles, span: "md:col-span-1" },
  { title: "Spacious Homes", desc: "Thoughtfully crafted 3 & 4 BHK designs.", icon: Building, span: "md:col-span-1" },
  { title: "Value for Money", desc: "Competitive pricing, excellent investment.", icon: TrendingUp, span: "md:col-span-2" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const WhyChoose = () => {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'var(--color-stone)' }}>

      {/* Decorative background circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(197,160,89,0.07)' }} />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(197,160,89,0.07)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.2em] uppercase font-medium mb-3"
            style={{ color: 'var(--color-gold)' }}>
            Our Advantages
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-5 leading-tight"
            style={{ color: 'var(--color-charcoal)' }}>
            Why Choose{' '}
            <span className="italic" style={{ color: 'var(--color-gold)' }}>RG's Pleiaddes?</span>
          </h2>
          <div className="h-[2px] w-20" style={{ background: 'var(--color-gold)' }} />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(26,26,26,0.10)' }}
              viewport={{ once: true }}
              className={`${item.span} relative p-10 group cursor-default overflow-hidden`}
              style={{
                background: 'var(--color-white)',
                border: '1px solid rgba(197,160,89,0.15)',
                transition: 'var(--transition-smooth)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-gold)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(197,160,89,0.15)'}
            >
              {/* Hover gold fill sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(197,160,89,0.06) 0%, transparent 70%)',
                  transition: 'var(--transition-smooth)',
                }} />

              {/* Top-right corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
                style={{
                  borderTop: '2px solid rgba(197,160,89,0.2)',
                  borderRight: '2px solid rgba(197,160,89,0.2)',
                  transition: 'var(--transition-smooth)',
                }} />

              {/* Icon */}
              <div className="relative w-14 h-14 flex items-center justify-center mb-7">
                <div className="absolute inset-0 rounded-sm"
                  style={{ background: 'rgba(197,160,89,0.12)' }} />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
                  className="absolute inset-0 rounded-sm blur-sm"
                  style={{ background: 'rgba(197,160,89,0.12)' }}
                />
                <item.icon className="relative z-10 w-6 h-6" style={{ color: 'var(--color-gold)' }} />
              </div>

              {/* Number badge */}
              <span className="absolute top-8 right-10 text-6xl font-serif select-none leading-none"
                style={{ color: 'rgba(26,26,26,0.04)', transition: 'var(--transition-smooth)' }}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="relative text-xl font-bold mb-3"
                style={{ color: 'var(--color-charcoal)', transition: 'var(--transition-smooth)' }}>
                {item.title}
              </h3>
              <p className="relative text-sm leading-relaxed" style={{ color: 'var(--color-slate)' }}>
                {item.desc}
              </p>

              {/* Bottom line reveal */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full"
                style={{
                  background: 'var(--color-gold)',
                  transition: 'var(--transition-smooth)',
                }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
