import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Phone, Menu, X, MessageCircle, ChevronDown, Shield, Zap, Radio, Settings, Wrench } from "lucide-react";
import { TexronLogo } from "./TexronLogo";

const productItems = [
  { name: "Steam Turbine", slug: "steam-turbine", icon: Shield },
  { name: "Governor retrofit and upgrades", slug: "refurbishment-retrofit-upgrades", icon: Settings },
  { name: "Electrical Panels", slug: "electrical-panels", icon: Zap },
  { name: "Spares", slug: "spares", icon: Wrench },
  { name: "Process Instruments", slug: "process-instruments", icon: Radio },
];

const serviceItems = [
  { name: "Repurshiment", slug: "/services/governor-retrofits-upgrades" },
  { name: "RLA & Condition Assessment", slug: "/services/rla-condition-assessment" },
  { name: "Overhauling", slug: "/services/turbine-overhauling" },
  { name: "LTSA & AMC Services", slug: "/services/ltsa-amc-services" },
  { name: "Erection & Commissioning", slug: "/services/erection-commissioning-testing" },
  { name: "Engineering Consultancy and EPC Services", slug: "/services/engineering-consultancy" },
 { name: "Value Added Services", slug: "/services/value-added-services" }

];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Auto-close menu when route actually changes
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  // Used only for non-dropdown mobile items (Home, Infrastructure, etc.)
const handleMobileNav = (path: string) => {
  navigate(path);
  setMobileOpen(false);
  setOpenDropdown(null);
  // ✅ ADD THIS: Force scroll to top on mobile nav
  window.scrollTo(0, 0);
};

  return (
    <header className="bg-[#1A2A3A] text-white sticky top-0 z-50">
      {/* Emergency Strip */}
      <div className="bg-[#FF6B35] text-white py-1.5">
        <div className="site-shell flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse hidden sm:block" />
            <span className="font-[var(--font-mono)] text-[10px] sm:text-[11px] tracking-wide">
              24/7 WE ARE AVAILABLE ON
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+916364829650" className="flex items-center gap-1 font-[var(--font-mono)] text-[11px] hover:underline">
              <Phone className="w-3 h-3" /> +91 6364829650
            </a>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a href="https://wa.me/918904017774" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1 text-[11px] hover:underline">
              <MessageCircle className="w-3 h-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="site-shell relative">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-36 h-14">
              <TexronLogo />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link to="/" className={`px-3 py-2 rounded text-[13px] transition-colors ${isActive("/") ? "bg-white/15 text-white" : "text-white/70 hover:text-white hover:bg-white/10"}`}>
              Home
            </Link>
            <button type="button" onClick={() => toggleDropdown("products")} className={`flex items-center gap-1 px-3 py-2 rounded text-[13px] transition-colors ${isActive("/products") ? "bg-white/15 text-white" : "text-white/70 hover:text-white hover:bg-white/10"}`}>
              Products <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`} />
            </button>
            <button type="button" onClick={() => toggleDropdown("services")} className={`flex items-center gap-1 px-3 py-2 rounded text-[13px] transition-colors ${isActive("/services") ? "bg-white/15 text-white" : "text-white/70 hover:text-white hover:bg-white/10"}`}>
              Services <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`} />
            </button>
            {["/infrastructure", "/customers", "/blog", "/contact"].map((path) => (
              <Link key={path} to={path} className={`px-3 py-2 rounded text-[13px] transition-colors ${isActive(path) ? "bg-white/15 text-white" : "text-white/70 hover:text-white hover:bg-white/10"}`}>
                {path.replace("/", "").replace(/^./, (c) => c.toUpperCase())}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="hidden lg:flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a2a] text-white px-4 py-2 rounded transition-colors shrink-0">
            <Phone className="w-4 h-4" />
            <span className="text-[12px]">Get in Touch</span>
          </Link>

          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Desktop Products Dropdown */}
        {openDropdown === "products" && (
          <>
            <div className="hidden lg:block fixed inset-0 z-40" onClick={() => setOpenDropdown(null)} />
            <div className="hidden lg:block absolute left-0 right-0 bg-white text-[#1A2A3A] shadow-2xl border-t-2 border-[#FF6B35] z-50">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-[var(--font-heading)] text-[14px] text-[#FF6B35] tracking-wider uppercase mb-3">Products</h4>
                    <div className="space-y-1">
                      {productItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link key={item.slug} to={`/products/${item.slug}`} onClick={() => setOpenDropdown(null)} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#F3F4F6] transition-colors group">
                            <Icon className="w-4 h-4 text-[#6B7280] group-hover:text-[#FF6B35] transition-colors shrink-0" />
                            <span className="text-[13px] text-[#1A2A3A] group-hover:text-[#FF6B35] transition-colors">{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E5E7EB]">
                  <Link to="/products" onClick={() => setOpenDropdown(null)} className="text-[13px] text-[#FF6B35] hover:text-[#e55a2a] font-[var(--font-heading)] tracking-wider">
                    VIEW ALL PRODUCTS →
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Desktop Services Dropdown */}
        {openDropdown === "services" && (
          <>
            <div className="hidden lg:block fixed inset-0 z-40" onClick={() => setOpenDropdown(null)} />
            <div className="hidden lg:block absolute left-0 right-0 bg-white text-[#1A2A3A] shadow-2xl border-t-2 border-[#FF6B35] z-50">
              <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-[var(--font-heading)] text-[14px] text-[#FF6B35] tracking-wider uppercase mb-3">Field Services</h4>
                    <div className="space-y-1">
                      {serviceItems.map((item) => (
                        <Link key={item.name} to={item.slug} onClick={() => setOpenDropdown(null)} className="block p-2.5 rounded-lg hover:bg-[#F3F4F6] text-[13px] text-[#1A2A3A] hover:text-[#FF6B35] transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#F3F4F6] rounded-xl p-5">
                    <h4 className="font-[var(--font-heading)] text-[14px] text-[#1A2A3A] mb-2">Detailed Services</h4>
                  
                    <Link to="/services" onClick={() => setOpenDropdown(null)} className="text-[12px] text-[#FF6B35] font-[var(--font-heading)] tracking-wider">
                      VIEW All SERVICES →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

{/* ═══════════════════════════════════════
          MOBILE NAVIGATION MENU
          ═══════════════════════════════════════ */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#162534] border-t border-white/10 pb-4 max-h-[85vh] overflow-y-auto">
          
          <button 
            type="button"
            onClick={() => handleMobileNav("/")}
            className={`w-full text-left block px-6 py-3.5 text-[15px] font-medium border-b border-white/10 ${location.pathname === "/" ? "text-[#FF6B35] bg-white/5" : "text-white"}`}
          >
            Home
          </button>

          {/* Products Dropdown */}
          <div className="border-b border-white/10">
            <button 
              type="button"
              onClick={() => toggleDropdown("products")} 
              className="w-full flex items-center justify-between px-6 py-3.5 text-[15px] text-white"
            >
              <span>Products</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "products" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "products" && (
              <div className="bg-[#0f1c28] px-6 py-3 space-y-1">
                <p className="text-[10px] text-[#FF6B35] font-[var(--font-mono)] tracking-wider uppercase mb-2">Products</p>
                {productItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => {
                        navigate(`/products/${item.slug}`);
                        setMobileOpen(false);
                        setOpenDropdown(null);
                           window.scrollTo(0, 0);
                      }}
                      className="w-full text-left flex items-center gap-3 py-2.5 text-[13px] text-white/70 hover:text-white"
                    >
                      <Icon className="w-4 h-4 text-[#FF6B35]" />
                      {item.name}
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => handleMobileNav("/products")}
                  className="w-full text-left block py-2.5 text-[13px] text-[#FF6B35] font-medium"
                >
                  All Products →
                </button>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="border-b border-white/10">
            <button 
              type="button"
              onClick={() => toggleDropdown("services")} 
              className="w-full flex items-center justify-between px-6 py-3.5 text-[15px] text-white"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "services" && (
              <div className="bg-[#0f1c28] px-6 py-3 space-y-1">
                <p className="text-[10px] text-[#FF6B35] font-[var(--font-mono)] tracking-wider uppercase mb-2">Services</p>
                {serviceItems.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      navigate(item.slug);
                      setMobileOpen(false);
                      setOpenDropdown(null);
                         window.scrollTo(0, 0);
                    }}
                    className="w-full text-left block py-2.5 text-[13px] text-white/70 hover:text-white"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => handleMobileNav("/services")}
                  className="w-full text-left block py-2.5 text-[13px] text-[#FF6B35] font-medium"
                >
                  All Services →
                </button>
              </div>
            )}
          </div>

          {["/infrastructure", "/customers", "/blog", "/contact"].map((path) => (
            <button
              key={path}
              type="button"
              onClick={() => handleMobileNav(path)}
              className={`w-full text-left block px-6 py-3.5 text-[15px] font-medium border-b border-white/10 ${location.pathname === path ? "text-[#FF6B35] bg-white/5" : "text-white"}`}
            >
              {path.replace("/", "").replace(/^./, (c) => c.toUpperCase())}
            </button>
          ))}

          {/* Bottom Action Buttons */}
          <div className="mx-4 mt-4 grid grid-cols-2 gap-3">
            <a href="tel:+918904017774" className="flex items-center justify-center gap-2 bg-[#FF6B35] text-white py-3 rounded-lg text-[13px] font-medium">
              <Phone className="w-4 h-4" /> Call
            </a>
            <a href="https://wa.me/918904017774" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg text-[13px] font-medium">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}


    </header>
  );
}