import React, { useState, useEffect } from 'react';
import { Download, Phone, MessageCircle, Menu, X } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const Navbar = ({ onOpenBrochure, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsapp = () => {
    const message = encodeURIComponent(`Hi! I am interested in ${projectDetails.name}, Kalyan. Please share project details.`);
    window.open(`https://wa.me/${projectDetails.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <header className={`sticky top-0 z-50 bg-[#141414] text-white transition-all duration-300 ${scrolled ? 'shadow-xl border-b border-white/10' : ''}`}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO (LEFT) */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-baseline gap-1.5 group">
              <span className="text-[#C07858] text-xs font-bold tracking-widest font-serif uppercase">THE</span>
              <span className="text-white font-serif font-bold text-2xl tracking-wider group-hover:text-[#C07858] transition-colors">
                LIVIN
              </span>
            </a>
          </div>

          {/* NAV LINKS (CENTER) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {projectDetails.navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveTab(link.id)}
                  className={`text-xs font-bold tracking-widest transition-all duration-200 relative py-2 ${
                    isActive
                      ? 'text-white font-extrabold'
                      : 'text-slate-300 hover:text-[#C07858]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C07858] transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS (CALL, WHATSAPP, BROCHURE) */}
          <div className="hidden md:flex items-center gap-3">
            {/* CALL BUTTON */}
            <button
              onClick={onOpenContact}
              className="border border-white/30 hover:border-white text-white px-3.5 py-2 rounded-sm text-xs font-bold tracking-wider flex items-center gap-1.5 transition-all duration-200 cursor-pointer bg-black/30 hover:bg-black/50"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>CALL</span>
            </button>

            {/* WHATSAPP BUTTON */}
            <button
              onClick={handleWhatsapp}
              className="border border-emerald-500/80 hover:bg-emerald-500/10 text-white px-3.5 py-2 rounded-sm text-xs font-bold tracking-wider flex items-center gap-1.5 transition-all duration-200 cursor-pointer bg-black/30"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              <span>WHATSAPP</span>
            </button>

            {/* BROCHURE BUTTON */}
            <button
              onClick={onOpenBrochure}
              className="bg-[#C07858] hover:bg-[#a66244] text-white px-4 py-2.5 rounded-sm text-xs font-extrabold tracking-wider flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-md uppercase active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>BROCHURE</span>
            </button>
          </div>

          {/* MOBILE HAMBURGER MENU */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBrochure}
              className="bg-[#C07858] text-white px-3 py-1.5 rounded text-xs font-bold uppercase sm:hidden"
            >
              Brochure
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] border-b border-white/10 px-4 pt-3 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {projectDetails.navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 text-xs font-bold tracking-widest rounded transition-colors ${
                  activeTab === link.id
                    ? 'bg-[#C07858] text-white'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full border border-white/30 text-white py-2.5 rounded text-xs font-bold tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>CALL NOW</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsapp();
              }}
              className="w-full border border-emerald-500 text-white py-2.5 rounded text-xs font-bold tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WHATSAPP CHAT</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="w-full bg-[#C07858] text-white py-3 rounded text-xs font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 shadow"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD BROCHURE</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
