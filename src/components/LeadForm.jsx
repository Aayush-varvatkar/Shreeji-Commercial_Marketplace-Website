import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    consent: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone) {
      alert('Please enter a valid mobile number.');
      return;
    }
    if (!formData.consent) {
      alert('Please consent to the privacy policy to proceed.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full h-full bg-[#F8F6F0] text-slate-900 p-5 sm:p-6 lg:p-7 flex flex-col justify-center relative overflow-hidden border-l border-[#DFC181]/40 shadow-inner">
      
      {/* Subtle decorative glow */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

      {/* BRAND LOGO */}
      <div className="flex justify-center mb-3">
        <img
          src="/images/skylogo.png"
          alt="Sky View Logo"
          className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm"
        />
      </div>

      {/* TOP SUBHEADER */}
      <div className="text-center mb-2">
        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C5A059] uppercase font-sans">
          {projectDetails.taglineSub}
        </span>
      </div>

      {/* SUBTITLE */}
      <p className="text-slate-700 text-xs sm:text-sm text-center font-medium mb-1">
        Ground Floor Retail Shops (01-24) & 1st & 2nd Floor Offices
      </p>

      {/* COMMERCIAL MARKETPLACE HIGHLIGHT */}
      <div className="text-center my-1">
        <span className="text-lg sm:text-xl font-bold tracking-wide text-[#183342] drop-shadow-sm font-serif uppercase">
          Ground + 2 Commercial Floors
        </span>
      </div>

      {/* DIVIDER & WALKTHROUGH SUBTITLE */}
      <div className="relative my-4 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#DFC181]/40" />
        </div>
        <div className="relative bg-[#F8F6F0] px-4 text-center">
          <span className="block text-xs font-bold tracking-widest text-[#183342] uppercase font-sans">
            GET LUXURY WALKTHROUGH
          </span>
          <span className="block text-[11px] text-[#C5A059] font-medium tracking-wide">
            Tailored For You
          </span>
        </div>
      </div>

      {/* SUCCESS MESSAGE OR FORM */}
      {isSubmitted ? (
        <div className="bg-white border border-[#C5A059]/40 rounded p-6 text-center space-y-3 shadow-md">
          <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto" />
          <h3 className="text-xl font-serif font-bold text-[#183342]">Inquiry Submitted!</h3>
          <p className="text-sm text-slate-600">
            Thank you, <span className="text-[#183342] font-semibold">{formData.name || 'Valued Buyer'}</span>. Our direct representative will contact you on{' '}
            <span className="text-[#183342] font-semibold">{formData.countryCode} {formData.phone}</span>.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', countryCode: '+91', phone: '', consent: true });
            }}
            className="mt-2 text-xs text-[#C5A059] underline hover:text-[#183342] cursor-pointer font-bold"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          
          {/* NAME FIELD */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all font-medium shadow-sm"
            />
          </div>

          {/* EMAIL FIELD */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email (optional)"
              className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all font-medium shadow-sm"
            />
          </div>

          {/* PHONE FIELD GROUP */}
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="bg-white text-slate-900 text-sm px-3 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5A059] cursor-pointer font-bold shadow-sm"
            >
              <option value="+91">India (+91)</option>
              <option value="+1">USA (+1)</option>
              <option value="+971">UAE (+971)</option>
              <option value="+44">UK (+44)</option>
            </select>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number *"
              className="w-full bg-white text-slate-900 placeholder-slate-400 text-sm px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all font-medium shadow-sm"
            />
          </div>

          {/* CONSENT CHECKBOX */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-[#183342] bg-white border-slate-400 rounded focus:ring-[#C5A059] accent-[#183342] cursor-pointer"
            />
            <label htmlFor="consent" className="text-[11px] leading-tight text-slate-600 font-medium">
              I consent to the use of provided data in accordance with the{' '}
              <a href="#privacy" className="underline hover:text-[#183342] transition-colors font-bold text-[#C5A059]">
                privacy policy
              </a>
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B34] hover:from-[#DFC181] hover:to-[#C5A059] text-slate-950 font-extrabold py-3.5 px-6 rounded-sm tracking-widest text-xs sm:text-sm uppercase shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99] border border-[#DFC181]/40"
          >
            {loading ? (
              <span className="inline-block animate-pulse">Processing...</span>
            ) : (
              <span>GET IT NOW</span>
            )}
          </button>
        </form>
      )}

      {/* BOTTOM TRUST BADGE */}
      <div className="mt-4 pt-3 border-t border-[#DFC181]/30 flex items-center justify-center gap-1.5 text-[11px] text-slate-600 font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
        <span>100% Privacy Guaranteed & Direct Developer Support</span>
      </div>

    </div>
  );
};

export default LeadForm;
