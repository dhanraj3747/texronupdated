import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { X } from "lucide-react";

// ==================== OEM LOGOS ====================
import abbLogo from "../../../imageAssets/ABB_OEM.jpg";
import cccLogo from "../../../imageAssets/CCC_OEM.jpg";
import dehuLogo from "../../../imageAssets/DEHU_OEM.png";
import heinzmannLogo from "../../../imageAssets/hein.png";
 import sanelecLogo from "../../../imageAssets/Sanelec_oem.png";
import siemensLogo from "../../../imageAssets/Siemens_OEM.gif";
 import thyssenkruppLogo from "../../../imageAssets/Thyssenkrupp Industries India Pvt. Ltd_OEM.jpg";
 import trisenLogo from "../../../imageAssets/Trisen_OEM.png";
 import witzenmannLogo from "../../../imageAssets/witzenmann_OEM.jpg";

// ==================== PUBLIC SECTOR LOGOS ====================
import karnatakaPowerLogo from "../../../imageAssets/Karnataka power corp ltd_psu.png";
import ksebLogo from "../../../imageAssets/Kerala state eb_psu.png";

// ==================== END USER (INDIA) LOGOS ====================
import aculifeLogo from "../../../imageAssets/Aculife-Healthcare-Pvt-Ltd_EU INDIA.png";
import adityaBirlaLogo from "../../../imageAssets/ADITYA BIRLA GROUP_EU INDIA.jpg";
import associatedEnergyLogo from "../../../imageAssets/associated energy services_eu india.png";
import associatedThermalLogo from "../../../imageAssets/Associated thermal power sys_eu india.gif";
import axisMicroLogo from "../../../imageAssets/AXIS MICRO_EU INDIA.jpg";
import bajajHindusthanLogo from "../../../imageAssets/bajaj Hindusthan_EU INDIA.jpg";
import bkInfrastructureLogo from "../../../imageAssets/BK Infrastructure_EU INDIA.jpeg";
import emamiLogo from "../../../imageAssets/Emami group_EU INDIA.png";
import epigralLogo from "../../../imageAssets/EPIGRAL_EU INDIA.jpg";
import gujratAlkaliesLogo from "../../../imageAssets/Gujrat alkalies & chem ltd_eu india.png";
import haldiaPclLogo from "../../../imageAssets/HALDIA PCL_EU INDIA.png";
import jaypeeLogo from "../../../imageAssets/JAYPEE GROUP_EU INDIA.png";
import jindalGroupLogo from "../../../imageAssets/JINDAL GROUP_EU INDIA.png";
import jindalSawLogo from "../../../imageAssets/Jindal saw ltd_EU INDIA.png";
import karmaveerLogo from "../../../imageAssets/Karmaveer sk sahakari sakhar karkahana_eu india.jpg";
import kothariLogo from "../../../imageAssets/kothari sugars_eu india.png";
import kribhcoLogo from "../../../imageAssets/Krishak Bharathi Cooperative Ltd_eu india.png";
import omsairamLogo from "../../../imageAssets/OMSAIRAM STEELS & ALLOYS PVT LTD_EU INDIA.jpg";
import kailasadeviLogo from "../../../imageAssets/kailasadevi_EU INDIA.webp";
 import philipsCarbonLogo from "../../../imageAssets/philips_carbon_ind.png";
 import pinakaLogo from "../../../imageAssets/Pinaka Aerospace_eu india.jpg";
 import powerstarLogo from "../../../imageAssets/Powerstar Engineering_eu india.png";
import primoLogo from "../../../imageAssets/primo chemicals_eu india.jpg";
 import rungtaLogo from "../../../imageAssets/Rungta group_eu india.png";
 import sanvijayLogo from "../../../imageAssets/SANVIJAY ALLOYS & POWER LTD_EU INDIA.png";
 import shakambhariLogo from "../../../imageAssets/Shakambhari Ispat & Power Ltd_EU INDIA.jpg";
 import shreeGlucoLogo from "../../../imageAssets/Shree Gluco_EU INDIA.jpg";
 import sicagenLogo from "../../../imageAssets/Sicagen_EU INDIA.jpg";
 import snPowerLogo from "../../../imageAssets/SN POWER SOLUTION_EU INDIA.jpg";
 import sonaAlloysLogo from "../../../imageAssets/Sona alloys_EU INDIA.jpg";
 import synergyLogo from "../../../imageAssets/Synergy_EU INDIA.jpg";
 import torretLogo from "../../../imageAssets/Torret Power_EU INDIA.png";
 import trimulaLogo from "../../../imageAssets/Trimula_EU INDIA.jpg";
 import ultratechLogo from "../../../imageAssets/ultratech_EU INDIA.jpg";
 import vvTitaniumLogo from "../../../imageAssets/V.V. Titanium Pigments Private Limited_EU INDIA.jpg";

// ==================== END USER (ABROAD) LOGOS ====================
import bakhresaLogo from "../../../imageAssets/bakhresa-grouP_EU ABROAD.png";
import busiaSugarLogo from "../../../imageAssets/Busia-Sugar_EU ABROAD.png";
import etimaleLogo from "../../../imageAssets/ETIMALE PLAN_EU ABROAD.png";
import gmSugarLogo from "../../../imageAssets/GM SUGAR_EU UGANDA.png";
import hoimaLogo from "../../../imageAssets/HOIMA SUGARS_EU ABROAD.png";
import indoramaLogo from "../../../imageAssets/INDORAMA_EU ABROAD.jpg";
import kinyaraLogo from "../../../imageAssets/kinyara sugar_eu abroad.png";
import kiryandongoLogo from "../../../imageAssets/kiryandongo_eu abroad.jpg";
import manasaLogo from "../../../imageAssets/manasa sugar_eu abroad.jpg";
import modernDistillersLogo from "../../../imageAssets/modern distrillers_eu abroad.jpg";
import mumiasLogo from "../../../imageAssets/mumias sugar_eu abroad.png";
import nileFibreLogo from "../../../imageAssets/nile fibre board ltd_eu abroad.png";
 import bidcoAfricaLogo from "../../../imageAssets/bidco africa_eu abroad.webp";
 import goldenAfricaLogo from "../../../imageAssets/Golden africa_EU ABROAD.webp";
 import ptSinarLogo from "../../../imageAssets/PT sinar servis_eu abroad.png";
 import serbaDinamikLogo from "../../../imageAssets/SERBA DINAMIK_EU ABROAD.jpg";
 import sprintexLogo from "../../../imageAssets/Sprintex_EU ABROAD.png";
 import sukariLogo from "../../../imageAssets/sukari_EU ABROAD.jpg";
 import yuviTechLogo from "../../../imageAssets/yuvi-tech_EU ABROAD.jpg";

interface Client {
  name: string;
  abbr: string;
  sector: string;
  supplied: string;
  capacity?: string;
  logo?: string;
}

const clients: Client[] = [
  // ==================== OEM (9) ====================
  { name: "ABB", abbr: "ABB", sector: "OEM", supplied: "Client reference", logo: abbLogo },
  { name: "CCC", abbr: "CCC", sector: "OEM", supplied: "Client reference", logo: cccLogo },
  { name: "DEHU", abbr: "DEHU", sector: "OEM", supplied: "Client reference", logo: dehuLogo },
  { name: "Heinzmann", abbr: "HEIN", sector: "OEM", supplied: "Client reference", logo: heinzmannLogo },
   { name: "Sanelec", abbr: "SANE", sector: "OEM", supplied: "Client reference", logo: sanelecLogo },
   { name: "Siemens", abbr: "SIEM", sector: "OEM", supplied: "Client reference", logo: siemensLogo },
   { name: "Thyssenkrupp", abbr: "THYS", sector: "OEM", supplied: "Client reference", logo: thyssenkruppLogo },
   { name: "Trisen", abbr: "TRIS", sector: "OEM", supplied: "Client reference", logo: trisenLogo },
   { name: "Witzenmann", abbr: "WITZ", sector: "OEM", supplied: "Client reference", logo: witzenmannLogo },

  // ==================== PUBLIC SECTOR (2) ====================
  { name: "Karnataka Power Corp", abbr: "KARN", sector: "Public sector", supplied: "Hydroelectric station upgrades and maintenance", capacity: "Multiple units", logo: karnatakaPowerLogo },
  { name: "Kerala State Electricity Board", abbr: "KSEB", sector: "Public sector", supplied: "Governor system upgrades for Kerala hydroelectric stations", capacity: "Multiple", logo: ksebLogo },

  // ==================== END USER (INDIA) (35) ====================
  { name: "Aculife Healthcare", abbr: "ACUL", sector: "End User(India)", supplied: "Client reference", logo: aculifeLogo },
  { name: "Aditya Birla Group", abbr: "ABG", sector: "End User(India)", supplied: "Client reference", logo: adityaBirlaLogo },
  { name: "Associated Energy Services", abbr: "AES", sector: "End User(India)", supplied: "Client reference", logo: associatedEnergyLogo },
  { name: "Associated Thermal Power Systems", abbr: "ATPS", sector: "End User(India)", supplied: "Client reference", logo: associatedThermalLogo },
  { name: "Axis Micro", abbr: "AXIS", sector: "End User(India)", supplied: "Client reference", logo: axisMicroLogo },
  { name: "Bajaj Hindusthan", abbr: "BAJA", sector: "End User(India)", supplied: "Client reference", logo: bajajHindusthanLogo },
  { name: "BK Infrastructure", abbr: "BKIN", sector: "End User(India)", supplied: "Client reference", logo: bkInfrastructureLogo },
  { name: "Emami Group", abbr: "EMAM", sector: "End User(India)", supplied: "Client reference", logo: emamiLogo },
  { name: "Epigral", abbr: "EPIG", sector: "End User(India)", supplied: "Client reference", logo: epigralLogo },
  { name: "Gujarat Alkalies & Chemicals", abbr: "GACL", sector: "End User(India)", supplied: "Client reference", logo: gujratAlkaliesLogo },
  { name: "Haldia Petrochemicals", abbr: "HALD", sector: "End User(India)", supplied: "Captive power plant turbine retrofit and maintenance", logo: haldiaPclLogo },
  { name: "Jaypee Group", abbr: "JAYPEE", sector: "End User(India)", supplied: "Steam turbine retrofit and annual maintenance", logo: jaypeeLogo },
  { name: "Jindal Group", abbr: "JIND", sector: "End User(India)", supplied: "Client reference", logo: jindalGroupLogo },
  { name: "Jindal Saw Ltd", abbr: "JSAW", sector: "End User(India)", supplied: "Client reference", logo: jindalSawLogo },
  { name: "Karmaveer SK Sahakari Sakhar", abbr: "KSK", sector: "End User(India)", supplied: "Client reference", logo: karmaveerLogo },
  { name: "Kothari Sugars", abbr: "KOTH", sector: "End User(India)", supplied: "Client reference", logo: kothariLogo },
  { name: "Krishak Bharathi Cooperative", abbr: "KRIB", sector: "End User(India)", supplied: "Client reference", logo: kribhcoLogo },
  { name: "Omsairam Steels & Alloys", abbr: "OMSA", sector: "End User(India)", supplied: "Client reference", logo: omsairamLogo },
   { name: "Kailasadevi", abbr: "KAIL", sector: "End User(India)", supplied: "Client reference", logo: kailasadeviLogo },
  { name: "Philips Carbon", abbr: "PHIL", sector: "End User(India)", supplied: "Client reference", logo: philipsCarbonLogo },
   { name: "Pinaka Aerospace", abbr: "PINA", sector: "End User(India)", supplied: "Client reference", logo: pinakaLogo },
   { name: "Powerstar Engineering", abbr: "POWE", sector: "End User(India)", supplied: "Client reference", logo: powerstarLogo },
   { name: "Primo Chemicals", abbr: "PRIM", sector: "End User(India)", supplied: "Client reference", logo: primoLogo },
   { name: "Rungta Group", abbr: "RUNG", sector: "End User(India)", supplied: "Client reference", logo: rungtaLogo },
  { name: "Sanvijay Alloys & Power", abbr: "SANV", sector: "End User(India)", supplied: "Client reference", logo: sanvijayLogo },
   { name: "Shakambhari Ispat & Power", abbr: "SHAK", sector: "End User(India)", supplied: "Client reference", logo: shakambhariLogo },
   { name: "Shree Gluco", abbr: "SHRE", sector: "End User(India)", supplied: "Client reference", logo: shreeGlucoLogo },
   { name: "Sicagen India", abbr: "SICA", sector: "End User(India)", supplied: "Client reference", logo: sicagenLogo },
   { name: "SN Power Solution", abbr: "SNPS", sector: "End User(India)", supplied: "Client reference", logo: snPowerLogo },
   { name: "Sona Alloys", abbr: "SONA", sector: "End User(India)", supplied: "Client reference", logo: sonaAlloysLogo },
   { name: "Synergy", abbr: "SYNE", sector: "End User(India)", supplied: "Client reference", logo: synergyLogo },
   { name: "Torret Power", abbr: "TORR", sector: "End User(India)", supplied: "Client reference", logo: torretLogo },
   { name: "Trimula", abbr: "TRIM", sector: "End User(India)", supplied: "Client reference", logo: trimulaLogo },
   { name: "Ultratech", abbr: "ULTR", sector: "End User(India)", supplied: "Client reference", logo: ultratechLogo },
   { name: "V.V. Titanium Pigments", abbr: "VVTI", sector: "End User(India)", supplied: "Client reference", logo: vvTitaniumLogo },

  // ==================== END USER (ABROAD) (19) ====================
  { name: "Bakhresa Group", abbr: "BAKH", sector: "End User(Abroad)", supplied: "Client reference", logo: bakhresaLogo },
  { name: "Busia Sugar", abbr: "BUSI", sector: "End User(Abroad)", supplied: "Client reference", logo: busiaSugarLogo },
  { name: "Etimale Plantation", abbr: "ETIM", sector: "End User(Abroad)", supplied: "Client reference", logo: etimaleLogo },
  { name: "GM Sugar Uganda", abbr: "GMSU", sector: "End User(Abroad)", supplied: "Client reference", logo: gmSugarLogo },
  { name: "Hoima Sugars", abbr: "HOIM", sector: "End User(Abroad)", supplied: "Cogeneration plant turbine services", logo: hoimaLogo },
  { name: "Indorama", abbr: "INDO", sector: "End User(Abroad)", supplied: "Turbine control and protection systems", logo: indoramaLogo },
  { name: "Kinyara Sugar", abbr: "KINY", sector: "End User(Abroad)", supplied: "Client reference", logo: kinyaraLogo },
  { name: "Kiryandongo Sugar", abbr: "KIRY", sector: "End User(Abroad)", supplied: "Client reference", logo: kiryandongoLogo },
  { name: "Manasa Sugar", abbr: "MANA", sector: "End User(Abroad)", supplied: "Client reference", logo: manasaLogo },
  { name: "Modern Distillers", abbr: "MODD", sector: "End User(Abroad)", supplied: "Client reference", logo: modernDistillersLogo },
  { name: "Mumias Sugar", abbr: "MUMI", sector: "End User(Abroad)", supplied: "Governor retrofit and performance optimization", logo: mumiasLogo },
  { name: "Nile Fibre Board", abbr: "NILE", sector: "End User(Abroad)", supplied: "Client reference", logo: nileFibreLogo },
   { name: "Bidco Africa", abbr: "BIDC", sector: "End User(Abroad)", supplied: "Client reference", logo: bidcoAfricaLogo },
   { name: "Golden Africa", abbr: "GOLD", sector: "End User(Abroad)", supplied: "Client reference", logo: goldenAfricaLogo },
   { name: "PT Sinar Servis", abbr: "PTSS", sector: "End User(Abroad)", supplied: "Client reference", logo: ptSinarLogo },
   { name: "Serba Dinamik", abbr: "SERB", sector: "End User(Abroad)", supplied: "Client reference", logo: serbaDinamikLogo },
   { name: "Sprintex", abbr: "SPRI", sector: "End User(Abroad)", supplied: "Client reference", logo: sprintexLogo },
   { name: "Sukari Industries", abbr: "SUKA", sector: "End User(Abroad)", supplied: "Client reference", logo: sukariLogo },
   { name: "Yuvi-Tech", abbr: "YUVI", sector: "End User(Abroad)", supplied: "Client reference", logo: yuviTechLogo },
];

const sectors = ["All", "OEM", "Public sector", "End User(India)", "End User(Abroad)"];

const logoClientsCount = clients.filter((c) => c.logo).length;

export function CustomersPage() {
  const [filter, setFilter] = useState("All");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const filtered = (filter === "All" ? clients : clients.filter((c) => c.sector === filter)).filter((c) => !!c.logo);

  return (
    <div>
      <section className="bg-[#1A2A3A] text-white py-12">
        <div className="site-shell">
          <Breadcrumb items={[{ label: "Customers" }]} />
          <h1 className="font-[var(--font-heading)] text-[12px] tracking-[0.2em] text-[#FF6B35] uppercase mb-2">Customers</h1>
          <h2 className="font-[var(--font-heading)] text-[32px] md:text-[40px] leading-tight mb-3 text-white">
            150+ Power Plants Served
          </h2>
          <p className="text-white/60 text-[15px] max-w-2xl">
            From NTPC's 500 MW units to 30 MW cogeneration plants. Click any client to see exactly what Texron provided.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-[#E5E7EB] sticky top-[88px] z-30">
        <div className="site-shell py-3">
          <div className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-[var(--font-heading)] tracking-wider transition-colors ${
                  filter === s ? "bg-[#1A2A3A] text-white" : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"
                }`}
              >
                {s}{" "}
                {s !== "All" && (
                  <span className="text-[10px] opacity-60">({clients.filter((c) => c.sector === s && c.logo).length})</span>
                )}
                {s === "All" && <span className="text-[10px] opacity-60">({logoClientsCount})</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-14 bg-[#F3F4F6]">
        <div className="site-shell">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((client, i) => (
              <motion.button
                key={client.abbr}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.2 }}
                onClick={() => setSelectedClient(client)}
                className="bg-white border border-[#E5E7EB] rounded-xl p-4 text-center hover:shadow-lg hover:border-[#FF6B35]/30 transition-all group cursor-pointer flex flex-col items-center justify-center min-h-[140px]"
              >
                <div className="w-full h-12 flex items-center justify-center mb-2">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="max-h-10 max-w-full object-contain" 
                    />
                  ) : (
                    <span className="font-[var(--font-heading)] text-[20px] text-[#1A2A3A]/30">{client.abbr}</span>
                  )}
                </div>
                <p className="text-[10px] text-[#6B7280] leading-tight line-clamp-2">{client.name}</p>
                <div className="mt-1.5 px-2 py-0.5 bg-[#F3F4F6] rounded text-[9px] font-[var(--font-mono)] text-[#6B7280] inline-block">
                  {client.sector}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Detail Modal */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setSelectedClient(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="bg-[#1A2A3A] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {selectedClient.logo && (
                    <img 
                      src={selectedClient.logo} 
                      alt="" 
                      className="h-8 w-auto object-contain bg-white/10 rounded px-1" 
                    />
                  )}
                  <div>
                    <span className="font-[var(--font-heading)] text-[#FF6B35] text-[18px]">{selectedClient.abbr}</span>
                    <p className="text-white/60 text-[12px]">{selectedClient.name}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedClient(null)} className="text-white/40 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 py-5">
                <div className="space-y-4">
                  <div>
                    <p className="font-[var(--font-heading)] text-[10px] text-[#FF6B35] tracking-[0.2em] mb-1">SECTOR</p>
                    <p className="text-[14px] text-[#1A2A3A]">{selectedClient.sector}</p>
                  </div>
                  {selectedClient.capacity && (
                    <div>
                      <p className="font-[var(--font-heading)] text-[10px] text-[#FF6B35] tracking-[0.2em] mb-1">CAPACITY</p>
                      <p className="text-[14px] text-[#1A2A3A]">{selectedClient.capacity}</p>
                    </div>
                  )}
                  <div>
                    <p className="font-[var(--font-heading)] text-[10px] text-[#FF6B35] tracking-[0.2em] mb-1">TEXRON SUPPLIED</p>
                    <p className="text-[13px] text-[#6B7280] leading-relaxed">{selectedClient.supplied}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}