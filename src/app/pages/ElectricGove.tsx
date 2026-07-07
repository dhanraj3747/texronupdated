// turbineControlData.ts

export interface SteamTurbineContent {
  title: string;
  introduction: string;
  governingFunctionsDescription: string;
  solutionOverview: string;
  systemRenewal: string;
  systemUpgrades: string;
  rmSolution: string;
}

export const electronicGovernorContent: SteamTurbineContent = {
  title: "ELECTRONIC GOVERNOR FOR STEAM TURBINE",
  introduction: 
    "Steam turbines are one of the most popular and biggest sector of power generation around the globe. " +
    "They are categorised according to the capacity and application as Utility, Industrial steam turbines and drive turbines.",
  
  governingFunctionsDescription: 
    "The governing function of steam turbines includes speed control, load control, turbine parameter control " +
    "(inlet pressure, exhaust pressure, admission / injection pressure), process parameters of driven equipment " +
    "(pressure, flow, speed, load etc).",
  
  solutionOverview: 
    "We offer wide range of control solution that matches to the application, criticality, cost effective " +
    "system to enhance the performance of the machine.",
  
  systemRenewal: 
    "For system renewal, we prefer to offer new system for the purpose of extending the life time of the " +
    "machine with improved safety, reliability and easy maintenance.",
  
  systemUpgrades: 
    "Whereas for system upgrades, enhancing its efficiency, operation stability, providing redundancies, " +
    "better response and added safety features.",
  
  rmSolution: 
    "Our R&M solution covers field instruments, governor, over speed protection, PLC / DCS system to improve efficiency."
};