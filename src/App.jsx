import React, { useState, useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureGrid } from "./components/FeatureGrid";
import { ComingSoonFeatures } from "./components/ComingSoonFeatures";
import { Architecture } from "./components/Architecture";
import { MobileClientSection } from "./components/MobileClientSection";
import { CommandSimulator } from "./components/CommandSimulator";
import { DownloadHub } from "./components/DownloadHub";
import { SecurityPrivacy } from "./components/SecurityPrivacy";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Modals } from "./components/Modals";
import { GeoLanguageToast } from "./components/GeoLanguageToast";
import { MsOfficePage } from "./components/MsOfficePage";
import { FileText, ArrowRight, Sparkles } from "lucide-react";

export function AppContent() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#ms-office" || window.location.pathname.includes("ms-office")) {
        return "ms-office";
      }
    }
    return "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#ms-office") {
        setCurrentPage("ms-office");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (window.location.hash === "" || window.location.hash === "#") {
        setCurrentPage("home");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === "ms-office") {
      window.location.hash = "#ms-office";
    } else {
      window.location.hash = "";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenDownload = () => {
    if (currentPage !== "home") {
      navigateTo("home");
      setTimeout(() => {
        const el = document.querySelector("#downloads");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return;
    }
    const el = document.querySelector("#downloads");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-[#00F2FF]/30 selection:text-white relative">
      {/* Sticky Glass Navbar */}
      <Navbar 
        onOpenDownload={handleOpenDownload} 
        onOpenMsOffice={() => navigateTo("ms-office")}
        onGoHome={() => navigateTo("home")}
        activePage={currentPage}
      />

      {/* Conditional Page Rendering */}
      {currentPage === "ms-office" ? (
        <MsOfficePage 
          onBack={() => navigateTo("home")}
          onOpenDownload={handleOpenDownload}
        />
      ) : (
        /* Main Home Page Flow */
        <main>
          {/* Hero with 3D Command Center Visual */}
          <Hero
            onOpenDownload={handleOpenDownload}
            onOpenReleaseNotes={() => setActiveModal("releaseNotes")}
            onOpenAdbGuide={() => setActiveModal("adbGuide")}
            onOpenWaitlist={() => setActiveModal("waitlist")}
          />

          {/* MS Office AI Suite Callout Banner */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div 
              onClick={() => navigateTo("ms-office")}
              className="relative p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-[#2B579A]/25 via-[#00F2FF]/10 to-[#7C3AED]/20 border border-[#00F2FF]/30 hover:border-[#00F2FF] shadow-glow-cyan/20 hover:shadow-glow-cyan/40 transition-all duration-300 cursor-pointer group flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#2B579A] to-[#1e3a8a] border border-[#00F2FF]/40 shadow-glow-cyan/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-[#00F2FF]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      NEW LIVE FEATURE
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                      Microsoft Office AI Suite
                    </span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-[#00F2FF] transition-colors">
                    মাইক্রোসফট অফিস (Word) সম্পূর্ণ ভয়েস ও টেক্সট অটোমেশন লাইভ!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    পাসওয়ার্ড দিয়ে ফাইল লক, টেবিলের নির্দিষ্ট কলামে লেখা, প্রফেশনাল সিভি তৈরি ও মেটাডেটা ক্লিনের সম্পূর্ণ ধাপভিত্তিক গাইড।
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold px-4 py-2.5 rounded-xl bg-[#00F2FF] text-[#050811] shadow-glow-cyan/50 group-hover:translate-x-1 transition-all shrink-0">
                <span>গাইড ও ব্যবহারের উদাহরণ দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </section>

          {/* 9 Feature Showcase Bento Grid */}
          <FeatureGrid />

          {/* Autonomous Creator Suite & Enterprise Roadmap */}
          <ComingSoonFeatures
            onOpenWaitlist={() => setActiveModal("waitlist")}
          />

          {/* CEO Agent Architecture & Telemetry */}
          <Architecture />

          {/* Dedicated Android Mobile Aegis Client Companion Section */}
          <MobileClientSection
            onOpenAdbGuide={() => setActiveModal("adbGuide")}
            onOpenQrCode={() => setActiveModal("qrCode")}
          />

          {/* Interactive Try-A-Command Simulator */}
          <CommandSimulator />

          {/* Multi-Platform Download Hub */}
          <DownloadHub
            onOpenReleaseNotes={() => setActiveModal("releaseNotes")}
            onOpenQrCode={() => setActiveModal("qrCode")}
            onOpenAdbGuide={() => setActiveModal("adbGuide")}
            onOpenWaitlist={() => setActiveModal("waitlist")}
          />

          {/* Security & Privacy Guarantees */}
          <SecurityPrivacy />

          {/* Knowledge Base & Accordion FAQ */}
          <FaqSection />
        </main>
      )}

      {/* Modern Cyber Footer with Legal Modals & Support */}
      <Footer 
        onOpenPrivacy={() => setActiveModal("privacy")}
        onOpenTerms={() => setActiveModal("terms")}
      />

      {/* Interactive Modal Overlays */}
      <Modals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />

      {/* Floating Geo-IP Detected Language Confirmation Toast */}
      <GeoLanguageToast />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
