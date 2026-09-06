import React, { useState } from 'react';
import { ZoomIn, X, Download } from 'lucide-react';

const floorPlanCategories = ["All Plans", "Unit Plans", "Floor Plans"];

const floorPlanCards = [
  {
    id: '1bhk',
    typology: '1 BHK Flat',
    title: '1 BHK Wing-B Unit Plan',
    layout: 'Boutique Twin Towers (Wing B)',
    description: 'Intelligently planned 1 BHK layout featuring living space, bedroom, functional kitchen, attached bathroom, and balcony.',
    image: '/images/1bhk_wing-B.jpg',
    category: 'Unit Plans'
  },
  {
    id: '2bhk',
    typology: '2 BHK Flat',
    title: '2 BHK Wing-B Unit Plan',
    layout: 'Boutique Twin Towers (Wing B)',
    description: 'Spacious 2 BHK unit featuring a master suite, guest bedroom, living/dining lounge, dual balconies, and 2 bathrooms.',
    image: '/images/2bhk wing-B flat.jpg',
    category: 'Unit Plans'
  },
  {
    id: 'typical',
    typology: 'Typical Floor',
    title: 'Typical Floor Plan',
    layout: 'Wing A & Wing B (Typical Floor)',
    description: 'Boutique twin towers floor layout with 6-foot wide central passage, optimal cross ventilation, and branded high-speed lifts.',
    image: '/images/TYPICAL FLR PLAN.jpg',
    category: 'Floor Plans'
  },
  {
    id: 'ground',
    typology: 'Ground Floor',
    title: 'Ground Floor Layout Plan',
    layout: 'Ground Level & Entrance Plaza',
    description: 'Ground floor layout detailing grand double-height entrance lobby, vehicle parking, security cabin, and landscaped green zones.',
    image: '/images/GR. PLAN.jpg',
    category: 'Floor Plans'
  },
  {
    id: '1st_floor',
    typology: '1st Floor',
    title: '1st Floor Plan',
    layout: 'Wing A & Wing B First Floor',
    description: 'First floor architectural plan outlining apartment placements, elevator lobbies, and core service shafts.',
    image: '/images/1ST_FLR_PLAN.jpg',
    category: 'Floor Plans'
  },
  {
    id: '8th_floor',
    typology: '8th Floor',
    title: '8th Floor Plan',
    layout: 'Wing A & Wing B Upper Floor',
    description: 'Upper floor layout detailing refuge terraces, fire escape access, and premium upper residences.',
    image: '/images/8TH FLR PLAN.jpg',
    category: 'Floor Plans'
  }
];

const FloorPlanSection = ({ onOpenBrochure }) => {
  const [activeCategory, setActiveCategory] = useState("All Plans");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const filteredCards = activeCategory === "All Plans"
    ? floorPlanCards
    : floorPlanCards.filter(card => card.category === activeCategory);

  return (
    <section id="floor-plans" className="w-full bg-[#F7EEE8] text-slate-900 py-16 sm:py-24 border-b border-[#E8E2D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-widest text-[#B86B4B] uppercase font-sans mb-2 block">
            THOUGHTFULLY PLANNED HOMES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-3">
            Explore Our Floor Plans
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Discover architectural layout plans for 1 BHK, 2 BHK, ground floor plaza, and typical upper floors of Benchmark Greens.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex justify-center gap-3 mb-10">
          {floorPlanCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#6D281D] text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#B86B4B] hover:text-[#6D281D]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* CARDS GRID */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="bg-white text-slate-900 rounded-xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              
              {/* TOP FLOOR PLAN IMAGE DISPLAY WITH HOVER ZOOM LENS */}
              <div
                onClick={() => setSelectedPlan(card)}
                className="bg-[#FAF7F2] p-4 h-64 sm:h-72 flex items-center justify-center relative border-b border-slate-200 cursor-pointer overflow-hidden"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />

                {/* HOVER ZOOM ICON LENS */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#6D281D] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* BOTTOM CARD DETAILS AREA */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-white text-left">
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-lg text-slate-900">{card.title}</h3>
                  
                  {/* TYPOLOGY ROW */}
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 text-xs font-semibold tracking-wider uppercase">Typology</span>
                    <span className="text-[#6D281D] font-extrabold text-sm sm:text-base">{card.typology}</span>
                  </div>

                  {/* LAYOUT ROW */}
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 text-xs font-semibold tracking-wider uppercase">Layout</span>
                    <span className="text-slate-800 font-semibold text-xs sm:text-sm">{card.layout}</span>
                  </div>
                </div>

                {/* ACTION BUTTON (GET DETAILS) */}
                <div className="pt-6">
                  <button
                    onClick={() => setSelectedPlan(card)}
                    className="w-full bg-[#6D281D] hover:bg-[#541f17] text-white font-extrabold py-3 px-4 rounded-sm tracking-wider text-xs uppercase shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center block active:scale-95"
                  >
                    View Layout Details
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
          <div className="bg-[#FAF7F2] rounded-xl max-w-5xl w-full p-6 text-slate-900 relative shadow-2xl max-h-[92vh] flex flex-col">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 bg-slate-200/80 hover:bg-slate-300 p-2 rounded-full cursor-pointer z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* MODAL HEADER */}
            <div className="text-center mb-4 pr-8">
              <span className="text-xs font-bold text-[#B86B4B] uppercase tracking-widest block font-sans">
                {selectedPlan.typology}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#6D281D]">{selectedPlan.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl mx-auto">{selectedPlan.description}</p>
            </div>
            
            {/* MODAL IMAGE DISPLAY AREA */}
            <div className="bg-white p-4 rounded-lg border border-slate-300 flex-grow flex items-center justify-center overflow-auto max-h-[65vh] shadow-inner">
              <img
                src={selectedPlan.image}
                alt={selectedPlan.title}
                className="max-h-[60vh] max-w-full object-contain rounded"
              />
            </div>

            {/* MODAL FOOTER */}
            <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
              <div className="text-left text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Project:</span> Benchmark Greens • {selectedPlan.layout}
              </div>
              <button
                onClick={() => {
                  setSelectedPlan(null);
                  if (onOpenBrochure) onOpenBrochure();
                }}
                className="bg-[#6D281D] hover:bg-[#541f17] text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors shadow"
              >
                <Download className="w-4 h-4" />
                <span>Download Brochure & Plans</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default FloorPlanSection;

