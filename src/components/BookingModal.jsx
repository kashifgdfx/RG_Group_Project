import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apna backend API ya email service integrate kar sakte hain
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          
          {/* Backdrop Blur Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
          ></motion.div>

          {/* Modal Content Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-full max-w-lg bg-white border border-stone/80 shadow-2xl z-10 p-8 md:p-10 text-charcoal"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone/50 flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-colors"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center mx-auto text-2xl shadow-md">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-charcoal">Visit Request Confirmed!</h3>
                <p className="text-slate text-sm">
                  Thank you. Our team will get in touch with you shortly to finalize your site visit to RG's Pleiaddes.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <span className="text-gold uppercase tracking-[0.25em] text-[10px] font-semibold mb-2 block">
                    RG's Pleiaddes Exclusive
                  </span>
                  <h3 className="text-3xl font-serif text-charcoal mb-2">Book Free Site Visit</h3>
                  <div className="w-12 h-0.5 bg-gold mx-auto"></div>
                  <p className="text-slate text-xs md:text-sm mt-3">
                    Fill in your details below and experience luxury living firsthand.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                        Preferred Date
                      </label>
                      <input 
                        type="date" 
                        name="date" 
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                        Preferred Time
                      </label>
                      <input 
                        type="time" 
                        name="time" 
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-6 bg-charcoal text-white py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-gold transition-all duration-300 shadow-md"
                  >
                    Confirm Booking
                  </button>
                </form>
              </>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;