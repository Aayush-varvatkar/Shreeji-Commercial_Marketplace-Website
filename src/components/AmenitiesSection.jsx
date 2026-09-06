import React from 'react';
import { projectDetails } from '../data/projectData';

const amenitiesList = [
  {
    number: '01',
    title: 'Fitness Centre',
    description: 'A modern fitness space designed for an active and healthy lifestyle.',
    image: '/hero_luxury_lobby.jpg',
  },
  {
    number: '02',
    title: 'Yoga Deck',
    description: 'A peaceful open space designed for yoga, meditation and relaxation.',
    image: '/hero_rooftop_deck.jpg',
  },
  {
    number: '03',
    title: 'Rooftop Recreation',
    description: 'An attractive rooftop space for relaxation and leisure activities.',
    image: '/hero_rooftop_deck.jpg',
  },
  {
    number: '04',
    title: 'Kids Play Area',
    description: 'A safe, fun and vibrant outdoor space for children\'s play and activities.',
    image: '/gallery_garden_fountain.jpg',
  },
  {
    number: '05',
    title: 'Indoor Games Area',
    description: 'Enjoy table tennis, foosball, pool table and indoor sports with family.',
    image: '/gallery_indoor_games.jpg',
  },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="w-full bg-[#FAF7F2] py-16 sm:py-24 border-b border-[#E8E2D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* DESKTOP HEADER SECTION (UNCHANGED) */}
        <div className="hidden md:block text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#C07858] uppercase font-sans mb-2 block">
            LIFESTYLE AMENITIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-3">
            Designed for Better Living
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Enjoy thoughtfully planned spaces for fitness, relaxation, recreation and quality family time.
          </p>
        </div>

        {/* MOBILE VIEW: STICKY HEADING & CARDS SCROLLING UNDERNEATH */}
        <div className="md:hidden">
          {/* STICKY HEADING (PINNED BELOW NAVBAR AT TOP-20, Z-30) */}
          <div className="sticky top-20 z-30 bg-[#FAF7F2] pt-4 pb-4 px-4 text-left border-b border-[#E8E2D8]/80 shadow-sm mb-6">
            <span className="text-xs font-bold tracking-widest text-[#0D2B45] uppercase font-sans mb-1 block">
              EXPERIENCE THE BEST
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#0D2B45] leading-tight mb-2">
              World-Class Lifestyle
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed font-normal">
              {projectDetails.subName || 'Benchmark Greens'} is designed with a premium selection of lifestyle amenities. Enjoy the perfect balance of fitness, spirituality, recreation, and leisure directly inside your complex.
            </p>
          </div>

          {/* CARDS LIST IN NORMAL FLOW (Z-10) THAT SCROLL UP AND TUCK UNDER STICKY HEADING */}
          <div className="space-y-6 pb-8 relative z-10 px-1">
            {amenitiesList.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/80 flex flex-col transition-all duration-300"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TEXT CONTENT BOX */}
                <div className="p-5 bg-white text-left flex flex-col flex-grow">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0D2B45] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW: ORIGINAL GRID LAYOUT (UNCHANGED) */}
        <div className="hidden md:block">
          {/* TOP ROW: 3 EQUAL COLUMNS (CARDS 01, 02, 03) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {amenitiesList.slice(0, 3).map((item) => (
              <div
                key={item.number}
                className="group rounded-lg overflow-hidden shadow-lg border border-slate-200/80 bg-white hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* TEXT CONTENT BOX */}
                <div className="p-6 flex-grow flex flex-col justify-start bg-white text-left">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM ROW: 2 EQUAL COLUMNS (CARDS 04, 05) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {amenitiesList.slice(3, 5).map((item) => (
              <div
                key={item.number}
                className="group rounded-lg overflow-hidden shadow-lg border border-slate-200/80 bg-white hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* TEXT CONTENT BOX */}
                <div className="p-6 flex-grow flex flex-col justify-start bg-white text-left">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;
