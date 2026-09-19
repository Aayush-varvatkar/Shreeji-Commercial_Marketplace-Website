import React from 'react';
import { Store, Briefcase, MapPin, ShieldCheck } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const ProjectHighlights = () => {
  const highlights = [
    {
      id: 1,
      icon: Store,
      title: "Ground Floor Showroom Spaces",
      description: "24 street-facing showroom spaces (Units 01 to 24) with wide 5'11\" Otla display promenade."
    },
    {
      id: 2,
      icon: Briefcase,
      title: "1st & 2nd Floor Office Spaces",
      description: "Corporate office suites with 5'11\" granite-clad central corridor, fire lift & elevators."
    },
    {
      id: 3,
      icon: MapPin,
      title: "Prime Main Road Address",
      description: "High footfall location just opposite to upcoming Chikhloli Railway Station, Ambernath (W), and also 500m to proposed Metro line."
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: "Commercial Infrastructure",
      description: "100% power backup for common areas, MVPD digital entrance system & 24/7 CCTV surveillance."
    }
  ];

  return (
    <section id="overview" className="w-full bg-[#F8F6F0] py-16 sm:py-24 border-b border-[#DFC181]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal reveal-up">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C5A059] uppercase font-sans mb-3 block">
            COMMERCIAL MARKETPLACE HIGHLIGHTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight mb-4">
            Built for Maximum Business Success
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            High pedestrian footfall, prime main-road visibility, and top commercial infrastructure come together at {projectDetails.name}.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
            const delayClass = delays[index % delays.length];
            return (
              <div
                key={item.id}
                className={`bg-[#183342] hover:bg-[#102430] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#C5A059]/30 hover:border-[#C5A059] group relative overflow-hidden reveal reveal-up ${delayClass}`}
              >
                {/* Subtle top glow effect */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* ICON CONTAINER */}
                <div className="w-14 h-14 rounded-xl bg-[#C5A059]/20 text-[#DFC181] flex items-center justify-center mb-6 group-hover:bg-[#C5A059] group-hover:text-slate-950 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                  <IconComponent className="w-7 h-7 stroke-[1.8]" />
                </div>

                {/* CARD TITLE */}
                <h3 className="font-sans font-bold text-lg sm:text-xl text-white mb-3 tracking-tight group-hover:text-[#DFC181] transition-colors">
                  {item.title}
                </h3>

                {/* CARD DESCRIPTION */}
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectHighlights;
