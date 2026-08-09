import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LeadPopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredTime: "Anytime",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Genuine lead check: Phone number must be 10 digits
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    // Yahan tu apni API call (jaise EmailJS, Firebase, ya backend endpoint) integrate kar sakta hai
    console.log("Submitted Genuine Lead Data:", formData);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-charcoal/70 backdrop-blur-sm">
          {/* Backdrop Click to Close */}
          <div className="absolute inset-0" onClick={onClose}></div>

          {/* Modal Content with Responsive Height and Scrolling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white border border-stone/80 shadow-2xl rounded-sm p-5 sm:p-8 md:p-10 z-10 text-charcoal my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate hover:text-charcoal transition text-xl font-bold w-8 h-8 flex items-center justify-center bg-stone/30 rounded-full z-20"
              aria-label="Close modal"
            >
              &times;
            </button>

            {!submitted ? (
              <div>
                {/* Header */}
                <div className="text-center mb-5 sm:mb-6">
                  <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-semibold block mb-1">
                    Exclusive Access
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal">
                    Download Detailed Floor Plans & Pricing
                  </h3>
                  <p className="text-slate text-xs sm:text-sm mt-2">
                    Fill in your details below to receive the complete brochure and price sheet directly.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate font-semibold mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-stone/20 border border-stone/80 text-sm text-charcoal focus:outline-none focus:border-gold transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate font-semibold mb-1">
                      Mobile Number (For WhatsApp/Call) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 bg-stone/40 border border-r-0 border-stone/80 text-xs text-slate font-semibold">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength="10"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className="w-full px-4 py-3 bg-stone/20 border border-stone/80 text-sm text-charcoal focus:outline-none focus:border-gold transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate font-semibold mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-stone/20 border border-stone/80 text-sm text-charcoal focus:outline-none focus:border-gold transition"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-xs font-semibold mt-1">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-2 bg-charcoal text-white py-3.5 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-md"
                  >
                    Get Instant Access
                  </button>

                  <p className="text-[10px] text-center text-slate mt-3">
                    🔒 We respect your privacy. No spam guaranteed.
                  </p>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="text-center py-6 sm:py-8 space-y-4">
                <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-charcoal">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-slate text-xs sm:text-sm max-w-sm mx-auto">
                  Your request has been successfully registered. Our sales team will share the floor plans and pricing details on <strong className="text-charcoal">+91 {formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="mt-4 px-6 py-2.5 bg-charcoal text-white text-xs uppercase tracking-widest hover:bg-gold hover:text-charcoal transition"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopupForm;