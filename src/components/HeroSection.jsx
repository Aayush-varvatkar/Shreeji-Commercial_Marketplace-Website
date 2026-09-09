import React from 'react';
import ImageSlider from './ImageSlider';
import LeadForm from './LeadForm';

const HeroSection = () => {
  return (
    <section id="homes" className="w-full bg-[#F8F6F0] border-b border-[#DFC181]/40">
      <div className="w-full max-w-[1600px] mx-auto min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
        
        {/* LEFT COLUMN: HERO IMAGE SLIDER (8 COLS) */}
        <div className="lg:col-span-8 xl:col-span-8 relative flex">
          <ImageSlider />
        </div>

        {/* RIGHT COLUMN: LEAD CAPTURE FORM (4 COLS) */}
        <div className="lg:col-span-4 xl:col-span-4 flex">
          <LeadForm />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
