import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsIndexPage } from "./pages/ProductsIndexPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { SteamTurbinePage } from "./pages/SteamTurbinePage";
import { HydraulicTurbinePage } from "./pages/HydraulicTurbinePage";
import { RefurbishmentPage } from "./pages/RefurbishmentPage";
import ElectricalPanels from "./pages/ElectricalPanels";
import Spares from "./pages/Spares";
import ProcessInstruments from "./pages/ProcessInstruments";

import { ServicesPage } from "./pages/ServicesPage";
import { CapabilitiesPage } from "./pages/CapabilitiesPage";
import { CustomersPage } from "./pages/CustomersPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { BhelRetrofitsPage } from "./pages/BhelRetrofitsPage";
import { VoithHydraulicPage } from "./pages/VoithHydraulicPage";
import { RlaStudiesPage } from "./pages/RlaStudiesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { AdminPage } from "./pages/AdminPage";
import { EngineeringConsultancyPage } from "./pages/EngineeringConsultancyPage";
import ValueAddedServicesPage from "./pages/ValueAddedServicesPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "products", Component: ProductsIndexPage },

      // ═══ PRODUCTS: Explicit routes FIRST (before :slug catch-all) ═══
      { path: "products/steam-turbine", Component: SteamTurbinePage },
      { path: "products/refurbishment-retrofit-upgrades", Component: RefurbishmentPage },
      { path: "products/electrical-panels", Component: ElectricalPanels },
      { path: "products/spares", Component: Spares },
      { path: "products/process-instruments", Component: ProcessInstruments }, // ✅ FIXED

      // Keep old routes for backward compatibility
      { path: "products/protection-relay", Component: SteamTurbinePage },
      { path: "products/annunciator-systems", Component: RefurbishmentPage },
      { path: "products/power-control-panels", Component: ElectricalPanels },
      { path: "products/turbine-generator-spares", Component: Spares },
      { path: "products/hydraulic-turbine-content", Component: HydraulicTurbinePage },

      // Catch-all for any other product slugs
      { path: "products/:slug", Component: ProductDetailPage },

      // ═══ SERVICES: Explicit + Catch-all ═══
      { path: "services", Component: ServicesPage },
      { path: "services/governor-retrofits-upgrades", Component: BhelRetrofitsPage },
      { path: "services/rla-condition-assessment", Component: RlaStudiesPage },
      { path: "services/engineering-consultancy", Component: EngineeringConsultancyPage }, 
  { path: "services/value-added-services", Component: ValueAddedServicesPage },
      { path: "services/:serviceSlug", Component: ServiceDetailPage },

      // Keep old root-level service routes for compatibility
      { path: "bhel-steam-turbine-governor-retrofits", Component: BhelRetrofitsPage },
      { path: "rla-studies-thermal-power-plants-bangalore", Component: RlaStudiesPage },

      { path: "infrastructure", Component: CapabilitiesPage },
      { path: "customers", Component: CustomersPage },
      { path: "blog", Component: BlogPage },
      { path: "contact", Component: ContactPage },
      { path: "expertise", Component: ServicesPage },
      { path: "capabilities", Component: CapabilitiesPage },
      { path: "voith-hydraulic-troubleshooting-spares", Component: VoithHydraulicPage },
      // Add this route in your routes array

    ],
  },
  { path: "/admin", Component: AdminPage },
]);