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
    <div className="w-full h-full bg-[#141414] text-white p-5 sm:p-6 lg:p-7 flex flex-col justify-center relative overflow-hidden border-l border-white/5">
      
      {/* Subtle decorative glow */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#C07858]/10 rounded-full blur-3xl pointer-events-none" />

      {/* TOP SUBHEADER */}
      <div className="text-center mb-1">
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C07858] uppercase font-sans">
          {projectDetails.taglineSub}
        </span>
      </div>

      {/* MAIN TITLE */}
      <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center tracking-tight text-white mb-2">
        {projectDetails.name}
      </h1>

      {/* SUBTITLE */}
      <p className="text-slate-300 text-xs sm:text-sm text-center font-medium mb-1">
        {projectDetails.subheading}
      </p>

      {/* BOUTIQUE TWIN TOWERS HIGHLIGHT */}
      <div className="text-center my-1">
        <span className="text-2xl sm:text-2xl font-bold tracking-wide text-[#C07858] drop-shadow-sm font-serif uppercase">
          Boutique Twin Towers
        </span>
      </div>

      {/* DIVIDER & WALKTHROUGH SUBTITLE */}
      <div className="relative my-4 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative bg-[#141414] px-4 text-center">
          <span className="block text-xs font-bold tracking-widest text-slate-200 uppercase font-sans">
            GET LUXURY WALKTHROUGH
          </span>
          <span className="block text-[11px] text-[#C07858] font-medium tracking-wide">
            Tailored For You
          </span>
        </div>
      </div>

      {/* SUCCESS MESSAGE OR FORM */}
      {isSubmitted ? (
        <div className="bg-[#1F1F1F] border border-[#C07858]/30 rounded p-6 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-[#C07858] mx-auto" />
          <h3 className="text-xl font-serif font-bold text-white">Inquiry Submitted!</h3>
          <p className="text-sm text-slate-300">
            Thank you, <span className="text-[#C07858] font-semibold">{formData.name || 'Valued Buyer'}</span>. Our direct representative will contact you on{' '}
            <span className="text-[#C07858] font-semibold">{formData.countryCode} {formData.phone}</span>.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', countryCode: '+91', phone: '', consent: true });
            }}
            className="mt-2 text-xs text-[#C07858] underline hover:text-white cursor-pointer"
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
              className="w-full bg-[#FAF7F2] text-slate-900 placeholder-slate-500 text-sm px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C07858] transition-all"
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
              className="w-full bg-[#FAF7F2] text-slate-900 placeholder-slate-500 text-sm px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C07858] transition-all"
            />
          </div>

          {/* PHONE FIELD GROUP */}
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="bg-[#FAF7F2] text-slate-900 text-sm px-3 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C07858] cursor-pointer font-medium"
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
              className="w-full bg-[#FAF7F2] text-slate-900 placeholder-slate-500 text-sm px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C07858] transition-all"
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
              className="mt-1 w-4 h-4 text-[#6B241A] bg-[#FAF7F2] border-slate-400 rounded focus:ring-[#C07858] accent-[#6B241A] cursor-pointer"
            />
            <label htmlFor="consent" className="text-[11px] leading-tight text-slate-300">
              I consent to the use of provided data in accordance with the{' '}
              <a href="#privacy" className="underline hover:text-[#C07858] transition-colors">
                privacy policy
              </a>
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-[#6B241A] hover:bg-[#521c14] text-white font-extrabold py-3.5 px-6 rounded-sm tracking-widest text-xs sm:text-sm uppercase shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99]"
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
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
        <ShieldCheck className="w-3.5 h-3.5 text-[#C07858]" />
        <span>100% Privacy Guaranteed & Direct Developer Support</span>
      </div>

    </div>
  );
};

export default LeadForm;
