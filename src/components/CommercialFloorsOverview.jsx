import React, { useState } from 'react';
import { Check, ZoomIn, X } from 'lucide-react';

const planTabs = [
  { id: 'ground', label: 'Ground Floor', image: '/images/ground_floor_plan.jpg', title: 'Ground Floor – Commercial Shops Plan' },
  { id: 'first_second', label: '1st & 2nd Floor', image: '/images/first_floor_plan.jpg', title: '1st & 2nd Floor – Office Spaces Plan' },
  { id: 'third', label: '3rd Floor', image: '/images/3dflore.png', title: '3rd Floor – Podium & Amenities Plan' },
  { id: 'typical', label: '4th–11th Floor', image: '/images/4to11.png', title: '4th–11th Floor – Typical Residential Floor Plan' },
  { id: 'eighth', label: '8th Floor', image: '/images/8flow.png', title: '8th Floor – Residential & Refuge Area Plan' },
  { id: 'twelfth', label: '12th Floor', image: '/images/12flower.png', title: '12th Floor – Premium Terrace Residences Plan' },
  { id: 'isometric_1_2', label: '1 & 2 BHK Views', image: '/images/isometric_1_2_bhk_page.jpg', title: '1 BHK & 2 BHK Isometric Unit Views' },
  { id: 'isometric_3', label: '3 BHK Views', image: '/images/isometric_3_bhk_page.jpg', title: '3 BHK Isometric Unit Views' }
];

const CommercialFloorsOverview = () => {
  const [activePlanTab, setActivePlanTab] = useState('ground');
  const [activeModalImage, setActiveModalImage] = useState(null);

  const floorCards = [
    {
      id: 'ground',
      title: "Ground Floor – Commercial Shops",
      subtitle: "STREET-FACING COMMERCIAL SHOPS",
      description: "Engineered for retail outlets, showrooms and consumer brands, with direct main-road frontage and high footfall.",
      image: "/images/ground_floor_plan.jpg",
      points: [
        "Street-facing shops with a 5'11\" wide otla promenade",
        "Entrance lobbies with MVPD digital access",
        "Driver waiting room and common toilets",
        "Passages 5'11\" wide, with lifts and staircases"
      ]
    },
    {
      id: 'first_second',
      title: "1st & 2nd Floors – Office Spaces",
      subtitle: "EXECUTIVE CORPORATE SUITES",
      description: "Designed for corporate offices, clinics, consultancies and administrative use.",
      image: "/images/first_floor_plan.jpg",
      points: [
        "Flexible office layouts with attached toilets and open-air passages (A.P. 5'11\" wide)",
        "5'11\" wide central passage with granite wall cladding",
        "Passenger lifts plus a dedicated fire lift",
        "Equipped for clinics, consultancies, financial hubs & coaching"
      ]
    },
    {
      id: 'residences',
      title: "3rd to 12th Floors – Residences (1, 2 & 3 BHK)",
      subtitle: "PREMIUM ELEVATED LIVING",
      description: "Vastu-friendly layouts, spacious living rooms and large balconies crafted for serene family living.",
      image: "/images/4to11.png",
      points: [
        "3rd Floor: Podium level with clubhouse, society office, gymnasium and playground",
        "4th–11th Floors: Typical residential floors, 1.80 m wide passages and fire lifts",
        "8th Floor: Dedicated refuge area for safety compliance",
        "12th Floor: Premium units with large private terrace areas"
      ]
    }
  ];

  const currentTabPlan = planTabs.find((p) => p.id === activePlanTab) || planTabs[0];

  return (
    <section id="spaces" className="w-full bg-[#F8F6F0] py-16 sm:py-24 border-b border-[#DFC181]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal reveal-up">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase font-sans mb-2 block">
            SPACES & FLOOR PLANS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight mb-3">
            Floor-by-Floor Architecture
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Discover the thoughtfully engineered vertical layout of Sky View: from high-footfall commercial ground shops and corporate office floors to luxury 1, 2 & 3 BHK residences on upper storeys.
          </p>
        </div>

        {/* 3-COLUMN CARDS GRID (GROUND SHOPS, 1ST & 2ND OFFICES, 3RD-12TH RESIDENCES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {floorCards.map((card, idx) => (
            <div
              key={card.id}
              className={`bg-white rounded-2xl border border-slate-200/80 hover:border-[#C5A059] p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group reveal reveal-up delay-${(idx + 1) * 100}`}
            >
              <div>
                {/* IMAGE CONTAINER */}
                <div
                  onClick={() => setActiveModalImage(card)}
                  className="relative h-56 sm:h-60 rounded-xl bg-[#F8F6F0] overflow-hidden border border-slate-200 mb-5 cursor-pointer flex items-center justify-center p-3"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-[#183342] text-[#DFC181] px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xl border border-[#C5A059]/40">
                      <ZoomIn className="w-4 h-4" />
                      <span>Zoom Blueprint</span>
                    </div>
                  </div>
                </div>

                {/* CARD TITLE & SUBTITLE */}
                <span className="text-[11px] font-bold tracking-widest text-[#C5A059] uppercase block mb-1 font-sans">
                  {card.subtitle}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#183342] mb-3 leading-snug">
                  {card.title}
                </h3>

                {/* SHORT EXPLANATION */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {card.description}
                </p>

                {/* BULLET POINTS */}
                <div className="space-y-2.5 pt-3 border-t border-slate-100">
                  {card.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#C5A059]/20 text-[#183342] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#C5A059] stroke-[3]" />
                      </div>
                      <span className="text-slate-800 text-xs font-medium leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PLAN TABS INTERACTIVE EXPLORER */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-xl mb-16 reveal reveal-up">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase font-sans mb-1 block">
              ARCHITECTURAL BLUEPRINTS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#183342]">
              Interactive Plan Layouts
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Select a floor tier below to review precise architectural schematics.
            </p>
          </div>

          {/* TAB BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            {planTabs.map((tab) => {
              const isActive = activePlanTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePlanTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-[#183342] text-[#DFC181] border border-[#C5A059]/40 shadow-md scale-105'
                      : 'bg-[#F8F6F0] text-slate-700 border border-slate-300 hover:border-[#C5A059] hover:text-[#183342]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* TAB PREVIEW DISPLAY */}
          <div
            onClick={() => setActiveModalImage(currentTabPlan)}
            className="relative bg-[#F8F6F0] rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col items-center justify-center cursor-pointer group max-w-4xl mx-auto shadow-inner min-h-[300px] sm:min-h-[420px]"
          >
            <img
              src={currentTabPlan.image}
              alt={currentTabPlan.title}
              className="max-h-[360px] sm:max-h-[400px] w-auto object-contain group-hover:scale-105 transition-transform duration-500 rounded"
            />
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
              <div className="bg-[#183342] text-[#DFC181] px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-2xl border border-[#C5A059]/40">
                <ZoomIn className="w-4 h-4" />
                <span>Click to Fullscreen: {currentTabPlan.label}</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="font-serif font-bold text-base sm:text-lg text-[#183342] block">
                {currentTabPlan.title}
              </span>
              <span className="text-[11px] text-[#C5A059] font-bold tracking-wider uppercase font-sans">
                Click blueprint to zoom in high-resolution
              </span>
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
                {activeModalImage.subtitle || "SKY VIEW ARCHITECTURE"}
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
