import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import TracksSection from "@/app/components/TracksSection";
import RulesSection from "@/app/components/RulesSection";
import TimelineSection from "@/app/components/TimelineSection";
import JudgingSection from "@/app/components/JudgingSection";
import RegisterCtaSection from "@/app/components/RegisterCtaSection";
import FaqSection from "@/app/components/FaqSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import SideSocialBar from "@/app/components/SideSocialBar";
import LiveDotBackground from "@/app/components/LiveDotBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#040705] text-zinc-100 selection:bg-orange-500/30 selection:text-white">
      {/* Interactive Live Dot Matrix Background */}
      <LiveDotBackground />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Floating Side Social Bar (Desktop) */}
      <SideSocialBar />

      {/* Main Single-Page Content Sections */}
      <main className="flex-1 flex flex-col relative z-10">
        {/* HERO: SustainX, Title, Tagline, Stats Chips, Register CTA, Countdown */}
        <HeroSection />

        {/* ABOUT: What is SustainX?, Highlights, 4 Evaluation Pillars */}
        <AboutSection />

        {/* TRACKS: 4 UN SDG Tracks */}
        <TracksSection />

        {/* RULES & SUBMISSION: Eligibility, Team Rules, Dev Rules, Notes */}
        <RulesSection />

        {/* TIMELINE: 36-Hour Schedule */}
        <TimelineSection />

        {/* JUDGING CRITERIA: 5 Criteria Weights */}
        <JudgingSection />

        {/* REGISTRATION CALLOUT */}
        <RegisterCtaSection />

        {/* FAQ SECTION */}
        <FaqSection />

        {/* CONTACT US SECTION */}
        <ContactSection />
      </main>

      {/* FOOTER: OSC VIT-AP, Socials, Contacts */}
      <Footer />
    </div>
  );
}
