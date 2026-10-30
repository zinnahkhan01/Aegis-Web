import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { DOWNLOADS_DATA } from "../data/downloadsData";
import {
  Smartphone,
  Download,
  QrCode,
  Terminal,
  ShieldCheck,
  Check,
  Copy,
  Wifi,
  Zap,
  Lock,
  MessageSquare,
  Cpu,
  Layers,
  Sparkles,
  ChevronRight,
  ExternalLink,
  BatteryCharging,
  Fingerprint
} from "lucide-react";

export function MobileClientSection({ onOpenAdbGuide, onOpenQrCode }) {
  const { t } = useLanguage();
  const [copiedSha, setCopiedSha] = useState(false);
  const [activeScreenTab, setActiveScreenTab] = useState("overview"); // "overview" | "whatsapp" | "gestures" | "unlock"

  const apkSha256 = DOWNLOADS_DATA.android.sha256;
  const apkSize = DOWNLOADS_DATA.android.size || "12.7 MB";
  const apkVersion = DOWNLOADS_DATA.android.version || "v1.0.4";

  const handleCopyHash = () => {
    navigator.clipboard.writeText(apkSha256);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2500);
  };

  const handleDirectApkDownload = (filename = "Supervex-Companion-v1.0.4.apk") => {
    const link = document.createElement("a");
    link.href = `/downloads/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="mobile-app"
      className="py-24 relative overflow-hidden bg-[#060a15] border-t border-white/5"
    >
      {/* Background Cyber Glowing Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#00F2FF]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Smartphone className="w-3.5 h-3.5 animate-pulse" />
            <span>{t("mobileApp.badge", "AEGIS CLIENT • OFFICIAL ANDROID COMPANION APP")}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t("mobileApp.title", "Control Your Entire PC & Phone Wirelessly From Your Pocket")}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t(
              "mobileApp.subtitle",
              "Install the native Android Aegis Client APK. Seamlessly bridges your smartphone with Supervex Desktop AI via wireless ADB and WebSocket tunnels — enabling hands-free WhatsApp messaging, automated screen gestures, and remote PC command execution with zero root requirements."
            )}
          </p>
        </div>

        {/* 2-Column Main Showcase: Left Phone Mockup, Right Download & QR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Interactive Cyber Smartphone Frame (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] rounded-[44px] p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-black border-2 border-emerald-500/40 shadow-[0_0_60px_rgba(16,185,129,0.25)]">
              
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#050811] rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-950 border border-emerald-400/50" />
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Internal Screen Content */}
              <div className="relative w-full h-[580px] rounded-[36px] bg-[#050914] overflow-hidden flex flex-col justify-between border border-emerald-500/20 pt-8 pb-5 px-4 font-mono text-xs select-none">
                
                {/* Top Status Bar */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 pb-3 border-b border-white/5">
                  <span className="font-bold text-white">10:42 PM</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <Wifi className="w-3 h-3" />
                      <span>Wi-Fi 6</span>
                    </span>
                    <span className="text-[10px] text-cyan-300 flex items-center gap-1">
                      <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                      <span>98%</span>
                    </span>
                  </div>
                </div>

                {/* App Brand Bar */}
                <div className="flex items-center justify-between py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-bold text-white tracking-wide text-xs">AEGIS CLIENT</div>
                      <div className="text-[9px] text-emerald-400 font-mono">v1.0.4 COMPANION</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] animate-pulse">
                    ONLINE • LINKED
                  </span>
                </div>

                {/* Screen Tab Navigation */}
                <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-black/60 border border-white/5 text-[10px]">
                  <button
                    onClick={() => setActiveScreenTab("overview")}
                    className={`py-1 rounded-lg transition-colors cursor-pointer ${
                      activeScreenTab === "overview" ? "bg-emerald-500/20 text-emerald-300 font-bold" : "text-slate-400"
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    onClick={() => setActiveScreenTab("whatsapp")}
                    className={`py-1 rounded-lg transition-colors cursor-pointer ${
                      activeScreenTab === "whatsapp" ? "bg-emerald-500/20 text-emerald-300 font-bold" : "text-slate-400"
                    }`}
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => setActiveScreenTab("unlock")}
                    className={`py-1 rounded-lg transition-colors cursor-pointer ${
                      activeScreenTab === "unlock" ? "bg-emerald-500/20 text-emerald-300 font-bold" : "text-slate-400"
                    }`}
                  >
                    PIN Unlock
                  </button>
                </div>

                {/* Active Screen Tab Body */}
                <div className="flex-1 my-3 overflow-hidden flex flex-col justify-center">
                  
                  {activeScreenTab === "overview" && (
                    <div className="space-y-2.5 animate-fadeIn">
                      <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-emerald-300 font-bold">
                          <span>WebSocket Bridge:</span>
                          <span className="text-white">PORT 5555</span>
                        </div>
                        <p className="text-[10px] text-slate-400">
                          Connected to Supervex AI CEO Agent at 192.168.1.104
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-cyan-300 font-bold">
                          <span>Gesture Engine:</span>
                          <span className="text-emerald-400">ACTIVE</span>
                        </div>
                        <p className="text-[10px] text-slate-400">
                          Accessibility Service granted. Ready for tap, swipe, and scroll.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-500/30 space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-violet-300 font-bold">
                          <span>Daemon Power:</span>
                          <span className="text-white">&lt; 0.8% / hr</span>
                        </div>
                        <p className="text-[10px] text-slate-400">
                          Zero-wake battery optimized background Kotlin service.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeScreenTab === "whatsapp" && (
                    <div className="space-y-2.5 animate-fadeIn">
                      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp Bridge Active</span>
                        </div>
                        <div className="p-2 rounded bg-black/60 border border-emerald-500/20 text-[10px] text-slate-300">
                          "CEO Agent: Sir, I sent the quarterly summary to Mr. Rahim on WhatsApp."
                        </div>
                        <span className="text-[9px] text-slate-400 block text-right">Delivered via ADB Intent</span>
                      </div>
                      <div className="text-[10px] text-slate-400 text-center">
                        Say: "Send WhatsApp message to Rahim that I am ready."
                      </div>
                    </div>
                  )}

                  {activeScreenTab === "unlock" && (
                    <div className="space-y-2.5 animate-fadeIn text-center">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto shadow-glow-emerald">
                        <Fingerprint className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div className="font-bold text-white text-xs">Automated Screen Wake &amp; PIN</div>
                      <p className="text-[10px] text-slate-400 px-2">
                        Wakes locked screen, swipes up, and enters your PIN automatically when executing emergency remote tasks.
                      </p>
                      <div className="inline-block px-3 py-1 rounded bg-black/60 border border-white/10 text-cyan-300 text-[10px]">
                        STATUS: READY FOR WAKE
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Android Gesture Bar */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-center">
                  <div className="w-24 h-1 bg-slate-600 rounded-full" />
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Download Hub, QR Code & Setup Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Featured Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0f1e]/90 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[90px] pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    NATIVE APK • {apkVersion} STABLE
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2">
                    {DOWNLOADS_DATA.android.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    Package: <code className="text-emerald-400">{DOWNLOADS_DATA.android.packageName}</code> • {apkSize}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-2xl font-bold font-mono text-emerald-400">100% FREE</span>
                  <span className="block text-[11px] font-mono text-slate-400">No Ads • Open Security</span>
                </div>
              </div>

              {/* QR Code and Direct Download Action Box */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-[#050812] border border-white/10 mb-6">
                
                {/* Live Scannable QR Code */}
                <div className="sm:col-span-4 flex flex-col items-center text-center">
                  <div className="w-36 h-36 p-2 bg-white rounded-xl shadow-glow-emerald flex items-center justify-center">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                        typeof window !== "undefined"
                          ? `${window.location.origin}/downloads/Supervex-Companion-v1.0.4.apk`
                          : "https://github.com/zinnahkhan01/Aegis-Web/releases/download/v1.0.4/Supervex-Companion-v1.0.4.apk"
                      )}`}
                      alt="Scan to Download Aegis Client APK"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 mt-2 flex items-center gap-1">
                    <QrCode className="w-3 h-3 text-emerald-400" />
                    <span>Scan with Camera</span>
                  </span>
                </div>

                {/* Download Actions */}
                <div className="sm:col-span-8 space-y-3">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Point your Android phone's camera at this QR code to download the APK directly, or click the download button below:
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    <button
                      onClick={() => handleDirectApkDownload("Supervex-Companion-v1.0.4.apk")}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-xs font-mono shadow-glow-emerald hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-slate-950" />
                      <span>Download APK (v1.0.4 • {apkSize})</span>
                    </button>

                    <button
                      onClick={() => handleDirectApkDownload("Aegis-Client.apk")}
                      className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
                      title="Download with Aegis-Client.apk filename"
                    >
                      <Download className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Aegis-Client.apk Mirror</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <button
                      onClick={onOpenAdbGuide}
                      className="text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1 cursor-pointer underline underline-offset-4"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>View 3-Step Wireless ADB Guide →</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* SHA-256 Checksum Bar */}
              <div className="p-3 rounded-xl bg-[#050812] border border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400 overflow-hidden">
                  <span className="text-emerald-400 font-bold shrink-0">SHA-256:</span>
                  <span className="truncate text-[11px] text-slate-300">
                    {apkSha256}
                  </span>
                </div>

                <button
                  onClick={handleCopyHash}
                  className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copiedSha ? (
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

            {/* Android Compatibility & Security Notice */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#0a0f1e]/80 border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase block">Android Version</span>
                <span className="font-bold text-slate-200">Android 10.0+ (API 29+)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0a0f1e]/80 border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase block">Root Required</span>
                <span className="font-bold text-emerald-400">NO (Zero Root)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0a0f1e]/80 border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase block">Connection</span>
                <span className="font-bold text-cyan-300">Wi-Fi / WebSocket</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0a0f1e]/80 border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase block">Privacy</span>
                <span className="font-bold text-violet-300">100% Local LAN</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-[#0a0f1e]/80 border border-white/5 hover:border-emerald-500/30 transition-all space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Wifi className="w-4 h-4" />
            </div>
            <h4 className="font-display font-bold text-white text-sm">Wireless ADB Daemon</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Connect over local Wi-Fi port 5555 without any USB cables. Auto-discovers and reconnects when your phone joins the network.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0a0f1e]/80 border border-white/5 hover:border-cyan-500/30 transition-all space-y-2">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[#00F2FF]">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="font-display font-bold text-white text-sm">Accessibility Gesture Engine</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Enables natural tap, swipe, and scroll gestures across any Android app through the official Android Accessibility API.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0a0f1e]/80 border border-white/5 hover:border-violet-500/30 transition-all space-y-2">
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="font-display font-bold text-white text-sm">Smart Screen PIN Unlock</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Wakes device and inputs your secure PIN automatically to execute urgent tasks even when you are away from your handset.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0a0f1e]/80 border border-white/5 hover:border-emerald-500/30 transition-all space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h4 className="font-display font-bold text-white text-sm">WhatsApp &amp; SMS Voice Bridge</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Speak to your PC in Bengali or English: "Send WhatsApp to Rahim," and the mobile companion composes and dispatches it instantly.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MobileClientSection;
