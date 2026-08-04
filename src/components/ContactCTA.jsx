import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactCTA = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const SERVICE_ID = "service_3rybpx6";
    const TEMPLATE_ID = "template_2r271ub";
    const PUBLIC_KEY = "CKXSJ8cCD04kST2gw";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          setLoading(false);
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
          }, 3500);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setLoading(false);
          setError(true);
        }
      );
  };

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
                  <p className="text-stone-200 text-sm font-medium tracking-wide">+91-72900 07308</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 border border-stone-800 flex items-center justify-center group-hover:border-[#c5a059] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-stone-400 group-hover:text-[#c5a059] transition-colors" />
                </div>
                <div>
                  <p className="text-stone-500 text-[10px] uppercase tracking-widest">Concierge Desk</p>
                  <p className="text-stone-200 text-sm font-medium tracking-wide">rggroup177@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Premium Form (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 md:p-12 shadow-2xl relative"
          >
            {/* Top Border Accent Line */}
            <div className="absolute top-0 left-0 w-20 h-[2px] bg-[#c5a059]"></div>
            
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#c5a059] text-black font-bold rounded-full flex items-center justify-center mx-auto text-2xl shadow-md">
                  ✓
                </div>
                <h3 className="font-serif text-3xl text-white">Invitation Requested</h3>
                <p className="text-stone-400 text-sm max-w-md mx-auto">
                  Thank you. Our private concierge desk will get in touch with you shortly to coordinate your private viewing schedule.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-stone-800 py-3 text-white text-sm focus:border-[#c5a059] outline-none transition-colors duration-300"
                    />
                    <label 
                      htmlFor="name" 
                      className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-wider ${
                        formData.name !== "" 
                          ? "-top-4 text-xs text-[#c5a059]" 
                          : "top-3 text-sm text-stone-500"
                      }`}
                    >
                      Your Name
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-stone-800 py-3 text-white text-sm focus:border-[#c5a059] outline-none transition-colors duration-300"
                    />
                    <label 
                      htmlFor="email" 
                      className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-wider ${
                        formData.email !== "" 
                          ? "-top-4 text-xs text-[#c5a059]" 
                          : "top-3 text-sm text-stone-500"
                      }`}
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Phone Field */}
                  <div className="relative">
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-stone-800 py-3 text-white text-sm focus:border-[#c5a059] outline-none transition-colors duration-300"
                    />
                    <label 
                      htmlFor="phone" 
                      className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-wider ${
                        formData.phone !== "" 
                          ? "-top-4 text-xs text-[#c5a059]" 
                          : "top-3 text-sm text-stone-500"
                      }`}
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Select Dropdown */}
                  <div className="relative">
                    <select 
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#050505] border-b border-stone-800 py-3 text-stone-400 text-sm focus:border-[#c5a059] outline-none transition-colors duration-300 tracking-wider uppercase cursor-pointer"
                    >
                      <option value="" disabled>Interested In</option>
                      <option value="RG's Pleiaddes 3 BHK" className="bg-[#050505] text-white">RG's Pleiaddes 3 BHK</option>
                      <option value="RG's Pleiaddes 4 BHK" className="bg-[#050505] text-white">RG's Pleiaddes 4 BHK</option>
                      <option value="General Investment" className="bg-[#050505] text-white">General Investment</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea 
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-stone-800 py-3 text-white text-sm focus:border-[#c5a059] outline-none transition-colors duration-300 resize-none"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-wider ${
                      formData.message !== "" 
                        ? "-top-4 text-xs text-[#c5a059]" 
                        : "top-3 text-sm text-stone-500"
                    }`}
                  >
                    Preferences or Questions
                  </label>
                </div>

                {error && (
                  <p className="text-red-400 text-xs text-center">
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Premium Button Action */}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full border border-[#c5a059] text-white py-4 px-8 uppercase tracking-[0.25em] text-xs font-bold flex items-center justify-center gap-3 hover:bg-[#c5a059] hover:text-black transition-all duration-500 group disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Request An Invitation"}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;