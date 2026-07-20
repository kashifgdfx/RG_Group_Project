import { motion, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const stats = [
  { label: 'Starting Area', value: '1,850 Sq.Ft.' },
  { label: 'Configuration', value: '3 & 4 BHK' },
  { label: 'Possession', value: 'Dec 2026' },
];

const slides = [
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000', label: 'Living Room' },
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000', label: 'Master Bedroom' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1000', label: 'Kitchen' },
  { src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000', label: 'Exterior View' },
];

const FloorPlanCTA = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent(prev => (prev + 1) % slides.length);
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir * 40, scale: 1.03 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir * -40, scale: 0.97, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
  };

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'var(--color-charcoal)' }}>

      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(197,160,89,0.08) 0%, transparent 70%)'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(197,160,89,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* ── Content Side ── */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[1px] w-8" style={{ background: 'var(--color-gold)' }} />
                <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: 'var(--color-gold)' }}>
                  Refined Living
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6" style={{ color: 'var(--color-white)' }}>
                Explore Your <br />
                <span style={{ color: 'var(--color-gold)', textShadow: '0 0 40px rgba(197,160,89,0.3)' }}>
                  Future Residence
                </span>
              </h2>

              <div className="h-[1px] w-16 mb-6"
                style={{ background: 'linear-gradient(90deg, var(--color-gold), transparent)' }} />

              <p className="leading-relaxed mb-10 max-w-md"
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem' }}>
                Discover precision-engineered floor plans designed for space, sunlight, and ventilation.
                View detailed layouts for our 3 &amp; 4 BHK residences.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ background: 'var(--color-gold)', color: 'var(--color-charcoal)', transition: 'var(--transition-smooth)' }}
                >
                  <Download className="w-4 h-4" /> Download E-Brochure
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ background: 'transparent', color: 'var(--color-white)', border: '1px solid rgba(197,160,89,0.4)', transition: 'var(--transition-smooth)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-gold)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(197,160,89,0.4)'}
                >
                  View Floor Plans <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-10 mt-14 pt-10"
              style={{ borderTop: '1px solid rgba(197,160,89,0.15)' }}
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-gold)' }}>{s.label}</p>
                  <p className="text-xl font-serif" style={{ color: 'var(--color-white)' }}>{s.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Slider Side ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative">

              {/* Corner accents */}
              {['top-0 left-0 border-t-2 border-l-2', 'top-0 right-0 border-t-2 border-r-2',
                'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'
              ].map((cls, i) => (
                <div key={i} className={`absolute w-6 h-6 ${cls} pointer-events-none z-20`}
                  style={{ borderColor: 'var(--color-gold)' }} />
              ))}

              {/* Slider */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <AnimatePresence custom={direction} mode="popLayout">
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    <img
                      src={slides[current].src}
                      alt={slides[current].label}
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(0.75) contrast(1.05)' }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.75) 0%, transparent 55%)' }} />

                    {/* Slide label */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="absolute bottom-5 left-6"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] font-medium"
                        style={{ color: 'var(--color-gold)' }}>
                        {slides[current].label}
                      </p>
                    </motion.div>

                    {/* Slide counter */}
                    <div className="absolute bottom-5 right-6 text-xs font-mono"
                      style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next arrows */}
                <button onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center"
                  style={{ background: 'rgba(26,26,26,0.6)', border: '1px solid rgba(197,160,89,0.3)', transition: 'var(--transition-smooth)', color: 'var(--color-white)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-gold)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(197,160,89,0.3)'}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center"
                  style={{ background: 'rgba(26,26,26,0.6)', border: '1px solid rgba(197,160,89,0.3)', transition: 'var(--transition-smooth)', color: 'var(--color-white)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-gold)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(197,160,89,0.3)'}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)}
                    className="transition-all duration-300"
                    style={{
                      width: i === current ? '24px' : '6px',
                      height: '6px',
                      background: i === current ? 'var(--color-gold)' : 'rgba(197,160,89,0.3)',
                    }}
                  />
                ))}
              </div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-5 -left-5 p-5 shadow-2xl z-10"
                style={{ background: 'var(--color-charcoal)', borderLeft: '3px solid var(--color-gold)' }}
              >
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-gold)' }}>Starting Area</p>
                <p className="text-2xl font-serif" style={{ color: 'var(--color-white)' }}>1,850 Sq.Ft.</p>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-5 -right-5 px-5 py-3 shadow-2xl z-10"
                style={{ background: 'var(--color-gold)' }}
              >
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-charcoal)' }}>
                  RERA Approved
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} />
    </section>
  );
};

export default FloorPlanCTA;
