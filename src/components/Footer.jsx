import React from "react";
import { Shield, Mail, ExternalLink, ShieldCheck, FileText } from "lucide-react";

export function Footer({ onOpenPrivacy, onOpenTerms }) {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#020409] border-t border-white/5 relative overflow-hidden">
      {/* Real-Time System Telemetry Ticker */}
      <div className="py-2.5 px-4 bg-[#050811] border-b border-white/5 text-[11px] font-mono text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold">ALL SYSTEMS NOMINAL</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline">API GATEWAY: 22ms</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline">ACTIVE AGENTS: 9/9 ONLINE</span>
          </div>
          
          <div className="flex items-center gap-4 text-slate-500">
            <span>ZERO CLOUD TELEMETRY</span>
            <span>BUILD: v1.0.0-BETA</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F2FF]/20 to-[#7C3AED]/20 border border-[#00F2FF]/40 flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#00F2FF]" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-wider text-white">
                AEGIS<span className="text-[#00F2FF]">::</span>AI
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              The autonomous multi-modal desktop intelligence system. Unified control over PC, browser, and mobile phone through natural voice or text commands.
            </p>

            {/* Official Support & GitHub Links */}
            <div className="space-y-2 pt-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-[#00F2FF]" />
                <span>Official Support:</span>
                <a 
                  href="mailto:support@supervexai.com" 
                  className="text-white hover:text-[#00F2FF] underline decoration-[#00F2FF]/30 transition-colors"
                >
                  support@supervexai.com
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-500">
                <a
                  href="https://github.com/zinnahkhan01/Supervex-AI"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title="GitHub Repository"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>github.com/zinnahkhan01/Supervex-AI</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Core Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              Capabilities
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => scrollTo("#features")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">Gemini Live Voice</button></li>
              <li><button onClick={() => scrollTo("#features")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">Advanced File Manager</button></li>
              <li><button onClick={() => scrollTo("#features")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">Playwright Stealth</button></li>
              <li><button onClick={() => scrollTo("#features")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">Wireless ADB Companion</button></li>
              <li><button onClick={() => scrollTo("#features")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">Vision & Screen Analysis</button></li>
            </ul>
          </div>

          {/* Column 2: Platform Downloads */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              Downloads
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => scrollTo("#downloads")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">Windows Installer (.exe)</button></li>
              <li><button onClick={() => scrollTo("#downloads")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">Windows Portable (.zip)</button></li>
              <li><button onClick={() => scrollTo("#downloads")} className="hover:text-emerald-400 transition-colors cursor-pointer">Android Companion APK</button></li>
              <li><button onClick={() => scrollTo("#downloads")} className="hover:text-violet-400 transition-colors cursor-pointer">iOS TestFlight Beta</button></li>
              <li><button onClick={() => scrollTo("#downloads")} className="hover:text-slate-200 transition-colors cursor-pointer">System Requirements</button></li>
            </ul>
          </div>

          {/* Column 3: Trust & Governance */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              Trust & Legal
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={onOpenPrivacy} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenTerms} 
                  className="hover:text-[#00F2FF] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#00F2FF]" />
                  <span>Terms of Service</span>
                </button>
              </li>
              <li><button onClick={() => scrollTo("#security")} className="hover:text-emerald-400 transition-colors cursor-pointer">100% Local Privacy</button></li>
              <li><button onClick={() => scrollTo("#architecture")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">CEO Agent DAG Routing</button></li>
              <li><button onClick={() => scrollTo("#faq")} className="hover:text-slate-200 transition-colors cursor-pointer">FAQ & Knowledge Base</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Row */}
        <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>&copy; 2026 Supervex AI. Owned &amp; developed by <span className="text-slate-300 font-semibold">MD ZINNAH KHAN</span>. All rights reserved.</p>
          
          <div className="flex items-center gap-4 text-xs">
            <button 
              onClick={onOpenPrivacy} 
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">•</span>
            <button 
              onClick={onOpenTerms} 
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-slate-700">•</span>
            <a 
              href="mailto:support@supervexai.com" 
              className="text-slate-400 hover:text-[#00F2FF] transition-colors"
            >
              support@supervexai.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
