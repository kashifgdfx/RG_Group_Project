import React from 'react';
import { useEffect } from 'react';

const TermsAndConditions = () => {

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, []);

  return (
    <div className="min-h-screen bg-stone text-slate py-20 px-6 md:px-16 lg:px-24 selection:bg-gold selection:text-white">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-14 border border-gray-200/80 shadow-2xl relative overflow-hidden">
        
        {/* Luxury Gold Top Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

        {/* Header Section */}
        <div className="border-b border-gray-100 pb-10 mb-10 text-center md:text-left">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-medium block mb-3">Legal & Compliance</span>
          <h1 className="text-3xl md:text-5xl font-serif text-charcoal tracking-wide">Terms & Conditions</h1>
          <p className="mt-3 text-xs tracking-wider uppercase text-slate/70">Effective Date: August 4, 2026</p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-slate font-light">
            Welcome to <span className="text-gold font-medium">RG's Pleiaddes</span>. These Terms & Conditions govern your access to and use of this website. By accessing or using this website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using the website.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-slate text-base font-light leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">1. Acceptance of Terms</h2>
            <p>
              By using this website, you confirm that you have read, understood, and agreed to be bound by these Terms & Conditions, our Privacy Policy, and all applicable laws and regulations.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">2. Website Purpose</h2>
            <p>This website has been developed to provide information about RG's Pleiaddes, including:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-stone p-6 border border-gray-200/60 transition duration-300 hover:border-gold/50">
                <ul className="space-y-2 text-sm text-slate/90">
                  <li className="flex items-center gap-2">✦ Project overview & Floor plans</li>
                  <li className="flex items-center gap-2">✦ Amenities & Location advantages</li>
                  <li className="flex items-center gap-2">✦ Gallery & Brochure downloads</li>
                </ul>
              </div>
              <div className="bg-stone p-6 border border-gray-200/60 transition duration-300 hover:border-gold/50">
                <ul className="space-y-2 text-sm text-slate/90">
                  <li className="flex items-center gap-2">✦ Enquiry and site visit requests</li>
                  <li className="flex items-center gap-2">✦ Marketing and promotional information</li>
                </ul>
              </div>
            </div>
            <p className="text-sm italic text-slate/80 pt-2">
              The information provided is for general informational purposes only and does not constitute a legal offer, contract, or commitment.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">3. Project Information</h2>
            <p>Every effort is made to ensure the accuracy of the information presented on this website. However:</p>
            <ul className="space-y-2 pl-4 text-slate/90">
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Project specifications may change without prior notice.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Floor plans, layouts, images, and renderings are for illustrative purposes only.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Amenities and features may be modified during project execution.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Prices, payment plans, offers, and availability are subject to change.</li>
            </ul>
            <p className="text-sm font-medium text-charcoal pt-1">
              Users are advised to verify all details with the official sales team before making any purchase decisions.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">4. Intellectual Property</h2>
            <p>
              All content available on this website—including text, images, graphics, logos, floor plans, videos, icons, designs, documents, and website layout—is the property of <strong className="text-charcoal font-medium">RG's Pleiaddes</strong> or its respective licensors and is protected under applicable intellectual property laws.
            </p>
            <p className="text-sm text-slate/90 italic">
              No material may be copied, reproduced, distributed, modified, or published without prior written permission.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">5. User Responsibilities</h2>
            <p>By using this website, you agree that you will:</p>
            <ul className="space-y-2 pl-4 text-slate/90">
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Provide accurate information while submitting enquiry forms.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Use the website only for lawful purposes.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Not attempt unauthorized access to the website or its servers.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Not upload malicious software, viruses, or harmful code.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Not misuse or interfere with website functionality.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">6. Enquiry Forms</h2>
            <p>When you submit your information through our enquiry or contact forms:</p>
            <ul className="space-y-2 pl-4 text-slate/90">
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">You confirm that the information provided is accurate.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">You authorize our sales representatives to contact you regarding the project.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">You consent to receiving calls, emails, SMS, or WhatsApp communications related to your enquiry.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">You may opt out of promotional communications at any time.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">7. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites, including Google Maps, Social Media Platforms, and External Service Providers. We are not responsible for the content, privacy practices, or availability of third-party websites. Accessing such websites is entirely at your own risk.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">8. Limitation of Liability</h2>
            <p>
              While we strive to keep all information accurate and up to date, RG's Pleiaddes shall not be held liable for errors or omissions in website content, temporary website unavailability, technical interruptions, or any indirect/consequential damages resulting from website use. Users are encouraged to verify all project-related information before making financial or legal decisions.
            </p>
          </section>

          {/* Section 9 & 10 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <section className="bg-stone p-6 border border-gray-200/60">
              <h3 className="text-lg font-serif text-charcoal mb-3">9. Privacy</h3>
              <p className="text-sm text-slate/90">
                Your use of this website is also governed by our Privacy Policy, which outlines how your personal information is collected, used, stored, and protected.
              </p>
            </section>
            <section className="bg-stone p-6 border border-gray-200/60">
              <h3 className="text-lg font-serif text-charcoal mb-3">10. Changes to the Website</h3>
              <p className="text-sm text-slate/90">
                We reserve the right to modify content, update project details, change pricing/offers, add/remove features, or discontinue parts of the website without prior notice.
              </p>
            </section>
          </div>

          {/* Section 11 & 12 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <section className="bg-stone p-6 border border-gray-200/60">
              <h3 className="text-lg font-serif text-charcoal mb-3">11. Amendments to Terms</h3>
              <p className="text-sm text-slate/90">
                These Terms & Conditions may be revised periodically. Changes take effect immediately upon publication. Continued website use constitutes your acceptance of updates.
              </p>
            </section>
            <section className="bg-stone p-6 border border-gray-200/60">
              <h3 className="text-lg font-serif text-charcoal mb-3">12. Governing Law</h3>
              <p className="text-sm text-slate/90">
                These terms are governed by the laws of India. Any disputes arising herefrom shall be subject to the exclusive jurisdiction of competent courts in Greater Noida, Uttar Pradesh.
              </p>
            </section>
          </div>

          {/* Section 13 - Contact Card */}
          <section className="bg-stone p-8 border border-gold/30 relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 flex items-center justify-center">
              <span className="text-gold text-xl">✦</span>
            </div>
            <h2 className="text-2xl font-serif text-charcoal mb-4">13. Contact Us</h2>
            <p className="mb-6 text-sm">If you have any questions regarding these Terms & Conditions, please contact us:</p>
            <div className="space-y-2 text-sm text-slate/90">
              <p><strong className="text-charcoal font-medium">Project:</strong> RG's Pleiaddes</p>
              <p><strong className="text-charcoal font-medium">Location:</strong> Sector-1, Greater Noida West, Uttar Pradesh, India</p>
              <p><strong className="text-charcoal font-medium">Email:</strong> [Your Official Email]</p>
              <p><strong className="text-charcoal font-medium">Phone:</strong> [Your Contact Number]</p>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="border-t border-gray-200 pt-8 text-xs text-slate/60 leading-relaxed font-light">
            <p>
              <strong className="text-charcoal font-medium">Disclaimer:</strong> The content available on this website is intended solely for informational and marketing purposes. Images, floor plans, specifications, amenities, pricing, and project details are indicative and may be revised without prior notice. Nothing contained on this website shall be construed as a legal offer, warranty, or contractual obligation. Prospective buyers are advised to verify all information with the authorized sales team before making any booking or investment decision.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;