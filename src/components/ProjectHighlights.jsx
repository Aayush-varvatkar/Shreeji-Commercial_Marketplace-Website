import React from 'react';
import { Compass, MapPin, Home, Award } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const ProjectHighlights = () => {
  const highlights = [
    {
      id: 1,
      icon: Compass,
      title: "Calm and Connected",
      description: "Surrounded by lush greenery and located close to Kalyan Station & proposed Metro."
    },
    {
      id: 2,
      icon: MapPin,
      title: "Everything Within Reach",
      description: "From top schools and hospitals to shopping malls, markets, and banks."
    },
    {
      id: 3,
      icon: Home,
      title: "Comfort Redefined",
      description: "Every flat is thoughtfully designed for comfort, blending natural light and ventilation."
    },
    {
      id: 4,
      icon: Award,
      title: "Lifestyle at the Top",
      description: "From children's play spaces to peaceful rooftop yoga decks and indoor sports."
    }
  ];

  return (
    <section id="overview" className="w-full bg-[#FAF7F2] py-16 sm:py-24 border-b border-[#E8E2D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#B86B4B] uppercase font-sans mb-3 block">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Everything You Need for Better Living
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            Modern residences, lifestyle amenities and convenient connectivity come together at {projectDetails.name}.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#181818] hover:bg-[#202020] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#B86B4B]/25 hover:border-[#B86B4B]/70 group relative overflow-hidden"
              >
                {/* Subtle top glow effect */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C47A5A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* ICON CONTAINER */}
                <div className="w-14 h-14 rounded-xl bg-[#B86B4B]/15 text-[#D48A6A] flex items-center justify-center mb-6 group-hover:bg-[#B86B4B] group-hover:text-white transition-all duration-300 shadow-md">
                  <IconComponent className="w-7 h-7 stroke-[1.8]" />
                </div>

                {/* CARD TITLE */}
                <h3 className="font-sans font-bold text-lg sm:text-xl text-white mb-3 tracking-tight group-hover:text-[#D48A6A] transition-colors">
                  {item.title}
                </h3>

                {/* CARD DESCRIPTION */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
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
