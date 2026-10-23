import React, { useState } from "react";
import { DOWNLOADS_DATA } from "../data/downloadsData";
import { 
  Download, 
  Monitor, 
  Smartphone, 
  Apple, 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  Copy, 
  Check, 
  QrCode, 
  FileText, 
  ChevronRight,
  Sparkles
} from "lucide-react";

export function DownloadHub({ onOpenReleaseNotes, onOpenQrCode, onOpenAdbGuide, onOpenWaitlist }) {
  const [copiedHash, setCopiedHash] = useState(false);
  const [activeReqTab, setActiveReqTab] = useState("recommended");

  const handleCopySha256 = () => {
    navigator.clipboard.writeText(DOWNLOADS_DATA.windows.sha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const handleDownload = (filename) => {
    const isWindowsExe = filename.endsWith(".exe");
    const localUrl = `/downloads/${filename}`;
    const remoteUrl = isWindowsExe
      ? "https://github.com/zinnahkhan01/Aegis-Web/releases/download/v1.0.0-beta/Aegis-AI-Setup-v1.0.0-Beta-x64.exe"
      : "https://github.com/zinnahkhan01/Aegis-Web/releases/download/v1.0.0-beta/Aegis-AI-Portable-v1.0.0-Beta-x64.zip";

    const link = document.createElement("a");
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    link.href = isLocal ? localUrl : (DOWNLOADS_DATA.windows.installerUrl || remoteUrl);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="downloads" className="py-24 relative overflow-hidden bg-[#070b16] border-t border-white/5">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00F2FF]/10 via-[#7C3AED]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OFFICIAL MULTI-PLATFORM RELEASES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Download Aegis-AI For{" "}
            <span className="bg-gradient-to-r from-[#00F2FF] to-cyan-300 bg-clip-text text-transparent">
              All Your Devices
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Deploy the sovereign desktop client on Windows, pair your Android phone wirelessly with the Aegis Companion APK, and experience seamless cross-device intelligence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1 ? Windows Desktop App (Featured) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#0a0f1d]/90 border border-[#00F2FF]/40 p-6 sm:p-8 relative overflow-hidden shadow-glow-cyan/20 flex flex-col justify-between">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#00F2FF]/20 text-[#00F2FF] border-b border-l border-[#00F2FF]/40 rounded-bl-xl text-xs font-mono font-bold">
              PRIMARY DESKTOP ENGINE
            </div>

            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F2FF]/20 to-transparent border border-[#00F2FF]/50 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-[#00F2FF]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                    Windows Desktop App
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {DOWNLOADS_DATA.windows.version}
                    </span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    64-bit Native (x64) • Windows 10 & 11 • {DOWNLOADS_DATA.windows.size}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                The flagship Aegis-AI client. Bundles the CEO Agent brain, Gemini Live audio engine, Playwright stealth browser, and transactional file journal in an optimized standalone installer.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <button
                  onClick={() => handleDownload("Aegis-AI-Setup-v1.0.0-Beta-x64.exe")}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F2FF] via-cyan-400 to-[#00F2FF] hover:to-cyan-300 text-slate-950 font-bold text-sm tracking-wide shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Download Installer (.exe)</span>
                </button>

                <button
                  onClick={() => handleDownload("Aegis-AI-Portable-v1.0.0-Beta-x64.zip")}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-400" />
                  <span>Download Portable (.zip)</span>
                </button>

                <button
                  onClick={onOpenReleaseNotes}
                  className="px-4 py-3 rounded-xl bg-transparent hover:bg-white/5 text-slate-400 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer ml-auto"
                >
                  <FileText className="w-3.5 h-3.5 text-[#00F2FF]" />
                  <span>Release Notes</span>
                </button>
              </div>
            </div>

            {/* SHA-256 Checksum Bar */}
            <div className="p-3 rounded-xl bg-[#050811] border border-white/5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 overflow-hidden">
                <span className="text-[#00F2FF] font-bold shrink-0">SHA-256:</span>
                <span className="truncate text-slate-400 text-[11px]">
                  {DOWNLOADS_DATA.windows.sha256}
                </span>
              </div>
              
              <button
                onClick={handleCopySha256}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                {copiedHash ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>Copy Hash</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Card 2 ? Android Mobile Companion */}
          <div className="rounded-2xl bg-[#0a0f1d]/90 border border-white/10 hover:border-emerald-500/40 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {DOWNLOADS_DATA.android.version}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-1">
                Android Companion
              </h3>
              <span className="text-xs font-mono text-slate-400 block mb-4">
                Android 10.0+ (APK) • ~28 MB
              </span>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Connect your Android phone to the PC CEO Agent. Enables wireless screen unlock, app launching, simulated touch gestures, and hands-free WhatsApp messaging.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleDownload("Aegis-Companion-v1.0.0-Beta.apk")}
                  className="w-full px-3 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download APK</span>
                </button>

                <button
                  onClick={onOpenQrCode}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-semibold text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5 text-[#00F2FF]" />
                  <span>Show QR Code</span>
                </button>
              </div>

              <button
                onClick={onOpenAdbGuide}
                className="w-full text-center text-xs font-mono text-slate-400 hover:text-emerald-400 py-1 transition-colors cursor-pointer flex items-center justify-center gap-1"
              >
                <span>View Wireless ADB Setup Guide</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

          </div>

          {/* Card 3 ? iOS Ecosystem Bridge */}
          <div className="rounded-2xl bg-[#0a0f1d]/90 border border-white/10 hover:border-violet-500/40 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
                  <Apple className="w-6 h-6 text-violet-400" />
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
                  TestFlight Beta
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-1">
                iOS Ecosystem Bridge
              </h3>
              <span className="text-xs font-mono text-slate-400 block mb-4">
                iOS & iPadOS 16.4+ ? WebRTC Telemetry
              </span>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Control your Aegis PC remotely from your iPhone or iPad. Includes progressive web app dashboard, Siri Shortcuts bridge, and bi-directional clipboard sync.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <button
                onClick={onOpenWaitlist}
                className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wide shadow-glow-violet transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-violet-200" />
                <span>Join TestFlight Waitlist</span>
              </button>
            </div>

          </div>

          {/* Card 4 ? Hardware & System Requirements (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#0a0f1d]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Hardware & System Requirements
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      Engineered for high-efficiency low resource consumption
                    </span>
                  </div>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-[#050811] border border-white/5 font-mono text-xs">
                  <button
                    onClick={() => setActiveReqTab("minimum")}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      activeReqTab === "minimum" ? "bg-white/10 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Minimum Specs
                  </button>
                  <button
                    onClick={() => setActiveReqTab("recommended")}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      activeReqTab === "recommended" ? "bg-[#00F2FF]/20 text-[#00F2FF] font-bold border border-[#00F2FF]/30" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Recommended (Optimal)
                  </button>
                </div>
              </div>

              {/* Requirements Specs Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block">Operating System</span>
                  <span className="font-semibold text-slate-200">
                    {DOWNLOADS_DATA.requirements[activeReqTab].os}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block">RAM Memory</span>
                  <span className="font-semibold text-cyan-300">
                    {DOWNLOADS_DATA.requirements[activeReqTab].ram}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block">Processor / CPU</span>
                  <span className="font-semibold text-slate-200">
                    {DOWNLOADS_DATA.requirements[activeReqTab].cpu}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block">Storage Space</span>
                  <span className="font-semibold text-emerald-400">
                    {DOWNLOADS_DATA.requirements[activeReqTab].storage}
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <HardDrive className="w-3.5 h-3.5 text-violet-400" />
                  GPU Acceleration: {DOWNLOADS_DATA.requirements[activeReqTab].gpu}
                </span>
                <span className="text-[10px] text-emerald-400 hidden sm:inline">CUDA / Vulkan Ready</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
