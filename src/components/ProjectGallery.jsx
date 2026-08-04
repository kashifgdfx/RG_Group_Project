import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const gallery = [
  { src: "/gallery-img1.jpg", label: "Living Spaces",   tag: "Interior",     caption: "Every detail curated for refined living." },
  { src: "/hero1.jpg", label: "Master Suite",    tag: "Bedroom",      caption: "Crafted for the discerning few." },
    {
  src: "/gallery-image4.jpg",
  label: "Luxury Fitness Centre",
  tag: "Wellness",
  caption: "Elevate your lifestyle with a state-of-the-art fitness experience."
},
 {
  src: "/gallery-image3.jpg",
  label: "Luxury Retail Plaza",
  tag: "Commercial",
  caption: "An upscale retail destination offering shopping, cafés, and everyday conveniences at your doorstep."
},
  { src: "/gallery-img4.jpg", label: "Facade",          tag: "Architecture", caption: "A bold statement that commands admiration." },

];

const ProjectGallery = () => {
  const triggerRef = useRef(null);
  const trackRef   = useRef(null);
  const progressRef = useRef(null);
  const counterRef  = useRef(null);

  useEffect(() => {
    // Media match to enable GSAP horizontal scroll only on desktop/tablet (min-width: 768px)
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const track = trackRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => '+=' + (track.scrollWidth - window.innerWidth),
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              gsap.set(progressRef.current, { scaleX: self.progress });
            }
            const idx = Math.min(Math.floor(self.progress * gallery.length), gallery.length - 1);
            if (counterRef.current)
              counterRef.current.textContent = `${String(idx + 1).padStart(2, '0')} — ${String(gallery.length).padStart(2, '0')}`;
          },
        },
      });

      tl.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
      });

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={triggerRef} className="w-full bg-white overflow-hidden md:h-screen">
      <div
        ref={trackRef}
        className="w-full flex flex-col md:flex-row md:h-screen items-center gap-8 md:gap-10 px-6 sm:px-10 md:px-16 py-16 md:py-0"
        style={{ width: '100%', '@media (min-width: 768px)': { width: 'max-content' } }}
      >

        {/* ── Intro Card ─────────────────────────────────────────── */}
        <div className="flex-shrink-0 w-full md:w-[80vw] h-auto md:h-[75vh] flex flex-col md:flex-row overflow-hidden border border-stone-100 shadow-[0_8px_60px_rgba(0,0,0,0.07)] bg-white">

          {/* Left: Text */}
          <div className="w-full md:w-1/2 flex items-center px-6 sm:px-10 md:px-16 py-10 md:py-12 bg-white">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="w-8 h-[1px] bg-gold" />
                <span className="text-gold text-[10px] tracking-[0.35em] uppercase font-medium">Visual Journey</span>
              </div>
              <h2 className="font-serif text-charcoal text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight mb-4 md:mb-6">
                The <span className="text-gold italic">Gallery</span>
              </h2>
              <p className="text-charcoal/50 text-sm md:text-base leading-relaxed mb-6 md:mb-10 max-w-sm">
                Discover our carefully curated spaces — each crafted with precision, luxury, and timeless elegance.
              </p>
              <div className="flex items-center gap-3">
                <span className="w-5 h-[1px] bg-gold/60" />
                <span className="text-charcoal/40 text-xs tracking-[0.3em] uppercase">Scroll to explore</span>
                <span className="text-gold text-sm">→</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-full overflow-hidden">
            <img
              src="/img1.jpg"
              alt="Gallery Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── Gallery Cards ───────────────────────────────────────── */}
        {gallery.map((item, i) => (
          <div
            key={i}
            className="gallery-card flex-shrink-0 w-full md:w-[38vw] h-auto md:h-[75vh] bg-white border border-stone-100 shadow-[0_8px_48px_rgba(0,0,0,0.07)] overflow-hidden flex flex-col"
            style={{ willChange: 'transform' }}
          >
            {/* Image */}
            <div className="relative w-full h-[320px] md:h-auto md:flex-1 overflow-hidden">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />

              {/* Tag */}
              <div className="absolute top-4 left-4 md:top-5 md:left-5 bg-white/90 backdrop-blur-sm px-3 py-1 border-l-2 border-gold">
                <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal font-medium">
                  {item.tag}
                </span>
              </div>

              {/* Ghost number */}
              <div className="absolute bottom-4 right-5 text-white/15 font-serif text-6xl md:text-8xl leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Card Footer */}
            <div className="px-6 md:px-7 py-5 md:py-6 flex items-center justify-between gap-4 bg-white">
              <div>
                <h3 className="text-charcoal font-serif text-lg md:text-xl mb-1">{item.label}</h3>
                <p className="text-charcoal/45 text-xs md:text-sm leading-relaxed">{item.caption}</p>
              </div>
              <div className="flex-shrink-0 w-9 h-9 border border-gold/40 flex items-center justify-center hover:bg-gold/5 transition-colors">
                <span className="text-gold text-sm">→</span>
              </div>
            </div>

            {/* Gold accent line */}
            <div className="h-[2px] bg-gradient-to-r from-gold via-gold/40 to-transparent" />
          </div>
        ))}

        {/* Counter + progress — visible only on desktop */}
        <div className="hidden md:flex flex-shrink-0 w-[6vw] h-[75vh] flex-col justify-end pb-2 gap-4">
          <span ref={counterRef} className="text-charcoal/30 text-xs tracking-[0.2em] font-light [writing-mode:vertical-rl]">
            01 — 0{gallery.length}
          </span>
          <div className="w-[1px] flex-1 bg-charcoal/10 overflow-hidden relative">
            <div
              ref={progressRef}
              className="w-full bg-gold origin-top absolute top-0 left-0"
              style={{ height: '100%', transform: 'scaleY(0)' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;