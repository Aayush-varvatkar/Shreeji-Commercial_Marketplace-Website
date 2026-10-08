import React from 'react';
import { Sofa, UtensilsCrossed, Bed, Bath, Sun, Building, Zap, Paintbrush, ShieldCheck } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const iconMap = {
  "Living / Dining": Sofa,
  "Kitchen": UtensilsCrossed,
  "Bedroom": Bed,
  "Toilet": Bath,
  "Balcony": Sun,
  "Corridor / Lobby": Building,
  "Electrical": Zap,
  "External Finish": Paintbrush,
  "Super Structure": ShieldCheck
};

const SpecificationsSection = () => {
  const specs = projectDetails.specifications || [];

  return (
    <section id="specifications" className="w-full bg-[#F8F6F0] py-16 sm:py-24 border-b border-[#DFC181]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal reveal-up">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase font-sans mb-2 block">
            BUILD QUALITY & FINISHES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight mb-3">
            Project Specifications
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Crafted with precision engineering and branded materials for lasting durability, elegance, and safety.
          </p>
        </div>

        {/* SPECIFICATIONS GRID / TABLE CARD */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden reveal reveal-up delay-150">
          
          {/* HEADER ROW (DESKTOP) */}
          <div className="hidden md:grid grid-cols-12 bg-[#183342] text-white p-5 px-8 font-sans text-xs font-bold tracking-widest uppercase border-b border-[#C5A059]/40">
            <div className="col-span-4 text-[#DFC181] flex items-center gap-2">
              <span>AREA / COMPONENT</span>
            </div>
            <div className="col-span-8 text-[#DFC181]">
              <span>SPECIFICATION DETAILS</span>
            </div>
          </div>

          {/* SPECIFICATION ROWS */}
          <div className="divide-y divide-slate-100">
            {specs.map((item, index) => {
              const IconComp = iconMap[item.area] || Building;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 px-6 sm:px-8 items-start md:items-center gap-2 sm:gap-4 transition-colors hover:bg-[#F8F6F0]/70 ${
                    isEven ? 'bg-white' : 'bg-[#FDFBF7]'
                  }`}
                >
                  {/* AREA COLUMN */}
                  <div className="md:col-span-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#C5A059]/15 text-[#183342] flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4 text-[#C5A059] stroke-[2]" />
                    </div>
                    <span className="font-serif font-bold text-base sm:text-lg text-[#183342]">
                      {item.area}
                    </span>
                  </div>

                  {/* SPECIFICATION COLUMN */}
                  <div className="md:col-span-8 pl-12 md:pl-0">
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.spec}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default SpecificationsSection;
