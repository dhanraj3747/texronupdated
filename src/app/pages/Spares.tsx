import React from 'react';
import { Link } from 'react-router';

// 📷 Asset Imports
import sp1 from "../../../imageAssets/sp1.jpg"; 
import sp2 from "../../../imageAssets/sp2.jpg"; 
import sp3 from "../../../imageAssets/sp3.jpg";
import sp4 from "../../../imageAssets/sp4.jpg";
import sp5 from "../../../imageAssets/sp5.jpg";
import sp6 from "../../../imageAssets/sp6.jpg";
import sp7 from "../../../imageAssets/sp7.jpg";
import sp8 from "../../../imageAssets/sp8.jpg";
import sp9 from "../../../imageAssets/sp9.jpg";

export default function Spares() {
  const spareItems = [
    "Labyrinth seals",
    "Diaphragms",
    "Casing bolts",
    "Throttle valves",
    "Springs",
    "Bearings",
    "Safety components",
    "Hydraulic components",
    "Rotor blades",
    "Complete new turbine rotor"
  ];

  const imagesList = [
    { src: sp1, alt: "Turbine Spares 1" },
    { src: sp2, alt: "Turbine Spares 2" },
    { src: sp3, alt: "Turbine Spares 3" },
    { src: sp4, alt: "Turbine Spares 4" },
    { src: sp5, alt: "Turbine Spares 5" },
    { src: sp6, alt: "Turbine Spares 6" },
    { src: sp7, alt: "Turbine Spares 7" },
    { src: sp8, alt: "Turbine Spares 8" },
    { src: sp9, alt: "Turbine Spares 9" },
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
            Spares
          </span>
        </div>
      </div>

      {/* Main Page Content */}
      <section className="py-12 px-4 max-w-7xl mx-auto font-sans text-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Diagonal Staggered Images Grid - 3x3 with vertical offsets */}
          <div className="grid grid-cols-3 gap-4">
            {imagesList.map((img, index) => {
              const col = index % 3;
              const offsetClass = col === 0 ? 'mt-0' : col === 1 ? 'mt-10' : 'mt-20';
              
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
                Spare Parts Managements
              </h2>
              <div className="flex items-center mt-2 space-x-1">
                <span className="h-0.5 w-10 bg-[#FF6B35]"></span>
                <span className="text-[#FF6B35] text-xs">◆</span>
                <span className="h-0.5 w-10 bg-[#FF6B35]"></span>
              </div>
            </div>

            <p className="text-base leading-relaxed text-gray-600 text-justify">
              We develop turbine spares of any make and any capacity, of STC. Our development process not only means the dimensions, but also the similar or even better metallurgy to conform the application and better performance. Our range of spare parts management is right from a bolt till a new rotor.
            </p>

            {/* Spare Parts List */}
            <ul className="space-y-3 pl-1">
              {spareItems.map((item, index) => (
                <li key={index} className="flex items-start text-sm md:text-base text-gray-700">
                  <span className="text-[#FF6B35] mr-3 flex-shrink-0 mt-1" aria-hidden="true">
                    ➔
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Gear box Section */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gear box spares:
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 text-justify">
                Our capability is extended up to providing expert solutions for high speed gear box that includes re-engineering, re-rating, retrofit, spares and supply of new gear box up to 50 MW capacity.
              </p>
            </div>

               {/* Gear box Section */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Electrical instrumentation spares:
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 text-justify">
                We offer wide range of electrical instrumentation spares right from minor components to complete system.Our experience applies to supply either original component or the equilent alternative products to meet the operational requirements.
              </p>
            </div>

         
          </div>

        </div>
      </section>
    </div>
  );
}