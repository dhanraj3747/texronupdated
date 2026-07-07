import React from 'react';
import { useNavigate } from "react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { TexronLogo } from "../components/TexronLogo"; 

export function Footer() {
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Services", path: "/services" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Customers", path: "/customers" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const specializationLinks = [
    { label: "Steam Turbine" },
    { label: "Steam Turbine Retrofit" },
    { label: "Hydraulic Turbine Retrofit" },
    { label: "RLA Studies" },
    { label: "Long-Term Service Agreements" },
    { label: "Electrical & Automation" },
  ];

  return (
    <footer className="bg-[#1A2A3A] text-white">
      <div className="site-shell py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <div className="mb-4 max-w-[200px]">
            {/* FIXED: Removed the harsh brightness/contrast filter so colors match the original header brand exactly */}
            <TexronLogo className="w-full h-auto opacity-95 hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-[13px] text-white/50 leading-relaxed">
            Systems Integrators and Custom Manufacturers. 28 years of turbine diagnostics and rapid response engineering.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-[var(--font-heading)] text-[12px] tracking-wider text-white/30 mb-4">NAVIGATION</h4>
          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className="block text-[13px] text-white/50 hover:text-white transition-colors text-left bg-transparent border-none cursor-pointer p-0"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h4 className="font-[var(--font-heading)] text-[12px] tracking-wider text-white/30 mb-4">SPECIALIZATIONS</h4>
          <div className="space-y-2">
            {specializationLinks.map((link, idx) => (
              <p
                key={idx}
                className="text-[13px] text-white/50 selection:bg-transparent"
              >
                {link.label}
              </p>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-[var(--font-heading)] text-[12px] tracking-wider text-white/30 mb-4">REACH US</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-[#FF6B35] shrink-0" />
              <span className="text-[13px] text-white/50">Peenya Industrial Area, Phase IV, Bengaluru 560058</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF6B35] shrink-0" />
              <a href="tel:+918904017774" className="text-[13px] text-white/50 hover:text-white font-[var(--font-mono)]">+91 89040 17774</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF6B35] shrink-0" />
              <a href="tel:+918904017775" className="text-[13px] text-white/50 hover:text-white font-[var(--font-mono)]">+91 89040 17775</a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
              <a href="https://wa.me/918904017774" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 hover:text-white">WhatsApp</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" />
              <a href="mailto:info@texronpower.com" className="text-[13px] text-white/50 hover:text-white">info@texronpower.com</a>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-[#FF6B35] shrink-0" />
              <span className="text-[13px] text-white/50">24/7 Emergency Response</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-shell py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/20 font-[var(--font-mono)]">
            &copy; 2026 Texron Power Plant Systems Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-[11px] text-white/20 font-[var(--font-mono)]">
            CIN: U29100KA1998PTC023456 | ISO 9001:2015
          </p>
        </div>
      </div>
    </footer>
  );
}