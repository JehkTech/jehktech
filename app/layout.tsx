import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = { metadataBase: new URL("https://jehktech.netlify.app"), title: "JehKTech", description: "Portfolio of Jehoiachin Katemangwe." };
const person = { "@context": "https://schema.org", "@type": "Person", name: "Jehoiachin Katemangwe", url: "https://jehktech.netlify.app/", email: "jehoiachinkatemangwe1@gmail.com", jobTitle: "Software Engineer and UI Designer", sameAs: ["https://github.com/jehktech", "https://linkedin.com/in/jehktech"] };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />{children}</body></html>; }
