"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, ArrowUp } from "lucide-react";
import { HACKATHON_DATA } from "@/app/data/hackathon";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(HACKATHON_DATA.links.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030604] border-t border-zinc-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-zinc-400 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Tier: Organizers & Ecosystem Partners */}
        <div className="pb-12 border-b border-zinc-800/80 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider block mb-1">
                Campus Organization
              </span>
              <h3 className="text-xl font-bold text-white">
                Organizers & Campus Venue
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              Event Code: {HACKATHON_DATA.eventCode}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HACKATHON_DATA.organizers.map((org, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-[#070e0a] border border-zinc-800 hover:border-orange-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-950/60 text-orange-400 border border-orange-500/20 mb-2 inline-block">
                    {org.tag}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1">{org.name}</h4>
                  <p className="text-xs text-zinc-400">{org.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Tier: Grid with Brand, Quick Navigation, and Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-mono font-bold text-sm">
                SX
              </div>
              <span className="text-xl font-extrabold text-white">SustainX</span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              A 36-hour innovation hackathon focused on solving real-world challenges aligned with the United Nations Sustainable Development Goals (UN SDGs).
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={HACKATHON_DATA.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 hover:text-orange-400 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={HACKATHON_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 hover:text-orange-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={HACKATHON_DATA.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 hover:text-orange-400 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={HACKATHON_DATA.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 hover:text-orange-400 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={HACKATHON_DATA.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 hover:text-orange-400 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-orange-300 transition-colors">
                  About SustainX
                </Link>
              </li>
              <li>
                <Link href="#tracks" className="hover:text-orange-300 transition-colors">
                  UN SDG Tracks
                </Link>
              </li>
              <li>
                <Link href="#timeline" className="hover:text-orange-300 transition-colors">
                  36-Hour Schedule
                </Link>
              </li>
              <li>
                <Link href="#judging" className="hover:text-orange-300 transition-colors">
                  Judging Criteria
                </Link>
              </li>
            </ul>
          </div>

          {/* Guidelines Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Guidelines
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#rules" className="hover:text-orange-300 transition-colors">
                  Eligibility & ₹99 Fee
                </Link>
              </li>
              <li>
                <Link href="#rules" className="hover:text-orange-300 transition-colors">
                  Solo or 4-Member Teams
                </Link>
              </li>
              <li>
                <Link href="#rules" className="hover:text-orange-300 transition-colors">
                  Submission Deliverables
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-orange-300 transition-colors">
                  Accommodation & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Contact & Inquiries
            </h4>
            <p className="text-xs text-zinc-400 mb-3">
              Open Source Community (OSC), VIT-AP University.
            </p>
            <div className="p-3 rounded-xl bg-[#09110d] border border-zinc-800 flex items-center justify-between gap-2 text-xs font-mono">
              <span className="text-zinc-300 truncate">
                {HACKATHON_DATA.links.contactEmail}
              </span>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-md hover:bg-white/10 text-orange-400 transition-colors flex-shrink-0"
                aria-label="Copy contact email"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono mt-1.5 block">
              Venue: CB- 316, 317, VIT-AP
            </span>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 SustainX • Open Source Community Campus Club VIT-AP. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-orange-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
