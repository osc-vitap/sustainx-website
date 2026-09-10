"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Trophy,
  Calendar,
  MapPin,
  Users,
  Home,
  Layers,
  ChevronDown,
} from "lucide-react";
import { HACKATHON_DATA } from "@/app/data/hackathon";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "03",
    hours: "19",
    minutes: "28",
    seconds: "45",
  });

  useEffect(() => {
    // Target: September 11, 2026 at 11:00 AM IST
    const target = new Date("2026-09-11T11:00:00+05:30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      {/* Top Ambient Glow Cone */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] hero-spotlight pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Presenter Pill Badge */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono text-zinc-300 mb-8 backdrop-blur-2xl shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">VIT-AP</span>
          <span className="text-zinc-600">•</span>
          <span className="text-orange-400 font-bold">OPEN SOURCE COMMUNITY</span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-zinc-400 hidden sm:inline">{HACKATHON_DATA.eventCode}</span>
        </div>

        {/* Main Hero Title */}
        <div className="relative inline-block mb-3">
          <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-white">
            Sustain
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              X
            </span>
          </h1>
        </div>

        {/* Slogan */}
        <div className="mb-6 space-y-1">
          <p className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            SDGs to Startups
          </p>
          <p className="text-xs sm:text-sm font-mono text-orange-400 font-semibold tracking-widest uppercase">
            2 Days • Big Ideas • Real Impact
          </p>
        </div>

        {/* Minimal Subtext */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-8">
          A 36-hour sprint at VIT-AP engineering tech-driven prototypes for the UN Sustainable Development Goals.
        </p>

        {/* Key Event Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto mb-10">
          <div className="px-3.5 py-1.5 rounded-xl bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-mono font-bold flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-orange-400" />
            <span>₹25,000 Prizes</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl glass-panel text-zinc-300 text-xs font-mono flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>11–12 Sept 2026</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl glass-panel text-zinc-300 text-xs font-mono flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>CB- 316, 317</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl glass-panel text-zinc-300 text-xs font-mono flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>Solo to 4 Members</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl glass-panel text-zinc-300 text-xs font-mono flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5 text-emerald-400" />
            <span>Free Stay for Externals</span>
          </div>
        </div>

        {/* Clean Primary Actions (No 99rs tag on button) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <a
            href={HACKATHON_DATA.links.register}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-sm tracking-wide transition-all duration-200 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-black" />
          </a>

          <Link
            href="#tracks"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel glass-panel-hover text-zinc-300 hover:text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Explore 4 UN SDG Tracks</span>
          </Link>
        </div>

        {/* Minimal Countdown Bar */}
        <div className="max-w-md mx-auto p-4 rounded-2xl glass-panel border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-2.5 px-1">
            <span className="flex items-center gap-1.5 text-orange-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
              COMMENCES IN
            </span>
            <span className="text-zinc-500">CB- 316, 317 • VIT-AP</span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center font-mono">
            <div className="py-2 px-1 rounded-xl bg-black/40 border border-white/5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                {timeLeft.days}
              </span>
              <span className="text-[9px] uppercase text-zinc-500 tracking-wider">Days</span>
            </div>
            <div className="py-2 px-1 rounded-xl bg-black/40 border border-white/5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                {timeLeft.hours}
              </span>
              <span className="text-[9px] uppercase text-zinc-500 tracking-wider">Hours</span>
            </div>
            <div className="py-2 px-1 rounded-xl bg-black/40 border border-white/5">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                {timeLeft.minutes}
              </span>
              <span className="text-[9px] uppercase text-zinc-500 tracking-wider">Mins</span>
            </div>
            <div className="py-2 px-1 rounded-xl bg-black/40 border border-orange-500/30">
              <span className="text-2xl sm:text-3xl font-extrabold text-orange-400 block">
                {timeLeft.seconds}
              </span>
              <span className="text-[9px] uppercase text-orange-400/80 tracking-wider">Secs</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center">
          <Link
            href="#about"
            aria-label="Scroll to about"
            className="text-zinc-600 hover:text-orange-400 transition-colors p-1"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
