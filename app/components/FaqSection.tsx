"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { HACKATHON_DATA } from "@/app/data/hackathon";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#060b08] border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>06 // Clarifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-zinc-400 max-w-xl">
            Everything you need to know about the logistics, eligibility, teams, and IP ownership.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {HACKATHON_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#09110d] border border-zinc-800/90 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1 rounded-lg bg-black/40 border border-white/5 text-emerald-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-300" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-zinc-800/40 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Contact */}
        <div className="mt-10 p-6 rounded-2xl bg-[#09120e] border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Still have questions?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Our organizers and community mentors are available 24/7 on Discord.
            </p>
          </div>
          <a
            href={HACKATHON_DATA.links.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold hover:bg-emerald-500/25 transition-colors flex-shrink-0"
          >
            Join Discord Community →
          </a>
        </div>
      </div>
    </section>
  );
}
