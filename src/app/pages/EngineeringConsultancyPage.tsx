import { SEO } from "../seo/SEO";
import { Breadcrumb } from "../components/Breadcrumb";
import { FAQ } from "../components/FAQ";
import { PageTimestamp } from "../components/PageTimestamp";
import { serviceDetailPages } from "../content/serviceDetailPages";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";

import enggConsultantImg from "../../../imageAssets/engg consultant (1).jpg";
import epcServicesImg from "../../../imageAssets/EPC.png";


export function EngineeringConsultancyPage() {
  const page = serviceDetailPages["engineering-consultancy"];

  return (
    <div>
      <SEO title={page.seoTitle} description={page.seoDescription} />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* HERO SECTION — Dark blue background with single image       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="site-shell">
          <Breadcrumb
            items={[
              { label: "Services", path: "/services" },
              { label: page.breadcrumbLabel }
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
            {/* Left: Text */}
            <div>
              <h1 className="text-[28px] md:text-[38px] leading-tight mb-4 font-bold">
                {page.pageTitle}
              </h1>
              <p className="text-white/60 text-[15px] leading-relaxed mb-6">
                {page.heroIntro}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+918904017774"
                  className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-5 py-2.5 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-[13px]">Discuss This Service</span>
                </a>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg transition-colors"
                >
                  <span className="text-[13px]">Request Assessment</span>
                </Link>
              </div>
            </div>

            {/* Right: Single Hero Image */}
            <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg">
              <img
                src={enggConsultantImg}
                alt="TEXRON engineering consultancy team in meeting"
                className="w-full h-[320px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* STATS SECTION                                              */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-[#E8EAED]">
        <div className="site-shell py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-4">
            {page.keyStats.map((stat) => (
              <div key={stat.label} className="flex-1 text-left sm:text-center min-w-[140px]">
                <p className="font-[var(--font-mono)] text-[28px] sm:text-[32px] text-[#1E3A5F] font-semibold leading-tight">
                  {stat.value}
                </p>
                <p className="text-[12px] sm:text-[13px] text-[#5A6B7D] mt-1 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 1. ENGINEERING SERVICES                                    */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            {page.engineeringServicesTitle}
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-4 font-semibold">
            {page.engineeringServicesSubtitle}
          </h3>
          <p className="text-[14px] text-[#5A6B7D] leading-relaxed mb-8 whitespace-pre-line">
            {page.engineeringServicesIntro}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Capabilities */}
            <div className="bg-white rounded-xl border border-[#E8EAED] p-6">
              <h4 className="text-[#1E3A5F] text-[14px] font-semibold mb-4">
                Our Engineering Capabilities
              </h4>
              <ul className="space-y-3">
                {page.engineeringCapabilities?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] mt-1.5 shrink-0" />
                    <span className="text-[13px] text-[#5A6B7D] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-white rounded-xl border border-[#E8EAED] p-6">
              <h4 className="text-[#1E3A5F] text-[14px] font-semibold mb-4">
                Engineering Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.engineeringDeliverables?.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-[#F5F5F5] rounded-lg px-4 py-3"
                  >
                    <span className="text-[#FF6B35] text-[14px]">✔</span>
                    <span className="text-[13px] text-[#1E3A5F] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 2. CONSULTANCY SERVICES                                    */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="site-shell">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            {page.consultancyServicesTitle}
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-4 font-semibold">
            {page.consultancyServicesSubtitle}
          </h3>
          <p className="text-[14px] text-[#5A6B7D] leading-relaxed mb-8 whitespace-pre-line">
            {page.consultancyServicesIntro}
          </p>

          <div className="bg-[#F5F5F5] rounded-xl border border-[#E8EAED] p-6">
            <h4 className="text-[#1E3A5F] text-[14px] font-semibold mb-4">
              Scope of Consultancy Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.consultancyScope?.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-[#E8EAED] px-4 py-3"
                >
                  <p className="text-[13px] text-[#1E3A5F] font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 3. EPC SERVICES — FIXED ALIGNMENT                          */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="site-shell">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            {page.epcServicesTitle}
          </h2>
          <h3 className="text-[#1E3A5F] text-[24px] mb-1 font-semibold">
            {page.epcServicesSubtitle}
          </h3>
          <h4 className="text-[#1E3A5F] text-[18px] mb-4 font-medium">
            {page.epcServicesIntro}
          </h4>
          <p className="text-[14px] text-[#5A6B7D] leading-relaxed mb-8">
            {page.epcServicesDescription}
          </p>

          <div className="bg-white rounded-xl border border-[#E8EAED] p-6">
            <h4 className="text-[#1E3A5F] text-[14px] font-semibold mb-6">
              Our EPC service includes
            </h4>
            {/* FIXED: Proper 2-column grid alignment for 6 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {page.epcServicesList?.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#1E3A5F] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-[var(--font-mono)] text-white text-[12px] font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#5A6B7D] leading-relaxed pt-1.5">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 4. EXTENDED LIFECYCLE SUPPORT                              */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="site-shell">
          <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
            {page.lifecycleSupportTitle}
          </h2>
          <p className="text-[14px] text-[#5A6B7D] leading-relaxed mb-6">
            {page.lifecycleSupportIntro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.lifecycleSupportItems?.map((item, i) => (
              <div
                key={i}
                className="bg-[#F5F5F5] rounded-xl border border-[#E8EAED] p-5 flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF6B35] shrink-0" />
                <span className="text-[13px] text-[#1E3A5F] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 5. CLOSING STATEMENT                                       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#1E3A5F]">
        <div className="site-shell text-center">
          <h2 className="text-white text-[24px] font-semibold mb-3">
            {page.closingTitle}
          </h2>
          <p className="text-white/70 text-[14px] leading-relaxed max-w-3xl mx-auto">
            {page.closingStatement}
          </p>
        </div>
      </section>

  {/* ═══════════════════════════════════════════════════════════ */}
{/* 6. PROCESS SECTION — Steps + Photo + Engagement Model      */}
{/*    Matches turbine overhauling page layout exactly         */}
{/* ═══════════════════════════════════════════════════════════ */}
<section className="py-16 bg-white">
  <div className="site-shell">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left: Steps */}
      <div>
        <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
          {page.processKicker}
        </h2>
        <h3 className="text-[#1E3A5F] text-[24px] mb-6">
          {page.processTitle}
        </h3>
        <div className="space-y-6">
          {page.processSteps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#1E3A5F] flex items-center justify-center shrink-0">
                <span className="font-[var(--font-mono)] text-white text-[12px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h4 className="text-[#1E3A5F] text-[14px] mb-1">{step.title}</h4>
                <p className="text-[12px] text-[#5A6B7D] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Photo + Engagement Cards (matches BHEL/turbine pattern) */}
      <div className="space-y-6">
        {/* NEW: EPC Services Image */}
        <div className="rounded-xl overflow-hidden border border-[#E8EAED] bg-white shadow-sm">
          <img
            src={epcServicesImg}
            alt="TEXRON EPC services — engineering, procurement, and construction execution"
            className="w-full h-[320px] object-cover"
          />
          <div className="p-3 bg-white">
            <p className="text-[12px] text-[#5A6B7D]">
              End-to-end EPC execution from concept to commissioning
            </p>
          </div>
        </div>

        {/* Engagement Model */}
        <div className="bg-[#F5F5F5] rounded-xl p-5">
          <h4 className="font-[var(--font-mono)] text-[11px] tracking-wider text-[#1E3A5F]/50 mb-3">
            ENGAGEMENT MODEL
          </h4>
          <div className="space-y-3">
            {page.engagementItems.map((item, i) => (
              <div key={i} className="rounded-lg border border-[#E8EAED] bg-white p-3 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                <p className="text-[12px] text-[#1E3A5F]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 7. CTA SECTION                                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-[#1E3A5F] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[var(--font-heading)] text-[24px] leading-tight mb-3">
            {page.ctaTitle}
          </h2>
          <p className="text-white/70 text-[14px] leading-relaxed max-w-2xl mx-auto mb-6">
            {page.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
            <a
              href="tel:+918904017774"
              className="flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-lg transition-colors sm:min-w-[220px]"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors text-center sm:min-w-[220px]"
            >
              {page.ctaLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 8. FAQ SECTION                                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <FAQ title={page.faqTitle} subtitle={page.faqSubtitle} items={page.faqItems} />

      <PageTimestamp />
    </div>
  );
}