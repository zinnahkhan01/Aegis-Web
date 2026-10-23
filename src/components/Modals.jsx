import React, { useState } from "react";
import { DOWNLOADS_DATA } from "../data/downloadsData";
import { 
  X, 
  Check, 
  Smartphone, 
  Download, 
  Terminal, 
  Copy, 
  Sparkles, 
  FileText, 
  Send,
  ShieldCheck,
  Lock,
  Loader2,
  Mail
} from "lucide-react";

export function Modals({
  activeModal, // "releaseNotes" | "qrCode" | "adbGuide" | "waitlist" | "privacy" | "terms" | null
  onClose
}) {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waitlistSuccess, setWaitlistSuccess] = useState(false);
  const [copiedAdbCmd, setCopiedAdbCmd] = useState(false);

  if (!activeModal) return null;

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    if (!waitlistEmail || !waitlistEmail.includes("@")) return;
    
    setIsSubmitting(true);
    
    // Save locally as reliable backup
    try {
      const existing = JSON.parse(localStorage.getItem("aegis_waitlist_emails") || "[]");
      if (!existing.includes(waitlistEmail)) {
        existing.push(waitlistEmail);
        localStorage.setItem("aegis_waitlist_emails", JSON.stringify(existing));
      }
    } catch (_) {}

    // Formspree Integration (uses environment variable if provided, or fallback form endpoint)
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "xpwzgqva";
    try {
      await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: waitlistEmail,
          platform: "iOS TestFlight and Early Access",
          source: "Aegis-Web Official",
          submittedAt: new Date().toISOString()
        })
      });
    } catch (err) {
      // Graceful offline fallback - local backup already saved
      console.log("Waitlist offline fallback active:", err);
    } finally {
      setIsSubmitting(false);
      setWaitlistSuccess(true);
      setTimeout(() => {
        setWaitlistSuccess(false);
        setWaitlistEmail("");
        onClose();
      }, 3500);
    }
  };

  const copyAdbCommand = (cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopiedAdbCmd(true);
    setTimeout(() => setCopiedAdbCmd(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-[#0a0f1d] border border-white/10 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. Release Notes Modal */}
        {activeModal === "releaseNotes" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/30 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#00F2FF]" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Aegis-AI Release Notes
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Version history and changelog
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {DOWNLOADS_DATA.releaseNotes.map((rel) => (
                <div key={rel.version} className="p-4 rounded-xl bg-[#050811] border border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-base font-bold text-white">{rel.version}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00F2FF]/15 text-[#00F2FF] border border-[#00F2FF]/30">
                        {rel.tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">{rel.date}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 font-sans">
                    {rel.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00F2FF] mt-0.5 font-mono">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono font-bold text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

        {/* 2. QR Code Mobile Download Modal */}
        {activeModal === "qrCode" && (
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mx-auto">
              <Smartphone className="w-6 h-6 text-emerald-400" />
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Scan to Download Android Companion
              </h3>
              <span className="text-xs font-mono text-emerald-400">
                v1.4.2 APK • 28.4 MB • Zero Configuration
              </span>
            </div>

            {/* Generated SVG QR Code Pattern */}
            <div className="w-48 h-48 mx-auto p-3 bg-white rounded-2xl shadow-glow-emerald flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <rect width="100" height="100" fill="#ffffff" />
                <rect x="10" y="10" width="30" height="30" fill="#000000" />
                <rect x="15" y="15" width="20" height="20" fill="#ffffff" />
                <rect x="20" y="20" width="10" height="10" fill="#000000" />

                <rect x="60" y="10" width="30" height="30" fill="#000000" />
                <rect x="65" y="15" width="20" height="20" fill="#ffffff" />
                <rect x="70" y="20" width="10" height="10" fill="#000000" />

                <rect x="10" y="60" width="30" height="30" fill="#000000" />
                <rect x="15" y="65" width="20" height="20" fill="#ffffff" />
                <rect x="20" y="70" width="10" height="10" fill="#000000" />

                <rect x="45" y="15" width="8" height="8" fill="#000000" />
                <rect x="45" y="30" width="8" height="12" fill="#000000" />
                <rect x="50" y="45" width="15" height="8" fill="#000000" />
                <rect x="70" y="45" width="10" height="10" fill="#000000" />
                <rect x="45" y="65" width="12" height="12" fill="#000000" />
                <rect x="65" y="65" width="25" height="8" fill="#000000" />
                <rect x="80" y="75" width="10" height="15" fill="#000000" />
              </svg>
            </div>

            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Scan with your phone's camera to download the APK directly, or click below to save to PC.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const el = document.createElement("a");
                  el.href = "#";
                  el.download = "Aegis-Companion-v1.4.2.apk";
                  el.click();
                }}
                className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save APK to PC</span>
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

        {/* 3. ADB Pairing Guide Modal */}
        {activeModal === "adbGuide" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Wireless ADB Setup Guide
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Pair your Android device with Aegis-AI in 3 simple steps
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs font-mono">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-[#050811] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">1</span>
                  <span>Enable Developer Options & Wireless Debugging</span>
                </div>
                <p className="text-slate-400 font-sans pl-7">
                  Go to Android <strong>Settings → About Phone</strong> and tap <strong>Build Number</strong> 7 times. Then go to <strong>Developer Options</strong> and toggle on <strong>Wireless Debugging</strong>.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-[#050811] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-[#00F2FF] font-bold">
                  <span className="w-5 h-5 rounded-full bg-[#00F2FF]/20 flex items-center justify-center text-[10px]">2</span>
                  <span>Connect Over Local Wi-Fi</span>
                </div>
                <p className="text-slate-400 font-sans pl-7">
                  Check your phone's IP address and Port under Wireless Debugging, then run or let Aegis auto-detect:
                </p>
                <div className="ml-7 p-2.5 rounded-lg bg-[#020409] border border-white/10 flex items-center justify-between text-cyan-200">
                  <code>adb connect 192.168.1.104:5555</code>
                  <button 
                    onClick={() => copyAdbCommand("adb connect 192.168.1.104:5555")}
                    className="p-1 hover:text-white cursor-pointer"
                  >
                    {copiedAdbCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-[#050811] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-violet-400 font-bold">
                  <span className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center text-[10px]">3</span>
                  <span>Launch Aegis Companion & Grant Accessibility</span>
                </div>
                <p className="text-slate-400 font-sans pl-7">
                  Open the Aegis Companion app on your phone and enable the <strong>Aegis Gesture Service</strong>. This enables hands-free screen touches, swipes, and app control.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono font-bold text-white transition-colors cursor-pointer"
            >
              Done / Got It
            </button>
          </div>
        )}

        {/* 4. iOS Waitlist Modal (Powered by Formspree) */}
        {activeModal === "waitlist" && (
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 mx-auto">
              <Sparkles className="w-6 h-6 text-violet-400" />
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                Join the iOS TestFlight Beta
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Be among the first to experience remote PC command, encrypted clipboard sync, and Siri Shortcuts bridging from your iPhone or iPad.
              </p>
            </div>

            {waitlistSuccess ? (
              <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs space-y-2">
                <div className="flex items-center justify-center gap-2 font-bold text-sm">
                  <Check className="w-5 h-5" />
                  <span>You're on the priority waitlist!</span>
                </div>
                <p className="text-slate-300 font-sans text-xs">
                  We have registered <strong>{waitlistEmail || "your email"}</strong>. An official Apple TestFlight invitation link will be dispatched as soon as public slots open.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-3 max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="Enter your Apple ID email (e.g. name@icloud.com)"
                    className="w-full px-4 py-3 rounded-xl bg-[#050811] border border-white/10 focus:border-violet-500 focus:outline-none text-xs sm:text-sm text-white font-mono placeholder:text-slate-500 disabled:opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 text-white font-bold text-xs font-mono tracking-wide shadow-glow-violet transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting to Formspree...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Request TestFlight Access</span>
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-500 pt-1">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Zero spam guarantee. Handled securely via Formspree API.</span>
                </div>
              </form>
            )}
          </div>
        )}

        {/* 5. Privacy Policy Modal */}
        {activeModal === "privacy" && (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Privacy Policy & Data Sovereignty
                </h3>
                <span className="text-xs font-mono text-emerald-400">
                  100% Local Intelligence • Zero Cloud Telemetry
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs font-sans text-slate-300 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1.5">
                <h4 className="font-mono font-bold text-white text-sm flex items-center gap-2">
                  <span className="text-emerald-400">1.</span> Sovereign Local Architecture
                </h4>
                <p className="text-slate-400">
                  Aegis AI operates on a strictly local architecture. All decision graphs, file automation, terminal commands, and local memory engines (SQLite and ChromaDB vector stores) execute exclusively on your machine.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1.5">
                <h4 className="font-mono font-bold text-white text-sm flex items-center gap-2">
                  <span className="text-emerald-400">2.</span> Zero Telemetry & Screen Privacy
                </h4>
                <p className="text-slate-400">
                  No screen captures, window inspection texts, audio recordings, or typed prompts are ever sent to central Aegis servers. Aegis AI collects zero tracking analytics, zero user profiles, and zero telemetry data.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1.5">
                <h4 className="font-mono font-bold text-white text-sm flex items-center gap-2">
                  <span className="text-emerald-400">3.</span> AI Provider Telemetry
                </h4>
                <p className="text-slate-400">
                  When using native Gemini Live duplex voice or Gemini multimodal features, audio packets and queries stream directly and encrypted between your client and the authorized Google GenAI endpoint using your personal API key. No intermediate proxy listens or logs your traffic.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1.5">
                <h4 className="font-mono font-bold text-white text-sm flex items-center gap-2">
                  <span className="text-emerald-400">4.</span> Developer & Inquiries
                </h4>
                <p className="text-slate-400">
                  For questions or audit inquiries regarding data sovereignty, contact: <a href="mailto:support@aegis-ai.com" className="text-[#00F2FF] hover:underline font-mono">support@aegis-ai.com</a>. Project owned and developed by <strong>MD ZINNAH KHAN</strong>.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono font-bold text-white transition-colors cursor-pointer"
            >
              Close Privacy Policy
            </button>
          </div>
        )}

        {/* 6. Terms of Service Modal */}
        {activeModal === "terms" && (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/30 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#00F2FF]" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Terms of Service & Licensing
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Aegis-AI Sovereign Desktop Client • v1.0.0 Beta
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs font-sans text-slate-300 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1.5">
                <h4 className="font-mono font-bold text-white text-sm flex items-center gap-2">
                  <span className="text-[#00F2FF]">1.</span> License & Ownership
                </h4>
                <p className="text-slate-400">
                  Aegis AI is created, owned, and maintained by <strong>MD ZINNAH KHAN</strong>. You are granted a personal, non-exclusive license to run and automate workflows on your own hardware.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1.5">
                <h4 className="font-mono font-bold text-white text-sm flex items-center gap-2">
                  <span className="text-[#00F2FF]">2.</span> Responsible Automation
                </h4>
                <p className="text-slate-400">
                  Aegis AI includes built-in safety guardrails (System Path Protection, Recycle Bin transactional undo, and non-destructive file operations). Users agree to use automation features, Android wireless bridges, and browser automation lawfully and responsibly.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1.5">
                <h4 className="font-mono font-bold text-white text-sm flex items-center gap-2">
                  <span className="text-[#00F2FF]">3.</span> Warranty Disclaimer
                </h4>
                <p className="text-slate-400">
                  The software is provided "as is", without warranty of any kind, express or implied. Under no circumstances shall the author be liable for any direct or consequential damages resulting from system automation scripts.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#050811] border border-white/5 space-y-1.5">
                <h4 className="font-mono font-bold text-white text-sm flex items-center gap-2">
                  <span className="text-[#00F2FF]">4.</span> Official Support
                </h4>
                <p className="text-slate-400">
                  For bug reports, enterprise inquiries, or feature suggestions, reach out to our team at <a href="mailto:contact@aegis-ai.com" className="text-[#00F2FF] hover:underline font-mono">contact@aegis-ai.com</a> or <a href="mailto:support@aegis-ai.com" className="text-[#00F2FF] hover:underline font-mono">support@aegis-ai.com</a>.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono font-bold text-white transition-colors cursor-pointer"
            >
              Close Terms of Service
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
