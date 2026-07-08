// src/app/pages/ValueAddedServicesPage.tsx

import { Link } from "react-router";
import {
  CheckCircle,
  Phone,
  ArrowRight,
  ArrowDown,
  Shield,
  FileText,
  FileSearch,
} from "lucide-react";
import { SEO } from "../seo/SEO";
import { Breadcrumb } from "../components/Breadcrumb";

export default function ValueAddedServicesPage(): JSX.Element {
  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO
        title="Turbine Vibration Analysis and Diagnostics | Texron Power"
        description="Advanced vibration diagnostics for steam turbines and auxiliaries including spectrum analysis, phase checks, balancing support, and corrective action planning."
      />

      {/* ─── Hero ─── */}
      <section className="bg-[#1E3A5F] text-white py-12 md:py-16">
        <div className="site-shell">
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Value Added Services" },
            ]}
          />
        
          <h1 className="text-[28px] md:text-[40px] font-bold leading-tight mb-4 text-white max-w-4xl">
            Vibration Analysis and Diagnostics
          </h1>
          <p className="text-white/80 text-[18px] max-w-3xl mb-8 leading-relaxed">
            Abnormal vibration is usually the first visible symptom of deeper
            turbine issues. Texron maps signatures to root causes and
            actionable correction plans.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+918904017774"
              className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-3 rounded-lg transition-colors font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span className="text-[14px]">Consult an Expert</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-5 py-3 rounded-lg transition-colors"
            >
              <span className="text-[14px]">Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Key Stats ─── */}
      <section className="py-10 bg-white border-b border-[#E8EAED]">
        <div className="site-shell">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { value: "<48 hr", label: "Rapid Diagnostic Visit" },
              { value: "3-axis", label: "Measurement Coverage" },
              { value: "360 deg", label: "Orbit and Phase Review" },
              { value: "In-situ", label: "Balancing Capability" },
              { value: "Tiered", label: "Severity Classification" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-[24px] md:text-[28px] font-bold text-[#1E3A5F]">
                  {stat.value}
                </div>
                <div className="text-[12px] text-[#5A6B7D] mt-1 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Intro + Bullets ─── */}
      <section className="py-16 bg-white border-b border-[#E8EAED]">
        <div className="site-shell grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase font-semibold mb-2">
              Listen to What Your Turbine Is Telling You
            </h2>
            <h3 className="text-[#1E3A5F] text-[28px] font-semibold mb-6">
              Identify the Root Cause Before It Becomes a Failure
            </h3>
            <p className="text-[#5A6B7D] text-[15px] mb-6 leading-relaxed">
              Unusual vibration in a turbine is often the first sign of a
              developing problem. Our expert vibration analysts use calibrated
              instruments and proven diagnostic methods to identify the root
              cause  whether it&apos;s a balance issue, misalignment, bearing
              wear, or something structural.
            </p>
            <h4 className="font-semibold text-[#1A2A3A] text-[16px] mb-4">
              Diagnostic Capabilities:
            </h4>
            <ul className="space-y-3 text-[14px] text-[#5A6B7D]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0" />
                Online and offline vibration measurement
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0" />
                Spectrum analysis and phase measurement
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0" />
                Rotor balancing (shop and in-situ)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#FF6B35] shrink-0" />
                Detailed diagnostic report with recommended corrective actions
              </li>
            </ul>
          </div>

          <div className="bg-[#F5F5F5] rounded-xl p-8 border border-[#E8EAED]">
            <FileSearch className="w-10 h-10 text-[#FF6B35] mb-6" />
            <h3 className="text-[#1E3A5F] text-[20px] font-semibold mb-4">
              When to Schedule Diagnostics
            </h3>
            <div className="space-y-4">
              {[
                "Rising trend on one bearing",
                "Post-maintenance instability",
                "Frequent vibration trips",
                "Unknown multi-point anomalies",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 text-[#5A6B7D] text-[13px] bg-white p-3 rounded shadow-sm border border-[#E8EAED]"
                >
                  <ArrowDown className="w-4 h-4 text-[#1E3A5F] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Execution Process ─── */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase font-semibold mb-2">
            Execution Process
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-1">
            From Signal Capture to Corrective Action
          </h3>
          <p className="text-[13px] text-[#5A6B7D] mb-8">
            A structured workflow that moves from measurement to verified
            correction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Measurement Plan and Baseline Capture",
                desc: "Operating envelope and sensor points are mapped before acquiring repeatable reference data.",
              },
              {
                title: "Spectrum, Phase, and Orbit Interpretation",
                desc: "Signal signatures are correlated to probable failure modes with severity grading.",
              },
              {
                title: "Root-Cause Validation",
                desc: "Mechanical, thermal, and control contributors are cross-checked before prescribing intervention.",
              },
              {
                title: "Corrective Action and Verification Run",
                desc: "Balancing, alignment, or structural correction is validated through repeat measurements.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-[#E8EAED] shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1E3A5F] text-white text-[12px] font-bold">
                    {i + 1}
                  </span>
                  <h4 className="text-[#1E3A5F] text-[16px] font-semibold">
                    {step.title}
                  </h4>
                </div>
                <p className="text-[#5A6B7D] text-[14px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose / Engagement ─── */}
      <section className="py-14 bg-[#1E3A5F] text-white">
        <div className="site-shell">
          <h2 className="text-[24px] font-semibold mb-8 text-center">
            Why Choose This Service
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Fast mobilization for high-severity alarms",
              "Data-backed diagnosis instead of trial-and-error fixes",
              "Verification reporting after corrective action",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#152d4d] rounded-xl p-6 border border-[#2a4a73]"
              >
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />
                  <span className="text-[14px] font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#1E3A5F] text-white py-12 text-center border-t border-[#2a4a73]">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-[24px] font-semibold mb-4">
            Seeing Vibration Alarms or Unstable Loading?
          </h3>
          <p className="text-white/70 text-[15px] mb-8">
            Share your latest trend snapshots and unit details. We will propose a
            targeted diagnostic plan with escalation priority.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FF6B35] hover:bg-[#e55a2a] px-8 py-3 rounded text-white font-semibold transition-colors"
          >
            Request Vibration Diagnosis →
          </Link>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell max-w-4xl">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase font-semibold mb-2">
            FAQ
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-1">
            Vibration Diagnostics FAQ
          </h3>
          <p className="text-[13px] text-[#5A6B7D] mb-8">
            Typical questions from operation and reliability teams
          </p>

          <div className="space-y-4">
            {[
              {
                q: "Can vibration diagnostics be done without a long shutdown?",
                a: "Yes. Most investigations start online with targeted runs. We recommend shutdown-only checks when evidence points to hardware correction needs.",
              },
              {
                q: "Do you support in-situ balancing?",
                a: "Yes. Texron supports in-situ balancing where access and operating conditions allow controlled correction cycles.",
              },
              {
                q: "What output does the report include?",
                a: "The report includes severity class, probable root cause, risk implication, and a prioritized corrective action plan with verification criteria.",
              },
              {
                q: "Can diagnostics be integrated into LTSA reviews?",
                a: "Yes. Vibration trend analysis is commonly embedded into LTSA reliability review cycles for condition-based planning.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-[#E8EAED] shadow-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <FileText className="w-5 h-5 text-[#FF6B35] shrink-0" />
                  <h4 className="text-[16px] font-semibold text-[#1E3A5F]">
                    {faq.q}
                  </h4>
                </div>
                <p className="text-[#5A6B7D] text-[14px] leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white py-10" />
    </div>
  );
}