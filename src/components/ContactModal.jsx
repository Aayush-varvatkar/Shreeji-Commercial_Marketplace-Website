import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const ContactModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded shadow-2xl max-w-lg w-full overflow-hidden relative border border-[#C07858]/30">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-300 hover:text-white bg-black/40 hover:bg-black/70 p-1.5 rounded-full transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="bg-[#141414] p-6 text-white text-center border-b border-[#C07858]/30">
          <h3 className="font-serif text-2xl font-bold">{projectDetails.name}</h3>
          <p className="text-xs text-[#C07858] font-semibold tracking-wider uppercase mt-0.5">Site Visit & Direct Sales Inquiry</p>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6">
          
          {/* QUICK INFO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <a href={`tel:${projectDetails.contactPhone}`} className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 hover:border-[#C07858] transition-colors">
              <Phone className="w-5 h-5 text-[#C07858]" />
              <div>
                <p className="font-bold text-slate-900">Call Direct</p>
                <p className="text-slate-600">{projectDetails.contactPhone}</p>
              </div>
            </a>
            <a href={`mailto:${projectDetails.contactEmail}`} className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 hover:border-[#C07858] transition-colors">
              <Mail className="w-5 h-5 text-[#C07858]" />
              <div>
                <p className="font-bold text-slate-900">Email Us</p>
                <p className="text-slate-600 truncate">{projectDetails.contactEmail}</p>
              </div>
            </a>
          </div>

          <div className="flex items-start gap-2.5 p-3 bg-white rounded border border-slate-200 text-xs">
            <MapPin className="w-5 h-5 text-[#C07858] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900">Site Location</p>
              <p className="text-slate-600 leading-tight">{projectDetails.fullAddress}</p>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-4 space-y-2">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-serif font-bold text-slate-900">Site Visit Requested!</h4>
              <p className="text-xs text-slate-600">Our site sales manager will contact you within 15 minutes.</p>
              <button onClick={onClose} className="mt-2 text-xs bg-[#141414] text-white px-5 py-2 rounded font-semibold uppercase">Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider text-center">Schedule A Site Visit</h4>
              <input type="text" required placeholder="Your Name" className="w-full px-3 py-2 text-xs border rounded focus:ring-2 focus:ring-[#C07858] focus:outline-none bg-white" />
              <input type="tel" required placeholder="Your Mobile Number" className="w-full px-3 py-2 text-xs border rounded focus:ring-2 focus:ring-[#C07858] focus:outline-none bg-white" />
              <button type="submit" className="w-full bg-[#6B241A] hover:bg-[#521c14] text-white font-extrabold py-3 rounded text-xs uppercase tracking-widest shadow cursor-pointer">
                REQUEST FREE CAB PICKUP & SITE VISIT
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};

export default ContactModal;
