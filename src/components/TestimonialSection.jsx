import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Vikram Malhotra",
    role: "Investment Banker",
    quote: "The attention to detail in the architecture and the exclusivity of the community is exactly what I was looking for. A true masterpiece.",
    initials: "VM",
  },
  {
    name: "Ananya Sharma",
    role: "Interior Designer",
    quote: "RG's Pleiaddes isn't just a home, it's a statement. The spacious layouts and premium finishes have exceeded all my expectations.",
    initials: "AS",
  },
  {
    name: "Rahul Verma",
    role: "Business Owner",
    quote: "Excellent location and a brand that truly understands customer-centricity. Very happy with my investment in this project.",
    initials: "RV",
  },
  {
    name: "Priya Kapoor",
    role: "Architect",
    quote: "The spatial planning and natural light integration in every unit is remarkable. RG's Pleiaddes sets a new benchmark for luxury living.",
    initials: "PK",
  },
  {
    name: "Arjun Mehta",
    role: "Tech Entrepreneur",
    quote: "From the moment I walked in, I knew this was different. The quality of construction and the community vibe is unmatched in this region.",
    initials: "AM",
  },
];

const TestimonialCard = ({ t }) => (
  <div
    className="relative flex flex-col p-10 h-full group overflow-hidden"
    style={{ background: 'var(--color-stone)', border: '1px solid rgba(197,160,89,0.15)' }}
  >
    {/* Hover sweep */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
      style={{ background: 'linear-gradient(135deg, rgba(197,160,89,0.06) 0%, transparent 60%)' }} />

    {/* Corner accent */}
    <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none"
      style={{ borderTop: '2px solid rgba(197,160,89,0.3)', borderRight: '2px solid rgba(197,160,89,0.3)' }} />

    {/* Watermark quote */}
    <span className="absolute -top-2 -right-1 text-[9rem] font-serif leading-none select-none pointer-events-none"
      style={{ color: 'rgba(197,160,89,0.07)' }}>"</span>

    {/* Quote icon */}
    <div className="w-10 h-10 flex items-center justify-center mb-7 flex-shrink-0"
      style={{ background: 'rgba(197,160,89,0.1)' }}>
      <Quote className="w-5 h-5" style={{ color: 'var(--color-gold)' }} />
    </div>

    {/* Quote text */}
    <p className="italic leading-relaxed mb-8 flex-1 text-[0.95rem]" style={{ color: 'var(--color-slate)' }}>
      "{t.quote}"
    </p>

    {/* Divider */}
    <div className="h-[1px] mb-7"
      style={{ background: 'linear-gradient(90deg, var(--color-gold), transparent)' }} />

    {/* Author */}
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 text-sm font-bold"
        style={{ background: 'var(--color-gold)', color: 'var(--color-white)', letterSpacing: '0.05em' }}>
        {t.initials}
      </div>
      <div>
        <h4 className="font-bold text-sm tracking-wider uppercase" style={{ color: 'var(--color-charcoal)' }}>
          {t.name}
        </h4>
        <p className="text-xs uppercase tracking-widest mt-0.5" style={{ color: 'var(--color-gold)' }}>
          {t.role}
        </p>
      </div>
    </div>

    {/* Bottom reveal line */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full pointer-events-none"
      style={{ background: 'var(--color-gold)', transition: 'var(--transition-smooth)' }} />
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'var(--color-white)' }}>

      {/* Background dot pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(197,160,89,0.08) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: 'var(--color-gold)' }}>
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-5" style={{ color: 'var(--color-charcoal)' }}>
            Voices of <span className="italic" style={{ color: 'var(--color-gold)' }}>Excellence</span>
          </h2>
          <div className="h-[2px] w-16 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} />
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={true}
            pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
            spaceBetween={28}
            breakpoints={{
              0:   { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024:{ slidesPerView: 3 },
            }}
            className="!pb-2"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto self-stretch">
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination dots */}
          <div className="swiper-custom-pagination flex justify-center gap-2 mt-10" />
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} />

      {/* Swiper dot styles */}
      <style>{`
        .swiper-custom-pagination .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: rgba(197,160,89,0.3);
          border-radius: 0;
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
        }
        .swiper-custom-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: var(--color-gold);
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
