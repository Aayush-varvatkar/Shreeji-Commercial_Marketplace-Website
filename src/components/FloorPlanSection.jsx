import React, { useState } from 'react';
import { ZoomIn, X, Download, Tag } from 'lucide-react';

const pricingCategories = ["All Options", "Ground Floor Retail", "1st & 2nd Floor Offices"];

const pricingCards = [
  {
    id: 'ground_commercial',
    typology: 'Ground Floor Commercial',
    title: 'Ground Floor Retail Shops (Shops 01-24)',
    layout: 'Shops 01 - 24 & 5\'11" Wide Otla',
    price: 'Price On Request',
    priceSubtitle: 'Exclusive Launch Rate Available',
    description: 'Ground floor retail marketplace plan showcasing 24 street-facing shops, 5\'11" wide Otla promenade, grand entrance lobby, lifts, driver room, and male/female restrooms.',
    image: '/images/ground_floor_plan.jpg',
    category: 'Ground Floor Retail'
  },
  {
    id: '1st_2nd_commercial',
    typology: '1st & 2nd Floor Offices',
    title: '1st & 2nd Floor Office Suites',
    layout: 'Executive Office Suites & Passages',
    price: 'Price On Request',
    priceSubtitle: 'Flexible Corporate Space Rates',
    description: '1st and 2nd floor architectural layout detailing corporate office suites, 5\'11" wide central passage, fire lift, elevator lobbies, and restrooms.',
    image: '/images/first_floor_plan.jpg',
    category: '1st & 2nd Floor Offices'
  }
];

const FloorPlanSection = ({ onOpenBrochure }) => {
  const [activeCategory, setActiveCategory] = useState("All Options");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const filteredCards = activeCategory === "All Options"
    ? pricingCards
    : pricingCards.filter(card => card.category === activeCategory);

  return (
    <section id="pricing" className="w-full bg-[#F8F6F0] text-slate-900 py-16 sm:py-24 border-b border-[#DFC181]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase font-sans mb-2 block">
            OFFICIAL COMMERCIAL PRICING & PLANS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight mb-3">
            Commercial Space Pricing
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Explore commercial space configurations and pricing details for Ground Floor Retail Shops (Shops 01-24) and 1st & 2nd Floor Executive Office Suites.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex justify-center gap-3 mb-10">
          {pricingCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#183342] text-[#DFC181] border border-[#C5A059]/40 shadow-md scale-105'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#C5A059] hover:text-[#183342]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* CARDS GRID */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="bg-white text-slate-900 rounded-xl shadow-xl overflow-hidden border border-slate-200 hover:border-[#C5A059] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              
              {/* TOP FLOOR PLAN IMAGE DISPLAY */}
              <div
                onClick={() => setSelectedPlan(card)}
                className="bg-[#F8F6F0] p-4 h-72 sm:h-80 flex items-center justify-center relative border-b border-slate-200 cursor-pointer overflow-hidden"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />

                {/* HOVER ZOOM ICON LENS */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#183342] text-[#DFC181] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform border border-[#C5A059]/40">
                    <ZoomIn className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* BOTTOM CARD DETAILS AREA */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-white text-left">
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-lg text-[#183342]">{card.title}</h3>
                  
                  {/* TYPOLOGY ROW */}
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 text-xs font-semibold tracking-wider uppercase">Commercial Floor</span>
                    <span className="text-[#183342] font-extrabold text-sm sm:text-base">{card.typology}</span>
                  </div>

                  {/* LAYOUT ROW */}
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 text-xs font-semibold tracking-wider uppercase">Configuration</span>
                    <span className="text-slate-800 font-semibold text-xs sm:text-sm">{card.layout}</span>
                  </div>

                  {/* PRICING ROW */}
                  <div className="flex items-center justify-between py-2 border-b border-slate-100 bg-[#F8F6F0] px-3 rounded-md my-1">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span className="text-[#183342] text-xs font-bold tracking-wider uppercase">Price</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#C5A059] font-extrabold text-sm sm:text-base block leading-none">{card.price}</span>
                      <span className="text-[10px] text-slate-500 font-semibold block mt-0.5">{card.priceSubtitle}</span>
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTON */}
                <div className="pt-5">
                  <button
                    onClick={() => setSelectedPlan(card)}
                    className="w-full bg-[#183342] hover:bg-[#102430] text-white font-extrabold py-3 px-4 rounded-sm tracking-wider text-xs uppercase shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center block active:scale-95 border border-[#C5A059]/40"
                  >
                    Request Price & Layout Details
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
          <div className="bg-[#F8F6F0] rounded-xl max-w-5xl w-full p-6 text-slate-900 relative shadow-2xl max-h-[92vh] flex flex-col border border-[#C5A059]/40">
            
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 bg-slate-200/80 hover:bg-slate-300 p-2 rounded-full cursor-pointer z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* MODAL HEADER */}
            <div className="text-center mb-4 pr-8">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block font-sans">
                {selectedPlan.typology} • {selectedPlan.price}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#183342]">{selectedPlan.title}</h3>
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
                <span className="font-semibold text-slate-700">Starting Price:</span> <span className="text-[#C5A059] font-bold">{selectedPlan.price}</span> • {selectedPlan.layout}
              </div>
              <button
                onClick={() => {
                  setSelectedPlan(null);
                  if (onOpenBrochure) onOpenBrochure();
                }}
                className="bg-[#183342] hover:bg-[#102430] text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors shadow border border-[#C5A059]/40"
              >
                <Download className="w-4 h-4 text-[#DFC181]" />
                <span>Get Price Sheet & E-Brochure PDF</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default FloorPlanSection;
