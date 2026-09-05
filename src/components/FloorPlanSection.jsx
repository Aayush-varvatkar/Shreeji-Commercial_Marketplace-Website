import React, { useState } from 'react';
import { ZoomIn, X, Download } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const floorPlanCards = [
  {
    id: '1bhk',
    typology: '1 BHK',
    title: '1 BHK Floor Plan',
    layout: 'Boutique Twin Towers',
    description: 'Intelligently planned 1 BHK unit with spacious living room, ventilated bedroom, functional kitchen, and balcony.',
    svgType: '1bhk',
  },
  {
    id: '2bhk',
    typology: '2 BHK',
    title: '2 BHK Floor Plan',
    layout: 'Boutique Twin Towers',
    description: 'Spacious 2 BHK unit featuring a master bedroom, open living/dining lounge, dual balconies, and 2 bathrooms.',
    svgType: '2bhk',
  },
  {
    id: 'typical',
    typology: 'Typical Floor',
    title: 'Typical Floor Plan',
    layout: 'Wing A & Wing B',
    description: 'Boutique twin towers floor layout with 6-foot wide central passage, cross ventilation, and branded high-speed lifts.',
    svgType: 'typical',
  },
];

const FloorPlanSection = ({ onOpenBrochure }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section id="floor-plans" className="w-full bg-[#141414] text-white py-16 sm:py-24 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION (KEPT AS IT IS AS INSTRUCTED) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#C07858] uppercase font-sans mb-2 block">
            THOUGHTFULLY PLANNED HOMES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            Explore Our Floor Plans
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Discover intelligently designed residences and building layouts created for comfortable modern living.
          </p>
        </div>

        {/* CARDS GRID (MATCHING REFERENCE IMAGE) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {floorPlanCards.map((card) => (
            <div
              key={card.id}
              className="bg-white text-slate-900 rounded-xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              
              {/* TOP FLOOR PLAN DIAGRAM DISPLAY WITH HOVER ZOOM LENS */}
              <div
                onClick={() => setSelectedPlan(card)}
                className="bg-[#FAF7F2] p-6 h-64 sm:h-72 flex items-center justify-center relative border-b border-slate-200 cursor-pointer overflow-hidden"
              >
                {card.svgType === '1bhk' && (
                  <svg viewBox="0 0 500 450" className="w-full h-auto text-slate-800 font-sans group-hover:scale-105 transition-transform duration-500">
                    <rect x="50" y="40" width="400" height="370" fill="none" stroke="#2B2B2B" strokeWidth="8" rx="4" />
                    <rect x="54" y="44" width="220" height="190" fill="#F4EFE6" stroke="#4A4A4A" strokeWidth="3" />
                    <text x="164" y="125" textAnchor="middle" className="font-bold text-base fill-slate-900">LIVING / DINING</text>
                    <text x="164" y="148" textAnchor="middle" className="text-sm fill-slate-600">15'0" X 9'0"</text>
                    
                    <rect x="274" y="44" width="172" height="190" fill="#EFE8DC" stroke="#4A4A4A" strokeWidth="3" />
                    <text x="360" y="125" textAnchor="middle" className="font-bold text-base fill-slate-900">BED ROOM</text>
                    <text x="360" y="148" textAnchor="middle" className="text-sm fill-slate-600">9'6" X 9'0"</text>

                    <rect x="54" y="234" width="180" height="172" fill="#E8DFD1" stroke="#4A4A4A" strokeWidth="3" />
                    <text x="144" y="315" textAnchor="middle" className="font-bold text-base fill-slate-900">KITCHEN</text>
                    <text x="144" y="338" textAnchor="middle" className="text-sm fill-slate-600">8'0" X 7'6"</text>

                    <rect x="234" y="234" width="110" height="172" fill="#DFD6C7" stroke="#4A4A4A" strokeWidth="3" />
                    <text x="289" y="315" textAnchor="middle" className="font-bold text-sm fill-slate-900">TOILET</text>

                    <rect x="344" y="234" width="102" height="172" fill="#F8F3EA" stroke="#C07858" strokeWidth="3" strokeDasharray="6,4" />
                    <text x="395" y="315" textAnchor="middle" className="font-bold text-sm fill-[#6B241A]">BALCONY</text>
                  </svg>
                )}

                {card.svgType === '2bhk' && (
                  <svg viewBox="0 0 500 450" className="w-full h-auto text-slate-800 font-sans group-hover:scale-105 transition-transform duration-500">
                    <rect x="40" y="30" width="420" height="390" fill="none" stroke="#2B2B2B" strokeWidth="8" rx="4" />
                    <rect x="44" y="34" width="230" height="180" fill="#F4EFE6" stroke="#4A4A4A" strokeWidth="3" />
                    <text x="159" y="115" textAnchor="middle" className="font-bold text-base fill-slate-900">LIVING / DINING</text>

                    <rect x="274" y="34" width="182" height="180" fill="#EFE8DC" stroke="#4A4A4A" strokeWidth="3" />
                    <text x="365" y="115" textAnchor="middle" className="font-bold text-base fill-slate-900">M.BED ROOM</text>

                    <rect x="44" y="214" width="180" height="202" fill="#E8DFD1" stroke="#4A4A4A" strokeWidth="3" />
                    <text x="134" y="305" textAnchor="middle" className="font-bold text-base fill-slate-900">BED ROOM 2</text>

                    <rect x="224" y="214" width="130" height="202" fill="#DFD6C7" stroke="#4A4A4A" strokeWidth="3" />
                    <text x="289" y="305" textAnchor="middle" className="font-bold text-base fill-slate-900">KITCHEN</text>

                    <rect x="354" y="214" width="102" height="202" fill="#F8F3EA" stroke="#C07858" strokeWidth="3" strokeDasharray="6,4" />
                    <text x="405" y="305" textAnchor="middle" className="font-bold text-sm fill-[#6B241A]">BALCONY</text>
                  </svg>
                )}

                {card.svgType === 'typical' && (
                  <svg viewBox="0 0 500 450" className="w-full h-auto text-slate-800 font-sans group-hover:scale-105 transition-transform duration-500">
                    <rect x="30" y="30" width="440" height="390" fill="#F4EFE6" stroke="#2B2B2B" strokeWidth="6" rx="4" />
                    <rect x="50" y="50" width="180" height="350" fill="#EFE8DC" stroke="#4A4A4A" strokeWidth="3" />
                    <text x="140" y="210" textAnchor="middle" className="font-bold text-lg fill-[#6B241A]">WING A</text>

                    <rect x="230" y="50" width="40" height="350" fill="#DFD6C7" stroke="#4A4A4A" strokeWidth="2" />
                    <text x="250" y="230" textAnchor="middle" className="font-bold text-xs fill-slate-700" transform="rotate(-90 250 230)">6'0" PASSAGE</text>

                    <rect x="270" y="50" width="180" height="350" fill="#E8DFD1" stroke="#4A4A4A" strokeWidth="3" />
                    <text x="360" y="210" textAnchor="middle" className="font-bold text-lg fill-[#6B241A]">WING B</text>
                  </svg>
                )}

                {/* HOVER ZOOM ICON LENS (MATCHING REFERENCE IMAGE LENS BADGE) */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#6B241A] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>

              </div>

              {/* BOTTOM CARD DETAILS AREA */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-white text-left">
                <div className="space-y-3">
                  
                  {/* TYPOLOGY ROW */}
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500 text-xs font-semibold tracking-wider uppercase">Typology</span>
                    <span className="text-slate-900 font-extrabold text-sm sm:text-base">{card.typology}</span>
                  </div>

                  {/* LAYOUT ROW */}
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500 text-xs font-semibold tracking-wider uppercase">Layout</span>
                    <span className="text-slate-900 font-bold text-xs sm:text-sm">{card.layout}</span>
                  </div>

                </div>

                {/* ACTION BUTTON (GET DETAILS) */}
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSelectedPlan(card);
                    }}
                    className="w-full bg-[#6B241A] hover:bg-[#521c14] text-white font-extrabold py-3 px-4 rounded-sm tracking-wider text-xs uppercase shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center block active:scale-95"
                  >
                    Get Details
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN ZOOM LIGHTBOX MODAL */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#FAF7F2] rounded-lg max-w-4xl w-full p-6 text-slate-900 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 bg-slate-200 p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-4">
              <span className="text-xs font-bold text-[#C07858] uppercase tracking-widest block font-sans">
                {selectedPlan.typology} Layout
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#6B241A]">{selectedPlan.title}</h3>
              <p className="text-slate-600 text-xs mt-1">{selectedPlan.description}</p>
            </div>
            
            <div className="bg-white p-6 rounded border border-slate-300 max-w-2xl mx-auto shadow-inner">
              {selectedPlan.svgType === '1bhk' && (
                <svg viewBox="0 0 500 450" className="w-full h-auto text-slate-800 font-sans">
                  <rect x="50" y="40" width="400" height="370" fill="none" stroke="#2B2B2B" strokeWidth="8" rx="4" />
                  <rect x="54" y="44" width="220" height="190" fill="#F4EFE6" stroke="#4A4A4A" strokeWidth="3" />
                  <text x="164" y="125" textAnchor="middle" className="font-bold text-base fill-slate-900">LIVING / DINING</text>
                  <text x="164" y="145" textAnchor="middle" className="text-sm fill-slate-600">15'0" X 9'0"</text>
                  
                  <rect x="274" y="44" width="172" height="190" fill="#EFE8DC" stroke="#4A4A4A" strokeWidth="3" />
                  <text x="360" y="125" textAnchor="middle" className="font-bold text-base fill-slate-900">BED ROOM</text>
                  <text x="360" y="145" textAnchor="middle" className="text-sm fill-slate-600">9'6" X 9'0"</text>

                  <rect x="54" y="234" width="180" height="172" fill="#E8DFD1" stroke="#4A4A4A" strokeWidth="3" />
                  <text x="144" y="315" textAnchor="middle" className="font-bold text-base fill-slate-900">KITCHEN</text>
                  <text x="144" y="335" textAnchor="middle" className="text-sm fill-slate-600">8'0" X 7'6"</text>

                  <rect x="234" y="234" width="110" height="172" fill="#DFD6C7" stroke="#4A4A4A" strokeWidth="3" />
                  <text x="289" y="315" textAnchor="middle" className="font-bold text-sm fill-slate-900">TOILET</text>
                  <text x="289" y="335" textAnchor="middle" className="text-xs fill-slate-600">7'6" X 4'0"</text>

                  <rect x="344" y="234" width="102" height="172" fill="#F8F3EA" stroke="#C07858" strokeWidth="3" strokeDasharray="6,4" />
                  <text x="395" y="315" textAnchor="middle" className="font-bold text-sm fill-[#6B241A]">BALCONY</text>
                  <text x="395" y="335" textAnchor="middle" className="text-xs fill-slate-600">7'6" X 3'3"</text>
                </svg>
              )}

              {selectedPlan.svgType === '2bhk' && (
                <svg viewBox="0 0 500 450" className="w-full h-auto text-slate-800 font-sans">
                  <rect x="40" y="30" width="420" height="390" fill="none" stroke="#2B2B2B" strokeWidth="8" rx="4" />
                  <rect x="44" y="34" width="230" height="180" fill="#F4EFE6" stroke="#4A4A4A" strokeWidth="3" />
                  <text x="159" y="115" textAnchor="middle" className="font-bold text-base fill-slate-900">LIVING / DINING</text>
                  <text x="159" y="135" textAnchor="middle" className="text-sm fill-slate-600">15'0" X 9'0"</text>

                  <rect x="274" y="34" width="182" height="180" fill="#EFE8DC" stroke="#4A4A4A" strokeWidth="3" />
                  <text x="365" y="115" textAnchor="middle" className="font-bold text-base fill-slate-900">M.BED ROOM</text>
                  <text x="365" y="135" textAnchor="middle" className="text-sm fill-slate-600">9'0" X 9'6"</text>

                  <rect x="44" y="214" width="180" height="202" fill="#E8DFD1" stroke="#4A4A4A" strokeWidth="3" />
                  <text x="134" y="305" textAnchor="middle" className="font-bold text-base fill-slate-900">BED ROOM 2</text>
                  <text x="134" y="325" textAnchor="middle" className="text-sm fill-slate-600">9'0" X 10'0"</text>

                  <rect x="224" y="214" width="130" height="202" fill="#DFD6C7" stroke="#4A4A4A" strokeWidth="3" />
                  <text x="289" y="305" textAnchor="middle" className="font-bold text-base fill-slate-900">KITCHEN</text>
                  <text x="289" y="325" textAnchor="middle" className="text-sm fill-slate-600">7'6" X 10'0"</text>

                  <rect x="354" y="214" width="102" height="202" fill="#F8F3EA" stroke="#C07858" strokeWidth="3" strokeDasharray="6,4" />
                  <text x="405" y="305" textAnchor="middle" className="font-bold text-sm fill-[#6B241A]">BALCONY</text>
                  <text x="405" y="325" textAnchor="middle" className="text-xs fill-slate-600">7'6" X 3'3"</text>
                </svg>
              )}

              {selectedPlan.svgType === 'typical' && (
                <svg viewBox="0 0 500 450" className="w-full h-auto text-slate-800 font-sans">
                  <rect x="30" y="30" width="440" height="390" fill="#F4EFE6" stroke="#2B2B2B" strokeWidth="6" rx="4" />
                  <rect x="50" y="50" width="180" height="350" fill="#EFE8DC" stroke="#4A4A4A" strokeWidth="3" />
                  <text x="140" y="210" textAnchor="middle" className="font-bold text-lg fill-[#6B241A]">WING A</text>

                  <rect x="230" y="50" width="40" height="350" fill="#DFD6C7" stroke="#4A4A4A" strokeWidth="2" />
                  <text x="250" y="230" textAnchor="middle" className="font-bold text-xs fill-slate-700" transform="rotate(-90 250 230)">6'0" PASSAGE</text>

                  <rect x="270" y="50" width="180" height="350" fill="#E8DFD1" stroke="#4A4A4A" strokeWidth="3" />
                  <text x="360" y="210" textAnchor="middle" className="font-bold text-lg fill-[#6B241A]">WING B</text>
                </svg>
              )}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setSelectedPlan(null);
                  onOpenBrochure();
                }}
                className="bg-[#6B241A] hover:bg-[#521c14] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download High-Res Floor Plans PDF</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default FloorPlanSection;
