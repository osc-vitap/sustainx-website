"use client";

import {
  Cpu,
  TrendingUp,
  Users,
  Globe2,
  Compass,
  Trophy,
  Building,
  Home,
  CheckCircle2,
} from "lucide-react";
import { HACKATHON_DATA } from "@/app/data/hackathon";

export default function AboutSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Globe2: <Globe2 className="w-5 h-5 text-orange-400" />,
    Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-teal-400" />,
    Users: <Users className="w-5 h-5 text-cyan-400" />,
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-orange-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>01 // Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About SustainX
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            {HACKATHON_DATA.about.summary}
          </p>
        </div>

        {/* 4 Quick Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-16">
          <div className="p-4 rounded-2xl glass-panel flex flex-col justify-between">
            <Trophy className="w-5 h-5 text-orange-400 mb-2" />
            <div>
              <span className="text-lg font-bold text-white block">₹25,000</span>
              <span className="text-xs text-zinc-400">Cash Prizes & Incubation</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel flex flex-col justify-between">
            <Building className="w-5 h-5 text-emerald-400 mb-2" />
            <div>
              <span className="text-lg font-bold text-white block">CB- 316, 317</span>
              <span className="text-xs text-zinc-400">Central Block, VIT-AP</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel flex flex-col justify-between">
            <Users className="w-5 h-5 text-teal-400 mb-2" />
            <div>
              <span className="text-lg font-bold text-white block">Solo to 4</span>
              <span className="text-xs text-zinc-400">Team Matchmaking on Venue</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel flex flex-col justify-between">
            <Home className="w-5 h-5 text-cyan-400 mb-2" />
            <div>
              <span className="text-lg font-bold text-white block">Free Stay</span>
              <span className="text-xs text-zinc-400">For External Participants</span>
            </div>
          </div>
        </div>

        {/* Minimal Note Banner */}
        <div className="mb-16 p-4 rounded-2xl bg-orange-950/20 border border-orange-500/30 text-xs sm:text-sm text-zinc-300 flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-orange-400">Guidelines:</strong> {HACKATHON_DATA.note}
          </p>
        </div>

        {/* What We Look For */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Evaluation Pillars
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              Turning UN Sustainable Development Goals into viable startups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HACKATHON_DATA.about.lookingFor.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl glass-panel glass-panel-hover p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 group-hover:border-orange-500/30 transition-colors">
                      {iconMap[item.icon] || <Cpu className="w-5 h-5 text-emerald-400" />}
                    </div>
                    <span className="text-xs font-mono text-zinc-600">0{index + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
