import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectHighlights from './components/ProjectHighlights';
import AboutSection from './components/AboutSection';
import AmenitiesSection from './components/AmenitiesSection';
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

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E] flex flex-col font-sans selection:bg-[#C07858] selection:text-white">
      
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

        {/* ABOUT SECTION ("WELCOME TO THE LIVIN") */}
        <AboutSection
          onExploreAmenities={() => setIsBrochureOpen(true)}
        />

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
