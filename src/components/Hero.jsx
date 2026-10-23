import React from "react";
import { HeroVideo } from "./HeroVideo";
import { 
  Download, 
  Smartphone, 
  Apple, 
  Terminal, 
  Activity, 
  Radio, 
  ChevronRight,
  Volume2
} from "lucide-react";

export function Hero({ onOpenDownload, onOpenReleaseNotes, onOpenAdbGuide, onOpenWaitlist }) {
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
        {/* 1. TOP SECTION (RED-BORDERED AREA IN USER SCREENSHOT)        */}
        {/* ============================================================ */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Announcement Badge */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onOpenReleaseNotes}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00F2FF]/10 via-[#7C3AED]/15 to-[#00F2FF]/10 border border-[#00F2FF]/30 backdrop-blur-md shadow-glow-cyan/20 hover:border-[#00F2FF] transition-all cursor-pointer"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F2FF]"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-cyan-200">
                The Autonomous Multi-Modal Desktop Intelligence System
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-[#00F2FF]" />
            </button>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Command Your Entire PC, Browser & Phone With{" "}
            <span className="relative inline-block bg-gradient-to-r from-[#00F2FF] via-cyan-200 to-[#7C3AED] bg-clip-text text-transparent glow-text-cyan">
              Autonomous Voice.
            </span>
          </h1>

          {/* Pitch Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Supervex AI bridges the gap between thought and execution. Speak naturally or type instructions to control your Windows PC, browse ad-free with stealth Playwright automation, and command your Android phone via wireless ADB.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. VIDEO SPOT DIRECTLY BELOW THE RED-BORDERED AREA           */}
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
                <span className="block leading-none">Download for Windows (.exe)</span>
                <span className="text-[10px] font-mono opacity-80 leading-none">v1.0.0 Beta &bull; 64-bit (Public Beta)</span>
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
                <span className="block leading-none">Get Android Companion (.apk)</span>
                <span className="text-[10px] font-mono text-slate-400 leading-none">Wireless ADB Bridge &bull; v1.4.2</span>
              </div>
            </a>

            {/* iOS Web / Waitlist */}
            <button
              onClick={onOpenWaitlist}
              className="px-4 py-3.5 rounded-xl bg-[#0a0f1d]/50 hover:bg-[#0f172a]/80 border border-white/5 hover:border-violet-500/40 text-slate-400 hover:text-slate-200 text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <Apple className="w-4 h-4 text-violet-400" />
              <span>iOS Companion / Waitlist</span>
            </button>
          </div>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3 rounded-xl bg-[#0a0f1d]/40 border border-white/5 backdrop-blur-sm text-center">
              <span className="block font-mono text-xl sm:text-2xl font-bold text-[#00F2FF]">&lt; 120ms</span>
              <span className="text-[11px] text-slate-400 font-medium">Gemini Live Voice Latency</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0a0f1d]/40 border border-white/5 backdrop-blur-sm text-center">
              <span className="block font-mono text-xl sm:text-2xl font-bold text-emerald-400">100% Local</span>
              <span className="text-[11px] text-slate-400 font-medium">Zero Telemetry Leakage</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0a0f1d]/40 border border-white/5 backdrop-blur-sm text-center">
              <span className="block font-mono text-xl sm:text-2xl font-bold text-violet-400">9 Agents</span>
              <span className="text-[11px] text-slate-400 font-medium">Autonomous CEO Engine</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0a0f1d]/40 border border-white/5 backdrop-blur-sm text-center">
              <span className="block font-mono text-xl sm:text-2xl font-bold text-cyan-300">Wireless ADB</span>
              <span className="text-[11px] text-slate-400 font-medium">PC-to-Android Bridge</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. FLOATING COMMAND CENTER TELEMETRY & HARDWARE COCKPIT       */}
        {/* ============================================================ */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          
          {/* Neon Perimeter Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00F2FF]/30 via-[#7C3AED]/20 to-[#00F2FF]/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

          {/* Main Dashboard Window */}
          <div className="relative rounded-2xl bg-[#070b16]/95 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
            
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f1d] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="h-4 w-px bg-white/10 mx-2" />
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-[#00F2FF]" />
                  <span>aegis-core://command-center-live</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CEO AGENT ACTIVE</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">PING: 18ms</span>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Left Column: Live Telemetry & Audio Stream */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Voice Engine Live Waveform Card */}
                <div className="p-4 rounded-xl bg-[#0d1424]/80 border border-[#00F2FF]/20 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Radio className="w-4 h-4 text-[#00F2FF] animate-pulse" />
                      <span className="text-xs font-mono font-semibold text-slate-200">
                        GEMINI LIVE 2.5 DUPLEX AUDIO STREAM
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/30">
                      VAD ACTIVE
                    </span>
                  </div>

                  {/* Audio Bars Visualizer */}
                  <div className="h-14 flex items-center justify-center gap-1 sm:gap-1.5 px-4 bg-[#050811]/90 rounded-lg border border-white/5">
                    {[4, 12, 18, 24, 16, 28, 20, 10, 22, 26, 14, 20, 28, 18, 12, 24, 16, 8, 22, 28, 14, 8, 20, 14, 26, 12].map((height, i) => (
                      <div
                        key={i}
                        className="w-1 sm:w-1.5 rounded-full bg-gradient-to-t from-[#7C3AED] via-[#00F2FF] to-cyan-200 audio-bar"
                        style={{
                          height: `${height}px`,
                          animationDelay: `${(i * 0.08) % 1.2}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Volume2 className="w-3.5 h-3.5" />
                      Listening: "Supervex, play coding music and check phone battery..."
                    </span>
                    <span className="text-slate-500">48kHz PCM</span>
                  </div>
                </div>

                {/* Live Activity Feed Stream */}
                <div className="p-4 rounded-xl bg-[#0a0f1d]/80 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-1 border-b border-white/5">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Activity className="w-3.5 h-3.5 text-[#7C3AED]" />
                      ORCHESTRATION PIPELINE
                    </span>
                    <span className="text-[10px] text-slate-500">LIVE DISPATCH</span>
                  </div>

                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-slate-300">CEO Agent: Routing to BrowserAgent (Playwright)</span>
                      <span className="text-emerald-400 text-[10px]">SUCCESS</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-slate-300">ADB Mobile Bridge: Polling Galaxy S24 (Wi-Fi 5555)</span>
                      <span className="text-[#00F2FF] text-[10px]">SYNCED 88%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-slate-300">File Journal: Transaction #8891 Snapshot Ready</span>
                      <span className="text-violet-400 text-[10px]">JOURNALED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Status Badges & Hardware Stats */}
              <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
                
                {/* 4 Animated Status Badges */}
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#00F2FF]/10 to-transparent border border-[#00F2FF]/30 flex items-center justify-between shadow-glow-cyan/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse" />
                      <span className="text-xs font-mono font-semibold text-white">Gemini Live Voice Active</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 bg-[#00F2FF]/20 px-2 py-0.5 rounded">DUPLEX 118ms</span>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenAdbGuide}
                    className="p-3 w-full rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/30 flex items-center justify-between hover:border-emerald-400/60 transition cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono font-semibold text-white">Phone Screen Mirrored</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">ADB WIRELESS &rarr;</span>
                  </button>

                  <div className="p-3 rounded-xl bg-gradient-to-r from-[#7C3AED]/15 to-transparent border border-[#7C3AED]/35 flex items-center justify-between shadow-glow-violet/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-xs font-mono font-semibold text-white">Playwright Ad-Blocker Engaged</span>
                    </div>
                    <span className="text-[10px] font-mono text-violet-300 bg-violet-500/20 px-2 py-0.5 rounded">STEALTH ON</span>
                  </div>

                  <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-xs font-mono font-semibold text-white">File Undo Buffer Ready</span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded">100% SAFE</span>
                  </div>
                </div>

                {/* Mini Hardware & Engine Gauges */}
                <div className="p-3.5 rounded-xl bg-[#0a0f1d] border border-white/5 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>HOST HARDWARE TELEMETRY</span>
                    <span className="text-emerald-400">OPTIMAL</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] text-slate-400 block">CPU LOAD</span>
                      <span className="text-sm font-bold text-white">4.8%</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] text-slate-400 block">RAM USE</span>
                      <span className="text-sm font-bold text-cyan-300">412 MB</span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                      <span className="text-[10px] text-slate-400 block">VULKAN GPU</span>
                      <span className="text-sm font-bold text-violet-300">ACTIVE</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Window Bar */}
            <div className="px-4 py-2.5 bg-[#050811] border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-4">
                <span>LOCAL DB: %APPDATA%\SupervexAI</span>
                <span className="hidden sm:inline">|</span>
                <span className="text-emerald-400 hidden sm:inline">ZERO CLOUD TELEMETRY</span>
              </div>
              <button 
                onClick={() => scrollToSection("#simulator")}
                className="text-[#00F2FF] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Launch Interactive Command Simulator</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
