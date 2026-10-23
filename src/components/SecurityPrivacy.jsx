import React from "react";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  HardDrive, 
  KeyRound,
  CheckCircle2
} from "lucide-react";

export function SecurityPrivacy() {
  const securityPillars = [
    {
      icon: HardDrive,
      title: "100% Local Database Storage",
      color: "text-[#00F2FF]",
      border: "border-cyan-500/30",
      description: "All transactional file history, task queues, and user configurations are stored locally inside %APPDATA%\\SupervexAI on your machine in encrypted SQLite databases. Zero cloud sync required."
    },
    {
      icon: EyeOff,
      title: "Zero Telemetry Leaks",
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      description: "Supervex AI contains no tracking cookies, analytics SDKs, or cloud telemetry beacons. Your prompts, voice audio, and files remain strictly your own property."
    },
    {
      icon: Lock,
      title: "Safe Execution Sandbox",
      color: "text-violet-400",
      border: "border-violet-500/30",
      description: "Critical operating system paths (C:\\Windows, System32, Program Files) are hard-coded as immutable roots. Sub-agents are prevented by software guardrails from modifying protected system structures."
    },
    {
      icon: KeyRound,
      title: "Ephemeral Vision in RAM",
      color: "text-amber-400",
      border: "border-amber-500/30",
      description: "Display frames captured via see_screen and webcam images from see_camera exist exclusively in volatile memory (RAM) while processing your query and are scrubbed instantly."
    }
  ];

  return (
    <section id="security" className="py-24 relative overflow-hidden bg-[#050811]">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#7C3AED]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00F2FF]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SOVEREIGN DATA INTEGRITY GUARANTEE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Your Desktop, Your Data.{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-[#00F2FF] bg-clip-text text-transparent">
              Zero Compromises.
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Unlike cloud-tethered assistants that siphon your desktop activity to corporate servers, Supervex AI is architected from the ground up for strict local privacy.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {securityPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className={`p-6 sm:p-7 rounded-2xl bg-[#0a0f1d]/80 border ${pillar.border} backdrop-blur-xl relative overflow-hidden group hover:bg-[#0d1424] transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                    <Icon className={`w-6 h-6 ${pillar.color}`} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    HARDENED COMPLIANCE
                  </span>
                  <span>AES-256 ENCRYPTED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
