import React, { useState } from "react";
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
  const [selectedCommand, setSelectedCommand] = useState(SIMULATOR_COMMANDS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(4);
  const [customInput, setCustomInput] = useState("");
  const [showJsonCall, setShowJsonCall] = useState(false);

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

    // Map custom text to most relevant pre-set simulation
    const lower = customInput.toLowerCase();
    let matched = SIMULATOR_COMMANDS[0];
    if (lower.includes("youtube") || lower.includes("music") || lower.includes("song")) {
      matched = SIMULATOR_COMMANDS[1];
    } else if (lower.includes("undo") || lower.includes("file") || lower.includes("delete") || lower.includes("recycle")) {
      matched = SIMULATOR_COMMANDS[2];
    } else if (lower.includes("phone") || lower.includes("whatsapp") || lower.includes("message") || lower.includes("rahul")) {
      matched = SIMULATOR_COMMANDS[3];
    }

    const dynamicCmd = {
      ...matched,
      chip: customInput,
      voiceResponse: `Understood. Executing: "${customInput}" across active Supervex sub-agents.`
    };

    startSimulation(dynamicCmd);
  };

  return (
    <section id="simulator" className="py-24 relative overflow-hidden bg-[#050811]">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00F2FF]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#7C3AED]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE COMMAND CENTER PLAYGROUND</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Try A Command &{" "}
            <span className="bg-gradient-to-r from-[#00F2FF] to-[#7C3AED] bg-clip-text text-transparent">
              Watch Supervex Think
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Select an autonomous scenario or type your own request. Experience how the CEO Agent orchestrates sub-agents, executes system tools, and feeds back spoken confirmation in milliseconds.
          </p>

          {/* Interactive Clickable Prompt Chips */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5">
            {SIMULATOR_COMMANDS.map((cmd) => {
              const isSelected = selectedCommand.id === cmd.id;
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
                  <span>"{cmd.chip}"</span>
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
                placeholder='Or type any natural voice instruction (e.g. "Empty Recycle Bin and check phone battery")...'
                className="w-full px-4 py-3 pl-11 pr-24 rounded-xl bg-[#0a0f1d]/90 border border-white/10 focus:border-[#00F2FF] focus:outline-none text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 font-mono transition-colors"
              />
              <Terminal className="absolute left-3.5 w-4 h-4 text-slate-500" />
              <button
                type="submit"
                className="absolute right-2 px-3 py-1.5 rounded-lg bg-[#00F2FF] hover:bg-cyan-300 text-slate-950 font-bold text-xs font-mono transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Execute</span>
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
                Active Route: <span className="text-[#00F2FF]">{selectedCommand.targetAgent}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                {selectedCommand.statusBadge}
              </span>
              <button
                onClick={() => startSimulation(selectedCommand)}
                disabled={isRunning}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <RotateCcw className={`w-3 h-3 ${isRunning ? "animate-spin text-[#00F2FF]" : ""}`} />
                <span>{isRunning ? "Executing..." : "Replay"}</span>
              </button>
            </div>
          </div>

          {/* Workflow Stepper Grid */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: 5-Stage Orchestration Timeline */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#7C3AED]" />
                  CEO AGENT DISPATCH PIPELINE
                </span>
                <span className="text-[10px] font-mono text-emerald-400">
                  {isRunning ? "PROCESSING" : "STAGE 5/5 COMPLETE"}
                </span>
              </div>

              {/* Steps List */}
              <div className="space-y-2.5">
                {selectedCommand.steps.map((st, i) => {
                  const isDone = i <= currentStepIndex;
                  const isCurrent = i === currentStepIndex && isRunning;

                  return (
                    <div
                      key={st.step}
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        isCurrent
                          ? "bg-[#00F2FF]/10 border-[#00F2FF]/50 shadow-glow-cyan/20 scale-[1.01]"
                          : isDone
                          ? "bg-[#0a0f1d]/80 border-white/10"
                          : "bg-[#050811]/60 border-white/5 opacity-40"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                            isDone ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-white/5 text-slate-500"
                          }`}>
                            {isDone ? "?" : st.step}
                          </span>
                          <span className={`text-xs font-mono font-bold ${isCurrent ? "text-[#00F2FF]" : isDone ? "text-white" : "text-slate-500"}`}>
                            {st.title}
                          </span>
                        </div>
                        {isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-[#00F2FF] animate-ping" />
                        )}
                      </div>
                      <p className="text-xs text-slate-400 font-sans pl-7">
                        {st.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Gemini Live Synthesized Audio Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#00F2FF]/10 via-[#7C3AED]/10 to-transparent border border-[#00F2FF]/30 mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 font-semibold">
                    <Volume2 className="w-4 h-4 text-[#00F2FF]" />
                    GEMINI LIVE SPOKEN RESPONSE
                  </span>
                  <div className="flex items-center gap-1">
                    {[6, 14, 20, 12, 18, 8, 14].map((h, idx) => (
                      <span
                        key={idx}
                        className="w-1 bg-[#00F2FF] rounded-full audio-bar"
                        style={{ height: `${h}px`, animationDuration: `${0.8 + idx * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-mono text-slate-200 italic leading-relaxed">
                  "{selectedCommand.voiceResponse}"
                </p>
              </div>

            </div>

            {/* Right Column: Real-Time Cyber Terminal Stream */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3">
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#00F2FF]" />
                    LIVE RUNTIME TELEMETRY LOGS
                  </span>
                  <button
                    onClick={() => setShowJsonCall(!showJsonCall)}
                    className="text-[10px] font-mono text-cyan-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <Code className="w-3 h-3" />
                    <span>{showJsonCall ? "View Raw Logs" : "View Tool Payload"}</span>
                  </button>
                </div>

                {/* Console Output Box */}
                {!showJsonCall ? (
                  <div className="p-4 rounded-xl bg-[#020409] border border-white/10 font-mono text-[11px] leading-relaxed space-y-2 h-[290px] overflow-y-auto">
                    {selectedCommand.logs.map((log, index) => {
                      let color = "text-slate-400";
                      if (log.includes("SUCCESS")) color = "text-emerald-400 font-bold";
                      else if (log.includes("AUDIO_IN")) color = "text-cyan-300";
                      else if (log.includes("CEO_BRAIN")) color = "text-violet-400";
                      else if (log.includes("BLOCKED") || log.includes("AD_SHIELD")) color = "text-amber-400";
                      else if (log.includes("DESKTOP") || log.includes("ADB") || log.includes("FILE")) color = "text-cyan-200";

                      return (
                        <div key={index} className={color}>
                          {log}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#020409] border border-white/10 font-mono text-[11px] text-cyan-200 h-[290px] overflow-y-auto">
                    <div className="text-slate-500 mb-2">// Dispatched Tool Call Contract</div>
                    <pre className="whitespace-pre text-slate-300">
                      {JSON.stringify(selectedCommand.toolCall, null, 2)}
                    </pre>
                  </div>
                )}
              </div>

              {/* Execution Summary Pill */}
              <div className="p-3 rounded-xl bg-[#0a0f1d] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  EXECUTION DURATION:
                </span>
                <span className="text-emerald-400 font-bold font-mono">{selectedCommand.duration} (Sub-Second Flow)</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
