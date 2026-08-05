

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components & Pages Import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HeroSection from './components/HeroSection';
import ProjectOverview from './components/ProjectOverview';
import Configurations from './components/Configurations';
import AmenitiesSection from './components/AmenitiesSection';
import AmenityDetail from './components/AmenityDetail';
import PricingSection from './components/PricingSection';
import FeaturesSection from './components/FeaturesSection';
import LocationSection from './components/LocationSection';
import ProjectGallery from './components/ProjectGallery';
import WhyChoose from './components/WhyChoose';
import FloorPlanCTA from './components/FloorPlanCTA';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import ContactCTA from './components/ContactCTA';
import FloorPlanSection from './components/FloorPlanSection';
import PrivacyPolicy from './components/PrivacyPolicy'; 
import TermsAndConditions from './components/TermsAndConditions'; 
import WhatsAppButton from './components/WhatsAppButton';

const Home = () => (
  <>
    <div id="home"><HeroSection /></div>
    <div id="overview"><ProjectOverview /></div>
    <div id="configurations"><Configurations /></div>
    <div id="amenities"><AmenitiesSection /></div>
    <div id="pricing"><PricingSection /></div>
    <div id="features"><FeaturesSection /></div>
    <div id="location"><LocationSection /></div>
    <div id="gallery"><ProjectGallery /></div>
    <div id="why-choose"><WhyChoose /></div>
    <div id="floor-cta"><FloorPlanCTA /></div>
    <div id="testimonials"><TestimonialSection /></div>
    <div id="faq"><FAQSection /></div>
    <div id="contact"><ContactCTA /></div>
  </>
);

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <ScrollToTop />
      <WhatsAppButton />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/floor-plans" element={<div className="pt-20"><FloorPlanSection /></div>} />
        <Route path="/privacy-policy" element={<div className="pt-20"><PrivacyPolicy /></div>} />
        <Route path="/terms-and-conditions" element={<div className="pt-20"><TermsAndConditions /></div>} />
        {/* Dynamic Route for individual Amenity Detail Page */}
        <Route path="/amenities/:id" element={<div className="pt-20"><AmenityDetail /></div>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;