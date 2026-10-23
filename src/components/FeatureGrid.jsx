import React, { useState } from "react";
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
    { id: "all", label: "All 9 Capabilities" },
    { id: "core", label: "Voice & AI Engine" },
    { id: "desktop", label: "Desktop & Files" },
    { id: "web_mobile", label: "Browser & Mobile" },
    { id: "vision_tasks", label: "Vision & Tasks" }
  ];

  const filteredFeatures = activeCategory === "all" 
    ? FEATURES_DATA 
    : FEATURES_DATA.filter(f => f.category === activeCategory);

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#050811]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00F2FF]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#7C3AED]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-violet-300 text-xs font-mono">
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>FULL MULTI-AGENT SPECIFICATION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            The 9 Sovereign Powers of{" "}
            <span className="bg-gradient-to-r from-[#00F2FF] to-[#7C3AED] bg-clip-text text-transparent">
              Supervex AI
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Every capability is engineered as a dedicated, decoupled sub-agent orchestrated by the centralized CEO Brain. Real-time, sandboxed, and built for total desktop supremacy.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#00F2FF] text-slate-950 font-bold shadow-glow-cyan"
                    : "bg-[#0a0f1d] text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => {
            const isCodeOpen = expandedCodeId === feature.id;
            const isWide = feature.id === "core-voice" || feature.id === "file-management" || feature.id === "browser-automation";

            return (
              <div
                key={feature.id}
                className={`group relative rounded-2xl bg-[#0a0f1d]/70 backdrop-blur-xl border border-white/10 hover:border-[#00F2FF]/40 p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_35px_-10px_rgba(0,242,255,0.15)] ${
                  isWide && activeCategory === "all" ? "lg:col-span-1" : ""
                }`}
              >
                {/* Neon Accent Glow Line */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-${feature.accent === "violet" ? "[#7C3AED]" : feature.accent === "emerald" ? "emerald-400" : "[#00F2FF]"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#00F2FF]/50 transition-colors">
                        {getIcon(feature.id)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 block tracking-wider">
                          {feature.agentCode}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-300">
                          MODULE {feature.number}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#00F2FF] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <ul className="space-y-2 mb-5">
                    {feature.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Spoken Command Sample Chip */}
                  <div className="p-2.5 rounded-lg bg-[#050811]/90 border border-white/5 mb-4">
                    <span className="text-[10px] font-mono text-cyan-300 block mb-1 flex items-center gap-1">
                      <Command className="w-3 h-3 text-[#00F2FF]" />
                      SPOKEN VOICE COMMAND:
                    </span>
                    <p className="text-xs font-mono text-slate-300 italic">
                      "{feature.sampleCommand}"
                    </p>
                  </div>
                </div>

                {/* Bottom Interactive Code / Protocol Inspector */}
                <div className="pt-2 border-t border-white/5">
                  <button
                    onClick={() => setExpandedCodeId(isCodeOpen ? null : feature.id)}
                    className="w-full flex items-center justify-between text-xs font-mono text-slate-400 hover:text-white py-1 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-[#00F2FF]" />
                      {isCodeOpen ? "Hide Agent Tool Execution" : "Inspect Agent Tool Call"}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isCodeOpen ? "rotate-90 text-[#00F2FF]" : ""}`} />
                  </button>

                  {/* Expandable Code Preview */}
                  {isCodeOpen && (
                    <div className="mt-2.5 p-3 rounded-lg bg-[#050811] border border-cyan-500/20 text-[11px] font-mono text-cyan-200 overflow-x-auto animate-fadeIn">
                      <pre className="text-slate-300 whitespace-pre">
                        <code>{feature.toolSnippet}</code>
                      </pre>
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
