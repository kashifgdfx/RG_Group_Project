import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqsData = [
  {
    question: "Where is RG's Pleiaddes located?",
    answer: "Sector-1, Greater Noida West."
  },
  {
    question: "What type of project is this?",
    answer: "Premium residential apartments designed for modern and luxurious urban living."
  },
  {
    question: "Does the project offer modern amenities?",
    answer: "Yes, it features a grand clubhouse, swimming pool, fully equipped gymnasium, landscaped gardens, sports facilities, children's play area, and much more."
  },
  {
    question: "Is the project well connected?",
    answer: "Yes, it offers excellent connectivity to Noida, Delhi, Ghaziabad, major expressways, top-tier schools, hospitals, and shopping destinations."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-stone text-charcoal relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-stone/80 shadow-sm transition-all duration-300 overflow-hidden"
              >
                {/* Question Header Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className="font-serif text-lg md:text-xl text-charcoal group-hover:text-gold transition-colors duration-300">
                    {faq.question}
                  </span>
                  
                  {/* Fixed Arrow Background Class Toggle */}
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "rotate-180 bg-gold text-white" : "bg-stone/55 text-charcoal"
                  }`}>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Animated Answer Section */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate text-base leading-relaxed border-t border-stone/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;