import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "JehKTech — Systems, Design & Precision",
  description: "The portfolio of Jehoiachin Katemangwe: software engineering, product design, quality assurance and systematic trading.",
  alternates: { canonical: "https://jehktech.netlify.app/" },
  openGraph: { title: "JehKTech — Systems, Design & Precision", description: "Portfolio of Jehoiachin Katemangwe.", url: "https://jehktech.netlify.app/", siteName: "JehKTech", type: "website" },
};

export default function Home() { return <Portfolio />; }
