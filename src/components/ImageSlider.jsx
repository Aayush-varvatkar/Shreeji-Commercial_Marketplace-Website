import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = projectDetails.heroSlides;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[480px] sm:h-[550px] lg:h-full min-h-[500px] lg:min-h-[640px] bg-slate-900 overflow-hidden group">
      {/* IMAGES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title || 'Hero Slide'}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay at bottom for slider text */}
          {(slide.title || slide.subtitle) && (
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-6 flex flex-col justify-end">
              {slide.title && (
                <h3 className="text-white font-bold text-lg sm:text-xl drop-shadow-md">
                  {slide.title}
                </h3>
              )}
              {slide.subtitle && (
                <p className="text-slate-200 text-xs sm:text-sm drop-shadow-sm font-medium">
                  {slide.subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      {/* LEFT NAVIGATION ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 border border-white/20 shadow-lg cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* RIGHT NAVIGATION ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 border border-white/20 shadow-lg cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* PAGINATION DOTS (BOTTOM CENTER) */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
