export interface Role {
  id: number;
  title: string;
  desc: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface PortfolioData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta1: string;
    cta2: string;
  };
  about: {
    heading: string;
    content: string[];
    roles: Role[];
  };
  contact: {
    heading: string;
    description: string;
    email: string;
    socials: SocialLink[];
  };
}

export const portfolioData: PortfolioData = {
  hero: {
    title: "Jehoiachin Katemangwe",
    subtitle: "Trader • UI Designer • Software Engineer • QA Tester • Visionary • Mentalist",
    description: "Bridging the gap between analytical rigor and creative vision. I build robust systems, design intuitive interfaces, and analyze markets with a mentalist's edge.",
    cta1: "View My Work",
    cta2: "Contact Me"
  },
  about: {
    heading: "The Identity",
    content: [
      "I am a multifaceted technologist and thinker. My background isn't just a list of skills; it's a synergistic approach to problem-solving.",
      "As a Software Engineer and QA Tester, I build and verify robust architectures. As a UI Designer, I ensure those systems are human-centric and intuitive. As a Trader and Mentalist, I analyze patterns, anticipate market movements, and read between the lines.",
      "This unique blend of creative vision and analytical precision allows me to see the big picture without missing the details."
    ],
    roles: [
      { id: 1, title: "Software Engineer", desc: "Architecting scalable, modern web applications." },
      { id: 2, title: "UI Designer", desc: "Crafting pixel-perfect, engaging user experiences." },
      { id: 3, title: "QA Tester", desc: "Ensuring flawless execution and reliability." },
      { id: 4, title: "Trader", desc: "Analyzing data and executing with precision." },
      { id: 5, title: "Mentalist & Visionary", desc: "Anticipating needs and envisioning the future." }
    ]
  },
  contact: {
    heading: "Initiate Protocol",
    description: "Ready to collaborate or discuss an idea? Send a transmission.",
    email: "jehoiachinkatemangwe1@gmail.com",
    socials: [
      { name: "GitHub", url: "https://github.com/jehktech" },
      { name: "LinkedIn", url: "https://linkedin.com/in/jehktech" }
    ]
  }
};
