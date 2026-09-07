"use client";

import {
  Lightbulb,
  Globe,
  Code2,
  Recycle,
  Presentation,
  Award,
  CheckCircle2,
} from "lucide-react";
import { HACKATHON_DATA } from "@/app/data/hackathon";

export default function JudgingSection() {
  const criteriaIcons: Record<string, React.ReactNode> = {
    Lightbulb: <Lightbulb className="w-5 h-5 text-emerald-400" />,
    Globe: <Globe className="w-5 h-5 text-teal-400" />,
    Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
    Recycle: <Recycle className="w-5 h-5 text-emerald-300" />,
    Presentation: <Presentation className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="judging" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-zinc-800/80">
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>05 // Evaluation Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Judging Criteria
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Projects are evaluated transparently by an independent panel of climate tech engineers, environmental scientists, and venture partners.
          </p>
        </div>

        {/* 5 Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHON_DATA.judgingCriteria.map((item, index) => (
            <div
              key={index}
              className={`p-6 sm:p-7 rounded-2xl bg-[#09110d] border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg ${
                index === 0 || index === 1 ? "md:border-emerald-500/25" : ""
              }`}
            >
              <div>
                {/* Header with weight badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/20">
                    {criteriaIcons[item.icon] || <Award className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                      {item.weight}%
                    </span>
                    <span className="text-[10px] font-mono uppercase text-zinc-500">
                      Weightage
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-zinc-800/80 h-1.5 rounded-full mb-5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                    style={{ width: `${item.weight * 3}%` }}
                  />
                </div>

                {/* Title and description */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Detail questions */}
                <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">
                    Judges will assess:
                  </span>
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Criterion 0{index + 1}</span>
                <span className="text-emerald-400 font-semibold">Max 25 pts</span>
              </div>
            </div>
          ))}

          {/* Bonus / Summary Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0e1c15] via-[#0a1410] to-[#070e0a] border border-emerald-500/30 flex flex-col justify-between shadow-xl shadow-emerald-950/30">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                <span>100% Comprehensive Rubric</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Scoring Integrity & Feedback
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                Every team that submits a valid prototype receives qualitative feedback notes directly from the judging committee, regardless of placement.
              </p>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Double-blind preliminary code review</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Expert panel deliberation for top 10 finalists</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Public audit of winning prototypes</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-500/20">
              <a
                href="#rules"
                className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold transition-colors"
              >
                Review Submission Checklist →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
