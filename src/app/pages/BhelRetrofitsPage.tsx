import { Link } from "react-router";
import {
  Phone,
  ArrowRight,
} from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";
import { FAQ } from "../components/FAQ";

// Import the 3 uploaded governor retrofit images
import govImg1 from "../../../imageAssets/gov1.png";
import govImg2 from "../../../imageAssets/gov2.JPG";
import govImg3 from "../../../imageAssets/gov3.jpg";

const bhelFAQs = [
  {
    question: "What is a Steam Turbine Governor Retrofit?",
    answer:
      "A Steam Turbine Governor Retrofit is the modernization or replacement of an existing turbine governing and control system with an advanced digital or electro-hydraulic solution to improve reliability, performance, maintainability, and operational flexibility.",
  },
  {
    question: "Why should I retrofit my turbine governor?",
    answer:
      "Governor retrofit helps overcome obsolete control systems and unavailable spares, frequent trips and unstable operation, hydraulic leakage and actuator issues, poor speed and load control accuracy, difficult integration with modern DCS platforms, and increased maintenance requirements.",
  },
  {
    question: "When is the right time to perform a governor retrofit?",
    answer:
      "Retrofit is typically recommended when turbine operation exceeds 15–25 years, governor failures become repetitive, speed fluctuations or load hunting occur, major overhaul or RLA activities are planned, or OEM support becomes unavailable.",
  },
  {
    question: "Which governor systems can be upgraded?",
    answer:
      "Our retrofit solutions support mechanical-hydraulic governors, electro-hydraulic governing systems (EHG), analog governor controls, digital governor systems, and legacy and custom-built turbine control systems.",
  },
  {
    question: "Is complete turbine replacement required?",
    answer:
      "No. Governor retrofit upgrades only the governing and control package while retaining major turbine components wherever feasible, minimizing downtime and capital expenditure.",
  },
  {
    question: "What is included in the retrofit scope?",
    answer:
      "Mechanical scope includes actuators, servo valves, hydraulic power unit, mechanical linkages, trip block, and oil piping. Electrical and controls scope includes governor controller, PLC/DCS integration, HMI interface, speed sensors, protection logic, and communication modules.",
  },
  {
    question: "Can you retrofit multi-brand OEM turbines?",
    answer:
      "Yes. Our retrofit solutions are engineered for multiple OEM turbine platforms and legacy configurations to provide seamless modernization and long-term support.",
  },
  {
    question: "Will retrofit improve turbine performance?",
    answer:
      "Typical benefits include improved speed stability, better load response, enhanced overspeed protection, higher operational reliability, reduced maintenance effort, and improved startup performance.",
  },
  {
    question: "Does retrofit require turbine shutdown?",
    answer:
      "Yes. Installation and commissioning are normally completed during planned maintenance outages or scheduled shutdown periods.",
  },
  {
    question: "Can the retrofit integrate with our existing DCS?",
    answer:
      "Yes. Integration options commonly include Modbus TCP/IP, Modbus RTU, Profibus, Profinet, OPC UA, and Ethernet/IP.",
  },
  {
    question: "What service life can be expected after retrofit?",
    answer:
      "A professionally executed governor retrofit can extend turbine operational life by 10–20+ years, supported by preventive maintenance and periodic system updates.",
  },
];

const retrofitCrossReference = [
  {
    type: "SUB 1MW DRIVE APPLICATION TURBINES",
    category: "NON-CRITICAL OEM/NON-OEM TURBINES",
    texronSolution: "RETROFITS WITH SIMPLE ELECTRONIC CONTROLLER AND PNEUMATIC ACTUATORS",
    expectedOutcome: "COST EFFECTIVE AND RELIABLE",
  },
  {
    type: "SMALL AND MEDIUM POWER TURBINES, TURBO-COMPRESSORS & TURBO-BLOWERS (3-35MW)",
    category: "TYPICALLY 15 YEAR & OLDER, PURCHASED/SHIPPED FROM ABROAD, WITH NO OEM SUPPORT, ETC. (EG.: ABB, ALSTOM, PB, ANSALDO, BORSIG & ENGLISH ELECTRIC)",
    texronSolution: "HYDROMECHANICAL/ELECTRO HYDRAULIC ACTUATORS SUITABLE TO EXISTING CONTROL OIL, PRE-PACKAGED ELECTRONIC GOVERNORS (EG.: WOODWARD, VOITH, DEIF, HEINZMANN, TRISEN, ETC.) WITH MINOR MODIFICATIONS",
    expectedOutcome: "SHORTER LEAD TIME FOR SUPPLY & SERVICE BACKED WITH RELIABLE AFTER SALE SUPPORT",
  },
  {
    type: "LARGER UTILITY TURBINES (40MW & ABOVE)",
    category: "TYPICALLY OWNED BY PSU & ENERGY BASED PRIVATE SECTORS",
    texronSolution: "COMPLETE CUSTOMISED SOLUTION FROM CONCEPT TO COMMISSIONING TYPICALLY HIGH PRESSURE HYDRAULIC SYSTEM, DCS BASED PROGRAMMED GOVERNOR AND INTEGRATED BOP SYSTEM",
    expectedOutcome: "TAILOR MADE UPGRADATION TO MEET EFFICIENT OPERATION",
  },
  {
    type: "SAFETY PROTECTION UPGRADES",
    category: "IMPROVED SAFETY & IMPLEMENTING HIGHER STANDARDS (EG.: API)",
    texronSolution: "IMPLEMENTING 2 OO 3 LOGICS BY ADDING FIELD INSTRUMENTS, MODIFICATION IN TURBINE PROTECTION LOGICS, OVERSPEED PROTECTION SYSTEMS AND PROVIDING TRIP BLOCK WITH 2 OO 3 VOTING LOGIC",
    expectedOutcome: "MEETING RELIABLE OPERATION & SAFETY WITH HIGHER STANDARDS",
  },
];

export function BhelRetrofitsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[
            { label: "Expertise", path: "/expertise" },
            { label: "Steam Turbine Governor Retrofits and Upgradations" },
          ]} />
          <h1 className="text-[28px] md:text-[38px] leading-tight mb-3 text-white">
             Steam Turbine Governor Retrofits and Upgradations
          </h1>
          <p className="text-white/60 text-[15px] max-w-3xl mb-6">
           High-precision digital governor retrofits for 30–500 MW steam turbines,
            custom-designed to seamlessly replace Woodward, Alstom, and indigenous systems.
             Engineered for rapid deployment with emergency on-site commissioning within 48 hours.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+918904017774" className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-2.5 rounded-lg transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-[13px]">Discuss Your Unit</span>
            </a>
            <Link to="/contact" className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg transition-colors">
              <span className="text-[13px]">Request Retrofit Assessment</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Compatibility Chart */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Field Implementation
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-1">
             Retrofit Project Gallery
          </h3>
          <p className="text-[13px] text-[#5A6B7D] mb-6">
            On-site photographic documentation of our recent digital governor upgrades.
          </p>

          {/* 2 Images below the gallery heading */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-xl overflow-hidden border border-[#E8EAED] bg-white shadow-sm">
              <img
                src={govImg1}
                alt="Woodward Governor Actuator Installation on Steam Turbine"
                className="w-full h-[280px] object-cover"
              />
              <div className="p-3 bg-white">
                <p className="text-[12px] text-[#5A6B7D]">Woodward Governor Actuator — Field Installation</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-[#E8EAED] bg-white shadow-sm">
              <img
                src={govImg2}
                alt="7MW Turbine Control Panel with Digital Governor 505D"
                className="w-full h-[280px] object-cover"
              />
              <div className="p-3 bg-white">
                <p className="text-[12px] text-[#5A6B7D]">7MW Turbine Control Panel — Digital Governor 505D</p>
              </div>
            </div>
          </div>

          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            Retrofit Coverage
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-1">
             Turbine Retrofit & Upgrade Cross Reference
          </h3>
          <p className="text-[13px] text-[#5A6B7D] mb-6">
            Quick-fit view of Textron retrofit solutions matched to turbine type, category, and expected operational outcome.
          </p>

          <div className="bg-white rounded-xl border border-[#E8EAED] overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-[#1E3A5F] text-white">
                  <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">TYPE</th>
                  <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">CATEGORY</th>
                  <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">TEXRON SOLUTION</th>
                  <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">EXPECTED OUTCOME</th>
                </tr>
              </thead>
              <tbody>
                {retrofitCrossReference.map((row, i) => (
                  <tr key={row.type} className={`${i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"} hover:bg-blue-50/30`}>
                    <td className="px-4 py-3 text-[13px] text-[#1E3A5F] font-medium">{row.type}</td>
                    <td className="px-4 py-3 text-[12px] text-[#5A6B7D]">{row.category}</td>
                    <td className="px-4 py-3 text-[12px] text-[#5A6B7D]">{row.texronSolution}</td>
                    <td className="px-4 py-3 text-[12px] text-[#1E3A5F] font-medium">{row.expectedOutcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
                Retrofit Process
              </h2>
              <h3 className="text-[#1E3A5F] text-[24px] mb-6">
                From Assessment to Commissioning
              </h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Site Survey & Compatibility Assessment", desc: "Our engineers verify existing governor model, actuator linkage, and control panel interface. Usually completed in 1 day." },
                  { step: "02", title: "Detailed Engineering and Manufacturing", desc: "Pre-configured and factory-tested to match your turbine's operating parameters. PID values pre-tuned from our database of 200+ units." },
                  { step: "03", title: "On-Site Installation & Commissioning", desc: "Planned-Scheduled installation  time with stipulated timelines." },
                  { step: "04", title: "Performance Verification & Handover", desc: "Load ramp testing, step response verification, and protection coordination check. Complete documentation package delivered." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1E3A5F] flex items-center justify-center shrink-0">
                      <span className="font-[var(--font-mono)] text-white text-[12px]">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-[#1E3A5F] text-[14px] mb-1">{item.title}</h4>
                      <p className="text-[12px] text-[#5A6B7D] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* 1 Image on the right side of Retrofit Process */}
              <div className="rounded-xl overflow-hidden border border-[#E8EAED] bg-white shadow-sm">
                <img
                  src={govImg3}
                  alt="Electro-Hydraulic Actuator and Valve Assembly"
                  className="w-full h-[320px] object-cover"
                />
                <div className="p-3 bg-white">
                  <p className="text-[12px] text-[#5A6B7D]">Electro-Hydraulic Actuator — Field Assembly</p>
                </div>
              </div>

              <div className="bg-[#F5F5F5] rounded-xl p-5">
                <h4 className="font-[var(--font-mono)] text-[11px] tracking-wider text-[#1E3A5F]/50 mb-3">ENGAGEMENT MODEL</h4>
                <div className="space-y-3">
                  <div className="rounded-lg border border-[#E8EAED] bg-white p-3">
                    <p className="text-[12px] text-[#1E3A5F]">Rapid compatibility review within 24 hours</p>
                  </div>
                  <div className="rounded-lg border border-[#E8EAED] bg-white p-3">
                    <p className="text-[12px] text-[#1E3A5F]">Outage-window aligned execution planning</p>
                  </div>
                  <div className="rounded-lg border border-[#E8EAED] bg-white p-3">
                    <p className="text-[12px] text-[#1E3A5F]">Post-commissioning stabilization support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA — Fixed alignment for content and buttons */}
      <section className="py-12 bg-[#1E3A5F] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center justify-center">
          <h2 className="text-[24px] mb-3 font-semibold">Need a Multibrand Governor Retrofit for Your Unit?</h2>
          <p className="text-white/60 text-[14px] mb-6 max-w-xl">
            Tell us your turbine model and vintage. We'll confirm compatibility and quote <br></br> within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a href="tel:+918904017774" className="flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto font-semibold">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors w-full sm:w-auto font-semibold">
              Request Retrofit Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Multibrand Governor Retrofit FAQ"
        subtitle="Common questions from plant managers and procurement officers"
        items={bhelFAQs}
      />
    </div>
  );
}