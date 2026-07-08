import React from 'react';
import { Link } from 'react-router';

// 📷 Asset Imports - 9 New Instrument Images
import img1 from "../../../imageAssets/casing-bolt-heater.jpeg";
import img2 from "../../../imageAssets/Vibration probe.jpeg";
import img3 from "../../../imageAssets/Speed sensor.jpeg";
import img4 from "../../../imageAssets/PT 100 Temp Thermocouple.jpeg";
import img5 from "../../../imageAssets/Pressure transmitter.jpeg";
import img6 from "../../../imageAssets/PID controller.jpeg";
import img7 from "../../../imageAssets/Magnetic level.jpeg";
import img8 from "../../../imageAssets/LVDT position transmitter.jpeg";
import img9 from "../../../imageAssets/Flow transmitter.jpeg";


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
    { src: img1, alt: "Casing Bolt Heater" },
    { src: img2, alt: "Vibration Probe" },
    { src: img3, alt: "Speed Sensor" },
    { src: img4, alt: "PT100 Thermocouple" },
    { src: img5, alt: "Pressure Transmitter" },
    { src: img6, alt: "PID Controller" },
    { src: img7, alt: "Magnetic Level Gauge" },
    { src: img8, alt: "LVDT Position Transmitter" },
    { src: img9, alt: "Flow Transmitter" },
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

          {/* ═══ 9 IMAGES IN 3x3 RIGHT DIAGONAL STAGGER ═══ */}
          <div className="grid grid-cols-3 gap-4 pt-8 pb-12">
            {imagesList.map((img, index) => {
              const col = index % 3;
              // RIGHT diagonal: column 0 drops most, column 2 drops least
              const offsetClass = col === 0 ? 'mt-16' : col === 1 ? 'mt-8' : 'mt-0';

              return (
                <div 
                  key={index} 
                  className={`overflow-hidden rounded-lg shadow-md border border-gray-200 bg-white ${offsetClass}`}
                  style={{ minHeight: '140px' }}
                >
                  {img.src ? (
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-[160px] object-contain hover:scale-105 transition-transform duration-300 p-2"
                    />
                  ) : (
                    <div className="w-full h-[160px] flex items-center justify-center">
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