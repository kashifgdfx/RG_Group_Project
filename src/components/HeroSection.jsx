import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Download, CalendarCheck, ChevronDown } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070",
    tag: "Ultra-Luxury Living · Greater Noida",
    heading: ["Elevate Your", "Lifestyle"],
  },
  {
    img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2070",
    tag: "World-Class Amenities · RERA Approved",
    heading: ["Crafted For", "Excellence"],
  },
  {
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    tag: "3 & 4 BHK Residences · From 1,850 Sq.Ft.",
    heading: ["Your Dream", "Residence"],
  },
];

const stats = [
  { value: "1,850", label: "Sq.Ft. Starting" },
  { value: "3 & 4", label: "BHK Options" },
  { value: "Dec'26", label: "Possession" },
];

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* ── Background Swiper ── */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1200}
        onSlideChange={(s) => setActiveIndex(s.realIndex)}
        className="absolute inset-0 h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img
                src={slide.img}
                alt="Luxury Property"
                className="w-full h-full object-cover scale-105"
                style={{ animation: 'heroZoom 6s ease-out forwards' }}
              />
              {/* Multi-layer overlay */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(105deg, rgba(26,26,26,0.82) 0%, rgba(26,26,26,0.45) 55%, rgba(26,26,26,0.15) 100%)' }} />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 50%)' }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Left gold bar ── */}
      <div className="absolute left-0 top-0 bottom-0 w-1 z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-gold), transparent)' }} />

      {/* ── Main Content ── */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-12 w-full">
          <div className="max-w-3xl">

            <AnimatePresence mode="wait">
              <motion.div key={activeIndex}>

                {/* Tag line */}
                <motion.div
                  custom={0} variants={contentVariants} initial="hidden" animate="visible" exit="exit"
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="h-[1px] w-10" style={{ background: 'var(--color-gold)' }} />
                  <span className="text-xs font-bold tracking-[0.25em] uppercase"
                    style={{ color: 'var(--color-gold)' }}>
                    {slides[activeIndex].tag}
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  custom={1} variants={contentVariants} initial="hidden" animate="visible" exit="exit"
                  className="font-serif leading-[1.05] mb-8"
                  style={{ color: 'var(--color-white)', fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
                >
                  {slides[activeIndex].heading[0]} <br />
                  <span style={{
                    color: 'var(--color-gold)',
                    textShadow: '0 0 60px rgba(197,160,89,0.4)',
                  }}>
                    {slides[activeIndex].heading[1]}
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  custom={2} variants={contentVariants} initial="hidden" animate="visible" exit="exit"
                  className="text-lg leading-relaxed mb-10 max-w-xl"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  Experience the perfect blend of architectural grandeur and world-class amenities at RG's Pleiaddes.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  custom={3} variants={contentVariants} initial="hidden" animate="visible" exit="exit"
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em]"
                    style={{ background: 'var(--color-gold)', color: 'var(--color-white)', transition: 'var(--transition-smooth)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--color-gold-light)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--color-gold)'}
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Book Free Site Visit
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em]"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(12px)',
                      color: 'var(--color-white)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'var(--transition-smooth)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--color-white)';
                      e.currentTarget.style.color = 'var(--color-charcoal)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = 'var(--color-white)';
                    }}
                  >
                    <Download className="w-4 h-4" />
                    Download Brochure
                  </motion.button>
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Stats Bar (bottom left, aligned with content) ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex w-fit"
          >
            {stats.map((s, i) => (
              <div key={i} className="px-8 py-5 flex flex-col"
                style={{
                  background: i === 0 ? 'var(--color-gold)' : 'rgba(26,26,26,0.75)',
                  backdropFilter: 'blur(12px)',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <span className="text-2xl font-serif leading-none mb-1"
                  style={{ color: i === 0 ? 'var(--color-charcoal)' : 'var(--color-white)' }}>
                  {s.value}
                </span>
                <span className="text-[10px] uppercase tracking-widest"
                  style={{ color: i === 0 ? 'rgba(26,26,26,0.7)' : 'rgba(255,255,255,0.5)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Slide counter + progress (bottom right) ── */}
      <div className="absolute bottom-8 right-10 z-20 flex flex-col items-end gap-3">
        <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: '1.1rem' }}>
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          {' '}/ {String(slides.length).padStart(2, '0')}
        </span>

        {/* Vertical progress lines */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <div key={i} className="w-[2px] h-8 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.15)' }}>
              {i === activeIndex && (
                <motion.div
                  className="w-full"
                  style={{ background: 'var(--color-gold)' }}
                  initial={{ height: '0%' }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                />
              )}
              {i < activeIndex && (
                <div className="w-full h-full" style={{ background: 'var(--color-gold)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]"
          style={{ color: 'rgba(255,255,255,0.35)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" style={{ color: 'var(--color-gold)' }} />
        </motion.div>
      </motion.div>

      {/* Zoom keyframe */}
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
