import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle } from 'lucide-react';
import { projectDetails } from '../data/projectData';

const BrochureModal = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded shadow-2xl max-w-md w-full overflow-hidden relative border border-[#C07858]/30">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-300 hover:text-white bg-black/40 hover:bg-black/70 p-1.5 rounded-full transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="bg-[#141414] p-6 text-white text-center relative border-b border-[#C07858]/30">
          <div className="w-12 h-12 bg-[#C07858]/20 text-[#C07858] rounded-full flex items-center justify-center mx-auto mb-2">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold">{projectDetails.name}</h3>
          <p className="text-xs text-[#C07858] font-semibold tracking-wider uppercase mt-0.5">Official E-Brochure & Floor Plans</p>
        </div>

        {/* BODY */}
        <div className="p-6">
          {downloaded ? (
            <div className="text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-serif text-xl font-bold text-slate-900">Brochure Ready!</h4>
              <p className="text-xs text-slate-600">
                Your download has started. Thank you for your interest in {projectDetails.name}.
              </p>
              <button
                onClick={() => {
                  setDownloaded(false);
                  onClose();
                }}
                className="w-full bg-[#141414] text-white py-2.5 rounded font-semibold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-4">
              <p className="text-xs text-slate-600 text-center font-medium">
                Enter your details to instantly view & download the complete high-resolution brochure.
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3 py-2.5 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-[#C07858] focus:outline-none bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 Mobile Number"
                  className="w-full px-3 py-2.5 border border-slate-300 rounded text-sm focus:ring-2 focus:ring-[#C07858] focus:outline-none bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#6B241A] hover:bg-[#521c14] text-white font-extrabold py-3.5 rounded text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow cursor-pointer transition-all"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD E-BROCHURE PDF</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default BrochureModal;
