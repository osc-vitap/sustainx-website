"use client";

import { useState } from "react";
import { Sparkles, Check, Copy, MapPin, Calendar, Trophy, Users, ExternalLink } from "lucide-react";
import { HACKATHON_DATA } from "@/app/data/hackathon";

export default function RegisterCtaSection() {
  const [copied, setCopied] = useState(false);

  const copyRegistrationUrl = () => {
    navigator.clipboard.writeText(HACKATHON_DATA.links.register);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="register" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="rounded-3xl glass-panel border border-white/[0.12] p-8 sm:p-14 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-mono mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Event Registration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Ready to Build for Impact?
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-6 leading-relaxed">
            Join 500+ student innovators at VIT-AP in CB- 316, 317. Compete for ₹25,000 in prizes and build venture-ready prototypes.
          </p>

          {/* Minimal Key Facts Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto mb-10 text-xs font-mono text-zinc-400">
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              11–12 Sept 2026
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              CB- 316, 317
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-orange-400" />
              ₹25,000 Prizes
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              Solo to 4 Members
            </span>
          </div>

          {/* Direct High-Impact Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-8">
            <a
              href={HACKATHON_DATA.links.register}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-sm tracking-wide transition-all shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <span>Register on VTAPP Portal</span>
              <ExternalLink className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={copyRegistrationUrl}
              className="w-full sm:w-auto px-5 py-4 rounded-xl glass-panel hover:border-white/20 text-zinc-300 hover:text-white font-mono text-xs flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Registration Link</span>
                </>
              )}
            </button>
          </div>

          {/* Guidelines Note */}
          <p className="text-xs text-zinc-500 font-mono max-w-lg mx-auto leading-relaxed">
            Individual fee: ₹99 • Open to VIT-AP & external college students • Free on-campus stay provided for externals.
          </p>
        </div>
      </div>
    </section>
  );
}
