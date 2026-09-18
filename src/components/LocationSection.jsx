import React from 'react';
import { projectDetails } from '../data/projectData';

const locationHighlights = [
  {
    number: '01',
    title: 'Prime Ambernath (W) Address',
    description: 'Located Next to Ganpat Dhaba, Ambernath (W) on high-visibility main road with heavy footfall.'
  },
  {
    number: '02',
    title: 'Hospitals & Schools Nearby',
    description: 'Global Hospital (500m), Rural Hospital (500m), Ryan & Gurukul International Schools within 1km.'
  },
  {
    number: '03',
    title: 'Transit & Metro Hub',
    description: '500m from proposed Metro & Chikhloli Station, 3km from Ambernath Station & 1.5km to Panvel Highway.'
  }
];

const LocationSection = () => {
  return (
    <section id="location" className="w-full bg-[#F8F6F0] py-16 sm:py-24 border-b border-[#DFC181]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-15 lg:gap-26 items-center">

          {/* LEFT COLUMN: TEXT CONTENT & NUMBERED HIGHLIGHTS */}
          <div className="lg:col-span-5 space-y-5">

            {/* SUBHEADER */}
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#C5A059]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C5A059] uppercase font-sans">
                WELL CONNECTED LOCATION
              </span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight">
              The Centre of Life’s Essentials
            </h2>

            {/* INTRO PARAGRAPH */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {projectDetails.name} - {projectDetails.subName} is ideally located Next to Ganpat Dhaba, Ambernath (W), placing commercial businesses and residents at the center of essential infrastructure.
            </p>

            {/* NUMBERED HIGHLIGHTS LIST (01, 02, 03) */}
            <div className="space-y-4 pt-4">
              {locationHighlights.map((item, idx) => (
                <div key={item.number} className={`pt-4 ${idx !== 0 ? 'border-t border-slate-300/70' : ''}`}>
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#C5A059] min-w-[32px] pt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#183342] mb-1">
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
            <div className="relative bg-[#F2EFE9] p-3 sm:p-4 rounded-lg shadow-2xl border border-white/80 overflow-hidden">

              {/* GOOGLE MAPS IFRAME FOR AMBERNATH WEST */}
              <div className="w-full h-[400px] sm:h-[500px] lg:h-[550px] rounded overflow-hidden relative shadow-inner">
                <iframe
                  title="Sky View Shreeji Icon - Ambernath West Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15077.728906963493!2d73.18!3d19.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be793081e7d0f9d%3A0xc39fdf7d3ab2e8c2!2sAmbernath%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter contrast-105 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* OVERLAPPING CORNER BADGE */}
              <div className="absolute bottom-8 left-6 sm:left-8 z-20 bg-[#183342] text-white px-5 py-4 sm:px-6 sm:py-5 shadow-2xl rounded-sm border border-[#C5A059]/40 transform hover:scale-105 transition-transform max-w-[260px]">
                <span className="text-[10px] font-bold tracking-widest text-[#DFC181] uppercase block font-sans">
                  {projectDetails.name} • {projectDetails.subName}
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-white block mt-0.5 leading-snug">
                  Next to Ganpat Dhaba, Ambernath (W)
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
