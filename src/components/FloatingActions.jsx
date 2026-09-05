import React from 'react';
import { Phone, MessageCircle, Download } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const FloatingActions = ({ onOpenBrochure, onOpenContact }) => {
  const handleWhatsapp = () => {
    const message = encodeURIComponent(`Hi! I am interested in ${projectDetails.name}, Kalyan. Please share project details and pricing.`);
    window.open(`https://wa.me/${projectDetails.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* VERTICAL RIGHT-EDGE BROCHURE TAB (MATCHING REFERENCE IMAGE) */}
      <button
        onClick={onOpenBrochure}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#C07858] hover:bg-[#a86547] text-white px-3 py-4 rounded-l-md shadow-2xl flex items-center gap-2 cursor-pointer transition-transform duration-200 hover:-translate-x-1 border-l-2 border-t-2 border-b-2 border-white/20"
        style={{ writingMode: 'vertical-rl' }}
        title="Download Brochure"
      >
        <div className="rotate-90 flex items-center justify-center">
          <Download className="w-4 h-4 text-white" />
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
          className="w-12 h-12 bg-[#1A1A1A] hover:bg-black text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative cursor-pointer border border-white/20"
          aria-label="Call Sales Team"
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="absolute right-14 bg-[#141414] text-white text-xs font-semibold px-3 py-1.5 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Call: {projectDetails.contactPhone}
          </span>
        </button>

        {/* WHATSAPP BUTTON */}
        <button
          onClick={handleWhatsapp}
          className="w-12 h-12 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute right-14 bg-[#141414] text-white text-xs font-semibold px-3 py-1.5 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            WhatsApp Chat
          </span>
        </button>

      </div>
    </>
  );
};

export default FloatingActions;
