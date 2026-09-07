"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Users,
  Code2,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { HACKATHON_DATA } from "@/app/data/hackathon";

type TabId = "eligibility" | "teams" | "development" | "submission";

export default function RulesSection() {
  const [activeTab, setActiveTab] = useState<TabId>("eligibility");

  const tabs: { id: TabId; label: string; icon: typeof ShieldCheck }[] = [
    { id: "eligibility", label: "Eligibility", icon: ShieldCheck },
    { id: "teams", label: "Team Rules", icon: Users },
    { id: "development", label: "Development Rules", icon: Code2 },
    { id: "submission", label: "Submission Requirements", icon: FileCheck },
  ];

  return (
    <section id="rules" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-zinc-800/80">
      {/* Background radial accent */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-700/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>03 // Protocols & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Rules & Submission Guidelines
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Everything you need to know about team eligibility, fair-play development standards, and the required submission package.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500 text-black font-semibold shadow-lg shadow-emerald-500/25"
                    : "bg-[#0a120e] text-zinc-300 hover:text-white hover:bg-[#0f1b14] border border-zinc-800"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-emerald-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panes */}
        <div className="min-h-[260px]">
          {/* ELIGIBILITY */}
          {activeTab === "eligibility" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              {HACKATHON_DATA.rules.eligibility.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#09100c] border border-zinc-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Clause</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TEAM RULES */}
          {activeTab === "teams" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              {HACKATHON_DATA.rules.teamRules.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#09100c] border border-zinc-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Users className="w-3.5 h-3.5" />
                    <span>Collaboration Rule</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* DEVELOPMENT RULES */}
          {activeTab === "development" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fadeIn">
              {HACKATHON_DATA.rules.developmentRules.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#09100c] border border-zinc-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      RULE 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-500">
                    Fair Play Guaranteed
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SUBMISSION REQUIREMENTS */}
          {activeTab === "submission" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-fadeIn">
              {HACKATHON_DATA.rules.submissionRequirements.map((req, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0c1611] border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">{req.label}</h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">{req.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Important Notes Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#141207] via-[#10100a] to-[#0d120f] border border-amber-500/30 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-mono uppercase font-bold">
              <AlertTriangle className="w-5 h-5" />
              <span>Important Notes & Legal Safeguards</span>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Read carefully before submitting
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {HACKATHON_DATA.rules.importantNotes.map((note, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3"
              >
                <Lock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
