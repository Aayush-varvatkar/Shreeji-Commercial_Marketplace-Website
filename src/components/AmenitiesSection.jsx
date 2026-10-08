import React, { useState } from 'react';
import {
  Waves,
  Trees,
  Gamepad2,
  Dumbbell,
  Lock,
  Trophy,
  Sparkles,
  Dices,
  HeartHandshake,
  Zap,
  Building2,
  Store,
  ZoomIn,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const primaryAmenities = [
  {
    id: 1,
    name: "Luxury Showroom Spaces",
    desc: "Double-height Sizes designed for luxury retail brands and high-footfall showrooms.",
    icon: Store,
    image: "/images/Showroom.png"
  },
  {
    id: 2,
    name: "Corporate Office Suites",
    desc: "Modern commercial office spaces engineered for business growth, efficiency, and comfort.",
    icon: Building2,
    image: "/images/commercial.png"
  },
  {
    id: 3,
    name: "Infinity Pool",
    desc: "Signature rooftop pool offering panoramic open sky views and poolside calm.",
    icon: Waves,
    image: "/images/amenity_infinity_pool.jpg"
  },
  {
    id: 4,
    name: "Modern Gymnasium",
    desc: "Equipped fitness club with high-end cardio, battle ropes and free weights.",
    icon: Dumbbell,
    image: "/images/amenity_gymnasium.jpg"
  },
  {
    id: 5,
    name: "Kids Play Area",
    desc: "Safe, padded outdoor adventure & play haven with swings, slides and climbing zone.",
    icon: Gamepad2,
    image: "/images/amenity_kids_play.jpg"
  },
  {
    id: 6,
    name: "Landscaped Garden",
    desc: "Lush botanical gardens with walking paths, pergolas, and serene open-air seating.",
    icon: Trees,
    image: "/images/amenity_garden.jpg"
  }
];

const additionalAmenities = [
  {
    id: 7,
    name: "Multipurpose Sports Turf",
    desc: "Enclosed box-cricket and multi-sport turf field for high-energy games and matches.",
    icon: Trophy,
    image: "/images/amenity_party_hall.jpg"
  },
  {
    id: 8,
    name: "Grand Entrance Lobby",
    desc: "Double-height designer entrance lobby with MVPD access control and digital security.",
    icon: Lock,
    image: "/images/amenity_lobby.jpg"
  },
  {
    id: 9,
    name: "Steam Room & Spa",
    desc: "Rejuvenating mosaic wellness steam room for relaxation after a workout or busy day.",
    icon: Sparkles,
    image: "/images/amenity_steam_room.jpg"
  },
  {
    id: 10,
    name: "Indoor Games Club",
    desc: "Dedicated recreation room equipped for chess, carrom, table tennis and foosball.",
    icon: Dices,
    image: "/images/amenity_yoga.jpg"
  },
  {
    id: 11,
    name: "Senior Citizen Sitout",
    desc: "Peaceful shaded pergolas and comfortable benches designed especially for elders.",
    icon: HeartHandshake,
    image: "/images/amenity_senior_citizen.jpg"
  },
  {
    id: 12,
    name: "EV Car Charging Stations",
    desc: "Future-ready dedicated electric vehicle charging bays for eco-conscious living.",
    icon: Zap,
    image: "/images/amenity_car_charging.jpg"
  }
];

const AmenitiesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  const displayedAmenities = showAll
    ? [...primaryAmenities, ...additionalAmenities]
    : primaryAmenities;

  return (
    <section id="amenities" className="w-full bg-[#F8F6F0] py-16 sm:py-24 border-b border-[#DFC181]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal reveal-up">
          <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase font-sans mb-2 block">
            WORLD-CLASS AMENITIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight mb-3">
            Luxury Living With Everything Around You
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Sky View isn't just built with amenities, it's built around the lifestyle you deserve. Whether it's poolside calm, game-time energy or quiet moments in lush green spaces, everything here serves your every mood and moment.
          </p>
        </div>

        {/* VISUAL CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedAmenities.map((item, index) => {
            const IconComp = item.icon;
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500', 'delay-500'];
            const delayClass = delays[index % delays.length];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedAmenity(item)}
                className={`group rounded-xl overflow-hidden shadow-lg border border-slate-200/80 bg-white hover:border-[#C5A059] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full cursor-pointer reveal reveal-up ${delayClass}`}
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#183342]/85 text-[#DFC181] p-2 rounded-lg border border-[#C5A059]/40 backdrop-blur-sm">
                    <IconComp className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#183342]/90 text-[#DFC181] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-[#C5A059]/40 shadow-lg">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>View Full Image</span>
                    </span>
                  </div>
                </div>

                {/* TEXT CONTENT BOX */}
                <div className="p-5 flex-grow flex flex-col justify-start bg-white text-left">
                  <h3 className="font-serif text-lg font-bold text-[#183342] mb-1.5 group-hover:text-[#C5A059] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* EXPAND / COLLAPSE BUTTON */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#183342] text-[#DFC181] hover:bg-[#122633] border border-[#C5A059]/40 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {showAll ? (
              <>
                <span>Show Fewer Amenities</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Explore All 15+ Sky Amenities</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedAmenity && (
        <div
          onClick={() => setSelectedAmenity(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#F8F6F0] rounded-xl max-w-4xl w-full p-6 text-slate-900 relative shadow-2xl max-h-[92vh] flex flex-col border border-[#C5A059]/40"
          >
            <button
              onClick={() => setSelectedAmenity(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 bg-slate-200/80 hover:bg-slate-300 p-2 rounded-full cursor-pointer z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-4 pr-8">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block font-sans">
                WORLD-CLASS SKY AMENITIES
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#183342]">{selectedAmenity.name}</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl mx-auto">{selectedAmenity.desc}</p>
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-300 flex-grow flex items-center justify-center overflow-auto max-h-[66vh] shadow-inner">
              <img
                src={selectedAmenity.image}
                alt={selectedAmenity.name}
                className="max-h-[60vh] max-w-full object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AmenitiesSection;
