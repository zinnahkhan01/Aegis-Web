import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FEATURES_DATA } from "../data/featuresData";
import { 
  Radio, 
  FolderArchive, 
  Globe, 
  Smartphone, 
  MessageSquare, 
  Terminal, 
  Eye, 
  LayoutDashboard, 
  CheckSquare, 
  Code, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Command,
  Layers
} from "lucide-react";

export function FeatureGrid() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedCodeId, setExpandedCodeId] = useState(null);

  const getIcon = (id) => {
    switch(id) {
      case "core-voice": return <Radio className="w-5 h-5 text-[#00F2FF]" />;
      case "file-management": return <FolderArchive className="w-5 h-5 text-violet-400" />;
      case "browser-automation": return <Globe className="w-5 h-5 text-cyan-400" />;
      case "mobile-adb": return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case "whatsapp-web": return <MessageSquare className="w-5 h-5 text-emerald-300" />;
      case "desktop-control": return <Terminal className="w-5 h-5 text-violet-300" />;
      case "vision-screen": return <Eye className="w-5 h-5 text-[#00F2FF]" />;
      case "command-center-ui": return <LayoutDashboard className="w-5 h-5 text-cyan-300" />;
      case "task-management": return <CheckSquare className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-[#00F2FF]" />;
    }
  };

  const categories = [
    { id: "all", label: t("features.cat_all", "All 9 Capabilities") },
    { id: "core", label: t("features.cat_core", "Voice & AI Engine") },
    { id: "desktop", label: t("features.cat_desktop", "Desktop & Files") },
    { id: "web_mobile", label: t("features.cat_web_mobile", "Browser & Mobile") },
    { id: "vision_tasks", label: t("features.cat_vision_tasks", "Vision & Tasks") }
  ];

  const featureKeyMap = {
    "core-voice": { title: "f1_title", desc: "f1_desc", badge: "f1_badge", cmd: "f1_cmd" },
    "file-management": { title: "f2_title", desc: "f2_desc", badge: "f2_badge", cmd: "f2_cmd" },
    "browser-automation": { title: "f3_title", desc: "f3_desc", badge: "f3_badge", cmd: "f3_cmd" },
    "mobile-adb": { title: "f4_title", desc: "f4_desc", badge: "f4_badge", cmd: "f4_cmd" },
    "whatsapp-web": { title: "f5_title", desc: "f5_desc", badge: "f5_badge", cmd: "f5_cmd" },
    "desktop-control": { title: "f6_title", desc: "f6_desc", badge: "f6_badge", cmd: "f6_cmd" },
    "vision-screen": { title: "f7_title", desc: "f7_desc", badge: "f7_badge", cmd: "f7_cmd" },
    "command-center-ui": { title: "f8_title", desc: "f8_desc", badge: "f8_badge", cmd: "f8_cmd" },
    "task-management": { title: "f9_title", desc: "f9_desc", badge: "f9_badge", cmd: "f9_cmd" }
  };

  const localizedFeatures = FEATURES_DATA.map((f) => {
    const k = featureKeyMap[f.id] || {};
    return {
      ...f,
      title: k.title ? t(`features.${k.title}`, f.title) : f.title,
      shortDesc: k.desc ? t(`features.${k.desc}`, f.shortDesc) : f.shortDesc,
      badge: k.badge ? t(`features.${k.badge}`, f.badge) : f.badge,
      sampleCommand: k.cmd ? t(`features.${k.cmd}`, f.sampleCommand) : f.sampleCommand
    };
  });

  const filteredFeatures = activeCategory === "all" 
    ? localizedFeatures 
    : localizedFeatures.filter(f => f.category === activeCategory);

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#050811]">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00F2FF]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7C3AED]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-mono">
            <Command className="w-3.5 h-3.5" />
            <span>{t("features.tag", "SYSTEM CAPABILITIES")}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t("features.title", "The 9 Core Agents Matrix")}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            {t("features.subtitle", "Nine specialized neural agents running locally on your hardware to understand intent, perceive your screen, and control PC and mobile seamlessly.")}
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#00F2FF]/20 text-[#00F2FF] border border-[#00F2FF]/40 shadow-glow-cyan/20 font-bold"
                    : "bg-[#0a0f1d] text-slate-400 border border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 Features Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => {
            const isCodeExpanded = expandedCodeId === feature.id;

            return (
              <div
                key={feature.id}
                className="group relative rounded-2xl bg-[#0a0f1d]/90 border border-white/10 hover:border-cyan-500/40 p-6 sm:p-7 transition-all duration-300 hover:shadow-glow-cyan/20 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Number + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(feature.id)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                        {feature.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-bold">
                        {feature.number}
                      </span>
                    </div>
                  </div>

                  {/* Feature Title & Description */}
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {feature.shortDesc}
                  </p>

                  {/* Sample Command Box */}
                  <div className="p-3 rounded-xl bg-[#050811] border border-white/5 mb-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00F2FF] mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{t("features.sample_prompt_label", "Sample Voice Command")}</span>
                    </div>
                    <p className="text-xs font-mono text-slate-300 italic">
                      "{feature.sampleCommand}"
                    </p>
                  </div>
                </div>

                {/* Bottom Toggle: Inspect Logic */}
                <div className="pt-3 border-t border-white/5">
                  <button
                    onClick={() => setExpandedCodeId(isCodeExpanded ? null : feature.id)}
                    className="w-full flex items-center justify-between text-xs font-mono text-slate-400 hover:text-cyan-300 py-1 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-violet-400" />
                      <span>{t("features.inspect_logic", "Inspect Logic")}</span>
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isCodeExpanded ? "rotate-90 text-[#00F2FF]" : ""}`} />
                  </button>

                  {isCodeExpanded && (
                    <div className="mt-3 p-3 rounded-lg bg-[#050811] border border-white/5 text-[11px] font-mono text-slate-300 overflow-x-auto animate-fadeIn">
                      <pre className="whitespace-pre">{feature.toolSnippet}</pre>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export default FeatureGrid;
