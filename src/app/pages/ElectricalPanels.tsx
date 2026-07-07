import React from 'react';
import { Link } from 'react-router'; // Matches your project routing

// 📷 Asset Imports using explicit three-level-up folder format
import ee1Panel from "../../../imageAssets/ee1.jpg";
import ee2Panel from "../../../imageAssets/ee4.jpg";

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

  return (
    <div className="w-full">
      {/* 🧭 Dark Blue Breadcrumb Header - Matching Screenshot 2026-06-20 192619.png */}
      <div className="bg-[#1a365d] py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center space-x-3 text-sm md:text-base font-sans select-none">
          {/* Minimalist Home Icon Link */}
          <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
            <svg 
              className="w-4 h-4 md:w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          
          {/* Chevron Separator */}
          <span className="text-gray-500 font-medium text-xs md:text-sm">&gt;</span>
          
          {/* Products Section Link */}
          <Link to="/products" className="text-gray-400 hover:text-white transition-colors tracking-wide">
            Products
          </Link>
          
          {/* Chevron Separator */}
          <span className="text-gray-500 font-medium text-xs md:text-sm">&gt;</span>
          
          {/* Active Particular Page Link */}
          <span className="text-[#f97316] font-medium tracking-wide">
            Power & Control Panels
          </span>
        </div>
      </div>

      {/* Main Page Content */}
      <section className="py-12 px-4 max-w-7xl mx-auto font-sans text-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Images Grid Section with an explicit deep staggered diagonal layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-24">
            {/* First Image - Snug at the top left */}
            <div className="overflow-hidden rounded-lg shadow-md border border-gray-200 h-fit">
              <img 
                src={ee1Panel} 
                alt="Texron Power and Control Panels Setup 1" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Second Image - Shifted deep down to create a distinct diagonal underneath */}
            <div className="overflow-hidden rounded-lg shadow-md border border-gray-200 h-fit transform sm:mt-48 lg:mt-64 transition-transform duration-300">
              <img 
                src={ee2Panel} 
                alt="Texron Power and Control Panels Setup 2" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-top space-y-6">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-wide m-0">
                Power & Control Panels
              </h2>
              {/* Minimalist divider line representing the logo asset look */}
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