import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { SIMULATOR_COMMANDS } from "../data/simulatorData";
import { 
  Terminal, 
  RotateCcw, 
  Volume2, 
  Sparkles, 
  Cpu, 
  Send,
  Zap,
  Clock,
  Code
} from "lucide-react";

export function CommandSimulator() {
  const { t } = useLanguage();
  const [selectedCommand, setSelectedCommand] = useState(SIMULATOR_COMMANDS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(4);
  const [customInput, setCustomInput] = useState("");

  const chipKeyMap = {
    "notepad-notes": "chip_notepad",
    "youtube-music": "chip_youtube",
    "undo-file": "chip_undo",
    "phone-whatsapp": "chip_phone"
  };

  const getLocalizedChip = (cmd) => {
    const k = chipKeyMap[cmd.id];
    return k ? t(`simulator.${k}`, cmd.chip) : cmd.chip;
  };

  const startSimulation = (cmd) => {
    setSelectedCommand(cmd);
    setIsRunning(true);
    setCurrentStepIndex(0);

    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev >= cmd.steps.length - 1) {
          clearInterval(stepInterval);
          setIsRunning(false);
          return cmd.steps.length - 1;
        }
        return prev + 1;
      });
    }, 450);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const lower = customInput.toLowerCase();
    let matched = SIMULATOR_COMMANDS[0];
    if (lower.includes("youtube") || lower.includes("music") || lower.includes("song") || lower.includes("গান") || lower.includes("গান বাজাও")) {
      matched = SIMULATOR_COMMANDS[1];
    } else if (lower.includes("undo") || lower.includes("delete") || lower.includes("recycle") || lower.includes("ফাইল") || lower.includes("মুছে")) {
      matched = SIMULATOR_COMMANDS[2];
    } else if (lower.includes("phone") || lower.includes("whatsapp") || lower.includes("rahul") || lower.includes("ফোন") || lower.includes("মেসেজ")) {
      matched = SIMULATOR_COMMANDS[3];
    }

    startSimulation(matched);
    setCustomInput("");
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden bg-[#050811]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00F2FF]/5 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>{t("simulator.tag", "INTERACTIVE COMMAND CENTER PLAYGROUND")}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t("simulator.title", "Try A Command & Watch Supervex Think")}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            {t("simulator.subtitle", "Select an autonomous scenario or type your own request. Experience how the CEO Agent orchestrates sub-agents, executes system tools, and feeds back spoken confirmation in milliseconds.")}
          </p>

          {/* Interactive Clickable Prompt Chips */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
            {SIMULATOR_COMMANDS.map((cmd) => {
              const isSelected = selectedCommand.id === cmd.id;
              const displayChip = getLocalizedChip(cmd);
              return (
                <button
                  key={cmd.id}
                  onClick={() => startSimulation(cmd)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                    isSelected
                      ? "bg-[#00F2FF]/15 text-[#00F2FF] border-[#00F2FF]/60 shadow-glow-cyan/40 scale-[1.02]"
                      : "bg-[#0a0f1d] text-slate-300 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <Sparkles className={`w-3 h-3 ${isSelected ? "text-[#00F2FF]" : "text-slate-500"}`} />
                  <span>"{displayChip}"</span>
                </button>
              );
            })}
          </div>

          {/* Custom Command Input Field */}
          <form onSubmit={handleCustomSubmit} className="pt-2 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder={t("simulator.placeholder", 'Or type any natural voice instruction (e.g. "Empty Recycle Bin and check phone battery")...')}
                className="w-full px-4 py-3 pl-11 pr-24 rounded-xl bg-[#0a0f1d]/90 border border-white/10 focus:border-[#00F2FF] focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 font-mono transition-colors"
              />
              <Terminal className="absolute left-3.5 w-4 h-4 text-slate-500" />
              <button
                type="submit"
                className="absolute right-2 px-3 py-1.5 rounded-lg bg-[#00F2FF] hover:bg-cyan-300 text-slate-950 font-bold text-xs font-mono transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
              >
                <span>{t("simulator.execute_btn", "Execute")}</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          </form>

        </div>

        {/* Live Simulator Glass Console */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#070b16]/95 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
          
          {/* Top Console Bar */}
          <div className="px-4 sm:px-6 py-3.5 bg-[#0a0f1d] border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="h-4 w-px bg-white/10 mx-1" />
              <span className="text-xs font-mono text-slate-300 font-semibold">
                {t("simulator.active_route", "Active Route:")} <span className="text-[#00F2FF]">{t(`simulator.route_${selectedCommand.id}`, selectedCommand.targetAgent)}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                {t(`simulator.badge_${selectedCommand.id}`, selectedCommand.statusBadge)}
              </span>
              <button
                onClick={() => startSimulation(selectedCommand)}
                disabled={isRunning}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <RotateCcw className={`w-3 h-3 ${isRunning ? "animate-spin text-[#00F2FF]" : ""}`} />
                <span>{isRunning ? t("simulator.executing_btn", "Executing...") : t("simulator.replay_btn", "Replay")}</span>
              </button>
            </div>
          </div>

          {/* Interactive Steps Pipeline */}
          <div className="p-4 sm:p-6 space-y-4">
            
            {/* Simulation Steps */}
            <div className="space-y-2.5">
              {selectedCommand.steps.map((step, idx) => {
                const isStepActive = idx <= currentStepIndex;
                const isCurrent = idx === currentStepIndex && isRunning;
                const stepTitle = t(`simulator.${selectedCommand.id}_s${step.step}_t`, step.title);
                const stepDetail = t(`simulator.${selectedCommand.id}_s${step.step}_d`, step.detail);

                return (
                  <div
                    key={step.step}
                    className={`p-3.5 rounded-xl border transition-all duration-300 flex items-start gap-3 ${
                      isStepActive
                        ? "bg-[#0a0f1d] border-cyan-500/30"
                        : "bg-white/[0.01] border-white/5 opacity-40"
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                      isCurrent
                        ? "bg-[#00F2FF] text-slate-950 animate-pulse"
                        : isStepActive
                        ? "bg-cyan-500/20 text-[#00F2FF]"
                        : "bg-white/5 text-slate-500"
                    }`}>
                      {step.step}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-slate-200">
                          {stepTitle}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          {isCurrent ? t("simulator.status_running", "RUNNING") : isStepActive ? t("simulator.status_done", "DONE") : t("simulator.status_pending", "PENDING")}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        {stepDetail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Spoken Voice Confirmation Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#00F2FF]/10 via-[#7C3AED]/15 to-[#00F2FF]/10 border border-[#00F2FF]/30 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00F2FF]/20 border border-[#00F2FF]/40 flex items-center justify-center shrink-0">
                <Volume2 className="w-4 h-4 text-[#00F2FF]" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#00F2FF] block font-bold mb-0.5">
                  {t("simulator.voice_response", "Spoken Voice Confirmation")}
                </span>
                <p className="text-xs font-mono text-slate-200 italic leading-relaxed">
                  "{t(`simulator.voice_${selectedCommand.id}`, selectedCommand.voiceResponse)}"
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
export default CommandSimulator;
