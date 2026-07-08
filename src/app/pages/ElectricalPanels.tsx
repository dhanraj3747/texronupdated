import React from 'react';
import { Link } from 'react-router'; // Matches your project routing

// 📷 Asset Imports - 6 Electrical Panel Images (2 existing + 4 new)
import ee1 from "../../../imageAssets/ee1.jpg";
import ee2 from "../../../imageAssets/ee2.jpg";
import ee3 from "../../../imageAssets/ee3.jpeg";
import ee4 from "../../../imageAssets/ee4.jpg";
import ee5 from "../../../imageAssets/ee5.jpg";
import ee6 from "../../../imageAssets/ee6.jpg";

export default function ElectricalPanels() {
  const panelFeatures = [
    "Turbine control panel with Electronic governor, vibration monitoring system, over speed protection & safety protection schemes.",
    "Generator metering, protection relays & synchronising panel",
    "Analogue & Digital AVR cum excitation system.",
    "Lightning Arrester, Surge Capacitor & Potential Transformer panel",
    "NGR / NGTR panel",
    "MCC panel",
    "PCC panel",
    "Bus duct",
    "DC motor starter panel for Emergency Oil Pump",
    "ACDB & DCDB",
    "PLC / DCS based automation balance of plant",
    "Plant load management system"
  ];

  const imagesList = [
    { src: ee1, alt: "" },
    { src: ee2, alt: "" },
    { src: ee3, alt: "" },
    { src: ee4, alt: "" },
    { src: ee5, alt: "" },
    { src: ee6, alt: "" },
  ];

  return (
    <div className="w-full">
      {/* 🧭 Dark Blue Breadcrumb Header */}
      <div className="bg-[#1a365d] py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center space-x-3 text-sm md:text-base font-sans select-none">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
            <svg 
              className="w-4 h-4 md:w-5 md:h-5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>

          <span className="text-gray-500 font-medium text-xs md:text-sm">&gt;</span>

          <Link to="/products" className="text-gray-400 hover:text-white transition-colors tracking-wide">
            Products
          </Link>

          <span className="text-gray-500 font-medium text-xs md:text-sm">&gt;</span>

          <span className="text-[#f97316] font-medium tracking-wide">
            Power & Control Panels
          </span>
        </div>
      </div>

      {/* Main Page Content */}
      <section className="py-12 px-4 max-w-7xl mx-auto font-sans text-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ═══ 6 IMAGES IN 2x3 GRID WITH STYLING ═══ */}
          <div className="grid grid-cols-2 gap-5">
            {imagesList.map((img, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image container with fixed aspect ratio */}
                <div className="relative w-full h-[220px] overflow-hidden bg-gray-100">
                  {img.src ? (
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-sm text-gray-400 italic">Image Space</span>
                    </div>
                  )}

                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

               

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-xl" />
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-wide m-0">
                Power & Control Panels
              </h2>
              <div className="flex items-center mt-2 space-x-1">
                <span className="h-0.5 w-10 bg-amber-500"></span>
                <span className="text-amber-500 text-xs">◆</span>
                <span className="h-0.5 w-10 bg-amber-500"></span>
              </div>
            </div>

            <p className="text-base leading-relaxed text-gray-600">
              Texron offers full-fledged power and control panels for steam turbine 
              generator and hydro turbine generator packages. Our TG panels package 
              includes the following.
            </p>

            {/* Bulleted Content List */}
            <ul className="space-y-3 pl-1">
              {panelFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-sm md:text-base text-gray-700">
                  <span className="text-amber-500 mr-3 flex-shrink-0 mt-1" aria-hidden="true">
                    ➔
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}