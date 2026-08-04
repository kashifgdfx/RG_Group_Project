import React from 'react';
import { useEffect } from 'react';

const PrivacyPolicy = () => {

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Agar smooth scroll chahiye toh, warna 'auto' bhi kar sakte ho
    });
  }, []);


  return (
    <div className="min-h-screen bg-stone text-slate py-20 px-6 md:px-16 lg:px-24 selection:bg-gold selection:text-white">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-14 border border-gray-200/80 shadow-2xl relative overflow-hidden">
        
        {/* Luxury Gold Top Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

        {/* Header Section */}
        <div className="border-b border-gray-100 pb-10 mb-10 text-center md:text-left">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-medium block mb-3">Legal & Transparency</span>
          <h1 className="text-3xl md:text-5xl font-serif text-charcoal tracking-wide">Privacy Policy</h1>
          <p className="mt-3 text-xs tracking-wider uppercase text-slate/70">Effective Date: August 4, 2026</p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-slate font-light">
            Welcome to <span className="text-gold font-medium">RG's Pleiaddes</span>. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit your details through our enquiry forms.
          </p>
          <p className="mt-4 text-sm text-slate/80 italic font-light">
            By accessing or using this website, you agree to the practices described in this Privacy Policy.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-slate text-base font-light leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">1. Information We Collect</h2>
            <p>We may collect the following types of information when you interact with our website:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-stone p-6 border border-gray-200/60 transition duration-300 hover:border-gold/50">
                <h3 className="text-lg font-serif text-charcoal mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Personal Information
                </h3>
                <ul className="space-y-2 text-sm text-slate/90">
                  <li className="flex items-center gap-2">✦ Full Name</li>
                  <li className="flex items-center gap-2">✦ Email Address</li>
                  <li className="flex items-center gap-2">✦ Mobile Number</li>
                  <li className="flex items-center gap-2">✦ City or Location</li>
                  <li className="flex items-center gap-2">✦ Property Preferences</li>
                  <li className="flex items-center gap-2">✦ Voluntary enquiry form details</li>
                </ul>
              </div>

              <div className="bg-stone p-6 border border-gray-200/60 transition duration-300 hover:border-gold/50">
                <h3 className="text-lg font-serif text-charcoal mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Non-Personal Information
                </h3>
                <ul className="space-y-2 text-sm text-slate/90">
                  <li className="flex items-center gap-2">✦ IP Address & Browser Type</li>
                  <li className="flex items-center gap-2">✦ Device Information & OS</li>
                  <li className="flex items-center gap-2">✦ Pages Visited & Time Spent</li>
                  <li className="flex items-center gap-2">✦ Referral Source</li>
                  <li className="flex items-center gap-2">✦ Cookies and Analytics Data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">2. How We Use Your Information</h2>
            <p>The information collected may be used to:</p>
            <ul className="space-y-2 pl-4 text-slate/90">
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Respond to your enquiries and schedule personalized site visits.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Share exclusive project details, brochures, pricing, and custom payment plans.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Contact you regarding your elite interest in RG's Pleiaddes.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Improve website performance and elevate user experience.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Analyze visitor behavior using advanced analytics tools.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Send important project updates, VIP promotional offers, or newsletters (where permitted).</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Comply with applicable legal and regulatory requirements.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">3. Cookies</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience—such as remembering user preferences, analyzing traffic, and delivering relevant marketing campaigns. You may disable cookies through your browser settings; however, some features of the website may not function properly.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">4. Information Sharing</h2>
            <p>
              We respect your privacy and <strong className="text-charcoal font-medium">do not sell your personal information</strong>. Your information may be shared exclusively with:
            </p>
            <ul className="space-y-2 pl-4 text-slate/90">
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Authorized sales representatives.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Marketing partners working on behalf of the project.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Technology service providers and CRM infrastructure.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-gold">Government or regulatory authorities when legally mandated.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">5. Data Security</h2>
            <p>
              We implement rigorous technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, misuse, loss, or destruction. While we strive to protect your information, no internet transmission is entirely infallible.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">6. Third-Party Services</h2>
            <p>
              Our website may incorporate third-party links or services such as Google Analytics, Google Maps, Social Media Platforms, CRM Systems, and Email Marketing Services. These external entities maintain distinct privacy policies outside our direct control.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">7. Marketing Communications</h2>
            <p>
              Upon submitting your contact details, you may receive project updates, brochures, pricing structures, promotional offers, event invitations, and site visit confirmations. You retain the right to opt out of promotional communications at any time.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">8. Your Rights</h2>
            <p>
              Depending on applicable legislative frameworks, you possess the right to access your personal data, request correction of inaccurate records, mandate data deletion, withdraw marketing consent, or inquire about data usage policies.
            </p>
          </section>

          {/* Section 9 & 10 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <section className="bg-stone p-6 border border-gray-200/60">
              <h3 className="text-lg font-serif text-charcoal mb-3">9. Children's Privacy</h3>
              <p className="text-sm text-slate/90">
                This website is strictly intended for individuals aged 18 years or older. We do not knowingly collect or solicit personal information from minors.
              </p>
            </section>
            <section className="bg-stone p-6 border border-gray-200/60">
              <h3 className="text-lg font-serif text-charcoal mb-3">10. Data Retention</h3>
              <p className="text-sm text-slate/90">
                We retain your information solely for the duration required to handle enquiries, execute service obligations, or preserve necessary business records.
              </p>
            </section>
          </div>

          {/* Section 11 */}
          <section className="space-y-3 pt-2">
            <h2 className="text-2xl font-serif text-charcoal border-l-2 border-gold pl-4">11. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to amend this Privacy Policy periodically to align with evolving legal requirements, operational standards, or website features. Revised revisions become effective immediately upon being published here.
            </p>
          </section>

          {/* Section 12 - Contact Card */}
          <section className="bg-stone p-8 border border-gold/30 relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 flex items-center justify-center">
              <span className="text-gold text-xl">✦</span>
            </div>
            <h2 className="text-2xl font-serif text-charcoal mb-4">12. Contact Us</h2>
            <p className="mb-6 text-sm">For any inquiries regarding this Privacy Policy or your personal information management, connect with our team:</p>
            <div className="space-y-2 text-sm text-slate/90">
              <p><strong className="text-charcoal font-medium">Project:</strong> RG's Pleiaddes</p>
              <p><strong className="text-charcoal font-medium">Location:</strong> Sector-1, Greater Noida West, Uttar Pradesh, India</p>
              <p><strong className="text-charcoal font-medium">Email:</strong> rggroup177@gmail.com</p>
              <p><strong className="text-charcoal font-medium">Phone:</strong> [Your Contact Number]</p>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="border-t border-gray-200 pt-8 text-xs text-slate/60 leading-relaxed font-light">
            <p>
              <strong className="text-charcoal font-medium">Disclaimer:</strong> The information harvested via this website is strictly utilized for customer inquiries, project communications, and associated real estate business purposes. Submission of details does not establish a formal booking or contractual liability. Specifications, pricing matrix, unit availability, and promotional offers are subject to modification without prior notice.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;