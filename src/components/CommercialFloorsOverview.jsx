import React, { useState } from 'react';
import { Check, ZoomIn, X } from 'lucide-react';

const CommercialFloorsOverview = () => {
  const [activeModalImage, setActiveModalImage] = useState(null);

  const groundFloorData = {
    title: "Ground Floor Showroom Spaces Marketplace",
    subtitle: "Showroom Spaces 01 - 24 & Street Frontage",
    description: "Engineered for high-visibility showroom spaces, retail outlets, and consumer brands with direct main-road frontage and maximum pedestrian footfall.",
    image: "/images/ground_floor_plan.jpg",
    points: [
      "24 Prime Street-Facing Showroom Spaces (Units 01 to 24)",
      "5'11\" Wide Otla Walkway Promenade for customer display",
      "Grand Entrance Lobby with MVPD digital security access",
      "Dedicated Driver Waiting Room & separate male/female restrooms"
    ]
  };

  const upperFloorsData = {
    title: "1st & 2nd Floor Executive Office Spaces",
    subtitle: "Corporate Office Suites & Passages",
    description: "Designed for professional corporate suites, medical clinics, consultancy firms, and administrative office spaces with tranquil corporate ambiance.",
    image: "/images/first_floor_plan.jpg",
    points: [
      "Flexible Executive Office Suite Layouts with optimum natural light",
      "5'11\" Wide Central Passages with premium granite wall cladding",
      "Branded Passenger Lifts & Dedicated Fire Evacuation Lift",
      "100% Uninterrupted Generator Power Backup for common areas"
    ]
  };

  return (
    <section id="floor-overview" className="w-full bg-[#F8F6F0] py-16 sm:py-24 border-b border-[#DFC181]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal reveal-up">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase font-sans mb-2 block">
            FLOOR-BY-FLOOR ARCHITECTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight mb-3">
            Commercial Floor Overview
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Architectural layout plans for Ground Floor Showroom Spaces (Units 01-24) and 1st & 2nd Floor Executive Office Suites of Sky View Commercial Marketplace.
          </p>
        </div>

        {/* 2-COLUMN GRID (LEFT: GROUND SHOPS, RIGHT: 1ST & 2ND FLOORS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* LEFT CARD: GROUND FLOOR SHOPS */}
          <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-[#C5A059] p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group reveal reveal-right delay-150">
            <div>
              {/* IMAGE CONTAINER */}
              <div
                onClick={() => setActiveModalImage(groundFloorData)}
                className="relative h-64 sm:h-72 rounded-xl bg-[#F8F6F0] overflow-hidden border border-slate-200 mb-6 cursor-pointer flex items-center justify-center p-3"
              >
                <img
                  src={groundFloorData.image}
                  alt={groundFloorData.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#183342] text-[#DFC181] px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xl border border-[#C5A059]/40">
                    <ZoomIn className="w-4 h-4" />
                    <span>Zoom Ground Plan</span>
                  </div>
                </div>
              </div>

              {/* CARD TITLE & SUBTITLE */}
              <span className="text-[11px] font-bold tracking-widest text-[#C5A059] uppercase block mb-1 font-sans">
                {groundFloorData.subtitle}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#183342] mb-3">
                {groundFloorData.title}
              </h3>

              {/* SHORT EXPLANATION */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {groundFloorData.description}
              </p>

              {/* BULLET POINTS */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                {groundFloorData.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 text-[#183342] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] stroke-[3]" />
                    </div>
                    <span className="text-slate-800 text-xs sm:text-sm font-medium leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD: 1ST & 2ND FLOOR OFFICES */}
          <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-[#C5A059] p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group reveal reveal-left delay-300">
            <div>
              {/* IMAGE CONTAINER */}
              <div
                onClick={() => setActiveModalImage(upperFloorsData)}
                className="relative h-64 sm:h-72 rounded-xl bg-[#F8F6F0] overflow-hidden border border-slate-200 mb-6 cursor-pointer flex items-center justify-center p-3"
              >
                <img
                  src={upperFloorsData.image}
                  alt={upperFloorsData.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#183342] text-[#DFC181] px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xl border border-[#C5A059]/40">
                    <ZoomIn className="w-4 h-4" />
                    <span>Zoom 1st & 2nd Plan</span>
                  </div>
                </div>
              </div>

              {/* CARD TITLE & SUBTITLE */}
              <span className="text-[11px] font-bold tracking-widest text-[#C5A059] uppercase block mb-1 font-sans">
                {upperFloorsData.subtitle}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#183342] mb-3">
                {upperFloorsData.title}
              </h3>

              {/* SHORT EXPLANATION */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {upperFloorsData.description}
              </p>

              {/* BULLET POINTS */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                {upperFloorsData.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 text-[#183342] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] stroke-[3]" />
                    </div>
                    <span className="text-slate-800 text-xs sm:text-sm font-medium leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#F8F6F0] rounded-xl max-w-5xl w-full p-6 text-slate-900 relative shadow-2xl max-h-[92vh] flex flex-col border border-[#C5A059]/40">
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 bg-slate-200/80 hover:bg-slate-300 p-2 rounded-full cursor-pointer z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-4 pr-8">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block font-sans">
                {activeModalImage.subtitle}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#183342]">{activeModalImage.title}</h3>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-300 flex-grow flex items-center justify-center overflow-auto max-h-[68vh] shadow-inner">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                className="max-h-[62vh] max-w-full object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CommercialFloorsOverview;
