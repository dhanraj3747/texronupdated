import React from 'react';
import { Link } from 'react-router';

// 📷 Asset Imports
import pi1 from "../../../imageAssets/p1.jpg"; 
import pi2 from "../../../imageAssets/p2.jpg"; 
import pi3 from "../../../imageAssets/p3.jpg";

export default function ProcessInstruments() {
  const instrumentItems = [
    "Pressure transmitter",
    "Pressure switch",
    "Temperature transmitter",
    "RTD",
    "Thermocouple",
    "Flow transmitter",
    "Level transmitter",
    "Level switch",
    "Speed sensor",
    "Position sensor",
    "Digital Indicators",
    "PID Controller",
    "Flow meter & Totalizer"
  ];

  const imagesList = [
    { src: pi1, alt: "Field Instruments - Thermocouple Assembly" },
    { src: pi2, alt: "Field Instruments - Temperature Gauge" },
    { src: pi3, alt: "Field Instruments - RTD with Connection Head" },
  ];

  return (
    <div className="w-full">
      {/* Breadcrumb Header */}
      <div className="bg-[#1E3A5F] py-4 px-6 md:px-12">
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
          
          <span className="text-[#FF6B35] font-medium tracking-wide">
            Process Instruments
          </span>
        </div>
      </div>

      {/* Main Page Content */}
      <section className="py-12 px-4 max-w-7xl mx-auto font-sans text-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* ═══ EXTREME DIAGONAL STAGGERED IMAGES ═══ */}
          <div className="grid grid-cols-3 gap-5 pt-16 pb-20">
            {imagesList.map((img, index) => {
              const col = index % 3;
              // EXTREME diagonal: each image drops much further than the last
              const offsetClass = col === 0 ? 'mt-0' : col === 1 ? 'mt-28' : 'mt-56';
              
              return (
                <div 
                  key={index} 
                  className={`overflow-hidden rounded-lg shadow-md border border-gray-200 bg-gray-50 ${offsetClass}`}
                >
                  {img.src ? (
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full aspect-square flex items-center justify-center">
                      <span className="text-xs text-gray-400 italic">Image Space</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Content Section */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 tracking-wide m-0">
                Field Instruments
              </h2>
              <div className="flex items-center mt-2 space-x-1">
                <span className="h-0.5 w-10 bg-[#FF6B35]"></span>
                <span className="text-[#FF6B35] text-xs">◆</span>
                <span className="h-0.5 w-10 bg-[#FF6B35]"></span>
              </div>
            </div>

            <p className="text-base leading-relaxed text-gray-600 text-justify">
              Texron, being in the power plant field for decades gathered a rich knowledge in selection of type, range and make of field instruments for various applications. We supply following field instrumentation products for Turbine and auxiliary systems from proven manufacturers worldwide.
            </p>

            {/* Instrument List */}
            <ul className="space-y-3 pl-1">
              {instrumentItems.map((item, index) => (
                <li key={index} className="flex items-start text-sm md:text-base text-gray-700">
                  <span className="text-[#FF6B35] mr-3 flex-shrink-0 mt-1" aria-hidden="true">
                    ➔
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}