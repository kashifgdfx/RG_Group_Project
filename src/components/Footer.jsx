import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--color-stone)', color: 'var(--color-charcoal)' }}>

      {/* Top gold border */}
      <div className="h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)' }} />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">

          {/* ── Brand Column ── */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8" style={{ background: 'var(--color-gold)' }} />
              <h3 className="font-serif text-2xl" style={{ color: 'var(--color-charcoal)' }}>
                RG GROUP
              </h3>
            </div>

            <p className="text-sm leading-relaxed mb-8 max-w-xs" style={{ color: 'var(--color-slate)' }}>
              Setting new benchmarks in luxury living with architectural grandeur and unparalleled community experiences.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <button key={i}
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 group"
                  style={{ border: '1px solid rgba(197,160,89,0.25)', background: 'transparent' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--color-gold)';
                    e.currentTarget.style.borderColor = 'var(--color-gold)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(197,160,89,0.25)';
                  }}
                >
                  <Icon className="w-3.5 h-3.5 transition-colors duration-300"
                    style={{ color: 'var(--color-gold)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--color-white)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--color-gold)'}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="hidden md:block md:col-span-1 justify-self-center">
            <div className="w-[1px] h-full" style={{ background: 'rgba(197,160,89,0.15)' }} />
          </div>

          {/* ── Quick Links ── */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-[1px] w-4" style={{ background: 'var(--color-gold)' }} />
              <h4 className="font-bold uppercase tracking-[0.2em] text-xs"
                style={{ color: 'var(--color-charcoal)' }}>Explore</h4>
            </div>
            <ul className="space-y-4">
              {['Residential Units', 'Amenities', 'Floor Plans', 'Location'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm cursor-pointer group"
                  style={{ color: 'var(--color-slate)', transition: 'var(--transition-smooth)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-slate)'}
                >
                  <span className="w-0 h-[1px] group-hover:w-3 transition-all duration-300"
                    style={{ background: 'var(--color-gold)', display: 'inline-block' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-[1px] w-4" style={{ background: 'var(--color-gold)' }} />
              <h4 className="font-bold uppercase tracking-[0.2em] text-xs"
                style={{ color: 'var(--color-charcoal)' }}>Contact</h4>
            </div>
            <ul className="space-y-5">
              {[
                { Icon: FaMapMarkerAlt, text: 'Greater Noida, Sector-X' },
                { Icon: FaPhoneAlt,     text: '+91 98765 43210' },
                { Icon: FaEnvelope,     text: 'info@rgpleiaddes.com' },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm"
                  style={{ color: 'var(--color-slate)' }}>
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(197,160,89,0.1)' }}>
                    <Icon className="w-3 h-3" style={{ color: 'var(--color-gold)' }} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Newsletter ── */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-[1px] w-4" style={{ background: 'var(--color-gold)' }} />
              <h4 className="font-bold uppercase tracking-[0.2em] text-xs"
                style={{ color: 'var(--color-charcoal)' }}>Stay Updated</h4>
            </div>
            <p className="text-sm mb-5" style={{ color: 'var(--color-slate)' }}>
              Subscribe for exclusive project updates.
            </p>

            <div className="flex" style={{ border: '1px solid rgba(197,160,89,0.25)' }}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent px-4 py-3 w-full outline-none text-sm"
                style={{ color: 'var(--color-charcoal)' }}
              />
              <button
                className="px-5 py-3 text-xs font-bold uppercase tracking-widest flex-shrink-0"
                style={{
                  background: 'var(--color-gold)',
                  color: 'var(--color-white)',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-charcoal)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-gold)'}
              >
                Join
              </button>
            </div>

            {/* RERA badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2"
              style={{ border: '1px solid rgba(197,160,89,0.2)', background: 'rgba(197,160,89,0.05)' }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-gold)' }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-slate)' }}>
                RERA Approved Project
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(197,160,89,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-slate)' }}>
            © 2026 RG's Pleiaddes. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item, i) => (
              <span key={i}
                className="text-xs uppercase tracking-widest cursor-pointer"
                style={{ color: 'var(--color-slate)', transition: 'var(--transition-smooth)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-slate)'}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
