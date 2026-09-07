"use client";

import { Calendar, Clock, Flag, Award, Rocket, CheckCircle2 } from "lucide-react";
import { HACKATHON_DATA } from "@/app/data/hackathon";

export default function TimelineSection() {
  const milestoneIcons = [
    <Rocket key="1" className="w-5 h-5 text-emerald-400" />,
    <Flag key="2" className="w-5 h-5 text-emerald-400" />,
    <Clock key="3" className="w-5 h-5 text-teal-400" />,
    <CheckCircle2 key="4" className="w-5 h-5 text-amber-400" />,
    <Calendar key="5" className="w-5 h-5 text-cyan-400" />,
    <Award key="6" className="w-5 h-5 text-emerald-300" />,
  ];

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050907] border-t border-zinc-800/80">
      {/* Subtle background gradient glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>04 // Event Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hackathon Timeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl">
            Key milestones from registration through project submission, evaluation, and winner announcements.
          </p>
        </div>

        {/* Timeline Grid / Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHON_DATA.timeline.map((event, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#09110d] border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg hover:shadow-emerald-950/20"
            >
              {/* Top Row: Phase + Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-black/50 text-emerald-400 border border-emerald-500/25">
                      PHASE {event.phase}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 uppercase">
                      {event.time}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                    {milestoneIcons[index] || milestoneIcons[0]}
                  </div>
                </div>

                {/* Date Badge */}
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold mb-3">
                  {event.date}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Status indicator footer */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Milestone {index + 1} of 6</span>
                <span className="text-emerald-400/80">Scheduled</span>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Reminder Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 rounded-xl bg-[#0a140f] border border-emerald-500/20 text-xs sm:text-sm text-zinc-300">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Dates are provisional and will be locked upon final announcement.</span>
            <a
              href="#register"
              className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4"
            >
              Get calendar invites →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
