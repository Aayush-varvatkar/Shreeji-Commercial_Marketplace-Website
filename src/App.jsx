import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectHighlights from './components/ProjectHighlights';
import AboutSection from './components/AboutSection';
import AmenitiesSection from './components/AmenitiesSection';
import CommercialFloorsOverview from './components/CommercialFloorsOverview';
import FloorPlanSection from './components/FloorPlanSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import FooterSection from './components/FooterSection';
import FloatingActions from './components/FloatingActions';
import BrochureModal from './components/BrochureModal';
import ContactModal from './components/ContactModal';

function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Auto popup contact form modal 2 seconds after initial load and every reload
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContactOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#1E1E1E] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* NAVBAR */}
      <Navbar
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <HeroSection />

        {/* PROJECT HIGHLIGHTS SECTION */}
        <ProjectHighlights />

        {/* ABOUT SECTION ("WELCOME TO SKY VIEW") */}
        <AboutSection
          onExploreAmenities={() => setIsBrochureOpen(true)}
        />

        {/* COMMERCIAL FLOORS OVERVIEW (GROUND SHOPS LEFT, 1ST & 2ND FLOORS RIGHT) */}
        <CommercialFloorsOverview />
        
        {/* AMENITIES SECTION */}
        <AmenitiesSection />

        {/* FLOOR PLAN SECTION */}
        <FloorPlanSection
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* GALLERY SECTION */}
        <GallerySection />

        {/* LOCATION SECTION */}
        <LocationSection />
      </main>

      {/* FOOTER SECTION */}
      <FooterSection />

      {/* FLOATING ACTION BUTTONS & SIDE BROCHURE TAB */}
      <FloatingActions
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* MODALS */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}

export default App;
