import React from 'react';
import { projectDetails } from '../data/projectData';
import { Store, Zap, ShieldCheck, Layers, Users, PhoneCall, Building2, Clock } from 'lucide-react';

const commercialFeatures = [
  {
    number: '01',
    title: "Pergola Sitting Deck",
    description: "Landscaped outdoor seating area for client discussions and relaxation.",
    image: '/images/PARGOLACAM.jpg',
    icon: Store
  },
  {
    number: '02',
    title: "Rooftop Swimming Pool",
    description: "Luxury rooftop pool featuring panoramic views of the city skyline.",
    image: '/images/SWIMMINGPOOL.jpg',
    icon: Users
  },
  {
    number: '03',
    title: "Fitness Gym & Wellness",
    description: "Equipped fitness center promoting work-life balance and health.",
    image: '/images/GYMCam.jpg',
    icon: Layers
  },
  {
    number: '04',
    title: "Executive Lounge Plaza",
    description: "Modern open-air lounge designed for business networking.",
    image: '/images/SITTINGCAM.jpg',
    icon: ShieldCheck
  },
  {
    number: '05',
    title: "Podium Garden Park",
    description: "Lush green podium area with walking tracks and sitting zones.",
    image: '/images/GardenView.jpeg',
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
