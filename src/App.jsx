import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectOverview from './components/ProjectOverview'
import Configurations from './components/Configurations'
import AmenitiesSection from './components/AmenitiesSection'
import PricingSection from './components/PricingSection'
import FeaturesSection from './components/FeaturesSection'
import LocationSection from './components/LocationSection'
import ProjectGallery from './components/ProjectGallery'
import WhyChoose from './components/WhyChoose'
import FloorPlanCTA from './components/FloorPlanCTA'
import TestimonialSection from './components/TestimonialSection'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<HeroSection/>
<ProjectOverview/>
<Configurations/>
<AmenitiesSection/>
<PricingSection/>
<FeaturesSection/>
<LocationSection/>
<ProjectGallery/>
<WhyChoose/>
<FloorPlanCTA/>
<TestimonialSection/>
<ContactCTA/>
<Footer/>
<ScrollToTop/>
    </>
  )
}

export default App
