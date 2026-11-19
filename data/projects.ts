export type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  state: string;
  url: string;
  group: "systems" | "clients";
};

export const projects: Project[] = [
  { title: "AI DB Track", tag: "SYSTEMS / DATA", description: "AI database tracking system.", stack: [], state: "Live link", url: "https://ai-db-track.netlify.app/#features", group: "systems" },
  { title: "Luminous Pixels", tag: "AGENCY / AUTOMATION", description: "AI automation agency site.", stack: ["React", "Vite"], state: "Live link", url: "https://luminouspixels.app/", group: "systems" },
  { title: "OnboardAI", tag: "SAAS / AI", description: "AI-powered client onboarding system.", stack: ["React", "Vite"], state: "Live link", url: "https://ai-client-onboarding.netlify.app/", group: "systems" },
  { title: "API StatusHub", tag: "SYSTEMS / MONITORING", description: "API status and infrastructure monitoring system.", stack: [], state: "Live link", url: "https://api-statushub.netlify.app/", group: "systems" },
  { title: "Malik Car Guy", tag: "CLIENT / AUTOMOTIVE", description: "Client website.", stack: [], state: "Client link", url: "https://malik-car-guy.vercel.app/", group: "clients" },
  { title: "Digital Solutions", tag: "CLIENT / DIGITAL", description: "Client website and demo.", stack: [], state: "Client link", url: "https://joindigitalsolutions.tech/", group: "clients" },
  { title: "Digital Solutions Demo", tag: "CLIENT / DIGITAL", description: "Client project demo.", stack: [], state: "Client link", url: "https://joindemo.netlify.app/", group: "clients" },
  { title: "Smart Transit Merchant Pay", tag: "CLIENT / MOBILITY", description: "Client smart transit payment system.", stack: [], state: "Client link", url: "https://join-smart-transit-merchant-pay-354740630774.europe-west2.run.app/", group: "clients" },
];
