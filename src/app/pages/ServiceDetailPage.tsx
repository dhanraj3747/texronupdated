import { Link, useParams } from "react-router";
import {
  ArrowRight,
  Phone,
  CheckCircle
} from "lucide-react";
import { SEO } from "../seo/SEO";
import { Breadcrumb } from "../components/Breadcrumb";
import { FAQ } from "../components/FAQ";
import { PageTimestamp } from "../components/PageTimestamp";
import { PhotoPlaceholder } from "../components/PhotoPlaceholder";
import { serviceDetailPages } from "../content/serviceDetailPages";

import overhaulingImg1 from "../../../imageAssets/over1.jpg";
import overhaulingImg2 from "../../../imageAssets/over2.jpg";
import overhaulingImg3 from "../../../imageAssets/over3.jpeg";

import commissioningImg1 from "../../../imageAssets/IMG-20211124-WA0037.jpg.jpeg";
import commissioningImg2 from "../../../imageAssets/IMG20230518121818.jpg.jpeg";
import commissioningImg3 from "../../../imageAssets/IMG20240902200100.jpg.jpeg";

import vibrationImg1 from "../../../imageAssets/IMG-20191105-WA0041.jpg.jpeg";
import vibrationImg2 from "../../../imageAssets/IMG-20191105-WA0059.jpg.jpeg";
import vibrationImg3 from "../../../imageAssets/IMG-20191105-WA0064.jpg.jpeg";

import refurbishmentImg1 from "../../../imageAssets/IMG_20211202_154409.jpg.jpeg";
import refurbishmentImg2 from "../../../imageAssets/IMG20230518182609.jpg.jpeg";
import refurbishmentImg3 from "../../../imageAssets/IMG20230614152939.jpg.jpeg";

import ltsaImg1 from "../../../imageAssets/IMG-20211123-WA0030(2).jpg.jpeg";
import ltsaImg2 from "../../../imageAssets/IMG-20211123-WA0033(2).jpg.jpeg";
import ltsaImg3 from "../../../imageAssets/ltsa (3).png";

// ── Additional Service Images ──
import ltsaGalleryImg from "../../../imageAssets/ltsa (3).png";
import ltsaPhotoImg from "../../../imageAssets/LTSA.png";
import erectionGalleryImg1 from "../../../imageAssets/erection.jpeg";
import erectionGalleryImg2 from "../../../imageAssets/Erection_Commissioning2.png";
import erectionPhotoImg from "../../../imageAssets/service-side.png";
import epcGalleryImg from "../../../imageAssets/EPC.png";

const serviceImageRegistry: Record<string, string> = {
  overhaulingImg1,
  overhaulingImg2,
  overhaulingImg3,
  commissioningImg1,
  commissioningImg2,
  commissioningImg3,
  vibrationImg1,
  vibrationImg2,
  vibrationImg3,
  refurbishmentImg1,
  refurbishmentImg2,
  refurbishmentImg3,
  ltsaImg1,
  ltsaImg2,
  ltsaImg3,
  ltsaGalleryImg,
  ltsaPhotoImg,
  erectionGalleryImg1,
  erectionGalleryImg2,
  erectionPhotoImg,
  epcGalleryImg,
};

export function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const content = serviceSlug ? serviceDetailPages[serviceSlug] : undefined;

  if (!content) {
    return (
      <div className="bg-white py-20">
        <div className="site-shell max-w-3xl text-center">
          <h1 className="text-[32px] text-[#1E3A5F] mb-4">Service Page Not Found</h1>
          <p className="text-[#5A6B7D] text-[15px] mb-8">
            The service URL you opened does not exist. You can browse all available service pages below.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#1E3A5F] hover:bg-[#162f4d] text-white px-6 py-3 rounded-lg transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const resolvedGalleryImages = content.galleryImages
    .map((image) => ({
      src: serviceImageRegistry[image.imageId] ?? "",
      alt: image.alt,
      category: image.category,
    }))
    .filter((image) => image.src.length > 0);

  return (
    <div>
      <SEO title={content.seoTitle} description={content.seoDescription} />

      {/* Hero */}
      <section className="bg-[#1E3A5F] text-white py-12">
        <div className="site-shell">
          <Breadcrumb
            items={[
              { label: "Services", path: "/services" },
              { label: content.breadcrumbLabel }
            ]}
          />
          <h1 className="text-[28px] md:text-[38px] leading-tight mb-3 text-white mt-4">
            {content.pageTitle}
          </h1>
          <p className="text-white/60 text-[15px] max-w-3xl mb-6">{content.heroIntro}</p>
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
      </section>


{/* Stats */}
<section className="bg-white border-b border-[#E8EAED]">
  <div className="site-shell py-8">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-4">
      {content.keyStats.map((stat) => (
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
          {/* ── GALLERY + MATRIX SECTION ── */}
      {(resolvedGalleryImages.length > 0 || (content.matrixRows && content.matrixRows.length > 0)) && (
        <section className="py-16 bg-[#F5F5F5]">
          <div className="site-shell">
            {/* Gallery — only if images exist */}
            {resolvedGalleryImages.length > 0 && (
              <>
                <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
                  {content.galleryKicker}
                </h2>
                <h3 className="text-[#1E3A5F] text-[24px] mb-1">{content.galleryTitle}</h3>
                <p className="text-[13px] text-[#5A6B7D] mb-6">{content.galleryDescription}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {resolvedGalleryImages.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden border border-[#E8EAED] bg-white shadow-sm">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[380px] object-cover"
                      />
                      {image.category && (
                        <div className="p-3 bg-white">
                          <p className="text-[12px] text-[#5A6B7D]">{image.category}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Matrix — only if rows exist */}
            {content.matrixRows && content.matrixRows.length > 0 && (
              <>
                <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
                  {content.matrixKicker}
                </h2>
                <h3 className="text-[#1E3A5F] text-[24px] mb-1">{content.matrixTitle}</h3>
                <p className="text-[13px] text-[#5A6B7D] mb-6">{content.matrixDescription}</p>

                <div className="bg-white rounded-xl border border-[#E8EAED] overflow-x-auto">
                  <table className="w-full min-w-[900px]">
                    <thead>
                      <tr className="bg-[#1E3A5F] text-white">
                        <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider uppercase">Context</th>
                        <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider uppercase">Trigger</th>
                        <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider uppercase">Intervention</th>
                        <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider uppercase">Status</th>
                        <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider uppercase">Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.matrixRows.map((row, i) => (
                        <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"} hover:bg-blue-50/30 border-b border-[#E8EAED]`}>
                          <td className="px-4 py-3 text-[13px] text-[#1E3A5F] font-medium">{row.context}</td>
                          <td className="px-4 py-3 text-[12px] text-[#5A6B7D]">{row.trigger}</td>
                          <td className="px-4 py-3 text-[12px] text-[#5A6B7D]">{row.intervention}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-white ${
                              row.tone === "green" ? "bg-green-500" : row.tone === "amber" ? "bg-amber-500" : "bg-blue-500"
                            } whitespace-nowrap`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[12px] text-[#1E3A5F] font-medium">{row.outcome}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* ── PROCESS SECTION ── */}
      <section className="py-16 bg-white">
        <div className="site-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
                {content.processKicker}
              </h2>
              <h3 className="text-[#1E3A5F] text-[24px] mb-6">{content.processTitle}</h3>
              <div className="space-y-6">
                {content.processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
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

            <div className="space-y-6">
              {/* REAL IMAGE: if processImageId exists, show it. Otherwise fallback to placeholder. */}
              {content.processImageId && serviceImageRegistry[content.processImageId] ? (
                <div className="rounded-xl overflow-hidden border border-[#E8EAED] bg-white shadow-sm">
                  <img
                    src={serviceImageRegistry[content.processImageId]}
                    alt={content.processImageAlt || content.pageTitle}
                    className="w-full h-[380px] object-cover"
                  />
                </div>
              ) : (
                <PhotoPlaceholder
                  directive={content.photoDirective}
                  fallbackImage={resolvedGalleryImages[0]?.src}
                />
              )}

              <div className="bg-[#F5F5F5] rounded-xl p-5">
                <h4 className="font-[var(--font-mono)] text-[11px] tracking-wider text-[#1E3A5F]/50 mb-3">ENGAGEMENT MODEL</h4>
                <div className="space-y-3">
                  {content.engagementItems.map((item) => (
                    <div key={item} className="rounded-lg border border-[#E8EAED] bg-white p-3 flex items-start gap-2">
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

      {/* CTA */}
      <section className="py-12 bg-[#1E3A5F] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[var(--font-heading)] text-[24px] leading-tight mb-3">{content.ctaTitle}</h2>
          <p className="text-white/70 text-[14px] leading-relaxed max-w-2xl mx-auto mb-6">{content.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
            <a href="tel:+918904017774" className="flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-lg transition-colors sm:min-w-[220px]">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors text-center sm:min-w-[220px]">
              {content.ctaLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FAQ title={content.faqTitle} subtitle={content.faqSubtitle} items={content.faqItems} />

      <PageTimestamp lastUpdated={content.lastUpdated} nextAudit={content.nextAudit} />
    </div>
  );
}