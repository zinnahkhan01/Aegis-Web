import React, { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureGrid } from "./components/FeatureGrid";
import { Architecture } from "./components/Architecture";
import { CommandSimulator } from "./components/CommandSimulator";
import { DownloadHub } from "./components/DownloadHub";
import { SecurityPrivacy } from "./components/SecurityPrivacy";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Modals } from "./components/Modals";
import { GeoLanguageToast } from "./components/GeoLanguageToast";

export function AppContent() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenDownload = () => {
    const el = document.querySelector("#downloads");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-[#00F2FF]/30 selection:text-white relative">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenDownload={handleOpenDownload} />

      {/* Main Page Flow */}
      <main>
        {/* Hero with 3D Command Center Visual */}
        <Hero
          onOpenDownload={handleOpenDownload}
          onOpenReleaseNotes={() => setActiveModal("releaseNotes")}
          onOpenAdbGuide={() => setActiveModal("adbGuide")}
          onOpenWaitlist={() => setActiveModal("waitlist")}
        />

        {/* 9 Feature Showcase Bento Grid */}
        <FeatureGrid />

        {/* CEO Agent Architecture & Telemetry */}
        <Architecture />

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
