import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-28 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Subtle Luxury Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c5a059]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: The Invitation & Details (5 Columns) */}
          <div className="lg:col-span-5 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#c5a059]"></span>
              <span className="text-[#c5a059] text-xs tracking-[0.3em] uppercase font-semibold">Exclusive Access</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl text-white font-serif mb-8 leading-tight">
              Schedule A <br />
              <span className="text-[#c5a059] italic">Private Viewing</span>
            </h2>
            
            <p className="text-stone-400 mb-12 leading-relaxed font-light">
              Personalized site visits and private walkthroughs are arranged exclusively by appointment. Connect with our dedicated concierge to curate your tour.
            </p>

            {/* Direct Contact Metrics */}
            <div className="space-y-6 border-l border-stone-800 pl-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border border-stone-800 flex items-center justify-center group-hover:border-[#c5a059] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-stone-400 group-hover:text-[#c5a059] transition-colors" />
                </div>
                <div>
                  <p className="text-stone-500 text-[10px] uppercase tracking-widest">Direct Line</p>
                  <p className="text-stone-200 text-sm font-medium tracking-wide">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border border-stone-800 flex items-center justify-center group-hover:border-[#c5a059] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-stone-400 group-hover:text-[#c5a059] transition-colors" />
                </div>
                <div>
                  <p className="text-stone-500 text-[10px] uppercase tracking-widest">Concierge Desk</p>
                  <p className="text-stone-200 text-sm font-medium tracking-wide">concierge@rgpleiaddes.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Premium Form (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'power3.out' }}
            className="lg:col-span-7 bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-12 shadow-2xl relative"
          >
            {/* Top Border Accent Line */}
            <div className="absolute top-0 left-0 w-20 h-[2px] bg-[#c5a059]"></div>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-stone-800 py-3 text-white text-sm focus:border-[#c5a059] outline-none transition-colors duration-300 peer placeholder-transparent"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-stone-500 text-sm transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#c5a059] tracking-wider uppercase">Your Name</label>
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-stone-800 py-3 text-white text-sm focus:border-[#c5a059] outline-none transition-colors duration-300 peer placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-stone-500 text-sm transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#c5a059] tracking-wider uppercase">Email Address</label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    className="w-full bg-transparent border-b border-stone-800 py-3 text-white text-sm focus:border-[#c5a059] outline-none transition-colors duration-300 peer placeholder-transparent"
                    placeholder="Phone Number"
                  />
                  <label htmlFor="phone" className="absolute left-0 top-3 text-stone-500 text-sm transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#c5a059] tracking-wider uppercase">Phone Number</label>
                </div>

                <div className="relative">
                  <select 
                    id="interest"
                    className="w-full bg-[#050505] border-b border-stone-800 py-3 text-stone-400 text-sm focus:border-[#c5a059] outline-none transition-colors duration-300 tracking-wider uppercase cursor-pointer"
                  >
                    <option value="" disabled selected>Interested In</option>
                    <option value="3bhk" className="bg-[#050505] text-white">RG's Pleiaddes 3 BHK</option>
                    <option value="4bhk" className="bg-[#050505] text-white">RG's Pleiaddes 4 BHK</option>
                    <option value="investment" className="bg-[#050505] text-white">General Investment</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea 
                  id="message"
                  rows="3"
                  className="w-full bg-transparent border-b border-stone-800 py-3 text-white text-sm focus:border-[#c5a059] outline-none transition-colors duration-300 peer placeholder-transparent resize-none"
                  placeholder="Preferences or Questions"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-stone-500 text-sm transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#c5a059] tracking-wider uppercase">Preferences or Questions</label>
              </div>

              {/* Premium Button Action */}
              <button 
                type="submit" 
                className="w-full border border-[#c5a059] text-white py-4 px-8 uppercase tracking-[0.25em] text-xs font-bold flex items-center justify-center gap-3 hover:bg-[#c5a059] hover:text-black transition-all duration-500 group"
              >
                Request An Invitation
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;