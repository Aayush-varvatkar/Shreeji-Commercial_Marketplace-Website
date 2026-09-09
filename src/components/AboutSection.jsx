import React from 'react';
import { Check } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const AboutSection = ({ onExploreAmenities }) => {
  const { about } = projectDetails;

  return (
    <section id="overview" className="w-full bg-[#F8F6F0] py-16 sm:py-24 border-b border-[#DFC181]/40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: COMMERCIAL BUILDING IMAGE WITH OFFSET FRAME & OVERLAPPING BADGE */}
          <div className="lg:col-span-6 relative max-w-lg mx-auto lg:max-w-none w-full">
            
            {/* OFFSET GOLD OUTLINE FRAME */}
            <div className="absolute -top-5 -left-5 sm:-top-7 sm:-left-7 w-full h-full border-2 border-[#C5A059]/80 pointer-events-none rounded-sm hidden sm:block z-0" />

            {/* MAIN IMAGE CONTAINER */}
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-white/60">
              <img
                src="/images/shreeji_about_view.jpg"
                alt="Sky View Shreeji Icon Commercial Building View"
                loading="lazy"
                decoding="async"
                className="w-full h-[420px] sm:h-[520px] lg:h-[560px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* OVERLAPPING CORNER BADGE */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 z-20 bg-[#183342] text-white px-6 py-5 sm:px-8 sm:py-6 shadow-2xl rounded-sm border border-[#C5A059]/40 text-center transform hover:scale-105 transition-transform">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider block text-[#DFC181] drop-shadow">
                {about.badgeTitle}
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-200 mt-1 uppercase block font-sans">
                {about.badgeSubtitle}
              </span>
            </div>

          </div>

          {/* RIGHT SIDE: TEXT & CHECKLIST CONTENT */}
          <div className="lg:col-span-6 space-y-6 pt-4 lg:pt-0">
            
            {/* SUBHEADER */}
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#C5A059]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C5A059] uppercase font-sans">
                {about.subtitle}
              </span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight">
              {about.title}
            </h2>

            {/* PARAGRAPH 1 */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              {about.paragraph1}
            </p>

            {/* CHECKLIST */}
            <div className="space-y-3.5 pt-2">
              {about.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#C5A059] text-slate-950 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#183342] group-hover:text-white transition-colors">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-xs sm:text-sm font-semibold tracking-wide">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* EXPLORE ACTION BUTTON */}
            <div className="pt-2">
              <a
                href="#amenities"
                className="inline-block bg-[#183342] hover:bg-[#102430] text-white px-8 py-3.5 rounded-sm font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer active:scale-95 border border-[#C5A059]/40"
              >
                {about.buttonText}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
