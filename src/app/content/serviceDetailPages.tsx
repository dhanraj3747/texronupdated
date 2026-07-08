// ── Types ──
type MatrixTone = "green" | "amber" | "blue";

type ServiceGalleryItem = {
  imageId: string;
  alt: string;
  category: string;
  span?: "normal" | "wide" | "tall";
};

type ServiceMatrixRow = {
  context: string;
  trigger: string;
  intervention: string;
  status: string;
  tone: MatrixTone;
  outcome: string;
};

type ServiceProcessStep = {
  title: string;
  description: string;
};

type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetailContent = {
  slug: string;
  breadcrumbLabel: string;
  seoTitle: string;
  seoDescription: string;
  pageTitle: string;
  heroIntro: string;
    heroImage?: string;
  keyStats: Array<{ value: string; label: string }>;
  galleryKicker: string;
  galleryTitle: string;
  galleryDescription: string;
  galleryImages: ServiceGalleryItem[];
  matrixKicker: string;
  matrixTitle: string;
  matrixDescription: string;
  matrixRows: ServiceMatrixRow[];
  processKicker: string;
  processTitle: string;
  processSteps: ServiceProcessStep[];
  photoDirective: string;
  engagementItems: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  faqTitle: string;
  faqSubtitle: string;
  faqItems: ServiceFaq[];
   processImageId?: string;
  processImageAlt?: string;


    // Engineering Services
  engineeringServicesTitle?: string;
  engineeringServicesSubtitle?: string;
  engineeringServicesIntro?: string;
  engineeringCapabilities?: string[];
  engineeringDeliverables?: string[];

  // Consultancy Services
  consultancyServicesTitle?: string;
  consultancyServicesSubtitle?: string;
  consultancyServicesIntro?: string;
  consultancyScope?: string[];

  // EPC Services
  epcServicesTitle?: string;
  epcServicesSubtitle?: string;
  epcServicesIntro?: string;
  epcServicesDescription?: string;
  epcServicesList?: string[];

  // Extended Lifecycle Support
  lifecycleSupportTitle?: string;
  lifecycleSupportIntro?: string;
  lifecycleSupportItems?: string[];

  // Closing
  closingTitle?: string;
  closingStatement?: string;
};

// ── Service Gallery Section (matches BHEL page exactly) ──
const ServiceGallery: React.FC<{
  kicker: string;
  title: string;
  description: string;
  images: ServiceGalleryItem[];
}> = ({ kicker, title, description, images }) => {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="site-shell">
        {/* Kicker */}
        <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
          {kicker}
        </h2>

        {/* Title */}
        <h3 className="text-[#1E3A5F] text-[24px] mb-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-[#5A6B7D] mb-6">
          {description}
        </p>

        {/* 2 Images - EXACT BHEL pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {images.map((item, index) => (
            <div key={index} className="rounded-xl overflow-hidden border border-[#E8EAED] bg-white shadow-sm">
              <img
                src={item.imageSrc}
                alt={item.alt}
                className="w-full h-[280px] object-cover"
              />
              {item.caption && (
                <div className="p-3 bg-white">
                  <p className="text-[12px] text-[#5A6B7D]">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Service Matrix Section (Cross-Reference Table) ──
const ServiceMatrix: React.FC<{
  kicker: string;
  title: string;
  description: string;
  rows: ServiceMatrixRow[];
}> = ({ kicker, title, description, rows }) => {
  const toneClasses: Record<MatrixTone, string> = {
    green: "bg-green-500",
    amber: "bg-amber-500",
    blue: "bg-blue-500",
  };

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="site-shell">
        <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
          {kicker}
        </h2>
        <h3 className="text-[#1E3A5F] text-[24px] mb-1">
          {title}
        </h3>
        <p className="text-[13px] text-[#5A6B7D] mb-6">
          {description}
        </p>

        <div className="bg-white rounded-xl border border-[#E8EAED] overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-[#1E3A5F] text-white">
                <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">CONTEXT</th>
                <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">TRIGGER</th>
                <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">INTERVENTION</th>
                <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">STATUS</th>
                <th className="text-left px-4 py-3 font-[var(--font-mono)] text-[11px] tracking-wider">OUTCOME</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/50"} hover:bg-blue-50/30 border-b border-[#E8EAED]`}>
                  <td className="px-4 py-3 text-[13px] text-[#1E3A5F] font-medium">{row.context}</td>
                  <td className="px-4 py-3 text-[12px] text-[#5A6B7D]">{row.trigger}</td>
                  <td className="px-4 py-3 text-[12px] text-[#5A6B7D]">{row.intervention}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold text-white ${toneClasses[row.tone]} whitespace-nowrap`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[12px] text-[#1E3A5F] font-medium">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// ── Service Process Section (with Photo - matches BHEL page) ──
const ServiceProcess: React.FC<{
  kicker: string;
  title: string;
  steps: ServiceProcessStep[];
  photoSrc?: string;
  photoAlt?: string;
  photoCaption?: string;
}> = ({ kicker, title, steps, photoSrc, photoAlt, photoCaption }) => {
  return (
    <section className="py-16 bg-white">
      <div className="site-shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Steps */}
          <div>
            <h2 className="font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">
              {kicker}
            </h2>
            <h3 className="text-[#1E3A5F] text-[24px] mb-6">
              {title}
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
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

          {/* Right: Photo + Engagement Cards (EXACT BHEL pattern) */}
          <div className="space-y-6">
            {photoSrc && (
              <div className="rounded-xl overflow-hidden border border-[#E8EAED] bg-white shadow-sm">
                <img
                  src={photoSrc}
                  alt={photoAlt || ""}
                  className="w-full h-[320px] object-cover"
                />
                {photoCaption && (
                  <div className="p-3 bg-white">
                    <p className="text-[12px] text-[#5A6B7D]">{photoCaption}</p>
                  </div>
                )}
              </div>
            )}

            <div className="bg-[#F5F5F5] rounded-xl p-5">
              <h4 className="font-[var(--font-mono)] text-[11px] tracking-wider text-[#1E3A5F]/50 mb-3">
                ENGAGEMENT MODEL
              </h4>
              <div className="space-y-3">
                <div className="rounded-lg border border-[#E8EAED] bg-white p-3">
                  <p className="text-[12px] text-[#1E3A5F]">Scope clarity and compatibility review within 24 hours</p>
                </div>
                <div className="rounded-lg border border-[#E8EAED] bg-white p-3">
                  <p className="text-[12px] text-[#1E3A5F]">Execution plan aligned to your shutdown calendar</p>
                </div>
                <div className="rounded-lg border border-[#E8EAED] bg-white p-3">
                  <p className="text-[12px] text-[#1E3A5F]">Post-startup stabilization support during return to service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Service FAQ Component ──
const ServiceFAQ: React.FC<{
  title: string;
  subtitle: string;
  items: ServiceFaq[];
}> = ({ title, subtitle, items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="site-shell">
        <h2 className="text-[#1E3A5F] text-[24px] mb-1">{title}</h2>
        <p className="text-[13px] text-[#5A6B7D] mb-6">{subtitle}</p>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-xl border border-[#E8EAED] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-[14px] font-medium text-[#1E3A5F]">{item.question}</span>
                <span className={`text-[#5A6B7D] text-xs transition-transform ${openIndex === index ? "rotate-180" : ""}`}>▼</span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-[13px] text-[#5A6B7D] leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Service CTA Component ──
const ServiceCTA: React.FC<{
  title: string;
  description: string;
  label: string;
}> = ({ title, description, label }) => {
  return (
    <section className="py-12 bg-[#1E3A5F] text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-[24px] mb-3 font-semibold">{title}</h2>
        <p className="text-white/60 text-[14px] mb-6 max-w-xl mx-auto">
          {description}
        </p>
        <button className="bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-6 py-3 rounded-lg transition-colors font-semibold">
          {label}
        </button>
      </div>
    </section>
  );
};
export const serviceDetailPages: Record<string, ServiceDetailContent> = {
  "turbine-overhauling": {
    slug: "turbine-overhauling",
    breadcrumbLabel: "Turbine Overhauling",
    seoTitle: "Steam Turbine Overhauling Services | Texron Power",
    seoDescription:
      "Structured steam turbine overhauling services for utility and captive plants with inspection, NDT, precision reassembly, and recommissioning support.",
    pageTitle: "Steam Turbine Overhauling",
    heroIntro:
      "A disciplined overhaul restores reliability, recovers performance, and prevents repeat outages. Texron executes end-to-end turbine overhauling with documented tolerances and restart validation.",
    keyStats: [
      { value: "7-45 days", label: "Typical Major Outage" },
      { value: "<0.04 mm", label: "Alignment Precision" },
      { value: "100%", label: "Critical Zone NDT" },
      { value: "200+", label: "Interventions Completed" },
      { value: "24 hr", label: "Initial Findings Report" },
    ],
    galleryKicker: "Field Implementation",
    galleryTitle: "Overhauling and Shutdown Gallery",
    galleryDescription:
      "Execution snapshots from disassembly, inspection, and precision reassembly phases.",
    galleryImages: [
  {
    imageId: "overhaulingImg1",
    alt: "Turbine overhauling setup during shutdown",
    category: "",
  },
  {
    imageId: "overhaulingImg2",
    alt: "Bearing and sealing assembly inspection",
    category: "",
  },
],
    
    matrixKicker: "Coverage Matrix",
    matrixTitle: "Overhauling Suitability Cross-Reference",
    matrixDescription:
      "Quick-fit view of where a major overhaul delivers the strongest lifecycle and reliability impact.",
    matrixRows: [
      {
        context: "Quarterly (3–6 months)",
        trigger: "Abnormal vibration, bearing temperature rise, alignment deviation, recurring trips",
        intervention: "Bearing health audit, alignment verification, vibration diagnostics",
        status: "High Fit",
        tone: "green",
        outcome: "Reduced forced shutdown risk",
      },
      {
        context: "Half-Yearly (6 months)",
        trigger: "Steam leakage, governor instability, efficiency drift, heat-rate increase, performance reduction",
        intervention: "Performance assessment, seal optimization, turbine health evaluation",
        status: "Recommended",
        tone: "amber",
        outcome: "Improved turbine efficiency",
      },
      {
        context: "Annual Shutdown (12 months)",
        trigger: "Planned outage window",
        intervention: "Planned outage execution, inspection & refurbishment services, relay testing and field instrument calibration",
        status: "Standard Service",
        tone: "green",
        outcome: "Reliable restart and restored performance",
      },
      {
        context: "3–5 Years / 24,000–40,000 hrs",
        trigger: "Output reduction, internal wear indicators",
        intervention: "Major steam turbine overhaul, rotor inspection, NDT, reconditioning, generator cleaning and RLA testing",
        status: "High Fit",
        tone: "green",
        outcome: "Extended equipment life and reliability",
      },
      {
        context: "5–8 Years / 40,000–60,000 hrs",
        trigger: "Frequent trips, aging components",
        intervention: "Rotor refurbishment, component replacement, retrofit solutions",
        status: "Assessment First",
        tone: "blue",
        outcome: "Reduced lifecycle cost",
      },
      {
        context: "10+ Years / Life Extension",
        trigger: "Capacity decline, repeated failures",
        intervention: "Life extension program, upgradations, complete turbine rehabilitation",
        status: "Strategic Decision",
        tone: "blue",
        outcome: "Increased asset life and plant availability",
      },
    ],
    processKicker: "Execution Process",
    processTitle: "From Scope Freeze to Reliability Run",
    processSteps: [
      {
        title: "Pre-Outage Scope and Risk Lock",
        description:
          "Failure history, spare readiness, and outage-window constraints are frozen before execution starts.",
      },
      {
        title: "Controlled Disassembly and Inspection",
        description:
          "Part-wise traceability with dimensional, NDT, and wear mapping across critical assemblies.",
      },
      {
        title: "Repair, Replacement, and Precision Build",
        description:
          "Component restoration and replacement with alignment and clearance controls to design values.",
      },
      {
        title: "Trial Run and Performance Validation",
        description:
          "Balance checks, stabilization run, and documentation handover for operations acceptance.",
      },
    ],
   
    photoDirective: "",
    processImageId: "overhaulingImg3",
    processImageAlt: "Turbine rotor assembly and bearing housing restoration",
      
    engagementItems: [
      "Scope clarity and compatibility review within 24 hours",
      "Execution plan aligned to your shutdown calendar",
      "Post-startup stabilization support during return to service",
    ],
    ctaTitle: "Planning a Turbine Major Overhaul?",
    ctaDescription:
      "Share your turbine rating, operating history, and outage window. We will return a fit for purpose overhaul plan and execution roadmap.",
    ctaLabel: "Request Overhauling Assessment",

     faqTitle: "Turbine Overhauling FAQ",
  faqSubtitle: "Common planning and execution questions from plant teams",
  faqItems: [
    {
      question: "What is steam turbine overhauling?",
      answer:
        "Steam turbine overhauling is a planned maintenance activity where the turbine is completely or partially dismantled, inspected, repaired, refurbished, reassembled, aligned, tested, and re-commissioned to restore reliability, efficiency, and operational life.",
    },
    {
      question: "When should a steam turbine be overhauled?",
      answer:
        "Overhauls are generally scheduled based on OEM recommended operating hours, number of start-stop cycles, performance degradation, increased vibration levels, steam or oil leakages, rotor instability, longer startup time, and abnormal temperatures.",
    },
    {
      question: "What activities are included during a steam turbine overhaul?",
      answer:
        "Typical scope includes turbine dismantling, rotor inspection, blade inspection, bearing inspection, valve overhauling, seal and gland replacement, spares and blades replacement as required, alignment checks, dynamic balancing, NDT inspection, and reassembly and commissioning.",
    },
    {
      question: "How long does a steam turbine overhaul take?",
      answer:
        "Duration depends on turbine size, unit condition, spare availability, and scope of repair. Minor overhauls take 5–10 days, major overhauls take 2–6 weeks, and complete rehabilitation takes 6+ weeks.",
    },
    {
      question: "Can rotor defects be repaired during overhaul?",
      answer:
        "Yes. Common repairable issues include journal damage, minor scoring, run-out correction, dynamic balancing, seal area restoration, and local machining.",
    },
    {
      question: "Is balancing required after overhaul?",
      answer:
        "Yes. Rotor balancing helps reduce vibration, improve reliability, extend bearing life, and improve turbine efficiency.",
    },
    {
      question: "Can TEXRON overhaul multi-brand steam turbines?",
      answer:
        "Yes. TEXRON supports overhaul services for multiple OEM steam turbines including Siemens, GE, Mitsubishi, Toshiba, Elliott, Triveni, BHEL, and other non-OEM steam turbines.",
    },
    {
      question: "Do you provide post-overhaul commissioning support?",
      answer:
        "Yes. Services include turning gear checks, oil flushing, startup assistance, parameter monitoring, vibration analysis, and performance validation.",
    },
  ],
  },

"erection-commissioning-testing": {
    slug: "erection-commissioning-testing",
    breadcrumbLabel: "Erection, Commissioning and Testing",
    seoTitle: "Erection and Commissioning Services for Turbine Plants | Texron Power",
    seoDescription:
      "End-to-end erection, commissioning, and performance testing services for turbine-generator systems from cold checks to synchronized load acceptance.",
    pageTitle: "Erection, Commissioning and Testing",
    heroIntro:
      "Commissioning quality defines long-term plant behavior. Texron delivers structured startup from mechanical readiness to synchronized performance acceptance.",
    keyStats: [
      { value: "100+", label: "Projects Commissioned" },
      { value: "3-75 MW", label: "Typical Execution Band" },
      { value: "100%", label: "Safety and Protection Verification" },
      { value: "24/7", label: "Escalation Support" },
    ],
    galleryKicker: "Field Implementation",
    galleryTitle: "Erection and Startup Execution Gallery",
    galleryDescription:
      "Snapshots from control panel checkout and staged load testing.",
    galleryImages: [
      {
        imageId: "erectionGalleryImg2",
        alt: "Control panel and loop validation",
        category: "Control Checkout",
      },
      {
        imageId: "erectionPhotoImg",
        alt: "Commissioning team during final startup sequence",
        category: "Load Trial",
        span: "tall",
      },
    ],
    matrixKicker: "Coverage Matrix",
    matrixTitle: "Commissioning Use-Case Cross-Reference",
    matrixDescription:
      "Where Texron commissioning support creates the most reliability and handover value.",
    matrixRows: [
      {
        context: "New Steam Turbine Installation",
        trigger: "Greenfield project or new generating unit",
        intervention: "Complete turbine erection, alignment, piping interface support, pre-commissioning checks",
        status: "High Fit",
        tone: "green",
        outcome: "Safe installation and readiness for startup",
      },
      {
        context: "Plant Expansion / Capacity Addition",
        trigger: "Additional turbine-generator train integration",
        intervention: "Mechanical erection supervision, balance-of-plant coordination, E&I Solutions, commissioning support",
        status: "Recommended",
        tone: "amber",
        outcome: "Faster integration with existing plant",
      },
      {
        context: "Turbine Relocation / Reinstallation",
        trigger: "Unit transferred from another facility",
        intervention: "Dismantling support, re-erection, alignment, startup assistance",
        status: "Specialized Service",
        tone: "green",
        outcome: "Reduced restart risk and reliable operation",
      },
      {
        context: "Post-Major Overhaul Startup",
        trigger: "Turbine reassembled after outage",
        intervention: "Re-commissioning, system flushing, loop checks, performance validation",
        status: "High Fit",
        tone: "green",
        outcome: "Controlled startup and stable loading",
      },
      {
        context: "Replacement of Major Components",
        trigger: "Rotor, casing, bearing, valve, or gearbox replacement",
        intervention: "Precision assembly, dimensional verification, commissioning and tuning",
        status: "Recommended",
        tone: "amber",
        outcome: "Improved reliability and reduced startup issues",
      },
      {
        context: "Delayed / Long Shutdown Recovery",
        trigger: "Plant restart after extended idle period",
        intervention: "Condition assessment, reconditioning with spares support, establishing electrical and control systems, recommissioning protocol, trial run support",
        status: "Assessment First",
        tone: "blue",
        outcome: "Smooth return to operation",
      },
      {
        context: "Emergency Restoration",
        trigger: "Forced outage or breakdown event",
        intervention: "Fast-track recovery and commissioning",
        status: "Priority Support",
        tone: "green",
        outcome: "Minimized downtime",
      },
      {
        context: "Modernization / Retrofit Project",
        trigger: "Upgrade of turbine controls or mechanical systems",
        intervention: "Retrofit execution, control integration, functional commissioning",
        status: "Strategic Service",
        tone: "blue",
        outcome: "Improved efficiency and plant availability",
      },
    ],

    // ═══════════════════════════════════════════════════════
    // UPDATED: Execution Process — replaced with Word document content
    // 5 steps with full descriptions from the Word document
    // ═══════════════════════════════════════════════════════
    processKicker: "Execution Process",
    processTitle: "Startup Governance from Day One",
    processSteps: [
      {
        title: "Site Readiness & Pre-Commissioning",
        description:
          "Equipment installation verification, alignment and foundation checks, piping flushing and cleanliness confirmation, instrument calibration and electrical inspections, punch point closure and safety clearance.",
      },
      {
        title: "Mechanical Completion",
        description:
          "Steam turbine and generator assembly verification, lubrication, hydraulic and sealing system checks, coupling alignment and rotor rotation verification, auxiliary systems functional testing.",
      },
      {
        title: "Cold Commissioning",
        description:
          "Control logic and protection testing, governor and actuator calibration, interlock, trip and alarm verification, lube oil circulation and auxiliary equipment trials.",
      },
      {
        title: "Hot Commissioning & Initial Rolling",
        description:
          "Controlled steam admission, rotor warming and turbine rolling, vibration, bearing temperature and axial position monitoring, critical speed passage and stability verification.",
      },
      {
        title: "Synchronization & Load Trials",
        description:
          "Generator synchronization with grid, stepwise load increase (25%, 50%, 75%, 100%), governor tuning and performance optimization, efficiency and operational parameter verification.",
      },
    ],
    // ═══════════════════════════════════════════════════════

    photoDirective: "",
    processImageId: "erectionGalleryImg1",
    processImageAlt: "",
    engagementItems: [
      "Pre-commissioning gap list and closure tracker",
      "Shift-wise startup supervision during critical windows",
      "Structured operator handover at acceptance stage",
    ],
    ctaTitle: "Preparing for Startup or Re-Commissioning?",
    ctaDescription:
      "Share your unit rating, startup target date, and current readiness state. We will return a commissioning control plan.",
    ctaLabel: "Request Commissioning Plan",
    faqTitle: "Commissioning and Testing FAQ",
    faqSubtitle: "Common questions on erection, startup quality, scheduling, and acceptance",
    faqItems: [
      {
        question: "How long does steam turbine generator erection and commissioning usually take?",
        answer:
          "Typical duration varies by capacity: small industrial turbines take 4–8 weeks, medium industrial STG takes 8–16 weeks, and utility-scale STG takes 4–8 months. Factors include site readiness, OEM requirements, crane availability, steam blowing duration, and electrical system completion.",
      },
      {
        question: "Why is alignment critical during installation?",
        answer:
          "Incorrect alignment may lead to excessive bearing vibration, coupling failures, shaft bending, seal rubbing, and reduced equipment life.",
      },
      {
        question: "What is soft foot and why must it be eliminated?",
        answer:
          "Soft foot occurs when machine feet do not sit uniformly on the base. It causes frame distortion, shaft misalignment, high vibration, and bearing overheating.",
      },
      {
        question: "Why is piping stress verification important?",
        answer:
          "Excessive piping loads can distort the turbine casing, affect rotor alignment, increase vibration, and cause steam leakage.",
      },
      {
        question: "What is steam blowing and why is it required?",
        answer:
          "Steam blowing removes welding slag, scale, rust particles, and construction debris from steam lines. Acceptance is confirmed through witness plate inspection achieving target cleanliness.",
      },
      {
        question: "Why is barring/turning gear operated before startup?",
        answer:
          "Turning gear prevents rotor bowing, ensures uniform temperature distribution, and protects seals and bearings during startup.",
      },
      {
        question: "What causes high vibration during commissioning?",
        answer:
          "Common causes include rotor imbalance, alignment error, piping strain, foundation looseness, steam parameter instability, and rubs or seal contact.",
      },
      {
        question: "What is overspeed testing?",
        answer:
          "Overspeed testing validates mechanical integrity, trip system functionality, and governor performance.",
      },
      {
        question: "What documents are handed over after commissioning?",
        answer:
          "Typical handover package includes alignment reports, commissioning reports, calibration certificates, test records, as-built drawings, punch list closure, and O&M manuals.",
      },
      {
        question: "What are the most common reasons for commissioning delays?",
        answer:
          "Late utility availability, steam quality issues, delay in oil quality clearing, climate conditions, and statutory clearances.",
      },
      {
        question: "Can multi-brand steam turbines be erected and commissioned?",
        answer:
          "Yes. We support OEM and non-OEM turbines, brownfield upgrades, retrofit and modernization, RLA tests, and performance optimization.",
      },
      {
        question: "What support is recommended after commissioning?",
        answer:
          "Initial operation support, reliability monitoring, vibration trending, annual inspections, LTSA/AMC contracts, and remote troubleshooting.",
      },
    ],
  },


"engineering-consultancy": {
  slug: "engineering-consultancy",
  breadcrumbLabel: "Engineering Consultancy and EPC Services",
  seoTitle: "Engineering Consultancy and EPC Services | Texron Power",
  seoDescription:
    "End-to-end engineering consultancy and EPC services for steam turbine generator sets and power plants—from concept and design through procurement, construction, commissioning, and lifecycle support.",
  pageTitle: "Engineering Consultancy and EPC Services",
  heroIntro:
    "TEXRON delivers end-to-end engineering solutions for steam turbine generator (TG) sets and power plant systems with a focus on performance, reliability, safety, and long-term operational efficiency. Our engineering team supports customers from concept development through commissioning with practical, field-driven expertise.",
  heroImage: "enggConsultantImg",
  keyStats: [
    { value: "28+", label: "Years of Experience" },
    { value: "EPC", label: "Turnkey Delivery" },
    { value: "100%", label: "Quality Assurance" },
    { value: "24/7", label: "Project Support" },
    { value: "Full", label: "Lifecycle Coverage" },
  ],

  // ── Engineering Services ──
  engineeringServicesTitle: "Engineering Services",
  engineeringServicesSubtitle: "Precision Engineering for Reliable Power Generation",
  engineeringServicesIntro:
    "TEXRON delivers end-to-end engineering solutions for steam turbine generator (TG) sets and power plant systems with a focus on performance, reliability, safety, and long-term operational efficiency.\n\nOur engineering team supports customers from concept development through commissioning with practical, field-driven expertise.",
  engineeringCapabilities: [
    "Basic design parameter assessment and feasibility review",
    "Plant layout development and equipment orientation studies",
    "Engineering drawings and installation documentation",
    "Construction stage inspections and technical supervision",
    "Installation procedure development and execution support",
    "Safety assessment including alarm and trip value evaluation",
    "Commissioning planning and protocol preparation",
    "Documentation and records for future operation and maintenance",
  ],
  engineeringDeliverables: [
    "Design Evaluation",
    "Installation Engineering",
    "Construction Support",
    "Commissioning Documentation",
    "Performance Optimization",
  ],

  // ── Consultancy Services ──
  consultancyServicesTitle: "Consultancy Services",
  consultancyServicesSubtitle: "Expert Guidance for Smarter Power Plant Decisions",
  consultancyServicesIntro:
    "TEXRON provides specialized engineering consultancy services to support modernization, optimization, and performance enhancement of power generation assets.\n\nOur experienced consultants help customers make informed technical and commercial decisions throughout the project lifecycle.",
  consultancyScope: [
    "Plant Condition Assessment",
    "Power Plant Modernization & Optimization",
    "Sustainability & Carbon Reduction",
    "Site Assessment & Technical Advisory",
    "Procurement & Specification Support",
  ],

  // ── EPC Services ──
  epcServicesTitle: "EPC Services",
  epcServicesSubtitle: "Engineering • Procurement • Construction",
  epcServicesIntro: "Complete Turnkey Solutions for Steam Turbine Generator Sets & Power Plants",
  epcServicesDescription:
    "TEXRON provides complete EPC execution services for steam turbine generator systems and power plants from concept and engineering through installation, commissioning, and performance validation.",
  epcServicesList: [
    "Understanding customer requirements & Finalizing plant type and capacity",
    "Detailed engineering & design specifications for STG, auxiliary systems & Balance of Plant.",
    "Procurement service and support",
    "Construction service and support with Quality assurance",
    "FAT, Warranty checks, Packing verification & logistics coordination",
    "Site installation, Commissioning and final hand-over with documentation",
  ],

  // ── Extended Lifecycle Support ──
  lifecycleSupportTitle: "Extended Lifecycle Support",
  lifecycleSupportIntro: "Beyond EPC execution, TEXRON continues to support customers through:",
  lifecycleSupportItems: [
    "Operation & Maintenance (O&M)",
    "Annual Maintenance Contracts (AMC)",
    "Routine Health Check Programs",
    "Steam Turbine Overhauling",
    "Spare Parts Supply",
    "Electrical & Instrumentation Testing",
  ],

  // ── Closing ──
  closingTitle: "Delivering Reliable Power Through Engineering Excellence",
  closingStatement:
    "From concept to commissioning and beyond, TEXRON partners with customers to maximize performance, reliability, and operational value across power generation assets.",

  // ── Gallery (1 image only) ──
  galleryKicker: "Field Implementation",
  galleryTitle: "Engineering and EPC Execution Gallery",
  galleryDescription:
    "Execution snapshots from engineering design, construction supervision, and commissioning handover phases.",
  galleryImages: [
    {
      imageId: "epcGalleryImg",
      alt: "Engineering design and plant layout development",
      category: "",
      span: "wide",
    },
  ],

  // ── Matrix (empty for this page) ──
  matrixKicker: "",
  matrixTitle: "",
  matrixDescription: "",
  matrixRows: [],

  // ── Process ──
  processKicker: "Execution Process",
  processTitle: "From Concept to Commissioning and Beyond",
  processSteps: [
    {
      title: "Requirements and Concept Development",
      description:
        "Understanding customer requirements, finalizing plant type and capacity, and conducting basic design parameter assessment and feasibility review.",
    },
    {
      title: "Detailed Engineering and Procurement",
      description:
        "Plant layout development, equipment orientation studies, engineering drawings, installation documentation, procurement support, and FAT with warranty verification.",
    },
    {
      title: "Construction and Installation Support",
      description:
        "Construction stage inspections, technical supervision, installation procedure development, execution support, and safety assessment including alarm and trip value evaluation.",
    },
    {
      title: "Commissioning and Lifecycle Handover",
      description:
        "Commissioning planning and protocol preparation, performance validation, documentation and records for future O&M, and transition to AMC or LTSA programs.",
    },
  ],

  engagementItems: [
    "Concept-to-commissioning EPC execution with single-point accountability",
    "Construction supervision and quality assurance aligned to your timeline",
    "Post-handover O&M, AMC, and spares support for continuous reliability",
  ],
  ctaTitle: "Planning a New Plant or Modernization?",
  ctaDescription:
    "Share your project scope, capacity requirements, and timeline. We will return a tailored engineering or EPC execution plan with clear milestones and deliverables.",
  ctaLabel: "Request Engineering Consultation",
  faqTitle: "Engineering and EPC FAQ",
  faqSubtitle: "Common questions on scope, execution, and lifecycle support",
  faqItems: [
    {
      question: "What is included in Texron EPC services?",
      answer:
        "Our EPC covers the complete lifecycle: understanding requirements, detailed engineering and design specifications for STG and auxiliary systems, procurement support, construction with quality assurance, FAT and logistics coordination, site installation, commissioning, and final handover with documentation.",
    },
    {
      question: "Do you support both new projects and existing plant upgrades?",
      answer:
        "Yes. We deliver full EPC for greenfield installations and targeted engineering consultancy for modernization, optimization, and performance enhancement of existing power generation assets.",
    },
    {
      question: "What engineering deliverables do we receive?",
      answer:
        "You receive design evaluation reports, installation engineering drawings, construction support documentation, commissioning protocols, safety assessment records, and performance optimization recommendations.",
    },
    {
      question: "What happens after commissioning is complete?",
      answer:
        "TEXRON continues support through Operation & Maintenance (O&M), Annual Maintenance Contracts (AMC), routine health check programs, steam turbine overhauling, spare parts supply, and electrical & instrumentation testing.",
    },
  ],
},

  "vibration-analysis-diagnostics": {
    slug: "vibration-analysis-diagnostics",
    breadcrumbLabel: "Vibration Analysis and Diagnostics",
    seoTitle: "Turbine Vibration Analysis and Diagnostics | Texron Power",
    seoDescription:
      "Advanced vibration diagnostics for steam turbines and auxiliaries including spectrum analysis, phase checks, balancing support, and corrective action planning.",
    pageTitle: "Vibration Analysis and Diagnostics",
    heroIntro:
      "Abnormal vibration is usually the first visible symptom of deeper turbine issues. Texron maps signatures to root causes and actionable correction plans.",
    keyStats: [
      { value: "<48 hr", label: "Rapid Diagnostic Visit" },
      { value: "3-axis", label: "Measurement Coverage" },
      { value: "360 deg", label: "Orbit and Phase Review" },
      { value: "In-situ", label: "Balancing Capability" },
      { value: "Tiered", label: "Severity Classification" },
    ],
    galleryKicker: "Field Implementation",
    galleryTitle: "Vibration and Condition Monitoring Gallery",
    galleryDescription:
      "Typical diagnostic setups used for high-confidence root-cause isolation.",
    galleryImages: [
      {
        imageId: "vibrationImg1",
        alt: "Field vibration diagnostic setup near turbine train",
        category: "Data Capture",
        span: "wide",
      },
      {
        imageId: "vibrationImg2",
        alt: "Bearing zone condition review",
        category: "Bearing Analysis",
      },
      {
        imageId: "vibrationImg3",
        alt: "Rotor line vibration interpretation and logging",
        category: "Root-Cause Review",
        span: "tall",
      },
    ],
    matrixKicker: "Coverage Matrix",
    matrixTitle: "Diagnostic Fit by Vibration Scenario",
    matrixDescription:
      "Quick map of where targeted vibration diagnostics produce the highest operational return.",
    matrixRows: [
      {
        context: "Rising trend on one bearing",
        trigger: "Velocity and displacement drift",
        intervention: "Frequency-domain and phase analysis",
        status: "High Fit",
        tone: "green",
        outcome: "Early fault isolation",
      },
      {
        context: "Post-maintenance instability",
        trigger: "Unexpected resonance behavior",
        intervention: "Alignment and soft-foot correlation",
        status: "Recommended",
        tone: "amber",
        outcome: "Stable ramp performance",
      },
      {
        context: "Frequent vibration trips",
        trigger: "Threshold breach at loading",
        intervention: "Severity mapping and correction sequencing",
        status: "High Fit",
        tone: "green",
        outcome: "Trip recurrence reduction",
      },
      {
        context: "Unknown multi-point anomalies",
        trigger: "Conflicting signal behavior",
        intervention: "Expanded diagnostic campaign",
        status: "Assessment First",
        tone: "blue",
        outcome: "Clear remediation pathway",
      },
    ],
    processKicker: "Execution Process",
    processTitle: "From Signal Capture to Corrective Action",
    processSteps: [
      {
        title: "Measurement Plan and Baseline Capture",
        description:
          "Operating envelope and sensor points are mapped before acquiring repeatable reference data.",
      },
      {
        title: "Spectrum, Phase, and Orbit Interpretation",
        description:
          "Signal signatures are correlated to probable failure modes with severity grading.",
      },
      {
        title: "Root-Cause Validation",
        description:
          "Mechanical, thermal, and control contributors are cross-checked before prescribing intervention.",
      },
      {
        title: "Corrective Action and Verification Run",
        description:
          "Balancing, alignment, or structural correction is validated through repeat measurements.",
      },
    ],
    photoDirective:
      "Diagnostic workflow board showing vibration spectrum, phase map, and recommended correction priorities.",
    engagementItems: [
      "Fast mobilization for high-severity alarms",
      "Data-backed diagnosis instead of trial-and-error fixes",
      "Verification reporting after corrective action",
    ],
    ctaTitle: "Seeing Vibration Alarms or Unstable Loading?",
    ctaDescription:
      "Share your latest trend snapshots and unit details. We will propose a targeted diagnostic plan with escalation priority.",
    ctaLabel: "Request Vibration Diagnosis",
    faqTitle: "Vibration Diagnostics FAQ",
    faqSubtitle: "Typical questions from operation and reliability teams",
    faqItems: [
      {
        question: "Can vibration diagnostics be done without a long shutdown?",
        answer:
          "Yes. Most investigations start online with targeted runs. We recommend shutdown-only checks when evidence points to hardware correction needs.",
      },
      {
        question: "Do you support in-situ balancing?",
        answer:
          "Yes. Texron supports in-situ balancing where access and operating conditions allow controlled correction cycles.",
      },
      {
        question: "What output does the report include?",
        answer:
          "The report includes severity class, probable root cause, risk implication, and a prioritized corrective action plan with verification criteria.",
      },
      {
        question: "Can diagnostics be integrated into LTSA reviews?",
        answer:
          "Yes. Vibration trend analysis is commonly embedded into LTSA reliability review cycles for condition-based planning.",
      },
    ],
  },
  "turbine-refurbishment-life-extension": {
    slug: "turbine-refurbishment-life-extension",
    breadcrumbLabel: "Turbine Refurbishment",
    seoTitle: "Turbine and Generator Refurbishment Services | Texron Power",
    seoDescription:
      "Life extension refurbishment services for aging turbine-generator assets including component restoration, re-engineering, and controlled recommissioning.",
    pageTitle: "Turbine and Generator Refurbishment",
    heroIntro:
      "Refurbishment is the smart middle path between running-to-failure and full replacement. Texron restores critical turbine-generator assemblies to extend service life with controlled risk.",
    keyStats: [
      { value: "3-8 yrs", label: "Typical Life Extension" },
      { value: "40-65%", label: "Capex Saving vs New" },
      { value: "100%", label: "Component Grading" },
      { value: "OEM+", label: "Equivalent Spares Path" },
      { value: "Stagewise", label: "Outage Planning Option" },
    ],
    galleryKicker: "Field Implementation",
    galleryTitle: "Refurbishment and Recovery Gallery",
    galleryDescription:
      "Examples of component renewal and subsystem restoration from live projects.",
    galleryImages: [
      {
        imageId: "refurbishmentImg1",
        alt: "Generator refurbishment and inspection sequence",
        category: "Electrical Recovery",
        span: "wide",
      },
      {
        imageId: "refurbishmentImg2",
        alt: "Mechanical component restoration work",
        category: "Mechanical Recovery",
      },
      {
        imageId: "refurbishmentImg3",
        alt: "Refurbished turbine assembly ready for recommissioning",
        category: "Return to Service",
        span: "tall",
      },
    ],
    matrixKicker: "Coverage Matrix",
    matrixTitle: "Refurbishment Suitability Cross-Reference",
    matrixDescription:
      "A quick decision-support matrix for refurbishment-first asset strategy.",
    matrixRows: [
      {
        context: "Aging unit with stable demand",
        trigger: "Frequent minor failures",
        intervention: "Subsystem refurbishment and reset",
        status: "High Fit",
        tone: "green",
        outcome: "Lifecycle extension with lower capex",
      },
      {
        context: "Obsolete OEM support",
        trigger: "Long spares lead time",
        intervention: "Re-engineered replacement route",
        status: "Recommended",
        tone: "amber",
        outcome: "Improved maintainability",
      },
      {
        context: "Repeated efficiency decline",
        trigger: "Mechanical and electrical wear signs",
        intervention: "Combined turbine-generator refurbishment",
        status: "High Fit",
        tone: "green",
        outcome: "Better stability and output quality",
      },
      {
        context: "Major unknown historical wear",
        trigger: "No recent condition records",
        intervention: "Condition grading campaign",
        status: "Assessment First",
        tone: "blue",
        outcome: "Evidence-based project scope",
      },
    ],
    processKicker: "Execution Process",
    processTitle: "Restoration Workflow with Traceability",
    processSteps: [
      {
        title: "Baseline Condition Grading",
        description:
          "Mechanical and electrical condition classes are assigned to identify high-return restoration targets.",
      },
      {
        title: "Repair vs Replace Engineering Decision",
        description:
          "Each major component is evaluated for restoration viability, risk, and lifecycle economics.",
      },
      {
        title: "Component Renewal and Integration",
        description:
          "Restoration, re-manufacture, and subsystem refresh executed to agreed standards.",
      },
      {
        title: "Functional Validation and Handover",
        description:
          "Post-work testing confirms readiness and supports structured return-to-service decisions.",
      },
    ],
    photoDirective:
      "Refurbishment comparison board showing pre-work degradation and post-work restored assembly condition.",
    engagementItems: [
      "Lifecycle-driven scope balancing cost and reliability",
      "Engineering support for obsolete or discontinued parts",
      "Documented post-refurbishment operation envelope",
    ],
    ctaTitle: "Evaluating Refurbishment vs Replacement?",
    ctaDescription:
      "Share your unit age, failure history, and budget horizon. We will help you select the right life-extension strategy.",
    ctaLabel: "Request Refurbishment Review",
    faqTitle: "Refurbishment Services FAQ",
    faqSubtitle: "Questions on viability, savings, and execution planning",
    faqItems: [
      {
        question: "How much life extension is realistic after refurbishment?",
        answer:
          "Depending on baseline condition and duty profile, many projects achieve a 3 to 8 year extension with improved reliability.",
      },
      {
        question: "Can refurbishment be phased across planned outages?",
        answer:
          "Yes. We can phase critical-path components first and complete secondary restoration in later windows without compromising engineering continuity.",
      },
      {
        question: "Do you handle both turbine and generator scopes together?",
        answer:
          "Yes. Texron supports integrated mechanical and electrical refurbishment programs to avoid fragmented execution risks.",
      },
      {
        question: "How do you control quality on restored components?",
        answer:
          "Restored parts are verified through dimensional checks, test records, and documented release criteria before integration.",
      },
    ],
  },
"ltsa-amc-services": {
  slug: "ltsa-amc-services",
  breadcrumbLabel: "LTSA and AMC Services",
  seoTitle: "LTSA and AMC Services for Turbine Plants | Texron Power",
  seoDescription:
    "Long-term service agreements and annual maintenance contracts for turbine-generator assets with preventive schedules, response SLAs, and reliability reporting.",
  pageTitle: "LTSA and AMC Services",
  heroIntro:
    "Texron LTSA and AMC programs convert maintenance into a planned reliability discipline with response commitments, transparent reporting, and lifecycle accountability.",
  keyStats: [
    { value: "24/7", label: "Emergency Response" },
    { value: "Quarterly", label: "Planned Health Reviews" },
    { value: "SLA", label: "Escalation Matrix" },
    { value: "Predictive", label: "Maintenance Strategy" },
    { value: "Annual", label: "Reliability Dashboard" },
  ],
 
  galleryImages: [],
  matrixKicker: "",
  matrixTitle: "",
  matrixDescription: "",
  matrixRows: [],
  processKicker: "Execution Process",
  processTitle: "Agreement Lifecycle Delivery Model",
  processSteps: [
    {
      title: "Baseline Audit and Risk Ranking",
      description:
        "Plant condition, operating pattern, and failure history are mapped into a risk-classified service plan.",
    },
    {
      title: "Maintenance Calendar and SLA Setup",
      description:
        "Visit frequency, escalation tiers, and response windows are locked with owner teams.",
    },
    {
      title: "Periodic Diagnostics and Corrective Actions",
      description:
        "Condition trends and field findings are converted into planned interventions instead of emergency reactions.",
    },
    {
      title: "Quarterly and Annual Governance Reviews",
      description:
        "Open risks, KPIs, and strategic recommendations are reviewed with management and operations stakeholders.",
    },
  ],
  photoDirective: "",
  processImageId: "ltsaImg3",
  processImageAlt: "",
  engagementItems: [
    "Clear response commitments with escalation owners",
    "Spares and obsolescence planning built into service cycle",
    "Reliability reporting for operations and management layers",
  ],
  ctaTitle: "Need a Structured Long-Term Service Program?",
  ctaDescription:
    "Share your unit count, maintenance model, and response expectations. We will design a practical LTSA/AMC framework for your plant.",
  ctaLabel: "Discuss LTSA and AMC Scope",

  faqTitle: "LTSA and AMC FAQ",
  faqSubtitle: "Frequently asked questions on agreement scope, coverage, and response model",
  faqItems: [
    {
      question: "What is a Long-Term Service Agreement (LTSA) for a steam turbine?",
      answer:
        "A Long-Term Service Agreement (LTSA) is a multi-year service partnership covering preventive maintenance, inspections, technical support, spare parts planning, performance monitoring, outage support, and lifecycle management to improve turbine reliability and availability.",
    },
    {
      question: "What is included in a Steam Turbine Annual Maintenance Contract (AMC)?",
      answer:
        "Typical AMC scope includes scheduled preventive maintenance, routine inspections and health assessments, emergency breakdown support, operational troubleshooting, spare parts recommendations, condition monitoring, alignment and vibration checks, and maintenance reports and documentation.",
    },
    {
      question: "What is the difference between LTSA and AMC?",
      answer:
        "LTSA focuses on long-term lifecycle optimization with strategic maintenance planning and performance guarantees over several years. AMC focuses on recurring annual maintenance activities to maintain normal equipment operation and reduce unexpected downtime.",
    },
    {
      question: "Which steam turbine brands can be covered under LTSA or AMC?",
      answer:
        "Services can be provided for multiple OEM and non-OEM turbines including utility steam turbines, industrial steam turbines, back-pressure turbines, condensing turbines, extraction-condensing turbines, and combined heat and power (CHP) turbine systems.",
    },
    {
      question: "Can LTSA/AMC be customized based on plant operating conditions?",
      answer:
        "Yes. Service agreements are customized according to turbine capacity, operating hours, start-stop frequency, steam conditions, criticality of operation, planned outage schedules, and budget and maintenance philosophy.",
    },
    {
      question: "Do service contracts include emergency breakdown support?",
      answer:
        "Yes. Emergency support options include remote technical assistance, on-site troubleshooting, rapid mobilization of service engineers, spare parts support, and outage recovery assistance.",
    },
    {
      question: "Are spare parts included under LTSA or AMC?",
      answer:
        "This depends on contract scope. Options may include consumables only, critical spares coverage, complete spare parts management, vendor-managed inventory, and emergency spare availability.",
    },
    {
      question: "How does an LTSA reduce turbine lifecycle cost?",
      answer:
        "An LTSA helps reduce lifecycle cost by preventing major failures, extending component life, improving turbine efficiency, optimizing outage duration, reducing unplanned shutdowns, and improving maintenance budgeting.",
    },
    {
      question: "Is condition monitoring included in the service contract?",
      answer:
        "Yes. Advanced contracts may include vibration analysis, temperature monitoring, rotor health assessment, oil analysis, performance trending, and digital condition monitoring solutions.",
    },
    {
      question: "Can the contract include outage management services?",
      answer:
        "Yes. Outage support can include shutdown planning, manpower deployment, inspection and reporting, repair execution, reassembly and commissioning, and performance validation.",
    },
    {
      question: "Do you provide performance improvement and retrofit recommendations?",
      answer:
        "Yes. Service contracts can include efficiency upgrades, governor retrofit, control system modernization, steam path optimization, and reliability improvement programs.",
    },
    {
      question: "How can customers request an LTSA or AMC proposal?",
      answer:
        "Customers can submit turbine details, OEM and model information, capacity and operating hours, existing maintenance history, and required service scope. Our team will evaluate the operating profile and prepare a customized service proposal.",
    },
  ],
},
};





// ── COMPLETE Turbine Overhauling Page (ALL sections rendered) ──
export const TurbineOverhaulingPage: React.FC = () => {
  const page = serviceDetailPages["turbine-overhauling"];

  return (
    <div>
      {/* 1. GALLERY SECTION — 2 images (over1, over2) */}
      <ServiceGallery
        kicker={page.galleryKicker}
        title={page.galleryTitle}
        description={page.galleryDescription}
        images={page.galleryImages}
      />

      {/* 2. MATRIX SECTION — Cross-Reference Table */}
      <ServiceMatrix
        kicker={page.matrixKicker}
        title={page.matrixTitle}
        description={page.matrixDescription}
        rows={page.matrixRows}
      />

      {/* 3. PROCESS SECTION — Steps + Photo (over3) */}
      <ServiceProcess
        kicker={page.processKicker}
        title={page.processTitle}
        steps={page.processSteps}
        photoSrc={over3Img}
        photoAlt="Before/after overhaul board showing bearing housing restoration"
        photoCaption="Before/after overhaul board showing bearing housing restoration and rotor alignment verification"
      />

      {/* 4. CTA SECTION */}
      <ServiceCTA
        title={page.ctaTitle}
        description={page.ctaDescription}
        label={page.ctaLabel}
      />

      {/* 5. FAQ SECTION */}
      <ServiceFAQ
        title={page.faqTitle}
        subtitle={page.faqSubtitle}
        items={page.faqItems}
      />
    </div>
  );
};