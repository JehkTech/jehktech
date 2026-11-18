export type Project = { title: string; tag: string; description: string; stack: string[]; state: string };

// Limited to work documented in the existing repository; no unverified links or claims.
export const projects: Project[] = [
  { title: "StatusHub", tag: "SaaS / INFRASTRUCTURE", description: "Webhook management and status visibility for developers and operations teams.", stack: ["Next.js", "PostgreSQL", "SSE"], state: "Active development" },
  { title: "OnboardAI", tag: "AI / OPERATIONS", description: "An AI-powered client onboarding dashboard with an explicitly planned RBAC and job architecture.", stack: ["React", "Node.js", "BullMQ"], state: "MVP in execution" },
  { title: "Luminous Pixels", tag: "AUTOMATION / WEB", description: "An automation agency building AI receptionist, lead intelligence and web solutions.", stack: ["React", "Node.js", "Flutterwave"], state: "Production site" },
];
