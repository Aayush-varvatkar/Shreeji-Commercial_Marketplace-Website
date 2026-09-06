import React from 'react';
import { projectDetails } from '../data/projectData';

const locationHighlights = [
  {
    number: '01',
    title: 'Connected Location',
    description: 'Located in Kon Gaon, Kalyan West with convenient access to Kalyan-Bhiwandi Road.'
  },
  {
    number: '02',
    title: 'Everyday Convenience',
    description: 'Schools, hospitals, shopping destinations and daily essentials are available in the surrounding area.'
  },
  {
    number: '03',
    title: 'Growing Infrastructure',
    description: 'The neighbourhood benefits from developing road and public-transport connectivity.'
  }
];

const LocationSection = () => {
  return (
    <section id="location" className="w-full bg-[#FAF7F2] py-16 sm:py-24 border-b border-[#E8E2D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-15 lg:gap-26 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT & NUMBERED HIGHLIGHTS */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* SUBHEADER */}
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#C07858]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C07858] uppercase font-sans">
                WELL CONNECTED
              </span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              A Location That Keeps You Connected
            </h2>

            {/* INTRO PARAGRAPH */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {projectDetails.name} offers a convenient residential address in Kon Gaon, Kalyan West, providing access to important roads and everyday facilities.
            </p>

            {/* NUMBERED HIGHLIGHTS LIST (01, 02, 03) */}
            <div className="space-y-4 pt-4">
              {locationHighlights.map((item, idx) => (
                <div key={item.number} className={`pt-4 ${idx !== 0 ? 'border-t border-slate-300/70' : ''}`}>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#C07858] min-w-[32px] pt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: MAP CONTAINER (~55% WIDTH FROM RIGHT SIDE) */}
          <div className="lg:col-span-7 relative max-w-xl mx-auto lg:max-w-none w-full">
            
            {/* MAP CARD CONTAINER */}
            <div className="relative bg-[#F4EFE6] p-3 sm:p-4 rounded-lg shadow-2xl border border-white/80 overflow-hidden">
              
              {/* GOOGLE MAPS IFRAME FOR THE LIVIN - KALYAN WEST */}
              <div className="w-full h-[400px] sm:h-[500px] lg:h-[550px] rounded overflow-hidden relative shadow-inner">
                <iframe
                  title="The Livin - 1 BHK & 2 BHK in Kalyan Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.85694726833!2d73.11194569999999!3d19.2450653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795e12b5bc395%3A0xcf6c345e0d0cd578!2sThe%20Livin%20-%201%20Bhk%20%26%202%20Bhk%20in%20Kalyan!5e0!3m2!1sen!2sin!4v1788720788628!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter contrast-105 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* OVERLAPPING CORNER BADGE (MATCHING ATTACHED IMAGE) */}
              <div className="absolute bottom-8 left-6 sm:left-8 z-20 bg-[#6B241A] text-white px-5 py-4 sm:px-6 sm:py-5 shadow-2xl rounded-sm border border-white/10 transform hover:scale-105 transition-transform max-w-[240px]">
                <span className="text-[10px] font-bold tracking-widest text-[#C07858] uppercase block font-sans">
                  {projectDetails.name}
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-white block mt-0.5 leading-snug">
                  Kon Gaon, Kalyan West
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationSection;
