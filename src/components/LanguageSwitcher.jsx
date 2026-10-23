import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check, Search, X } from 'lucide-react';
import { useLanguage, SUPPORTED_LANGUAGES } from '../context/LanguageContext';

export function LanguageSwitcher({ isMobile = false }) {
  const { currentLang, setLanguage, activeLangObj, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const filteredLanguages = SUPPORTED_LANGUAGES.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
    setSearchQuery('');
  };

  const triggerClasses = isMobile 
    ? 'w-full bg-[#0a0f1d] border-white/10 text-slate-200 py-2.5 px-3.5'
    : 'bg-[#0a0f1d]/70 hover:bg-[#0f172a] border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white backdrop-blur-md shadow-sm';

  return (
    <div className={`relative ${isMobile ? 'w-full' : 'inline-block'}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer text-xs font-mono select-none ${triggerClasses} ${isOpen ? 'border-cyan-500/60 ring-1 ring-cyan-500/30' : ''}`}
      >
        <span className="flex items-center gap-2">
          <span className="text-sm leading-none">{activeLangObj.flag}</span>
          <span className="font-sans font-medium text-xs tracking-tight">{activeLangObj.name}</span>
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute z-50 mt-2 rounded-2xl bg-[#070b16]/95 border border-cyan-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,242,255,0.15)] backdrop-blur-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 ${
          isMobile ? 'left-0 right-0 max-h-80' : 'right-0 w-72'
        }`}>
          <div className="p-3 border-b border-white/10 bg-[#0a0f1d]/90">
            <div className="flex items-center justify-between pb-2">
              <span className="text-[11px] font-mono font-bold tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#00F2FF]" />
                {t('toast.selectLang', 'Select Language')}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {SUPPORTED_LANGUAGES.length} Languages
              </span>
            </div>

            <div className="relative mt-1">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country or language..."
                autoFocus
                className="w-full bg-black/60 border border-white/10 rounded-lg pl-8 pr-7 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-500/60 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto p-1.5 space-y-0.5 custom-scrollbar">
            {filteredLanguages.length === 0 ? (
              <div className="p-4 text-center text-xs text-slate-400 font-mono">
                No matching language found
              </div>
            ) : (
              filteredLanguages.map((lang) => {
                const isSelected = lang.code === currentLang;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-500/20 to-[#7C3AED]/20 border border-cyan-500/40 text-cyan-200'
                        : 'hover:bg-white/5 text-slate-300 hover:text-white border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-base shrink-0 leading-none">{lang.flag}</span>
                      <div className="flex flex-col min-w-0">
                        <span className="font-sans text-xs font-semibold tracking-tight text-white truncate">
                          {lang.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono truncate">
                          {lang.englishName}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
