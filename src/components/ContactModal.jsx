import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Check } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const ContactModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', consent: true });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please consent to the privacy policy to proceed.');
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', consent: true });
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const firstName = formData.name ? formData.name.trim().split(' ')[0] : '';

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-backdrop-fade cursor-pointer"
    >
      {submitted ? (
        /* SEPARATE ANIMATED SUCCESS CARD MATCHING REFERENCE IMAGE & SITE THEME */
        <div className="bg-[#FAF7F2] rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center relative border border-[#B86B4B]/30 animate-modal-pop cursor-default overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#B86B4B] to-transparent" />
          
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full transition-colors cursor-pointer z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* ANIMATED CIRCLE & GREEN TICK IN CENTER */}
          <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
            {/* Background Circle */}
            <svg className="w-20 h-20 transform -rotate-90 drop-shadow-sm" viewBox="0 0 76 76">
              <circle
                cx="38"
                cy="38"
                r="34"
                className="stroke-emerald-100"
                strokeWidth="3.5"
                fill="none"
              />
              <circle
                cx="38"
                cy="38"
                r="34"
                className="stroke-emerald-600 animate-circle-draw"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            {/* Green Tick Popping in Center */}
            <div className="absolute inset-0 flex items-center justify-center animate-check-pop">
              <Check className="w-10 h-10 text-emerald-600 stroke-[3]" />
            </div>
          </div>

          {/* CONTENT FADING UP IN SEQUENCE */}
          <div className="animate-card-content-fade">
            <h4 className="font-serif text-2xl font-bold text-[#121212] tracking-tight mb-2">
              Thank You{firstName ? `, ${firstName}` : ''}!
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-xs mx-auto">
              Your enquiry has been submitted successfully. Our representative will reach out to you shortly.
            </p>

            <button
              onClick={handleClose}
              className="bg-[#6D281D] hover:bg-[#521C14] text-white px-10 py-3 rounded-full font-extrabold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#FAF7F2] rounded shadow-2xl max-w-lg w-full overflow-hidden relative border border-[#B86B4B]/30 animate-modal-pop cursor-default">
          
          {/* CLOSE BUTTON */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition-all duration-200 z-10 cursor-pointer active:scale-95"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>

          {/* HEADER */}
          <div className="bg-[#121212] p-6 text-white text-center border-b border-[#B86B4B]/30 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#B86B4B] to-transparent" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">{projectDetails.name}</h3>
            <p className="text-xs text-[#B86B4B] font-bold tracking-widest uppercase mt-1">Site Visit & Direct Sales Inquiry</p>
          </div>

          {/* BODY */}
          <div className="p-6 space-y-5">
            
            {/* QUICK INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <a href={`tel:${projectDetails.contactPhone}`} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-[#B86B4B] transition-colors shadow-sm">
                <Phone className="w-4 h-4 text-[#B86B4B]" />
                <div>
                  <p className="font-bold text-slate-900">Call Direct</p>
                  <p className="text-slate-600">{projectDetails.contactPhone}</p>
                </div>
              </a>
              <a href={`mailto:${projectDetails.contactEmail}`} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-[#B86B4B] transition-colors shadow-sm">
                <Mail className="w-4 h-4 text-[#B86B4B]" />
                <div>
                  <p className="font-bold text-slate-900">Email Us</p>
                  <p className="text-slate-600 truncate">{projectDetails.contactEmail}</p>
                </div>
              </a>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200 text-xs shadow-sm">
              <MapPin className="w-4 h-4 text-[#B86B4B] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900">Site Address</p>
                <p className="text-slate-600 leading-tight">{projectDetails.fullAddress}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
              <div className="text-center mb-1">
                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest">Get Instant Project Details</h4>
                <p className="text-[11px] text-slate-500 font-medium">Leave your details below to receive pricing & floor plans</p>
              </div>
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Full Name *"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#B86B4B] focus:outline-none bg-white text-slate-900 placeholder-slate-400 transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your Mobile Number *"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:ring-2 focus:ring-[#B86B4B] focus:outline-none bg-white text-slate-900 placeholder-slate-400 transition-all"
                />
              </div>

              {/* CONSENT CHECKBOX */}
              <div className="flex items-start gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="contact-modal-consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 w-3.5 h-3.5 text-[#6D281D] bg-white border-slate-300 rounded focus:ring-[#B86B4B] accent-[#6D281D] cursor-pointer shrink-0"
                />
                <label htmlFor="contact-modal-consent" className="text-[11px] leading-tight text-slate-600 font-medium cursor-pointer">
                  I consent to the use of provided data in accordance with the{' '}
                  <a href="#privacy" onClick={(e) => e.stopPropagation()} className="underline hover:text-[#6D281D] text-[#B86B4B] transition-colors font-bold">
                    privacy policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6B241A] hover:bg-[#521c14] text-white font-extrabold py-3.5 rounded text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow cursor-pointer transition-all"
              >
                CONTACT US FOR DETAILS
              </button>
            </form>

          </div>

        </div>
      )}
    </div>
  );
};

export default ContactModal;
