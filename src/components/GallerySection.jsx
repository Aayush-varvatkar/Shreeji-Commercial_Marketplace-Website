import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryCategories = ["All", "Showroom & Office Spaces", "Lobby & Facilities", "Exterior & Location"];

const galleryItems = [
  {
    id: 1,
    title: "Luxury Showroom Spaces (Ground Floor)",
    category: "Showroom & Office Spaces",
    image: "/images/Showroom.png",
    type: "featured"
  },
  {
    id: 2,
    title: "Corporate Executive Office Suites",
    category: "Showroom & Office Spaces",
    image: "/images/commercial.png",
    type: "top_right_1"
  },
  {
    id: 3,
    title: "Grand Entrance Lobby & Elevators",
    category: "Lobby & Facilities",
    image: "/images/amenity_lobby.jpg",
    type: "top_right_2"
  },
  {
    id: 4,
    title: "Opposite Chikhloli Railway Station",
    category: "Exterior & Location",
    image: "/images/amenity_location.jpg",
    type: "bottom_1"
  },
  {
    id: 5,
    title: "Elegantly Finished Restrooms",
    category: "Lobby & Facilities",
    image: "/images/amenity_washroom.jpg",
    type: "bottom_2"
  },
  {
    id: 6,
    title: "Commercial Frontage Elevation",
    category: "Exterior & Location",
    image: "/images/HeroImg1.jpeg",
    type: "bottom_3"
  },
  {
    id: 7,
    title: "Sky View Architectural Facade",
    category: "Exterior & Location",
    image: "/images/SkyFrontView.jpg"
  },
  {
    id: 8,
    title: "Aerial View of Commercial Complex",
    category: "Exterior & Location",
    image: "/images/SkyViewAriealView.jpeg"
  }
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const mainExterior = galleryItems[0];
  const parkImage = galleryItems[1];
  const gymImage = galleryItems[2];
  const meditationImage = galleryItems[3];
  const gameZoneImage = galleryItems[4];
  const evChargingImage = galleryItems[5];

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
            Explore architectural renders of Sky View Commercial Marketplace.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 reveal reveal-up delay-100">
          {galleryCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm ${isActive
                    ? 'bg-[#183342] text-[#DFC181] border border-[#C5A059]/40 shadow-md scale-105'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#C5A059] hover:text-[#183342]'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* GRID DISPLAY */}
        {activeFilter === "All" ? (
          <div className="space-y-4 sm:space-y-6">

            {/* TOP ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

              {/* FEATURED COMMERCIAL STOREFRONTS IMAGE (LEFT) */}
              <div
                onClick={() => setSelectedImage(mainExterior)}
                className="lg:col-span-8 group relative rounded-2xl overflow-hidden shadow-lg border border-white cursor-pointer h-[280px] sm:h-[400px] lg:h-[480px] reveal reveal-zoom delay-150"
              >
                <img
                  src={mainExterior.image}
                  alt={mainExterior.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/90 via-[#183342]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[#DFC181] text-xs font-bold uppercase tracking-widest">{mainExterior.category}</span>
                  <h4 className="text-white font-serif font-bold text-lg sm:text-xl">{mainExterior.title}</h4>
                </div>
                <div className="absolute top-4 right-4 bg-[#183342]/80 text-[#DFC181] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border border-[#C5A059]/40">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* TWO STACKED RIGHT IMAGES */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">

                <div
                  onClick={() => setSelectedImage(parkImage)}
                  className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[150px] sm:h-[190px] lg:h-[228px] reveal reveal-left delay-250"
                >
                  <img
                    src={parkImage.image}
                    alt={parkImage.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="text-[#DFC181] text-[10px] font-bold uppercase tracking-widest">{parkImage.category}</span>
                    <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{parkImage.title}</h4>
                  </div>
                </div>

                <div
                  onClick={() => setSelectedImage(gymImage)}
                  className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[150px] sm:h-[190px] lg:h-[228px] reveal reveal-left delay-350"
                >
                  <img
                    src={gymImage.image}
                    alt={gymImage.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="text-[#DFC181] text-[10px] font-bold uppercase tracking-widest">{gymImage.category}</span>
                    <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{gymImage.title}</h4>
                  </div>
                </div>

              </div>

            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

              <div
                onClick={() => setSelectedImage(meditationImage)}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[160px] sm:h-[220px] lg:h-[270px] reveal reveal-up delay-200"
              >
                <img
                  src={meditationImage.image}
                  alt={meditationImage.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[#DFC181] text-[10px] font-bold uppercase tracking-widest">{meditationImage.category}</span>
                  <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{meditationImage.title}</h4>
                </div>
              </div>

              <div
                onClick={() => setSelectedImage(gameZoneImage)}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[160px] sm:h-[220px] lg:h-[270px] reveal reveal-up delay-300"
              >
                <img
                  src={gameZoneImage.image}
                  alt={gameZoneImage.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[#DFC181] text-[10px] font-bold uppercase tracking-widest">{gameZoneImage.category}</span>
                  <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{gameZoneImage.title}</h4>
                </div>
              </div>

              <div
                onClick={() => setSelectedImage(evChargingImage)}
                className="col-span-2 lg:col-span-1 group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[160px] sm:h-[220px] lg:h-[270px] reveal reveal-up delay-400"
              >
                <img
                  src={evChargingImage.image}
                  alt={evChargingImage.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[#DFC181] text-[10px] font-bold uppercase tracking-widest">{evChargingImage.category}</span>
                  <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{evChargingImage.title}</h4>
                </div>
              </div>

            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => {
              const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500'];
              const delayClass = delays[index % delays.length];
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[260px] sm:h-[300px] reveal reveal-zoom ${delayClass}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102430]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="text-[#DFC181] text-xs font-bold uppercase tracking-widest">{item.category}</span>
                    <h4 className="text-white font-serif font-bold text-base">{item.title}</h4>
                  </div>
                </div>
              );
            })}
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
                <span className="text-xs font-bold tracking-widest text-[#DFC181] uppercase block">{selectedImage.category}</span>
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
