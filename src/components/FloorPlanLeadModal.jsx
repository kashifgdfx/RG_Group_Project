import { useState, useEffect } from "react";
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

    // Prevent closing on ESC or Back button without filling
    useEffect(() => {
        if (!isOpen) return;

        // Push state to prevent back button from leaving the page/modal
        window.history.pushState({ modalOpen: true }, "");

        const handlePopState = (e) => {
            // When user presses back button, push the state back so they stay stuck/modal stays open
            window.history.pushState({ modalOpen: true }, "");
            alert("Please fill out the form to proceed with accessing floor plans.");
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

            // Form fill hone ke baad history state ko safe tarike se pop karke close karein
            window.history.back();
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

                <div className="p-5 sm:p-8 relative">

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