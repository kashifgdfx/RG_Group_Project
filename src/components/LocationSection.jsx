import { motion } from 'framer-motion';
import { Plane, Building2, Cross, Route } from 'lucide-react';

const locations = [
  { name: "Jewar Airport", time: "30 Mins", icon: Plane, top: "18%", left: "68%" },
  { name: "Corporate Hub", time: "20 Mins", icon: Building2, top: "52%", left: "28%" },
  { name: "Fortis Hospital", time: "15 Mins", icon: Cross, top: "72%", left: "62%" },
  { name: "Expressway", time: "10 Mins", icon: Route, top: "38%", left: "48%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

const LocationSection = () => {
  return (
    <section className="relative py-32 bg-charcoal text-white overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,#c5a059_0px,#c5a059_1px,transparent_1px,transparent_60px)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-10 h-[1px] bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Prime Location</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Text & Location List */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl xl:text-6xl font-serif leading-[1.1] mb-8"
            >
              Connectivity <br />
              <span className="text-gold italic">Beyond Limits</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white/50 text-lg leading-relaxed mb-14 max-w-md"
            >
              Situated at the heart of Greater Noida's development corridor, providing seamless access to commercial hubs and leisure destinations.
            </motion.p>

            <div className="space-y-0 divide-y divide-white/[0.06]">
              {locations.map((loc, i) => {
                const Icon = loc.icon;
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="group flex items-center justify-between py-5 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold transition-all duration-400">
                        <Icon size={16} className="text-gold" />
                      </div>
                      <span className="text-sm tracking-[0.2em] uppercase font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                        {loc.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gold text-sm font-light tracking-widest">{loc.time}</span>
                      <div className="w-0 h-[1px] bg-gold group-hover:w-8 transition-all duration-500" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[580px] w-full"
          >
            {/* Outer border frame */}
            <div className="absolute inset-0 border border-gold/20" />
            <div className="absolute inset-[6px] border border-gold/10" />

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(197,160,89,0.08)_0%,transparent_70%)]" />

            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              {[...Array(8)].map((_, i) => (
                <line key={`v${i}`} x1={`${(i + 1) * 12.5}%`} y1="0" x2={`${(i + 1) * 12.5}%`} y2="100%" stroke="#c5a059" strokeWidth="0.5" />
              ))}
              {[...Array(6)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={`${(i + 1) * 16.66}%`} x2="100%" y2={`${(i + 1) * 16.66}%`} stroke="#c5a059" strokeWidth="0.5" />
              ))}
            </svg>

            {/* Center marker — "The Project" */}
            <div className="absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="relative flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-gold/20 animate-ping absolute opacity-30" />
                <div className="w-12 h-12 rounded-full border border-gold/40 absolute" />
                <div className="w-3 h-3 bg-gold rounded-full z-10" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-gold/80 font-medium">The Project</p>
                </div>
              </div>
            </div>

            {/* Connector lines from center to each pin */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {locations.map((loc, i) => (
                <motion.line
                  key={i}
                  x1="50%" y1="50%"
                  x2={loc.left} y2={loc.top}
                  stroke="#c5a059"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.35 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.2, ease: 'easeInOut' }}
                />
              ))}
            </svg>

            {/* Location Pins */}
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: loc.top, left: loc.left }}
              >
                <div className="relative group cursor-pointer">
                  {/* Ping ring */}
                  <div className="w-5 h-5 bg-gold/30 rounded-full animate-ping absolute inset-0 m-auto" />
                  {/* Pin dot */}
                  <div className="w-5 h-5 bg-gold rounded-full border-2 border-charcoal relative z-10 group-hover:scale-125 transition-transform duration-300" />

                  {/* Tooltip */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-charcoal border border-gold/40 px-4 py-3 w-36 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl text-center translate-y-2 group-hover:translate-y-0">
                    <div className="w-4 h-[1px] bg-gold mx-auto mb-2" />
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">{loc.name}</p>
                    <p className="text-gold text-xs mt-1 font-light">{loc.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Corner accents */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-6 h-6`}>
                <div className={`absolute w-full h-[1px] bg-gold ${i < 2 ? 'top-0' : 'bottom-0'}`} />
                <div className={`absolute h-full w-[1px] bg-gold ${i % 2 === 0 ? 'left-0' : 'right-0'}`} />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
