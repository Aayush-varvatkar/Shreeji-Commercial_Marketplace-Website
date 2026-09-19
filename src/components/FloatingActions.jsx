import React, { useState, useEffect } from 'react';
import { Phone, Download } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const FloatingActions = ({ onOpenBrochure, onOpenContact }) => {
  const [showSideBrochure, setShowSideBrochure] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show side brochure button only after hero section (scrolled past ~450px)
      if (window.scrollY > 450) {
        setShowSideBrochure(true);
      } else {
        setShowSideBrochure(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsapp = () => {
    const message = encodeURIComponent(projectDetails.whatsappDefaultMessage);
    window.open(`https://wa.me/${projectDetails.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* VERTICAL RIGHT-EDGE BROCHURE TAB (SHOWS ONLY AFTER HERO SECTION) */}
      <button
        onClick={onOpenBrochure}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-b from-[#C5A059] via-[#D4AF37] to-[#9E7B34] hover:from-[#DFC181] hover:to-[#C5A059] text-slate-950 px-3 py-4 rounded-l-md shadow-2xl flex items-center gap-2 cursor-pointer transition-all duration-300 border-l-2 border-t-2 border-b-2 border-slate-900 ${
          showSideBrochure
            ? 'translate-x-0 opacity-100 hover:-translate-x-1'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        style={{ writingMode: 'vertical-rl' }}
        title="Download Brochure"
      >
        <div className="rotate-90 flex items-center justify-center">
          <Download className="w-4 h-4 text-slate-950 stroke-[2.5] animate-icon-pulse" />
        </div>
        <span className="text-xs font-extrabold tracking-widest uppercase font-sans">
          BROCHURE
        </span>
      </button>

      {/* BOTTOM RIGHT FLOATING CALL & WHATSAPP BUTTONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-center">
        
        {/* PHONE CALL BUTTON */}
        <button
          onClick={onOpenContact}
          className="w-12 h-12 bg-[#183342] hover:bg-[#102430] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative cursor-pointer border border-[#C5A059]/50"
          aria-label="Call Sales Team"
        >
          <Phone className="w-5 h-5 text-white animate-phone-ring" />
          <span className="absolute right-14 bg-[#183342] text-white text-xs font-semibold px-3 py-1.5 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#C5A059]/40">
            Call: {projectDetails.contactPhone}
          </span>
        </button>

        {/* WHATSAPP BUTTON */}
        <button
          onClick={handleWhatsapp}
          className="w-12 h-12 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp text-2xl animate-whatsapp-shake"></i>
          <span className="absolute right-14 bg-[#183342] text-white text-xs font-semibold px-3 py-1.5 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-emerald-500/30">
            WhatsApp Chat
          </span>
        </button>

      </div>
    </>
  );
};

export default FloatingActions;
