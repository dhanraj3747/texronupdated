import { Link } from "react-router";
import { 
  Shield, AlertTriangle, Zap, Radio, Check, 
  ArrowRight, Cpu, Settings, Gauge 
} from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";

// ✅ Properly imported assets from src/imageAssets/ matching your system structure
import ss1CutSectionImage from "../../../imageAssets/ss1.jpg";
import ss2HeroImage from "../../../imageAssets/ss2.png";
import ss3FeaturesCircle from "../../../imageAssets/ss3.jpg";
import ss4TurbineModelsTable from "../../../imageAssets/ss4.jpg";

const designFeaturesList = [
  "Blades and nozzils designed for saturation Turbines.",
  "Mode's shape and Natural frequency determination.",
  "Determination of non-steady forces due to stage flow interaction.",
  "Evaluation of damping and generation of appropriate models.",
  "Model analysis and dynamic stress determination.",
  "Life estimation based on cumulative damage fatigue theories."
];

const basicExtendedFeatures = [
  "Quick Start configuration frameworks",
  "Available with versatile multi stage layout options",
  "Both Mechanical or electronic Governor options",
  "Power range scalability up to 2 MW",
  "Oil lubrication or highly balanced ball bearings¹",
  "Direct drive or with robust custom gear box²"
];

const applicationsMatrix = [
  "Synchronous & Induction Generator drive",
  "Pump / Fan / Blower drives",
  "Energy Conservation / Waste Heat Recovery",
  "Captive power plants configuration",
  "Parallel deployment to PRDS",
  "Solar thermal power generation plants",
  "Industrial waste incineration plants"
];

export function SteamTurbinePage() {
  return (
    <div>
      {/* --- HERO SECTION --- */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[{ label: "Products", path: "/products" }, { label: "Steam Turbine" }]} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
            <div>
              <div className="font-[var(--font-mono)] text-[11px] text-[#FF6B35] tracking-widest uppercase mb-2">
                High Efficiency Power Generation
              </div>
              <h1 className="font-[var(--font-heading)] text-[28px] md:text-[40px] leading-tight mb-4">
               Steam Turbine
              </h1>
              <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed mb-4 text-justify">
                Texron manufactures highly efficient & reliable Single stage back pressure Steam Turbines up to 2 MW capacity. 
                Being in the power sector for 3 decades, the shortfall of quality products in this 
                segment was observed. Texron comes up with suitable products that can cater to the market 
                with fulfilled criteria to the customers in all aspects.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-2.5 rounded-lg text-[13px] transition-colors">
                  Get a Quote
                </Link>
                <a href="#specifications" className="border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg text-[13px] transition-colors">
                  View Specs Sheet
                </a>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-white/15 bg-[#0F1A28] p-4 flex justify-center items-center">
              <img 
                src={ss2HeroImage}
                alt="Texron Back Pressure Steam Turbine Industrial Assembly" 
                className="w-full max-h-[380px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- OVERVIEW & EXTENDED DESIGN FEATURES --- */}
      <section className="py-14 md:py-20 bg-[#F8F9FA]">
        <div className="site-shell">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#1A2A3A] mb-2">
                Extended Design Features
              </h2>
              <div className="w-12 h-1 bg-[#FF6B35] rounded mb-4" />
              
              <p className="text-[14px] text-[#6B7280] leading-relaxed">
                Texron design parameters ensure robust operational stability, long-term safety, and high-performance throughput across heavy power utilities.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {basicExtendedFeatures.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#E5E7EB] flex gap-3 items-start">
                    <Check className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                    <p className="text-[13px] text-[#374151] leading-tight font-medium">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-2 text-xs text-gray-400 space-y-0.5 italic">
                <p>¹ Optional choice layout configuration for capacities under 200 KW.</p>
                <p>² Dependency falls upon customized operational steam parameters & applications.</p>
              </div>
            </div>

            <div className="bg-[#0F1A28] rounded-xl p-4 border border-white/15">
              <img 
                src={ss1CutSectionImage} 
                alt="Steam Turbine Engineering Internal Cut Section Layout" 
                className="w-full h-auto rounded-lg shadow-md" 
              />
            
            </div>
          </div>
        </div>
      </section>

      {/* --- BLADE DESIGN & STRUCTURAL ENGINEERING --- */}
      <section className="py-14 md:py-20 bg-white">
        <div className="site-shell">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#1A2A3A] mb-2">Advanced Blade Design</h2>
            <p className="text-[14px] text-[#6B7280] max-w-xl mx-auto">Enhanced fluid dynamics modeling for saturated turbine operational environments.</p>
            <div className="w-12 h-1 bg-[#FF6B35] mx-auto rounded mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-[#FFF0EB] rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h3 className="font-[var(--font-heading)] text-[16px] text-[#1A2A3A] mb-2 font-semibold">Profile Optimization</h3>
              <p className="text-[13px] text-[#6B7280] leading-relaxed">
                Improved thermodynamic blade layout profiling to completely optimize expansion flow rates and internal energy conversion efficiency.
              </p>
            </div>

            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-[#FFF0EB] rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h3 className="font-[var(--font-heading)] text-[16px] text-[#1A2A3A] mb-2 font-semibold">Anti-Erosion Coatings</h3>
              <p className="text-[13px] text-[#6B7280] leading-relaxed">
                Special structural element coating layers along the leading edges of the rotor blades increase overall material strength and safely avoid liquid droplet erosion.
              </p>
            </div>

            <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl p-6 hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-[#FFF0EB] rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <h3 className="font-[var(--font-heading)] text-[16px] text-[#1A2A3A] mb-2 font-semibold">'T' Root Security Locking</h3>
              <p className="text-[13px] text-[#6B7280] leading-relaxed">
                Advanced structural <strong>'T' root locks</strong> safely support individual blade anchoring arrays to safely run under excessive continuous thrust load conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DESIGN & ANALYSIS ARCHITECTURE FEATURE LIST --- */}
      <section className="py-14 md:py-20 bg-[#1A2A3A] text-white">
        <div className="site-shell">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl mb-2">Design Features</h2>
              <p className="text-white/60 text-[14px]">Predictive engineering analysis workflows ensure maximum lifecycle counts under high operations.</p>
              <div className="w-12 h-1 bg-[#FF6B35] rounded mb-6" />
              
              <div className="space-y-3">
                {designFeaturesList.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FF6B35] text-white rounded-full flex items-center justify-center shrink-0 font-[var(--font-mono)] text-[11px] mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-[13px] text-white/80 leading-relaxed pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#E5E7EB] flex justify-center items-center">
              <img 
                src={ss3FeaturesCircle} 
                alt="Texron Turbine Structural Stress Frequency Diagram" 
                className="w-full max-h-[380px] object-contain rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- MODELS & SPECIFICATIONS SHEET SHEET --- */}
      <section id="specifications" className="py-14 md:py-20 bg-[#F8F9FA]">
        <div className="site-shell">
          <div className="text-center mb-10">
           
            
          </div>

          <div className="bg-white rounded-xl p-4 border border-[#E5E7EB] shadow-sm overflow-x-auto">
            <div className="min-w-[620px] flex justify-center">
              <img 
                src={ss4TurbineModelsTable} 
                alt="Texron Mechanical Turbine Parameter Configuration Spreadsheet Table" 
                className="w-full max-w-[850px] h-auto rounded-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIAL DEPLOYMENT APPLICATIONS MATRIX --- */}
      <section className="py-14 md:py-20 bg-white">
        <div className="site-shell">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl text-[#1A2A3A] mb-2 text-center">
              Target Field Applications
            </h2>
            <p className="text-[14px] text-[#6B7280] mb-8 text-center">System synchronization environments engineered for direct field integration.</p>

            <div className="space-y-2.5">
              {applicationsMatrix.map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-[#F8F9FA] border border-[#E5E7EB] p-3.5 rounded-xl transition-colors hover:bg-slate-50">
                  <ArrowRight className="w-4 h-4 text-[#FF6B35] shrink-0" />
                  <span className="text-[13px] text-[#374151] font-medium">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA CALL TO ACTION --- */}
      <section className="py-12 bg-[#FF6B35] text-white">
        <div className="site-shell text-center">
          <h2 className="font-[var(--font-heading)] text-xl md:text-2xl mb-3">Looking for a Back Pressure Turbine Variant?</h2>
          <p className="text-[14px] text-white/80 mb-6 max-w-xl mx-auto">
            Get in touch with our application field engineers to match specific steam parameters, layouts, and power plant targets.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[#FF6B35] px-6 py-2.5 rounded text-[13px] font-medium hover:bg-white/90 transition-colors">
            Contact Technical Engineering Team
          </Link>
        </div>
      </section>
    </div>
  );
}