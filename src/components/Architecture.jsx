import React, { useState } from 'react';
import { 
  Cpu, 
  Mic, 
  Terminal, 
  Globe, 
  Smartphone, 
  FolderArchive, 
  Eye, 
  ShieldCheck, 
  Activity, 
  GitBranch
} from 'lucide-react';

export function Architecture() {
  const [selectedNode, setSelectedNode] = useState('ceo');

  const nodes = {
    ceo: {
      title: 'CEO Agent (Aegis Core Brain)',
      tag: 'CENTRALIZED ORCHESTRATOR',
      desc: 'The primary cognitive hub. It intercepts user goals via streaming voice or text, parses multi-step intent, decomposes complex objectives into discrete dependency graphs, dispatches instructions to specialized sub-agents, and reconciles state telemetry.',
      tech: 'Gemini 2.5 Flash / Pro Reasoning • Async Pipeline • Directed Acyclic Graph (DAG) Dispatcher'
    },
    voice: {
      title: 'Voice & Audio Engine',
      tag: 'DUPLEX STREAMING',
      desc: 'Manages bidirectional audio frames with Google Gemini Live API. Implements client-side Voice Activity Detection (VAD) to allow continuous natural voice interruption without waiting for completion.',
      tech: '48kHz PCM Audio • Silero VAD / WebRTC • Gemini Live WebSockets'
    },
    browser: {
      title: 'Browser Stealth Agent',
      tag: 'PLAYWRIGHT AUTOMATION',
      desc: 'Runs hardened Playwright instances with anti-fingerprinting patches. Intercepts video ad packets, controls YouTube playback directly, and scrapes deep web research while remaining undetected.',
      tech: 'Playwright Headless/Headed • Network Request Routing • Ad-Block Socket Drop'
    },
    adb: {
      title: 'Aegis Mobile Companion',
      tag: 'WIRELESS ADB DAEMON',
      desc: 'Bridges your desktop with your Android phone over local TCP port 5555. Dispatches keyguard unlocks with automated PIN typing, executes accessibility touch gestures, and sends SMS messages.',
      tech: 'Android Debug Bridge (ADB) • Android Accessibility Service • TCP Socket Daemon'
    },
    file: {
      title: 'Advanced File Agent',
      tag: 'TRANSACTIONAL STORAGE',
      desc: 'Spatial directory memory allows back navigation like a human user. Intercepts deletes with transactional SQLite snapshots, sends files safely to Windows Recycle Bin, and provides instant single-command undo.',
      tech: 'Win32 Shell API • SQLite WAL Journal • Safe-Execution Sandboxing'
    },
    vision: {
      title: 'Vision & Environmental Agent',
      tag: 'MULTI-MODAL PERCEPTION',
      desc: 'Perceives the digital and physical environment on demand. Takes single-frame desktop screenshots (see_screen) or webcam captures (see_camera), extracts UI widgets and bugs, and disposes frames from RAM immediately.',
      tech: 'Desktop Frame Buffer • OpenCV / UVC Camera Capture • Zero-Disk Storage'
    }
  };

  const subAgents = [
    { id: 'voice', label: 'Voice Engine', icon: Mic, color: 'text-[#00F2FF]', border: 'border-cyan-500/40' },
    { id: 'browser', label: 'Browser Agent', icon: Globe, color: 'text-cyan-400', border: 'border-cyan-400/40' },
    { id: 'adb', label: 'Mobile Companion', icon: Smartphone, color: 'text-emerald-400', border: 'border-emerald-500/40' },
    { id: 'file', label: 'File Management', icon: FolderArchive, color: 'text-violet-400', border: 'border-violet-500/40' },
    { id: 'vision', label: 'Vision Core', icon: Eye, color: 'text-[#00F2FF]', border: 'border-cyan-500/40' },
    { id: 'desktop', label: 'Desktop Runner', icon: Terminal, color: 'text-amber-400', border: 'border-amber-500/40' },
  ];

  return (
    <section id='architecture' className='py-24 relative overflow-hidden bg-[#070b16] border-y border-white/5'>
      <div className='absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none' />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/30 text-[#00F2FF] text-xs font-mono'>
            <GitBranch className='w-3.5 h-3.5' />
            <span>DECOUPLED AGENT ORCHESTRATION</span>
          </div>

          <h2 className='font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white'>
            How The CEO Agent{' '}
            <span className='bg-gradient-to-r from-[#00F2FF] via-cyan-200 to-[#7C3AED] bg-clip-text text-transparent'>
              Controls Your Stack
            </span>
          </h2>

          <p className='text-slate-400 text-base sm:text-lg'>
            Unlike rigid single-purpose scripts, Aegis uses a resilient multi-tier architecture where specialized micro-agents operate in parallel under strict safety guardrails.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
          
          {/* Visual Architecture Tree */}
          <div className='lg:col-span-7 space-y-4'>
            
            {/* Input Tier */}
            <div className='p-4 rounded-xl bg-[#0a0f1d] border border-white/10 flex flex-wrap items-center justify-between gap-3'>
              <span className='text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider'>
                1. Multi-Modal Ingestion
              </span>
              <div className='flex items-center gap-2'>
                <span className='px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-cyan-300 border border-white/5 flex items-center gap-1.5'>
                  <Mic className='w-3 h-3 text-[#00F2FF]' /> Gemini Live Mic
                </span>
                <span className='px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-violet-300 border border-white/5 flex items-center gap-1.5'>
                  <Terminal className='w-3 h-3 text-violet-400' /> CLI / Text
                </span>
                <span className='px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-emerald-300 border border-white/5 flex items-center gap-1.5'>
                  <Eye className='w-3 h-3 text-emerald-400' /> Screen & Cam
                </span>
              </div>
            </div>

            {/* Connecting Pipe */}
            <div className='flex justify-center'>
              <div className='w-0.5 h-6 bg-gradient-to-b from-[#00F2FF] to-[#7C3AED]' />
            </div>

            {/* CEO Agent Hub */}
            <div 
              onClick={() => setSelectedNode('ceo')}
              className={'p-6 rounded-2xl cursor-pointer transition-all duration-300 border ' + (
                selectedNode === 'ceo'
                  ? 'bg-gradient-to-r from-[#00F2FF]/15 via-[#7C3AED]/20 to-[#00F2FF]/15 border-[#00F2FF] shadow-glow-cyan'
                  : 'bg-[#0a0f1d] border-white/10 hover:border-white/30'
              )}
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F2FF]/20 to-[#7C3AED]/30 border border-[#00F2FF]/40 flex items-center justify-center'>
                    <Cpu className='w-6 h-6 text-[#00F2FF] animate-pulse' />
                  </div>
                  <div>
                    <span className='text-[10px] font-mono text-cyan-300 block'>CORE COGNITIVE HUB</span>
                    <h3 className='font-display text-lg font-bold text-white'>CEO Agent Orchestrator</h3>
                  </div>
                </div>
                <span className='text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'>
                  DAG DISPATCHER READY
                </span>
              </div>
            </div>

            {/* Connecting Fork */}
            <div className='flex justify-center'>
              <div className='w-0.5 h-6 bg-gradient-to-b from-[#7C3AED] to-cyan-500' />
            </div>

            {/* Sub-Agents Grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
              {subAgents.map((sub) => {
                const Icon = sub.icon;
                const isSelected = selectedNode === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedNode(sub.id)}
                    className={'p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer border ' + (
                      isSelected
                        ? 'bg-white/[0.08] ' + sub.border + ' shadow-lg shadow-cyan-500/10'
                        : 'bg-[#0a0f1d]/80 border-white/5 hover:border-white/20'
                    )}
                  >
                    <Icon className={'w-4 h-4 ' + sub.color + ' mb-2'} />
                    <span className='block text-xs font-mono font-bold text-slate-200'>{sub.label}</span>
                    <span className='text-[10px] font-mono text-slate-500'>Autonomous Unit</span>
                  </button>
                );
              })}
            </div>

            {/* Safe Execution Target Sandbox */}
            <div className='p-3.5 rounded-xl bg-[#050811] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400'>
              <span className='flex items-center gap-1.5 text-slate-300'>
                <ShieldCheck className='w-4 h-4 text-emerald-400' />
                EXECUTION TARGET SANDBOX
              </span>
              <span>Windows 10/11 Win32 • Android 10+ ADB • Chromium</span>
            </div>

          </div>

          {/* Interactive Node Deep-Dive Inspector */}
          <div className='lg:col-span-5'>
            <div className='rounded-2xl bg-[#0a0f1d]/90 border border-white/10 p-6 space-y-5 shadow-glass-card'>
              <div className='flex items-center justify-between border-b border-white/5 pb-4'>
                <div className='flex items-center gap-2'>
                  <Activity className='w-4 h-4 text-[#00F2FF]' />
                  <span className='text-xs font-mono text-[#00F2FF]'>TELEMETRY INSPECTOR</span>
                </div>
                <span className='text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400'>
                  {nodes[selectedNode]?.tag || 'SUB-AGENT'}
                </span>
              </div>

              <div>
                <h3 className='font-display text-xl font-bold text-white mb-2'>
                  {nodes[selectedNode]?.title || 'Aegis Component'}
                </h3>
                <p className='text-sm text-slate-300 leading-relaxed'>
                  {nodes[selectedNode]?.desc || 'Click on any node in the diagram to inspect its internal logic and communication protocols.'}
                </p>
              </div>

              <div className='p-4 rounded-xl bg-[#050811] border border-white/5 space-y-2'>
                <span className='text-[11px] font-mono text-cyan-300 block font-semibold'>
                  UNDERLYING STACK & PROTOCOLS:
                </span>
                <p className='text-xs font-mono text-slate-400 leading-relaxed'>
                  {nodes[selectedNode]?.tech || 'Direct OS API Integration'}
                </p>
              </div>

              <div className='space-y-2 text-xs font-mono text-slate-400'>
                <div className='flex items-center justify-between p-2 rounded bg-white/[0.02]'>
                  <span>IPC Latency:</span>
                  <span className='text-emerald-400'>&lt; 1.8ms (Local Socket)</span>
                </div>
                <div className='flex items-center justify-between p-2 rounded bg-white/[0.02]'>
                  <span>Data Redaction:</span>
                  <span className='text-cyan-300'>Active (Credentials Redacted)</span>
                </div>
                <div className='flex items-center justify-between p-2 rounded bg-white/[0.02]'>
                  <span>Fallback Routine:</span>
                  <span className='text-slate-300'>Graceful Recovery Handler</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
