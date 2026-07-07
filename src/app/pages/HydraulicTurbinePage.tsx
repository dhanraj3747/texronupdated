import { Link } from "react-router";
import { 
  Cog, Wrench, Shield, Activity, Zap, 
  Check, ArrowRight, Cpu, Gauge, Settings 
} from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";
import { PageTimestamp } from "../components/PageTimestamp";

// ✅ Imported images (4 total)
import img15 from "../../../imageAssets/img15.jpeg";
import img1 from "../../../imageAssets/img1.jpeg";
import img38 from "../../../imageAssets/img38.jpeg";


const hydroServices = [
  "Engineering & manufacturing of Governing Hydraulic system (Valve Table Assembly)",
  "Panels for the Governor and Turbo Supervisory system",
  "Mechanical accessories — Speed sensing wheel, overspeed trip device",
  "Enhancing Automation & protection through speed, vibration & pressure sensors, level, temperature and moisture measurements",
  "Handling spares for Hydraulic valves, instruments and mechanical components",
  "Overhauling services for turbine and hydraulic systems",
  "Revamping and Automation of MIV and silt gates",
  "AMC for the valve table assembly and hydraulic systems"
];

const additionalParts = [
  "Teeth wheel for speed sensing",
  "Speed sensors",
  "Hydro mechanical Overspeed trip device"
];

const retrofitSolution = [
  "Comprehensive solution covers Kaplan, Francis and Pelton turbines",
  "Modern governing systems with advanced software & hardware packages",
  "Proportional valves, logic elements, and directional valves integrated in valve table assembly",
  "Electronic position feedback and instruments for accurate control",
  "Electronic governor control and turbo supervisory panel",
  "Complete integration and commissioning for seamless operation"
];

const technicalFeatures = [
  {
    icon: Cpu,
    title: "PLC based Governor Control",
    description: "Standalone control with SCADA integration, ensuring reliability with simplex and redundant hardware. Manages DC and proportional valve control, interfaces with third-party systems, and supports versatile load, position and level mode controls for diverse applications."
  },
  {
    icon: Settings,
    title: "Plant Auxiliary Control System",
    description: "Fully automatic sequence control with smooth switching between main and standby pumps via condition monitoring. Efficiently oversees turbine auxiliary systems for peak performance, facilitating automatic synchronization and loading for streamlined operations."
  },
  {
    icon: Shield,
    title: "Turbo Supervisory Control",
    description: "Ensures safety and reliability with electronic overspeed protection, vibration and bearing temperature monitoring, and real-time brake control system for optimizing turbine performance."
  }
];

const processFlow = [
  "Process and Application review through Technical survey",
  "Determine Control hardware and software preference as per requirements",
  "Preliminary engineering: Overview, System Architecture, IO counts, SCADA, OS, ES & HMI",
  "Selection of PLC components & detailed engineering",
  "Engineering design and manufacturing of Governor control panel",
  "Application software development  Logics and SCADA",
  "Installation & Commissioning"
];

export function HydraulicTurbinePage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[{ label: "Products", path: "/products" }, { label: "Hydro Electric Turbine" }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
            <div>
              <div className="font-[var(--font-mono)] text-[11px] text-[#FF6B35] tracking-widest uppercase mb-2">
                Complete Energy Solutions
              </div>
              <h1 className="font-[var(--font-heading)] text-[28px] md:text-[40px] leading-tight mb-4">
                Solution for Hydro Electric Turbines
              </h1>
              <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed mb-2">
                "Unwinding the Forces of Nature"
              </p>
              <p className="text-white/50 text-[14px] leading-relaxed mb-6">
                Powering tomorrow with smart hydropower solutions for predictive maintenance and dynamic operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-2.5 rounded-lg text-[13px] transition-colors">
                  Request Consultation
                </Link>
                <a href="#retrofit" className="border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-[13px] transition-colors">
                  View Retrofit Solutions
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-white/15 bg-[#0F1A28]">
              <img 
                src={img15}
                alt="Hydro Electric Turbine Package" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES FOR HYDRO TURBINES */}
      <section className="py-14 md:py-20 bg-[#F8F9FA]">
        <div className="site-shell">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#1A2A3A] mb-2">Services for Hydro Turbines</h2>
            <div className="w-12 h-1 bg-[#FF6B35] mx-auto rounded" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hydroServices.map((service, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-[#E5E7EB] hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-[#FFF0EB] rounded-lg flex items-center justify-center mb-3">
                  <Check className="w-4 h-4 text-[#FF6B35]" />
                </div>
                <p className="text-[13px] text-[#374151] leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RETROFIT OF GOVERNING HYDRAULIC SYSTEM */}
      <section id="retrofit" className="py-14 md:py-20">
        <div className="site-shell">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#1A2A3A] mb-4">
                Retrofit of Governing Hydraulic System
              </h2>
              <p className="text-[14px] text-[#6B7280] leading-relaxed mb-6">
                The most optimum retrofit of a governing hydraulic system includes replacing the hydro-mechanical cabinet (HMC) with a modern valve table assembly (VTA). The proportional valve, directional valves, and logic elements are mounted in the modular block, making them compact and convenient for operation and maintenance. Additional filtration for pilot oil and measuring instruments is integrated into the VTA. Critical components such as the oil tank, pumps, pressure vessels, and servo motors are retained or upgraded as necessary.
              </p>

              <h3 className="font-[var(--font-heading)] text-[16px] text-[#1A2A3A] mb-3">Additional Parts in Retrofit</h3>
              <ul className="space-y-2 mb-6">
                {additionalParts.map((part, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[13px] text-[#374151]">
                    <ArrowRight className="w-3 h-3 text-[#FF6B35]" />
                    {part}
                  </li>
                ))}
              </ul>

              <h3 className="font-[var(--font-heading)] text-[16px] text-[#1A2A3A] mb-3">Retrofit Solution for Governing System</h3>
              <ul className="space-y-2">
                {retrofitSolution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[13px] text-[#374151] leading-relaxed">
                    <Check className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8F9FA] rounded-xl p-4 border border-[#E5E7EB]">
              <img src={""} alt="Governor Retrofit Valve Table Assembly" className="w-full h-auto rounded-lg" />
      
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL FEATURES OF CONTROL SYSTEM */}
      <section className="py-14 md:py-20 bg-[#1A2A3A] text-white">
        <div className="site-shell">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl mb-2">Technical Features of Control System</h2>
          
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {technicalFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-[#FF6B35]/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-[16px] mb-3">{feature.title}</h3>
                  <p className="text-[13px] text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

   

      {/* SOLUTION FLOW CHART / PROCESS — TEXT ONLY */}
      <section className="py-14 md:py-20">
        <div className="site-shell">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#1A2A3A] mb-2 text-center">
              Our Strength in Governor Control System
            </h2>
           

            <div className="space-y-4">
              {processFlow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#FF6B35] text-white rounded-full flex items-center justify-center shrink-0 font-[var(--font-mono)] text-[12px]">
                    {idx + 1}
                  </div>
                  <p className="text-[14px] text-[#374151] leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#FF6B35] text-white">
        <div className="site-shell text-center">
          <h2 className="font-[var(--font-heading)] text-xl md:text-2xl mb-3">Ready to Modernize Your Hydro Turbine?</h2>
          <p className="text-[14px] text-white/80 mb-6 max-w-xl mx-auto">
            From Kaplan to Pelton — we design, manufacture, and commission complete governing and control retrofits.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[#FF6B35] px-6 py-2.5 rounded text-[13px] font-medium hover:bg-white/90 transition-colors">
            Contact Engineering Team
          </Link>
        </div>
      </section>

    
    </div>
  );
}