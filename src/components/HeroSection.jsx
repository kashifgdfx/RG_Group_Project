import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Download, CalendarCheck, ChevronDown, QrCode } from 'lucide-react';
import BookingModal from './BookingModal';
import BrochureLeadModal from './BrochureLeadModal';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    img: "/hero1.webp",
    tag: "Ultra-Luxury Living · Greater Noida",
    heading: ["Elevate Your", "Lifestyle"],
  },
  {
    img: "/amenities9.jpg",
    tag: "World-Class Amenities",
    heading: ["Crafted For", "Excellence"],
  },
  {
    img: "/hero3.webp",
    tag: " 4 BHK +3T Residences · From 2,185 Sq.Ft.",
    heading: ["Luxury Begins", "The Moment You Arrive"],
  },
  {
    img: "/hero4.webp",
    tag: "4 BHK +3T Residences · From 2,185 Sq.Ft.",
    heading: ["Taste the Universe", "in Style."],
  },
];

const stats = [
  // { value: "21,85", label: "Sq.Ft. Starting" },
  { value: "4+3T", label: "BHK Options" },
  { value: "Sep'29", label: "Possession" },
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
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBrochureClick = () => {
  const brochureLead = localStorage.getItem("brochureLead");

  if (brochureLead) {
    window.open("/brochure.pdf", "_blank");
  } else {
    setIsBrochureModalOpen(true);
  }
};

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
                style={{ background: 'linear-gradient(105deg, rgba(26,26,26,0.88) 0%, rgba(26,26,26,0.6) 60%, rgba(26,26,26,0.3) 100%)' }} />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.7) 0%, transparent 50%)' }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Left gold bar ── */}
      <div className="absolute left-0 top-0 bottom-0 w-1 z-20 hidden sm:block"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-gold), transparent)' }} />

      {/* ── Main Content & Right RERA Card Layout ── */}
      <div className="absolute inset-0 z-20 flex items-center pt-16 sm:pt-0">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Side Info */}
          <div className="max-w-3xl w-full">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex}>

                {/* Tag line */}
                <motion.div
                  custom={0} variants={contentVariants} initial="hidden" animate="visible" exit="exit"
                  className="flex items-center gap-3 mb-4 sm:mb-6"
                >
                  <div className="h-[1px] w-8 sm:w-10" style={{ background: 'var(--color-gold)' }} />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase"
                    style={{ color: 'var(--color-gold)' }}>
                    {slides[activeIndex].tag}
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  custom={1} variants={contentVariants} initial="hidden" animate="visible" exit="exit"
                  className="font-serif leading-[1.05] mb-4 sm:mb-8"
                  style={{ color: 'var(--color-white)', fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
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
                  className="text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-xl"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  Experience the perfect blend of architectural grandeur and world-class amenities at RG's Pleiaddes.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  custom={3} variants={contentVariants} initial="hidden" animate="visible" exit="exit"
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none"
                >
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]"
                    style={{ background: 'var(--color-gold)', color: 'var(--color-white)', transition: 'var(--transition-smooth)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--color-gold-light)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--color-gold)'}
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Book Free Site Visit
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      handleBrochureClick();
                    }}
                    className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]"
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

          {/* Right Side: RERA & Project Details Card with QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden xl:flex flex-col p-5 rounded-xl max-w-sm w-full"
            style={{
              background: 'rgba(10, 10, 10, 0.75)',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 20px 40px rgba(125, 118, 118, 0.5)'
            }}
          >
            <div className="flex items-center gap-4 mb-4 pb-3 border-b border-white/10">
              {/* Replace with your actual QR image path */}
              <img
                src="/qr-scanner.png"
                alt="RERA QR Code"
                className="w-20 h-20 object-contain bg-white p-1 rounded"
              />
              <div>
                <span className="text-[10px] uppercase tracking-wider block" style={{ color: 'var(--color-gold)' }}>Official Verification</span>
                <h4 className="text-xs font-bold text-white leading-snug">RG's PLEIADDES Phase-4</h4>
                <p className="text-[10px] text-gray-300 mt-1">UPRERAPRJ357325/09/2025</p>
              </div>
            </div>

            <div className="space-y-1.5 text-[10px] text-gray-300">
              <p><strong className="text-white">Website:</strong> www.up-rera.in</p>
              <p><strong className="text-white">Launch Date:</strong> 01.09.2025</p>
              <p><strong className="text-white">Collection A/c:</strong> KVIR TOWERS PVT LTD</p>
              <p><strong className="text-white">A/c No.:</strong> 57500001552982</p>
              <p><strong className="text-white">Bank & Address:</strong> HDFC BANK, SHRI RADHA SKY GARDEN GH-05 SEC 16B, GR. NOIDA (W)</p>
              <p><strong className="text-white">IFSC:</strong> HDFC0005129</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="absolute bottom-4 sm:bottom-0 left-0 right-0 z-20 px-5 sm:px-0">
        <div className="max-w-7xl mx-auto sm:px-8 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-row w-full sm:w-fit overflow-x-auto sm:overflow-visible no-scrollbar shadow-2xl rounded sm:rounded-none"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex-1 sm:flex-none px-4 sm:px-8 py-3.5 sm:py-5 flex flex-col min-w-[110px] sm:min-w-0"
                style={{
                  background: i === 0 ? 'var(--color-gold)' : 'rgba(26,26,26,0.85)',
                  backdropFilter: 'blur(12px)',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <span className="text-xl sm:text-2xl font-serif leading-none mb-1"
                  style={{ color: i === 0 ? 'var(--color-charcoal)' : 'var(--color-white)' }}>
                  {s.value}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest truncate"
                  style={{ color: i === 0 ? 'rgba(26,26,26,0.7)' : 'rgba(255,255,255,0.6)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Slide counter + progress ── */}
      <div className="absolute bottom-6 right-5 sm:right-10 z-20 hidden xs:flex flex-col items-end gap-2 sm:gap-3">
        <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: '1rem' }}>
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          {' '}/ {String(slides.length).padStart(2, '0')}
        </span>

        {/* Vertical progress lines */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <div key={i} className="w-[2px] h-6 sm:h-8 overflow-hidden"
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

      {/* Zoom keyframe */}
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.08); }
          to   { transform: scale(1); }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <BrochureLeadModal
  isOpen={isBrochureModalOpen}
  onClose={() => setIsBrochureModalOpen(false)}
/>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;

















