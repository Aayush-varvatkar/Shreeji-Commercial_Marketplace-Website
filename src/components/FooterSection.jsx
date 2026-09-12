import React from 'react';
import { projectDetails } from '../data/projectData';

const FooterSection = () => {
  return (
    <footer id="contact" className="w-full bg-[#F8F6F0] py-12 sm:py-16 border-t border-[#DFC181]/40 text-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* CENTERED LOGO */}
        <div className="mb-6 flex flex-col items-center">
          <a href="#home" className="flex flex-col items-center group">
            <img
              src="/images/skylogo.png"
              alt="Sky View Logo"
              className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        {/* MAHARERA REGISTRATION TEXT */}
        <p className="text-slate-600 text-xs sm:text-sm text-center max-w-3xl leading-relaxed mb-8 font-medium">
          The project has been registered under the name <strong className="text-[#183342] font-bold">SKY VIEW (SHREEJI ICON)</strong> via MahaRERA registration number:{' '}
          <strong className="text-[#183342] font-bold">{projectDetails.mahaReraNo}</strong>, and is available on the website{' '}
          <a
            href="https://maharerait.mahaonline.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] font-bold underline hover:text-[#183342] transition-colors"
          >
            maharerait.mahaonline.gov.in
          </a>.
        </p>

        {/* ADDRESSES & CONTACT DETAILS CARD */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-200/80 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-left mb-10">
          
          {/* LEFT COLUMN: ADDRESSES */}
          <div className="space-y-4">
            <div className="pb-2 border-b-2 border-[#C5A059] inline-block">
              <h3 className="font-sans text-xs sm:text-sm font-bold tracking-widest text-[#183342] uppercase">
                ADDRESSES
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
              <div>
                <strong className="text-[#183342] font-bold block">Site Address:</strong>
                <span className="text-slate-600">
                  Next to Ganpat Dhaba, Ambernath (W), Maharashtra.
                </span>
              </div>

              <div>
                <strong className="text-[#183342] font-bold block">Head Office:</strong>
                <span className="text-slate-600">
                  SHAH GROUP / SHREEJI ICON, Next to Ganpat Dhaba, Ambernath (W).
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT DETAILS */}
          <div className="space-y-4">
            <div className="pb-2 border-b-2 border-[#C5A059] inline-block">
              <h3 className="font-sans text-xs sm:text-sm font-bold tracking-widest text-[#183342] uppercase">
                CONTACT DETAILS
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
              <div>
                <strong className="text-[#183342] font-bold block">Phone:</strong>
                <a href={`tel:${projectDetails.contactPhone}`} className="text-[#C5A059] font-bold hover:underline">
                  {projectDetails.contactPhone}
                </a>
              </div>

              <div>
                <strong className="text-[#183342] font-bold block">Email:</strong>
                <a href={`mailto:${projectDetails.contactEmail}`} className="text-[#C5A059] font-bold hover:underline">
                  {projectDetails.contactEmail}
                </a>
              </div>

              <div>
                <strong className="text-[#183342] font-bold block">MahaRERA Portal:</strong>
                <a
                  href="https://maharerait.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A059] font-bold hover:underline"
                >
                  maharerait.mahaonline.gov.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM DISCLAIMER */}
        <p className="text-[11px] sm:text-xs text-slate-500 text-center italic max-w-4xl leading-relaxed font-normal">
          Disclaimer: *T & C Apply. All images, pictorials, visuals, elevations, perspectives, illustrations, models, specifications, plans, designs, drawings, dimensions, maps, facilities, amenities, features, and other information/details herein are conceptual, indicative and for representation purpose only and are not to scale, and is subject to the approval of the respective authorities. All dimensions mentioned in the floor/unit plans are in feet. All dimensions of carpet area are from unfinished wall surface. Minor variations/tolerance of +/- 3% in carpet area may occur on account of design and/or construction exigencies.
        </p>

        {/* COPYRIGHT */}
        <div className="mt-8 pt-4 border-t border-slate-300/60 w-full text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {projectDetails.name} - {projectDetails.subName} by Shah Group & Shreeji Icon. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
