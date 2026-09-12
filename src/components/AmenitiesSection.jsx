import React from 'react';
import { projectDetails } from '../data/projectData';
import { Store, Zap, ShieldCheck, Layers, Users, PhoneCall, Building2, Clock } from 'lucide-react';

const commercialFeatures = [
  {
    number: '01',
    title: "5'11\" Wide Otla Walkway",
    description: "Spacious street-facing Otla promenade providing high display frontage and seamless customer footfall access.",
    image: '/images/shreeji_about_view.jpg',
    icon: Store
  },
  {
    number: '02',
    title: "High-Speed Elevators & Fire Lift",
    description: "Branded passenger elevators plus a dedicated fire evacuation lift ensuring quick vertical transit between commercial floors.",
    image: '/images/first_floor_plan.jpg',
    icon: Users
  },
  {
    number: '03',
    title: "Granite Clad Corridors",
    description: "Elegant 5'11\" wide passages featuring vitrified tile flooring and premium granite wall cladding for a corporate ambiance.",
    image: '/images/ground_floor_plan.jpg',
    icon: Layers
  },
  {
    number: '04',
    title: "MVPD Access & 24/7 CCTV",
    description: "Multi-point video digital access control at main entrance lobby and comprehensive 24/7 CCTV camera coverage.",
    image: '/images/surveillance_Security.jpeg',
    icon: ShieldCheck
  },
  {
    number: '05',
    title: "Commercial Parking Plaza",
    description: "Dedicated commercial parking plaza with marked visitor bays, ambient illumination, and smooth vehicular circulation.",
    image: '/images/ev_charging.jpg',
    icon: Zap
  }
];

const AmenitiesSection = () => {
  const topThree = commercialFeatures.slice(0, 3);
  const bottomTwo = commercialFeatures.slice(3, 5);

  const renderCard = (item) => (
    <div
      key={item.number}
      className="group rounded-xl overflow-hidden shadow-lg border border-slate-200/80 bg-white hover:border-[#C5A059] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* TEXT CONTENT BOX */}
      <div className="p-5 flex-grow flex flex-col justify-start bg-white text-left">
        <h3 className="font-serif text-lg font-bold text-[#183342] mb-2">
          {item.title}
        </h3>
        <p className="text-slate-600 text-xs font-normal leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <section id="amenities" className="w-full bg-[#F8F6F0] py-16 sm:py-24 border-b border-[#DFC181]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* HEADER SECTION (STICKY ONLY ON MOBILE VIEW, NORMAL ON TABLET & DESKTOP) */}
        <div className="sticky sm:static top-20 sm:top-auto z-30 sm:z-auto bg-[#F8F6F0] py-5 sm:py-0 mb-8 sm:mb-16 border-b sm:border-b-0 border-[#DFC181]/30 sm:border-transparent shadow-sm sm:shadow-none rounded-b-xl sm:rounded-none transition-all duration-300">
          <div className="text-center max-w-3xl mx-auto px-2">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase font-sans mb-2 block">
              COMMERCIAL COMPLEX SPECIFICATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight mb-3">
              Designed for Business Success
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              Sky View Commercial Marketplace is engineered with premium infrastructure, high footfall accessibility, and top-tier security for retail shops and corporate offices.
            </p>
          </div>
        </div>

        {/* 5-CARD GRID LAYOUT (3 TOP, 2 BOTTOM CENTERED) */}
        <div className="space-y-6 lg:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {topThree.map(renderCard)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {bottomTwo.map(renderCard)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;
