import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Shield, 
  Mail, 
  ExternalLink, 
  FileText, 
  ShieldCheck
} from "lucide-react";

export function Footer({ onOpenPrivacy, onOpenTerms }) {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#03060e] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Background cyber lines */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Main Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F2FF]/20 to-[#7C3AED]/20 border border-[#00F2FF]/40 flex items-center justify-center">
                <img src="/icon.png" alt="Supervex AI" className="w-5 h-5 object-cover rounded" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-wider text-white">
                SUPERVEX<span className="text-[#00F2FF]">::</span>AI
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t("footer.tagline", "The Autonomous Multi-Agent Desktop & Mobile Intelligence System. Unified control over PC, browser, and mobile phone through natural voice or text commands.")}
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

              {/* Social Channels & Entity Links for Google Knowledge Graph */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 block mb-2 font-semibold">Official Channels:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/zinnahkhan01/Supervex-AI"
                    target="_blank"
                    rel="me noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#00F2FF]/20 border border-white/10 hover:border-[#00F2FF]/40 text-slate-300 hover:text-[#00F2FF] flex items-center justify-center transition-all cursor-pointer"
                    title="GitHub: zinnahkhan01/Supervex-AI"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/supervexai"
                    target="_blank"
                    rel="me noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#0077b5]/20 border border-white/10 hover:border-[#0077b5]/40 text-slate-300 hover:text-[#0077b5] flex items-center justify-center transition-all cursor-pointer"
                    title="LinkedIn: Supervex AI"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/supervexai"
                    target="_blank"
                    rel="me noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#1877f2]/20 border border-white/10 hover:border-[#1877f2]/40 text-slate-300 hover:text-[#1877f2] flex items-center justify-center transition-all cursor-pointer"
                    title="Facebook: Supervex AI"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                    </svg>
                  </a>

                  <a
                    href="https://x.com/supervexai"
                    target="_blank"
                    rel="me noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/40 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    title="X (Twitter): @supervexai"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 1: Core Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              {t("nav.features", "Capabilities")}
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
              {t("nav.downloads", "Downloads")}
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => scrollTo("#downloads")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">{t("downloads.btnDownloadExe", "Windows Installer (.exe)")}</button></li>
              <li><button onClick={() => scrollTo("#downloads")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">{t("downloads.btnDownloadZip", "Windows Portable (.zip)")}</button></li>
              <li><button onClick={() => scrollTo("#downloads")} className="hover:text-emerald-400 transition-colors cursor-pointer">{t("downloads.btnDownloadApk", "Android Companion APK")}</button></li>
              <li><button onClick={() => scrollTo("#downloads")} className="hover:text-violet-400 transition-colors cursor-pointer">iOS TestFlight</button></li>
              <li><button onClick={() => scrollTo("#downloads")} className="hover:text-slate-200 transition-colors cursor-pointer">{t("downloads.verifiedSafe", "Verified Safe Binaries")}</button></li>
            </ul>
          </div>

          {/* Column 3: Trust & Governance */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              {t("nav.security", "Security & Legal")}
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={onOpenPrivacy} 
                  className="hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t("footer.privacy", "Privacy Policy")}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenTerms} 
                  className="hover:text-[#00F2FF] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#00F2FF]" />
                  <span>{t("footer.terms", "Terms of Service")}</span>
                </button>
              </li>
              <li><button onClick={() => scrollTo("#security")} className="hover:text-emerald-400 transition-colors cursor-pointer">{t("security.title", "100% Local Privacy")}</button></li>
              <li><button onClick={() => scrollTo("#architecture")} className="hover:text-[#00F2FF] transition-colors cursor-pointer">{t("architecture.title", "Multi-Agent Architecture")}</button></li>
              <li><button onClick={() => scrollTo("#faq")} className="hover:text-slate-200 transition-colors cursor-pointer">{t("nav.faq", "FAQ & Knowledge Base")}</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Row */}
        <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>&copy; 2026 Supervex AI. {t("footer.rights", "Developed & Owned by MD ZINNAH KHAN. All rights reserved.")}</p>
          
          <div className="flex items-center gap-4 text-xs">
            <button 
              onClick={onOpenPrivacy} 
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {t("footer.privacy", "Privacy Policy")}
            </button>
            <span className="text-slate-700">•</span>
            <button 
              onClick={onOpenTerms} 
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {t("footer.terms", "Terms of Service")}
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

export default Footer;
