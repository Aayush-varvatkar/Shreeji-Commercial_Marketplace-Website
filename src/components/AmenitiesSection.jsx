import React from 'react';
import { projectDetails } from '../data/projectData';
import { Store, Zap, ShieldCheck, Layers, Users, PhoneCall, Building2, Clock } from 'lucide-react';

const commercialFeatures = [
  {
    number: '01',
    title: "Luxury Showroom Spaces",
    description: "Double-height Sizes designed for luxury retail brands and high-footfall showrooms.",
    image: '/images/Showroom.png',
    icon: Store
  },
  {
    number: '02',
    title: "Corporate Office Suites",
    description: "Modern commercial office spaces engineered for business growth, efficiency, and comfort.",
    image: '/images/commercial.png',
    icon: Building2
  },
  {
    number: '03',
    title: "Grand Entrance Lobby & Elevators",
    description: "Marble-clad reception lobby equipped with high-speed passenger elevators and fire lift.",
    image: '/images/amenity_lobby.jpg',
    icon: Users
  },
  {
    number: '04',
    title: "Chikhloli Railway Station & Metro",
    description: "Located just opposite to upcoming Chikhloli Railway Station and also 500m to proposed Metro line.",
    image: '/images/amenity_location.jpg',
    icon: Zap
  },
  {
    number: '05',
    title: "Elegantly Finished Restrooms",
    description: "Modern executive restrooms finished with anti-skid ceramic tiles and premium sanitary fittings.",
    image: '/images/amenity_washroom.jpg',
    icon: ShieldCheck
  }
];

const AmenitiesSection = () => {
  const topThree = commercialFeatures.slice(0, 3);
  const bottomTwo = commercialFeatures.slice(3, 5);

  const renderCard = (item, index) => {
    const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500'];
    const idx = parseInt(item.number) - 1;
    const delayClass = delays[idx % delays.length] || 'delay-100';

    return (
      <div
        key={item.number}
        className={`group rounded-xl overflow-hidden shadow-lg border border-slate-200/80 bg-white hover:border-[#C5A059] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full reveal reveal-up ${delayClass}`}
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
  };

  return (
    <section id="amenities" className="w-full bg-[#F8F6F0] py-16 sm:py-24 border-b border-[#DFC181]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* HEADER SECTION (STICKY ONLY ON MOBILE VIEW, NORMAL ON TABLET & DESKTOP) */}
        <div className="sticky sm:static top-20 sm:top-auto z-30 sm:z-auto bg-[#F8F6F0] py-5 sm:py-0 mb-8 sm:mb-16 border-b sm:border-b-0 border-[#DFC181]/30 sm:border-transparent shadow-sm sm:shadow-none rounded-b-xl sm:rounded-none transition-all duration-300 reveal reveal-up">
          <div className="text-center max-w-3xl mx-auto px-2">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase font-sans mb-2 block">
              WORLD-CLASS AMENITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight mb-3">
              Modern Amenities & Facilities
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              Premium infrastructure designed for comfort, wellness, and business efficiency.
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
