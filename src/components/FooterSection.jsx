import React from 'react';
import { projectDetails } from '../data/projectData';

const FooterSection = () => {
  return (
    <footer id="contact" className="w-full bg-[#F8F6F0] py-14 sm:py-20 text-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center reveal reveal-up">

        {/* TOP ROW: LOGO & MAHARERA QR CODE */}
        <div className="mb-7 flex items-center justify-center gap-6 sm:gap-10">
          <a href="#home" className="flex items-center">
            <img
              src="/images/skylogo.png"
              alt="Shah Group & Sky View Shreeji Icon Logo"
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </a>

          {/* VERTICAL DIVIDER */}
          <div className="h-16 sm:h-20 w-[1px] bg-[#DFC181]"></div>

          {/* QR CODE (NO BORDER OR BACKGROUND) */}
          <img
            src="/images/QRCODE.png"
            alt="MahaRERA QR Code"
            className="h-20 sm:h-24 w-auto object-contain"
          />
        </div>

        {/* MAHARERA REGISTRATION TEXT */}
        <p className="text-slate-600 text-xs sm:text-sm text-center max-w-3xl leading-relaxed mb-8 font-normal">
          The project has been registered under the name <strong className="text-[#183342] font-bold">SKY VIEW (SHREEJI ICON)</strong> via MahaRERA registration number:<br className="hidden sm:inline" />{' '}
          <strong className="text-[#183342] font-bold">P51700077646</strong>, and is available on the website{' '}
          <a
            href="https://maharerait.mahaonline.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A059] font-bold hover:underline transition-colors"
          >
            maharerait.mahaonline.gov.in
          </a>.
        </p>

        {/* ADDRESSES & CONTACT DETAILS CARD */}
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-slate-200/70 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 text-left my-2">

          {/* LEFT COLUMN: ADDRESSES */}
          <div>
            <div className="mb-5 inline-block border-b-2 border-[#C5A059] pb-1.5">
              <h3 className="font-sans text-xs sm:text-sm font-bold tracking-widest text-[#183342] uppercase">
                ADDRESSES
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <strong className="text-[#183342] font-bold block mb-1">
                  Site Address:
                </strong>
                <p className="text-slate-500 font-normal leading-relaxed">
                  Just opposite to upcoming Chikhloli Railway Station and also 500m to proposed Metro line, Ambernath (W), Maharashtra.
                </p>
              </div>

              <div>
                <strong className="text-[#183342] font-bold block mb-1">
                  Head Office:
                </strong>
                <p className="text-slate-500 font-normal leading-relaxed">
                  SHAH GROUP / SHREEJI ICON, Just opposite to upcoming Chikhloli Railway Station and also 500m to proposed Metro line, Ambernath (W).
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT DETAILS */}
          <div>
            <div className="mb-5 inline-block border-b-2 border-[#C5A059] pb-1.5">
              <h3 className="font-sans text-xs sm:text-sm font-bold tracking-widest text-[#183342] uppercase">
                CONTACT DETAILS
              </h3>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <strong className="text-[#183342] font-bold block mb-0.5">
                  Phone:
                </strong>
                <a
                  href={`tel:${projectDetails.contactPhone}`}
                  className="text-[#C5A059] font-bold hover:underline text-sm sm:text-base block"
                >
                  +91 8421 566 772
                </a>
              </div>

              <div>
                <strong className="text-[#183342] font-bold block mb-0.5">
                  Email:
                </strong>
                <a
                  href={`mailto:${projectDetails.contactEmail}`}
                  className="text-[#C5A059] font-bold hover:underline block"
                >
                  enquiry@shreejiicon.com
                </a>
              </div>

              <div>
                <strong className="text-[#183342] font-bold block mb-0.5">
                  MahaRERA Portal:
                </strong>
                <a
                  href="https://maharerait.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A059] font-bold hover:underline block"
                >
                  maharerait.mahaonline.gov.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM DISCLAIMER */}
        <p className="text-[10px] sm:text-[11px] text-slate-500 text-center italic max-w-4xl leading-relaxed font-normal my-6 px-2">
          Disclaimer: *T & C Apply. All images, pictorials, visuals, elevations, perspectives, illustrations, models, specifications, plans, designs, drawings, dimensions, maps, facilities, amenities, features, and other information/details herein are conceptual, indicative and for representation purpose only and are not to scale, and is subject to the approval of the respective authorities. All dimensions mentioned in the floor/unit plans are in feet. All dimensions of carpet area are from unfinished wall surface. Minor variations/tolerance of +/- 3% in carpet area may occur on account of design and/or construction exigencies.
        </p>

        {/* HORIZONTAL DIVIDER LINE */}
        <div className="w-full border-t border-slate-300/60 my-4 max-w-5xl"></div>

        {/* COPYRIGHT */}
        <div className="text-center text-xs text-slate-500 font-normal">
          © 2026 SKY VIEW - COMMERCIAL MARKETPLACE by Shah Group & Shreeji Icon. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
