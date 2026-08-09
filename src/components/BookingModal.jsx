import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const BookingModal = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    time: "",
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
    const TEMPLATE_ID = "template_bqncw5h";
    const PUBLIC_KEY = "CKXSJ8cCD04kST2gw";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          setLoading(false);
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", phone: "", email: "", interest: "", time: "", message: "" });
            onClose();
          }, 2500);
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          
          {/* Backdrop Blur Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm"
          ></motion.div>

          {/* Modal Content Box with Responsive Height and Scroll */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white border border-stone/80 shadow-2xl z-10 p-5 sm:p-6 md:p-8 text-charcoal my-auto"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone/50 flex items-center justify-center text-charcoal hover:bg-gold hover:text-white transition-colors z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8 sm:py-12 space-y-4">
                <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center mx-auto text-2xl shadow-md">
                  ✓
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal">Visit Request Confirmed!</h3>
                <p className="text-slate text-xs sm:text-sm max-w-sm mx-auto">
                  Thank you. Our team will get in touch with you shortly to finalize your site visit to RG's Pleiaddes.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-5 sm:mb-6">
                  <span className="text-gold uppercase tracking-[0.25em] text-[10px] font-semibold mb-1 sm:mb-2 block">
                    RG's Pleiaddes Exclusive
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-charcoal mb-2">Book Free Site Visit</h3>
                  <div className="w-12 h-0.5 bg-gold mx-auto"></div>
                  <p className="text-slate text-xs sm:text-sm mt-2 sm:mt-3">
                    Fill in your details below and experience luxury living firsthand.
                  </p>
                </div>

                {/* Form - ref attached for EmailJS */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  <div>
                    <label className="block text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91"
                        className="w-full px-4 py-2.5 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2.5 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                        Interested In
                      </label>
                      <select 
                        name="interest" 
                        required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors cursor-pointer"
                      >
                        <option value="" disabled>Select Configuration</option>
                        <option value="RG's Pleiaddes 4 BHK">RG's Pleiaddes 4 BHK</option>
                        <option value="General Investment">General Investment</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                        Preferred Time / Slot
                      </label>
                      <input 
                        type="text" 
                        name="time" 
                        required
                        value={formData.time}
                        onChange={handleChange}
                        placeholder="e.g., Weekend / Evening"
                        className="w-full px-4 py-2.5 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Message / Special Request (Optional)
                    </label>
                    <textarea 
                      name="message" 
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements..."
                      className="w-full px-4 py-2.5 bg-stone/30 border border-stone/80 focus:border-gold focus:outline-none text-sm text-charcoal transition-colors resize-none"
                    ></textarea>
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs text-center">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full mt-3 sm:mt-4 bg-charcoal text-white py-3.5 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-gold transition-all duration-300 shadow-md disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Confirm Booking"}
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