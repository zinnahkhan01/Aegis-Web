import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
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
  const { t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState('ceo');

  const nodes = {
    ceo: {
      title: t('architecture.ceo_title', 'CEO Agent (Supervex Core Brain)'),
      tag: t('architecture.core_hub', 'CENTRALIZED ORCHESTRATOR'),
      desc: t('architecture.ceo_desc', 'The primary cognitive hub. It intercepts user goals via streaming voice or text, parses multi-step intent, decomposes complex objectives into discrete dependency graphs, dispatches instructions to specialized sub-agents, and reconciles state telemetry.'),
      tech: t('architecture.ceo_tech', 'Gemini 2.5 Flash / Pro Reasoning • Async Pipeline • Directed Acyclic Graph (DAG) Dispatcher')
    },
    voice: {
      title: t('architecture.sub_voice', 'Voice & Audio Engine'),
      tag: 'DUPLEX STREAMING',
      desc: t('architecture.desc_voice', 'Manages bidirectional audio frames with Google Gemini Live API. Implements client-side Voice Activity Detection (VAD) to allow continuous natural voice interruption without waiting for completion.'),
      tech: '48kHz PCM Audio • Silero VAD / WebRTC • Gemini Live WebSockets'
    },
    browser: {
      title: t('architecture.sub_browser', 'Browser Stealth Agent'),
      tag: 'PLAYWRIGHT AUTOMATION',
      desc: t('architecture.desc_browser', 'Runs hardened Playwright instances with anti-fingerprinting patches. Intercepts video ad packets, controls YouTube playback directly, and scrapes deep web research while remaining undetected.'),
      tech: 'Playwright Headless/Headed • Network Request Routing • Ad-Block Socket Drop'
    },
    adb: {
      title: t('architecture.sub_mobile', 'Supervex Mobile Companion'),
      tag: 'WIRELESS ADB DAEMON',
      desc: t('architecture.desc_mobile', 'Bridges your desktop with your Android phone over local TCP port 5555. Dispatches keyguard unlocks with automated PIN typing, executes accessibility touch gestures, and sends SMS messages.'),
      tech: 'Android Debug Bridge (ADB) • Android Accessibility Service • TCP Socket Daemon'
    },
    file: {
      title: t('architecture.sub_file', 'Advanced File Agent'),
      tag: 'TRANSACTIONAL STORAGE',
      desc: t('architecture.desc_file', 'Spatial directory memory allows back navigation like a human user. Intercepts deletes with transactional SQLite snapshots, sends files safely to Windows Recycle Bin, and provides instant single-command undo.'),
      tech: 'Win32 Shell API • SQLite WAL Journal • Safe-Execution Sandboxing'
    },
    vision: {
      title: t('architecture.sub_vision', 'Vision & Environmental Agent'),
      tag: 'MULTI-MODAL PERCEPTION',
      desc: t('architecture.desc_vision', 'Perceives the digital and physical environment on demand. Takes instantaneous RAM snapshots of your display monitor to debug code or summarizes webcam feeds with zero disk writes.'),
      tech: 'Ephemeral In-Memory Frame Buffer • Gemini 2.5 Flash Vision • Zero Disk Writes'
    },
    desktop: {
      title: t('architecture.sub_desktop', 'Desktop Control & CLI Dispatcher'),
      tag: 'WIN32 OS INTERACTION',
      desc: t('architecture.desc_desktop', 'Interacts natively with the Windows OS. Spawns desktop software processes, focuses target windows, simulates natural keyboard typing, and executes sandboxed PowerShell/CLI commands.'),
      tech: 'Win32 Shell Hook • Windows Process API • Sandboxed PowerShell Runtime'
    }
  };

  const subAgents = [
    { id: 'voice', icon: Mic, label: t('architecture.sub_voice', 'Voice Duplex'), color: 'text-[#00F2FF]', border: 'border-cyan-500/30' },
    { id: 'browser', icon: Globe, label: t('architecture.sub_browser', 'Stealth Browser'), color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { id: 'adb', icon: Smartphone, label: t('architecture.sub_mobile', 'Mobile ADB'), color: 'text-emerald-400', border: 'border-emerald-500/30' },
    { id: 'file', icon: FolderArchive, label: t('architecture.sub_file', 'File Agent'), color: 'text-violet-400', border: 'border-violet-500/30' },
    { id: 'vision', icon: Eye, label: t('architecture.sub_vision', 'Vision Multi-Modal'), color: 'text-[#00F2FF]', border: 'border-cyan-500/30' },
    { id: 'desktop', icon: Terminal, label: t('architecture.sub_desktop', 'Desktop Agent'), color: 'text-violet-300', border: 'border-violet-500/30' }
  ];

  return (
    <section id='architecture' className='py-24 relative overflow-hidden bg-[#070b16] border-y border-white/5'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        
        {/* Section Header */}
        <div className='text-center max-w-3xl mx-auto mb-16 space-y-4'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono'>
            <GitBranch className='w-3.5 h-3.5 text-violet-400' />
            <span>{t('architecture.tag', 'SYSTEM ARCHITECTURE & TELEMETRY')}</span>
          </div>

          <h2 className='font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white'>
            {t('architecture.title', 'Centralized CEO Brain & Autonomous Pipeline')}
          </h2>

          <p className='text-slate-400 text-base sm:text-lg'>
            {t('architecture.subtitle', 'A multi-layered neural architecture delegating complex desktop, web, and mobile tasks with local IPC speed.')}
          </p>
        </div>

        {/* Interactive Architecture Map */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
          
          {/* Visual Architecture Tree */}
          <div className='lg:col-span-7 space-y-4'>
            
            {/* CEO Agent Main Hub */}
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
                    <span className='text-[10px] font-mono text-cyan-300 block'>{t('architecture.core_hub', 'CORE COGNITIVE HUB')}</span>
                    <h3 className='font-display text-lg font-bold text-white'>{t('architecture.ceo_title', 'CEO Agent Orchestrator')}</h3>
                  </div>
                </div>
                <span className='text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'>
                  {t('architecture.dag_ready', 'DAG DISPATCHER READY')}
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
                    <span className='text-[10px] font-mono text-slate-500'>{t('architecture.autonomous_unit', 'Autonomous Unit')}</span>
                  </button>
                );
              })}
            </div>

            {/* Safe Execution Target Sandbox */}
            <div className='p-3.5 rounded-xl bg-[#050811] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400'>
              <span className='flex items-center gap-1.5 text-slate-300'>
                <ShieldCheck className='w-4 h-4 text-emerald-400' />
                {t('architecture.sandbox_label', 'EXECUTION TARGET SANDBOX')}
              </span>
              <span>{t('architecture.sandbox_targets', 'Windows 10/11 Win32 • Android 10+ ADB • Chromium')}</span>
            </div>

          </div>

          {/* Interactive Node Deep-Dive Inspector */}
          <div className='lg:col-span-5'>
            <div className='rounded-2xl bg-[#0a0f1d]/90 border border-white/10 p-6 space-y-5 shadow-glass-card'>
              <div className='flex items-center justify-between border-b border-white/5 pb-4'>
                <div className='flex items-center gap-2'>
                  <Activity className='w-4 h-4 text-[#00F2FF]' />
                  <span className='text-xs font-mono text-[#00F2FF]'>{t('architecture.inspector_tag', 'TELEMETRY INSPECTOR')}</span>
                </div>
                <span className='text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400'>
                  {nodes[selectedNode]?.tag || 'SUB-AGENT'}
                </span>
              </div>

              <div>
                <h3 className='font-display text-xl font-bold text-white mb-2'>
                  {nodes[selectedNode]?.title || 'Supervex Component'}
                </h3>
                <p className='text-sm text-slate-300 leading-relaxed'>
                  {nodes[selectedNode]?.desc || 'Click on any node in the diagram to inspect its internal logic and communication protocols.'}
                </p>
              </div>

              <div className='p-4 rounded-xl bg-[#050811] border border-white/5 space-y-2'>
                <span className='text-[11px] font-mono text-cyan-300 block font-semibold'>
                  {t('architecture.stack_label', 'UNDERLYING STACK & PROTOCOLS:')}
                </span>
                <p className='text-xs font-mono text-slate-400 leading-relaxed'>
                  {nodes[selectedNode]?.tech || 'Direct OS API Integration'}
                </p>
              </div>

              <div className='space-y-2 text-xs font-mono text-slate-400'>
                <div className='flex items-center justify-between p-2 rounded bg-white/[0.02]'>
                  <span>{t('architecture.ipc_latency', 'IPC Latency:')}</span>
                  <span className='text-emerald-400'>&lt; 1.8ms (Local Socket)</span>
                </div>
                <div className='flex items-center justify-between p-2 rounded bg-white/[0.02]'>
                  <span>{t('architecture.data_redaction', 'Data Redaction:')}</span>
                  <span className='text-cyan-300'>Active (Credentials Redacted)</span>
                </div>
                <div className='flex items-center justify-between p-2 rounded bg-white/[0.02]'>
                  <span>{t('architecture.fallback_routine', 'Fallback Routine:')}</span>
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
export default Architecture;
