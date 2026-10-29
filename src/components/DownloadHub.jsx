import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
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
  const { t } = useLanguage();
  const [copiedHash, setCopiedHash] = useState(false);
  const [activeReqTab, setActiveReqTab] = useState("recommended");

  const handleCopySha256 = () => {
    navigator.clipboard.writeText(DOWNLOADS_DATA.windows.sha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const handleDownload = (filename) => {
    const isApk = filename.endsWith(".apk");
    const isWindowsExe = filename.endsWith(".exe");
    const isLocal = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");

    if (isApk) {
      const link = document.createElement("a");
      link.href = DOWNLOADS_DATA.android.apkUrl || `/downloads/${filename}`;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    if (isLocal) {
      const link = document.createElement("a");
      link.href = `/downloads/${filename}`;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const downloadUrl = isWindowsExe 
      ? DOWNLOADS_DATA.windows.installerUrl 
      : DOWNLOADS_DATA.windows.portableUrl;

    window.location.href = downloadUrl;
  };

  return (
    <section id="downloads" className="py-24 relative overflow-hidden bg-[#070b16] border-t border-white/5">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#00F2FF]/10 via-[#7C3AED]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t("downloads.tag", "OFFICIAL MULTI-PLATFORM RELEASES")}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t("downloads.title", "Download Supervex AI For All Your Devices")}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            {t("downloads.subtitle", "Deploy the sovereign desktop client on Windows, pair your Android phone wirelessly with the Supervex Companion APK, and experience seamless cross-device intelligence.")}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1 – Windows Desktop App (Featured) */}
          <div className="lg:col-span-2 rounded-2xl bg-[#0a0f1d]/90 border border-[#00F2FF]/40 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-glow-cyan/15 group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00F2FF]/5 blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#00F2FF]/10 border border-[#00F2FF]/30 flex items-center justify-center shrink-0">
                  <Monitor className="w-7 h-7 text-[#00F2FF]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                    {t("downloads.win_title", "Windows Desktop App")}
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {DOWNLOADS_DATA.windows.version}
                    </span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {t("downloads.win_specs", "64-bit Native (x64) • Windows 10 & 11")} • {DOWNLOADS_DATA.windows.size}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                {t("downloads.win_desc", "The flagship Supervex AI client. Bundles the CEO Agent brain, Gemini Live audio engine, Playwright stealth browser, and transactional file journal in an optimized standalone installer.")}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <button
                  onClick={() => handleDownload("Supervex-AI-Setup-v1.0.0-Beta-x64.exe")}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F2FF] via-cyan-400 to-[#00F2FF] hover:to-cyan-300 text-slate-950 font-bold text-sm tracking-wide shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>{t("downloads.btn_installer", "Download Installer (.exe)")}</span>
                </button>

                <button
                  onClick={() => handleDownload("Supervex-AI-Portable-v1.0.0-Beta-x64.zip")}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-400" />
                  <span>{t("downloads.btn_portable", "Download Portable (.zip)")}</span>
                </button>

                <button
                  onClick={onOpenReleaseNotes}
                  className="px-4 py-3 rounded-xl bg-transparent hover:bg-white/5 text-slate-400 hover:text-white text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer ml-auto"
                >
                  <FileText className="w-3.5 h-3.5 text-[#00F2FF]" />
                  <span>{t("downloads.btn_release_notes", "Release Notes")}</span>
                </button>
              </div>
            </div>

            {/* SHA-256 Checksum Bar */}
            <div className="p-3 rounded-xl bg-[#050811] border border-white/5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 overflow-hidden">
                <span className="text-[#00F2FF] font-bold shrink-0">{t("downloads.sha_label", "SHA-256:")}</span>
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
                    <span className="text-emerald-400">{t("downloads.copied_hash", "Copied!")}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>{t("downloads.copy_hash", "Copy Hash")}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Card 2 – Android Mobile Companion */}
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
                {t("downloads.android_title", "Android Companion")}
              </h3>
              <span className="text-xs font-mono text-slate-400 block mb-4">
                {t("downloads.android_specs", "Android 10.0+ (APK) • 12.7 MB")}
              </span>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                {t("downloads.android_desc", "Connect your Android phone to the PC CEO Agent. Enables wireless screen unlock, app launching, simulated touch gestures, and hands-free WhatsApp messaging.")}
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/5">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleDownload("Supervex-Companion-v1.0.1-Beta.apk")}
                  className="w-full px-3 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t("downloads.btn_apk", "Download APK")}</span>
                </button>

                <button
                  onClick={onOpenQrCode}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-semibold text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <QrCode className="w-3.5 h-3.5 text-[#00F2FF]" />
                  <span>{t("downloads.btn_qr", "Show QR Code")}</span>
                </button>
              </div>

              <button
                onClick={onOpenAdbGuide}
                className="w-full text-center text-xs font-mono text-slate-400 hover:text-emerald-400 py-1 transition-colors cursor-pointer flex items-center justify-center gap-1"
              >
                <span>{t("downloads.btn_adb_guide", "View Wireless ADB Setup Guide")}</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

          </div>

          {/* Card 3 – iOS Ecosystem Bridge */}
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
                {t("downloads.ios_title", "iOS Ecosystem Bridge")}
              </h3>
              <span className="text-xs font-mono text-slate-400 block mb-4">
                {t("downloads.ios_specs", "iOS & iPadOS 16.4+ • WebRTC Telemetry")}
              </span>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                {t("downloads.ios_desc", "Control your Supervex PC remotely from your iPhone or iPad. Includes progressive web app dashboard, Siri Shortcuts bridge, and bi-directional clipboard sync.")}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <button
                onClick={onOpenWaitlist}
                className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs tracking-wide shadow-glow-violet transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-violet-200" />
                <span>{t("downloads.btn_waitlist", "Join TestFlight Waitlist")}</span>
              </button>
            </div>

          </div>

          {/* Card 4 – Hardware & System Requirements */}
          <div className="lg:col-span-2 rounded-2xl bg-[#0a0f1d]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {t("downloads.req_title", "Hardware & System Requirements")}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {t("downloads.req_sub", "Engineered for high-efficiency low resource consumption")}
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
                    {t("downloads.tab_min", "Minimum Specs")}
                  </button>
                  <button
                    onClick={() => setActiveReqTab("recommended")}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      activeReqTab === "recommended" ? "bg-[#00F2FF]/20 text-[#00F2FF] font-bold border border-[#00F2FF]/30" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {t("downloads.tab_rec", "Recommended (Optimal)")}
                  </button>
                </div>
              </div>

              {/* Requirements Specs Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block">{t("downloads.spec_os", "Operating System")}</span>
                  <span className="font-semibold text-slate-200">
                    {DOWNLOADS_DATA.requirements[activeReqTab].os}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block">{t("downloads.spec_ram", "RAM Memory")}</span>
                  <span className="font-semibold text-cyan-300">
                    {DOWNLOADS_DATA.requirements[activeReqTab].ram}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block">{t("downloads.spec_cpu", "Processor / CPU")}</span>
                  <span className="font-semibold text-slate-200">
                    {DOWNLOADS_DATA.requirements[activeReqTab].cpu}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase block">{t("downloads.spec_storage", "Storage Space")}</span>
                  <span className="font-semibold text-emerald-400">
                    {DOWNLOADS_DATA.requirements[activeReqTab].storage}
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <HardDrive className="w-3.5 h-3.5 text-violet-400" />
                  {t("downloads.spec_gpu", "GPU Acceleration")}: {DOWNLOADS_DATA.requirements[activeReqTab].gpu}
                </span>
                <span className="text-[10px] text-emerald-400 hidden sm:inline">{t("downloads.cuda_ready", "CUDA / Vulkan Ready")}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export default DownloadHub;
