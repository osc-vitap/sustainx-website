import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SustainX 2026 | SDGs to Startups • 36-Hour Hackathon",
  description:
    "A 36-hour innovation hackathon at VIT-AP University focused on solving real-world challenges aligned with the United Nations Sustainable Development Goals (UN SDGs). ₹25,000 in prizes.",
  keywords: [
    "SustainX",
    "VIT-AP Hackathon",
    "Open Source Community VIT-AP",
    "UN SDGs",
    "SDGs to Startups",
    "Climate Tech",
    "Student Hackathon 2026",
  ],
  openGraph: {
    title: "SustainX 2026 — SDGs to Startups",
    description:
      "36 hours of high-impact building in CB- 316, 317 at VIT-AP. ₹25,000 prize pool.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#060b08" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-[#050806] text-zinc-100 selection:bg-orange-500/30 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
