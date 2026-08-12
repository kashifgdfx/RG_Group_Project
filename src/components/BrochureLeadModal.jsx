import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const BrochureLeadModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    propertyType: "",
    timeline: "",
  });

  // Prevent closing on ESC or Back button without filling
  useEffect(() => {
    if (!isOpen) return;

    // Push state to prevent back button from leaving the page/modal
    window.history.pushState({ modalOpen: true }, "");

    const handlePopState = (e) => {
      // When user presses back button, push the state back so they stay stuck/modal stays open
      window.history.pushState({ modalOpen: true }, "");
      alert("Please fill out the form to proceed with downloading the brochure.");
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        alert("Please fill out the form to proceed.");
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Safe Close Handler for manual Close Button click
  const handleManualClose = () => {
    window.history.back();
    onClose();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please fill required fields (Name and Mobile Number)");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        "service_3rybpx6",
        "template_2r271ub",
        {
          ...formData,
          source: "Brochure Download",
        },
        "CKXSJ8cCD04kST2gw"
      );

      localStorage.setItem("brochureLead", "true");

      // PDF Open
      window.open("/brochure.pdf", "_blank");

      // Form fill hone ke baad history state ko safe tarike se pop karke close karein
      window.history.back();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Yahan backdrop par click event hata diya gaya hai taaki click karke close na ho paaye
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      {/* Responsive Wrapper with Max Height and Scroll for Small Mobile Devices */}
      <div className="w-full max-w-xl max-h-[95vh] overflow-y-auto bg-white rounded-2xl shadow-2xl my-auto relative">

        {/* Close Button Added Here */}
        <button
          type="button"
          onClick={handleManualClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Gold Top Border */}
        <div className="h-1 bg-gold sticky top-0 z-10" />

        <div className="p-5 sm:p-8 relative">

          <div className="text-center mb-6 sm:mb-8">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs font-semibold">
              Exclusive Download
            </span>

            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-serif text-charcoal">
              Download Brochure
            </h2>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate">
              Fill your details to get complete brochure,
              floor plans, pricing and project information.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm sm:text-base focus:border-gold outline-none transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number *"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm sm:text-base focus:border-gold outline-none transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm sm:text-base focus:border-gold outline-none transition"
            />

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm sm:text-base focus:border-gold outline-none transition bg-white"
            >
              <option value="">Select Budget Range</option>
              <option value="Up to 1 Cr">Up to ₹1 Cr</option>
              <option value="1 Cr - 1.5 Cr">₹1 Cr - ₹1.5 Cr</option>
              <option value="1.5 Cr - 2 Cr">₹1.5 Cr - ₹2 Cr</option>
              <option value="2 Cr - 3 Cr">₹2 Cr - ₹3 Cr</option>
              <option value="More Than 3 Cr">More Than ₹3 Cr</option>
            </select>

            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm sm:text-base focus:border-gold outline-none transition bg-white"
            >
              <option value="">Interested In</option>
              <option value="4 BHK">4 BHK</option>
            </select>

            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm sm:text-base focus:border-gold outline-none transition bg-white"
            >
              <option value="">Purchase Timeline</option>
              <option value="Immediate">Immediate</option>
              <option value="Within 3 Months">Within 3 Months</option>
              <option value="Within 6 Months">Within 6 Months</option>
              <option value="Just Exploring">Just Exploring</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold text-white py-3.5 sm:py-4 uppercase tracking-[0.2em] text-xs sm:text-sm font-medium hover:bg-gold-light transition rounded-lg"
            >
              {loading ? "Processing..." : "Download Brochure"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default BrochureLeadModal;