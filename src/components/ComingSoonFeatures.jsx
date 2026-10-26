import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { COMING_SOON_DATA, ROADMAP_MILESTONES } from "../data/comingSoonData";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Mic, 
  Cpu, 
  BrainCircuit, 
  Terminal, 
  Layers, 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  Mail, 
  Smartphone, 
  Layout, 
  Code2, 
  Globe, 
  Box, 
  Boxes, 
  Workflow, 
  Wand2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Play
} from "lucide-react";

export function ComingSoonFeatures({ onOpenWaitlist }) {
  const { currentLanguage, t } = useLanguage();
  const isBn = currentLanguage === "bn";

  const [activeTab, setActiveTab] = useState("all");
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);

  const interactiveDemos = [
    {
      title: isBn ? "অ্যান্ড্রয়েড স্টুডিও মোবাইল অ্যাপ" : "Android Studio Mobile App",
      icon: "Smartphone",
      prompt: isBn 
        ? "Supervex, build a dark neon fitness tracker APK with step counter and local SQLite database."
        : "Supervex, build a dark neon fitness tracker APK with step counter and local SQLite database.",
      plan: [
        { step: "01", name: isBn ? "আর্কিটেকচার প্ল্যান" : "Architectural Blueprint", detail: "Generate MVVM Kotlin architecture & SQLite schema" },
        { step: "02", name: isBn ? "অ্যান্ড্রয়েড স্টুডিও লঞ্চ" : "Launch Android Studio", detail: "Scaffold Jetpack Compose UI & sensor listener" },
        { step: "03", name: isBn ? "গ্রেডেল কম্পাইলেশন" : "Gradle APK Build", detail: "Compile release APK with ProGuard optimization" },
        { step: "04", name: isBn ? "ফোনে সরাসরি ডিপ্লয়" : "Wireless ADB Push", detail: "Install and launch on connected Samsung Galaxy device" }
      ],
      terminalSnippet: `[CEO_AGENT] Planning Android App: FitnessTracker_v1.0
[ANDROID_STUDIO] Initializing Gradle Daemon 8.4...
[KOTLIN_SYNTH] Writing StepSensorListener.kt & RoomDb.kt
[BUILD] ./gradlew assembleDebug --parallel (SUCCESS in 4.2s)
[ADB_BRIDGE] Wireless push -> /data/app/com.supervex.fit
[COMPLETION] App running live on target phone screen.`
    },
    {
      title: isBn ? "ফুল-স্ট্যাক ওয়েবসাইট বিল্ডার" : "Full-Stack Website Builder",
      icon: "Layout",
      prompt: isBn
        ? "Supervex, create a modern cyber-themed portfolio website with project gallery and dark mode."
        : "Supervex, create a modern cyber-themed portfolio website with project gallery and dark mode.",
      plan: [
        { step: "01", name: isBn ? "ডিজাইন সিস্টেম তৈরি" : "Design Token System", detail: "Generate Tailwind tokens, cyber palettes & glassmorphism" },
        { step: "02", name: isBn ? "কম্পোনেন্ট কোডিং" : "Component Synthesis", detail: "Write React/Vite responsive components & interactive state" },
        { step: "03", name: isBn ? "হেডলেস টেস্ট" : "Stealth Verification", detail: "Test navigation and performance in Playwright stealth browser" },
        { step: "04", name: isBn ? "১-ক্লিক ক্লাউড পাবলিশ" : "Live Cloud Deployment", detail: "Deploy live to Vercel/Cloudflare with custom SSL" }
      ],
      terminalSnippet: `[CEO_AGENT] Spoken Intent: "Create cyber-themed portfolio"
[WEB_BUILDER] Scaffolding React 19 + TailwindCSS v3.4...
[SYNTH_PAGE] Generating Hero, ProjectGallery, ContactForm.jsx
[PLAYWRIGHT] Automated audit: 100% Mobile & Desktop Passed
[DEPLOY_ENGINE] Pushing to Vercel production edge...
[LIVE_URL] https://preview-portfolio-89a.supervex.site (ONLINE)`
    },
    {
      title: isBn ? "মাইক্রোসফট অফিস ৩৬৫ স্যুট" : "Microsoft 365 Office Suite",
      icon: "FileSpreadsheet",
      prompt: isBn
        ? "Supervex, open Excel, import sales.csv, calculate profit margins, and create a 3D bar chart."
        : "Supervex, open Excel, import sales.csv, calculate profit margins, and create a 3D bar chart.",
      plan: [
        { step: "01", name: isBn ? "উইন৩২ এপিআই সংযোগ" : "Win32 COM Handshake", detail: "Attach to Microsoft Excel / Word process instance" },
        { step: "02", name: isBn ? "ডাটা ইমপোর্ট ও ফরম্যাটিং" : "Data Import & Cleansing", detail: "Parse CSV, sanitize rows, format currency columns" },
        { step: "03", name: isBn ? "ফর্মুলা ও পিভট ক্যালকুলেশন" : "Formula Synthesis", detail: "Insert dynamic XLOOKUP & calculate margins automatically" },
        { step: "04", name: isBn ? "থ্রিডি চার্ট ও সেভ" : "Chart & Presentation Export", detail: "Generate 3D clustered chart and export to .xlsx & PDF" }
      ],
      terminalSnippet: `[CEO_AGENT] Attaching to Microsoft Excel 365 process...
[EXCEL_BRIDGE] Loading dataset: "sales_q4_2026.csv" (1,450 rows)
[FORMULA_ENGINE] Applying =([@Revenue]-[@Cost])/[@Revenue]
[VISUALS] Building 3D Clustered Column Chart object
[OFFICE_DOC] Saved: "Q4_Performance_Analysis.xlsx"
[VOICE_CONFIRM] "Excel financial model and 3D chart are ready on your desktop."`
    },
    {
      title: isBn ? "ব্লেন্ডার থ্রিডি ও অ্যাডঅনস" : "Blender 3D & Addon Studio",
      icon: "Box",
      prompt: isBn
        ? "Supervex, open Blender, create a metallic sci-fi drone with cyan neon thrusters, and render in Cycles."
        : "Supervex, open Blender, create a metallic sci-fi drone with cyan neon thrusters, and render in Cycles.",
      plan: [
        { step: "01", name: isBn ? "ব্লেন্ডার পাইথন স্ক্রিপ্টিং" : "Blender Python Synthesis", detail: "Synthesize bpy geometry script and procedural shaders" },
        { step: "02", name: isBn ? "মেটালিক শেডার ও লাইটিং" : "Materials & Lighting Rig", detail: "Assign PBR metallic shaders, emission nodes & 3-point light" },
        { step: "03", name: isBn ? "ক্যামেরা ফ্রেম ও পজিশন" : "Cinematic Camera Rig", detail: "Lock 50mm lens with depth of field and rim lighting" },
        { step: "04", name: isBn ? "সাইকেলস রেন্ডারিং" : "Cycles GPU Render", detail: "Render 1080p photorealistic frame and save to output folder" }
      ],
      terminalSnippet: `[BLENDER_DAEMON] Initializing Blender 4.2 Background Engine...
[BPY_GEN] Synthesizing drone_chassis.py with Bevel & Boolean
[MATERIAL] NodeSetup: Metallic: 0.95, Roughness: 0.18, Emission: #00F2FF
[LIGHTING] Adding Key, Fill, and Cyan Neon Rim Lights
[CYCLES] Denoised render complete (Samples: 256, 1080p, Time: 6.8s)
[DELIVERY] Output: Drone_Cinematic_Render.png ready.`
    }
  ];

  const getLucideIcon = (name, className) => {
    switch(name) {
      case "FileText": return <FileText className={className} />;
      case "FileSpreadsheet": return <FileSpreadsheet className={className} />;
      case "Presentation": return <Presentation className={className} />;
      case "Mail": return <Mail className={className} />;
      case "Smartphone": return <Smartphone className={className} />;
      case "Layout": return <Layout className={className} />;
      case "Code2": return <Code2 className={className} />;
      case "Globe": return <Globe className={className} />;
      case "Box": return <Box className={className} />;
      case "Boxes": return <Boxes className={className} />;
      case "BrainCircuit": return <BrainCircuit className={className} />;
      case "Workflow": return <Workflow className={className} />;
      case "Mic": return <Mic className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "Layers": return <Layers className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const filteredCards = activeTab === "all" 
    ? COMING_SOON_DATA 
    : COMING_SOON_DATA.filter(item => item.category === activeTab);

  return (
    <section id="coming-soon" className="relative py-24 sm:py-32 bg-[#050811] overflow-hidden border-t border-white/5">
      {/* Background Cyber Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-[#00F2FF]/10 via-purple-600/10 to-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-mono tracking-wider uppercase mb-5 shadow-neon-glow">
            <span className="w-2 h-2 rounded-full bg-[#00F2FF] animate-ping" />
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isBn ? "আসন্ন ফিচারসমূহ // নেক্সট-জেন রোডম্যাপ" : "COMING SOON // THE AUTONOMOUS CREATION SUITE"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display mb-6">
            {isBn ? (
              <>
                শুধু একবার মুখে বলুন— <br />
                <span className="bg-gradient-to-r from-[#00F2FF] via-purple-400 to-amber-400 bg-clip-text text-transparent">
                  প্ল্যান করে নিজেই বানিয়ে ফেলবে
                </span>
              </>
            ) : (
              <>
                Speak Your Vision Once. <br />
                <span className="bg-gradient-to-r from-[#00F2FF] via-purple-400 to-amber-400 bg-clip-text text-transparent">
                  Supervex Plans, Architects & Builds It.
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {isBn 
              ? "মাইক্রোসফট অফিস (ওয়ার্ড, এক্সেল, পাওয়ারপয়েন্ট), অ্যান্ড্রয়েড স্টুডিও মোবাইল অ্যাপস বিল্ডার, ফুল-স্ট্যাক ওয়েবসাইট এবং ব্লেন্ডার থ্রিডি—সবকিছুই স্বয়ংক্রিয়ভাবে নিয়ন্ত্রণ ও তৈরি করার আসন্ন ক্ষমতা।"
              : "Full autonomous control over Microsoft Office 365, native Android Studio APK compilation, one-shot website generation, and Blender 3D modeling. Pure voice-driven execution."
            }
          </p>
        </div>

        {/* Interactive Spoken Intent-to-Build Visualizer */}
        <div className="mb-20 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00F2FF]/10 to-transparent blur-3xl pointer-events-none" />

          {/* Visualizer Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F2FF] uppercase tracking-wider mb-1">
                <BrainCircuit className="w-4 h-4" />
                <span>{isBn ? "স্বয়ংক্রিয় ভয়েস-টু-বিল্ড পাইপলাইন" : "AUTONOMOUS VOICE-TO-BUILD ENGINE"}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {isBn ? "লাইভ অটোনোমাস এক্সিকিউশন ডেমো" : "Live Intent-to-Execution Simulator"}
              </h3>
            </div>

            {/* Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {interactiveDemos.map((demo, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDemoIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    selectedDemoIndex === idx
                      ? "bg-[#00F2FF] text-slate-950 font-bold shadow-neon-glow"
                      : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {getLucideIcon(demo.icon, "w-3.5 h-3.5")}
                  <span>{demo.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Demo Execution Pipeline */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Spoken Prompt & 4-Step Cognitive Plan */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Spoken Audio Input Simulation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-[#00F2FF]/20 relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00F2FF]">
                    <Mic className="w-3.5 h-3.5 text-[#00F2FF] animate-pulse" />
                    <span>{isBn ? "ব্যবহারকারীর মুখের ভয়েস কমান্ড:" : "USER SPOKEN VOICE COMMAND:"}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/30">
                    VAD STREAM ACTIVE
                  </span>
                </div>
                <p className="text-sm sm:text-base font-medium text-white italic">
                  "{interactiveDemos[selectedDemoIndex].prompt}"
                </p>
              </div>

              {/* Cognitive 4-Step Plan */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Workflow className="w-3.5 h-3.5 text-purple-400" />
                  <span>{isBn ? "সিইও এজেন্টের স্বয়ংক্রিয় ৪-ধাপের প্ল্যান:" : "CEO AGENT 4-STAGE COGNITIVE EXECUTION PLAN:"}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interactiveDemos[selectedDemoIndex].plan.map((item, pIdx) => (
                    <div 
                      key={pIdx} 
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#00F2FF]/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-md bg-[#00F2FF]/10 text-[#00F2FF] text-[10px] font-mono font-bold flex items-center justify-center border border-[#00F2FF]/30">
                          {item.step}
                        </span>
                        <span className="text-xs font-bold text-white">{item.name}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: High-Tech Live Terminal Log Output */}
            <div className="lg:col-span-5 rounded-2xl bg-black/90 border border-white/10 p-4 font-mono text-xs overflow-hidden shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400 text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-slate-300">supervex-daemon :: stdout</span>
                </div>
                <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  AUTONOMOUS
                </span>
              </div>
              <pre className="text-slate-300 text-[11px] leading-relaxed whitespace-pre-wrap font-mono overflow-x-auto">
                {interactiveDemos[selectedDemoIndex].terminalSnippet}
              </pre>
            </div>

          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: "all", label: isBn ? "সবগুলো ফিচার" : "All Capabilities" },
            { id: "office", label: isBn ? "মাইক্রোসফট অফিস ৩৬৫" : "Microsoft Office" },
            { id: "mobile", label: isBn ? "অ্যান্ড্রয়েড স্টুডিও বিল্ডার" : "Android Studio" },
            { id: "web", label: isBn ? "ফুল-স্ট্যাক ওয়েবসাইট" : "Website Builder" },
            { id: "creative", label: isBn ? "ব্লেন্ডার থ্রিডি ও অ্যাডঅনস" : "Blender 3D" },
            { id: "universal", label: isBn ? "ইউনিভার্সাল ভয়েস ইঞ্জিন" : "Voice Engine" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#00F2FF] to-cyan-400 text-slate-950 font-bold shadow-neon-glow"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Coming Soon Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredCards.map((card) => {
            const isPurple = card.accent === "purple";
            const isEmerald = card.accent === "emerald";
            const isAmber = card.accent === "amber";
            const isBlue = card.accent === "blue";

            return (
              <div 
                key={card.id}
                className="group relative rounded-3xl bg-slate-900/40 border border-white/10 p-6 sm:p-8 backdrop-blur-md hover:border-[#00F2FF]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-glass-card hover:shadow-neon-glow"
              >
                {/* Accent Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  isBlue ? "from-blue-500 via-cyan-400 to-transparent" :
                  isEmerald ? "from-emerald-500 via-teal-400 to-transparent" :
                  isAmber ? "from-amber-500 via-orange-400 to-transparent" :
                  isPurple ? "from-purple-500 via-fuchsia-400 to-transparent" :
                  "from-cyan-500 via-blue-400 to-transparent"
                }`} />

                <div>
                  {/* Card Header & Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {card.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/20 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-pulse" />
                        {card.status}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">
                        {card.eta}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#00F2FF] transition-colors">
                    {isBn ? card.bnTitle : card.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mb-4">
                    {isBn ? card.bnSubtitle : card.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {isBn ? card.bnDesc : card.desc}
                  </p>

                  {/* Sub-Apps / Key Module Capabilities */}
                  <div className="space-y-2.5 mb-6">
                    {card.apps.map((sub, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 hover:bg-white/[0.04] transition-colors"
                      >
                        <div className={`p-2 rounded-lg shrink-0 border ${sub.color}`}>
                          {getLucideIcon(sub.icon, "w-4 h-4")}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white mb-0.5">
                            {sub.name}
                          </div>
                          <div className="text-[11px] text-slate-400 leading-snug">
                            {isBn && sub.bnCapability ? sub.bnCapability : sub.capability}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Sample Voice Command */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                    <Mic className="w-3 h-3 text-[#00F2FF]" />
                    <span>{isBn ? "স্যাম্পল ভয়েস প্রম্পট:" : "SAMPLE SPOKEN PROMPT:"}</span>
                  </div>
                  <p className="text-xs text-[#00F2FF] font-mono bg-black/40 p-2.5 rounded-lg border border-[#00F2FF]/20 italic">
                    "{isBn ? card.bnSampleVoicePrompt : card.sampleVoicePrompt}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3-Phase Interactive Roadmap Milestones */}
        <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-10 mb-16 backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>{isBn ? "ডেভেলপমেন্ট টাইমলাইন" : "SUPERVEX RELEASE ROADMAP"}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {isBn ? "প্রোডাক্ট রোলআউট মাইলস্টোন" : "Product Rollout Timeline"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROADMAP_MILESTONES.map((mile, mIdx) => {
              const isDone = mile.status === "completed";
              const isInProgress = mile.status === "in-progress";

              return (
                <div 
                  key={mIdx}
                  className={`p-6 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                    isDone 
                      ? "bg-cyan-950/20 border-cyan-500/30" 
                      : isInProgress
                      ? "bg-purple-950/20 border-purple-500/40 shadow-neon-glow"
                      : "bg-white/[0.02] border-white/5"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold ${
                        isDone 
                          ? "bg-cyan-500/20 text-[#00F2FF] border border-cyan-500/30" 
                          : isInProgress 
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" 
                          : "bg-white/5 text-slate-400 border border-white/10"
                      }`}>
                        {mile.phase}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{mile.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-4">
                      {isBn ? mile.bnTitle : mile.title}
                    </h4>

                    <ul className="space-y-2 mb-6">
                      {(isBn ? mile.bnItems : mile.items).map((it, iIdx) => (
                        <li key={iIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isDone ? "text-[#00F2FF]" : isInProgress ? "text-purple-400" : "text-slate-500"
                          }`} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/5 text-right">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {isDone ? (isBn ? "✓ লাইভ সম্পন্ন" : "✓ CURRENTLY LIVE") : isInProgress ? (isBn ? "⚡ আরঅ্যান্ডডি চলমান" : "⚡ ACTIVE CODING") : (isBn ? "পরবর্তী ধাপ" : "UPCOMING")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to Action for Early Alpha Access */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#00F2FF]/10 via-purple-600/10 to-transparent border border-[#00F2FF]/30 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {isBn 
                ? "নতুন ফিচারগুলোর আলফা অ্যাক্সেস চান?" 
                : "Want Early Alpha Access to Creator Studio?"}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isBn
                ? "আমাদের প্রায়োরিটি ওয়েটলিস্টে যুক্ত হোন। মাইক্রোসফট অফিস, অ্যান্ড্রয়েড স্টুডিও বিল্ডার এবং ওয়েবসাইট বিল্ডারের পাবলিক বেটা রিলিজের সাথে সাথে আর্লি ইনভাইটেশন লিংক পেয়ে যাবেন।"
                : "Join the priority waitlist to get immediate early beta invites as Microsoft Office automation, Android Studio compiler, and Instant Website Builder enter alpha release."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenWaitlist}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00F2FF] to-cyan-400 text-slate-950 font-bold text-sm hover:shadow-neon-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>{isBn ? "ওয়েটলিস্টে যুক্ত হোন" : "Join Early Access Waitlist"}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
