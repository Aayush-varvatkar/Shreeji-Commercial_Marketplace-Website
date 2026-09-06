import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryCategories = ["All", "Exterior", "Amenities", "Infrastructure", "Location"];

const galleryItems = [
  {
    id: 1,
    title: "Boutique Twin Towers Aerial View",
    category: "Exterior",
    image: "/images/Aerial view.jpg",
    type: "featured"
  },
  {
    id: 2,
    title: "Landscaped Central Park",
    category: "Amenities",
    image: "/images/Park.jpg",
    type: "top_right_1"
  },
  {
    id: 3,
    title: "Fully Equipped Fitness Gymnasium",
    category: "Amenities",
    image: "/images/Gym.jpg",
    type: "top_right_2"
  },
  {
    id: 4,
    title: "Peaceful Yoga & Meditation Zone",
    category: "Amenities",
    image: "/images/Meditation.jpg",
    type: "bottom_1"
  },
  {
    id: 5,
    title: "Indoor Recreation & Game Zone",
    category: "Amenities",
    image: "/images/Game_Zone.jpeg",
    type: "bottom_2"
  },
  {
    id: 6,
    title: "EV Charging Station Facility",
    category: "Infrastructure",
    image: "/images/EV_Charging_point.jpg",
    type: "bottom_3"
  },
  {
    id: 7,
    title: "Prime Metro Connectivity Access",
    category: "Location",
    image: "/images/Metro_connectivity.jpg",
    type: "extra"
  },
  {
    id: 8,
    title: "24/7 CCTV & Security Gated Complex",
    category: "Infrastructure",
    image: "/images/surveillance_Security.jpeg",
    type: "extra"
  }
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter items
  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  // Specific items for desktop featured grid
  const mainExterior = galleryItems[0];
  const parkImage = galleryItems[1];
  const gymImage = galleryItems[2];
  const meditationImage = galleryItems[3];
  const gameZoneImage = galleryItems[4];
  const evChargingImage = galleryItems[5];

  return (
    <section id="gallery" className="w-full bg-[#FAF7F2] py-16 sm:py-24 border-b border-[#E8E2D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="h-[1px] w-12 bg-[#B86B4B]/60 inline-block" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Project Gallery
            </h2>
            <span className="h-[1px] w-12 bg-[#B86B4B]/60 inline-block" />
          </div>
          <p className="text-slate-600 text-xs sm:text-sm font-medium tracking-wide">
            Explore actual project photos of Benchmark Greens twin towers, parks, gymnasium, and infrastructure
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {galleryCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#6D281D] text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#B86B4B] hover:text-[#6D281D]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* GRID DISPLAY */}
        {activeFilter === "All" ? (
          /* ALL TAB: FEATURED LAYOUT */
          <div className="space-y-4 sm:space-y-6">
            
            {/* TOP ROW: LARGE FEATURED LEFT (65%) + TWO STACKED RIGHT (35%) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              
              {/* FEATURED MAIN BUILDING IMAGE (LEFT) */}
              <div
                onClick={() => setSelectedImage(mainExterior)}
                className="lg:col-span-8 group relative rounded-2xl overflow-hidden shadow-lg border border-white cursor-pointer h-[280px] sm:h-[400px] lg:h-[480px]"
              >
                <img
                  src={mainExterior.image}
                  alt={mainExterior.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[#B86B4B] text-xs font-bold uppercase tracking-widest">{mainExterior.category}</span>
                  <h4 className="text-white font-serif font-bold text-lg sm:text-xl">{mainExterior.title}</h4>
                </div>
                <div className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* TWO STACKED RIGHT IMAGES */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                
                {/* TOP RIGHT 1: PARK */}
                <div
                  onClick={() => setSelectedImage(parkImage)}
                  className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[150px] sm:h-[190px] lg:h-[228px]"
                >
                  <img
                    src={parkImage.image}
                    alt={parkImage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="text-[#B86B4B] text-[10px] font-bold uppercase tracking-widest">{parkImage.category}</span>
                    <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{parkImage.title}</h4>
                  </div>
                </div>

                {/* TOP RIGHT 2: GYM */}
                <div
                  onClick={() => setSelectedImage(gymImage)}
                  className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[150px] sm:h-[190px] lg:h-[228px]"
                >
                  <img
                    src={gymImage.image}
                    alt={gymImage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="text-[#B86B4B] text-[10px] font-bold uppercase tracking-widest">{gymImage.category}</span>
                    <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{gymImage.title}</h4>
                  </div>
                </div>

              </div>

            </div>

            {/* BOTTOM ROW: 3 EQUAL COLUMNS */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              {/* BOTTOM 1: MEDITATION */}
              <div
                onClick={() => setSelectedImage(meditationImage)}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[160px] sm:h-[220px] lg:h-[270px]"
              >
                <img
                  src={meditationImage.image}
                  alt={meditationImage.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[#B86B4B] text-[10px] font-bold uppercase tracking-widest">{meditationImage.category}</span>
                  <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{meditationImage.title}</h4>
                </div>
              </div>

              {/* BOTTOM 2: GAME ZONE */}
              <div
                onClick={() => setSelectedImage(gameZoneImage)}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[160px] sm:h-[220px] lg:h-[270px]"
              >
                <img
                  src={gameZoneImage.image}
                  alt={gameZoneImage.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[#B86B4B] text-[10px] font-bold uppercase tracking-widest">{gameZoneImage.category}</span>
                  <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{gameZoneImage.title}</h4>
                </div>
              </div>

              {/* BOTTOM 3: EV CHARGING */}
              <div
                onClick={() => setSelectedImage(evChargingImage)}
                className="col-span-2 lg:col-span-1 group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[160px] sm:h-[220px] lg:h-[270px]"
              >
                <img
                  src={evChargingImage.image}
                  alt={evChargingImage.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[#B86B4B] text-[10px] font-bold uppercase tracking-widest">{evChargingImage.category}</span>
                  <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{evChargingImage.title}</h4>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* FILTERED VIEW GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[260px] sm:h-[300px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[#B86B4B] text-xs font-bold uppercase tracking-widest">{item.category}</span>
                  <h4 className="text-white font-serif font-bold text-base">{item.title}</h4>
                </div>
              </div>
            ))}
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
          
          <div className="max-w-4xl w-full bg-[#181818] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-5 bg-[#181818] text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#B86B4B] uppercase block">{selectedImage.category}</span>
                <h3 className="font-serif text-lg sm:text-xl font-bold">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-[#6D281D] hover:bg-[#541f17] text-white px-4 py-2 rounded-md text-xs font-bold tracking-wider uppercase cursor-pointer"
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

