import React, { useState, useEffect } from "react";
import { Shield, Download, Menu, X, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar({ onOpenDownload }) {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.features", "Features"), href: "#features" },
    { label: t("nav.comingSoon", "Coming Soon"), href: "#coming-soon" },
    { label: t("nav.architecture", "Architecture"), href: "#architecture" },
    { label: t("nav.mobileApp", "Mobile App"), href: "#mobile-app" },
    { label: t("nav.simulator", "Simulator"), href: "#simulator" },
    { label: t("nav.downloads", "Download Hub"), href: "#downloads" },
    { label: t("nav.security", "Security"), href: "#security" },
    { label: t("nav.faq", "FAQ"), href: "#faq" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#downloads" && onOpenDownload) {
      onOpenDownload();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[#050811]/85 backdrop-blur-xl border-b border-white/10 shadow-glass-card py-3.5" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Status Badge */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F2FF]/20 via-[#7C3AED]/20 to-transparent border border-[#00F2FF]/40 shadow-glow-cyan/50 group-hover:border-[#00F2FF] transition-all duration-300">
              <img src="/icon.png" alt="Supervex AI" className="w-7 h-7 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-wider bg-gradient-to-r from-white via-slate-100 to-[#00F2FF] bg-clip-text text-transparent">
                  SUPERVEX<span className="text-[#00F2FF]">::</span>AI
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t("nav.version", "v1.0.4 ONLINE")}
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-tight hidden sm:block">
                {t("nav.tagline", "AUTONOMOUS DESKTOP INTELLIGENCE")}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0a0f1d]/60 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons (Language Switcher + GitHub + Download) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* 23-Language Selector Dropdown */}
            <LanguageSwitcher />
            <a
              href="https://github.com/zinnahkhan01/SupervexAI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center justify-center shrink-0"
              title="GitHub: zinnahkhan01/SupervexAI"
              aria-label="GitHub Repository"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="#downloads"
              onClick={(e) => handleLinkClick(e, "#downloads")}
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-slate-950 bg-gradient-to-r from-[#00F2FF] to-cyan-300 hover:from-cyan-300 hover:to-[#00F2FF] shadow-glow-cyan transition-all duration-300 flex items-center gap-2 shrink-0"
            >
              <Download className="w-3.5 h-3.5 text-slate-950 transition-transform group-hover:-translate-y-0.5" />
              <span>{t("nav.downloadBtn", "Download Hub")}</span>
            </a>
          </div>

          {/* Mobile Actions (Language Switcher + Hamburger) */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glass Sheet Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#050811]/95 backdrop-blur-2xl border-b border-white/10 mt-2 space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-white/5 px-2">
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t("nav.systemHealth", "SYSTEM HEALTH: 100% NOMINAL")}
            </span>
            <span className="text-xs text-slate-400 font-mono">v1.0.4</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-[#00F2FF] hover:bg-white/5 rounded-lg transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}

          <div className="pt-2">
            <a
              href="#downloads"
              onClick={(e) => handleLinkClick(e, "#downloads")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-[#00F2FF] to-cyan-300 shadow-glow-cyan"
            >
              <Download className="w-4 h-4" />
              <span>{t("nav.downloadBtn", "Download Hub")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
