import React, { useState, useRef } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw, 
  Upload, 
  Copy, 
  Check, 
  Film, 
  Sparkles, 
  Radio, 
  FileVideo
} from "lucide-react";

export function HeroVideo() {
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [videoSrc, setVideoSrc] = useState("/demo.mp4");
  const [videoError, setVideoError] = useState(false);
  const [copiedPath, setCopiedPath] = useState(false);

  const exactVideoPath = "C:\\Users\\ILLEGEAR\\Desktop\\Aegis-Web\\public\\demo.mp4";

  const handleCopyPath = () => {
    navigator.clipboard.writeText(exactVideoPath);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2500);
  };

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

  const handleCustomFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setVideoError(false);
      setIsLoaded(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
      }, 200);
    }
  };

  const handleVideoLoaded = () => {
    setVideoError(false);
    setIsLoaded(true);
  };

  const handleVideoError = () => {
    // If /demo.mp4 isn't placed yet, trigger fallback placeholder UI
    setVideoError(true);
    setIsPlaying(false);
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
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Film className="w-3.5 h-3.5 text-[#00F2FF]" />
              <span className="font-semibold text-slate-200">aegis://demo-playback.mp4</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-pulse" />
              4K 60FPS AUTONOMOUS DEMO
            </span>

            {/* Quick Upload / Swap Button */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Preview another video file from your computer"
            >
              <Upload className="w-3 h-3 text-[#00F2FF]" />
              <span className="hidden sm:inline">Select Video</span>
            </button>
            <input 
              ref={fileInputRef}
              type="file" 
              accept="video/mp4,video/webm,video/ogg,video/quicktime" 
              className="hidden" 
              onChange={handleCustomFileUpload} 
            />
          </div>
        </div>

        {/* Video Player Display Viewport */}
        <div className="relative aspect-video w-full bg-[#03060d] flex items-center justify-center overflow-hidden">
          
          {/* Native Video Element */}
          <video preload="metadata" playsInline
            ref={videoRef}
            src={videoSrc}
            playsInline
            muted={isMuted}
            loop
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            onClick={togglePlay}
            className={`w-full h-full object-cover transition-opacity duration-500 cursor-pointer ${
              videoError ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />

          {/* Fallback & Helper Placeholder when demo.mp4 is not yet in public folder */}
          {videoError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0a0f1d]/90 via-[#070b16]/95 to-[#050811] z-10 space-y-5">
              
              {/* Animated Halo Center Icon */}
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-[#00F2FF]/20 to-[#7C3AED]/20 blur-xl animate-pulse" />
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.04] border border-[#00F2FF]/40 shadow-glow-cyan/40 flex items-center justify-center cursor-pointer hover:scale-105 hover:border-[#00F2FF] transition-all duration-300 group/btn"
                >
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 text-[#00F2FF] fill-[#00F2FF]/20 ml-1 group-hover/btn:scale-110 transition-transform" />
                </div>
              </div>

              <div className="max-w-xl space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00F2FF]/10 text-cyan-300 text-xs font-mono border border-[#00F2FF]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#00F2FF]" />
                  <span>DEMO VIDEO SLOT READY</span>
                </div>
                
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Aegis-AI Live Action Demo Video
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                  Video will play here automatically. Paste your video file into the path below, or click <strong className="text-[#00F2FF]">Browse Video File</strong> to select it now from your PC.
                </p>
              </div>

              {/* Exact Location Copy Widget */}
              <div className="w-full max-w-lg p-3 rounded-xl bg-[#03060e] border border-white/10 flex flex-wrap items-center justify-between gap-3 text-left">
                <div className="flex items-center gap-2 overflow-hidden">
                  <FileVideo className="w-4 h-4 text-[#00F2FF] shrink-0" />
                  <div className="truncate">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      Target File Destination:
                    </span>
                    <span className="font-mono text-xs text-cyan-200 select-all truncate block">
                      {exactVideoPath}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyPath}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copiedPath ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Path</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Trigger Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00F2FF] to-cyan-400 hover:to-cyan-300 text-slate-950 font-bold text-xs font-mono tracking-wide shadow-glow-cyan transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Browse & Preview Video</span>
                </button>

                <button
                  onClick={() => {
                    setVideoSrc("/demo.mp4");
                    if (videoRef.current) {
                      videoRef.current.load();
                    }
                  }}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                  <span>Reload demo.mp4</span>
                </button>
              </div>

            </div>
          )}

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

          {/* Video Control Bar Overlay (Shows on Hover & When Paused) */}
          {!videoError && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-95 group-hover:opacity-100 transition-opacity z-20 space-y-2">
              
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

        {/* Video Card Bottom Info Pill */}
        <div className="px-4 py-2.5 bg-[#050811] border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Radio className="w-3.5 h-3.5 text-[#00F2FF] animate-pulse" />
              LIVE MULTI-MODAL RECORDING
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-slate-400">
              Desktop + Playwright + Wireless ADB Phone Control
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-slate-500">Location:</span>
            <code className="text-cyan-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
              public/demo.mp4
            </code>
          </div>
        </div>

      </div>

    </div>
  );
}
