import React from 'react';
import { projectDetails } from '../data/projectData';

const FooterSection = () => {
  return (
    <footer id="contact" className="w-full bg-[#FAF7F2] py-12 sm:py-16 border-t border-[#E8E2D8] text-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* CENTERED LOGO */}
        <div className="mb-6 flex flex-col items-center">
          <div className="flex items-baseline gap-1.5 mb-1">
            <span className="text-[#C07858] text-xs font-bold tracking-widest font-serif uppercase">THE</span>
            <span className="text-slate-900 font-serif font-bold text-3xl tracking-wider">
              LIVIN
            </span>
          </div>
          <span className="text-xs font-semibold tracking-widest text-[#C07858] uppercase font-sans">
            SUPREME REALTY
          </span>
        </div>

        {/* MAHARERA REGISTRATION TEXT */}
        <p className="text-slate-600 text-xs sm:text-sm text-center max-w-3xl leading-relaxed mb-8 font-medium">
          The project has been registered under the name <strong className="text-slate-900 font-bold">{projectDetails.name}</strong> via MahaRERA registration number:{' '}
          <strong className="text-slate-900 font-bold">P51700013160</strong>, and is available on the website{' '}
          <a
            href="https://maharera.maharashtra.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C07858] font-bold underline hover:text-[#6B241A] transition-colors"
          >
            https://maharera.maharashtra.gov.in
          </a>.
        </p>

        {/* ADDRESSES & CONTACT DETAILS CARD (MATCHING ATTACHED IMAGE) */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-200/80 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-left mb-10">
          
          {/* LEFT COLUMN: ADDRESSES */}
          <div className="space-y-4">
            <div className="pb-2 border-b-2 border-[#C07858] inline-block">
              <h3 className="font-sans text-xs sm:text-sm font-bold tracking-widest text-slate-900 uppercase">
                ADDRESSES
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
              <div>
                <strong className="text-slate-900 font-bold block">Site Address:</strong>
                <span className="text-slate-600">
                  Opp. Janki Ram Mandir & Shiv Mandir, Near Ceremony Banquet Hall, Near Shitala Mata Mandir, Kalyan Bhiwandi Road, Koan Gaon, Kalyan (West).
                </span>
              </div>

              {/* <div>
                <strong className="text-slate-900 font-bold block">Sales Office:</strong>
                <span className="text-slate-600">
                  Opp. Janki Ram Mandir & Shiv Mandir, Near Ceremony Banquet Hall, Kalyan Bhiwandi Road, Koan Gaon, Kalyan (West).
                </span>
              </div> */}

              <div>
                <strong className="text-slate-900 font-bold block">Head Office:</strong>
                <span className="text-slate-600">
                  Supreme Realty, Kalyan Bhiwandi Road, Koan Gaon, Kalyan (West).
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT DETAILS */}
          <div className="space-y-4">
            <div className="pb-2 border-b-2 border-[#C07858] inline-block">
              <h3 className="font-sans text-xs sm:text-sm font-bold tracking-widest text-slate-900 uppercase">
                CONTACT DETAILS
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
              <div>
                <strong className="text-slate-900 font-bold block">Phone:</strong>
                <a href={`tel:${projectDetails.contactPhone}`} className="text-[#C07858] font-bold hover:underline">
                  +91 8291919159
                </a>
                <span className="text-slate-600"> / </span>
                <a href="tel:+918291919169" className="text-[#C07858] font-bold hover:underline">
                  +91 8291919169
                </a>
              </div>

              <div>
                <strong className="text-slate-900 font-bold block">Email:</strong>
                <a href={`mailto:${projectDetails.contactEmail}`} className="text-[#C07858] font-bold hover:underline">
                  {projectDetails.contactEmail}
                </a>
              </div>

              <div>
                <strong className="text-slate-900 font-bold block">Website:</strong>
                <a
                  href="https://www.supremerealty.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C07858] font-bold hover:underline"
                >
                  www.supremerealty.co.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM DISCLAIMER (MATCHING ATTACHED IMAGE) */}
        <p className="text-[11px] sm:text-xs text-slate-500 text-center italic max-w-4xl leading-relaxed font-normal">
          Disclaimer: The project is under development phase and the layout plan, number of floors, common areas, and all dimensions may change due to planning, regulatory, approval, or construction contingencies. The amenities shown are for reference purposes only and are not being offered as standard amenities. Images used in the brochure are for representational purposes only. The actual price will depend on the size and floor of the unit, and the price is excluding government duties and taxes.
        </p>

        {/* COPYRIGHT */}
        <div className="mt-8 pt-4 border-t border-slate-300/60 w-full text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {projectDetails.name} by Supreme Realty. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
