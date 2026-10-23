import React, { useEffect } from 'react';
import { Globe, Check, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function GeoLanguageToast() {
  const { showToast, detectedInfo, activeLangObj, setLanguage, dismissToast, t } = useLanguage();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        dismissToast(true);
      }, 14000);
      return () => clearTimeout(timer);
    }
  }, [showToast, dismissToast]);

  if (!showToast || !detectedInfo) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm sm:max-w-md w-[calc(100%-2.5rem)] animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto">
      <div className="relative rounded-2xl bg-[#070b16]/95 border border-cyan-500/40 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(0,242,255,0.2)] backdrop-blur-2xl text-xs font-mono">
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-sm pointer-events-none -z-10" />

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-lg shrink-0 mt-0.5">
              {activeLangObj.flag}
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-400 font-bold tracking-wide">
                <Globe className="w-3.5 h-3.5 text-[#00F2FF]" />
                <span>{t('toast.visitingFrom', 'Visiting from')} {detectedInfo.country}</span>
              </div>
              <p className="text-[11px] text-slate-300 font-sans leading-tight">
                {t('toast.languageSwitched', 'Language automatically set to')} <strong className="text-white font-semibold">{activeLangObj.name}</strong> ({activeLangObj.englishName}).
              </p>
            </div>
          </div>

          <button
            onClick={() => dismissToast(true)}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-end gap-2 mt-3 pt-3 border-t border-white/5">
          <button
            onClick={() => setLanguage('en')}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[11px] transition-colors cursor-pointer"
          >
            Switch to English
          </button>

          <button
            onClick={() => dismissToast(true)}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#00F2FF] to-cyan-300 hover:from-cyan-300 hover:to-[#00F2FF] text-slate-950 font-bold text-[11px] shadow-glow-cyan transition-all cursor-pointer flex items-center gap-1"
          >
            <Check className="w-3 h-3 text-slate-950" />
            <span>{t('toast.keep', 'Keep')} {activeLangObj.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GeoLanguageToast;
