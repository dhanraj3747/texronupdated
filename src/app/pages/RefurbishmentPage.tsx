import { Link } from "react-router";
import { Shield, AlertTriangle, Zap, Check, ArrowRight, Settings, Cpu, ArrowBigRightDash } from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";

// 📷 Asset imports using explicit three-level-up folder depth relative strings
import rr1Refurb from "../../../imageAssets/rr1.jpg";
import rr2Refurb from "../../../imageAssets/rr2.jpg";
import rr9Refurb from "../../../imageAssets/rr9.jpg"; 
import rr3Gov from "../../../imageAssets/rr3.jpg";
import rr4Gov from "../../../imageAssets/rr4.jpg";
import rr5Prot from "../../../imageAssets/rr5.jpg";
import rr6Prot from "../../../imageAssets/rr6.jpg";

export function RefurbishmentPage() {
  return (
    <div>
      {/* --- HERO SECTION --- */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[{ label: "Products", path: "/products" }, { label: "Refurbishment & Retrofits" }]} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 mb-10 items-center">
            <div className="lg:col-span-7 max-w-4xl">
              <div className="font-[var(--font-mono)] text-[11px] text-[#FF6B35] tracking-widest uppercase mb-2">
                Life Extension & Modernization
              </div>
              <h1 className="font-[var(--font-heading)] text-[32px] md:text-[46px] leading-tight mb-4">
                Refurbishment, Retrofit & Upgrades
              </h1>
              <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed text-justify mb-6">
             A machine renovated is a machine manufactured. Refurbishment concept is green going, cost saving,  utilizing available
             resource and elevating to better performance.We are providing out of box innovative methods  with a condition based
             approach to ensure the best availability of the Steam Turbo Generator but with transparency and value for money.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-2.5 rounded-lg text-[13px] transition-colors shadow-sm">
                  Request Technical Survey
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="rounded-xl overflow-hidden border border-white/15 bg-[#0F1A28] p-2 shadow-lg flex items-center justify-center">
                <img 
                  src={rr1Refurb} 
                  alt="Industrial Turbine Mechanical Overhaul Inspection" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-4 border-t border-white/10">
            <div className="rounded-xl overflow-hidden border border-white/15 bg-[#0F1A28] p-2 shadow-lg flex items-center justify-center h-[260px] md:h-[320px]">
              <img 
                src={rr2Refurb} 
                alt="Turbine Rotor Re-blading and Alignment Workshop Processing" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/15 bg-[#0F1A28] p-2 shadow-lg flex items-center justify-center h-[260px] md:h-[320px]">
              <img 
                src={rr9Refurb} 
                alt="Advanced Turbine Component Refurbishment Stage" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: ELECTRONIC GOVERNOR UPGRADES --- */}
      <section className="py-14 md:py-20 bg-white border-t border-[#E5E7EB]">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#1A2A3A] mb-2">
                Electronic Governor Retrofits
              </h2>
              <div className="w-12 h-1 bg-[#FF6B35] rounded mb-4" />
              <p className="text-[14px] text-[#374151] leading-relaxed mb-4">
                Steam turbines are one of the most popular and biggest sector of power generation around the globe. They are categorised according to the capacity and application as Utility, Industrial steam turbines and drive turbines.
              </p>
              <p className="text-[14px] text-[#374151] leading-relaxed mb-4">
                The governing function steam turbines includes speed control, load control, turbine parameter control (inlet pressure, exhaust pressure, admission / injection pressure), process parameters of driven equipment (pressure, flow, speed, load etc).
              </p>
              <p className="text-[14px] text-[#374151] leading-relaxed mb-4">
                We offer wide range of control solution that matches to the application, criticality, cost effective system to enhance the performance of the machine.
              </p>
              <p className="text-[14px] text-[#374151] leading-relaxed mb-4">
                For system renewal, we prefer to offer new system for the purpose of extending the life time of the machine with improved safety, reliability and easy maintenance. Whereas for system upgrades, enhancing its efficiency, operation stability, providing redundancies, better response and added safety features.
              </p>
              <p className="text-[14px] text-[#374151] leading-relaxed">
                Our R&M solution covers field instruments, governing system, vibration monitoring system, over speed protection, PLC / DCS system, 2/3 voting logic trip block to improve the turbine reliability, safety and efficiency.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <div className="bg-[#F8F9FA] rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden h-[340px] md:h-[440px]">
                <img 
                  src={rr3Gov} 
                  alt="Digital Micro-Controller Electronic Governor Panel Enclosure" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F8F9FA] rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden h-[340px] md:h-[440px]">
                <img 
                  src={rr4Gov} 
                  alt="Electro-Hydraulic Actuator System Calibration Setup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TURBINE PROTECTION SYSTEMS --- */}
      <section className="py-14 md:py-20 bg-[#1A2A3A] text-white">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full order-2 lg:order-1">
              <div className="bg-white/5 rounded-xl border border-white/10 shadow-md overflow-hidden h-[340px] md:h-[440px]">
                <img 
                  src={rr5Prot} 
                  alt="Industrial Machinery Automated Trip Block Protection Module" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 shadow-md overflow-hidden h-[340px] md:h-[440px]">
                <img 
                  src={rr6Prot} 
                  alt="Safety Monitoring Transducer Signal Control Panel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl mb-2">
                Turbine Protection Systems (TPS)
              </h2>
              <div className="w-12 h-1 bg-[#FF6B35] rounded mb-4" />
              <p className="text-white/80 text-[14px] leading-relaxed mb-4">
                As a part of retrofit solution we provide turbine trip device based on 2 out of 3 voting logic in place of existing single trip solenoid. This ensure the TMR (Triple Modular Redundancy) function till the end of trip mechanism, instead of limiting only up to the control system. We manufacture and supply 2 out of 3 voting hydraulic trip block. For specific requirements the product is available with SIL-3 certification.
              </p>
              <p className="text-white/80 text-[14px] leading-relaxed">
                <strong className="text-white font-semibold">Functionality:</strong> The safety trip block contains 3 solenoid operated valves. The turbine trip valve is actuated only if minimum 2 solenoids are shut down. The trip block is hydraulically operated device, which needs oil and electrical auxiliary power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-12 bg-[#FF6B35] text-white">
        <div className="site-shell text-center">
          <h2 className="font-[var(--font-heading)] text-xl md:text-2xl mb-3">Maximize Asset Lifespan Metrics</h2>
          <p className="text-[14px] text-white/80 mb-6 max-w-xl mx-auto">
            Consult our expert diagnostics engineers to audit, overhaul, or retrofit your power generation infrastructure.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[#FF6B35] px-6 py-2.5 rounded text-[13px] font-medium hover:bg-white/90 transition-colors">
            Contact Project Engineering Group
          </Link>
        </div>
      </section>
    </div>
  );
}