import React, { useState } from 'react';
import { X, Download, FileText, Check } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const BrochureModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', consent: true });

  if (!isOpen) return null;

  const triggerPdfDownload = () => {
    const link = document.createElement('a');
    link.href = '/The_Livin_Brochure.pdf';
    link.download = 'The_Livin_Brochure.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please consent to the privacy policy to proceed.');
      return;
    }
    setSubmitted(true);
    triggerPdfDownload();
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
        <div className="bg-[#F8F6F0] rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center relative border border-[#C5A059]/40 animate-modal-pop cursor-default overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          
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
            <h4 className="font-serif text-2xl font-bold text-[#183342] tracking-tight mb-2">
              Thank You{firstName ? `, ${firstName}` : ''}!
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-xs mx-auto">
              Your enquiry has been submitted successfully. Our representative will reach out to you shortly.
            </p>

            <button
              onClick={handleClose}
              className="bg-[#183342] hover:bg-[#102430] text-[#DFC181] px-10 py-3 rounded-full font-extrabold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95 border border-[#C5A059]/40"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        /* FORM CARD */
        <div className="bg-[#F8F6F0] rounded-xl shadow-2xl max-w-md w-full overflow-hidden relative border border-[#C5A059]/40 animate-modal-pop cursor-default">
          {/* CLOSE BUTTON */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white bg-black/40 hover:bg-black/70 p-1.5 rounded-full transition-colors z-10 cursor-pointer"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>

          {/* HEADER */}
          <div className="bg-[#183342] p-5 text-white text-center relative border-b border-[#C5A059]/40 overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            <img src="/images/skylogo_white.png" alt="Sky View Logo" className="h-12 w-auto object-contain mb-1" />
            <p className="text-xs text-[#DFC181] font-semibold tracking-wider uppercase">Official E-Brochure & Floor Plans</p>
          </div>

          {/* BODY */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 text-center font-medium">
                Enter your details to view & download the complete high-resolution brochure PDF.
              </p>

              <div>
                <label className="block text-xs font-bold text-[#183342] mb-1 uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3 py-2.5 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none bg-white text-slate-900 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#183342] mb-1 uppercase tracking-wider">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 Mobile Number"
                  className="w-full px-3 py-2.5 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none bg-white text-slate-900 placeholder-slate-400"
                />
              </div>

              {/* CONSENT CHECKBOX */}
              <div className="flex items-start gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="brochure-modal-consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 w-3.5 h-3.5 text-[#183342] bg-white border-slate-300 rounded focus:ring-[#C5A059] accent-[#183342] cursor-pointer shrink-0"
                />
                <label htmlFor="brochure-modal-consent" className="text-[11px] leading-tight text-slate-600 font-medium cursor-pointer">
                  I consent to the use of provided data in accordance with the{' '}
                  <a href="#privacy" onClick={(e) => e.stopPropagation()} className="underline hover:text-[#183342] text-[#C5A059] transition-colors font-bold">
                    privacy policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#183342] hover:bg-[#102430] text-[#DFC181] font-extrabold py-3.5 rounded text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow cursor-pointer transition-all active:scale-[0.99] border border-[#C5A059]/40"
              >
                <Download className="w-4 h-4 text-[#C5A059]" />
                <span>DOWNLOAD E-BROCHURE PDF</span>
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
};

export default BrochureModal;
