import React from "react";
import { HeroVideo } from "./HeroVideo";
import { useLanguage } from "../context/LanguageContext";
import { 
  Download, 
  Smartphone, 
  Apple, 
  ChevronRight
} from "lucide-react";

export function Hero({ onOpenDownload, onOpenReleaseNotes, onOpenAdbGuide, onOpenWaitlist }) {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    if (id === "#downloads" && onOpenDownload) {
      onOpenDownload();
      return;
    }
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background Glows & Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[450px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#00F2FF]/15 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00F2FF]/10 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#7C3AED]/15 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================ */}
        {/* 1. TOP SECTION                                               */}
        {/* ============================================================ */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Announcement Badge: 2097 Vision Banner */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onOpenReleaseNotes}
              className="group inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#00F2FF]/15 via-[#7C3AED]/20 to-[#00F2FF]/15 border border-[#00F2FF]/40 backdrop-blur-xl shadow-neon-glow hover:border-[#00F2FF] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F2FF]"></span>
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wide text-cyan-200 group-hover:text-white transition-colors">
                {t("hero.announcement", "YOUR DESKTOP HAS BEEN WAITING TO LIVE IN 2097. WE BROUGHT IT TO TODAY.")}
              </span>
              <ChevronRight className="w-4 h-4 text-[#00F2FF] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            <span className="sr-only">Supervex AI - </span>
            {t("hero.titleMain", "Command Your Entire PC, Browser & Phone With")}{" "}
            <span className="relative inline-block bg-gradient-to-r from-[#00F2FF] via-cyan-200 to-[#7C3AED] bg-clip-text text-transparent glow-text-cyan">
              {t("hero.titleGradient", "Autonomous Voice.")}
            </span>
          </h1>

          {/* Pitch Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {t("hero.subtitle", "Supervex AI bridges the gap between thought and execution. Speak naturally or type instructions to control your Windows PC, browse ad-free with stealth Playwright automation, and command your Android phone via wireless ADB.")}
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. SHOWCASE DEMO VIDEO                                       */}
        {/* ============================================================ */}
        <HeroVideo />

        {/* ============================================================ */}
        {/* 3. DOWNLOAD BUTTONS & STATS DIRECTLY AFTER THE VIDEO         */}
        {/* ============================================================ */}
        <div className="text-center max-w-4xl mx-auto space-y-8 mt-6">
          
          {/* Download Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            
            {/* Windows Primary (.exe) */}
            <a
              href="#downloads"
              onClick={(e) => { e.preventDefault(); scrollToSection("#downloads"); }}
              className="relative group px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00F2FF] via-cyan-400 to-[#00F2FF] text-slate-950 font-bold text-sm tracking-wide shadow-glow-cyan hover:shadow-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5"
            >
              <Download className="w-4 h-4 text-slate-950 transition-transform group-hover:-translate-y-0.5" />
              <div className="text-left">
                <span className="block leading-none">{t("hero.downloadWindows", "Download for Windows (.exe)")}</span>
                <span className="text-[10px] font-mono opacity-80 leading-none">{t("hero.downloadWindowsSub", "v1.0.4 • 64-bit Official Release")}</span>
              </div>
            </a>

            {/* Android Companion (.apk) */}
            <a
              href="#downloads"
              onClick={(e) => { e.preventDefault(); scrollToSection("#downloads"); }}
              className="px-5 py-3.5 rounded-xl bg-[#0a0f1d]/80 hover:bg-[#0f172a] border border-white/10 hover:border-[#10B981]/50 text-slate-200 hover:text-white text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 backdrop-blur-md hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
            >
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <div className="text-left">
                <span className="block leading-none">{t("hero.downloadAndroid", "Get Android Companion (.apk)")}</span>
                <span className="text-[10px] font-mono text-slate-400 leading-none">{t("hero.downloadAndroidSub", "Wireless ADB Bridge • v1.0.4")}</span>
              </div>
            </a>

            {/* iOS Web / Waitlist */}
            <button
              onClick={onOpenWaitlist}
              className="px-4 py-3.5 rounded-xl bg-[#0a0f1d]/50 hover:bg-[#0f172a]/80 border border-white/5 hover:border-violet-500/40 text-slate-400 hover:text-slate-200 text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <Apple className="w-4 h-4 text-violet-400" />
              <span>{t("hero.iosCompanion", "iOS Companion / Waitlist")}</span>
            </button>
          </div>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3 rounded-xl bg-[#0a0f1d]/40 border border-white/5 backdrop-blur-sm text-center">
              <span className="block font-mono text-xl sm:text-2xl font-bold text-[#00F2FF]">{t("hero.statLatencyVal", "< 120ms")}</span>
              <span className="text-[11px] text-slate-400 font-medium">{t("hero.statLatency", "Gemini Live Voice Latency")}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0a0f1d]/40 border border-white/5 backdrop-blur-sm text-center">
              <span className="block font-mono text-xl sm:text-2xl font-bold text-emerald-400">{t("hero.statLocalVal", "100% Local")}</span>
              <span className="text-[11px] text-slate-400 font-medium">{t("hero.statLocal", "Zero Telemetry Leakage")}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0a0f1d]/40 border border-white/5 backdrop-blur-sm text-center">
              <span className="block font-mono text-xl sm:text-2xl font-bold text-violet-400">{t("hero.statAgentsVal", "9 Agents")}</span>
              <span className="text-[11px] text-slate-400 font-medium">{t("hero.statAgents", "Autonomous CEO Engine")}</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0a0f1d]/40 border border-white/5 backdrop-blur-sm text-center">
              <span className="block font-mono text-xl sm:text-2xl font-bold text-cyan-300">{t("hero.statAdbVal", "Wireless ADB")}</span>
              <span className="text-[11px] text-slate-400 font-medium">{t("hero.statAdb", "PC-to-Android Bridge")}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
