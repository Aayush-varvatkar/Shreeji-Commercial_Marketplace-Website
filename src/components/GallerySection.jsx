import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const galleryCategories = ["All", "Exterior", "Interior", "Amenities", "Aerial View"];

const galleryItems = [
  {
    id: 1,
    title: "Boutique Twin Towers - Main Elevation",
    category: "Exterior",
    image: "/hero_twin_towers.jpg",
    type: "featured"
  },
  {
    id: 2,
    title: "Landscaped Garden & Water Fountain",
    category: "Amenities",
    image: "/gallery_garden_fountain.jpg",
    type: "top_right_1"
  },
  {
    id: 3,
    title: "Architectural Exterior View",
    category: "Exterior",
    image: "/hero_twin_towers.jpg",
    type: "top_right_2"
  },
  {
    id: 4,
    title: "Luxury Living Room with Balcony",
    category: "Interior",
    image: "/gallery_interior_living.jpg",
    type: "bottom_1"
  },
  {
    id: 5,
    title: "Modern Modular Kitchen",
    category: "Interior",
    image: "/gallery_interior_kitchen.jpg",
    type: "bottom_2"
  },
  {
    id: 6,
    title: "Indoor Games & Recreational Area",
    category: "Amenities",
    image: "/gallery_indoor_games.jpg",
    type: "bottom_3"
  },
  {
    id: 7,
    title: "Rooftop Yoga & Relaxation Deck",
    category: "Aerial View",
    image: "/hero_rooftop_deck.jpg",
    type: "extra"
  },
  {
    id: 8,
    title: "Lavish Entrance Lobby",
    category: "Interior",
    image: "/hero_luxury_lobby.jpg",
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

  // Specific items for desktop matching exact image layout
  const mainExterior = galleryItems[0];
  const gardenFountain = galleryItems[1];
  const exteriorAngle = galleryItems[2];
  const livingRoom = galleryItems[3];
  const kitchen = galleryItems[4];
  const indoorGames = galleryItems[5];

  return (
    <section id="gallery" className="w-full bg-[#FAF7F2] py-16 sm:py-24 border-b border-[#E8E2D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER (MATCHING EXACT IMAGE 1 HEADER) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="h-[1px] w-12 bg-[#C07858]/60 inline-block" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Gallery
            </h2>
            <span className="h-[1px] w-12 bg-[#C07858]/60 inline-block" />
          </div>
          <p className="text-slate-600 text-xs sm:text-sm font-medium tracking-wide">
            Explore every corner of Benchmark Greens through our curated gallery
          </p>
        </div>

        {/* FILTER BUTTONS (MATCHING IMAGE 1 PILL BUTTONS) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {galleryCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#0D2B45] text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#C07858] hover:text-[#0D2B45]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* GRID DISPLAY */}
        {activeFilter === "All" ? (
          /* ALL TAB: EXACT LAYOUT FROM REFERENCE IMAGE (DESKTOP & MOBILE) */
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
                  <span className="text-[#C07858] text-xs font-bold uppercase tracking-widest">{mainExterior.category}</span>
                  <h4 className="text-white font-serif font-bold text-lg sm:text-xl">{mainExterior.title}</h4>
                </div>
                <div className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>

              {/* TWO STACKED RIGHT IMAGES (DESKTOP) / GRID (MOBILE) */}
              <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                
                {/* TOP RIGHT 1: GARDEN FOUNTAIN */}
                <div
                  onClick={() => setSelectedImage(gardenFountain)}
                  className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[150px] sm:h-[190px] lg:h-[228px]"
                >
                  <img
                    src={gardenFountain.image}
                    alt={gardenFountain.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="text-[#C07858] text-[10px] font-bold uppercase tracking-widest">{gardenFountain.category}</span>
                    <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{gardenFountain.title}</h4>
                  </div>
                </div>

                {/* TOP RIGHT 2: ANGLED BUILDING */}
                <div
                  onClick={() => setSelectedImage(exteriorAngle)}
                  className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[150px] sm:h-[190px] lg:h-[228px]"
                >
                  <img
                    src={exteriorAngle.image}
                    alt={exteriorAngle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="text-[#C07858] text-[10px] font-bold uppercase tracking-widest">{exteriorAngle.category}</span>
                    <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{exteriorAngle.title}</h4>
                  </div>
                </div>

              </div>

            </div>

            {/* BOTTOM ROW: 3 EQUAL COLUMNS (DESKTOP) / 2 COLUMNS (MOBILE) */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              {/* BOTTOM 1: LIVING ROOM */}
              <div
                onClick={() => setSelectedImage(livingRoom)}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[160px] sm:h-[220px] lg:h-[270px]"
              >
                <img
                  src={livingRoom.image}
                  alt={livingRoom.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[#C07858] text-[10px] font-bold uppercase tracking-widest">{livingRoom.category}</span>
                  <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{livingRoom.title}</h4>
                </div>
              </div>

              {/* BOTTOM 2: KITCHEN */}
              <div
                onClick={() => setSelectedImage(kitchen)}
                className="group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[160px] sm:h-[220px] lg:h-[270px]"
              >
                <img
                  src={kitchen.image}
                  alt={kitchen.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[#C07858] text-[10px] font-bold uppercase tracking-widest">{kitchen.category}</span>
                  <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{kitchen.title}</h4>
                </div>
              </div>

              {/* BOTTOM 3: INDOOR GAMES */}
              <div
                onClick={() => setSelectedImage(indoorGames)}
                className="col-span-2 lg:col-span-1 group relative rounded-2xl overflow-hidden shadow-md border border-white cursor-pointer h-[160px] sm:h-[220px] lg:h-[270px]"
              >
                <img
                  src={indoorGames.image}
                  alt={indoorGames.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[#C07858] text-[10px] font-bold uppercase tracking-widest">{indoorGames.category}</span>
                  <h4 className="text-white font-sans font-bold text-xs sm:text-sm">{indoorGames.title}</h4>
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
                  <span className="text-[#C07858] text-xs font-bold uppercase tracking-widest">{item.category}</span>
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
          
          <div className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <div className="relative max-h-[75vh] flex items-center justify-center bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#C07858] uppercase block">{selectedImage.category}</span>
                <h3 className="font-serif text-lg sm:text-xl font-bold">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-[#C07858] text-white px-4 py-2 rounded-md text-xs font-bold tracking-wider uppercase"
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
