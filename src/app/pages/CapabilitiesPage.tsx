import { Breadcrumb } from "../components/Breadcrumb";
import { motion } from "motion/react";
import { CubeCarousel } from "../components/ui/cube-carousel";

// Real facility images from workspace assets
import assembledGovernorImg from "../../../imageAssets/peenya1.jpeg";
import cadDesignImg from "../../../imageAssets/peenya2.jpeg";
import hydraulicTestImg from "../../../imageAssets/peenya3.jpeg";
import panelWiringImg from "../../../imageAssets/peenya4.jpeg";
import extraImg1 from "../../../imageAssets/peenya5.jpeg";

// Infrastructure gallery images
import infra1 from "../../../imageAssets/infra1.jpg";
import infra2 from "../../../imageAssets/infra2.jpg";
import infra3 from "../../../imageAssets/infra3.jpg";
import infra4 from "../../../imageAssets/infra4.jpg";
import infra5 from "../../../imageAssets/infra5.jpg";

// Video asset
import facilityVideo from "../../../imageAssets/facility-tour.mp4";


const capabilityGalleryImages = [
  { src: assembledGovernorImg, alt: "", category: "", span: "wide" as const },
  { src: hydraulicTestImg, alt: "", category: "" },
  { src: panelWiringImg, alt: "", category: "", span: "tall" as const },
  { src: cadDesignImg, alt: "", category: "" },
  { src: extraImg1, alt: "", category: "", span: "wide" as const },
];

const infraImages = [
  { src: infra1, alt: "Engineering meeting room with team discussion" },
  { src: infra2, alt: "Industrial turbine machinery installation" },
  { src: infra3, alt: "Large scale hydroelectric turbine system" },
  { src: infra4, alt: "Power generation equipment with solar farm view" },
  { src: infra5, alt: "Steam turbine and power plant systems" },
];

export function CapabilitiesPage() {
  return (
    <div>
      <section className="bg-[#1A2A3A] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[{ label: "Infrastructure" }]} />
          <h1 className="font-[var(--font-heading)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">Infrastructure</h1>
          <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-tight mb-3 text-white">
            In-House Infrastructure
          </h2>
          <p className="text-white/60 text-[15px] max-w-2xl">
            Our Peenya Phase IV facility houses dedicated assembly, testing, and re-engineering capabilities.
            Everything from governor calibration to hydraulic actuator testing happens under one roof.
          </p>
        </div>
      </section>

      {/* Custom Infrastructure Gallery using Real Images */}
      <section className="py-14 bg-[#F5F5F5] border-y border-[#E8EAED]">
        <div className="site-shell">
          <h3 className="font-[var(--font-heading)] text-[11px] tracking-[0.2em] text-[#FF6B35] uppercase mb-1">Live from the Floor</h3>
          <h4 className="font-[var(--font-heading)] text-[#1A2A3A] text-[24px] mb-8">Inside Our Peenya Facility</h4>
          <CubeCarousel images={capabilityGalleryImages} />
        </div>
      </section>

      {/* Facility Video Tour */}
      <section className="py-14 bg-white">
        <div className="site-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-[var(--font-heading)] text-[11px] tracking-[0.2em] text-[#FF6B35] uppercase mb-1">Virtual Tour</h3>
            <h4 className="font-[var(--font-heading)] text-[#1A2A3A] text-[24px] mb-8">Walk Through Our Facility</h4>
            <div className="w-full rounded-xl overflow-hidden bg-[#0f1720] border border-[#E8EAED] shadow-lg">
              <video
                src={facilityVideo}
                poster={""}
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Image Gallery */}
      <section className="py-14 bg-[#F5F5F5] border-y border-[#E8EAED]">
        <div className="site-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-[var(--font-heading)] text-[11px] tracking-[0.2em] text-[#FF6B35] uppercase mb-1">Project Installations</h3>
            <h4 className="font-[var(--font-heading)] text-[#1A2A3A] text-[24px] mb-8">On-Site Deployments</h4>

            {/* Row 1: 2 images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {infraImages.slice(0, 2).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group overflow-hidden rounded-xl bg-white border border-[#E8EAED] shadow-sm"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: 2 images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {infraImages.slice(2, 4).map((img, i) => (
                <motion.div
                  key={i + 2}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group overflow-hidden rounded-xl bg-white border border-[#E8EAED] shadow-sm"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 3: 1 image (full width) */}
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="group overflow-hidden rounded-xl bg-white border border-[#E8EAED] shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={infraImages[4].src}
                    alt={infraImages[4].alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="bg-white h-14 border-b border-[#E8EAED]" />
    </div>
  );
}