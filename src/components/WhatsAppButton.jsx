import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
const WhatsAppButton = () => {
  
  const phoneNumber = "917290007308";
  
  // Pre-filled message jo user ke WhatsApp open hone par automatically dikhega
  const defaultMessage = "Hello, I am interested in RG's Pleiaddes. Please share more details.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-26 right-6 z-50 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
    >
      {/* WhatsApp Icon */}
      <FaWhatsapp className="w-7 h-7" />

      {/* Tooltip on Hover (Optional) */}
      <span className="absolute right-16 bg-white text-stone-800 text-xs font-medium py-1.5 px-3 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-stone-200">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;