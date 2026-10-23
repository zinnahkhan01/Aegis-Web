import React, { useState, useRef } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Radio, 
  Sparkles,
  ShieldCheck
} from "lucide-react";

export function HeroVideo() {
  const videoRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [videoError, setVideoError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setVideoError(false);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 0;
    setProgress(total ? (current / total) * 100 : 0);

    const format = (sec) => {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
    };

    setCurrentTime(format(current));
    if (total) setDuration(format(total));
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 0);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-10 px-2 sm:px-0">
      
      {/* Ambient Neon Backlight Glow */}
      <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#00F2FF]/30 via-[#7C3AED]/30 to-[#00F2FF]/30 blur-2xl opacity-75 transition-all duration-700 pointer-events-none -z-10" />

      {/* Main Glass Video Card */}
      <div className="relative rounded-2xl bg-[#070b16]/95 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden group">
        
        {/* Futuristic Video Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f1d] border-b border-white/5 select-none">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="h-4 w-px bg-white/10 mx-1" />
            <span className="font-mono text-xs font-semibold tracking-wider text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00F2FF]" />
              AEGIS AI :: RUNTIME SHOWCASE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              HD 60FPS
            </span>
          </div>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video bg-[#03060e] flex items-center justify-center overflow-hidden">
          
          <video
            ref={videoRef}
            src="/demo.mp4"
            preload="metadata"
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onError={() => setVideoError(true)}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Floating Center Play Button (When video is loaded but paused) */}
          {!videoError && !isPlaying && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-opacity z-10"
            >
              <div className="w-20 h-20 rounded-full bg-[#00F2FF]/20 border border-[#00F2FF] shadow-glow-cyan flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all">
                <Play className="w-8 h-8 text-[#00F2FF] fill-[#00F2FF] ml-1" />
              </div>
            </div>
          )}

          {/* Fallback if video fails to decode */}
          {videoError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070b16] p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Aegis AI Demonstration</h3>
              <p className="text-xs text-slate-400 max-w-sm">Video stream is buffering from the edge CDN.</p>
              <button
                onClick={() => {
                  setVideoError(false);
                  if (videoRef.current) {
                    videoRef.current.load();
                    videoRef.current.play().catch(() => {});
                  }
                }}
                className="px-4 py-2 rounded-xl bg-[#00F2FF]/20 hover:bg-[#00F2FF]/30 border border-[#00F2FF] text-cyan-300 font-mono text-xs transition-colors cursor-pointer"
              >
                Retry Stream
              </button>
            </div>
          )}

          {/* Video Control Bar Overlay (Shows on Hover & When Paused) */}
          {!videoError && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-95 group-hover:opacity-100 transition-opacity z-20 space-y-2">
              
              {/* Seek Timeline */}
              <div 
                onClick={handleSeek}
                className="relative w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer transition-all overflow-hidden"
              >
                <div 
                  className="h-full bg-gradient-to-r from-[#00F2FF] via-cyan-300 to-[#7C3AED] shadow-glow-cyan rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Buttons Row */}
              <div className="flex items-center justify-between text-white font-mono text-xs">
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={togglePlay} 
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-[#00F2FF]" /> : <Play className="w-4 h-4 text-[#00F2FF] fill-[#00F2FF]" />}
                  </button>

                  <button 
                    onClick={toggleMute} 
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>

                  <span className="text-slate-300 text-[11px]">
                    {currentTime} <span className="text-slate-500">/</span> {duration}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-cyan-300 font-mono hidden sm:inline px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    AUTONOMOUS RUNTIME DEMO
                  </span>

                  <button 
                    onClick={toggleFullscreen} 
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Video Card Bottom Info Pill (Clean, without file path / debug clutter) */}
        <div className="px-4 py-2.5 bg-[#050811] border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Radio className="w-3.5 h-3.5 text-[#00F2FF] animate-pulse" />
              LIVE MULTI-MODAL RECORDING
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-slate-400">
              Windows Desktop • Gemini Live Voice • Wireless ADB Mobile Bridge
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span>Real Hardware Automation</span>
          </div>
        </div>

      </div>

    </div>
  );
}
