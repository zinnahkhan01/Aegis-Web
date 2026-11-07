import React, { useState, useMemo } from "react";
import { 
  FileText, 
  Table, 
  Presentation, 
  Mic, 
  Terminal, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Search, 
  Layers, 
  ArrowLeft, 
  ChevronRight, 
  Cpu, 
  Lock, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle,
  Download,
  HelpCircle,
  Clock,
  ExternalLink
} from "lucide-react";
import { MS_OFFICE_SUITE, MS_WORD_STEPS } from "../data/msOfficeData";

export function MsOfficePage({ onBack, onOpenDownload }) {
  const [selectedSuite, setSelectedSuite] = useState("ms-word");
  const [activeStepId, setActiveStepId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [selectedPreviewCmd, setSelectedPreviewCmd] = useState(null);

  const handleCopy = (text, id) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Filter commands by active step and search query
  const filteredSteps = useMemo(() => {
    return MS_WORD_STEPS.map((step) => {
      // Filter commands
      const matchedCommands = step.commands.filter((cmd) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          cmd.featureName.toLowerCase().includes(q) ||
          cmd.featureNameEn.toLowerCase().includes(q) ||
          cmd.description.toLowerCase().includes(q) ||
          cmd.voicePrompt.toLowerCase().includes(q) ||
          cmd.chatPrompt.toLowerCase().includes(q) ||
          cmd.category.toLowerCase().includes(q)
        );
      });

      return {
        ...step,
        commands: matchedCommands,
        matchesFilter: matchedCommands.length > 0
      };
    }).filter((step) => {
      if (activeStepId !== "all" && step.stepId !== activeStepId) return false;
      return step.matchesFilter;
    });
  }, [activeStepId, searchQuery]);

  const totalCommandsCount = useMemo(() => {
    return MS_WORD_STEPS.reduce((acc, s) => acc + s.commands.length, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-[#00F2FF]/30 selection:text-white pt-24 pb-20">
      {/* Background Cyber Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#00F2FF]/10 via-[#7C3AED]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#2B579A]/15 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-xs font-mono font-medium cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#00F2FF] group-hover:-translate-x-1 transition-transform" />
            <span>হোমে ফিরে যান (Back to Home)</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              MS Office Engine v2.1 Online
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Supervex AI Core
            </span>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Microsoft Office Autonomous Control
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            মাইক্রোসফট অফিস <span className="bg-gradient-to-r from-[#00F2FF] via-white to-[#7C3AED] bg-clip-text text-transparent">অটোমেশন গাইড</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            কোনো মাউস বা কীবোর্ড ক্লিক ছাড়া কেবল মুখে কথা বলে বা সাধারণ টেক্সট নির্দেশে মাইক্রোসফট ওয়ার্ড, এক্সেল এবং পাওয়ারপয়েন্ট স্বয়ংক্রিয়ভাবে নিয়ন্ত্রণ করুন। নিচে ব্যবহারের ধাপভিত্তিক বাস্তব উদাহরণ তুলে ধরা হলো।
          </p>
        </div>

        {/* ─── Office Suite App Switcher Tabs (Word, Excel, PowerPoint) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {MS_OFFICE_SUITE.map((app) => {
            const isSelected = selectedSuite === app.id;
            return (
              <div
                key={app.id}
                onClick={() => setSelectedSuite(app.id)}
                className={`relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-gradient-to-b from-[#0a1226] to-[#070b16] border-[#00F2FF] shadow-glow-cyan/40 scale-[1.02]"
                    : "bg-[#0a0f1d]/70 hover:bg-[#0a0f1d] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Active Indicator Top Glow */}
                {isSelected && (
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#00F2FF] to-transparent shadow-[0_0_12px_#00F2FF]" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-inner"
                        style={{ backgroundColor: `${app.color}25`, borderColor: `${app.color}60` }}
                      >
                        {app.id === "ms-word" && <FileText className="w-5 h-5 text-[#3b82f6]" />}
                        {app.id === "ms-excel" && <Table className="w-5 h-5 text-emerald-400" />}
                        {app.id === "ms-powerpoint" && <Presentation className="w-5 h-5 text-amber-400" />}
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-white">{app.name}</h2>
                        <span className="text-[11px] font-mono text-slate-400">{app.featuresCount}</span>
                      </div>
                    </div>

                    <span className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                      app.statusType === "live"
                        ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                        : "bg-amber-500/15 border-amber-500/40 text-amber-300"
                    }`}>
                      {app.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                    {app.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">
                    {isSelected ? "বর্তমানে প্রদর্শিত হচ্ছে" : "গাইড দেখতে ক্লিক করুন"}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "rotate-90 text-[#00F2FF]" : "text-slate-500"}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Content Area: Microsoft Word (Active Suite) ─── */}
        {selectedSuite === "ms-word" && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Control Bar: Search & Step Filters */}
            <div className="bg-[#0a0f1d]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-glass-card">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="কমান্ড বা ফিচার খুঁজুন (যেমন: পাসওয়ার্ড, টেবিল, সিভি, মেটাডেটা)..."
                    className="w-full pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F2FF] transition-all font-sans"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Step Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  <button
                    onClick={() => setActiveStepId("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                      activeStepId === "all"
                        ? "bg-[#00F2FF] text-[#050811] font-bold shadow-glow-cyan/50"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    সকল ধাপ ({totalCommandsCount})
                  </button>

                  {MS_WORD_STEPS.map((step) => {
                    const isStepActive = activeStepId === step.stepId;
                    return (
                      <button
                        key={step.stepId}
                        onClick={() => setActiveStepId(step.stepId)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                          isStepActive
                            ? "bg-[#00F2FF] text-[#050811] font-bold shadow-glow-cyan/50"
                            : "bg-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {step.stepNumber}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Real-time Notice Bar */}
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-slate-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>প্রতিটি ধাপের নির্দেশনায় ভয়েস ও চ্যাট ব্যবহারের কপি বাটন অন্তর্ভুক্ত রয়েছে।</span>
                </div>
                <div className="text-[11px] font-mono text-[#00F2FF]">
                  লাইভ পরীক্ষা সম্পন্ন: ১০০% ওয়ার্কিং
                </div>
              </div>
            </div>

            {/* Step-by-Step Sections */}
            {filteredSteps.length === 0 ? (
              <div className="text-center py-16 bg-[#0a0f1d]/50 border border-white/5 rounded-2xl">
                <AlertCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-1">কোনো কমান্ড খুঁজে পাওয়া যায়নি</h3>
                <p className="text-xs text-slate-400">"{searchQuery}" দিয়ে কোনো নির্দেশনা মেলেনি। ভিন্ন শব্দ দিয়ে সার্চ করুন।</p>
              </div>
            ) : (
              filteredSteps.map((step) => (
                <div 
                  key={step.stepId}
                  className="bg-[#080d1a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-7 shadow-glass-card relative overflow-hidden"
                >
                  {/* Decorative Header Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-lg bg-[#00F2FF]/15 border border-[#00F2FF]/40 text-[#00F2FF] text-xs font-mono font-bold">
                        {step.stepNumber}
                      </span>
                      <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">
                        {step.menuName}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {step.badge}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.summary}
                    </p>
                  </div>

                  {/* Command Cards Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {step.commands.map((cmd) => (
                      <div
                        key={cmd.id}
                        className="bg-[#060a14] border border-white/5 hover:border-[#00F2FF]/40 rounded-xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          {/* Card Header */}
                          <div className="flex items-start justify-between gap-3 mb-2.5">
                            <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00F2FF] transition-colors">
                              {cmd.featureName}
                            </h4>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 shrink-0">
                              {cmd.category}
                            </span>
                          </div>

                          <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                            {cmd.description}
                          </p>

                          {/* Voice Command Box */}
                          <div className="bg-[#0f172a]/80 border border-[#00F2FF]/20 rounded-xl p-3 mb-3 relative overflow-hidden">
                            <div className="flex items-center justify-between text-[11px] font-mono text-[#00F2FF] mb-1.5">
                              <span className="inline-flex items-center gap-1.5 font-bold">
                                <Mic className="w-3.5 h-3.5 animate-pulse text-[#00F2FF]" />
                                ভয়েসে যেভাবে বলবেন (Voice Prompt):
                              </span>
                              <button
                                onClick={() => handleCopy(cmd.voicePrompt, `${cmd.id}-voice`)}
                                className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-[#00F2FF]/10 hover:bg-[#00F2FF]/20 text-[#00F2FF] transition-colors cursor-pointer"
                                title="কপি করুন"
                              >
                                {copiedId === `${cmd.id}-voice` ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-400" />
                                    <span className="text-emerald-400">কপি হয়েছে!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>কপি</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-emerald-300 font-sans tracking-wide">
                              "{cmd.voicePrompt}"
                            </p>
                          </div>

                          {/* Text/Chat Command Box */}
                          <div className="bg-black/40 border border-white/10 rounded-xl p-3 mb-3">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                              <span className="inline-flex items-center gap-1.5">
                                <Terminal className="w-3.5 h-3.5 text-slate-300" />
                                চ্যাটে লিখুন (Chat / English Prompt):
                              </span>
                              <button
                                onClick={() => handleCopy(cmd.chatPrompt, `${cmd.id}-chat`)}
                                className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
                                title="কপি করুন"
                              >
                                {copiedId === `${cmd.id}-chat` ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-400" />
                                    <span className="text-emerald-400">কপি হয়েছে!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>কপি</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <code className="text-xs font-mono text-slate-200 block overflow-x-auto">
                              {cmd.chatPrompt}
                            </code>
                          </div>
                        </div>

                        {/* AI Behind the Scenes Action */}
                        <div className="pt-2.5 border-t border-white/5 flex items-start gap-2 text-[11px] text-slate-400 font-mono">
                          <Cpu className="w-3.5 h-3.5 text-[#00F2FF] shrink-0 mt-0.5" />
                          <span className="leading-tight">
                            <strong className="text-slate-300">AI Action:</strong> {cmd.aiAction}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}

            {/* Continuous Update Promise Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#2B579A]/20 via-[#00F2FF]/10 to-transparent border border-[#00F2FF]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#00F2FF]/15 border border-[#00F2FF]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#00F2FF]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    পরবর্তী সকল মেনু ও ফিচার স্বয়ংক্রিয়ভাবে যুক্ত হচ্ছে
                  </h4>
                  <p className="text-xs text-slate-300">
                    File Menu ➔ 1.2 (New, Open, Save, Export PDF), Home Tab, ও Insert Tab-এর প্রতিটি ধাপ সম্পন্ন হওয়ার সাথে সাথেই ওয়েবসাইটে লাইভ আপডেট যুক্ত করা হবে।
                  </p>
                </div>
              </div>

              {onOpenDownload && (
                <button
                  onClick={onOpenDownload}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00F2FF] to-[#7C3AED] hover:opacity-95 text-[#050811] text-xs font-mono font-bold flex items-center gap-2 cursor-pointer shrink-0 shadow-glow-cyan/40"
                >
                  <Download className="w-4 h-4" />
                  সুপারভেক্স এআই ডাউনলোড করুন
                </button>
              )}
            </div>

          </div>
        )}

        {/* ─── Content Area: Microsoft Excel (Coming Soon) ─── */}
        {selectedSuite === "ms-excel" && (
          <div className="p-8 sm:p-12 rounded-2xl bg-[#080d1a]/80 border border-emerald-500/20 text-center max-w-3xl mx-auto shadow-glass-card animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6">
              <Table className="w-8 h-8 text-emerald-400" />
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
              Roadmap Q1 • In Active Development
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-3">
              Microsoft Excel অটোনোমাস ইঞ্জিন আসছে
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              স্প্রেডশিট ডেটা বিশ্লেষণ, স্বয়ংক্রিয় ফর্মুলা রাইটিং (SUM, AVERAGE, VLOOKUP, XLOOKUP), পিভট টেবিল তৈরি এবং ভয়েস কমান্ডে চমৎকার গ্রাফ ও চার্ট তৈরি করার সক্ষমতা অতি শীঘ্রই যুক্ত হচ্ছে।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto text-xs font-mono text-slate-300">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>স্বয়ংক্রিয় ফর্মুলা ক্যালকুলেশন</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>পিভট টেবিল ও ফিল্টারিং</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ডায়নামিক চার্ট ও গ্রাফ</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>CSV/XLSX লাইভ ইমপোর্ট-এক্সপোর্ট</span>
              </div>
            </div>
          </div>
        )}

        {/* ─── Content Area: Microsoft PowerPoint (Coming Soon) ─── */}
        {selectedSuite === "ms-powerpoint" && (
          <div className="p-8 sm:p-12 rounded-2xl bg-[#080d1a]/80 border border-amber-500/20 text-center max-w-3xl mx-auto shadow-glass-card animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center mx-auto mb-6">
              <Presentation className="w-8 h-8 text-amber-400" />
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
              Roadmap Q2 • Architecture Phase
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-3">
              Microsoft PowerPoint এআই স্লাইড ডেক
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              যেকোনো আর্টিকেল, ডকুমেন্ট বা মিটিং নোট থেকে আকর্ষণীয় স্লাইড ডেক তৈরি, ইমেজ ও ইনফোগ্রাফিক প্লেসমেন্ট এবং প্রেজেন্টেশন চলাকালীন স্পিকার নোট স্বয়ংক্রিয়ভাবে জেনারেট করুন।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto text-xs font-mono text-slate-300">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>সম্পূর্ণ প্রেজেন্টেশন স্লাইড জেনারেশন</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>মডার্ন সাইবার ও এক্সিকিউটিভ থিম</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>স্পিকার নোট ও ট্রানজিশন</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>পিডিএফ ও স্লাইডশো মোড কন্ট্রোল</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default MsOfficePage;

