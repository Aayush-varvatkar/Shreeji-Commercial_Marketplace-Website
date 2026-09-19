import React, { useState, useRef } from 'react';
import { X, Download, FileText, Check } from 'lucide-react';
import { projectDetails } from '../data/projectData';
import { submitToGoogleSheet } from '../utils/submitToGoogleSheet';
import { validateName, validateEmail, validatePhone, validateConsent } from '../utils/formValidation';

const BrochureModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', consent: true });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '', consent: '' });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  if (!isOpen) return null;

  const triggerPdfDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sky_View_Shreeji_Icon_Brochure.pdf';
    link.download = 'Sky_View_Shreeji_Icon_Brochure.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    const nameErr = validateName(trimmedName);
    const emailErr = validateEmail(trimmedEmail);
    const phoneErr = validatePhone(trimmedPhone, '+91');
    const consentErr = validateConsent(formData.consent);

    const validationErrors = {
      name: nameErr,
      email: emailErr,
      phone: phoneErr,
      consent: consentErr,
    };

    setErrors(validationErrors);

    if (nameErr) {
      nameRef.current?.focus();
      return;
    }
    if (emailErr) {
      emailRef.current?.focus();
      return;
    }
    if (phoneErr) {
      phoneRef.current?.focus();
      return;
    }
    if (consentErr) {
      return;
    }

    setLoading(true);
    await submitToGoogleSheet({
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      formType: 'Brochure Download Form',
    });
    setLoading(false);
    setSubmitted(true);
    triggerPdfDownload();
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', consent: true });
    setErrors({ name: '', email: '', phone: '', consent: '' });
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
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <p className="text-xs text-slate-600 text-center font-medium">
                Enter your details to view & download the complete high-resolution brochure PDF.
              </p>

              {/* NAME FIELD */}
              <div>
                <label className="block text-xs font-bold text-[#183342] mb-1 uppercase tracking-wider text-left">Full Name *</label>
                <input
                  ref={nameRef}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3 py-2.5 border ${
                    errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 focus:ring-2 focus:ring-[#C5A059]'
                  } rounded text-sm focus:outline-none bg-white text-slate-900 placeholder-slate-400`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 font-medium text-left">{errors.name}</p>
                )}
              </div>

              {/* EMAIL FIELD */}
              <div>
                <label className="block text-xs font-bold text-[#183342] mb-1 uppercase tracking-wider text-left">Email Address *</label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full px-3 py-2.5 border ${
                    errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 focus:ring-2 focus:ring-[#C5A059]'
                  } rounded text-sm focus:outline-none bg-white text-slate-900 placeholder-slate-400`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-medium text-left">{errors.email}</p>
                )}
              </div>

              {/* PHONE FIELD */}
              <div>
                <label className="block text-xs font-bold text-[#183342] mb-1 uppercase tracking-wider text-left">Phone Number *</label>
                <input
                  ref={phoneRef}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className={`w-full px-3 py-2.5 border ${
                    errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 focus:ring-2 focus:ring-[#C5A059]'
                  } rounded text-sm focus:outline-none bg-white text-slate-900 placeholder-slate-400`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 font-medium text-left">{errors.phone}</p>
                )}
              </div>

              {/* CONSENT CHECKBOX */}
              <div>
                <div className="flex items-start gap-2 pt-0.5">
                  <input
                    type="checkbox"
                    id="brochure-modal-consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-0.5 w-3.5 h-3.5 text-[#183342] bg-white border-slate-300 rounded focus:ring-[#C5A059] accent-[#183342] cursor-pointer shrink-0"
                  />
                  <label htmlFor="brochure-modal-consent" className="text-[11px] leading-tight text-slate-600 font-medium cursor-pointer text-left">
                    I consent to the use of provided data in accordance with the{' '}
                    <a href="#privacy" onClick={(e) => e.stopPropagation()} className="underline hover:text-[#183342] text-[#C5A059] transition-colors font-bold">
                      privacy policy
                    </a>
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-red-500 text-xs mt-1 font-medium text-left">{errors.consent}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#183342] hover:bg-[#102430] text-[#DFC181] font-extrabold py-3.5 rounded text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow cursor-pointer transition-all active:scale-[0.99] border border-[#C5A059]/40"
              >
                <Download className="w-4 h-4 text-[#C5A059]" />
                <span>{loading ? 'PROCESSING...' : 'DOWNLOAD E-BROCHURE PDF'}</span>
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
};

export default BrochureModal;
