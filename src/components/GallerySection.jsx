import React, { useState } from 'react';
import { X, ZoomIn, ChevronDown, ChevronUp } from 'lucide-react';

const galleryCategories = ["All", "Residences & Interiors", "Amenities", "Commercial Spaces", "Exterior & Location"];

const galleryItems = [
  {
    id: 1,
    title: "Luxury Showroom Spaces (Ground Floor)",
    category: "Commercial Spaces",
    image: "/images/Showroom.png"
  },
  {
    id: 2,
    title: "Corporate Executive Office Suites",
    category: "Commercial Spaces",
    image: "/images/commercial.png"
  },
  {
    id: 3,
    title: "Grand Entrance Lobby with Digital Access",
    category: "Amenities",
    image: "/images/amenity_lobby.jpg"
  },
  {
    id: 4,
    title: "Transit & Metro Connectivity Address",
    category: "Exterior & Location",
    image: "/images/amenity_location.jpg"
  },
  {
    id: 5,
    title: "Elegantly Finished Restrooms & Powder Rooms",
    category: "Amenities",
    image: "/images/amenity_washroom.jpg"
  },
  {
    id: 6,
    title: "Sky View Architectural Facade Elevation",
    category: "Exterior & Location",
    image: "/images/SkyFrontView.jpg"
  },
  {
    id: 7,
    title: "Spacious Living & Dining Lounge",
    category: "Residences & Interiors",
    image: "/images/3.jpeg"
  },
  {
    id: 8,
    title: "Master Bedroom Suite with Ambient Lighting",
    category: "Residences & Interiors",
    image: "/images/2.jpeg"
  },
  {
    id: 9,
    title: "Modern Modular Kitchen with Granite Platform",
    category: "Residences & Interiors",
    image: "/images/4.jpeg"
  },
  {
    id: 10,
    title: "Bedroom Interior & Study Station",
    category: "Residences & Interiors",
    image: "/images/1.jpeg"
  },
  {
    id: 11,
    title: "Designer Bedroom with Wardrobe & Decor",
    category: "Residences & Interiors",
    image: "/images/5.jpeg"
  },
  {
    id: 12,
    title: "Infinity Pool with Open Sky Horizon",
    category: "Amenities",
    image: "/images/amenity_infinity_pool.jpg"
  },
  {
    id: 13,
    title: "Aerial View of G+12 Storey Landmark",
    category: "Exterior & Location",
    image: "/images/SkyViewAriealView.jpeg"
  },
  {
    id: 14,
    title: "Spacious Living Room & Balcony Concept",
    category: "Residences & Interiors",
    image: "/images/room_living.jpg"
  },
  {
    id: 15,
    title: "1, 2 & 3 BHK Luxury Residences & Interiors",
    category: "Residences & Interiors",
    image: "/images/Hero4.jpg"
  },
  {
    id: 16,
    title: "Landmark Aerial Perspective",
    category: "Exterior & Location",
    image: "/images/AriealView.jpeg"
  },
  {
    id: 17,
    title: "Street-Facing Commercial Shops & Promenade",
    category: "Commercial Spaces",
    image: "/images/room_commercial.jpg"
  }
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleFilterChange = (cat) => {
    setActiveFilter(cat);
    setShowAll(false);
  };

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const firstSix = filteredItems.slice(0, 6);
  const remainingItems = filteredItems.slice(6);

  return (
    <section id="gallery" className="w-full bg-[#F8F6F0] py-16 sm:py-24 border-b border-[#DFC181]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 reveal reveal-up">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="h-[1px] w-12 bg-[#C5A059] inline-block" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183342] leading-tight">
              Project Gallery
            </h2>
            <span className="h-[1px] w-12 bg-[#C5A059] inline-block" />
          </div>
          <p className="text-slate-600 text-xs sm:text-sm font-medium tracking-wide">
            Explore architectural elevations, residential interiors, rooftop amenities, and commercial spaces.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 reveal reveal-up delay-100">
          {galleryCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
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

        {/* FEATURED BENTO GALLERY LAYOUT (FIRST 6 IMAGES: MOBILE = 1 HERO + 2*2 GRID + 1 WIDE BOTTOM; DESKTOP = BIG LEFT + 2 STACKED RIGHT + 3 BOTTOM) */}
        {firstSix.length >= 3 ? (
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            
            {/* TOP ROW: BIG FEATURED HERO (LEFT ON DESKTOP, TOP ON MOBILE) + 2 STACKED (RIGHT ON DESKTOP, 2 COLS ON MOBILE) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
              
              {/* BIG FEATURED FIRST HERO IMAGE */}
              <div
                onClick={() => setSelectedImage(firstSix[0])}
                className="lg:col-span-8 group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white cursor-pointer h-[220px] xs:h-[260px] sm:h-[380px] lg:h-[480px] reveal reveal-zoom delay-150"
              >
                <img
                  src={firstSix[0].image}
                  alt={firstSix[0].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/95 via-black/30 to-transparent p-4 sm:p-7 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#DFC181] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 font-sans block">
                      {firstSix[0].category}
                    </span>
                    <h3 className="text-white font-serif font-bold text-lg sm:text-2xl lg:text-3xl drop-shadow">
                      {firstSix[0].title}
                    </h3>
                  </div>
                </div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#183342]/85 text-[#DFC181] p-2 sm:p-2.5 rounded-full border border-[#C5A059]/40 shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* TWO IMAGES: ROW 1 OF 2*2 GRID ON MOBILE, STACKED RIGHT ON DESKTOP */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
                {firstSix.slice(1, 3).map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedImage(item)}
                    className={`group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[140px] xs:h-[165px] sm:h-[190px] lg:h-[228px] reveal reveal-left delay-${(idx + 2) * 100}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/95 via-black/30 to-transparent p-2.5 sm:p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-[#DFC181] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest font-sans block">
                          {item.category}
                        </span>
                        <h4 className="text-white font-serif font-bold text-xs sm:text-sm lg:text-base leading-snug">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#183342]/85 text-[#DFC181] p-1.5 sm:p-2 rounded-full border border-[#C5A059]/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* BOTTOM SECTION: ROW 2 OF 2*2 GRID (2 COLS) + WIDE 6TH CARD (FULL WIDTH) ON MOBILE; 3 COLS ON DESKTOP */}
            {firstSix.length > 3 && (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {firstSix.slice(3, 6).map((item, idx) => {
                  const isBottomWideCard = idx === 2; // 6th image overall
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedImage(item)}
                      className={`group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer reveal reveal-up delay-${(idx + 1) * 100} ${
                        isBottomWideCard
                          ? 'col-span-2 lg:col-span-1 h-[160px] xs:h-[185px] sm:h-[230px] lg:h-[270px]'
                          : 'col-span-1 h-[140px] xs:h-[165px] sm:h-[190px] lg:h-[270px]'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/95 via-black/30 to-transparent p-2.5 sm:p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-[#DFC181] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest font-sans block">
                            {item.category}
                          </span>
                          <h4 className="text-white font-serif font-bold text-xs sm:text-sm lg:text-base leading-snug">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#183342]/85 text-[#DFC181] p-1.5 sm:p-2 rounded-full border border-[#C5A059]/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {firstSix.map((item, index) => {
              const delays = ['delay-100', 'delay-200', 'delay-300'];
              const delayClass = delays[index % delays.length];
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[150px] sm:h-[300px] reveal reveal-zoom ${delayClass} ${
                    firstSix.length === 1 ? 'col-span-2 lg:col-span-1' : 'col-span-1'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/95 via-black/30 to-transparent p-3 sm:p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[#DFC181] text-[9px] sm:text-xs font-bold uppercase tracking-widest block font-sans">{item.category}</span>
                      <h4 className="text-white font-serif font-bold text-xs sm:text-base lg:text-lg">{item.title}</h4>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#183342]/80 text-[#DFC181] p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#C5A059]/40">
                    <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* EXPANDED SECTION (SHOWN WHEN 'SEE MORE IMAGES' IS CLICKED) */}
        {showAll && remainingItems.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-3 sm:mt-6 animate-fadeIn">
            {remainingItems.map((item, index) => {
              const delays = ['delay-100', 'delay-200', 'delay-300'];
              const delayClass = delays[index % delays.length];
              const isLastOdd = index === remainingItems.length - 1 && remainingItems.length % 2 === 1;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[140px] xs:h-[165px] sm:h-[240px] lg:h-[280px] reveal reveal-zoom ${delayClass} ${
                    isLastOdd ? 'col-span-2 lg:col-span-1' : 'col-span-1'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/95 via-black/30 to-transparent p-2.5 sm:p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[#DFC181] text-[9px] sm:text-xs font-bold uppercase tracking-widest block font-sans">{item.category}</span>
                      <h4 className="text-white font-serif font-bold text-xs sm:text-sm lg:text-base leading-snug">{item.title}</h4>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#183342]/80 text-[#DFC181] p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-[#C5A059]/40">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SEE MORE / SHOW LESS BUTTON */}
        {filteredItems.length > 6 && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#183342] text-[#DFC181] hover:bg-[#122633] border border-[#C5A059]/40 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Fewer Images</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>See More Images ({remainingItems.length}+)</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

      </div>

      {/* LIGHTBOX FULLSCREEN MODAL PREVIEW */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/30 p-2 rounded-full transition-colors cursor-pointer z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-[#183342] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A059]/40">
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-5 bg-[#183342] text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#DFC181] uppercase block font-sans">{selectedImage.category}</span>
                <h3 className="font-serif text-lg sm:text-xl font-bold">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-[#C5A059] hover:bg-[#DFC181] text-slate-950 px-4 py-2 rounded-md text-xs font-bold tracking-wider uppercase cursor-pointer transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
