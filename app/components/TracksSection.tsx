"use client";

import { useState } from "react";
import {
  Zap,
  RefreshCw,
  Leaf,
  Building2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import { HACKATHON_DATA } from "@/app/data/hackathon";

export default function TracksSection() {
  const [selectedTrackId, setSelectedTrackId] = useState<string>(
    HACKATHON_DATA.tracks[0].id
  );

  const activeTrack =
    HACKATHON_DATA.tracks.find((t) => t.id === selectedTrackId) ||
    HACKATHON_DATA.tracks[0];

  const trackIcons: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-6 h-6 text-emerald-400" />,
    RefreshCw: <RefreshCw className="w-6 h-6 text-teal-400" />,
    Leaf: <Leaf className="w-6 h-6 text-cyan-400" />,
    Building2: <Building2 className="w-6 h-6 text-green-400" />,
  };

  return (
    <section id="tracks" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050907] border-t border-zinc-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>02 // Challenge Arenas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hackathon Tracks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Choose your domain. Each track addresses a critical ecological tipping point and invites breakthrough prototypes.
          </p>
        </div>

        {/* Track Selector Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {HACKATHON_DATA.tracks.map((track) => {
            const isSelected = track.id === selectedTrackId;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrackId(track.id)}
                className={`flex flex-col text-left p-4 sm:p-5 rounded-xl transition-all duration-200 border relative ${
                  isSelected
                    ? "bg-[#0f1d16] border-emerald-500 text-white shadow-lg shadow-emerald-950/40"
                    : "bg-[#090f0c] border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/40 text-emerald-400 border border-white/5">
                    TRACK {track.number}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400 border border-orange-500/30">
                    {track.sdgTag}
                  </span>
                </div>
                <span className="text-sm sm:text-base font-bold line-clamp-1">
                  {track.title}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">
                  {track.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Track Detailed Showcase Card */}
        <div className="rounded-2xl bg-[#09100c] border border-zinc-800 hover:border-emerald-500/40 transition-all p-6 sm:p-10 shadow-2xl shadow-black/60">
          {/* Top Banner with number, title, and badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-zinc-800/80 gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-black/50 border border-emerald-500/30 flex-shrink-0">
                {trackIcons[activeTrack.iconName] || <Zap className="w-7 h-7 text-emerald-400" />}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-semibold text-emerald-400">
                    TRACK {activeTrack.number}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold">
                    {activeTrack.sdgTag}
                  </span>
                  <span className="text-zinc-600 hidden sm:inline">•</span>
                  <span className="text-xs font-mono text-zinc-400 uppercase hidden sm:inline">
                    {activeTrack.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeTrack.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="px-3 py-1.5 rounded-lg bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-mono font-bold">
                UN SDG ALIGNED
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="py-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Track Description
            </h4>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
              {activeTrack.description}
            </p>
          </div>

          {/* Problem Prompt Box */}
          <div className="my-4 rounded-xl bg-gradient-to-r from-[#0d1c15] to-[#091510] border-l-4 border-emerald-400 border-y border-r border-emerald-500/20 p-5 sm:p-6">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Prompt</span>
            </div>
            <p className="text-sm sm:text-base text-zinc-100 font-medium italic leading-relaxed">
              &quot;{activeTrack.problemPrompt}&quot;
            </p>
          </div>

          {/* Dual Columns: Requirements & Expected Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-6 border-t border-zinc-800/80">
            {/* Requirements */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>Technical Requirements</span>
              </div>
              <ul className="space-y-3">
                {activeTrack.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Impact */}
            <div className="flex flex-col justify-between rounded-xl bg-black/40 border border-white/5 p-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Expected Impact</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {activeTrack.expectedImpact}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  Target Outcomes: Measurable & Auditable
                </span>
                <a
                  href="#register"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group"
                >
                  Build for this track
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* All Tracks Quick Cards Grid (Full Overview) */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-mono uppercase tracking-wider text-zinc-400">
              All Tracks Overview (Click to Inspect)
            </h4>
            <span className="text-xs text-zinc-500 font-mono">4 Total Challenges</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HACKATHON_DATA.tracks.map((track) => (
              <div
                key={track.id}
                onClick={() => {
                  setSelectedTrackId(track.id);
                  const el = document.getElementById("tracks");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 ${
                  track.id === selectedTrackId
                    ? "bg-[#0e1b14] border-emerald-500/50"
                    : "bg-[#090e0c] border-zinc-800/80 hover:border-zinc-700 hover:bg-[#0b1410]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-emerald-400">
                    TRACK {track.number}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">
                    {track.badge}
                  </span>
                </div>
                <h5 className="text-base font-bold text-white mb-2">{track.title}</h5>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
