import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const FloorPlanLeadModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert("Please enter a valid mobile number");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        "service_3rybpx6",
        "template_2r271ub",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          budget: formData.budget,
          source: "Floor Plan Lead",
        },
        "CKXSJ8cCD04kST2gw"
      );

      localStorage.setItem("floorPlanLead", "true");

      onClose();
      navigate("/floor-plans");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-4">
      {/* Responsive Wrapper with Max Height and Scroll for Small Mobile Devices */}
      <div className="relative w-full max-w-lg max-h-[95vh] overflow-y-auto rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] my-auto">

        {/* Gold Top Border */}
        <div className="h-1 bg-gold sticky top-0 z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 text-3xl text-slate hover:text-charcoal p-1"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="p-5 sm:p-8">

          <p className="mb-1 sm:mb-2 text-center uppercase tracking-[0.3em] text-[10px] sm:text-xs text-gold">
            Exclusive Access
          </p>

          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-charcoal">
            Unlock Floor Plans
          </h2>

          <p className="mt-2 sm:mt-3 text-center text-sm sm:text-base text-slate leading-relaxed">
            Please share your details to access detailed floor plans,
            unit layouts, pricing information and brochure.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none transition focus:border-gold"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number *"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none transition focus:border-gold"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none transition focus:border-gold"
            />

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm sm:text-base outline-none transition focus:border-gold bg-white"
            >
              <option value="">Select Budget Range</option>
              <option value="Up to 1 Cr">Up to ₹1 Cr</option>
              <option value="1 Cr - 1.5 Cr">₹1 Cr - ₹1.5 Cr</option>
              <option value="1.5 Cr - 2 Cr">₹1.5 Cr - ₹2 Cr</option>
              <option value="2 Cr - 3 Cr">₹2 Cr - ₹3 Cr</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold py-3.5 sm:py-4 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-gold-light rounded-lg"
            >
              {loading ? "Please Wait..." : "View Floor Plans"}
            </button>
          </form>

          <div className="mt-5 sm:mt-6 rounded-xl border border-gold/20 bg-stone p-3.5 sm:p-4">
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate">
              <li>✓ Detailed Floor Layouts</li>
              <li>✓ Unit Size & Configuration</li>
              <li>✓ Premium Amenities Overview</li>
              <li>✓ Downloadable Brochure Access</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FloorPlanLeadModal;